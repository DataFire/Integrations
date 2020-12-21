# @datafire/mon_voyage_pas_cher

Client library for Mon-voyage-pas-cher.com Public API

## Installation and Usage
```bash
npm install --save @datafire/mon_voyage_pas_cher
```
```js
let mon_voyage_pas_cher = require('@datafire/mon_voyage_pas_cher').create({
  "x-api-key": ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### getAirport
This webservice is providing you the ability to retrieve a list of airports matching your search criterias.<br />The 3 mains search criterias are<br />- by country code, this will list all airports for a given country.<br />- by latitude/longitude with a radius in km. You can actually combine those 2 criterias, and search for example the closest airport in the USA of Vancoucer, Canada.<br />- The last way to use the API is by searching directly with a IATA CODE in the location parameter, this will only return one result in the array of data results


```js
mon_voyage_pas_cher.getAirport({
  "language": ""
}, context)
```

#### Input
* input `object`
  * language **required** `string` (values: en, fr, de, es): the language code of the language you want the content to be returned
  * location `string`: The location you want to search for. Either a latitude/longitude point or a letter airport IATA CODE ( ex. LHR ) if you want the detail for only one single airport.
  * radius `integer`: Radius in km for a lat/long search, will be ignore if a IATA is passed in location parameter code is passed
  * countrycode `string`: Filter - The country ISO code 2 letters, provided by the GET /countries. If passed the results will be filtered to this country only, regardless if you passed a lat/long and a large radius
  * top_airports `boolean`: Filter the results to only the top and large airports airports.

#### Output
* output [AirportsSearchResponse](#airportssearchresponse)

### airports.options
Enable CORS by returning correct headers



```js
mon_voyage_pas_cher.airports.options(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getCities
Search cities according to given criterias. Either lat/long + radius or country code. A limit can be given but cannot exceed 50 results.<br /> A significant city will be defined according to the pourcent of population within a country.


```js
mon_voyage_pas_cher.getCities({
  "language": "",
  "sort": ""
}, context)
```

#### Input
* input `object`
  * language **required** `string` (values: en, fr, de, es): the language code of the language you want the content to be returned
  * countrycode `string`: if you want to limit the result to one country
  * location `string`: The Lat/Long of the location your are seeking cities ( ex. 45.4478988,3.23456)
  * radius `integer`: Radius in km for a lat/long search. Default is 20km and there is no maximum, but need to be combined with limit. code is passed
  * limit `integer`: Limit of the result. Default is 20 rows, and maximum is 50.
  * offset `integer`: offset of the result set
  * sort **required** `string` (values: distance,desc, distance,asc, population,desc, population,asc, elevation,desc, elevation,asc, name,desc, name,asc, timezone,asc, timezone,desc): The order you want the result ordered. Default is population while when entering a lat/long, you can order the results by distance from requested lat/long point

#### Output
* output [CitiesResponse](#citiesresponse)

### cities.findcitiesfromlatlong.options
Enable CORS by returning correct headers



```js
mon_voyage_pas_cher.cities.findcitiesfromlatlong.options(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getAutocomplete
Search cities from a string parameters.


```js
mon_voyage_pas_cher.getAutocomplete({
  "q": "",
  "language": "",
  "sort": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: the string you want to search
  * language **required** `string` (values: en, fr, de, es): the language code of the language you want the content to be returned
  * countrycode `string`: if you want to limit the result to one country
  * sort **required** `string` (values: population,desc, population,asc, elevation,desc, elevation,asc, name,desc, name,asc, timezone,asc, timezone,desc, match_score,desc, match_score,asc): The order you want the result ordered. Default is population while when entering a lat/long, you can order the results by distance from requested lat/long point

#### Output
* output [CitiesResponse](#citiesresponse)

### cities.findcitiesfromtext.options
Enable CORS by returning correct headers



```js
mon_voyage_pas_cher.cities.findcitiesfromtext.options(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getSignificantCities
Search cities according to given criterias. Either lat/long + radius or country code. A limit can be given but cannot exceed 50 results.<br /> A significant city will be defined according to the pourcent of population within a country.


```js
mon_voyage_pas_cher.getSignificantCities({
  "language": "",
  "sort": ""
}, context)
```

#### Input
* input `object`
  * language **required** `string` (values: en, fr, de, es): the language code of the language you want the content to be returned
  * pourcent `number`: The pourcent of population the cities need to be in order to appear in results
  * countrycode `string`: if you want to limit the result to one country
  * location `string`: The Lat/Long of the location your are seeking cities ( ex. 45.4478988,3.23456)
  * radius `integer`: Radius in km for a lat/long search. Default is 20km and there is no maximum, but need to be combined with limit. code is passed
  * limit `integer`: Limit of the result. Default is 20 rows, and maximum is 50.
  * offset `integer`: offset of the result set
  * sort **required** `string` (values: distance,desc, distance,asc, population,desc, population,asc, elevation,desc, elevation,asc, name,desc, name,asc, timezone,asc, timezone,desc): The order you want the result ordered. Default is population while when entering a lat/long, you can order the results by distance from requested lat/long point

#### Output
* output [CitiesResponse](#citiesresponse)

### cities.significant.options
Enable CORS by returning correct headers



```js
mon_voyage_pas_cher.cities.significant.options(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getContinents
This webservice is providing you the ability to retrieve all informations about continents


```js
mon_voyage_pas_cher.getContinents({
  "language": ""
}, context)
```

#### Input
* input `object`
  * language **required** `string` (values: en, fr, de, es): The language code of the language you want the content to be returned
  * continentcode `string`: The code of the continent you want to retrieve, this parameter is not required if you want ot retrieve all continents at once

#### Output
* output [ContinentsResponse](#continentsresponse)

### continents.options
Enable CORS by returning correct headers



```js
mon_voyage_pas_cher.continents.options(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getCountries
This webservice is providing you the ability to retrieve a list of countries matching your search criterias.<br />The 2 mains ways to search use this API are<br />- by countrycode, it will only returns you one country<br />- without the countrycode parameter which will return the full list of countries


```js
mon_voyage_pas_cher.getCountries({
  "language": ""
}, context)
```

#### Input
* input `object`
  * language **required** `string` (values: en, fr, de, es): the language code of the language you want the content to be returned
  * countrycode `string`: The code of the country you want to retrieve

#### Output
* output [CountriesResponse](#countriesresponse)

### countries.options
Enable CORS by returning correct headers



```js
mon_voyage_pas_cher.countries.options(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getDistance
This webservice is providing you the ability to calculate the distance between 2 lat/long points, it returns you the value in km or miles


```js
mon_voyage_pas_cher.getDistance({
  "locationA": "",
  "locationB": ""
}, context)
```

#### Input
* input `object`
  * locationA **required** `string`: The location as a latitude / longitude point ( ex. 67.85572,20.22513 ) of location point A
  * locationB **required** `string`: The location as a latitude / longitude point ( ex. 67.85572,20.22513 ) of location point B
  * unit `string` (values: kms, miles): The unit of length you want the elevation returned either meters or feet returned

#### Output
* output [DistanceResponse](#distanceresponse)

### distance.options
Enable CORS by returning correct headers



```js
mon_voyage_pas_cher.distance.options(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getElevation
This webservice is providing you the ability to retrieve the elevation in meters or feet of ONE or MULTIPLE given latitude/longitude point(s). <br />If you use MULTIPLE lat/long point, the maximum number of point you can send in one request is 256. Be aware that if MULTIPLE mode, the results are de-deplicated if you are sending the same latitude/longitude point multiple times.<br />If your workload is a batch of millions of lat/long point, You will also get better throughput if you send around 100 lat/long points in one request than the maximum. This maximum is mostly allowed for people trying to graph altitudes.


```js
mon_voyage_pas_cher.getElevation({
  "locations": ""
}, context)
```

#### Input
* input `object`
  * locations **required** `string`: The location as a latitude / longitude point ( ex. 67.85572,20.22513 ) or a list of coordinates separated using the pipe ('|') character. The maximum number of coordinates you can send at one time is 20 ( ex. 67.85572,20.22513|27.85572,20.22513 )
  * unit `string` (values: meters, feet): The unit of length you want the elevation returned either meters or feet returned

#### Output
* output [ElevationResponse](#elevationresponse)

### elevation.options
Enable CORS by returning correct headers



```js
mon_voyage_pas_cher.elevation.options(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getPing
Returns a ping. In case you need a health check in your system. Cannot be called /ping as AWS is using this route for their health check. This webservice doesn't have CORS enable, as it's supposed to be call server to server and not from a webpage ( it won't work over the tester)


```js
mon_voyage_pas_cher.getPing(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [PongResponse](#pongresponse)

### getSun
This webservice is providing you the ability to retrieve the time of each phases of the sunlight cycle. Sunset, sunrise, sunriseEnd, golden hour, solarNoon, dawn, dusk and more for a given location and date. If the date if not provided, the response provided return informations for today at UTC time.


```js
mon_voyage_pas_cher.getSun({
  "location": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: Here you can send either a latitude / longitude
  * date `string`: The date for what you will get the data ( full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 ), if not provided as parameter, today is going to be used

#### Output
* output [SunPositionResponse](#sunpositionresponse)

### sun_positions.options
Enable CORS by returning correct headers



```js
mon_voyage_pas_cher.sun_positions.options(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getTimezone
This webservice is providing you the ability to retrieve the tz database time zones ( https://en.wikipedia.org/wiki/List_of_tz_database_time_zones )  from a given location ( )latitude and longitude or IATA code ). It also returns you the current time at the provided location.


```js
mon_voyage_pas_cher.getTimezone({
  "location": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: Here you can send either a latitude / longitude ( ex. 67.85572,20.22513 ) or a IATA Code ( ex. LHR for London Heathrow)

#### Output
* output [TimezoneResponse](#timezoneresponse)

### timezone.options
Enable CORS by returning correct headers



```js
mon_voyage_pas_cher.timezone.options(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*



## Definitions

### AirportsSearchResponse
* AirportsSearchResponse `object`: This section provides response schema of Airport Search Response
  * count `integer`
  * data `array`
    * items [DataAirportsSearch](#dataairportssearch)
  * message `string`
  * status `string`: Status of the response

### CitiesData
* CitiesData `object`: This is the data object for the response of a Cities APIs calls
  * alternatename `array`
    * items `string`: Here is a list of alternate name for the city in the requested language
  * asciiname `string`: The ASCII name of the city
  * country `string`: The 2 letter ISO code of the country the city belongs to
  * elevation `number`: The elevation of the city
  * latitude `number`: The latitude considered as central for the city
  * longitude `number`: The longitude considered as central for the city
  * name `string`: The name of the city
  * population `number`: The population of the city
  * timezone `string`: The longitude considered as central for the city

### CitiesResponse
* CitiesResponse `object`: This is the main object for the response of a Cities API call
  * count `integer`
  * data `array`
    * items [CitiesData](#citiesdata)
  * message `string`
  * status `string`: Status of the response

### ContinentData
* ContinentData `object`: This is the data object for the response of a Continent API call
  * code `string`: The ISO code of the continent.
  * countries_in `array`
    * items `string`: Here is a list of country code that belong to the continent
  * latitude `number`: The latitude considered as central for the continent
  * longitude `number`: The longitude considered as central for the continent
  * name `string`: The name of the continent in english
  * name_locale `string`: The name of the continent in the requested languager

### ContinentsResponse
* ContinentsResponse `object`: This is the main object for the response of a Continent API call
  * count `integer`
  * data `array`
    * items [ContinentData](#continentdata)
  * message `string`
  * status `string`: Status of the response

### CountriesData
* CountriesData `object`: This is the data object for the response of a Countries API call
  * airportscount `number`: The name of the country in english language
  * alternatename `array`
    * items `string`: The other given name, nickname of the country, this is as well as in requested language but also foreign languages
  * areainsqkm `number`: The superficy of the country in square km
  * capital `string`: The capital of this country in english language
  * currencycode `string`: The international currency code
  * currencyname `string`: The local name of the currency used in this country
  * fr_article `string`: The name of the country in english language
  * fr_preposition `string`: The name of the country in english language
  * iso_alpha2 `string`: The 2 letter ISO code of the country
  * languages `string`: The name of the country in english language
  * latitude `number`: The latitude considered as central for this country
  * longitude `number`: The longitude considered as central for this country
  * name `string`: The name of the country in english language
  * name_locale `string`: The name of the country in the requested language
  * neighbors `array`
    * items `string`: Here is a list of country code that have territorial border with the this country
  * population `number`: The total population in this country
  * postalcode `string`: The format of the postal codes if multiple format to be applied, then a pipe | is used as separator
  * postalcoderegex `string`: The regex to use to check a postal code for this country
  * tld `string`: The top level domain which is used by the local internet authority.

### CountriesResponse
* CountriesResponse `object`: This is the main object for the response of a Countries API call
  * count `integer`
  * data `array`
    * items [CountriesData](#countriesdata)
  * message `string`
  * status `string`: Status of the response

### DataAirportsSearch
* DataAirportsSearch `object`
  * airlineroutescount `integer`
  * airport_website `string`
  * altitude `integer`
  * cityname `string`
  * countrycode `string`
  * destinationscount `integer`
  * distance `string`: only in response when operating a lat/long search
  * iatacode `string`
  * icao `string`
  * istopdestination `boolean`
  * latitude `number`
  * longitude `number`
  * name `string`
  * timezone `string`
  * wikipedia_page `string`

### DistanceResponse
* DistanceResponse `object`: This section provides response schema of pong response
  * count `integer`
  * data `number`: Here is the distance between latlong A and latlong B, in the requested unit
  * message `string`
  * status `string`: Status of the response

### ElevationData
* ElevationData `object`
  * elevation `integer`
  * location `string`
  * unit `string`

### ElevationResponse
* ElevationResponse `object`: This is the main object for the response of a TimezoneRequest
  * count `integer`
  * data `array`
    * items [ElevationData](#elevationdata)
  * message `string`
  * status `string`: Status of the response

### ErrorResponse
* ErrorResponse `object`
  * message **required** `string`

### PongResponse
* PongResponse `object`: This section provides response schema of pong response
  * data `string`: Will always return "pong"
  * message `string`
  * status `string`: Status of the response

### SunPositionData
* SunPositionData `object`: This is the data object for the response of a SunPosition API call
  * dawn `string`: Date and time of the dawn at local time of the given location
  * dusk `string`: Date and time of the dusk at local time of the given location
  * goldenHour `string`: Date and time of the golden hour at local time of the given location
  * goldenHourEnd `string`: Date and time of the golden hour end at local time of the given location
  * nadir `string`: Date and time of the nadir at local time of the given location
  * nauticalDawn `string`: Date and time of the nautical dawn at local time of the given location
  * nauticalDusk `string`: Date and time of the nautical dusk at local time of the given location
  * night `string`: Date and time of the night at local time of the given location
  * nightEnd `string`: Date and time of the night end at local time of the given location
  * solarNoon `string`: Date and time of the solar moon at local time of the given location
  * sunrise `string`: Date and time of the sunris at local time of the given location
  * sunriseEnd `string`: Date and time of the sunrise end at local time of the given location
  * sunset `string`: Date and time of the sunset at local time of the given location
  * sunsetStart `string`: Date and time of the sunset start at local time of the given location

### SunPositionResponse
* SunPositionResponse `object`: This is the main object for the response of a SunPosition API call
  * count `integer`
  * data [SunPositionData](#sunpositiondata)
  * message `string`
  * status `string`: Status of the response

### TimezoneResponse
* TimezoneResponse `object`: This is the main object for the response of a TimezoneRequest
  * count `integer`
  * data `object`
    * time_now `string`
    * timezone_name `string`
  * message `string`
  * status `string`: Status of the response


