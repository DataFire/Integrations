# @datafire/mashape_geodb

Client library for Geo DB

## Installation and Usage
```bash
npm install --save datafire @datafire/mashape_geodb
```

```js
let datafire = require('datafire');
let mashape_geodb = require('@datafire/mashape_geodb').create({
  UserSecurity: "",
});

mashape_geodb.getLocalesUsingGET({}).then(data => {
  console.log(data);
})
```

## Description
This developer-centric REST API focuses on getting global city and region data. Easily obtain country, region, and city data for use in your apps! <ul><li>Filter cities by name prefix, country, location, and even minimum population.</li> <li>Get all country regions.</li> <li>Get all cities in a given region.</li> <li>Developer-friendly RESTful API adheres to industry best-practices, including HATEOS-style links to facilitate paging results.</li> <li>Backed by Amazon AWS load-balanced infrastructure for resiliency and performance!</li> <li>Data is periodically refreshed from GeoNames.org.</li></ul><p>Notes:<ul><li>All endpoints implicitly support JSONP-style invocation via an optional <tt>callback</tt> param.</li><li>Since the database is periodically updated, this may <strong>very rarely</strong> result in certain cities being marked deleted (e.g., duplicates removed). By default, endpoints returning city data will exclude cities marked deleted. However, in the unlikely event that this occurs while your app is paging through a set of affected results - and you care about the paged results suddenly changing underneath - specify <tt>includeDeleted=SINCE_YESTERDAY</tt> (or <tt>SINCE_LAST_WEEK</tt> if you're really paranoid!).</li></ul><hr/><h3>Useful Resources</h3><ul><li>SDKs<ul><li><a href='https://www.npmjs.com/package/wft-geodb-angular-client'>Angular</a>, <a href='https://github.com/wirefreethought/geo-db-sample-angular-app'>Sample App</a></li><li><a href='https://github.com/wirefreethought/geo-db-java-client'>Java</a></li></ul><li><a href='swagger.json'>Swagger Docs</a></li><li><a href='http://creativecommons.org/licenses/by/3.0/'>Usage License</a></i></li></ul>

## Actions
### findCitiesUsingGET
Get cities, filtering by optional criteria. If no criteria are set, you will get back all known cities with a population of at least 1000. (Currently over 115,000.) If countryCode is specified, the country info will be omitted in the response.


```js
mashape_geodb.findCitiesUsingGET({}, context)
```

#### Parameters
* namePrefix (string) - Only cities whose names start with this prefix
* countryCodes (string) - Only cities in these countries (comma-delimited country codes)
* excludedCountryCodes (string) - Only cities NOT in these countries (comma-delimited country codes)
* minPopulation (integer) - Only cities having at least this population
* nearLocation (string) - Only cities near this location. Latitude/longitude in ISO-6709 format: ±DD.DDDD±DDD.DDDD
* nearLocationRadius (integer) - The location radius within which to find cities
* nearLocationRadiusUnit (string) - The location radius unit of distance: MI | KM
* includeDeleted (string) - Whether to include any cities marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE
* limit (integer) - The maximum number of results to retrieve
* offset (integer) - The zero-ary offset index into the results

### getCityUsingGET
Get the details for a specific city, including location coordinates, population, and elevation above sea-level (if available).


```js
mashape_geodb.getCityUsingGET({
  "cityId": 0
}, context)
```

#### Parameters
* cityId (integer) **required** - The city id

### findNearbyCitiesUsingGET
Get nearby cities


```js
mashape_geodb.findNearbyCitiesUsingGET({
  "cityId": 0
}, context)
```

#### Parameters
* cityId (integer) **required** - cityId
* minPopulation (integer) - Only cities having at least this population
* nearLocationRadius (integer) - The location radius within which to find cities
* nearLocationRadiusUnit (string) - The location radius unit of distance: MI | KM
* includeDeleted (string) - Whether to include any cities marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE
* limit (integer) - The maximum number of results to retrieve
* offset (integer) - The zero-ary offset index into the results

### getCountriesUsingGET
Get countries, filtering by optional criteria. If no criteria are set, you will get back all known countries.


```js
mashape_geodb.getCountriesUsingGET({}, context)
```

#### Parameters
* currencyCode (string) - Only countries supporting this currency
* limit (integer) - The maximum number of results to retrieve
* offset (integer) - The zero-ary offset index into the results

### getCountryUsingGET
Get the details for a specific country, including number of regions.


```js
mashape_geodb.getCountryUsingGET({
  "countryCode": ""
}, context)
```

#### Parameters
* countryCode (string) **required** - An ISO-3166 country code

### getRegionsUsingGET
Get all regions in a specific country. These could be states, provinces, districts, or otherwise major political divisions.


```js
mashape_geodb.getRegionsUsingGET({
  "countryCode": ""
}, context)
```

#### Parameters
* countryCode (string) **required** - An ISO-3166 country code
* limit (integer) - The maximum number of results to retrieve
* offset (integer) - The zero-ary offset index into the results

### getRegionUsingGET
Get the details of a specific country region, including number of cities.


```js
mashape_geodb.getRegionUsingGET({
  "countryCode": "",
  "regionCode": ""
}, context)
```

#### Parameters
* countryCode (string) **required** - An ISO-3166 country code
* regionCode (string) **required** - An HASC, ISO-3166, or FIPS region code

### findRegionCitiesUsingGET
Get the cities in a specific country region. The country and region info is omitted in the response.


```js
mashape_geodb.findRegionCitiesUsingGET({
  "countryCode": "",
  "regionCode": ""
}, context)
```

#### Parameters
* countryCode (string) **required** - An ISO-3166 country code
* regionCode (string) **required** - An HASC, ISO-3166, or FIPS region code
* minPopulation (integer) - Only cities having at least this population
* includeDeleted (string) - Whether to include any cities marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE
* limit (integer) - The maximum number of results to retrieve
* offset (integer) - The zero-ary offset index into the results

### getCurrenciesUsingGET
Get currencies, filtering by optional criteria. If no criteria are set, you will get back all known currencies.


```js
mashape_geodb.getCurrenciesUsingGET({}, context)
```

#### Parameters
* countryCode (string) - Only currencies supported by this country
* limit (integer) - The maximum number of results to retrieve
* offset (integer) - The zero-ary offset index into the results

### getLocalesUsingGET
Get all known locales


```js
mashape_geodb.getLocalesUsingGET({}, context)
```

#### Parameters
* limit (integer) - The maximum number of results to retrieve
* offset (integer) - The zero-ary offset index into the results

