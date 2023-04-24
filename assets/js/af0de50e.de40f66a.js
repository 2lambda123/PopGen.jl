"use strict";(self.webpackChunkpop_gen_jl=self.webpackChunkpop_gen_jl||[]).push([[8759],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),s=r,k=c["".concat(p,".").concat(s)]||c[s]||d[s]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5730:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"genepop",title:"Genepop.jl",sidebar_label:"Genepop.jl"},p=void 0,m={unversionedId:"api/PopGenCore/genepop",id:"api/PopGenCore/genepop",title:"Genepop.jl",description:"PopGenCore.jl/src/io/Genepop.jl",source:"@site/docs/api/PopGenCore/Genepop.md",sourceDirName:"api/PopGenCore",slug:"/api/PopGenCore/genepop",permalink:"/PopGen.jl/docs/api/PopGenCore/genepop",draft:!1,editUrl:"https://github.com/BioJulia/PopGen.jl/edit/documentation/docs/api/PopGenCore/Genepop.md",tags:[],version:"current",lastUpdatedAt:1653413800,formattedLastUpdatedAt:"May 24, 2022",frontMatter:{id:"genepop",title:"Genepop.jl",sidebar_label:"Genepop.jl"},sidebar:"docs",previous:{title:"Delimited.jl",permalink:"/PopGen.jl/docs/api/PopGenCore/delimited"},next:{title:"GeneralUtils.jl",permalink:"/PopGen.jl/docs/api/PopGenCore/generalutils"}},u={},c=[{value:"PopGenCore.jl/src/io/Genepop.jl",id:"popgencorejlsrciogenepopjl",level:2},{value:"\ud83d\udfea genepop",id:"-genepop",level:3}],d={toc:c},s="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(s,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"popgencorejlsrciogenepopjl"},"PopGenCore.jl/src/io/Genepop.jl"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"\ud83d\udce6  not exported"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\ud83d\udfea  exported by PopGenCore.jl"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\ud83d\udd35  exported by PopGen.jl")))),(0,i.kt)("h3",{id:"-genepop"},"\ud83d\udfea genepop"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-julia"},"genepop(infile::String; kwargs...)\n")),(0,i.kt)("p",null,"Load a Genepop format file into memory as a PopData object."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"infile::String")," : path to Genepop file")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Keyword Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"digits::Integer"),": number of digits denoting each allele (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"3"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"popsep::String")," : word that separates populations in ",(0,i.kt)("inlineCode",{parentName:"li"},"infile"),' (default: "POP")'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"diploid::Bool"),"  : whether samples are diploid for parsing optimizations (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"silent::Bool"),"   : whether to print file information during import (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"allow_monomorphic")," : whether to keep monomorphic loci in the dataset (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),")")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"File must follow standard Genepop formatting")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First line is a comment (and skipped)"),(0,i.kt)("li",{parentName:"ul"},"Loci are listed after first line as one-per-line without commas or in single comma-separated row"),(0,i.kt)("li",{parentName:"ul"},"A line with a particular keyword (default ",(0,i.kt)("inlineCode",{parentName:"li"},"POP"),") must delimit populations"),(0,i.kt)("li",{parentName:"ul"},"Sample name is immediately followed by a ",(0,i.kt)("em",{parentName:"li"},"comma")),(0,i.kt)("li",{parentName:"ul"},"File is ",(0,i.kt)("em",{parentName:"li"},"tab or space delimted")," (but not both!)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Genepop file example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wasp_hive.gen: Wasp populations in New York \\n\nLocus1\nLocus2\nLocus3\npop\nOneida_01,  250230  564568  110100\nOneida_02,  252238  568558  100120\nOneida_03,  254230  564558  090100\npop\nNewcomb_01, 254230  564558  080100\nNewcomb_02, 000230  564558  090080\nNewcomb_03, 254230  000000  090100\nNewcomb_04, 254230  564000  090120\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-julia"},'waspsNY = genepop("wasp_hive.gen", digits = 3, popsep = "pop")\n')),(0,i.kt)("hr",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-julia"},'genepop(data::PopData; filename::String = "output.gen", digits::Int = 3, format::String = "vertical")\n')),(0,i.kt)("p",null,"Writes a ",(0,i.kt)("inlineCode",{parentName:"p"},"PopData")," object to a Genepop-formatted file"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data"),": the ",(0,i.kt)("inlineCode",{parentName:"li"},"PopData")," object you wish to convert to a Genepop file")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Keyword arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filename"),": a ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," of the output filename"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"digits")," : an ",(0,i.kt)("inlineCode",{parentName:"li"},"Integer")," indicating how many digits to format each allele as (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"(1, 2)")," => ",(0,i.kt)("inlineCode",{parentName:"li"},"001002")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"digits = 3"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"format")," : a ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," indicating whether loci should be formatted ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"vertically (",(0,i.kt)("inlineCode",{parentName:"li"},'"v"')," or ",(0,i.kt)("inlineCode",{parentName:"li"},'"vertical"'),")"),(0,i.kt)("li",{parentName:"ul"},"hortizontally (",(0,i.kt)("inlineCode",{parentName:"li"},'"h"'),", or ",(0,i.kt)("inlineCode",{parentName:"li"},'"horizontal"'),")"),(0,i.kt)("li",{parentName:"ul"},"Genepop Isolation-By-Distance (",(0,i.kt)("inlineCode",{parentName:"li"},'"ibd"'),") where each sample is a population with long/lat data prepended")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-julia"},'cats = @nancycats;\nfewer_cats = omit_samplenames(cats, samplenames(cats)[1:10]);\njulia> genepop(fewer_cats, filename = "filtered_nancycats.gen", digits = 3, format = "h")\n')))}k.isMDXComponent=!0}}]);