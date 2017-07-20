# @datafire/wordnik

Client library for Wordnik

## Installation and Usage
```bash
npm install --save datafire @datafire/wordnik
```

```js
let datafire = require('datafire');
let wordnik = require('@datafire/wordnik').actions;

let account = {
  api_key: "",
}
let context = new datafire.Context({
  accounts: {
    wordnik: account,
  }
})


wordnik.getWordOfTheDay({}, context).then(data => {
  console.log(data);
})
```

## Description
Wordnik is the world's biggest online English dictionary, by number of words


## Actions
### getApiTokenStatus
Returns usage statistics for the API account.


```js
wordnik.getApiTokenStatus({}, context)
```


### authenticate
Authenticates a User


```js
wordnik.authenticate({
  "username": "",
  "password": ""
}, context)
```

#### Parameters
* username (string) **required** - A confirmed Wordnik username
* password (string) **required** - The user's password

### authenticatePost
Authenticates a user


```js
wordnik.authenticatePost({
  "username": "",
  "body": ""
}, context)
```

#### Parameters
* username (string) **required** - A confirmed Wordnik username
* body (string) **required**

### getLoggedInUser
Requires a valid auth_token to be set.


```js
wordnik.getLoggedInUser({
  "auth_token": ""
}, context)
```

#### Parameters
* auth_token (string) **required** - The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)

### getWordListsForLoggedInUser
Fetches WordList objects for the logged-in user.


```js
wordnik.getWordListsForLoggedInUser({
  "auth_token": ""
}, context)
```

#### Parameters
* auth_token (string) **required** - auth_token of logged-in user
* skip (integer) - Results to skip
* limit (integer) - Maximum number of results to return

### getWord
Given a word as a string, returns the WordObject that represents it


```js
wordnik.getWord({
  "word": ""
}, context)
```

#### Parameters
* word (string) **required** - String value of WordObject to return
* useCanonical (string) - If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
* includeSuggestions (string) - Return suggestions (for correct spelling, case variants, etc.)

### getAudio
The metadata includes a time-expiring fileUrl which allows reading the audio file directly from the API.  Currently only audio pronunciations from the American Heritage Dictionary in mp3 format are supported.


```js
wordnik.getAudio({
  "word": ""
}, context)
```

#### Parameters
* word (string) **required** - Word to get audio for.
* useCanonical (string) - Use the canonical form of the word
* limit (integer) - Maximum number of results to return

### getDefinitions
Return definitions for a word


```js
wordnik.getDefinitions({
  "word": ""
}, context)
```

#### Parameters
* word (string) **required** - Word to return definitions for
* limit (integer) - Maximum number of results to return
* partOfSpeech (string) - CSV list of part-of-speech types
* includeRelated (string) - Return related words with definitions
* sourceDictionaries (array) - Source dictionary to return definitions from.  If 'all' is received, results are returned from all sources. If multiple values are received (e.g. 'century,wiktionary'), results are returned from the first specified dictionary that has definitions. If left blank, results are returned from the first dictionary that has definitions. By default, dictionaries are searched in this order: ahd, wiktionary, webster, century, wordnet
* useCanonical (string) - If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
* includeTags (string) - Return a closed set of XML tags in response

### getEtymologies
Fetches etymology data


```js
wordnik.getEtymologies({
  "word": ""
}, context)
```

#### Parameters
* word (string) **required** - Word to return
* useCanonical (string) - If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.

### getExamples
Returns examples for a word


```js
wordnik.getExamples({
  "word": ""
}, context)
```

#### Parameters
* word (string) **required** - Word to return examples for
* includeDuplicates (string) - Show duplicate examples from different sources
* useCanonical (string) - If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
* skip (integer) - Results to skip
* limit (integer) - Maximum number of results to return

### getWordFrequency
Returns word usage over time


```js
wordnik.getWordFrequency({
  "word": ""
}, context)
```

#### Parameters
* word (string) **required** - Word to return
* useCanonical (string) - If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
* startYear (integer) - Starting Year
* endYear (integer) - Ending Year

### getHyphenation
Returns syllable information for a word


```js
wordnik.getHyphenation({
  "word": ""
}, context)
```

#### Parameters
* word (string) **required** - Word to get syllables for
* useCanonical (string) - If true will try to return a correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
* sourceDictionary (string) - Get from a single dictionary. Valid options: ahd, century, wiktionary, webster, and wordnet.
* limit (integer) - Maximum number of results to return

### getPhrases
Fetches bi-gram phrases for a word


```js
wordnik.getPhrases({
  "word": ""
}, context)
```

#### Parameters
* word (string) **required** - Word to fetch phrases for
* limit (integer) - Maximum number of results to return
* wlmi (integer) - Minimum WLMI for the phrase
* useCanonical (string) - If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.

### getTextPronunciations
Returns text pronunciations for a given word


```js
wordnik.getTextPronunciations({
  "word": ""
}, context)
```

