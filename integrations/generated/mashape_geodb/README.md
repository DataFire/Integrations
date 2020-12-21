# @datafire/mashape_geodb

Client library for GeoDB Cities API

## Installation and Usage
```bash
npm install --save @datafire/mashape_geodb
```
```js
let mashape_geodb = require('@datafire/mashape_geodb').create({
  UserSecurity: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The GeoDB API focuses on getting global city and region data. Easily obtain country, region, and city data for use
in your apps! 
<ul>
  <li>Filter cities by name prefix, country, location, time-zone, and even minimum population.</li>
  <li>Sort cities by name, country code, elevation, and population - or any combination of these.</li> 
  <li>Get all country regions.</li> <li>Get all cities in a given region.</li>
  <li>
    Display results in multiple languages.</li> <li>RESTful API adheres to industry best-practices, including
    HATEOAS-style links to facilitate paging results.
  </li> 
  <li>Backed by cloud-based load-balanced infrastructure for resiliency and performance!</li>
  <li>Data is periodically refreshed from GeoNames and WikiData.</li>
</ul>
<p>Notes:
<ul>
  <li>
    Since the database is periodically updated, this may <strong>very rarely</strong> result in certain cities
    being marked deleted (e.g., duplicates removed). By default, endpoints returning city data will exclude
    cities marked deleted. However, in the unlikely event that this occurs while your app is paging through a set
    of affected results - and you care about the paged results suddenly changing underneath - specify 
    <tt>includeDeleted=SINCE_YESTERDAY</tt> (or <tt>SINCE_LAST_WEEK</tt> if you're really paranoid!).
  </li>
</ul>
<hr/>
<h3>Useful Resources</h3>
<ul>
  <li>
    SDKs
    <ul>
      <li>
        <a href='https://www.npmjs.com/package/wft-geodb-angular-client'>Angular</a>, 
        <a href='https://github.com/wirefreethought/geodb-sample-angular-app'>Sample App</a>
      </li>
      <li><a href='https://github.com/wirefreethought/geodb-java-client'>Java</a></li>
      <li><a href='https://www.npmjs.com/package/wft-geodb-js-client'>JavaScript</a></li>
    </ul>
    <li><a href='swagger.json'>Swagger Docs</a></li>
    <li><a href='http://creativecommons.org/licenses/by/3.0/'>Usage License</a></li>
  </li>      
</ul>


## Actions

### findAdminDivisionsUsingGET
Find administrative divisions, filtering by optional criteria. If no criteria are set, you will get back all
known divisions.



```js
mashape_geodb.findAdminDivisionsUsingGET({}, context)
```

#### Input
* input `object`
  * location `string`: Only places near this location. Latitude/longitude in ISO-6709 format: ±DD.DDDD±DDD.DDDD
  * radius `integer`: The location radius within which to find places
  * distanceUnit `string`: The unit of distance: MI | KM
  * countryIds `string`: Only places in these countries (comma-delimited country codes or WikiData ids)
  * excludedCountryIds `string`: Only places NOT in these countries (comma-delimited country codes or WikiData ids)
  * minPopulation `integer`: Only places having at least this population
  * maxPopulation `integer`: Only places having no more than this population
  * namePrefix `string`: Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name
  * timeZoneIds `string`: Only places in these time-zones (comma-delimited)
  * asciiMode `boolean`: Display results using ASCII characters
  * hateoasMode `boolean`: Include HATEOAS-style links in results
  * languageCode `string`: Display results in this language
  * limit `integer`: The maximum number of results to retrieve
  * offset `integer`: The zero-ary offset index into the results
  * sort `string`: How to sort place results. 
  * includeDeleted `string`: Whether to include any divisions marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE

#### Output
* output [PopulatedPlacesResponse](#populatedplacesresponse)

### getAdminDivisionUsingGET
Get the details for a specific administrative division, including location coordinates, population, and
elevation above sea-level (if available).



```js
mashape_geodb.getAdminDivisionUsingGET({
  "divisionId": ""
}, context)
```

#### Input
* input `object`
  * divisionId **required** `string`: An admin-division id (either native 'id' or 'wikiDataId')
  * asciiMode `boolean`: Display results using ASCII characters
  * languageCode `string`: Display results in this language

#### Output
* output [PopulatedPlaceResponse](#populatedplaceresponse)

### findCitiesNearAdminDivisionUsingGET
Find cities near the given administrative division, filtering by optional criteria. If no criteria are set, you
will get back all known cities.



```js
mashape_geodb.findCitiesNearAdminDivisionUsingGET({
  "divisionId": ""
}, context)
```

#### Input
* input `object`
  * divisionId **required** `string`: An admin-division id (either native 'id' or 'wikiDataId')
  * radius `integer`: The location radius within which to find places
  * distanceUnit `string`: The unit of distance: MI | KM
  * countryIds `string`: Only places in these countries (comma-delimited country codes or WikiData ids)
  * excludedCountryIds `string`: Only places NOT in these countries (comma-delimited country codes or WikiData ids)
  * minPopulation `integer`: Only places having at least this population
  * maxPopulation `integer`: Only places having no more than this population
  * namePrefix `string`: Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name
  * timeZoneIds `string`: Only places in these time-zones (comma-delimited)
  * types `string`: Only places for these types (comma-delimited): CITY | ADM2
  * asciiMode `boolean`: Display results using ASCII characters
  * hateoasMode `boolean`: Include HATEOAS-style links in results
  * languageCode `string`: Display results in this language
  * limit `integer`: The maximum number of results to retrieve
  * offset `integer`: The zero-ary offset index into the results
  * sort `string`: How to sort place results. 
  * includeDeleted `string`: Whether to include any divisions marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE

#### Output
* output [PopulatedPlacesResponse](#populatedplacesresponse)

### findDivisionsNearAdminDivisionUsingGET
Find administrative divisions near the given origin division, filtering by optional criteria. If no criteria
are set, you will get back all known divisions.



```js
mashape_geodb.findDivisionsNearAdminDivisionUsingGET({
  "divisionId": ""
}, context)
```

#### Input
* input `object`
  * divisionId **required** `string`: An admin-division id (either native 'id' or 'wikiDataId')
  * radius `integer`: The location radius within which to find places
  * distanceUnit `string`: The unit of distance: MI | KM
  * countryIds `string`: Only places in these countries (comma-delimited country codes or WikiData ids)
  * excludedCountryIds `string`: Only places NOT in these countries (comma-delimited country codes or WikiData ids)
  * minPopulation `integer`: Only places having at least this population
  * maxPopulation `integer`: Only places having no more than this population
  * namePrefix `string`: Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name
  * timeZoneIds `string`: Only places in these time-zones (comma-delimited)
  * asciiMode `boolean`: Display results using ASCII characters
  * hateoasMode `boolean`: Include HATEOAS-style links in results
  * languageCode `string`: Display results in this language
  * limit `integer`: The maximum number of results to retrieve
  * offset `integer`: The zero-ary offset index into the results
  * sort `string`: How to sort place results. 
  * includeDeleted `string`: Whether to include any divisions marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE

#### Output
* output [PopulatedPlacesResponse](#populatedplacesresponse)

### findCitiesUsingGET
Find cities, filtering by optional criteria. If no criteria are set, you will get back all known cities.



```js
mashape_geodb.findCitiesUsingGET({}, context)
```

#### Input
* input `object`
  * location `string`: Only places near this location. Latitude/longitude in ISO-6709 format: ±DD.DDDD±DDD.DDDD
  * radius `integer`: The location radius within which to find places
  * distanceUnit `string`: The unit of distance: MI | KM
  * countryIds `string`: Only places in these countries (comma-delimited country codes or WikiData ids)
  * excludedCountryIds `string`: Only places NOT in these countries (comma-delimited country codes or WikiData ids)
  * minPopulation `integer`: Only places having at least this population
  * maxPopulation `integer`: Only places having no more than this population
  * namePrefix `string`: Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name
  * timeZoneIds `string`: Only places in these time-zones (comma-delimited)
  * types `string`: Only places for these types (comma-delimited): CITY | ADM2
  * asciiMode `boolean`: Display results using ASCII characters
  * hateoasMode `boolean`: Include HATEOAS-style links in results
  * languageCode `string`: Display results in this language
  * limit `integer`: The maximum number of results to retrieve
  * offset `integer`: The zero-ary offset index into the results
  * sort `string`: How to sort place results. 
  * includeDeleted `string`: Whether to include any divisions marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE

#### Output
* output [PopulatedPlacesResponse](#populatedplacesresponse)

### getCityUsingGET
Get the details for a specific city, including location coordinates, population, and elevation above sea-level
(if available).



```js
mashape_geodb.getCityUsingGET({
  "cityId": ""
}, context)
```

#### Input
* input `object`
  * cityId **required** `string`: A city id (either native 'id' or 'wikiDataId')
  * asciiMode `boolean`: Display results using ASCII characters
  * languageCode `string`: Display results in this language

#### Output
* output [PopulatedPlaceResponse](#populatedplaceresponse)

### getCityDateTimeUsingGET
Get city date-time


```js
mashape_geodb.getCityDateTimeUsingGET({
  "cityId": ""
}, context)
```

#### Input
* input `object`
  * cityId **required** `string`: A city id (either native 'id' or 'wikiDataId')

#### Output
* output [DateTimeResponse](#datetimeresponse)

### getCityDistanceUsingGET
Get distance from the given city


```js
mashape_geodb.getCityDistanceUsingGET({
  "cityId": "",
  "toCityId": ""
}, context)
```

#### Input
* input `object`
  * cityId **required** `string`: A city id (either native 'id' or 'wikiDataId')
  * toCityId **required** `string`: Distance to this city
  * distanceUnit `string`: The unit of distance: MI | KM

#### Output
* output [DistanceResponse](#distanceresponse)

### findCitiesNearCityUsingGET
Find cities near the given origin city, filtering by optional criteria. If no criteria are set, you will get
back all known cities.



```js
mashape_geodb.findCitiesNearCityUsingGET({
  "cityId": ""
}, context)
```

#### Input
* input `object`
  * cityId **required** `string`: A city id (either native 'id' or 'wikiDataId')
  * radius `integer`: The location radius within which to find places
  * distanceUnit `string`: The unit of distance: MI | KM
  * countryIds `string`: Only places in these countries (comma-delimited country codes or WikiData ids)
  * excludedCountryIds `string`: Only places NOT in these countries (comma-delimited country codes or WikiData ids)
  * minPopulation `integer`: Only places having at least this population
  * maxPopulation `integer`: Only places having no more than this population
  * namePrefix `string`: Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name
  * timeZoneIds `string`: Only places in these time-zones (comma-delimited)
  * types `string`: Only places for these types (comma-delimited): CITY | ADM2
  * asciiMode `boolean`: Display results using ASCII characters
  * hateoasMode `boolean`: Include HATEOAS-style links in results
  * languageCode `string`: Display results in this language
  * limit `integer`: The maximum number of results to retrieve
  * offset `integer`: The zero-ary offset index into the results
  * sort `string`: How to sort place results. 
  * includeDeleted `string`: Whether to include any divisions marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE

#### Output
* output [PopulatedPlacesResponse](#populatedplacesresponse)

### getCityTimeUsingGET
Get city time


```js
mashape_geodb.getCityTimeUsingGET({
  "cityId": ""
}, context)
```

#### Input
* input `object`
  * cityId **required** `string`: A city id (either native 'id' or 'wikiDataId')

#### Output
* output [TimeResponse](#timeresponse)

### getCountriesUsingGET
Find countries, filtering by optional criteria. If no criteria are set, you will get back all known countries.



```js
mashape_geodb.getCountriesUsingGET({}, context)
```

#### Input
* input `object`
  * currencyCode `string`: Only countries supporting this currency
  * namePrefix `string`: Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name
  * asciiMode `boolean`: Display results using ASCII characters
  * hateoasMode `boolean`: Include HATEOAS-style links in results
  * languageCode `string`: Display results in this language
  * limit `integer`: The maximum number of results to retrieve
  * offset `integer`: The zero-ary offset index into the results

#### Output
* output [CountriesResponse](#countriesresponse)

### getCountryUsingGET
Get the details for a specific country, including number of regions.


```js
mashape_geodb.getCountryUsingGET({
  "countryId": ""
}, context)
```

#### Input
* input `object`
  * countryId **required** `string`: An ISO-3166 country code or WikiData id
  * asciiMode `boolean`: Display results using ASCII characters
  * languageCode `string`: Display results in this language

#### Output
* output [CountryResponse](#countryresponse)

### getRegionsUsingGET
Get all regions in a specific country. These could be states, provinces, districts, or otherwise major
political divisions.



```js
mashape_geodb.getRegionsUsingGET({
  "countryId": ""
}, context)
```

#### Input
* input `object`
  * countryId **required** `string`: An ISO-3166 country code or WikiData id
  * namePrefix `string`: Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name
  * asciiMode `boolean`: Display results using ASCII characters
  * hateoasMode `boolean`: Include HATEOAS-style links in results
  * languageCode `string`: Display results in this language
  * limit `integer`: The maximum number of results to retrieve
  * offset `integer`: The zero-ary offset index into the results

#### Output
* output [RegionsResponse](#regionsresponse)

### getRegionUsingGET
Get the details of a specific country region, including number of cities.


```js
mashape_geodb.getRegionUsingGET({
  "countryId": "",
  "regionCode": ""
}, context)
```

#### Input
* input `object`
  * countryId **required** `string`: An ISO-3166 country code or WikiData id
  * regionCode **required** `string`: An ISO-3166 or FIPS region code
  * asciiMode `boolean`: Display results using ASCII characters
  * languageCode `string`: Display results in this language

#### Output
* output [RegionResponse](#regionresponse)

### findRegionDivisionsUsingGET
Get the administrative divisions in a specific country region. The country and region info is omitted in the
response.



```js
mashape_geodb.findRegionDivisionsUsingGET({
  "countryId": "",
  "regionCode": ""
}, context)
```

#### Input
* input `object`
  * countryId **required** `string`: An ISO-3166 country code or WikiData id
  * regionCode **required** `string`: An ISO-3166 or FIPS region code
  * minPopulation `integer`: Only places having at least this population
  * maxPopulation `integer`: Only places having no more than this population
  * namePrefix `string`: Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name
  * timeZoneIds `string`: Only places in these time-zones (comma-delimited)
  * asciiMode `boolean`: Display results using ASCII characters
  * hateoasMode `boolean`: Include HATEOAS-style links in results
  * languageCode `string`: Display results in this language
  * limit `integer`: The maximum number of results to retrieve
  * offset `integer`: The zero-ary offset index into the results
  * sort `string`: How to sort place results. 
  * includeDeleted `string`: Whether to include any divisions marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE

#### Output
* output [PopulatedPlacesResponse](#populatedplacesresponse)

### findRegionCitiesUsingGET
Get the cities in a specific country region. The country and region info is omitted in the response.



```js
mashape_geodb.findRegionCitiesUsingGET({
  "countryId": "",
  "regionCode": ""
}, context)
```

#### Input
* input `object`
  * countryId **required** `string`: An ISO-3166 country code or WikiData id
  * regionCode **required** `string`: An ISO-3166 or FIPS region code
  * minPopulation `integer`: Only places having at least this population
  * maxPopulation `integer`: Only places having no more than this population
  * namePrefix `string`: Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name
  * timeZoneIds `string`: Only places in these time-zones (comma-delimited)
  * types `string`: Only places for these types (comma-delimited): CITY | ADM2
  * asciiMode `boolean`: Display results using ASCII characters
  * hateoasMode `boolean`: Include HATEOAS-style links in results
  * languageCode `string`: Display results in this language
  * limit `integer`: The maximum number of results to retrieve
  * offset `integer`: The zero-ary offset index into the results
  * sort `string`: How to sort place results. 
  * includeDeleted `string`: Whether to include any divisions marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE

#### Output
* output [PopulatedPlacesResponse](#populatedplacesresponse)

### findCitiesNearLocationUsingGET
Find cities near the given location, filtering by optional criteria. If no criteria are set, you will get back
all known cities.



```js
mashape_geodb.findCitiesNearLocationUsingGET({
  "locationId": ""
}, context)
```

#### Input
* input `object`
  * locationId **required** `string`: A latitude/longitude in ISO-6709 format: ±DD.DDDD±DDD.DDDD
  * radius `integer`: The location radius within which to find places
  * distanceUnit `string`: The unit of distance: MI | KM
  * countryIds `string`: Only places in these countries (comma-delimited country codes or WikiData ids)
  * excludedCountryIds `string`: Only places NOT in these countries (comma-delimited country codes or WikiData ids)
  * minPopulation `integer`: Only places having at least this population
  * maxPopulation `integer`: Only places having no more than this population
  * namePrefix `string`: Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name
  * timeZoneIds `string`: Only places in these time-zones (comma-delimited)
  * types `string`: Only places for these types (comma-delimited): CITY | ADM2
  * asciiMode `boolean`: Display results using ASCII characters
  * hateoasMode `boolean`: Include HATEOAS-style links in results
  * languageCode `string`: Display results in this language
  * limit `integer`: The maximum number of results to retrieve
  * offset `integer`: The zero-ary offset index into the results
  * sort `string`: How to sort place results. 
  * includeDeleted `string`: Whether to include any divisions marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE

#### Output
* output [PopulatedPlacesResponse](#populatedplacesresponse)

### findDivisionsNearLocationUsingGET
Find administrative divisions near the given location, filtering by optional criteria. If no criteria are set,
you will get back all known divisions.



```js
mashape_geodb.findDivisionsNearLocationUsingGET({
  "locationId": ""
}, context)
```

#### Input
* input `object`
  * locationId **required** `string`: A latitude/longitude in ISO-6709 format: ±DD.DDDD±DDD.DDDD
  * radius `integer`: The location radius within which to find places
  * distanceUnit `string`: The unit of distance: MI | KM
  * countryIds `string`: Only places in these countries (comma-delimited country codes or WikiData ids)
  * excludedCountryIds `string`: Only places NOT in these countries (comma-delimited country codes or WikiData ids)
  * minPopulation `integer`: Only places having at least this population
  * maxPopulation `integer`: Only places having no more than this population
  * namePrefix `string`: Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name
  * timeZoneIds `string`: Only places in these time-zones (comma-delimited)
  * asciiMode `boolean`: Display results using ASCII characters
  * hateoasMode `boolean`: Include HATEOAS-style links in results
  * languageCode `string`: Display results in this language
  * limit `integer`: The maximum number of results to retrieve
  * offset `integer`: The zero-ary offset index into the results
  * sort `string`: How to sort place results. 
  * includeDeleted `string`: Whether to include any divisions marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE

#### Output
* output [PopulatedPlacesResponse](#populatedplacesresponse)

### getCurrenciesUsingGET
Find currencies, filtering by optional criteria. If no criteria are set, you will get back all known currencies.


```js
mashape_geodb.getCurrenciesUsingGET({
  "countryId": ""
}, context)
```

#### Input
* input `object`
  * countryId **required** `string`: Currencies for this country id
  * hateoasMode `boolean`: Include HATEOAS-style links in results
  * limit `integer`: The maximum number of results to retrieve
  * offset `integer`: The zero-ary offset index into the results

#### Output
* output [CurrenciesResponse](#currenciesresponse)

### getLanguagesUsingGET
Get all supported languages


```js
mashape_geodb.getLanguagesUsingGET({}, context)
```

#### Input
* input `object`
  * hateoasMode `boolean`: Include HATEOAS-style links in results
  * limit `integer`: The maximum number of results to retrieve
  * offset `integer`: The zero-ary offset index into the results

#### Output
* output [LanguagesResponse](#languagesresponse)

### getLocalesUsingGET
Get all known locales


```js
mashape_geodb.getLocalesUsingGET({}, context)
```

#### Input
* input `object`
  * hateoasMode `boolean`: Include HATEOAS-style links in results
  * limit `integer`: The maximum number of results to retrieve
  * offset `integer`: The zero-ary offset index into the results

#### Output
* output [LocalesResponse](#localesresponse)

### getTimezonesUsingGET
Get all known time-zones


```js
mashape_geodb.getTimezonesUsingGET({}, context)
```

#### Input
* input `object`
  * hateoasMode `boolean`: Include HATEOAS-style links in results
  * limit `integer`: The maximum number of results to retrieve
  * offset `integer`: The zero-ary offset index into the results

#### Output
* output [TimeZonesResponse](#timezonesresponse)

### getTimeZoneDateTimeUsingGET
Get time-zone date-time


```js
mashape_geodb.getTimeZoneDateTimeUsingGET({
  "zoneId": ""
}, context)
```

#### Input
* input `object`
  * zoneId **required** `string`: A time-zone id

#### Output
* output [DateTimeResponse](#datetimeresponse)

### getTimeZoneTimeUsingGET
Get time-zone time


```js
mashape_geodb.getTimeZoneTimeUsingGET({
  "zoneId": ""
}, context)
```

#### Input
* input `object`
  * zoneId **required** `string`: A time-zone id

#### Output
* output [TimeResponse](#timeresponse)



## Definitions

### BadRequestResponse
* Bad Request Response `object`: Bad Request Response
  * errors `array`
    * items [Error](#error)

### BaseCollectionResponse
* Base Collection Response `object`: Common properties for all collection  responses
  * errors `array`
    * items [Error](#error)
  * links `array`
    * items [Link](#link)
  * metadata [Metadata](#metadata)

### BaseResponse
* Base Response `object`: Common properties for all responses
  * errors `array`
    * items [Error](#error)

### CountriesResponse
* Countries Response `object`: A list of countries
  * errors `array`
    * items [Error](#error)
  * links `array`
    * items [Link](#link)
  * metadata [Metadata](#metadata)
  * data `array`
    * items [CountrySummary](#countrysummary)

### CountryDetails
* Country Details `object`: Full country details
  * code `string`: The ISO-3166 country code
  * currencyCodes `array`: A list of supported ISO-4217 currency codes
    * items `string`
  * flagImageUri `string`: The country flag image
  * name `string`: The country name (varies by languageCode)
  * numRegions `integer`: The number of regions in this country
  * wikiDataId `string`: The country WikiData id

### CountryResponse
* Country Response `object`: Country details response
  * errors `array`
    * items [Error](#error)
  * data [CountryDetails](#countrydetails)

### CountrySummary
* Country Summary `object`: Minimal country info
  * code `string`: The ISO-3166 country code
  * currencyCodes `array`: A list of supported ISO-4217 currency codes
    * items `string`
  * name `string`: The country name (varies by languageCode)
  * wikiDataId `string`: The country WikiData id

### CurrenciesResponse
* Currencies Response `object`: A list of currencies
  * errors `array`
    * items [Error](#error)
  * links `array`
    * items [Link](#link)
  * metadata [Metadata](#metadata)
  * data `array`
    * items [Currency](#currency)

### Currency
* Currency `object`: Currency info
  * code `string`: A ISO-4217 currency code
  * countryCodes `array`: A list of ISO-3166 country codes
    * items `string`

### DateTimeResponse
* Date-Time Response `object`: An ISO-6801 date-time response
  * errors `array`
    * items [Error](#error)
  * data `string`: The date-time in ISO-6801 format: yyyyMMdd'T'HHmmssZ

### DistanceResponse
* Distance Response `object`: A decimal distance (in miles or kilometers)
  * errors `array`
    * items [Error](#error)
  * data `number`: The distance in units as set by the distanceUnit param (defaults to miles)

### Error
* Error `object`: An error that occurred processing the request
  * code [ErrorCode](#errorcode)
  * message `string`

### ErrorCode
* ErrorCode `string` (values: ACCESS_DENIED, ENTITY_NOT_FOUND, INCOMPATIBLE, PARAM_INVALID, PARAMS_MUTUALLY_EXCLUSIVE, REQUEST_UNPROCESSABLE): One of a set of enumerated error codes representing the types of errors that can occur processing a

### ForbiddenResponse
* Forbidden Response `object`: Forbidden Response
  * errors `array`
    * items [Error](#error)

### LanguageDescriptor
* Language `object`: A language supported by the service
  * code `string` (values: undefined, aa, ab, ae, af, ak, am, an, ar, as, av, ay, az, ba, be, bg, bh, bi, bm, bn, bo, br, bs, ca, ce, ch, co, cr, cs, cu, cv, cy, da, de, dv, dz, ee, el, en, eo, es, et, eu, fa, ff, fi, fj, fo, fr, fy, ga, gd, gl, gn, gu, gv, ha, he, hi, ho, hr, ht, hu, hy, hz, ia, id, ie, ig, ii, ik, io, is, it, iu, ja, jv, ka, kg, ki, kj, kk, kl, km, kn, ko, kr, ks, ku, kv, kw, ky, la, lb, lg, li, ln, lo, lt, lu, lv, mg, mh, mi, mk, ml, mn, mr, ms, mt, my, na, nb, nd, ne, ng, nl, nn, no, nr, nv, ny, oc, oj, om, or, os, pa, pi, pl, ps, pt, qu, rm, rn, ro, ru, rw, sa, sc, sd, se, sg, si, sk, sl, sm, sn, so, sq, sr, ss, st, su, sv, sw, ta, te, tg, th, ti, tk, tl, tn, to, tr, ts, tt, tw, ty, ug, uk, ur, uz, ve, vi, vo, wa, wo, xh, yi, yo, za, zh, zu)
  * name `string`

### LanguagesResponse
* Languages Response `object`: A list of languages supported by the system
  * errors `array`
    * items [Error](#error)
  * links `array`
    * items [Link](#link)
  * metadata [Metadata](#metadata)
  * data `array`
    * items [LanguageDescriptor](#languagedescriptor)

### Link
* Link `object`: A HATEAOS link
  * href `string`
  * rel `string`

### Locale
* Locale `object`: A locale representing a language/region combination
  * code `string`: The locale code

### LocalesResponse
* Locales Response `object`: A list of locales
  * errors `array`
    * items [Error](#error)
  * links `array`
    * items [Link](#link)
  * metadata [Metadata](#metadata)
  * data `array`
    * items [Locale](#locale)

### Metadata
* Metadata `object`: Result metadata (currently only associated with collection results)
  * currentOffset `integer`: The zero-ary offset into the results (0 is the first result)
  * totalCount `integer`: The total number of results across pages

### NotFoundResponse
* Not Found Response `object`: Not Found Response
  * errors `array`
    * items [Error](#error)

### PopulatedPlaceDetails
* Populated-Place Details `object`: Full populated-place details
  * country `string`: The country name (varies by languageCode)
  * countryCode `string`: The ISO-3166 country code
  * deleted `boolean`: If this place has been soft-deleted
  * elevationMeters `integer`: The place elevation (meters) above sea level
  * id `integer`: The place GeoDB native id
  * latitude `number`: The place latittude (-90.0 to 90.0)
  * longitude `number`: The place longitude (-180.0 to 180.0)
  * name `string`: The place name (varies by languageCode)
  * population `integer`: The place population
  * region `string`: The region name (varies by languageCode)
  * regionCode `string`: The ISO or FIPS region code
  * timezone `string`: The place timezone id
  * type [PopulatedPlaceType](#populatedplacetype)
  * wikiDataId `string`: The place WikiData id

### PopulatedPlaceResponse
* Populated-Place Response `object`: Populated-place details response
  * errors `array`
    * items [Error](#error)
  * data [PopulatedPlaceDetails](#populatedplacedetails)

### PopulatedPlaceSummary
* PopulatedPlaceSummary `object`: Minimal populated-place info
  * country `string`: The country name (varies by languageCode)
  * countryCode `string`: The ISO-3166 country code
  * distance `number`: Included if this is the result of a distance query
  * id `integer`: The place GeoDB native id
  * latitude `number`: The place latittude (-90.0 to 90.0)
  * longitude `number`: The place longitude (-180.0 to 180.0)
  * name `string`: The place name (varies by languageCode)
  * region `string`: The region name (varies by languageCode)
  * regionCode `string`: The ISO or FIPS region code
  * type [PopulatedPlaceType](#populatedplacetype)
  * wikiDataId `string`: The place WikiData id

### PopulatedPlaceType
* PopulatedPlaceType `string` (values: ADM2, CITY): One of a set of enumerated populated-place types known by the service (currently only level-2 admin divisions and

### PopulatedPlacesResponse
* Populated-Places Response `object`: A list of populated places
  * errors `array`
    * items [Error](#error)
  * links `array`
    * items [Link](#link)
  * metadata [Metadata](#metadata)
  * data `array`
    * items [PopulatedPlaceSummary](#populatedplacesummary)

### RegionDetails
* Country Region Details `object`: Full country region details
  * capital `string`: The region's capital city (varies by languageCode)
  * countryCode `string`: An ISO-3166 country code
  * fipsCode `string`: The FIPS 10-4 region code
  * isoCode `string`: The ISO region code
  * name `string`: The region name (varies by languageCode)
  * numCities `integer`: The number of cities in this region
  * wikiDataId `string`: The region WikiData id

### RegionResponse
* Country Region Response `object`: Country region details response
  * errors `array`
    * items [Error](#error)
  * data [RegionDetails](#regiondetails)

### RegionSummary
* Country Region Summary `object`: Minimal country region info
  * countryCode `string`: An ISO-3166 country code
  * fipsCode `string`: The FIPS 10-4 region code
  * isoCode `string`: The ISO region code
  * name `string`: The region name (varies by languageCode)
  * wikiDataId `string`: The region WikiData id

### RegionsResponse
* Country Regions Response `object`: A list of country regions
  * errors `array`
    * items [Error](#error)
  * links `array`
    * items [Link](#link)
  * metadata [Metadata](#metadata)
  * data `array`: A list of RegionSummaries
    * items [RegionSummary](#regionsummary)

### TimeResponse
* Time Response `object`: An ISO-8601 time response
  * errors `array`
    * items [Error](#error)
  * data `string`: The time in ISO-8601 format: HHmmss.SSSZ

### TimeZoneDescriptor
* Time-Zone `object`: A time-zone
  * id `string`: The time-zone id
  * name `string`: The time-zone name
  * rawUtcOffsetHours `integer`: The number of hours this time-zone is offset from UTC

### TimeZonesResponse
* Time-Zones Response `object`: A list of time-zones
  * errors `array`
    * items [Error](#error)
  * links `array`
    * items [Link](#link)
  * metadata [Metadata](#metadata)
  * data `array`
    * items [TimeZoneDescriptor](#timezonedescriptor)


