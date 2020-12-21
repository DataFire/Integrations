# @datafire/azure_azsadmin_acquisitions

Client library for StorageManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_acquisitions
```
```js
let azure_azsadmin_acquisitions = require('@datafire/azure_azsadmin_acquisitions').create({
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

The Admin Storage Management Client.

## Actions

### Acquisitions_List
Returns a list of BLOB acquisitions.


```js
azure_azsadmin_acquisitions.Acquisitions_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * location **required** `string`: Resource location.
  * api-version **required** `string`: REST Api Version.

#### Output
* output [AcquisitionList](#acquisitionlist)



## Definitions

### Acquisition
* Acquisition `object`: The acquisition of the page BLOB.
  * acquisitionid `string`: The ID of page BLOB acquisition.
  * blob `string`: The name of the page BLOB.
  * container `string`: The container associated with the page BLOB.
  * filePath `string`: The file path of the page BLOB file on storage cluster.
  * filePathUnc `string`: The file path unc of the page BLOB file on storage cluster.
  * maximumblobsize `integer`: The maximum size of the page BLOB.
  * status [AcquisitionStatus](#acquisitionstatus)
  * storageaccount `string`: The storage account that holds the page BLOB.
  * susbcriptionid `string`: ID of the subscription associated with the page BLOB.

### AcquisitionList
* AcquisitionList `object`: The list of page BLOB acquisitions.
  * value `array`: List of acquisitions.
    * items [Acquisition](#acquisition)

### AcquisitionStatus
* AcquisitionStatus `string` (values: Unknown, NotAcquired, Pending, Success, Failed): The status of page BLOB acquisition.


