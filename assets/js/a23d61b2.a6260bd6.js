"use strict";(self.webpackChunkpop_gen_jl=self.webpackChunkpop_gen_jl||[]).push([[3643],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(t),m=i,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[c]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5270:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return c}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),l=["components"],r={id:"conditionals",title:"Conditionals and Logic",sidebar_label:"Conditionals"},s=void 0,p={unversionedId:"popdata/conditionals",id:"popdata/conditionals",title:"Conditionals and Logic",description:"Included in PopGen.jl are some functions to help discriminate your data a bit more. Like all conditionals\u2139\ufe0f, these return true or false depending on the test.",source:"@site/docs/popdata/conditionals.md",sourceDirName:"popdata",slug:"/popdata/conditionals",permalink:"/PopGen.jl/docs/popdata/conditionals",draft:!1,editUrl:"https://github.com/BioJulia/PopGen.jl/edit/documentation/docs/popdata/conditionals.md",tags:[],version:"current",lastUpdatedAt:1646148647,formattedLastUpdatedAt:"Mar 1, 2022",frontMatter:{id:"conditionals",title:"Conditionals and Logic",sidebar_label:"Conditionals"},sidebar:"docs",previous:{title:"Data Exclusion",permalink:"/PopGen.jl/docs/popdata/exclusion"},next:{title:"Population data",permalink:"/PopGen.jl/docs/popdata/populationdata"}},u={},c=[{value:"Homozygosity",id:"homozygosity",level:2},{value:"Heterozygosity",id:"heterozygosity",level:2},{value:"Biallelic data",id:"biallelic-data",level:2}],d={toc:c},m="wrapper";function g(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Included in PopGen.jl are some functions to help discriminate your data a bit more. Like all conditionals\u2139\ufe0f, these return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," depending on the test."),(0,o.kt)("admonition",{title:"\u2139\ufe0f Missing values",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"By Julia's design, conditionals on ",(0,o.kt)("inlineCode",{parentName:"p"},"missing")," values return ",(0,o.kt)("inlineCode",{parentName:"p"},"missing"),". For\nindexing and subsetting reasons, ",(0,o.kt)("inlineCode",{parentName:"p"},"ishom")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ishet")," return ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," on\nmissing values, however unexported methods ",(0,o.kt)("inlineCode",{parentName:"p"},"_ishom")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"_ishet")," return\n",(0,o.kt)("inlineCode",{parentName:"p"},"missing")," as per the standard convention. These unexported methods are critical\nfor calculations where ",(0,o.kt)("inlineCode",{parentName:"p"},"missing")," values should absolutely not be treated as ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,o.kt)("h2",{id:"homozygosity"},"Homozygosity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"ishom(locus::Genotype)\nishom(locus::GenoArray)\n")),(0,o.kt)("p",null,"This will return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if a genotype is homozygous. The ",(0,o.kt)("inlineCode",{parentName:"p"},"GenoaArray")," version\njust broadcasts it across all the genotypes in an array, returning a vector\nof ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"julia> cats = @nancycats ;\njulia> subset = cats[1:10, :genotype]\n10-element Vector{Union{Missing, Tuple{Int16, Int16}}}:\n missing\n missing\n (135, 143)\n (133, 135)\n (133, 135)\n (135, 143)\n (135, 135)\n (135, 143)\n (137, 143)\n (135, 135)\n\njulia> ishom(subset[3])\nfalse\n\njulia> ishom(subset)\n10-element Vector{Bool}:\n 0\n 0\n 0\n 0\n 0\n 0\n 1\n 0\n 0\n 1\n")),(0,o.kt)("admonition",{title:"using skipmissing",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you want to avoid ",(0,o.kt)("inlineCode",{parentName:"p"},"missing")," genotypes, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"skipmissing")," to ignore them. This also works for ",(0,o.kt)("inlineCode",{parentName:"p"},"ishet"),"."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"julia> ishom(skipmissing(subset))\n8-element Vector{Bool}:\n 0\n 0\n 0\n 0\n 1\n 0\n 0\n 1\n"))),(0,o.kt)("p",null,"Another option is to check if a genotype is homozygous for a specific allele. To\ndo that, we exploit Julia's multiple dispatch and use ",(0,o.kt)("inlineCode",{parentName:"p"},"ishom")," again, but with\ndifferent arguments."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"ishom(geno::Genotype, allele::Signed)\nishom(genos::GenoArray, allele::Signed)\n")),(0,o.kt)("p",null,"This will return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the ",(0,o.kt)("inlineCode",{parentName:"p"},"geno")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"genos"),") is/are homozygous for the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"allele"),". Notice that when we query a genotype that doesn't contain that allele, it returns ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"julia> ishom(subset[3], 135)\nfalse\n\njulia> ishom(subset[10], 135)\ntrue\n\njulia> ishom(subset[9], 135)\nfalse\n\njulia> ishom(subset, 135)\n10-element Vector{Bool}:\n 0\n 0\n 0\n 0\n 0\n 0\n 1\n 0\n 0\n 1\n")),(0,o.kt)("h2",{id:"heterozygosity"},"Heterozygosity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"ishet(locus::Genotype)\nishet(locus::GenoArray)\n")),(0,o.kt)("p",null,"This is the exact opposite of ",(0,o.kt)("inlineCode",{parentName:"p"},"ishom"),", returning ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the genotype (or genotypes) is/are heterozygous."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"julia> cats = @nancycats ;\njulia> subset = cats[1:10, :genotype]\n10-element Vector{Union{Missing, Tuple{Int16, Int16}}}:\n missing\n missing\n (135, 143)\n (133, 135)\n (133, 135)\n (135, 143)\n (135, 135)\n (135, 143)\n (137, 143)\n (135, 135)\n\njulia> ishet(subset[3])\ntrue\n\njulia> ishet(subset)\n10-element Vector{Bool}:\n 0\n 0\n 1\n 1\n 1\n 1\n 0\n 1\n 1\n 0\n")),(0,o.kt)("p",null,"We likewise have the option to check if a locus is heterozygous for a specific\nallele. To do that, we again exploit Julia's multiple dispatch and use ",(0,o.kt)("inlineCode",{parentName:"p"},"ishet"),",\nbut with different arguments."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"ishet(geno::Genotype, allele::Signed)\nishet(genos::GenoArray, allele::Signed)\n")),(0,o.kt)("p",null,"This will return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the ",(0,o.kt)("inlineCode",{parentName:"p"},"geno")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"genos"),") is/are heterozygous for the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"allele"),". Notice that when we query a genotype that doesn't contain that allele, it returns ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"julia> ishet(subset[3], 135)\ntrue\n\njulia> ishet(subset[10], 135)\nfalse\n\njulia> ishet(subset[9], 135)\ntrue\n\njulia> ishet(subset, 135)\n10-element Vector{Bool}:\n 0\n 0\n 1\n 1\n 1\n 1\n 0\n 1\n 0\n 0\n")),(0,o.kt)("h2",{id:"biallelic-data"},"Biallelic data"),(0,o.kt)("p",null,"Some analyses are restricted to work exclusively on biallelic data (e.g. Hudson pairwise FST), so it may help to know if things are biallelic."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"isbiallelic(data::GenoArray)\n")),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the ",(0,o.kt)("inlineCode",{parentName:"p"},"GenoArray")," is biallelic, ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," if not."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"isbiallelic(data::PopData)\n")),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," all the loci in the ",(0,o.kt)("inlineCode",{parentName:"p"},"PopData")," are biallelic, ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," if not."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"julia> sharks = @gulfsharks ;\n\njulia> isbiallelic(sharks)\nfalse\n\njulia> drop_multiallelic!(sharks)\n[ Info: Removing 258 multialleic loci\n\njulia> isbiallelic(sharks)\ntrue\n")))}g.isMDXComponent=!0}}]);