# @datafire/deutschebahn_flinkster

Client library for Flinkster_API_NG

## Installation and Usage
```bash
npm install --save datafire @datafire/deutschebahn_flinkster
```

```js
let datafire = require('datafire');
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

#### Parameters
* lat (number)
* lon (number)
* radius (integer)
* offset (integer)
* limit (integer)
* expand (string)
* type (string)
* provider (string)
* providernetwork (string)

### getArea
Search for a specific area by UID.


```js
deutschebahn_flinkster.getArea({
  "areaUID": ""
}, context)
```

#### Parameters
* areaUID (string) **required** - The Area UID 
* expand (string) - Expand Provider

### listBookingProposals
Here you can query all bookable Rental Objects with different Parameters (Time, Location,...)


```js
deutschebahn_flinkster.listBookingProposals({}, context)
```

#### Parameters
* lat (number)
* lon (number)
* radius (integer)
* offset (integer)
* limit (integer)
* providernetwork (string)
* begin (string)
* end (string)
* expand (string)
* view (string)

### getIndex
Show Service index.


```js
deutschebahn_flinkster.getIndex(null, context)
```

#### Parameters
*This action has no parameters*

### listCategories
Search for categorie.


```js
deutschebahn_flinkster.listCategories({
  "providernetworkUID": ""
}, context)
```

#### Parameters
* providernetworkUID (string) **required**
* expand (string)

### getCategory
Search for categorie.


```js
deutschebahn_flinkster.getCategory({
  "providernetworkUID": "",
  "categoryUID": ""
}, context)
```

#### Parameters
* providernetworkUID (string) **required** - Provider Network UID
* categoryUID (string) **required**
* expand (string)

### getPrices
Prices of a rental object by query params. The params depend on the price determination strategy of the provider network.



```js
deutschebahn_flinkster.getPrices({
  "providernetworkUID": ""
}, context)
```

#### Parameters
* providernetworkUID (string) **required**

### getRentalObject
Get information about the Rental Object.



```js
deutschebahn_flinkster.getRentalObject({
  "rentalObjectUID": "",
  "providernetworkUID": ""
}, context)
```

#### Parameters
* rentalObjectUID (string) **required**
* providernetworkUID (string) **required**
* expand (string)

### getProviderNetwork
Get information about the ProviderNetworkResources.



```js
deutschebahn_flinkster.getProviderNetwork({
  "uid": ""
}, context)
```

#### Parameters
* uid (string) **required**

### getProvider
Get information about the ProviderResourcesCtrl.



```js
deutschebahn_flinkster.getProvider({
  "uid": ""
}, context)
```

#### Parameters
* uid (string) **required**

