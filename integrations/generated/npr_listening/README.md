# @datafire/npr_listening

Client library for NPR Listening Service

## Installation and Usage
```bash
npm install --save @datafire/npr_listening
```
```js
let npr_listening = require('@datafire/npr_listening').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Audio recommendations tailored to a user's preferences

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
npr_listening.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
npr_listening.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### getAggRecommendations
This endpoint provides a list of recent audio items associated with the aggregation along with metadata about the aggregation.


```js
npr_listening.getAggRecommendations({
  "aggId": 0,
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * aggId **required** `integer`: ID of an aggregation such as a program or podcast
  * Authorization **required** `string`: Your access token from the Authorization Service. Should start with `Bearer`, followed by a space, followed by the token.
  * startNum `integer`: The result to start with. Allows paging through the episodes of a podcast or program, with the default, `startNum=0`, being the most recent episode

#### Output
* output [AggregationAudioItemListDocument](#aggregationaudioitemlistdocument)

### getChannels
These channels allow the user to specify a focus for the content returned in the recommendations endpoint.


```js
npr_listening.getChannels({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Your access token from the Authorization Service. Should start with `Bearer`, followed by a space, followed by the token.
  * exploreOnly `boolean`: If set to `true`, this call will return only channels that should be shown in the client's `Explore` view

#### Output
* output [ChannelsDocument](#channelsdocument)

### getHistory
This endpoint provides the list of recently-rated audio recommendations that the logged-in user has consumed. Some rated recommendations are filtered, such as sponsorship and donation.


```js
npr_listening.getHistory({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Your access token from the Authorization Service. Should start with `Bearer`, followed by a space, followed by the token.

#### Output
* output [AudioItemListDocument](#audioitemlistdocument)

### getOrganizationCategory
This endpoint provides a list of recommendations from a category of content from  an organization.


```js
npr_listening.getOrganizationCategory({
  "orgId": 0,
  "category": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * orgId **required** `integer`: ID of an organization, such as an NPR One station
  * category **required** `string` (values: newscast, story, podcast): One of the three categories of content - newscast, story, or podcast
  * Authorization **required** `string`: Your access token from the Authorization Service. Should start with `Bearer`, followed by a space, followed by the token.

#### Output
* output [OrganizationCategoryAudioListDocument](#organizationcategoryaudiolistdocument)

### getOrganizationOverview
This endpoint provides a variety of details about an organization including various lists of recent audio items.


```js
npr_listening.getOrganizationOverview({
  "orgId": 0,
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * orgId **required** `integer`: ID of an organization, such as an NPR One station
  * Authorization **required** `string`: Your access token from the Authorization Service. Should start with `Bearer`, followed by a space, followed by the token.

#### Output
* output [OrganizationOverviewDocument](#organizationoverviewdocument)

### getPromo
Gets the most recently played promo for which the user has neither tapped through the promo or listened to the target story.


```js
npr_listening.getPromo({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Your access token from the Authorization Service. Should start with `Bearer`, followed by a space, followed by the token.

#### Output
* output [AudioItemListDocument](#audioitemlistdocument)

### postRating
This endpoint is the main mechanism for providing feedback from the user to NPR about the recommendations that are obtained from `GET /listening/v2/recommendations`.

A fully-populated link to this endpoint is returned with each individual recommendation and is located in the AudioItemDocument under the `links['recommendations']` object. The query parameters in this link should not be modified.
Be sure to copy and send back the entire ratings object (RatingData), as new fields may be added to it in the future.

This endpoint can return a blank JSON.doc or AudioItemDocument depending on the `recommend=true|false` parameter. The `recommend=true` flag allows this endpoint to both receive ratings and send back recommendations in the same call.


```js
npr_listening.postRating({
  "Authorization": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Your access token from the Authorization Service. Should start with `Bearer`, followed by a space, followed by the token.
  * X-Advertising-ID `string`: A device-specific advertising identifier, if possible. Apple's IDFA is an example.
  * channel `string` (values: npr, followed, recommended, emailstories, emailprograms, lapsedusersemail, ongoing email, newscasts, shows): Determines the focus of the recommendations returned. Channel `npr` is recommended for most use cases.
  * recommend `boolean`: If set to `false`, this call will return a blank document; otherwise it will return a new recommendation object
  * body **required** `array`
    * items [RatingData](#ratingdata)

#### Output
* output [AudioItemListDocument](#audioitemlistdocument)

### getRecommendations
This endpoint returns a list of audio recommendations. It is designed to be used for an initial list of recommendations, and then `POST /v2/ratings?recommend=true` should be used for subsequent requests for recommendations.

A fully-populated link to the ratings endpoint is returned with each individual recommendation and is located in the AudioItemDocument under the `links['recommendations']` object. The query parameters in this link should not be modified.
Be sure to copy and send back the entire ratings object (RatingData), as new fields may be added to it in the future.

A 500 will be returned if there are no eligible remaining recommendations.


```js
npr_listening.getRecommendations({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Your access token from the Authorization Service. Should start with `Bearer`, followed by a space, followed by the token.
  * X-Advertising-ID `string`: A device-specific advertising identifier, if possible. Apple's IDFA is an example.
  * channel `string` (values: npr, followed, recommended, emailstories, emailprograms, lapsedusersemail, ongoing email, newscasts, shows): Determines the focus of the recommendations returned. Channel `npr` is recommended for most use cases.
  * sharedMediaId `string`: This media was shared directly with the user; if provided, the service will add this recommendation to the top of the list
  * notifiedMediaId `string`: The user received a push notification about this media; if provided, the service will add this recommendation to the top of the list

#### Output
* output [AudioItemListDocument](#audioitemlistdocument)

### getSearchRecommendations
In the schema shown below, SearchItemDocument is not an actual type of returned object; the object returned by a search will be either an AggregationAudioItemListDocument or an AudioItemDocument.


```js
npr_listening.getSearchRecommendations({
  "Authorization": "",
  "searchTerms": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Your access token from the Authorization Service. Should start with `Bearer`, followed by a space, followed by the token.
  * searchTerms **required** `string`: Search terms to search on; can include URL-encoded punctuation

#### Output
* output [SearchListDocument](#searchlistdocument)



## Definitions

### AbstractCDocLink
* AbstractCDocLink
  * href **required** `string`: The link to be followed
  * content-type **required** `string`: The MIME type of the response of this link

### AbstractLink
* AbstractLink `object`
  * href **required** `string`: The link to be followed

### Affiliation
* Affiliation `object`: A program (aggregation) that a given user has shown an affiliation with
  * daysSinceLastListen `integer`: The number of days since a user last listened to a story from this aggregation. Absent if user never listened to the aggregation.
  * following **required** `boolean`: Whether or not the user is following the aggregation. When changing affiliation status, the client is expected to toggle this value and then send the entire object back.
  * href **required** `string`: A link to more details about the program from the NPR Story API
  * id **required** `integer`: A unique identifier for the aggregation (program)
  * notif_following `array`: The topic in Firebase Cloud Messaging to which the device should subscribe if it supports notifications and the user wants notifications about the podcasts they follow.
    * items `string`
  * notif_rated `array`: The topic in Firebase Cloud Messaging to which the device should subscribe if it supports notifications and the user wants notifications about the podcasts they have highly rated.
    * items `string`
  * rating `number`: The user's average rating for this affiliation on a scale of 0-1. Absent if user never listened to the aggregation.
  * title `string`: The title for the aggregation (program)

### AggregationAudioItemListDocument
* AggregationAudioItemListDocument: An array of audio recommendations with additional metadata about the aggregation they are associated with
  * attributes **required** `object`: Basic Swagger definitions used across Carbon services.
  * errors **required** `array`: A list of encountered errors, ignored on POST, PUT
    * items `object`
  * href **required** `string`: A URL representation of the resource; should generally be ignored by clients unless noted otherwise
  * items **required** `array`: Basic Swagger definitions used across Carbon services.
    * items `object`
  * links **required** `object`: Basic Swagger definitions used across Carbon services.
  * version **required** `string`: The version of the Collection.Doc+JSON spec being used
  * attributes [AggregationData](#aggregationdata)
  * items `array`: An array of Audio Items (recommendations)
    * items [AudioItemDocument](#audioitemdocument)
  * links [AggregationLinks](#aggregationlinks)

### AggregationData
* AggregationData `object`
  * affiliation **required** `string`: A unique identifier for the aggregation
  * affiliationMeta [Affiliation](#affiliation)
  * description `string`: A short description or teaser
  * provider `string`: The producer of this aggregation
  * station `string`: Deprecated - clients should switch to use provider.
  * title **required** `string`: The title of this aggregation
  * type **required** `string` (values: aggregation): The type of list returned; will always be `aggregation`; useful for parsing search results

### AggregationLinks
* AggregationLinks `object`
  * binge `array`: One or more links to more unrated / unheard recommendations from this aggregation
    * items [OtherLink](#otherlink)
  * image `array`: One or more links to an image, along with metadata for display
    * items [ImageLink](#imagelink)
  * more `array`: One or more links to more episodes for the aggregation
    * items [OtherLink](#otherlink)
  * web `array`: One or more links to a web page for the item
    * items [OtherLink](#otherlink)

### AudioItemData
* AudioItemData `object`
  * album `string`: Album information associated with the media
  * artist `string`: The artist associated with the media
  * audioTitle `string`: For first-party client use only
  * bingeAggId `string`: Indicates which aggregration ID this recommendation was binged from
  * button `string`: The text contents of an action button displayed on the client
  * date `string`: The publication date in ISO-8601 format
  * description `string`: A short description or teaser
  * duration `integer`: The length of the audio content in seconds
  * expires `string`: The media's expiration date in ISO-8601 format
  * geofence [Geofence](#geofence)
  * inFlow `boolean`: Indicates the likelihood of being within a flow, useful for stateful playback buttons
  * label `string`: The record label associated with the media
  * organization [RecommendationOrganization](#recommendationorganization)
  * primary `boolean`: Whether the audio is the primary audio of the story to which it is associated
  * program `string`: The program associated with this media
  * provider `string`: The name of the organization providing this media
  * rating **required** [RatingData](#ratingdata)
  * rationale **required** `string`: A short summary of why this content was recommended
  * skippable **required** `boolean`: Whether the client should allow this content to be skipped
  * slug `string`: A tag or category for this media
  * song `string`: The song title associated with the media
  * streamGuid `string`: The full GUID of the live stream returned within the recommendation
  * title **required** `string`: The title of this media
  * type **required** `string` (values: audio, sponsorship, stationId, intro, donate, featureCardInformational, featureCardNotification, featureCardPromotion, featureCardExternalLink, featureCardAsyncRequest): Help determine how content is displayed; for more information, see <a href='http://dev.npr.org/design/general-specifications/playing-audio/'>our design guidelines</a>
  * uid **required** `string`: The media ID (for use in ratings objects)
  * unavailableText `string`: The text contents to be displayed on the client if no media URLs are available

### AudioItemDocument
* AudioItemDocument
  * attributes **required** `object`: Basic Swagger definitions used across Carbon services.
  * errors **required** `array`: A list of encountered errors, ignored on POST, PUT
    * items `object`
  * href **required** `string`: A URL representation of the resource; should generally be ignored by clients unless noted otherwise
  * items **required** `array`: Basic Swagger definitions used across Carbon services.
    * items `object`
  * links **required** `object`: Basic Swagger definitions used across Carbon services.
  * version **required** `string`: The version of the Collection.Doc+JSON spec being used
  * attributes [AudioItemData](#audioitemdata)
  * items `array`: Not used
    * items `object`
  * links [AudioItemLinks](#audioitemlinks)

### AudioItemLinks
* AudioItemLinks `object`
  * action `array`: One or more links to be trigged by user actions, usually when a button is clicked
    * items [OtherLink](#otherlink)
  * audio `array`: One or more links to audio files for the item
    * items [AudioLink](#audiolink)
  * binge `array`: One or more links that start a flow-based experience focused on the aggregation
    * items [OtherLink](#otherlink)
  * image `array`: One or more links to an image, along with metadata for display
    * items [ImageLink](#imagelink)
  * onramps `array`: One or more shareable links for the item
    * items [OtherLink](#otherlink)
  * ratings `array`: This is an alternate URL to use to POST the ratings JSON. Difference between this and 'recommendations' is that 'ratings' will NOT return back recommendations of audio to play next.
    * items [OtherLink](#otherlink)
  * recommendations `array`: This is the URL that should be POSTed with the ratings JSON when this audio starts to play
    * items [OtherLink](#otherlink)
  * stream-metadata `array`: Links that can be polled to retreive current program metadata for a given stream
    * items [OtherLink](#otherlink)
  * up `array`: One or more links to more details about the program or podcast with which this item is associated
    * items [OtherLink](#otherlink)
  * web `array`: One or more links to a web page for the item
    * items [OtherLink](#otherlink)

### AudioItemListDocument
* AudioItemListDocument
  * attributes **required** `object`: Basic Swagger definitions used across Carbon services.
  * errors **required** `array`: A list of encountered errors, ignored on POST, PUT
    * items `object`
  * href **required** `string`: A URL representation of the resource; should generally be ignored by clients unless noted otherwise
  * items **required** `array`: Basic Swagger definitions used across Carbon services.
    * items `object`
  * links **required** `object`: Basic Swagger definitions used across Carbon services.
  * version **required** `string`: The version of the Collection.Doc+JSON spec being used
  * attributes `object`: Not used
  * items `array`: An array of Audio Items (recommendations)
    * items [AudioItemDocument](#audioitemdocument)
  * links `object`: Not used

### AudioLink
* AudioLink: A link to audio files for the item
  * href **required** `string`: The link to be followed
  * content-type **required** `string` (values: audio/mp3, audio/aac, audio/3gp, application/vnd.apple.mpegurl, audio/x-ms-wax): The MIME type of the response of this link; note that the enumerated list of possible values is not exhaustive and other MIME types could occur. The list should be treated as examples, rather than absolutes.

### Brand
* Brand `object`: Branding information for the organization
  * band `string`: The radio band for the organization if they are a station (AM or FM)
  * call **required** `string`: The call letter for the organization if they are a station
  * frequency `string`: The radio frequency for the organization if they are a station
  * marketCity **required** `string`: The market city for the organization
  * marketState `string`: The market state for the organization
  * name **required** `string`: The name of the organization
  * tagline `string`: The tagline for the organization

### CategoryData
* CategoryData `object`
  * displayType `string` (values: default, show, playable, newscast): How clients should display this channel in the station profile view
  * orgId **required** `string`: The unique identifier for the organization
  * title **required** `string`: The title of this category
  * type **required** `string`: The type of list returned; will always be `category`

### CategoryLinks
* CategoryLinks `object`
  * more `array`: One or more links to more episodes for the aggregation
    * items [OtherLink](#otherlink)

### ChannelData
* ChannelData `object`
  * description **required** `string`: A longer description of what this channel focuses on
  * displayType `string` (values: default, show, playable, newscast): How clients should display this channel in the explore view
  * emptyText `string`: Text for clients to display when the channel contains no recommendations
  * fullName **required** `string`: A short description of what this channel focuses on
  * id **required** `string`: The actual value that should be sent
  * refreshRule `integer`: In the explore view of a client, this field indicates how this channel should be refreshed.  This is an experimental field and subject to change, but for now zero indicates the client should refresh this channel every time a START rating is sent for a type=audio recommendation, while a 1 would indicate it can be refreshed much less often, such as on a 30 minute timer. 2 would indicate even less time to update, say every hour. We are still experimenting on the number of rules necessary and the best implementation for each type of rule. 

### ChannelDocument
* ChannelDocument
  * attributes **required** `object`: Basic Swagger definitions used across Carbon services.
  * errors **required** `array`: A list of encountered errors, ignored on POST, PUT
    * items `object`
  * href **required** `string`: A URL representation of the resource; should generally be ignored by clients unless noted otherwise
  * items **required** `array`: Basic Swagger definitions used across Carbon services.
    * items `object`
  * links **required** `object`: Basic Swagger definitions used across Carbon services.
  * version **required** `string`: The version of the Collection.Doc+JSON spec being used
  * attributes [ChannelData](#channeldata)
  * items `array`: Not used
    * items `object`
  * links `object`: Not used

### ChannelsData
* ChannelsData `object`
  * defaultChannel `string`: The default channel NPR recommends

### ChannelsDocument
* ChannelsDocument
  * attributes **required** `object`: Basic Swagger definitions used across Carbon services.
  * errors **required** `array`: A list of encountered errors, ignored on POST, PUT
    * items `object`
  * href **required** `string`: A URL representation of the resource; should generally be ignored by clients unless noted otherwise
  * items **required** `array`: Basic Swagger definitions used across Carbon services.
    * items `object`
  * links **required** `object`: Basic Swagger definitions used across Carbon services.
  * version **required** `string`: The version of the Collection.Doc+JSON spec being used
  * attributes [ChannelsData](#channelsdata)
  * items `array`: The list of individual channels
    * items [ChannelDocument](#channeldocument)
  * links `object`: Not used

### CollectionDocument
* CollectionDocument `object`: Base Collection.Doc+JSON output
  * attributes **required** `object`: Basic Swagger definitions used across Carbon services.
  * errors **required** `array`: A list of encountered errors, ignored on POST, PUT
    * items `object`
  * href **required** `string`: A URL representation of the resource; should generally be ignored by clients unless noted otherwise
  * items **required** `array`: Basic Swagger definitions used across Carbon services.
    * items `object`
  * links **required** `object`: Basic Swagger definitions used across Carbon services.
  * version **required** `string`: The version of the Collection.Doc+JSON spec being used

### Error
* Error `object`: A serialized version of any error encountered when processing this request
  * code **required** `integer`: The error code
  * debug `string`: Additional debug information if debug mode is turned on
  * text `string`: The error description

### ErrorDocument
* ErrorDocument: A Collection.doc+JSON representation of an error result from an API call
  * attributes **required** `object`: Basic Swagger definitions used across Carbon services.
  * errors **required** `array`: A list of encountered errors, ignored on POST, PUT
    * items `object`
  * href **required** `string`: A URL representation of the resource; should generally be ignored by clients unless noted otherwise
  * items **required** `array`: Basic Swagger definitions used across Carbon services.
    * items `object`
  * links **required** `object`: Basic Swagger definitions used across Carbon services.
  * version **required** `string`: The version of the Collection.Doc+JSON spec being used
  * attributes `object`: Ignore; will be empty for errors
  * errors `array`: A list of encountered errors, ignored on POST, PUT
    * items [Error](#error)
  * items `array`: Ignore; will be empty for errors
    * items `object`
  * links `object`: Ignore; will be empty for errors

### Geofence
* Geofence `object`: The geographic restrictions that should be applied by the client before playing this media
  * countries **required** `array`: The list of countries as ISO 3166-1 abbreviations in which this media should be available if restricted is true
    * items `string`
  * restricted **required** `boolean`: Whether any geographic restrictions should be applied

### ImageLink
* ImageLink: An image, along with metadata for display
  * href **required** `string`: The link to be followed
  * caption `string`: The caption of the image; can be used as alternate text for accessibility
  * content-type **required** `string` (values: image/jpeg, image/png, image/gif): The MIME type of the response of this link; note that the enumerated list of possible values is not exhaustive and other MIME types could occur. The list should be treated as examples, rather than absolutes.
  * image `string`: A unique identifier for the image
  * producer `string`: The producer of the image; should be used for properly attributing the image when it exists
  * provider `string`: The provider of the image; should be used for properly attributing the image when it exists
  * rel `string` (values: logo_square, icon, wide, standard, square, enlargement, custom): The crop type or intended display style/size; note that the enumerated list of possible values is not exhaustive and other values could occur. The list should be treated as examples, rather than absolutes.

### OrganizationCategoryAudioListDocument
* OrganizationCategoryAudioListDocument: An array of a certain category of audio recommendations from a provider
  * attributes **required** `object`: Basic Swagger definitions used across Carbon services.
  * errors **required** `array`: A list of encountered errors, ignored on POST, PUT
    * items `object`
  * href **required** `string`: A URL representation of the resource; should generally be ignored by clients unless noted otherwise
  * items **required** `array`: Basic Swagger definitions used across Carbon services.
    * items `object`
  * links **required** `object`: Basic Swagger definitions used across Carbon services.
  * version **required** `string`: The version of the Collection.Doc+JSON spec being used
  * attributes [CategoryData](#categorydata)
  * items `array`: An array of Audio Items (recommendations)
    * items [AudioItemDocument](#audioitemdocument)
  * links [CategoryLinks](#categorylinks)

### OrganizationOverviewData
* OrganizationOverviewData `object`
  * brand **required** [Brand](#brand)
  * home `boolean`: Flag indicating if the current view is in the user's home network
  * orgId **required** `string`: The unique identifier for the organization
  * type **required** `string` (values: organization): The type of list returned; will always be `organization`

### OrganizationOverviewDocument
* OrganizationOverviewDocument: a variety of details about an organization including various lists of recent audio items
  * attributes **required** `object`: Basic Swagger definitions used across Carbon services.
  * errors **required** `array`: A list of encountered errors, ignored on POST, PUT
    * items `object`
  * href **required** `string`: A URL representation of the resource; should generally be ignored by clients unless noted otherwise
  * items **required** `array`: Basic Swagger definitions used across Carbon services.
    * items `object`
  * links **required** `object`: Basic Swagger definitions used across Carbon services.
  * version **required** `string`: The version of the Collection.Doc+JSON spec being used
  * attributes [OrganizationOverviewData](#organizationoverviewdata)
  * items `array`: A list of separate documents which each include their own list of audio
    * items [OrganizationCategoryAudioListDocument](#organizationcategoryaudiolistdocument)
  * links [OrganizationOverviewLinks](#organizationoverviewlinks)

### OrganizationOverviewLinks
* OrganizationOverviewLinks `object`
  * image `array`: One or more links to an image that can be as for branding (logo and small logo)
    * items [ImageLink](#imagelink)
  * related `array`: One or more links to related web pages for the organization (their twitter feed or facebook page for example)
    * items [OtherLink](#otherlink)
  * web `array`: One or more links to main page for the organization (their homepage for example)
    * items [OtherLink](#otherlink)

### OtherLink
* OtherLink: An individual link from a list of links
  * href **required** `string`: The link to be followed
  * content-type **required** `string` (values: application/json, application/xml, text/html): The MIME type of the response of this link; note that the enumerated list of possible values is not exhaustive and other MIME types could occur. The list should be treated as examples, rather than absolutes.
  * linkText `string`: Text recommended to accompany the link. For example, 'Read Story' with a full story link, or 'Read Transcript' with a transcript link.
  * pollInterval `integer`: When present, the recommended number of seconds between requests to the given URL

### RatingData
* RatingData `object`
  * affiliations `array`: An array of IDs & other data about collections or podcasts the user has ratings for; produced by the server and should be sent back as received; used for tracking program and podcast suggestions
    * items `object`
  * channel **required** `string`: The channel this media item was pulled from
  * cohort **required** `string`: The primary cohort of the current logged-in user
  * duration **required** `integer`: Number of seconds this audio piece is expected to last
  * elapsed **required** `integer`: Number of seconds since the start of playback for this media item, as an integer
  * mediaId **required** `string`: The media id as given by the media object
  * origin **required** `string`: How the recommendation was generated
  * rating **required** `string`: String representing the rating
  * timestamp **required** `string`: ISO-8601 formatted date/time; typically replaced by the client with the actual rating time

### RecommendationOrganization
* RecommendationOrganization `object`: Data about the organization with which this media is associated
  * donateUrl `string`: The URL of the organization's donate page
  * homepageUrl `string`: The URL of the organization's homepage
  * logoUrl `string`: A URL for an image of the organization's logo
  * name **required** `string`: The name of the organization

### SearchItemDocument
* SearchItemDocument `object`: A search result, which is either an AggregationAudioItemListDocument or an AudioItemDocument
  * ifTypeAggregation [AggregationAudioItemListDocument](#aggregationaudioitemlistdocument)
  * ifTypeAudio [AudioItemDocument](#audioitemdocument)
  * type **required** `string` (values: audio, aggregation): The type of search result, which is either an AggregationAudioItemListDocument or an AudioItemDocument

### SearchListDocument
* SearchListDocument: An array of aggregation or audio recommendations
  * attributes **required** `object`: Basic Swagger definitions used across Carbon services.
  * errors **required** `array`: A list of encountered errors, ignored on POST, PUT
    * items `object`
  * href **required** `string`: A URL representation of the resource; should generally be ignored by clients unless noted otherwise
  * items **required** `array`: Basic Swagger definitions used across Carbon services.
    * items `object`
  * links **required** `object`: Basic Swagger definitions used across Carbon services.
  * version **required** `string`: The version of the Collection.Doc+JSON spec being used
  * attributes [SearchMetaData](#searchmetadata)
  * items `array`: A list of aggregation or audio items (recommendations)
    * items [SearchItemDocument](#searchitemdocument)
  * links `object`: Not used

### SearchMetaData
* SearchMetaData `object`
  * query **required** `string`: The search terms used in the original request


