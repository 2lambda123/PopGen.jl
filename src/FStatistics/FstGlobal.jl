function _pairwisefst(data::PopData, ::Val{:Hudson})
    idx_pdata = groupby(data.genodata, :population)
    pops = getindex.(keys(idx_pdata), :population)
    npops = data.metadata.populations
    n_loci = data.metadata.loci
    results = zeros(Float64, npops, npops)
    @sync for i in 2:npops
        Base.Threads.@spawn begin
            for j in 1:(i-1)
                @inbounds pop1 = reshape(idx_pdata[i].genotype, :, n_loci)
                @inbounds pop2 = reshape(idx_pdata[j].genotype, :, n_loci)
                @inbounds results[i,j] = Hudson(pop1,pop2)
           end
        end
    end
    return PairwiseFST(DataFrame(results, Symbol.(pops)), "Hudson et al. 1992")
end

# helper function to do the math for Hudson FST on a locus
function Hudson(pop1::T, pop2::T) where T<:GenoArray
    p1_frq = allelefreq(pop1)
    p2_frq = allelefreq(pop2)
    # find the first allele and assume it's "p"
    p_allele = first(keys(p1_frq))
    p1 = get(p1_frq, p_allele, 0.0)
    q1 = 1.0 - p1
    p2 = get(p2_frq, p_allele, 0.0)
    q2 = 1.0 - p2 
    # degrees of freedom is the number of loci - 1
    df1 = (nonmissing(pop1) * 2.0) - 1.0
    df2 = (nonmissing(pop2) * 2.0) - 1.0
    numerator = (p1 - p2)^2 - (p1*q1/df1) - (p2*q2/df2)
    denominator = (p1*q2) + (p2*q1)
    return numerator/denominator
end

function Hudson(population_1::T, population_2::T) where T<:AbstractMatrix
    tot = 0.0
    n = 0.0
    for i in 1:size(population_1, 2)
        fst = Hudson(view(population_1,:,i), view(population_2,:,i))
        tot += !isnan(fst) && !ismissing(fst) ? fst : continue 
        n += 1.0
    end
    return tot/n
end


## Nei 1987 FST ##
function Nei(population_1::T, population_2::T) where T<:AbstractMatrix
    DSTtot = 0.0
    HTtot = 0.0
    Ntot = 0.0
    for (i,p1) in enumerate(eachcol(population_1))
        p2 = view(population_2, :, i)
        n1 = nonmissing(p1)
        n2 = nonmissing(p2)
        # number of populations represented per locus
        n_pop_per_loc = Float64((n1 > 0) + (n2 > 0))
        n_pop_per_loc < 2.0 && continue
        # corrected n for population size
        corr_n_per_loc = n_pop_per_loc / (reciprocal(n1) + reciprocal(n2))
        # observed heterozygosity
        het_obs_p1 = _hetero_obs(p1)
        het_obs_p2 = _hetero_obs(p2)
        # expected heterozygosity
        het_exp_p1 = _hetero_exp(p1)
        het_exp_p2 = _hetero_exp(p2)
        # genic diversity for population 1 and 2
        p1_nei = _genediversitynei87(het_exp_p1, het_obs_p1, corr_n_per_loc)
        p2_nei = _genediversitynei87(het_exp_p2, het_obs_p2, corr_n_per_loc)
        # mean genic diversity
        HS = (p1_nei + p2_nei) / n_pop_per_loc
        alle_freq_p1 = allelefreq(p1)
        alle_freq_p2 = allelefreq(p2)
        avg_freq = sum(values(avg_allelefreq([alle_freq_p1, alle_freq_p2],2)))
        Het_obs = (het_obs_p1 + het_obs_p2) / n_pop_per_loc
        Ht = 1.0 - avg_freq + (HS / corr_n_per_loc / n_pop_per_loc) - (Het_obs / 2.0 / corr_n_per_loc / n_pop_per_loc)
        DST = 2 * (Ht - HS)
        DST′ = DST * (n_pop_per_loc - 1)
        HT′ = HS + DST′
        DSTtot += DST′
        HTtot += HT′
        Ntot += 1.0
    end
    return round((DSTtot/Ntot) / (HTtot/Ntot), digits = 5) 
end

