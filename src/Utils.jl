## experimental and not exported or documented!
function _adjacency_matrix(data::PopData)
    data_loci = groupby(data.genodata, :locus)
    out_vec = Vector{Array{Int8,2}}(undef, data.metadata.loci)
    for (j,i) in enumerate(data_loci)
        uniq = unique(skipmissing(i.genotype))
        adj_mat = fill(Int8(0), data.metadata.samples, length(uniq))
        for (j,k) in zip(i.genotype, eachrow(adj_mat))
            k .= Ref(j) .=== uniq 
        end
        out_vec[j] = adj_mat
    end
    return out_vec
end


"""
    _p_adjust(pvals::Vector{T}, method::String) where T <: Union{Missing, <:AbstractFloat}
Modification to `MultipleTesting.adjust` to include `missing` values in the
returned array. See MultipleTesting.jl docs for full more detailed information.

**Example**
```
julia> _p_adjust([0.1, 0.01, 0.005, 0.3], "bh")

```
### `correction` methods (case insensitive)
- `"bonferroni"` : Bonferroni adjustment
- `"holm"` : Holm adjustment
- `"hochberg"` : Hochberg adjustment
- `"bh"` : Benjamini-Hochberg adjustment
- `"by"` : Benjamini-Yekutieli adjustment
- `"bl"` : Benjamini-Liu adjustment
- `"hommel"` : Hommel adjustment
- `"sidak"` : Šidák adjustment
- `"forwardstop"` or `"fs"` : Forward-Stop adjustment
- `"bc"` : Barber-Candès adjustment
"""
@inline function _p_adjust(pvals::Vector{T}, method::String) where T <: Union{Missing, <:AbstractFloat}
    # make a dict of all possible tests and their respective functions
    d = Dict(
        "bonferroni" => Bonferroni(),
        "holm" => Holm(),
        "hochberg" => Hochberg(),
        "bh" => BenjaminiHochberg(),
        "by" => BenjaminiYekutieli(),
        "bl" => BenjaminiLiu(),
        "hommel" => Hommel(),
        "sidak" => Sidak(),
        "forwardstop" => ForwardStop(),
        "fs" => ForwardStop(),
        "bc" => BarberCandes(),
    )
    p_copy = copy(pvals)
    p_copy[.!ismissing.(p_copy)] .= adjust(p_copy[.!ismissing.(p_copy)] |> Vector{Float64}, d[lowercase(method)])
    return p_copy
end


"""
    _relabel(arr::Vector{T}) where T<:AbstractString
Relable a vector of strings into integers as though it is factors.
This is useful for reclassifying e.g. population names as integers. 
"""
function _relabel(arr::AbstractVector{T}) where T<:AbstractString
    findfirst.(isequal.(arr), Ref(unique(arr)))
end

feature_req() = "\nPlease open an Issue or Pull Request on https://www.github.com/biojulia/PopGen.jl if you would like this feature implemented"

"""
    _is_logging(io)
Returns `false` if in a normal session, `true` if in a CI/HPC environment 
"""
_is_logging(io) = isa(io, Base.TTY) == false || (get(ENV, "CI", nothing) == "true")
