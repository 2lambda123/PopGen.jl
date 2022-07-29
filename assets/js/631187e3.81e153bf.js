"use strict";(self.webpackChunkpop_gen_jl=self.webpackChunkpop_gen_jl||[]).push([[3097],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9653:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],o={id:"clustering",title:"Clustering",sidebar_label:"Clustering"},s=void 0,p={unversionedId:"analyses/clustering",id:"analyses/clustering",title:"Clustering",description:"Usually the beginning of a study without prior population information requires guesstimating the number of clusters present in the data. This can be accomplished",source:"@site/docs/analyses/clustering.md",sourceDirName:"analyses",slug:"/analyses/clustering",permalink:"/PopGen.jl/docs/analyses/clustering",draft:!1,editUrl:"https://github.com/BioJulia/PopGen.jl/edit/documentation/docs/analyses/clustering.md",tags:[],version:"current",lastUpdatedAt:1659105627,formattedLastUpdatedAt:"Jul 29, 2022",frontMatter:{id:"clustering",title:"Clustering",sidebar_label:"Clustering"},sidebar:"docs",previous:{title:"Hardy-Weinberg Equilibrium",permalink:"/PopGen.jl/docs/analyses/hardyweinberg"},next:{title:"Pairwise F-Statistics",permalink:"/PopGen.jl/docs/analyses/fstatistics"}},m={},u=[{value:"The <code>cluster</code> wrapper",id:"the-cluster-wrapper",level:2},{value:"Clustering Methods",id:"clustering-methods",level:4},{value:"Examples",id:"examples",level:4},{value:"Clustering Methods",id:"clustering-methods-1",level:2},{value:"K-means",id:"k-means",level:3},{value:"K-medoids",id:"k-medoids",level:3},{value:"Hierarchical Clustering",id:"hierarchical-clustering",level:3},{value:"cutree",id:"cutree",level:4},{value:"Fuzzy C-means",id:"fuzzy-c-means",level:3},{value:"DBSCAN",id:"dbscan",level:3},{value:"Acknowledgments",id:"acknowledgments",level:2}],d={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Usually the beginning of a study without prior population information requires guesstimating the number of clusters present in the data. This can be accomplished\nusing a number of methods, like K-means, K-mediods, Fuzzy-C Means, etc. PopGen.jl\nextends several of the clustering algorithms available in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/JuliaStats/Clustering.jl"},"Clustering.jl")," to work directly with PopData objects."),(0,l.kt)("h2",{id:"the-cluster-wrapper"},"The ",(0,l.kt)("inlineCode",{parentName:"h2"},"cluster")," wrapper"),(0,l.kt)("p",null,"All of the clustering methods implemented in PopGen.jl (read below) can be accessed using a single function ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"cluster(::PopData, method::Function; matrixtype::Symbol, kwargs...)\n")),(0,l.kt)("p",null,"A convenience wrapper to perform clustering on a ",(0,l.kt)("inlineCode",{parentName:"p"},"PopData")," object determined by a designated ",(0,l.kt)("inlineCode",{parentName:"p"},"method"),". The\nchosen method must also be supplied with the appropriate keyword arguments for that method. For more information on\na specific method, read more below or see its docstring in a Julia session with ",(0,l.kt)("inlineCode",{parentName:"p"},"?methodname")," (e.g., ",(0,l.kt)("inlineCode",{parentName:"p"},"?kmediods"),"). The keyword argument ",(0,l.kt)("inlineCode",{parentName:"p"},"matrixtype")," refers to which input matrix you would like to use for clustering, one of either ",(0,l.kt)("inlineCode",{parentName:"p"},":pca")," (default, principal components of the scaled allele frequencies) or ",(0,l.kt)("inlineCode",{parentName:"p"},":freq")," (scaled allele frequencies)."),(0,l.kt)("h4",{id:"clustering-methods"},"Clustering Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Method Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Method Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Keyword Arguments"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"kmeans")),(0,l.kt)("td",{parentName:"tr",align:"left"},"K-means++"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"k"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"iterations"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"kmedoids")),(0,l.kt)("td",{parentName:"tr",align:"left"},"K-medoids"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"k"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"iterations"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"hclust")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Hierarchical Clustering"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"linkage"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"branchorder"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"distance"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"fuzzycmeans")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Fuzzy C-means"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"c"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"fuzziness"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"iterations"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"dbscan")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Density-based Spatial Clustering of Applications with Noise (DBSCAN)"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"k"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"iterations"))))),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"julia> cats = @nancycats;\n\njulia> cluster(cats, kmeans, iterations = 100);\n\njulia> cluster(cats, dbscan, matrixtype = :freq)\n")),(0,l.kt)("p",null,"The results of these clustering methods can then be used for validation using any methods available in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/JuliaStats/Clustering.jl"},"Clustering.jl"),"."),(0,l.kt)("admonition",{title:"skipping the wrapper",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Since the clustering methods are exported, you can technically skip the ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster")," wrapper and use any of the methods directly (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"kmeans(PopData, k = 5)"),"), although ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster()")," is the preferred method.")),(0,l.kt)("h2",{id:"clustering-methods-1"},"Clustering Methods"),(0,l.kt)("h3",{id:"k-means"},"K-means"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"kmeans(data::PopData; k::Int64, iterations::Int64 = 100, matrixtype::Symbol = :pca)\n")),(0,l.kt)("p",null,"Perform Kmeans clustering (using Kmeans++ from ",(0,l.kt)("a",{parentName:"p",href:"http://ilpubs.stanford.edu:8090/778/1/2006-13.pdf"},"Arthur & Vassilvitskii 2007"),") on a ",(0,l.kt)("inlineCode",{parentName:"p"},"PopData")," object. Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"KmeansResult"),"\nobject. Use the keyword argument ",(0,l.kt)("inlineCode",{parentName:"p"},"iterations")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"100"),") to set the maximum number of iterations allowed to\nachieve convergence. Clustering is performed on the ",(0,l.kt)("inlineCode",{parentName:"p"},"matrixtype")," principal components of the scaled allele frequencies (",(0,l.kt)("inlineCode",{parentName:"p"},":pca"),"),\nor just the scaled allele frequencies themselves (",(0,l.kt)("inlineCode",{parentName:"p"},":freq"),"). In both cases, ",(0,l.kt)("inlineCode",{parentName:"p"},"missing")," values are replaced by the global mean allele frequency."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Keyword Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"k"),": the number of desired clusters, given as an ",(0,l.kt)("inlineCode",{parentName:"li"},"Integer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"iterations::Int64"),": the maximum number of iterations to attempt to reach convergence (default: ",(0,l.kt)("inlineCode",{parentName:"li"},"100"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"matrixtype"),": type of input matrix to compute (default: ",(0,l.kt)("inlineCode",{parentName:"li"},":pca"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":pca"),": matrix of Principal Components of ",(0,l.kt)("inlineCode",{parentName:"li"},":freq")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":freq"),": matrix of scaled allele frequencies ")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"julia> cats = @nancycats ;\n\njulia> km = kmeans(cats, k = 2)\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"k-medoids"},"K-medoids"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"kmedoids(data::PopData; k::Int64, iterations::Int64 = 100, distance::PreMetric = euclidean, matrixtype::Symbol = :pca)\n")),(0,l.kt)("p",null,"Perform K-medoids (",(0,l.kt)("a",{parentName:"p",href:"https://doi.org/10.1002/9780470316801.ch2"},"Kaufman & Rousseeuw, 1990"),") clustering on a ",(0,l.kt)("inlineCode",{parentName:"p"},"PopData")," object. Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"KmedoidsResult"),"\nobject. Use the keyword argument ",(0,l.kt)("inlineCode",{parentName:"p"},"iterations")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"100"),") to set the maximum number of iterations allowed to\nachieve convergence. Clustering is performed on the ",(0,l.kt)("inlineCode",{parentName:"p"},"matrixtype")," principal components of the scaled allele frequencies (",(0,l.kt)("inlineCode",{parentName:"p"},":pca"),"),\nor just the scaled allele frequencies themselves (",(0,l.kt)("inlineCode",{parentName:"p"},":freq"),"). In both cases, ",(0,l.kt)("inlineCode",{parentName:"p"},"missing")," values are replaced by the global mean allele frequency."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Keyword Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"k"),": the number of desired clusters, given as an ",(0,l.kt)("inlineCode",{parentName:"li"},"Integer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"iterations::Int64"),": the maximum number of iterations to attempt to reach convergence (default: ",(0,l.kt)("inlineCode",{parentName:"li"},"100"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"distance"),": type of distance matrix to calculate on ",(0,l.kt)("inlineCode",{parentName:"li"},"matrixtype")," (default: ",(0,l.kt)("inlineCode",{parentName:"li"},"euclidean"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/JuliaStats/Distances.jl"},"Distances.jl")," for a list of options (e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"sqeuclidean"),", etc.)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"matrixtype"),": type of input matrix to compute (default: ",(0,l.kt)("inlineCode",{parentName:"li"},":pca"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":pca"),": matrix of Principal Components of ",(0,l.kt)("inlineCode",{parentName:"li"},":freq")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":freq"),": matrix of scaled allele frequencies ")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"julia> cats = @nancycats ;\n\njulia> km = kmedoids(cats, k = 2, distance = sqeuclidean)\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"hierarchical-clustering"},"Hierarchical Clustering"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"hclust(data::PopData; linkage::Symbol = :single, branchorder::Symbol = :r, distance::PreMetric = euclidean, matrixtype::Symbol = :pca)\n")),(0,l.kt)("p",null,"Perform hierarchical clustering (",(0,l.kt)("a",{parentName:"p",href:"https://doi.org/10.1093/bioinformatics/17.suppl_1.S22"},"Bar-Joseph ",(0,l.kt)("em",{parentName:"a"},"et al."),", 2001"),") on a PopData object. Returns an ",(0,l.kt)("inlineCode",{parentName:"p"},"Hclust")," object, which contains many metrics but does not include cluster assignments. Use\n",(0,l.kt)("inlineCode",{parentName:"p"},"cutree(::PopData, ::Hclust; krange...)")," to compute the sample assignments for a range of ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," clusters. Clustering is performed on the ",(0,l.kt)("inlineCode",{parentName:"p"},"matrixtype")," principal components of the scaled allele frequencies (",(0,l.kt)("inlineCode",{parentName:"p"},":pca"),"),\nor just the scaled allele frequencies themselves (",(0,l.kt)("inlineCode",{parentName:"p"},":freq"),"). In both cases, ",(0,l.kt)("inlineCode",{parentName:"p"},"missing")," values are replaced by the global mean allele frequency."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Keyword Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"linkage"),": defines how the distances between the data points are aggregated into the distances between the clusters",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":single"),": use the minimum distance between any of the cluster members (default)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":average"),": use the mean distance between any of the cluster members"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":complete"),": use the maximum distance between any of the members"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":ward"),": the distance is the increase of the average squared distance of a point to its cluster centroid after merging the two clusters"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":ward_presquared"),": same as ",(0,l.kt)("inlineCode",{parentName:"li"},":ward"),", but assumes that the distances in the distance matrix are already squared."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"branchorder"),": algorithm to order leaves and branches (default: ",(0,l.kt)("inlineCode",{parentName:"li"},":r"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":r"),": ordering based on the node heights and the original elements order (compatible with R's hclust)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":optimal"),': branches are ordered to reduce the distance between neighboring leaves from separate branches using the "fast optimal leaf ordering" ',(0,l.kt)("a",{parentName:"li",href:"https://doi.org/10.1093/bioinformatics/17.suppl_1.S22"},"algorithm")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"distance"),": type of distance matrix to calculate on ",(0,l.kt)("inlineCode",{parentName:"li"},"matrixtype")," (default: ",(0,l.kt)("inlineCode",{parentName:"li"},"euclidean"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/JuliaStats/Distances.jl"},"Distances.jl")," for a list of options (e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"sqeuclidean"),", etc.)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"matrixtype"),": type of input matrix (default: ",(0,l.kt)("inlineCode",{parentName:"li"},":pca"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":pca"),": matrix of Principal Components of ",(0,l.kt)("inlineCode",{parentName:"li"},":freq")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":freq"),": matrix of allele frequencies")))),(0,l.kt)("h4",{id:"cutree"},"cutree"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"cutree(::PopData, hcres::Hclust; krange::UnitRange{Int64}, height::Union{Int64, Nothing} = nothing)\ncutree(::PopData, hcres::Hclust; krange::Vector{Int64}, height::Union{Int64, Nothing} = nothing)\n")),(0,l.kt)("p",null,"An expansion to the ",(0,l.kt)("inlineCode",{parentName:"p"},"Clustering.cutree")," method (from Clustering.jl) that performs cluster assignments over ",(0,l.kt)("inlineCode",{parentName:"p"},"krange"),"\non the ",(0,l.kt)("inlineCode",{parentName:"p"},"Hclust")," output from ",(0,l.kt)("inlineCode",{parentName:"p"},"hclust()"),". Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"DataFrame")," of sample names and columns corresponding to assignments\nper k in ",(0,l.kt)("inlineCode",{parentName:"p"},"krange"),". The ",(0,l.kt)("inlineCode",{parentName:"p"},"PopData")," object is used only for retrieving the sample names."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Keyword Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"krange"),": the number of desired clusters, given as a vector (ex. ",(0,l.kt)("inlineCode",{parentName:"li"},"[2,4,5]"),") or range (",(0,l.kt)("inlineCode",{parentName:"li"},"2:5"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"h::Integer"),": the height at which the tree is cut (optional) ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"julia> cats = @nancycats ;\n\njulia> hca = hclust(cats, branchorder = :optimal) ;\n\njulia> cutree(cats, hca, krange = 2:5)\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"fuzzy-c-means"},"Fuzzy C-means"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"fuzzycmeans(data::PopData; c::Int64, fuzziness::Int64 = 2, iterations::Int64 = 100, matrixtype::Symbol = :pca)\n")),(0,l.kt)("p",null,"Perform Fuzzy C-means clustering (",(0,l.kt)("a",{parentName:"p",href:"https://doi.org/10.1016/0098-3004(84)90020-7"},"Bezdek ",(0,l.kt)("em",{parentName:"a"},"et al.")," 1984"),") on a PopData object. Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"FuzzyCMeansResult")," object, which contains the assignment weights in the ",(0,l.kt)("inlineCode",{parentName:"p"},".weights")," field. Clustering is performed on the ",(0,l.kt)("inlineCode",{parentName:"p"},"matrixtype")," principal components of the scaled allele frequencies (",(0,l.kt)("inlineCode",{parentName:"p"},":pca"),"),\nor just the scaled allele frequencies themselves (",(0,l.kt)("inlineCode",{parentName:"p"},":freq"),"). In both cases, ",(0,l.kt)("inlineCode",{parentName:"p"},"missing")," values are replaced by the global mean allele frequency."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Keyword Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"c"),": the number of desired clusters, given as an ",(0,l.kt)("inlineCode",{parentName:"li"},"Integer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fuzziness::Integer"),": clusters' fuzziness, must be >1 (default: ",(0,l.kt)("inlineCode",{parentName:"li"},"2"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"a fuzziness of 2 is common for systems with unknown numbers of clusters"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"iterations::Int64"),": the maximum number of iterations to attempt to reach convergence (default: ",(0,l.kt)("inlineCode",{parentName:"li"},"100"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"matrixtype"),": type of input matrix to compute (default: ",(0,l.kt)("inlineCode",{parentName:"li"},":pca"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":pca"),": matrix of Principal Components of ",(0,l.kt)("inlineCode",{parentName:"li"},":freq")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":freq"),": matrix of scaled allele frequencies ")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"julia> cats = @nancycats ;\n\njulia> fuzzycats = fuzzycmeans(cats, c = 5) ;\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"dbscan"},"DBSCAN"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"dbscan(::PopData; radius::Float64, minpoints::Int64 = 2, distance::PreMetric = euclidean, matrixtype::Symbol = :pca)\n")),(0,l.kt)("p",null,"  Perform Density-based Spatial Clustering of Applications with Noise (DBSCAN: ",(0,l.kt)("a",{parentName:"p",href:"https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.121.9220"},"Ester ",(0,l.kt)("em",{parentName:"a"},"et al.")," 1996"),")\non a PopData object. Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"DbscanResult")," object, which contains the assignments in the\n",(0,l.kt)("inlineCode",{parentName:"p"},".assignments")," field. Clustering is performed on the ",(0,l.kt)("inlineCode",{parentName:"p"},"matrixtype")," principal components of the scaled allele frequencies (",(0,l.kt)("inlineCode",{parentName:"p"},":pca"),"),\nor just the scaled allele frequencies themselves (",(0,l.kt)("inlineCode",{parentName:"p"},":freq"),"). In both cases, ",(0,l.kt)("inlineCode",{parentName:"p"},"missing")," values are replaced by the global mean allele frequency."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Keyword Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"radius::Float64"),": the radius of a point neighborhood"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"minpoints::Int"),": the minimum number of a core point neighbors (default: ",(0,l.kt)("inlineCode",{parentName:"li"},"2"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"distance"),": type of distance matrix to calculate on ",(0,l.kt)("inlineCode",{parentName:"li"},"matrixtype")," (default: ",(0,l.kt)("inlineCode",{parentName:"li"},"euclidean"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/JuliaStats/Distances.jl"},"Distances.jl")," for a list of options (e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"sqeuclidean"),", etc.)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"matrixtype"),": type of input matrix (default: ",(0,l.kt)("inlineCode",{parentName:"li"},":pca"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":pca"),": matrix of Principal Components"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":freq"),": matrix of allele frequencies ")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"julia> cats = @nancycats ;\n\njulia> fuzzycats = dbscan(cats, radius = 0.5) ;\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"acknowledgments"},"Acknowledgments"),(0,l.kt)("p",null,"Much of the heavy lifting within these clustering methods are actually the result of the\namazing authors and contributors of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/JuliaStats/Clustering.jl"},"Clustering.jl")," and the Principal Component Analysis available from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/JuliaStats/MultivariateStats.jl"},"MultivariateStats.jl"),"."))}c.isMDXComponent=!0}}]);