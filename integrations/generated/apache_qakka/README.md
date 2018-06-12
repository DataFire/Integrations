# @datafire/apache_qakka

Client library for Qakka

## Installation and Usage
```bash
npm install --save @datafire/apache_qakka
```
```js
let apache_qakka = require('@datafire/apache_qakka').create();

apache_qakka.getListOfQueues(null).then(data => {
  console.log(data);
});
```

## Description

API for Qakka Queue System

## Actions

### getListOfQueues
Get list of all Queues.


```js
apache_qakka.getListOfQueues(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ApiResponse](#apiresponse)

### createQueue
Create new queue.


```js
apache_qakka.createQueue(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ApiResponse](#apiresponse)

### deleteQueue
Delete Queue.


```js
apache_qakka.deleteQueue({
  "queueName": ""
}, context)
```

#### Input
* input `object`
  * queueName **required** `string`
  * confirm `boolean`

#### Output
* output [ApiResponse](#apiresponse)

### getQueueConfig
Get Queue config.


```js
apache_qakka.getQueueConfig({
  "queueName": ""
}, context)
```

#### Input
* input `object`
  * queueName **required** `string`: Name of Queue

#### Output
* output [ApiResponse](#apiresponse)

### updateQueueConfig
Update Queue configuration.


```js
apache_qakka.updateQueueConfig({
  "queueName": ""
}, context)
```

#### Input
* input `object`
  * queueName **required** `string`

#### Output
* output [ApiResponse](#apiresponse)

### getMessageData
Get data associated with a Queue Message.


```js
apache_qakka.getMessageData({
  "queueName": "",
  "queueMessageId": ""
}, context)
```

#### Input
* input `object`
  * queueName **required** `string`: Name of Queue
  * queueMessageId **required** `string`: ID of Queue Message for which data is to be returned

#### Output
* output [ApiResponse](#apiresponse)

### getNextMessages
Get next Queue Messages from a Queue


```js
apache_qakka.getNextMessages({
  "queueName": ""
}, context)
```

#### Input
* input `object`
  * queueName **required** `string`: Name of Queue
  * count `string`: Number of messages to get

#### Output
* output [ApiResponse](#apiresponse)

### sendMessageBinary
Send Queue Message with a binary data (blob) payload.


```js
apache_qakka.sendMessageBinary({
  "queueName": "",
  "contentType": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * queueName **required** `string`: Name of Queue
  * regions `string`: Regions to which message is to be sent
  * delay `string`
  * expiration `string`
  * contentType **required** `string`: Content type of the data to be sent with Queue Message
  * body **required** `array`
    * items `string`

#### Output
* output [ApiResponse](#apiresponse)

### ackMessage
Acknowledge that Queue Message has been processed.


```js
apache_qakka.ackMessage({
  "queueName": "",
  "queueMessageId": ""
}, context)
```

#### Input
* input `object`
  * queueName **required** `string`: Name of Queue
  * queueMessageId **required** `string`: ID of Queue Message to be acknowledged

#### Output
* output [ApiResponse](#apiresponse)

### status
Status of webapp.


```js
apache_qakka.status(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`



## Definitions

### ApiResponse
* ApiResponse `object`: Response returned by most Queue API calls.
  * count `integer`: Count of Queues or QueueMessages returned by the call.
  * message `string`: Informative message intended for client.
  * queueMessages `array`: Queues Messages returned by the call, or empty if not applicable.
    * items [QueueMessage](#queuemessage)
  * queues `array`: Queues returned but the call, or empty if not applicable.
    * items [Queue](#queue)

### Queue
* Queue `object`: Specifies the configuration for a Queue.
  * name **required** `string`: Name of queue, must be unique.

### QueueMessage
* QueueMessage `object`: A Queue Message
  * contentType `string`: Content-type of data associated with QueueMessage.
  * createDate `integer`: Date that message was received by system.
  * data `string`: Embedded JSON to be sent with Queue Message.
  * href `string`: URL of data associated with Queue Message (if not embedded JSON)
  * messageId `string`: UUID of Message Data associated with this Queue Message
  * queueMessageId `string`: UUID of Queue Message in local region.
  * queueName **required** `string`: Name of Queue for message.
  * receivingRegion `string`: Regions to which message will be sent
  * sendingRegion `string`: Region from which was sent


