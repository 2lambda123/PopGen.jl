"""
    _bootstrapsummary(::Vector{Union{Missing, Float64}}, width::Tuple{Float64, Float64})

Return the mean, median, standard error, and quantiles (given by `witdth`) of kinship resampling.
"""
@inline function _bootstrapsummary(boot_out::Vector{Union{Missing, Float64}}, width::Tuple{Float64, Float64})
    isallmissing(boot_out) == true && return missing, missing, missing, missing
    boot_skipmissing = collect(skipmissing(boot_out))
    n_nonmiss = length(boot_skipmissing)
    Mean = mean(boot_skipmissing)
    Median = median(boot_skipmissing)
    SE = sqrt(sum((boot_skipmissing - (boot_skipmissing / n_nonmiss)).^2) / (n_nonmiss - 1))
    quants = quantile(boot_skipmissing, width)

    return Mean, Median, SE, quants
end

"""
    _bootstrapgenos_all(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}, n_per_loc::Vector{Int}, alleles::NamedTuple; method::Function, iterations::Int)

Perform `iterations` number of bootstrap resampling iterations of all genotypes between pair (`ind1` `ind2`). Returns a vector of length `iterations`
of the kinship estimate given by method `method`. This is an internal function with `locus_names`, `n_per_loc`, and `alleles` supplied by `_kinship_boot_all`.
"""
@inline function _bootstrapgenos_all(ind1::T, ind2::T, locus_names::Vector{Symbol}, n_per_loc::Vector{Int}, alleles::U; method::F, iterations::Int, inbreeding::Bool, n::Int) where T <: GenoArray where U <: NamedTuple where F
    relate_vec_boot = Vector{Union{Missing,Float64}}(undef, iterations)
    n_loc = length(locus_names)
    @sync for iter in 1:iterations
        Base.Threads.@spawn begin
            # bootstrap the indices
            boot_idx = rand(1:n_loc, n_loc)
            # sample the source vectors with the resampled/bootstrapped indices
            ind1_boot, ind2_boot, loc_boot, n_per_loci = map(i -> getindex(i, boot_idx), [ind1, ind2, locus_names, n_per_loc])
            # get index for genotype appearing missing in at least one individual in the pair
            keep_idx = nonmissings(ind1_boot, ind2_boot)
            relate_vec_boot[iter] = method(ind1_boot[keep_idx], ind2_boot[keep_idx], loc_boot[keep_idx], alleles, loc_n = n_per_loci[keep_idx], n_samples = n_loc, inbreeding = inbreeding)
        end
    end
    return relate_vec_boot
end


"""
    _bootstrapgenos_nonmissing(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}, n_per_loc::Vector{Int}, alleles::NamedTuple; method::Function, iterations::Int)

Perform `iterations` number of bootstrap resampling iterations of only shared (nonmissing) genotypes between pair (`ind1` `ind2`). Returns a vector of length `interatotions`
of the kinship estimate given by method `method`. This is an internal function with `locus_names`, `n_per_loc`, and `alleles` supplied by `_kinship_boot_nonmissing`.
"""
@inline function _bootstrapgenos_nonmissing(ind1::T, ind2::T, locus_names::Vector{Symbol}, n_per_loc::Vector{Int}, alleles::U; method::F, iterations::Int, inbreeding::Bool) where T <: GenoArray where U <: NamedTuple where F
    relate_vec_boot = Vector{Union{Missing,Float64}}(undef, iterations)
    n_loc = length(locus_names)
    @sync for iter in 1:iterations
        Base.Threads.@spawn begin
            # bootstrap the indices
            boot_idx = rand(1:n_loc, n_loc)
            # sample the source vectors with the resampled/bootstrapped indices
            ind1_boot, ind2_boot, loc_boot, n_per_loci = map(i -> getindex(i, boot_idx), [ind1, ind2, locus_names, n_per_loc])
            # faster/cheaper n counting
            relate_vec_boot[iter] = method(ind1_boot, ind2_boot, loc_boot, alleles, loc_n = n_per_loci, n_samples = n_loc, inbreeding = inbreeding)
        end
    end
    return relate_vec_boot
