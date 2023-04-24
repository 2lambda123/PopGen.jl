"use strict";(self.webpackChunkpop_gen_jl=self.webpackChunkpop_gen_jl||[]).push([[7655],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||l;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7200:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],o={id:"clustering",title:"Clustering.jl",sidebar_label:"Clustering.jl"},p=void 0,s={unversionedId:"api/PopGen/clustering",id:"api/PopGen/clustering",title:"Clustering.jl",description:"PopGen.jl/src/KMeans.jl",source:"@site/docs/api/PopGen/Clustering.md",sourceDirName:"api/PopGen",slug:"/api/PopGen/clustering",permalink:"/PopGen.jl/docs/api/PopGen/clustering",draft:!1,editUrl:"https://github.com/BioJulia/PopGen.jl/edit/documentation/docs/api/PopGen/Clustering.md",tags:[],version:"current",lastUpdatedAt:1658766707,formattedLastUpdatedAt:"Jul 25, 2022",frontMatter:{id:"clustering",title:"Clustering.jl",sidebar_label:"Clustering.jl"},sidebar:"docs",previous:{title:"Heterozygosity.jl",permalink:"/PopGen.jl/docs/api/PopGen/heterozygosity"},next:{title:"PCA.jl",permalink:"/PopGen.jl/docs/api/PopGen/pca"}},m={},u=[{value:"PopGen.jl/src/KMeans.jl",id:"popgenjlsrckmeansjl",level:2},{value:"\ud83d\udd35 cutree",id:"-cutree",level:3},{value:"\ud83d\udd35 cluster",id:"-cluster",level:3},{value:"\ud83d\udd35 dbscan",id:"-dbscan",level:3},{value:"\ud83d\udd35 fuzzycmeans",id:"-fuzzycmeans",level:3},{value:"\ud83d\udd35 hclust",id:"-hclust",level:3},{value:"\ud83d\udd35 kmeans",id:"-kmeans",level:3},{value:"\ud83d\udd35 kmedoids",id:"-kmedoids",level:3},{value:"\ud83d\udd35 show",id:"-show",level:3}],c={toc:u},d="wrapper";function k(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"popgenjlsrckmeansjl"},"PopGen.jl/src/KMeans.jl"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\ud83d\udce6  not exported"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\ud83d\udd35  exported by PopGen.jl")))),(0,l.kt)("h3",{id:"-cutree"},"\ud83d\udd35 cutree"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"cutree(::PopData, hcres::Hclust; krange::UnitRange{Int64}, height::Union{Int64, Nothing} = nothing)\ncutree(::PopData, hcres::Hclust; krange::Vector{Int64}, height::Union{Int64, Nothing} = nothing)\n")),(0,l.kt)("p",null,"An expansion to the ",(0,l.kt)("inlineCode",{parentName:"p"},"Clustering.cutree")," method (from Clustering.jl) that performs cluster assignments over ",(0,l.kt)("inlineCode",{parentName:"p"},"krange"),"\non the ",(0,l.kt)("inlineCode",{parentName:"p"},"Hclust")," output from ",(0,l.kt)("inlineCode",{parentName:"p"},"hclust()"),". Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"DataFrame")," of sample names and columns corresponding to assignments\nper k in ",(0,l.kt)("inlineCode",{parentName:"p"},"krange"),". The ",(0,l.kt)("inlineCode",{parentName:"p"},"PopData")," object is used only for retrieving the sample names."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Keyword Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"krange"),": the number of desired clusters, given as a vector (ex. ",(0,l.kt)("inlineCode",{parentName:"li"},"[2,4,5]"),") or range (",(0,l.kt)("inlineCode",{parentName:"li"},"2:5"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"h::Integer"),": the height at which the tree is cut (optional) ")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-cluster"},"\ud83d\udd35 cluster"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"cluster(::PopData, method::Function ; kwargs)\n")),(0,l.kt)("p",null,"A convenience wrapper to perform clustering on a ",(0,l.kt)("inlineCode",{parentName:"p"},"PopData")," object determined by a designated ",(0,l.kt)("inlineCode",{parentName:"p"},"method")," (see below). The\nchosen method must also be supplied with the appropriate keyword arguments for that method. For more information on\na specific method, see its docstring with ",(0,l.kt)("inlineCode",{parentName:"p"},"?methodname")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Clustering Methods")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kmeans"),": K-means++ clustering",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"kwargs: ",(0,l.kt)("inlineCode",{parentName:"li"},"k"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"iterations"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"matrixtype")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kmedoids"),": K-medoids clustering",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"kwargs: ",(0,l.kt)("inlineCode",{parentName:"li"},"k"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"iterations"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"distance"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"matrixtype")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hclust"),": Hierarchical clustering",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"kwargs: ",(0,l.kt)("inlineCode",{parentName:"li"},"linkage"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"branchorder"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"distance"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"matrixtype")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fuzzycmeans"),": Fuzzy C-means lustering",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"kwargs: ",(0,l.kt)("inlineCode",{parentName:"li"},"c"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"fuzziness"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"iterations"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"matrixtype")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dbscan"),": Density-based Spatial Clustering of Applications with Noise (DBSCAN)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"kwargs: ",(0,l.kt)("inlineCode",{parentName:"li"},"radius"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"minpoints"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"distance"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"matrixtype"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-dbscan"},"\ud83d\udd35 dbscan"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"dbscan(::PopData; radius::Float64, minpoints::Int64 = 2, distance::PreMetric = euclidean, matrixtype::Symbol = :pca)\n")),(0,l.kt)("p",null,"An expansion of ",(0,l.kt)("inlineCode",{parentName:"p"},"Clustering.dbscan")," (from Clustering.jl) to perform Density-based Spatial Clustering of Applications with Noise (DBSCAN)\non a PopData object. This is a convenience method which converts the ",(0,l.kt)("inlineCode",{parentName:"p"},"PopData")," object to either an allele frequency or PCA matrix, and performs\nDBSCAN clustering on the distance matrix of that. Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"DbscanResult")," object, which contains the assignments in the\n",(0,l.kt)("inlineCode",{parentName:"p"},".assignments")," field."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Keyword Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"radius::Float64"),": the radius of a point neighborhood"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"minpoints::Int"),": the minimum number of a core point neighbors (default: ",(0,l.kt)("inlineCode",{parentName:"li"},"2"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"distance"),": type of distance matrix to calculate on ",(0,l.kt)("inlineCode",{parentName:"li"},"matrixtype")," (default: ",(0,l.kt)("inlineCode",{parentName:"li"},"euclidean"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/JuliaStats/Distances.jl"},"Distances.jl")," for a list of options (e.g. sqeuclidean, etc.)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"matrixtype"),": type of input matrix (default: ",(0,l.kt)("inlineCode",{parentName:"li"},":pca"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":pca"),": matrix of Principal Components"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":freq"),": matrix of allele frequencies ")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-fuzzycmeans"},"\ud83d\udd35 fuzzycmeans"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"fuzzycmeans(data::PopData; c::Int64, fuzziness::Int64 = 2, iterations::Int64 = 100, matrixtype::Symbol = :pca)\n")),(0,l.kt)("p",null,"An expansion of ",(0,l.kt)("inlineCode",{parentName:"p"},"Clustering.fuzzy_cmeans")," (from Clustering.jl) to perform Fuzzy C-means clustering on a PopData object. This is a convenience method\nwhich converts the ",(0,l.kt)("inlineCode",{parentName:"p"},"PopData")," object to either an allele frequency or PCA matrix, and performs Fuzzy C-means\nclustering on the Euclidean distance matrix of that. Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"FuzzyCMeansResult")," object, which contains the assignment weights in the\n",(0,l.kt)("inlineCode",{parentName:"p"},".weights")," field."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Keyword Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"c"),": the number of desired clusters, given as an ",(0,l.kt)("inlineCode",{parentName:"li"},"Integer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fuzziness::Integer"),": clusters' fuzziness, must be >1 (default: ",(0,l.kt)("inlineCode",{parentName:"li"},"2"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"a fuzziness of 2 is common for systems with unknown numbers of clusters"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"iterations::Int64"),": the maximum number of iterations to attempt to reach convergence (default: ",(0,l.kt)("inlineCode",{parentName:"li"},"100"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"matrixtype"),": type of input matrix to compute (default: ",(0,l.kt)("inlineCode",{parentName:"li"},":pca"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":pca"),": matrix of Principal Components"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":freq"),": matrix of scaled allele frequencies ")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-hclust"},"\ud83d\udd35 hclust"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"hclust(data::PopData; linkage::Symbol = :single, branchorder::Symbol = :r, distance::PreMetric = euclidean, matrixtype::Symbol = :pca)\n")),(0,l.kt)("p",null,"An expansion of ",(0,l.kt)("inlineCode",{parentName:"p"},"Clustering.hclust")," (from Clustering.jl) to perform hierarchical clustering on a PopData object. This is a convenience method\nwhich converts the ",(0,l.kt)("inlineCode",{parentName:"p"},"PopData")," object to either an allele frequency or PCA matrix, converts that into a distance matrix, and performs hierarchical\nclustering on that distance matrix. Returns an ",(0,l.kt)("inlineCode",{parentName:"p"},"Hclust")," object, which contains many metrics but does not include cluster assignments. Use\n",(0,l.kt)("inlineCode",{parentName:"p"},"cutree(::PopData, ::Hclust; krange...)")," to compute the sample assignments for a range of ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," clusters."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Keyword Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"linkage"),": defines how the distances between the data points are aggregated into the distances between the clusters (default: ",(0,l.kt)("inlineCode",{parentName:"li"},":single"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":single"),": use the minimum distance between any of the cluster members"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":average"),": use the mean distance between any of the cluster members"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":complete"),": use the maximum distance between any of the members"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":ward"),": the distance is the increase of the average squared distance of a point to its cluster centroid after merging the two clusters"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":ward_presquared"),": same as ",(0,l.kt)("inlineCode",{parentName:"li"},":ward"),", but assumes that the distances in the distance matrix are already squared."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"branchorder"),": algorithm to order leaves and branches (default: ",(0,l.kt)("inlineCode",{parentName:"li"},":r"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":r"),": ordering based on the node heights and the original elements order (compatible with R's hclust)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":optimal"),': branches are ordered to reduce the distance between neighboring leaves from separate branches using the "fast optimal leaf ordering" ',(0,l.kt)("a",{parentName:"li",href:"https://doi.org/10.1093/bioinformatics/17.suppl_1.S22"},"algorithm")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"distance"),": type of distance matrix to calculate on ",(0,l.kt)("inlineCode",{parentName:"li"},"matrixtype")," (default: ",(0,l.kt)("inlineCode",{parentName:"li"},"euclidean"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/JuliaStats/Distances.jl"},"Distances.jl")," for a list of options (e.g. sqeuclidean, etc.)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"matrixtype"),": type of input matrix (default: ",(0,l.kt)("inlineCode",{parentName:"li"},":pca"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":pca"),": matrix of Principal Components"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":freq"),": matrix of allele frequencies ")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-kmeans"},"\ud83d\udd35 kmeans"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"kmeans(data::PopData; k::Int64, iterations::Int64 = 100, matrixtype::Symbol = :pca)\n")),(0,l.kt)("p",null,"Perform Kmeans clustering (using Kmeans++) on a ",(0,l.kt)("inlineCode",{parentName:"p"},"PopData")," object. Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"KmeansResult"),"\nobject. Use the keyword argument ",(0,l.kt)("inlineCode",{parentName:"p"},"iterations")," (default: 100) to set the maximum number of iterations allowed to\nachieve convergence. Interally, kmeans clustering is performed on either the principal components of the scaled allele frequencies,\nor just the scaled allele frequencies themselves. In both cases, ",(0,l.kt)("inlineCode",{parentName:"p"},"missing")," values are replaced by the global mean allele frequency."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Keyword Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"k"),": the number of desired clusters, given as an ",(0,l.kt)("inlineCode",{parentName:"li"},"Integer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"iterations::Int64"),": the maximum number of iterations to attempt to reach convergence (default: ",(0,l.kt)("inlineCode",{parentName:"li"},"100"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"matrixtype"),": type of input matrix to compute (default: ",(0,l.kt)("inlineCode",{parentName:"li"},":pca"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":pca"),": matrix of Principal Components"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":freq"),": matrix of scaled allele frequencies ")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"julia> cats = @nancycats ;\n\njulia> km = kmeans(cats, k = 2)\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-kmedoids"},"\ud83d\udd35 kmedoids"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"kmedoids(data::PopData; k::Int64, iterations::Int64 = 100, distance::PreMetric = euclidean, matrixtype::Symbol = :pca)\n")),(0,l.kt)("p",null,"Perform Kmedoids clustering on a ",(0,l.kt)("inlineCode",{parentName:"p"},"PopData")," object. Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"KmedoidsResult"),"\nobject. Use the keyword argument ",(0,l.kt)("inlineCode",{parentName:"p"},"iterations")," (default: 100) to set the maximum number of iterations allowed to\nachieve convergence. Interally, kmeans clustering is performed on either the principal components of the scaled allele frequencies,\nor just the scaled allele frequencies themselves. In both cases, ",(0,l.kt)("inlineCode",{parentName:"p"},"missing")," values are replaced by the global mean allele frequency."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Keyword Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"k"),": the number of desired clusters, given as an ",(0,l.kt)("inlineCode",{parentName:"li"},"Integer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"iterations::Int64"),": the maximum number of iterations to attempt to reach convergence (default: ",(0,l.kt)("inlineCode",{parentName:"li"},"100"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"distance"),": type of distance matrix to calculate on ",(0,l.kt)("inlineCode",{parentName:"li"},"matrixtype")," (default: ",(0,l.kt)("inlineCode",{parentName:"li"},"euclidean"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/JuliaStats/Distances.jl"},"Distances.jl")," for a list of options (e.g. sqeuclidean, etc.)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"matrixtype"),": type of input matrix to compute (default: ",(0,l.kt)("inlineCode",{parentName:"li"},":pca"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":pca"),": matrix of Principal Components"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":freq"),": matrix of scaled allele frequencies ")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"-show"},"\ud83d\udd35 show"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-julia"},"Base.show(io::IO, data::KMeansResults)\n")))}k.isMDXComponent=!0}}]);