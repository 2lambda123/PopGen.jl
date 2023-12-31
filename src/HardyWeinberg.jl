"""
    _chisqlocus(locus::T) where T <: GenoArray
Calculate the chi square statistic and p-value for a locus
Returns a tuple with chi-square statistic, degrees of freedom, and p-value
"""
function _chisqlocus(locus::T) where T <: GenoArray
    ## Get expected number of genotypes in a locus
    expected = genocount_expected(locus)
    ## Get observed number of genotypes in a locus
    observed = genocount_observed(locus)
    chisq_stat = expected
    @inbounds for (genotype, freq) in expected
        o = get(observed, genotype, 0.0)
        e = freq
        @inbounds chisq_stat[genotype] = (o - e)^2 / e
    end
    chisq_stat = sum(values(chisq_stat))
    df = length(expected) - allelecount(locus)
    p_val = df > 0 ? 1.0 - Distributions.cdf(Distributions.Chisq(df), chisq_stat) : missing
    return (chisq_stat, df, p_val)
end


"""
    hwetest(data::PopData; by::String = "locus", correction = "none")
Calculate chi-squared test of HWE for each locus and returns observed and
expected heterozygosity with chi-squared, degrees of freedom and p-values for
each locus. Use `by = "population"` to perform this separately for each population
(default: `by = "locus"`). Use `correction =` to specify a P-value
adjustment method for multiple testing.

#### example
`hwetest(@gulfsharks, correction = "bh")` \n
`hwetest(@gulfsharks, by = "population", correction = "bh")` \n

### `correction` methods (case insensitive)
- `"bonferroni"` : Bonferroni adjustment
- `"holm"` : Holm adjustment
- `"hochberg"` : Hochberg adjustment
- `"bh"` : Benjamini-Hochberg adjustment
- `"by"` : Benjamini-Yekutieli adjustment
- `"bl"`  : Benjamini-Liu adjustment
- `"hommel"` : Hommel adjustment
- `"sidak"` : Šidák adjustment
- `"forwardstop"` or `"fs"` : Forward-Stop adjustment
- `"bc"` : Barber-Candès adjustment
"""
@inline function hwetest(data::PopData; by::String = "locus", correction::String = "none")
    if by == "locus"
        out_table =DataFrames.combine(
            groupby(data.genodata, :locus),
            :genotype => _chisqlocus => :chisq
        )
        DataFrames.select!(out_table, :locus, :chisq => [:chisq, :df, :P])
    else
        tmp =DataFrames.combine(
            groupby(data.genodata, [:locus, :population]),
            :genotype => _chisqlocus => :chisq
        )
        out_table = select!(tmp, :locus, :population, :chisq => [:chisq, :df, :P])
    end
    if correction == "none"
        return out_table
    else
        column_name = Symbol("P_"*correction)
        transform!(out_table, :P => (i -> _p_adjust(i, correction)) => column_name)
    end
end

const hwe = hwetest