end

#FEATURE namedtuple output
"""
    _kinship_boot_all(::PopData, sample_names::Vector{String}; method::Function, iterations::Int, interval::Tuple{Float64, Float64})

Calculate pairwise kinship between all combinations of the provided `sample_names` for each `method` provided. Bootstrapping resamples using
the `all` method, where resampling occurs over all loci. This is an internal function with all arguments provided by `kinship`.
"""
function _kinship_boot_all(data::PopData, sample_names::Vector{T}; method::F, iterations::Int = 100, interval::Tuple{Float64, Float64} = (0.025, 0.975), inbreeding::Bool) where F where T<:AbstractString
    loci_names = Symbol.(loci(data))
    uniq_pops = unique(data.metadata.sampleinfo.population)
    if first(uniq_pops) ∈ ["fullsib", "halfsib", "unrelated", "parent_offspring"]
        sample_pairs = simpairs(sample_names) |> collect
    else
        sample_pairs = pairwisepairs(sample_names) |> collect
    end
    n_pairs = length(sample_pairs)
    n_samples = data.metadata.samples
    allelefrequencies = allelefreq(data)
    n_per_loci = DataFrames.combine(groupby(data.genodata, :locus), :genotype => nonmissing => :n)[:, :n]
    relate_vecs = map(i -> Vector{Union{Missing,Float64}}(undef, n_pairs), 1:length(method))
    boot_means, boot_medians, boot_ses = map(i -> deepcopy(relate_vecs), 1:3)
    boot_CI = map(i -> Vector{Union{Missing,Tuple{Float64,Float64}}}(undef, n_pairs), 1:length(method))
    shared_loci = Vector{Int}(undef, n_pairs)
    #p = Progress(n_pairs*length(method), dt = 1, color = :blue, barglyphs = BarGlyphs("|=> |"), barlen = 30)
    popdata_idx = groupby(data.genodata, :name)
    @inbounds for i in 1:n_pairs
        @inbounds geno1 = popdata_idx[(sample_pairs[i][1],)].genotype
        @inbounds geno2 = popdata_idx[(sample_pairs[i][2],)].genotype
        # get index for genotype appearing missing in at least one individual in the pair
        keep_idx = nonmissings(geno1, geno2)
        # generate nonmissing genotype data 
        gen1, gen2, loc, n_per_loc = (i[keep_idx] for i in (geno1, geno2, loci_names, n_per_loci))
        @inbounds shared_loci[i] = length(keep_idx)
        @sync @inbounds for (j, mthd) in enumerate(method)
            Base.Threads.@spawn begin
                @inbounds relate_vecs[j][i] = mthd(gen1, gen2, loc, allelefrequencies, loc_n = n_per_loci, n_samples = n_samples, inbreeding = inbreeding)
                boot_out = _bootstrapgenos_all(geno1, geno2, loci_names, n_per_loci, allelefrequencies, method = mthd, iterations = iterations, inbreeding = inbreeding, n = j+1)
                @inbounds boot_means[j][i], boot_medians[j][i], boot_ses[j][i], boot_CI[j][i] = _bootstrapsummary(boot_out, interval)
                #pair_text = sample_pairs[i][1] * " × " * sample_pairs[i][2] * "  ($i" * " of " * "$(n_pairs)" * ")"
                #ProgressMeter.next!(p; showvalues = [(:Pair, pair_text), (:Method, mthd)])
            end
        end
    end
    method_colnames = [Symbol("$i") for i in method]
    boot_mean_colnames = [Symbol("$i"*"_mean") for i in method]
    boot_median_colnames = [Symbol("$i"*"_median") for i in method]
    boot_se_colnames = [Symbol("$i"*"_SE") for i in method]
    CI_percent = convert(Int64, round(interval[2] - interval[1], digits = 2) * 100)
    boot_CI_colnames = [Symbol("$i"*"_CI_"*"$CI_percent") for i in method]

    out_dfs = map(method_colnames) do mthod
        DataFrame(:sample_1 => map(i -> i[1], sample_pairs), :sample_2 => map(i -> i[2], sample_pairs), :n_loci => shared_loci)
    end
    @inbounds for (i, mth) in enumerate(method_colnames)
        out_dfs[i][:, mth] = relate_vecs[i]
        out_dfs[i][:, boot_mean_colnames[i]] = boot_means[i]
        out_dfs[i][:, boot_median_colnames[i]] = boot_medians[i]
        out_dfs[i][:, boot_se_colnames[i]] = boot_ses[i]
        out_dfs[i][:, boot_CI_colnames[i]] = boot_CI[i]
    end
    return (; (method_colnames .=> out_dfs)...)
