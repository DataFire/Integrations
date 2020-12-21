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

.then(data => {
  console.log(data);
});
```

## Description

<p>Welcome to the <i>Amazon Simple Queue Service API Reference</i>.</p> <p>Amazon Simple Queue Service (Amazon SQS) is a reliable, highly-scalable hosted queue for storing messages as they travel between applications or microservices. Amazon SQS moves data between distributed application components and helps you decouple these components.</p> <p>For information on the permissions you need to use this API, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-authentication-and-access-control.html">Identity and access management</a> in the <i>Amazon Simple Queue Service Developer Guide.</i> </p> <p>You can use <a href="http://aws.amazon.com/tools/#sdk">AWS SDKs</a> to access Amazon SQS using your favorite programming language. The SDKs perform tasks such as the following automatically:</p> <ul> <li> <p>Cryptographically sign your service requests</p> </li> <li> <p>Retry requests</p> </li> <li> <p>Handle error responses</p> </li> </ul> <p> <b>Additional Information</b> </p> <ul> <li> <p> <a href="http://aws.amazon.com/sqs/">Amazon SQS Product Page</a> </p> </li> <li> <p> <i>Amazon Simple Queue Service Developer Guide</i> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-making-api-requests.html">Making API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS Message Attributes</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">Amazon SQS Dead-Letter Queues</a> </p> </li> </ul> </li> <li> <p> <a href="http://docs.aws.amazon.com/cli/latest/reference/sqs/index.html">Amazon SQS in the <i>AWS CLI Command Reference</i> </a> </p> </li> <li> <p> <i>Amazon Web Services General Reference</i> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#sqs_region">Regions and Endpoints</a> </p> </li> </ul> </li> </ul>

## Actions

### AddPermission



```js
amazonaws_sqs.AddPermission({
  "QueueUrl": null,
  "Label": null,
  "AWSAccountIds": null,
  "Actions": null
}, context)
```

#### Input
* input `object`
  * AWSAccountIds **required**
    * items
  * Actions **required**
    * items
  * Label **required**
  * QueueUrl **required**

#### Output
*Output schema unknown*

### ChangeMessageVisibility



```js
amazonaws_sqs.ChangeMessageVisibility({
  "QueueUrl": null,
  "ReceiptHandle": null,
  "VisibilityTimeout": null
}, context)
```

#### Input
* input `object`
  * QueueUrl **required**
  * ReceiptHandle **required**
  * VisibilityTimeout **required**

#### Output
*Output schema unknown*

### ChangeMessageVisibilityBatch



```js
amazonaws_sqs.ChangeMessageVisibilityBatch({
  "QueueUrl": null,
  "Entries": null
}, context)
```

#### Input
* input `object`
  * Entries **required**
    * items
      * Id **required**
      * ReceiptHandle **required**
      * VisibilityTimeout
  * QueueUrl **required**

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
  * QueueName **required** `string`
  * Attribute `object`
  * Tag `object`

#### Output
* output [CreateQueueResult](#createqueueresult)

### CreateQueue



```js
amazonaws_sqs.CreateQueue({
  "QueueName": null
}, context)
```

#### Input
* input `object`
  * tags
  * Attributes
  * QueueName **required**

#### Output
* output [CreateQueueResult](#createqueueresult)

### DeleteMessage



```js
amazonaws_sqs.DeleteMessage({
  "QueueUrl": null,
  "ReceiptHandle": null
}, context)
```

#### Input
* input `object`
  * QueueUrl **required**
  * ReceiptHandle **required**

#### Output
*Output schema unknown*

### DeleteMessageBatch



```js
amazonaws_sqs.DeleteMessageBatch({
  "QueueUrl": null,
  "Entries": null
}, context)
```

#### Input
* input `object`
  * Entries **required**
    * items
      * Id **required**
      * ReceiptHandle **required**
  * QueueUrl **required**

#### Output
* output [DeleteMessageBatchResult](#deletemessagebatchresult)

### DeleteQueue



```js
amazonaws_sqs.DeleteQueue({
  "QueueUrl": null
}, context)
```

#### Input
* input `object`
  * QueueUrl **required**

#### Output
*Output schema unknown*

### GetQueueAttributes



```js
amazonaws_sqs.GetQueueAttributes({
  "QueueUrl": null
}, context)
```

#### Input
* input `object`
  * AttributeNames
    * items
  * QueueUrl **required**

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
  * QueueName **required** `string`
  * QueueOwnerAWSAccountId `string`

#### Output
* output [GetQueueUrlResult](#getqueueurlresult)

### GetQueueUrl



```js
amazonaws_sqs.GetQueueUrl({
  "QueueName": null
}, context)
```

#### Input
* input `object`
  * QueueName **required**
  * QueueOwnerAWSAccountId

#### Output
* output [GetQueueUrlResult](#getqueueurlresult)

### ListDeadLetterSourceQueues



```js
amazonaws_sqs.ListDeadLetterSourceQueues({
  "QueueUrl": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * QueueUrl **required**

#### Output
* output [ListDeadLetterSourceQueuesResult](#listdeadlettersourcequeuesresult)

### ListQueueTags



```js
amazonaws_sqs.ListQueueTags({
  "QueueUrl": null
}, context)
```

#### Input
* input `object`
  * QueueUrl **required**

#### Output
* output [ListQueueTagsResult](#listqueuetagsresult)

### ListQueues



```js
amazonaws_sqs.ListQueues({}, context)
```

#### Input
* input `object`
  * QueueNamePrefix `string`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [ListQueuesResult](#listqueuesresult)

### ListQueues



```js
amazonaws_sqs.ListQueues({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * QueueNamePrefix

#### Output
* output [ListQueuesResult](#listqueuesresult)

### PurgeQueue



```js
amazonaws_sqs.PurgeQueue({
  "QueueUrl": null
}, context)
```

#### Input
* input `object`
  * QueueUrl **required**

#### Output
*Output schema unknown*

### ReceiveMessage



```js
amazonaws_sqs.ReceiveMessage({
  "QueueUrl": null
}, context)
```

#### Input
* input `object`
  * AttributeNames
    * items
  * MaxNumberOfMessages
  * MessageAttributeNames
    * items
  * QueueUrl **required**
  * ReceiveRequestAttemptId
  * VisibilityTimeout
  * WaitTimeSeconds

#### Output
* output [ReceiveMessageResult](#receivemessageresult)

### RemovePermission



```js
amazonaws_sqs.RemovePermission({
  "QueueUrl": null,
  "Label": null
}, context)
```

#### Input
* input `object`
  * Label **required**
  * QueueUrl **required**

#### Output
*Output schema unknown*

### SendMessage



```js
amazonaws_sqs.SendMessage({
  "QueueUrl": null,
  "MessageBody": null
}, context)
```

#### Input
* input `object`
  * DelaySeconds
  * MessageAttributes
  * MessageBody **required**
  * MessageDeduplicationId
  * MessageGroupId
  * MessageSystemAttributes
  * QueueUrl **required**

#### Output
* output [SendMessageResult](#sendmessageresult)

### SendMessageBatch



```js
amazonaws_sqs.SendMessageBatch({
  "QueueUrl": null,
  "Entries": null
}, context)
```

#### Input
* input `object`
  * Entries **required**
    * items
      * DelaySeconds
      * Id **required**
      * MessageAttributes
      * MessageBody **required**
      * MessageDeduplicationId
      * MessageGroupId
      * MessageSystemAttributes
  * QueueUrl **required**

#### Output
* output [SendMessageBatchResult](#sendmessagebatchresult)

### SetQueueAttributes



```js
amazonaws_sqs.SetQueueAttributes({
  "QueueUrl": null,
  "Attributes": null
}, context)
```

#### Input
* input `object`
  * Attributes **required**
  * QueueUrl **required**

#### Output
*Output schema unknown*

### TagQueue



```js
amazonaws_sqs.TagQueue({
  "QueueUrl": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * QueueUrl **required**
  * Tags **required**

#### Output
*Output schema unknown*

### UntagQueue



```js
amazonaws_sqs.UntagQueue({
  "QueueUrl": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * QueueUrl **required**
  * TagKeys **required**
    * items

#### Output
*Output schema unknown*

### AddPermission



```js
amazonaws_sqs.AddPermission({
  "Label": "",
  "AWSAccountIds": [],
  "Actions": [],
  "AccountNumber": 0,
  "QueueName": ""
}, context)
```

#### Input
* input `object`
  * Label **required** `string`
  * AWSAccountIds **required** `array`
  * Actions **required** `array`
  * AccountNumber **required** `integer`
  * QueueName **required** `string`

#### Output
*Output schema unknown*

### ChangeMessageVisibility



```js
amazonaws_sqs.ChangeMessageVisibility({
  "ReceiptHandle": "",
  "VisibilityTimeout": 0,
  "AccountNumber": 0,
  "QueueName": ""
}, context)
```

#### Input
* input `object`
  * ReceiptHandle **required** `string`
  * VisibilityTimeout **required** `integer`
  * AccountNumber **required** `integer`
  * QueueName **required** `string`

#### Output
*Output schema unknown*

### ChangeMessageVisibilityBatch



```js
amazonaws_sqs.ChangeMessageVisibilityBatch({
  "Entries": [],
  "AccountNumber": 0,
  "QueueName": ""
}, context)
```

#### Input
* input `object`
  * Entries **required** `array`
  * AccountNumber **required** `integer`
  * QueueName **required** `string`

#### Output
* output [ChangeMessageVisibilityBatchResult](#changemessagevisibilitybatchresult)

### DeleteMessage



```js
amazonaws_sqs.DeleteMessage({
  "ReceiptHandle": "",
  "AccountNumber": 0,
  "QueueName": ""
}, context)
```

#### Input
* input `object`
  * ReceiptHandle **required** `string`
  * AccountNumber **required** `integer`
  * QueueName **required** `string`

#### Output
*Output schema unknown*

### DeleteMessageBatch



```js
amazonaws_sqs.DeleteMessageBatch({
  "Entries": [],
  "AccountNumber": 0,
  "QueueName": ""
}, context)
```

#### Input
* input `object`
  * Entries **required** `array`
  * AccountNumber **required** `integer`
  * QueueName **required** `string`

#### Output
* output [DeleteMessageBatchResult](#deletemessagebatchresult)

### DeleteQueue



```js
amazonaws_sqs.DeleteQueue({
  "AccountNumber": 0,
  "QueueName": ""
}, context)
```

#### Input
* input `object`
  * AccountNumber **required** `integer`
  * QueueName **required** `string`

#### Output
*Output schema unknown*

### GetQueueAttributes



```js
amazonaws_sqs.GetQueueAttributes({
  "AccountNumber": 0,
  "QueueName": ""
}, context)
```

#### Input
* input `object`
  * AttributeNames `array`
  * AccountNumber **required** `integer`
  * QueueName **required** `string`

#### Output
* output [GetQueueAttributesResult](#getqueueattributesresult)

### ListDeadLetterSourceQueues



```js
amazonaws_sqs.ListDeadLetterSourceQueues({
  "AccountNumber": 0,
  "QueueName": ""
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * MaxResults `integer`
  * AccountNumber **required** `integer`
  * QueueName **required** `string`

#### Output
* output [ListDeadLetterSourceQueuesResult](#listdeadlettersourcequeuesresult)

### ListQueueTags



```js
amazonaws_sqs.ListQueueTags({
  "AccountNumber": 0,
  "QueueName": ""
}, context)
```

#### Input
* input `object`
  * AccountNumber **required** `integer`
  * QueueName **required** `string`

#### Output
* output [ListQueueTagsResult](#listqueuetagsresult)

### PurgeQueue



```js
amazonaws_sqs.PurgeQueue({
  "AccountNumber": 0,
  "QueueName": ""
}, context)
```

#### Input
* input `object`
  * AccountNumber **required** `integer`
  * QueueName **required** `string`

#### Output
*Output schema unknown*

### ReceiveMessage



```js
amazonaws_sqs.ReceiveMessage({
  "AccountNumber": 0,
  "QueueName": ""
}, context)
```

#### Input
* input `object`
  * AttributeNames `array`
  * MessageAttributeNames `array`
  * MaxNumberOfMessages `integer`
  * VisibilityTimeout `integer`
  * WaitTimeSeconds `integer`
  * ReceiveRequestAttemptId `string`
  * AccountNumber **required** `integer`
  * QueueName **required** `string`

#### Output
* output [ReceiveMessageResult](#receivemessageresult)

### RemovePermission



```js
amazonaws_sqs.RemovePermission({
  "Label": "",
  "AccountNumber": 0,
  "QueueName": ""
}, context)
```

#### Input
* input `object`
  * Label **required** `string`
  * AccountNumber **required** `integer`
  * QueueName **required** `string`

#### Output
*Output schema unknown*

### SendMessage



```js
amazonaws_sqs.SendMessage({
  "MessageBody": "",
  "AccountNumber": 0,
  "QueueName": ""
}, context)
```

#### Input
* input `object`
  * MessageBody **required** `string`
  * DelaySeconds `integer`
  * MessageAttribute `object`
  * MessageSystemAttribute `object`
  * MessageDeduplicationId `string`
  * MessageGroupId `string`
  * AccountNumber **required** `integer`
  * QueueName **required** `string`

#### Output
* output [SendMessageResult](#sendmessageresult)

### SendMessageBatch



```js
amazonaws_sqs.SendMessageBatch({
  "Entries": [],
  "AccountNumber": 0,
  "QueueName": ""
}, context)
```

#### Input
* input `object`
  * Entries **required** `array`
  * AccountNumber **required** `integer`
  * QueueName **required** `string`

#### Output
* output [SendMessageBatchResult](#sendmessagebatchresult)

### SetQueueAttributes



```js
amazonaws_sqs.SetQueueAttributes({
  "Attribute": {},
  "AccountNumber": 0,
  "QueueName": ""
}, context)
```

#### Input
* input `object`
  * Attribute **required** `object`
  * AccountNumber **required** `integer`
  * QueueName **required** `string`

#### Output
*Output schema unknown*

### TagQueue



```js
amazonaws_sqs.TagQueue({
  "Tags": {},
  "AccountNumber": 0,
  "QueueName": ""
}, context)
```

#### Input
* input `object`
  * Tags **required** `object`
  * AccountNumber **required** `integer`
  * QueueName **required** `string`

#### Output
*Output schema unknown*

### UntagQueue



```js
amazonaws_sqs.UntagQueue({
  "TagKeys": [],
  "AccountNumber": 0,
  "QueueName": ""
}, context)
```

#### Input
* input `object`
  * TagKeys **required** `array`
  * AccountNumber **required** `integer`
  * QueueName **required** `string`

#### Output
*Output schema unknown*



## Definitions

### AWSAccountIdList
* AWSAccountIdList `array`
  * items

### ActionNameList
* ActionNameList `array`
  * items

### AddPermissionRequest
* AddPermissionRequest `object`: <p/>
  * AWSAccountIds **required**
    * items
  * Actions **required**
    * items
  * Label **required**
  * QueueUrl **required**

### AttributeNameList
* AttributeNameList `array`
  * items

### BatchEntryIdsNotDistinct


### BatchRequestTooLong


### BatchResultErrorEntry
* BatchResultErrorEntry `object`: Gives a detailed description of the result of an action on each entry in the request.
  * Code **required**
  * Id **required**
  * Message
  * SenderFault **required**

### BatchResultErrorEntryList
* BatchResultErrorEntryList `array`
  * items
    * Code **required**
    * Id **required**
    * Message
    * SenderFault **required**

### Binary
* Binary `string`

### BinaryList
* BinaryList `array`
  * items

### Boolean
* Boolean `boolean`

### BoxedInteger
* BoxedInteger `integer`

### ChangeMessageVisibilityBatchRequest
* ChangeMessageVisibilityBatchRequest `object`: <p/>
  * Entries **required**
    * items
      * Id **required**
      * ReceiptHandle **required**
      * VisibilityTimeout
  * QueueUrl **required**

### ChangeMessageVisibilityBatchRequestEntry
* ChangeMessageVisibilityBatchRequestEntry `object`: <p>Encloses a receipt handle and an entry id for each message in <code> <a>ChangeMessageVisibilityBatch</a>.</code> </p> <important> <p>All of the following list parameters must be prefixed with <code>ChangeMessageVisibilityBatchRequestEntry.n</code>, where <code>n</code> is an integer value starting with <code>1</code>. For example, a parameter list for this action might look like this:</p> </important> <p> <code>&amp;ChangeMessageVisibilityBatchRequestEntry.1.Id=change_visibility_msg_2</code> </p> <p> <code>&amp;ChangeMessageVisibilityBatchRequestEntry.1.ReceiptHandle=your_receipt_handle</code> </p> <p> <code>&amp;ChangeMessageVisibilityBatchRequestEntry.1.VisibilityTimeout=45</code> </p>
  * Id **required**
  * ReceiptHandle **required**
  * VisibilityTimeout

### ChangeMessageVisibilityBatchRequestEntryList
* ChangeMessageVisibilityBatchRequestEntryList `array`
  * items
    * Id **required**
    * ReceiptHandle **required**
    * VisibilityTimeout

### ChangeMessageVisibilityBatchResult
* ChangeMessageVisibilityBatchResult `object`: For each message in the batch, the response contains a <code> <a>ChangeMessageVisibilityBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.
  * Failed **required**
    * items
      * Code **required**
      * Id **required**
      * Message
      * SenderFault **required**
  * Successful **required**
    * items
      * Id **required**

### ChangeMessageVisibilityBatchResultEntry
* ChangeMessageVisibilityBatchResultEntry `object`: Encloses the <code>Id</code> of an entry in <code> <a>ChangeMessageVisibilityBatch</a>.</code> 
  * Id **required**

### ChangeMessageVisibilityBatchResultEntryList
* ChangeMessageVisibilityBatchResultEntryList `array`
  * items
    * Id **required**

### ChangeMessageVisibilityRequest
* ChangeMessageVisibilityRequest `object`
  * QueueUrl **required**
  * ReceiptHandle **required**
  * VisibilityTimeout **required**

### CreateQueueRequest
* CreateQueueRequest `object`: <p/>
  * tags
  * Attributes
  * QueueName **required**

### CreateQueueResult
* CreateQueueResult `object`: Returns the <code>QueueUrl</code> attribute of the created queue.
  * QueueUrl

### DeleteMessageBatchRequest
* DeleteMessageBatchRequest `object`: <p/>
  * Entries **required**
    * items
      * Id **required**
      * ReceiptHandle **required**
  * QueueUrl **required**

### DeleteMessageBatchRequestEntry
* DeleteMessageBatchRequestEntry `object`: Encloses a receipt handle and an identifier for it.
  * Id **required**
  * ReceiptHandle **required**

### DeleteMessageBatchRequestEntryList
* DeleteMessageBatchRequestEntryList `array`
  * items
    * Id **required**
    * ReceiptHandle **required**

### DeleteMessageBatchResult
* DeleteMessageBatchResult `object`: For each message in the batch, the response contains a <code> <a>DeleteMessageBatchResultEntry</a> </code> tag if the message is deleted or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message can't be deleted.
  * Failed **required**
    * items
      * Code **required**
      * Id **required**
      * Message
      * SenderFault **required**
  * Successful **required**
    * items
      * Id **required**

### DeleteMessageBatchResultEntry
* DeleteMessageBatchResultEntry `object`: Encloses the <code>Id</code> of an entry in <code> <a>DeleteMessageBatch</a>.</code> 
  * Id **required**

### DeleteMessageBatchResultEntryList
* DeleteMessageBatchResultEntryList `array`
  * items
    * Id **required**

### DeleteMessageRequest
* DeleteMessageRequest `object`: <p/>
  * QueueUrl **required**
  * ReceiptHandle **required**

### DeleteQueueRequest
* DeleteQueueRequest `object`: <p/>
  * QueueUrl **required**

### EmptyBatchRequest


### GetQueueAttributesRequest
* GetQueueAttributesRequest `object`: <p/>
  * AttributeNames
    * items
  * QueueUrl **required**

### GetQueueAttributesResult
* GetQueueAttributesResult `object`: A list of returned queue attributes.
  * Attributes

### GetQueueUrlRequest
* GetQueueUrlRequest `object`: <p/>
  * QueueName **required**
  * QueueOwnerAWSAccountId

### GetQueueUrlResult
* GetQueueUrlResult `object`: For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-api-responses.html">Interpreting Responses</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.
  * QueueUrl

### Integer
* Integer `integer`

### InvalidAttributeName


### InvalidBatchEntryId


### InvalidIdFormat


### InvalidMessageContents


### ListDeadLetterSourceQueuesRequest
* ListDeadLetterSourceQueuesRequest `object`: <p/>
  * MaxResults
  * NextToken
  * QueueUrl **required**

### ListDeadLetterSourceQueuesResult
* ListDeadLetterSourceQueuesResult `object`: A list of your dead letter source queues.
  * NextToken
  * queueUrls **required**
    * items

### ListQueueTagsRequest
* ListQueueTagsRequest `object`
  * QueueUrl **required**

### ListQueueTagsResult
* ListQueueTagsResult `object`
  * Tags

### ListQueuesRequest
* ListQueuesRequest `object`: <p/>
  * MaxResults
  * NextToken
  * QueueNamePrefix

### ListQueuesResult
* ListQueuesResult `object`: A list of your queues.
  * NextToken
  * QueueUrls
    * items

### Message
* Message `object`: An Amazon SQS message.
  * Attributes
  * Body
  * MD5OfBody
  * MD5OfMessageAttributes
  * MessageAttributes
  * MessageId
  * ReceiptHandle

### MessageAttributeName
* MessageAttributeName `string`

### MessageAttributeNameList
* MessageAttributeNameList `array`
  * items

### MessageAttributeValue
* MessageAttributeValue `object`: <p>The user-specified message attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code> <a>SendMessage</a>.</code> </p> <p> <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null. All parts of the message attribute, including <code>Name</code>, <code>Type</code>, and <code>Value</code>, are part of the message size restriction (256 KB or 262,144 bytes).</p>
  * BinaryListValues
    * items
  * BinaryValue
  * DataType **required**
  * StringListValues
    * items
  * StringValue

### MessageBodyAttributeMap
* MessageBodyAttributeMap `object`

### MessageBodySystemAttributeMap
* MessageBodySystemAttributeMap `object`

### MessageList
* MessageList `array`
  * items
    * Attributes
    * Body
    * MD5OfBody
    * MD5OfMessageAttributes
    * MessageAttributes
    * MessageId
    * ReceiptHandle

### MessageNotInflight


### MessageSystemAttributeMap
* MessageSystemAttributeMap `object`

### MessageSystemAttributeName
* MessageSystemAttributeName `string` (values: SenderId, SentTimestamp, ApproximateReceiveCount, ApproximateFirstReceiveTimestamp, SequenceNumber, MessageDeduplicationId, MessageGroupId, AWSTraceHeader)

### MessageSystemAttributeNameForSends
* MessageSystemAttributeNameForSends `string` (values: AWSTraceHeader)

### MessageSystemAttributeValue
* MessageSystemAttributeValue `object`: <p>The user-specified message system attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code> <a>SendMessage</a>.</code> </p> <p> <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null.</p>
  * BinaryListValues
    * items
  * BinaryValue
  * DataType **required**
  * StringListValues
    * items
  * StringValue

### OverLimit


### PurgeQueueInProgress


### PurgeQueueRequest
* PurgeQueueRequest `object`: <p/>
  * QueueUrl **required**

### QueueAttributeMap
* QueueAttributeMap `object`

### QueueAttributeName
* QueueAttributeName `string` (values: All, Policy, VisibilityTimeout, MaximumMessageSize, MessageRetentionPeriod, ApproximateNumberOfMessages, ApproximateNumberOfMessagesNotVisible, CreatedTimestamp, LastModifiedTimestamp, QueueArn, ApproximateNumberOfMessagesDelayed, DelaySeconds, ReceiveMessageWaitTimeSeconds, RedrivePolicy, FifoQueue, ContentBasedDeduplication, KmsMasterKeyId, KmsDataKeyReusePeriodSeconds, DeduplicationScope, FifoThroughputLimit)

### QueueDeletedRecently


### QueueDoesNotExist


### QueueNameExists


### QueueUrlList
* QueueUrlList `array`
  * items

### ReceiptHandleIsInvalid


### ReceiveMessageRequest
* ReceiveMessageRequest `object`: <p/>
  * AttributeNames
    * items
  * MaxNumberOfMessages
  * MessageAttributeNames
    * items
  * QueueUrl **required**
  * ReceiveRequestAttemptId
  * VisibilityTimeout
  * WaitTimeSeconds

### ReceiveMessageResult
* ReceiveMessageResult `object`: A list of received messages.
  * Messages
    * items
      * Attributes
      * Body
      * MD5OfBody
      * MD5OfMessageAttributes
      * MessageAttributes
      * MessageId
      * ReceiptHandle

### RemovePermissionRequest
* RemovePermissionRequest `object`: <p/>
  * Label **required**
  * QueueUrl **required**

### SendMessageBatchRequest
* SendMessageBatchRequest `object`: <p/>
  * Entries **required**
    * items
      * DelaySeconds
      * Id **required**
      * MessageAttributes
      * MessageBody **required**
      * MessageDeduplicationId
      * MessageGroupId
      * MessageSystemAttributes
  * QueueUrl **required**

### SendMessageBatchRequestEntry
* SendMessageBatchRequestEntry `object`: Contains the details of a single Amazon SQS message along with an <code>Id</code>.
  * DelaySeconds
  * Id **required**
  * MessageAttributes
  * MessageBody **required**
  * MessageDeduplicationId
  * MessageGroupId
  * MessageSystemAttributes

### SendMessageBatchRequestEntryList
* SendMessageBatchRequestEntryList `array`
  * items
    * DelaySeconds
    * Id **required**
    * MessageAttributes
    * MessageBody **required**
    * MessageDeduplicationId
    * MessageGroupId
    * MessageSystemAttributes

### SendMessageBatchResult
* SendMessageBatchResult `object`: For each message in the batch, the response contains a <code> <a>SendMessageBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.
  * Failed **required**
    * items
      * Code **required**
      * Id **required**
      * Message
      * SenderFault **required**
  * Successful **required**
    * items
      * Id **required**
      * MD5OfMessageAttributes
      * MD5OfMessageBody **required**
      * MD5OfMessageSystemAttributes
      * MessageId **required**
      * SequenceNumber

### SendMessageBatchResultEntry
* SendMessageBatchResultEntry `object`: Encloses a <code>MessageId</code> for a successfully-enqueued message in a <code> <a>SendMessageBatch</a>.</code> 
  * Id **required**
  * MD5OfMessageAttributes
  * MD5OfMessageBody **required**
  * MD5OfMessageSystemAttributes
  * MessageId **required**
  * SequenceNumber

### SendMessageBatchResultEntryList
* SendMessageBatchResultEntryList `array`
  * items
    * Id **required**
    * MD5OfMessageAttributes
    * MD5OfMessageBody **required**
    * MD5OfMessageSystemAttributes
    * MessageId **required**
    * SequenceNumber

### SendMessageRequest
* SendMessageRequest `object`: <p/>
  * DelaySeconds
  * MessageAttributes
  * MessageBody **required**
  * MessageDeduplicationId
  * MessageGroupId
  * MessageSystemAttributes
  * QueueUrl **required**

### SendMessageResult
* SendMessageResult `object`: The <code>MD5OfMessageBody</code> and <code>MessageId</code> elements.
  * MD5OfMessageAttributes
  * MD5OfMessageBody
  * MD5OfMessageSystemAttributes
  * MessageId
  * SequenceNumber

### SetQueueAttributesRequest
* SetQueueAttributesRequest `object`: <p/>
  * Attributes **required**
  * QueueUrl **required**

### String
* String `string`

### StringList
* StringList `array`
  * items

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items

### TagMap
* TagMap `object`

### TagQueueRequest
* TagQueueRequest `object`
  * QueueUrl **required**
  * Tags **required**

### TagValue
* TagValue `string`

### Token
* Token `string`

### TooManyEntriesInBatchRequest


### UnsupportedOperation


### UntagQueueRequest
* UntagQueueRequest `object`
  * QueueUrl **required**
  * TagKeys **required**
    * items


