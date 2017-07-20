# @datafire/hhs_gov

Client library for HHS Media Services

## Installation and Usage
```bash
npm install --save datafire @datafire/hhs_gov
```

```js
let datafire = require('datafire');
let hhs_gov = require('@datafire/hhs_gov').actions;
let context = new datafire.Context();

hhs_gov.getTags({}, context).then(data => {
  console.log(data);
})
```

## Description

<div class="swagger-ui-wrap extraFooter"><h3>Common Features / Behaviors</h3>
    <div class="features">
        <ul>
            <li><strong>* "sort" param:</strong> supports multi column sorting through the use of commas as delimiters, and a hyphen to denote descending order.
                <br/>
                <strong><span>Examples:</span></strong>
                <ul>
                    <li><span class="example">name</span><span class="description">sort results by name ascending</span></li>
                    <li><span class="example">-name</span><span class="description">sort results by name descending</span></li>
                    <li><span class="example">-name,id</span><span class="description">sort results by name descending and then by id ascending</span></li>
                    <li><span class="example">id,-dateContentAuthored</span><span class="description">sort results by id ascending and then date descending</span></li>
                </ul>
            </li>
            <li><strong>Date formats:</strong> Date input format is expected to be based on <a href="http://www.ietf.org/rfc/rfc3339.txt">RFC 3339</a>. <br/>
                <span><strong>Example:</strong></span>
                <ul><li>2013-11-18T18:43:01Z</li></ul>
            </li>
        </ul>
    </div>
</div>


## Actions
### getResources
Returns the list of Resources matching the search query 'q'.<p>The search query 'q' is a Lucene query.<br>The syntax for a Lucene query can be found <a href="http://lucene.apache.org/core/2_9_4/queryparsersyntax.html">here</a>.


```js
hhs_gov.getResources({
  "q": ""
}, context)
```

#### Parameters
* q (string) **required** - The search query supplied by the user

### getCampaigns
Returns the list of Campaigns.


```js
hhs_gov.getCampaigns({}, context)
```


### getCampaignById
Returns the Campaign identified by the 'id'.


