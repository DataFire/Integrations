# @datafire/oxforddictionaries


## Operation: domains.source_language.get
Returns a list of the available [domains](/glossary?tag=#domains&expand) for a given monolingual language dataset.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_language": {
      "type": "string",
      "description": "IANA language code. Source Language.",
      "enum": [
        "es",
        "en",
        "lv",
        "nso",
        "zu",
        "ms",
        "id",
        "tn",
        "ur",
        "hi",
        "sw",
        "ro"
      ]
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_language",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UtilityLabels",
  "title": "DomainsResults"
}
```
## Operation: domains.source_language.target_language.get
Returns a list of the available [domains](/glossary?tag=#domains&expand) for a given bilingual language dataset.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_language": {
      "type": "string",
      "description": "IANA language code. Source Language.",
      "enum": [
        "es",
        "en",
        "lv",
        "nso",
        "zu",
        "ms",
        "id",
        "tn",
        "ur",
        "hi",
        "sw",
        "ro"
      ]
    },
    "target_language": {
      "type": "string",
      "description": "IANA language code. Target Language.",
      "enum": [
        "es",
        "en",
        "lv",
        "nso",
        "zu",
        "ms",
        "id",
        "tn",
        "ur",
        "hi",
        "sw",
        "ro"
      ]
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_language",
    "target_language",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UtilityLabels",
  "title": "DomainsResults"
}
```
## Operation: entries.source_language.word_id.sentences.get

Retrieve list of sentences and list of [senses](/glossary?tag=#sense&expand) (English language only).
  <div id="sentences"></div>


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_language": {
      "type": "string",
      "description": "IANA language code.",
      "enum": [
        "en",
        "es"
      ]
    },
    "word_id": {
      "type": "string",
      "description": "An Entry identifier. Case-sensitive."
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_language",
    "word_id",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SentencesResults",
  "title": "SentencesResults"
}
```
## Operation: entries.source_lang.word_id.get

Retrieve available [dictionary entries](/glossary?tag=#entry&expand) for a given word and language. 

  <div id="dictionary_entries"></div>


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_lang": {
      "type": "string",
      "description": "IANA language code",
      "enum": [
        "en",
        "es",
        "lv",
        "hi",
        "sw"
      ]
    },
    "word_id": {
      "type": "string",
      "description": "An Entry identifier. Case-sensitive."
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_lang",
    "word_id",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RetrieveEntry",
  "title": "RetrieveEntryResults"
}
```
## Operation: entries.source_lang.word_id.antonyms.get

Retrieve available [antonyms](/glossary?tag=#thesaurus&expand) for a given word and language. 

  <div id="antonyms"></div>


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_lang": {
      "type": "string",
      "description": "IANA language code",
      "enum": [
        "en"
      ]
    },
    "word_id": {
      "type": "string",
      "description": "An Entry identifier. Case-sensitive."
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_lang",
    "word_id",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Thesaurus",
  "title": "ThesaurusResults"
}
```
## Operation: entries.source_lang.word_id.definitions.get

Find available [dictionary entries](/glossary?tag=#entry&expand) for given word and language. Filter results by categories. 

  <div id="dictionary_entries_filters_definitions"></div>


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_lang": {
      "type": "string",
      "description": "IANA language code",
      "enum": [
        "en",
        "es",
        "lv",
        "hi",
        "sw"
      ]
    },
    "word_id": {
      "type": "string",
      "description": "An Entry identifier. Case-sensitive."
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_lang",
    "word_id",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RetrieveEntry",
  "title": "RetrieveEntryResults"
}
```
## Operation: entries.source_lang.word_id.examples.get

