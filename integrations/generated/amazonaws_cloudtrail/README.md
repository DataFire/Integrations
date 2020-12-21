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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS CloudTrail</fullname> <p>This is the CloudTrail API Reference. It provides descriptions of actions, data types, common parameters, and common errors for CloudTrail.</p> <p>CloudTrail is a web service that records AWS API calls for your AWS account and delivers log files to an Amazon S3 bucket. The recorded information includes the identity of the user, the start time of the AWS API call, the source IP address, the request parameters, and the response elements returned by the service.</p> <note> <p>As an alternative to the API, you can use one of the AWS SDKs, which consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to AWSCloudTrail. For example, the SDKs take care of cryptographically signing requests, managing errors, and retrying requests automatically. For information about the AWS SDKs, including how to download and install them, see the <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services page</a>.</p> </note> <p>See the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html">AWS CloudTrail User Guide</a> for information about the data that is included with each AWS API call listed in the log files.</p>

## Actions

### AddTags



```js
amazonaws_cloudtrail.AddTags({
  "ResourceId": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**
  * TagsList
    * items [Tag](#tag)

#### Output
* output [AddTagsResponse](#addtagsresponse)

### CreateTrail



```js
amazonaws_cloudtrail.CreateTrail({
  "Name": null,
  "S3BucketName": null
}, context)
```

#### Input
* input `object`
  * CloudWatchLogsLogGroupArn
  * CloudWatchLogsRoleArn
  * EnableLogFileValidation
  * IncludeGlobalServiceEvents
  * IsMultiRegionTrail
  * IsOrganizationTrail
  * KmsKeyId
  * Name **required**
  * S3BucketName **required**
  * S3KeyPrefix
  * SnsTopicName
  * TagsList [TagsList](#tagslist)

#### Output
* output [CreateTrailResponse](#createtrailresponse)

### DeleteTrail



```js
amazonaws_cloudtrail.DeleteTrail({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DeleteTrailResponse](#deletetrailresponse)

### DescribeTrails



```js
amazonaws_cloudtrail.DescribeTrails({}, context)
```

#### Input
* input `object`
  * includeShadowTrails
  * trailNameList
    * items [String](#string)

#### Output
* output [DescribeTrailsResponse](#describetrailsresponse)

### GetEventSelectors



```js
amazonaws_cloudtrail.GetEventSelectors({
  "TrailName": null
}, context)
```

#### Input
* input `object`
  * TrailName **required**

#### Output
* output [GetEventSelectorsResponse](#geteventselectorsresponse)

### GetInsightSelectors



```js
amazonaws_cloudtrail.GetInsightSelectors({
  "TrailName": null
}, context)
```

#### Input
* input `object`
  * TrailName **required**

#### Output
* output [GetInsightSelectorsResponse](#getinsightselectorsresponse)

### GetTrail



```js
amazonaws_cloudtrail.GetTrail({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [GetTrailResponse](#gettrailresponse)

### GetTrailStatus



```js
amazonaws_cloudtrail.GetTrailStatus({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [GetTrailStatusResponse](#gettrailstatusresponse)

### ListPublicKeys



```js
amazonaws_cloudtrail.ListPublicKeys({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * EndTime
  * NextToken
  * StartTime

#### Output
* output [ListPublicKeysResponse](#listpublickeysresponse)

### ListTags



```js
amazonaws_cloudtrail.ListTags({
  "ResourceIdList": null
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken
  * ResourceIdList **required**
    * items [String](#string)

#### Output
* output [ListTagsResponse](#listtagsresponse)

### ListTrails



```js
amazonaws_cloudtrail.ListTrails({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken

#### Output
* output [ListTrailsResponse](#listtrailsresponse)

### LookupEvents



```js
amazonaws_cloudtrail.LookupEvents({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * EndTime
  * EventCategory
  * LookupAttributes
    * items [LookupAttribute](#lookupattribute)
  * MaxResults
  * NextToken
  * StartTime

#### Output
* output [LookupEventsResponse](#lookupeventsresponse)

### PutEventSelectors



```js
amazonaws_cloudtrail.PutEventSelectors({
  "TrailName": null
}, context)
```

#### Input
* input `object`
  * AdvancedEventSelectors
    * items [AdvancedEventSelector](#advancedeventselector)
  * EventSelectors
    * items [EventSelector](#eventselector)
  * TrailName **required**

#### Output
* output [PutEventSelectorsResponse](#puteventselectorsresponse)

### PutInsightSelectors



```js
amazonaws_cloudtrail.PutInsightSelectors({
  "TrailName": null,
  "InsightSelectors": null
}, context)
```

#### Input
* input `object`
  * InsightSelectors **required**
    * items [InsightSelector](#insightselector)
  * TrailName **required**

#### Output
* output [PutInsightSelectorsResponse](#putinsightselectorsresponse)

### RemoveTags



```js
amazonaws_cloudtrail.RemoveTags({
  "ResourceId": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**
  * TagsList
    * items [Tag](#tag)

#### Output
* output [RemoveTagsResponse](#removetagsresponse)

### StartLogging



```js
amazonaws_cloudtrail.StartLogging({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [StartLoggingResponse](#startloggingresponse)

### StopLogging



```js
amazonaws_cloudtrail.StopLogging({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [StopLoggingResponse](#stoploggingresponse)

### UpdateTrail



```js
amazonaws_cloudtrail.UpdateTrail({
  "Name": null
}, context)
```

#### Input
* input `object`
  * CloudWatchLogsLogGroupArn
  * CloudWatchLogsRoleArn
  * EnableLogFileValidation
  * IncludeGlobalServiceEvents
  * IsMultiRegionTrail
  * IsOrganizationTrail
  * KmsKeyId
  * Name **required**
  * S3BucketName
  * S3KeyPrefix
  * SnsTopicName

#### Output
* output [UpdateTrailResponse](#updatetrailresponse)



## Definitions

### AddTagsRequest
* AddTagsRequest `object`: Specifies the tags to add to a trail.
  * ResourceId **required**
  * TagsList
    * items [Tag](#tag)

### AddTagsResponse
* AddTagsResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.

### AdvancedEventSelector
* AdvancedEventSelector `object`: <p>Advanced event selectors let you create fine-grained selectors for the following AWS CloudTrail event record ﬁelds. They help you control costs by logging only those events that are important to you. For more information about advanced event selectors, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails</a> in the <i>AWS CloudTrail User Guide</i>.</p> <ul> <li> <p> <code>readOnly</code> </p> </li> <li> <p> <code>eventSource</code> </p> </li> <li> <p> <code>eventName</code> </p> </li> <li> <p> <code>eventCategory</code> </p> </li> <li> <p> <code>resources.type</code> </p> </li> <li> <p> <code>resources.ARN</code> </p> </li> </ul> <p>You cannot apply both event selectors and advanced event selectors to a trail.</p>
  * FieldSelectors **required**
    * items [AdvancedFieldSelector](#advancedfieldselector)
  * Name

### AdvancedEventSelectors
* AdvancedEventSelectors `array`
  * items [AdvancedEventSelector](#advancedeventselector)

### AdvancedFieldSelector
* AdvancedFieldSelector `object`: A single selector statement in an advanced event selector.
  * EndsWith
    * items [OperatorValue](#operatorvalue)
  * Equals
    * items [OperatorValue](#operatorvalue)
  * Field **required**
  * NotEndsWith
    * items [OperatorValue](#operatorvalue)
  * NotEquals
    * items [OperatorValue](#operatorvalue)
  * NotStartsWith
    * items [OperatorValue](#operatorvalue)
  * StartsWith
    * items [OperatorValue](#operatorvalue)

### AdvancedFieldSelectors
* AdvancedFieldSelectors `array`
  * items [AdvancedFieldSelector](#advancedfieldselector)

### Boolean
* Boolean `boolean`

### ByteBuffer
* ByteBuffer `string`

### CloudTrailARNInvalidException


### CloudTrailAccessNotEnabledException


### CloudTrailInvalidClientTokenIdException


### CloudWatchLogsDeliveryUnavailableException


### CreateTrailRequest
* CreateTrailRequest `object`: Specifies the settings for each trail.
  * CloudWatchLogsLogGroupArn
  * CloudWatchLogsRoleArn
  * EnableLogFileValidation
  * IncludeGlobalServiceEvents
  * IsMultiRegionTrail
  * IsOrganizationTrail
  * KmsKeyId
  * Name **required**
  * S3BucketName **required**
  * S3KeyPrefix
  * SnsTopicName
  * TagsList [TagsList](#tagslist)

### CreateTrailResponse
* CreateTrailResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.
  * CloudWatchLogsLogGroupArn
  * CloudWatchLogsRoleArn
  * IncludeGlobalServiceEvents
  * IsMultiRegionTrail
  * IsOrganizationTrail
  * KmsKeyId
  * LogFileValidationEnabled
  * Name
  * S3BucketName
  * S3KeyPrefix
  * SnsTopicARN
  * SnsTopicName
  * TrailARN

### DataResource
* DataResource `object`: <p>The Amazon S3 buckets or AWS Lambda functions that you specify in your event selectors for your trail to log data events. Data events provide information about the resource operations performed on or within a resource itself. These are also known as data plane operations. You can specify up to 250 data resources for a trail.</p> <note> <p>The total number of allowed data resources is 250. This number can be distributed between 1 and 5 event selectors, but the total cannot exceed 250 across all selectors.</p> <p>If you are using advanced event selectors, the maximum total number of values for all conditions, across all advanced event selectors for the trail, is 500.</p> </note> <p>The following example demonstrates how logging works when you configure logging of all data events for an S3 bucket named <code>bucket-1</code>. In this example, the CloudTrail user specified an empty prefix, and the option to log both <code>Read</code> and <code>Write</code> data events.</p> <ol> <li> <p>A user uploads an image file to <code>bucket-1</code>.</p> </li> <li> <p>The <code>PutObject</code> API operation is an Amazon S3 object-level API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified an S3 bucket with an empty prefix, events that occur on any object in that bucket are logged. The trail processes and logs the event.</p> </li> <li> <p>A user uploads an object to an Amazon S3 bucket named <code>arn:aws:s3:::bucket-2</code>.</p> </li> <li> <p>The <code>PutObject</code> API operation occurred for an object in an S3 bucket that the CloudTrail user didn't specify for the trail. The trail doesn’t log the event.</p> </li> </ol> <p>The following example demonstrates how logging works when you configure logging of AWS Lambda data events for a Lambda function named <i>MyLambdaFunction</i>, but not for all AWS Lambda functions.</p> <ol> <li> <p>A user runs a script that includes a call to the <i>MyLambdaFunction</i> function and the <i>MyOtherLambdaFunction</i> function.</p> </li> <li> <p>The <code>Invoke</code> API operation on <i>MyLambdaFunction</i> is an AWS Lambda API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified logging data events for <i>MyLambdaFunction</i>, any invocations of that function are logged. The trail processes and logs the event. </p> </li> <li> <p>The <code>Invoke</code> API operation on <i>MyOtherLambdaFunction</i> is an AWS Lambda API. Because the CloudTrail user did not specify logging data events for all Lambda functions, the <code>Invoke</code> operation for <i>MyOtherLambdaFunction</i> does not match the function specified for the trail. The trail doesn’t log the event. </p> </li> </ol>
  * Type
  * Values
    * items [String](#string)

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
  * Name **required**

### DeleteTrailResponse
* DeleteTrailResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.

### DescribeTrailsRequest
* DescribeTrailsRequest `object`: Returns information about the trail.
  * includeShadowTrails
  * trailNameList
    * items [String](#string)

### DescribeTrailsResponse
* DescribeTrailsResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.
  * trailList
    * items [Trail](#trail)

### Event
* Event `object`: Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event.
  * AccessKeyId
  * CloudTrailEvent
  * EventId
  * EventName
  * EventSource
  * EventTime
  * ReadOnly
  * Resources
    * items [Resource](#resource)
  * Username

### EventCategory
* EventCategory `string` (values: insight)

### EventSelector
* EventSelector `object`: <p>Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>You can configure up to five event selectors for a trail.</p> <p>You cannot apply both event selectors and advanced event selectors to a trail.</p>
  * DataResources
    * items [DataResource](#dataresource)
  * ExcludeManagementEventSources
    * items [String](#string)
  * IncludeManagementEvents
  * ReadWriteType

### EventSelectors
* EventSelectors `array`
  * items [EventSelector](#eventselector)

### EventsList
* EventsList `array`
  * items [Event](#event)

### ExcludeManagementEventSources
* ExcludeManagementEventSources `array`
  * items [String](#string)

### GetEventSelectorsRequest
* GetEventSelectorsRequest `object`
  * TrailName **required**

### GetEventSelectorsResponse
* GetEventSelectorsResponse `object`
  * AdvancedEventSelectors
    * items [AdvancedEventSelector](#advancedeventselector)
  * EventSelectors
    * items [EventSelector](#eventselector)
  * TrailARN

### GetInsightSelectorsRequest
* GetInsightSelectorsRequest `object`
  * TrailName **required**

### GetInsightSelectorsResponse
* GetInsightSelectorsResponse `object`
  * InsightSelectors
    * items [InsightSelector](#insightselector)
  * TrailARN

### GetTrailRequest
* GetTrailRequest `object`
  * Name **required**

### GetTrailResponse
* GetTrailResponse `object`
  * Trail [Trail](#trail)

### GetTrailStatusRequest
* GetTrailStatusRequest `object`: The name of a trail about which you want the current status.
  * Name **required**

### GetTrailStatusResponse
* GetTrailStatusResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.
  * IsLogging
  * LatestCloudWatchLogsDeliveryError
  * LatestCloudWatchLogsDeliveryTime
  * LatestDeliveryAttemptSucceeded
  * LatestDeliveryAttemptTime
  * LatestDeliveryError
  * LatestDeliveryTime
  * LatestDigestDeliveryError
  * LatestDigestDeliveryTime
  * LatestNotificationAttemptSucceeded
  * LatestNotificationAttemptTime
  * LatestNotificationError
  * LatestNotificationTime
  * StartLoggingTime
  * StopLoggingTime
  * TimeLoggingStarted
  * TimeLoggingStopped

### InsightNotEnabledException


### InsightSelector
* InsightSelector `object`: A JSON string that contains a list of insight types that are logged on a trail.
  * InsightType

### InsightSelectors
* InsightSelectors `array`
  * items [InsightSelector](#insightselector)

### InsightType
* InsightType `string` (values: ApiCallRateInsight)

### InsufficientDependencyServiceAccessPermissionException


### InsufficientEncryptionPolicyException


### InsufficientS3BucketPolicyException


### InsufficientSnsTopicPolicyException


### InvalidCloudWatchLogsLogGroupArnException


### InvalidCloudWatchLogsRoleArnException


### InvalidEventCategoryException


### InvalidEventSelectorsException


### InvalidHomeRegionException


### InvalidInsightSelectorsException


### InvalidKmsKeyIdException


### InvalidLookupAttributesException


### InvalidMaxResultsException


### InvalidNextTokenException


### InvalidParameterCombinationException


### InvalidS3BucketNameException


### InvalidS3PrefixException


### InvalidSnsTopicNameException


### InvalidTagParameterException


### InvalidTimeRangeException


### InvalidTokenException


### InvalidTrailNameException


### KmsException


### KmsKeyDisabledException


### KmsKeyNotFoundException


### ListPublicKeysRequest
* ListPublicKeysRequest `object`: Requests the public keys for a specified time range.
  * EndTime
  * NextToken
  * StartTime

### ListPublicKeysResponse
* ListPublicKeysResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.
  * NextToken
  * PublicKeyList
    * items [PublicKey](#publickey)

### ListTagsRequest
* ListTagsRequest `object`: Specifies a list of trail tags to return.
  * NextToken
  * ResourceIdList **required**
    * items [String](#string)

### ListTagsResponse
* ListTagsResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.
  * NextToken
  * ResourceTagList
    * items [ResourceTag](#resourcetag)

### ListTrailsRequest
* ListTrailsRequest `object`
  * NextToken

### ListTrailsResponse
* ListTrailsResponse `object`
  * NextToken
  * Trails
    * items [TrailInfo](#trailinfo)

### LookupAttribute
* LookupAttribute `object`: Specifies an attribute and value that filter the events returned.
  * AttributeKey **required**
  * AttributeValue **required**

### LookupAttributeKey
* LookupAttributeKey `string` (values: EventId, EventName, ReadOnly, Username, ResourceType, ResourceName, EventSource, AccessKeyId)

### LookupAttributesList
* LookupAttributesList `array`
  * items [LookupAttribute](#lookupattribute)

### LookupEventsRequest
* LookupEventsRequest `object`: Contains a request for LookupEvents.
  * EndTime
  * EventCategory
  * LookupAttributes
    * items [LookupAttribute](#lookupattribute)
  * MaxResults
  * NextToken
  * StartTime

### LookupEventsResponse
* LookupEventsResponse `object`: Contains a response to a LookupEvents action.
  * Events
    * items [Event](#event)
  * NextToken

### MaxResults
* MaxResults `integer`

### MaximumNumberOfTrailsExceededException


### NextToken
* NextToken `string`

### NotOrganizationMasterAccountException


### OperationNotPermittedException


### Operator
* Operator `array`
  * items [OperatorValue](#operatorvalue)

### OperatorValue
* OperatorValue `string`

### OrganizationNotInAllFeaturesModeException


### OrganizationsNotInUseException


### PublicKey
* PublicKey `object`: Contains information about a returned public key.
  * Fingerprint
  * ValidityEndTime
  * ValidityStartTime
  * Value

### PublicKeyList
* PublicKeyList `array`
  * items [PublicKey](#publickey)

### PutEventSelectorsRequest
* PutEventSelectorsRequest `object`
  * AdvancedEventSelectors
    * items [AdvancedEventSelector](#advancedeventselector)
  * EventSelectors
    * items [EventSelector](#eventselector)
  * TrailName **required**

### PutEventSelectorsResponse
* PutEventSelectorsResponse `object`
  * AdvancedEventSelectors
    * items [AdvancedEventSelector](#advancedeventselector)
  * EventSelectors
    * items [EventSelector](#eventselector)
  * TrailARN

### PutInsightSelectorsRequest
* PutInsightSelectorsRequest `object`
  * InsightSelectors **required**
    * items [InsightSelector](#insightselector)
  * TrailName **required**

### PutInsightSelectorsResponse
* PutInsightSelectorsResponse `object`
  * InsightSelectors
    * items [InsightSelector](#insightselector)
  * TrailARN

### ReadWriteType
* ReadWriteType `string` (values: ReadOnly, WriteOnly, All)

### RemoveTagsRequest
* RemoveTagsRequest `object`: Specifies the tags to remove from a trail.
  * ResourceId **required**
  * TagsList
    * items [Tag](#tag)

### RemoveTagsResponse
* RemoveTagsResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.

### Resource
* Resource `object`: Specifies the type and name of a resource referenced by an event.
  * ResourceName
  * ResourceType

### ResourceIdList
* ResourceIdList `array`
  * items [String](#string)

### ResourceList
* ResourceList `array`: A list of resources referenced by the event returned.
  * items [Resource](#resource)

### ResourceNotFoundException


### ResourceTag
* ResourceTag `object`: A resource tag.
  * ResourceId
  * TagsList
    * items [Tag](#tag)

### ResourceTagList
* ResourceTagList `array`
  * items [ResourceTag](#resourcetag)

### ResourceTypeNotSupportedException


### S3BucketDoesNotExistException


### SelectorField
* SelectorField `string`

### SelectorName
* SelectorName `string`

### StartLoggingRequest
* StartLoggingRequest `object`: The request to CloudTrail to start logging AWS API calls for an account.
  * Name **required**

### StartLoggingResponse
* StartLoggingResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.

### StopLoggingRequest
* StopLoggingRequest `object`: Passes the request to CloudTrail to stop logging AWS API calls for the specified account.
  * Name **required**

### StopLoggingResponse
* StopLoggingResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.

### String
* String `string`

### Tag
* Tag `object`: A custom key-value pair associated with a resource such as a CloudTrail trail.
  * Key **required**
  * Value

### TagsLimitExceededException


### TagsList
* TagsList `array`: A list of tags.
  * items [Tag](#tag)

### Trail
* Trail `object`: The settings for a trail.
  * CloudWatchLogsLogGroupArn
  * CloudWatchLogsRoleArn
  * HasCustomEventSelectors
  * HasInsightSelectors
  * HomeRegion
  * IncludeGlobalServiceEvents
  * IsMultiRegionTrail
  * IsOrganizationTrail
  * KmsKeyId
  * LogFileValidationEnabled
  * Name
  * S3BucketName
  * S3KeyPrefix
  * SnsTopicARN
  * SnsTopicName
  * TrailARN

### TrailAlreadyExistsException


### TrailInfo
* TrailInfo `object`: Information about a CloudTrail trail, including the trail's name, home region, and Amazon Resource Name (ARN).
  * HomeRegion
  * Name
  * TrailARN

### TrailList
* TrailList `array`
  * items [Trail](#trail)

### TrailNameList
* TrailNameList `array`
  * items [String](#string)

### TrailNotFoundException


### TrailNotProvidedException


### Trails
* Trails `array`
  * items [TrailInfo](#trailinfo)

### UnsupportedOperationException


### UpdateTrailRequest
* UpdateTrailRequest `object`: Specifies settings to update for the trail.
  * CloudWatchLogsLogGroupArn
  * CloudWatchLogsRoleArn
  * EnableLogFileValidation
  * IncludeGlobalServiceEvents
  * IsMultiRegionTrail
  * IsOrganizationTrail
  * KmsKeyId
  * Name **required**
  * S3BucketName
  * S3KeyPrefix
  * SnsTopicName

### UpdateTrailResponse
* UpdateTrailResponse `object`: Returns the objects or data listed below if successful. Otherwise, returns an error.
  * CloudWatchLogsLogGroupArn
  * CloudWatchLogsRoleArn
  * IncludeGlobalServiceEvents
  * IsMultiRegionTrail
  * IsOrganizationTrail
  * KmsKeyId
  * LogFileValidationEnabled
  * Name
  * S3BucketName
  * S3KeyPrefix
  * SnsTopicARN
  * SnsTopicName
  * TrailARN


