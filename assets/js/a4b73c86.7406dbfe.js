"use strict";(self.webpackChunkpop_gen_jl=self.webpackChunkpop_gen_jl||[]).push([[3962],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=o,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return a?n.createElement(f,l(l({ref:t},m),{},{components:a})):n.createElement(f,l({ref:t},m))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8211:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),l=["components"],i={id:"vcf",title:"Variant Call Format",sidebar_label:"Variant Call Format"},p=void 0,s={unversionedId:"io/vcf",id:"io/vcf",title:"Variant Call Format",description:"Import a BCF/VCF file as PopData",source:"@site/docs/io/variantcall.md",sourceDirName:"io",slug:"/io/vcf",permalink:"/PopGen.jl/docs/io/vcf",draft:!1,editUrl:"https://github.com/BioJulia/PopGen.jl/edit/documentation/docs/io/variantcall.md",tags:[],version:"current",lastUpdatedAt:1646061459,formattedLastUpdatedAt:"Feb 28, 2022",frontMatter:{id:"vcf",title:"Variant Call Format",sidebar_label:"Variant Call Format"},sidebar:"docs",previous:{title:"Structure",permalink:"/PopGen.jl/docs/io/structure"},next:{title:"The PopData type",permalink:"/PopGen.jl/docs/popdata/"}},m={},c=[{value:"Import a BCF/VCF file as <code>PopData</code>",id:"import-a-bcfvcf-file-as-popdata",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Keyword Arguments",id:"keyword-arguments",level:3},{value:"Example",id:"example",level:3},{value:"Mixed-Ploidy data",id:"mixed-ploidy-data",level:3},{value:"Format",id:"format",level:3},{value:"Allele encodings",id:"allele-encodings",level:3},{value:"What BCF/VCF files contain",id:"what-bcfvcf-files-contain",level:3},{value:"What BCF/VCF files lack",id:"what-bcfvcf-files-lack",level:3},{value:"Acknowledgements",id:"acknowledgements",level:2}],d={toc:c};function u(e){var t=e.components,a=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"import-a-bcfvcf-file-as-popdata"},"Import a BCF/VCF file as ",(0,r.kt)("inlineCode",{parentName:"h2"},"PopData")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-julia"},"vcf(infile::String; rename_loci::Bool, silent::Bool, allow_monomorphic::Bool)\nbcf(infile::String; rename_loci::Bool, silent::Bool, allow_monomorphic::Bool)\n")),(0,r.kt)("p",null,"PopGen.jl provides the commands ",(0,r.kt)("inlineCode",{parentName:"p"},"vcf")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bcf")," to import a variant call format files into ",(0,r.kt)("inlineCode",{parentName:"p"},"PopData"),". The reader also accepts files that are gzipped. "),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"infile::String")," : path to file, in quotes. ",(0,r.kt)("strong",{parentName:"li"},"must end in ",(0,r.kt)("inlineCode",{parentName:"strong"},".gz")," if gzipped"))),(0,r.kt)("h3",{id:"keyword-arguments"},"Keyword Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rename_loci::Bool"),": whether to simplify loci names to ",(0,r.kt)("inlineCode",{parentName:"li"},"snp_#")," (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"allow_monomorphic::Bool")," : whether to keep monomorphic loci (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"silent::Bool")," : whether to print file information during import (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),")")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-julia"},'cabbage = bcf("/home/data/nappa_cabbage.bcf", rename_loci = true, silent = true)\npotato = vcf("/home/data/russet_potatoes.vcf.gz", allow_monomorphic = true)\n')),(0,r.kt)("h3",{id:"mixed-ploidy-data"},"Mixed-Ploidy data"),(0,r.kt)("p",null,"In the event your variant call file is for mixed-ploidy data (where ploidy is not the same across all samples, e.g. PoolSeq), you will need to perform an additional step after reading in your data as ",(0,r.kt)("inlineCode",{parentName:"p"},"PopData")," to convert the ",(0,r.kt)("inlineCode",{parentName:"p"},".genodata.genotype")," column into a ",(0,r.kt)("inlineCode",{parentName:"p"},"GenoArray"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-julia"},'julia> mydata = bcf("path/to/file.bcf", silent = true, rename_loci = true) ;\n\njulia> mydata.genodata.genotype =  mydata.genodata.genotype |> Array{Union{Missing, NTuple}}\n')),(0,r.kt)("admonition",{title:"WIP",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The extra step required by mixed-ploidy data is a work in progress. Feel free to submit a PR if you have ideas!")),(0,r.kt)("h3",{id:"format"},"Format"),(0,r.kt)("p",null,"Variant Call Format files follow a format standard, and while there is some wiggle-room for optional values, PopGen.jl only requires the core/mandatory components of a BCF/VCF, meaning problems should hopefully not arise regardless of which variant caller you are using (although we use ",(0,r.kt)("inlineCode",{parentName:"p"},"Freebayes")," ourselves). Please open an issue if they do, or reach out to us on the community Slack."),(0,r.kt)("h3",{id:"allele-encodings"},"Allele encodings"),(0,r.kt)("p",null,"When converting to ",(0,r.kt)("inlineCode",{parentName:"p"},"PopData"),", the nucleotides will be recoded according to the table below. Note that this system differs slightly from\nhow PGDSpider2 recodes alleles (the 3 and 4 are switched)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Base"),(0,r.kt)("th",{parentName:"tr",align:"center"},"A"),(0,r.kt)("th",{parentName:"tr",align:"center"},"T"),(0,r.kt)("th",{parentName:"tr",align:"center"},"C"),(0,r.kt)("th",{parentName:"tr",align:"center"},"G"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Allele")),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"VCF Filtering"),(0,r.kt)("p",null,"Keep in mind, BCF/VCF files need to be filtered ",(0,r.kt)("strong",{parentName:"p"},"before")," importing them into PopGen.jl. There is no and will be no VCF-filtering functionality to this package, as it is outside of the purpose of PopGen.jl. Refer to ",(0,r.kt)("inlineCode",{parentName:"p"},"vcftools"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bcftools"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"vcflib")," to filter your sequence data. ")),(0,r.kt)("h3",{id:"what-bcfvcf-files-contain"},"What BCF/VCF files contain"),(0,r.kt)("p",null,"Due to the nature of the file format, importing variant call files ",(0,r.kt)("strong",{parentName:"p"},"will")," provide:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"sample names"),(0,r.kt)("li",{parentName:"ul"},"ploidy of each sample"),(0,r.kt)("li",{parentName:"ul"},"locus names"),(0,r.kt)("li",{parentName:"ul"},"genotypes")),(0,r.kt)("h3",{id:"what-bcfvcf-files-lack"},"What BCF/VCF files lack"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"population information"),(0,r.kt)("li",{parentName:"ul"},"geographical coordinate information")),(0,r.kt)("p",null,"This means you will need to add that information separately afterwards. Location data (which is ",(0,r.kt)("em",{parentName:"p"},"optional"),") can be added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PopData")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"locations!")," command. Population names (",(0,r.kt)("em",{parentName:"p"},"mandatory"),") can be added using ",(0,r.kt)("inlineCode",{parentName:"p"},"populations!()")),(0,r.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,r.kt)("p",null,"The heavy lifting of the BCF/VCF reader is thanks to the tremendous efforts of the contributors involved with\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/BioJulia/GeneticVariation.jl"},"GeneticVariation.jl"),", and its successor ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rasmushenningsson/VariantCallFormat.jl"},"VariantCallFormat.jl"),"\nwhich we use to parse files into ",(0,r.kt)("inlineCode",{parentName:"p"},"PopData")," format. More specifically, the two packages use a file parser created from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/BioJulia/Automa.jl"},"Automa.jl"),". If you love the file importer, then give those folks your thanks. If something is wrong and/or you hate the importer, blame us\nfirst (and please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/biojulia/PopGenCore.jl/issues"},"open up an issue")," \ud83d\ude05)."))}u.isMDXComponent=!0}}]);