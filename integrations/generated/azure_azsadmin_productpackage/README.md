# @datafire/azure_azsadmin_productpackage

Client library for DeploymentAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_productpackage
```
```js
let azure_azsadmin_productpackage = require('@datafire/azure_azsadmin_productpackage').create({
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

Deployment Admin Client.

## Actions

### ProductPackages_List
Returns an array of product packages.


```js
azure_azsadmin_productpackage.ProductPackages_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ProductPackagesList](#productpackageslist)

### ProductPackages_Delete
Deletes a product package.


```js
azure_azsadmin_productpackage.ProductPackages_Delete({
  "subscriptionId": "",
  "productId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * productId **required** `string`: The product identifier.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ProductPackages_Get
Retrieves the specific product package details.


```js
azure_azsadmin_productpackage.ProductPackages_Get({
  "subscriptionId": "",
  "productId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * productId **required** `string`: The product identifier.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ProductPackage](#productpackage)

### ProductPackages_Create
Creates a new product package.


```js
azure_azsadmin_productpackage.ProductPackages_Create({
  "subscriptionId": "",
  "productId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * productId **required** `string`: The product identifier.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ProductPackage](#productpackage)



## Definitions

### FileContainerId
* FileContainerId `string`: File container resource identifier containing product manifest.

### ProductLink
* ProductLink `object`: Link to a product.
  * displayName `string`: Displayed name of product.
  * uri `string`: URI to product.

### ProductLinks
* ProductLinks `array`: List of product links.
  * items [ProductLink](#productlink)

### ProductPackage
* ProductPackage `object`: Properties for a product package.
  * properties [ProductPackageProperties](#productpackageproperties)
  * id `string`: ID of the resource.
  * location `string`: Location of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of Resource.

### ProductPackageProperties
* ProductPackageProperties `object`: Properties for Product package.
  * fileContainerId [FileContainerId](#filecontainerid)
  * isDeployable `boolean`: Value indicating whether the package is applicable for deployment.
  * isUpdatable `boolean`: Value indicating whether the package is applicable for update.
  * productDeploymentId `string`: The identifier of product deployment; null if this version is not installed.
  * provisioningState `string`: Provisioning state of the resource.

### ProductPackagesList
* ProductPackagesList `object`: List of product packages.
  * nextLink `string`: Continuation Token.
  * value `array`: List of product packages.
    * items [ProductPackage](#productpackage)

### ProductProperties
* ProductProperties `object`: Additional properties of the product
  * version `string`: The version of the product


