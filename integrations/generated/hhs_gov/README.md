# @datafire/hhs_gov

Client library for HHS Media Services

## Installation and Usage
```bash
npm install --save @datafire/hhs_gov
```
```js
let hhs_gov = require('@datafire/hhs_gov').create();

hhs_gov.getTags({}).then(data => {
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

#### Input
* input `object`
  * q **required** `string`: The search query supplied by the user

#### Output
* output [Resources](#resources)

### getCampaigns
Returns the list of Campaigns.


```js
hhs_gov.getCampaigns({}, context)
```

#### Input
* input `object`
  * max `integer`: The maximum number of records to return
  * offset `integer`: The offset of the records set to return for pagination
  * sort `string`: * Set of fields to sort the records by.

#### Output
* output [Campaigns](#campaigns)

### getCampaignById
Returns the Campaign identified by the 'id'.


```js
hhs_gov.getCampaignById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the record to look up

#### Output
* output [Campaigns](#campaigns)

### getMediaByCampaignId
Returns the list of MediaItems for the Campaign identified by the 'id'.


```js
hhs_gov.getMediaByCampaignId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the campaign to find media items for
  * max `integer`: The maximum number of records to return
  * offset `integer`: The offset of the records set to return for pagination
  * sort `string`: The name of the property to which sorting will be applied

#### Output
* output [MediaItems](#mediaitems)

### resources.campaigns.id.syndicate.json.get
Renders the list of MediaItems associated with the Campaign identified by the 'id'.


```js
hhs_gov.resources.campaigns.id.syndicate.json.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the record to look up
  * displayMethod `string`: Method used to render an html request. Accepts one: [mv, list, feed]

#### Output
* output [MediaItems](#mediaitems)

### getLanguages
Returns the list Languages.


```js
hhs_gov.getLanguages({}, context)
```

#### Input
* input `object`
  * max `integer`: The maximum number of records to return
  * offset `integer`: The offset of the records set to return for pagination
  * sort `string`: * Set of fields to sort the records by.

#### Output
* output [Languages](#languages)

### getLanguageById
Returns the Language identified by the 'id'.


```js
hhs_gov.getLanguageById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the language to look up

#### Output
* output [Languages](#languages)

### getMedia
Returns the list of MediaItems matching the specified query parameters.


```js
hhs_gov.getMedia({}, context)
```

#### Input
* input `object`
  * max `integer`: The maximum number of records to return
  * offset `integer`: The offset of the records set to return for pagination.
  * sort `string`: * Set of fields to sort the records by.
  * order `string`: * The ascending or descending order.
  * mediaTypes `string`: Find all media items belonging to the specified media type[s].
  * name `string`: Find all media items containing the provided name, case insensitive.
  * collectionId `integer`: Restrict filtering to media items in a specific collection.
  * nameContains `string`: Find all media items containing the partial name, case insensitive.
  * descriptionContains `string`: Find all media items containing the provided partial description, case insensitive.
  * sourceUrl `string`: Find all media items which have the provided sourceUrl, case insensitive.
  * sourceUrlContains `string`: Find all media items which contain the provided partial sourceUrl, case insensitive.
  * customThumbnailUrl `string`: Find all media items which have the provided customThumbnailUrl, case insensitive.
  * customThumbnailUrlContains `string`: Find all media items which contain the provided partial customThumbnailUrl, case insensitive.
  * dateContentAuthored `string`: Find all media items authored on the provided day (RFC 3339, time ignored).
  * dateContentUpdated `string`: Find all media items updated on the provided day (RFC 3339, time ignored).
  * dateContentPublished `string`: Find all media items published on the provided day (RFC 3339, time ignored).
  * dateContentReviewed `string`: Find all media items reviewed on the provided day (RFC 3339, time ignored).
  * dateSyndicationCaptured `string`: Find all media items authored on the provided day (RFC 3339, time ignored).
  * dateSyndicationUpdated `string`: Find all media items updated on the provided day, (RFC 3339, time ignored).
  * contentAuthoredSinceDate `string`: Find all media items authored since the provided day (RFC 3339, time ignored).
  * contentAuthoredBeforeDate `string`: Find all media items authored before the provided day (RFC 3339, time ignored).
  * contentAuthoredInRange `string`: Find all media items authored between the provided start and end days (RFC 3339, comma separated, time ignored).
  * contentUpdatedSinceDate `string`: Find all media items updated since the provided day (RFC 3339, time ignored).
  * contentUpdatedBeforeDate `string`: Find all media items updated before the provided day (RFC 3339, time ignored).
  * contentUpdatedInRange `string`: Find all media items updated between the provided start and end days (RFC 3339, comma separated, time ignored).
  * contentPublishedSinceDate `string`: Find all media items published since the provided day (RFC 3339, time ignored).
  * contentPublishedBeforeDate `string`: Find all media items published before the provided day (RFC 3339, time ignored).
  * contentPublishedInRange `string`: Find all media items published between the provided start and end days (RFC 3339, comma separated, time ignored).
  * contentReviewedSinceDate `string`: Find all media items reviewed since the provided day (RFC 3339, time ignored).
  * contentReviewedBeforeDate `string`: Find all media items reviewed before the provided day (RFC 3339, time ignored).
  * contentReviewedInRange `string`: Find all media items reviewed between the provided start and end days (RFC 3339, comma separated, time ignored).
  * syndicationCapturedSinceDate `string`: Find all media items authored since the provided day (RFC 3339, time ignored).
  * syndicationCapturedBeforeDate `string`: Find all media items authored before the provided day (RFC 3339, time ignored).
  * syndicationCapturedInRange `string`: Find all media items authored between the provided start and end days (RFC 3339, comma separated, time ignored).
  * syndicationUpdatedSinceDate `string`: Find all media items updated since the provided day, (RFC 3339, time ignored).
  * syndicationUpdatedBeforeDate `string`: Find all media items updated before the provided day, (RFC 3339, time ignored).
  * syndicationUpdatedInRange `string`: Find all media items updated between the provided start and end days, (RFC 3339, comma separated, time ignored).
  * syndicationVisibleSinceDate `string`: Find all media items visible since the provided day, (RFC 3339, time ignored).
  * syndicationVisibleBeforeDate `string`: Find all media items visible before the provided day, (RFC 3339, time ignored).
  * syndicationVisibleInRange `string`: Find all media items visible between the provided start and end days, (RFC 3339, comma separated, time ignored).
  * languageId `integer`: Find all media items written in the language specified by Id.
  * languageName `string`: Find all media items written in the language specified by name, case insensitive.
  * languageIsoCode `string`: Find all media items written in the language specified by 639-2 isoCode , case insensitive.
  * hash `string`: Find all media items which match the provided hash, case insensitive.
  * hashContains `string`: Find all media items which match the provided partial hash, case insensitive.
  * sourceId `integer`: Find all media items that belong to the source specified by Id.
  * sourceName `string`: Find all media items that belong to the source specified by name, case insensitive.
  * sourceNameContains `string`: Find all media items that belong to the source specified by partial name, case insensitive.
  * sourceAcronym `string`: Find all media items that belong to the source specified by acronym, case insensitive.
  * sourceAcronymContains `string`: Find all media items that belong to the source specified by partial acronym, case insensitive.
  * tagIds `string`: Find only media items tagged with the specified tag Ids.
  * restrictToSet `string`: Find only media from within the supplied list of Ids.
  * createdBy `string`: Find all media items containing the createdBy value.

#### Output
* output [MediaItems](#mediaitems)

### getFeaturedMedia
Get the list of featured content in the syndication system


```js
hhs_gov.getFeaturedMedia({}, context)
```

#### Input
* input `object`
  * sort `string`: * Set of fields to sort the records by.
  * max `integer`: The maximum number of records to return.
  * offset `integer`: How many records to offset the query by.

#### Output
* output `string`

### getMostPopularMedia
Returns the list of MediaItems with the highest ratings.


```js
hhs_gov.getMostPopularMedia({}, context)
```

#### Input
* input `object`
  * max `integer`: The maximum number of records to return
  * offset `integer`: The offset of the records set to return for pagination.

#### Output
* output [MediaItems](#mediaitems)

### searchMedia
Returns the list of MediaItems matching the search query 'q'.<p>The search query 'q' is a Lucene query.<br>The syntax for a Lucene query can be found <a href="http://lucene.apache.org/core/2_9_4/queryparsersyntax.html">here</a>


```js
hhs_gov.searchMedia({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: The search query supplied by the user
  * max `integer`: The maximum number of records to return
  * offset `integer`: The offset of the records set to return for pagination.

#### Output
* output [MediaItems](#mediaitems)

### getMediaById
Returns the MediaItem identified by the 'id'.


```js
hhs_gov.getMediaById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the record to look up

#### Output
* output [MediaItems](#mediaitems)

### getMediaContentById
Returns the raw content (html, image, etc...) for the MediaItem identified by the 'id'.


```js
hhs_gov.getMediaContentById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the media to show content for.
  * calledByBuild `boolean`: The method that called this method

#### Output
* output `string`

### getMediaEmbedById
Returns the javascript or iframe embed code for the MediaItem identified by 'id'.


```js
hhs_gov.getMediaEmbedById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the media to get embed code for.
  * flavor `string`: Currently supports 'iframe', defaults to 'javascript'.
  * width `integer`: The width of the generated iframe.
  * height `integer`: The height of the generated iframe.
  * iframeName `string`: The name of the iframe element
  * excludeJquery `boolean`: Should a reference to the JQuery Library be omitted?
  * excludeDiv `boolean`: Should the div to insert content into be omitted?
  * divId `string`: Should the div to insert content into have a specific name?
  * displayMethod `string`: Method used to render an html request. Accepts one: [mv, list, feed]

#### Output
* output [EmbedCode](#embedcode)

### getMediaPreviewById
Returns the JPG preview, where applicable, for the MediaItem identified by the 'id'.


```js
hhs_gov.getMediaPreviewById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the media to get a preview for.

#### Output
* output [MediaItems](#mediaitems)

### getMediaRatingsById
Get the Ratings (number of 'likes') for the MediaItem identified by the 'id'.


```js
hhs_gov.getMediaRatingsById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the media item to 'like'.

#### Output
* output [Ratings](#ratings)

### getRelatedMediaById
Returns the list of MediaItems related to the MediaItem identified by the 'id'.


```js
hhs_gov.getRelatedMediaById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the media item to get related media for
  * max `integer`: The maximum number of records to return
  * offset `integer`: The offset of the records set to return for pagination.
  * sort `string`: Which field to sort the records by.

#### Output
* output [MediaItems](#mediaitems)

### getMediaSyndicateById
Returns the syndicated content for a given MediaItem in the specified 'format' (HTML or JSON).


```js
hhs_gov.getMediaSyndicateById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the media to show embed code for.
  * cssClass `string`: The css class to target for extraction.
  * stripStyles `boolean`: Remove in-line styles from content.
  * stripScripts `boolean`: Remove script tags from content.
  * stripImages `boolean`: Remove image tags from content.
  * stripBreaks `boolean`: Remove break tags from content.
  * stripClasses `boolean`: Remove class attributes from content (except 'syndicate').
  * font-size `integer`: Set font size (in points) of p, div, and span tags.
  * imageFloat `string`: Accepts valid CSS float options, such as 'left' or 'right'. Will inject a style into the content before rendering.
  * imageMargin `string`: Accepts 4 CSV values representing pixel sizes of margin similar to CSS. Default format is 'north,east,south,west' - for example '0,10,10,0' would put a 10 pixel margin on the right and bottom sides of an image. Will inject a style into the content before rendering.
  * autoplay `boolean`: If content is a video, the embeded video will auto play when loaded.
  * rel `boolean`: If content is a video, related items will be shown at the end of playback.

#### Output
* output [SyndicatedMediaItems](#syndicatedmediaitems)

### getMediaThumbnailById
Returns the JPG thumbnail, where applicable, for the MediaItem identified by the 'id'.


```js
hhs_gov.getMediaThumbnailById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the media to get a thumbnail for.

#### Output
* output `string`

### getMediaYoutubeMetaDataById
Returns the Youtube metadata, where applicable, for the MediaItem identified by the 'id'.


```js
hhs_gov.getMediaYoutubeMetaDataById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the video to show meta data for.

#### Output
* output [YoutubeMetadata](#youtubemetadata)

### getMediaTypes
Returns the list of available MediaTypes.


```js
hhs_gov.getMediaTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [MediaTypes](#mediatypes)

### getSources
Returns the list of Sources.


```js
hhs_gov.getSources({}, context)
```

#### Input
* input `object`
  * max `integer`: The maximum number of records to return
  * offset `integer`: The offset of the records set to return for pagination
  * sort `string`: * Set of fields to sort the records by.

#### Output
* output [Sources](#sources)

### getSourceById
Returns the Source identified by the 'id'.


```js
hhs_gov.getSourceById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the source to look up

#### Output
* output [Sources](#sources)

### resources.sources.id.syndicate.json.get
Renders the list of MediaItems associated with the Source identified by the 'id'.


```js
hhs_gov.resources.sources.id.syndicate.json.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the record to look up
  * displayMethod `string`: Method used to render an html request. Accepts one: [mv, list, feed]

#### Output
* output [MediaItems](#mediaitems)

### getTags
Returns the list of Tags matching the specified query parameters in the specified 'format'.


```js
hhs_gov.getTags({}, context)
```

#### Input
* input `object`
  * sort `string`: The name of the property to which sorting will be applied
  * max `integer`: The maximum number of records to return
  * offset `integer`: Return records starting at the offset index.
  * name `string`: Return tags[s] matching the supplied name
  * nameContains `string`: Return tags which contain the supplied partial name.
  * mediaId `integer`: Return tags associated with the supplied media id.
  * typeId `integer`: Return tags belonging to the supplied tag type id.
  * typeName `string`: Return tags belonging to the supplied tag type name.

#### Output
* output [Tags](#tags)

### getTagLanguages
Returns the list of TagLanguages


```js
hhs_gov.getTagLanguages(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [TagLanguages](#taglanguages)

### getTagTypes
Returns the list of TagTypes


```js
hhs_gov.getTagTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [TagTypes](#tagtypes)

### getTagById
Returns the Tag identified by the 'id' in the specified 'format'.


```js
hhs_gov.getTagById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the record to look up

#### Output
* output [Tags](#tags)

### getMediaByTagId
Returns the list of MediaItems associated with the Tag identified by the 'id'.


```js
hhs_gov.getMediaByTagId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the record to look up
  * max `integer`: The maximum number of records to return
  * offset `integer`: The offset of the records set to return for pagination
  * sort `string`: The name of the property to which sorting will be applied

#### Output
* output [MediaItems](#mediaitems)

### getRelatedTagsById
Returns the list of Tags related to the Tag identified by the 'id' in the specified format.


```js
hhs_gov.getRelatedTagsById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the tag to look up
  * max `integer`: The maximum number of records to return
  * offset `integer`: The offset of the records set to return for pagination
  * sort `string`: The name of the property to which sorting will be applied

#### Output
* output [Tags](#tags)

### resources.tags.id.syndicate.json.get
Renders the list of MediaItems associated with the Tag identified by the 'id'.


```js
hhs_gov.resources.tags.id.syndicate.json.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the record to look up
  * displayMethod `string`: Method used to render an html request. Accepts one: [mv, list, feed]

#### Output
* output [MediaItems](#mediaitems)

### getUserMediaList
Get a specific user media list by 'id'.


```js
hhs_gov.getUserMediaList({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the record to look up
  * displayMethod `string`: Method used to render an html request. Accepts one: [mv, list, feed]

#### Output
* output [MediaItems](#mediaitems)



## Definitions

### AlternateImage
* AlternateImage `object`
  * height `integer`
  * id **required** `integer`
  * name `string`
  * url **required** `string`
  * width `integer`

### ApiResponse
* ApiResponse `object`
  * callback **required** `string`
  * meta **required** [Meta](#meta)
  * results **required** `array`
    * items [MediaItem](#mediaitem)

### Campaign
* Campaign `object`
  * contactEmail `string`
  * description `string`
  * endDate `string`
  * id **required** `integer`
  * mediaItems `array`
    * items [MediaItem](#mediaitem)
  * name **required** `string`
  * source [Source](#source)
  * startDate **required** `string`

### Campaigns
* Campaigns `object`
  * callback **required** `string`
  * meta **required** [Meta](#meta)
  * results **required** `array`
    * items [Campaign](#campaign)

### Collection
* Collection `object`
  * campaigns `array`
    * items [Campaign](#campaign)
  * dateContentAuthored `string`
  * dateContentPublished `string`
  * dateContentReviewed `string`
  * dateContentUpdated `string`
  * dateSyndicationCaptured `string`
  * dateSyndicationUpdated `string`
  * dateSyndicationVisible `string`
  * description `string`
  * externalGuid `string`
  * hash `string`
  * id `integer`
  * language [Language](#language)
  * mediaItems `array`
    * items [MediaItem](#mediaitem)
  * name `string`
  * source [Source](#source)
  * sourceUrl `string`

### EmbedCode
* EmbedCode `object`
  * callback **required** `string`
  * meta **required** [Meta](#meta)
  * results **required** `array`
    * items [Snippet](#snippet)

### Html
* Html `object`
  * createdBy **required** `string`
  * customAttributionUrl `string`
  * customPreviewUrl `string`
  * customThumbnailUrl `string`
  * dateContentAuthored `string`
  * dateContentPublished `string`
  * dateContentReviewed `string`
  * dateContentUpdated `string`
  * dateSyndicationCaptured **required** `string`
  * dateSyndicationUpdated **required** `string`
  * dateSyndicationVisible **required** `string`
  * description `string`
  * extendedAttributes `object`
  * externalGuid `string`
  * foreignSyndicationAPIUrl **required** `string`
  * hash `string`
  * id **required** `integer`
  * language **required** [Language](#language)
  * mediaType **required** `string`
  * name **required** `string`
  * source **required** [Source](#source)
  * sourceUrl **required** `string`
  * targetUrl `string`

### Image
* Image `object`
  * altText **required** `string`
  * createdBy **required** `string`
  * customAttributionUrl `string`
  * customPreviewUrl `string`
  * customThumbnailUrl `string`
  * dateContentAuthored `string`
  * dateContentPublished `string`
  * dateContentReviewed `string`
  * dateContentUpdated `string`
  * dateSyndicationCaptured **required** `string`
  * dateSyndicationUpdated **required** `string`
  * dateSyndicationVisible **required** `string`
  * description `string`
  * extendedAttributes `object`
  * externalGuid `string`
  * foreignSyndicationAPIUrl **required** `string`
  * hash `string`
  * height **required** `integer`
  * id **required** `integer`
  * imageFormat **required** `string`
  * language **required** [Language](#language)
  * mediaType **required** `string`
  * name **required** `string`
  * source **required** [Source](#source)
  * sourceUrl **required** `string`
  * targetUrl `string`
  * width **required** `integer`

### Infographic
* Infographic `object`
  * altText **required** `string`
  * createdBy **required** `string`
  * customAttributionUrl `string`
  * customPreviewUrl `string`
  * customThumbnailUrl `string`
  * dateContentAuthored `string`
  * dateContentPublished `string`
  * dateContentReviewed `string`
  * dateContentUpdated `string`
  * dateSyndicationCaptured **required** `string`
  * dateSyndicationUpdated **required** `string`
  * dateSyndicationVisible **required** `string`
  * description `string`
  * extendedAttributes `object`
  * externalGuid `string`
  * foreignSyndicationAPIUrl **required** `string`
  * hash `string`
  * height **required** `integer`
  * id **required** `integer`
  * imageFormat **required** `string`
  * language **required** [Language](#language)
  * mediaType **required** `string`
  * name **required** `string`
  * source **required** [Source](#source)
  * sourceUrl **required** `string`
  * targetUrl `string`
  * width **required** `integer`

### Language
* Language `object`
  * id **required** `integer`
  * isActive **required** `boolean`
  * isoCode **required** `string`
  * name **required** `string`

### Languages
* Languages `object`
  * callback **required** `string`
  * meta **required** [Meta](#meta)
  * results **required** `array`
    * items [Language](#language)

### Likes
* Likes `object`
  * likes **required** `integer`

### MediaItem
* MediaItem `object`
  * createdBy **required** `string`
  * customAttributionUrl `string`
  * customPreviewUrl `string`
  * customThumbnailUrl `string`
  * dateContentAuthored `string`
  * dateContentPublished `string`
  * dateContentReviewed `string`
  * dateContentUpdated `string`
  * dateSyndicationCaptured **required** `string`
  * dateSyndicationUpdated **required** `string`
  * dateSyndicationVisible **required** `string`
  * description `string`
  * extendedAttributes `object`
  * externalGuid `string`
  * foreignSyndicationAPIUrl **required** `string`
  * hash `string`
  * id **required** `integer`
  * language **required** [Language](#language)
  * mediaType **required** `string`
  * name **required** `string`
  * source **required** [Source](#source)
  * sourceUrl **required** `string`
  * targetUrl `string`

### MediaItems
* MediaItems `object`
  * callback **required** `string`
  * meta **required** [Meta](#meta)
  * results **required** `array`
    * items [MediaItem](#mediaitem)

### MediaType
* MediaType `object`
  * description **required** `string`
  * name **required** `string`

### MediaTypes
* MediaTypes `object`
  * callback **required** `string`
  * meta **required** [Meta](#meta)
  * results **required** `array`
    * items [MediaType](#mediatype)

### Message
* Message `object`
  * errorCode `string`
  * errorDetail `string`
  * errorMessage `string`
  * userMessage **required** `string`

### Meta
* Meta `object`
  * messages **required** `array`
    * items [Message](#message)
  * pagination **required** [Pagination](#pagination)
  * status **required** `integer`

### PDF
* PDF `object`
  * createdBy **required** `string`
  * customAttributionUrl `string`
  * customPreviewUrl `string`
  * customThumbnailUrl `string`
  * dateContentAuthored `string`
  * dateContentPublished `string`
  * dateContentReviewed `string`
  * dateContentUpdated `string`
  * dateSyndicationCaptured **required** `string`
  * dateSyndicationUpdated **required** `string`
  * dateSyndicationVisible **required** `string`
  * description `string`
  * extendedAttributes `object`
  * externalGuid `string`
  * foreignSyndicationAPIUrl **required** `string`
  * hash `string`
  * id **required** `integer`
  * language **required** [Language](#language)
  * mediaType **required** `string`
  * name **required** `string`
  * source **required** [Source](#source)
  * sourceUrl **required** `string`
  * targetUrl `string`

### Pagination
* Pagination `object`
  * count **required** `integer`
  * currentUrl **required** `string`
  * max **required** `integer`
  * nextUrl `string`
  * offset **required** `integer`
  * pageNum **required** `integer`
  * previousUrl `string`
  * sort **required** `string`
  * total **required** `integer`
  * totalPages **required** `integer`

### Ratings
* Ratings `object`
  * callback **required** `string`
  * meta **required** [Meta](#meta)
  * results **required** `array`
    * items [Likes](#likes)

### Resource
* Resource `object`
  * id `integer`
  * name **required** `string`

### ResourceList
* ResourceList `object`
  * items **required** `array`
    * items [Resource](#resource)
  * mediaType **required** `string`

### ResourceLists
* ResourceLists `object`
  * alternateImages [ResourceList](#resourcelist)
  * campaigns [ResourceList](#resourcelist)
  * collections [ResourceList](#resourcelist)
  * htmls [ResourceList](#resourcelist)
  * images [ResourceList](#resourcelist)
  * infographics [ResourceList](#resourcelist)
  * languages [ResourceList](#resourcelist)
  * socialMedias [ResourceList](#resourcelist)
  * sources [ResourceList](#resourcelist)
  * tagTypes [ResourceList](#resourcelist)
  * tags [ResourceList](#resourcelist)
  * videos [ResourceList](#resourcelist)

### Resources
* Resources `object`
  * callback **required** `string`
  * meta **required** [Meta](#meta)
  * results **required** `array`
    * items [ResourceLists](#resourcelists)

### Snippet
* Snippet `object`
  * snippet **required** `string`

### Source
* Source `object`
  * acronym **required** `string`
  * contactEmail `string`
  * id **required** `integer`
  * largeLogoUrl `string`
  * name **required** `string`
  * smallLogoUrl `string`
  * websiteUrl **required** `string`

### Sources
* Sources `object`
  * callback **required** `string`
  * meta **required** [Meta](#meta)
  * results **required** `array`
    * items [Source](#source)

### SyndicatedMediaItem
* SyndicatedMediaItem `object`
  * content `string`
  * contentEncoding `string`
  * contentType `string`
  * description `string`
  * id `integer`
  * mediaType `string`
  * name `string`
  * text `string`

### SyndicatedMediaItems
* SyndicatedMediaItems `object`
  * callback **required** `string`
  * meta **required** [Meta](#meta)
  * results **required** `array`
    * items [SyndicatedMediaItem](#syndicatedmediaitem)

### Tag
* Tag `object`
  * id **required** `integer`
  * language **required** [Language](#language)
  * name **required** `string`
  * type **required** [TagType](#tagtype)

### TagLanguage
* TagLanguage `object`
  * id **required** `integer`
  * isoCode **required** `string`
  * name **required** `string`

### TagLanguages
* TagLanguages `object`
  * callback **required** `string`
  * meta **required** [Meta](#meta)
  * results **required** `array`
    * items [TagLanguage](#taglanguage)

### TagType
* TagType `object`
  * description `string`
  * id **required** `integer`
  * name **required** `string`

### TagTypes
* TagTypes `object`
  * callback **required** `string`
  * meta **required** [Meta](#meta)
  * results **required** `array`
    * items [TagType](#tagtype)

### Tags
* Tags `object`
  * callback **required** `string`
  * meta **required** [Meta](#meta)
  * results **required** `array`
    * items [Tag](#tag)

### Video
* Video `object`
  * createdBy **required** `string`
  * customAttributionUrl `string`
  * customPreviewUrl `string`
  * customThumbnailUrl `string`
  * dateContentAuthored `string`
  * dateContentPublished `string`
  * dateContentReviewed `string`
  * dateContentUpdated `string`
  * dateSyndicationCaptured **required** `string`
  * dateSyndicationUpdated **required** `string`
  * dateSyndicationVisible **required** `string`
  * description `string`
  * duration **required** `integer`
  * extendedAttributes `object`
  * externalGuid `string`
  * foreignSyndicationAPIUrl **required** `string`
  * hash `string`
  * height `integer`
  * id **required** `integer`
  * language **required** [Language](#language)
  * mediaType **required** `string`
  * name **required** `string`
  * source **required** [Source](#source)
  * sourceUrl **required** `string`
  * targetUrl `string`
  * width `integer`

### YoutubeMetadata
* YoutubeMetadata `object`
  * callback **required** `string`
  * meta **required** [Meta](#meta)
  * results **required** `array`
    * items `object`


