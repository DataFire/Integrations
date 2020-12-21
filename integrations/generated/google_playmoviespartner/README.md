# @datafire/google_playmoviespartner

Client library for Google Play Movies Partner

## Installation and Usage
```bash
npm install --save @datafire/google_playmoviespartner
```
```js
let google_playmoviespartner = require('@datafire/google_playmoviespartner').create({
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

Gets the delivery status of titles for Google Play Movies Partners.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_playmoviespartner.oauthCallback({
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
google_playmoviespartner.oauthRefresh(null, context)
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

### accounts.avails.list
List Avails owned or managed by the partner.

See _Authentication and Authorization rules_ and
_List methods rules_ for more information about this method.


```js
google_playmoviespartner.accounts.avails.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: REQUIRED. See _General rules_ for more information about this field.
  * title `string`: Filter that matches Avails with a `title_internal_alias`,
  * videoIds `array`: Filter Avails that match any of the given `video_id`s.
  * pageToken `string`: See _List methods rules_ for info about this field.
  * pageSize `integer`: See _List methods rules_ for info about this field.
  * altIds `array`: Filter Avails that match (case-insensitive) any of the given partner-specific custom ids.
  * pphNames `array`: See _List methods rules_ for info about this field.
  * altId `string`: Filter Avails that match a case-insensitive, partner-specific custom id.
  * studioNames `array`: See _List methods rules_ for info about this field.
  * territories `array`: Filter Avails that match (case-insensitive) any of the given country codes,
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [ListAvailsResponse](#listavailsresponse)

### accounts.avails.get
Get an Avail given its avail group id and avail id.


```js
google_playmoviespartner.accounts.avails.get({
  "accountId": "",
  "availId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: REQUIRED. See _General rules_ for more information about this field.
  * availId **required** `string`: REQUIRED. Avail ID.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [Avail](#avail)

### accounts.orders.list
List Orders owned or managed by the partner.

See _Authentication and Authorization rules_ and
_List methods rules_ for more information about this method.


```js
google_playmoviespartner.accounts.orders.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: REQUIRED. See _General rules_ for more information about this field.
  * pageToken `string`: See _List methods rules_ for info about this field.
  * customId `string`: Filter Orders that match a case-insensitive, partner-specific custom id.
  * videoIds `array`: Filter Orders that match any of the given `video_id`s.
  * pageSize `integer`: See _List methods rules_ for info about this field.
  * pphNames `array`: See _List methods rules_ for info about this field.
  * status `array`: Filter Orders that match one of the given status.
  * name `string`: Filter that matches Orders with a `name`, `show`, `season` or `episode`
  * studioNames `array`: See _List methods rules_ for info about this field.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [ListOrdersResponse](#listordersresponse)

### accounts.orders.get
Get an Order given its id.

See _Authentication and Authorization rules_ and
_Get methods rules_ for more information about this method.


```js
google_playmoviespartner.accounts.orders.get({
  "accountId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: REQUIRED. See _General rules_ for more information about this field.
  * orderId **required** `string`: REQUIRED. Order ID.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [Order](#order)

### accounts.storeInfos.list
List StoreInfos owned or managed by the partner.

See _Authentication and Authorization rules_ and
_List methods rules_ for more information about this method.


```js
google_playmoviespartner.accounts.storeInfos.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: REQUIRED. See _General rules_ for more information about this field.
  * seasonIds `array`: Filter StoreInfos that match any of the given `season_id`s.
  * pageToken `string`: See _List methods rules_ for info about this field.
  * videoId `string`: Filter StoreInfos that match a given `video_id`.
  * videoIds `array`: Filter StoreInfos that match any of the given `video_id`s.
  * pageSize `integer`: See _List methods rules_ for info about this field.
  * mids `array`: Filter StoreInfos that match any of the given `mid`s.
  * pphNames `array`: See _List methods rules_ for info about this field.
  * countries `array`: Filter StoreInfos that match (case-insensitive) any of the given country
  * name `string`: Filter that matches StoreInfos with a `name` or `show_name`
  * studioNames `array`: See _List methods rules_ for info about this field.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [ListStoreInfosResponse](#liststoreinfosresponse)

### accounts.storeInfos.country.get
Get a StoreInfo given its video id and country.

See _Authentication and Authorization rules_ and
_Get methods rules_ for more information about this method.


```js
google_playmoviespartner.accounts.storeInfos.country.get({
  "accountId": "",
  "videoId": "",
  "country": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: REQUIRED. See _General rules_ for more information about this field.
  * videoId **required** `string`: REQUIRED. Video ID.
  * country **required** `string`: REQUIRED. Edit country.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [StoreInfo](#storeinfo)



## Definitions

### Avail
* Avail `object`: An Avail describes the Availability Window of a specific Edit in a given
  * altId `string`: Other identifier referring to the Edit, as defined by partner.
  * availId `string`: ID internally generated by Google to uniquely identify an Avail.
  * captionExemption `string`: Communicating an exempt category as defined by FCC regulations.
  * captionIncluded `boolean`: Communicating if caption file will be delivered.
  * contentId `string`: Title Identifier. This should be the Title Level EIDR.
  * displayName `string`: The name of the studio that owns the Edit referred in the Avail.
  * encodeId `string`: Manifestation Identifier. This should be the Manifestation
  * end `string`: End of term in YYYY-MM-DD format in the timezone of the country
  * episodeAltId `string`: Other identifier referring to the episode, as defined by partner.
  * episodeNumber `string`: The number assigned to the episode within a season.
  * episodeTitleInternalAlias `string`: OPTIONAL.TV Only. Title used by involved parties to refer to this episode.
  * formatProfile `string` (values: FORMAT_PROFILE_UNSPECIFIED, SD, HD, UHD): Indicates the format profile covered by the transaction.
  * licenseType `string` (values: LICENSE_TYPE_UNSPECIFIED, EST, VOD, SVOD, POEST): Type of transaction.
  * pphNames `array`: Name of the post-production houses that manage the Avail.
    * items `string`
  * priceType `string`: Type of pricing that should be applied to this Avail
  * priceValue `string`: Value to be applied to the pricing type.
  * productId `string`: Edit Identifier. This should be the Edit Level EIDR.
  * ratingReason `string`: Value representing the rating reason.
  * ratingSystem `string`: Rating system applied to the version of title within territory
  * ratingValue `string`: Value representing the rating.
  * releaseDate `string`: Release date of the Title in earliest released territory.
  * seasonAltId `string`: Other identifier referring to the season, as defined by partner.
  * seasonNumber `string`: The number assigned to the season within a series.
  * seasonTitleInternalAlias `string`: Title used by involved parties to refer to this season.
  * seriesAltId `string`: Other identifier referring to the series, as defined by partner.
  * seriesTitleInternalAlias `string`: Title used by involved parties to refer to this series.
  * start `string`: Start of term in YYYY-MM-DD format in the timezone of the
  * storeLanguage `string`: Spoken language of the intended audience.
  * suppressionLiftDate `string`: First date an Edit could be publically announced as becoming
  * territory `string`: ISO 3166-1 alpha-2 country code for the country or territory
  * titleInternalAlias `string`: Title used by involved parties to refer to this content.
  * videoId `string`: Google-generated ID identifying the video linked to this Avail, once
  * workType `string` (values: TITLE_TYPE_UNSPECIFIED, MOVIE, SEASON, EPISODE, BUNDLE): Work type as enumerated in EMA.

### ListAvailsResponse
* ListAvailsResponse `object`: Response to the 'ListAvails' method.
  * avails `array`: List of Avails that match the request criteria.
    * items [Avail](#avail)
  * nextPageToken `string`: See _List methods rules_ for info about this field.
  * totalSize `integer`: See _List methods rules_ for more information about this field.

### ListOrdersResponse
* ListOrdersResponse `object`: Response to the 'ListOrders' method.
  * nextPageToken `string`: See _List methods rules_ for info about this field.
  * orders `array`: List of Orders that match the request criteria.
    * items [Order](#order)
  * totalSize `integer`: See _List methods rules_ for more information about this field.

### ListStoreInfosResponse
* ListStoreInfosResponse `object`: Response to the 'ListStoreInfos' method.
  * nextPageToken `string`: See 'List methods rules' for info about this field.
  * storeInfos `array`: List of StoreInfos that match the request criteria.
    * items [StoreInfo](#storeinfo)
  * totalSize `integer`: See _List methods rules_ for more information about this field.

### Order
* Order `object`: An Order tracks the fulfillment of an Edit when delivered using the
  * approvedTime `string`: Timestamp when the Order was approved.
  * channelId `string`: YouTube Channel ID that should be used to fulfill the Order.
  * channelName `string`: YouTube Channel Name that should be used to fulfill the Order.
  * countries `array`: Countries where the Order is available,
    * items `string`
  * customId `string`: ID that can be used to externally identify an Order.
  * earliestAvailStartTime `string`: Timestamp of the earliest start date of the Avails
  * episodeName `string`: Default Episode name,
  * legacyPriority `string`: Legacy Order priority, as defined by Google.
  * name `string`: Default Edit name,
  * normalizedPriority `string` (values: NORMALIZED_PRIORITY_UNSPECIFIED, LOW_PRIORITY, HIGH_PRIORITY): A simpler representation of the priority.
  * orderId `string`: ID internally generated by Google to uniquely identify an Order.
  * orderedTime `string`: Timestamp when the Order was created.
  * pphName `string`: Name of the post-production house that manages the Edit ordered.
  * priority `number`: Order priority, as defined by Google.
  * receivedTime `string`: Timestamp when the Order was fulfilled.
  * rejectionNote `string`: Field explaining why an Order has been rejected.
  * seasonName `string`: Default Season name,
  * showName `string`: Default Show name,
  * status `string` (values: STATUS_UNSPECIFIED, STATUS_APPROVED, STATUS_FAILED, STATUS_PROCESSING, STATUS_UNFULFILLED, STATUS_NOT_AVAILABLE): High-level status of the order.
  * statusDetail `string` (values: ORDER_STATUS_UNSPECIFIED, ORDER_STATUS_QC_APPROVED, ORDER_STATUS_QC_REJECTION, ORDER_STATUS_INTERNAL_FIX, ORDER_STATUS_OPEN_ORDER, ORDER_STATUS_NOT_AVAILABLE, ORDER_STATUS_AWAITING_REDELIVERY, ORDER_STATUS_READY_FOR_QC, ORDER_STATUS_FILE_PROCESSING): Detailed status of the order
  * studioName `string`: Name of the studio that owns the Edit ordered.
  * type `string` (values: TITLE_TYPE_UNSPECIFIED, MOVIE, SEASON, EPISODE, BUNDLE): Type of the Edit linked to the Order.
  * videoId `string`: Google-generated ID identifying the video linked to this Order, once

### StoreInfo
* StoreInfo `object`: Information about a playable sequence (video) associated with an Edit
  * audioTracks `array`: Audio tracks available for this Edit.
    * items `string`
  * country `string`: Country where Edit is available in ISO 3166-1 alpha-2 country
  * editLevelEidr `string`: Edit-level EIDR ID.
  * episodeNumber `string`: The number assigned to the episode within a season.
  * hasAudio51 `boolean`: Whether the Edit has a 5.1 channel audio track.
  * hasEstOffer `boolean`: Whether the Edit has a EST offer.
  * hasHdOffer `boolean`: Whether the Edit has a HD offer.
  * hasInfoCards `boolean`: Whether the Edit has info cards.
  * hasSdOffer `boolean`: Whether the Edit has a SD offer.
  * hasVodOffer `boolean`: Whether the Edit has a VOD offer.
  * liveTime `string`: Timestamp when the Edit went live on the Store.
  * mid `string`: Knowledge Graph ID associated to this Edit, if available.
  * name `string`: Default Edit name, usually in the language of the country of
  * pphNames `array`: Name of the post-production houses that manage the Edit.
    * items `string`
  * seasonId `string`: Google-generated ID identifying the season linked to the Edit.
  * seasonName `string`: Default Season name, usually in the language of the country of
  * seasonNumber `string`: The number assigned to the season within a show.
  * showId `string`: Google-generated ID identifying the show linked to the Edit.
  * showName `string`: Default Show name, usually in the language of the country of
  * studioName `string`: Name of the studio that owns the Edit ordered.
  * subtitles `array`: Subtitles available for this Edit.
    * items `string`
  * titleLevelEidr `string`: Title-level EIDR ID.
  * trailerId `string`: Google-generated ID identifying the trailer linked to the Edit.
  * type `string` (values: TITLE_TYPE_UNSPECIFIED, MOVIE, SEASON, EPISODE, BUNDLE): Edit type, like Movie, Episode or Season.
  * videoId `string`: Google-generated ID identifying the video linked to the Edit.


