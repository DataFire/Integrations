# @datafire/oxforddictionaries

Client library for Oxford Dictionaries

## Installation and Usage
```bash
npm install --save datafire @datafire/oxforddictionaries
```

```js
let datafire = require('datafire');
let oxforddictionaries = require('@datafire/oxforddictionaries').create();

oxforddictionaries.domains.source_language.get({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### domains.source_language.get
Returns a list of the available [domains](/glossary?tag=#domains&expand) for a given monolingual language dataset.



```js
oxforddictionaries.domains.source_language.get({
  "source_language": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_language (string) **required** - IANA language code. Source Language.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### domains.source_language.target_language.get
Returns a list of the available [domains](/glossary?tag=#domains&expand) for a given bilingual language dataset.



```js
oxforddictionaries.domains.source_language.target_language.get({
  "source_language": "",
  "target_language": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_language (string) **required** - IANA language code. Source Language.
* target_language (string) **required** - IANA language code. Target Language.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### entries.source_language.word_id.sentences.get

Retrieve list of sentences and list of [senses](/glossary?tag=#sense&expand) (English language only).
  <div id="sentences"></div>



```js
oxforddictionaries.entries.source_language.word_id.sentences.get({
  "source_language": "",
  "word_id": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_language (string) **required** - IANA language code.
* word_id (string) **required** - An Entry identifier. Case-sensitive.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### entries.source_lang.word_id.get

Retrieve available [dictionary entries](/glossary?tag=#entry&expand) for a given word and language. 

  <div id="dictionary_entries"></div>



```js
oxforddictionaries.entries.source_lang.word_id.get({
  "source_lang": "",
  "word_id": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_lang (string) **required** - IANA language code
* word_id (string) **required** - An Entry identifier. Case-sensitive.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### entries.source_lang.word_id.antonyms.get

Retrieve available [antonyms](/glossary?tag=#thesaurus&expand) for a given word and language. 

  <div id="antonyms"></div>



```js
oxforddictionaries.entries.source_lang.word_id.antonyms.get({
  "source_lang": "",
  "word_id": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_lang (string) **required** - IANA language code
* word_id (string) **required** - An Entry identifier. Case-sensitive.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### entries.source_lang.word_id.definitions.get

Find available [dictionary entries](/glossary?tag=#entry&expand) for given word and language. Filter results by categories. 

  <div id="dictionary_entries_filters_definitions"></div>



```js
oxforddictionaries.entries.source_lang.word_id.definitions.get({
  "source_lang": "",
  "word_id": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_lang (string) **required** - IANA language code
* word_id (string) **required** - An Entry identifier. Case-sensitive.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### entries.source_lang.word_id.examples.get

Find available [dictionary entries](/glossary?tag=#entry&expand) for given word and language. Filter results by categories. 

  <div id="dictionary_entries_filters_examples"></div>



```js
oxforddictionaries.entries.source_lang.word_id.examples.get({
  "source_lang": "",
  "word_id": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_lang (string) **required** - IANA language code
* word_id (string) **required** - An Entry identifier. Case-sensitive.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### entries.source_lang.word_id.pronunciations.get

Find available [dictionary entries](/glossary?tag=#entry&expand) for given word and language. Filter results by categories. 

  <div id="dictionary_entries_filters_pronunciations"></div>



```js
oxforddictionaries.entries.source_lang.word_id.pronunciations.get({
  "source_lang": "",
  "word_id": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_lang (string) **required** - IANA language code
* word_id (string) **required** - An Entry identifier. Case-sensitive.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### entries.source_lang.word_id.regions_region.get

Retrieve available [dictionary entries](/glossary?tag=#entry&expand) for given word and language. 

  <div id="dictionary_entries"></div>



```js
oxforddictionaries.entries.source_lang.word_id.regions_region.get({
  "source_lang": "",
  "word_id": "",
  "region": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_lang (string) **required** - IANA language code
* word_id (string) **required** - An Entry identifier. Case-sensitive.
* region (string) **required** - Region filter parameter. gb = Great Britain English. us = United States English. Default is gb.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### entries.source_lang.word_id.synonyms.get

Retrieve available [synonyms](/glossary?tag=#thesaurus&expand) for a given word and language. 

  <div id="synonyms"></div>



```js
oxforddictionaries.entries.source_lang.word_id.synonyms.get({
  "source_lang": "",
  "word_id": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_lang (string) **required** - IANA language code
* word_id (string) **required** - An Entry identifier. Case-sensitive.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### entries.source_lang.word_id.synonyms_antonyms.get

Retrieve available [synonyms and antonyms](/glossary?tag=#thesaurus&expand) for a given word and language. 

  <div id="synonyms_and_antonyms"></div>



```js
oxforddictionaries.entries.source_lang.word_id.synonyms_antonyms.get({
  "source_lang": "",
  "word_id": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_lang (string) **required** - IANA language code
* word_id (string) **required** - An Entry identifier. Case-sensitive.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### entries.source_lang.word_id.translations_target_lang.get
Returns target language translations for a given word ID and source language. 
In the event that a word in the dataset does not have a direct translation, the response will be a [definition](/glossary?tag=#entry&expand) in the target language.

  <div id="translation"></div>



```js
oxforddictionaries.entries.source_lang.word_id.translations_target_lang.get({
  "source_lang": "",
  "word_id": "",
  "target_lang": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_lang (string) **required** - IANA language code
* word_id (string) **required** - An Entry identifier. Case-sensitive.
* target_lang (string) **required** - IANA language code
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### entries.source_lang.word_id.filters.get

Find available [dictionary entries](/glossary?tag=#entry&expand) for given word and language. Filter results by categories. 

  <div id="dictionary_entries_filters"></div>



```js
oxforddictionaries.entries.source_lang.word_id.filters.get({
  "source_lang": "",
  "word_id": "",
  "filters": [],
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_lang (string) **required** - IANA language code
* word_id (string) **required** - An Entry identifier. Case-sensitive.
* filters (array) **required** - Separate filtering conditions using a semicolon. Conditions take values grammaticalFeatures and/or lexicalCategory and are case-sensitive. To list multiple values in single condition divide them with comma.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### filters.get
Returns a list of all the valid filters to construct API calls.



```js
oxforddictionaries.filters.get({
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### filters.endpoint.get
Returns a list of all the valid filters for a given endpoint to construct API calls.



```js
oxforddictionaries.filters.endpoint.get({
  "endpoint": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* endpoint (string) **required** - Name of the endpoint.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### grammaticalFeatures.source_language.get
Returns a list of the available [grammatical features](/glossary?tag=#grammaticalfeatures&expand) for a given language dataset.



```js
oxforddictionaries.grammaticalFeatures.source_language.get({
  "source_language": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_language (string) **required** - IANA language code
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### inflections.source_lang.word_id.get

Retrieve available [lemmas](/glossary?tag=#lemma&expand) for a given [inflected](/glossary?tag=#inflection&expand) wordform. 

  <div id="lemmatron"></div>



```js
oxforddictionaries.inflections.source_lang.word_id.get({
  "source_lang": "",
  "word_id": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_lang (string) **required** - IANA language code
* word_id (string) **required** - An inflected wordform. Case-sensitive.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### inflections.source_lang.word_id.filters.get

Retrieve available [lemmas](/glossary?tag=#lemma&expand) for a given [inflected](/glossary?tag=#inflection&expand) wordform. Filter results by categories.  

  <div id="lemmatron_filters"></div>



```js
oxforddictionaries.inflections.source_lang.word_id.filters.get({
  "source_lang": "",
  "word_id": "",
  "filters": [],
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_lang (string) **required** - IANA language code
* word_id (string) **required** - An inflected wordform. Case-sensitive.
* filters (array) **required** - Separate filtering conditions using a semicolon. Conditions take values grammaticalFeatures and/or lexicalCategory and are case-sensitive. To list multiple values in single condition divide them with comma.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### languages.get
Returns a list of monolingual and bilingual language datasets available in the API



```js
oxforddictionaries.languages.get({
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* sourceLanguage (string) - IANA language code. If provided output will be filtered by sourceLanguage.
* targetLanguage (string) - IANA language code. If provided output will be filtered by sourceLanguage.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### lexicalcategories.language.get
Returns a list of available [lexical categories](/glossary?tag=#lexicalcategory&expand) for a given language dataset.



```js
oxforddictionaries.lexicalcategories.language.get({
  "language": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* language (string) **required** - IANA language code
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### regions.source_language.get
Returns a list of the available [regions](/glossary?tag=#regions&expand) for a given monolingual language dataset.



```js
oxforddictionaries.regions.source_language.get({
  "source_language": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_language (string) **required** - IANA language code
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### registers.source_language.get
Returns a list of the available [registers](/glossary?tag=#registers&expand) for a given monolingual language dataset.



```js
oxforddictionaries.registers.source_language.get({
  "source_language": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_language (string) **required** - IANA language code. Source Language.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### registers.source_language.target_language.get
Returns a list of the available [registers](/glossary?tag=#registers&expand) for a given bilingual language dataset.



```js
oxforddictionaries.registers.source_language.target_language.get({
  "source_language": "",
  "target_language": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_language (string) **required** - IANA language code. Source Language.
* target_language (string) **required** - IANA language code. Target Language.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### search.source_lang.get

Retrieve available results for a search query and language. 

  <div id="search"></div>



```js
oxforddictionaries.search.source_lang.get({
  "source_lang": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_lang (string) **required** - IANA language code
* q (string) - Search string.
* prefix (boolean) - Set prefix to true if you'd like to get results only starting with search string.
* regions (string) - Filter words with specific region(s) E.g., regions=us. For now gb, us are available for en language.
* limit (string) - Limit the number of results per response. Default and maximum limit is 5000.
* offset (string) - Offset the start number of the result.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### search.source_lang.translations_target_lang.get

Find available translation results  for a search query and language. 

  <div id="search_translation"></div>



```js
oxforddictionaries.search.source_lang.translations_target_lang.get({
  "source_lang": "",
  "target_lang": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_lang (string) **required** - IANA language code
* target_lang (string) **required** - IANA language code
* q (string) - Search string.
* prefix (boolean) - Set prefix to true if you'd like to get results only starting with search string.
* regions (string) - Filter words with specific region(s) E.g., regions=us. For now gb, us are available for en language.
* limit (string) - Limit the number of results per response. Default and maximum limit is 5000.
* offset (string) - Offset the start number of the result.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### wordlist.source_lang.filters_advanced.get
Advanced options for retrieving [wordlist](/glossary?tag=#wordlist&expand) - exclude filter, filter by word length or match by substring (prefix). 

  <div id="wordlist_advanced"></div>



```js
oxforddictionaries.wordlist.source_lang.filters_advanced.get({
  "source_lang": "",
  "filters_advanced": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_lang (string) **required** - IANA language code
* filters_advanced (string) **required** - Semicolon separated list of wordlist parameters, presented as value pairs: LexicalCategory, domains, regions, registers. Parameters can take comma separated list of values. E.g., lexicalCategory=noun,adjective;domains=sport. Number of values limited to 5.
* exclude (string) - Semicolon separated list of parameters-value pairs (same as filters). Excludes headwords that have any senses in specified exclusion attributes (lexical categories, domains, etc.) from results.
* exclude_senses (string) - Semicolon separated list of parameters-value pairs (same as filters). Excludes those senses of a particular headword that match specified exclusion attributes (lexical categories, domains, etc.) from results but includes the headword if it has other permitted senses.
* exclude_prime_senses (string) - Semicolon separated list of parameters-value pairs (same as filters). Excludes a headword only if the primary sense matches the specified exclusion attributes (registers, domains only).
* word_length (string) - Parameter to speficy the minimum (>), exact or maximum (<) length of the words required. E.g., >5 - more than 5 chars; <4 - less than 4 chars; >5<10 - from 5 to 10 chars; 3 - exactly 3 chars.
* prefix (string) - Filter words that start with prefix parameter
* exact (boolean) - If exact=true wordlist returns a list of entries that exactly matches the search string. Otherwise wordlist lists entries that start with prefix string.
* limit (string) - Limit the number of results per response. Default and maximum limit is 5000.
* offset (string) - Offset the start number of the result.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### wordlist.source_lang.filters_basic.get
Retrieve list of words for particular [domain](/glossary?tag=#domain&expand), [lexical category](/glossary?tag=#lexicalcategory&expand), [register](/glossary?tag=#register&expand) and/or [region](/glossary?tag=#region&expand).  

  <div id="wordlist"></div>



```js
oxforddictionaries.wordlist.source_lang.filters_basic.get({
  "source_lang": "",
  "filters_basic": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_lang (string) **required** - IANA language code
* filters_basic (string) **required** - Semicolon separated list of wordlist parameters, presented as value pairs: LexicalCategory, domains, regions, registers. Parameters can take comma separated list of values. E.g., lexicalCategory=noun,adjective;domains=sport. Number of values limited to 5.
* limit (string) - Limit the number of results per response. Default and maximum limit is 5000.
* offset (string) - Offset the start number of the result.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

