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

Use this to retrieve sentences extracted from  corpora which show how a word is used in the language. This is available for English and Spanish. For English, the sentences are linked to the correct [sense](documentation/glossary?term=sense) of the word in the dictionary. In Spanish, they are linked at the [headword](documentation/glossary?term=headword) level.
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

Use this to retrieve definitions, [pronunciations](documentation/glossary?term=pronunciation), example sentences, [grammatical information](documentation/glossary?term=grammaticalfeatures) and [word origins](documentation/glossary?term=etymology). It only works for dictionary [headwords](documentation/glossary?term=headword), so you may need to use the [Lemmatron](documentation/glossary?term=lemma) first if your input is likely to be an [inflected](documentation/glossary?term=inflection) form (e.g., 'swimming'). This would return the linked [headword](documentation/glossary?term=headword) (e.g., 'swim') which you can then use in the Entries endpoint. Unless specified using a region filter, the default lookup will be the Oxford Dictionary of English (GB). 
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

Retrieve words that are opposite in meaning to the input word ([antonym](documentation/glossary?term=thesaurus)).

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

Use this to retrieve words that are similar in meaning to the input word ([synonym](documentation/glossary?term=synonym)).

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

Use filters to limit the [entry](documentation/glossary?term=entry) information that is returned. For example, you may only require definitions and not everything else, or just [pronunciations](documentation/glossary?term=pronunciation). The full list of filters can be retrieved from the filters Utility endpoint. You can also specify values within the filter using '='. For example 'grammaticalFeatures=singular'. Filters can also be combined using a semicolon.

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

Use this to retrieve possible [headword](documentation/glossary?term=headword) matches for a given string of text. The results are culculated using headword matching, fuzzy matching, and [lemmatization](documentation/glossary?term=lemma) 

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

### stats.frequency.ngrams.source_lang.corpus.ngram_size.get
This endpoint returns frequencies of ngrams of size 1-4. That is the number of times a word (ngram size = 1) or words (ngram size > 1) appear in the corpus. Ngrams are case sensitive ("I AM" and "I am" will have different frequency) and frequencies are calculated per word (true case) so "the book" and "the books" are two different ngrams. The results can be filtered based on query parameters. <br> <br> Parameters can be provided in PATH, GET or POST (form or json). The parameters in PATH are overridden by parameters in GET, POST and json (in that order). In PATH, individual options are separated by semicolon and values are separated by commas (where multiple values can be used). <br> <br> Example for bigrams (ngram of size 2):
* PATH: /tokens=a word,another word
* GET: /?tokens=a word&tokens=another word
* POST (json):

  ```javascript
    {
        "tokens": ["a word", "another word"]
    }
  ```

Either "tokens" or "contains" has to be provided. <br> <br> Some queries with "contains" or "sort" can exceed the 30s timeout, in which case the API will return an error message with status code 503. You mitigate this by providing additional restrictions such as "minFrequency" and "maxFrequency". <br> <br> You can use the parameters "offset" and "limit" to paginate through large result sets. For convenience, the HTTP header "Link" is set on the response to provide links to "first", "self", "next", "prev" and "last" pages of results (depending on the context). For example, if the result set contains 50 results and the parameter "limit" is set to 25, the Links header will contain an URL for the first 25 results and the next 25 results. <br> <br> Some libraries such as python's `requests` can parse the header automatically and offer a convenient way of iterating through the results. For example:
```python def get_all_results(url):
    while url:
        r = requests.get(url)
        r.raise_for_status()
        for item in r.json()['results']:
          yield item
        url = r.links.get('next', {}).get('url')
```



