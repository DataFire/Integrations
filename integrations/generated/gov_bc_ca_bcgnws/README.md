# @datafire/gov_bc_ca_bcgnws

Client library for BC Geographical Names Web Service -

## Installation and Usage
```bash
npm install --save datafire @datafire/gov_bc_ca_bcgnws
```

```js
let datafire = require('datafire');
let gov_bc_ca_bcgnws = require('@datafire/gov_bc_ca_bcgnws').actions;
let context = new datafire.Context();

gov_bc_ca_bcgnws.featureCategories.get({}, context).then(data => {
  console.log(data);
})
```

## Description
This REST API provides searchable access to information about geographical names in the province of British Columbia, including name status and details about the corresponding geographic feature.

## Actions
### featureCategories.get
Gets a list of all feature categories used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.


```js
gov_bc_ca_bcgnws.featureCategories.get({
  "outputFormat": ""
}, context)
```

#### Parameters
* outputFormat (string) **required** - The format of the output.

### featureClasses.get
Gets a list of all feature classes used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.


```js
gov_bc_ca_bcgnws.featureClasses.get({
  "outputFormat": ""
}, context)
```

#### Parameters
* outputFormat (string) **required** - The format of the output.

### featureTypes.get
Gets a list of all feature types used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.


```js
gov_bc_ca_bcgnws.featureTypes.get({
  "outputFormat": ""
}, context)
```

#### Parameters
* outputFormat (string) **required** - The format of the output.

### features.featureId.get
Get information about the geographical feature with the specified featureId.


```js
gov_bc_ca_bcgnws.features.featureId.get({
  "featureId": 0
}, context)
```

#### Parameters
* featureId (integer) **required** - The unique identifier for a feature

### nameAuthorities.get
Gets a list of all name authorities responsible for naming decisions of the geographical names in the BC Geographical Names Information System (BCGNIS)


```js
gov_bc_ca_bcgnws.nameAuthorities.get({
  "outputFormat": ""
}, context)
```

#### Parameters
* outputFormat (string) **required** - The format of the output.

### names.changes.get
Search for information about geographical names which have changed most recently within a specified time window.  Changes may include status cupdates and metadata corrections.


```js
gov_bc_ca_bcgnws.names.changes.get({
  "outputFormat": "",
  "fromDate": 0,
  "toDate": 0
}, context)
```

#### Parameters
* outputFormat (string) **required** - The format of the output.
* fromDate (integer) **required** - Defines the earliest date (YYYY-MM-DD format) of the change time window for the search
* toDate (integer) **required** - Defines the latest date (YYYY-MM-DD format) of the change time window for the search
* featureClass (string) - A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.
* featureCategory (string) - A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.
* featureType (string) - A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included
* sortBy (string) - The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
* outputSRS (integer) - The EPSG code of the spatial reference system (SRS) to use for output geometries.
* embed (integer) - A flag to indicate whether to embed the corresponding 'feature' into each matching name
* outputStyle (string) - A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)
* itemsPerPage (integer) - The number of search results to return (1-200)
* startIndex (integer) - The index of the first record to be returned (>= 1)

### names.decisions.recent.get
Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) within the last X days.


```js
gov_bc_ca_bcgnws.names.decisions.recent.get({
  "outputFormat": "",
  "days": 0
}, context)
```

#### Parameters
* outputFormat (string) **required** - The format of the output.
* days (integer) **required** - The number of days used to define the time window of naming decisions to search.  The number is interpreted as searching for 'names affected by decisions within the last X days'.
* featureClass (string) - A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.
* featureCategory (string) - A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.
* featureType (string) - A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included
* sortBy (string) - The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
* outputSRS (integer) - The EPSG code of the spatial reference system (SRS) to use for output geometries.
* embed (integer) - A flag to indicate whether to embed the corresponding 'feature' into each matching name
* outputStyle (string) - A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)
* itemsPerPage (integer) - The number of search results to return (1-200)
* startIndex (integer) - The index of the first record to be returned (>= 1)

### names.decisions.year.get
Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) in a given year.


```js
gov_bc_ca_bcgnws.names.decisions.year.get({
  "outputFormat": "",
  "year": 0
}, context)
```

#### Parameters
* outputFormat (string) **required** - The format of the output.
* year (integer) **required** - The year in which to search for names affected by naming decisions'.
* featureClass (string) - A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.
* featureCategory (string) - A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.
* featureType (string) - A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included
* sortBy (string) - The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
* outputSRS (integer) - The EPSG code of the spatial reference system (SRS) to use for output geometries.
* embed (integer) - A flag to indicate whether to embed the corresponding 'feature' into each matching name
* outputStyle (string) - A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)
* itemsPerPage (integer) - The number of search results to return (1-200)
* startIndex (integer) - The index of the first record to be returned (>= 1)

### names.inside.get
Search for information about geographical names that correspond to features within a geographic bounding box.  Various options and filter parameters are available to refine the search.


```js
gov_bc_ca_bcgnws.names.inside.get({
  "outputFormat": "",
  "bbox": ""
}, context)
```