Find available [dictionary entries](/glossary?tag=#entry&expand) for given word and language. Filter results by categories. 

  <div id="dictionary_entries_filters_examples"></div>


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_lang": {
      "type": "string",
      "description": "IANA language code",
      "enum": [
        "en",
        "es",
        "lv",
        "hi",
        "sw"
      ]
    },
    "word_id": {
      "type": "string",
      "description": "An Entry identifier. Case-sensitive."
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_lang",
    "word_id",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RetrieveEntry",
  "title": "RetrieveEntryResults"
}
```
## Operation: entries.source_lang.word_id.pronunciations.get

Find available [dictionary entries](/glossary?tag=#entry&expand) for given word and language. Filter results by categories. 

  <div id="dictionary_entries_filters_pronunciations"></div>


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_lang": {
      "type": "string",
      "description": "IANA language code",
      "enum": [
        "en",
        "es",
        "lv",
        "hi",
        "sw"
      ]
    },
    "word_id": {
      "type": "string",
      "description": "An Entry identifier. Case-sensitive."
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_lang",
    "word_id",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RetrieveEntry",
  "title": "RetrieveEntryResults"
}
```
## Operation: entries.source_lang.word_id.regions_region.get

Retrieve available [dictionary entries](/glossary?tag=#entry&expand) for given word and language. 

  <div id="dictionary_entries"></div>


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_lang": {
      "type": "string",
      "description": "IANA language code",
      "enum": [
        "en"
      ]
    },
    "word_id": {
      "type": "string",
      "description": "An Entry identifier. Case-sensitive."
    },
    "region": {
      "type": "string",
      "description": "Region filter parameter. gb = Great Britain English. us = United States English. Default is gb.",
      "enum": [
        "gb",
        "us"
      ]
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_lang",
    "word_id",
    "region",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RetrieveEntry",
  "title": "RetrieveEntryResults"
}
```
## Operation: entries.source_lang.word_id.synonyms.get

Retrieve available [synonyms](/glossary?tag=#thesaurus&expand) for a given word and language. 

  <div id="synonyms"></div>


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_lang": {
      "type": "string",
      "description": "IANA language code",
      "enum": [
        "en"
      ]
    },
    "word_id": {
      "type": "string",
      "description": "An Entry identifier. Case-sensitive."
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_lang",
    "word_id",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Thesaurus",
  "title": "ThesaurusResults"
}
```
## Operation: entries.source_lang.word_id.synonyms_antonyms.get

Retrieve available [synonyms and antonyms](/glossary?tag=#thesaurus&expand) for a given word and language. 

  <div id="synonyms_and_antonyms"></div>


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_lang": {
      "type": "string",
      "description": "IANA language code",
      "enum": [
        "en"
      ]
    },
    "word_id": {
      "type": "string",
      "description": "An Entry identifier. Case-sensitive."
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_lang",
    "word_id",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Thesaurus",
  "title": "ThesaurusResults"
}
```
## Operation: entries.source_lang.word_id.translations_target_lang.get
Returns target language translations for a given word ID and source language. 
In the event that a word in the dataset does not have a direct translation, the response will be a [definition](/glossary?tag=#entry&expand) in the target language.

  <div id="translation"></div>


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_lang": {
      "type": "string",
      "description": "IANA language code",
      "enum": [
        "en",
        "es",
        "lv",
        "nso",
        "zu",
        "ms",
        "id",
        "tn",
        "ur",
        "hi",
        "sw",
        "ro"
      ]
    },
    "word_id": {
      "type": "string",
      "description": "An Entry identifier. Case-sensitive."
    },
    "target_lang": {
      "type": "string",
      "description": "IANA language code",
      "enum": [
        "es",
        "en",
        "lv",
        "nso",
        "zu",
        "ms",
        "id",
        "tn",
        "ur",
        "hi",
        "sw",
        "ro"
      ]
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_lang",
    "word_id",
    "target_lang",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RetrieveEntry",
  "title": "InflectionsResults"
}
```
## Operation: entries.source_lang.word_id.filters.get

