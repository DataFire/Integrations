# @datafire/wordnik
Wordnik is the world's biggest online English dictionary, by number of words


## Operation: getApiTokenStatus
Returns usage statistics for the API account.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_key": {
      "type": "string",
      "description": "Wordnik authentication token"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApiTokenStatus"
}
```
## Operation: authenticate
Authenticates a User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "A confirmed Wordnik username"
    },
    "password": {
      "type": "string",
      "description": "The user's password"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "password"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthenticationToken"
}
```
## Operation: authenticatePost
Authenticates a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "A confirmed Wordnik username"
    },
    "body": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthenticationToken"
}
```
## Operation: getLoggedInUser
Requires a valid auth_token to be set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "auth_token": {
      "type": "string",
      "description": "The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)"
    }
  },
  "additionalProperties": false,
  "required": [
    "auth_token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: getWordListsForLoggedInUser
Fetches WordList objects for the logged-in user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "auth_token": {
      "type": "string",
      "description": "auth_token of logged-in user"
    },
    "skip": {
      "type": "integer",
      "format": "int32",
      "description": "Results to skip"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "auth_token"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/WordList"
  },
  "type": "array"
}
```
## Operation: getWord
Given a word as a string, returns the WordObject that represents it

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "word": {
      "type": "string",
      "description": "String value of WordObject to return"
    },
    "useCanonical": {
      "type": "string",
      "description": "If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested."
    },
    "includeSuggestions": {
      "type": "string",
      "description": "Return suggestions (for correct spelling, case variants, etc.)"
    }
  },
  "additionalProperties": false,
  "required": [
    "word"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WordObject"
}
```
## Operation: getAudio
The metadata includes a time-expiring fileUrl which allows reading the audio file directly from the API.  Currently only audio pronunciations from the American Heritage Dictionary in mp3 format are supported.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "word": {
      "type": "string",
      "description": "Word to get audio for."
    },
    "useCanonical": {
      "type": "string",
      "description": "Use the canonical form of the word"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "word"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AudioFile"
  },
  "type": "array"
}
```
## Operation: getDefinitions
Return definitions for a word

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "word": {
      "type": "string",
      "description": "Word to return definitions for"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum number of results to return"
    },
    "partOfSpeech": {
      "type": "string",
      "description": "CSV list of part-of-speech types"
    },
    "includeRelated": {
      "type": "string",
      "description": "Return related words with definitions"
    },
    "sourceDictionaries": {
      "type": "array",
      "description": "Source dictionary to return definitions from.  If 'all' is received, results are returned from all sources. If multiple values are received (e.g. 'century,wiktionary'), results are returned from the first specified dictionary that has definitions. If left blank, results are returned from the first dictionary that has definitions. By default, dictionaries are searched in this order: ahd, wiktionary, webster, century, wordnet"
    },
    "useCanonical": {
      "type": "string",
      "description": "If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested."
    },
    "includeTags": {
      "type": "string",
      "description": "Return a closed set of XML tags in response"
    }
  },
  "additionalProperties": false,
  "required": [
    "word"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Definition"
  },
  "type": "array"
}
```
## Operation: getEtymologies
Fetches etymology data

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "word": {
      "type": "string",
      "description": "Word to return"
    },
    "useCanonical": {
      "type": "string",
      "description": "If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested."
    }
  },
  "additionalProperties": false,
  "required": [
    "word"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "type": "string"
  },
  "type": "array"
}
```
## Operation: getExamples
Returns examples for a word

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "word": {
      "type": "string",
      "description": "Word to return examples for"
    },
    "includeDuplicates": {
      "type": "string",
      "description": "Show duplicate examples from different sources"
    },
    "useCanonical": {
      "type": "string",
      "description": "If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested."
    },
    "skip": {
      "type": "integer",
      "format": "int32",
      "description": "Results to skip"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "word"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExampleSearchResults"
}
```
## Operation: getWordFrequency
Returns word usage over time

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "word": {
      "type": "string",
      "description": "Word to return"
    },
    "useCanonical": {
      "type": "string",
      "description": "If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested."
    },
    "startYear": {
      "type": "integer",
      "format": "int32",
      "description": "Starting Year"
    },
    "endYear": {
      "type": "integer",
      "format": "int32",
      "description": "Ending Year"
    }
  },
  "additionalProperties": false,
  "required": [
    "word"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FrequencySummary"
}
```
## Operation: getHyphenation
Returns syllable information for a word

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "word": {
      "type": "string",
      "description": "Word to get syllables for"
    },
    "useCanonical": {
      "type": "string",
      "description": "If true will try to return a correct word root ('cats' -> 'cat'). If false returns exactly what was requested."
    },
    "sourceDictionary": {
      "type": "string",
      "description": "Get from a single dictionary. Valid options: ahd, century, wiktionary, webster, and wordnet."
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "word"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Syllable"
  },
  "type": "array"
}
```
## Operation: getPhrases
Fetches bi-gram phrases for a word

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "word": {
      "type": "string",
      "description": "Word to fetch phrases for"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum number of results to return"
    },
    "wlmi": {
      "type": "integer",
      "format": "int32",
      "description": "Minimum WLMI for the phrase"
    },
    "useCanonical": {
      "type": "string",
      "description": "If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested."
    }
  },
  "additionalProperties": false,
  "required": [
    "word"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Bigram"
  },
  "type": "array"
}
```
## Operation: getTextPronunciations
Returns text pronunciations for a given word

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "word": {
      "type": "string",
      "description": "Word to get pronunciations for"
    },
    "useCanonical": {
      "type": "string",
      "description": "If true will try to return a correct word root ('cats' -> 'cat'). If false returns exactly what was requested."
    },
    "sourceDictionary": {
      "type": "string",
      "description": "Get from a single dictionary"
    },
    "typeFormat": {
      "type": "string",
      "description": "Text pronunciation type"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "word"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/TextPron"
  },
  "type": "array"
}
```
## Operation: getRelatedWords
Given a word as a string, returns relationships from the Word Graph

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "word": {
      "type": "string",
      "description": "Word to fetch relationships for"
    },
    "useCanonical": {
      "type": "string",
      "description": "If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested."
    },
    "relationshipTypes": {
      "type": "string",
      "description": "Limits the total results per type of relationship type"
    },
    "limitPerRelationshipType": {
      "type": "integer",
      "format": "int32",
      "description": "Restrict to the supplied relationship types"
    }
  },
  "additionalProperties": false,
  "required": [
    "word"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Related"
  },
  "type": "array"
}
```
## Operation: getTopExample
Returns a top example for a word

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "word": {
      "type": "string",
      "description": "Word to fetch examples for"
    },
    "useCanonical": {
      "type": "string",
      "description": "If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested."
    }
  },
  "additionalProperties": false,
  "required": [
    "word"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Example"
}
```
## Operation: deleteWordList
Deletes an existing WordList

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "permalink": {
      "type": "string",
      "description": "ID of WordList to delete"
    },
    "auth_token": {
      "type": "string",
      "description": "The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)"
    }
  },
  "additionalProperties": false,
  "required": [
    "permalink",
    "auth_token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getWordListByPermalink
Fetches a WordList by ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "permalink": {
      "type": "string",
      "description": "permalink of WordList to fetch"
    },
    "auth_token": {
      "type": "string",
      "description": "The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)"
    }
  },
  "additionalProperties": false,
  "required": [
    "permalink",
    "auth_token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WordList"
}
```
## Operation: updateWordList
Updates an existing WordList

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "permalink": {
      "type": "string",
      "description": "permalink of WordList to update"
    },
    "body": {
      "$ref": "#/definitions/WordList"
    },
    "auth_token": {
      "type": "string",
      "description": "The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)"
    }
  },
  "additionalProperties": false,
  "required": [
    "permalink",
    "auth_token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteWordsFromWordList
Removes words from a WordList

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "permalink": {
      "type": "string",
      "description": "permalink of WordList to use"
    },
    "body": {
      "items": {
        "$ref": "#/definitions/StringValue"
      },
      "type": "array"
    },
    "auth_token": {
      "type": "string",
      "description": "The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)"
    }
  },
  "additionalProperties": false,
  "required": [
    "permalink",
    "auth_token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getWordListWords
Fetches words in a WordList

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "permalink": {
      "type": "string",
      "description": "ID of WordList to use"
    },
    "sortBy": {
      "type": "string",
      "description": "Field to sort by"
    },
    "sortOrder": {
      "type": "string",
      "description": "Direction to sort"
    },
    "skip": {
      "type": "integer",
      "format": "int32",
      "description": "Results to skip"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum number of results to return"
    },
    "auth_token": {
      "type": "string",
      "description": "The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)"
    }
  },
  "additionalProperties": false,
  "required": [
    "permalink",
    "auth_token"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/WordListWord"
  },
  "type": "array"
}
```
## Operation: addWordsToWordList
Adds words to a WordList

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "permalink": {
      "type": "string",
      "description": "permalink of WordList to user"
    },
    "body": {
      "items": {
        "$ref": "#/definitions/StringValue"
      },
      "type": "array"
    },
    "auth_token": {
      "type": "string",
      "description": "The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)"
    }
  },
  "additionalProperties": false,
  "required": [
    "permalink",
    "auth_token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: createWordList
Creates a WordList.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/WordList"
    },
    "auth_token": {
      "type": "string",
      "description": "The auth token of the logged-in user, obtained by calling /account.{format}/authenticate/{username} (described above)"
    }
  },
  "additionalProperties": false,
  "required": [
    "auth_token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WordList"
}
```
## Operation: getRandomWord
Returns a single random WordObject

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "hasDictionaryDef": {
      "type": "string",
      "description": "Only return words with dictionary definitions"
    },
    "includePartOfSpeech": {
      "type": "string",
      "description": "CSV part-of-speech values to include"
    },
    "excludePartOfSpeech": {
      "type": "string",
      "description": "CSV part-of-speech values to exclude"
    },
    "minCorpusCount": {
      "type": "integer",
      "format": "int32",
      "description": "Minimum corpus frequency for terms"
    },
    "maxCorpusCount": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum corpus frequency for terms"
    },
    "minDictionaryCount": {
      "type": "integer",
      "format": "int32",
      "description": "Minimum dictionary count"
    },
    "maxDictionaryCount": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum dictionary count"
    },
    "minLength": {
      "type": "integer",
      "format": "int32",
      "description": "Minimum word length"
    },
    "maxLength": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum word length"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WordObject"
}
```
## Operation: getRandomWords
Returns an array of random WordObjects

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "hasDictionaryDef": {
      "type": "string",
      "description": "Only return words with dictionary definitions"
    },
    "includePartOfSpeech": {
      "type": "string",
      "description": "CSV part-of-speech values to include"
    },
    "excludePartOfSpeech": {
      "type": "string",
      "description": "CSV part-of-speech values to exclude"
    },
    "minCorpusCount": {
      "type": "integer",
      "format": "int32",
      "description": "Minimum corpus frequency for terms"
    },
    "maxCorpusCount": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum corpus frequency for terms"
    },
    "minDictionaryCount": {
      "type": "integer",
      "format": "int32",
      "description": "Minimum dictionary count"
    },
    "maxDictionaryCount": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum dictionary count"
    },
    "minLength": {
      "type": "integer",
      "format": "int32",
      "description": "Minimum word length"
    },
    "maxLength": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum word length"
    },
    "sortBy": {
      "type": "string",
      "description": "Attribute to sort by"
    },
    "sortOrder": {
      "type": "string",
      "description": "Sort direction"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum number of results to return"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/WordObject"
  },
  "type": "array"
}
```
## Operation: reverseDictionary
Reverse dictionary search

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "Search term"
    },
    "findSenseForWord": {
      "type": "string",
      "description": "Restricts words and finds closest sense"
    },
    "includeSourceDictionaries": {
      "type": "string",
      "description": "Only include these comma-delimited source dictionaries"
    },
    "excludeSourceDictionaries": {
      "type": "string",
      "description": "Exclude these comma-delimited source dictionaries"
    },
    "includePartOfSpeech": {
      "type": "string",
      "description": "Only include these comma-delimited parts of speech"
    },
    "excludePartOfSpeech": {
      "type": "string",
      "description": "Exclude these comma-delimited parts of speech"
    },
    "minCorpusCount": {
      "type": "integer",
      "format": "int32",
      "description": "Minimum corpus frequency for terms"
    },
    "maxCorpusCount": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum corpus frequency for terms"
    },
    "minLength": {
      "type": "integer",
      "format": "int32",
      "description": "Minimum word length"
    },
    "maxLength": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum word length"
    },
    "expandTerms": {
      "type": "string",
      "description": "Expand terms"
    },
    "includeTags": {
      "type": "string",
      "description": "Return a closed set of XML tags in response"
    },
    "sortBy": {
      "type": "string",
      "description": "Attribute to sort by"
    },
    "sortOrder": {
      "type": "string",
      "description": "Sort direction"
    },
    "skip": {
      "type": "string",
      "description": "Results to skip"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "query"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DefinitionSearchResults"
}
```
## Operation: searchWords
Searches words

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "Search query"
    },
    "caseSensitive": {
      "type": "string",
      "description": "Search case sensitive"
    },
    "includePartOfSpeech": {
      "type": "string",
      "description": "Only include these comma-delimited parts of speech"
    },
    "excludePartOfSpeech": {
      "type": "string",
      "description": "Exclude these comma-delimited parts of speech"
    },
    "minCorpusCount": {
      "type": "integer",
      "format": "int32",
      "description": "Minimum corpus frequency for terms"
    },
    "maxCorpusCount": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum corpus frequency for terms"
    },
    "minDictionaryCount": {
      "type": "integer",
      "format": "int32",
      "description": "Minimum number of dictionary entries for words returned"
    },
    "maxDictionaryCount": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum dictionary definition count"
    },
    "minLength": {
      "type": "integer",
      "format": "int32",
      "description": "Minimum word length"
    },
    "maxLength": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum word length"
    },
    "skip": {
      "type": "integer",
      "format": "int32",
      "description": "Results to skip"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "query"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WordSearchResults"
}
```
## Operation: getWordOfTheDay
Returns a specific WordOfTheDay

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "date": {
      "type": "string",
      "description": "Fetches by date in yyyy-MM-dd"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WordOfTheDay"
}
```