#### Parameters
* outputFormat (string) **required** - The format of the output.
* bbox (string) **required** - A geographic bounding box defining the search area.  Must be specified as a string of the form 'minLongitude,minLatitude,maxLongitude,maxLatitude' (WGS84). e.g. -119,49,-118,50
* featureClass (string) - A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.
* featureCategory (string) - A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.
* featureType (string) - A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included
* sortBy (string) - The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
* outputSRS (integer) - The EPSG code of the spatial reference system (SRS) to use for output geometries.
* embed (integer) - A flag to indicate whether to embed the corresponding 'feature' into each matching name
* outputStyle (string) - A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)
* itemsPerPage (integer) - The number of search results to return (1-200)
* startIndex (integer) - The index of the first record to be returned (>= 1)

### names.near.get
Search for information about geographical names that correspond to features within a geographic area defined by a centre point and a radius.  Various options and filter parameters are available to refine the search.


```js
gov_bc_ca_bcgnws.names.near.get({
  "outputFormat": "",
  "featurePoint": "",
  "distance": ""
}, context)
```

#### Parameters
* outputFormat (string) **required** - The format of the output.
* featurePoint (string) **required** - A geographic coordinate specifying the centre point of the search area.  Must be specified as a string of the form 'longitude,latitude' (WGS84).  e.g. -120,51
* distance (string) **required** - A radius (in kilometres) around the centre point.
* featureClass (string) - A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.
* featureCategory (string) - A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.
* featureType (string) - A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included
* sortBy (string) - The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
* outputSRS (integer) - The EPSG code of the spatial reference system (SRS) to use for output geometries.
* embed (integer) - A flag to indicate whether to embed the corresponding 'feature' into each matching name
* outputStyle (string) - A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)
* itemsPerPage (integer) - The number of search results to return (1-200)
* startIndex (integer) - The index of the first record to be returned (>= 1)

### names.notOfficial.search.get
Search for information about unofficial geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.


```js
gov_bc_ca_bcgnws.names.notOfficial.search.get({
  "outputFormat": "",
  "name": ""
}, context)
```

#### Parameters
* outputFormat (string) **required** - The format of the output.
* name (string) **required** - A filter to search based on the the text of the name itself.  Use the asterisk (*) as a wildcard character.  For example 'vancouv*'
* exactSpelling (integer) - If the 'name' parameter is specified, 'exactSpelling' specifies whether to include only names that exactly match the search text (exactSpelling=1), or whether to also include names with similar spellings (exactSpelling=0)
* featureClass (string) - A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.
* featureCategory (string) - A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.
* featureType (string) - A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included
* sortBy (string) - The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
* outputSRS (integer) - The EPSG code of the spatial reference system (SRS) to use for output geometries.
* embed (integer) - A flag to indicate whether to embed the corresponding 'feature' into each matching name
* outputStyle (string) - A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)
* itemsPerPage (integer) - The number of search results to return (1-200)
* startIndex (integer) - The index of the first record to be returned (>= 1)

### names.official.search.get
Search for information about official geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.


```js
gov_bc_ca_bcgnws.names.official.search.get({
  "outputFormat": "",
  "name": ""
}, context)
```

#### Parameters
* outputFormat (string) **required** - The format of the output.
* name (string) **required** - A filter to search based on the the text of the name itself.  Use the asterisk (*) as a wildcard character.  For example 'vancouv*'
* exactSpelling (integer) - If the 'name' parameter is specified, 'exactSpelling' specifies whether to include only names that exactly match the search text (exactSpelling=1), or whether to also include names with similar spellings (exactSpelling=0)
* featureClass (string) - A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.
* featureCategory (string) - A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.
* featureType (string) - A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included
* sortBy (string) - The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
* outputSRS (integer) - The EPSG code of the spatial reference system (SRS) to use for output geometries.
* embed (integer) - A flag to indicate whether to embed the corresponding 'feature' into each matching name
* outputStyle (string) - A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)
* itemsPerPage (integer) - The number of search results to return (1-200)
* startIndex (integer) - The index of the first record to be returned (>= 1)

### names.search.get
Search for information about geographical names by the text of the name itself.  The response will include both official and unofficial names.  Various options and filter parameters are available to refine the search.


```js
gov_bc_ca_bcgnws.names.search.get({
  "outputFormat": "",
  "name": ""
}, context)
```

#### Parameters
* outputFormat (string) **required** - The format of the output.
* name (string) **required** - A filter to search based on the the text of the name itself.  Use the asterisk (*) as a wildcard character.  For example 'vancouv*'
* exactSpelling (integer) - If the 'name' parameter is specified, 'exactSpelling' specifies whether to include only names that exactly match the search text (exactSpelling=1), or whether to also include names with similar spellings (exactSpelling=0)
* featureClass (string) - A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.
* featureCategory (string) - A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.
* featureType (string) - A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included
* sortBy (string) - The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
* outputSRS (integer) - The EPSG code of the spatial reference system (SRS) to use for output geometries.
* embed (integer) - A flag to indicate whether to embed the corresponding 'feature' into each matching name
* outputStyle (string) - A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)
* itemsPerPage (integer) - The number of search results to return (1-200)
* startIndex (integer) - The index of the first record to be returned (>= 1)

### names.nameId.outputFormat.get
Get information about the geographical name with the specified nameId.


```js
gov_bc_ca_bcgnws.names.nameId.outputFormat.get({
  "nameId": 0,
  "outputFormat": ""
}, context)
```

#### Parameters
* nameId (integer) **required** - The unique identifier for a name
* outputFormat (string) **required** - The format of the output.