function _pairwisefst(data::PopData, ::Val{:Nei})
    idx_pdata = groupby(data.genodata, :population)
    pops = getindex.(keys(idx_pdata), :population)
    npops = data.metadata.populations
    n_loci = data.metadata.loci
    results = zeros(Union{Missing,Float64}, npops, npops)
    @inbounds @sync for i in 2:npops
        Base.Threads.@spawn begin
            @inbounds for j in 1:(i-1)
                @inbounds pop1 = reshape(idx_pdata[i].genotype, :, n_loci)
                @inbounds pop2 = reshape(idx_pdata[j].genotype, :, n_loci)
                @inbounds results[i,j] = Nei(pop1,pop2)
           end
        end
    end
    return PairwiseFST(DataFrame(results, Symbol.(pops)), "Nei 1987")
end


## Weir & Cockerham 1984 FST ##
function WeirCockerham(population_1::T, population_2::T) where T<:AbstractMatrix
    n_pops = 2
    # get genotype counts
    # reshape as a matrix of loci x pop (row x col)
    n_per_locpop =  hcat(map(nonmissing, eachcol(population_1)), map(nonmissing, eachcol(population_2)))
    n_total = sum(n_per_locpop, dims = 2)
    # screen for completely absent loci
    present_loc = 0 .∉ eachrow(n_per_locpop)
    if 0 ∈ present_loc
        # index locus names by the missing indices
        pop_1 = @view population_1[:,present_loc]
        pop_2 = @view population_2[:,present_loc]
        n_per_locpop =  hcat(map(nonmissing, eachcol(pop_1)), map(nonmissing, eachcol(pop_2)))
        n_total = sum(n_per_locpop, dims = 2)
    else
        pop_1 = population_1
        pop_2 = population_2
    end
    merged = vcat(pop_1, pop_2)
    n_pop_per_loc = map(countnonzeros, eachrow(n_per_locpop))

    # global allele counts
    glob_allelecounts = map(allelecount, eachcol(merged))
    # global allele frequencies
    glob_allelefreqs = map(allelefreq, eachcol(merged))
    
    # allele freqs per locus per population
    pop_1_freq = map(allelefreq, eachcol(pop_1))
    pop_2_freq = map(allelefreq, eachcol(pop_2))
    # expand out the n matrix to be same dimensions as uniquealleles x pop
    n_expanded = reduce(hcat, repeat.(eachrow(n_per_locpop), 1, glob_allelecounts)) |> permutedims
    # expand n_total matrix to be same dimensions as uniquealleles x pop
    n_tot_expanded = reduce(vcat, repeat.(eachrow(n_total), glob_allelecounts))
    # calculate corrected n per locus
    corr_n_per_loc = (n_total .- (sum(n_per_locpop .^2, dims = 2) ./ n_total)) ./ (n_pop_per_loc .- 1) 
    # expand corr_n matrix to be same dimensions as uniquealleles x pop
    corr_n_per_loc_exp = reduce(vcat, repeat.(eachrow(corr_n_per_loc), glob_allelecounts))
    # list of alleles in each locus
    _alleles_perloc = [sort(uniquealleles(i)) for i in eachcol(merged)]
    # extremely convoluted, creates a big matrix of allele freqs per locus per population
    # TODO are there too many reshapes going on?
    #TODO move into its own function? This seems like it could be a recurring thing
    afreq_tmp = hcat(pop_1_freq, pop_2_freq)
    allelefreq_pop = reshape(
        reduce(vcat,
            map(zip(eachrow(afreq_tmp), _alleles_perloc)) do (_freqs_p, _alle)
                reduce(hcat,
                    map(_freqs_p) do _freqs
                        [get(_freqs, i, 0.) for i in _alle]     # query the dict of allele freqs
                    end
                )
            end
            ),
       :, n_pops  # reshape by these dimensions
    )
    # global allele freqs
    _freqs = map(i -> values(sort(i)), glob_allelefreqs) |> Base.Iterators.flatten |> collect

    #heterozygotes per allele per locus per population
    # gets emptied from the popfirst! calls below(!)
    _p1 = collect(eachcol(pop_1))
    _p2 = collect(eachcol(pop_2))
    genos_vec = permutedims([_p1 _p2])[:]
    # create matrix of heterozygote occurrences per allele per pop
    het_mtx = reduce(vcat,     # vcat will concatenate the returned matrices into a single matrix
        map(_alleles_perloc) do _alleles          # map across the vector of alleles for each locus
            reduce(hcat,
                # each element in x is locus × population, so use a comprehension to
                # do counthet() as many times as there are populations, popfirst!'ing
                # the first element of x until it's ultimately empty
                # then concatenate it into a matrix
                [counthet(popfirst!(genos_vec), _alleles) for pop_n in 1: n_pops]
            )
        end
    )
    μ_het =  (2 * n_expanded .* allelefreq_pop - het_mtx) / 2
    SSG = sum(n_expanded .* allelefreq_pop - μ_het, dims = 2)
    SSi = sum(n_expanded .* (allelefreq_pop - 2 * allelefreq_pop .^ 2) + μ_het, dims = 2)
    SSP = 2 .* sum(n_expanded .* reduce(hcat, map(i -> (i .- _freqs) .^ 2, eachcol(allelefreq_pop))), dims = 2)
    n_correction = reduce(vcat, fill.(n_pop_per_loc, glob_allelecounts))

    MSG = SSG ./ n_tot_expanded
    MSP = SSP ./ (n_correction .- 1)
    MSI = SSi ./ (n_tot_expanded - n_correction)
    σ_w = MSG
    σ_b = 0.5 * (MSI - MSG)
    σ_a = 0.5 ./ corr_n_per_loc_exp .* (MSP - MSI)
    σ = hcat(σ_a, σ_b, σ_w)
    σ_total = map(i -> sum(skipinfnan(i)), eachcol(σ))
    fst_total = round(σ_total[1] / sum(σ_total), digits = 5)
