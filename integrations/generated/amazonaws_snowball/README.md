# @datafire/amazonaws_snowball

Client library for Amazon Import/Export Snowball

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_snowball
```

```js
let datafire = require('datafire');
let amazonaws_snowball = require('@datafire/amazonaws_snowball').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_snowball.CancelCluster({}).then(data => {
  console.log(data);
})
```

## Description
AWS Snowball is a petabyte-scale data transport solution that uses secure appliances to transfer large amounts of data between your on-premises data centers and Amazon Simple Storage Service (Amazon S3). The Snowball commands described here provide access to the same functionality that is available in the AWS Snowball Management Console, which enables you to create and manage jobs for Snowball. To transfer data locally with a Snowball appliance, you'll need to use the Snowball client or the Amazon S3 API adapter for Snowball. For more information, see the <a href="http://docs.aws.amazon.com/AWSImportExport/latest/ug/api-reference.html">User Guide</a>.

## Actions
### CancelCluster



```js
amazonaws_snowball.CancelCluster({
  "ClusterId": ""
}, context)
```

#### Parameters
* ClusterId (string) **required**

### CancelJob



```js
amazonaws_snowball.CancelJob({
  "JobId": ""
}, context)
```

#### Parameters
* JobId (string) **required**

### CreateAddress



```js
amazonaws_snowball.CreateAddress({
  "Address": {}
}, context)
```

#### Parameters
* Address (object) **required** - The address that you want the Snowball or Snowballs associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown.

### CreateCluster



```js
amazonaws_snowball.CreateCluster({
  "JobType": "",
  "Resources": {},
  "AddressId": "",
  "RoleARN": "",
  "ShippingOption": ""
}, context)
```

#### Parameters
* AddressId (string) **required**
* Description (string)
* ForwardingAddressId (string)
* JobType (string) **required**
* KmsKeyARN (string)
* Notification (object) - <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p>
* Resources (object) **required** - Contains an array of <code>S3Resource</code> objects. Each <code>S3Resource</code> object represents an Amazon S3 bucket that your transferred data will be exported from or imported into.
* RoleARN (string) **required**
* ShippingOption (string) **required**
* SnowballType (string)

### CreateJob



```js
amazonaws_snowball.CreateJob({}, context)
```

#### Parameters
* AddressId (string)
* ClusterId (string)
* Description (string)
* ForwardingAddressId (string)
* JobType (string)
* KmsKeyARN (string)
* Notification (object) - <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p>
* Resources (object) - Contains an array of <code>S3Resource</code> objects. Each <code>S3Resource</code> object represents an Amazon S3 bucket that your transferred data will be exported from or imported into.
* RoleARN (string)
* ShippingOption (string)
* SnowballCapacityPreference (string)
* SnowballType (string)

### DescribeAddress



```js
amazonaws_snowball.DescribeAddress({
  "AddressId": ""
}, context)
```

#### Parameters
* AddressId (string) **required**

### DescribeAddresses



```js
amazonaws_snowball.DescribeAddresses({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)

### DescribeCluster



```js
amazonaws_snowball.DescribeCluster({
  "ClusterId": ""
}, context)
```

#### Parameters
* ClusterId (string) **required**

### DescribeJob



```js
amazonaws_snowball.DescribeJob({
  "JobId": ""
}, context)
```

#### Parameters
* JobId (string) **required**

### GetJobManifest



```js
amazonaws_snowball.GetJobManifest({
  "JobId": ""
}, context)
```

#### Parameters
* JobId (string) **required**

### GetJobUnlockCode



```js
amazonaws_snowball.GetJobUnlockCode({
  "JobId": ""
}, context)
```

#### Parameters
* JobId (string) **required**

### GetSnowballUsage



```js
amazonaws_snowball.GetSnowballUsage({}, context)
```

#### Parameters
*This action has no parameters*

### ListClusterJobs



```js
amazonaws_snowball.ListClusterJobs({
  "ClusterId": ""
}, context)
```

#### Parameters
* ClusterId (string) **required**
* MaxResults (integer)
* NextToken (string)

### ListClusters



```js
amazonaws_snowball.ListClusters({}, context)
```

#### Parameters
* MaxResults (integer)
* NextToken (string)

### ListJobs



```js
amazonaws_snowball.ListJobs({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)

### UpdateCluster



```js
amazonaws_snowball.UpdateCluster({
  "ClusterId": ""
}, context)
```

#### Parameters
* AddressId (string)
* ClusterId (string) **required**
* Description (string)
* ForwardingAddressId (string)
* Notification (object) - <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p>
* Resources (object) - Contains an array of <code>S3Resource</code> objects. Each <code>S3Resource</code> object represents an Amazon S3 bucket that your transferred data will be exported from or imported into.
* RoleARN (string)
* ShippingOption (string)

### UpdateJob



```js
amazonaws_snowball.UpdateJob({
  "JobId": ""
}, context)
```

#### Parameters
* AddressId (string)
* Description (string)
* ForwardingAddressId (string)
* JobId (string) **required**
* Notification (object) - <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p>
* Resources (object) - Contains an array of <code>S3Resource</code> objects. Each <code>S3Resource</code> object represents an Amazon S3 bucket that your transferred data will be exported from or imported into.
* RoleARN (string)
* ShippingOption (string)
* SnowballCapacityPreference (string)