#### Parameters
* word (string) **required** - Word to get pronunciations for
* useCanonical (string) - If true will try to return a correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
* sourceDictionary (string) - Get from a single dictionary
* typeFormat (string) - Text pronunciation type
* limit (integer) - Maximum number of results to return

### getRelatedWords
Given a word as a string, returns relationships from the Word Graph


```js
wordnik.getRelatedWords({
  "word": ""
}, context)
```

#### Parameters
* word (string) **required** - Word to fetch relationships for
* useCanonical (string) - If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
* relationshipTypes (string) - Limits the total results per type of relationship type
* limitPerRelationshipType (integer) - Restrict to the supplied relationship types

### getTopExample
Returns a top example for a word


```js
wordnik.getTopExample({
  "word": ""
}, context)
```

#### Parameters
* word (string) **required** - Word to fetch examples for
* useCanonical (string) - If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.

### deleteWordList
Deletes an existing WordList


```js
wordnik.deleteWordList({
  "permalink": "",
  "auth_token": ""
}, context)
```

#### Parameters
* permalink (string) **required** - ID of WordList to delete
* auth_token (string) **required** - The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)

### getWordListByPermalink
Fetches a WordList by ID


```js
wordnik.getWordListByPermalink({
  "permalink": "",
  "auth_token": ""
}, context)
```

#### Parameters
* permalink (string) **required** - permalink of WordList to fetch
* auth_token (string) **required** - The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)

### updateWordList
Updates an existing WordList


```js
wordnik.updateWordList({
  "permalink": "",
  "auth_token": ""
}, context)
```

#### Parameters
* permalink (string) **required** - permalink of WordList to update
* body (undefined)
* auth_token (string) **required** - The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)

### deleteWordsFromWordList
Removes words from a WordList


```js
wordnik.deleteWordsFromWordList({
  "permalink": "",
  "auth_token": ""
}, context)
```

#### Parameters
* permalink (string) **required** - permalink of WordList to use
* body (array)
* auth_token (string) **required** - The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)

### getWordListWords
Fetches words in a WordList


```js
wordnik.getWordListWords({
  "permalink": "",
  "auth_token": ""
}, context)
```

#### Parameters
* permalink (string) **required** - ID of WordList to use
* sortBy (string) - Field to sort by
* sortOrder (string) - Direction to sort
* skip (integer) - Results to skip
* limit (integer) - Maximum number of results to return
* auth_token (string) **required** - The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)

### addWordsToWordList
Adds words to a WordList


```js
wordnik.addWordsToWordList({
  "permalink": "",
  "auth_token": ""
}, context)
```

#### Parameters
* permalink (string) **required** - permalink of WordList to user
* body (array)
* auth_token (string) **required** - The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)

### createWordList
Creates a WordList.


```js
wordnik.createWordList({
  "auth_token": ""
}, context)
```

#### Parameters
* body (undefined)
* auth_token (string) **required** - The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)

### getRandomWord
Returns a single random WordObject


```js
wordnik.getRandomWord({}, context)
```


### getRandomWords
Returns an array of random WordObjects


```js
wordnik.getRandomWords({}, context)
```


### reverseDictionary
Reverse dictionary search


```js
wordnik.reverseDictionary({
  "query": ""
}, context)
```

#### Parameters
* query (string) **required** - Search term
* findSenseForWord (string) - Restricts words and finds closest sense
* includeSourceDictionaries (string) - Only include these comma-delimited source dictionaries
* excludeSourceDictionaries (string) - Exclude these comma-delimited source dictionaries
* includePartOfSpeech (string) - Only include these comma-delimited parts of speech
* excludePartOfSpeech (string) - Exclude these comma-delimited parts of speech
* minCorpusCount (integer) - Minimum corpus frequency for terms
* maxCorpusCount (integer) - Maximum corpus frequency for terms
* minLength (integer) - Minimum word length
* maxLength (integer) - Maximum word length
* expandTerms (string) - Expand terms
* includeTags (string) - Return a closed set of XML tags in response
* sortBy (string) - Attribute to sort by
* sortOrder (string) - Sort direction
* skip (string) - Results to skip
* limit (integer) - Maximum number of results to return

### searchWords
Searches words


```js
wordnik.searchWords({
  "query": ""
}, context)
```

#### Parameters
* query (string) **required** - Search query
* caseSensitive (string) - Search case sensitive
* includePartOfSpeech (string) - Only include these comma-delimited parts of speech
* excludePartOfSpeech (string) - Exclude these comma-delimited parts of speech
* minCorpusCount (integer) - Minimum corpus frequency for terms
* maxCorpusCount (integer) - Maximum corpus frequency for terms
* minDictionaryCount (integer) - Minimum number of dictionary entries for words returned
* maxDictionaryCount (integer) - Maximum dictionary definition count
* minLength (integer) - Minimum word length
* maxLength (integer) - Maximum word length
* skip (integer) - Results to skip
* limit (integer) - Maximum number of results to return

### getWordOfTheDay
Returns a specific WordOfTheDay


```js
wordnik.getWordOfTheDay({}, context)
```


