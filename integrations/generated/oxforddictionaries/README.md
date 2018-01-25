# @datafire/oxforddictionaries

Client library for Oxford Dictionaries

## Installation and Usage
```bash
npm install --save @datafire/oxforddictionaries
```
```js
let oxforddictionaries = require('@datafire/oxforddictionaries').create();

oxforddictionaries.domains.source_domains_language.target_domains_language.get({
  "source_domains_language": "",
  "target_domains_language": "",
  "app_id": "",
  "app_key": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * source_domains_language **required** `string` (values: en, es, nso, zu, ur, de, pt): IANA language code
  * target_domains_language **required** `string` (values: es, nso, zu, ms, id, tn, ro, de, pt): IANA language code
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [UtilityLabels](#utilitylabels)

### domains.source_language.get
Returns a list of the available [domains](documentation/glossary?term=domain) for a given monolingual language dataset.



```js
oxforddictionaries.domains.source_language.get({
  "source_language": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Input
* input `object`
  * source_language **required** `string` (values: en, es, nso, zu, hi, sw, ur, de, pt, ta, gu): IANA language code
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [UtilityLabels](#utilitylabels)

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

#### Input
* input `object`
  * source_language **required** `string` (values: en, es): IANA language code
  * word_id **required** `string`: An Entry identifier. Case-sensitive.
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [SentencesResults](#sentencesresults)

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

#### Input
* input `object`
  * source_lang **required** `string` (values: en, es, lv, hi, sw, ta, gu): IANA language code
  * word_id **required** `string`: An Entry identifier. Case-sensitive.
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [RetrieveEntry](#retrieveentry)

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

#### Input
* input `object`
  * source_lang **required** `string` (values: en): IANA language code
  * word_id **required** `string`: An Entry identifier. Case-sensitive.
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [Thesaurus](#thesaurus)

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

#### Input
* input `object`
  * source_lang **required** `string` (values: en): IANA language code
  * word_id **required** `string`: An Entry identifier. Case-sensitive.
  * region **required** `string` (values: gb, us): Region filter parameter. gb = Oxford Dictionary of English. us = New Oxford American Dictionary.
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [RetrieveEntry](#retrieveentry)

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

#### Input
* input `object`
  * source_lang **required** `string` (values: en): IANA language code
  * word_id **required** `string`: An Entry identifier. Case-sensitive.
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [Thesaurus](#thesaurus)

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

#### Input
* input `object`
  * source_lang **required** `string` (values: en): IANA language code
  * word_id **required** `string`: An Entry identifier. Case-sensitive.
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [Thesaurus](#thesaurus)

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

#### Input
* input `object`
  * source_lang **required** `string` (values: en, es, lv, hi, sw, ta, gu): IANA language code
  * word_id **required** `string`: An Entry identifier. Case-sensitive.
  * filters **required** `array`: Separate filtering conditions using a semicolon. Conditions take values grammaticalFeatures and/or lexicalCategory and are case-sensitive. To list multiple values in single condition divide them with comma.
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [RetrieveEntry](#retrieveentry)

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

#### Input
* input `object`
  * source_translation_language **required** `string` (values: en, es, nso, zu, ms, id, tn, ur, de, pt): IANA language code
  * word_id **required** `string`: The source word
  * target_translation_language **required** `string` (values: es, nso, zu, ms, id, tn, ro, de, pt): IANA language code
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [RetrieveEntry](#retrieveentry)

### filters.get
Returns a list of all the valid filters to construct API calls.



```js
oxforddictionaries.filters.get({
  "app_id": "",
  "app_key": ""
}, context)
```

#### Input
* input `object`
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [Filters](#filters)

### filters.endpoint.get
Returns a list of all the valid filters for a given endpoint to construct API calls.



```js
oxforddictionaries.filters.endpoint.get({
  "endpoint": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Input
* input `object`
  * endpoint **required** `string` (values: entries, inflections, translations): Name of the endpoint.
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [Filters](#filters)

### grammaticalFeatures.source_language.get
Returns a list of the available [grammatical features](documentation/glossary?term=grammaticalfeatures) for a given language dataset.



```js
oxforddictionaries.grammaticalFeatures.source_language.get({
  "source_language": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Input
* input `object`
  * source_language **required** `string` (values: en, es, lv, nso, zu, ms, tn, ur, hi, sw, de, pt, ta, gu): IANA language code. If provided output will be filtered by sourceLanguage.
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [UtilityLabels](#utilitylabels)

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

#### Input
* input `object`
  * source_lang **required** `string` (values: en, es, hi, nso, tn, zu, de, pt): IANA language code
  * word_id **required** `string`: The input word
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [Lemmatron](#lemmatron)

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

#### Input
* input `object`
  * source_lang **required** `string` (values: en, es, hi, nso, tn, zu, de, pt): IANA language code
  * word_id **required** `string`: The input word
  * filters **required** `array`: Separate filtering conditions using a semicolon. Conditions take values grammaticalFeatures and/or lexicalCategory and are case-sensitive. To list multiple values in single condition divide them with comma.
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [Lemmatron](#lemmatron)

### languages.get
Returns a list of monolingual and bilingual language datasets available in the API



```js
oxforddictionaries.languages.get({
  "app_id": "",
  "app_key": ""
}, context)
```

#### Input
* input `object`
  * sourceLanguage `string` (values: es, en, lv, nso, zu, ms, id, tn, ur, hi, sw, ro, de, pt, ta, gu): IANA language code. If provided output will be filtered by sourceLanguage.
  * targetLanguage `string` (values: es, en, lv, nso, zu, ms, id, tn, ur, hi, sw, ro): IANA language code. If provided output will be filtered by sourceLanguage.
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [Languages](#languages)

### lexicalcategories.language.get
Returns a list of available [lexical categories](documentation/glossary?term=lexicalcategory) for a given language dataset.



```js
oxforddictionaries.lexicalcategories.language.get({
  "language": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Input
* input `object`
  * language **required** `string` (values: es, en, lv, nso, zu, ms, id, tn, ur, hi, sw, ro, de, pt, ta, gu): IANA language code
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [UtilityLabels](#utilitylabels)

### regions.source_language.get
Returns a list of the available [regions](documentation/glossary?term=regions) for a given monolingual language dataset.



```js
oxforddictionaries.regions.source_language.get({
  "source_language": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Input
* input `object`
  * source_language **required** `string` (values: en): IANA language code
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [Regions](#regions)

### registers.source_language.get
Returns a list of the available [registers](documentation/glossary?term=registers) for a given monolingual language dataset.



```js
oxforddictionaries.registers.source_language.get({
  "source_language": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Input
* input `object`
  * source_language **required** `string` (values: en, es, hi, id, lv, ms, sw, ur, de, pt, ta, gu): IANA language code
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [UtilityLabels](#utilitylabels)

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

#### Input
* input `object`
  * source_register_language **required** `string` (values: en, es, ms, id, ur, de, pt): IANA language code
  * target_register_language **required** `string` (values: es, en, nso, zu, ms, id, tn, ro, de, pt): IANA language code
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [UtilityLabels](#utilitylabels)

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

#### Input
* input `object`
  * source_lang **required** `string` (values: en, es, hi, lv, sw, ta, gu): IANA language code
  * q `string`: Search string
  * prefix `boolean` (values: false, true): Set prefix to true if you'd like to get results only starting with search string.
  * regions `string`: If searching in English, filter words with specific region(s) either 'us' or 'gb'.
  * limit `string`: Limit the number of results per response. Default and maximum limit is 5000.
  * offset `string`: Offset the start number of the result.
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [Wordlist](#wordlist)

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

#### Input
* input `object`
  * source_search_language **required** `string` (values: en, es, nso, zu, ms, id, tn, ur, de, pt): IANA language code
  * target_search_language **required** `string` (values: es, nso, zu, ms, id, tn, ro, de, pt): IANA language code
  * q `string`: Search string.
  * prefix `boolean` (values: false, true): Set prefix to true if you'd like to get results only starting with search string.
  * regions `string`: Filter words with specific region(s) E.g., regions=us. For now gb, us are available for en language.
  * limit `string`: Limit the number of results per response. Default and maximum limit is 5000.
  * offset `string`: Offset the start number of the result.
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [Wordlist](#wordlist)

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

#### Input
* input `object`
  * source_lang **required** `string` (values: en, es, hi, lv, sw, ta, gu): IANA language code
  * filters_advanced **required** `string`: Semicolon separated list of wordlist parameters, presented as value pairs: LexicalCategory, domains, regions, registers. Parameters can take comma separated list of values. E.g., lexicalCategory=noun,adjective;domains=sport. Number of values limited to 5.
  * exclude `string`: Semicolon separated list of parameters-value pairs (same as filters). Excludes headwords that have any senses in specified exclusion attributes (lexical categories, domains, etc.) from results.
  * exclude_senses `string`: Semicolon separated list of parameters-value pairs (same as filters). Excludes only those senses of a particular headword that match specified exclusion attributes (lexical categories, domains, etc.) from results but includes the headword if it has other permitted senses.
  * exclude_prime_senses `string`: Semicolon separated list of parameters-value pairs (same as filters). Excludes a headword only if the primary sense matches the specified exclusion attributes (registers, domains only).
  * word_length `string`: Parameter to speficy the minimum (>), exact or maximum (<) length of the words required. E.g., >5 - more than 5 chars; <4 - less than 4 chars; >5<10 - from 5 to 10 chars; 3 - exactly 3 chars.
  * prefix `string`: Filter words that start with prefix parameter
  * exact `boolean` (values: false, true): If exact=true wordlist returns a list of entries that exactly matches the search string. Otherwise wordlist lists entries that start with prefix string.
  * limit `string`: Limit the number of results per response. Default and maximum limit is 5000.
  * offset `string`: Offset the start number of the result.
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [Wordlist](#wordlist)

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

#### Input
* input `object`
  * source_lang **required** `string` (values: en, es, hi, lv, sw, ta, gu): IANA language code
  * filters_basic **required** `string`: Semicolon separated list of wordlist parameters, presented as value pairs: LexicalCategory, domains, regions, registers. Parameters can take comma separated list of values. E.g., lexicalCategory=noun,adjective;domains=sport. Number of values limited to 5.
  * limit `string`: Limit the number of results per response. Default and maximum limit is 5000.
  * offset `string`: Offset the start number of the result
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [Wordlist](#wordlist)



## Definitions

### ArrayOfRelatedEntries
* ArrayOfRelatedEntries `array`: A list of written or spoken words
  * items `object`
    * domains [arrayofstrings](#arrayofstrings)
    * id **required** `string`: The identifier of the word
    * language `string`: IANA language code specifying the language of the word
    * regions [arrayofstrings](#arrayofstrings)
    * registers [arrayofstrings](#arrayofstrings)
    * text **required** `string`

### CategorizedTextList
* CategorizedTextList `array`: various types of notes that appear
  * items `object`
    * id `string`: The identifier of the word
    * text **required** `string`: A note text
    * type **required** `string`: The descriptive category of the text

### CrossReferencesList
* CrossReferencesList `array`: A reference to another word that is closely related, might provide additional information about the subject, has a variant spelling or is an abbreviated form of it.
  * items `object`: cross references of a sense
    * id **required** `string`: The word id of cooccurrence
    * text **required** `string`: The word of cooccurrence
    * type **required** `string`: The type of relation between the two words. Possible values are 'close match', 'related', 'see also', 'variant spelling', and 'abbreviation' in case of crossreferences, or 'pre', 'post' in case of collocates.

### Entry
* Entry `object`
  * etymologies [arrayofstrings](#arrayofstrings)
  * grammaticalFeatures [GrammaticalFeaturesList](#grammaticalfeatureslist)
  * homographNumber `string`: Identifies the homograph grouping. The last two digits identify different entries of the same homograph. The first one/two digits identify the homograph number.
  * notes [CategorizedTextList](#categorizedtextlist)
  * pronunciations [PronunciationsList](#pronunciationslist)
  * senses `array`: Complete list of senses
    * items [Sense](#sense)
  * variantForms [VariantFormsList](#variantformslist)

### ExamplesList
* ExamplesList `array`: A list of written or spoken rendering of examples of use of a word or text
  * items `object`
    * definitions [arrayofstrings](#arrayofstrings)
    * domains [arrayofstrings](#arrayofstrings)
    * notes [CategorizedTextList](#categorizedtextlist)
    * regions [arrayofstrings](#arrayofstrings)
    * registers [arrayofstrings](#arrayofstrings)
    * senseIds [arrayofstrings](#arrayofstrings)
    * text **required** `string`
    * translations [TranslationsList](#translationslist)

### Filters
* Filters `object`: Schema for the Filters endpoint.
  * metadata `object`: Additional Information provided by OUP
  * results `object`: A mapping of filters available per endpoints.
    * entries [arrayofstrings](#arrayofstrings)
    * inflections [arrayofstrings](#arrayofstrings)
    * translations [arrayofstrings](#arrayofstrings)
    * wordlist [arrayofstrings](#arrayofstrings)

### GrammaticalFeaturesList
* GrammaticalFeaturesList `array`: The different forms are correlated with meanings or functions which we text as 'features'
  * items `object`
    * text **required** `string`
    * type **required** `string`

### HeadwordEntry
* HeadwordEntry `object`: Description of a word
  * id **required** `string`: The identifier of a word
  * language **required** `string`: IANA language code
  * lexicalEntries **required** `array`: A grouping of various senses in a specific language, and a lexical category that relates to a word
    * items [lexicalEntry](#lexicalentry)
  * pronunciations [PronunciationsList](#pronunciationslist)
  * type `string`: The json object type. Could be 'headword', 'inflection' or 'phrase'
  * word **required** `string`: A given written or spoken realisation of a an entry, lowercased.

### HeadwordLemmatron
* HeadwordLemmatron `object`: Description of an inflected form of a word
  * id **required** `string`: The identifier of a word
  * language **required** `string`: IANA language code
  * lexicalEntries **required** `array`: A grouping of various senses in a specific language, and a lexical category that relates to a word
    * items [LemmatronLexicalEntry](#lemmatronlexicalentry)
  * type `string`: The json object type. Could be 'headword', 'inflection' or 'phrase'
  * word **required** `string`: A given written or spoken realisation of a an entry, lowercased.

### HeadwordThesaurus
* HeadwordThesaurus `object`: description of thesaurus information of a word
  * id **required** `string`: The identifier of a word
  * language **required** `string`: IANA language code
  * lexicalEntries **required** `array`: A grouping of various senses in a specific language, and a lexical category that relates to a word
    * items [ThesaurusLexicalEntry](#thesauruslexicalentry)
  * type `string`: The json object type. Could be 'headword', 'inflection' or 'phrase'
  * word **required** `string`: A given written or spoken realisation of a an entry, lowercased.

### InflectionsList
* InflectionsList `array`: A grouping of the modifications of a word to express different grammatical categories
  * items `object`
    * id **required** `string`: The identifier of the word
    * text **required** `string`

### Languages
* Languages `object`: Schema for the languages endpoint.
  * metadata `object`: Additional Information provided by OUP
  * results `array`: A list of languages available.
    * items `object`
      * region `string`: Name of region.
      * source `string`: Name of source dictionary.
      * sourceLanguage `object`: Source language of the results
        * id `string`: IANA language code
        * language `string`: Language label.
      * targetLanguage `object`: Translation language of the results
        * id `string`: IANA language code
        * language `string`: Language label.
      * type `string` (values: monolingual, bilingual): whether monolingual or bilingual.

### Lemmatron
* Lemmatron `object`: Schema for the inflections endpoint.
  * metadata `object`: Additional Information provided by OUP
  * results `array`: A list of inflections matching a given word
    * items [HeadwordLemmatron](#headwordlemmatron)

### LemmatronLexicalEntry
* LemmatronLexicalEntry `object`: Description of an entry for a particular part of speech and grammatical features
  * grammaticalFeatures [GrammaticalFeaturesList](#grammaticalfeatureslist)
  * inflectionOf **required** [InflectionsList](#inflectionslist)
  * language **required** `string`: IANA language code
  * lexicalCategory **required** `string`: A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb
  * text **required** `string`: A given written or spoken realisation of a an entry.

### PronunciationsList
* PronunciationsList `array`: A list of possible pronunciations of a word
  * items `object`: A grouping of pronunciation information
    * audioFile `string`: The URL of the sound file
    * dialects [arrayofstrings](#arrayofstrings)
    * phoneticNotation `string`: The alphabetic system used to display the phonetic spelling
    * phoneticSpelling `string`: Phonetic spelling is the representation of vocal sounds which express pronunciations of words. It is a system of spelling in which each letter represents invariably the same spoken sound
    * regions [arrayofstrings](#arrayofstrings)

### Regions
* Regions `object`: Schema for region endpoint.
  * metadata `object`: Additional Information provided by OUP
  * results `object`: A mapping of regions available.

### RetrieveEntry
* RetrieveEntry `object`: Schema for the 'entries' endpoints
  * metadata `object`: Additional Information provided by OUP
  * results `array`: A list of entries and all the data related to them
    * items [HeadwordEntry](#headwordentry)

### Sense
* Sense `object`: A lexical sense represents the lexical meaning of a lexical entry when interpreted as referring to the corresponding ontology element
  * crossReferenceMarkers [arrayofstrings](#arrayofstrings)
  * crossReferences [CrossReferencesList](#crossreferenceslist)
  * definitions [arrayofstrings](#arrayofstrings)
  * domains [arrayofstrings](#arrayofstrings)
  * examples [ExamplesList](#exampleslist)
  * id `string`: The id of the sense that is required for the delete procedure
  * notes [CategorizedTextList](#categorizedtextlist)
  * pronunciations [PronunciationsList](#pronunciationslist)
  * regions [arrayofstrings](#arrayofstrings)
  * registers [arrayofstrings](#arrayofstrings)
  * subsenses `array`: Ordered list of subsenses of a sense
    * items [Sense](#sense)
  * translations [TranslationsList](#translationslist)
  * variantForms [VariantFormsList](#variantformslist)

### SentencesEntry
* SentencesEntry `object`: Description of a word
  * id **required** `string`: The identifier of a word
  * language **required** `string`: IANA language code
  * lexicalEntries **required** `array`: A grouping of various senses in a specific language, and a lexical category that relates to a word
    * items [SentencesLexicalEntry](#sentenceslexicalentry)
  * type `string`: The json object type. Could be 'headword', 'inflection' or 'phrase'
  * word **required** `string`: A given written or spoken realisation of a an entry, lowercased.

### SentencesLexicalEntry
* SentencesLexicalEntry `object`: Description of an entry for a particular part of speech
  * grammaticalFeatures [GrammaticalFeaturesList](#grammaticalfeatureslist)
  * language **required** `string`: IANA language code
  * lexicalCategory `string`: A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb
  * sentences **required** [ExamplesList](#exampleslist)
  * text **required** `string`: A given written or spoken realisation of a an entry.

### SentencesResults
* SentencesResults `object`: Schema for the 'sentences' endpoint
  * metadata `object`: Additional Information provided by OUP
  * results `array`: A list of entries and all the data related to them
    * items [SentencesEntry](#sentencesentry)

### SynonymsAntonyms
* SynonymsAntonyms `array`
  * items `object`
    * domains [arrayofstrings](#arrayofstrings)
    * id **required** `string`
    * language `string`
    * regions [arrayofstrings](#arrayofstrings)
    * registers [arrayofstrings](#arrayofstrings)
    * text **required** `string`

### Thesaurus
* Thesaurus `object`: Schema for thesaurus endpoint
  * metadata `object`: Additional Information provided by OUP
  * results `array`: A list of found synonyms or antonyms
    * items [HeadwordThesaurus](#headwordthesaurus)

### ThesaurusEntry
* ThesaurusEntry `object`
  * homographNumber `string`: Identifies the homograph grouping. The last two digits identify different entries of the same homograph. The first one/two digits identify the homograph number.
  * senses `array`: Complete list of senses
    * items [ThesaurusSense](#thesaurussense)
  * variantForms [VariantFormsList](#variantformslist)

### ThesaurusLexicalEntry
* ThesaurusLexicalEntry `object`: Description of an entry for a particular part of speech
  * entries `array`
    * items [ThesaurusEntry](#thesaurusentry)
  * language **required** `string`: IANA language code
  * lexicalCategory **required** `string`: A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb
  * text **required** `string`: A given written or spoken realisation of a an entry.
  * variantForms [VariantFormsList](#variantformslist)

### ThesaurusSense
* ThesaurusSense `object`: A lexical sense represents the lexical meaning of a lexical entry when interpreted as referring to the corresponding ontology element
  * antonyms [SynonymsAntonyms](#synonymsantonyms)
  * domains [arrayofstrings](#arrayofstrings)
  * examples [ExamplesList](#exampleslist)
  * id `string`: The id of the sense that is required for the delete procedure
  * regions [arrayofstrings](#arrayofstrings)
  * registers [arrayofstrings](#arrayofstrings)
  * subsenses `array`: subsenses of word
    * items [ThesaurusSense](#thesaurussense)
  * synonyms [SynonymsAntonyms](#synonymsantonyms)

### TranslationsList
* TranslationsList `array`: A list of written or spoken rendering of the meaning of a word or text in another language(s)
  * items `object`
    * domains [arrayofstrings](#arrayofstrings)
    * grammaticalFeatures [GrammaticalFeaturesList](#grammaticalfeatureslist)
    * language **required** `string`: IANA language code specifying the language of the translation
    * notes [CategorizedTextList](#categorizedtextlist)
    * regions [arrayofstrings](#arrayofstrings)
    * registers [arrayofstrings](#arrayofstrings)
    * text **required** `string`

### UtilityLabels
* UtilityLabels `object`: Schema for lexicalcategories, registers utility endpoints.
  * metadata `object`: Additional Information provided by OUP
  * results `object`: Mapping of labels available.

### VariantFormsList
* VariantFormsList `array`: Various words that are used interchangeably depending on the context, e.g 'aluminium' and 'aluminum'
  * items `object`
    * regions [arrayofstrings](#arrayofstrings)
    * text **required** `string`

### Wordlist
* Wordlist `object`: Schema for wordlist endpoint.
  * metadata `object`: Additional Information provided by OUP
  * results `array`: A list of found words
    * items `object`: Description of found word
      * id **required** `string`: The identifier of a word
      * matchString `string`
      * matchType `string`
      * region `string`: Name of region.
      * word **required** `string`: A given written or spoken realisation of a an entry, lowercased.

### arrayofstrings
* arrayofstrings `array`
  * items `string`

### lexicalEntry
* lexicalEntry `object`: Description of an entry for a particular part of speech
  * derivativeOf [ArrayOfRelatedEntries](#arrayofrelatedentries)
  * entries `array`
    * items [Entry](#entry)
  * grammaticalFeatures [GrammaticalFeaturesList](#grammaticalfeatureslist)
  * language **required** `string`: IANA language code
  * lexicalCategory **required** `string`: A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb
  * notes [CategorizedTextList](#categorizedtextlist)
  * pronunciations [PronunciationsList](#pronunciationslist)
  * text **required** `string`: A given written or spoken realisation of a an entry.
  * variantForms [VariantFormsList](#variantformslist)


