"use strict";(self.webpackChunkpop_gen_jl=self.webpackChunkpop_gen_jl||[]).push([[7201],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2100:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return d}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),o=["components"],i={id:"summaryinfo",title:"SummaryInfo.jl",sidebar_label:"SummaryInfo.jl"},p=void 0,s={unversionedId:"api/PopGen/summaryinfo",id:"api/PopGen/summaryinfo",title:"SummaryInfo.jl",description:"PopGen.jl/src/SummaryInfo.jl",source:"@site/docs/api/PopGen/SummaryInfo.md",sourceDirName:"api/PopGen",slug:"/api/PopGen/summaryinfo",permalink:"/PopGen.jl/docs/api/PopGen/summaryinfo",editUrl:"https://github.com/BioJulia/PopGen.jl/edit/documentation/docs/api/PopGen/SummaryInfo.md",tags:[],version:"current",lastUpdatedAt:1636029729,formattedLastUpdatedAt:"11/4/2021",frontMatter:{id:"summaryinfo",title:"SummaryInfo.jl",sidebar_label:"SummaryInfo.jl"},sidebar:"docs",previous:{title:"RelatednessMoments.jl",permalink:"/PopGen.jl/docs/api/PopGen/relatednessmoments"},next:{title:"Utils.jl",permalink:"/PopGen.jl/docs/api/PopGen/utils"}},u={},c=[{value:"PopGen.jl/src/SummaryInfo.jl",id:"popgenjlsrcsummaryinfojl",level:2},{value:"\ud83d\udd35 alleleaverage",id:"-alleleaverage",level:3},{value:"\ud83d\udd35 richness",id:"-richness",level:3},{value:"\ud83d\udd35 summary",id:"-summary",level:3},{value:"Het_obs",id:"het_obs",level:4},{value:"HT",id:"ht",level:4},{value:"HS",id:"hs",level:4},{value:"DST",id:"dst",level:4},{value:"DST\u2032",id:"dst-1",level:4},{value:"HT\u2032",id:"ht-1",level:4},{value:"FST",id:"fst",level:4},{value:"FST\u2032",id:"fst-1",level:4},{value:"FIS",id:"fis",level:4},{value:"DEST",id:"dest",level:4}],m={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"popgenjlsrcsummaryinfojl"},"PopGen.jl/src/SummaryInfo.jl"),(0,l.kt)("p",null,"\ud83d\udce6  => not exported |\n\ud83d\udd35 => exported by PopGen.jl"),(0,l.kt)("h3",{id:"-alleleaverage"},"\ud83d\udd35 alleleaverage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"alleleaverage(data::PopData, rounding::Bool = true)\n")),(0,l.kt)("p",null,"Returns a NamedTuple of the average number of alleles ('mean') and standard deviation (",(0,l.kt)("inlineCode",{parentName:"p"},"stdev"),") of a ",(0,l.kt)("inlineCode",{parentName:"p"},"PopData"),". Use ",(0,l.kt)("inlineCode",{parentName:"p"},"rounding = false")," to not round results. Default (",(0,l.kt)("inlineCode",{parentName:"p"},"true"),") roundsto 4 digits."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"alleleaverage(@nancycats, rounding = false)\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-richness"},"\ud83d\udd35 richness"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"richness(data::PopData)\n")),(0,l.kt)("p",null,"Calculates various allelic richness and returns a table of per-locus allelic richness. Use ",(0,l.kt)("inlineCode",{parentName:"p"},"populations = true")," to calculate richness by locus by population."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-summary"},"\ud83d\udd35 summary"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},'summary(data::PopData; by::String = "global")\n')),(0,l.kt)("p",null,"Provides summary statistics for a ",(0,l.kt)("inlineCode",{parentName:"p"},"PopData")," object. Use ",(0,l.kt)("inlineCode",{parentName:"p"},'by = "locus"')," for\nsummary information by locus. Global values are given as unweighted means of\nthe per-locus parameters."),(0,l.kt)("h4",{id:"het_obs"},"Het_obs"),(0,l.kt)("p",null,"observed heterozygosity given as:"),(0,l.kt)("p",null,"1 - \u2211\u2096 \u2211\u1d62 P\u2096\u1d62\u1d62/np"),(0,l.kt)("p",null,"where Pkii represents the proportion of homozygote ",(0,l.kt)("inlineCode",{parentName:"p"},"i")," in sample ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"np"),"\nis the number of samples in that population"),(0,l.kt)("h4",{id:"ht"},"HT"),(0,l.kt)("p",null,"overall gene diversity given as:"),(0,l.kt)("p",null,"1 - \u2211\u1d62(p\u0304\u1d62\xb2 + (HS / (n\u0303 \xd7 np)) - Het_obs / (2 \xd7 n\u0303 \xd7 np))\nwhere p\u0304\u1d62 = \u2211\u2096p\u2096\u1d62 / np"),(0,l.kt)("h4",{id:"hs"},"HS"),(0,l.kt)("p",null,"within population gene diversity given as:"),(0,l.kt)("p",null,"1 - \u2211\u1d62(p\u1d62\xb2 + HS / (n\u0303 \xd7 np) - Het_obs / (2 \xd7 n\u0303 \xd7 np))\nwhere n\u0303 = np / \u2211\u2096(1/n\u2096)\nwhere p\u0304\u1d62\xb2 = \u2211\u2096(p\u1d62\u2096\xb2 / np)"),(0,l.kt)("h4",{id:"dst"},"DST"),(0,l.kt)("p",null,"amount of gene diversity among samples given as:"),(0,l.kt)("p",null,"HT - HS"),(0,l.kt)("h4",{id:"dst-1"},"DST\u2032"),(0,l.kt)("p",null,"amount of gene diversity among samples adjusted for sample size given as:"),(0,l.kt)("p",null,"(np / (np-1)) \xd7 Dst"),(0,l.kt)("h4",{id:"ht-1"},"HT\u2032"),(0,l.kt)("p",null,"overall gene diversity adjusted for sample size given as:"),(0,l.kt)("p",null,"HS + DST\u2032"),(0,l.kt)("h4",{id:"fst"},"FST"),(0,l.kt)("p",null,"proportion of the total genetic variance in subpopulations relative to the total genetic variance  given as:"),(0,l.kt)("p",null,"DST / HT"),(0,l.kt)("h4",{id:"fst-1"},"FST\u2032"),(0,l.kt)("p",null,"proportion of the total genetic variance in subpopulations relative to the total genetic variance, adjusted for\nheterozygosity given as:"),(0,l.kt)("p",null,"DST\u2032 / HT\u2032"),(0,l.kt)("h4",{id:"fis"},"FIS"),(0,l.kt)("p",null,"proportion of the genetic variance in a locus relative to the genetic variance within subpopulations given as:"),(0,l.kt)("p",null,"1 - (Het_obs / HS)"),(0,l.kt)("h4",{id:"dest"},"DEST"),(0,l.kt)("p",null,"population differentiation (Jost 2008) given as:"),(0,l.kt)("p",null,"(np/(np-1)) \xd7 (Ht'-Hs) / (1-Hs)"))}d.isMDXComponent=!0}}]);