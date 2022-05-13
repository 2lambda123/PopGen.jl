"use strict";(self.webpackChunkpop_gen_jl=self.webpackChunkpop_gen_jl||[]).push([[4063],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5144:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return u},toc:function(){return s},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"generalutils",title:"GeneralUtils.jl",sidebar_label:"GeneralUtils.jl"},p=void 0,c={unversionedId:"api/PopGenCore/generalutils",id:"api/PopGenCore/generalutils",title:"GeneralUtils.jl",description:"PopGenCore.jl/src/Utils/GeneralUtils.jl",source:"@site/docs/api/PopGenCore/GeneralUtils.md",sourceDirName:"api/PopGenCore",slug:"/api/PopGenCore/generalutils",permalink:"/PopGen.jl/docs/api/PopGenCore/generalutils",editUrl:"https://github.com/BioJulia/PopGen.jl/edit/documentation/docs/api/PopGenCore/GeneralUtils.md",tags:[],version:"current",lastUpdatedAt:1636029729,formattedLastUpdatedAt:"11/4/2021",frontMatter:{id:"generalutils",title:"GeneralUtils.jl",sidebar_label:"GeneralUtils.jl"},sidebar:"docs",previous:{title:"Genepop.jl",permalink:"/PopGen.jl/docs/api/PopGenCore/genepop"},next:{title:"GenoFreq.jl",permalink:"/PopGen.jl/docs/api/PopGenCore/genofreq"}},u={},s=[{value:"PopGenCore.jl/src/Utils/GeneralUtils.jl",id:"popgencorejlsrcutilsgeneralutilsjl",level:2},{value:"\ud83d\udfea\ud83d\udd35 Base.copy",id:"-basecopy",level:3},{value:"\ud83d\udfea\ud83d\udd35 Base.size",id:"-basesize",level:3},{value:"\ud83d\udfea\ud83d\udd35 Base.sort",id:"-basesort",level:3},{value:"\ud83d\udfea convertcoord",id:"-convertcoord",level:3},{value:"Formatting requirements",id:"formatting-requirements",level:5},{value:"\ud83d\udfea\ud83d\udd35 dropmonomorphic",id:"-dropmonomorphic",level:3},{value:"\ud83d\udfea\ud83d\udd35 dropmonomorphic!",id:"-dropmonomorphic-1",level:3},{value:"\ud83d\udfea\ud83d\udd35 dropmultiallelic(data::PopData)",id:"-dropmultiallelicdatapopdata",level:3},{value:"\ud83d\udfea\ud83d\udd35 dropmultiallelic!(data::PopData)",id:"-dropmultiallelicdatapopdata-1",level:3},{value:"\ud83d\udce6 truncatepath",id:"-truncatepath",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"popgencorejlsrcutilsgeneralutilsjl"},"PopGenCore.jl/src/Utils/GeneralUtils.jl"),(0,l.kt)("p",null,"\ud83d\udce6  => not exported |\n\ud83d\udfea => exported by PopGenCore.jl |\n\ud83d\udd35 => exported by PopGen.jl"),(0,l.kt)("h3",{id:"-basecopy"},"\ud83d\udfea\ud83d\udd35 Base.copy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"Base.copy(data::PopData)\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-basesize"},"\ud83d\udfea\ud83d\udd35 Base.size"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"Base.size(data::PopData)\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-basesort"},"\ud83d\udfea\ud83d\udd35 Base.sort"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"Base.sort(x::NTuple{N,T}) where N where T <: Signed \n")),(0,l.kt)("p",null,"Sort the integers within a Tuple and return the sorted Tuple."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-convertcoord"},"\ud83d\udfea convertcoord"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"convertcoord(coordinate::String)\n")),(0,l.kt)("p",null,"Takes non-decimal-degree format as a ",(0,l.kt)("inlineCode",{parentName:"p"},"String")," and returns it as a decimal degree\n",(0,l.kt)("inlineCode",{parentName:"p"},"Float32"),". Can be broadcasted over an array of coordinate strings to convert them."),(0,l.kt)("h5",{id:"formatting-requirements"},"Formatting requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Coordinates as a ",(0,l.kt)("inlineCode",{parentName:"li"},"String")," separated by spaces (",(0,l.kt)("inlineCode",{parentName:"li"},'"11 43 41"'),") or colons (",(0,l.kt)("inlineCode",{parentName:"li"},'"11:43:41"'),")"),(0,l.kt)("li",{parentName:"ul"},"Must use negative sign (",(0,l.kt)("inlineCode",{parentName:"li"},'"-11 43.52"'),") or single-letter cardinal direction (",(0,l.kt)("inlineCode",{parentName:"li"},'"11 43.52W"'),")"),(0,l.kt)("li",{parentName:"ul"},"Missing data should be coded as the string ",(0,l.kt)("inlineCode",{parentName:"li"},'"missing"')," (can be accomplished with ",(0,l.kt)("inlineCode",{parentName:"li"},"replace!()"),")"),(0,l.kt)("li",{parentName:"ul"},"Can mix colons and spaces (although it's bad practice)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'julia> convertcoord("-41 31.52")\n-41.5253f0\njulia> convertcoord.(["-41 31.52", "25 11:54S"])\n2-element Array{Float32,1}:\n-41.5253\n-25.1983\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-dropmonomorphic"},"\ud83d\udfea\ud83d\udd35 dropmonomorphic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"dropmonomorphic(data::PopData; silent::Bool = false)\n")),(0,l.kt)("p",null,"Return a ",(0,l.kt)("inlineCode",{parentName:"p"},"PopData")," object omitting any monomorphic loci. Will inform you which\nloci were removed."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-dropmonomorphic-1"},"\ud83d\udfea\ud83d\udd35 dropmonomorphic!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"dropmonomorphic!(data::PopData; silent::Bool = false)\n")),(0,l.kt)("p",null,"Edit a ",(0,l.kt)("inlineCode",{parentName:"p"},"PopData")," object in place by omitting any monomorphic loci. Will inform you which\nloci were removed."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-dropmultiallelicdatapopdata"},"\ud83d\udfea\ud83d\udd35 dropmultiallelic(data::PopData)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"dropmultiallelic\n")),(0,l.kt)("p",null,"Return a ",(0,l.kt)("inlineCode",{parentName:"p"},"PopData")," object omitting loci that are not biallelic."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-dropmultiallelicdatapopdata-1"},"\ud83d\udfea\ud83d\udd35 dropmultiallelic!(data::PopData)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"dropmultiallelic!\n")),(0,l.kt)("p",null,"Edit a ",(0,l.kt)("inlineCode",{parentName:"p"},"PopData")," object in place, removing loci that are not biallelic."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-truncatepath"},"\ud83d\udce6 truncatepath"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"truncatepath(text::String)\n")))}m.isMDXComponent=!0}}]);