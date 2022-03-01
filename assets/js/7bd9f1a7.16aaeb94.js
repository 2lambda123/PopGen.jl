"use strict";(self.webpackChunkpop_gen_jl=self.webpackChunkpop_gen_jl||[]).push([[203],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),p=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),g=i,d=m["".concat(a,".").concat(g)]||m[g]||u[g]||o;return t?r.createElement(d,s(s({ref:n},c),{},{components:t})):r.createElement(d,s({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7140:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return g}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),s=["components"],l={id:"missingutils",title:"MissingUtils.jl",sidebar_label:"MissingUtils.jl"},a=void 0,p={unversionedId:"api/PopGenCore/missingutils",id:"api/PopGenCore/missingutils",title:"MissingUtils.jl",description:"PopGenCore.jl/src/Utils/MissingUtils.jl",source:"@site/docs/api/PopGenCore/MissingUltis.md",sourceDirName:"api/PopGenCore",slug:"/api/PopGenCore/missingutils",permalink:"/PopGen.jl/docs/api/PopGenCore/missingutils",editUrl:"https://github.com/BioJulia/PopGen.jl/edit/documentation/docs/api/PopGenCore/MissingUltis.md",tags:[],version:"current",lastUpdatedAt:1636029729,formattedLastUpdatedAt:"11/4/2021",frontMatter:{id:"missingutils",title:"MissingUtils.jl",sidebar_label:"MissingUtils.jl"},sidebar:"docs",previous:{title:"MathUtils.jl",permalink:"/PopGen.jl/docs/api/PopGenCore/mathutils"},next:{title:"Permutations.jl",permalink:"/PopGen.jl/docs/api/PopGenCore/permutations"}},c={},u=[{value:"PopGenCore.jl/src/Utils/MissingUtils.jl",id:"popgencorejlsrcutilsmissingutilsjl",level:2},{value:"\ud83d\udfea nonmissing",id:"-nonmissing",level:3},{value:"\ud83d\udfea nonmissings",id:"-nonmissings",level:3}],m={toc:u};function g(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"popgencorejlsrcutilsmissingutilsjl"},"PopGenCore.jl/src/Utils/MissingUtils.jl"),(0,o.kt)("p",null,"\ud83d\udce6  => not exported |\n\ud83d\udfea => exported by PopGenCore.jl |\n\ud83d\udd35 => exported by PopGen.jl"),(0,o.kt)("h3",{id:"-nonmissing"},"\ud83d\udfea nonmissing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"nonmissing(vec::T) where T<:AbstractArray\n")),(0,o.kt)("p",null,"Convenience function to count the number of non-",(0,o.kt)("inlineCode",{parentName:"p"},"missing")," values\nin a vector."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"nonmissing(data::PopData, locus::String)\n")),(0,o.kt)("p",null,"Convenience function to count the number of non-",(0,o.kt)("inlineCode",{parentName:"p"},"missing")," samples\nat a locus."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-nonmissings"},"\ud83d\udfea nonmissings"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-julia"},"nonmissings(vec1::AbstractVector, vec2::AbstractVector)\n")),(0,o.kt)("p",null,"Return a vector of indices where neither input vectors have a ",(0,o.kt)("inlineCode",{parentName:"p"},"missing")," value, i.e. an\nintersection of the indices of their non-missing elements."))}g.isMDXComponent=!0}}]);