# @datafire/amazonaws_importexport

Client library for AWS Import/Export

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_importexport
```

```js
let datafire = require('datafire');
let amazonaws_importexport = require('@datafire/amazonaws_importexport').create();

amazonaws_importexport.CancelJob({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Import/Export Service</fullname> AWS Import/Export accelerates transferring large amounts of data between the AWS cloud and portable storage devices that you mail to us. AWS Import/Export transfers data directly onto and off of your storage devices using Amazon's high-speed internal network and bypassing the Internet. For large data sets, AWS Import/Export is often faster than Internet transfer and more cost effective than upgrading your connectivity.

## Actions
### CancelJob



```js
amazonaws_importexport.CancelJob({
  "JobId": ""
}, context)
```

#### Parameters
* APIVersion (string) - Specifies the version of the client tool.
* JobId (string) **required** - A unique identifier which refers to a particular job.

### CreateJob



```js
amazonaws_importexport.CreateJob({
  "JobType": "",
  "Manifest": "",
  "ValidateOnly": true
}, context)
```

#### Parameters
* APIVersion (string) - Specifies the version of the client tool.
* JobType (string) **required** - Specifies whether the job to initiate is an import or export job.
* Manifest (string) **required** - The UTF-8 encoded text of the manifest file.
* ManifestAddendum (string) - For internal use only.
* ValidateOnly (boolean) **required** - Validate the manifest and parameter values in the request but do not actually create a job.

### GetShippingLabel



```js
amazonaws_importexport.GetShippingLabel({
  "jobIds": []
}, context)
```

#### Parameters
* APIVersion (string) - Specifies the version of the client tool.
* city (string) - Specifies the name of your city for the return address.
* company (string) - Specifies the name of the company that will ship this package.
* country (string) - Specifies the name of your country for the return address.
* jobIds (array) **required**
* name (string) - Specifies the name of the person responsible for shipping this package.
* phoneNumber (string) - Specifies the phone number of the person responsible for shipping this package.
* postalCode (string) - Specifies the postal code for the return address.
* stateOrProvince (string) - Specifies the name of your state or your province for the return address.
* street1 (string) - Specifies the first part of the street address for the return address, for example 1234 Main Street.
* street2 (string) - Specifies the optional second part of the street address for the return address, for example Suite 100.
* street3 (string) - Specifies the optional third part of the street address for the return address, for example c/o Jane Doe.

### GetStatus



```js
amazonaws_importexport.GetStatus({
  "JobId": ""
}, context)
```

#### Parameters
* APIVersion (string) - Specifies the version of the client tool.
* JobId (string) **required** - A unique identifier which refers to a particular job.

### ListJobs



```js
amazonaws_importexport.ListJobs({}, context)
```

#### Parameters
* MaxJobs (string)
* Marker (string)
* APIVersion (string) - Specifies the version of the client tool.
* Marker (string) - Specifies the JOBID to start after when listing the jobs created with your account. AWS Import/Export lists your jobs in reverse chronological order. See MaxJobs.
* MaxJobs (integer) - Sets the maximum number of jobs returned in the response. If there are additional jobs that were not returned because MaxJobs was exceeded, the response contains &lt;IsTruncated&gt;true&lt;/IsTruncated&gt;. To return the additional jobs, see Marker.

### UpdateJob



```js
amazonaws_importexport.UpdateJob({
  "JobId": "",
  "Manifest": "",
  "JobType": "",
  "ValidateOnly": true
}, context)
```

#### Parameters
* APIVersion (string) - Specifies the version of the client tool.
* JobId (string) **required** - A unique identifier which refers to a particular job.
* JobType (string) **required** - Specifies whether the job to initiate is an import or export job.
* Manifest (string) **required** - The UTF-8 encoded text of the manifest file.
* ValidateOnly (boolean) **required** - Validate the manifest and parameter values in the request but do not actually create a job.

