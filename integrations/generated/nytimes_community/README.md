# @datafire/nytimes_community

Client library for Community

## Installation and Usage
```bash
npm install --save @datafire/nytimes_community
```
```js
let nytimes_community = require('@datafire/nytimes_community').create({
  "api-key": ""
});

nytimes_community.user_content.user.json.get({}).then(data => {
  console.log(data);
})
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
        * parentID `null`
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
            * items `object`
              * description `string`
              * name `string`
              * properties `array`
                * items `object`
          * assetID `integer`
          * assetTitle `string`
          * assetURL `string`
          * createDate `string`
          * labels `array`
            * items `object`
          * properties `object`
            * automoderation-on `object`
              * groupID `integer`
              * taxonomyID `integer`
            * comment-list-sort-editors `object`
              * groupID `integer`
              * taxonomyID `integer`
            * reached-max-com-off `object`
              * groupID `integer`
              * taxonomyID `integer`
          * source `string`
          * taxonomy `string`
          * text `array`
            * items `object`
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
        * parentID `null`
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
    * callerID `null`
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
        * parentID `null`
        * parentUserDisplayName `null`
        * permID `string`
        * picURL `string`
        * recommendations `integer`
        * recommendedFlag `null`
        * replies `array`

        * replyCount `integer`
        * reportAbuseFlag `null`
        * sharing `integer`
        * status `string`
        * timespeople `integer`
        * trusted `integer`
        * updateDate `string`
        * userDisplayName `string`
        * userID `integer`
        * userLocation `string`
        * userTitle `null`
        * userURL `null`
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
            * items `object`
              * description `string`
              * name `string`
              * properties `array`
                * items `object`
          * assetID `integer`
          * assetTitle `string`
          * assetURL `string`
          * createDate `string`
          * labels `array`
            * items `object`
              * labelID `integer`
              * labelName `string`
          * properties `object`
            * automoderation-off `object`
              * groupID `integer`
              * taxonomyID `integer`
            * comment-list-sort-approvedate-desc `object`
              * groupID `integer`
              * taxonomyID `integer`
            * reached-max-com-on `object`
              * groupID `integer`
              * taxonomyID `integer`
          * source `string`
          * taxonomy `string`
          * text `array`
            * items `object`
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
        * parentID `null`
        * permid `integer`
        * picURL `string`
        * recommendations `integer`
        * replies `array`
          * items `object`
        * replyCount `integer`
        * status `string`
        * updateDate `string`
        * userDisplayName `null`
        * userID `integer`
        * userLocation `null`
        * userSubmittedDisplayName `string`
        * userSubmittedLocation `string`
        * userSubmittedTitle `null`
        * userSubmittedURL `null`
        * userTitle `null`
        * userURL `null`
    * totalCommentsFound `integer`
    * totalCommentsReturned `integer`
  * status `string`



## Definitions

*This integration has no definitions*
