"use strict";(self.webpackChunkpop_gen_jl=self.webpackChunkpop_gen_jl||[]).push([[7407],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=i(t),f=o,g=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[s]="string"==typeof e?e:o,l[1]=p;for(var i=2;i<a;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2529:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return s}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],p={id:"genofreq",title:"GenoFreq.jl",sidebar_label:"GenoFreq.jl"},c=void 0,i={unversionedId:"api/PopGenCore/genofreq",id:"api/PopGenCore/genofreq",title:"GenoFreq.jl",description:"PopGenCore.jl/src/GenoFreq.jl",source:"@site/docs/api/PopGenCore/GenoFreq.md",sourceDirName:"api/PopGenCore",slug:"/api/PopGenCore/genofreq",permalink:"/PopGen.jl/docs/api/PopGenCore/genofreq",draft:!1,editUrl:"https://github.com/BioJulia/PopGen.jl/edit/documentation/docs/api/PopGenCore/GenoFreq.md",tags:[],version:"current",lastUpdatedAt:1653413800,formattedLastUpdatedAt:"May 24, 2022",frontMatter:{id:"genofreq",title:"GenoFreq.jl",sidebar_label:"GenoFreq.jl"},sidebar:"docs",previous:{title:"GeneralUtils.jl",permalink:"/PopGen.jl/docs/api/PopGenCore/generalutils"},next:{title:"GenotypeUtils.jl",permalink:"/PopGen.jl/docs/api/PopGenCore/genotypeutils"}},u={},s=[{value:"PopGenCore.jl/src/GenoFreq.jl",id:"popgencorejlsrcgenofreqjl",level:2},{value:"\ud83d\udfea genocount_observed",id:"-genocount_observed",level:3},{value:"\ud83d\udfea genocount_expected",id:"-genocount_expected",level:3},{value:"\ud83d\udfea genofreq",id:"-genofreq",level:3},{value:"\ud83d\udfea genofreq_expected",id:"-genofreq_expected",level:3}],d={toc:s},f="wrapper";function g(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)(f,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"popgencorejlsrcgenofreqjl"},"PopGenCore.jl/src/GenoFreq.jl"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\ud83d\udce6  not exported"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\ud83d\udfea  exported by PopGenCore.jl"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\ud83d\udd35  exported by PopGen.jl")))),(0,a.kt)("h3",{id:"-genocount_observed"},"\ud83d\udfea genocount_observed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-julia"},"genocount_observed(locus::T) where T<:GenotypeArray\n")),(0,a.kt)("p",null,"Return a ",(0,a.kt)("inlineCode",{parentName:"p"},"Dict")," of genotype counts of a single locus in a\n",(0,a.kt)("inlineCode",{parentName:"p"},"PopData")," object."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-genocount_expected"},"\ud83d\udfea genocount_expected"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-julia"},"genocount_expected(locus::T) where T<:GenotypeArray\n")),(0,a.kt)("p",null,"Return a ",(0,a.kt)("inlineCode",{parentName:"p"},"Dict")," of the expected genotype counts of a single locus in a\n",(0,a.kt)("inlineCode",{parentName:"p"},"PopData")," object. Expected counts are calculated as the product of observed allele frequencies multiplied by the number of non-missing genotypes."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-genofreq"},"\ud83d\udfea genofreq"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-julia"},"genofreq(locus::T) where T<:GenotypeArray\n`PopData` object.\n")),(0,a.kt)("p",null,"Return a ",(0,a.kt)("inlineCode",{parentName:"p"},"Dict")," of genotype frequencies of a single locus in a"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-julia"},"genofreq(data::PopData, locus::String; population::Bool = false)\n")),(0,a.kt)("p",null,"Return a ",(0,a.kt)("inlineCode",{parentName:"p"},"Dict")," of genotype frequencies of a single locus in a ",(0,a.kt)("inlineCode",{parentName:"p"},"PopData"),"\nobject. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"population = true")," to return a table of genotype frequencies\nof that locus per population."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-julia"},'cats = @nancycats\ngenofreq(cats, "fca8")\ngenofreq(cats, "fca8", population = true)\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-genofreq_expected"},"\ud83d\udfea genofreq_expected"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-julia"},"genofreq_expected(locus::T) where T<:GenotypeArray\n")),(0,a.kt)("p",null,"Return a ",(0,a.kt)("inlineCode",{parentName:"p"},"Dict")," of the expected genotype frequencies of a single locus in a ",(0,a.kt)("inlineCode",{parentName:"p"},"PopData")," object. Expected frequencies are calculated as the product of\nobserved allele frequencies."),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-julia"},"genofreq_expected(data::PopData, locus::String; population::Bool = false)\n")),(0,a.kt)("p",null,"Return a ",(0,a.kt)("inlineCode",{parentName:"p"},"Dict")," of expected genotype frequencies of a single locus in a\n",(0,a.kt)("inlineCode",{parentName:"p"},"PopData")," object. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"population = true")," to return a table of expected genotype frequencies of that locus per population."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'cats = @nancycats\ngenofreq_expeced(cats, "fca8")\ngenofreq_expected(cats, "fca8", population = true)\n')))}g.isMDXComponent=!0}}]);