# @datafire/yellowpages

Client library for Yellow Pages

## Installation and Usage
```bash
npm install --save @datafire/yellowpages
```
```js
let yellowpages = require('@datafire/yellowpages').create();

yellowpages.listingmap.get({}).then(data => {
  console.log(data);
})
```

## Description

Use YP Places API to power your web and mobile apps with business listings, reviews, maps and much more...

## Actions

### listingmap.get
Returns an URL for a graphical map for a specified business listing.


```js
yellowpages.listingmap.get({
  "listingid": ""
}, context)
```

#### Input
* input `object`
  * listingid **required** `string`: YP listing ID.
  * pixel_width `integer`: Integer representing the width in pixels of the map (Default = 400). Examples: 400, 200, 123.
  * pixel_height `integer`: Integer representing the height in pixels of the map (Default = 400). Examples: 400, 200, 123.
  * image_format `string` (values: jpg, png, gif): String representing the mime-type of map you want returned. Valid values: jpg, png and gif.
  * zoom `number`: Sets the zoom factor for the map, expressed as a fraction from .1 to 1.
  * pan_vertical `string`: A positive or negative number reflecting the percentage of the map image to pan south (negative) or north (positive). (Default = 0). Examples: 0.5 (50% north) -0.4 (40% south). Postiive numbers tilt to the north, negative numbers tilt to the south.
  * pan_horizontal `string`: A positive or negative number reflecting the percentage of the map image to pan west (negative) or east (positive). (Default = 0). Examples: 0.5 (50% east) -0.4 (40% west). Postiive numbers tilt to the north, negative numbers tilt to the south.

#### Output
*Output schema unknown*

### search.get
Supports a number of specific use cases for finding a listing. The search request must include a searchloc value to set the geographic context for the search. The term value can include both name and category keywords. Note that if your implementation uses a single search box, you can combine geograpy and keywords in the term value and the API will parse them. This can potentially cause inaccurate matches if the business name includes place names, however. For example, the "LA wine Company" might be found in a search for "wine+LA" where LA is intended to mean Louisiana. Therefore, where possible, use the searchloc + term combination.


```js
yellowpages.search.get({
  "User-Agent": "",
  "term": "",
  "searchloc": ""
}, context)
```

#### Input
* input `object`
  * User-Agent **required** `string`: User agent.
  * term **required** `string`: Unparsed, user-entered search term. Note: For applications where users may provide the search term and location in a single input field (e.g. pizza, Los Angeles), the user-entered value can be sent in the term parameter thus avoiding the need to parse the term and location on the client side. To make this work, do not send a value for searchloc.
  * searchloc **required** `string`: Unparsed, user-entered search location. Please ensure that all values are URL encoded. If no value is passed for searchloc, then the search engine will attempt to find a valid geo location string in the term parameter's value.
  * phonesearch `boolean`: Indicates that the term parameter contains a phone number, formatted as a 10-digit integer, e.g. 8775551212.
  * listingcount `integer`: Total number of listings to return. Defaults to 5.
  * shorturl `boolean`: Enables short URL formats in the API response. Typically only used for SMS applications. Set to true for short URL format. Defaults to false.
  * format `string` (values: xml, json): Desired format of the response. Possible values: xml and json. Defaults to xml.
  * pagenum `integer`: The page index of the block of results to return. Defaults to 1.
  * sort `string` (values: distance, name): Select the sort criteria for Organic Listings (only).
  * radius `integer`: Maximum search radius (in miles) from center of target location for Organic Results (only).

#### Output
*Output schema unknown*

### details.get
Returns all available data for a given business listing, including hours of operation, website URL, etc.


```js
yellowpages.details.get({
  "User-Agent": "",
  "listingid": ""
}, context)
```

#### Input
* input `object`
  * User-Agent **required** `string`: User agent.
  * listingid **required** `string`: The unique identifier for the business listing.
  * format `string` (values: xml, json): Desired format of the response. Possible values: xml and json. Defaults to xml.

#### Output
*Output schema unknown*

### reviews.get
Returns all available user reviews for a given business listing.


```js
yellowpages.reviews.get({
  "listingid": ""
}, context)
```

#### Input
* input `object`
  * listingid **required** `string`: The unique identifier for the business listing.
  * format `string` (values: xml, json): Desired format of the response. Possible values: xml and json. Defaults to xml.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
