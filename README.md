# Parse Plants

If a plant, license or copyright is missing you can create a pull request

## Installation

    $ npm i @datagica/parse-plants

## Usage

Example:

```javascript
await parse('ingredient(s): marsupella revoluta, carex x abitibiana and cæspitose fleabane.')
```

Output:

```json
  [
    {
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
```

## TODO:

need to continue with canadian plants:
https://en.wikipedia.org/wiki/List_of_Canadian_plants_by_family_L
