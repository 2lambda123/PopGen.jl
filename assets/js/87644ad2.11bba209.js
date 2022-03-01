"use strict";(self.webpackChunkpop_gen_jl=self.webpackChunkpop_gen_jl||[]).push([[5138],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,d=m["".concat(l,".").concat(c)]||m[c]||h[c]||o;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5692:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return h},toc:function(){return m},default:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=n(4996),s=["components"],l={slug:"fst",title:"A bit about FST",author:"Pavel Dimens",author_title:"Little this, little that",author_url:"https://github.com/pdimens",author_image_url:"https://avatars1.githubusercontent.com/u/19176506?s=460&u=3afad1d1ef3b09ddc4ab7108143f515be3412d5a&v=4",tags:["info"]},p=void 0,u={permalink:"/PopGen.jl/blog/fst",editUrl:"https://github.com/BioJulia/PopGen.jl/edit/documentation/blog/2021-04-04-fst.md",source:"@site/blog/2021-04-04-fst.md",title:"A bit about FST",description:"If you have spent any time being exposed to population genetics, you've likely encountered the term  FST, our field's most beloved/maligned one-size-fits all coefficient. That description is a gross oversimplification, but the purpose of this post isn't to dig deep into the world of differentiation statistics, but instead shed light on the general concept and the logic behind its significance testing.",date:"2021-04-04T00:00:00.000Z",formattedDate:"April 4, 2021",tags:[{label:"info",permalink:"/PopGen.jl/blog/tags/info"}],readingTime:4.935,truncated:!1,authors:[{name:"Pavel Dimens",title:"Little this, little that",url:"https://github.com/pdimens",imageURL:"https://avatars1.githubusercontent.com/u/19176506?s=460&u=3afad1d1ef3b09ddc4ab7108143f515be3412d5a&v=4"}],frontMatter:{slug:"fst",title:"A bit about FST",author:"Pavel Dimens",author_title:"Little this, little that",author_url:"https://github.com/pdimens",author_image_url:"https://avatars1.githubusercontent.com/u/19176506?s=460&u=3afad1d1ef3b09ddc4ab7108143f515be3412d5a&v=4",tags:["info"]},nextItem:{title:"Relatedness Tutorial",permalink:"/PopGen.jl/blog/relatedness"}},h={authorsImageUrls:[void 0]},m=[{value:"What is FST?",id:"what-is-fst",level:2},{value:"Pairwise FST",id:"pairwise-fst",level:2},{value:"Pitfalls",id:"pitfalls",level:2},{value:"Significance testing",id:"significance-testing",level:2},{value:"Other means",id:"other-means",level:2}],c={toc:m};function d(e){var t=e.components,l=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("link",{rel:"stylesheet",href:(0,r.Z)("katex/katex.min.css")}),(0,o.kt)("h1",{id:"a-bit-about-fst"},"A bit about FST"),(0,o.kt)("p",null,"If you have spent any time being exposed to population genetics, you've likely encountered the term  ",(0,o.kt)("em",{parentName:"p"},"FST"),", our field's most beloved/maligned one-size-fits all coefficient. That description is a gross oversimplification, but the purpose of this post isn't to dig deep into the world of differentiation statistics, but instead shed light on the general concept and the logic behind its significance testing. "),(0,o.kt)("p",null,"If you're like me, you've used and reported some kind of pairwise ",(0,o.kt)("strong",{parentName:"p"},"X"),"ST statistic in your work, where that value was generated using some fantastic software like ",(0,o.kt)("a",{parentName:"p",href:"https://cran.r-project.org/web/packages/adegenet/index.html"},"adegenet")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.bentleydrummer.nl/software/software/GenoDive.html"},"GenoDive"),", and you trusted that the methods were honest and appropriate (they are!). Part of the motivation behind PopGen.jl was to invest time into learning and understanding some of these methods I use, despite not coming from a mathematics or computer science background. Well, as I actually learn stuff and decode methods (no pun intended), I feel like it might be worthwhile to share some of my basic insights with others, in a way that I wish I could have been taught. So, this time it's ",(0,o.kt)("em",{parentName:"p"},"FST"),". The purpose of this post is to cover the larger concepts without getting into the overwhelming math. Let's go!"),(0,o.kt)("h2",{id:"what-is-fst"},"What is FST?"),(0,o.kt)("p",null,"To understand ",(0,o.kt)("em",{parentName:"p"},"FST"),", we need to start with ",(0,o.kt)("em",{parentName:"p"},"F"),", the inbreeding coefficient devised by brilliant-but-ethically-questionable Sewall Wright. The ",(0,o.kt)("em",{parentName:"p"},"F")," coefficient was a mathematically simple way to understand the level of inbreeding in a group, originally described for cattle breeds (the \ud83d\udc04 part isn't relevant, but it's a fun fact). There were three circumstantial versions of ",(0,o.kt)("em",{parentName:"p"},"F"),", denoted by very straightforward subscripted letters: ",(0,o.kt)("em",{parentName:"p"},"FIT"),", ",(0,o.kt)("em",{parentName:"p"},"FIS"),", ",(0,o.kt)("em",{parentName:"p"},"FST"),". The ",(0,o.kt)("strong",{parentName:"p"},"I")," stands for ",(0,o.kt)("strong",{parentName:"p"},"I"),"ndividual, ",(0,o.kt)("strong",{parentName:"p"},"S")," for ",(0,o.kt)("strong",{parentName:"p"},"S"),"ubpopulation, ",(0,o.kt)("strong",{parentName:"p"},"T")," for ",(0,o.kt)("strong",{parentName:"p"},"T"),"otal. The combination of letters explains what relationship you are measuring:  ",(0,o.kt)("em",{parentName:"p"},"FIT")," was the comparison of ",(0,o.kt)("em",{parentName:"p"},"F")," for an Individual vs the Total, ",(0,o.kt)("em",{parentName:"p"},"FIS")," was the comparison of ",(0,o.kt)("em",{parentName:"p"},"F")," for an Individual vs a Subpopulation. "),(0,o.kt)("p",null,"Logically, ",(0,o.kt)("em",{parentName:"p"},"FST")," would then mean you were looking at ",(0,o.kt)("em",{parentName:"p"},"F")," for Subpopulations vs the Total, which  is where population geneticists get all excited. The values range from 0 to 1, with 0 being panmixia (fully mixed) and 1 being complete isolation. Although it ",(0,o.kt)("em",{parentName:"p"},"seems")," like it would be linear, it's not-- Wright considered 0.125 to be the cutoff between panmictic and divergent. If one was to calculate ",(0,o.kt)("em",{parentName:"p"},"FST")," for one large group of individuals and get a value >0.125, this would suggest there is population subdivision happening (exciting!!). "),(0,o.kt)("h2",{id:"pairwise-fst"},"Pairwise FST"),(0,o.kt)("p",null,"Going one step further, you can narrow how you calculate ",(0,o.kt)("em",{parentName:"p"},"FST"),' to identify different trends. A "pairwise" ',(0,o.kt)("em",{parentName:"p"},"FST")," is when you calculate ",(0,o.kt)("em",{parentName:"p"},"FST")," for only a pair of populations at a time. With a pairwise ",(0,o.kt)("em",{parentName:"p"},"FST"),", you are now testing if two populations are panmictic or divergent with ",(0,o.kt)("em",{parentName:"p"},"each other"),".  Depending on your study system and the questions you're trying to answer, this can be extremely valuable information. "),(0,o.kt)("p",null,"From a genetic standpoint, it looks kinda like this:\n",(0,o.kt)("img",{loading:"lazy",alt:"fst_diagram",src:n(9316).Z,width:"1761",height:"1401"})),(0,o.kt)("p",null,"This is an over-simplified system (diploid, single locus, biallelic, ",(0,o.kt)("strong",{parentName:"p"},"ignoring Hardy-Weinberg stuff"),"), but it demonstrates the point. When you are investigating two groups, if they are both completely heterozygous for the locus (for the same alleles), you would assume the groups are fully mixed (",(0,o.kt)("em",{parentName:"p"},"FST")," = 0). And that makes sense, right? Given the information required to calculate ",(0,o.kt)("em",{parentName:"p"},"FST"),", it's a reasonable conclusion to say those alleles are constantly shared between the groups. And the opposite then should be true too: if both groups are completely fixed for different alleles (",(0,o.kt)("em",{parentName:"p"},"FST")," = 1), then they clearly aren't sharing alleles with each other."),(0,o.kt)("h2",{id:"pitfalls"},"Pitfalls"),(0,o.kt)("p",null,"Like I alluded to in the opening paragraph, ",(0,o.kt)("em",{parentName:"p"},"FST")," (and it's derivatives) aren't a golden rule. There are natural phenomena that ",(0,o.kt)("em",{parentName:"p"},"FST")," cannot account for, which may lead to misleading results or incorrect interpretations of results. For one, there are Hardy-Weinberg assumptions, so the presence of kin, overlapping generations, etc. kinda messes things up. Another is consideration is that the genetic data we collect now is only a snapshot in time.  If two populations are completely isolated from one another and have been for generations, but are long lived and slow to evolve, then ",(0,o.kt)("em",{parentName:"p"},"FST")," may mislead you into believing they are panmictic (that happened in my ",(0,o.kt)("a",{parentName:"p",href:"https://link.springer.com/article/10.1007/s00227-019-3533-1"},"shark study"),"). These are just a few examples and there are more."),(0,o.kt)("h2",{id:"significance-testing"},"Significance testing"),(0,o.kt)("p",null,"One way of being more rigorous with ",(0,o.kt)("em",{parentName:"p"},"FST")," values is significance testing (you know, generating those p-values everyone loves so much). So the question is, how do we do that? One common (frequentist) solution is permutation testing. The rationale is this: we get some kind of observed ",(0,o.kt)("em",{parentName:"p"},"FST")," with our samples arranged in their natural populations, so would that  ",(0,o.kt)("em",{parentName:"p"},"FST")," look the same if we shuffled the samples up? Honestly, that's the gist of it. We calculate our observed ",(0,o.kt)("em",{parentName:"p"},"FST")," value, then we randomly shuffle the samples into two new populations and recalculate the pairwise ",(0,o.kt)("em",{parentName:"p"},"FST")," for the new population pair. Then we just keep shuffling and recalculating ",(0,o.kt)("em",{parentName:"p"},"FST")," a few thousands of times. After so many iterations, we compare how many times our observed (original) ",(0,o.kt)("em",{parentName:"p"},"FST")," value was greater than the permuted ",(0,o.kt)("em",{parentName:"p"},"FST")," values. This is known as a one-tailed test, since we're only interested in knowing if our observed ",(0,o.kt)("em",{parentName:"p"},"FST")," is ",(0,o.kt)("em",{parentName:"p"},"greater")," than randomness, meaning we're making the case that ",(0,o.kt)("em",{parentName:"p"},"FST")," (and therefore divergence) is highest with our samples in this non-random population configuration. "),(0,o.kt)("h2",{id:"other-means"},"Other means"),(0,o.kt)("p",null,"The field of population genetics has expanded tremendously since the Fisher and Wright era, and there are now all sorts of interesting ways to identify population subdivision. Each method has its strengths and weaknesses, which is why it's good practice to try multiple things and find agreement between methods. At the time of this writing, PopGen.jl can calculate pairwise ",(0,o.kt)("em",{parentName:"p"},"FST")," and perform significance testing using the ",(0,o.kt)("a",{parentName:"p",href:"https://books.google.com/books?hl=en&lr=&id=UhRSsLkjxDgC&oi=fnd&pg=PP11&ots=Qu7vO8EMmw&sig=T6cTISYEEm-hL8aWU8EgeGgzP5E#v=onepage&q&f=false"},"Nei 1987"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.jstor.org/stable/2408641?casa_token=_0gGbCbYpqMAAAAA:f9BvW9Xvx_8WaWSaRN4iqg0HB7KkaP21712ds28cTjhsvVQrYRTyHon7hKCcyHLcmTRA9H_1oM5iF3TZAl5xPm5gil2GmcGzHyEFFYAOl8pDVEBMQQ&seq=1#metadata_info_tab_contents"},"Weir & Cockerham 1984"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://www.genetics.org/content/132/2/583"},"Hudson et al. 1992")," methods. If you're interested in ",(0,o.kt)("a",{parentName:"p",href:"https://biojulia.net/PopGen.jl/docs/gettingstarted/community"},"contributing to PopGen.jl"),", we'd love to have you!"))}d.isMDXComponent=!0},9316:function(e,t,n){t.Z=n.p+"assets/images/FST-ada873bf402c073cbe3f6b386deb941a.png"}}]);