# @datafire/amazonaws_cloudtrail

Client library for AWS CloudTrail

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cloudtrail
```

```js
let datafire = require('datafire');
let amazonaws_cloudtrail = require('@datafire/amazonaws_cloudtrail').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_cloudtrail.AddTags({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS CloudTrail</fullname> <p>This is the CloudTrail API Reference. It provides descriptions of actions, data types, common parameters, and common errors for CloudTrail.</p> <p>CloudTrail is a web service that records AWS API calls for your AWS account and delivers log files to an Amazon S3 bucket. The recorded information includes the identity of the user, the start time of the AWS API call, the source IP address, the request parameters, and the response elements returned by the service.</p> <note> <p>As an alternative to the API, you can use one of the AWS SDKs, which consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to AWSCloudTrail. For example, the SDKs take care of cryptographically signing requests, managing errors, and retrying requests automatically. For information about the AWS SDKs, including how to download and install them, see the <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services page</a>.</p> </note> <p>See the <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html">AWS CloudTrail User Guide</a> for information about the data that is included with each AWS API call listed in the log files.</p>

## Actions
### AddTags



```js
amazonaws_cloudtrail.AddTags({
  "ResourceId": ""
}, context)
```

#### Parameters
* ResourceId (string) **required**
* TagsList (array) - A list of tags.

### CreateTrail



```js
amazonaws_cloudtrail.CreateTrail({
  "Name": "",
  "S3BucketName": ""
}, context)
```

#### Parameters
* CloudWatchLogsLogGroupArn (string)
* CloudWatchLogsRoleArn (string)
* EnableLogFileValidation (boolean)
* IncludeGlobalServiceEvents (boolean)
* IsMultiRegionTrail (boolean)
* KmsKeyId (string)
* Name (string) **required**
* S3BucketName (string) **required**
* S3KeyPrefix (string)
* SnsTopicName (string)

### DeleteTrail



```js
amazonaws_cloudtrail.DeleteTrail({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### DescribeTrails



```js
amazonaws_cloudtrail.DescribeTrails({}, context)
```

#### Parameters
* includeShadowTrails (boolean)
* trailNameList (array)

### GetEventSelectors



```js
amazonaws_cloudtrail.GetEventSelectors({
  "TrailName": ""
}, context)
```

#### Parameters
* TrailName (string) **required**

### GetTrailStatus



```js
amazonaws_cloudtrail.GetTrailStatus({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### ListPublicKeys



```js
amazonaws_cloudtrail.ListPublicKeys({}, context)
```

#### Parameters
* EndTime (string)
* NextToken (string)
* StartTime (string)

### ListTags



```js
amazonaws_cloudtrail.ListTags({
  "ResourceIdList": []
}, context)
```

#### Parameters
* NextToken (string)
* ResourceIdList (array) **required**

### LookupEvents



```js
amazonaws_cloudtrail.LookupEvents({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* EndTime (string)
* LookupAttributes (array)
* MaxResults (integer)
* NextToken (string)
* StartTime (string)

### PutEventSelectors



```js
amazonaws_cloudtrail.PutEventSelectors({
  "TrailName": "",
  "EventSelectors": []
}, context)
```

#### Parameters
* EventSelectors (array) **required**
* TrailName (string) **required**

### RemoveTags



```js
amazonaws_cloudtrail.RemoveTags({
  "ResourceId": ""
}, context)
```

#### Parameters
* ResourceId (string) **required**
* TagsList (array) - A list of tags.

### StartLogging



```js
amazonaws_cloudtrail.StartLogging({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### StopLogging



```js
amazonaws_cloudtrail.StopLogging({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### UpdateTrail



```js
amazonaws_cloudtrail.UpdateTrail({
  "Name": ""
}, context)
```

#### Parameters
* CloudWatchLogsLogGroupArn (string)
* CloudWatchLogsRoleArn (string)
* EnableLogFileValidation (boolean)
* IncludeGlobalServiceEvents (boolean)
* IsMultiRegionTrail (boolean)
* KmsKeyId (string)
* Name (string) **required**
* S3BucketName (string)
* S3KeyPrefix (string)
* SnsTopicName (string)