```js
oxforddictionaries.stats.frequency.ngrams.source_lang.corpus.ngram_size.get({
  "source_lang": "",
  "corpus": "",
  "ngram-size": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Input
* input `object`
  * source_lang **required** `string`: IANA language code
  * corpus **required** `string`: For corpora other than 'nmc' (New Monitor Corpus) please contact api@oxforddictionaries.com
  * ngram-size **required** `string`: the size of ngrams requested (1-4)
  * tokens `string`: List of tokens to filter. The tokens are separated by spaces, the list items are separated by comma (e.g., for bigrams (n=2) tokens=this is,this was, this will)
  * contains `string`: Find ngrams containing the given token(s). Use comma or space as token separators; the order of tokens is irrelevant.
  * punctuation `string`: Flag specifying whether to lookup ngrams that include punctuation or not (possible values are "true" and "false"; default is "false")
  * format `string`: Option specifying whether tokens should be returned as a single string (option "google") or as a list of strings (option "oup")
  * minFrequency `integer`: Restrict the query to entries with frequency of at least `minFrequency`
  * maxFrequency `integer`: Restrict the query to entries with frequency of at most `maxFrequency`
  * minDocumentFrequency `integer`: Restrict the query to entries that appear in at least `minDocumentFrequency` documents
  * maxDocumentFrequency `integer`: Restrict the query to entries that appera in at most `maxDocumentFrequency` documents
  * collate `string`: collate the results by wordform, trueCase, lemma, lexicalCategory. Multiple values can be separated by commas (e.g., collate=trueCase,lemma,lexicalCategory).
  * sort `string`: sort the resulting list by wordform, trueCase, lemma, lexicalCategory, frequency, normalizedFrequency. Descending order is achieved by prepending the value with the minus sign ('-'). Multiple values can be separated by commas (e.g., sort=lexicalCategory,-frequency)
  * offset `integer`: pagination - results offset
  * limit `integer`: pagination - results limit
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [NgramsResult](#ngramsresult)

### stats.frequency.word.source_lang.get
This endpoint provides the frequency of a given word. When multiple database records match the query parameters, the returned frequency is the sum of the individual frequencies. For example, if the query parameters are lemma=test, the returned frequency will include the verb "test", the noun "test" and the adjective "test" in all forms (Test, tested, testing, etc.) <br> <br> If you are interested in the frequency of the word "test" but want to exclude other forms (e.g., tested) use the option trueCase=test. Normally, the word "test" will be spelt with a capital letter at the beginning of a sentence. The option trueCase will ignore this and it will count "Test" and "test" as the same token. If you are interested in frequencies of "Test" and "test", use the option wordform=test or wordform=Test. Note that trueCase is not just a lower case of the word as some words are genuinely spelt with a capital letter such as the word "press" in Oxford University Press. <br> <br> Parameters can be provided in PATH, GET or POST (form or json). The parameters in PATH are overriden by parameters in GET, POST and json (in that order). In PATH, individual options are separated by semicolon and values are separated by commas (where multiple values can be used). Examples:
* PATH: /lemma=test;lexicalCategory=noun
* GET: /?lemma=test&lexicalCategory=noun
* POST (json):

  ```javascript
    {
      "lemma": "test",
      "lexicalCategory": "noun"
    }
  ```

<br> One of the options wordform/trueCase/lemma/lexicalCategory has to be provided.



```js
oxforddictionaries.stats.frequency.word.source_lang.get({
  "source_lang": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Input
* input `object`
  * source_lang **required** `string`: IANA language code
  * corpus `string`: For corpora other than 'nmc' (New Monitor Corpus) please contact api@oxforddictionaries.com
  * wordform `string`: The written form of the word to look up (preserving case e.g., Books vs books)
  * trueCase `string`: The written form of the word to look up with normalised case (Books --> books)
  * lemma `string`: The lemma of the word to look up (e.g., Book, booked, books all have the lemma "book")
  * lexicalCategory `string`: The lexical category of the word(s) to look up (e.g., noun or verb)
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [StatsWordResult](#statswordresult)

### stats.frequency.words.source_lang.get
This endpoint provides a list of frequencies for a given word or words. Unlike the /word/ endpoint, the results are split into the smallest units. <br> <br> To exclude a specific value, prepend it with the minus sign ('-'). For example, to get frequencies of the lemma 'happy' but exclude superlative forms (i.e., happiest) you could use options 'lemma=happy;grammaticalFeatures=-degreeType:superlative'. <br> <br> Parameters can be provided in PATH, GET or POST (form or json). The parameters in PATH are overridden by parameters in GET, POST and json (in that order). In PATH, individual options are separated by semicolon and values are separated by commas (where multiple values can be used). <br> <br> The parameters wordform/trueCase/lemma/lexicalCategory also exist in a plural form, taking a lists of items. Examples:
* PATH: /wordforms=happy,happier,happiest
* GET: /?wordforms=happy&wordforms=happier&wordforms=happiest
* POST (json):
```javascript
  {
    "wordforms": ["happy", "happier", "happiest"]
  }
```
A mor complex example of retrieving frequencies of multiple lemmas:
```
  {
      "lemmas": ["happy", "content", "cheerful", "cheery", "merry", "joyful", "ecstatic"],
      "grammaticalFeatures": {
          "adjectiveFunctionType": "predicative"
      },
      "lexicalCategory": "adjective",
      "sort": ["lemma", "-frequency"]
  }
```
Some queries with "collate" or "sort" can exceed the 30s timeout, in which case the API will return an error message with status code 503. You mitigate this by providing additional restrictions such as "minFrequency" and "maxFrequency". <br> <br> You can use the parameters "offset" and "limit" to paginate through large result sets. For convenience, the HTTP header "Link" is set on the response to provide links to "first", "self", "next", "prev" and "last" pages of results (depending on the context). For example, if the result set contains 50 results and the parameter "limit" is set to 25, the Links header will contain an URL for the first 25 results and the next 25 results. <br> <br> Some libraries such as python's `requests` can parse the header automatically and offer a convenient way of iterating through the results. For example:
```python def get_all_results(url):
    while url:
        r = requests.get(url)
        r.raise_for_status()
        for item in r.json()['results']:
          yield item
        url = r.links.get('next', {}).get('url')
```



```js
oxforddictionaries.stats.frequency.words.source_lang.get({
  "source_lang": "",
  "app_id": "",
  "app_key": ""
}, context)
```

#### Input
* input `object`
  * source_lang **required** `string`: IANA language code
  * corpus `string`: For corpora other than 'nmc' (New Monitor Corpus) please contact api@oxforddictionaries.com
  * wordform `string`: The written form of the word to look up (preserving case e.g., Book vs book)
  * trueCase `string`: The written form of the word to look up with normalised case (Books --> books)
  * lemma `string`: The lemma of the word to look up (e.g., Book, booked, books all have the lemma "book")
  * lexicalCategory `string`: The lexical category of the word(s) to look up (e.g., adjective or noun)
  * grammaticalFeatures `string`: The grammatical features of the word(s) to look up entered as a list of k:v (e.g., degree_type:comparative)
  * sort `string`: sort the resulting list by wordform, trueCase, lemma, lexicalCategory, frequency, normalizedFrequency. Descending order is achieved by prepending the value with the minus sign ('-'). Multiple values can be separated by commas (e.g., sort=lexicalCategory,-frequency)
  * collate `string`: collate the results by wordform, trueCase, lemma, lexicalCategory. Multiple values can be separated by commas (e.g., collate=trueCase,lemma,lexicalCategory).
  * minFrequency `integer`: Restrict the query to entries with frequency of at least `minFrequency`
  * maxFrequency `integer`: Restrict the query to entries with frequency of at most `maxFrequency`
  * minNormalizedFrequency `number`: Restrict the query to entries with frequency of at least `minNormalizedFrequency`
  * maxNormalizedFrequency `number`: Restrict the query to entries with frequency of at most `maxNormalizedFrequency`
  * offset `integer`: pagination - results offset
  * limit `integer`: pagination - results limit
  * app_id **required** `string`: App ID Authentication Parameter
  * app_key **required** `string`: App Key Authentication Parameter

#### Output
* output [StatsWordResultList](#statswordresultlist)

### wordlist.source_lang.filters_advanced.get
Use this to apply more complex filters to the [list of words](documentation/glossary?term=wordlist). For example, you may only want to filter out words for which all [senses](documentation/glossary?term=sense) match the filter, or only its 'prime sense'. You can also filter by word length or match by substring (prefix). 

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

Use this to retrieve a [list of words](documentation/glossary?term=wordlist) for particular [domain](documentation/glossary?term=domain), [lexical category](documentation/glossary?term=lexicalcategory), [register](documentation/glossary?term=registers) and/or [region](documentation/glossary?term=regions). View the full list of possible filters using the filters Utility endpoint.  The response only includes [headwords](documentation/glossary?term=headword), not all their possible [inflections](documentation/glossary?term=inflection). If you require a full [wordlist](documentation/glossary?term=wordlist) including [inflected forms](documentation/glossary?term=inflection), contact us and we can help.

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

### NgramsResult
* NgramsResult `object`: Schema for corpus ngrams.
  * metadata `object`: Additional Information provided by OUP
  * results `array`: A list of found ngrams along with their frequencies
    * items `object`: Ngrams matching the given options
      * frequency **required** `integer`: The number of times the ngram (a sequence of n words) appears in the corpus
      * tokens **required** `array`: A list of tokens
        * items `string`

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
  * short_definitions [arrayofstrings](#arrayofstrings)
  * subsenses `array`: Ordered list of subsenses of a sense
    * items [Sense](#sense)
  * thesaurusLinks `array`: Ordered list of links to the Thesaurus Dictionary
    * items [thesaurusLink](#thesauruslink)
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

### StatsWordResult
* StatsWordResult `object`: Schema for lexi-stats results for a word/trueCase/lemma/lexicalCategory returned as a frequency
  * metadata `object`: Additional Information provided by OUP
  * result `object`: Frequency information for a given entity
    * frequency **required** `integer`: The number of times a word appears in the entire corpus
    * lemma `string`: A lemma of the word (e.g., wordforms "lay", "laid" and "laying" have all lemma "lay")
    * lexicalCategory `string`: A lexical category such as 'verb' or 'noun'
    * matchCount **required** `integer`: The number of database records that matched the query params (stated frequency is the sum of the individual frequencies)
    * normalizedFrequency **required** `integer`: The number of times a word appears on average in 1 million words
    * trueCase `string`: A given written realisation of a an entry (e.g., "lay") usually lower case
    * wordform `string`: A given written realisation of a an entry (e.g., "Lay") preserving case

### StatsWordResultList
* StatsWordResultList `object`: Schema for lexi-stats results for a word/trueCase/lemma/lexicalCategory returned as a list of frequencies per wordform-trueCase-lemma-lexicalCategory entry.
  * metadata `object`: Additional Information provided by OUP
  * results `array`: A list of found words along with their frequencies
    * items `object`: Statistical information about a word
      * frequency **required** `integer`: The number of times a word appears in the entire corpus
      * lemma **required** `string`: A lemma of the word.
      * lexicalCategory **required** `string`: A lexical category such as 'verb' or 'noun'
      * normalizedFrequency **required** `integer`: The number of times a word appears on average in 1 million words
      * trueCase **required** `string`: A given written realisation of a an entry (e.g., "lay") usually lower case
      * wordform **required** `string`: A given written realisation of a an entry (e.g., "lay") preserving case

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
  * derivatives [ArrayOfRelatedEntries](#arrayofrelatedentries)
  * entries `array`
    * items [Entry](#entry)
  * grammaticalFeatures [GrammaticalFeaturesList](#grammaticalfeatureslist)
  * language **required** `string`: IANA language code
  * lexicalCategory **required** `string`: A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb
  * notes [CategorizedTextList](#categorizedtextlist)
  * pronunciations [PronunciationsList](#pronunciationslist)
  * text **required** `string`: A given written or spoken realisation of a an entry.
  * variantForms [VariantFormsList](#variantformslist)

### thesaurusLink
* thesaurusLink `object`: Link to a sense of a specific entry in the thesaurus Dictionary
  * entry_id **required** `string`: identifier of a word
  * sense_id **required** `string`: identifier of a sense


