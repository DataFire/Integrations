# @datafire/tomtom_search

Client library for Search

## Installation and Usage
```bash
npm install --save @datafire/tomtom_search
```
```js
let tomtom_search = require('@datafire/tomtom_search').create({
  api_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Search API is a RESTful API that allows developers to run a single line fuzzy search for addresses and POIs. Search API returns the latitude/longitude of a specific address, cross street, geographic feature, or point of interest (POI).

## Actions

### search.versionNumber.additionalData.ext.get
Additional Data


```js
tomtom_search.search.versionNumber.additionalData.ext.get({
  "versionNumber": 0,
  "ext": "",
  "geometries": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 2): Service version number. The current value is 2.
  * ext **required** `string` (values: json): Expected response format.
  * geometries **required** `string`: Comma separated list of geometry UUIDs, previously retrieved from an Search API request.
  * geometriesZoom `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22): Defines the precision of the geometries.

#### Output
*Output schema unknown*

### search.versionNumber.cS.category.ext.get
Low Bandwith Category Search


```js
tomtom_search.search.versionNumber.cS.category.ext.get({
  "versionNumber": 0,
  "category": "",
  "ext": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 2): Service version number. The current value is 2.
  * category **required** `string`: Query string. Must be properly URL encoded.
  * ext **required** `string` (values: json, jsonp, js, xml): Expected response format.
  * typeahead `boolean`: If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.
  * limit `integer`: Maximum number of search results that will be returned.
  * ofs `integer`: Starting offset of the returned results within the full result set.
  * countrySet `string`: Comma separated string of country codes. This will limit the search to the specified countries.
  * lat `number`: Latitude where results should be biased.
  * lon `number`: Longitude where results should be biased
  * radius `integer`: If radius <b>and</b> position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.
  * topLeft `string`: Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.
  * btmRight `string`: Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.
  * language `string`: Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
  * idxSet `string`: A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:
  * view `string` (values: Unified, IN, PK, IL, MA): Geopolitical View.

#### Output
*Output schema unknown*

### search.versionNumber.categorySearch.query.ext.get
Category Search


```js
tomtom_search.search.versionNumber.categorySearch.query.ext.get({
  "versionNumber": 0,
  "query": "",
  "ext": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 2): Service version number. The current value is 2.
  * query **required** `string`: Query string. Must be properly URL encoded.
  * ext **required** `string` (values: json, jsonp, js, xml): Expected response format.
  * typeahead `boolean`: If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.
  * limit `integer`: Maximum number of search results that will be returned.
  * ofs `integer`: Starting offset of the returned results within the full result set.
  * countrySet `string`: Comma separated string of country codes. This will limit the search to the specified countries.
  * lat `number`: Latitude where results should be biased.
  * lon `number`: Longitude where results should be biased
  * radius `integer`: If radius <b>and</b> position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.
  * topLeft `string`: Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.
  * btmRight `string`: Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.
  * language `string`: Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
  * extendedPostalCodesFor `string`: Indexes for which extended postal codes should be included in the results. Available indexes are:
  * view `string` (values: Unified, IN, PK, IL, MA): Geopolitical View.

#### Output
*Output schema unknown*

### search.versionNumber.geocode.query.ext.get
Geocode


```js
tomtom_search.search.versionNumber.geocode.query.ext.get({
  "versionNumber": 0,
  "query": "",
  "ext": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 2): Service version number. The current value is 2.
  * query **required** `string`: Query string. Must be properly URL encoded.
  * ext **required** `string` (values: json, jsonp, js, xml): Expected response format.
  * storeResult `boolean`: If the "storeResult" flag is set, the query will be interpreted as a stored geocode and will be billed according to the terms of use.
  * typeahead `boolean`: If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.
  * limit `integer`: Maximum number of search results that will be returned.
  * ofs `integer`: Starting offset of the returned results within the full result set.
  * countrySet `string`: Comma separated string of country codes. This will limit the search to the specified countries.
  * lat `number`: Latitude where results should be biased.
  * lon `number`: Longitude where results should be biased
  * radius `integer`: If radius <b>and</b> position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.
  * topLeft `string`: Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.
  * btmRight `string`: Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.
  * language `string`: Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
  * extendedPostalCodesFor `string`: Indexes for which extended postal codes should be included in the results. Available indexes are:
  * view `string` (values: Unified, IN, PK, IL, MA): Geopolitical View.

#### Output
*Output schema unknown*

### search.versionNumber.geometryFilter.ext.get
Geometry Filter


```js
tomtom_search.search.versionNumber.geometryFilter.ext.get({
  "versionNumber": 0,
  "ext": "",
  "geometryList": "",
  "poiList": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 2): Service version number. The current value is 2.
  * ext **required** `string` (values: json, jsonp, js, xml): Expected response format.
  * geometryList **required** `string`: List of geometries to filter by. Available types are CIRCLE (with the radius expressed in meters) and POLYGON.
  * poiList **required** `string`: List of POIs to filter. The only required attribute of a POI is position, everything else is optional and will be echoed back when passed in.

#### Output
*Output schema unknown*

### search.versionNumber.geometryFilter.ext.post
Geometry Filter


```js
tomtom_search.search.versionNumber.geometryFilter.ext.post({
  "versionNumber": 0,
  "ext": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 2): Service version number. The current value is 2.
  * ext **required** `string` (values: json, jsonp, js, xml): Expected response format.
  * body `object`
    * geometryList `array`
      * items `object`
        * position `string`
        * radius `integer`
        * type `string`
        * vertices `array`
          * items `string`
    * poiList `array`
      * items `object`
        * address `object`
          * freeformAddress `string`
        * poi `object`
          * name `string`
        * position `object`
          * lat `number`
          * lon `number`

#### Output
*Output schema unknown*

### search.versionNumber.geometrySearch.query.ext.get
Geometry Search


```js
tomtom_search.search.versionNumber.geometrySearch.query.ext.get({
  "versionNumber": 0,
  "query": "",
  "ext": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 2): Service version number. The current value is 2.
  * query **required** `string`: Query string. Must be properly URL encoded.
  * ext **required** `string` (values: json, jsonp, js, xml): Expected response format.
  * geometryList `string`: List of geometries to filter by. Available types are CIRCLE (with the radius expressed in meters) and POLYGON.
  * limit `integer`: Maximum number of search results that will be returned.
  * language `string`: Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
  * extendedPostalCodesFor `string`: Indexes for which extended postal codes should be included in the results. Available indexes are:
  * idxSet `string`: A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:

#### Output
*Output schema unknown*

### search.versionNumber.geometrySearch.query.ext.post
Geometry Search


```js
tomtom_search.search.versionNumber.geometrySearch.query.ext.post({
  "versionNumber": 0,
  "query": "",
  "ext": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 2): Service version number. The current value is 2.
  * query **required** `string`: Query string. Must be properly URL encoded.
  * ext **required** `string` (values: json, jsonp, js, xml): Expected response format.
  * limit `integer`: Maximum number of search results that will be returned.
  * language `string`: Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
  * extendedPostalCodesFor `string`: Indexes for which extended postal codes should be included in the results. Available indexes are:
  * idxSet `string`: A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:
  * body `object`
    * geometryList `array`
      * items `object`
        * position `string`
        * radius `integer`
        * type `string`
        * vertices `array`
          * items `string`

#### Output
*Output schema unknown*

### search.versionNumber.nearbySearch..ext.get
Nearby Search


```js
tomtom_search.search.versionNumber.nearbySearch..ext.get({
  "versionNumber": 0,
  "ext": "",
  "lat": 0,
  "lon": 0
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 2): Service version number. The current value is 2.
  * ext **required** `string` (values: json, jsonp, js, xml): Expected response format.
  * lat **required** `number`: Latitude where results should be biased.
  * lon **required** `number`: Longitude where results should be biased
  * limit `integer`: Maximum number of search results that will be returned.
  * ofs `integer`: Starting offset of the returned results within the full result set.
  * countrySet `string`: Comma separated string of country codes. This will limit the search to the specified countries.
  * radius `integer`: If radius and position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.
  * topLeft `string`: Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.
  * btmRight `string`: Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.
  * language `string`: Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
  * extendedPostalCodesFor `string`: Indexes for which extended postal codes should be included in the results. Available indexes are:
  * minFuzzyLevel `integer`: Minimum fuzziness level to be used.
  * maxFuzzyLevel `integer`: Maximum fuzziness level to be used.
  * idxSet `string`: A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:
  * view `string` (values: Unified, IN, PK, IL, MA): Geopolitical View.

#### Output
*Output schema unknown*

### search.versionNumber.poiSearch.query.ext.get
Points of Interest Search


```js
tomtom_search.search.versionNumber.poiSearch.query.ext.get({
  "versionNumber": 0,
  "query": "",
  "ext": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 2): Service version number. The current value is 2.
  * query **required** `string`: Query string. Must be properly URL encoded.
  * ext **required** `string` (values: json, jsonp, js, xml): Expected response format.
  * typeahead `boolean`: If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.
  * limit `integer`: Maximum number of search results that will be returned.
  * ofs `integer`: Starting offset of the returned results within the full result set.
  * countrySet `string`: Comma separated string of country codes. This will limit the search to the specified countries.
  * lat `number`: Latitude where results should be biased.
  * lon `number`: Longitude where results should be biased
  * radius `integer`: If radius <b>and</b> position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.
  * topLeft `string`: Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.
  * btmRight `string`: Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.
  * language `string`: Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
  * extendedPostalCodesFor `string`: Indexes for which extended postal codes should be included in the results. Available indexes are:
  * view `string` (values: Unified, IN, PK, IL, MA): Geopolitical View.

#### Output
*Output schema unknown*

### search.versionNumber.reverseGeocode.crossStreet.position.ext.get
Cross Street lookup


```js
tomtom_search.search.versionNumber.reverseGeocode.crossStreet.position.ext.get({
  "versionNumber": 0,
  "position": "",
  "ext": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 2): Service version number. The current value is 2.
  * position **required** `string`: This is specified as a comma separated string composed of lat., lon.
  * ext **required** `string` (values: json, jsonp, js, xml): Expected response format.
  * limit `integer`: Maximum number of cross-streets to return.
  * spatialKeys `boolean`: If the "spatialKeys" flag is set, the response will also contain a proprietary geospatial keys for a specified location.
  * heading `number`: The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)
  * radius `integer`: The maximum distance in meters from the specified position for the reverse geocoder to consider.
  * language `string`: Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.

#### Output
*Output schema unknown*

### search.versionNumber.reverseGeocode.position.ext.get
Reverse Geocode


```js
tomtom_search.search.versionNumber.reverseGeocode.position.ext.get({
  "versionNumber": 0,
  "position": "",
  "ext": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 2): Service version number. The current value is 2.
  * position **required** `string`: This is specified as a comma separated string composed of lat., lon.
  * ext **required** `string` (values: json, jsonp, js, xml): Expected response format.
  * spatialKeys `boolean`: If the "spatialKeys" flag is set, the response will also contain a proprietary geospatial keys for a specified location.
  * returnSpeedLimit `boolean`: To enable return of the posted speed limit (where available).
  * heading `number`: The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)
  * radius `integer`: The maximum distance in meters from the specified position for the reverse geocoder to consider.
  * number `string`: If a number is sent in along with the request, the response may include the side of the street (Left/Right) and an offset position for that number.
  * returnRoadUse `boolean`: Enables return of the road use array for reverse geocodes at street level.
  * roadUse `string`: Restricts reverse geocodes to a certain type of road use. The road use array for reverse geocodes can be one or more of: ["LimitedAccess", "Arterial", "Terminal", "Ramp", "Rotary", "LocalStreet"].
  * callback `string`: Specifies the jsonp callback method.

#### Output
*Output schema unknown*

### search.versionNumber.routedFilter.position.heading.ext.get
Routed Filter


```js
tomtom_search.search.versionNumber.routedFilter.position.heading.ext.get({
  "versionNumber": 0,
  "position": "",
  "heading": 0,
  "ext": "",
  "poiList": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 2): Service version number. The current value is 2.
  * position **required** `string`: This is specified as a comma separated string composed of lat., lon.
  * heading **required** `number`: The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)
  * ext **required** `string` (values: json, jsonp, js, xml): Expected response format.
  * poiList **required** `string`: List of POIs to filter. The only required attribute of a POI is position, everything else is optional and will be echoed back when passed in.
  * routingTimeout `integer`: Only return results that arrive from routing engine within this time limit.

#### Output
*Output schema unknown*

### search.versionNumber.routedFilter.position.heading.ext.post
Routed Filter


```js
tomtom_search.search.versionNumber.routedFilter.position.heading.ext.post({
  "versionNumber": 0,
  "position": "",
  "heading": 0,
  "ext": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 2): Service version number. The current value is 2.
  * position **required** `string`: This is specified as a comma separated string composed of lat., lon.
  * heading **required** `number`: The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)
  * ext **required** `string` (values: json, jsonp, js, xml): Expected response format.
  * routingTimeout `integer`: Only return results that arrive from routing engine within this time limit.
  * body `object`
    * poiList `array`
      * items `object`
        * address `object`
          * freeformAddress `string`
        * poi `object`
          * name `string`
        * position `object`
          * lat `number`
          * lon `number`

#### Output
*Output schema unknown*

### search.versionNumber.routedSearch.query.position.heading.ext.get
Routed Search


```js
tomtom_search.search.versionNumber.routedSearch.query.position.heading.ext.get({
  "versionNumber": 0,
  "query": "",
  "position": "",
  "heading": 0,
  "ext": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 2): Service version number. The current value is 2.
  * query **required** `string`: Query string. Must be properly URL encoded.
  * position **required** `string`: This is specified as a comma separated string composed of lat., lon.
  * heading **required** `number`: The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)
  * ext **required** `string` (values: json, jsonp, js, xml): Expected response format.
  * typeahead `boolean`: If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.
  * limit `integer`: Maximum number of search results that will be returned.
  * multiplier `integer`: Multiplies the limit by N to gather more candidate POIs, which will then be sorted by drive distance, returning only the top candidates according to the limit.
  * routingTimeout `integer`: Only return results that arrive from routing engine within this time limit.
  * language `string`: Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
  * extendedPostalCodesFor `string`: Indexes for which extended postal codes should be included in the results. Available indexes are:
  * idxSet `string`: A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:

#### Output
*Output schema unknown*

### search.versionNumber.s.query.ext.get
Low bandwith Search


```js
tomtom_search.search.versionNumber.s.query.ext.get({
  "versionNumber": 0,
  "query": "",
  "ext": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 2): Service version number. The current value is 2.
  * query **required** `string`: Query string. Must be properly URL encoded.
  * ext **required** `string` (values: json, jsonp, js, xml): Expected response format.
  * typeahead `boolean`: If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.
  * limit `integer`: Maximum number of search results that will be returned.
  * ofs `integer`: Starting offset of the returned results within the full result set.
  * countrySet `string`: Comma separated string of country codes. This will limit the search to the specified countries.
  * lat `number`: Latitude where results should be biased.
  * lon `number`: Longitude where results should be biased
  * radius `integer`: If radius <b>and</b> position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.
  * topLeft `string`: Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.
  * btmRight `string`: Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.
  * language `string`: Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
  * idxSet `string`: A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:
  * view `string` (values: Unified, IN, PK, IL, MA): Geopolitical View.

#### Output
*Output schema unknown*

### search.versionNumber.search.query.ext.get
Fuzzy Search


```js
tomtom_search.search.versionNumber.search.query.ext.get({
  "versionNumber": 0,
  "query": "",
  "ext": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 2): Service version number. The current value is 2.
  * query **required** `string`: Query string. Must be properly URL encoded.
  * ext **required** `string` (values: json, jsonp, js, xml): Expected response format.
  * typeahead `boolean`: If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.
  * limit `integer`: Maximum number of search results that will be returned.
  * ofs `integer`: Starting offset of the returned results within the full result set.
  * countrySet `string`: Comma separated string of country codes. This will limit the search to the specified countries.
  * lat `number`: Latitude where results should be biased.
  * lon `number`: Longitude where results should be biased
  * radius `integer`: If radius <b>and</b> position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.
  * topLeft `string`: Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.
  * btmRight `string`: Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.
  * language `string`: Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
  * extendedPostalCodesFor `string`: Indexes for which extended postal codes should be included in the results. Available indexes are:
  * minFuzzyLevel `integer`: Minimum fuzziness level to be used.
  * maxFuzzyLevel `integer`: Maximum fuzziness level to be used.
  * idxSet `string`: A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:
  * view `string` (values: Unified, IN, PK, IL, MA): Geopolitical View.

#### Output
*Output schema unknown*

### search.versionNumber.searchAlongRoute.query.ext.post
Along Route Search


```js
tomtom_search.search.versionNumber.searchAlongRoute.query.ext.post({
  "versionNumber": 0,
  "query": "",
  "ext": "",
  "maxDetourTime": 0
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 2): Service version number. The current value is 2.
  * query **required** `string`: Query string. Must be properly URL encoded.
  * ext **required** `string` (values: json, jsonp, js, xml): Expected response format.
  * maxDetourTime **required** `integer`: Maximum detour time
  * limit `integer`: Maximum number of search results that will be returned.
  * body `object`
    * route `object`
      * points `array`
        * items `object`
          * lat `number`
          * lon `number`

#### Output
*Output schema unknown*

### search.versionNumber.structuredGeocode.ext.get
Structured Geocode


```js
tomtom_search.search.versionNumber.structuredGeocode.ext.get({
  "versionNumber": 0,
  "ext": "",
  "countryCode": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 2): Service version number. The current value is 2.
  * ext **required** `string` (values: json, jsonp, js, xml): Expected response format.
  * countryCode **required** `string`: 2 or 3 letter country code (e.g.: FR, ES).
  * limit `integer`: Maximum number of search results that will be returned.
  * ofs `integer`: Starting offset of the returned results within the full result set.
  * streetNumber `string`: The street number for the structured address.
  * streetName `string`: The street name for the structured address.
  * crossStreet `string`: The cross street name for the structured address.
  * municipality `string`: The municipality (city/town) for the structured address.
  * municipalitySubdivision `string`: The municipality subdivision (sub/super city) for the structured address.
  * countryTertiarySubdivision `string`: The named area for the structured address.
  * countrySecondarySubdivision `string`: The county for the structured address.
  * countrySubdivision `string`: The state or province for the structured address.
  * postalCode `string`: The zip code or postal code for the structured address.
  * language `string`: Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
  * extendedPostalCodesFor `string`: Indexes for which extended postal codes should be included in the results. Available indexes are:

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