Find available [dictionary entries](/glossary?tag=#entry&expand) for given word and language. Filter results by categories. 

  <div id="dictionary_entries_filters"></div>


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_lang": {
      "type": "string",
      "description": "IANA language code",
      "enum": [
        "en",
        "es",
        "lv",
        "hi",
        "sw"
      ]
    },
    "word_id": {
      "type": "string",
      "description": "An Entry identifier. Case-sensitive."
    },
    "filters": {
      "type": "array",
      "description": "Separate filtering conditions using a semicolon. Conditions take values grammaticalFeatures and/or lexicalCategory and are case-sensitive. To list multiple values in single condition divide them with comma."
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_lang",
    "word_id",
    "filters",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RetrieveEntry",
  "title": "RetrieveEntryResults"
}
```
## Operation: filters.get
Returns a list of all the valid filters to construct API calls.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Filters",
  "title": "FiltersResults"
}
```
## Operation: filters.endpoint.get
Returns a list of all the valid filters for a given endpoint to construct API calls.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "endpoint": {
      "type": "string",
      "description": "Name of the endpoint.",
      "enum": [
        "entries",
        "inflections",
        "translations"
      ]
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "endpoint",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Filters",
  "title": "FiltersResults"
}
```
## Operation: grammaticalFeatures.source_language.get
Returns a list of the available [grammatical features](/glossary?tag=#grammaticalfeatures&expand) for a given language dataset.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_language": {
      "type": "string",
      "description": "IANA language code",
      "enum": [
        "es",
        "en",
        "lv",
        "nso",
        "zu",
        "ms",
        "id",
        "tn",
        "ur",
        "hi",
        "sw",
        "ro"
      ]
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_language",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UtilityLabels",
  "title": "RegistersResults"
}
```
## Operation: inflections.source_lang.word_id.get