```js
hhs_gov.getCampaignById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the record to look up

### getMediaByCampaignId
Returns the list of MediaItems for the Campaign identified by the 'id'.


```js
hhs_gov.getMediaByCampaignId({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the campaign to find media items for
* max (integer) - The maximum number of records to return
* offset (integer) - The offset of the records set to return for pagination
* sort (string) - The name of the property to which sorting will be applied

### resources.campaigns.id.syndicate.json.get
Renders the list of MediaItems associated with the Campaign identified by the 'id'.


```js
hhs_gov.resources.campaigns.id.syndicate.json.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the record to look up
* displayMethod (string) - Method used to render an html request. Accepts one: [mv, list, feed]

### getLanguages
Returns the list Languages.


```js
hhs_gov.getLanguages({}, context)
```


### getLanguageById
Returns the Language identified by the 'id'.


```js
hhs_gov.getLanguageById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the language to look up

### getMedia
Returns the list of MediaItems matching the specified query parameters.


```js
hhs_gov.getMedia({}, context)
```


### getFeaturedMedia
Get the list of featured content in the syndication system


```js
hhs_gov.getFeaturedMedia({}, context)
```


### getMostPopularMedia
Returns the list of MediaItems with the highest ratings.


```js
hhs_gov.getMostPopularMedia({}, context)
```


### searchMedia
Returns the list of MediaItems matching the search query 'q'.<p>The search query 'q' is a Lucene query.<br>The syntax for a Lucene query can be found <a href="http://lucene.apache.org/core/2_9_4/queryparsersyntax.html">here</a>


```js
hhs_gov.searchMedia({
  "q": ""
}, context)
```

#### Parameters
* q (string) **required** - The search query supplied by the user
* max (integer) - The maximum number of records to return
* offset (integer) - The offset of the records set to return for pagination.

### getMediaById
Returns the MediaItem identified by the 'id'.


```js
hhs_gov.getMediaById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the record to look up

### getMediaContentById
Returns the raw content (html, image, etc...) for the MediaItem identified by the 'id'.


```js
hhs_gov.getMediaContentById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the media to show content for.
* calledByBuild (boolean) - The method that called this method

### getMediaEmbedById
Returns the javascript or iframe embed code for the MediaItem identified by 'id'.


```js
hhs_gov.getMediaEmbedById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the media to get embed code for.
* flavor (string) - Currently supports 'iframe', defaults to 'javascript'.
* width (integer) - The width of the generated iframe.
* height (integer) - The height of the generated iframe.
* iframeName (string) - The name of the iframe element
* excludeJquery (boolean) - Should a reference to the JQuery Library be omitted?
* excludeDiv (boolean) - Should the div to insert content into be omitted?
* divId (string) - Should the div to insert content into have a specific name?
* displayMethod (string) - Method used to render an html request. Accepts one: [mv, list, feed]

### getMediaPreviewById
Returns the JPG preview, where applicable, for the MediaItem identified by the 'id'.


```js
hhs_gov.getMediaPreviewById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the media to get a preview for.

### getMediaRatingsById
Get the Ratings (number of 'likes') for the MediaItem identified by the 'id'.


```js
hhs_gov.getMediaRatingsById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The ID of the media item to 'like'.

### getRelatedMediaById
Returns the list of MediaItems related to the MediaItem identified by the 'id'.


```js
hhs_gov.getRelatedMediaById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the media item to get related media for
* max (integer) - The maximum number of records to return
* offset (integer) - The offset of the records set to return for pagination.
* sort (string) - Which field to sort the records by.

### getMediaSyndicateById
Returns the syndicated content for a given MediaItem in the specified 'format' (HTML or JSON).


```js
hhs_gov.getMediaSyndicateById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the media to show embed code for.
* cssClass (string) - The css class to target for extraction.
* stripStyles (boolean) - Remove in-line styles from content.
* stripScripts (boolean) - Remove script tags from content.
* stripImages (boolean) - Remove image tags from content.
* stripBreaks (boolean) - Remove break tags from content.
* stripClasses (boolean) - Remove class attributes from content (except 'syndicate').
* font-size (integer) - Set font size (in points) of p, div, and span tags.
* imageFloat (string) - Accepts valid CSS float options, such as 'left' or 'right'. Will inject a style into the content before rendering.
* imageMargin (string) - Accepts 4 CSV values representing pixel sizes of margin similar to CSS. Default format is 'north,east,south,west' - for example '0,10,10,0' would put a 10 pixel margin on the right and bottom sides of an image. Will inject a style into the content before rendering.
* autoplay (boolean) - If content is a video, the embeded video will auto play when loaded.
* rel (boolean) - If content is a video, related items will be shown at the end of playback.

### getMediaThumbnailById
Returns the JPG thumbnail, where applicable, for the MediaItem identified by the 'id'.


```js
hhs_gov.getMediaThumbnailById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the media to get a thumbnail for.

### getMediaYoutubeMetaDataById
Returns the Youtube metadata, where applicable, for the MediaItem identified by the 'id'.


```js
hhs_gov.getMediaYoutubeMetaDataById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the video to show meta data for.

### getMediaTypes
Returns the list of available MediaTypes.


```js
hhs_gov.getMediaTypes(null, context)
```


### getSources
Returns the list of Sources.


```js
hhs_gov.getSources({}, context)
```


### getSourceById
Returns the Source identified by the 'id'.


```js
hhs_gov.getSourceById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the source to look up

### resources.sources.id.syndicate.json.get
Renders the list of MediaItems associated with the Source identified by the 'id'.


```js
hhs_gov.resources.sources.id.syndicate.json.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the record to look up
* displayMethod (string) - Method used to render an html request. Accepts one: [mv, list, feed]

### getTags
Returns the list of Tags matching the specified query parameters in the specified 'format'.


```js
hhs_gov.getTags({}, context)
```


### getTagLanguages
Returns the list of TagLanguages


```js
hhs_gov.getTagLanguages(null, context)
```


### getTagTypes
Returns the list of TagTypes


```js
hhs_gov.getTagTypes(null, context)
```


### getTagById
Returns the Tag identified by the 'id' in the specified 'format'.


```js
hhs_gov.getTagById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the record to look up

### getMediaByTagId
Returns the list of MediaItems associated with the Tag identified by the 'id'.


```js
hhs_gov.getMediaByTagId({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the record to look up
* max (integer) - The maximum number of records to return
* offset (integer) - The offset of the records set to return for pagination
* sort (string) - The name of the property to which sorting will be applied

### getRelatedTagsById
Returns the list of Tags related to the Tag identified by the 'id' in the specified format.


```js
hhs_gov.getRelatedTagsById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the tag to look up
* max (integer) - The maximum number of records to return
* offset (integer) - The offset of the records set to return for pagination
* sort (string) - The name of the property to which sorting will be applied

### resources.tags.id.syndicate.json.get
Renders the list of MediaItems associated with the Tag identified by the 'id'.


```js
hhs_gov.resources.tags.id.syndicate.json.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the record to look up
* displayMethod (string) - Method used to render an html request. Accepts one: [mv, list, feed]

### getUserMediaList
Get a specific user media list by 'id'.


```js
hhs_gov.getUserMediaList({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the record to look up
* displayMethod (string) - Method used to render an html request. Accepts one: [mv, list, feed]

