# @datafire/google_playablelocations

Client library for Playable Locations API

## Installation and Usage
```bash
npm install --save @datafire/google_playablelocations
```
```js
let google_playablelocations = require('@datafire/google_playablelocations').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### playablelocations.logImpressions
Logs new events when playable locations are displayed, and when they are interacted with. Impressions are not partially saved; either all impressions are saved and this request succeeds, or no impressions are saved, and this request fails.


```js
google_playablelocations.playablelocations.logImpressions({}, context)
```

#### Input
* input `object`
  * body [GoogleMapsPlayablelocationsV3LogImpressionsRequest](#googlemapsplayablelocationsv3logimpressionsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleMapsPlayablelocationsV3LogImpressionsResponse](#googlemapsplayablelocationsv3logimpressionsresponse)

### playablelocations.logPlayerReports
Logs bad playable location reports submitted by players. Reports are not partially saved; either all reports are saved and this request succeeds, or no reports are saved, and this request fails.


```js
google_playablelocations.playablelocations.logPlayerReports({}, context)
```

#### Input
* input `object`
  * body [GoogleMapsPlayablelocationsV3LogPlayerReportsRequest](#googlemapsplayablelocationsv3logplayerreportsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleMapsPlayablelocationsV3LogPlayerReportsResponse](#googlemapsplayablelocationsv3logplayerreportsresponse)

### playablelocations.samplePlayableLocations
Returns a set of playable locations that lie within a specified area, that satisfy optional filter criteria. Note: Identical `SamplePlayableLocations` requests can return different results as the state of the world changes over time.


```js
google_playablelocations.playablelocations.samplePlayableLocations({}, context)
```

#### Input
* input `object`
  * body [GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest](#googlemapsplayablelocationsv3sampleplayablelocationsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse](#googlemapsplayablelocationsv3sampleplayablelocationsresponse)



## Definitions

### GoogleMapsPlayablelocationsV3Impression
* GoogleMapsPlayablelocationsV3Impression `object`: Encapsulates impression event details.
  * gameObjectType `integer`: An arbitrary, developer-defined type identifier for each type of game object used in your game. Since players interact with differ types of game objects in different ways, this field allows you to segregate impression data by type for analysis. You should assign a unique `game_object_type` ID to represent a distinct type of game object in your game. For example, 1=monster location, 2=powerup location.
  * impressionType `string` (values: IMPRESSION_TYPE_UNSPECIFIED, PRESENTED, INTERACTED): Required. The type of impression event.
  * locationName `string`: Required. The name of the playable location.

### GoogleMapsPlayablelocationsV3LogImpressionsRequest
* GoogleMapsPlayablelocationsV3LogImpressionsRequest `object`: A request for logging impressions.
  * clientInfo [GoogleMapsUnityClientInfo](#googlemapsunityclientinfo)
  * impressions `array`: Required. Impression event details. The maximum number of impression reports that you can log at once is 50.
    * items [GoogleMapsPlayablelocationsV3Impression](#googlemapsplayablelocationsv3impression)
  * requestId `string`: Required. A string that uniquely identifies the log impressions request. This allows you to detect duplicate requests. We recommend that you use UUIDs for this value. The value must not exceed 50 characters. You should reuse the `request_id` only when retrying a request in case of failure. In this case, the request must be identical to the one that failed.

### GoogleMapsPlayablelocationsV3LogImpressionsResponse
* GoogleMapsPlayablelocationsV3LogImpressionsResponse `object`: A response for the LogImpressions method. This method returns no data upon success.

### GoogleMapsPlayablelocationsV3LogPlayerReportsRequest
* GoogleMapsPlayablelocationsV3LogPlayerReportsRequest `object`: A request for logging your player's bad location reports.
  * clientInfo [GoogleMapsUnityClientInfo](#googlemapsunityclientinfo)
  * playerReports `array`: Required. Player reports. The maximum number of player reports that you can log at once is 50.
    * items [GoogleMapsPlayablelocationsV3PlayerReport](#googlemapsplayablelocationsv3playerreport)
  * requestId `string`: Required. A string that uniquely identifies the log player reports request. This allows you to detect duplicate requests. We recommend that you use UUIDs for this value. The value must not exceed 50 characters. You should reuse the `request_id` only when retrying a request in the case of a failure. In that case, the request must be identical to the one that failed.

### GoogleMapsPlayablelocationsV3LogPlayerReportsResponse
* GoogleMapsPlayablelocationsV3LogPlayerReportsResponse `object`: A response for the LogPlayerReports method. This method returns no data upon success.

### GoogleMapsPlayablelocationsV3PlayerReport
* GoogleMapsPlayablelocationsV3PlayerReport `object`: A report submitted by a player about a playable location that is considered inappropriate for use in the game.
  * languageCode `string`: Language code (in BCP-47 format) indicating the language of the freeform description provided in `reason_details`. Examples are "en", "en-US" or "ja-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
  * locationName `string`: Required. The name of the playable location.
  * reasonDetails `string`: Required. A free-form description detailing why the playable location is considered bad.
  * reasons `array`: Required. One or more reasons why this playable location is considered bad.
    * items `string` (values: BAD_LOCATION_REASON_UNSPECIFIED, OTHER, NOT_PEDESTRIAN_ACCESSIBLE, NOT_OPEN_TO_PUBLIC, PERMANENTLY_CLOSED, TEMPORARILY_INACCESSIBLE)

### GoogleMapsPlayablelocationsV3SampleAreaFilter
* GoogleMapsPlayablelocationsV3SampleAreaFilter `object`: Specifies the area to search for playable locations.
  * s2CellId `string`: Required. The S2 cell ID of the area you want. This must be between cell level 11 and 14 (inclusive). S2 cells are 64-bit integers that identify areas on the Earth. They are hierarchical, and can therefore be used for spatial indexing. The S2 geometry library is available in a number of languages: * [C++](https://github.com/google/s2geometry) * [Java](https://github.com/google/s2-geometry-library-java) * [Go](https://github.com/golang/geo) * [Python](https://github.com/google/s2geometry/tree/master/src/python)

### GoogleMapsPlayablelocationsV3SampleCriterion
* GoogleMapsPlayablelocationsV3SampleCriterion `object`: Encapsulates a filter criterion for searching for a set of playable locations.
  * fieldsToReturn `string`: Specifies which `PlayableLocation` fields are returned. `name` (which is used for logging impressions), `center_point` and `place_id` (or `plus_code`) are always returned. The following fields are omitted unless you specify them here: * snapped_point * types Note: The more fields you include, the more expensive in terms of data and associated latency your query will be.
  * filter [GoogleMapsPlayablelocationsV3SampleFilter](#googlemapsplayablelocationsv3samplefilter)
  * gameObjectType `integer`: Required. An arbitrary, developer-defined identifier of the type of game object that the playable location is used for. This field allows you to specify criteria per game object type when searching for playable locations. You should assign a unique `game_object_type` ID across all `request_criteria` to represent a distinct type of game object. For example, 1=monster location, 2=powerup location. The response contains a map.

### GoogleMapsPlayablelocationsV3SampleFilter
* GoogleMapsPlayablelocationsV3SampleFilter `object`: Specifies the filters to use when searching for playable locations.
  * includedTypes `array`: Restricts the set of playable locations to just the [types](/maps/documentation/gaming/tt/types) that you want.
    * items `string`
  * maxLocationCount `integer`: Specifies the maximum number of playable locations to return. This value must not be greater than 1000. The default value is 100. Only the top-ranking playable locations are returned.
  * spacing [GoogleMapsPlayablelocationsV3SampleSpacingOptions](#googlemapsplayablelocationsv3samplespacingoptions)

### GoogleMapsPlayablelocationsV3SamplePlayableLocation
* GoogleMapsPlayablelocationsV3SamplePlayableLocation `object`: A geographical point suitable for placing game objects in location-based games.
  * centerPoint [GoogleTypeLatLng](#googletypelatlng)
  * name `string`: Required. The name of this playable location.
  * placeId `string`: A [place ID] (https://developers.google.com/places/place-id)
  * plusCode `string`: A [plus code] (http://openlocationcode.com)
  * snappedPoint [GoogleTypeLatLng](#googletypelatlng)
  * types `array`: A collection of [Playable Location Types](/maps/documentation/gaming/tt/types) for this playable location. The first type in the collection is the primary type. Type information might not be available for all playable locations.
    * items `string`

### GoogleMapsPlayablelocationsV3SamplePlayableLocationList
* GoogleMapsPlayablelocationsV3SamplePlayableLocationList `object`: A list of PlayableLocation objects that satisfies a single Criterion.
  * locations `array`: A list of playable locations for this game object type.
    * items [GoogleMapsPlayablelocationsV3SamplePlayableLocation](#googlemapsplayablelocationsv3sampleplayablelocation)

### GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest
* GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest `object`:  Life of a query: - When a game starts in a new location, your game server issues a SamplePlayableLocations request. The request specifies the S2 cell, and contains one or more "criteria" for filtering: - Criterion 0: i locations for long-lived bases, or level 0 monsters, or... - Criterion 1: j locations for short-lived bases, or level 1 monsters, ... - Criterion 2: k locations for random objects. - etc (up to 5 criterion may be specified). `PlayableLocationList` will then contain mutually exclusive lists of `PlayableLocation` objects that satisfy each of the criteria. Think of it as a collection of real-world locations that you can then associate with your game state. Note: These points are impermanent in nature. E.g, parks can close, and places can be removed. The response specifies how long you can expect the playable locations to last. Once they expire, you should query the `samplePlayableLocations` API again to get a fresh view of the real world.
  * areaFilter [GoogleMapsPlayablelocationsV3SampleAreaFilter](#googlemapsplayablelocationsv3sampleareafilter)
  * criteria `array`: Required. Specifies one or more (up to 5) criteria for filtering the returned playable locations.
    * items [GoogleMapsPlayablelocationsV3SampleCriterion](#googlemapsplayablelocationsv3samplecriterion)

### GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse
* GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse `object`:  Response for the SamplePlayableLocations method.
  * locationsPerGameObjectType `object`: Each PlayableLocation object corresponds to a game_object_type specified in the request.
  * ttl `string`: Required. Specifies the "time-to-live" for the set of playable locations. You can use this value to determine how long to cache the set of playable locations. After this length of time, your back-end game server should issue a new SamplePlayableLocations request to get a fresh set of playable locations (because for example, they might have been removed, a park might have closed for the day, a business might have closed permanently).

### GoogleMapsPlayablelocationsV3SampleSpacingOptions
* GoogleMapsPlayablelocationsV3SampleSpacingOptions `object`: A set of options that specifies the separation between playable locations.
  * minSpacingMeters `number`: Required. The minimum spacing between any two playable locations, measured in meters. The minimum value is 30. The maximum value is 1000. Inputs will be rounded up to the next 10 meter interval. The default value is 200m. Set this field to remove tight clusters of playable locations. Note: The spacing is a greedy algorithm. It optimizes for selecting the highest ranking locations first, not to maximize the number of locations selected. Consider the following scenario: * Rank: A: 2, B: 1, C: 3. * Distance: A--200m--B--200m--C If spacing=250, it will pick the highest ranked location [B], not [A, C]. Note: Spacing works within the game object type itself, as well as the previous ones. Suppose three game object types, each with the following spacing: * X: 400m, Y: undefined, Z: 200m. 1. Add locations for X, within 400m of each other. 2. Add locations for Y, without any spacing. 3. Finally, add locations for Z within 200m of each other as well X and Y. The distance diagram between those locations end up as: * From->To. * X->X: 400m * Y->X, Y->Y: unspecified. * Z->X, Z->Y, Z->Z: 200m.
  * pointType `string` (values: POINT_TYPE_UNSPECIFIED, CENTER_POINT, SNAPPED_POINT): Specifies whether the minimum spacing constraint applies to the center-point or to the snapped point of playable locations. The default value is `CENTER_POINT`. If a snapped point is not available for a playable location, its center-point is used instead. Set this to the point type used in your game.

### GoogleMapsUnityClientInfo
* GoogleMapsUnityClientInfo `object`: Client information.
  * apiClient `string`: API client name and version. For example, the SDK calling the API. The exact format is up to the client.
  * applicationId `string`: Application ID, such as the package name on Android and the bundle identifier on iOS platforms.
  * applicationVersion `string`: Application version number, such as "1.2.3". The exact format is application-dependent.
  * deviceModel `string`: Device model as reported by the device. The exact format is platform-dependent.
  * languageCode `string`: Language code (in BCP-47 format) indicating the UI language of the client. Examples are "en", "en-US" or "ja-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
  * operatingSystem `string`: Operating system name and version as reported by the OS. For example, "Mac OS X 10.10.4". The exact format is platform-dependent.
  * operatingSystemBuild `string`: Build number/version of the operating system. e.g., the contents of android.os.Build.ID in Android, or the contents of sysctl "kern.osversion" in iOS.
  * platform `string` (values: PLATFORM_UNSPECIFIED, EDITOR, MAC_OS, WINDOWS, LINUX, ANDROID, IOS, WEB_GL): Platform where the application is running.

### GoogleTypeLatLng
* GoogleTypeLatLng `object`: An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges.
  * latitude `number`: The latitude in degrees. It must be in the range [-90.0, +90.0].
  * longitude `number`: The longitude in degrees. It must be in the range [-180.0, +180.0].


