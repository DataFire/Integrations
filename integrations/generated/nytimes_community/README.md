# @datafire/nytimes_community

Client library for Community API

## Installation and Usage
```bash
npm install --save @datafire/nytimes_community
```
```js
let nytimes_community = require('@datafire/nytimes_community').create({
  "api-key": ""
});

.then(data => {
  console.log(data);
});
```

## Description

Get access to comments from registered users on New York Times articles.  NOTE: This API is deprecated.

## Actions

### user_content.by_date.json.get
Comments by Date


```js
nytimes_community.user_content.by_date.json.get({}, context)
```

#### Input
* input `object`
  * date `string`

#### Output
* output `object`
  * copyright `string`
  * debug `object`
    * version `number`
  * results `object`
    * api_timestamp `string`
    * comments `array`
      * items `object`
        * approveDate `string`
        * assetID `integer`
        * assetURL `string`
        * commentBody `string`
        * commentID `integer`
        * commentSequence `integer`
        * commentTitle `string`
        * commentType `string`
        * createDate `string`
        * editorsSelection `integer`
        * lft `integer`
        * recommendationCount `integer`
        * replies `array`
          * items `object`
        * replyCount `integer`
        * rgt `integer`
        * status `string`
        * statusID `integer`
        * updateDate `string`
        * userDisplayName `string`
        * userID `integer`
        * userLocation `string`
        * userTitle `string`
        * userURL `integer`
    * totalCommentsFound `integer`
    * totalCommentsReturned `integer`
  * status `string`

### user_content.recent.json.get
Recent User Comments


```js
nytimes_community.user_content.recent.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * copyright `string`
  * debug `object`
    * version `number`
  * results `object`
    * api_timestamp `string`
    * comments `array`
      * items `object`
        * approveDate `string`
        * asset `object`
          * all-properties `array`
          * assetID `integer`
          * assetTitle `string`
          * assetURL `string`
          * createDate `string`
          * labels `array`
          * properties `object`
          * source `string`
          * taxonomy `string`
          * text `array`
          * updateDate `string`
          * vendorID `string`
        * assetID `integer`
        * commentBody `string`
        * commentID `integer`
        * commentSequence `integer`
        * commentTitle `string`
        * commentType `string`
        * createDate `string`
        * display_name `string`
        * editorsSelection `integer`
        * location `string`
        * recommendationCount `integer`
        * replies `array`
          * items `object`
        * status `string`
        * statusID `integer`
        * updateDate `string`
        * userDisplayName `string`
        * userID `integer`
        * userLocation `string`
        * userTitle `string`
        * userURL `string`
    * totalCommentsReturned `integer`
  * status `string`

### user_content.url.json.get
Comments by URL


```js
nytimes_community.user_content.url.json.get({}, context)
```

#### Input
* input `object`
  * url `string`

#### Output
* output `object`
  * copyright `string`
  * debug `object`
    * version `number`
  * results `object`
    * api_timestamp `string`
    * comments `array`
      * items `object`
        * approveDate `string`
        * commentBody `string`
        * commentID `integer`
        * commentSequence `integer`
        * commentTitle `string`
        * commentType `string`
        * createDate `string`
        * depth `integer`
        * editorsSelection `boolean`
        * permID `string`
        * picURL `string`
        * recommendations `integer`
        * replies `array`
        * replyCount `integer`
        * sharing `integer`
        * status `string`
        * timespeople `integer`
        * trusted `integer`
        * updateDate `string`
        * userDisplayName `string`
        * userID `integer`
        * userLocation `string`
    * depthLimit `integer`
    * filter `string`
    * page `integer`
    * replyLimit `integer`
    * sort `string`
    * totalCommentsFound `integer`
    * totalCommentsReturned `integer`
    * totalEditorsSelectionFound `integer`
    * totalEditorsSelectionReturned `integer`
    * totalParentCommentsFound `integer`
    * totalParentCommentsReturned `integer`
    * totalRecommendationsFound `integer`
    * totalRecommendationsReturned `integer`
    * totalReplyCommentsFound `integer`
    * totalReplyCommentsReturned `integer`
    * totalReporterReplyCommentsFound `integer`
    * totalReporterReplyCommentsReturned `integer`
  * status `string`

### user_content.user.json.get
Comments by User


```js
nytimes_community.user_content.user.json.get({}, context)
```

#### Input
* input `object`
  * userID `integer`

#### Output
* output `object`
  * copyright `string`
  * debug `object`
    * version `number`
  * results `object`
    * api_timestamp `string`
    * comments `array`
      * items `object`
        * approveDate `string`
        * asset `object`
          * all-properties `array`
          * assetID `integer`
          * assetTitle `string`
          * assetURL `string`
          * createDate `string`
          * labels `array`
          * properties `object`
          * source `string`
          * taxonomy `string`
          * text `array`
          * updateDate `string`
          * vendorID `string`
        * commentBody `string`
        * commentID `integer`
        * commentSequence `integer`
        * commentTitle `string`
        * commentType `string`
        * createDate `string`
        * editorsSelection `boolean`
        * labels `array`
          * items `object`
        * permid `integer`
        * picURL `string`
        * recommendations `integer`
        * replies `array`
          * items `object`
        * replyCount `integer`
        * status `string`
        * updateDate `string`
        * userID `integer`
        * userSubmittedDisplayName `string`
        * userSubmittedLocation `string`
    * totalCommentsFound `integer`
    * totalCommentsReturned `integer`
  * status `string`



## Definitions

*This integration has no definitions*
