# @datafire/freesound

Client library for Freesound

## Installation and Usage
```bash
npm install --save @datafire/freesound
```
```js
let freesound = require('@datafire/freesound').create();

.then(data => {
  console.log(data);
});
```

## Description

With the Freesound APIv2 you can browse, search, and retrieve information about Freesound users, packs, and the sounds themselves of course. You can find similar sounds to a given target (based on content analysis) and retrieve automatically extracted features from audio files, as well as perform advanced queries combining content analysis features and other metadata (tags, etc...). With the Freesound APIv2, you can also upload, comment, rate and bookmark sounds!

## Actions

### searchText
This resource allows searching sounds in Freesound by matching their tags and other kinds of metadata.


```js
freesound.searchText({}, context)
```

#### Input
* input `object`
  * query `string`: The query! The query is the main parameter used to define a query. You can type several terms separated by spaces or phrases wrapped inside quote ‘”’ characters. For every term, you can also use ‘+’ and ‘-‘ modifier characters to indicate that a term is “mandatory” or “prohibited” (by default, terms are considered to be “mandatory”). For example, in a query such as query=term_a -term_b, sounds including term_b will not match the search criteria. The query does a weighted search over some sound properties including sound tags, the sound name, its description, pack name and the sound id. Therefore, searching for query=123 will find you sounds with id 1234, sounds that have 1234 in the description, in the tags, etc. You’ll find some examples below. Using an empty query (query= or query="") will return all Freeosund sounds.
  * filter `string`: Allows filtering query results. See below for more information.
  * sort `string` (values: score, duration_desc, duration_asc, created_desc, created_asc, downloads_desc, downloads_asc, rating_desc, rating_asc): Indicates how query results should be sorted. See below for a list of the sorting options. By default `sort=score`. <p> <table>
  * group_by_pack `integer`: This parameter represents a boolean option to indicate whether to collapse results belonging to sounds of the same pack into single entries in the results list. If `group_by_pack=1` and search results contain more than one sound that belongs to the same pack, only one sound for each distinct pack is returned (sounds with no packs are returned as well). However, the returned sound will feature two extra properties to access these other sounds omitted from the results list: `n_from_same_pack`: indicates how many other results belong to the same pack (and have not been returned) `more_from_same_pack`: uri pointing to the list of omitted sound results of the same pack (also including the result which has already been returned). See examples below. By default `group_by_pack=0`.
  * page `integer`: Query results are paginated, this parameter indicates what page should be returned. By default `page=1`.
  * page_size `integer`: Indicates the number of sounds per page to include in the result. By default `page_size=15`, and the maximum is `page_size=150`. Not that with bigger `page_size`, more data will need to be transferred.

#### Output
* output `array`
  * items [Sound](#sound)

### getSoundById
This resource allows the retrieval of detailed information about a sound.


```js
freesound.getSoundById({
  "soundId": 0
}, context)
```

#### Input
* input `object`
  * soundId **required** `integer`: ID of the sound that needs to be fetched

#### Output
* output [Sound](#sound)



## Definitions

### Sound
* Sound `object`
  * id `integer`: The sound’s unique identifier.
  * name `string`: The name user gave to the sound.
  * url `string`: The URI for this sound on the Freesound website.


