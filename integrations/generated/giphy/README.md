# @datafire/giphy

Client library for Giphy

## Installation and Usage
```bash
npm install --save datafire @datafire/giphy
```

```js
let datafire = require('datafire');
let giphy = require('@datafire/giphy').create({
  api_key: "",
});

giphy.trendingStickers({}).then(data => {
  console.log(data);
})
```

## Description
Giphy API

## Actions
### getGifsById
A multiget version of the get GIF by ID endpoint.



```js
giphy.getGifsById({}, context)
```

#### Parameters
* ids (string) - Filters results by specified GIF IDs, separated by commas.

### randomGif
Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.



```js
giphy.randomGif({}, context)
```

#### Parameters
* tag (string) - Filters results by specified tag.
* rating (string) - Filters results by specified rating.

### searchGifs
Search all GIPHY GIFs for a word or phrase. Punctuation will be stripped and ignored.  Use a plus or url encode for phrases. Example paul+rudd, ryan+gosling or american+psycho.



```js
giphy.searchGifs({
  "q": ""
}, context)
```

#### Parameters
* q (string) **required** - Search query term or prhase.
* limit (integer) - The maximum number of records to return.
* offset (integer) - An optional results offset.
* rating (string) - Filters results by specified rating.
* lang (string) - Specify default language for regional content; use a 2-letter ISO 639-1 language code.

### translateGif
The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIF



```js
giphy.translateGif({
  "s": ""
}, context)
```

#### Parameters
* s (string) **required** - Search term.

### trendingGifs
Fetch GIFs currently trending online. Hand curated by the GIPHY editorial team.  The data returned mirrors the GIFs showcased on the GIPHY homepage. Returns 25 results by default.



```js
giphy.trendingGifs({}, context)
```

#### Parameters
* limit (integer) - The maximum number of records to return.
* offset (integer) - An optional results offset.
* rating (string) - Filters results by specified rating.

### getGifById
Returns a GIF given that GIF's unique ID



```js
giphy.getGifById({
  "gifId": 0
}, context)
```

#### Parameters
* gifId (integer) **required** - Filters results by specified GIF ID.

### randomSticker
Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.



```js
giphy.randomSticker({}, context)
```

#### Parameters
* tag (string) - Filters results by specified tag.
* rating (string) - Filters results by specified rating.

### searchStickers
Replicates the functionality and requirements of the classic GIPHY search, but returns animated stickers rather than GIFs.



```js
giphy.searchStickers({
  "q": ""
}, context)
```

#### Parameters
* q (string) **required** - Search query term or prhase.
* limit (integer) - The maximum number of records to return.
* offset (integer) - An optional results offset.
* rating (string) - Filters results by specified rating.
* lang (string) - Specify default language for regional content; use a 2-letter ISO 639-1 language code.

### translateSticker
The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIFs.



```js
giphy.translateSticker({
  "s": ""
}, context)
```

#### Parameters
* s (string) **required** - Search term.

### trendingStickers
Fetch Stickers currently trending online. Hand curated by the GIPHY editorial team. Returns 25 results by default.



```js
giphy.trendingStickers({}, context)
```

#### Parameters
* limit (integer) - The maximum number of records to return.
* offset (integer) - An optional results offset.
* rating (string) - Filters results by specified rating.

