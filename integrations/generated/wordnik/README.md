# @datafire/wordnik

Client library for Wordnik

## Installation and Usage
```bash
npm install --save @datafire/wordnik
```
```js
let wordnik = require('@datafire/wordnik').create({
  api_key: ""
});

wordnik.getWordOfTheDay({}).then(data => {
  console.log(data);
});
```

## Description

Wordnik is the world's biggest online English dictionary, by number of words


## Actions

### getApiTokenStatus
Returns usage statistics for the API account.


```js
wordnik.getApiTokenStatus({}, context)
```

#### Input
* input `object`
  * api_key `string`: Wordnik authentication token

#### Output
* output [ApiTokenStatus](#apitokenstatus)

### authenticate
Authenticates a User


```js
wordnik.authenticate({
  "username": "",
  "password": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: A confirmed Wordnik username
  * password **required** `string`: The user's password

#### Output
* output [AuthenticationToken](#authenticationtoken)

### authenticatePost
Authenticates a user


```js
wordnik.authenticatePost({
  "username": "",
  "body": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: A confirmed Wordnik username
  * body **required** `string`

#### Output
* output [AuthenticationToken](#authenticationtoken)

### getLoggedInUser
Requires a valid auth_token to be set.


```js
wordnik.getLoggedInUser({
  "auth_token": ""
}, context)
```

#### Input
* input `object`
  * auth_token **required** `string`: The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)

#### Output
* output [User](#user)

### getWordListsForLoggedInUser
Fetches WordList objects for the logged-in user.


```js
wordnik.getWordListsForLoggedInUser({
  "auth_token": ""
}, context)
```

#### Input
* input `object`
  * auth_token **required** `string`: auth_token of logged-in user
  * skip `integer`: Results to skip
  * limit `integer`: Maximum number of results to return

#### Output
* output `array`
  * items [WordList](#wordlist)

### getWord
Given a word as a string, returns the WordObject that represents it


```js
wordnik.getWord({
  "word": ""
}, context)
```

#### Input
* input `object`
  * word **required** `string`: String value of WordObject to return
  * useCanonical `string`: If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
  * includeSuggestions `string`: Return suggestions (for correct spelling, case variants, etc.)

#### Output
* output [WordObject](#wordobject)

### getAudio
The metadata includes a time-expiring fileUrl which allows reading the audio file directly from the API.  Currently only audio pronunciations from the American Heritage Dictionary in mp3 format are supported.


```js
wordnik.getAudio({
  "word": ""
}, context)
```

#### Input
* input `object`
  * word **required** `string`: Word to get audio for.
  * useCanonical `string`: Use the canonical form of the word
  * limit `integer`: Maximum number of results to return

#### Output
* output `array`
  * items [AudioFile](#audiofile)

### getDefinitions
Return definitions for a word


```js
wordnik.getDefinitions({
  "word": ""
}, context)
```

#### Input
* input `object`
  * word **required** `string`: Word to return definitions for
  * limit `integer`: Maximum number of results to return
  * partOfSpeech `string`: CSV list of part-of-speech types
  * includeRelated `string`: Return related words with definitions
  * sourceDictionaries `array`: Source dictionary to return definitions from.  If 'all' is received, results are returned from all sources. If multiple values are received (e.g. 'century,wiktionary'), results are returned from the first specified dictionary that has definitions. If left blank, results are returned from the first dictionary that has definitions. By default, dictionaries are searched in this order: ahd, wiktionary, webster, century, wordnet
  * useCanonical `string`: If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
  * includeTags `string`: Return a closed set of XML tags in response

#### Output
* output `array`
  * items [Definition](#definition)

### getEtymologies
Fetches etymology data


```js
wordnik.getEtymologies({
  "word": ""
}, context)
```

#### Input
* input `object`
  * word **required** `string`: Word to return
  * useCanonical `string`: If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.

#### Output
* output `array`
  * items `string`

### getExamples
Returns examples for a word


```js
wordnik.getExamples({
  "word": ""
}, context)
```

#### Input
* input `object`
  * word **required** `string`: Word to return examples for
  * includeDuplicates `string`: Show duplicate examples from different sources
  * useCanonical `string`: If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
  * skip `integer`: Results to skip
  * limit `integer`: Maximum number of results to return

#### Output
* output [ExampleSearchResults](#examplesearchresults)

### getWordFrequency
Returns word usage over time


```js
wordnik.getWordFrequency({
  "word": ""
}, context)
```

#### Input
* input `object`
  * word **required** `string`: Word to return
  * useCanonical `string`: If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
  * startYear `integer`: Starting Year
  * endYear `integer`: Ending Year

#### Output
* output [FrequencySummary](#frequencysummary)

### getHyphenation
Returns syllable information for a word


```js
wordnik.getHyphenation({
  "word": ""
}, context)
```

#### Input
* input `object`
  * word **required** `string`: Word to get syllables for
  * useCanonical `string`: If true will try to return a correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
  * sourceDictionary `string`: Get from a single dictionary. Valid options: ahd, century, wiktionary, webster, and wordnet.
  * limit `integer`: Maximum number of results to return

#### Output
* output `array`
  * items [Syllable](#syllable)

### getPhrases
Fetches bi-gram phrases for a word


```js
wordnik.getPhrases({
  "word": ""
}, context)
```

#### Input
* input `object`
  * word **required** `string`: Word to fetch phrases for
  * limit `integer`: Maximum number of results to return
  * wlmi `integer`: Minimum WLMI for the phrase
  * useCanonical `string`: If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.

#### Output
* output `array`
  * items [Bigram](#bigram)

### getTextPronunciations
Returns text pronunciations for a given word


```js
wordnik.getTextPronunciations({
  "word": ""
}, context)
```

#### Input
* input `object`
  * word **required** `string`: Word to get pronunciations for
  * useCanonical `string`: If true will try to return a correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
  * sourceDictionary `string`: Get from a single dictionary
  * typeFormat `string`: Text pronunciation type
  * limit `integer`: Maximum number of results to return

#### Output
* output `array`
  * items [TextPron](#textpron)

### getRelatedWords
Given a word as a string, returns relationships from the Word Graph


```js
wordnik.getRelatedWords({
  "word": ""
}, context)
```

#### Input
* input `object`
  * word **required** `string`: Word to fetch relationships for
  * useCanonical `string`: If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
  * relationshipTypes `string`: Limits the total results per type of relationship type
  * limitPerRelationshipType `integer`: Restrict to the supplied relationship types

#### Output
* output `array`
  * items [Related](#related)

### getTopExample
Returns a top example for a word


```js
wordnik.getTopExample({
  "word": ""
}, context)
```

#### Input
* input `object`
  * word **required** `string`: Word to fetch examples for
  * useCanonical `string`: If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.

#### Output
* output [Example](#example)

### deleteWordList
Deletes an existing WordList


```js
wordnik.deleteWordList({
  "permalink": "",
  "auth_token": ""
}, context)
```

#### Input
* input `object`
  * permalink **required** `string`: ID of WordList to delete
  * auth_token **required** `string`: The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)

#### Output
*Output schema unknown*

### getWordListByPermalink
Fetches a WordList by ID


```js
wordnik.getWordListByPermalink({
  "permalink": "",
  "auth_token": ""
}, context)
```

#### Input
* input `object`
  * permalink **required** `string`: permalink of WordList to fetch
  * auth_token **required** `string`: The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)

#### Output
* output [WordList](#wordlist)

### updateWordList
Updates an existing WordList


```js
wordnik.updateWordList({
  "permalink": "",
  "auth_token": ""
}, context)
```

#### Input
* input `object`
  * permalink **required** `string`: permalink of WordList to update
  * body [WordList](#wordlist)
  * auth_token **required** `string`: The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)

#### Output
*Output schema unknown*

### deleteWordsFromWordList
Removes words from a WordList


```js
wordnik.deleteWordsFromWordList({
  "permalink": "",
  "auth_token": ""
}, context)
```

#### Input
* input `object`
  * permalink **required** `string`: permalink of WordList to use
  * body `array`
    * items [StringValue](#stringvalue)
  * auth_token **required** `string`: The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)

#### Output
*Output schema unknown*

### getWordListWords
Fetches words in a WordList


```js
wordnik.getWordListWords({
  "permalink": "",
  "auth_token": ""
}, context)
```

#### Input
* input `object`
  * permalink **required** `string`: ID of WordList to use
  * sortBy `string`: Field to sort by
  * sortOrder `string`: Direction to sort
  * skip `integer`: Results to skip
  * limit `integer`: Maximum number of results to return
  * auth_token **required** `string`: The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)

#### Output
* output `array`
  * items [WordListWord](#wordlistword)

### addWordsToWordList
Adds words to a WordList


```js
wordnik.addWordsToWordList({
  "permalink": "",
  "auth_token": ""
}, context)
```

#### Input
* input `object`
  * permalink **required** `string`: permalink of WordList to user
  * body `array`
    * items [StringValue](#stringvalue)
  * auth_token **required** `string`: The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)

#### Output
*Output schema unknown*

### createWordList
Creates a WordList.


```js
wordnik.createWordList({
  "auth_token": ""
}, context)
```

#### Input
* input `object`
  * body [WordList](#wordlist)
  * auth_token **required** `string`: The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)

#### Output
* output [WordList](#wordlist)

### getRandomWord
Returns a single random WordObject


```js
wordnik.getRandomWord({}, context)
```

#### Input
* input `object`
  * hasDictionaryDef `string`: Only return words with dictionary definitions
  * includePartOfSpeech `string`: CSV part-of-speech values to include
  * excludePartOfSpeech `string`: CSV part-of-speech values to exclude
  * minCorpusCount `integer`: Minimum corpus frequency for terms
  * maxCorpusCount `integer`: Maximum corpus frequency for terms
  * minDictionaryCount `integer`: Minimum dictionary count
  * maxDictionaryCount `integer`: Maximum dictionary count
  * minLength `integer`: Minimum word length
  * maxLength `integer`: Maximum word length

#### Output
* output [WordObject](#wordobject)

### getRandomWords
Returns an array of random WordObjects


```js
wordnik.getRandomWords({}, context)
```

#### Input
* input `object`
  * hasDictionaryDef `string`: Only return words with dictionary definitions
  * includePartOfSpeech `string`: CSV part-of-speech values to include
  * excludePartOfSpeech `string`: CSV part-of-speech values to exclude
  * minCorpusCount `integer`: Minimum corpus frequency for terms
  * maxCorpusCount `integer`: Maximum corpus frequency for terms
  * minDictionaryCount `integer`: Minimum dictionary count
  * maxDictionaryCount `integer`: Maximum dictionary count
  * minLength `integer`: Minimum word length
  * maxLength `integer`: Maximum word length
  * sortBy `string`: Attribute to sort by
  * sortOrder `string`: Sort direction
  * limit `integer`: Maximum number of results to return

#### Output
* output `array`
  * items [WordObject](#wordobject)

### reverseDictionary
Reverse dictionary search


```js
wordnik.reverseDictionary({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: Search term
  * findSenseForWord `string`: Restricts words and finds closest sense
  * includeSourceDictionaries `string`: Only include these comma-delimited source dictionaries
  * excludeSourceDictionaries `string`: Exclude these comma-delimited source dictionaries
  * includePartOfSpeech `string`: Only include these comma-delimited parts of speech
  * excludePartOfSpeech `string`: Exclude these comma-delimited parts of speech
  * minCorpusCount `integer`: Minimum corpus frequency for terms
  * maxCorpusCount `integer`: Maximum corpus frequency for terms
  * minLength `integer`: Minimum word length
  * maxLength `integer`: Maximum word length
  * expandTerms `string`: Expand terms
  * includeTags `string`: Return a closed set of XML tags in response
  * sortBy `string`: Attribute to sort by
  * sortOrder `string`: Sort direction
  * skip `string`: Results to skip
  * limit `integer`: Maximum number of results to return

#### Output
* output [DefinitionSearchResults](#definitionsearchresults)

### searchWords
Searches words


```js
wordnik.searchWords({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: Search query
  * caseSensitive `string`: Search case sensitive
  * includePartOfSpeech `string`: Only include these comma-delimited parts of speech
  * excludePartOfSpeech `string`: Exclude these comma-delimited parts of speech
  * minCorpusCount `integer`: Minimum corpus frequency for terms
  * maxCorpusCount `integer`: Maximum corpus frequency for terms
  * minDictionaryCount `integer`: Minimum number of dictionary entries for words returned
  * maxDictionaryCount `integer`: Maximum dictionary definition count
  * minLength `integer`: Minimum word length
  * maxLength `integer`: Maximum word length
  * skip `integer`: Results to skip
  * limit `integer`: Maximum number of results to return

#### Output
* output [WordSearchResults](#wordsearchresults)

### getWordOfTheDay
Returns a specific WordOfTheDay


```js
wordnik.getWordOfTheDay({}, context)
```

#### Input
* input `object`
  * date `string`: Fetches by date in yyyy-MM-dd

#### Output
* output [WordOfTheDay](#wordoftheday)



## Definitions

### ApiTokenStatus
* ApiTokenStatus `object`
  * expiresInMillis `integer`
  * remainingCalls `integer`
  * resetsInMillis `integer`
  * token `string`
  * totalRequests `integer`
  * valid `boolean`

### AudioFile
* AudioFile `object`
  * attributionText `string`
  * attributionUrl `string`
  * audioType `string`
  * commentCount `integer`
  * createdAt `string`
  * createdBy `string`
  * description `string`
  * duration `number`
  * fileUrl `string`
  * id **required** `integer`
  * voteAverage `number`
  * voteCount `integer`
  * voteWeightedAverage `number`
  * word `string`

### AudioType
* AudioType `object`
  * id `integer`
  * name `string`

### AuthenticationToken
* AuthenticationToken `object`
  * token `string`
  * userId `integer`
  * userSignature `string`

### Bigram
* Bigram `object`
  * count `integer`
  * gram1 `string`
  * gram2 `string`
  * mi `number`
  * wlmi `number`

### Category
* Category `object`
  * id **required** `integer`
  * name `string`

### Citation
* Citation `object`
  * cite `string`
  * source `string`

### ContentProvider
* ContentProvider `object`
  * id `integer`
  * name `string`

### Definition
* Definition `object`
  * attributionText `string`
  * attributionUrl `string`
  * citations `array`
    * items [Citation](#citation)
  * exampleUses `array`
    * items [ExampleUsage](#exampleusage)
  * extendedText `string`
  * labels `array`
    * items [Label](#label)
  * notes `array`
    * items [Note](#note)
  * partOfSpeech `string`
  * relatedWords `array`
    * items [Related](#related)
  * score `number`
  * seqString `string`
  * sequence `string`
  * sourceDictionary `string`
  * text `string`
  * textProns `array`
    * items [TextPron](#textpron)
  * word `string`

### DefinitionSearchResults
* DefinitionSearchResults `object`
  * results `array`
    * items [Definition](#definition)
  * totalResults `integer`

### Example
* Example `object`
  * documentId `integer`
  * exampleId `integer`
  * id `integer`
  * provider [ContentProvider](#contentprovider)
  * rating `number`
  * score [ScoredWord](#scoredword)
  * sentence [Sentence](#sentence)
  * text `string`
  * title `string`
  * url `string`
  * word `string`
  * year `integer`

### ExampleSearchResults
* ExampleSearchResults `object`
  * examples `array`
    * items [Example](#example)
  * facets `array`
    * items [Facet](#facet)

### ExampleUsage
* ExampleUsage `object`
  * text `string`

### Facet
* Facet `object`
  * facetValues `array`
    * items [FacetValue](#facetvalue)
  * name `string`

### FacetValue
* FacetValue `object`
  * count `integer`
  * value `string`

### Frequency
* Frequency `object`
  * count `integer`
  * year `integer`

### FrequencySummary
* FrequencySummary `object`
  * frequency `array`
    * items [Frequency](#frequency)
  * frequencyString `string`
  * totalCount `integer`
  * unknownYearCount `integer`
  * word `string`

### Label
* Label `object`
  * text `string`
  * type `string`

### Note
* Note `object`
  * appliesTo `array`
    * items `string`
  * noteType `string`
  * pos `integer`
  * value `string`

### PartOfSpeech
* PartOfSpeech `object`
  * allCategories `array`
    * items [Category](#category)
  * roots `array`
    * items [Root](#root)
  * storageAbbr `array`
    * items `string`

### Related
* Related `object`
  * gram `string`
  * label1 `string`
  * label2 `string`
  * label3 `string`
  * label4 `string`
  * relationshipType `string`
  * words `array`
    * items `string`

### Root
* Root `object`
  * categories `array`
    * items [Category](#category)
  * id **required** `integer`
  * name `string`

### ScoredWord
* ScoredWord `object`
  * baseWordScore `number`
  * docTermCount `integer`
  * id `integer`
  * lemma `string`
  * partOfSpeech `string`
  * position `integer`
  * score `number`
  * sentenceId `integer`
  * stopword `boolean`
  * word `string`
  * wordType `string`

### Sentence
* Sentence `object`
  * display `string`
  * documentMetadataId `integer`
  * hasScoredWords `boolean`
  * id `integer`
  * rating `integer`
  * scoredWords `array`
    * items [ScoredWord](#scoredword)

### SimpleDefinition
* SimpleDefinition `object`
  * note `string`
  * partOfSpeech `string`
  * source `string`
  * text `string`

### SimpleExample
* SimpleExample `object`
  * id `integer`
  * text `string`
  * title `string`
  * url `string`

### StringValue
* StringValue `object`
  * word `string`

### Syllable
* Syllable `object`
  * seq `integer`
  * text `string`
  * type `string`

### TextPron
* TextPron `object`
  * raw `string`
  * rawType `string`
  * seq `integer`

### User
* User `object`
  * displayName `string`
  * email `string`
  * faceBookId `string`
  * id `integer`
  * password `string`
  * status `integer`
  * userName `string`
  * username `string`

### WordList
* WordList `object`
  * createdAt `string`
  * description `string`
  * id `integer`
  * lastActivityAt `string`
  * name `string`
  * numberWordsInList `integer`
  * permalink `string`
  * type `string`
  * updatedAt `string`
  * userId `integer`
  * username `string`

### WordListWord
* WordListWord `object`
  * createdAt `string`
  * id **required** `integer`
  * numberCommentsOnWord `integer`
  * numberLists `integer`
  * userId `integer`
  * username `string`
  * word `string`

### WordObject
* WordObject `object`
  * canonicalForm `string`
  * id **required** `integer`
  * originalWord `string`
  * suggestions `array`
    * items `string`
  * vulgar `string`
  * word `string`

### WordOfTheDay
* WordOfTheDay `object`
  * category `string`
  * contentProvider [ContentProvider](#contentprovider)
  * createdAt `string`
  * createdBy `string`
  * definitions `array`
    * items [SimpleDefinition](#simpledefinition)
  * examples `array`
    * items [SimpleExample](#simpleexample)
  * htmlExtra `string`
  * id **required** `integer`
  * note `string`
  * parentId `string`
  * publishDate `string`
  * word `string`

### WordSearchResult
* WordSearchResult `object`
  * count `integer`
  * lexicality `number`
  * word `string`

### WordSearchResults
* WordSearchResults `object`
  * searchResults `array`
    * items [WordSearchResult](#wordsearchresult)
  * totalResults `integer`


