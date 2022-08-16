"use strict";(self.webpackChunkpop_gen_jl=self.webpackChunkpop_gen_jl||[]).push([[9816],{3905:function(e,i,n){n.d(i,{Zo:function(){return u},kt:function(){return f}});var t=n(7294);function a(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function l(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?l(Object(n),!0).forEach((function(i){a(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function o(e,i){if(null==e)return{};var n,t,a=function(e,i){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(a[n]=e[n]);return a}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),p=function(e){var i=t.useContext(s),n=i;return e&&(n="function"==typeof e?e(i):r(r({},i),e)),n},u=function(e){var i=p(e.components);return t.createElement(s.Provider,{value:i},e.children)},d={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},m=t.forwardRef((function(e,i){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,c=m["".concat(s,".").concat(f)]||m[f]||d[f]||l;return n?t.createElement(c,r(r({ref:i},u),{},{components:n})):t.createElement(c,r({ref:i},u))}));function f(e,i){var n=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var s in i)hasOwnProperty.call(i,s)&&(o[s]=i[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9975:function(e,i,n){n.r(i),n.d(i,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var t=n(7462),a=n(3366),l=(n(7294),n(3905)),r=["components"],o={id:"sibship_simulations",title:"Simulate Sibling Pairs",sidebar_label:"Sibling Pairs"},s=void 0,p={unversionedId:"simulations/sibship_simulations",id:"simulations/sibship_simulations",title:"Simulate Sibling Pairs",description:"To perfom simulations, you will need add and import the package PopGenSims.jl (available here).",source:"@site/docs/simulations/sibship.md",sourceDirName:"simulations",slug:"/simulations/sibship_simulations",permalink:"/PopGen.jl/docs/simulations/sibship_simulations",draft:!1,editUrl:"https://github.com/BioJulia/PopGen.jl/edit/documentation/docs/simulations/sibship.md",tags:[],version:"current",lastUpdatedAt:1660664821,formattedLastUpdatedAt:"Aug 16, 2022",frontMatter:{id:"sibship_simulations",title:"Simulate Sibling Pairs",sidebar_label:"Sibling Pairs"},sidebar:"docs",previous:{title:"Breeding Crosses",permalink:"/PopGen.jl/docs/simulations/breedingcrosses"},next:{title:"API (start here)",permalink:"/PopGen.jl/docs/api/"}},u={},d=[{value:"Relationship",id:"relationship",level:3},{value:"Identifying pairs",id:"identifying-pairs",level:3},{value:"Ploidy",id:"ploidy",level:3},{value:"Odd ploidy",id:"odd-ploidy",level:4},{value:"Example",id:"example",level:3}],m={toc:d};function f(e){var i=e.components,n=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,t.Z)({},m,n,{components:i,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"Requires PopGenSims.jl",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"To perfom simulations, you will need add and import the package ",(0,l.kt)("inlineCode",{parentName:"p"},"PopGenSims.jl")," (available ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pdimens/PopGenSims.jl"},"here"),").")),(0,l.kt)("p",null,"It's good practice to use your data to simulate sibling pairs and perform\nrelatedness analyses on the simulations to understand the validity/strength\nof relatedness estimators on your data. To do this, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"simulatekin"),"\nand specify the relationship you want to simulate and how many pairs to create for\nthat relationship."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"simulatekin(data::PopData; fullsib::Int, halfsib::Int, unrelated::Int, parentoffspring::Int, ploidy::Int)\n")),(0,l.kt)("p",null,"This function will simulate mating crosses to generate sample pairs with any combination of\nthe specified relationships, returning a ",(0,l.kt)("inlineCode",{parentName:"p"},"PopData")," object. The simulations will first\ngenerate parents of a given ",(0,l.kt)("inlineCode",{parentName:"p"},"ploidy")," (inferred or specified) by drawing alleles from\na global allele pool derived from the given ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," (i.e. weighted by their frequencies)."),(0,l.kt)("h3",{id:"relationship"},"Relationship"),(0,l.kt)("p",null,"Simulated parents will be crossed to generate samples depending on the ",(0,l.kt)("inlineCode",{parentName:"p"},"relationship"),":\n| relationship | # parents | # offspring | returns |\n|:-------------|:---------:|:------------|:--------|\n|",(0,l.kt)("inlineCode",{parentName:"p"},"fullsib"),"| 2 | 2 full siblings | 2 offspring |\n|",(0,l.kt)("inlineCode",{parentName:"p"},"halfsib"),"| 3 | 2 half siblings | 2 offspring |\n|",(0,l.kt)("inlineCode",{parentName:"p"},"unrelated"),"| - | - | 2 randomly generated individuals |\n|",(0,l.kt)("inlineCode",{parentName:"p"},"parentoffspring"),"| 2 | 1 offspring | 1 parent + 1 offspring |"),(0,l.kt)("h3",{id:"identifying-pairs"},"Identifying pairs"),(0,l.kt)("p",null,"The relationship between the newly generated samples can be identified by:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sample names will specify their simulation number, relationship, and whether parent or offspring",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Naming convention: ",(0,l.kt)("inlineCode",{parentName:"li"},"[simulation #]_[relationship]_[offspring #]")),(0,l.kt)("li",{parentName:"ul"},"example: ",(0,l.kt)("inlineCode",{parentName:"li"},"sim005_fullsib_1")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"[simulation 005]_[full sibling]_[offspring 1]")))),(0,l.kt)("li",{parentName:"ul"},"Their ",(0,l.kt)("inlineCode",{parentName:"li"},"population"),' name will be that of their relationship (e.g. "fullsib")')),(0,l.kt)("admonition",{title:"plugging into relatedness",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"kinship")," function will recognize the population names output from simulating siblingship\nand only estimate relatedness for the appropriate pairs. If you need this functionality, you are\nstrongly discouraged from manually editing the resulting ",(0,l.kt)("inlineCode",{parentName:"p"},"PopData")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"simulatekin"),".")),(0,l.kt)("h3",{id:"ploidy"},"Ploidy"),(0,l.kt)("p",null,"By default, the ploidy of the simulated parents and offspring are inferred from the supplied ",(0,l.kt)("inlineCode",{parentName:"p"},"PopData"),"."),(0,l.kt)("admonition",{title:"adjusting ploidy",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If you have mixed-ploidy data or wish to generate parents and offspring of a ploidy different than the source\n",(0,l.kt)("inlineCode",{parentName:"p"},"PopData")," you can specify the ploidy with which to simulate parents and offspring. For example, if your ",(0,l.kt)("inlineCode",{parentName:"p"},"PopData"),"\nis diploid, but you wish to generate triploid or octoploid parents and offspring, you would specify ",(0,l.kt)("inlineCode",{parentName:"p"},"ploidy = 3"),"\nor ",(0,l.kt)("inlineCode",{parentName:"p"},"ploidy = 8")," repectively.")),(0,l.kt)("h4",{id:"odd-ploidy"},"Odd ploidy"),(0,l.kt)("p",null,"If trying to create offspring with an odd ploidy (3, 5, etc.), each parent has a 50% chance of\ncontributing (\xbd \xd7 ploidy) + 1 alleles for all loci to the offspring. In other words, if ploidy = 3,\nthere's a 50% chance parent_1 will give 2 alleles for every locus for that simulated cross."),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"julia> cats = @nanycats ;\n\njulia> cat_sims = simulatekin(cats, fullsib = 10, halfsib = 50)\nPopData{Diploid, 9 Microsatellite loci}\n  Samples: 120\n  Populations: 2\n\njulia> cat_sims.sampleinfo\n120\xd73 DataFrame\n Row \u2502 name             population  ploidy \n     \u2502 String           String      Int64  \n\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n   1 \u2502 sim01_fullsib_1  fullsib          2\n   2 \u2502 sim01_fullsib_2  fullsib          2\n   3 \u2502 sim02_fullsib_1  fullsib          2\n   4 \u2502 sim02_fullsib_2  fullsib          2\n   5 \u2502 sim03_fullsib_1  fullsib          2\n   6 \u2502 sim03_fullsib_2  fullsib          2\n  \u22ee  \u2502        \u22ee             \u22ee         \u22ee\n 115 \u2502 sim48_halfsib_1  halfsib          2\n 116 \u2502 sim48_halfsib_2  halfsib          2\n 117 \u2502 sim49_halfsib_1  halfsib          2\n 118 \u2502 sim49_halfsib_2  halfsib          2\n 119 \u2502 sim50_halfsib_1  halfsib          2\n 120 \u2502 sim50_halfsib_2  halfsib          2\n                           108 rows omitted\n")))}f.isMDXComponent=!0}}]);