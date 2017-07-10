# @datafire/gov_bc_ca_bcgnws
This REST API provides searchable access to information about geographical names in the province of British Columbia, including name status and details about the corresponding geographic feature.

## Operation: featureCategories.get
Gets a list of all feature categories used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "outputFormat": {
      "type": "string",
      "description": "The format of the output.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "outputFormat"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: featureClasses.get
Gets a list of all feature classes used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "outputFormat": {
      "type": "string",
      "description": "The format of the output.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "outputFormat"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: featureTypes.get
Gets a list of all feature types used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "outputFormat": {
      "type": "string",
      "description": "The format of the output.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "outputFormat"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: features.featureId.get
Get information about the geographical feature with the specified featureId.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "featureId": {
      "type": "integer",
      "description": "The unique identifier for a feature"
    }
  },
  "additionalProperties": false,
  "required": [
    "featureId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: nameAuthorities.get
Gets a list of all name authorities responsible for naming decisions of the geographical names in the BC Geographical Names Information System (BCGNIS)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "outputFormat": {
      "type": "string",
      "description": "The format of the output.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "outputFormat"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: names.changes.get
Search for information about geographical names which have changed most recently within a specified time window.  Changes may include status cupdates and metadata corrections.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "outputFormat": {
      "type": "string",
      "description": "The format of the output.",
      "enum": [
        "json",
        "xml",
        "kml",
        "csv"
      ]
    },
    "fromDate": {
      "type": "integer",
      "description": "Defines the earliest date (YYYY-MM-DD format) of the change time window for the search"
    },
    "toDate": {
      "type": "integer",
      "description": "Defines the latest date (YYYY-MM-DD format) of the change time window for the search"
    },
    "featureClass": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included."
    },
    "featureCategory": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included."
    },
    "featureType": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included"
    },
    "sortBy": {
      "type": "string",
      "description": "The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.",
      "enum": [
        "name",
        "featureType",
        "decisionDate"
      ]
    },
    "outputSRS": {
      "type": "integer",
      "description": "The EPSG code of the spatial reference system (SRS) to use for output geometries.",
      "enum": [
        4326,
        4269,
        3005,
        3857,
        26907,
        26908,
        26909,
        26910,
        26911
      ]
    },
    "embed": {
      "type": "integer",
      "description": "A flag to indicate whether to embed the corresponding 'feature' into each matching name",
      "enum": [
        0,
        1
      ]
    },
    "outputStyle": {
      "type": "string",
      "description": "A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)",
      "enum": [
        "summary",
        "detail"
      ]
    },
    "itemsPerPage": {
      "type": "integer",
      "description": "The number of search results to return (1-200)"
    },
    "startIndex": {
      "type": "integer",
      "description": "The index of the first record to be returned (>= 1)"
    }
  },
  "additionalProperties": false,
  "required": [
    "outputFormat",
    "fromDate",
    "toDate"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: names.decisions.recent.get
Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) within the last X days.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "outputFormat": {
      "type": "string",
      "description": "The format of the output.",
      "enum": [
        "json",
        "xml",
        "kml",
        "csv"
      ]
    },
    "days": {
      "type": "integer",
      "description": "The number of days used to define the time window of naming decisions to search.  The number is interpreted as searching for 'names affected by decisions within the last X days'."
    },
    "featureClass": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included."
    },
    "featureCategory": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included."
    },
    "featureType": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included"
    },
    "sortBy": {
      "type": "string",
      "description": "The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.",
      "enum": [
        "name",
        "featureType",
        "decisionDate"
      ]
    },
    "outputSRS": {
      "type": "integer",
      "description": "The EPSG code of the spatial reference system (SRS) to use for output geometries.",
      "enum": [
        4326,
        4269,
        3005,
        3857,
        26907,
        26908,
        26909,
        26910,
        26911
      ]
    },
    "embed": {
      "type": "integer",
      "description": "A flag to indicate whether to embed the corresponding 'feature' into each matching name",
      "enum": [
        0,
        1
      ]
    },
    "outputStyle": {
      "type": "string",
      "description": "A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)",
      "enum": [
        "summary",
        "detail"
      ]
    },
    "itemsPerPage": {
      "type": "integer",
      "description": "The number of search results to return (1-200)"
    },
    "startIndex": {
      "type": "integer",
      "description": "The index of the first record to be returned (>= 1)"
    }
  },
  "additionalProperties": false,
  "required": [
    "outputFormat",
    "days"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: names.decisions.year.get
Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) in a given year.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "outputFormat": {
      "type": "string",
      "description": "The format of the output.",
      "enum": [
        "json",
        "xml",
        "kml",
        "csv"
      ]
    },
    "year": {
      "type": "integer",
      "description": "The year in which to search for names affected by naming decisions'."
    },
    "featureClass": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included."
    },
    "featureCategory": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included."
    },
    "featureType": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included"
    },
    "sortBy": {
      "type": "string",
      "description": "The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.",
      "enum": [
        "name",
        "featureType",
        "decisionDate"
      ]
    },
    "outputSRS": {
      "type": "integer",
      "description": "The EPSG code of the spatial reference system (SRS) to use for output geometries.",
      "enum": [
        4326,
        4269,
        3005,
        3857,
        26907,
        26908,
        26909,
        26910,
        26911
      ]
    },
    "embed": {
      "type": "integer",
      "description": "A flag to indicate whether to embed the corresponding 'feature' into each matching name",
      "enum": [
        0,
        1
      ]
    },
    "outputStyle": {
      "type": "string",
      "description": "A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)",
      "enum": [
        "summary",
        "detail"
      ]
    },
    "itemsPerPage": {
      "type": "integer",
      "description": "The number of search results to return (1-200)"
    },
    "startIndex": {
      "type": "integer",
      "description": "The index of the first record to be returned (>= 1)"
    }
  },
  "additionalProperties": false,
  "required": [
    "outputFormat",
    "year"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: names.inside.get
Search for information about geographical names that correspond to features within a geographic bounding box.  Various options and filter parameters are available to refine the search.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "outputFormat": {
      "type": "string",
      "description": "The format of the output.",
      "enum": [
        "json",
        "xml",
        "kml",
        "csv"
      ]
    },
    "bbox": {
      "type": "string",
      "description": "A geographic bounding box defining the search area.  Must be specified as a string of the form 'minLongitude,minLatitude,maxLongitude,maxLatitude' (WGS84). e.g. -119,49,-118,50"
    },
    "featureClass": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included."
    },
    "featureCategory": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included."
    },
    "featureType": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included"
    },
    "sortBy": {
      "type": "string",
      "description": "The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.",
      "enum": [
        "name",
        "featureType",
        "decisionDate"
      ]
    },
    "outputSRS": {
      "type": "integer",
      "description": "The EPSG code of the spatial reference system (SRS) to use for output geometries.",
      "enum": [
        4326,
        4269,
        3005,
        3857,
        26907,
        26908,
        26909,
        26910,
        26911
      ]
    },
    "embed": {
      "type": "integer",
      "description": "A flag to indicate whether to embed the corresponding 'feature' into each matching name",
      "enum": [
        0,
        1
      ]
    },
    "outputStyle": {
      "type": "string",
      "description": "A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)",
      "enum": [
        "summary",
        "detail"
      ]
    },
    "itemsPerPage": {
      "type": "integer",
      "description": "The number of search results to return (1-200)"
    },
    "startIndex": {
      "type": "integer",
      "description": "The index of the first record to be returned (>= 1)"
    }
  },
  "additionalProperties": false,
  "required": [
    "outputFormat",
    "bbox"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: names.near.get
Search for information about geographical names that correspond to features within a geographic area defined by a centre point and a radius.  Various options and filter parameters are available to refine the search.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "outputFormat": {
      "type": "string",
      "description": "The format of the output.",
      "enum": [
        "json",
        "xml",
        "kml",
        "csv"
      ]
    },
    "featurePoint": {
      "type": "string",
      "description": "A geographic coordinate specifying the centre point of the search area.  Must be specified as a string of the form 'longitude,latitude' (WGS84).  e.g. -120,51"
    },
    "distance": {
      "type": "string",
      "description": "A radius (in kilometres) around the centre point."
    },
    "featureClass": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included."
    },
    "featureCategory": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included."
    },
    "featureType": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included"
    },
    "sortBy": {
      "type": "string",
      "description": "The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.",
      "enum": [
        "name",
        "featureType",
        "decisionDate"
      ]
    },
    "outputSRS": {
      "type": "integer",
      "description": "The EPSG code of the spatial reference system (SRS) to use for output geometries.",
      "enum": [
        4326,
        4269,
        3005,
        3857,
        26907,
        26908,
        26909,
        26910,
        26911
      ]
    },
    "embed": {
      "type": "integer",
      "description": "A flag to indicate whether to embed the corresponding 'feature' into each matching name",
      "enum": [
        0,
        1
      ]
    },
    "outputStyle": {
      "type": "string",
      "description": "A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)",
      "enum": [
        "summary",
        "detail"
      ]
    },
    "itemsPerPage": {
      "type": "integer",
      "description": "The number of search results to return (1-200)"
    },
    "startIndex": {
      "type": "integer",
      "description": "The index of the first record to be returned (>= 1)"
    }
  },
  "additionalProperties": false,
  "required": [
    "outputFormat",
    "featurePoint",
    "distance"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: names.notOfficial.search.get
Search for information about unofficial geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "outputFormat": {
      "type": "string",
      "description": "The format of the output.",
      "enum": [
        "json",
        "xml",
        "kml",
        "csv"
      ]
    },
    "name": {
      "type": "string",
      "description": "A filter to search based on the the text of the name itself.  Use the asterisk (*) as a wildcard character.  For example 'vancouv*'"
    },
    "exactSpelling": {
      "type": "integer",
      "description": "If the 'name' parameter is specified, 'exactSpelling' specifies whether to include only names that exactly match the search text (exactSpelling=1), or whether to also include names with similar spellings (exactSpelling=0)",
      "enum": [
        0,
        1
      ]
    },
    "featureClass": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included."
    },
    "featureCategory": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included."
    },
    "featureType": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included"
    },
    "sortBy": {
      "type": "string",
      "description": "The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.",
      "enum": [
        "relevance",
        "name",
        "featureType",
        "decisionDate"
      ]
    },
    "outputSRS": {
      "type": "integer",
      "description": "The EPSG code of the spatial reference system (SRS) to use for output geometries.",
      "enum": [
        4326,
        4269,
        3005,
        3857,
        26907,
        26908,
        26909,
        26910,
        26911
      ]
    },
    "embed": {
      "type": "integer",
      "description": "A flag to indicate whether to embed the corresponding 'feature' into each matching name",
      "enum": [
        0,
        1
      ]
    },
    "outputStyle": {
      "type": "string",
      "description": "A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)",
      "enum": [
        "summary",
        "detail"
      ]
    },
    "itemsPerPage": {
      "type": "integer",
      "description": "The number of search results to return (1-200)"
    },
    "startIndex": {
      "type": "integer",
      "description": "The index of the first record to be returned (>= 1)"
    }
  },
  "additionalProperties": false,
  "required": [
    "outputFormat",
    "name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: names.official.search.get
Search for information about official geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "outputFormat": {
      "type": "string",
      "description": "The format of the output.",
      "enum": [
        "json",
        "xml",
        "kml",
        "csv"
      ]
    },
    "name": {
      "type": "string",
      "description": "A filter to search based on the the text of the name itself.  Use the asterisk (*) as a wildcard character.  For example 'vancouv*'"
    },
    "exactSpelling": {
      "type": "integer",
      "description": "If the 'name' parameter is specified, 'exactSpelling' specifies whether to include only names that exactly match the search text (exactSpelling=1), or whether to also include names with similar spellings (exactSpelling=0)",
      "enum": [
        0,
        1
      ]
    },
    "featureClass": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included."
    },
    "featureCategory": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included."
    },
    "featureType": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included"
    },
    "sortBy": {
      "type": "string",
      "description": "The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.",
      "enum": [
        "relevance",
        "name",
        "featureType",
        "decisionDate"
      ]
    },
    "outputSRS": {
      "type": "integer",
      "description": "The EPSG code of the spatial reference system (SRS) to use for output geometries.",
      "enum": [
        4326,
        4269,
        3005,
        3857,
        26907,
        26908,
        26909,
        26910,
        26911
      ]
    },
    "embed": {
      "type": "integer",
      "description": "A flag to indicate whether to embed the corresponding 'feature' into each matching name",
      "enum": [
        0,
        1
      ]
    },
    "outputStyle": {
      "type": "string",
      "description": "A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)",
      "enum": [
        "summary",
        "detail"
      ]
    },
    "itemsPerPage": {
      "type": "integer",
      "description": "The number of search results to return (1-200)"
    },
    "startIndex": {
      "type": "integer",
      "description": "The index of the first record to be returned (>= 1)"
    }
  },
  "additionalProperties": false,
  "required": [
    "outputFormat",
    "name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: names.search.get
Search for information about geographical names by the text of the name itself.  The response will include both official and unofficial names.  Various options and filter parameters are available to refine the search.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "outputFormat": {
      "type": "string",
      "description": "The format of the output.",
      "enum": [
        "json",
        "xml",
        "kml",
        "csv"
      ]
    },
    "name": {
      "type": "string",
      "description": "A filter to search based on the the text of the name itself.  Use the asterisk (*) as a wildcard character.  For example 'vancouv*'"
    },
    "exactSpelling": {
      "type": "integer",
      "description": "If the 'name' parameter is specified, 'exactSpelling' specifies whether to include only names that exactly match the search text (exactSpelling=1), or whether to also include names with similar spellings (exactSpelling=0)",
      "enum": [
        0,
        1
      ]
    },
    "featureClass": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included."
    },
    "featureCategory": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included."
    },
    "featureType": {
      "type": "string",
      "description": "A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included"
    },
    "sortBy": {
      "type": "string",
      "description": "The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.",
      "enum": [
        "relevance",
        "name",
        "featureType",
        "decisionDate"
      ]
    },
    "outputSRS": {
      "type": "integer",
      "description": "The EPSG code of the spatial reference system (SRS) to use for output geometries.",
      "enum": [
        4326,
        4269,
        3005,
        3857,
        26907,
        26908,
        26909,
        26910,
        26911
      ]
    },
    "embed": {
      "type": "integer",
      "description": "A flag to indicate whether to embed the corresponding 'feature' into each matching name",
      "enum": [
        0,
        1
      ]
    },
    "outputStyle": {
      "type": "string",
      "description": "A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)",
      "enum": [
        "summary",
        "detail"
      ]
    },
    "itemsPerPage": {
      "type": "integer",
      "description": "The number of search results to return (1-200)"
    },
    "startIndex": {
      "type": "integer",
      "description": "The index of the first record to be returned (>= 1)"
    }
  },
  "additionalProperties": false,
  "required": [
    "outputFormat",
    "name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: names.nameId.outputFormat.get
Get information about the geographical name with the specified nameId.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "nameId": {
      "type": "integer",
      "description": "The unique identifier for a name"
    },
    "outputFormat": {
      "type": "string",
      "description": "The format of the output.",
      "enum": [
        "json",
        "xml",
        "kml",
        "csv",
        "html"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "nameId",
    "outputFormat"
  ]
}
```
### Output Schema
```json
{}
```
