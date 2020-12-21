# @datafire/amazonaws_connectparticipant

Client library for Amazon Connect Participant Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_connectparticipant
```
```js
let amazonaws_connectparticipant = require('@datafire/amazonaws_connectparticipant').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>Amazon Connect is a cloud-based contact center solution that makes it easy to set up and manage a customer contact center and provide reliable customer engagement at any scale.</p> <p>Amazon Connect enables customer contacts through voice or chat.</p> <p>The APIs described here are used by chat participants, such as agents and customers.</p>

## Actions

### CreateParticipantConnection



```js
amazonaws_connectparticipant.CreateParticipantConnection({
  "Type": []
}, context)
```

#### Input
* input `object`
  * Type **required** `array`: Type of connection information required.
    * items [ConnectionType](#connectiontype)

#### Output
* output [CreateParticipantConnectionResponse](#createparticipantconnectionresponse)

### DisconnectParticipant



```js
amazonaws_connectparticipant.DisconnectParticipant({}, context)
```

#### Input
* input `object`
  * ClientToken `string`: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.

#### Output
* output [DisconnectParticipantResponse](#disconnectparticipantresponse)

### SendEvent



```js
amazonaws_connectparticipant.SendEvent({
  "ContentType": ""
}, context)
```

#### Input
* input `object`
  * ClientToken `string`: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * Content `string`: The content of the event to be sent (for example, message text). This is not yet supported.
  * ContentType **required** `string`: <p>The content type of the request. Supported types are:</p> <ul> <li> <p>application/vnd.amazonaws.connect.event.typing</p> </li> <li> <p>application/vnd.amazonaws.connect.event.connection.acknowledged</p> </li> </ul>

#### Output
* output [SendEventResponse](#sendeventresponse)

### SendMessage



```js
amazonaws_connectparticipant.SendMessage({
  "ContentType": "",
  "Content": ""
}, context)
```

#### Input
* input `object`
  * ClientToken `string`: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * Content **required** `string`: The content of the message.
  * ContentType **required** `string`: The type of the content. Supported types are text/plain.

#### Output
* output [SendMessageResponse](#sendmessageresponse)

### GetTranscript



```js
amazonaws_connectparticipant.GetTranscript({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ContactId `string`: The contactId from the current contact chain for which transcript is needed.
  * MaxResults `integer`: The maximum number of results to return in the page. Default: 10. 
  * NextToken `string`: The pagination token. Use the value returned previously in the next subsequent request to retrieve the next set of results.
  * ScanDirection `string` (values: FORWARD, BACKWARD): The direction from StartPosition from which to retrieve message. Default: BACKWARD when no StartPosition is provided, FORWARD with StartPosition. 
  * SortOrder `string` (values: DESCENDING, ASCENDING): The sort order for the records. Default: DESCENDING.
  * StartPosition `object`: A filtering option for where to start. For example, if you sent 100 messages, start with message 50. 
    * AbsoluteTime
    * Id
    * MostRecent

#### Output
* output [GetTranscriptResponse](#gettranscriptresponse)



## Definitions

### AccessDeniedException


### ChatContent
* ChatContent `string`

### ChatContentType
* ChatContentType `string`

### ChatItemId
* ChatItemId `string`

### ChatItemType
* ChatItemType `string` (values: MESSAGE, EVENT, CONNECTION_ACK)

### ClientToken
* ClientToken `string`

### ConnectionCredentials
* ConnectionCredentials `object`: Connection credentials. 
  * ConnectionToken
  * Expiry

### ConnectionType
* ConnectionType `string` (values: WEBSOCKET, CONNECTION_CREDENTIALS)

### ConnectionTypeList
* ConnectionTypeList `array`
  * items [ConnectionType](#connectiontype)

### ContactId
* ContactId `string`

### CreateParticipantConnectionRequest
* CreateParticipantConnectionRequest `object`
  * Type **required**
    * items [ConnectionType](#connectiontype)

### CreateParticipantConnectionResponse
* CreateParticipantConnectionResponse `object`
  * ConnectionCredentials
    * ConnectionToken
    * Expiry
  * Websocket
    * ConnectionExpiry
    * Url

### DisconnectParticipantRequest
* DisconnectParticipantRequest `object`
  * ClientToken

### DisconnectParticipantResponse
* DisconnectParticipantResponse `object`

### DisplayName
* DisplayName `string`

### GetTranscriptRequest
* GetTranscriptRequest `object`
  * ContactId
  * MaxResults
  * NextToken
  * ScanDirection
  * SortOrder
  * StartPosition
    * AbsoluteTime
    * Id
    * MostRecent

### GetTranscriptResponse
* GetTranscriptResponse `object`
  * InitialContactId
  * NextToken
  * Transcript
    * items [Item](#item)

### ISO8601Datetime
* ISO8601Datetime `string`

### Instant
* Instant `string`

### InternalServerException


### Item
* Item `object`: An item - message or event - that has been sent. 
  * AbsoluteTime
  * Content
  * ContentType
  * DisplayName
  * Id
  * ParticipantId
  * ParticipantRole
  * Type

### MaxResults
* MaxResults `integer`

### MostRecent
* MostRecent `integer`

### NextToken
* NextToken `string`

### ParticipantId
* ParticipantId `string`

### ParticipantRole
* ParticipantRole `string` (values: AGENT, CUSTOMER, SYSTEM)

### ParticipantToken
* ParticipantToken `string`

### PreSignedConnectionUrl
* PreSignedConnectionUrl `string`

### ScanDirection
* ScanDirection `string` (values: FORWARD, BACKWARD)

### SendEventRequest
* SendEventRequest `object`
  * ClientToken
  * Content
  * ContentType **required**

### SendEventResponse
* SendEventResponse `object`
  * AbsoluteTime
  * Id

### SendMessageRequest
* SendMessageRequest `object`
  * ClientToken
  * Content **required**
  * ContentType **required**

### SendMessageResponse
* SendMessageResponse `object`
  * AbsoluteTime
  * Id

### SortKey
* SortKey `string` (values: DESCENDING, ASCENDING)

### StartPosition
* StartPosition `object`: A filtering option for where to start. For example, if you sent 100 messages, start with message 50. 
  * AbsoluteTime
  * Id
  * MostRecent

### ThrottlingException


### Transcript
* Transcript `array`
  * items [Item](#item)

### ValidationException


### Websocket
* Websocket `object`: The websocket for the participant's connection.
  * ConnectionExpiry
  * Url


