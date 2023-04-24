"use strict";(self.webpackChunkpop_gen_jl=self.webpackChunkpop_gen_jl||[]).push([[45],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?i.createElement(h,r(r({ref:n},c),{},{components:t})):i.createElement(h,r({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[m]="string"==typeof e?e:a,r[1]=p;for(var s=2;s<o;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4810:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var i=t(7462),a=t(3366),o=(t(7294),t(3905)),r=["components"],p={id:"pairwisekinship",title:"PairwiseKinship.jl",sidebar_label:"PairwiseKinship.jl"},l=void 0,s={unversionedId:"api/PopGen/pairwisekinship",id:"api/PopGen/pairwisekinship",title:"PairwiseKinship.jl",description:"PopGen.jl/src/Kinship/PairwiseKinship.jl",source:"@site/docs/api/PopGen/PairwiseKinship.md",sourceDirName:"api/PopGen",slug:"/api/PopGen/pairwisekinship",permalink:"/PopGen.jl/docs/api/PopGen/pairwisekinship",draft:!1,editUrl:"https://github.com/BioJulia/PopGen.jl/edit/documentation/docs/api/PopGen/PairwiseKinship.md",tags:[],version:"current",lastUpdatedAt:1658768762,formattedLastUpdatedAt:"Jul 25, 2022",frontMatter:{id:"pairwisekinship",title:"PairwiseKinship.jl",sidebar_label:"PairwiseKinship.jl"},sidebar:"docs",previous:{title:"PairwiseFST.jl",permalink:"/PopGen.jl/docs/api/PopGen/pairwisefst"},next:{title:"KinshipMoments.jl",permalink:"/PopGen.jl/docs/api/PopGen/kinshipmoments"}},c={},m=[{value:"PopGen.jl/src/Kinship/PairwiseKinship.jl",id:"popgenjlsrckinshippairwisekinshipjl",level:2},{value:"\ud83d\udd35 kinship",id:"-kinship",level:3},{value:"\ud83d\udce6 _kinship_noboot_nofreq",id:"-_kinship_noboot_nofreq",level:3},{value:"\ud83d\udce6 _kinship_noboot_freq",id:"-_kinship_noboot_freq",level:3},{value:"\ud83d\udce6 _kinship_boot_nofreq",id:"-_kinship_boot_nofreq",level:3},{value:"\ud83d\udce6 _kinship_boot_freq",id:"-_kinship_boot_freq",level:3},{value:"\ud83d\udd35 kinshiptotable",id:"-kinshiptotable",level:3}],d={toc:m},u="wrapper";function h(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.kt)(u,(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"popgenjlsrckinshippairwisekinshipjl"},"PopGen.jl/src/Kinship/PairwiseKinship.jl"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"\ud83d\udce6  not exported"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\ud83d\udd35  exported by PopGen.jl")))),(0,o.kt)("h3",{id:"-kinship"},"\ud83d\udd35 kinship"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"kinship(data::PopData; method::Function, iterations::Int = 0, interval::Vector{Float64} = [0.025, 0.975])\nkinship(data::PopData, samplenames::AbstractVector{T}; method::Function, iterations::Int = 0, interval::Vector{Float64} = [0.025, 0.975]) where T<:AbstractString\n")),(0,o.kt)("p",null,"Calculate pairwise relatedness estimates for all or specific individuals in a ",(0,o.kt)("inlineCode",{parentName:"p"},"PopData")," object using\nthe specified ",(0,o.kt)("inlineCode",{parentName:"p"},"method")," (see below). Returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"NamedMatrix")," if not performing bootstrapping, otherwise returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"DataFrame")," (since bootstrapping provides more output information). To calculate means, median, standard error, and confidence intervals using bootstrapping,\nset ",(0,o.kt)("inlineCode",{parentName:"p"},"iterations = n")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," is an integer greater than ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," (the default) corresponding to the number\nof bootstrap iterations you wish to perform for each pair. The default confidence interval is ",(0,o.kt)("inlineCode",{parentName:"p"},"[0.0275, 0.975]")," (i.e. 95%), however that can be changed by supplying a ",(0,o.kt)("inlineCode",{parentName:"p"},"Vector{Float64}")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"[low, high]")," to the keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"interval"),". ",(0,o.kt)("strong",{parentName:"p"},"Note:")," samples must be diploid."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data")," : A PopData object"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"samplenames"),": Vector of sample names (optional)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Keyword Arguments")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"method::Function")," : A method function (see below)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"iterations::Int64")," : The number of iterations to perform bootstrapping (default: ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),", will not perform bootstrapping)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"interval::Vector{Float64}")," : A Vector of ","[low, high]"," indicating the confidence intervals you would like for bootstrapping (default: ",(0,o.kt)("inlineCode",{parentName:"li"},"[0.275, 0.975]"),", i.e. 95%)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Methods"),"\n| Method | Type | Method Call |\n|:----|:-----|:-----|\n| ",(0,o.kt)("a",{parentName:"p",href:"https://onlinelibrary.wiley.com/doi/10.1046/j.1365-294X.1996.00094.x"},"Blouin 1996")," | moments-based | ",(0,o.kt)("inlineCode",{parentName:"p"},"Blouin")," |\n| ",(0,o.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1716461/"},"Li & Horvitz 1953"),"| moments-based | ",(0,o.kt)("inlineCode",{parentName:"p"},"LiHorvitz")," |\n| ",(0,o.kt)("a",{parentName:"p",href:"https://bsapubs.onlinelibrary.wiley.com/doi/abs/10.1002/j.1537-2197.1995.tb12679.x"},"Loiselle 1995")," | moments-based | ",(0,o.kt)("inlineCode",{parentName:"p"},"Loiselle")," |\n| ",(0,o.kt)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/3193879/"},"Lynch 1988")," | moments-based | ",(0,o.kt)("inlineCode",{parentName:"p"},"Lynch")," |\n| ",(0,o.kt)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/8514326/"},"Lynch/Li 1993")," | moments-based | ",(0,o.kt)("inlineCode",{parentName:"p"},"LynchLi")," |\n| ",(0,o.kt)("a",{parentName:"p",href:"https://www.genetics.org/content/152/4/1753.short"},"Lynch & Ritland 1999")," | moments-based | ",(0,o.kt)("inlineCode",{parentName:"p"},"LynchRitland")," |\n| ",(0,o.kt)("a",{parentName:"p",href:"https://www.jstor.org/stable/2332142?origin=crossref&seq=1#metadata_info_tab_contents"},"Moran 1950")," | moments-based | ",(0,o.kt)("inlineCode",{parentName:"p"},"Moran")," |\n| ",(0,o.kt)("a",{parentName:"p",href:"https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1558-5646.1989.tb04226.x"},"Queller & Goodnight 1989")," | moments-based | ",(0,o.kt)("inlineCode",{parentName:"p"},"QuellerGoodnight")," |\n| ",(0,o.kt)("a",{parentName:"p",href:"https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1558-5646.1996.tb02347.x"},"Ritland 1996")," | moments-based | ",(0,o.kt)("inlineCode",{parentName:"p"},"Ritland")," |"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"julia> cats = @nancycats ; \n\njulia> kin = kinship(cats, method = Moran)\n237\xd7237 Named Matrix{Float64}\nA \u2572 B \u2502         N215          N216  \u2026          N289          N290\n\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nN215  \u2502 8.13724e-316       1.62338  \u2026       1.04589       1.15351\nN216  \u2502      1.62338       0.29485         0.957724        1.1637\nN217  \u2502     0.673577      0.587163         0.547427      0.709887\nN218  \u2502     0.896935       0.72942         0.919448      0.791255\n\u22ee                  \u22ee             \u22ee  \u22f1             \u22ee             \u22ee\nN297  \u2502     0.757915      0.858834          1.15432        1.2677\nN281  \u2502     0.686057      0.604236         0.942749       1.08762\nN289  \u2502      1.04589      0.957724              0.0         1.104\nN290  \u2502      1.15351        1.1637  \u2026         1.104           0.0\n\njulia> kinship(cats, method = Moran, iterations = 100)\n27966\xd77 DataFrame\n   Row \u2502 sample1  sample2  Moran     bootmean  std       CI_lower      CI_upper \n       \u2502 String   String   Float64   Float64   Float64   Float64       Float64  \n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n     1 \u2502 N215     N216     1.62338   0.376626  0.27286    0.00274863   0.916719\n     2 \u2502 N215     N217     0.673577  0.202888  0.20094    0.00105976   0.59871\n     3 \u2502 N215     N218     0.896935  0.206272  0.232048   7.58373e-5   0.786113\n     4 \u2502 N215     N219     0.988931  0.236503  0.221345  -0.00053018   0.718204\n   \u22ee   \u2502    \u22ee        \u22ee        \u22ee         \u22ee         \u22ee           \u22ee           \u22ee\n 27964 \u2502 N281     N289     0.942749  0.220475  0.200358   0.001656     0.799307\n 27965 \u2502 N281     N290     1.08762   0.285053  0.289967   0.000299019  1.09343\n 27966 \u2502 N289     N290     1.104     0.277445  0.235519   0.00186445   0.858206\n                                                              27959 rows omitted\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-_kinship_noboot_nofreq"},"\ud83d\udce6 _kinship_noboot_nofreq"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"_kinship_noboot_nofreq(data::PopData, method::Function)\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-_kinship_noboot_freq"},"\ud83d\udce6 _kinship_noboot_freq"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"_kinship_noboot_freq(data::PopData, method::Function)\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-_kinship_boot_nofreq"},"\ud83d\udce6 _kinship_boot_nofreq"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"_kinship_boot_nofreq(data::PopData, method::Function, iterations::Int, interval::Vector{Float64} = [0.025, 0.975])\n")),(0,o.kt)("h3",{id:"-_kinship_boot_freq"},"\ud83d\udce6 _kinship_boot_freq"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"_kinship_boot_freq(data::PopData, method::Function, iterations::Int, interval::Vector{Float64} = [0.025, 0.975])\n")),(0,o.kt)("h3",{id:"-kinshiptotable"},"\ud83d\udd35 kinshiptotable"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"kinshiptotable(kinshipresults::T, methd::Symbol) where T<:NamedMatrix\n")),(0,o.kt)("p",null,"Converts the ",(0,o.kt)("inlineCode",{parentName:"p"},"NamedMatrix")," result from the non-bootstrapped ",(0,o.kt)("inlineCode",{parentName:"p"},"kinship()")," results into a ",(0,o.kt)("inlineCode",{parentName:"p"},"DataFrame"),".\nThe second positonal argument (",(0,o.kt)("inlineCode",{parentName:"p"},"methd"),") is the name of the value column (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"kinship"),"). For\nbetter analysis workflow, it would be useful to specify the method for this column, to\nkeep track of which estimator was used (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"Blouin"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"LynchLi"),", etc.)\n",(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"julia> cats = @nancycats ; kin = kinship(cats, method = Moran) ;\njulia> kinshiptotable(kin, :Moran)\n22366\xd73 DataFrame\n   Row \u2502 sample1  sample2  Moran      \n       \u2502 String   String   Float64      \n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n     1 \u2502 cc_001   cc_002    0.00688008\n     2 \u2502 cc_001   cc_003   -0.0286812\n     3 \u2502 cc_001   cc_005   -0.000749142\n     4 \u2502 cc_001   cc_007    0.0516361\n     5 \u2502 cc_001   cc_008    0.0261128\n     6 \u2502 cc_001   cc_009   -0.00187027\n     7 \u2502 cc_001   cc_010    0.0182852\n   \u22ee   \u2502    \u22ee        \u22ee          \u22ee\n 22361 \u2502 seg_028  seg_029  -0.0472928\n 22362 \u2502 seg_028  seg_030  -0.0172853\n 22363 \u2502 seg_028  seg_031  -0.00240921\n 22364 \u2502 seg_029  seg_030  -0.0278483\n 22365 \u2502 seg_029  seg_031   0.0297876\n 22366 \u2502 seg_030  seg_031  -0.0371295\n                      22353 rows omitted\n")))}h.isMDXComponent=!0}}]);