end


"""
    _kinship_boot_nonmissing(::PopData, sample_names::Vector{String}; method::F, iterations::Int, interval::Tuple{Float64, Float64}) where F

Calculate pairwise kinship between all combinations of the provided `sample_names` for each `method` provided. Bootstrapping resamples using
the `nonmissing` method, where resampling occurs over only shared non-missing loci. This is an internal function with all arguments provided by `kinship`.
"""
function _kinship_boot_nonmissing(data::PopData, sample_names::Vector{T}; method::F, iterations::Int, interval::Tuple{Float64, Float64} = (0.025, 0.975), inbreeding::Bool) where F where T<: AbstractString
    loci_names = Symbol.(loci(data))
    uniq_pops = unique(data.metadata.sampleinfo.population)
    if first(uniq_pops) ∈ ["fullsib", "halfsib", "unrelated", "parent_offspring"]
        sample_pairs = simpairs(sample_names) |> collect
    else
        sample_pairs = pairwisepairs(sample_names) |> collect
    end
    n_pairs = length(sample_pairs)
    n_samples = data.metadata.samples
    n_per_loci = DataFrames.combine(groupby(data.genodata, :locus), :genotype => nonmissing => :n)[:, :n]
    allelefrequencies = allelefreq(data)
    relate_vecs = map(i -> Vector{Union{Missing,Float64}}(undef, n_pairs), 1:length(method))
    boot_means, boot_medians, boot_ses = map(i -> deepcopy(relate_vecs), 1:3)
    boot_CI = map(i -> Vector{Union{Missing,Tuple{Float64,Float64}}}(undef, n_pairs), 1:length(method))
    shared_loci = Vector{Int}(undef, n_pairs)
    #p = Progress(n_pairs * length(method), dt = 1, color = :blue, barglyphs = BarGlyphs("|=> |"), barlen = 30)
    popdata_idx = groupby(data.genodata, :name)
    @inbounds for i in 1:n_pairs
        @inbounds geno1 = popdata_idx[(sample_pairs[i][1],)].genotype
        @inbounds geno2 = popdata_idx[(sample_pairs[i][2],)].genotype
        # get index for genotype appearing missing in at least one individual in the pair
        keep_idx = nonmissings(geno1, geno2)
        # generate nonmissing genotype data 
        gen1, gen2, loc, n_per_loc = (i[keep_idx] for i in (geno1, geno2, loci_names, n_per_loci))
        @inbounds shared_loci[i] = length(keep_idx)
        @inbounds @sync for (j, mthd) in enumerate(method)
            Base.Threads.@spawn begin
                @inbounds relate_vecs[j][i] = mthd(gen1, gen2, loc, allelefrequencies, loc_n = n_per_loc, n_samples = n_samples, inbreeding = inbreeding)
                boot_out = _bootstrapgenos_nonmissing(gen1, gen2, loc, n_per_loc, allelefrequencies, method = mthd, iterations = iterations, inbreeding = inbreeding)
                @inbounds boot_means[j][i], boot_medians[j][i], boot_ses[j][i], boot_CI[j][i] = _bootstrapsummary(boot_out, interval)
                #pair_text = sample_pairs[i][1] * " × " * sample_pairs[i][2] * "  ($i" * " of " * "$n_pairs" * ")"
                #ProgressMeter.next!(p; showvalues = [(:Pair, pair_text), (:Method, mthd)])
            end
        end
    end
    method_colnames = [Symbol("$i") for i in method]
    boot_mean_colnames = [Symbol("$i"*"_mean") for i in method]
    boot_median_colnames = [Symbol("$i"*"_median") for i in method]
    boot_se_colnames = [Symbol("$i"*"_SE") for i in method]
    CI_percent = convert(Int64, round(interval[2] - interval[1], digits = 2) * 100)
    boot_CI_colnames = [Symbol("$i"*"_CI_"*"$CI_percent") for i in method]

    out_dfs = map(method_colnames) do mthod
        DataFrame(:sample_1 => map(i -> i[1], sample_pairs), :sample_2 => map(i -> i[2], sample_pairs), :n_loci => shared_loci)
    end
    @inbounds for (i, mth) in enumerate(method_colnames)
        out_df[:, mth] = relate_vecs[i]
        out_df[:, boot_mean_colnames[i]] = boot_means[i]
        out_df[:, boot_median_colnames[i]] = boot_medians[i]
        out_df[:, boot_se_colnames[i]] = boot_ses[i]
        out_df[:, boot_CI_colnames[i]] = boot_CI[i]
    end
    return (; (method_colnames .=> out_dfs)...)
