# @datafire/amazonaws_cognito_sync

Client library for Amazon Cognito Sync

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cognito_sync
```

```js
let datafire = require('datafire');
let amazonaws_cognito_sync = require('@datafire/amazonaws_cognito_sync').actions;
let context = new datafire.Context();

amazonaws_cognito_sync.ListIdentityPoolUsage({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Cognito Sync</fullname> <p>Amazon Cognito Sync provides an AWS service and client library that enable cross-device syncing of application-related user data. High-level client libraries are available for both iOS and Android. You can use these libraries to persist data locally so that it's available even if the device is offline. Developer credentials don't need to be stored on the mobile device to access the service. You can use Amazon Cognito to obtain a normalized user ID and credentials. User data is persisted in a dataset that can store up to 1 MB of key-value pairs, and you can have up to 20 datasets per user identity.</p> <p>With Amazon Cognito Sync, the data stored for each identity is accessible only to credentials assigned to that identity. In order to use the Cognito Sync service, you need to make API calls using credentials retrieved with <a href="http://docs.aws.amazon.com/cognitoidentity/latest/APIReference/Welcome.html">Amazon Cognito Identity service</a>.</p> <p>If you want to use Cognito Sync in an Android or iOS application, you will probably want to make API calls via the AWS Mobile SDK. To learn more, see the <a href="http://docs.aws.amazon.com/mobile/sdkforandroid/developerguide/cognito-sync.html">Developer Guide for Android</a> and the <a href="http://docs.aws.amazon.com/mobile/sdkforios/developerguide/cognito-sync.html">Developer Guide for iOS</a>.</p>

## Actions
### ListIdentityPoolUsage



```js
amazonaws_cognito_sync.ListIdentityPoolUsage({}, context)
```

#### Parameters

### DescribeIdentityPoolUsage



```js
amazonaws_cognito_sync.DescribeIdentityPoolUsage({
  "IdentityPoolId": ""
}, context)
```

#### Parameters
* IdentityPoolId (string) **required**

### BulkPublish



```js
amazonaws_cognito_sync.BulkPublish({
  "IdentityPoolId": ""
}, context)
```

#### Parameters
* IdentityPoolId (string) **required**

### SetIdentityPoolConfiguration



```js
amazonaws_cognito_sync.SetIdentityPoolConfiguration({
  "IdentityPoolId": ""
}, context)
```

#### Parameters
* IdentityPoolId (string) **required**

### SetCognitoEvents



```js
amazonaws_cognito_sync.SetCognitoEvents({
  "IdentityPoolId": ""
}, context)
```

#### Parameters
* IdentityPoolId (string) **required**

### GetBulkPublishDetails



```js
amazonaws_cognito_sync.GetBulkPublishDetails({
  "IdentityPoolId": ""
}, context)
```

#### Parameters
* IdentityPoolId (string) **required**

### DescribeIdentityUsage



```js
amazonaws_cognito_sync.DescribeIdentityUsage({
  "IdentityPoolId": "",
  "IdentityId": ""
}, context)
```

#### Parameters
* IdentityPoolId (string) **required**
* IdentityId (string) **required**

### ListDatasets



```js
amazonaws_cognito_sync.ListDatasets({
  "IdentityPoolId": "",
  "IdentityId": ""
}, context)
```

#### Parameters
* IdentityPoolId (string) **required**
* IdentityId (string) **required**

### UpdateRecords



```js
amazonaws_cognito_sync.UpdateRecords({
  "IdentityPoolId": "",
  "IdentityId": "",
  "DatasetName": ""
}, context)
```

#### Parameters
* IdentityPoolId (string) **required**
* IdentityId (string) **required**
* DatasetName (string) **required**

### ListRecords



```js
amazonaws_cognito_sync.ListRecords({
  "IdentityPoolId": "",
  "IdentityId": "",
  "DatasetName": ""
}, context)
```

#### Parameters
* IdentityPoolId (string) **required**
* IdentityId (string) **required**
* DatasetName (string) **required**

### UnsubscribeFromDataset



```js
amazonaws_cognito_sync.UnsubscribeFromDataset({
  "IdentityPoolId": "",
  "IdentityId": "",
  "DatasetName": "",
  "DeviceId": ""
}, context)
```

#### Parameters
* IdentityPoolId (string) **required**
* IdentityId (string) **required**
* DatasetName (string) **required**
* DeviceId (string) **required**

### RegisterDevice



```js
amazonaws_cognito_sync.RegisterDevice({
  "IdentityPoolId": "",
  "IdentityId": ""
}, context)
```

#### Parameters
* IdentityPoolId (string) **required**
* IdentityId (string) **required**

