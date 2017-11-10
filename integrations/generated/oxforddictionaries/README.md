# @datafire/oxforddictionaries

Client library for Oxford Dictionaries

## Installation and Usage
```bash
npm install --save datafire @datafire/oxforddictionaries
```

```js
let datafire = require('datafire');
let oxforddictionaries = require('@datafire/oxforddictionaries').create();

oxforddictionaries.domains.source_domains_language.target_domains_language.get({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### domains.source_domains_language.target_domains_language.get
Returns a list of the available [domains](documentation/glossary?term=domain) for a given bilingual language dataset.



```js
oxforddictionaries.domains.source_domains_language.target_domains_language.get({
  "source_domains_language": "",
  "target_domains_language": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_domains_language (string) **required** - IANA language code
* target_domains_language (string) **required** - IANA language code
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### domains.source_language.get
Returns a list of the available [domains](documentation/glossary?term=domain) for a given monolingual language dataset.



```js
oxforddictionaries.domains.source_language.get({
  "source_language": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_language (string) **required** - IANA language code
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### entries.source_language.word_id.sentences.get

Use this to retrieve sentences extracted from  corpora which show how a word is used in the language. This is available for English and Spanish. For English, the sentences are linked to the correct sense of the word in the dictionary. In Spanish, they are linked at the headword level.
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
* source_language (string) **required** - IANA language code
* word_id (string) **required** - An Entry identifier. Case-sensitive.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### entries.source_lang.word_id.get

Use this to retrieve definitions, pronunciations, example sentences, grammatical information and word origins. It only works for dictionary headwords, so you may need to use the Lemmatron first if your input is likely to be an inflected form (e.g., 'swimming'). This would return the linked headword (e.g., 'swim') which you can then use in the Entries endpoint. Unless specified using a region filter, the default lookup will be the Oxford Dictionary of English (GB). 
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

Retrieve words that are opposite in meaning to the input word (antonym).

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

### entries.source_lang.word_id.regions_region.get

USe this filter to restrict the lookup to either our Oxford Dictionary of English (GB) or New Oxford American Dictionary (US).



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
* region (string) **required** - Region filter parameter. gb = Oxford Dictionary of English. us = New Oxford American Dictionary.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### entries.source_lang.word_id.synonyms.get

Use this to retrieve words that are similar in meaning to the input word (synonym).

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

Retrieve available [synonyms](documentation/glossary?term=thesaurus) and [antonyms](documentation/glossary?term=thesaurus) for a given word and language. 

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

### entries.source_lang.word_id.filters.get

Use filters to limit the entry information that is returned. For example, you may only require definitions and not everything else, or just pronunciations. The full list of filters can be retrieved from the filters Utility endpoint. You can also specify values within the filter using '='. For example 'grammaticalFeatures=singular'. Filters can also be combined using a semicolon.

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

### entries.source_translation_language.word_id.translations_target_translation_language.get

Use this to return translations for a given word. In the event that a word in the dataset does not have a direct translation, the response will be a [definition](documentation/glossary?term=entry) in the target language.

  <div id="translation"></div>



```js
oxforddictionaries.entries.source_translation_language.word_id.translations_target_translation_language.get({
  "source_translation_language": "",
  "word_id": "",
  "target_translation_language": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_translation_language (string) **required** - IANA language code
* word_id (string) **required** - The source word
* target_translation_language (string) **required** - IANA language code
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
Returns a list of the available [grammatical features](documentation/glossary?term=grammaticalfeatures) for a given language dataset.



```js
oxforddictionaries.grammaticalFeatures.source_language.get({
  "source_language": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_language (string) **required** - IANA language code. If provided output will be filtered by sourceLanguage.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### inflections.source_lang.word_id.get

Use this to check if a word exists in the dictionary, or what 'root' form it links to (e.g., swimming > swim). The response tells you the possible [lemmas](documentation/glossary?term=lemma) for a given [inflected](documentation/glossary?term=inflection) word. This can then be combined with other endpoints to retrieve more information.

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
* word_id (string) **required** - The input word
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### inflections.source_lang.word_id.filters.get

Retrieve available [lemmas](documentation/glossary?term=lemma) for a given [inflected](documentation/glossary?term=inflection) wordform. Filter results by categories.  

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
* word_id (string) **required** - The input word
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
Returns a list of available [lexical categories](documentation/glossary?term=lexicalcategory) for a given language dataset.



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
Returns a list of the available [regions](documentation/glossary?term=regions) for a given monolingual language dataset.



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
Returns a list of the available [registers](documentation/glossary?term=registers) for a given monolingual language dataset.



```js
oxforddictionaries.registers.source_language.get({
  "source_language": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_language (string) **required** - IANA language code
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### registers.source_register_language.target_register_language.get
Returns a list of the available [registers](documentation/glossary?term=registers) for a given bilingual language dataset.



```js
oxforddictionaries.registers.source_register_language.target_register_language.get({
  "source_register_language": "",
  "target_register_language": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_register_language (string) **required** - IANA language code
* target_register_language (string) **required** - IANA language code
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### search.source_lang.get

Use this to retrieve possible headword matches for a given string of text. The results are culculated using headword matching, fuzzy matching, and lemmatization 

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
* q (string) - Search string
* prefix (boolean) - Set prefix to true if you'd like to get results only starting with search string.
* regions (string) - If searching in English, filter words with specific region(s) either 'us' or 'gb'.
* limit (string) - Limit the number of results per response. Default and maximum limit is 5000.
* offset (string) - Offset the start number of the result.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### search.source_search_language.translations_target_search_language.get

Use this to find matches in our translation dictionaries.

  <div id="search_translation"></div>



```js
oxforddictionaries.search.source_search_language.translations_target_search_language.get({
  "source_search_language": "",
  "target_search_language": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Parameters
* source_search_language (string) **required** - IANA language code
* target_search_language (string) **required** - IANA language code
* q (string) - Search string.
* prefix (boolean) - Set prefix to true if you'd like to get results only starting with search string.
* regions (string) - Filter words with specific region(s) E.g., regions=us. For now gb, us are available for en language.
* limit (string) - Limit the number of results per response. Default and maximum limit is 5000.
* offset (string) - Offset the start number of the result.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### wordlist.source_lang.filters_advanced.get
Use this to apply more complex filters to the list of words. For example, you may only want to filter out words for which all senses match the filter, or only its 'prime sense'. You can also filter by word length or match by substring (prefix). 

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
* exclude_senses (string) - Semicolon separated list of parameters-value pairs (same as filters). Excludes only those senses of a particular headword that match specified exclusion attributes (lexical categories, domains, etc.) from results but includes the headword if it has other permitted senses.
* exclude_prime_senses (string) - Semicolon separated list of parameters-value pairs (same as filters). Excludes a headword only if the primary sense matches the specified exclusion attributes (registers, domains only).
* word_length (string) - Parameter to speficy the minimum (>), exact or maximum (<) length of the words required. E.g., >5 - more than 5 chars; <4 - less than 4 chars; >5<10 - from 5 to 10 chars; 3 - exactly 3 chars.
* prefix (string) - Filter words that start with prefix parameter
* exact (boolean) - If exact=true wordlist returns a list of entries that exactly matches the search string. Otherwise wordlist lists entries that start with prefix string.
* limit (string) - Limit the number of results per response. Default and maximum limit is 5000.
* offset (string) - Offset the start number of the result.
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

### wordlist.source_lang.filters_basic.get

Use this to retrieve a list of words for particular [domain](documentation/glossary?term=domain), [lexical category](documentation/glossary?term=lexicalcategory), [register](documentation/glossary?term=registers) and/or [region](documentation/glossary?term=regions). View the full list of possible filters using the filters Utility endpoint.  The response only includes headwords, not all their possible inflections. If you require a full wordlist including inflected forms, contact us and we can help.

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
* offset (string) - Offset the start number of the result
* app_id (string) **required** - App ID Authentication Parameter
* app_key (string) **required** - App Key Authentication Parameter

