---
id: fstpermutations
title: FstPermutations.jl
sidebar_label: FstPermutations.jl
---

### `_permuted_WeirCockerham`
```julia
_permuted_WeirCockerham(data::PopData, iterations::Int64)
```

----

### `_permuted_Nei`
```julia
_permuted_Nei(data::PopData, iterations::Int64)
```

---

### `_fst_permutation`
```julia
_fst_permutation(population_1::T, population_2::T) where T<:AbstractMatrix
```
Returns two matrices with rows (samples) shuffled between them. Respects the
number of rows of the original matrices (i.e. population sizes).