"use strict";(self.webpackChunkpop_gen_jl=self.webpackChunkpop_gen_jl||[]).push([[6595],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),o=n(6010),r={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(7462),o=n(7294),r=n(6010),l=n(2466),i=n(6550),u=n(1980),p=n(7392),c=n(12);function s(e){return function(e){var t,n;return null!=(t=null==(n=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:s(n);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,r=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,u._X)(l),(0,o.useCallback)((function(e){if(l){var t=new URLSearchParams(r.location.search);t.set(l,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[l,r])]}function k(e){var t,n,a,r,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,p=e.groupId,s=d(e),k=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:l,tabValues:s})})),h=k[0],v=k[1],g=f({queryString:u,groupId:p}),b=g[0],y=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),n=(0,c.Nk)(t),a=n[0],r=n[1],[a,(0,o.useCallback)((function(e){t&&r.set(e)}),[t,r])]),N=w[0],P=w[1],D=function(){var e=null!=b?b:N;return m({value:e,tabValues:s})?e:null}();return(0,o.useLayoutEffect)((function(){D&&v(D)}),[D]),{selectedValue:h,selectValue:(0,o.useCallback)((function(e){if(!m({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),P(e)}),[y,P,s]),tabValues:s}}var h=n(2389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,n=e.block,i=e.selectedValue,u=e.selectValue,p=e.tabValues,c=[],s=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=p[n].value;a!==i&&(s(t),u(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,o=c.indexOf(e.currentTarget)+1;n=null!=(a=c[o])?a:c[0];break;case"ArrowLeft":var r,l=c.indexOf(e.currentTarget)-1;n=null!=(r=c[l])?r:c[c.length-1]}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},p.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},l,{className:(0,r.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=r.find((function(e){return e.props.value===a}));return l?(0,o.cloneElement)(l,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=k(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",v.tabList)},o.createElement(g,(0,a.Z)({},e,t)),o.createElement(b,(0,a.Z)({},e,t)))}function w(e){var t=(0,h.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},3872:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=n(4866),i=n(5162),u=["components"],p={id:"exclusion",title:"Data exclusion",sidebar_label:"Data Exclusion"},c=void 0,s={unversionedId:"popdata/exclusion",id:"popdata/exclusion",title:"Data exclusion",description:"This section covers situations where one may want to selectively remove information from PopData.",source:"@site/docs/popdata/exclusion.md",sourceDirName:"popdata",slug:"/popdata/exclusion",permalink:"/PopGen.jl/docs/popdata/exclusion",draft:!1,editUrl:"https://github.com/BioJulia/PopGen.jl/edit/documentation/docs/popdata/exclusion.md",tags:[],version:"current",lastUpdatedAt:1646148647,formattedLastUpdatedAt:"Mar 1, 2022",frontMatter:{id:"exclusion",title:"Data exclusion",sidebar_label:"Data Exclusion"},sidebar:"docs",previous:{title:"Adding sample/locus data",permalink:"/PopGen.jl/docs/popdata/addingdata"},next:{title:"Conditionals",permalink:"/PopGen.jl/docs/popdata/conditionals"}},d={},m=[{value:"Exclude certain things",id:"exclude-certain-things",level:2},{value:"Keyword Arguments",id:"keyword-arguments",level:3},{value:"Keep only certain things",id:"keep-only-certain-things",level:2},{value:"Keyword Arguments",id:"keyword-arguments-1",level:3},{value:"Remove monomorphic loci",id:"remove-monomorphic-loci",level:2},{value:"Remove multiallelic markers",id:"remove-multiallelic-markers",level:2}],f={toc:m},k="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,u);return(0,r.kt)(k,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section covers situations where one may want to selectively remove information from ",(0,r.kt)("inlineCode",{parentName:"p"},"PopData"),". "),(0,r.kt)("h2",{id:"exclude-certain-things"},"Exclude certain things"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-julia"},"exclude(data::PopData, kwargs...)\nomit(data::PopData, kwargs...)\nremove(data::PopData, kwargs...)\n")),(0,r.kt)("p",null,"Returns a new ",(0,r.kt)("inlineCode",{parentName:"p"},"PopData")," object without the criteria provided. Input can be a\nsingle item or, or an array of items. You will be informed you if your criteria\nwere not found in the ",(0,r.kt)("inlineCode",{parentName:"p"},"PopData"),". Using standard Julia conventions, ",(0,r.kt)("inlineCode",{parentName:"p"},"exclude()")," will create a copy of your ",(0,r.kt)("inlineCode",{parentName:"p"},"PopData")," excluding the specific criteria, whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"exclude!()")," will edit the input ",(0,r.kt)("inlineCode",{parentName:"p"},"PopData")," in-place."),(0,r.kt)("h3",{id:"keyword-arguments"},"Keyword Arguments"),(0,r.kt)("p",null,"Everything gets converted to string, so ",(0,r.kt)("inlineCode",{parentName:"p"},"Symbol")," works too if you want to cut down on keystrokes.\nIntegers work too if things are named ",(0,r.kt)("inlineCode",{parentName:"p"},'"1"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"2"'),", etc."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"locus::Union{String, Vector{String}}"),": locus or loci you want to remove from the ",(0,r.kt)("inlineCode",{parentName:"li"},"PopData")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"population::Union{String, Vector{String}}"),": population(s) you want to remove from the ",(0,r.kt)("inlineCode",{parentName:"li"},"PopData")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name::Union{String, Vector{String}}"),": sample(s) you want to remove from the ",(0,r.kt)("inlineCode",{parentName:"li"},"PopData"))),(0,r.kt)(l.Z,{block:!0,defaultValue:"s",values:[{label:"samples",value:"s"},{label:"loci",value:"m"},{label:"populations",value:"p"},{label:"combination",value:"c"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"s",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-julia"},'julia> fewer_sharks = exclude(sharks, name = "cc_001")\nPopData{Diploid, 2209 SNP loci}\n  Samples: 211\n  Populations: 7\n  Other info: ["longitude", "latitude"]\n\njulia> lots_fewer_sharks = remove(sharks, name = ["cc_001", "cc_002", "cc_003"])\nPopData{Diploid, 2209 SNP loci}\n  Samples: 209\n  Populations: 7\n  Other info: ["longitude", "latitude"]\n'))),(0,r.kt)(i.Z,{value:"m",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-julia"},'julia> fewer_shark_loci = exclude(sharks, locus = "contig_475")\nPopData{Diploid, 2208 SNP loci}\n  Samples: 212\n  Populations: 7\n  Other info: ["longitude", "latitude"]\n\njulia> lots_fewer_loci = remove(sharks, locus = ["contig_475", "contig_2784", "contig_8065"])\nPopData{Diploid, 2206 SNP loci}\n  Samples: 212\n  Populations: 7\n  Other info: ["longitude", "latitude"]\n'))),(0,r.kt)(i.Z,{value:"p",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-julia"},'julia> fewer_shark_pops = exclude(sharks, population = "Georgia")\nPopData{Diploid, 2208 SNP loci}\n  Samples: 182\n  Populations: 6\n  Other info: ["longitude", "latitude"]\n\njulia> lots_fewer_pops = remove(sharks, population = ["FloridaKeys", "MideastGulf"])\nPopData{Diploid, 2209 SNP loci}\n  Samples: 119\n  Populations: 5\n  Other info: ["longitude", "latitude"]\n'))),(0,r.kt)(i.Z,{value:"c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-julia"},'julia> tiny_shark = exclude(sharks, locus = "contig_475", name = ["cc_001", "neg_021", "mango_111"], population = ["CapeCanaveral", "kiwi"])\nNotices:\n  sample "mango_111" not found\n  population "kiwi" not found\n\nPopData{Diploid, 2208 SNP loci}\n  Samples: 190\n  Populations: 6\n  Other info: ["longitude", "latitude"]\n')))),(0,r.kt)("p",null,"The in-place variant ",(0,r.kt)("inlineCode",{parentName:"p"},"exclude!()")," follows all the same syntax as ",(0,r.kt)("inlineCode",{parentName:"p"},"exclude()"),", therefore all examples above would be identical for ",(0,r.kt)("inlineCode",{parentName:"p"},"exclude!()"),"."),(0,r.kt)("admonition",{title:"alias functions",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The exclusion commands are interchangeable with ",(0,r.kt)("inlineCode",{parentName:"p"},"omit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"remove"),", both with and\nwithout the bang (",(0,r.kt)("inlineCode",{parentName:"p"},"!"),"). This was done so you can use the function comfortably without\nneeding to remember the specific name to perform it. Maybe you just prefer the word\n",(0,r.kt)("inlineCode",{parentName:"p"},"omit")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"remove"),". We're not here to judge. The examples below use any combination\nof ",(0,r.kt)("inlineCode",{parentName:"p"},"omit"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"remove"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"exclude"),".")),(0,r.kt)("h2",{id:"keep-only-certain-things"},"Keep only certain things"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-julia"},"keep(data::PopData, kwargs...)\n")),(0,r.kt)("p",null,"Returns a new ",(0,r.kt)("inlineCode",{parentName:"p"},"PopData")," object keeping only the occurrences of the specified keyword. All values are\nconverted to ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," for filtering, so ",(0,r.kt)("inlineCode",{parentName:"p"},"Symbol")," and numbers will also work."),(0,r.kt)("h3",{id:"keyword-arguments-1"},"Keyword Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"locus::Union{String, Vector{String}}"),": locus or loci you want to keep in the ",(0,r.kt)("inlineCode",{parentName:"li"},"PopData")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"population::Union{String, Vector{String}}"),": population(s) you want to keep in the ",(0,r.kt)("inlineCode",{parentName:"li"},"PopData")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name::Union{String, Vector{String}}"),": sample(s) you want to keep in the ",(0,r.kt)("inlineCode",{parentName:"li"},"PopData"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cats = @nancycats;\nkeep(cats, population = 1:5)\nkeep(cats, name = ["N100", "N102", "N211"])\nkeep(cats, locus = [:fca8, "fca37"])\n')),(0,r.kt)("h2",{id:"remove-monomorphic-loci"},"Remove monomorphic loci"),(0,r.kt)("p",null,"While included in the file parsers by default, you may want to do this manually with\n",(0,r.kt)("inlineCode",{parentName:"p"},"dropmonomorphic"),", which returns a new ",(0,r.kt)("inlineCode",{parentName:"p"},"PopData")," object excluding any\nmonomorphic loci. You can use the mutable version ",(0,r.kt)("inlineCode",{parentName:"p"},"dropmonomorphic!")," to\nedit a ",(0,r.kt)("inlineCode",{parentName:"p"},"PopData")," object in-place."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-julia"},"dropmonomorphic(::PopData)\ndropmonomorphic!(::PopData)\n")),(0,r.kt)("h2",{id:"remove-multiallelic-markers"},"Remove multiallelic markers"),(0,r.kt)("p",null,"If your data isn't biallelic, you may want to remove multi-allelic markers for\ncertain analyses (for example, the Hudson pairwise FST method requires\nbiallelic data). For that we have ",(0,r.kt)("inlineCode",{parentName:"p"},"dropmultiallelic"),", which returns a new\n",(0,r.kt)("inlineCode",{parentName:"p"},"PopData")," object, and the mutable version ",(0,r.kt)("inlineCode",{parentName:"p"},"dropmultiallelic!"),", which edits a ",(0,r.kt)("inlineCode",{parentName:"p"},"PopData")," object in-place."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-julia"},"dropmultiallelic(::PopData)\ndropmultiallelic(::PopData)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'julia> sharks = @gulfsharks\nPopData{Diploid, 2209 SNP loci}\n  Samples: 212\n  Populations: 7\n  Other info: ["longitude", "latitude"]\n\n\njulia> dropmultiallelic(sharks)\n[ Info: Removing 258 multialleic loci\nPopData{Diploid, 1951 SNP loci}\n  Samples: 212\n  Populations: 7\n  Other info: ["longitude", "latitude"]\n')))}h.isMDXComponent=!0}}]);