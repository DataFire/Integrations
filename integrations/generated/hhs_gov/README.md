# @datafire/hhs_gov

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


## Operation: getResources
Returns the list of Resources matching the search query 'q'.<p>The search query 'q' is a Lucene query.<br>The syntax for a Lucene query can be found <a href="http://lucene.apache.org/core/2_9_4/queryparsersyntax.html">here</a>.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "q": {
      "type": "string",
      "description": "The search query supplied by the user"
    }
  },
  "additionalProperties": false,
  "required": [
    "q"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Resources"
}
```
## Operation: getCampaigns
Returns the list of Campaigns.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "max": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of records to return"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "The offset of the records set to return for pagination"
    },
    "sort": {
      "type": "string",
      "description": "* Set of fields to sort the records by."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Campaigns"
}
```
## Operation: getCampaignById
Returns the Campaign identified by the 'id'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the record to look up"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Campaigns"
}
```
## Operation: getMediaByCampaignId
Returns the list of MediaItems for the Campaign identified by the 'id'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the campaign to find media items for"
    },
    "max": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of records to return"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "The offset of the records set to return for pagination"
    },
    "sort": {
      "type": "string",
      "description": "The name of the property to which sorting will be applied"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaItems"
}
```
## Operation: resources.campaigns.id.syndicate.json.get
Renders the list of MediaItems associated with the Campaign identified by the 'id'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the record to look up"
    },
    "displayMethod": {
      "type": "string",
      "description": "Method used to render an html request. Accepts one: [mv, list, feed]"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaItems"
}
```
## Operation: getLanguages
Returns the list Languages.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "max": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of records to return"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "The offset of the records set to return for pagination"
    },
    "sort": {
      "type": "string",
      "description": "* Set of fields to sort the records by."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Languages"
}
```
## Operation: getLanguageById
Returns the Language identified by the 'id'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the language to look up"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Languages"
}
```
## Operation: getMedia
Returns the list of MediaItems matching the specified query parameters.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "max": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of records to return"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "The offset of the records set to return for pagination."
    },
    "sort": {
      "type": "string",
      "description": "* Set of fields to sort the records by."
    },
    "order": {
      "type": "string",
      "description": "* The ascending or descending order."
    },
    "mediaTypes": {
      "type": "string",
      "description": "Find all media items belonging to the specified media type[s]."
    },
    "name": {
      "type": "string",
      "description": "Find all media items containing the provided name, case insensitive."
    },
    "collectionId": {
      "type": "integer",
      "format": "int32",
      "description": "Restrict filtering to media items in a specific collection."
    },
    "nameContains": {
      "type": "string",
      "description": "Find all media items containing the partial name, case insensitive."
    },
    "descriptionContains": {
      "type": "string",
      "description": "Find all media items containing the provided partial description, case insensitive."
    },
    "sourceUrl": {
      "type": "string",
      "description": "Find all media items which have the provided sourceUrl, case insensitive."
    },
    "sourceUrlContains": {
      "type": "string",
      "description": "Find all media items which contain the provided partial sourceUrl, case insensitive."
    },
    "customThumbnailUrl": {
      "type": "string",
      "description": "Find all media items which have the provided customThumbnailUrl, case insensitive."
    },
    "customThumbnailUrlContains": {
      "type": "string",
      "description": "Find all media items which contain the provided partial customThumbnailUrl, case insensitive."
    },
    "dateContentAuthored": {
      "type": "string",
      "format": "date",
      "description": "Find all media items authored on the provided day (RFC 3339, time ignored)."
    },
    "dateContentUpdated": {
      "type": "string",
      "format": "date",
      "description": "Find all media items updated on the provided day (RFC 3339, time ignored)."
    },
    "dateContentPublished": {
      "type": "string",
      "format": "date",
      "description": "Find all media items published on the provided day (RFC 3339, time ignored)."
    },
    "dateContentReviewed": {
      "type": "string",
      "format": "date",
      "description": "Find all media items reviewed on the provided day (RFC 3339, time ignored)."
    },
    "dateSyndicationCaptured": {
      "type": "string",
      "format": "date",
      "description": "Find all media items authored on the provided day (RFC 3339, time ignored)."
    },
    "dateSyndicationUpdated": {
      "type": "string",
      "format": "date",
      "description": "Find all media items updated on the provided day, (RFC 3339, time ignored)."
    },
    "contentAuthoredSinceDate": {
      "type": "string",
      "format": "date",
      "description": "Find all media items authored since the provided day (RFC 3339, time ignored)."
    },
    "contentAuthoredBeforeDate": {
      "type": "string",
      "format": "date",
      "description": "Find all media items authored before the provided day (RFC 3339, time ignored)."
    },
    "contentAuthoredInRange": {
      "type": "string",
      "description": "Find all media items authored between the provided start and end days (RFC 3339, comma separated, time ignored)."
    },
    "contentUpdatedSinceDate": {
      "type": "string",
      "format": "date",
      "description": "Find all media items updated since the provided day (RFC 3339, time ignored)."
    },
    "contentUpdatedBeforeDate": {
      "type": "string",
      "format": "date",
      "description": "Find all media items updated before the provided day (RFC 3339, time ignored)."
    },
    "contentUpdatedInRange": {
      "type": "string",
      "description": "Find all media items updated between the provided start and end days (RFC 3339, comma separated, time ignored)."
    },
    "contentPublishedSinceDate": {
      "type": "string",
      "format": "date",
      "description": "Find all media items published since the provided day (RFC 3339, time ignored)."
    },
    "contentPublishedBeforeDate": {
      "type": "string",
      "format": "date",
      "description": "Find all media items published before the provided day (RFC 3339, time ignored)."
    },
    "contentPublishedInRange": {
      "type": "string",
      "description": "Find all media items published between the provided start and end days (RFC 3339, comma separated, time ignored)."
    },
    "contentReviewedSinceDate": {
      "type": "string",
      "format": "date",
      "description": "Find all media items reviewed since the provided day (RFC 3339, time ignored)."
    },
    "contentReviewedBeforeDate": {
      "type": "string",
      "format": "date",
      "description": "Find all media items reviewed before the provided day (RFC 3339, time ignored)."
    },
    "contentReviewedInRange": {
      "type": "string",
      "description": "Find all media items reviewed between the provided start and end days (RFC 3339, comma separated, time ignored)."
    },
    "syndicationCapturedSinceDate": {
      "type": "string",
      "format": "date",
      "description": "Find all media items authored since the provided day (RFC 3339, time ignored)."
    },
    "syndicationCapturedBeforeDate": {
      "type": "string",
      "format": "date",
      "description": "Find all media items authored before the provided day (RFC 3339, time ignored)."
    },
    "syndicationCapturedInRange": {
      "type": "string",
      "description": "Find all media items authored between the provided start and end days (RFC 3339, comma separated, time ignored)."
    },
    "syndicationUpdatedSinceDate": {
      "type": "string",
      "format": "date",
      "description": "Find all media items updated since the provided day, (RFC 3339, time ignored)."
    },
    "syndicationUpdatedBeforeDate": {
      "type": "string",
      "format": "date",
      "description": "Find all media items updated before the provided day, (RFC 3339, time ignored)."
    },
    "syndicationUpdatedInRange": {
      "type": "string",
      "description": "Find all media items updated between the provided start and end days, (RFC 3339, comma separated, time ignored)."
    },
    "syndicationVisibleSinceDate": {
      "type": "string",
      "format": "date",
      "description": "Find all media items visible since the provided day, (RFC 3339, time ignored)."
    },
    "syndicationVisibleBeforeDate": {
      "type": "string",
      "format": "date",
      "description": "Find all media items visible before the provided day, (RFC 3339, time ignored)."
    },
    "syndicationVisibleInRange": {
      "type": "string",
      "description": "Find all media items visible between the provided start and end days, (RFC 3339, comma separated, time ignored)."
    },
    "languageId": {
      "type": "integer",
      "format": "int64",
      "description": "Find all media items written in the language specified by Id."
    },
    "languageName": {
      "type": "string",
      "description": "Find all media items written in the language specified by name, case insensitive."
    },
    "languageIsoCode": {
      "type": "string",
      "description": "Find all media items written in the language specified by 639-2 isoCode , case insensitive."
    },
    "hash": {
      "type": "string",
      "description": "Find all media items which match the provided hash, case insensitive."
    },
    "hashContains": {
      "type": "string",
      "description": "Find all media items which match the provided partial hash, case insensitive."
    },
    "sourceId": {
      "type": "integer",
      "format": "int64",
      "description": "Find all media items that belong to the source specified by Id."
    },
    "sourceName": {
      "type": "string",
      "description": "Find all media items that belong to the source specified by name, case insensitive."
    },
    "sourceNameContains": {
      "type": "string",
      "description": "Find all media items that belong to the source specified by partial name, case insensitive."
    },
    "sourceAcronym": {
      "type": "string",
      "description": "Find all media items that belong to the source specified by acronym, case insensitive."
    },
    "sourceAcronymContains": {
      "type": "string",
      "description": "Find all media items that belong to the source specified by partial acronym, case insensitive."
    },
    "tagIds": {
      "type": "string",
      "description": "Find only media items tagged with the specified tag Ids."
    },
    "restrictToSet": {
      "type": "string",
      "description": "Find only media from within the supplied list of Ids."
    },
    "createdBy": {
      "type": "string",
      "description": "Find all media items containing the createdBy value."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaItems"
}
```
## Operation: getFeaturedMedia
Get the list of featured content in the syndication system

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "sort": {
      "type": "string",
      "description": "* Set of fields to sort the records by."
    },
    "max": {
      "type": "integer",
      "format": "int64",
      "description": "The maximum number of records to return."
    },
    "offset": {
      "type": "integer",
      "format": "int64",
      "description": "How many records to offset the query by."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: getMostPopularMedia
Returns the list of MediaItems with the highest ratings.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "max": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of records to return"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "The offset of the records set to return for pagination."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaItems"
}
```
## Operation: searchMedia
Returns the list of MediaItems matching the search query 'q'.<p>The search query 'q' is a Lucene query.<br>The syntax for a Lucene query can be found <a href="http://lucene.apache.org/core/2_9_4/queryparsersyntax.html">here</a>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "q": {
      "type": "string",
      "description": "The search query supplied by the user"
    },
    "max": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of records to return"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "The offset of the records set to return for pagination."
    }
  },
  "additionalProperties": false,
  "required": [
    "q"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaItems"
}
```
## Operation: getMediaById
Returns the MediaItem identified by the 'id'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the record to look up"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaItems"
}
```
## Operation: getMediaContentById
Returns the raw content (html, image, etc...) for the MediaItem identified by the 'id'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the media to show content for."
    },
    "calledByBuild": {
      "type": "boolean",
      "description": "The method that called this method"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: getMediaEmbedById
Returns the javascript or iframe embed code for the MediaItem identified by 'id'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the media to get embed code for."
    },
    "flavor": {
      "type": "string",
      "description": "Currently supports 'iframe', defaults to 'javascript'."
    },
    "width": {
      "type": "integer",
      "format": "int32",
      "description": "The width of the generated iframe."
    },
    "height": {
      "type": "integer",
      "format": "int32",
      "description": "The height of the generated iframe."
    },
    "iframeName": {
      "type": "string",
      "description": "The name of the iframe element"
    },
    "excludeJquery": {
      "type": "boolean",
      "description": "Should a reference to the JQuery Library be omitted?"
    },
    "excludeDiv": {
      "type": "boolean",
      "description": "Should the div to insert content into be omitted?"
    },
    "divId": {
      "type": "string",
      "description": "Should the div to insert content into have a specific name?"
    },
    "displayMethod": {
      "type": "string",
      "description": "Method used to render an html request. Accepts one: [mv, list, feed]"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EmbedCode"
}
```
## Operation: getMediaPreviewById
Returns the JPG preview, where applicable, for the MediaItem identified by the 'id'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the media to get a preview for."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaItems"
}
```
## Operation: getMediaRatingsById
Get the Ratings (number of 'likes') for the MediaItem identified by the 'id'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The ID of the media item to 'like'."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Ratings"
}
```
## Operation: getRelatedMediaById
Returns the list of MediaItems related to the MediaItem identified by the 'id'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the media item to get related media for"
    },
    "max": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of records to return"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "The offset of the records set to return for pagination."
    },
    "sort": {
      "type": "string",
      "description": "Which field to sort the records by."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaItems"
}
```
## Operation: getMediaSyndicateById
Returns the syndicated content for a given MediaItem in the specified 'format' (HTML or JSON).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the media to show embed code for."
    },
    "cssClass": {
      "type": "string",
      "description": "The css class to target for extraction."
    },
    "stripStyles": {
      "type": "boolean",
      "description": "Remove in-line styles from content."
    },
    "stripScripts": {
      "type": "boolean",
      "description": "Remove script tags from content."
    },
    "stripImages": {
      "type": "boolean",
      "description": "Remove image tags from content."
    },
    "stripBreaks": {
      "type": "boolean",
      "description": "Remove break tags from content."
    },
    "stripClasses": {
      "type": "boolean",
      "description": "Remove class attributes from content (except 'syndicate')."
    },
    "font-size": {
      "type": "integer",
      "format": "int32",
      "description": "Set font size (in points) of p, div, and span tags."
    },
    "imageFloat": {
      "type": "string",
      "description": "Accepts valid CSS float options, such as 'left' or 'right'. Will inject a style into the content before rendering."
    },
    "imageMargin": {
      "type": "string",
      "description": "Accepts 4 CSV values representing pixel sizes of margin similar to CSS. Default format is 'north,east,south,west' - for example '0,10,10,0' would put a 10 pixel margin on the right and bottom sides of an image. Will inject a style into the content before rendering."
    },
    "autoplay": {
      "type": "boolean",
      "description": "If content is a video, the embeded video will auto play when loaded."
    },
    "rel": {
      "type": "boolean",
      "description": "If content is a video, related items will be shown at the end of playback."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SyndicatedMediaItems"
}
```
## Operation: getMediaThumbnailById
Returns the JPG thumbnail, where applicable, for the MediaItem identified by the 'id'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the media to get a thumbnail for."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: getMediaYoutubeMetaDataById
Returns the Youtube metadata, where applicable, for the MediaItem identified by the 'id'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the video to show meta data for."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/YoutubeMetadata"
}
```
## Operation: getMediaTypes
Returns the list of available MediaTypes.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaTypes"
}
```
## Operation: getSources
Returns the list of Sources.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "max": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of records to return"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "The offset of the records set to return for pagination"
    },
    "sort": {
      "type": "string",
      "description": "* Set of fields to sort the records by."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Sources"
}
```
## Operation: getSourceById
Returns the Source identified by the 'id'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the source to look up"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Sources"
}
```
## Operation: resources.sources.id.syndicate.json.get
Renders the list of MediaItems associated with the Source identified by the 'id'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the record to look up"
    },
    "displayMethod": {
      "type": "string",
      "description": "Method used to render an html request. Accepts one: [mv, list, feed]"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaItems"
}
```
## Operation: getTags
Returns the list of Tags matching the specified query parameters in the specified 'format'.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "sort": {
      "type": "string",
      "description": "The name of the property to which sorting will be applied"
    },
    "max": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of records to return"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Return records starting at the offset index."
    },
    "name": {
      "type": "string",
      "description": "Return tags[s] matching the supplied name"
    },
    "nameContains": {
      "type": "string",
      "description": "Return tags which contain the supplied partial name."
    },
    "mediaId": {
      "type": "integer",
      "format": "int64",
      "description": "Return tags associated with the supplied media id."
    },
    "typeId": {
      "type": "integer",
      "format": "int64",
      "description": "Return tags belonging to the supplied tag type id."
    },
    "typeName": {
      "type": "string",
      "description": "Return tags belonging to the supplied tag type name."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Tags"
}
```
## Operation: getTagLanguages
Returns the list of TagLanguages

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TagLanguages"
}
```
## Operation: getTagTypes
Returns the list of TagTypes

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TagTypes"
}
```
## Operation: getTagById
Returns the Tag identified by the 'id' in the specified 'format'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the record to look up"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Tags"
}
```
## Operation: getMediaByTagId
Returns the list of MediaItems associated with the Tag identified by the 'id'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the record to look up"
    },
    "max": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of records to return"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "The offset of the records set to return for pagination"
    },
    "sort": {
      "type": "string",
      "description": "The name of the property to which sorting will be applied"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaItems"
}
```
## Operation: getRelatedTagsById
Returns the list of Tags related to the Tag identified by the 'id' in the specified format.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the tag to look up"
    },
    "max": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of records to return"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "The offset of the records set to return for pagination"
    },
    "sort": {
      "type": "string",
      "description": "The name of the property to which sorting will be applied"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Tags"
}
```
## Operation: resources.tags.id.syndicate.json.get
Renders the list of MediaItems associated with the Tag identified by the 'id'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the record to look up"
    },
    "displayMethod": {
      "type": "string",
      "description": "Method used to render an html request. Accepts one: [mv, list, feed]"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaItems"
}
```
## Operation: getUserMediaList
Get a specific user media list by 'id'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the record to look up"
    },
    "displayMethod": {
      "type": "string",
      "description": "Method used to render an html request. Accepts one: [mv, list, feed]"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaItems"
}
```
