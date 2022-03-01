"use strict";(self.webpackChunkpop_gen_jl=self.webpackChunkpop_gen_jl||[]).push([[8918],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=i,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(f,o(o({ref:t},s),{},{components:a})):n.createElement(f,o({ref:t},s))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1013:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return s},toc:function(){return m},default:function(){return u}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],l={id:"readingdata",title:"Reading data",sidebar_label:"Reading data"},p=void 0,d={unversionedId:"io/readingdata",id:"io/readingdata",title:"Reading data",description:"PopGen.jl (via PopGenCore.jl) provides a handful of file readers with which to create PopData. Each of the file types have their own file reader denoted simply by the file type:",source:"@site/docs/io/readingdata.md",sourceDirName:"io",slug:"/io/readingdata",permalink:"/PopGen.jl/docs/io/readingdata",editUrl:"https://github.com/BioJulia/PopGen.jl/edit/documentation/docs/io/readingdata.md",tags:[],version:"current",lastUpdatedAt:1635451805,formattedLastUpdatedAt:"10/28/2021",frontMatter:{id:"readingdata",title:"Reading data",sidebar_label:"Reading data"},sidebar:"docs",previous:{title:"Provided datasets",permalink:"/PopGen.jl/docs/gettingstarted/datasets"},next:{title:"Writing data",permalink:"/PopGen.jl/docs/io/writingdata"}},s={},m=[{value:"<code>PopGen.read()</code>",id:"popgenread",level:2},{value:"Supported File Types",id:"supported-file-types",level:2},{value:"Delimited files",id:"delimited-files",level:3},{value:"Genepop files",id:"genepop-files",level:3},{value:"Stucture files",id:"stucture-files",level:3},{value:"Variant Call Format",id:"variant-call-format",level:3}],c={toc:m};function u(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"PopGen.jl (via PopGenCore.jl) provides a handful of file readers with which to create ",(0,r.kt)("inlineCode",{parentName:"p"},"PopData"),". Each of the file types have their own file reader denoted simply by the file type:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"File Format"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Extensions"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Docstring"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"delimited"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},".csv"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".txt"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsv")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"?delimited"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"genepop"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},".gen"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".genepop")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"?genepop"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"structure"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},".str"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".structure")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"?structure"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"variant call format (vcf)"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},".vcf"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".vcf.gz")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"?vcf"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"variant call format (bcf)"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},".bcf"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".bcf.gz")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"?bcf"))))),(0,r.kt)("p",null,"You're encouraged to use these functions, but PopGen.jl also provides you with an all-encompassing wrapper  ",(0,r.kt)("inlineCode",{parentName:"p"},"PopGen.read()"),". Given the ubiquity of the function name, it is not exported. If using PopGenCore.jl directly, you will need to call it with ",(0,r.kt)("inlineCode",{parentName:"p"},"PopGenCore.read"),"."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Windows users")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure to change the backslashes ",(0,r.kt)("inlineCode",{parentName:"p"},"\\")," in your file path to double-backslashes ",(0,r.kt)("inlineCode",{parentName:"p"},"\\\\")," or forward slashes ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," "))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"monomorphic loci")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"By default, the file reading methods drop monomorphic loci and inform you which were removed, so do not be alarmed if the number of loci in your ",(0,r.kt)("inlineCode",{parentName:"p"},"PopData")," is different from the source data. You can disable this\nbehavior with the argument ",(0,r.kt)("inlineCode",{parentName:"p"},"allow_monomorphic = true"),". Monomorphic loci are removed by default because they\ncan give spurious/misleading results for some analyses, such as relatedness estimators."))),(0,r.kt)("h2",{id:"popgenread"},(0,r.kt)("inlineCode",{parentName:"h2"},"PopGen.read()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-julia"},"PopGen.read(infile::String; kwargs...)\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"infile")," is a String of your filename (in quotes) and ",(0,r.kt)("inlineCode",{parentName:"p"},"kwargs")," are the corresponding keyword arguments associated with your file type. The function ",(0,r.kt)("inlineCode",{parentName:"p"},"PopGen.read()")," uses all the same keyword arguments as do the commands specific to their file types, therefore you should have a look at those commands (usually the defaults suffice)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PopGen.read()")," infers the file type from the file extension, so for it to work properly your file must end with the extensions permitted below (case insensitive). If you're feeling particularly rebellious and your file does not conform to these extensions (such as a genepop file with a ",(0,r.kt)("inlineCode",{parentName:"p"},".gen.final.v2.seriously")," extension), then feel free to use the specific file importers, since they use the same exact syntax, there is zero difference in performance, and ignore file extensions. Ultimately, what crazy extensions you give your files is your business, and we love that about you."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Examples ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-julia"},'salmon = PopGen.read("o_mykiss.gen", digits = 3, popsep = "SALMON")\nginko = PopGen.read("g_biloba.txt", delim = ",", digits = 2, silent = true)\n')),(0,r.kt)("h2",{id:"supported-file-types"},"Supported File Types"),(0,r.kt)("h3",{id:"delimited-files"},(0,r.kt)("a",{parentName:"h3",href:"/PopGen.jl/docs/io/delimited"},"Delimited files")),(0,r.kt)("p",null,"Accepted extensions: ",(0,r.kt)("inlineCode",{parentName:"p"},".csv"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".tsv"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".txt")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"files in which values are separated using a consistent delimiter, such as commas, spaces, or tabs"),(0,r.kt)("li",{parentName:"ul"},"first rows are column names"),(0,r.kt)("li",{parentName:"ul"},"each line represents a row")),(0,r.kt)("h3",{id:"genepop-files"},(0,r.kt)("a",{parentName:"h3",href:"/PopGen.jl/docs/io/genepop"},"Genepop files")),(0,r.kt)("p",null,"Accepted extensions: ",(0,r.kt)("inlineCode",{parentName:"p"},".gen"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".genepop")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"first row is a comment and skipped"),(0,r.kt)("li",{parentName:"ul"},"then comes list of all loci, usually 1-per-line",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"sometimes horizontally arranged and separated by commas"))),(0,r.kt)("li",{parentName:"ul"},"populations separated by a word like ",(0,r.kt)("inlineCode",{parentName:"li"},"POP")),(0,r.kt)("li",{parentName:"ul"},"sample names followed by a ",(0,r.kt)("strong",{parentName:"li"},"comma, then a tab or space")),(0,r.kt)("li",{parentName:"ul"},"genotypes separated by ",(0,r.kt)("strong",{parentName:"li"},"tabs")," or ",(0,r.kt)("strong",{parentName:"li"},"spaces")),(0,r.kt)("li",{parentName:"ul"},"genotypes represented as a combination of ploidy x ",(0,r.kt)("em",{parentName:"li"},"n"),"-digits",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. for genotype 001002 (3 digits per allele)"),(0,r.kt)("li",{parentName:"ul"},"allele 1 = 001"),(0,r.kt)("li",{parentName:"ul"},"allele 2 = 002")))),(0,r.kt)("h3",{id:"stucture-files"},(0,r.kt)("a",{parentName:"h3",href:"/PopGen.jl/docs/io/structure"},"Stucture files")),(0,r.kt)("p",null,"Accepted extensions: ",(0,r.kt)("inlineCode",{parentName:"p"},".str"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".structure")),(0,r.kt)("p",null,"The formats vary between and within Structure and fastStructure files. See the ",(0,r.kt)("a",{parentName:"p",href:"/PopGen.jl/docs/io/structure"},"documentation page"),"\nfor the specific details. "),(0,r.kt)("h3",{id:"variant-call-format"},(0,r.kt)("a",{parentName:"h3",href:"/PopGen.jl/docs/io/vcf"},"Variant Call Format")),(0,r.kt)("p",null,"Accepted extensions: ",(0,r.kt)("inlineCode",{parentName:"p"},".vcf"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"vcf.gz"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".bcf"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".bcf.gz")),(0,r.kt)("p",null,"This format is ",(0,r.kt)("strong",{parentName:"p"},"much")," more complex and variable depending on which variant caller produced the file. If you're super duper interested in the specifications of BCF/VCF files, have a look at the ",(0,r.kt)("a",{parentName:"p",href:"http://samtools.github.io/hts-specs/VCFv4.3.pdf"},"official specification documentation"),"."))}u.isMDXComponent=!0}}]);