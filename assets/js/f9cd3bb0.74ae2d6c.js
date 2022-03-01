"use strict";(self.webpackChunkpop_gen_jl=self.webpackChunkpop_gen_jl||[]).push([[1763],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6242:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(7462),o=r(3366),l=(r(7294),r(3905)),a=["components"],i={id:"mathutils",title:"MathUtils.jl",sidebar_label:"MathUtils.jl"},p=void 0,c={unversionedId:"api/PopGenCore/mathutils",id:"api/PopGenCore/mathutils",title:"MathUtils.jl",description:"PopGenCore.jl/src/Utils/MathUtils.jl",source:"@site/docs/api/PopGenCore/MathUtils.md",sourceDirName:"api/PopGenCore",slug:"/api/PopGenCore/mathutils",permalink:"/PopGen.jl/docs/api/PopGenCore/mathutils",editUrl:"https://github.com/BioJulia/PopGen.jl/edit/documentation/docs/api/PopGenCore/MathUtils.md",tags:[],version:"current",lastUpdatedAt:1636029729,formattedLastUpdatedAt:"11/4/2021",frontMatter:{id:"mathutils",title:"MathUtils.jl",sidebar_label:"MathUtils.jl"},sidebar:"docs",previous:{title:"Manipulate.jl",permalink:"/PopGen.jl/docs/api/PopGenCore/manipulate"},next:{title:"MissingUtils.jl",permalink:"/PopGen.jl/docs/api/PopGenCore/missingutils"}},u={},s=[{value:"PopGenCore.jl/src/Utils/MathUtils.jl",id:"popgencorejlsrcutilsmathutilsjl",level:2},{value:"\ud83d\udfea countnonzeros",id:"-countnonzeros",level:3},{value:"\ud83d\udfea reciprocal",id:"-reciprocal",level:3},{value:"\ud83d\udfea reciprocalsum",id:"-reciprocalsum",level:3}],m={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"popgencorejlsrcutilsmathutilsjl"},"PopGenCore.jl/src/Utils/MathUtils.jl"),(0,l.kt)("p",null,"\ud83d\udce6  => not exported |\n\ud83d\udfea => exported by PopGenCore.jl |\n\ud83d\udd35 => exported by PopGen.jl"),(0,l.kt)("h3",{id:"-countnonzeros"},"\ud83d\udfea countnonzeros"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"countnonzeros(x::AbstractVector{T}) where T<:Real\n")),(0,l.kt)("p",null,"Return the number of non-zero values in a vector"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-reciprocal"},"\ud83d\udfea reciprocal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"reciprocal(num::T) where T <: Signed\n")),(0,l.kt)("p",null,"Returns the reciprocal (1/number) of a number. Will return ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," when\nthe number is ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," instead of returning ",(0,l.kt)("inlineCode",{parentName:"p"},"Inf"),"."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-reciprocalsum"},"\ud83d\udfea reciprocalsum"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"reciprocalsum(x::AbstractVector{T}) where T<:Real\n")),(0,l.kt)("p",null,"Return the sum of the reciprocal values of ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),", skipping the ",(0,l.kt)("inlineCode",{parentName:"p"},"Inf")," values\nresulting from divide-by-zero errors."))}d.isMDXComponent=!0}}]);