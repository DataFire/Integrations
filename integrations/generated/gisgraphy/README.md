# @datafire/gisgraphy

Client library for Gisgraphy webservices

## Installation and Usage
```bash
npm install --save @datafire/gisgraphy
```
```js
let gisgraphy = require('@datafire/gisgraphy').create({
  api_key: ""
});

.then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * address **required** `string`: A postal address.
  * country `string`: The ISO 3166 Alpha 2 code of the country.
  * format `string` (values: XML, JSON, PHP, RUBY, PYTHON, YAML): The output format.
  * callback `string`: The callback method name (optional), use to wrap the content into a (alphanumeric) Javascript method. Works only for script output formats (JSON, PHP, Ruby, Python)
  * indent `boolean`: indents the results.Default to false. Possible values are true or false (or on when used with the rest service. If you use a checkbox in a web form, to indent the results, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on'
  * standardize `boolean`: Whether the address should be standardized after parsing, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on'
  * geocode `boolean`: UNUSED YET. Whether the address should be geocoded after parsing, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on'

#### Output
* output [AddressResultsDto](#addressresultsdto)

### fulltxtsearch
The full text service allows you to search for features / places / street and do autocompletion . you can : Specify one or more words search on part of the name (auto completion / suggestion) Search for text or zip code Specify a GPS restriction (promote nearest, not sorted but has an impact on the score), Limit the results to a specific Language, Country, place type, Paginate the results, Specify the output verbosity, Tells if you want the output to be indented, Tells that all words are required or not, The search is case insensitive, use synonyms (Saint/st, ..), separator characters stripping, ...


```js
gisgraphy.fulltxtsearch({
  "q": "",
  "allwordsrequired": true
}, context)
```

#### Input
* input `object`
  * q **required** `string`: The searched text : The text for the query can be a zip code, a string or one or more strings
  * allwordsrequired **required** `boolean`: Whether the fulltext engine should considers all the words specified as required. Defaults to false (since v 4.0). possible values are true|false (or 'on' when used with the rest service)
  * spellchecking `string`: The spellchecking (optional) : whether some suggestions should be provided if no results are found
  * lat `number`: The latitude (north-south) for the location point to search around. The value is a floating number, between -90 and +90. It uses GPS coordinates
  * lng `number`: TThe longitude (east-West) for the location point to search around. The value is a floating number between -180 and +180. It uses GPS coordinates.
  * radius `number`: distance from the location point in meters we'd like to search around. The value is a number > 0 if it is not specify or incorrect.
  * suggest `boolean`: If this parameter is set then it will search in part of the names of the street, place,.... It allow you to do auto completion auto suggestion. See the Gisgraphy leaflet plugin for more details. The JSON format will be forced if this parameter is true. See auto completion / suggestions engine for more details
  * style `string` (values: SHORT, MEDIUM, LONG, FULL): The output style verbosity (optional) : Determines the output verbosity. 4 styles are available
  * country `string`: limit the search to the specified ISO 3166 country code. Default : search in all countries
  * lang `string`: The language code (optional) : The iso 639 Alpha2 or alpha3 Language Code. Some properties such as the AlternateName AdmNames and countryname belong to a certain language code. The language parameter can limit the output of those fields to a certain language (it only apply when style parameter='style') : If the language code does not exists or is not specified, properties with all the languages are retrieved If it exists, the properties with the specified language code, are retrieved
  * format `string` (values: XML, JSON, PHP, RUBY, PYTHON, YAML, ATOM, GEORSS): The output format.
  * from `integer`: The first pagination index. Numbered from 1. If the number is < 1 or not specified, it will be set to the default value : 1
  * to `integer`: The last pagination index. if < 1 or not specified, it will be set to startindex + 10. Max = 10 (can be changed)
  * callback `string`: The callback method name (optional), use to wrap the content into a (alphanumeric) Javascript method. Works only for script output formats (JSON, PHP, Ruby, Python)
  * indent `boolean`: indents the results.Default to false. Possible values are true or false (or on when used with the rest service. If you use a checkbox in a web form, to indent the results, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on'

#### Output
* output [FulltextResultsDto](#fulltextresultsdto)

### geocode
The Gisgraphy geocoding service allows you to transform postal addresses or other descriptions (a street, a city, a postal code, a country, or a combination) of a location into a (latitude, longitude) coordinate.


```js
gisgraphy.geocode({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: A postal address, structured or not, a street, a city, a postal code, a country, or a combination.
  * country `string`: The country where the place/address is. It is used to determine the postal address format and to improve performance. It will probably be optional in next version to ease the usability. The value must be the ISO 3166 Alpha 2 code of the country.
  * postal `string`: Whether the given address is a postal address. default to false. In other words, if the address follow the specification or if it is a well-formed address as it was written on an envelope. This parameter will enable the parsing of the address by the address parser before geocoding, this way, the relevance will be better because because if parsing is successful, we will know the meaning of each word. Note that you can also specify each field if you already know them.
  * format `string` (values: XML, JSON, PHP, RUBY, PYTHON, YAML): The output format.
  * from `integer`: The first pagination index. Numbered from 1. If the number is < 1 or not specified, it will be set to the default value : 1
  * to `integer`: The last pagination index. if < 1 or not specified, it will be set to startindex + 10. Max = 10 (can be changed)
  * callback `string`: The callback method name (optional), use to wrap the content into a (alphanumeric) Javascript method. Works only for script output formats (JSON, PHP, Ruby, Python)
  * indent `boolean`: indents the results. Possible values are true or false (or on when used with the rest service. If you use a checkbox in a web form, to indent the results, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on'

#### Output
* output [AddressResultsDto](#addressresultsdto)

### geoloc
The geolocalisation service allows to search for features around a earth location. you can Specify GPS position, Limit the results to a specific place type (e.g : search all monuments around a point), Limit the results to a specified radius, Paginate the results, Tells if you want the output to be indented (currently, applies only for XML, not JSON for performance reasons. May change in next version)


```js
gisgraphy.geoloc({
  "lat": 0,
  "lng": 0
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: The latitude (north-south) for the location point to search around. The value is a floating number, between -90 and +90. It uses GPS coordinates
  * lng **required** `number`: TThe longitude (east-West) for the location point to search around. The value is a floating number between -180 and +180. It uses GPS coordinates.
  * radius `number`: distance from the location point in meters we'd like to search around. The value is a number > 0 if it is not specify or incorrect.
  * distance `boolean`: Whether (or not) we want the distance field to be output. This option is useful to improve the performance if we don't care about the distance (e.g : we search for name). Of course, the results won't be sorted by distance. If you use a checkbox in a form to indent the results, the value will be 'on' or 'off', so to simplify the use : the value for the web service can be 'true' or 'on'
  * placetype `string`: filter search for a given placetype
  * format `string` (values: XML, JSON, PHP, RUBY, PYTHON, YAML): The output format.
  * from `integer`: The first pagination index. Numbered from 1. If the number is < 1 or not specified, it will be set to the default value : 1
  * to `integer`: The last pagination index. if < 1 or not specified, it will be set to startindex + 10. Max = 10 (can be changed)
  * callback `string`: The callback method name (optional), use to wrap the content into a (alphanumeric) Javascript method. Works only for script output formats (JSON, PHP, Ruby, Python)
  * indent `boolean`: indents the results.Default to false. Possible values are true or false (or on when used with the rest service. If you use a checkbox in a web form, to indent the results, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on'

#### Output
* output [GeolocResultsDto](#geolocresultsdto)

### reversegeocode
The Reverse geocoding service allows to search for an address for a given GPS position.


```js
gisgraphy.reversegeocode({
  "lat": 0,
  "lng": 0
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: The latitude (north-south) for the location point to search around. The value is a floating number, between -90 and +90. It uses GPS coordinates
  * lng **required** `number`: TThe longitude (east-West) for the location point to search around. The value is a floating number between -180 and +180. It uses GPS coordinates.
  * format `string` (values: XML, JSON, PHP, RUBY, PYTHON, YAML): The output format.
  * from `integer`: The first pagination index. Numbered from 1. If the number is < 1 or not specified, it will be set to the default value : 1
  * to `integer`: The last pagination index. if < 1 or not specified, it will be set to startindex + 10. Max = 10 (can be changed)
  * callback `string`: The callback method name (optional), use to wrap the content into a (alphanumeric) Javascript method. Works only for script output formats (JSON, PHP, Ruby, Python)
  * indent `boolean`: indents the results. Possible values are true or false (or on when used with the rest service. If you use a checkbox in a web form, to indent the results, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on'

#### Output
* output [AddressResultsDto](#addressresultsdto)

### streetsearch
The street service allows you to search for street by GPS position. You can : Specify GPS position, Give the beginning or a part of the name of the street (useful for autocompletion), Limit search to a specific type (e.g : Pedestrian, highway, residential, ... 25 types available), Limit search to a specified radius, Limit search to one way streets,


```js
gisgraphy.streetsearch({
  "lat": 0,
  "lng": 0
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: The latitude (north-south) for the location point to search around. The value is a floating number, between -90 and +90. It uses GPS coordinates
  * lng **required** `number`: TThe longitude (east-West) for the location point to search around. The value is a floating number between -180 and +180. It uses GPS coordinates.
  * radius `number`: distance from the location point in meters we'd like to search around. The value is a number > 0 if it is not specify or incorrect.
  * oneway `boolean`: whether the street should be a oneWay street (optional) : limit the search to the street that are one way street. If you use a checkbox in a form to indent the results, the value will be 'on' or 'off', so to simplify the use : the value for the web service can be 'true' or 'on'
  * distance `boolean`: Whether (or not) we want the distance field to be output. This option is useful to improve the performance if we don't care about the distance (e.g : we search for name). Of course, the results won't be sorted by distance. If you use a checkbox in a form to indent the results, the value will be 'on' or 'off', so to simplify the use : the value for the web service can be 'true' or 'on'
  * streettype `string`: filter search with a stret type
  * format `string` (values: XML, JSON, PHP, RUBY, PYTHON, YAML): The output format.
  * from `integer`: The first pagination index. Numbered from 1. If the number is < 1 or not specified, it will be set to the default value : 1
  * to `integer`: The last pagination index. if < 1 or not specified, it will be set to startindex + 10. Max = 10 (can be changed)
  * callback `string`: The callback method name (optional), use to wrap the content into a (alphanumeric) Javascript method. Works only for script output formats (JSON, PHP, Ruby, Python)
  * indent `boolean`: indents the results. Possible values are true or false (or on when used with the rest service. If you use a checkbox in a web form, to indent the results, the value will be 'on' or 'off', so for a simple use : the value of indent can be 'true' or 'on'

#### Output
* output [StreetSearchResultsDto](#streetsearchresultsdto)



## Definitions

### Address
* Address `object`
  * POBox `string`: Post office box, Boite postale, Casilla de Correo,...
  * POBoxAgency `string`: Agency where the office box, Boite postale, Casilla de Correo is
  * POBoxInfo `string`: extra info on post office box, Boite postale, Casilla de Correo,..
  * adm1NameAlternatesLocalized `object`
  * adm2NameAlternatesLocalized `object`
  * block `string`: The block in an address (Brasilia only) the block in austria, singapore,... address
  * city `string`: The city or locality, a small town or village name sometimes is included in an address when the Delivery Point is outside the boundary of the main Post Town that serves it.
  * citySubdivision `string`: A sub division of a city
  * civicNumberSuffix `string`: The number that follows the house number (Canada only)
  * confidence `string`: An indicator that mesure how the parser is confident for the result
  * country `string`: The country name
  * countryNameAlternatesLocalized `object`
  * countrycode `string`: The countrycode given in the request
  * dependentLocality `string`: 'Sub' city atached to a big city
  * distance `number`: The distance of the address for the given parameter location in the query
  * district `string`: The district, mainly use for Russia
  * extraInfo `string`: Informations on floor, unit, and sometimes POBOX,...
  * floor `string`: The floor in an address, not a floor number in a unit (Brasilia only)
  * geocodinglevel `string` (values: NONE, HOUSE_NUMBER, STREET, CITY, STATE, COUNTRY)
  * houseNumber `string`: Official number assigned to an address by the municipality, several languages supported
  * houseNumberInfo `string`: All information that give extra information on the house number
  * id `integer`: An internal ID to identify the address
  * lat `number`: The latitude of the address
  * lng `number`: The longitude of the address
  * lote `string`: Lote in Brazilian address
  * name `string`: Name of the place, it is null in case of address but filled if common place. Name is different than recipient name
  * nameAlternatesLocalized `object`
  * postDirection `string`: The cardinal direction after the name of the street
  * postDirectionIntersection `string`: The cardinal direction after the name of the intersection street
  * postTown `string`: a city is a required part of all postal addresses in the United Kingdom
  * preDirection `string`: The cardinal direction before the name of the street
  * preDirectionIntersection `string`: The cardinal direction before the name of the intersection street
  * prefecture `string`: prefecture of China
  * quadrant `string`: The quadrant in an address (Brasilia only)
  * quarter `string`: A section of an urban settlement
  * recipientName `string`: Name of the organisation or person at the given address
  * sector `string`: The sector in an address (Brasilia only)
  * state `string`: The state or county when applicable, can be fullname or abbreviation
  * streetName `string`: The official name of the street or the ordinal number
  * streetNameIntersection `string`: The official name of the intersection street
  * streetType `string`: The type of the street
  * streetTypeIntersection `string`: The type of the intersection street
  * suiteNumber `string`: Informations on the unit, mainly used and filled by standardizer
  * suiteType `string`: Informations on the unit, mainly used and filled by standardizer
  * ward `string`: Ward in japanese address
  * zipCode `string`: The zip or post code

### AddressResultsDto
* AddressResultsDto `object`
  * QTime `integer`: how long the query took
  * message `string`: a message
  * numFound `integer`: how many result found
  * parsedAddress [Address](#address)
  * result `array`
    * items [Address](#address)

### FulltextResultsDto
* FulltextResultsDto `object`
  * QTime `integer`: how long the query took
  * maxScore `number`: the max score value accross all the results found
  * message `string`: a message
  * numFound `integer`: how many results were found whatever the pagination
  * result `array`
    * items [SolrResponseDto](#solrresponsedto)
  * resultsSize `integer`: how many results are return

### GeolocResultsDto
* GeolocResultsDto `object`
  * QTime `integer`: The execution time of the query in ms
  * error `string`: A String only present if an error occured (e.g : empty Latitude or longitude)
  * numFound `integer`: The number of results display with this query (it takes the pagination into account)
  * result `array`
    * items [GisFeatureDistance](#gisfeaturedistance)

### GisFeatureDistance
* GisFeatureDistance `object`
  * adm1Code `string`: The internal code for the administrative division of level 1
  * adm1Name `string`: The name of the administrative division of level 1
  * adm2Code `string`: The internal code for the administrative division of level 2
  * adm2Name `string`: The name of the administrative division of level 2
  * adm3Code `string`: The internal code for the administrative division of level 3
  * adm3Name `string`: The name of the administrative division of level 3
  * adm4Code `string`: The internal code for the administrative division of level 4
  * adm4Name `string`: The name of the administrative division of level 4
  * adm5Code `string`: The internal code for the administrative division of level 5
  * adm5Name `string`: The name of the administrative division of level 5
  * amenity `string`: Informations on category of OpenStreetMap POIs
  * area `number`: The area of the feature
  * asciiName `string`: The ASCII name of the feature
  * capitalName `string`: The Capital of the country
  * continent `string`: The continent the country belongs
  * countryCode `string`: The ISO 3166 country code
  * country_flag_url `string`: The relative URL to get the country flag image
  * currencyCode `string`: The Currency code (ISO_4217) of the country
  * currencyName `string`: The Currency name of the country
  * distance `number`: The distance beetween the point and the gisFeature in meters
  * elevation `integer`: The elevation in meters
  * equivalentFipsCode `string`: The fips Code of the country when no code are available
  * featureClass `string`: The feature Class.
  * featureCode `string`: The feature Code.
  * featureId `integer`: A unique id that identify the feature
  * fipsCode `string`: The fips Code of the country
  * fullyQualifiedAddress `string`: NOT USED YET
  * google_map_url `string`: The URL to get the location on Google Map
  * gtopo30 `integer`: Average elevation of 30'x30' (ca 900mx900m) area in meters
  * isIn `string`: Information of the city where the street / POI is (depends on openstreetmap 'is_in' field), the city in general (only for placetype street)
  * isInAdm `string`: Information of the administration division where the street / POI is. 
  * isInPlace `string`: Information of the place where the street / POI is (quarter, common place). Generally a place at a lower level than city
  * isInZip `string`: Information of the zipcode where the street / POI is"
  * iso3166Alpha2Code `string`: The iso 3166 Alpha 2 code of the country
  * iso3166Alpha3Code `string`: The iso 3166 Alpha 3 code of the country
  * iso3166NumericCode `string`: The iso 3166 numeric code of the country
  * lat `number`: The latitude (north-south)
  * length `number`: length of the street
  * level `integer`: The level of the Administrative division (1-5)
  * lng `number`: The longitude (east-West)
  * name `string`: The name of the feature
  * oneWay `boolean`: Wether the street is oneway or not
  * openstreetmapId `integer`: the id of the openstreetmap element
  * openstreetmap_map_url `string`: The URL to get the location on Openstreetmap Map
  * phonePrefix `string`: The phone prefix of the country
  * placeType `string`: The Type of Feature see faq
  * population `integer`: How many people lives in this feature
  * postalCodeMask `string`: The mask that all postal code of the country matches
  * postalCodeRegex `string`: The regexp that all zipcode/postalcode of the country matches
  * streetType `string`: the type of the street
  * timezone `string`: The time zone (e.g : Europe/Paris)
  * tld `string`: top-level domain name, (last part of an Internet domain name) of the country
  * yahoo_map_url `string`: The URL to get the location on Yahoo Map
  * zipCodes `array`: The zipcodes (only for city and city subdivision), one node by zipcode
    * items `string`

### HouseNumberDto
* HouseNumberDto `object`
  * location `string`: The lat / long coordinate
  * number `string`: the house number value

### SolrResponseDto
* SolrResponseDto `object`
  * adm1_code `string`: The internal code for the administrative division of level 1
  * adm1_name `string`: The name of the administrative division of level 1
  * adm1_names_alternate `array`: The alternate names of the administrative division of level 1 without specific language code
    * items `string`
  * adm2_code `string`: The internal code for the administrative division of level 2
  * adm2_name `string`: The name of the administrative division of level 2
  * adm2_names_alternate `array`: The alternate names of the administrative division of level 2 without specific language code
    * items `string`
  * adm3_code `string`: The internal code for the administrative division of level 3
  * adm3_name `string`: The name of the administrative division of level 3
  * adm4_code `string`: The internal code for the administrative division of level 4
  * adm4_name `string`: The name of the administrative division of level 4
  * amenity `string`: Informations on category of OpenStreetMap POIs
  * area `number`: Area of the country in m² (only for country placetype)
  * capital_name `string`: Name of the capital of the country(only for country placetype)
  * continent `string`: The continent the country belongs (only for country placetype)
  * country_code `string`: The ISO 3166 country code
  * country_flag_url `string`: The relative URL to get the country flag image
  * country_name `string`: The name of the country the features belongs to
  * country_names_alternate `array`: The alternate names of the country without specific language code
    * items `string`
  * currency_code `string`: The ISO 4217 Currency from the curencycode (only for country placetype)
  * currency_name `string`: The name of the currency of the country (only for country placetype)
  * elevation `integer`: Elevation in meters
  * feature_class `string`: The feature Class.
  * feature_code `string`: The feature Code.
  * feature_id `integer`: A unique id that identify the feature
  * fips_code `string`: The FIPS Code of the country (only for country placetype)
  * fully_qualified_address `string`: NOT USED YET
  * fully_qualified_name `string`: A name of the form : (adm1Name et adm2Name are printed) Paris, Département de Ville-De-Paris, Ile-De-France, (FR)
  * google_map_url `string`: The URL to get the location on Google Map
  * gtopo30 `integer`: Average elevation of 30'x30' (ca 900mx900m) area in meters
  * house_numbers `array`: a list of all the house numbers sorted and their coordinates (only for placetype street)
    * items [HouseNumberDto](#housenumberdto)
  * is_in `string`: Information on the city where the street / POI is (depends on OpenStreetMap 'is_in' field), the city in general (only for placetype street)
  * is_in_adm `string`: Information of the administration division where the street / POI is.
  * is_in_place `string`: Information on the place where the street / POI is (quater, common place). Generally a place at a lower level than city
  * is_in_zip `array`: Information of the zipcode where the street / POI is (often fill for placetype street)
    * items `string`
  * isoalpha2_country_code `string`: The ISO 3166 alpha 2 code of the country (only for country placetype)
  * isoalpha3_country_code `string`: The ISO 3166 alpha 3 code of the country (only for country placetype)
  * lat `number`: The latitude (north-south)
  * length `number`: The length of the street (only for placetype street)
  * level `integer`: Level of the Adm 1 , 2, 3, or 4(only for Adm placetype)
  * lng `number`: The longitude (east-West)
  * municipality `boolean`: if the place is a municipality. it is usefull for geonames feature that don't have concept of 'city' but a populated place (that can be a quarter)
  * name `string`: The name of the feature
  * name_alternates `array`: The alternate names of the feature that without specific language code
    * items `string`
  * name_ascii `string`: The ASCII name
  * one_way `boolean`: whether the street is one way or not (only for placetype street)
  * openstreetmap_id `integer`: The OpenStreetMap unique id of the street (only for placetype street)
  * openstreetmap_map_url `string`: The URL to get the location on OpenStreetMap.org
  * phone_prefix `string`: The phone prefix of the country. e.g : +33 .(only for country placetype)
  * placetype `string`: The place Type of the Feature
  * population `integer`: How many people live in this feature
  * postal_code_mask `string`: The mask that postal codes should verify. e.g : ##### (only for country placetype)
  * postal_code_regex `string`: The regular expression that postal codes should verify (only for country placetype)
  * score `number`: a number that indicates the relevance of the result
  * spoken_languages `array`: List of languages spoken in the country (only for country placetype)
    * items `string`
  * street_type `string`: The type of the street (only for placetype street)
  * timezone `string`: The timezone (e.g :Europe/Paris).
  * tld `string`: Top level domain of the country (only for country placetype)
  * yahoo_map_url `string`: The URL to get the location on Yahoo Map
  * zipcodes `array`: The zipcodes
    * items `string`

### StreetDistance
* StreetDistance `object`
  * countryCode `string`: The ISO 3166 country code
  * distance `number`: The distance between the point and the nearest point to the street in meters
  * fullyQualifiedAddress `string`: NOT USED YET
  * gid `integer`: Unique id of the street, it is unique between GeoNames and OpenStreetMap
  * isIn `string`: Information on the city where the street is (depends on OpenStreetMap 'is_in' field), the city in general
  * isInAdm `string`: Information of the administration division where the street is.
  * isInPlace `string`: Information on the place where the street is (quater, common place). Generally a place at a lower level than city
  * isInZip `string`: Information of the zipcode where the street / POI is (often fill for placetype street)
  * lat `number`: The latitude of the middle of the street(north-south)
  * length `number`: length of the street in meters
  * lng `number`: The longitude of the middle of the street(east-west)
  * name `string`: The name of the street
  * oneWay `boolean`: Whether the street is a one way street or not
  * openstreetmapId `integer`: OpenStreetMap unique id of the street
  * streetType `string`: The type of the street (see street type list)

### StreetSearchResultsDto
* StreetSearchResultsDto `object`
  * QTime `integer`: The execution time of the query in ms
  * error `string`: A String only present if an error occured (e.g : empty Latitude or longitude)
  * numFound `integer`: The number of results display with this query (it takes the pagination into account)
  * result `array`
    * items [StreetDistance](#streetdistance)


