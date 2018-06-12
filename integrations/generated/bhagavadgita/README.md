# @datafire/bhagavadgita

Client library for Bhagavad Gita

## Installation and Usage
```bash
npm install --save @datafire/bhagavadgita
```
```js
let bhagavadgita = require('@datafire/bhagavadgita').create();

bhagavadgita.api.v1.chapters.get({
  "access_token": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### api.v1.chapters.get
Get a list of all the 18 Chapters of the Bhagavad Gita.


```js
bhagavadgita.api.v1.chapters.get({
  "access_token": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Your app's access token.
  * language `string` (values: hi): Language to query. Leave blank for english.

#### Output
* output [ChapterSchema](#chapterschema)

### api.v1.chapters.chapter_number.get
Get information about a specific chapter from the Bhagavad Gita.


```js
bhagavadgita.api.v1.chapters.chapter_number.get({
  "access_token": "",
  "chapter_number": 0
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Your app's access token.
  * chapter_number **required** `integer` (values: 1, 2, 3): Which Chapter Number to filter?
  * language `string` (values: hi): Language to query. Leave blank for english.

#### Output
* output [ChapterSchema](#chapterschema)

### api.v1.chapters.chapter_number.verses.get
Get a list of all Verses from a particular Chapter.


```js
bhagavadgita.api.v1.chapters.chapter_number.verses.get({
  "access_token": "",
  "chapter_number": 0
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Your app's access token.
  * chapter_number **required** `integer` (values: 1, 2, 3): Which Chapter Number to filter?
  * language `string` (values: hi): Language to query. Leave blank for english.

#### Output
* output [VerseSchema](#verseschema)

### api.v1.chapters.chapter_number.verses.verse_number.get
Get a specific verse from a specific chapter.


```js
bhagavadgita.api.v1.chapters.chapter_number.verses.verse_number.get({
  "access_token": "",
  "chapter_number": 0,
  "verse_number": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Your app's access token.
  * chapter_number **required** `integer` (values: 1, 2, 3): Which Chapter Number to filter?
  * verse_number **required** `string` (values: 1, 2, 3): Which Verse Number to filter?
  * language `string` (values: hi): Language to query. Leave blank for english.

#### Output
* output [VerseSchema](#verseschema)

### api.v1.verses.get
Get a list of all Verses.


```js
bhagavadgita.api.v1.verses.get({
  "access_token": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Your app's access token.
  * language `string` (values: hi): Language to query. Leave blank for english.

#### Output
* output [VerseSchema](#verseschema)

### auth.oauth.token.post
Send client credentials and get an access token.


```js
bhagavadgita.auth.oauth.token.post({
  "client_id": "",
  "client_secret": "",
  "grant_type": "",
  "scope": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`: Your app's client_id. Get from API dashboard.
  * client_secret **required** `string`: Your app's client_secret. Get from API dashboard.
  * grant_type **required** `string`: Grant Type.
  * scope **required** `string`: The resources that you would like to access.

#### Output
*Output schema unknown*



## Definitions

### ChapterSchema
* ChapterSchema `object`
  * chapter_number `integer`
  * chapter_summary `string`
  * name `string`
  * name_meaning `string`
  * name_translation `string`
  * name_transliterated `string`
  * verses_count `integer`

### VerseSchema
* VerseSchema `object`
  * meaning `string`
  * meaning_large `string`
  * text `string`
  * transliteration `string`
  * verse_number `string`
  * word_meanings `string`


