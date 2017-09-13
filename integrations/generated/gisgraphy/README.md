# @datafire/gisgraphy

Client library for Gisgraphy webservices

## Installation and Usage
```bash
npm install --save datafire @datafire/gisgraphy
```

```js
let datafire = require('datafire');
let gisgraphy = require('@datafire/gisgraphy').create({
  api_key: "",
});

gisgraphy.addressparsing({}).then(data => {
  console.log(data);
})
```

## Description
Since 2006, [Gisgraphy](http://www.gisgraphy.com) is a free, open source framework that offers the possibility to do geolocalisation and geocoding via Java APIs or REST webservices. Because geocoding is nothing without data, it provides an easy to use importer that will automatically download and import the necessary (free) data to your local database ([OpenStreetMap](http://www.openstreetmap.org/), [Geonames](http://www.geonames.org/) and [Quattroshapes](http://www.quattroshapes.com/): more than 100 million entries). You can also add your own data with the Web interface or the importer connectors provided. Gisgraphy is production ready, and has been designed to be scalable(load balanced), performant and used in other languages than just java : results can be output in XML, JSON, PHP, Python, Ruby, YAML, GeoRSS, and Atom. One of the most popular GPS tracking System (OpenGTS) also includes a Gisgraphy client...Gisgraphy is a framework. As a result it's flexible and powerful enough to be used in a lot of different use cases. [read more](http://www.gisgraphy.com)


if you use the premium servers, you can use the api key to test the webservices


## Actions
### addressparsing
The address parser and address standardizer, are part of the Gisgraphy project (free open source worldwide geocoder). Address parsing is the process of dividing a single address string into its individual component parts. Please visit [http://www.address-parser.net](http://www.address-parser.net) for more details 


```js
gisgraphy.addressparsing({
  "address": ""
}, context)
```

#### Parameters
* address (string) **required** - A postal address.
* country (string) - The ISO 3166 Alpha 2 code of the country.
* format (string) - The output format.
* callback (string) - The callback method name (optional), use to wrap the content into a (alphanumeric) Javascript method. Works only for script output formats (JSON, PHP, Ruby, Python)
* indent (boolean) - indents the results.Default to false. Possible values are true or false (or on when used with the rest service. If you use a checkbox in a web form, to indent the results, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on'
* standardize (boolean) - Whether the address should be standardized after parsing, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on'
* geocode (boolean) - UNUSED YET. Whether the address should be geocoded after parsing, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on'

### fulltxtsearch
The full text service allows you to search for features / places / street and do autocompletion . you can : Specify one or more words search on part of the name (auto completion / suggestion) Search for text or zip code Specify a GPS restriction (promote nearest, not sorted but has an impact on the score), Limit the results to a specific Language, Country, place type, Paginate the results, Specify the output verbosity, Tells if you want the output to be indented, Tells that all words are required or not, The search is case insensitive, use synonyms (Saint/st, ..), separator characters stripping, ...


```js
gisgraphy.fulltxtsearch({
  "q": "",
  "allwordsrequired": true
}, context)
```

#### Parameters
* q (string) **required** - The searched text : The text for the query can be a zip code, a string or one or more strings
* allwordsrequired (boolean) **required** - Whether the fulltext engine should considers all the words specified as required. Defaults to false (since v 4.0). possible values are true|false (or 'on' when used with the rest service)
* spellchecking (string) - The spellchecking (optional) : whether some suggestions should be provided if no results are found
* lat (number) - The latitude (north-south) for the location point to search around. The value is a floating number, between -90 and +90. It uses GPS coordinates
* lng (number) - TThe longitude (east-West) for the location point to search around. The value is a floating number between -180 and +180. It uses GPS coordinates.
* radius (number) - distance from the location point in meters we'd like to search around. The value is a number > 0 if it is not specify or incorrect.
* suggest (boolean) - If this parameter is set then it will search in part of the names of the street, place,.... It allow you to do auto completion auto suggestion. See the Gisgraphy leaflet plugin for more details. The JSON format will be forced if this parameter is true. See auto completion / suggestions engine for more details
* style (string) - The output style verbosity (optional) : Determines the output verbosity. 4 styles are available
* country (string) - limit the search to the specified ISO 3166 country code. Default : search in all countries
* lang (string) - The language code (optional) : The iso 639 Alpha2 or alpha3 Language Code. Some properties such as the AlternateName AdmNames and countryname belong to a certain language code. The language parameter can limit the output of those fields to a certain language (it only apply when style parameter='style') : If the language code does not exists or is not specified, properties with all the languages are retrieved If it exists, the properties with the specified language code, are retrieved
* format (string) - The output format.
* from (integer) - The first pagination index. Numbered from 1. If the number is < 1 or not specified, it will be set to the default value : 1
* to (integer) - The last pagination index. if < 1 or not specified, it will be set to startindex + 10. Max = 10 (can be changed)
* callback (string) - The callback method name (optional), use to wrap the content into a (alphanumeric) Javascript method. Works only for script output formats (JSON, PHP, Ruby, Python)
* indent (boolean) - indents the results.Default to false. Possible values are true or false (or on when used with the rest service. If you use a checkbox in a web form, to indent the results, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on'

### geocode
The Gisgraphy geocoding service allows you to transform postal addresses or other descriptions (a street, a city, a postal code, a country, or a combination) of a location into a (latitude, longitude) coordinate.


```js
gisgraphy.geocode({
  "address": ""
}, context)
```

#### Parameters
* address (string) **required** - A postal address, structured or not, a street, a city, a postal code, a country, or a combination.
* country (string) - The country where the place/address is. It is used to determine the postal address format and to improve performance. It will probably be optional in next version to ease the usability. The value must be the ISO 3166 Alpha 2 code of the country.
* postal (string) - Whether the given address is a postal address. default to false. In other words, if the address follow the specification or if it is a well-formed address as it was written on an envelope. This parameter will enable the parsing of the address by the address parser before geocoding, this way, the relevance will be better because because if parsing is successful, we will know the meaning of each word. Note that you can also specify each field if you already know them.
* format (string) - The output format.
* from (integer) - The first pagination index. Numbered from 1. If the number is < 1 or not specified, it will be set to the default value : 1
* to (integer) - The last pagination index. if < 1 or not specified, it will be set to startindex + 10. Max = 10 (can be changed)
* callback (string) - The callback method name (optional), use to wrap the content into a (alphanumeric) Javascript method. Works only for script output formats (JSON, PHP, Ruby, Python)
* indent (boolean) - indents the results. Possible values are true or false (or on when used with the rest service. If you use a checkbox in a web form, to indent the results, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on'

### geoloc
The geolocalisation service allows to search for features around a earth location. you can Specify GPS position, Limit the results to a specific place type (e.g : search all monuments around a point), Limit the results to a specified radius, Paginate the results, Tells if you want the output to be indented (currently, applies only for XML, not JSON for performance reasons. May change in next version)


```js
gisgraphy.geoloc({
  "lat": 0,
  "lng": 0
}, context)
```

#### Parameters
* lat (number) **required** - The latitude (north-south) for the location point to search around. The value is a floating number, between -90 and +90. It uses GPS coordinates
* lng (number) **required** - TThe longitude (east-West) for the location point to search around. The value is a floating number between -180 and +180. It uses GPS coordinates.
* radius (number) - distance from the location point in meters we'd like to search around. The value is a number > 0 if it is not specify or incorrect.
* distance (boolean) - Whether (or not) we want the distance field to be output. This option is useful to improve the performance if we don't care about the distance (e.g : we search for name). Of course, the results won't be sorted by distance. If you use a checkbox in a form to indent the results, the value will be 'on' or 'off', so to simplify the use : the value for the web service can be 'true' or 'on'
* placetype (string) - filter search for a given placetype
* format (string) - The output format.
* from (integer) - The first pagination index. Numbered from 1. If the number is < 1 or not specified, it will be set to the default value : 1
* to (integer) - The last pagination index. if < 1 or not specified, it will be set to startindex + 10. Max = 10 (can be changed)
* callback (string) - The callback method name (optional), use to wrap the content into a (alphanumeric) Javascript method. Works only for script output formats (JSON, PHP, Ruby, Python)
* indent (boolean) - indents the results.Default to false. Possible values are true or false (or on when used with the rest service. If you use a checkbox in a web form, to indent the results, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on'

### reversegeocode
The Reverse geocoding service allows to search for an address for a given GPS position.


```js
gisgraphy.reversegeocode({
  "lat": 0,
  "lng": 0
}, context)
```

#### Parameters
* lat (number) **required** - The latitude (north-south) for the location point to search around. The value is a floating number, between -90 and +90. It uses GPS coordinates
* lng (number) **required** - TThe longitude (east-West) for the location point to search around. The value is a floating number between -180 and +180. It uses GPS coordinates.
* format (string) - The output format.
* from (integer) - The first pagination index. Numbered from 1. If the number is < 1 or not specified, it will be set to the default value : 1
* to (integer) - The last pagination index. if < 1 or not specified, it will be set to startindex + 10. Max = 10 (can be changed)
* callback (string) - The callback method name (optional), use to wrap the content into a (alphanumeric) Javascript method. Works only for script output formats (JSON, PHP, Ruby, Python)
* indent (boolean) - indents the results. Possible values are true or false (or on when used with the rest service. If you use a checkbox in a web form, to indent the results, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on'

### streetsearch
The street service allows you to search for street by GPS position. You can : Specify GPS position, Give the beginning or a part of the name of the street (useful for autocompletion), Limit search to a specific type (e.g : Pedestrian, highway, residential, ... 25 types available), Limit search to a specified radius, Limit search to one way streets,


```js
gisgraphy.streetsearch({
  "lat": 0,
  "lng": 0
}, context)
```

#### Parameters
* lat (number) **required** - The latitude (north-south) for the location point to search around. The value is a floating number, between -90 and +90. It uses GPS coordinates
* lng (number) **required** - TThe longitude (east-West) for the location point to search around. The value is a floating number between -180 and +180. It uses GPS coordinates.
* radius (number) - distance from the location point in meters we'd like to search around. The value is a number > 0 if it is not specify or incorrect.
* oneway (boolean) - whether the street should be a oneWay street (optional) : limit the search to the street that are one way street. If you use a checkbox in a form to indent the results, the value will be 'on' or 'off', so to simplify the use : the value for the web service can be 'true' or 'on'
* distance (boolean) - Whether (or not) we want the distance field to be output. This option is useful to improve the performance if we don't care about the distance (e.g : we search for name). Of course, the results won't be sorted by distance. If you use a checkbox in a form to indent the results, the value will be 'on' or 'off', so to simplify the use : the value for the web service can be 'true' or 'on'
* streettype (string) - filter search with a stret type
* format (string) - The output format.
* from (integer) - The first pagination index. Numbered from 1. If the number is < 1 or not specified, it will be set to the default value : 1
* to (integer) - The last pagination index. if < 1 or not specified, it will be set to startindex + 10. Max = 10 (can be changed)
* callback (string) - The callback method name (optional), use to wrap the content into a (alphanumeric) Javascript method. Works only for script output formats (JSON, PHP, Ruby, Python)
* indent (boolean) - indents the results. Possible values are true or false (or on when used with the rest service. If you use a checkbox in a web form, to indent the results, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on'

