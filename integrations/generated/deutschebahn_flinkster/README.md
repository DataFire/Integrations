# @datafire/deutschebahn_flinkster
This REST-API enables you to query for private transport sharing offers provided by companies and cities in Germany, Netherland and Austria. 
You can search for informations about the rental stations (points or areas) where you can find the rentals by utilizing the /areas/ ressource. 
With the help of the proximity search in the /bookingproposals/ URI you can request the availabilities of the rentalobjects for spontaneous or planed usage in the future. 

Feel free to browse through data by setting the parameter 'providernetwork' to the value: 
 1: Search for car sharing offers provided by the Flinkster platform (http://www.flinkster.de)
2: Finding bike rental offers from Call a Bike (http://www.callabike.de) 

You can find more details in the documentation section (Unfortunately only available in german language).

Have lots of fun and we are lucky to take notice of your products or getting your feedback.

## Operation: listAreas
Search for areas (locations of rental objects) by criteria.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "lat": {
      "type": "number",
      "format": "double"
    },
    "lon": {
      "type": "number",
      "format": "double"
    },
    "radius": {
      "type": "integer",
      "format": "int32"
    },
    "offset": {
      "type": "integer",
      "format": "int32"
    },
    "limit": {
      "type": "integer",
      "format": "int32"
    },
    "expand": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "provider": {
      "type": "string"
    },
    "providernetwork": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AreaJO"
}
```
## Operation: getArea
Search for a specific area by UID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "areaUID": {
      "type": "string",
      "description": "The Area UID "
    },
    "expand": {
      "type": "string",
      "description": "Expand Provider"
    }
  },
  "additionalProperties": false,
  "required": [
    "areaUID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AreaJO"
}
```
## Operation: listBookingProposals
Here you can query all bookable Rental Objects with different Parameters (Time, Location,...)

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "lat": {
      "type": "number",
      "format": "double"
    },
    "lon": {
      "type": "number",
      "format": "double"
    },
    "radius": {
      "type": "integer",
      "format": "int32"
    },
    "offset": {
      "type": "integer",
      "format": "int32"
    },
    "limit": {
      "type": "integer",
      "format": "int32"
    },
    "providernetwork": {
      "type": "string"
    },
    "begin": {
      "type": "string"
    },
    "end": {
      "type": "string"
    },
    "expand": {
      "type": "string"
    },
    "view": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RentalObjectJO"
}
```
## Operation: getIndex
Show Service index.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JsonCollection"
}
```
## Operation: listCategories
Search for categorie.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "providernetworkUID": {
      "type": "string"
    },
    "expand": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "providernetworkUID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CategoryJO"
}
```
## Operation: getCategory
Search for categorie.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "providernetworkUID": {
      "type": "string",
      "description": "Provider Network UID"
    },
    "categoryUID": {
      "type": "string"
    },
    "expand": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "providernetworkUID",
    "categoryUID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CategoryJO"
}
```
## Operation: getPrices
Prices of a rental object by query params. The params depend on the price determination strategy of the provider network.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "providernetworkUID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "providernetworkUID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RentalObjectJO"
}
```
## Operation: getRentalObject
Get information about the Rental Object.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "rentalObjectUID": {
      "type": "string"
    },
    "providernetworkUID": {
      "type": "string"
    },
    "expand": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "rentalObjectUID",
    "providernetworkUID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RentalObjectJO"
}
```
## Operation: getProviderNetwork
Get information about the ProviderNetworkResources.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "uid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "uid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RentalObjectJO"
}
```
## Operation: getProvider
Get information about the ProviderResourcesCtrl.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "uid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "uid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RentalObjectJO"
}
```