end

"""
    _kinship_noboot(::PopData, sample_names::Vector{String}; method::F) where F

Calculate pairwise kinship between all combinations of the provided `sample_names` for each `method` provided. 
This is an internal function with arguments provided by `kinship`.
"""
function _kinship_noboot(data::PopData, sample_names::Vector{T}; method::F, inbreeding::Bool) where F where T <: AbstractString
    loci_names = Symbol.(loci(data))
    n_samples = data.metadata.samples
    uniq_pops = unique(data.metadata.sampleinfo.population)
    if first(uniq_pops) ∈ ["fullsib", "halfsib", "unrelated", "parent_offspring"]
        sample_pairs = simpairs(sample_names) |> collect
    else
        sample_pairs = pairwisepairs(sample_names) |> collect
    end
    n_pairs = length(sample_pairs)
    n_per_loci = DataFrames.combine(groupby(data.genodata, :locus), :genotype => nonmissing => :n)[:, :n]
    allelefrequencies = allelefreq(data)
    relate_vecs = map(i -> Vector{Union{Missing,Float64}}(undef, n_pairs), 1:length(method))
    shared_loci = Vector{Int}(undef, n_pairs)
    #p = Progress(n_pairs* length(method), dt = 1, color = :blue, barglyphs = BarGlyphs("|=> |"), barlen = 30)
    popdata_idx = groupby(data.genodata, :name)
    @inbounds @sync for i in 1:n_pairs
        Base.Threads.@spawn begin
            @inbounds geno1 = popdata_idx[(sample_pairs[i][1],)].genotype
            @inbounds geno2 = popdata_idx[(sample_pairs[i][2],)].genotype
            keep_idx = nonmissings(geno1, geno2)
            @inbounds shared_loci[i] = length(keep_idx)
            @inbounds for (j, mthd) in enumerate(method)
                @inbounds relate_vecs[j][i] = mthd(geno1[keep_idx], geno2[keep_idx], loci_names[keep_idx], allelefrequencies, loc_n = n_per_loci[keep_idx], n_samples = n_samples, inbreeding = inbreeding)
                #pair_text = sample_pairs[i][1] * " × " * sample_pairs[i][2] * "  ($i" * " of " * "$(n_pairs)" * ")"
                #ProgressMeter.next!(p; showvalues = [(:Pair, pair_text), (:Method, mthd)])
            end
        end
    end
    method_colnames = [Symbol("$i") for i in method]
    out_df = DataFrame(:sample_1 => getindex.(sample_pairs, 1), :sample_2 => getindex.(sample_pairs, 2), :n_loci => shared_loci)
    [out_df[:, mth] = relate_vecs[i] for (i, mth) in enumerate(method_colnames)]
    return out_df
end


