# @datafire/gov_bc_ca_news

Client library for BC Gov News API Service 1.0

## Installation and Usage
```bash
npm install --save @datafire/gov_bc_ca_news
```
```js
let gov_bc_ca_news = require('@datafire/gov_bc_ca_news').create();

gov_bc_ca_news.FacebookPosts_GetByUri({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

News API

## Actions

### FacebookPosts_GetByUri
Get a Facebook post based on a Uri


```js
gov_bc_ca_news.FacebookPosts_GetByUri({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * uri `string`
  * api-version **required** `string`: The requested API version

#### Output
* output [FacebookPost](#facebookpost)

### Home_Get
Returns the top level content for the home page


```js
gov_bc_ca_news.Home_Get({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The requested API version

#### Output
* output [Home](#home)

### Ministries_GetAll
Get all ministries


```js
gov_bc_ca_news.Ministries_GetAll({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The requested API version

#### Output
* output `array`
  * items [Ministry](#ministry)

### Ministries_GetOne
Get the Ministry associated with the ministry key


```js
gov_bc_ca_news.Ministries_GetOne({
  "key": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`
  * api-version **required** `string`: The requested API version

#### Output
* output [Ministry](#ministry)

### Ministries_GetMinister
Get the Minister associated with the ministry key


```js
gov_bc_ca_news.Ministries_GetMinister({
  "key": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`
  * api-version **required** `string`: The requested API version

#### Output
* output [Minister](#minister)

### Newsletters_GetAll
Get all newsletters


```js
gov_bc_ca_news.Newsletters_GetAll({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The requested API version

#### Output
* output `array`
  * items [Newsletter](#newsletter)

### Newsletters_GetImage
Get the image object reference by of a Newsletter Edition associated with the image guid


```js
gov_bc_ca_news.Newsletters_GetImage({
  "guid": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * guid **required** `string`
  * api-version **required** `string`: The requested API version

#### Output
* output [EditionImage](#editionimage)

### Newsletters_GetOne
Get a specific newsletter


```js
gov_bc_ca_news.Newsletters_GetOne({
  "newsletterKey": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * newsletterKey **required** `string`
  * api-version **required** `string`: The requested API version

#### Output
* output [Newsletter](#newsletter)

### Newsletters_GetEdition
Returns a specific edition of a newsletter


```js
gov_bc_ca_news.Newsletters_GetEdition({
  "newsletterKey": "",
  "editionKey": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * newsletterKey **required** `string`
  * editionKey **required** `string`
  * api-version **required** `string`: The requested API version

#### Output
* output [Edition](#edition)

### Newsletters_GetArticle
Get an article belonging to a Newsletter edition


```js
gov_bc_ca_news.Newsletters_GetArticle({
  "newsletterKey": "",
  "editionKey": "",
  "articleKey": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * newsletterKey **required** `string`
  * editionKey **required** `string`
  * articleKey **required** `string`
  * api-version **required** `string`: The requested API version

#### Output
* output [Article](#article)

### Posts_Get
Get the posts associated with the keys in the list passed in.


```js
gov_bc_ca_news.Posts_Get({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * postKeys `array`
  * api-version **required** `string`: The requested API version

#### Output
* output `array`
  * items [Post](#post)

### Posts_GetAllKeys
Get all keys for the specified index (newsroom or category)


```js
gov_bc_ca_news.Posts_GetAllKeys({
  "indexKind": "",
  "indexKey": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * indexKind **required** `string`: home or one of categories
  * indexKey **required** `string`: default or one key of the categories (ministries, sectors, services, tags, themes)
  * postKind `string`: One of: releases, stories, factsheets, updates or default (releases+stories+factsheets)
  * count `integer`: number of posts to return
  * skip `integer`: number of posts to skip
  * api-version **required** `string`: The requested API version

#### Output
* output `array`
  * items [KeyValuePair_2](#keyvaluepair_2)

### Posts_GetKeyFromReference
Get the post key associated with the reference.


```js
gov_bc_ca_news.Posts_GetKeyFromReference({
  "reference": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * reference **required** `string`
  * api-version **required** `string`: The requested API version

#### Output
* output [KeyValuePair_2](#keyvaluepair_2)

### Posts_GetLatest
Get the latest posts of postKind for the specified index (default or category)


```js
gov_bc_ca_news.Posts_GetLatest({
  "indexKind": "",
  "indexKey": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * indexKind **required** `string`: home or one of categories
  * indexKey **required** `string`: default or one key of the categories (ministries, sectors, services, tags, themes)
  * postKind `string`: One of: releases, stories, factsheets, updates or default (releases+stories except top/feature)
  * count `integer`: number of posts to return
  * skip `integer`: number of posts to skip
  * api-version **required** `string`: The requested API version

#### Output
* output `array`
  * items [Post](#post)

### Posts_GetLatestMediaUri
Gets the latest Social Media post for the social media type passed in.


```js
gov_bc_ca_news.Posts_GetLatestMediaUri({
  "mediaType": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * mediaType **required** `string`
  * api-version **required** `string`: The requested API version

#### Output
* output `string`

### Posts_GetOne
Get the post associated with the key


```js
gov_bc_ca_news.Posts_GetOne({
  "key": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`
  * api-version **required** `string`: The requested API version

#### Output
* output [Post](#post)

### ResourceLinks_GetAll
Get all resource links


```js
gov_bc_ca_news.ResourceLinks_GetAll({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The requested API version

#### Output
* output `array`
  * items [ResourceLink](#resourcelink)

### Sectors_GetAll
Get all Sectors


```js
gov_bc_ca_news.Sectors_GetAll({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The requested API version

#### Output
* output `array`
  * items [Sector](#sector)

### Sectors_GetOne
Get the sector associated with the key


```js
gov_bc_ca_news.Sectors_GetOne({
  "key": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`
  * api-version **required** `string`: The requested API version

#### Output
* output [Sector](#sector)

### Services_GetAll
Get all Services


```js
gov_bc_ca_news.Services_GetAll({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The requested API version

#### Output
* output `array`
  * items [Service](#service)

### Services_GetOne
Get the service associated with the passed key


```js
gov_bc_ca_news.Services_GetOne({
  "key": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`
  * api-version **required** `string`: The requested API version

#### Output
* output [Service](#service)

### Slides_GetAll
Get all Slides


```js
gov_bc_ca_news.Slides_GetAll({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The requested API version

#### Output
* output `array`
  * items [Slide](#slide)

### Slides_GetOne
Get the slide associated to the id


```js
gov_bc_ca_news.Slides_GetOne({
  "id": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * api-version **required** `string`: The requested API version

#### Output
* output [Slide](#slide)

### Tags_GetAll
Get all Tags


```js
gov_bc_ca_news.Tags_GetAll({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The requested API version

#### Output
* output `array`
  * items [Tag](#tag)

### Tags_GetOne
Get the Tag associated with the key


```js
gov_bc_ca_news.Tags_GetOne({
  "key": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`
  * api-version **required** `string`: The requested API version

#### Output
* output [Tag](#tag)

### Themes_GetAll
Get all Themes


```js
gov_bc_ca_news.Themes_GetAll({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The requested API version

#### Output
* output `array`
  * items [Theme](#theme)

### Themes_GetOne
Get the Theme associated with the key


```js
gov_bc_ca_news.Themes_GetOne({
  "key": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`
  * api-version **required** `string`: The requested API version

#### Output
* output [Theme](#theme)



## Definitions

### Article
* Article `object`
  * editionName `string`
  * htmlBody `string`
  * key `string`
  * timestamp `string`

### Asset
* Asset `object`
  * key `string`
  * label `string`
  * length `integer`

### Category
* Category `object`
  * audioUri `string`
  * featurePostKey `string`
  * flickrUri `string`
  * isActive `boolean`
  * name `string`
  * topPostKey `string`
  * twitterFeedUsername `string`
  * youtubeUri `string`
  * featurePostKey `string`
  * kind `string`
  * name `string`
  * topPostKey `string`
  * key `string`
  * timestamp `string`

### Contact
* Contact `object`
  * emailAddress `string`
  * fullName `string`
  * mobileNumber `string`
  * phoneNumber `string`

### DataIndex
* DataIndex `object`
  * featurePostKey `string`
  * kind `string`
  * name `string`
  * topPostKey `string`
  * key `string`
  * timestamp `string`

### DataModel
* DataModel `object`
  * key `string`
  * timestamp `string`

### Document
* Document `object`
  * byline `string`
  * contacts `array`
    * items [DocumentContact](#documentcontact)
  * detailsHtml `string`
  * headline `string`
  * languageId `integer`
  * pageTitle `string`
  * subheadline `string`

### DocumentContact
* DocumentContact `object`
  * details `string`
  * title `string`

### Edition
* Edition `object`
  * htmlBody `string`
  * name `string`
  * key `string`
  * timestamp `string`

### EditionImage
* EditionImage `object`
  * fileName `string`
  * imageBytes `string`
  * imageType `string`
  * key `string`
  * timestamp `string`

### FacebookPost
* FacebookPost `object`
  * content `string`
  * facebookObjectId `integer`
  * pictureUri `string`
  * postComments `integer`
  * postLikes `integer`
  * postShares `integer`
  * poster `string`
  * posterLikes `integer`
  * posterLogo `string`
  * posterSubtitle `string`
  * type `string`
  * key `string`
  * timestamp `string`

### Home
* Home `object`
  * featurePostKey `string`
  * liveWebcastFlashMediaManifestUrl `string`
  * liveWebcastM3uPlaylist `string`
  * name `string`
  * topPostKey `string`
  * featurePostKey `string`
  * kind `string`
  * name `string`
  * topPostKey `string`
  * key `string`
  * timestamp `string`

### KeyValuePair_2
* KeyValuePair_2 `object`
  * key `string`
  * value `string`

### Minister
* Minister `object`
  * details `string`
  * emailHtml `string`
  * headline `string`
  * photo `string`
  * post `string`
  * summary `string`
  * key `string`
  * timestamp `string`

### Ministry
* Ministry `object`
  * audioUri `string`
  * childMinistryKey `string`
  * contactUser [Contact](#contact)
  * displayAdditionalName `string`
  * featurePostKey `string`
  * flickrUri `string`
  * isActive `boolean`
  * ministerName `string`
  * ministryUrl `string`
  * name `string`
  * newsletterLinks `array`
    * items [ResourceLink](#resourcelink)
  * parentMinistryKey `string`
  * secondContactUser [Contact](#contact)
  * serviceLinks `array`
    * items [ResourceLink](#resourcelink)
  * topPostKey `string`
  * topicLinks `array`
    * items [ResourceLink](#resourcelink)
  * twitterFeedUsername `string`
  * weekendContactNumber `string`
  * youtubeUri `string`
  * audioUri `string`
  * featurePostKey `string`
  * flickrUri `string`
  * isActive `boolean`
  * name `string`
  * topPostKey `string`
  * twitterFeedUsername `string`
  * youtubeUri `string`
  * featurePostKey `string`
  * kind `string`
  * name `string`
  * topPostKey `string`
  * key `string`
  * timestamp `string`

### Newsletter
* Newsletter `object`
  * description `string`
  * editions `array`
    * items [KeyValuePair_2](#keyvaluepair_2)
  * ministryName `string`
  * name `string`
  * key `string`
  * timestamp `string`

### Post
* Post `object`
  * assetUrl `string`
  * atomId `string`
  * azureAssets `array`
    * items [Asset](#asset)
  * documents `array`
    * items [Document](#document)
  * facebookPictureUri `string`
  * hasMediaAssets `boolean`
  * isNewsOnDemand `boolean`
  * keywords `string`
  * kind `string`
  * leadMinistryKey `string`
  * location `string`
  * ministryKeys `array`
    * items `string`
  * publishDate `string`
  * redirectUri `string`
  * reference `string`
  * sectorKeys `array`
    * items `string`
  * serviceKeys `array`
    * items `string`
  * socialMediaHeadline `string`
  * socialMediaSummary `string`
  * summary `string`
  * key `string`
  * timestamp `string`

### ResourceLink
* ResourceLink `object`
  * uri `string`
  * key `string`
  * timestamp `string`

### Sector
* Sector `object`
  * audioUri `string`
  * featurePostKey `string`
  * flickrUri `string`
  * isActive `boolean`
  * name `string`
  * topPostKey `string`
  * twitterFeedUsername `string`
  * youtubeUri `string`
  * audioUri `string`
  * featurePostKey `string`
  * flickrUri `string`
  * isActive `boolean`
  * name `string`
  * topPostKey `string`
  * twitterFeedUsername `string`
  * youtubeUri `string`
  * featurePostKey `string`
  * kind `string`
  * name `string`
  * topPostKey `string`
  * key `string`
  * timestamp `string`

### Service
* Service `object`
  * audioUri `string`
  * featurePostKey `string`
  * flickrUri `string`
  * isActive `boolean`
  * name `string`
  * topPostKey `string`
  * twitterFeedUsername `string`
  * youtubeUri `string`
  * audioUri `string`
  * featurePostKey `string`
  * flickrUri `string`
  * isActive `boolean`
  * name `string`
  * topPostKey `string`
  * twitterFeedUsername `string`
  * youtubeUri `string`
  * featurePostKey `string`
  * kind `string`
  * name `string`
  * topPostKey `string`
  * key `string`
  * timestamp `string`

### Slide
* Slide `object`
  * actionLabel `string`
  * actionUri `string`
  * facebookPostUri `string`
  * headline `string`
  * image `string`
  * imageType `string`
  * justify `string`
  * slideId `string`
  * summary `string`
  * key `string`
  * timestamp `string`

### Tag
* Tag `object`
  * audioUri `string`
  * featurePostKey `string`
  * flickrUri `string`
  * isActive `boolean`
  * name `string`
  * topPostKey `string`
  * twitterFeedUsername `string`
  * youtubeUri `string`
  * audioUri `string`
  * featurePostKey `string`
  * flickrUri `string`
  * isActive `boolean`
  * name `string`
  * topPostKey `string`
  * twitterFeedUsername `string`
  * youtubeUri `string`
  * featurePostKey `string`
  * kind `string`
  * name `string`
  * topPostKey `string`
  * key `string`
  * timestamp `string`

### Theme
* Theme `object`
  * audioUri `string`
  * featurePostKey `string`
  * flickrUri `string`
  * isActive `boolean`
  * name `string`
  * topPostKey `string`
  * twitterFeedUsername `string`
  * youtubeUri `string`
  * audioUri `string`
  * featurePostKey `string`
  * flickrUri `string`
  * isActive `boolean`
  * name `string`
  * topPostKey `string`
  * twitterFeedUsername `string`
  * youtubeUri `string`
  * featurePostKey `string`
  * kind `string`
  * name `string`
  * topPostKey `string`
  * key `string`
  * timestamp `string`


