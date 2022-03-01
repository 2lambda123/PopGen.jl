"use strict";(self.webpackChunkpop_gen_jl=self.webpackChunkpop_gen_jl||[]).push([[9702],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(t),d=r,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return t?a.createElement(f,l(l({ref:n},m),{},{components:t})):a.createElement(f,l({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3078:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return m},toc:function(){return u},default:function(){return d}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],o={id:"popgensims_samples",title:"Samples.jl",sidebar_label:"Samples.jl"},p=void 0,s={unversionedId:"api/PopGenSims/popgensims_samples",id:"api/PopGenSims/popgensims_samples",title:"Samples.jl",description:"PopGenSims.jl/src/Samples.jl",source:"@site/docs/api/PopGenSims/Samples.md",sourceDirName:"api/PopGenSims",slug:"/api/PopGenSims/popgensims_samples",permalink:"/PopGen.jl/docs/api/PopGenSims/popgensims_samples",editUrl:"https://github.com/BioJulia/PopGen.jl/edit/documentation/docs/api/PopGenSims/Samples.md",tags:[],version:"current",lastUpdatedAt:1636029729,formattedLastUpdatedAt:"11/4/2021",frontMatter:{id:"popgensims_samples",title:"Samples.jl",sidebar_label:"Samples.jl"},sidebar:"docs",previous:{title:"Cross.jl",permalink:"/PopGen.jl/docs/api/PopGenSims/popgensims_cross"},next:{title:"Sibship.jl",permalink:"/PopGen.jl/docs/api/PopGenSims/popgensims_sibship"}},m={},u=[{value:"\ud83d\udce6 sample_locus",id:"-sample_locus",level:3},{value:"\ud83d\udfea simulate",id:"-simulate",level:3}],c={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"PopGenSims.jl/src/Samples.jl\n\ud83d\udce6  => not exported |\n\ud83d\udfea => exported by PopGenSims.jl"),(0,i.kt)("h3",{id:"-sample_locus"},"\ud83d\udce6 sample_locus"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-julia"},"sample_locus(locus::Dict, n::Int, ploidy::Signed)\n")),(0,i.kt)("p",null,"Internal function used by ",(0,i.kt)("inlineCode",{parentName:"p"},"simulate")," to take a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dict")," of alleles => frequencies of a locus and return\n",(0,i.kt)("inlineCode",{parentName:"p"},"n")," number of genotypes (n_alleles = ",(0,i.kt)("inlineCode",{parentName:"p"},"ploidy"),") by using weighted sampling of the\nallele-frequency pairs."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-julia"},"d = Dict(133 => 0.125,135 => 0.5625,143 => 0.25,137 => 0.0625)\n\njulia> sample_locus(d, 3, 2)\n5-element Array{Tuple{Int16,Int16},1}:\n (133, 135)\n (135, 135)\n (143, 137)\n\njulia> sample_locus(d, 3, 3)\n5-element Array{Tuple{Int16,Int16,Int16},1}:\n (135, 135, 133)\n (143, 135, 133)\n (137, 135, 135)\n")),(0,i.kt)("h3",{id:"-simulate"},"\ud83d\udfea simulate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"simulate(data::PopData; n::Int = 100)\n")),(0,i.kt)("p",null,"Simulate ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," number of individuals (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"100"),") per population using per-population\nallele frequencies derived from a ",(0,i.kt)("inlineCode",{parentName:"p"},"PopData")," object. Returns a new ",(0,i.kt)("inlineCode",{parentName:"p"},"PopData")," object."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-julia"},"cats = @nancycats;\n\njulia> sims = simulate(cats , n = 100)\nPopData{Diploid, 9 Microsatellite Loci}\n  Samples: 1700\n  Populations: 17\n  \njulia> sampleinfo(sims)\n\n  1700\xd75 DataFrame\n  Row \u2502 name      population  ploidy   \n      \u2502 String    String      Int8      \n\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    1 \u2502 sim_1     1                2    \n    2 \u2502 sim_2     1                2    \n    3 \u2502 sim_3     1                2    \n    4 \u2502 sim_4     1                2    \n    5 \u2502 sim_5     1                2    \n  \u22ee   \u2502    \u22ee          \u22ee         \u22ee \n 1697 \u2502 sim_1697  17               2  \n 1698 \u2502 sim_1698  17               2  \n 1699 \u2502 sim_1699  17               2  \n 1700 \u2502 sim_1700  17               2  \n                                         1691 rows omitted\n\njulia> genodata(sims)\n15300\xd74 DataFrame\n   Row \u2502 name      population  locus   genotype   \n       \u2502 String    String      String  Tuple\u2026?    \n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n     1 \u2502 sim_1     1           fca8    (135, 143)\n     2 \u2502 sim_1     1           fca23   (136, 146)\n     3 \u2502 sim_1     1           fca43   (141, 145)\n     4 \u2502 sim_1     1           fca45   (120, 126)\n     5 \u2502 sim_1     1           fca77   (156, 156)\n   \u22ee   \u2502    \u22ee          \u22ee         \u22ee         \u22ee\n 15297 \u2502 sim_1700  17          fca78   (150, 150)\n 15298 \u2502 sim_1700  17          fca90   (197, 197)\n 15299 \u2502 sim_1700  17          fca96   (113, 113)\n 15300 \u2502 sim_1700  17          fca37   (208, 208)\n                                15291 rows omitted\n")))}d.isMDXComponent=!0}}]);