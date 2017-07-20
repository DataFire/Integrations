# @datafire/amazonaws_importexport

Client library for AWS Import/Export

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_importexport
```

```js
let datafire = require('datafire');
let amazonaws_importexport = require('@datafire/amazonaws_importexport').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_importexport: account,
  }
})

amazonaws_importexport.CancelJob({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Import/Export Service</fullname> AWS Import/Export accelerates transferring large amounts of data between the AWS cloud and portable storage devices that you mail to us. AWS Import/Export transfers data directly onto and off of your storage devices using Amazon's high-speed internal network and bypassing the Internet. For large data sets, AWS Import/Export is often faster than Internet transfer and more cost effective than upgrading your connectivity.

## Actions
### CancelJob
This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.


```js
amazonaws_importexport.CancelJob({
  "body": {
    "JobId": ""
  },
  "AWSAccessKeyId": "",
  "Action": "",
  "SignatureMethod": "",
  "SignatureVersion": "",
  "Timestamp": "",
  "Version": "",
  "Signature": ""
}, context)
```

#### Parameters
* body (object) **required** - Input structure for the CancelJob operation.
* AWSAccessKeyId (string) **required**
* Action (string) **required**
* SignatureMethod (string) **required**
* SignatureVersion (string) **required**
* Timestamp (string) **required**
* Version (string) **required**
* Signature (string) **required**

### CreateJob
This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.


```js
amazonaws_importexport.CreateJob({
  "body": {
    "JobType": "",
    "Manifest": "",
    "ValidateOnly": true
  },
  "AWSAccessKeyId": "",
  "Action": "",
  "SignatureMethod": "",
  "SignatureVersion": "",
  "Timestamp": "",
  "Version": "",
  "Signature": ""
}, context)
```

#### Parameters
* body (object) **required** - Input structure for the CreateJob operation.
* AWSAccessKeyId (string) **required**
* Action (string) **required**
* SignatureMethod (string) **required**
* SignatureVersion (string) **required**
* Timestamp (string) **required**
* Version (string) **required**
* Signature (string) **required**

### GetShippingLabel
This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.


```js
amazonaws_importexport.GetShippingLabel({
  "body": {
    "jobIds": []
  },
  "AWSAccessKeyId": "",
  "Action": "",
  "SignatureMethod": "",
  "SignatureVersion": "",
  "Timestamp": "",
  "Version": "",
  "Signature": ""
}, context)
```

#### Parameters
* body (object) **required**
* AWSAccessKeyId (string) **required**
* Action (string) **required**
* SignatureMethod (string) **required**
* SignatureVersion (string) **required**
* Timestamp (string) **required**
* Version (string) **required**
* Signature (string) **required**

### GetStatus
This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.


```js
amazonaws_importexport.GetStatus({
  "body": {
    "JobId": ""
  },
  "AWSAccessKeyId": "",
  "Action": "",
  "SignatureMethod": "",
  "SignatureVersion": "",
  "Timestamp": "",
  "Version": "",
  "Signature": ""
}, context)
```

#### Parameters
* body (object) **required** - Input structure for the GetStatus operation.
* AWSAccessKeyId (string) **required**
* Action (string) **required**
* SignatureMethod (string) **required**
* SignatureVersion (string) **required**
* Timestamp (string) **required**
* Version (string) **required**
* Signature (string) **required**

### ListJobs
This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.


```js
amazonaws_importexport.ListJobs({
  "body": {},
  "AWSAccessKeyId": "",
  "Action": "",
  "SignatureMethod": "",
  "SignatureVersion": "",
  "Timestamp": "",
  "Version": "",
  "Signature": ""
}, context)
```

#### Parameters
* body (object) **required** - Input structure for the ListJobs operation.
* MaxJobs (string) - Pagination limit
* Marker (string) - Pagination token
* AWSAccessKeyId (string) **required**
* Action (string) **required**
* SignatureMethod (string) **required**
* SignatureVersion (string) **required**
* Timestamp (string) **required**
* Version (string) **required**
* Signature (string) **required**

### UpdateJob
You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.


```js
amazonaws_importexport.UpdateJob({
  "body": {
    "JobId": "",
    "Manifest": "",
    "JobType": "",
    "ValidateOnly": true
  },
  "AWSAccessKeyId": "",
  "Action": "",
  "SignatureMethod": "",
  "SignatureVersion": "",
  "Timestamp": "",
  "Version": "",
  "Signature": ""
}, context)
```

#### Parameters
* body (object) **required** - Input structure for the UpateJob operation.
* AWSAccessKeyId (string) **required**
* Action (string) **required**
* SignatureMethod (string) **required**
* SignatureVersion (string) **required**
* Timestamp (string) **required**
* Version (string) **required**
* Signature (string) **required**

