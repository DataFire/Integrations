# @datafire/npr_sponsorship

Client library for NPR Sponsorship Service

## Installation and Usage
```bash
npm install --save @datafire/npr_sponsorship
```
```js
let npr_sponsorship = require('@datafire/npr_sponsorship').create({
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

Sponsorship for non-NPR One client applications

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
npr_sponsorship.oauthCallback({
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
npr_sponsorship.oauthRefresh(null, context)
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

### getAds
**Not** for use by NPR One clients (for whom sponsorship is already integrated into the Listening Service), this endpoint is designed to be used by our other client applications to request sponsorship on behalf of a user. Sponsorship units are returned in the form of VAST XML. It is worth noting that this endpoint attempts to always return XML, even in the case of exceptions.

The default behavior of this endpoint is asynchronous; on an initial request, a call to our external sponsorship provider is placed on a queue, which is typically processed within 3 minutes. Once the sponsorship call is received and processed, the returned sponsorship units are placed in a cache on our server for the current user. Subsequent calls to this endpoint will return VAST sponsorship units from this cache until tracking information is submitted, which removes the ad from the cache and will automatically request additional ads asynchronously if there are fewer than a certain number remaining in the cache.

For development purposes, it's worth noting that there is currently no way to clear a user's cache without submitting some form of tracking.


```js
npr_sponsorship.getAds({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Your access token from the Authorization Service. Should start with `Bearer`, followed by a space, followed by the token.
  * X-Advertising-ID `string`: A device-specific advertising identifier, if possible. Apple's IDFA is an example.
  * forceResult `boolean`: Whether to force a synchronous call to our external sponsorship provider; the default behavior is asynchronous.
  * adCount `integer`: How many sponsorship units to request in one call; if left unspecified, the default behavior is to return only 1.

#### Output
* output [VASTXml](#vastxml)

### receiveAdTracking
**Not** for use by NPR One clients (for whom sponsorship is already integrated into the Listening Service), this endpoint is designed to be used by our other client applications to submit tracking information for sponsorship units obtained from the `GET /sponsorship/v2/ads` endpoint.

The tracking information should be submitted in the body of the request in the form of a JSON object following the Collection.Doc+JSON specification.


```js
npr_sponsorship.receiveAdTracking({
  "Authorization": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Your access token from the Authorization Service. Should start with `Bearer`, followed by a space, followed by the token.
  * X-Advertising-ID `string`: A device-specific advertising identifier, if possible. Apple's IDFA is an example.
  * body **required** [UserAdDocument](#useraddocument)

#### Output
*Output schema unknown*



## Definitions

### AbstractCDocLink
* AbstractCDocLink
  * href **required** `string`: The link to be followed
  * content-type **required** `string`: The MIME type of the response of this link

### AbstractLink
* AbstractLink `object`
  * href **required** `string`: The link to be followed

### AdTrackingData
* AdTrackingData `object`: All the information needed for the Sponsorship Service to send back tracking information to our external sponsorship provider
  * adId **required** `string`: The VAST Ad node `id` attribute value, (e.g. AdswizzAd12345)
  * event **required** `string` (values: start, firstQuartile, midpoint, thirdQuartile, complete): The user-interaction event to submit tracking for

### AdTrackingDocument
* AdTrackingDocument: All the information needed for the Sponsorship Service to send back tracking information to our external sponsorship provider
  * attributes **required** `object`
  * errors **required** `array`: A list of encountered errors, ignored on POST, PUT
    * items `object`
  * href **required** `string`: A URL representation of the resource; should generally be ignored by clients unless noted otherwise
  * items **required** `array`
    * items `object`
  * links **required** `object`
  * version **required** `string`: The version of the Collection.Doc+JSON spec being used
  * attributes [AdTrackingData](#adtrackingdata)
  * items `array`: Not used
    * items `object`

### AdXml
* AdXml `object`
  * InLine [InLineXml](#inlinexml)
  * id `string`

### Affiliation
* Affiliation `object`: A program (aggregation) that a given user has shown an affiliation with
  * daysSinceLastListen `integer`: The number of days since a user last listened to a story from this aggregation. Absent if user never listened to the aggregation.
  * following **required** `boolean`: Whether or not the user is following the aggregation. When changing affiliation status, the client is expected to toggle this value and then send the entire object back.
  * href **required** `string`: A link to more details about the program from the NPR Story API
  * id **required** `string`: A unique identifier for the aggregation (program)
  * notif_following `array`: The topic in Firebase Cloud Messaging to which the device should subscribe if it supports notifications and the user wants notifications about the podcasts they follow.
    * items `string`
  * notif_rated `array`: The topic in Firebase Cloud Messaging to which the device should subscribe if it supports notifications and the user wants notifications about the podcasts they have highly rated.
    * items `string`
  * rating `number`: The user's average rating for this affiliation on a scale of 0-1. Absent if user never listened to the aggregation.
  * title `string`: The title for the aggregation (program)

### CollectionDocument
* CollectionDocument `object`: Base Collection.Doc+JSON output
  * attributes **required** `object`
  * errors **required** `array`: A list of encountered errors, ignored on POST, PUT
    * items `object`
  * href **required** `string`: A URL representation of the resource; should generally be ignored by clients unless noted otherwise
  * items **required** `array`
    * items `object`
  * links **required** `object`
  * version **required** `string`: The version of the Collection.Doc+JSON spec being used

### CompanionXml
* CompanionXml `object`
  * CompanionClickThrough `string`
  * StaticResource [StaticResourceXml](#staticresourcexml)
  * TrackingEvents `array`
    * items [TrackingXml](#trackingxml)
  * height `integer`
  * id `integer`
  * width `integer`

### CreativeXml
* CreativeXml `object`
  * CompanionAds `array`
    * items [CompanionXml](#companionxml)
  * Linear [LinearXml](#linearxml)
  * id `integer`
  * sequence **required** `integer`

### Error
* Error `object`: A serialized version of any error encountered when processing this request
  * code **required** `integer`: The error code
  * debug `string`: Additional debug information if debug mode is turned on
  * text `string`: The error description

### ErrorDocument
* ErrorDocument: A Collection.doc+JSON representation of an error result from an API call
  * attributes **required** `object`
  * errors **required** `array`: A list of encountered errors, ignored on POST, PUT
    * items `object`
  * href **required** `string`: A URL representation of the resource; should generally be ignored by clients unless noted otherwise
  * items **required** `array`
    * items `object`
  * links **required** `object`
  * version **required** `string`: The version of the Collection.Doc+JSON spec being used
  * attributes `object`: Ignore; will be empty for errors
  * errors `array`: A list of encountered errors, ignored on POST, PUT
    * items [Error](#error)
  * items `array`: Ignore; will be empty for errors
    * items `object`
  * links `object`: Ignore; will be empty for errors

### ErrorXmlDocument
* ErrorXmlDocument `object`: One or more errors represented in a VAST XML document
  * error **required** `array`
    * items `string`: An individual error, presented in XML format
  * version **required** `string`

### ImpressionXml
* ImpressionXml `string`
  * id **required** `integer`

### InLineXml
* InLineXml `object`
  * AdSystem `string`
  * AdTitle `string`
  * Category `string`
  * Creatives `array`
    * items [CreativeXml](#creativexml)
  * Description `string`
  * Extensions `array`
    * items `string`
  * Impression `array`
    * items [ImpressionXml](#impressionxml)

### LinearXml
* LinearXml `object`
  * Duration `string`
  * MediaFiles `array`
    * items [MediaFileXml](#mediafilexml)
  * TrackingEvents `array`
    * items [TrackingXml](#trackingxml)

### MediaFileXml
* MediaFileXml `string`
  * bitrate `integer`
  * delivery `string`
  * type `string`

### StaticResourceXml
* StaticResourceXml `string`
  * creativeType `string`

### TrackingXml
* TrackingXml `string`
  * event `string` (values: start, firstQuartile, midpoint, thirdQuartile, complete, creativeView)

### UserAdData
* UserAdData `object`: All information relevant to a user who has requested sponsorship or submitted tracking information
  * ipAddress `string`: The TCP/IP address of the client making the request. The server will attempt to grab this from the headers, so it probably does not need to be passed in the body unless you get back an error message stating that we were unable to determine an IP address from the request.
  * userAgent `string`: An identifying string for the browser making the request. The server will attempt to grab this from the headers, so it probably does not need to be passed in the body unless you get back an error message stating that we were unable to determine a User-Agent from the request.

### UserAdDocument
* UserAdDocument: All information relevant to a user who has requested sponsorship or submitted tracking information
  * attributes **required** `object`
  * errors **required** `array`: A list of encountered errors, ignored on POST, PUT
    * items `object`
  * href **required** `string`: A URL representation of the resource; should generally be ignored by clients unless noted otherwise
  * items **required** `array`
    * items `object`
  * links **required** `object`
  * version **required** `string`: The version of the Collection.Doc+JSON spec being used
  * attributes [UserAdData](#useraddata)
  * items `array`: All the information needed for the Sponsorship Service to send back tracking information to our external sponsorship provider
    * items [AdTrackingDocument](#adtrackingdocument)

### VASTXml
* VASTXml `object`: Please visit <a href='https://www.iab.com/guidelines/digital-video-ad-serving-template-vast/' target='_blank'>https://www.iab.com/guidelines/digital-video-ad-serving-template-vast/</a> for more information on the VAST XML specification.
  * Ad [AdXml](#adxml)
  * version **required** `string`


