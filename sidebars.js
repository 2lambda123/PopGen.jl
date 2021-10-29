module.exports = {
  "docs": {
    "Getting Started": [
      "gettingstarted/install",
      "gettingstarted/juliaprimer",
      "gettingstarted/tips",
      "gettingstarted/comparison",
      "gettingstarted/popdata",
      "gettingstarted/othertypes",
      "gettingstarted/datasets"
    ],
    "File I/O": [
      "io/readingdata",
      "io/writingdata",
      {
        "File Formats": [
          "io/delimited",
          "io/genepop",
          "io/structure",
          "io/vcf"
        ]
      },
    ],
    "Working with PopData": [
      "workingwithpopdata/workingwithpopdata",
      "workingwithpopdata/viewdata",
      "workingwithpopdata/addingdata",
      "workingwithpopdata/exclusion",
      "workingwithpopdata/conditionals",
      "workingwithpopdata/populationdata",
      "workingwithpopdata/locationdata",
      "workingwithpopdata/dataexploration",
      "workingwithpopdata/advancedindexing"
    ],
    "Analyses":[
      "analyses/hardyweinberg",
      "analyses/relatedness",
      "analyses/fstatistics"
    ],
    "Simulations":[
      "simulations/simulate_samples",
      "simulations/breedingcrosses",
      "simulations/sibship_simulations",
    ],    
    "API": [
      "api/api",
      {
        "PopGen":[
          "api/PopGen/dataexploration",
          "api/PopGen/fstglobal",
          "api/PopGen/fstpermutations",
          "api/PopGen/fstbylocus",
          "api/PopGen/hardyweinberg",
          "api/PopGen/heterozygosity",
          "api/PopGen/pairwisefst",
          "api/PopGen/pairwiserelatedness",
          "api/PopGen/relatednessmoments",
          "api/PopGen/summaryinfo",
          "api/PopGen/utils",
        ]
      },
      {
        "PopGenCore":[
          "api/PopGenCore/allelefreq",
          "api/PopGenCore/genofreq",
          "api/PopGenCore/conditionals",
          "api/PopGenCore/datasets",
          "api/PopGenCore/delimited",
          "api/PopGenCore/genepop",
          "api/PopGenCore/iterators",
          "api/PopGenCore/ioutils",
          "api/PopGenCore/manipulate",
          "api/PopGenCore/permutations",
          "api/PopGenCore/read",
          "api/PopGenCore/structure",
          "api/PopGenCore/types",
          "api/PopGenCore/popdatawrappers",
          "api/PopGenCore/variantcall",
        ]
      },
      {
      "PopGenSims":[
        "api/PopGenSims/popgensims_cross",
        "api/PopGenSims/popgensims_samples",
        "api/PopGenSims/popgensims_sibship",
        "api/PopGenSims/popgensims_utils",
      ]
      }
    ]
  }
}