Retrieve available [lemmas](/glossary?tag=#lemma&expand) for a given [inflected](/glossary?tag=#inflection&expand) wordform. 

  <div id="lemmatron"></div>


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_lang": {
      "type": "string",
      "description": "IANA language code",
      "enum": [
        "en",
        "es",
        "lv",
        "hi",
        "sw"
      ]
    },
    "word_id": {
      "type": "string",
      "description": "An inflected wordform. Case-sensitive."
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_lang",
    "word_id",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Lemmatron",
  "title": "InflectionsResults"
}
```
## Operation: inflections.source_lang.word_id.filters.get

Retrieve available [lemmas](/glossary?tag=#lemma&expand) for a given [inflected](/glossary?tag=#inflection&expand) wordform. Filter results by categories.  

  <div id="lemmatron_filters"></div>


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_lang": {
      "type": "string",
      "description": "IANA language code",
      "enum": [
        "en",
        "es",
        "lv",
        "hi",
        "sw"
      ]
    },
    "word_id": {
      "type": "string",
      "description": "An inflected wordform. Case-sensitive."
    },
    "filters": {
      "type": "array",
      "description": "Separate filtering conditions using a semicolon. Conditions take values grammaticalFeatures and/or lexicalCategory and are case-sensitive. To list multiple values in single condition divide them with comma."
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_lang",
    "word_id",
    "filters",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Lemmatron",
  "title": "InflectionsResults"
}
```
## Operation: languages.get
Returns a list of monolingual and bilingual language datasets available in the API


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sourceLanguage": {
      "type": "string",
      "description": "IANA language code. If provided output will be filtered by sourceLanguage.",
      "enum": [
        "es",
        "en",
        "lv",
        "nso",
        "zu",
        "ms",
        "id",
        "tn",
        "ur",
        "hi",
        "sw",
        "ro"
      ]
    },
    "targetLanguage": {
      "type": "string",
      "description": "IANA language code. If provided output will be filtered by sourceLanguage.",
      "enum": [
        "es",
        "en",
        "lv",
        "nso",
        "zu",
        "ms",
        "id",
        "tn",
        "ur",
        "hi",
        "sw",
        "ro"
      ]
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Languages",
  "title": "LanguagesResults"
}
```
## Operation: lexicalcategories.language.get
Returns a list of available [lexical categories](/glossary?tag=#lexicalcategory&expand) for a given language dataset.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "language": {
      "type": "string",
      "description": "IANA language code",
      "enum": [
        "es",
        "en",
        "lv",
        "nso",
        "zu",
        "ms",
        "id",
        "tn",
        "ur",
        "hi",
        "sw",
        "ro"
      ]
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "language",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UtilityLabels",
  "title": "LexicalCategoriesResults"
}
```
## Operation: regions.source_language.get
Returns a list of the available [regions](/glossary?tag=#regions&expand) for a given monolingual language dataset.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_language": {
      "type": "string",
      "description": "IANA language code",
      "enum": [
        "en"
      ]
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_language",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Regions",
  "title": "RegionsResults"
}
```
## Operation: registers.source_language.get
Returns a list of the available [registers](/glossary?tag=#registers&expand) for a given monolingual language dataset.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_language": {
      "type": "string",
      "description": "IANA language code. Source Language.",
      "enum": [
        "es",
        "en",
        "lv",
        "nso",
        "zu",
        "ms",
        "id",
        "tn",
        "ur",
        "hi",
        "sw",
        "ro"
      ]
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_language",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UtilityLabels",
  "title": "RegistersResults"
}
```
## Operation: registers.source_language.target_language.get
Returns a list of the available [registers](/glossary?tag=#registers&expand) for a given bilingual language dataset.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_language": {
      "type": "string",
      "description": "IANA language code. Source Language.",
      "enum": [
        "es",
        "en",
        "lv",
        "nso",
        "zu",
        "ms",
        "id",
        "tn",
        "ur",
        "hi",
        "sw",
        "ro"
      ]
    },
    "target_language": {
      "type": "string",
      "description": "IANA language code. Target Language.",
      "enum": [
        "es",
        "en",
        "lv",
        "nso",
        "zu",
        "ms",
        "id",
        "tn",
        "ur",
        "hi",
        "sw",
        "ro"
      ]
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_language",
    "target_language",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UtilityLabels",
  "title": "RegistersResults"
}
```
## Operation: search.source_lang.get

Retrieve available results for a search query and language. 

  <div id="search"></div>


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_lang": {
      "type": "string",
      "description": "IANA language code",
      "enum": [
        "en",
        "es",
        "lv",
        "hi",
        "sw"
      ]
    },
    "q": {
      "type": "string",
      "description": "Search string."
    },
    "prefix": {
      "type": "boolean",
      "description": "Set prefix to true if you'd like to get results only starting with search string.",
      "enum": [
        "false",
        "true"
      ]
    },
    "regions": {
      "type": "string",
      "description": "Filter words with specific region(s) E.g., regions=us. For now gb, us are available for en language."
    },
    "limit": {
      "type": "string",
      "description": "Limit the number of results per response. Default and maximum limit is 5000."
    },
    "offset": {
      "type": "string",
      "description": "Offset the start number of the result."
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_lang",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Wordlist",
  "title": "WordlistResults"
}
```
## Operation: search.source_lang.translations_target_lang.get

