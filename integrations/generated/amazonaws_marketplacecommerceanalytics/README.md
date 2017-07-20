# @datafire/amazonaws_marketplacecommerceanalytics

Client library for AWS Marketplace Commerce Analytics

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_marketplacecommerceanalytics
```

```js
let datafire = require('datafire');
let amazonaws_marketplacecommerceanalytics = require('@datafire/amazonaws_marketplacecommerceanalytics').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_marketplacecommerceanalytics: account,
  }
})

amazonaws_marketplacecommerceanalytics.GenerateDataSet({}, context).then(data => {
  console.log(data);
})
```

## Description
Provides AWS Marketplace business intelligence data on-demand.

## Actions
### GenerateDataSet
Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.


```js
amazonaws_marketplacecommerceanalytics.GenerateDataSet({
  "body": {
    "dataSetType": "",
    "dataSetPublicationDate": "",
    "roleNameArn": "",
    "destinationS3BucketName": "",
    "snsTopicArn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Container for the parameters to the GenerateDataSet operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### StartSupportDataExport
Given a data set type and a from date, asynchronously publishes the requested customer support data to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.


```js
amazonaws_marketplacecommerceanalytics.StartSupportDataExport({
  "body": {
    "dataSetType": "",
    "fromDate": "",
    "roleNameArn": "",
    "destinationS3BucketName": "",
    "snsTopicArn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Container for the parameters to the StartSupportDataExport operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

