"use strict";(self.webpackChunkpop_gen_jl=self.webpackChunkpop_gen_jl||[]).push([[7675],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=o,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2609:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return d},toc:function(){return c},default:function(){return u}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],l={id:"popdata",title:"The PopData type",sidebar_label:"The PopData type"},p=void 0,s={unversionedId:"popdata/popdata",id:"popdata/popdata",title:"The PopData type",description:"For the PopGen.jl package to be consistent, a standard flexible data structure needs to be defined. The solution is a custom type called PopData. The struct is defined in PopGenCore.jl as:",source:"@site/docs/popdata/popdata.md",sourceDirName:"popdata",slug:"/popdata/",permalink:"/PopGen.jl/docs/popdata/",editUrl:"https://github.com/BioJulia/PopGen.jl/edit/documentation/docs/popdata/popdata.md",tags:[],version:"current",lastUpdatedAt:1646148647,formattedLastUpdatedAt:"3/1/2022",frontMatter:{id:"popdata",title:"The PopData type",sidebar_label:"The PopData type"},sidebar:"docs",previous:{title:"Variant Call Format",permalink:"/PopGen.jl/docs/io/vcf"},next:{title:"Working with PopData",permalink:"/PopGen.jl/docs/popdata/workingwithpopdata"}},d={},c=[{value:"Metadata",id:"metadata",level:2},{value:"Genodata",id:"genodata",level:2},{value:"Other Data Types",id:"other-data-types",level:2},{value:"Genotype",id:"genotype",level:3},{value:"SNP and Msat",id:"snp-and-msat",level:4},{value:"GenoArray",id:"genoarray",level:3},{value:"Acknowledgements",id:"acknowledgements",level:2}],m={toc:c};function u(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For the PopGen.jl package to be consistent, a standard flexible data structure needs to be defined. The solution is a custom type called ",(0,i.kt)("inlineCode",{parentName:"p"},"PopData"),". The struct is defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"PopGenCore.jl")," as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-julia"},"struct PopData\n    metadata::PopDataInfo\n    genodata::DataFrame\nend\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"PopDataInfo")," is a nested object defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"PopGenCore.jl")," as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-julia"},"mutable struct PopDataInfo\n    samples::Int64\n    sampeinfo::DataFrame\n    loci::Int64\n    locusinfo::DataFrame\n    populations::Int64\n    ploidy::Union{Int8, Vector{Int8}}\n    biallelic::Bool\nend\n")),(0,i.kt)("p",null,"As you can see, a ",(0,i.kt)("inlineCode",{parentName:"p"},"PopData")," is made up of two components, one called ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," for sample and locus information, and the other called ",(0,i.kt)("inlineCode",{parentName:"p"},"genodata")," which includes genotype information. This structure allows for easy and convenient access to the fields using dot ",(0,i.kt)("inlineCode",{parentName:"p"},".")," accessors. Both ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"genodata")," are specific in their structure, so here is an illustration to help you visualize a ",(0,i.kt)("inlineCode",{parentName:"p"},"PopData")," object:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"PopData",src:a(8171).Z,width:"3967",height:"2417"})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),'The "PopObj"')),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"PopData")," falls under an AbstractType we call ",(0,i.kt)("inlineCode",{parentName:"p"},"PopObj"),', which is short for "PopGen Object". While not implemented yet,\n',(0,i.kt)("inlineCode",{parentName:"p"},"PopObj"),' exists to futureproof some flexibility into niche data types. Fun fact: we decided to pronounce PopObj as "pop ob" with a silent j because it sounds better than saying "pop obj", but writing it as PopOb looks weird. It\'s a silly little detail that Pavel seems to care a lot about.'))),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," component exists to "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"frontload commonly used values like the number of populations and if the data is biallelic"),(0,i.kt)("li",{parentName:"ol"},"store information about samples or loci that may be relevant in specific applications"),(0,i.kt)("li",{parentName:"ol"},"provide flexibility in storing that information in wide format because storing it in long format would dramatically increase the size of ",(0,i.kt)("inlineCode",{parentName:"li"},"PopData")," objects"),(0,i.kt)("li",{parentName:"ol"},"provide easy access to viewing sample or locus information")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/PopGen.jl/docs/popdata/viewdata"},"viewing data")," for a closer look at accessing this\ninformation."),(0,i.kt)("h2",{id:"genodata"},"Genodata"),(0,i.kt)("p",null,"The genotype information is stored in a separate table lovingly called ",(0,i.kt)("inlineCode",{parentName:"p"},"genodata"),'. This table is rather special in that it is stored in "long" format, i.e. one record per row. Storing data this way makes it a lot easier to interrogate the data and write new functions. It also means the table will have as many rows as loci x samples, which can become a lot. To reduce redundant objects inflating object size, the columns name, population, and locus are each a special type of compressed vector from ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/JuliaData/PooledArrays.jl"},"PooledArrays.jl"),", which is a memory-saving data structure for long repetitive categorical data. Without using this format, ",(0,i.kt)("inlineCode",{parentName:"p"},"gulfsharks"),", whose source file is 3.2mb, would occupy about 27mb in your RAM! The classes of ",(0,i.kt)("inlineCode",{parentName:"p"},".genodata")," can be directly accessed with ",(0,i.kt)("inlineCode",{parentName:"p"},"PopData.genodata.colname")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"PopData")," is the name of your PopData object, and ",(0,i.kt)("inlineCode",{parentName:"p"},"colname")," is one of ",(0,i.kt)("inlineCode",{parentName:"p"},"name, population, locus, genotype"),". See ",(0,i.kt)("a",{parentName:"p",href:"/PopGen.jl/docs/popdata/advancedindexing"},"Advanced Indexing")," for a deeper\ndive into manipulating genodata."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"immutable genotypes")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We use the Tuple type for genotypes of individuals because they are ",(0,i.kt)("strong",{parentName:"p"},"immutable")," (cannot be changed). By the time you're using PopGen.jl, your data should already be filtered and screened. Hand-editing of genotype alleles is ",(0,i.kt)("strong",{parentName:"p"},"strongly")," discouraged, so we outlawed it."))),(0,i.kt)("h2",{id:"other-data-types"},"Other Data Types"),(0,i.kt)("p",null,"While not strictly their own composite types, we also define aliases for genotypes and vectors of genotypes, as their explicit types can get a little unwieldy to use. The types shown below in the code blocks include their name and type (all types are of type ",(0,i.kt)("inlineCode",{parentName:"p"},"DataType"),") on the first line, and what the alias actually defines on the second line."),(0,i.kt)("h3",{id:"genotype"},"Genotype"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-julia"},"Genotype::DataType\nNTuple{N,<:Signed} where N\n")),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"NTuple")," is itself an alias for a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tuple{Vararg{}}")," , but you can think of it as Tuple of ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," length composed of items of a particular type, in this case it's items that are subtypes of ",(0,i.kt)("inlineCode",{parentName:"p"},"Signed")," (the integer types). The length of the tuple (",(0,i.kt)("inlineCode",{parentName:"p"},"N"),") will vary based on the ploidy of the sample, and the element ",(0,i.kt)("inlineCode",{parentName:"p"},"Type")," will vary whether the markers are snps (",(0,i.kt)("inlineCode",{parentName:"p"},"Int8"),") or microsatellites (",(0,i.kt)("inlineCode",{parentName:"p"},"Int16"),"), making this a pretty flexible (but immutable) structure."),(0,i.kt)("h4",{id:"snp-and-msat"},"SNP and Msat"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-julia"},"Snp::NTuple{N,Int8} where N\nMsat::NTuple{N,Int16} where N\n")),(0,i.kt)("p",null,"These are convenience aliases for the two main kinds of NTuples of genotypes you will see.\nThese are typically used internally."),(0,i.kt)("h3",{id:"genoarray"},"GenoArray"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-julia"},"GenoArray::DataType\nAbstractVector{S} where S<:Union{Missing,Genotype}\n")),(0,i.kt)("p",null,"As you can guess from the name, this Type wraps ",(0,i.kt)("inlineCode",{parentName:"p"},"Genotype")," into a Vector, while permitting ",(0,i.kt)("inlineCode",{parentName:"p"},"missing")," values (what's genetics without missing data!?). By using ",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractVector")," (rather than ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector"),"), we also have the flexibility of functions working on things like ",(0,i.kt)("inlineCode",{parentName:"p"},"SubArrays")," out of the box. "),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"why bother defining these aliases?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Getting the most out of Julia and demonstrating good practices means making sure functions work on the things they're supposed to, and give informative error messages when the input isn't suitable for the function (a rare case of ",(0,i.kt)("em",{parentName:"p"},"wanting")," MethodErrors). Without these aliases, functions would either have vague definitions like ",(0,i.kt)("inlineCode",{parentName:"p"},"f(x,y,z) where x <: AbstractArray")," and potentially cause errors, or overly complicated definitions like ",(0,i.kt)("inlineCode",{parentName:"p"},"f(x::AbstractVector{S},y,z) where {N, T<:Signed,S<:NTuple{N,T}}")," and not be very legible. Instead, functions are written as ",(0,i.kt)("inlineCode",{parentName:"p"},"f(x,y,z) where x<:GenotypeArray"),", and that seems like a good compromise of getting the latter while looking like the former."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"lot")," of what's possible in PopGen.jl is thanks to the tireless work of the contributors and maintainers of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/JuliaData/DataFrames.jl"},"DataFrames.jl"),". It's no small task to come up with and maintain a robust, performant, and sensible tabular data type, and they deserve so much credit for it."))}u.isMDXComponent=!0},8171:function(e,t,a){t.Z=a.p+"assets/images/popdata-32f00bf4b9ba778e2f6e4c19c17729de.png"}}]);