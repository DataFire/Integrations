# @datafire/schooldigger
Get detailed data on over 120,000 schools and 18,500 districts in the U.S.

## Operation: Districts_GetAllDistricts
Search the SchoolDigger database for districts. You may use any combination of criteria as query parameters.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "st": {
      "type": "string",
      "description": "Two character state (e.g. 'CA') - required"
    },
    "q": {
      "type": "string",
      "description": "Search term - note: will match district name or city (optional)"
    },
    "city": {
      "type": "string",
      "description": "Search for districts in this city (optional)"
    },
    "zip": {
      "type": "string",
      "description": "Search for districts in this 5-digit zip code (optional)"
    },
    "nearLatitude": {
      "type": "number",
      "format": "double",
      "description": "Search for districts within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. 44.982560) (optional) (Pro, Enterprise API levels only. Enterprise API level will flag districts that include lat/long in its attendance boundary.)"
    },
    "nearLongitude": {
      "type": "number",
      "format": "double",
      "description": "Search for districts within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. -124.289185) (optional) (Pro, Enterprise API levels only. Enterprise API level will flag districts that include lat/long in its attendance boundary.)"
    },
    "boundaryAddress": {
      "type": "string",
      "description": "Full U.S. address: flag returned districts that include this address in its attendance boundary. Example: '123 Main St. AnyTown CA 90001' (optional) (Enterprise API level only)"
    },
    "distanceMiles": {
      "type": "integer",
      "format": "int32",
      "description": "Search for districts within (distanceMiles) of (nearLatitude)/(nearLongitude) (Default 5 miles) (optional) (Pro, Enterprise API levels only)"
    },
    "isInBoundaryOnly": {
      "type": "boolean",
      "description": "Return only the districts that include given location (nearLatitdue/nearLongitude) or (nearAddress) in its attendance boundary (Enterprise API level only)"
    },
    "boxLatitudeNW": {
      "type": "number",
      "format": "double",
      "description": "Search for districts within a 'box' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional)"
    },
    "boxLongitudeNW": {
      "type": "number",
      "format": "double",
      "description": "Search for districts within a 'box' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional)"
    },
    "boxLatitudeSE": {
      "type": "number",
      "format": "double",
      "description": "Search for districts within a 'box' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional)"
    },
    "boxLongitudeSE": {
      "type": "number",
      "format": "double",
      "description": "Search for districts within a 'box' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional)"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Page number to retrieve (optional, default: 1)"
    },
    "perPage": {
      "type": "integer",
      "format": "int32",
      "description": "Number of districts to retrieve on a page (50 max) (optional, default: 10)"
    },
    "sortBy": {
      "type": "string",
      "description": "Sort list. Values are: districtname, distance, rank. For descending order, preceed with '-' i.e. -districtname (optional, default: districtname)"
    },
    "appID": {
      "type": "string",
      "description": "Your API app id"
    },
    "appKey": {
      "type": "string",
      "description": "Your API app key"
    }
  },
  "additionalProperties": false,
  "required": [
    "st",
    "appID",
    "appKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/APIDistrictList"
}
```
## Operation: Districts_GetDistrict
Retrieve a single district record from the SchoolDigger database

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The 7 digit District ID (e.g. 0642150)"
    },
    "appID": {
      "type": "string",
      "description": "Your API app id"
    },
    "appKey": {
      "type": "string",
      "description": "Your API app key"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "appID",
    "appKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/APIDistrict"
}
```
## Operation: v1.rankings.districts.st.get
Returns a SchoolDigger district ranking list

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "st": {
      "type": "string",
      "description": "Two character state (e.g. 'CA')"
    },
    "year": {
      "type": "integer",
      "format": "int32",
      "description": "The ranking year (leave blank for most recent year)"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Page number to retrieve (optional, default: 1)"
    },
    "perPage": {
      "type": "integer",
      "format": "int32",
      "description": "Number of districts to retrieve on a page (50 max) (optional, default: 10)"
    },
    "appID": {
      "type": "string",
      "description": "Your API app id"
    },
    "appKey": {
      "type": "string",
      "description": "Your API app key"
    }
  },
  "additionalProperties": false,
  "required": [
    "st",
    "appID",
    "appKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/APIDistrictListRank"
}
```
## Operation: v1.rankings.schools.st.get
Returns a SchoolDigger school ranking list

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "st": {
      "type": "string",
      "description": "Two character state (e.g. 'CA')"
    },
    "year": {
      "type": "integer",
      "format": "int32",
      "description": "The ranking year (leave blank for most recent year)"
    },
    "level": {
      "type": "string",
      "description": "Level of ranking: 'Elementary', 'Middle', or 'High'"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Page number to retrieve (optional, default: 1)"
    },
    "perPage": {
      "type": "integer",
      "format": "int32",
      "description": "Number of schools to retrieve on a page (50 max) (optional, default: 10)"
    },
    "appID": {
      "type": "string",
      "description": "Your API app id"
    },
    "appKey": {
      "type": "string",
      "description": "Your API app key"
    }
  },
  "additionalProperties": false,
  "required": [
    "st",
    "appID",
    "appKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/APISchoolListRank"
}
```
## Operation: Schools_GetAllSchools
Search the SchoolDigger database for schools. You may use any combination of criteria as query parameters.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "st": {
      "type": "string",
      "description": "Two character state (e.g. 'CA') - required"
    },
    "q": {
      "type": "string",
      "description": "Search term - note: will match school name or city (optional)"
    },
    "districtID": {
      "type": "string",
      "description": "Search for schools within this district (7 digit district id) (optional)"
    },
    "level": {
      "type": "string",
      "description": "Search for schools at this level. Valid values: 'Elementary', 'Middle', 'High', 'Alt', 'Private' (optional)"
    },
    "city": {
      "type": "string",
      "description": "Search for schools in this city (optional)"
    },
    "zip": {
      "type": "string",
      "description": "Search for schools in this 5-digit zip code (optional)"
    },
    "isMagnet": {
      "type": "boolean",
      "description": "True = return only magnet schools, False = return only non-magnet schools (optional) (Pro, Enterprise API levels only)"
    },
    "isCharter": {
      "type": "boolean",
      "description": "True = return only charter schools, False = return only non-charter schools (optional) (Pro, Enterprise API levels only)"
    },
    "isVirtual": {
      "type": "boolean",
      "description": "True = return only virtual schools, False = return only non-virtual schools (optional) (Pro, Enterprise API levels only)"
    },
    "isTitleI": {
      "type": "boolean",
      "description": "True = return only Title I schools, False = return only non-Title I schools (optional) (Pro, Enterprise API levels only)"
    },
    "isTitleISchoolwide": {
      "type": "boolean",
      "description": "True = return only Title I schoolwide schools, False = return only non-Title I Schoolwide schools (optional) (Pro, Enterprise API levels only)"
    },
    "nearLatitude": {
      "type": "number",
      "format": "double",
      "description": "Search for schools within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. 44.982560) (optional) (Pro, Enterprise API levels only. Enterprise API level will flag schools that include lat/long in its attendance boundary.)"
    },
    "nearLongitude": {
      "type": "number",
      "format": "double",
      "description": "Search for schools within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. -124.289185) (optional) (Pro, Enterprise API levels only. Enterprise API level will flag schools that include lat/long in its attendance boundary.)"
    },
    "boundaryAddress": {
      "type": "string",
      "description": "Full U.S. address: flag returned schools that include this address in its attendance boundary. Example: '123 Main St. AnyTown CA 90001' (optional) (Enterprise API level only)"
    },
    "distanceMiles": {
      "type": "integer",
      "format": "int32",
      "description": "Search for schools within (distanceMiles) of (nearLatitude)/(nearLongitude) (Default 5 miles) (optional) (Pro, Enterprise API levels only)"
    },
    "isInBoundaryOnly": {
      "type": "boolean",
      "description": "Return only the schools that include given location (nearLatitdue/nearLongitude) or (nearAddress) in its attendance boundary (Enterprise API level only)"
    },
    "boxLatitudeNW": {
      "type": "number",
      "format": "double",
      "description": "Search for schools within a 'box' defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional)"
    },
    "boxLongitudeNW": {
      "type": "number",
      "format": "double",
      "description": "Search for schools within a 'box' defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional)"
    },
    "boxLatitudeSE": {
      "type": "number",
      "format": "double",
      "description": "Search for schools within a 'box' defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional)"
    },
    "boxLongitudeSE": {
      "type": "number",
      "format": "double",
      "description": "Search for schools within a 'box' defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional)"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Page number to retrieve (optional, default: 1)"
    },
    "perPage": {
      "type": "integer",
      "format": "int32",
      "description": "Number of schools to retrieve on a page (50 max) (optional, default: 10)"
    },
    "sortBy": {
      "type": "string",
      "description": "Sort list. Values are: schoolname, distance, rank. For descending order, preceed with '-' i.e. -schoolname (optional, default: schoolname)"
    },
    "appID": {
      "type": "string",
      "description": "Your API app id"
    },
    "appKey": {
      "type": "string",
      "description": "Your API app key"
    }
  },
  "additionalProperties": false,
  "required": [
    "st",
    "appID",
    "appKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/APISchoolList"
}
```
## Operation: Schools_GetSchool
Retrieve a school record from the SchoolDigger database

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The 12 digit School ID (e.g. 064215006903)"
    },
    "appID": {
      "type": "string",
      "description": "Your API app id"
    },
    "appKey": {
      "type": "string",
      "description": "Your API app key"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "appID",
    "appKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/APISchool"
}
```
