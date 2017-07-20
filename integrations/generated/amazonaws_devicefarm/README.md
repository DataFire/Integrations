# @datafire/amazonaws_devicefarm

Client library for AWS Device Farm

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_devicefarm
```

```js
let datafire = require('datafire');
let amazonaws_devicefarm = require('@datafire/amazonaws_devicefarm').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_devicefarm: account,
  }
})

amazonaws_devicefarm.CreateDevicePool({}, context).then(data => {
  console.log(data);
})
```

## Description
AWS Device Farm is a service that enables mobile app developers to test Android, iOS, and Fire OS apps on physical phones, tablets, and other devices in the cloud.

## Actions
### CreateDevicePool
Creates a device pool.


```js
amazonaws_devicefarm.CreateDevicePool({
  "body": {
    "projectArn": "",
    "name": "",
    "rules": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the create device pool operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateNetworkProfile
Creates a network profile.


```js
amazonaws_devicefarm.CreateNetworkProfile({
  "body": {
    "projectArn": "",
    "name": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateProject
Creates a new project.


```js
amazonaws_devicefarm.CreateProject({
  "body": {
    "name": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the create project operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateRemoteAccessSession
Specifies and starts a remote access session.


```js
amazonaws_devicefarm.CreateRemoteAccessSession({
  "body": {
    "projectArn": "",
    "deviceArn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Creates and submits a request to start a remote access session.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateUpload
Uploads an app or test scripts.


```js
amazonaws_devicefarm.CreateUpload({
  "body": {
    "projectArn": "",
    "name": "",
    "type": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the create upload operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteDevicePool
Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.


```js
amazonaws_devicefarm.DeleteDevicePool({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the delete device pool operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteNetworkProfile
Deletes a network profile.


```js
amazonaws_devicefarm.DeleteNetworkProfile({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteProject
<p>Deletes an AWS Device Farm project, given the project ARN.</p> <p> <b>Note</b> Deleting this resource does not stop an in-progress run.</p>


```js
amazonaws_devicefarm.DeleteProject({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the delete project operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteRemoteAccessSession
Deletes a completed remote access session and its results.


```js
amazonaws_devicefarm.DeleteRemoteAccessSession({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to delete the specified remote access session.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteRun
<p>Deletes the run, given the run ARN.</p> <p> <b>Note</b> Deleting this resource does not stop an in-progress run.</p>


```js
amazonaws_devicefarm.DeleteRun({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the delete run operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteUpload
Deletes an upload given the upload ARN.


```js
amazonaws_devicefarm.DeleteUpload({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the delete upload operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetAccountSettings
Returns the number of unmetered iOS and/or unmetered Android devices that have been purchased by the account.


```js
amazonaws_devicefarm.GetAccountSettings({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request sent to retrieve the account settings.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetDevice
Gets information about a unique device type.


```js
amazonaws_devicefarm.GetDevice({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the get device request.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetDevicePool
Gets information about a device pool.


```js
amazonaws_devicefarm.GetDevicePool({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the get device pool operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetDevicePoolCompatibility
Gets information about compatibility with a device pool.


```js
amazonaws_devicefarm.GetDevicePoolCompatibility({
  "body": {
    "devicePoolArn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the get device pool compatibility operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetJob
Gets information about a job.


```js
amazonaws_devicefarm.GetJob({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the get job operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetNetworkProfile
Returns information about a network profile.


```js
amazonaws_devicefarm.GetNetworkProfile({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetOfferingStatus
Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. Please contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you believe that you should be able to invoke this operation.


```js
amazonaws_devicefarm.GetOfferingStatus({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to retrieve the offering status for the specified customer or account.
* nextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetProject
Gets information about a project.


```js
amazonaws_devicefarm.GetProject({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the get project operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetRemoteAccessSession
Returns a link to a currently running remote access session.


```js
amazonaws_devicefarm.GetRemoteAccessSession({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to get information about the specified remote access session.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetRun
Gets information about a run.


```js
amazonaws_devicefarm.GetRun({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the get run operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetSuite
Gets information about a suite.


```js
amazonaws_devicefarm.GetSuite({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the get suite operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetTest
Gets information about a test.


```js
amazonaws_devicefarm.GetTest({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the get test operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetUpload
Gets information about an upload.


```js
amazonaws_devicefarm.GetUpload({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the get upload operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### InstallToRemoteAccessSession
Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.


```js
amazonaws_devicefarm.InstallToRemoteAccessSession({
  "body": {
    "remoteAccessSessionArn": "",
    "appArn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to install an Android application (in .apk format) or an iOS application (in .ipa format) as part of a remote access session.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListArtifacts
Gets information about artifacts.


```js
amazonaws_devicefarm.ListArtifacts({
  "body": {
    "arn": "",
    "type": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the list artifacts operation.
* nextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListDevicePools
Gets information about device pools.


```js
amazonaws_devicefarm.ListDevicePools({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the result of a list device pools request.
* nextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListDevices
Gets information about unique device types.


```js
amazonaws_devicefarm.ListDevices({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the result of a list devices request.
* nextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListJobs
Gets information about jobs.


```js
amazonaws_devicefarm.ListJobs({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the list jobs operation.
* nextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListNetworkProfiles
Returns the list of available network profiles.


```js
amazonaws_devicefarm.ListNetworkProfiles({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListOfferingPromotions
Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you believe that you should be able to invoke this operation.


```js
amazonaws_devicefarm.ListOfferingPromotions({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListOfferingTransactions
Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. Please contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you believe that you should be able to invoke this operation.


```js
amazonaws_devicefarm.ListOfferingTransactions({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to list the offering transaction history.
* nextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListOfferings
Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. Please contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you believe that you should be able to invoke this operation.


```js
amazonaws_devicefarm.ListOfferings({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to list all offerings.
* nextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListProjects
Gets information about projects.


```js
amazonaws_devicefarm.ListProjects({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the list projects operation.
* nextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListRemoteAccessSessions
Returns a list of all currently running remote access sessions.


```js
amazonaws_devicefarm.ListRemoteAccessSessions({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to return information about the remote access session.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListRuns
Gets information about runs, given an AWS Device Farm project ARN.


```js
amazonaws_devicefarm.ListRuns({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the list runs operation.
* nextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListSamples
Gets information about samples, given an AWS Device Farm project ARN


```js
amazonaws_devicefarm.ListSamples({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the list samples operation.
* nextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListSuites
Gets information about suites.


```js
amazonaws_devicefarm.ListSuites({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the list suites operation.
* nextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListTests
Gets information about tests.


```js
amazonaws_devicefarm.ListTests({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the list tests operation.
* nextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListUniqueProblems
Gets information about unique problems.


```js
amazonaws_devicefarm.ListUniqueProblems({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the list unique problems operation.
* nextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListUploads
Gets information about uploads, given an AWS Device Farm project ARN.


```js
amazonaws_devicefarm.ListUploads({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the list uploads operation.
* nextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### PurchaseOffering
Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. Please contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you believe that you should be able to invoke this operation.


```js
amazonaws_devicefarm.PurchaseOffering({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request for a purchase offering.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### RenewOffering
Explicitly sets the quantity of devices to renew for an offering, starting from the <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. Please contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you believe that you should be able to invoke this operation.


```js
amazonaws_devicefarm.RenewOffering({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A request representing an offering renewal.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ScheduleRun
Schedules a run.


```js
amazonaws_devicefarm.ScheduleRun({
  "body": {
    "projectArn": "",
    "devicePoolArn": "",
    "test": {
      "type": ""
    }
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the schedule run operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### StopRemoteAccessSession
Ends a specified remote access session.


```js
amazonaws_devicefarm.StopRemoteAccessSession({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to stop the remote access session.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### StopRun
Initiates a stop request for the current test run. AWS Device Farm will immediately stop the run on devices where tests have not started executing, and you will not be billed for these devices. On devices where tests have started executing, Setup Suite and Teardown Suite tests will run to completion before stopping execution on those devices. You will be billed for Setup, Teardown, and any tests that were in progress or already completed.


```js
amazonaws_devicefarm.StopRun({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to stop a specific run.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateDevicePool
Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).


```js
amazonaws_devicefarm.UpdateDevicePool({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the update device pool operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateNetworkProfile
Updates the network profile with specific settings.


```js
amazonaws_devicefarm.UpdateNetworkProfile({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateProject
Modifies the specified project name, given the project ARN and a new name.


```js
amazonaws_devicefarm.UpdateProject({
  "body": {
    "arn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents a request to the update project operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

