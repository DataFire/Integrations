# @datafire/giphy

Client library for Giphy

## Installation and Usage
```bash
npm install --save @datafire/giphy
```
```js
let giphy = require('@datafire/giphy').create({
  api_key: ""
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

#### Input
* input `object`
  * ids `string`: Filters results by specified GIF IDs, separated by commas.

#### Output
* output `object`
  * data `array`
    * items [Gif](#gif)
  * meta [Meta](#meta)
  * pagination [Pagination](#pagination)

### randomGif
Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.



```js
giphy.randomGif({}, context)
```

#### Input
* input `object`
  * tag `string`: Filters results by specified tag.
  * rating `string`: Filters results by specified rating.

#### Output
* output `object`
  * data [Gif](#gif)
  * meta [Meta](#meta)

### searchGifs
Search all GIPHY GIFs for a word or phrase. Punctuation will be stripped and ignored.  Use a plus or url encode for phrases. Example paul+rudd, ryan+gosling or american+psycho.



```js
giphy.searchGifs({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: Search query term or prhase.
  * limit `integer`: The maximum number of records to return.
  * offset `integer`: An optional results offset.
  * rating `string`: Filters results by specified rating.
  * lang `string`: Specify default language for regional content; use a 2-letter ISO 639-1 language code.

#### Output
* output `object`
  * data `array`
    * items [Gif](#gif)
  * meta [Meta](#meta)
  * pagination [Pagination](#pagination)

### translateGif
The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIF



```js
giphy.translateGif({
  "s": ""
}, context)
```

#### Input
* input `object`
  * s **required** `string`: Search term.

#### Output
* output `object`
  * data [Gif](#gif)
  * meta [Meta](#meta)

### trendingGifs
Fetch GIFs currently trending online. Hand curated by the GIPHY editorial team.  The data returned mirrors the GIFs showcased on the GIPHY homepage. Returns 25 results by default.



```js
giphy.trendingGifs({}, context)
```

#### Input
* input `object`
  * limit `integer`: The maximum number of records to return.
  * offset `integer`: An optional results offset.
  * rating `string`: Filters results by specified rating.

#### Output
* output `object`
  * data `array`
    * items [Gif](#gif)
  * meta [Meta](#meta)
  * pagination [Pagination](#pagination)

### getGifById
Returns a GIF given that GIF's unique ID



```js
giphy.getGifById({
  "gifId": 0
}, context)
```

#### Input
* input `object`
  * gifId **required** `integer`: Filters results by specified GIF ID.

#### Output
* output `object`
  * data [Gif](#gif)
  * meta [Meta](#meta)

### randomSticker
Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.



```js
giphy.randomSticker({}, context)
```

#### Input
* input `object`
  * tag `string`: Filters results by specified tag.
  * rating `string`: Filters results by specified rating.

#### Output
* output `object`
  * data [Gif](#gif)
  * meta [Meta](#meta)

### searchStickers
Replicates the functionality and requirements of the classic GIPHY search, but returns animated stickers rather than GIFs.



```js
giphy.searchStickers({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: Search query term or prhase.
  * limit `integer`: The maximum number of records to return.
  * offset `integer`: An optional results offset.
  * rating `string`: Filters results by specified rating.
  * lang `string`: Specify default language for regional content; use a 2-letter ISO 639-1 language code.

#### Output
* output `object`
  * data `array`
    * items [Gif](#gif)
  * meta [Meta](#meta)
  * pagination [Pagination](#pagination)

### translateSticker
The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIFs.



```js
giphy.translateSticker({
  "s": ""
}, context)
```

#### Input
* input `object`
  * s **required** `string`: Search term.

#### Output
* output `object`
  * data [Gif](#gif)
  * meta [Meta](#meta)

### trendingStickers
Fetch Stickers currently trending online. Hand curated by the GIPHY editorial team. Returns 25 results by default.



```js
giphy.trendingStickers({}, context)
```

#### Input
* input `object`
  * limit `integer`: The maximum number of records to return.
  * offset `integer`: An optional results offset.
  * rating `string`: Filters results by specified rating.

#### Output
* output `object`
  * data `array`
    * items [Gif](#gif)
  * meta [Meta](#meta)
  * pagination [Pagination](#pagination)



## Definitions

### Gif
* Gif `object`
  * bitly_url `string`: The unique bit.ly URL for this GIF
  * content_url `string`: Currently unused
  * create_datetime `string`: The date this GIF was added to the GIPHY database.
  * embded_url `string`: A URL used for embedding this GIF
  * featured_tags `array`: An array of featured tags for this GIF (Note: Not available when using the Public Beta Key)
    * items `string`: Tag name
  * id `string`: This GIF's unique ID
  * images `object`: An object containing data for various available formats and sizes of this GIF.
  * import_datetime `string`: The creation or upload date from this GIF's source.
  * rating `string`: The MPAA-style rating for this content. Examples include Y, G, PG, PG-13 and R
  * slug `string`: The unique slug used in this GIF's URL
  * source `string`: The page on which this GIF was found
  * source_post_url `string`: The URL of the webpage on which this GIF was found.
  * source_tld `string`: The top level domain of the source URL.
  * tags `array`: An array of tags for this GIF (Note: Not available when using the Public Beta Key)
    * items `string`: Tag name
  * trending_datetime `string`: The date on which this gif was marked trending, if applicable.
  * type `string` (values: gif): Type of the gif. By default, this is almost always gif
  * update_datetime `string`: The date on which this GIF was last updated.
  * url `string`: The unique URL for this GIF
  * user [User](#user)
  * username `string`: The username this GIF is attached to, if applicable

### Image
* Image `object`
  * frames `string`: The number of frames in this GIF.
  * height `string`: The height of this GIF in pixels.
  * mp4 `string`: The URL for this GIF in .MP4 format.
  * mp4_size `string`: The size in bytes of the .MP4 file corresponding to this GIF.
  * size `string`: The size of this GIF in bytes.
  * url `string`: The publicly-accessible direct URL for this GIF.
  * webp `string`: The URL for this GIF in .webp format.
  * webp_size `string`: The size in bytes of the .webp file corresponding to this GIF.
  * width `string`: The width of this GIF in pixels.

### Meta
* Meta `object`: The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
  * msg `string`: HTTP Response Message
  * response_id `string`: A unique ID paired with this response from the API.
  * status `integer`: HTTP Response Code

### Pagination
* Pagination `object`: The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
  * count `integer`: Total number of items returned.
  * offset `integer`: Position in pagination.
  * total_count `integer`: Total number of items available.

### User
* User `object`: The User Object contains information about the user associated with a GIF and URLs to assets such as that user's avatar image, profile, and more.
  * avatar_url `string`: The URL for this user's avatar image.
  * banner_url `string`: The URL for the banner image that appears atop this user's profile page.
  * display_name `string`: The display name associated with this user (contains formatting the base username might not).
  * profile_url `string`: The URL for this user's profile.
  * twitter `string`: The Twitter username associated with this user, if applicable.
  * username `string`: The username associated with this user.


