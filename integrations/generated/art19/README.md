# @datafire/art19

Client library for ART19 Content

## Installation and Usage
```bash
npm install --save @datafire/art19
```
```js
let art19 = require('@datafire/art19').create({
  api_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The ART19 Content API conforms to the JSON-API specification. Details and examples can be found at http://jsonapi.org. <br/><br/>API requests <b>MUST</b> use the HTTP Accept header:<br/><code>Accept: application/vnd.api+json</code><br/><br/>API requests <b>MUST</b> be authenticated using the HTTP Authorization header: <br/><code>Authorization: Token token="your-token", credential="your-credential"</code>

## Actions

### classification_inclusions.get
Fetch resource collection


```js
art19.classification_inclusions.get({}, context)
```

#### Input
* input `object`
  * ids[] `string`: Filter by ID's
  * page[number] `integer`: Filter by page number
  * page[size] `integer`: Change page size
  * sort `string`: Sort by created_at

#### Output
* output [ClassificationInclusionDocument](#classificationinclusiondocument)

### classification_inclusions.id.get
Fetch resource


```js
art19.classification_inclusions.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: UUID

#### Output
* output [ClassificationInclusion](#classificationinclusion)

### classifications.get
Fetch resource collection


```js
art19.classifications.get({}, context)
```

#### Input
* input `object`
  * ids[] `string`: Filter by ID's
  * type `string`: Filter by type
  * q `string`: Filter by value
  * page[number] `integer`: Filter by page number
  * page[size] `integer`: Change page size
  * sort `string`: Sort by created_at, value, updated_at

#### Output
* output [ClassificationDocument](#classificationdocument)

### classifications.id.get
Fetch resource


```js
art19.classifications.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: UUID

#### Output
* output [Classification](#classification)

### credits.get
Fetch resource collection


```js
art19.credits.get({}, context)
```

#### Input
* input `object`
  * ids[] `string`: Filter by ID's
  * creditable_id `string`: Filter by creditable_id
  * creditable_type `string`: Filter by creditable_type
  * page[number] `integer`: Filter by page number
  * page[size] `integer`: Change page size
  * sort `string`: Sort by created_at, position, updated_at

#### Output
* output [CreditDocument](#creditdocument)

### credits.id.get
Fetch resource


```js
art19.credits.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: UUID

#### Output
* output [Credit](#credit)

### episodes.get
Fetch resource collection


```js
art19.episodes.get({}, context)
```

#### Input
* input `object`
  * ids[] `string`: Filter by ID's
  * page[number] `integer`: Filter by page number
  * page[size] `integer`: Change page size
  * series_id `string`: Filter by Series
  * season_id `string`: Filter by Season
  * q `string`: Filter by title
  * year `string`: Filter by released_at year
  * month `string`: Filter by released_at month
  * rss `boolean`: Filter by RSS episodes only
  * sort `string`: Sort by created_at, released_at, released_or_created_at, sort_title, title, updated_at

#### Output
* output [EpisodesDocument](#episodesdocument)

### episodes.id.get
Fetch resource


```js
art19.episodes.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: UUID

#### Output
* output [Series](#series)

### episodes.id.next_sibling.get
Fetch next resource


```js
art19.episodes.id.next_sibling.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: UUID
  * rss `boolean`: Filter by RSS episodes only

#### Output
* output [Series](#series)

### episodes.id.previous_sibling.get
Fetch previous resource


```js
art19.episodes.id.previous_sibling.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: UUID
  * rss `boolean`: Filter by RSS episodes only

#### Output
* output [Series](#series)

### images.get
Fetch resource collection


```js
art19.images.get({
  "ids[]": ""
}, context)
```

#### Input
* input `object`
  * ids[] **required** `string`: Filter by ID's
  * page[number] `integer`: Filter by page number
  * page[size] `integer`: Change page size
  * sort `string`: Sort by created_at

#### Output
* output [ImageDocument](#imagedocument)

### images.id.get
Fetch resource


```js
art19.images.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: UUID

#### Output
* output [Image](#image)

### media_assets.get
Fetch resource collection


```js
art19.media_assets.get({
  "ids[]": ""
}, context)
```

#### Input
* input `object`
  * ids[] **required** `string`: Filter by ID's
  * page[number] `integer`: Filter by page number
  * page[size] `integer`: Change page size
  * sort `string`: Sort by created_at

#### Output
* output [MediaAssetDocument](#mediaassetdocument)

### media_assets.id.get
Fetch resource


```js
art19.media_assets.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: UUID

#### Output
* output [MediaAsset](#mediaasset)

### networks.get
Fetch resource collection


```js
art19.networks.get({}, context)
```

#### Input
* input `object`
  * ids[] `string`: Filter by ID's
  * q `string`: Filter by name
  * page[number] `integer`: Filter by page number
  * page[size] `integer`: Change page size
  * sort `string`: Sort by created_at, name, updated_at

#### Output
* output [NetworkDocument](#networkdocument)

### networks.id.get
Fetch resource


```js
art19.networks.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: UUID

#### Output
* output [Network](#network)

### people.get
Fetch resource collection


```js
art19.people.get({}, context)
```

#### Input
* input `object`
  * ids[] `string`: Filter by ID's
  * q `string`: Filter by first_name and last_name
  * page[number] `integer`: Filter by page number
  * exclude_ids[] `integer`: Filter by excluding ids
  * page[size] `integer`: Change page size
  * sort `string`: Sort by created_at, first_name, last_name, updated_at

#### Output
* output [PersonDocument](#persondocument)

### people.id.get
Fetch resource


```js
art19.people.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: UUID

#### Output
* output [Person](#person)

### seasons.get
Fetch resource collection


```js
art19.seasons.get({}, context)
```

#### Input
* input `object`
  * ids[] `string`: Filter by ID's
  * series_id `string`: Filter by Series
  * page[number] `integer`: Filter by page number
  * page[size] `integer`: Change page size
  * sort `string`: Sort by created_at, sort_title, title, updated_at

#### Output
* output [SeasonDocument](#seasondocument)

### seasons.id.get
Fetch resource


```js
art19.seasons.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: UUID

#### Output
* output [Season](#season)

### series.get
Fetch resource collection


```js
art19.series.get({}, context)
```

#### Input
* input `object`
  * ids[] `string`: Filter by ID's
  * network_id `string`: Filter by Network
  * page[number] `integer`: Filter by page number
  * page[size] `integer`: Change page size
  * q `string`: Filter by title
  * sort `string`: Sort by created_at, episode_released_at, sort_title, title, updated_at

#### Output
* output [SeriesDocument](#seriesdocument)

### series.id.get
Fetch resource


```js
art19.series.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: UUID

#### Output
* output [Series](#series)



## Definitions

### Classification
* Classification `object`
  * data `object`
    * attributes `object`
      * created_at `string`
      * metadata `object`
      * parent_id `string`
      * tree_path `array`
        * items `string`
      * type `string`
      * updated_at `string`
      * value `string`
      * value_path `string`
    * id `string`
    * type `string`

### ClassificationDocument
* ClassificationDocument `object`
  * data `array`
    * items [Classification](#classification)
  * links [Links](#links)

### ClassificationInclusion
* ClassificationInclusion `object`
  * data `object`
    * attributes `object`
      * classification_id `string`
      * classification_type `string`
      * classified_id `string`
      * classified_type `string`
      * created_at `string`
      * primary `boolean`
      * updated_at `string`
    * id `string`
    * relationships `object`
      * classification `object`
        * data [ResourceIdentifier](#resourceidentifier)
    * type `string`

### ClassificationInclusionDocument
* ClassificationInclusionDocument `object`
  * data `array`
    * items [ClassificationInclusion](#classificationinclusion)
  * links [Links](#links)

### Credit
* Credit `object`
  * data `object`
    * attributes `object`
      * created_at `string`
      * creditable_id `string`
      * creditable_type `string`
      * position `integer`
      * type `string`
      * updated_at `string`
    * id `string`
    * relationships `object`
      * person `object`
        * data [ResourceIdentifier](#resourceidentifier)
    * type `string`

### CreditDocument
* CreditDocument `object`
  * data `array`
    * items [Credit](#credit)
  * links [Links](#links)

### Episode
* Episode `object`
  * data `object`
    * attributes `object`
      * allow_user_comments `boolean`: Credential must own the series
      * cascaded_cover_image_id `string`
      * cover_image_id `string`
      * created_at `string`
      * description `string`
      * description_is_html `boolean`
      * description_plain `string`
      * file_name `string`
      * listen_count `integer`: Credential must have stats access to series
      * premium_status `string`
      * published `boolean`
      * release_immediately `boolean`: Credential must own the series
      * released_at `string`
      * rss_guid `string`
      * sort_title `string`
      * status `string`
      * title `string`
      * updated_at `string`
    * id `string`
    * relationships `object`
      * classification_inclusions `object`
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
      * credits `object`
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
      * default_marker_points `object`: Credential must own the series
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
      * episode_versions `object`: Credential must own the series
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
      * images `object`
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
      * season `object`
        * data [ResourceIdentifier](#resourceidentifier)
      * segment_lists `object`: Credential must own the series
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
      * series `object`
        * data [ResourceIdentifier](#resourceidentifier)
      * taggings `object`
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
      * tags `object`
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
    * type `string`

### EpisodesDocument
* EpisodesDocument `object`
  * data `array`
    * items [Episode](#episode)
  * links [Links](#links)

### Image
* Image `object`
  * data `object`
    * attributes `object`
      * bucket_id `string`
      * bucket_type `string`
      * created_at `string`
      * crop_data `object`
        * height `number`
        * left `number`
        * top `number`
        * width `number`
      * status `string`
      * updated_at `string`
    * id `string`
    * relationships `object`
      * media_assets `object`
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
    * type `string`

### ImageDocument
* ImageDocument `object`
  * data `array`
    * items [Image](#image)
  * links [Links](#links)

### Links
* Links `object`
  * first `string`
  * last `string`
  * next `string`
  * prev `string`
  * self `string`

### MediaAsset
* MediaAsset `object`
  * data `object`
    * attributes `object`
      * attachment_id `string`
      * attachment_type `string`
      * cdn_url `string`
      * created_at `string`
      * file_name `string`
      * file_size `string`
      * size_height `integer`
      * size_width `integer`
      * style `string`
      * updated_at `string`
    * id `string`
    * type `string`

### MediaAssetDocument
* MediaAssetDocument `object`
  * data `array`
    * items [MediaAsset](#mediaasset)
  * links [Links](#links)

### Network
* Network `object`
  * data `object`
    * attributes `object`
      * copyright `string`
      * cover_image_id `string`
      * created_at `string`
      * description `string`
      * facebook_url `string`
      * global_id `string`
      * linkedin_url `string`
      * name `string`
      * public_email `string`
      * public_page_enabled `boolean`
      * slug `string`
      * tumblr_url `string`
      * twitter_url `string`
      * updated_at `string`
      * website_url `string`
    * id `string`
    * relationships `object`
      * images `object`
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
      * series `object`
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
    * type `string`

### NetworkDocument
* NetworkDocument `object`
  * data `array`
    * items [Network](#network)
  * links [Links](#links)

### Person
* Person `object`
  * data `object`
    * attributes `object`
      * avatar_id `string`
      * biography `string`
      * born `string`
      * created_at `string`
      * died `string`
      * first_name `string`
      * from_country `string`
      * from_locality `string`
      * from_region `string`
      * last_name `string`
      * public_email `string`
      * updated_at `string`
    * id `string`
    * type `string`

### PersonDocument
* PersonDocument `object`
  * data `array`
    * items [Person](#person)
  * links [Links](#links)

### ResourceIdentifier
* ResourceIdentifier `object`
  * id `string`
  * type `string`

### Season
* Season `object`
  * data `object`
    * attributes `object`
      * cascaded_cover_image_id `string`
      * cover_image_id `string`
      * created_at `string`
      * description `string`
      * description_is_html `boolean`
      * description_plain `string`
      * first_released_episode_id `string`
      * last_released_episode_id `string`
      * sort_title `string`
      * status `string`
      * title `string`
      * updated_at `string`
    * id `string`
    * relationships `object`
      * classification_inclusions `object`
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
      * credits `object`
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
      * episodes `object`
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
      * images `object`
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
      * series `object`
        * data [ResourceIdentifier](#resourceidentifier)
      * taggings `object`
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
      * tags `object`
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
    * type `string`

### SeasonDocument
* SeasonDocument `object`
  * data `array`
    * items [Season](#season)
  * links [Links](#links)

### Series
* Series `object`
  * data `object`
    * attributes `object`
      * cover_image_id `string`
      * created_at `string`
      * description `string`
      * description_is_html `boolean`
      * description_plain `string`
      * facebook_url `string`
      * global_id `string`
      * itunes_subscription_url `string`
      * linkedin_url `string`
      * podcast_subscription_url `string`
      * public_page_enabled `boolean`
      * rss_author `string`
      * rss_copyright `string`
      * rss_email `string`
      * rss_owner `string`
      * slug `string`
      * sort_title `string`
      * status `string`
      * stitcher_subscription_url `string`
      * title `string`
      * tumblr_url `string`
      * twitter_url `string`
      * updated_at `string`
      * website_url `string`
    * id `string`
    * relationships `object`
      * classification_inclusions `object`
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
      * credits `object`
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
      * episodes `object`
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
      * images `object`
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
      * network `object`
        * data [ResourceIdentifier](#resourceidentifier)
      * seasons `object`
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
      * taggings `object`
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
      * tags `object`
        * data `array`
          * items [ResourceIdentifier](#resourceidentifier)
    * type `string`

### SeriesDocument
* SeriesDocument `object`
  * data `array`
    * items [Series](#series)
  * links [Links](#links)


