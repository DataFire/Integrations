# @datafire/amazonaws_connect

Client library for Amazon Connect Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_connect
```
```js
let amazonaws_connect = require('@datafire/amazonaws_connect').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_connect.StartOutboundVoiceContact({
  "DestinationPhoneNumber": "",
  "ContactFlowId": "",
  "InstanceId": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Amazon Connect API Reference provides descriptions, syntax, and usage examples for each of the Amazon Connect actions, data types, parameters, and errors. Amazon Connect is a cloud-based contact center solution that makes it easy to set up and manage a customer contact center and provide reliable customer engagement at any scale.

## Actions

### StartOutboundVoiceContact



```js
amazonaws_connect.StartOutboundVoiceContact({
  "DestinationPhoneNumber": "",
  "ContactFlowId": "",
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * Attributes [Attributes](#attributes)
  * ClientToken [ClientToken](#clienttoken)
  * ContactFlowId **required** [ContactFlowId](#contactflowid)
  * DestinationPhoneNumber **required** [PhoneNumber](#phonenumber)
  * InstanceId **required** [InstanceId](#instanceid)
  * QueueId [QueueId](#queueid)
  * SourcePhoneNumber [PhoneNumber](#phonenumber)

#### Output
* output [StartOutboundVoiceContactResponse](#startoutboundvoicecontactresponse)

### StopContact



```js
amazonaws_connect.StopContact({
  "ContactId": "",
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * ContactId **required** [ContactId](#contactid)
  * InstanceId **required** [InstanceId](#instanceid)

#### Output
* output [StopContactResponse](#stopcontactresponse)



## Definitions

### AttributeName
* AttributeName `string`: Key for the key value pair to be used for additional attributes.

### AttributeValue
* AttributeValue `string`: Value for the key value pair to be used for additional attributes.

### Attributes
* Attributes `array`: Additional attributes can be provided in the request using this field. This will be passed to the contact flow execution. Client can make use of this additional info in their contact flow.
  * items `object`
    * key [AttributeName](#attributename)
    * value [AttributeValue](#attributevalue)

### ClientToken
* ClientToken `string`: Dedupe token to be provided by the client. This token is used to avoid duplicate calls to the customer.

### ContactFlowId
* ContactFlowId `string`: Amazon resource name for the contact flow to be executed to handle the current call.

### ContactId
* ContactId `string`: Amazon Connect contact identifier. An unique ContactId will be generated for each contact request.

### ContactNotFoundException
* ContactNotFoundException `object`: The contact with the specified ID is not active or does not exist.
  * Message [Message](#message)

### DestinationNotAllowedException
* DestinationNotAllowedException `object`: Outbound calls to the destination number are not allowed for your instance. You can request that the country be included in the allowed countries for your instance by submitting a <a href="https://console.aws.amazon.com/support/v1#/case/create?issueType=service-limit-increase">Service Limit Increase</a>.
  * Message [Message](#message)

### InstanceId
* InstanceId `string`: Amazon Connect Organization ARN. A client must provide its organization ARN in order to place a call. This defines the call from organization.

### InternalServiceException
* InternalServiceException `object`: Request processing failed due to an error or failure with the service.
  * Message [Message](#message)

### InvalidParameterException
* InvalidParameterException `object`: One or more of the parameters provided to the operation are not valid.
  * Message [Message](#message)

### InvalidRequestException
* InvalidRequestException `object`: The request is not valid.
  * Message [Message](#message)

### LimitExceededException
* LimitExceededException `object`: The limit exceeded the maximum allowed active calls in a queue.
  * Message [Message](#message)

### Message
* Message `string`

### OutboundContactNotPermittedException
* OutboundContactNotPermittedException `object`: The contact is not permitted because outbound calling is not enabled for the instance.
  * Message [Message](#message)

### PhoneNumber
* PhoneNumber `string`: End customer's phone number to call.

### QueueId
* QueueId `string`: Identifier of the queue to be used for the contact routing.

### ResourceNotFoundException
* ResourceNotFoundException `object`: The specified resource was not found.
  * Message [Message](#message)

### StartOutboundVoiceContactRequest
* StartOutboundVoiceContactRequest `object`
  * Attributes [Attributes](#attributes)
  * ClientToken [ClientToken](#clienttoken)
  * ContactFlowId **required** [ContactFlowId](#contactflowid)
  * DestinationPhoneNumber **required** [PhoneNumber](#phonenumber)
  * InstanceId **required** [InstanceId](#instanceid)
  * QueueId [QueueId](#queueid)
  * SourcePhoneNumber [PhoneNumber](#phonenumber)

### StartOutboundVoiceContactResponse
* StartOutboundVoiceContactResponse `object`
  * ContactId [ContactId](#contactid)

### StopContactRequest
* StopContactRequest `object`
  * ContactId **required** [ContactId](#contactid)
  * InstanceId **required** [InstanceId](#instanceid)

### StopContactResponse
* StopContactResponse `object`