Find available translation results  for a search query and language. 

  <div id="search_translation"></div>


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_lang": {
      "type": "string",
      "description": "IANA language code",
      "enum": [
        "en",
        "es",
        "lv",
        "nso",
        "zu",
        "ms",
        "id",
        "tn",
        "ur",
        "hi",
        "sw",
        "ro"
      ]
    },
    "target_lang": {
      "type": "string",
      "description": "IANA language code",
      "enum": [
        "es",
        "en",
        "lv",
        "nso",
        "zu",
        "ms",
        "id",
        "tn",
        "ur",
        "hi",
        "sw",
        "ro"
      ]
    },
    "q": {
      "type": "string",
      "description": "Search string."
    },
    "prefix": {
      "type": "boolean",
      "description": "Set prefix to true if you'd like to get results only starting with search string.",
      "enum": [
        "false",
        "true"
      ]
    },
    "regions": {
      "type": "string",
      "description": "Filter words with specific region(s) E.g., regions=us. For now gb, us are available for en language."
    },
    "limit": {
      "type": "string",
      "description": "Limit the number of results per response. Default and maximum limit is 5000."
    },
    "offset": {
      "type": "string",
      "description": "Offset the start number of the result."
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_lang",
    "target_lang",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Wordlist",
  "title": "WordlistResults"
}
```
## Operation: wordlist.source_lang.filters_advanced.get
Advanced options for retrieving [wordlist](/glossary?tag=#wordlist&expand) - exclude filter, filter by word length or match by substring (prefix). 

  <div id="wordlist_advanced"></div>


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_lang": {
      "type": "string",
      "description": "IANA language code",
      "enum": [
        "en",
        "es",
        "lv",
        "hi",
        "sw"
      ]
    },
    "filters_advanced": {
      "type": "string",
      "description": "Semicolon separated list of wordlist parameters, presented as value pairs: LexicalCategory, domains, regions, registers. Parameters can take comma separated list of values. E.g., lexicalCategory=noun,adjective;domains=sport. Number of values limited to 5."
    },
    "exclude": {
      "type": "string",
      "description": "Semicolon separated list of parameters-value pairs (same as filters). Excludes headwords that have any senses in specified exclusion attributes (lexical categories, domains, etc.) from results."
    },
    "exclude_senses": {
      "type": "string",
      "description": "Semicolon separated list of parameters-value pairs (same as filters). Excludes those senses of a particular headword that match specified exclusion attributes (lexical categories, domains, etc.) from results but includes the headword if it has other permitted senses."
    },
    "exclude_prime_senses": {
      "type": "string",
      "description": "Semicolon separated list of parameters-value pairs (same as filters). Excludes a headword only if the primary sense matches the specified exclusion attributes (registers, domains only)."
    },
    "word_length": {
      "type": "string",
      "description": "Parameter to speficy the minimum (>), exact or maximum (<) length of the words required. E.g., >5 - more than 5 chars; <4 - less than 4 chars; >5<10 - from 5 to 10 chars; 3 - exactly 3 chars."
    },
    "prefix": {
      "type": "string",
      "description": "Filter words that start with prefix parameter"
    },
    "exact": {
      "type": "boolean",
      "description": "If exact=true wordlist returns a list of entries that exactly matches the search string. Otherwise wordlist lists entries that start with prefix string.",
      "enum": [
        "false",
        "true"
      ]
    },
    "limit": {
      "type": "string",
      "description": "Limit the number of results per response. Default and maximum limit is 5000."
    },
    "offset": {
      "type": "string",
      "description": "Offset the start number of the result."
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_lang",
    "filters_advanced",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Wordlist",
  "title": "WordlistResults"
}
```
## Operation: wordlist.source_lang.filters_basic.get
Retrieve list of words for particular [domain](/glossary?tag=#domain&expand), [lexical category](/glossary?tag=#lexicalcategory&expand), [register](/glossary?tag=#register&expand) and/or [region](/glossary?tag=#region&expand).  

  <div id="wordlist"></div>


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_lang": {
      "type": "string",
      "description": "IANA language code",
      "enum": [
        "en",
        "es",
        "lv",
        "hi",
        "sw"
      ]
    },
    "filters_basic": {
      "type": "string",
      "description": "Semicolon separated list of wordlist parameters, presented as value pairs: LexicalCategory, domains, regions, registers. Parameters can take comma separated list of values. E.g., lexicalCategory=noun,adjective;domains=sport. Number of values limited to 5."
    },
    "limit": {
      "type": "string",
      "description": "Limit the number of results per response. Default and maximum limit is 5000."
    },
    "offset": {
      "type": "string",
      "description": "Offset the start number of the result."
    },
    "app_id": {
      "type": "string",
      "description": "App ID Authentication Parameter"
    },
    "app_key": {
      "type": "string",
      "description": "App Key Authentication Parameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "source_lang",
    "filters_basic",
    "app_id",
    "app_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Wordlist",
  "title": "WordlistResults"
}
```
