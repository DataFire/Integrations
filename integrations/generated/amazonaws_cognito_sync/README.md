# @datafire/amazonaws_cognito_sync

Client library for Amazon Cognito Sync

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cognito_sync
```

```js
let datafire = require('datafire');
let amazonaws_cognito_sync = require('@datafire/amazonaws_cognito_sync').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_cognito_sync: account,
  }
})

amazonaws_cognito_sync.ListIdentityPoolUsage({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Cognito Sync</fullname> <p>Amazon Cognito Sync provides an AWS service and client library that enable cross-device syncing of application-related user data. High-level client libraries are available for both iOS and Android. You can use these libraries to persist data locally so that it's available even if the device is offline. Developer credentials don't need to be stored on the mobile device to access the service. You can use Amazon Cognito to obtain a normalized user ID and credentials. User data is persisted in a dataset that can store up to 1 MB of key-value pairs, and you can have up to 20 datasets per user identity.</p> <p>With Amazon Cognito Sync, the data stored for each identity is accessible only to credentials assigned to that identity. In order to use the Cognito Sync service, you need to make API calls using credentials retrieved with <a href="http://docs.aws.amazon.com/cognitoidentity/latest/APIReference/Welcome.html">Amazon Cognito Identity service</a>.</p> <p>If you want to use Cognito Sync in an Android or iOS application, you will probably want to make API calls via the AWS Mobile SDK. To learn more, see the <a href="http://docs.aws.amazon.com/mobile/sdkforandroid/developerguide/cognito-sync.html">Developer Guide for Android</a> and the <a href="http://docs.aws.amazon.com/mobile/sdkforios/developerguide/cognito-sync.html">Developer Guide for iOS</a>.</p>

## Actions
### ListIdentityPoolUsage
<p>Gets a list of identity pools registered with Cognito.</p> <p>ListIdentityPoolUsage can only be called with developer credentials. You cannot make this API call with the temporary user credentials provided by Cognito Identity.</p>


```js
amazonaws_cognito_sync.ListIdentityPoolUsage({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A request for usage information on an identity pool.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeIdentityPoolUsage
<p>Gets usage details (for example, data storage) about a particular identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>


```js
amazonaws_cognito_sync.DescribeIdentityPoolUsage({
  "body": {},
  "IdentityPoolId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A request for usage information about the identity pool.
* IdentityPoolId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### BulkPublish
<p>Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>


```js
amazonaws_cognito_sync.BulkPublish({
  "body": {},
  "IdentityPoolId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the BulkPublish operation.
* IdentityPoolId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### SetIdentityPoolConfiguration
<p>Sets the necessary configuration for push sync.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>


```js
amazonaws_cognito_sync.SetIdentityPoolConfiguration({
  "body": {},
  "IdentityPoolId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the SetIdentityPoolConfiguration operation.
* IdentityPoolId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### SetCognitoEvents
<p>Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>


```js
amazonaws_cognito_sync.SetCognitoEvents({
  "body": {
    "Events": []
  },
  "IdentityPoolId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - <p>A request to configure Cognito Events"</p>"
* IdentityPoolId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetBulkPublishDetails
<p>Get the status of the last BulkPublish operation for an identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>


```js
amazonaws_cognito_sync.GetBulkPublishDetails({
  "body": {},
  "IdentityPoolId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the GetBulkPublishDetails operation.
* IdentityPoolId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeIdentityUsage
<p>Gets usage information for an identity, including number of datasets and data usage.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>


```js
amazonaws_cognito_sync.DescribeIdentityUsage({
  "body": {},
  "IdentityPoolId": "",
  "IdentityId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A request for information about the usage of an identity pool.
* IdentityPoolId (string) **required**
* IdentityId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListDatasets
<p>Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListDatasets can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use the Cognito Identity credentials to make this API call.</p>


```js
amazonaws_cognito_sync.ListDatasets({
  "body": {},
  "IdentityPoolId": "",
  "IdentityId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request for a list of datasets for an identity.
* IdentityPoolId (string) **required**
* IdentityId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateRecords
<p>Posts updates to records and adds and deletes records for a dataset and user.</p> <p>The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count.</p> <p>For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>


```js
amazonaws_cognito_sync.UpdateRecords({
  "body": {
    "SyncSessionToken": ""
  },
  "IdentityPoolId": "",
  "IdentityId": "",
  "DatasetName": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A request to post updates to records or add and delete records for a dataset and user.
* IdentityPoolId (string) **required**
* IdentityId (string) **required**
* DatasetName (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListRecords
<p>Gets paginated records, optionally changed after a particular sync count for a dataset and identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListRecords can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>


```js
amazonaws_cognito_sync.ListRecords({
  "body": {},
  "IdentityPoolId": "",
  "IdentityId": "",
  "DatasetName": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A request for a list of records.
* IdentityPoolId (string) **required**
* IdentityId (string) **required**
* DatasetName (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UnsubscribeFromDataset
<p>Unsubscribes from receiving notifications when a dataset is modified by another device.</p> <p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>


```js
amazonaws_cognito_sync.UnsubscribeFromDataset({
  "body": {},
  "IdentityPoolId": "",
  "IdentityId": "",
  "DatasetName": "",
  "DeviceId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A request to UnsubscribeFromDataset.
* IdentityPoolId (string) **required**
* IdentityId (string) **required**
* DatasetName (string) **required**
* DeviceId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### RegisterDevice
<p>Registers a device to receive push sync notifications.</p> <p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>


```js
amazonaws_cognito_sync.RegisterDevice({
  "body": {
    "Platform": "",
    "Token": ""
  },
  "IdentityPoolId": "",
  "IdentityId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A request to RegisterDevice.
* IdentityPoolId (string) **required**
* IdentityId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

