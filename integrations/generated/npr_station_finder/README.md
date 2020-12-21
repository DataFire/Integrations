# @datafire/npr_station_finder

Client library for NPR Station Finder Service

## Installation and Usage
```bash
npm install --save @datafire/npr_station_finder
```
```js
let npr_station_finder = require('@datafire/npr_station_finder').create({
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

Allows clients to look up NPR member station information

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
npr_station_finder.oauthCallback({
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
npr_station_finder.oauthRefresh(null, context)
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

### searchStations
This endpoint has two main use cases:

- If no query parameters passed in, it returns a list of stations that are geographically closest to the calling client (based on GeoIP information)
- If one or more query parameters are passed in, it performs a search of NPR stations that match those search criteria (not taking into account the client's physical location)

Clients wanting to implement a 'Change Station' UI should use this endpoint to power their search. In most cases, you'll want to build a search interface that uses one of the 3 provided schemas: `lat` and `lon` (using e.g. the HTML5 Geolocation API), `city` and `state`, _or_ the generic `q` query which can accept a station name, call letters, network name, or zip code. Technically speaking, `q` can also take in either a city name or a state name, but using the `city` and `state` parameters together will yield more accurate geographic search results than `q={cityName}`.

The `lat` and `lon` query parameters should always be passed in together (otherwise the API will return a 400 error), and if included in the query, they will take precedence over any other search criteria; that is, `lat` and `lon` will do a purely geographic search and not take into account `q`, `city` or `state`.

Similarly, `city` and/or `state` will take precedence over (and ignore) `q`.

If clients want to be able to offer multiple types of searches (e.g. 'Search for a station name, city or zipcode') using a *single* search input form, `q` should be used. But again, be aware that using `city` and `state` together will yield more accurate search results than `q={cityName}`.


```js
npr_station_finder.searchStations({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Your access token from the Authorization Service. Should start with `Bearer`, followed by a space, followed by the token.
  * q `string`: Search terms to search on; can be a station name, network name, call letters, or zipcode
  * city `string`: A city to look for stations from; intended to be paired with `state`
  * state `string`: A state to look for stations from (using the 2-letter abbreviation); intended to be paired with `city`
  * lat `number`: A latitude value from a geographic coordinate system; only works if paired with `lon`
  * lon `number`: A longitude value from a geographic coordinate system; only works if paired with `lat`

#### Output
* output [StationListDocument](#stationlistdocument)

### getStationById
This endpoint retrieves information about a given station, based on its numeric ID, which is consistent across all of NPR's APIs.

A typical use case for this data is for clients who want to create a dropdown menu, modal/pop-up or dedicated page displaying more information about the station the client is localized to, including, for example, links to the station's homepage and donation (pledge) page.


```js
npr_station_finder.getStationById({
  "Authorization": "",
  "stationId": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Your access token from the Authorization Service. Should start with `Bearer`, followed by a space, followed by the token.
  * stationId **required** `integer`: The numeric ID of a station

#### Output
* output [StationDocument](#stationdocument)



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

### StationBrandData
* StationBrandData `object`: An associative array of brand-related metadata for this station
  * band `string` (values: FM, AM): The subsection of the radio spectrum -- 'AM' or 'FM' -- where this station can be heard
  * call `string`: The three-to-four-letter identifying code for this station. Please use this with caution; most stations prefer to be identified by their `name` in client applications instead of `call`.
  * frequency `string`: Where on the radio dial the station can be heard. If the `band` is AM, the frequency will be between 540 and 1600. If the `band` is FM, the frequency will be between 87.8 and 108.0.
  * marketCity **required** `string`: The city that the station is most closely associated with. This may or may not be the city the station is licensed in and it may or may not be the city that the station or the station's antenna is located in.
  * marketState **required** `string`: The state that the station is most closely associated with. This may or may not be the state the station is licensed in and it may or may not be the state that the station or the station's antenna is located in.
  * name **required** `string`: The display name for the station. In most cases, this will be the same as `call` letters combined with band. When returning networks, it will return the network name (e.g. Minnesota Public Radio).
  * tagline **required** `string`: A short text-logo for the station

### StationBrandLink
* StationBrandLink: A link to a web page, logo, or audio file related to the branding of the station
  * href **required** `string`: The link to be followed
  * content-type **required** `string`: The MIME type of the response of this link
  * rel **required** `string` (values: homepage, logo, small-logo, hello-id-audio, station-message-audio, twitter, facebook): A short string identifier describing the way the way the link relates to the document

### StationData
* StationData `object`
  * brand **required** [StationBrandData](#stationbranddata)
  * eligibility **required** [StationEligibilityData](#stationeligibilitydata)
  * guid **required** `string`: The system's internal unique identifier for a station, not typically used by other APIs or consumers
  * network **required** [StationNetworkData](#stationnetworkdata)
  * newscast [StationNewscastData](#stationnewscastdata)
  * orgId **required** `string`: The system's unique ID for this station, used across NPR One Microservices and NPR's other APIs

### StationDocument
* StationDocument
  * attributes **required** `object`
  * errors **required** `array`: A list of encountered errors, ignored on POST, PUT
    * items `object`
  * href **required** `string`: A URL representation of the resource; should generally be ignored by clients unless noted otherwise
  * items **required** `array`
    * items `object`
  * links **required** `object`
  * version **required** `string`: The version of the Collection.Doc+JSON spec being used
  * attributes [StationData](#stationdata)
  * items `array`: Not used
    * items `object`
  * links [StationLinks](#stationlinks)

### StationDonationLink
* StationDonationLink: A link to a pledge page for the station
  * href **required** `string`: The link to be followed
  * guid `string`: The system's internal unique identifier for a link, not typically used by consumers
  * title `string`: The link text, provided by the station, for the URL
  * typeName **required** `string`: The semantic name corresponding to the `typeId`
  * typeId **required** `string` (values: 4, 27, 28, 29): An identifier for the type of link; '4' denotes a generic pledge page, while '27' is an NPR One-specific pledge page

### StationEligibilityData
* StationEligibilityData `object`: An associative array of eligibility-related metadata for this station
  * format **required** `string`: The format of the programming on this station
  * localization `string`: Whether or not this station should be shown in search for news context, any context or no context
  * musicOnly **required** `boolean`: Whether or not this station only plays music.  Deprecated.
  * nprOne **required** `boolean`: Whether or not this station is considered an NPR One station
  * status **required** `string` (values: 1, 9, 10, 12, 15): The status of the station within NPR's system, not typically used by consumers

### StationLink
* StationLink: A link related to the station
  * href **required** `string`: The link to be followed
  * guid `string`: The system's internal unique identifier for a link, not typically used by consumers
  * title `string`: The link text, provided by the station, for the URL
  * typeName **required** `string`: The semantic name corresponding to the `typeId`

### StationLinks
* StationLinks `object`
  * brand **required** `array`: One or more links to a web page for the station
    * items [StationBrandLink](#stationbrandlink)
  * donation `array`: One or more links to audio files related to this station
    * items [StationDonationLink](#stationdonationlink)
  * podcasts `array`: One or more links to podcasts related to this station
    * items [StationPodcastsLink](#stationpodcastslink)
  * related `array`: One or more links to miscellaneous related content for the station; these typically are not present, and clients should generally not need to use any of these
    * items [StationRelatedLink](#stationrelatedlink)
  * streams `array`: One or more links to audio streams related to the station
    * items [StationStreamsLink](#stationstreamslink)

### StationListDocument
* StationListDocument: A collection of stations close to you or filtered by search criteria
  * attributes **required** `object`
  * errors **required** `array`: A list of encountered errors, ignored on POST, PUT
    * items `object`
  * href **required** `string`: A URL representation of the resource; should generally be ignored by clients unless noted otherwise
  * items **required** `array`
    * items `object`
  * links **required** `object`
  * version **required** `string`: The version of the Collection.Doc+JSON spec being used
  * attributes [StationSearchMetaData](#stationsearchmetadata)
  * items `array`: A list of stations
    * items [StationDocument](#stationdocument)
  * links `object`: Not used

### StationNetworkData
* StationNetworkData `object`: Metadata about the network, if this station is part of a network
  * currentOrgId **required** `string`: The current station being viewed. Client applications should generally ignore this field.
  * tier1 [StationNetworkTierOneData](#stationnetworktieronedata)
  * usesInheritance **required** `boolean`: Whether or not the current station inherits from a parent organization, also referred to as a network

### StationNetworkTierOneData
* StationNetworkTierOneData `object`: Metadata about the top-level organization in the network, if this station is part of a network
  * id **required** `string`: The unique identifier of the top-level organization in the network
  * name **required** `string`: The display name for the top-level organization in the network
  * status `string` (values: 1, 9, 10, 12, 15): The status of the top-level organization within NPR's system, not typically used by consumers
  * tier2 `array`: One or more stations that are hierarchical children of this organization
    * items [StationNetworkTierTwoData](#stationnetworktiertwodata)
  * usesInheritance **required** `boolean`: Whether or not this station inherits from a parent organization, also referred to as a network

### StationNetworkTierThreeData
* StationNetworkTierThreeData `object`: Metadata about a tier 3 organization in the network, if this station is part of a network
  * id **required** `string`: The unique identifier of a tier 3 organization in the network
  * name **required** `string`: The display name for a tier 3 organization in the network
  * usesInheritance **required** `boolean`: Whether or not this station inherits from a parent organization, also referred to as a network

### StationNetworkTierTwoData
* StationNetworkTierTwoData `object`: Metadata about a tier 2 organization in the network, if this station is part of a network
  * id **required** `string`: The unique identifier of a tier 2 organization in the network
  * name **required** `string`: The display name for a tier 2 organization in the network
  * tier3 `array`: One or more stations that are hierarchical children of this organization
    * items [StationNetworkTierThreeData](#stationnetworktierthreedata)
  * usesInheritance **required** `boolean`: Whether or not this station inherits from a parent organization, also referred to as a network

### StationNewscastData
* StationNewscastData `object`: Metadata about the newscast for this station; newscasts are handled internally by other microservices such as the NPR One Listening Service, so this data should typically not be used by consumers
  * id **required** `string`: The ID of the newscast that should be played for this station; this is handled internally by other microservices such as the NPR One Listening Service, so this field should typically not be used by consumers
  * recency **required** `integer`: How often the newscast should be played, in minutes; a value of `null` implies no information is available, and sensible defaults should be used

### StationPodcastsLink
* StationPodcastsLink: A link to an audio podcast or podcast feed related to the station
  * href **required** `string`: The link to be followed
  * guid `string`: The system's internal unique identifier for a link, not typically used by consumers
  * title `string`: The link text, provided by the station, for the URL
  * typeName **required** `string`: The semantic name corresponding to the `typeId`
  * typeId **required** `string` (values: 9): An identifier for the type of link

### StationRelatedLink
* StationRelatedLink: A link to miscellaneous related content for the station; these typically are not present, and clients should generally not need to use these
  * href **required** `string`: The link to be followed
  * guid `string`: The system's internal unique identifier for a link, not typically used by consumers
  * title `string`: The link text, provided by the station, for the URL
  * typeName **required** `string`: The semantic name corresponding to the `typeId`
  * typeId **required** `string`: An identifier for the type of link

### StationSearchMetaData
* StationSearchMetaData `object`
  * city `string`: The city searched for in the original request
  * countryCode `string`: The country where the original request originated, as determined by geolocation. The countryCode is in ISO 3166-1 numeric format
  * lat `number`: The latitude parameter used in the original request
  * lon `number`: The longitude parameter in the original request
  * query `string`: The search terms used in the original request
  * state `string`: The state searched for in the original request

### StationStreamsLink
* StationStreamsLink: A link to an audio stream related to the station
  * href **required** `string`: The link to be followed
  * guid `string`: The system's internal unique identifier for a link, not typically used by consumers
  * title `string`: The link text, provided by the station, for the URL
  * typeName **required** `string`: The semantic name corresponding to the `typeId`
  * isPrimaryStream `boolean`: Whether or not this stream is considered the station's primary stream
  * typeId **required** `string` (values: 10, 11, 12, 13): An identifier for the type of stream


