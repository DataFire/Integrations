# @datafire/mashape_geodb

Client library for GeoDB

## Installation and Usage
```bash
npm install --save @datafire/mashape_geodb
```
```js
let mashape_geodb = require('@datafire/mashape_geodb').create({
  UserSecurity: ""
});

mashape_geodb.getTimezonesUsingGET({}).then(data => {
  console.log(data);
});
```

## Description

The GeoDB API focuses on getting global city and region data. Easily obtain country, region, and city data for use in your apps! <ul><li>Filter cities by name prefix, country, location, time-zone, and even minimum population.</li><li>Sort cities by name, country code, elevation, and population - or any combination of these.</li> <li>Get all country regions.</li> <li>Get all cities in a given region.</li><li>Display results in multiple languages.</li> <li>RESTful API adheres to industry best-practices, including HATEOAS-style links to facilitate paging results.</li> <li>Backed by cloud-based load-balanced infrastructure for resiliency and performance!</li> <li>Data is periodically refreshed from GeoNames and WikiData.</li></ul><p>Notes:<ul><li>All endpoints implicitly support JSONP-style invocation via an optional <tt>callback</tt> param.</li><li>Since the database is periodically updated, this may <strong>very rarely</strong> result in certain cities being marked deleted (e.g., duplicates removed). By default, endpoints returning city data will exclude cities marked deleted. However, in the unlikely event that this occurs while your app is paging through a set of affected results - and you care about the paged results suddenly changing underneath - specify <tt>includeDeleted=SINCE_YESTERDAY</tt> (or <tt>SINCE_LAST_WEEK</tt> if you're really paranoid!).</li></ul><hr/><h3>Useful Resources</h3><ul><li>SDKs<ul><li><a href='https://www.npmjs.com/package/wft-geodb-angular-client'>Angular</a>, <a href='https://github.com/wirefreethought/geo-db-sample-angular-app'>Sample App</a></li><li><a href='https://github.com/wirefreethought/geo-db-java-client'>Java</a></li><li><a href='https://www.npmjs.com/package/wft-geodb-js-client'>JavaScript</a></li></ul><li><a href='swagger.json'>Swagger Docs</a></li><li><a href='http://creativecommons.org/licenses/by/3.0/'>Usage License</a></i></li></ul>

## Actions

### findCitiesUsingGET
Find cities, filtering by optional criteria. If no criteria are set, you will get back all known cities.


```js
mashape_geodb.findCitiesUsingGET({}, context)
```

#### Input
* input `object`
  * namePrefix `string`: Only cities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name as it appears in that language.
  * countryIds `string`: Only cities in these countries (comma-delimited country codes or WikiData ids)
  * excludedCountryIds `string`: Only cities NOT in these countries (comma-delimited country codes or WikiData ids)
  * minPopulation `integer`: Only cities having at least this population
  * location `string`: Only cities near this location. Latitude/longitude in ISO-6709 format: ±DD.DDDD±DDD.DDDD
  * radius `integer`: The location radius within which to find cities
  * distanceUnit `string`: The unit of distance: MI | KM
  * timeZoneIds `string`: Only cities in these time-zones
  * asciiMode `boolean`: Display results using ASCII characters
  * languageCode `string`: Display results in this language
  * limit `integer`: The maximum number of results to retrieve
  * offset `integer`: The zero-ary offset index into the results
  * sort `string`: How to sort the results. Format: ±SORT_FIELD,±SORT_FIELD where SORT_FIELD = countryCode | elevation | name | population
  * includeDeleted `string`: Whether to include any cities marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE

#### Output
* output [CitiesResponse](#citiesresponse)

### getCityUsingGET
Get the details for a specific city, including location coordinates, population, and elevation above sea-level (if available).


```js
mashape_geodb.getCityUsingGET({
  "cityId": ""
}, context)
```

#### Input
* input `object`
  * cityId **required** `string`: The city id (either native 'id' or 'wikiDataId')
  * asciiMode `boolean`: Display results using ASCII characters
  * languageCode `string`: Display results in this language

#### Output
* output [CityResponse](#cityresponse)

### getCityDateTimeUsingGET
Get city date-time


```js
mashape_geodb.getCityDateTimeUsingGET({
  "cityId": ""
}, context)
```

#### Input
* input `object`
  * cityId **required** `string`: The city id (either native 'id' or 'wikiDataId')

#### Output
* output [DateTimeResponse](#datetimeresponse)

### getCityDistanceUsingGET
Get distance to the given city


```js
mashape_geodb.getCityDistanceUsingGET({
  "cityId": "",
  "fromCityId": ""
}, context)
```

#### Input
* input `object`
  * cityId **required** `string`: The city id (either native 'id' or 'wikiDataId')
  * fromCityId **required** `string`: Distance from this city
  * distanceUnit `string`: The unit of distance: MI | KM

#### Output
* output [DistanceResponse](#distanceresponse)

### findCitiesNearCityUsingGET
Find cities near the given origin city, filtering by optional criteria. If no criteria are set, you will get back all known cities.


```js
mashape_geodb.findCitiesNearCityUsingGET({
  "cityId": ""
}, context)
```

#### Input
* input `object`
  * cityId **required** `string`: The city id (either native 'id' or 'wikiDataId')
  * minPopulation `integer`: Only cities having at least this population
  * radius `integer`: The location radius within which to find cities
  * distanceUnit `string`: The unit of distance: MI | KM
  * asciiMode `boolean`: Display results using ASCII characters
  * languageCode `string`: Display results in this language
  * limit `integer`: The maximum number of results to retrieve
  * offset `integer`: The zero-ary offset index into the results
  * sort `string`: How to sort the results. Format: ±SORT_FIELD,±SORT_FIELD where SORT_FIELD = countryCode | elevation | name | population
  * includeDeleted `string`: Whether to include any cities marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE

#### Output
* output [CitiesResponse](#citiesresponse)

### getCityTimeUsingGET
Get city time


```js
mashape_geodb.getCityTimeUsingGET({
  "cityId": ""
}, context)
```

#### Input
* input `object`
  * cityId **required** `string`: The city id (either native 'id' or 'wikiDataId')

#### Output
* output [TimeResponse](#timeresponse)

### getCountriesUsingGET
Find countries, filtering by optional criteria. If no criteria are set, you will get back all known countries.


```js
mashape_geodb.getCountriesUsingGET({}, context)
```

#### Input
* input `object`
  * namePrefix `string`: Only countries whose names start with this prefix. If languageCode is set, the prefix will be matched on the name as it appears in that language.
  * currencyCode `string`: Only countries supporting this currency
  * asciiMode `boolean`: Display results using ASCII characters
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
Get all regions in a specific country. These could be states, provinces, districts, or otherwise major political divisions.


```js
mashape_geodb.getRegionsUsingGET({
  "countryId": ""
}, context)
```

#### Input
* input `object`
  * countryId **required** `string`: An ISO-3166 country code or WikiData id
  * namePrefix `string`: Only regions whose names start with this prefix. If languageCode is set, the prefix will be matched on the name as it appears in that language.
  * asciiMode `boolean`: Display results using ASCII characters
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
  * minPopulation `integer`: Only cities having at least this population
  * asciiMode `boolean`: Display results using ASCII characters
  * languageCode `string`: Display results in this language
  * limit `integer`: The maximum number of results to retrieve
  * offset `integer`: The zero-ary offset index into the results
  * sort `string`: How to sort the results. Format: ±SORT_FIELD,±SORT_FIELD where SORT_FIELD = elevation | name | population
  * includeDeleted `string`: Whether to include any cities marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE

#### Output
* output [CitiesResponse](#citiesresponse)

### findCitiesNearLocationUsingGET
Find cities near the given location, filtering by optional criteria. If no criteria are set, you will get back all known cities.


```js
mashape_geodb.findCitiesNearLocationUsingGET({
  "locationId": ""
}, context)
```

#### Input
* input `object`
  * locationId **required** `string`: Only cities near this location. Latitude/longitude in ISO-6709 format: ±DD.DDDD±DDD.DDDD
  * minPopulation `integer`: Only cities having at least this population
  * radius `integer`: The location radius within which to find cities
  * distanceUnit `string`: The unit of distance: MI | KM
  * asciiMode `boolean`: Display results using ASCII characters
  * languageCode `string`: Display results in this language
  * limit `integer`: The maximum number of results to retrieve
  * offset `integer`: The zero-ary offset index into the results
  * sort `string`: How to sort the results. Format: ±SORT_FIELD,±SORT_FIELD where SORT_FIELD = countryCode | elevation | name | population
  * includeDeleted `string`: Whether to include any cities marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE

#### Output
* output [CitiesResponse](#citiesresponse)

### getCurrenciesUsingGET
Find currencies, filtering by optional criteria. If no criteria are set, you will get back all known currencies.


```js
mashape_geodb.getCurrenciesUsingGET({}, context)
```

#### Input
* input `object`
  * countryId `string`: Only currencies supported by this country
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
  * zoneId **required** `string`: The time-zone id

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
  * zoneId **required** `string`: The time-zone id

#### Output
* output [TimeResponse](#timeresponse)



## Definitions

### CitiesResponse
* CitiesResponse `object`
  * data `array`: A list of CitySummaries
    * items [CitySummary](#citysummary)
  * errors `array`: A list of WftErrors
    * items [WftError](#wfterror)
  * links `array`: A list of Links
    * items [Link](#link)
  * metadata [Metadata](#metadata)

### CityDetails
* CityDetails `object`
  * city `string`: The city name (varies by languageCode)
  * country `string`: The country name (varies by languageCode)
  * countryCode `string`: The ISO-3166 country code
  * deleted `boolean`: If this city has been soft-deleted
  * elevationMeters `integer`: The city elevation (meters) above sea level
  * id `integer`: The city GeoDB native id
  * latitude `number`: The city latittude (-90.0 to 90.0)
  * longitude `number`: The city longitude (-180.0 to 180.0)
  * population `integer`: The city population
  * region `string`: The region name (varies by languageCode)
  * regionCode `string`: The ISO or FIPS region code
  * timezone `string`: The city timezone id
  * wikiDataId `string`: The city WikiData id

### CityResponse
* CityResponse `object`
  * data [CityDetails](#citydetails)
  * errors `array`: A list of WftErrors
    * items [WftError](#wfterror)

### CitySummary
* CitySummary `object`
  * city `string`: The city name (varies by languageCode)
  * country `string`: The country name (varies by languageCode)
  * countryCode `string`: The ISO-3166 country code
  * distance `number`: Included if this is the result of a distance query
  * id `integer`: The city GeoDB native id
  * latitude `number`: The city latittude (-90.0 to 90.0)
  * longitude `number`: The city longitude (-180.0 to 180.0)
  * region `string`: The region name (varies by languageCode)
  * regionCode `string`: The ISO or FIPS region code
  * wikiDataId `string`: The city WikiData id

### CountriesResponse
* CountriesResponse `object`
  * data `array`: A list of CountrySummarys
    * items [CountrySummary](#countrysummary)
  * errors `array`: A list of WftErrors
    * items [WftError](#wfterror)
  * links `array`: A list of Links
    * items [Link](#link)
  * metadata [Metadata](#metadata)

### CountryDetails
* CountryDetails `object`
  * code `string`: The ISO-3166 country code
  * currencyCodes `array`: A list of supported ISO-4217 currency codes
    * items `string`
  * flagImageUri `string`: The country flag image
  * name `string`: The country name (varies by languageCode)
  * numRegions `integer`: The number of regions in this country
  * wikiDataId `string`: The country WikiData id

### CountryResponse
* CountryResponse `object`
  * data [CountryDetails](#countrydetails)
  * errors `array`: A list of WftErrors
    * items [WftError](#wfterror)

### CountrySummary
* CountrySummary `object`
  * code `string`: The ISO-3166 country code
  * currencyCodes `array`: A list of supported ISO-4217 currency codes
    * items `string`
  * name `string`: The country name (varies by languageCode)
  * wikiDataId `string`: The country WikiData id

### CurrenciesResponse
* CurrenciesResponse `object`
  * data `array`: A list of CurrencyDescriptors
    * items [CurrencyDescriptor](#currencydescriptor)
  * errors `array`: A list of WftErrors
    * items [WftError](#wfterror)
  * links `array`: A list of Links
    * items [Link](#link)
  * metadata [Metadata](#metadata)

### CurrencyDescriptor
* CurrencyDescriptor `object`
  * code `string`: A ISO-4217 currency code
  * countryCodes `array`: A list of ISO-3166 country codes
    * items `string`

### DateTimeResponse
* DateTimeResponse `object`
  * data `string`: The date-time in ISO-6801 format: yyyyMMdd'T'HHmmssZ
  * errors `array`
    * items [WftError](#wfterror)

### DistanceResponse
* DistanceResponse `object`
  * data `number`: The distance in units as set by the distanceUnit param (defaults to miles)
  * errors `array`
    * items [WftError](#wfterror)

### LanguageDescriptor
* LanguageDescriptor `object`
  * code `string` (values: undefined, aa, ab, ae, af, ak, am, an, ar, as, av, ay, az, ba, be, bg, bh, bi, bm, bn, bo, br, bs, ca, ce, ch, co, cr, cs, cu, cv, cy, da, de, dv, dz, ee, el, en, eo, es, et, eu, fa, ff, fi, fj, fo, fr, fy, ga, gd, gl, gn, gu, gv, ha, he, hi, ho, hr, ht, hu, hy, hz, ia, id, ie, ig, ii, ik, io, is, it, iu, ja, jv, ka, kg, ki, kj, kk, kl, km, kn, ko, kr, ks, ku, kv, kw, ky, la, lb, lg, li, ln, lo, lt, lu, lv, mg, mh, mi, mk, ml, mn, mr, ms, mt, my, na, nb, nd, ne, ng, nl, nn, no, nr, nv, ny, oc, oj, om, or, os, pa, pi, pl, ps, pt, qu, rm, rn, ro, ru, rw, sa, sc, sd, se, sg, si, sk, sl, sm, sn, so, sq, sr, ss, st, su, sv, sw, ta, te, tg, th, ti, tk, tl, tn, to, tr, ts, tt, tw, ty, ug, uk, ur, uz, ve, vi, vo, wa, wo, xh, yi, yo, za, zh, zu)
  * name `string`

### LanguagesResponse
* LanguagesResponse `object`
  * data `array`
    * items [LanguageDescriptor](#languagedescriptor)
  * errors `array`
    * items [WftError](#wfterror)
  * links `array`
    * items [Link](#link)
  * metadata [Metadata](#metadata)

### Link
* Link `object`
  * href `string`
  * rel `string`

### LocaleDescriptor
* LocaleDescriptor `object`
  * code `string`: The locale code

### LocalesResponse
* LocalesResponse `object`
  * data `array`: A list of LocalDescriptors
    * items [LocaleDescriptor](#localedescriptor)
  * errors `array`: A list of WftErrors
    * items [WftError](#wfterror)
  * links `array`: A list of Links
    * items [Link](#link)
  * metadata [Metadata](#metadata)

### Metadata
* Metadata `object`
  * currentOffset `integer`: The zero-ary offset into the results (0 is the first result)
  * totalCount `integer`: The total number of results across pages

### RegionDetails
* RegionDetails `object`
  * capital `string`: The region's capital city (varies by languageCode)
  * countryCode `string`: An ISO-3166 country code
  * fipsCode `string`: The FIPS 10-4 region code
  * isoCode `string`: The ISO region code
  * name `string`: The region name (varies by languageCode)
  * numCities `integer`: The number of cities in this region
  * wikiDataId `string`: The region WikiData id

### RegionResponse
* RegionResponse `object`
  * data [RegionDetails](#regiondetails)
  * errors `array`: A list of WftErrors
    * items [WftError](#wfterror)

### RegionSummary
* RegionSummary `object`
  * countryCode `string`: An ISO-3166 country code
  * fipsCode `string`: The FIPS 10-4 region code
  * isoCode `string`: The ISO region code
  * name `string`: The region name (varies by languageCode)
  * wikiDataId `string`: The region WikiData id

### RegionsResponse
* RegionsResponse `object`
  * data `array`: A list of RegionSummaries
    * items [RegionSummary](#regionsummary)
  * errors `array`: A list of WftErrors
    * items [WftError](#wfterror)
  * links `array`: A list of Links
    * items [Link](#link)
  * metadata [Metadata](#metadata)

### TimeResponse
* TimeResponse `object`
  * data `string`: The time in ISO-8601 format: HHmmss.SSSZ
  * errors `array`
    * items [WftError](#wfterror)

### TimeZoneDescriptor
* TimeZoneDescriptor `object`
  * id `string`: The time-zone id
  * name `string`: The time-zone name
  * rawUtcOffsetHours `integer`: The number of hours this time-zone is offset from UTC

### TimeZonesResponse
* TimeZonesResponse `object`
  * data `array`
    * items [TimeZoneDescriptor](#timezonedescriptor)
  * errors `array`
    * items [WftError](#wfterror)
  * links `array`
    * items [Link](#link)
  * metadata [Metadata](#metadata)

### WftError
* WftError `object`
  * code [WftErrorCode](#wfterrorcode)
  * message `string`

### WftErrorCode
* WftErrorCode `string` (values: ACCESS_DENIED, ENTITY_NOT_FOUND, INCOMPATIBLE, PARAM_INVALID, PARAMS_MUTUALLY_EXCLUSIVE)


