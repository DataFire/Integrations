# @datafire/deutschebahn_flinkster

Client library for Flinkster_API_NG

## Installation and Usage
```bash
npm install --save @datafire/deutschebahn_flinkster
```
```js
let deutschebahn_flinkster = require('@datafire/deutschebahn_flinkster').create();

deutschebahn_flinkster.listBookingProposals({}).then(data => {
  console.log(data);
})
```

## Description

This REST-API enables you to query for private transport sharing offers provided by companies and cities in Germany, Netherland and Austria. 
You can search for informations about the rental stations (points or areas) where you can find the rentals by utilizing the /areas/ ressource. 
With the help of the proximity search in the /bookingproposals/ URI you can request the availabilities of the rentalobjects for spontaneous or planed usage in the future. 

Feel free to browse through data by setting the parameter 'providernetwork' to the value: 
 1: Search for car sharing offers provided by the Flinkster platform (http://www.flinkster.de)
2: Finding bike rental offers from Call a Bike (http://www.callabike.de) 

You can find more details in the documentation section (Unfortunately only available in german language).

Have lots of fun and we are lucky to take notice of your products or getting your feedback.

## Actions

### listAreas
Search for areas (locations of rental objects) by criteria.


```js
deutschebahn_flinkster.listAreas({}, context)
```

#### Input
* input `object`
  * lat `number`
  * lon `number`
  * radius `integer`
  * offset `integer`
  * limit `integer`
  * expand `string`
  * type `string`
  * provider `string`
  * providernetwork `string`

#### Output
* output [AreaJO](#areajo)

### getArea
Search for a specific area by UID.


```js
deutschebahn_flinkster.getArea({
  "areaUID": ""
}, context)
```

#### Input
* input `object`
  * areaUID **required** `string`: The Area UID 
  * expand `string`: Expand Provider

#### Output
* output [AreaJO](#areajo)

### listBookingProposals
Here you can query all bookable Rental Objects with different Parameters (Time, Location,...)


```js
deutschebahn_flinkster.listBookingProposals({}, context)
```

#### Input
* input `object`
  * lat `number`
  * lon `number`
  * radius `integer`
  * offset `integer`
  * limit `integer`
  * providernetwork `string`
  * begin `string`
  * end `string`
  * expand `string`
  * view `string`

#### Output
* output [RentalObjectJO](#rentalobjectjo)

### getIndex
Show Service index.


```js
deutschebahn_flinkster.getIndex(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [JsonCollection](#jsoncollection)

### listCategories
Search for categorie.


```js
deutschebahn_flinkster.listCategories({
  "providernetworkUID": ""
}, context)
```

#### Input
* input `object`
  * providernetworkUID **required** `string`
  * expand `string`

#### Output
* output [CategoryJO](#categoryjo)

### getCategory
Search for categorie.


```js
deutschebahn_flinkster.getCategory({
  "providernetworkUID": "",
  "categoryUID": ""
}, context)
```

#### Input
* input `object`
  * providernetworkUID **required** `string`: Provider Network UID
  * categoryUID **required** `string`
  * expand `string`

#### Output
* output [CategoryJO](#categoryjo)

### getPrices
Prices of a rental object by query params. The params depend on the price determination strategy of the provider network.



```js
deutschebahn_flinkster.getPrices({
  "providernetworkUID": ""
}, context)
```

#### Input
* input `object`
  * providernetworkUID **required** `string`

#### Output
* output [RentalObjectJO](#rentalobjectjo)

### getRentalObject
Get information about the Rental Object.



```js
deutschebahn_flinkster.getRentalObject({
  "rentalObjectUID": "",
  "providernetworkUID": ""
}, context)
```

#### Input
* input `object`
  * rentalObjectUID **required** `string`
  * providernetworkUID **required** `string`
  * expand `string`

#### Output
* output [RentalObjectJO](#rentalobjectjo)

### getProviderNetwork
Get information about the ProviderNetworkResources.



```js
deutschebahn_flinkster.getProviderNetwork({
  "uid": ""
}, context)
```

#### Input
* input `object`
  * uid **required** `string`

#### Output
* output [RentalObjectJO](#rentalobjectjo)

### getProvider
Get information about the ProviderResourcesCtrl.



```js
deutschebahn_flinkster.getProvider({
  "uid": ""
}, context)
```

#### Input
* input `object`
  * uid **required** `string`

#### Output
* output [RentalObjectJO](#rentalobjectjo)



## Definitions

### AddressJO
* AddressJO `object`
  * city `string`
  * district `string`
  * isoCountryCode `string`
  * number `string`
  * street `string`
  * zip `string`

### AreaJO
* AreaJO `object`
  * _links `array`
    * items [LinkJO](#linkjo)
  * address [AddressJO](#addressjo)
  * attributes `object`
  * description `string`
  * expand `string`
  * geometry [GeometryJO](#geometryjo)
  * href `string`
  * name `string`
  * provider [ProviderJO](#providerjo)
  * providerAreaId `string`
  * providerNetworkIds `array`
    * items `integer`
  * type `string` (values: STATION, OPERATIONAREA, PARKINGAREA, GASSTATION, UNKNOWN)
  * uid `string`

### BookingProposalJO
* BookingProposalJO `object`
  * _links `array`
    * items [LinkJO](#linkjo)
  * area [AreaJO](#areajo)
  * attributes `object`
  * description `string`
  * distance `number`
  * expand `string`
  * href `string`
  * name `string`
  * position [GeoJsonObject](#geojsonobject)
  * price [JsonCollectionPriceJO](#jsoncollectionpricejo)
  * rentalObject [RentalObjectJO](#rentalobjectjo)
  * uid `string`

### CategoryJO
* CategoryJO `object`
  * _links `array`
    * items [LinkJO](#linkjo)
  * attributes `object`
  * description `string`
  * expand `string`
  * href `string`
  * name `string`
  * price `array`
    * items [PriceJO](#pricejo)
  * uid `string`

### Crs
* Crs `object`
  * properties `object`
  * type `string` (values: name, link)

### ErrorJO
* ErrorJO `object`
  * attributes `object`
  * code `integer`
  * level `string` (values: INFO, WARNING, ERROR)
  * message `string`
  * name `string`

### Feature
* Feature `object`
  * bbox `array`
    * items `number`
  * crs [Crs](#crs)
  * geometry [GeoJsonObject](#geojsonobject)
  * id `string`
  * properties `object`

### FeatureCollection
* FeatureCollection
  * bbox `array`
    * items `number`
  * crs [Crs](#crs)
  * features `array`
    * items [Feature](#feature)

### GeoJsonObject
* GeoJsonObject `object`
  * bbox `array`
    * items `number`
  * crs [Crs](#crs)

### GeometryJO
* GeometryJO `object`
  * centroid [Point](#point)
  * position [GeoJsonObject](#geojsonobject)

### JsonCollection
* JsonCollection `object`
  * _links `array`
    * items [LinkJO](#linkjo)
  * href `string`
  * items `array`
    * items [JsonObject](#jsonobject)
  * limit `integer`
  * offset `integer`
  * size `integer`

### JsonCollectionPriceJO
* JsonCollectionPriceJO `object`
  * _links `array`
    * items [LinkJO](#linkjo)
  * href `string`
  * items `array`
    * items [PriceJO](#pricejo)
  * limit `integer`
  * offset `integer`
  * size `integer`

### JsonObject
* JsonObject `object`
  * _links `array`
    * items [LinkJO](#linkjo)
  * attributes `object`
  * description `string`
  * expand `string`
  * href `string`
  * name `string`
  * uid `string`

### LineString
* LineString
  * bbox `array`
    * items `number`
  * crs [Crs](#crs)

### LinkJO
* LinkJO `object`
  * href `string`
  * rel `string`
  * verb `string`

### LngLatAlt
* LngLatAlt `object`
  * altitude `number`
  * latitude `number`
  * longitude `number`

### MultiLineString
* MultiLineString
  * bbox `array`
    * items `number`
  * crs [Crs](#crs)
  * coordinates `array`
    * items `array`
      * items [LngLatAlt](#lnglatalt)

### MultiPoint
* MultiPoint
  * bbox `array`
    * items `number`
  * crs [Crs](#crs)
  * coordinates `array`
    * items [LngLatAlt](#lnglatalt)

### MultiPolygon
* MultiPolygon
  * bbox `array`
    * items `number`
  * crs [Crs](#crs)
  * coordinates `array`
    * items `array`
      * items `array`
        * items [LngLatAlt](#lnglatalt)

### Point
* Point `object`
  * bbox `array`
    * items `number`
  * coordinates [LngLatAlt](#lnglatalt)
  * crs [Crs](#crs)

### Polygon
* Polygon
  * bbox `array`
    * items `number`
  * crs [Crs](#crs)
  * coordinates `array`
    * items `array`
      * items [LngLatAlt](#lnglatalt)

### PriceJO
* PriceJO `object`
  * _links `array`
    * items [LinkJO](#linkjo)
  * attributes `object`
  * currency `string`
  * description `string`
  * expand `string`
  * grossamount `number`
  * href `string`
  * interval `integer`
  * name `string`
  * preferredprice `boolean`
  * taxrate `number`
  * type `string` (values: TIME, DISTANCE)
  * uid `string`

### ProviderJO
* ProviderJO `object`
  * _links `array`
    * items [LinkJO](#linkjo)
  * attributes `object`
  * description `string`
  * expand `string`
  * href `string`
  * name `string`
  * uid `string`

### RentalObjectJO
* RentalObjectJO `object`
  * _links `array`
    * items [LinkJO](#linkjo)
  * attributes `object`
  * category [CategoryJO](#categoryjo)
  * description `string`
  * expand `string`
  * href `string`
  * name `string`
  * provider [ProviderJO](#providerjo)
  * providerNetworkIds `array`
    * items `integer`
  * providerRentalObjectId `string`
  * rentalModel `string` (values: FREEFLOATING, FREEFLOATINGWITHSTATION, STATIONBASED, PARKINGAREA, UNKNOWN)
  * type `string` (values: VEHICLE, VEHICLEPOOL, BIKE, PEDELEC, UNKNOWN)
  * uid `string`


