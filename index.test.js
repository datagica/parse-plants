
const parse = require('./index')

const testData = [{
  input: "ingredient(s): marsupella revoluta, carex x abitibiana and cæspitose fleabane.",
  expected: [{
      "ngram": "carex x abitibiana",
      "value": {
        "id": "Carex x abitibiana",
        "label": {
          "en": "Carex x abitibiana"
        },
        "description": {
          "en": "Carex x abitibiana (Abitibi sedge)"
        },
        "keywords": [],
        "family": "Cyperaceae",
        "aliases": {
            "en": [
              "Carex x abitibiana",
              "Abitibi sedge",
            ],
          },
      },
      "score": 1,
      "position": {
        "begin": 36,
        "end": 54,
        "sentence": 0,
        "word": 7
      }
    },
    {
      "ngram": "marsupella revoluta",
      "value": {
        "id": "Marsupella revoluta",
        "label": {
          "en": "Marsupella revoluta"
        },
        "description": {
          "en": "Marsupella revoluta"
        },
        "keywords": [],
        "family": "Gymnomitriaceae",
        "aliases": {
          "en": [
            "Marsupella revoluta"
          ],
        },
      },
      "score": 1,
      "position": {
        "begin": 15,
        "end": 34,
        "sentence": 0,
        "word": 4
      }
    },
    {
      "ngram": "cæspitose fleabane",
      "value": {
        "id": "Erigeron caespitosus",
        "label": {
          "en": "Erigeron caespitosus"
        },
        "description": {
          "en": "Erigeron caespitosus (cæspitose fleabane)"
        },
        "keywords": [],
        "family": "Asteraceae",
        "aliases": {
          "en": [
            "Erigeron caespitosus",
            "cæspitose fleabane",
            "caespitose fleabane",
          ],
        },
      },
      "score": 1,
      "position": {
        "begin": 59,
        "end": 77,
        "sentence": 0,
        "word": 11,
      }
    }
  ]
}, {
  input: "The witch entered the forest to collect some combleaf mermaidweed",
  expected: [{
    "ngram": "combleaf mermaidweed",
    "value": {
      "id": "Proserpinaca pectinata",
      "label": {
        "en": "Proserpinaca pectinata"
      },
      "description": {
        "en": "Proserpinaca pectinata (combleaf mermaidweed)"
      },
      "keywords": [],
      "family": "Haloragaceae",
      "aliases": {
        "en": [
          "Proserpinaca pectinata",
          "combleaf mermaidweed"
        ],
      },
    },
    "score": 1,
    "position": {
      "begin": 45,
      "end": 65,
      "sentence": 0,
      "word": 8
    }
  }]
}]

test('extract plants', () => Promise.all(
  testData.map(async ({ input, expected }) => expect(await parse(input)).toEqual(expected))
))