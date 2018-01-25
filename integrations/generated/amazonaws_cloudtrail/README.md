# @datafire/amazonaws_cloudtrail

Client library for AWS CloudTrail

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_cloudtrail
```
```js
let amazonaws_cloudtrail = require('@datafire/amazonaws_cloudtrail').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_cloudtrail.AddTags({
  "ResourceId": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * ResourceId **required** [String](#string)
  * TagsList [TagsList](#tagslist)

#### Output
* output [AddTagsResponse](#addtagsresponse)

### CreateTrail



```js
amazonaws_cloudtrail.CreateTrail({
  "Name": "",
  "S3BucketName": ""
}, context)
```

#### Input
* input `object`
  * CloudWatchLogsLogGroupArn [String](#string)
  * CloudWatchLogsRoleArn [String](#string)
  * EnableLogFileValidation [Boolean](#boolean)
  * IncludeGlobalServiceEvents [Boolean](#boolean)
  * IsMultiRegionTrail [Boolean](#boolean)
  * KmsKeyId [String](#string)
  * Name **required** [String](#string)
  * S3BucketName **required** [String](#string)
  * S3KeyPrefix [String](#string)
  * SnsTopicName [String](#string)

#### Output
* output [CreateTrailResponse](#createtrailresponse)

### DeleteTrail



```js
amazonaws_cloudtrail.DeleteTrail({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [String](#string)

#### Output
* output [DeleteTrailResponse](#deletetrailresponse)

### DescribeTrails



```js
amazonaws_cloudtrail.DescribeTrails({}, context)
```

#### Input
* input `object`
  * includeShadowTrails [Boolean](#boolean)
  * trailNameList [TrailNameList](#trailnamelist)

#### Output
* output [DescribeTrailsResponse](#describetrailsresponse)

### GetEventSelectors



```js
amazonaws_cloudtrail.GetEventSelectors({
  "TrailName": ""
}, context)
```

#### Input
* input `object`
  * TrailName **required** [String](#string)

#### Output
* output [GetEventSelectorsResponse](#geteventselectorsresponse)

### GetTrailStatus



```js
amazonaws_cloudtrail.GetTrailStatus({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [String](#string)

#### Output
* output [GetTrailStatusResponse](#gettrailstatusresponse)

### ListPublicKeys



```js
amazonaws_cloudtrail.ListPublicKeys({}, context)
```

#### Input
* input `object`
  * EndTime [Date](#date)
  * NextToken [String](#string)
  * StartTime [Date](#date)

#### Output
* output [ListPublicKeysResponse](#listpublickeysresponse)

### ListTags



```js
amazonaws_cloudtrail.ListTags({
  "ResourceIdList": []
}, context)
```

#### Input
* input `object`
  * NextToken [String](#string)
  * ResourceIdList **required** [ResourceIdList](#resourceidlist)

#### Output
* output [ListTagsResponse](#listtagsresponse)

### LookupEvents



```js
amazonaws_cloudtrail.LookupEvents({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * EndTime [Date](#date)
  * LookupAttributes [LookupAttributesList](#lookupattributeslist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * StartTime [Date](#date)

#### Output
* output [LookupEventsResponse](#lookupeventsresponse)

### PutEventSelectors



```js
amazonaws_cloudtrail.PutEventSelectors({
  "TrailName": "",
  "EventSelectors": []
}, context)
```

#### Input
* input `object`
  * EventSelectors **required** [EventSelectors](#eventselectors)
  * TrailName **required** [String](#string)

#### Output
* output [PutEventSelectorsResponse](#puteventselectorsresponse)

### RemoveTags



```js
amazonaws_cloudtrail.RemoveTags({
  "ResourceId": ""
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [String](#string)
  * TagsList [TagsList](#tagslist)

#### Output
* output [RemoveTagsResponse](#removetagsresponse)

### StartLogging



```js
amazonaws_cloudtrail.StartLogging({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [String](#string)

#### Output
* output [StartLoggingResponse](#startloggingresponse)

### StopLogging



```js
amazonaws_cloudtrail.StopLogging({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [String](#string)

#### Output
* output [StopLoggingResponse](#stoploggingresponse)

### UpdateTrail



```js
amazonaws_cloudtrail.UpdateTrail({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * CloudWatchLogsLogGroupArn [String](#string)
  * CloudWatchLogsRoleArn [String](#string)
  * EnableLogFileValidation [Boolean](#boolean)
  * IncludeGlobalServiceEvents [Boolean](#boolean)
  * IsMultiRegionTrail [Boolean](#boolean)
  * KmsKeyId [String](#string)
  * Name **required** [String](#string)
  * S3BucketName [String](#string)
  * S3KeyPrefix [String](#string)
  * SnsTopicName [String](#string)

#### Output
* output [UpdateTrailResponse](#updatetrailresponse)



## Definitions

### AddTagsRequest
* AddTagsRequest `object`: Specifies the tags to add to a trail.
  * ResourceId **required** [String](#string)
  * TagsList [TagsList](#tagslist)

### AddTagsResponse
* AddTagsResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.

### Boolean
* Boolean `boolean`

### ByteBuffer
* ByteBuffer `string`

### CloudTrailARNInvalidException
* CloudTrailARNInvalidException `object`: <p>This exception is thrown when an operation is called with an invalid trail ARN. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail</code> </p>

### CloudWatchLogsDeliveryUnavailableException
* CloudWatchLogsDeliveryUnavailableException `object`: Cannot set a CloudWatch Logs delivery for this region.

### CreateTrailRequest
* CreateTrailRequest `object`: Specifies the settings for each trail.
  * CloudWatchLogsLogGroupArn [String](#string)
  * CloudWatchLogsRoleArn [String](#string)
  * EnableLogFileValidation [Boolean](#boolean)
  * IncludeGlobalServiceEvents [Boolean](#boolean)
  * IsMultiRegionTrail [Boolean](#boolean)
  * KmsKeyId [String](#string)
  * Name **required** [String](#string)
  * S3BucketName **required** [String](#string)
  * S3KeyPrefix [String](#string)
  * SnsTopicName [String](#string)

### CreateTrailResponse
* CreateTrailResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.
  * CloudWatchLogsLogGroupArn [String](#string)
  * CloudWatchLogsRoleArn [String](#string)
  * IncludeGlobalServiceEvents [Boolean](#boolean)
  * IsMultiRegionTrail [Boolean](#boolean)
  * KmsKeyId [String](#string)
  * LogFileValidationEnabled [Boolean](#boolean)
  * Name [String](#string)
  * S3BucketName [String](#string)
  * S3KeyPrefix [String](#string)
  * SnsTopicARN [String](#string)
  * SnsTopicName [String](#string)
  * TrailARN [String](#string)

### DataResource
* DataResource `object`: <p>The Amazon S3 objects that you specify in your event selectors for your trail to log data events. Data events are object-level API operations that access S3 objects, such as <code>GetObject</code>, <code>DeleteObject</code>, and <code>PutObject</code>. You can specify up to 250 S3 buckets and object prefixes for a trail. </p> <p>Example</p> <ol> <li> <p>You create an event selector for a trail and specify an S3 bucket and an empty prefix, such as <code>arn:aws:s3:::bucket-1/</code>.</p> </li> <li> <p>You upload an image file to <code>bucket-1</code>.</p> </li> <li> <p>The <code>PutObject</code> API operation occurs on an object in the S3 bucket that you specified in the event selector. The trail processes and logs the event.</p> </li> <li> <p>You upload another image file to a different S3 bucket named <code>arn:aws:s3:::bucket-2</code>.</p> </li> <li> <p>The event occurs on an object in an S3 bucket that you didn't specify in the event selector. The trail doesn’t log the event.</p> </li> </ol>
  * Type [String](#string)
  * Values [DataResourceValues](#dataresourcevalues)

### DataResourceValues
* DataResourceValues `array`
  * items [String](#string)

### DataResources
* DataResources `array`
  * items [DataResource](#dataresource)

### Date
* Date `string`

### DeleteTrailRequest
* DeleteTrailRequest `object`: The request that specifies the name of a trail to delete.
  * Name **required** [String](#string)

### DeleteTrailResponse
* DeleteTrailResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.

### DescribeTrailsRequest
* DescribeTrailsRequest `object`: Returns information about the trail.
  * includeShadowTrails [Boolean](#boolean)
  * trailNameList [TrailNameList](#trailnamelist)

### DescribeTrailsResponse
* DescribeTrailsResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.
  * trailList [TrailList](#traillist)

### Event
* Event `object`: Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event.
  * CloudTrailEvent [String](#string)
  * EventId [String](#string)
  * EventName [String](#string)
  * EventSource [String](#string)
  * EventTime [Date](#date)
  * Resources [ResourceList](#resourcelist)
  * Username [String](#string)

### EventSelector
* EventSelector `object`: <p>Use event selectors to specify whether you want your trail to log management and/or data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>You can configure up to five event selectors for a trail.</p>
  * DataResources [DataResources](#dataresources)
  * IncludeManagementEvents [Boolean](#boolean)
  * ReadWriteType [ReadWriteType](#readwritetype)

### EventSelectors
* EventSelectors `array`
  * items [EventSelector](#eventselector)

### EventsList
* EventsList `array`
  * items [Event](#event)

### GetEventSelectorsRequest
* GetEventSelectorsRequest `object`
  * TrailName **required** [String](#string)

### GetEventSelectorsResponse
* GetEventSelectorsResponse `object`
  * EventSelectors [EventSelectors](#eventselectors)
  * TrailARN [String](#string)

### GetTrailStatusRequest
* GetTrailStatusRequest `object`: The name of a trail about which you want the current status.
  * Name **required** [String](#string)

### GetTrailStatusResponse
* GetTrailStatusResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.
  * IsLogging [Boolean](#boolean)
  * LatestCloudWatchLogsDeliveryError [String](#string)
  * LatestCloudWatchLogsDeliveryTime [Date](#date)
  * LatestDeliveryAttemptSucceeded [String](#string)
  * LatestDeliveryAttemptTime [String](#string)
  * LatestDeliveryError [String](#string)
  * LatestDeliveryTime [Date](#date)
  * LatestDigestDeliveryError [String](#string)
  * LatestDigestDeliveryTime [Date](#date)
  * LatestNotificationAttemptSucceeded [String](#string)
  * LatestNotificationAttemptTime [String](#string)
  * LatestNotificationError [String](#string)
  * LatestNotificationTime [Date](#date)
  * StartLoggingTime [Date](#date)
  * StopLoggingTime [Date](#date)
  * TimeLoggingStarted [String](#string)
  * TimeLoggingStopped [String](#string)

### InsufficientEncryptionPolicyException
* InsufficientEncryptionPolicyException `object`: This exception is thrown when the policy on the S3 bucket or KMS key is not sufficient.

### InsufficientS3BucketPolicyException
* InsufficientS3BucketPolicyException `object`: This exception is thrown when the policy on the S3 bucket is not sufficient.

### InsufficientSnsTopicPolicyException
* InsufficientSnsTopicPolicyException `object`: This exception is thrown when the policy on the SNS topic is not sufficient.

### InvalidCloudWatchLogsLogGroupArnException
* InvalidCloudWatchLogsLogGroupArnException `object`: This exception is thrown when the provided CloudWatch log group is not valid.

### InvalidCloudWatchLogsRoleArnException
* InvalidCloudWatchLogsRoleArnException `object`: This exception is thrown when the provided role is not valid.

### InvalidEventSelectorsException
* InvalidEventSelectorsException `object`: <p>This exception is thrown when the <code>PutEventSelectors</code> operation is called with an invalid number of event selectors, data resources, or an invalid value for a parameter:</p> <ul> <li> <p>Specify a valid number of event selectors (1 to 5) for a trail.</p> </li> <li> <p>Specify a valid number of data resources (1 to 250) for an event selector.</p> </li> <li> <p>Specify a valid value for a parameter. For example, specifying the <code>ReadWriteType</code> parameter with a value of <code>read-only</code> is invalid.</p> </li> </ul>

### InvalidHomeRegionException
* InvalidHomeRegionException `object`: This exception is thrown when an operation is called on a trail from a region other than the region in which the trail was created.

### InvalidKmsKeyIdException
* InvalidKmsKeyIdException `object`: This exception is thrown when the KMS key ARN is invalid.

### InvalidLookupAttributesException
* InvalidLookupAttributesException `object`: Occurs when an invalid lookup attribute is specified.

### InvalidMaxResultsException
* InvalidMaxResultsException `object`: This exception is thrown if the limit specified is invalid.

### InvalidNextTokenException
* InvalidNextTokenException `object`: Invalid token or token that was previously used in a request with different parameters. This exception is thrown if the token is invalid.

### InvalidParameterCombinationException
* InvalidParameterCombinationException `object`: This exception is thrown when the combination of parameters provided is not valid.

### InvalidS3BucketNameException
* InvalidS3BucketNameException `object`: This exception is thrown when the provided S3 bucket name is not valid.

### InvalidS3PrefixException
* InvalidS3PrefixException `object`: This exception is thrown when the provided S3 prefix is not valid.

### InvalidSnsTopicNameException
* InvalidSnsTopicNameException `object`: This exception is thrown when the provided SNS topic name is not valid.

### InvalidTagParameterException
* InvalidTagParameterException `object`: This exception is thrown when the key or value specified for the tag does not match the regular expression <code>^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$</code>.

### InvalidTimeRangeException
* InvalidTimeRangeException `object`: Occurs if the timestamp values are invalid. Either the start time occurs after the end time or the time range is outside the range of possible values.

### InvalidTokenException
* InvalidTokenException `object`: Reserved for future use.

### InvalidTrailNameException
* InvalidTrailNameException `object`: <p>This exception is thrown when the provided trail name is not valid. Trail names must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are invalid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul>

### KmsException
* KmsException `object`: This exception is thrown when there is an issue with the specified KMS key and the trail can’t be updated.

### KmsKeyDisabledException
* KmsKeyDisabledException `object`: This exception is deprecated.

### KmsKeyNotFoundException
* KmsKeyNotFoundException `object`: This exception is thrown when the KMS key does not exist, or when the S3 bucket and the KMS key are not in the same region.

### ListPublicKeysRequest
* ListPublicKeysRequest `object`: Requests the public keys for a specified time range.
  * EndTime [Date](#date)
  * NextToken [String](#string)
  * StartTime [Date](#date)

### ListPublicKeysResponse
* ListPublicKeysResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.
  * NextToken [String](#string)
  * PublicKeyList [PublicKeyList](#publickeylist)

### ListTagsRequest
* ListTagsRequest `object`: Specifies a list of trail tags to return.
  * NextToken [String](#string)
  * ResourceIdList **required** [ResourceIdList](#resourceidlist)

### ListTagsResponse
* ListTagsResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.
  * NextToken [String](#string)
  * ResourceTagList [ResourceTagList](#resourcetaglist)

### LookupAttribute
* LookupAttribute `object`: Specifies an attribute and value that filter the events returned.
  * AttributeKey **required** [LookupAttributeKey](#lookupattributekey)
  * AttributeValue **required** [String](#string)

### LookupAttributeKey
* LookupAttributeKey `string` (values: EventId, EventName, Username, ResourceType, ResourceName, EventSource)

### LookupAttributesList
* LookupAttributesList `array`
  * items [LookupAttribute](#lookupattribute)

### LookupEventsRequest
* LookupEventsRequest `object`: Contains a request for LookupEvents.
  * EndTime [Date](#date)
  * LookupAttributes [LookupAttributesList](#lookupattributeslist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * StartTime [Date](#date)

### LookupEventsResponse
* LookupEventsResponse `object`: Contains a response to a LookupEvents action.
  * Events [EventsList](#eventslist)
  * NextToken [NextToken](#nexttoken)

### MaxResults
* MaxResults `integer`

### MaximumNumberOfTrailsExceededException
* MaximumNumberOfTrailsExceededException `object`: This exception is thrown when the maximum number of trails is reached.

### NextToken
* NextToken `string`

### OperationNotPermittedException
* OperationNotPermittedException `object`: This exception is thrown when the requested operation is not permitted.

### PublicKey
* PublicKey `object`: Contains information about a returned public key.
  * Fingerprint [String](#string)
  * ValidityEndTime [Date](#date)
  * ValidityStartTime [Date](#date)
  * Value [ByteBuffer](#bytebuffer)

### PublicKeyList
* PublicKeyList `array`
  * items [PublicKey](#publickey)

### PutEventSelectorsRequest
* PutEventSelectorsRequest `object`
  * EventSelectors **required** [EventSelectors](#eventselectors)
  * TrailName **required** [String](#string)

### PutEventSelectorsResponse
* PutEventSelectorsResponse `object`
  * EventSelectors [EventSelectors](#eventselectors)
  * TrailARN [String](#string)

### ReadWriteType
* ReadWriteType `string` (values: ReadOnly, WriteOnly, All)

### RemoveTagsRequest
* RemoveTagsRequest `object`: Specifies the tags to remove from a trail.
  * ResourceId **required** [String](#string)
  * TagsList [TagsList](#tagslist)

### RemoveTagsResponse
* RemoveTagsResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.

### Resource
* Resource `object`: Specifies the type and name of a resource referenced by an event.
  * ResourceName [String](#string)
  * ResourceType [String](#string)

### ResourceIdList
* ResourceIdList `array`
  * items [String](#string)

### ResourceList
* ResourceList `array`: A list of resources referenced by the event returned.
  * items [Resource](#resource)

### ResourceNotFoundException
* ResourceNotFoundException `object`: This exception is thrown when the specified resource is not found.

### ResourceTag
* ResourceTag `object`: A resource tag.
  * ResourceId [String](#string)
  * TagsList [TagsList](#tagslist)

### ResourceTagList
* ResourceTagList `array`
  * items [ResourceTag](#resourcetag)

### ResourceTypeNotSupportedException
* ResourceTypeNotSupportedException `object`: This exception is thrown when the specified resource type is not supported by CloudTrail.

### S3BucketDoesNotExistException
* S3BucketDoesNotExistException `object`: This exception is thrown when the specified S3 bucket does not exist.

### StartLoggingRequest
* StartLoggingRequest `object`: The request to CloudTrail to start logging AWS API calls for an account.
  * Name **required** [String](#string)

### StartLoggingResponse
* StartLoggingResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.

### StopLoggingRequest
* StopLoggingRequest `object`: Passes the request to CloudTrail to stop logging AWS API calls for the specified account.
  * Name **required** [String](#string)

### StopLoggingResponse
* StopLoggingResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.

### String
* String `string`

### Tag
* Tag `object`: A custom key-value pair associated with a resource such as a CloudTrail trail.
  * Key **required** [String](#string)
  * Value [String](#string)

### TagsLimitExceededException
* TagsLimitExceededException `object`: The number of tags per trail has exceeded the permitted amount. Currently, the limit is 50.

### TagsList
* TagsList `array`: A list of tags.
  * items [Tag](#tag)

### Trail
* Trail `object`: The settings for a trail.
  * CloudWatchLogsLogGroupArn [String](#string)
  * CloudWatchLogsRoleArn [String](#string)
  * HasCustomEventSelectors [Boolean](#boolean)
  * HomeRegion [String](#string)
  * IncludeGlobalServiceEvents [Boolean](#boolean)
  * IsMultiRegionTrail [Boolean](#boolean)
  * KmsKeyId [String](#string)
  * LogFileValidationEnabled [Boolean](#boolean)
  * Name [String](#string)
  * S3BucketName [String](#string)
  * S3KeyPrefix [String](#string)
  * SnsTopicARN [String](#string)
  * SnsTopicName [String](#string)
  * TrailARN [String](#string)

### TrailAlreadyExistsException
* TrailAlreadyExistsException `object`: This exception is thrown when the specified trail already exists.

### TrailList
* TrailList `array`
  * items [Trail](#trail)

### TrailNameList
* TrailNameList `array`
  * items [String](#string)

### TrailNotFoundException
* TrailNotFoundException `object`: This exception is thrown when the trail with the given name is not found.

### TrailNotProvidedException
* TrailNotProvidedException `object`: This exception is deprecated.

### UnsupportedOperationException
* UnsupportedOperationException `object`: This exception is thrown when the requested operation is not supported.

### UpdateTrailRequest
* UpdateTrailRequest `object`: Specifies settings to update for the trail.
  * CloudWatchLogsLogGroupArn [String](#string)
  * CloudWatchLogsRoleArn [String](#string)
  * EnableLogFileValidation [Boolean](#boolean)
  * IncludeGlobalServiceEvents [Boolean](#boolean)
  * IsMultiRegionTrail [Boolean](#boolean)
  * KmsKeyId [String](#string)
  * Name **required** [String](#string)
  * S3BucketName [String](#string)
  * S3KeyPrefix [String](#string)
  * SnsTopicName [String](#string)

### UpdateTrailResponse
* UpdateTrailResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.
  * CloudWatchLogsLogGroupArn [String](#string)
  * CloudWatchLogsRoleArn [String](#string)
  * IncludeGlobalServiceEvents [Boolean](#boolean)
  * IsMultiRegionTrail [Boolean](#boolean)
  * KmsKeyId [String](#string)
  * LogFileValidationEnabled [Boolean](#boolean)
  * Name [String](#string)
  * S3BucketName [String](#string)
  * S3KeyPrefix [String](#string)
  * SnsTopicARN [String](#string)
  * SnsTopicName [String](#string)
  * TrailARN [String](#string)


