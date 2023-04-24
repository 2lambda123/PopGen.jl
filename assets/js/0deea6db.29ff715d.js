"use strict";(self.webpackChunkpop_gen_jl=self.webpackChunkpop_gen_jl||[]).push([[6630],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,d=u["".concat(s,".").concat(m)]||u[m]||h[m]||r;return n?i.createElement(d,a(a({ref:t},c),{},{components:n})):i.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3356:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],p={id:"kinshipposthocs",title:"KinshipPostHocs.jl",sidebar_label:"KinshipPostHocs.jl"},s=void 0,l={unversionedId:"api/PopGen/kinshipposthocs",id:"api/PopGen/kinshipposthocs",title:"KinshipPostHocs.jl",description:"PopGen.jl/src/Kinship/KinshipPostHocs.jl",source:"@site/docs/api/PopGen/KinshipPostHocs.md",sourceDirName:"api/PopGen",slug:"/api/PopGen/kinshipposthocs",permalink:"/PopGen.jl/docs/api/PopGen/kinshipposthocs",draft:!1,editUrl:"https://github.com/BioJulia/PopGen.jl/edit/documentation/docs/api/PopGen/KinshipPostHocs.md",tags:[],version:"current",lastUpdatedAt:1653413800,formattedLastUpdatedAt:"May 24, 2022",frontMatter:{id:"kinshipposthocs",title:"KinshipPostHocs.jl",sidebar_label:"KinshipPostHocs.jl"},sidebar:"docs",previous:{title:"KinshipMoments.jl",permalink:"/PopGen.jl/docs/api/PopGen/kinshipmoments"},next:{title:"SummaryInfo.jl",permalink:"/PopGen.jl/docs/api/PopGen/summaryinfo"}},c={},u=[{value:"PopGen.jl/src/Kinship/KinshipPostHocs.jl",id:"popgenjlsrckinshipkinshipposthocsjl",level:2},{value:"\ud83d\udce6 sig_within",id:"-sig_within",level:3},{value:"\ud83d\udd35 kinshipposthoc",id:"-kinshipposthoc",level:3}],h={toc:u},m="wrapper";function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)(m,(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"popgenjlsrckinshipkinshipposthocsjl"},"PopGen.jl/src/Kinship/KinshipPostHocs.jl"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\ud83d\udce6  not exported"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\ud83d\udd35  exported by PopGen.jl")))),(0,r.kt)("h3",{id:"-sig_within"},"\ud83d\udce6 sig_within"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-julia"},"sig_within(data::PopData, results::DataFrame, population::String, iterations::Int = 20000)\n")),(0,r.kt)("h3",{id:"-kinshipposthoc"},"\ud83d\udd35 kinshipposthoc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-julia"},"kinshipposthoc(::PopData, results::Union{DataFrame, NamedTuple}; iterations::Int)\n")),(0,r.kt)("p",null,"Performs a posthoc analysis using the resulting DataFrame or NamedTuple\nfrom ",(0,r.kt)("inlineCode",{parentName:"p"},"kinship()"),". This analysis uses permutations to test if a population has\nsignificantly higher within-population kinship than between-population kinship.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"results")," object must have been generated from the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"PopData"),". Use ",(0,r.kt)("inlineCode",{parentName:"p"},"iterations = "),"\nto specify the number of iterations for the permutation tests (default = ",(0,r.kt)("inlineCode",{parentName:"p"},"20000"),"). ",(0,r.kt)("strong",{parentName:"p"},"Recommended"),"\nthat you use ",(0,r.kt)("inlineCode",{parentName:"p"},"MultipleTesting.jl")," to correct resulting P-values."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-julia"},"julia> cats = @nancycats ;\njulia> rel_out = kinship(cats, method = [Ritland, Moran], iterations = 100);\njulia> kinshipposthoc(cats, rel_out)\n17x3 DataFrame\n Row \u2502 population  Ritland_P  Moran_P\n     \u2502 String      Float64    Float64\n\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n   1 \u2502 1              5.0e-5   5.0e-5\n   2 \u2502 2              5.0e-5   5.0e-5\n   3 \u2502 3              5.0e-5   5.0e-5\n   4 \u2502 4              5.0e-5   5.0e-5\n   5 \u2502 5              5.0e-5   5.0e-5\n   6 \u2502 6              5.0e-5   5.0e-5\n   7 \u2502 7              5.0e-5   5.0e-5\n   8 \u2502 8              5.0e-5   5.0e-5\n   9 \u2502 9              5.0e-5   5.0e-5\n  10 \u2502 10             5.0e-5   5.0e-5\n  11 \u2502 11             5.0e-5   5.0e-5\n  12 \u2502 12             5.0e-5   5.0e-5\n  13 \u2502 13             5.0e-5   5.0e-5\n  14 \u2502 14             5.0e-5   5.0e-5\n  15 \u2502 15             5.0e-5   5.0e-5\n  16 \u2502 16             5.0e-5   5.0e-5\n  17 \u2502 17             5.0e-5   5.0e-5\n")))}d.isMDXComponent=!0}}]);