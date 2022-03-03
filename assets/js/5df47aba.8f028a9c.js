"use strict";(self.webpackChunkpop_gen_jl=self.webpackChunkpop_gen_jl||[]).push([[9728],{3905:function(e,n,l){l.d(n,{Zo:function(){return p},kt:function(){return c}});var t=l(7294);function a(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function i(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function r(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?i(Object(l),!0).forEach((function(n){a(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function o(e,n){if(null==e)return{};var l,t,a=function(e,n){if(null==e)return{};var l,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)l=i[t],n.indexOf(l)>=0||(a[l]=e[l]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)l=i[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s=t.createContext({}),u=function(e){var n=t.useContext(s),l=n;return e&&(l="function"==typeof e?e(n):r(r({},n),e)),l},p=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var l=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(l),c=a,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return l?t.createElement(h,r(r({ref:n},p),{},{components:l})):t.createElement(h,r({ref:n},p))}));function c(e,n){var l=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=l.length,r=new Array(i);r[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var u=2;u<i;u++)r[u]=l[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,l)}m.displayName="MDXCreateElement"},3865:function(e,n,l){l.r(n),l.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return d},default:function(){return c}});var t=l(7462),a=l(3366),i=(l(7294),l(3905)),r=["components"],o={id:"kinshipmoments",title:"KinshipMoments.jl",sidebar_label:"KinshipMoments.jl"},s=void 0,u={unversionedId:"api/PopGen/kinshipmoments",id:"api/PopGen/kinshipmoments",title:"KinshipMoments.jl",description:"PopGen.jl/src/Kinship/KinshipMoments.jl",source:"@site/docs/api/PopGen/KinshipMoments.md",sourceDirName:"api/PopGen",slug:"/api/PopGen/kinshipmoments",permalink:"/PopGen.jl/docs/api/PopGen/kinshipmoments",editUrl:"https://github.com/BioJulia/PopGen.jl/edit/documentation/docs/api/PopGen/KinshipMoments.md",tags:[],version:"current",lastUpdatedAt:1646332292,formattedLastUpdatedAt:"3/3/2022",frontMatter:{id:"kinshipmoments",title:"KinshipMoments.jl",sidebar_label:"KinshipMoments.jl"},sidebar:"docs",previous:{title:"PairwiseKinship.jl",permalink:"/PopGen.jl/docs/api/PopGen/pairwisekinship"},next:{title:"KinshipPostHocs.jl",permalink:"/PopGen.jl/docs/api/PopGen/kinshipposthocs"}},p={},d=[{value:"PopGen.jl/src/Kinship/KinshipMoments.jl",id:"popgenjlsrckinshipkinshipmomentsjl",level:2},{value:"\ud83d\udd35 Blouin",id:"-blouin",level:3},{value:"\ud83d\udd35 LiHorvitz",id:"-lihorvitz",level:3},{value:"\ud83d\udd35 Loiselle",id:"-loiselle",level:3},{value:"\ud83d\udd35 Lynch",id:"-lynch",level:3},{value:"\ud83d\udd35 LynchLi",id:"-lynchli",level:3},{value:"\ud83d\udd35 LynchRitland",id:"-lynchritland",level:3},{value:"\ud83d\udd35 Moran",id:"-moran",level:3},{value:"\ud83d\udd35 QuellerGoodnight",id:"-quellergoodnight",level:3},{value:"\ud83d\udd35 Ritland",id:"-ritland",level:3},{value:"\ud83d\udce6 _a_wang_base",id:"-_a_wang_base",level:3},{value:"\ud83d\udce6 _a_wang",id:"-_a_wang",level:3},{value:"\ud83d\udce6 Wang",id:"-wang",level:3}],m={toc:d};function c(e){var n=e.components,l=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,t.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"popgenjlsrckinshipkinshipmomentsjl"},"PopGen.jl/src/Kinship/KinshipMoments.jl"),(0,i.kt)("p",null,"\ud83d\udce6  => not exported |\n\ud83d\udd35 => exported by PopGen.jl"),(0,i.kt)("h3",{id:"-blouin"},"\ud83d\udd35 Blouin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Blouin(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}; alleles::NamedTuple)\n")),(0,i.kt)("p",null,"Allele sharing index described by Blouin (1996)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Single Locus Equation: The number of alleles shared between individuals over ploidy.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If both allele positions are shared (e.g. AA x AA or AB x AB) then 1"),(0,i.kt)("li",{parentName:"ul"},"If one allele position is shared (e.g. AB x AC) then 0.5"),(0,i.kt)("li",{parentName:"ul"},"If neither allele position is shared (e.g. AB x CD) then 0"))),(0,i.kt)("li",{parentName:"ul"},"How to combine multiple loci: Single locus estimates are simply averaged together"),(0,i.kt)("li",{parentName:"ul"},"Assumes no inbreeding")),(0,i.kt)("p",null,"Blouin, M. S., Parsons, M., Lacaille, V., & Lotz, S. (1996). Use of microsatellite loci to classify individuals by relatedness. Molecular ecology, 5(3), 393-401."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"-lihorvitz"},"\ud83d\udd35 LiHorvitz"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"LiHorvitz(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}; alleles::NamedTuple)\n")),(0,i.kt)("p",null,"Allele sharing index described by Li and Horvitz (1953)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Single Locus Equation: If all alleles are the same between individuals (eg. AA x AA) then 1.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If two alleles are shared between individuals (eg.  AA x AB or AB x AB) then 0.5."),(0,i.kt)("li",{parentName:"ul"},"If only one allele is shared between individuals (eg. AB x AC) then 0.25."),(0,i.kt)("li",{parentName:"ul"},"If no alleles are shared (eg. AB x CD) then 0."))),(0,i.kt)("li",{parentName:"ul"},"How to combine multiple loci: Single locus estimates are simply averaged together"),(0,i.kt)("li",{parentName:"ul"},"Assumes no inbreeding")),(0,i.kt)("p",null,"Li, C. C., & Horvitz, D. G. (1953). Some methods of estimating the inbreeding coefficient. American journal of human genetics, 5(2), 107."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"-loiselle"},"\ud83d\udd35 Loiselle"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Loiselle(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}; alleles::NamedTuple)\n")),(0,i.kt)("p",null,"Calculates the moments based estimator of pairwise relatedness using the estimator propsed by\nLoiselle et al (1995) and modified to individual dyads by Heuertz et al. (2003)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Multiple Locus Equation:"),(0,i.kt)("li",{parentName:"ul"},"Assumes no inbreeding")),(0,i.kt)("p",null,"See equations 22 in: Wang(2017) for variant of estimator used"),(0,i.kt)("p",null,"Loiselle, B. A., Sork, V. L., Nason, J., & Graham, C. (1995). Spatial genetic structure of a tropical understory shrub, ",(0,i.kt)("em",{parentName:"p"},"Psychotria officinalis")," (Rubiaceae). American journal of botany, 82(11), 1420-1425."),(0,i.kt)("p",null,"Heuertz, M., Vekemans, X., Hausman, J. F., Palada, M., & Hardy, O. J. (2003). Estimating seed vs. pollen dispersal from spatial genetic structure in the common ash. Molecular Ecology, 12(9), 2483-2495."),(0,i.kt)("p",null,"Wang, J. (2017). Estimating pairwise relatedness in a small sample of individuals. Heredity, 119(5), 302-313."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"-lynch"},"\ud83d\udd35 Lynch"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Lynch(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}; alleles::NamedTuple)\n")),(0,i.kt)("p",null,"Allele sharing index described by Lynch (1988)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Single Locus Equation: If all alleles are the same between individuals (eg. AA x AA) then 1.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If both individuals are heterozygous with the same alleles or one is homozygous for the shared allele (eg. AB x AB or AA x AB) then 0.75."),(0,i.kt)("li",{parentName:"ul"},"If only one allele is shared between individuals (eg. AB x AC) then 0.5."),(0,i.kt)("li",{parentName:"ul"},"If no alleles are shared (eg. AB x CD) then 0."))),(0,i.kt)("li",{parentName:"ul"},"How to combine multiple loci: Single locus estimates are simply averaged together"),(0,i.kt)("li",{parentName:"ul"},"Assumes no inbreeding")),(0,i.kt)("p",null,"Lynch, M. (1988). Estimation of relatedness by DNA fingerprinting. Molecular biology and evolution, 5(5), 584-599."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"-lynchli"},"\ud83d\udd35 LynchLi"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"LynchLi(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}; alleles::NamedTuple)\n")),(0,i.kt)("p",null,"Calculates the moments based estimator of pairwise relatedness by Lynch (1988) & improved by Li et al. (1993)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Single Locus Equation:"),(0,i.kt)("li",{parentName:"ul"},"How to combine multiple loci: Sum the difference between observed and expected similarity across all loci and then divide by the sum of 1 - the expected similarity"),(0,i.kt)("li",{parentName:"ul"},"Assumes no inbreeding")),(0,i.kt)("p",null,"See equations 13 - 16 in Wang (2017) for variant of estimator used"),(0,i.kt)("p",null,"Li, C. C., Weeks, D. E., & Chakravarti, A. (1993). Similarity of DNA fingerprints due to chance and relatedness. Human heredity, 43(1), 45-52."),(0,i.kt)("p",null,"Wang, J. (2017). Estimating pairwise relatedness in a small sample of individuals. Heredity, 119(5), 302-313."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"-lynchritland"},"\ud83d\udd35 LynchRitland"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"LynchRitland(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}; alleles::NamedTuple)\n")),(0,i.kt)("p",null,"Calculates the moments based estimator of pairwise relatedness by Lynch and Ritland (1999)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Single Locus Equation:"),(0,i.kt)("li",{parentName:"ul"},"How to combine multiple loci: Weighted average of each term seperately weighted by the sample variance (assuming zero relatedness) and subsequently divided by the average sampling variance"),(0,i.kt)("li",{parentName:"ul"},"Assumes no inbreeding")),(0,i.kt)("p",null,"See equation 10 in Wang (2017) for variant of estimator used"),(0,i.kt)("p",null,"Lynch, M., & Ritland, K. (1999). Estimation of pairwise relatedness with molecular markers. Genetics, 152(4), 1753-1766."),(0,i.kt)("p",null,"Wang, J. (2017). Estimating pairwise relatedness in a small sample of individuals. Heredity, 119(5), 302-313."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"-moran"},"\ud83d\udd35 Moran"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Moran(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}; alleles::NamedTuple)\n")),(0,i.kt)("p",null,"Reinterpretation of Moran's I (commonly used for spatial autocorrelation) to estimate genetic relatedness\nby Hardy and Vekemans (1999)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Multiple Locus Equation:"),(0,i.kt)("li",{parentName:"ul"},"Assumes no inbreeding")),(0,i.kt)("p",null,"Hardy, O. J., & Vekemans, X. (1999). Isolation by distance in a continuous population: reconciliation between spatial autocorrelation analysis and population genetics models. Heredity, 83(2), 145-154."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"-quellergoodnight"},"\ud83d\udd35 QuellerGoodnight"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"QuellerGoodnight(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}; alleles::NamedTuple)\n")),(0,i.kt)("p",null,"Calculates the moments based estimator of pairwise relatedness developed by Queller & Goodnight (1989)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Single Locus Equation:"),(0,i.kt)("li",{parentName:"ul"},"How to combine multiple loci:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Multiple loci are combined by independently summing the two numerator and two denominator terms before performing the final division and averaging the two components."))),(0,i.kt)("li",{parentName:"ul"},"Assumes no inbreeding")),(0,i.kt)("p",null,"See equation 3 in Wang (2017) for variant of estimator used."),(0,i.kt)("p",null,"Queller, D. C., & Goodnight, K. F. (1989). Estimating relatedness using genetic markers. Evolution, 43(2), 258-275."),(0,i.kt)("p",null,"Wang, J. (2017). Estimating pairwise relatedness in a small sample of individuals. Heredity, 119(5), 302-313."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"-ritland"},"\ud83d\udd35 Ritland"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Ritland(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}; alleles::NamedTuple)\n")),(0,i.kt)("p",null,"Calculates the moments based estimator of pairwise relatedness proposed by Li and Horvitz (1953) and implemented/made popular by Ritland (1996)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Single Locus Equation:"),(0,i.kt)("li",{parentName:"ul"},"How to combine multiple loci: A weighted average of individual locus specific estimates weighted by sampling variance"),(0,i.kt)("li",{parentName:"ul"},"Assumes no inbreeding")),(0,i.kt)("p",null,"See equation 7 in: Wang (2017) for variant of estimator used"),(0,i.kt)("p",null,"Ritland, K. (1996). Estimators for pairwise relatedness and individual inbreeding coefficients. Genetics Research, 67(2), 175-185."),(0,i.kt)("p",null,"Wang, J. (2017). Estimating pairwise relatedness in a small sample of individuals. Heredity, 119(5), 302-313."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"-_a_wang_base"},"\ud83d\udce6 _a_wang_base"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-julia"},"_a_wang_base(m::Int, alleles::Dict)\n")),(0,i.kt)("h3",{id:"-_a_wang"},"\ud83d\udce6 _a_wang"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-julia"},"_a_wang(N::Int, alleles::Dict)\n")),(0,i.kt)("h3",{id:"-wang"},"\ud83d\udce6 Wang"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Wang(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}; alleles::NamedTuple)\n")),(0,i.kt)("p",null,"Calculates the moments based estimator of pairwise relatedness by Wang (2002)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Single Locus Equation:"),(0,i.kt)("li",{parentName:"ul"},"How to combine multiple loci: Each individual locus subcomponent (b-g) and each genotypic state (P1-P3) is averaged weighted by the average similarity of unrelated dyads at each locus. Then the values of V, \u03a6, \u0394, and r are calculated"),(0,i.kt)("li",{parentName:"ul"},"Assumes no inbreeding"),(0,i.kt)("li",{parentName:"ul"},"Corrected for sampling bias in allele frequencies to get an unbiased estimator")),(0,i.kt)("p",null,"Wang, J. (2002). An estimator for pairwise relatedness using molecular markers. Genetics, 160(3), 1203-1215."))}c.isMDXComponent=!0}}]);