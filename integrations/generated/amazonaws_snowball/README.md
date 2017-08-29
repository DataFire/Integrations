# @datafire/amazonaws_snowball

Client library for Amazon Import/Export Snowball

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_snowball
```

```js
let datafire = require('datafire');
let amazonaws_snowball = require('@datafire/amazonaws_snowball').create();

amazonaws_snowball.CancelCluster({}).then(data => {
  console.log(data);
})
```

## Description
AWS Snowball is a petabyte-scale data transport solution that uses secure appliances to transfer large amounts of data between your on-premises data centers and Amazon Simple Storage Service (Amazon S3). The Snowball commands described here provide access to the same functionality that is available in the AWS Snowball Management Console, which enables you to create and manage jobs for Snowball. To transfer data locally with a Snowball appliance, you'll need to use the Snowball client or the Amazon S3 API adapter for Snowball. For more information, see the <a href="http://docs.aws.amazon.com/AWSImportExport/latest/ug/api-reference.html">User Guide</a>.

## Actions
### CancelCluster



```js
amazonaws_snowball.CancelCluster({}, context)
```


### CancelJob



```js
amazonaws_snowball.CancelJob({}, context)
```


### CreateAddress



```js
amazonaws_snowball.CreateAddress({}, context)
```


### CreateCluster



```js
amazonaws_snowball.CreateCluster({}, context)
```


### CreateJob



```js
amazonaws_snowball.CreateJob({}, context)
```


### DescribeAddress



```js
amazonaws_snowball.DescribeAddress({}, context)
```


### DescribeAddresses



```js
amazonaws_snowball.DescribeAddresses({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### DescribeCluster



```js
amazonaws_snowball.DescribeCluster({}, context)
```


### DescribeJob



```js
amazonaws_snowball.DescribeJob({}, context)
```


### GetJobManifest



```js
amazonaws_snowball.GetJobManifest({}, context)
```


### GetJobUnlockCode



```js
amazonaws_snowball.GetJobUnlockCode({}, context)
```


### GetSnowballUsage



```js
amazonaws_snowball.GetSnowballUsage({}, context)
```


### ListClusterJobs



```js
amazonaws_snowball.ListClusterJobs({}, context)
```


### ListClusters



```js
amazonaws_snowball.ListClusters({}, context)
```


### ListJobs



```js
amazonaws_snowball.ListJobs({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### UpdateCluster



```js
amazonaws_snowball.UpdateCluster({}, context)
```


### UpdateJob



```js
amazonaws_snowball.UpdateJob({}, context)
```


