"use strict";(self.webpackChunkpop_gen_jl=self.webpackChunkpop_gen_jl||[]).push([[3507],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),c=r,k=s["".concat(d,".").concat(c)]||s[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(6010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),r=n(7294),i=n(6010),l=n(2389),o=n(7392),d=n(7094),p=n(2466),m="tabList__CuJ",u="tabItem_LNqP";function s(e){var t,n,l=e.lazy,s=e.block,c=e.defaultValue,k=e.values,g=e.groupId,f=e.className,N=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(n=N.find((function(e){return e.props.default})))?void 0:n.props.value)?t:N[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,d.U)(),w=y.tabGroupChoices,C=y.setTabGroupChoices,_=(0,r.useState)(b),x=_[0],j=_[1],O=[],E=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var T=w[g];null!=T&&T!==x&&v.some((function(e){return e.value===T}))&&j(T)}var P=function(e){var t=e.currentTarget,n=O.indexOf(t),a=v[n].value;a!==x&&(E(t),j(a),null!=g&&C(g,String(a)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;n=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var i,l=O.indexOf(e.currentTarget)-1;n=null!=(i=O[l])?i:O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:P,onClick:P},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(N.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function c(e){var t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},5915:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=n(5488),o=n(5162),d=["components"],p={id:"delimited",title:"Delimited",sidebar_label:"Delimited"},m=void 0,u={unversionedId:"io/delimited",id:"io/delimited",title:"Delimited",description:"Import a delimited file as PopData",source:"@site/docs/io/delimited.md",sourceDirName:"io",slug:"/io/delimited",permalink:"/PopGen.jl/docs/io/delimited",draft:!1,editUrl:"https://github.com/BioJulia/PopGen.jl/edit/documentation/docs/io/delimited.md",tags:[],version:"current",lastUpdatedAt:1652451030,formattedLastUpdatedAt:"May 13, 2022",frontMatter:{id:"delimited",title:"Delimited",sidebar_label:"Delimited"},sidebar:"docs",previous:{title:"Baypass",permalink:"/PopGen.jl/docs/io/baypass"},next:{title:"Genepop",permalink:"/PopGen.jl/docs/io/genepop"}},s={},c=[{value:"Import a delimited file as <code>PopData</code>",id:"import-a-delimited-file-as-popdata",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Keyword Arguments",id:"keyword-arguments",level:3},{value:"Example",id:"example",level:3},{value:"Format",id:"format",level:3},{value:"Missing data",id:"missing-data",level:3},{value:"Genotypes",id:"genotypes",level:4},{value:"Location data",id:"location-data",level:4},{value:"Writing to a delimited file",id:"writing-to-a-delimited-file",level:2},{value:"Keyword Arguments",id:"keyword-arguments-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Acknowledgements",id:"acknowledgements",level:2}],k={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"import-a-delimited-file-as-popdata"},"Import a delimited file as ",(0,i.kt)("inlineCode",{parentName:"h2"},"PopData")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-julia"},"delimited(infile::String; kwargs...)\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"infile::String")," : path to the input file, in quotes")),(0,i.kt)("h3",{id:"keyword-arguments"},"Keyword Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"delim::String")," : delimiter characters. The default (",(0,i.kt)("inlineCode",{parentName:"p"},'"auto"'),") uses auto-parsing of ",(0,i.kt)("inlineCode",{parentName:"p"},"CSV.File"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"digits::Integer")," : the number of digits used to denote an allele (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"diploid::Bool"),"  : whether samples are diploid for parsing optimizations (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"silent::Bool")," : whether to print file information during import (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),")"))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'lizardsCA = delimited("CA_lizards.csv", digits = 3);\n')),(0,i.kt)("h3",{id:"format"},"Format"),(0,i.kt)("p",null,"First row is column names, and they occur in this order:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"name"),(0,i.kt)("li",{parentName:"ol"},"population"),(0,i.kt)("li",{parentName:"ol"},"longitude"),(0,i.kt)("li",{parentName:"ol"},"latitude"),(0,i.kt)("li",{parentName:"ol"},"locus_1_name"),(0,i.kt)("li",{parentName:"ol"},"locus_2_name"),(0,i.kt)("li",{parentName:"ol"},"etc...")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Formatting example:")),(0,i.kt)(l.Z,{block:!0,defaultValue:"csv",values:[{label:"raw csv",value:"csv"},{label:"table view",value:"table"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"csv",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"name,population,longitude,latitude,Locus1,Locus2,Locus3\nsierra_01,mountain,11.11,-22.22,001001,-9,001001\nsierra_02,mountain,11.12,-22.21,001001,001001,001002\nsnbarb_01,coast,,,001001,001001,001002\nsnbarb_02,coast,11.14,-22.24,001001,001001,001001\nsnbarb_03,coast,11.15,,001002,001001,001001\n"))),(0,i.kt)(o.Z,{value:"table",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"population"),(0,i.kt)("th",{parentName:"tr",align:"center"},"longitude"),(0,i.kt)("th",{parentName:"tr",align:"center"},"latitude"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Locus1"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Locus2"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Locus3"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"sierra_01"),(0,i.kt)("td",{parentName:"tr",align:"center"},"mountain"),(0,i.kt)("td",{parentName:"tr",align:"center"},"11.11"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-22.22"),(0,i.kt)("td",{parentName:"tr",align:"center"},"001001"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-9"),(0,i.kt)("td",{parentName:"tr",align:"center"},"001001")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"sierra_02"),(0,i.kt)("td",{parentName:"tr",align:"center"},"mountain"),(0,i.kt)("td",{parentName:"tr",align:"center"},"11.12"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-22.21"),(0,i.kt)("td",{parentName:"tr",align:"center"},"001001"),(0,i.kt)("td",{parentName:"tr",align:"center"},"001001"),(0,i.kt)("td",{parentName:"tr",align:"center"},"001002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"snbarb_01"),(0,i.kt)("td",{parentName:"tr",align:"center"},"coast"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"001001"),(0,i.kt)("td",{parentName:"tr",align:"center"},"001001"),(0,i.kt)("td",{parentName:"tr",align:"center"},"001002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"snbarb_02"),(0,i.kt)("td",{parentName:"tr",align:"center"},"coast"),(0,i.kt)("td",{parentName:"tr",align:"center"},"11.14"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-22.24"),(0,i.kt)("td",{parentName:"tr",align:"center"},"001001"),(0,i.kt)("td",{parentName:"tr",align:"center"},"001001"),(0,i.kt)("td",{parentName:"tr",align:"center"},"001001")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"snbarb_03"),(0,i.kt)("td",{parentName:"tr",align:"center"},"coast"),(0,i.kt)("td",{parentName:"tr",align:"center"},"11.15"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"001002"),(0,i.kt)("td",{parentName:"tr",align:"center"},"001001"),(0,i.kt)("td",{parentName:"tr",align:"center"},"001001")))))),(0,i.kt)("h3",{id:"missing-data"},"Missing data"),(0,i.kt)("h4",{id:"genotypes"},"Genotypes"),(0,i.kt)("p",null,"Missing genotypes can be formatted as all-zeros (ex.",(0,i.kt)("inlineCode",{parentName:"p"},"000000"),") or negative-nine ",(0,i.kt)("inlineCode",{parentName:"p"},"-9")),(0,i.kt)("h4",{id:"location-data"},"Location data"),(0,i.kt)("p",null,"If location data is missing for a sample (which is ok!), make sure the value is blank, otherwise there will be transcription errors! (example at line 3 in the example above)"),(0,i.kt)("admonition",{title:"alias",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can also use the command ",(0,i.kt)("inlineCode",{parentName:"p"},"csv()")," synonymously with ",(0,i.kt)("inlineCode",{parentName:"p"},"delimited()"),". ")),(0,i.kt)("h2",{id:"writing-to-a-delimited-file"},"Writing to a delimited file"),(0,i.kt)("p",null,"All file writing options can be performed using ",(0,i.kt)("inlineCode",{parentName:"p"},"PopGen.write()"),", which calls ",(0,i.kt)("inlineCode",{parentName:"p"},"delimited")," when writing to a delimited file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-julia"},'delimited(data::PopData; filename::String, delim::String = ",", digits::Integer = 3, format::String = "wide", miss::Int = 0)\n')),(0,i.kt)("p",null,"Write PopData to a text-delimited file. "),(0,i.kt)("h3",{id:"keyword-arguments-1"},"Keyword Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filename::String"),": the output filename"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"digits::Integer")," : how many digits to format each allele (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"3"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"digits = 3")," will turn ",(0,i.kt)("inlineCode",{parentName:"li"},"(1, 2)")," into ",(0,i.kt)("inlineCode",{parentName:"li"},"001002")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"format::String"),": whether to output in",(0,i.kt)("inlineCode",{parentName:"li"},'"wide"')," or ",(0,i.kt)("inlineCode",{parentName:"li"},'"long"')," (aka ",(0,i.kt)("inlineCode",{parentName:"li"},'"tidy"'),") format ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wide")," : the standard-format CSV for importing into PopGen.jl (default)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"long")," : the ",(0,i.kt)("inlineCode",{parentName:"li"},"loci")," table with ",(0,i.kt)("inlineCode",{parentName:"li"},"longitude")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"latitude")," columns added"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delim::String"),": delimiter to use for writing the file (default: ",(0,i.kt)("inlineCode",{parentName:"li"},'","'),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"miss::Integer"),": how you would like missing values written ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0")," : As a genotype represented as a number of zeroes equal to ",(0,i.kt)("inlineCode",{parentName:"li"},"digits \xd7 ploidy")," like ",(0,i.kt)("inlineCode",{parentName:"li"},"000000")," (default) "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-9")," : As a single value ",(0,i.kt)("inlineCode",{parentName:"li"},"-9"))))),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-julia"},'cats = @nancycats;\nfewer_cats = omit(cats, name = samplenames(cats)[1:10]);\ndelimited(fewer_cats, filename = "filtered_nancycats.gen", digits = 3, format = "wide", delim = " ")\n')),(0,i.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,i.kt)("p",null,"Thanks to the efforts of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/JuliaData/CSV.jl"},"CSV.jl")," team, we are able leverage that package to do much of the heavy lifting within this parser."))}g.isMDXComponent=!0}}]);