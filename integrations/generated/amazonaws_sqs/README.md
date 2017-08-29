# @datafire/amazonaws_sqs

Client library for Amazon Simple Queue Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_sqs
```

```js
let datafire = require('datafire');
let amazonaws_sqs = require('@datafire/amazonaws_sqs').create();

amazonaws_sqs.AddPermission({}).then(data => {
  console.log(data);
})
```

## Description
<p>Welcome to the <i>Amazon Simple Queue Service API Reference</i>.</p> <p>Amazon Simple Queue Service (Amazon SQS) is a reliable, highly-scalable hosted queue for storing messages as they travel between applications or microservices. Amazon SQS moves data between distributed application components and helps you decouple these components.</p> <note> <p> <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues.html">Standard queues</a> are available in all regions. <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO queues</a> are available in US West (Oregon) and US East (Ohio).</p> </note> <p>You can use <a href="http://aws.amazon.com/tools/#sdk">AWS SDKs</a> to access Amazon SQS using your favorite programming language. The SDKs perform tasks such as the following automatically:</p> <ul> <li> <p>Cryptographically sign your service requests</p> </li> <li> <p>Retry requests</p> </li> <li> <p>Handle error responses</p> </li> </ul> <p> <b>Additional Information</b> </p> <ul> <li> <p> <a href="http://aws.amazon.com/sqs/">Amazon SQS Product Page</a> </p> </li> <li> <p> <i>Amazon SQS Developer Guide</i> </p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/MakingRequestsArticle.html">Making API Requests</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-attributes.html">Using Amazon SQS Message Attributes</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">Using Amazon SQS Dead Letter Queues</a> </p> </li> </ul> </li> <li> <p> <i>Amazon Web Services General Reference</i> </p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#sqs_region">Regions and Endpoints</a> </p> </li> </ul> </li> </ul>

## Actions
### AddPermission



```js
amazonaws_sqs.AddPermission({}, context)
```


### ChangeMessageVisibility



```js
amazonaws_sqs.ChangeMessageVisibility({}, context)
```


### ChangeMessageVisibilityBatch



```js
amazonaws_sqs.ChangeMessageVisibilityBatch({}, context)
```


### CreateQueue



```js
amazonaws_sqs.CreateQueue({}, context)
```


### DeleteMessage



```js
amazonaws_sqs.DeleteMessage({}, context)
```


### DeleteMessageBatch



```js
amazonaws_sqs.DeleteMessageBatch({}, context)
```


### DeleteQueue



```js
amazonaws_sqs.DeleteQueue({}, context)
```


### GetQueueAttributes



```js
amazonaws_sqs.GetQueueAttributes({}, context)
```


### GetQueueUrl



```js
amazonaws_sqs.GetQueueUrl({}, context)
```


### ListDeadLetterSourceQueues



```js
amazonaws_sqs.ListDeadLetterSourceQueues({}, context)
```


### ListQueues



```js
amazonaws_sqs.ListQueues({}, context)
```


### PurgeQueue



```js
amazonaws_sqs.PurgeQueue({}, context)
```


### ReceiveMessage



```js
amazonaws_sqs.ReceiveMessage({}, context)
```


### RemovePermission



```js
amazonaws_sqs.RemovePermission({}, context)
```


### SendMessage



```js
amazonaws_sqs.SendMessage({}, context)
```


### SendMessageBatch



```js
amazonaws_sqs.SendMessageBatch({}, context)
```


### SetQueueAttributes



```js
amazonaws_sqs.SetQueueAttributes({}, context)
```


