# @datafire/uspto_gov_bdss

Client library for Bulk Data Storage System Services

## Installation and Usage
```bash
npm install --save @datafire/uspto_gov_bdss
```
```js
let uspto_gov_bdss = require('@datafire/uspto_gov_bdss').create();

.then(data => {
  console.log(data);
});
```

## Description

Bulk Data Storage System (BDSS) allows the public to discover, search, and download patent and trademark data in bulk form.

## Actions

### getProductsWithLatestProductFiles
Use this GET to retrieve latest released bulk data products. Note that there is one file per product. The response includes product fields such as title, description, frequency, and level.


```js
uspto_gov_bdss.getProductsWithLatestProductFiles(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getProductsByName
Use this GET to search for bulk data services by product name or description. An error message will be returned if the product cannot be found by name. Note that product name is not case sensitive. You can enter full or partial name of an existing product to receive bulk data services. Default values for field names are as follows
- if both years are not defined, toYear will be set equal to current year, fromYear will be set equal to previous year
- if fromYear is defined, toYear will be set equal to fromYear+1
- if fromMonth not defined, current month will be used
- if toMonth not defined, it will be set equal to fromMonth
- if fromDay is not defined, it will be set equal to current day (today)
- if toDay is not defined, it will be set to the last day of toMonth/toYear


```js
uspto_gov_bdss.getProductsByName({
  "productName": ""
}, context)
```

#### Input
* input `object`
  * productName **required** `string`: Name of the product, for example, "Trademark"
  * fromYear `integer`: Year from when the product files are needed, for example, 1999.
  * toYear `integer`: Year until when the product files are needed, for example, 2000.
  * fromMonth `integer`: Month from when the product files are needed, for example, 01.
  * toMonth `integer`: Month until when the product files are needed, for example, 12.
  * fromDay `integer`: Day from when the product files are needed, for example, 01.
  * toDay `integer`: Day until when the product files are needed, for example, 31.
  * hierarchy `string`: Boolean flag to indicate if product hierarchy needs to be return in the response. By default it doesn't return the hierarchy in the response.
  * maxFiles `integer`: Max. number of files to retrieve, per product. Set value to -1 to get all files

#### Output
*Output schema unknown*

### getPopulartProducts
Use this GET to retrieve these bulk data files by their popularity. The response includes product fields such as title, description, frequency, and level.


```js
uspto_gov_bdss.getPopulartProducts(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getProductsTree
Use this GET to retrieve short name and parent/child relationships for bulk data products. Short names are unique IDs of the products and should be used in other GETs where {shortName} parameter is required
Use this GET to perform initial exploration of the existing products hierarchy
Short names are unique IDs of the products and should be used in other GETs where {shortName} parameter is required


```js
uspto_gov_bdss.getProductsTree(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getProductSubTree
Use this GET to search for bulk data products by their short names. This works almost like products/tree GET, the difference is that it returns subtree data starting from a particular tree node (i.e. the GET returns all children if parent short name is entered). If a product cannot be found by its short name (has to be exact match and is not case sensitive), then an error message will appear in response body.


```js
uspto_gov_bdss.getProductSubTree({
  "shortName": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: Short name of the product, for example, "PTISSD"

#### Output
*Output schema unknown*

### getProductsByShortName
Use this GET to search for bulk data products by their short names and description. Note that "From" and "To" dates can be inputted separately as year/month/day values or as a single date string in format "YYYY-MM-DD".
If all values are entered, single date strings have a higher priority
For the list of default values rules, see GET /products/byname/{productName} above


```js
uspto_gov_bdss.getProductsByShortName({
  "shortName": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: Short name  of the product, for example, "PTGRSP"
  * fromYear `integer`: Year from when the product files are needed, for example, 1999.
  * toYear `integer`: Year until when the product files are needed, for example, 2000.
  * fromMonth `integer`: Month from when the product files are needed, for example, 01.
  * toMonth `integer`: Month until when the product files are needed, for example, 12.
  * fromDay `integer`: Day from when the product files are needed, for example, 01.
  * toDay `integer`: Day until when the product files are needed, for example, 31.
  * fromDate `string`: Year from when the product files are needed, for example, 1999-01-01.
  * toDate `string`: Year until when the product files are needed, for example, 2001-12-31.
  * hierarchy `string`: Boolean flag (possible values: true and false) to indicate if product hierarchy needs to be return in the response. By default it doesn't return the hierarchy in the response.

#### Output
*Output schema unknown*

### getLatestProductFilesByProductIdAndTime
Use this GET to search for latest released bulk data products by their short names and release year. The return response will include the latest files within the year specified.  An error message will be returned if product(s) cannot be found for the year specified


```js
uspto_gov_bdss.getLatestProductFilesByProductIdAndTime({
  "shortName": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: Short name of the product, for example, "PTGRSP"
  * year `integer`: Year of the product files  needed, for example, 2001.
  * hierarchy `string`: Boolean flag (possible values: true and false) to indicate if product hierarchy needs to be return in the response. By default it doesn't return the hierarchy in the response.

#### Output
*Output schema unknown*



## Definitions

### ProductFileModel
* ProductFileModel `object`
  * fileDownloadUrl `string`
  * fileFromTime `string`
  * fileIdentifier `integer`
  * fileLinkPath `string`
  * fileName `string`
  * fileReleaseDate `string`
  * fileSize `integer`
  * fileToTime `string`
  * fileType `string`

### ProductModel
* ProductModel `object`: Product Model
  * numberOfFiles `integer`
  * parentProduct [ProductModel](#productmodel)
  * productDesc `string`
  * productFiles `array`
    * items [ProductFileModel](#productfilemodel)
  * productFrequency `string`
  * productFromDate `string`
  * productIdentifier `integer`
  * productLevel `string` (values: available, pending, sold): Represents the Level in the Product hierarchy.
  * productLinkPath `string`
  * productShortName `string`
  * productTitle `string`
  * productToDate `string`

### ProductModelShort
* ProductModelShort `object`: Product Model, short version, with the list of child products
  * productChildren `array`
    * items [ProductModelShort](#productmodelshort)
  * productLinkPath `string`
  * productShortName `string`
  * productTitle `string`