end


function _pairwisefst(data::PopData, ::Val{:WeirCockerham})
    idx_pdata = groupby(data.genodata, :population)
    pops = getindex.(keys(idx_pdata), :population)
    npops = data.metadata.populations
    n_loci = data.metadata.loci
    results = zeros(Float64, npops, npops)
    @sync for i in 2:npops
        Base.Threads.@spawn begin
            for j in 1:(i-1)
                @inbounds pop1 = reshape(idx_pdata[i].genotype, :, n_loci)
                @inbounds pop2 = reshape(idx_pdata[j].genotype, :, n_loci)
                @inbounds results[i,j] = WeirCockerham(pop1,pop2)
           end
        end
    end
    return PairwiseFST(DataFrame(results, Symbol.(pops)), "Weir & Cockerham")
end


function _pairwisefst(data::PopData, ::Val{:AMOVA})
    distmtx = pairwise(SqEuclidean(), matrix(data), dims=1)
    grpcol = data.metadata.sampleinfo.population
    levels = unique(grpcol)
    npops = data.metadata.populations
    # create vector of vectors containing indices for each unique group
    groupidx = map(x -> findall(==(x),grpcol), levels)
    results = zeros(Float64, npops, npops)
    df_among = 1
    for i in 2:npops
        pop1 = groupidx[i]
        n1 = length(pop1)
        dw1 = reduce(+, view(distmtx, pop1, pop1))
        SS_within1 = dw1 / 2n1
        for j in 1:(i-1)
            pop2 = groupidx[j]
            n2 = length(pop2)
            N = n1 + n2
            dw2 = reduce(+, view(distmtx, pop2, pop2))
            da = reduce(+, view(distmtx, pop1, pop2))
            df_within = N - 2
            # possibly needs to be include 2nd pop?
            SS_among1 = ((da + dw1) / 2N) - (dw1 / 2n1)
            SS_among2 = ((da + dw2) / 2N) - (dw2 / 2n2)
            SS_among = SS_among1 + SS_among2
            σ²_within = (SS_within1 + (dw2 / 2n2)) / df_within
            n_c = (N - ((n1^2 + n2^2)/N)) #/ df_among
            #return n_c
            #n_c = (N - (reduce(+, length.(groupidx[[i,j]]).^2) / N)) / df_among
            σ²_among = ((SS_among / df_among) - σ²_within) / n_c
            #FST = σ²_among / (σ²_among + σ²_within)
            #@inbounds results[i,j] =  results[j,i] = FST
            @inbounds results[i,j] = σ²_among / (σ²_among + σ²_within)
        end

    end
    return PairwiseFST(DataFrame(results, Symbol.(levels)), "AMOVA-based")
end