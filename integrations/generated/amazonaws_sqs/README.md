# @datafire/amazonaws_sqs

Client library for Amazon Simple Queue Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_sqs
```
```js
let amazonaws_sqs = require('@datafire/amazonaws_sqs').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_sqs.AddPermission({
  "QueueUrl": "",
  "Label": "",
  "AWSAccountIds": [],
  "Actions": []
}).then(data => {
  console.log(data);
});
```

## Description

<p>Welcome to the <i>Amazon Simple Queue Service API Reference</i>.</p> <p>Amazon Simple Queue Service (Amazon SQS) is a reliable, highly-scalable hosted queue for storing messages as they travel between applications or microservices. Amazon SQS moves data between distributed application components and helps you decouple these components.</p> <note> <p> <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues.html">Standard queues</a> are available in all regions. <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO queues</a> are available in the US East (N. Virginia), US East (Ohio), US West (Oregon), and EU (Ireland) regions.</p> </note> <p>You can use <a href="http://aws.amazon.com/tools/#sdk">AWS SDKs</a> to access Amazon SQS using your favorite programming language. The SDKs perform tasks such as the following automatically:</p> <ul> <li> <p>Cryptographically sign your service requests</p> </li> <li> <p>Retry requests</p> </li> <li> <p>Handle error responses</p> </li> </ul> <p> <b>Additional Information</b> </p> <ul> <li> <p> <a href="http://aws.amazon.com/sqs/">Amazon SQS Product Page</a> </p> </li> <li> <p> <i>Amazon Simple Queue Service Developer Guide</i> </p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/MakingRequestsArticle.html">Making API Requests</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-attributes.html">Using Amazon SQS Message Attributes</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">Using Amazon SQS Dead-Letter Queues</a> </p> </li> </ul> </li> <li> <p> <i>Amazon Web Services General Reference</i> </p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#sqs_region">Regions and Endpoints</a> </p> </li> </ul> </li> </ul>

## Actions

### AddPermission



```js
amazonaws_sqs.AddPermission({
  "QueueUrl": "",
  "Label": "",
  "AWSAccountIds": [],
  "Actions": []
}, context)
```

#### Input
* input `object`
  * AWSAccountIds **required** [AWSAccountIdList](#awsaccountidlist)
  * Actions **required** [ActionNameList](#actionnamelist)
  * Label **required** [String](#string)
  * QueueUrl **required** [String](#string)

#### Output
*Output schema unknown*

### ChangeMessageVisibility



```js
amazonaws_sqs.ChangeMessageVisibility({
  "QueueUrl": "",
  "ReceiptHandle": "",
  "VisibilityTimeout": 0
}, context)
```

#### Input
* input `object`
  * QueueUrl **required** [String](#string)
  * ReceiptHandle **required** [String](#string)
  * VisibilityTimeout **required** [Integer](#integer)

#### Output
*Output schema unknown*

### ChangeMessageVisibilityBatch



```js
amazonaws_sqs.ChangeMessageVisibilityBatch({
  "QueueUrl": "",
  "Entries": []
}, context)
```

#### Input
* input `object`
  * Entries **required** [ChangeMessageVisibilityBatchRequestEntryList](#changemessagevisibilitybatchrequestentrylist)
  * QueueUrl **required** [String](#string)

#### Output
* output [ChangeMessageVisibilityBatchResult](#changemessagevisibilitybatchresult)

### CreateQueue



```js
amazonaws_sqs.CreateQueue({
  "QueueName": ""
}, context)
```

#### Input
* input `object`
  * Attributes [QueueAttributeMap](#queueattributemap)
  * QueueName **required** [String](#string)

#### Output
* output [CreateQueueResult](#createqueueresult)

### DeleteMessage



```js
amazonaws_sqs.DeleteMessage({
  "QueueUrl": "",
  "ReceiptHandle": ""
}, context)
```

#### Input
* input `object`
  * QueueUrl **required** [String](#string)
  * ReceiptHandle **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteMessageBatch



```js
amazonaws_sqs.DeleteMessageBatch({
  "QueueUrl": "",
  "Entries": []
}, context)
```

#### Input
* input `object`
  * Entries **required** [DeleteMessageBatchRequestEntryList](#deletemessagebatchrequestentrylist)
  * QueueUrl **required** [String](#string)

#### Output
* output [DeleteMessageBatchResult](#deletemessagebatchresult)

### DeleteQueue



```js
amazonaws_sqs.DeleteQueue({
  "QueueUrl": ""
}, context)
```

#### Input
* input `object`
  * QueueUrl **required** [String](#string)

#### Output
*Output schema unknown*

### GetQueueAttributes



```js
amazonaws_sqs.GetQueueAttributes({
  "QueueUrl": ""
}, context)
```

#### Input
* input `object`
  * AttributeNames [AttributeNameList](#attributenamelist)
  * QueueUrl **required** [String](#string)

#### Output
* output [GetQueueAttributesResult](#getqueueattributesresult)

### GetQueueUrl



```js
amazonaws_sqs.GetQueueUrl({
  "QueueName": ""
}, context)
```

#### Input
* input `object`
  * QueueName **required** [String](#string)
  * QueueOwnerAWSAccountId [String](#string)

#### Output
* output [GetQueueUrlResult](#getqueueurlresult)

### ListDeadLetterSourceQueues



```js
amazonaws_sqs.ListDeadLetterSourceQueues({
  "QueueUrl": ""
}, context)
```

#### Input
* input `object`
  * QueueUrl **required** [String](#string)

#### Output
* output [ListDeadLetterSourceQueuesResult](#listdeadlettersourcequeuesresult)

### ListQueueTags



```js
amazonaws_sqs.ListQueueTags({
  "QueueUrl": ""
}, context)
```

#### Input
* input `object`
  * QueueUrl **required** [String](#string)

#### Output
* output [ListQueueTagsResult](#listqueuetagsresult)

### ListQueues



```js
amazonaws_sqs.ListQueues({}, context)
```

#### Input
* input `object`
  * QueueNamePrefix [String](#string)

#### Output
* output [ListQueuesResult](#listqueuesresult)

### PurgeQueue



```js
amazonaws_sqs.PurgeQueue({
  "QueueUrl": ""
}, context)
```

#### Input
* input `object`
  * QueueUrl **required** [String](#string)

#### Output
*Output schema unknown*

### ReceiveMessage



```js
amazonaws_sqs.ReceiveMessage({
  "QueueUrl": ""
}, context)
```

#### Input
* input `object`
  * AttributeNames [AttributeNameList](#attributenamelist)
  * MaxNumberOfMessages [Integer](#integer)
  * MessageAttributeNames [MessageAttributeNameList](#messageattributenamelist)
  * QueueUrl **required** [String](#string)
  * ReceiveRequestAttemptId [String](#string)
  * VisibilityTimeout [Integer](#integer)
  * WaitTimeSeconds [Integer](#integer)

#### Output
* output [ReceiveMessageResult](#receivemessageresult)

### RemovePermission



```js
amazonaws_sqs.RemovePermission({
  "QueueUrl": "",
  "Label": ""
}, context)
```

#### Input
* input `object`
  * Label **required** [String](#string)
  * QueueUrl **required** [String](#string)

#### Output
*Output schema unknown*

### SendMessage



```js
amazonaws_sqs.SendMessage({
  "QueueUrl": "",
  "MessageBody": ""
}, context)
```

#### Input
* input `object`
  * DelaySeconds [Integer](#integer)
  * MessageAttributes [MessageBodyAttributeMap](#messagebodyattributemap)
  * MessageBody **required** [String](#string)
  * MessageDeduplicationId [String](#string)
  * MessageGroupId [String](#string)
  * QueueUrl **required** [String](#string)

#### Output
* output [SendMessageResult](#sendmessageresult)

### SendMessageBatch



```js
amazonaws_sqs.SendMessageBatch({
  "QueueUrl": "",
  "Entries": []
}, context)
```

#### Input
* input `object`
  * Entries **required** [SendMessageBatchRequestEntryList](#sendmessagebatchrequestentrylist)
  * QueueUrl **required** [String](#string)

#### Output
* output [SendMessageBatchResult](#sendmessagebatchresult)

### SetQueueAttributes



```js
amazonaws_sqs.SetQueueAttributes({
  "QueueUrl": "",
  "Attributes": []
}, context)
```

#### Input
* input `object`
  * Attributes **required** [QueueAttributeMap](#queueattributemap)
  * QueueUrl **required** [String](#string)

#### Output
*Output schema unknown*

### TagQueue



```js
amazonaws_sqs.TagQueue({
  "QueueUrl": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * QueueUrl **required** [String](#string)
  * Tags **required** [TagMap](#tagmap)

#### Output
*Output schema unknown*

### UntagQueue



```js
amazonaws_sqs.UntagQueue({
  "QueueUrl": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * QueueUrl **required** [String](#string)
  * TagKeys **required** [TagKeyList](#tagkeylist)

#### Output
*Output schema unknown*



## Definitions

### AWSAccountIdList
* AWSAccountIdList `array`
  * items [String](#string)

### ActionNameList
* ActionNameList `array`
  * items [String](#string)

### AddPermissionRequest
* AddPermissionRequest `object`: <p/>
  * AWSAccountIds **required** [AWSAccountIdList](#awsaccountidlist)
  * Actions **required** [ActionNameList](#actionnamelist)
  * Label **required** [String](#string)
  * QueueUrl **required** [String](#string)

### AttributeNameList
* AttributeNameList `array`
  * items [QueueAttributeName](#queueattributename)

### BatchEntryIdsNotDistinct
* BatchEntryIdsNotDistinct `object`: Two or more batch entries in the request have the same <code>Id</code>.

### BatchRequestTooLong
* BatchRequestTooLong `object`: The length of all the messages put together is more than the limit.

### BatchResultErrorEntry
* BatchResultErrorEntry `object`: This is used in the responses of batch API to give a detailed description of the result of an action on each entry in the request.
  * Code **required** [String](#string)
  * Id **required** [String](#string)
  * Message [String](#string)
  * SenderFault **required** [Boolean](#boolean)

### BatchResultErrorEntryList
* BatchResultErrorEntryList `array`
  * items [BatchResultErrorEntry](#batchresulterrorentry)

### Binary
* Binary `string`

### BinaryList
* BinaryList `array`
  * items [Binary](#binary)

### Boolean
* Boolean `boolean`

### ChangeMessageVisibilityBatchRequest
* ChangeMessageVisibilityBatchRequest `object`: <p/>
  * Entries **required** [ChangeMessageVisibilityBatchRequestEntryList](#changemessagevisibilitybatchrequestentrylist)
  * QueueUrl **required** [String](#string)

### ChangeMessageVisibilityBatchRequestEntry
* ChangeMessageVisibilityBatchRequestEntry `object`: <p>Encloses a receipt handle and an entry id for each message in <code> <a>ChangeMessageVisibilityBatch</a>.</code> </p> <important> <p>All of the following list parameters must be prefixed with <code>ChangeMessageVisibilityBatchRequestEntry.n</code>, where <code>n</code> is an integer value starting with <code>1</code>. For example, a parameter list for this action might look like this:</p> </important> <p> <code>&amp;amp;ChangeMessageVisibilityBatchRequestEntry.1.Id=change_visibility_msg_2</code> </p> <p> <code>&amp;amp;ChangeMessageVisibilityBatchRequestEntry.1.ReceiptHandle=&lt;replaceable&gt;Your_Receipt_Handle&lt;/replaceable&gt;</code> </p> <p> <code>&amp;amp;ChangeMessageVisibilityBatchRequestEntry.1.VisibilityTimeout=45</code> </p>
  * Id **required** [String](#string)
  * ReceiptHandle **required** [String](#string)
  * VisibilityTimeout [Integer](#integer)

### ChangeMessageVisibilityBatchRequestEntryList
* ChangeMessageVisibilityBatchRequestEntryList `array`
  * items [ChangeMessageVisibilityBatchRequestEntry](#changemessagevisibilitybatchrequestentry)

### ChangeMessageVisibilityBatchResult
* ChangeMessageVisibilityBatchResult `object`: For each message in the batch, the response contains a <code> <a>ChangeMessageVisibilityBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.
  * Failed **required** [BatchResultErrorEntryList](#batchresulterrorentrylist)
  * Successful **required** [ChangeMessageVisibilityBatchResultEntryList](#changemessagevisibilitybatchresultentrylist)

### ChangeMessageVisibilityBatchResultEntry
* ChangeMessageVisibilityBatchResultEntry `object`: Encloses the <code>Id</code> of an entry in <code> <a>ChangeMessageVisibilityBatch</a>.</code> 
  * Id **required** [String](#string)

### ChangeMessageVisibilityBatchResultEntryList
* ChangeMessageVisibilityBatchResultEntryList `array`
  * items [ChangeMessageVisibilityBatchResultEntry](#changemessagevisibilitybatchresultentry)

### ChangeMessageVisibilityRequest
* ChangeMessageVisibilityRequest `object`
  * QueueUrl **required** [String](#string)
  * ReceiptHandle **required** [String](#string)
  * VisibilityTimeout **required** [Integer](#integer)

### CreateQueueRequest
* CreateQueueRequest `object`: <p/>
  * Attributes [QueueAttributeMap](#queueattributemap)
  * QueueName **required** [String](#string)

### CreateQueueResult
* CreateQueueResult `object`: Returns the <code>QueueUrl</code> attribute of the created queue.
  * QueueUrl [String](#string)

### DeleteMessageBatchRequest
* DeleteMessageBatchRequest `object`: <p/>
  * Entries **required** [DeleteMessageBatchRequestEntryList](#deletemessagebatchrequestentrylist)
  * QueueUrl **required** [String](#string)

### DeleteMessageBatchRequestEntry
* DeleteMessageBatchRequestEntry `object`: Encloses a receipt handle and an identifier for it.
  * Id **required** [String](#string)
  * ReceiptHandle **required** [String](#string)

### DeleteMessageBatchRequestEntryList
* DeleteMessageBatchRequestEntryList `array`
  * items [DeleteMessageBatchRequestEntry](#deletemessagebatchrequestentry)

### DeleteMessageBatchResult
* DeleteMessageBatchResult `object`: For each message in the batch, the response contains a <code> <a>DeleteMessageBatchResultEntry</a> </code> tag if the message is deleted or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message can't be deleted.
  * Failed **required** [BatchResultErrorEntryList](#batchresulterrorentrylist)
  * Successful **required** [DeleteMessageBatchResultEntryList](#deletemessagebatchresultentrylist)

### DeleteMessageBatchResultEntry
* DeleteMessageBatchResultEntry `object`: Encloses the <code>Id</code> of an entry in <code> <a>DeleteMessageBatch</a>.</code> 
  * Id **required** [String](#string)

### DeleteMessageBatchResultEntryList
* DeleteMessageBatchResultEntryList `array`
  * items [DeleteMessageBatchResultEntry](#deletemessagebatchresultentry)

### DeleteMessageRequest
* DeleteMessageRequest `object`: <p/>
  * QueueUrl **required** [String](#string)
  * ReceiptHandle **required** [String](#string)

### DeleteQueueRequest
* DeleteQueueRequest `object`: <p/>
  * QueueUrl **required** [String](#string)

### EmptyBatchRequest
* EmptyBatchRequest `object`: The batch request doesn't contain any entries.

### GetQueueAttributesRequest
* GetQueueAttributesRequest `object`: <p/>
  * AttributeNames [AttributeNameList](#attributenamelist)
  * QueueUrl **required** [String](#string)

### GetQueueAttributesResult
* GetQueueAttributesResult `object`: A list of returned queue attributes.
  * Attributes [QueueAttributeMap](#queueattributemap)

### GetQueueUrlRequest
* GetQueueUrlRequest `object`: <p/>
  * QueueName **required** [String](#string)
  * QueueOwnerAWSAccountId [String](#string)

### GetQueueUrlResult
* GetQueueUrlResult `object`: For more information, see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/UnderstandingResponses.html">Responses</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.
  * QueueUrl [String](#string)

### Integer
* Integer `integer`

### InvalidAttributeName
* InvalidAttributeName `object`: The attribute referred to doesn't exist.

### InvalidBatchEntryId
* InvalidBatchEntryId `object`: The <code>Id</code> of a batch entry in a batch request doesn't abide by the specification.

### InvalidIdFormat
* InvalidIdFormat `object`: The receipt handle isn't valid for the current version.

### InvalidMessageContents
* InvalidMessageContents `object`: The message contains characters outside the allowed set.

### ListDeadLetterSourceQueuesRequest
* ListDeadLetterSourceQueuesRequest `object`: <p/>
  * QueueUrl **required** [String](#string)

### ListDeadLetterSourceQueuesResult
* ListDeadLetterSourceQueuesResult `object`: A list of your dead letter source queues.
  * queueUrls **required** [QueueUrlList](#queueurllist)

### ListQueueTagsRequest
* ListQueueTagsRequest `object`
  * QueueUrl **required** [String](#string)

### ListQueueTagsResult
* ListQueueTagsResult `object`
  * Tags [TagMap](#tagmap)

### ListQueuesRequest
* ListQueuesRequest `object`: <p/>
  * QueueNamePrefix [String](#string)

### ListQueuesResult
* ListQueuesResult `object`: A list of your queues.
  * QueueUrls [QueueUrlList](#queueurllist)

### Message
* Message `object`: An Amazon SQS message.
  * Attributes [MessageSystemAttributeMap](#messagesystemattributemap)
  * Body [String](#string)
  * MD5OfBody [String](#string)
  * MD5OfMessageAttributes [String](#string)
  * MessageAttributes [MessageBodyAttributeMap](#messagebodyattributemap)
  * MessageId [String](#string)
  * ReceiptHandle [String](#string)

### MessageAttributeName
* MessageAttributeName `string`

### MessageAttributeNameList
* MessageAttributeNameList `array`
  * items [MessageAttributeName](#messageattributename)

### MessageAttributeValue
* MessageAttributeValue `object`: <p>The user-specified message attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code> <a>SendMessage</a>.</code> </p> <p> <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null. All parts of the message attribute, including <code>Name</code>, <code>Type</code>, and <code>Value</code>, are part of the message size restriction (256 KB or 262,144 bytes).</p>
  * BinaryListValues [BinaryList](#binarylist)
  * BinaryValue [Binary](#binary)
  * DataType **required** [String](#string)
  * StringListValues [StringList](#stringlist)
  * StringValue [String](#string)

### MessageBodyAttributeMap
* MessageBodyAttributeMap `array`
  * items `object`
    * key [String](#string)
    * value [MessageAttributeValue](#messageattributevalue)

### MessageList
* MessageList `array`
  * items [Message](#message)

### MessageNotInflight
* MessageNotInflight `object`: The message referred to isn't in flight.

### MessageSystemAttributeMap
* MessageSystemAttributeMap `array`
  * items `object`
    * key [MessageSystemAttributeName](#messagesystemattributename)
    * value [String](#string)

### MessageSystemAttributeName
* MessageSystemAttributeName `string` (values: SenderId, SentTimestamp, ApproximateReceiveCount, ApproximateFirstReceiveTimestamp, SequenceNumber, MessageDeduplicationId, MessageGroupId)

### OverLimit
* OverLimit `object`: The action that you requested would violate a limit. For example, <code>ReceiveMessage</code> returns this error if the maximum number of inflight messages is reached. <code> <a>AddPermission</a> </code> returns this error if the maximum number of permissions for the queue is reached.

### PurgeQueueInProgress
* PurgeQueueInProgress `object`: Indicates that the specified queue previously received a <code>PurgeQueue</code> request within the last 60 seconds (the time it can take to delete the messages in the queue).

### PurgeQueueRequest
* PurgeQueueRequest `object`: <p/>
  * QueueUrl **required** [String](#string)

### QueueAttributeMap
* QueueAttributeMap `array`
  * items `object`
    * key [QueueAttributeName](#queueattributename)
    * value [String](#string)

### QueueAttributeName
* QueueAttributeName `string` (values: All, Policy, VisibilityTimeout, MaximumMessageSize, MessageRetentionPeriod, ApproximateNumberOfMessages, ApproximateNumberOfMessagesNotVisible, CreatedTimestamp, LastModifiedTimestamp, QueueArn, ApproximateNumberOfMessagesDelayed, DelaySeconds, ReceiveMessageWaitTimeSeconds, RedrivePolicy, FifoQueue, ContentBasedDeduplication, KmsMasterKeyId, KmsDataKeyReusePeriodSeconds)

### QueueDeletedRecently
* QueueDeletedRecently `object`: You must wait 60 seconds after deleting a queue before you can create another one with the same name.

### QueueDoesNotExist
* QueueDoesNotExist `object`: The queue referred to doesn't exist.

### QueueNameExists
* QueueNameExists `object`: A queue already exists with this name. Amazon SQS returns this error only if the request includes attributes whose values differ from those of the existing queue.

### QueueUrlList
* QueueUrlList `array`
  * items [String](#string)

### ReceiptHandleIsInvalid
* ReceiptHandleIsInvalid `object`: The receipt handle provided isn't valid.

### ReceiveMessageRequest
* ReceiveMessageRequest `object`: <p/>
  * AttributeNames [AttributeNameList](#attributenamelist)
  * MaxNumberOfMessages [Integer](#integer)
  * MessageAttributeNames [MessageAttributeNameList](#messageattributenamelist)
  * QueueUrl **required** [String](#string)
  * ReceiveRequestAttemptId [String](#string)
  * VisibilityTimeout [Integer](#integer)
  * WaitTimeSeconds [Integer](#integer)

### ReceiveMessageResult
* ReceiveMessageResult `object`: A list of received messages.
  * Messages [MessageList](#messagelist)

### RemovePermissionRequest
* RemovePermissionRequest `object`: <p/>
  * Label **required** [String](#string)
  * QueueUrl **required** [String](#string)

### SendMessageBatchRequest
* SendMessageBatchRequest `object`: <p/>
  * Entries **required** [SendMessageBatchRequestEntryList](#sendmessagebatchrequestentrylist)
  * QueueUrl **required** [String](#string)

### SendMessageBatchRequestEntry
* SendMessageBatchRequestEntry `object`: Contains the details of a single Amazon SQS message along with an <code>Id</code>.
  * DelaySeconds [Integer](#integer)
  * Id **required** [String](#string)
  * MessageAttributes [MessageBodyAttributeMap](#messagebodyattributemap)
  * MessageBody **required** [String](#string)
  * MessageDeduplicationId [String](#string)
  * MessageGroupId [String](#string)

### SendMessageBatchRequestEntryList
* SendMessageBatchRequestEntryList `array`
  * items [SendMessageBatchRequestEntry](#sendmessagebatchrequestentry)

### SendMessageBatchResult
* SendMessageBatchResult `object`: For each message in the batch, the response contains a <code> <a>SendMessageBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.
  * Failed **required** [BatchResultErrorEntryList](#batchresulterrorentrylist)
  * Successful **required** [SendMessageBatchResultEntryList](#sendmessagebatchresultentrylist)

### SendMessageBatchResultEntry
* SendMessageBatchResultEntry `object`: Encloses a <code>MessageId</code> for a successfully-enqueued message in a <code> <a>SendMessageBatch</a>.</code> 
  * Id **required** [String](#string)
  * MD5OfMessageAttributes [String](#string)
  * MD5OfMessageBody **required** [String](#string)
  * MessageId **required** [String](#string)
  * SequenceNumber [String](#string)

### SendMessageBatchResultEntryList
* SendMessageBatchResultEntryList `array`
  * items [SendMessageBatchResultEntry](#sendmessagebatchresultentry)

### SendMessageRequest
* SendMessageRequest `object`: <p/>
  * DelaySeconds [Integer](#integer)
  * MessageAttributes [MessageBodyAttributeMap](#messagebodyattributemap)
  * MessageBody **required** [String](#string)
  * MessageDeduplicationId [String](#string)
  * MessageGroupId [String](#string)
  * QueueUrl **required** [String](#string)

### SendMessageResult
* SendMessageResult `object`: The <code>MD5OfMessageBody</code> and <code>MessageId</code> elements.
  * MD5OfMessageAttributes [String](#string)
  * MD5OfMessageBody [String](#string)
  * MessageId [String](#string)
  * SequenceNumber [String](#string)

### SetQueueAttributesRequest
* SetQueueAttributesRequest `object`: <p/>
  * Attributes **required** [QueueAttributeMap](#queueattributemap)
  * QueueUrl **required** [String](#string)

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `array`
  * items `object`
    * key [TagKey](#tagkey)
    * value [TagValue](#tagvalue)

### TagQueueRequest
* TagQueueRequest `object`
  * QueueUrl **required** [String](#string)
  * Tags **required** [TagMap](#tagmap)

### TagValue
* TagValue `string`

### TooManyEntriesInBatchRequest
* TooManyEntriesInBatchRequest `object`: The batch request contains more entries than permissible.

### UnsupportedOperation
* UnsupportedOperation `object`: Error code 400. Unsupported operation.

### UntagQueueRequest
* UntagQueueRequest `object`
  * QueueUrl **required** [String](#string)
  * TagKeys **required** [TagKeyList](#tagkeylist)