"""
```
# compare all samples
kinship(::PopData; method::Function, iterations::Int64, interval::Tuple{Float64, Float64}, resample::String, inbreeding::Bool = false)

# to compare specific samples
kinship(::PopData, samples::Vector{String}; method::F, iterations::Int64, interval::Tuple{Float64, Float64}, resample::String, inbreeding::Bool = false)
```
Return a dataframe of pairwise kinship estimates for all or select pairs of `samples` in a `PopData` object using 
method(s) `F` where `F` is one or several of the methods listed below. If no bootstrapping is required, then the only 
necessary keyword to provide is `method = ` and `inbreeding = ` for the `dyadicLikelihood` method (see examples below). 
**Note:** samples must be diploid.

### Estimator methods
The available estimators are listed below and are functions themselves. `kinship` takes the
function names as arguments (**case sensitive**), therefore do not use quotes or colons
in specifying the methods. Multiple methods can be supplied as a vector. All of these methods will tab-autocomplete.
For more information on a specific method, please see the respective docstring (e.g. `?Loiselle`).

- `Blouin`
- `LiHorvitz`
- `Loiselle`
- `Lynch`
- `LynchLi`
- `LynchRitland`
- `Moran`
- `QuellerGoodnight`
- `Ritland`


### Simulated siblingship comparison
If validating the estimators using `PopGenSims.jl` to simulate sibship relationships, `kinship`
will recognize `PopData` generated in that manner (the `population` column) and only compare siblingship
pairs. 

### Inbreeding
Use the `inbreeding` keyword to specify whether to allow inbreeding (`true`) or not (`false`, default).
This is only relevant for the `dyadicLikelihood` method (not yet released)

### Bootstrapping
To calculate means, medians, standard errors, and confidence intervals using bootstrapping,
set `iterations = n` where `n` is an integer greater than `0` (the default) corresponding to the number
of bootstrap iterations you wish to perform for each pair. The default confidence interval is `(0.05, 0.95)` (i.e. 90%),
however that can be changed by supplying the keyword `interval = (low, high)` where `low` and `high` are the intervals you want 
(as `AbstractFloat`). Performing bootstrapping will return a NamedTuple of DataFrames, with each field in the NamedTuple
corresponding to the estimator `Method` it describes, which can be merged into one large dataframe using `mergekinship()`.

#### Resampling methods
There are two available resampling methods, `"all"` (default  & recommended) and `"nonmissing"`.
- `"all"` : resamples all loci for a pair of individuals and then drops missing loci between them
    - speed: slower
    - pro: better resampling variation
    - con: by chance some iterations may have a lot of missing loci that have to be dropped
- `"nonmissing"` : resamples only the shared non-missing loci between the pair
    - speed: faster
    - pro: every iteration guarantees the same number of loci compared between the pair
    - con: too-tight confidence intervals due to less possible variation

**Examples**
```
julia> cats = @nancycats;

julia> kinship(cats, method = Ritland)
27966×4 DataFrame
   Row │ sample_1  sample_2  n_loci  Ritland     
       │ String    String    Int64   Float64?    
───────┼─────────────────────────────────────────
     1 │ N215      N216           8   0.258824
     2 │ N215      N217           8   0.193238
     3 │ N215      N218           8   0.127497
     4 │ N215      N219           8   0.0453471
   ⋮   │    ⋮         ⋮        ⋮          ⋮
 27963 │ N297      N290           7   0.189647
 27964 │ N281      N289           8   0.0892068
 27965 │ N281      N290           7   0.104614
 27966 │ N289      N290           7   0.0511663
                               27958 rows omitted

julia> kinship(cats, ["N7", "N111", "N115"], method = [Ritland, Loiselle])
3×5 DataFrame
 Row │ sample_1  sample_2  n_loci  Ritland     Loiselle   
     │ String    String    Int64   Float64?    Float64?   
─────┼────────────────────────────────────────────────────
   1 │ N7        N111           9  -0.129432   -0.101618
   2 │ N7        N115           9  -0.0183925  -0.0428898
   3 │ N111      N115           9   0.0240152   0.13681

julia> rel_out = kinship(cats, ["N7", "N111", "N115"], method = [Loiselle, Moran], iterations = 100, interval = (0.025, 0.975));

julia> rel_out.Loiselle
3×8 DataFrame
 Row │ sample_1  sample_2  n_loci  Loiselle    Loiselle_mean  Loiselle_median  Loiselle_SE  Loiselle_CI_95
     │ String    String    Int64   Float64?    Float64?       Float64?         Float64?     Tuple…?
─────┼─────────────────────────────────────────────────────────────────────────────────────────────────────────────
   1 │ N7        N111           9  -0.101618       0.0164593        0.0168983    0.0511942  (-0.0670707, 0.104008)
   2 │ N7        N115           9  -0.0428898      0.0771664        0.0880589    0.0982462  (-0.0428068, 0.183625)
   3 │ N111      N115           9   0.13681        0.255124         0.24991      0.267319   (0.103864, 0.421979)

# merge results into one big dataframe

julia> mergekinship(rel_out)
3×13 DataFrame
 Row │ sample_1  sample_2  n_loci  Loiselle    Loiselle_mean  Loiselle_ ⋯ 
     │ String    String    Int64   Float64?    Float64?       Float64?  ⋯
─────┼───────────────────────────────────────────────────────────────────
   1 │ N7        N111           9  -0.101618       0.0164593        0.0 ⋯
   2 │ N7        N115           9  -0.0428898      0.0771664        0.0  
   3 │ N111      N115           9   0.13681        0.255124         0.2  
                                                        8 columns omitted
```
"""
function kinship(data::PopData, sample_names::Vector{T}; method::F, iterations::Int64 = 0, interval::Tuple{Float64, Float64} = (0.025, 0.975), resample::String = "all", inbreeding::Bool = false) where F where T<:AbstractString
    data.metadata.ploidy != 2 && error("kinship analyses currently only support diploid samples")
    errs = ""
    all_samples = string.(samplenames(data))
    if sample_names != all_samples
        [errs *= "$i," for i in sample_names if i ∉ all_samples]
        errs != "" && error("Samples not found in the PopData: " * errs)
    end
    if eltype(method) != Function
        method = [method]
    end
    relate_mthds = [:QuellerGoodnight, :Ritland, :Lynch, :LynchLi, :LynchRitland, :Wang, :Loiselle, :Blouin, :Moran, :LiHorvitz, :dyadicLikelihood]
    [errs *= "$i is not a valid method\n" for i in Symbol.(method) if i ∉ relate_mthds]
    errs != "" && throw(ArgumentError(errs * "Methods are case-sensitive. Please see the docstring (?kinship) for additional help."))
    if iterations > 0
        if resample == "all"
            _kinship_boot_all(data, sample_names, method = method, iterations = iterations, interval = interval, inbreeding = inbreeding)
        elseif resample == "nonmissing"
            _kinship_boot_nonmissing(data, sample_names, method = method, iterations = iterations, interval = interval, inbreeding = inbreeding)
        else
            throw(ArgumentError("Invalid resample method. Please choose from resample methods \"all\" or \"nonmissing\""))
        end
    else
        _kinship_noboot(data, sample_names, method = method, inbreeding = inbreeding)
    end
end


function kinship(data::PopData; method::F, iterations::Int64 = 0, interval::Tuple{Float64, Float64} = (0.025, 0.975), resample::String = "all", inbreeding::Bool = false) where F
    sample_names = samplenames(data) |> collect
    kinship(data, sample_names, method = method, iterations = iterations, interval = interval, resample = resample, inbreeding = inbreeding)
end


"""
    mergekinship(data::NamedTuple)
A convenience function that takes the `NamedTuple` output from `kinship` performed with bootstrapping
and returns one large DataFrame.
"""
function mergekinship(data::NamedTuple)
    k = keys(data)
    k1 = k[1]
    outdf = deepcopy(data[Symbol(k1)])
    for key in k[2:end]
        outdf = innerjoin(
            outdf,
            select(data[Symbol(key)], Not(:n_loci)),
            on = [:sample_1, :sample_2]
        )
    end
    return outdf
end