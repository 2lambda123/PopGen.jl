"""
    counthet(geno::T, allele::Int) where T<:GenoArray
    counthet(geno::T, allele::AbstractVector{U}) where T<:GenoArray where U<:Integer
Given a `GenoArray`, count the number of times `allele` appears in the
heterozygous state.
"""
function counthet(geno::T, allele::U) where T<:GenoArray where U<:Integer
    mapreduce(i -> _ishet(i, allele), +, skipmissing(geno))
end


function counthet(geno::T, allele::AbstractVector{U}) where T<:GenoArray where U<:Integer
    tmp = skipmissing(geno)
    isempty(tmp) && return fill(0, length(allele))
    map(_allele -> mapreduce(i -> _ishet(i, _allele), +, tmp), allele)
end


"""
    counthom(geno::T, allele::Int) where T<:GenoArray
Given a `GenoArray`, count the number of times `allele` appears in the
homozygous state.
"""
function counthom(geno::T, allele::U) where T<:GenoArray where U <: Signed
    mapreduce(i -> _ishom(i, allele), +, skipmissing(geno))
end

function counthom(geno::T, allele::AbstractVector{U}) where T<:GenoArray where U<:Integer
    tmp = skipmissing(geno)
    isempty(tmp) && return fill(0, length(allele))
    map(_allele -> mapreduce(i -> _ishom(i, _allele), +, tmp), allele)
end

"""
    _genediversitynei87(het_exp::Union{Missing,AbstractFloat}, het_obs::Union{Missing,AbstractFloat}, n::Union{Integer, Float64}, corr::Bool = true)
Calculate overall gene diversity with the adjustment/correction, use `corr = false` to ignore sample-size correction `* n/(n-1)`.

Hₜ = 1 −sum(pbar²ᵢ + Hₛ/(ñ * np) − Het_obs/(2ñ*np))
- _ñ_ is the number of genotypes for a locus for a population
- _np_ is the number of genotypes of a locus across all populations
    - i.e. sum(_ñ_)
- _pbar²_ is the observed homozygosity of a locus for that population
- _Hₛ_ is the within population gene diversity given by:
    - Hₛ =  ñ/(ñ-1) * (1 - sum(pbar²ᵢ - Het_observed / 2ñ))

(Nei M. (1987) Molecular Evolutionary Genetics. Columbia University Press).
"""
@inline function _genediversitynei87(het_exp::T, het_obs::T, n::Union{Integer,T}; corr::Bool = true) where T<: AbstractFloat
    corr_val = corr ? n/(n-1.0) : 1.0
    return @fastmath (het_exp - (het_obs/n/2.0)) * corr_val
end

@inline function _genediversitynei87(het_exp::AbstractFloat, het_obs::Missing, n::Union{Integer,AbstractFloat}; corr::Bool = true)
    return missing
end

@inline function _genediversitynei87(het_exp::Missing, het_obs::AbstractFloat, n::Union{Integer,AbstractFloat}; corr::Bool = true)
    return missing
end

@inline function _genediversitynei87(het_exp::Missing, het_obs::Missing, n::Union{Integer,AbstractFloat}; corr::Bool = true)
    return missing
end

"""
    _hetero_obs(data::T) where T <: GenoArray
Returns observed heterozygosity as a mean of the number of heterozygous genotypes, defined
as genotypes returning `true` for `_ishet()`. This is numerically feasible because
`true` values are mathematically represented as `1`, whereas `false` are represented
as `0`.
"""
@inline function _hetero_obs(data::T) where T <: GenoArray
    skipm = skipmissing(data)
    isempty(skipm) && return missing
    h = 0
    n = 0.0
    for i in skipm
        h += _ishet(i)
        n += 1.0
    end
    h / n
end

"""
    _hetero_exp(allele_freqs::Vector{T}) where T <: GenoArray
Returns the expected heterozygosity of an array of genotypes,
calculated as 1 - sum of the squared allele frequencies.
"""
@inline function _hetero_exp(data::T) where T <: GenoArray
    frq = allelefreq(data)
    isempty(frq) && return missing
    exp = 0.0
    @inbounds for i in values(frq)
        exp += i^2
    end
    1.0 - exp
end

"""
    heterozygosity(data::PopData; by::Union{Symbol,String} = "locus")
Calculate observed and expected heterozygosity in a `PopData` object. For loci,
heterozygosity is calculated in the Nei fashion, such that heterozygosity is
calculated as the average over heterozygosity per locus per population.
### Modes
- `"locus"` : heterozygosity per locus (default)
- `"sample"` : heterozygosity per individual/sample
- `"population"`: heterozygosity per population
## Example
heterozygosity(@nancycats, by = "population" )
"""
function heterozygosity(data::PopData; by::Union{String, Symbol} = "locus")
    strby = lowercase(string(by))
    if strby ∈ ["locus", "sample", "population"]
        _heterozygosity(data, Val(Symbol(strby)))
    else
        error("please specify by = \"locus\", \"sample\", or \"population\"")
    end
end

function _heterozygosity(data::PopData, ::Val{:locus})
    tmp = DataFrames.combine(
        groupby(data.genodata, [:locus, :population]),
        :genotype => nonmissing => :n_tmp,
        :genotype => _hetero_obs => :het_pop_obs,
        :genotype => _hetero_exp => :het_pop_exp
    )
    DataFrames.combine(
        groupby(tmp, :locus),
        :n_tmp => sum => :n,
        :het_pop_obs => (h_o -> mean(skipmissing(h_o))) => :het_obs,
        :het_pop_exp => (h_e -> mean(skipmissing(h_e))) => :het_exp
    )
end

function _heterozygosity(data::PopData, ::Val{:sample})
    DataFrames.combine(
        groupby(data.genodata, :name),
        :genotype => nonmissing => :n,
        :genotype => _hetero_obs => :het_obs
    )
end

function _heterozygosity(data::PopData, ::Val{:population})
    DataFrames.combine(
        groupby(data.genodata, :population),
        :genotype => nonmissing => :n,
        :genotype => _hetero_obs => :het_obs,
        :genotype => _hetero_exp => :het_exp
    )
end

#NOTE this is not intended to be performant. It's a convenience function. 
"""
    samplehet(data::PopData, individual::String)
Calculate the observed heterozygosity for an individual in a `PopData` object.
"""
@inline function samplehet(data::PopData, individual::String)
    individual ∉ samplenames(data) && throw(ArgumentError("$individual not found in data"))
    data.genodata[data.genodata.name .== individual, :genotype] |> _hetero_obs
end
