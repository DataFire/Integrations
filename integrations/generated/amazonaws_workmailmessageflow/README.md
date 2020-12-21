# @datafire/amazonaws_workmailmessageflow

Client library for Amazon WorkMail Message Flow

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_workmailmessageflow
```
```js
let amazonaws_workmailmessageflow = require('@datafire/amazonaws_workmailmessageflow').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The WorkMail Message Flow API provides access to email messages as they are being sent and received by a WorkMail organization.

## Actions

### GetRawMessageContent



```js
amazonaws_workmailmessageflow.GetRawMessageContent({
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * messageId **required** `string`

#### Output
* output [GetRawMessageContentResponse](#getrawmessagecontentresponse)



## Definitions

### GetRawMessageContentRequest
* GetRawMessageContentRequest `object`

### GetRawMessageContentResponse
* GetRawMessageContentResponse `object`
  * messageContent **required**

### ResourceNotFoundException


### messageContentBlob
* messageContentBlob `string`

### messageIdType
* messageIdType `string`


