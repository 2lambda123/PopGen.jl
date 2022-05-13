"use strict";(self.webpackChunkpop_gen_jl=self.webpackChunkpop_gen_jl||[]).push([[4977],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5231:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={id:"pairwisefst",title:"PairwiseFST.jl",sidebar_label:"PairwiseFST.jl"},l=void 0,p={unversionedId:"api/PopGen/pairwisefst",id:"api/PopGen/pairwisefst",title:"PairwiseFST.jl",description:"PopGen.jl/src/FStatistics/PairwistFST.jl",source:"@site/docs/api/PopGen/PairwiseFST.md",sourceDirName:"api/PopGen",slug:"/api/PopGen/pairwisefst",permalink:"/PopGen.jl/docs/api/PopGen/pairwisefst",editUrl:"https://github.com/BioJulia/PopGen.jl/edit/documentation/docs/api/PopGen/PairwiseFST.md",tags:[],version:"current",lastUpdatedAt:1636029729,formattedLastUpdatedAt:"11/4/2021",frontMatter:{id:"pairwisefst",title:"PairwiseFST.jl",sidebar_label:"PairwiseFST.jl"},sidebar:"docs",previous:{title:"PCA.jl",permalink:"/PopGen.jl/docs/api/PopGen/pca"},next:{title:"PairwiseKinship.jl",permalink:"/PopGen.jl/docs/api/PopGen/pairwisekinship"}},c={},u=[{value:"PopGen.jl/src/FStatistics/PairwistFST.jl",id:"popgenjlsrcfstatisticspairwistfstjl",level:2},{value:"\ud83d\udd35 Base.show",id:"-baseshow",level:3},{value:"\ud83d\udd35 pairwisefst",id:"-pairwisefst",level:3},{value:"Methods:",id:"methods",level:4}],d={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"popgenjlsrcfstatisticspairwistfstjl"},"PopGen.jl/src/FStatistics/PairwistFST.jl"),(0,a.kt)("p",null,"\ud83d\udce6  => not exported |\n\ud83d\udd35 => exported by PopGen.jl"),(0,a.kt)("h3",{id:"-baseshow"},"\ud83d\udd35 Base.show"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-julia"},"Base.show(io::IO, data::PairwiseFST)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-pairwisefst"},"\ud83d\udd35 pairwisefst"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-julia"},"pairwise_fst(data::PopData; method::String, iterations::Int64)\n")),(0,a.kt)("p",null,"Calculate pairwise FST between populations in a ",(0,a.kt)("inlineCode",{parentName:"p"},"PopData")," object. Set ",(0,a.kt)("inlineCode",{parentName:"p"},"iterations"),"\nto a value greater than ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," to perform a single-tailed permutation test to obtain\nP-values of statistical significance."),(0,a.kt)("h4",{id:"methods"},"Methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"Nei87"'),": Nei (1987) method"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"WC84"')," : Weir-Cockerham (1984) method (default)\n",(0,a.kt)("strong",{parentName:"li"},"Examples"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-julia"},'data = @nancycats\nwc = pairwise_fst(data, method = "WC84")\nwc_sig = pairwise_fst(data, iterations = 1000)\n')))}f.isMDXComponent=!0}}]);