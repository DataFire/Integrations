# @datafire/azure_security_locations

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_locations
```
```js
let azure_security_locations = require('@datafire/azure_security_locations').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

API spec for Microsoft.Security (Azure Security Center) resource provider

## Actions

### Locations_List
The location of the responsible ASC of the specific subscription (home region). For each subscription there is only one responsible location. The location in the response should be used to read or write other resources in ASC according to their ID.


```js
azure_security_locations.Locations_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID

#### Output
* output `object`: List of locations where ASC saves your data
  * nextLink `string`: The URI to fetch the next page.
  * value `array`
    * items `object`: The ASC location of the subscription is in the "name" field
      * properties `object`: An empty set of properties
      * id `string`: Resource Id
      * name `string`: Resource name
      * type `string`: Resource type

### Locations_Get
Details of a specific location


```js
azure_security_locations.Locations_Get({
  "api-version": "",
  "subscriptionId": "",
  "ascLocation": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations

#### Output
* output `object`: The ASC location of the subscription is in the "name" field
  * properties `object`: An empty set of properties
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type



## Definitions

*This integration has no definitions*
