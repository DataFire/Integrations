# @datafire/azure_azsadmin_platformimages

Client library for Compute Admin Client

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_platformimages
```
```js
let azure_azsadmin_platformimages = require('@datafire/azure_azsadmin_platformimages').create({
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



## Actions

### PlatformImages_List
Returns a list of all platform images.


```js
azure_azsadmin_platformimages.PlatformImages_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * api-version **required** `string`: Client API Version.

#### Output
* output [PlatformImageList](#platformimagelist)

### PlatformImages_Delete
Delete a platform image


```js
azure_azsadmin_platformimages.PlatformImages_Delete({
  "subscriptionId": "",
  "location": "",
  "publisher": "",
  "offer": "",
  "sku": "",
  "version": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * publisher **required** `string`: Name of the publisher.
  * offer **required** `string`: Name of the offer.
  * sku **required** `string`: Name of the SKU.
  * version **required** `string`: The version of the resource.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### PlatformImages_Get
Returns the specific platform image matching publisher, offer, skus and version.


```js
azure_azsadmin_platformimages.PlatformImages_Get({
  "subscriptionId": "",
  "location": "",
  "publisher": "",
  "offer": "",
  "sku": "",
  "version": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * publisher **required** `string`: Name of the publisher.
  * offer **required** `string`: Name of the offer.
  * sku **required** `string`: Name of the SKU.
  * version **required** `string`: The version of the resource.
  * api-version **required** `string`: Client API Version.

#### Output
* output [PlatformImage](#platformimage)

### PlatformImages_Create
Creates a new platform image with given publisher, offer, skus and version.


```js
azure_azsadmin_platformimages.PlatformImages_Create({
  "subscriptionId": "",
  "location": "",
  "publisher": "",
  "offer": "",
  "sku": "",
  "version": "",
  "api-version": "",
  "newImage": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * publisher **required** `string`: Name of the publisher.
  * offer **required** `string`: Name of the offer.
  * sku **required** `string`: Name of the SKU.
  * version **required** `string`: The version of the resource.
  * api-version **required** `string`: Client API Version.
  * newImage **required** [PlatformImageParameters](#platformimageparameters)

#### Output
* output [PlatformImage](#platformimage)



## Definitions

### DataDisk
* DataDisk `object`: Information about datadisk.
  * lun `integer`: Logical unit number.
  * uri `string`: Location of the disk template.

### ImageDetails
* ImageDetails `object`: Information about the disk image.
  * billingPartNumber `string`: The part number is used to bill for software costs.

### OsDisk
* OsDisk `object`: Operating system disk.
  * osType [OsType](#ostype)
  * uri `string`: Location of the disk.

### OsType
* OsType `string` (values: Unknown, Windows, Linux): Operating system type.

### PlatformImage
* PlatformImage `object`: Platform image represents a virtual machine.
  * properties [PlatformImageProperties](#platformimageproperties)
  * id `string`: ID of the resource.
  * location `string`: Location of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of Resource.

### PlatformImageList
* PlatformImageList `array`: List of platform images.
  * items [PlatformImage](#platformimage)

### PlatformImageParameters
* PlatformImageParameters `object`: Parameters used to create a new platform image.
  * properties [PlatformImageProperties](#platformimageproperties)

### PlatformImageProperties
* PlatformImageProperties `object`: Properties of platform image.
  * dataDisks `array`: Data disks used by the platform image.
    * items [DataDisk](#datadisk)
  * details [ImageDetails](#imagedetails)
  * osDisk [OsDisk](#osdisk)
  * provisioningState `string` (values: Creating, Failed, Succeeded, Canceled): The provisioning state of the resource.


