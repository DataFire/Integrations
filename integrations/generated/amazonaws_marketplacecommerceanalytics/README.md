# @datafire/amazonaws_marketplacecommerceanalytics

Client library for AWS Marketplace Commerce Analytics

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_marketplacecommerceanalytics
```

```js
let datafire = require('datafire');
let amazonaws_marketplacecommerceanalytics = require('@datafire/amazonaws_marketplacecommerceanalytics').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_marketplacecommerceanalytics.GenerateDataSet({}).then(data => {
  console.log(data);
})
```

## Description
Provides AWS Marketplace business intelligence data on-demand.

## Actions
### GenerateDataSet



```js
amazonaws_marketplacecommerceanalytics.GenerateDataSet({
  "dataSetType": "",
  "dataSetPublicationDate": "",
  "roleNameArn": "",
  "destinationS3BucketName": "",
  "snsTopicArn": ""
}, context)
```

#### Parameters
* customerDefinedValues (array)
* dataSetPublicationDate (string) **required**
* dataSetType (string) **required**
* destinationS3BucketName (string) **required**
* destinationS3Prefix (string)
* roleNameArn (string) **required**
* snsTopicArn (string) **required**

### StartSupportDataExport



```js
amazonaws_marketplacecommerceanalytics.StartSupportDataExport({
  "dataSetType": "",
  "fromDate": "",
  "roleNameArn": "",
  "destinationS3BucketName": "",
  "snsTopicArn": ""
}, context)
```

#### Parameters
* customerDefinedValues (array)
* dataSetType (string) **required**
* destinationS3BucketName (string) **required**
* destinationS3Prefix (string)
* fromDate (string) **required**
* roleNameArn (string) **required**
* snsTopicArn (string) **required**

