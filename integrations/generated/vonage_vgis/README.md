# @datafire/vonage_vgis

Client library for Vonage Integration Suite

## Installation and Usage
```bash
npm install --save @datafire/vonage_vgis
```
```js
let vonage_vgis = require('@datafire/vonage_vgis').create();

.then(data => {
  console.log(data);
});
```

## Description

The Vonage Integration Suite API enables call control and webhooks for call events.

Your application must subscribe to the VonageIntegrationSuite API suite to use this API.


## Actions

### getUser
User info


```js
vonage_vgis.getUser(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [User](#user)

### getAccount
Account info


```js
vonage_vgis.getAccount(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Account](#account)

### listCalls
Lists currently active calls


```js
vonage_vgis.listCalls({}, context)
```

#### Input
* input `object`
  * fromDate `integer`: Return calls that occurred after this point in time
  * toDate `integer`: Return calls that occurred before this point in time
  * direction `string` (values: INBOUND, OUTBOUND): Filter by call direction. For multiple criteria, seperate values by a comma.
  * states `string` (values: INITIALIZING, RINGING, ACTIVE, HELD, REMOTE_HELD): Filter calls by state. For multiple criteria, seperate values by a comma.
  * offset `integer`: Page number of calls to return
  * size `integer`: Return this amount of calls in the response
  * order `string` (values: DESC, ASC): Sort in either ascending or descending order
  * sort `string`: Sort calls by property

#### Output
* output `array`
  * items [Call](#call)

### createCall
Place a call


```js
vonage_vgis.createCall({
  "body": {
    "phoneNumber": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CallCreate](#callcreate)

#### Output
* output `array`
  * items [Call](#call)

### getCallsCount
Get calls count


```js
vonage_vgis.getCallsCount({}, context)
```

#### Input
* input `object`
  * fromDate `integer`: Return calls that occurred after this point in time
  * toDate `integer`: Return calls that occurred before this point in time
  * direction `string` (values: INBOUND, OUTBOUND): Filter by call direction. For multiple criteria, seperate values by a comma.
  * states `string` (values: INITIALIZING, RINGING, ACTIVE, HELD, REMOTE_HELD): Filter calls by state. For multiple criteria, seperate values by a comma.

#### Output
* output [EventsCount](#eventscount)

### destroyCall
End a call


```js
vonage_vgis.destroyCall({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier of the call

#### Output
* output `array`
  * items [Call](#call)

### getRoles
Get a call


```js
vonage_vgis.getRoles({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier of the call

#### Output
* output `array`
  * items [Call](#call)

### callAnswer
Answer call (On supported devices)


```js
vonage_vgis.callAnswer({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier of the call

#### Output
* output [Call](#call)

### callUnold
Unhold


```js
vonage_vgis.callUnold({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier of the call

#### Output
* output [Call](#call)

### callHold
Put call on hold


```js
vonage_vgis.callHold({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier of the call

#### Output
* output [Call](#call)

### callTransfer
Transfer call


```js
vonage_vgis.callTransfer({
  "id": "",
  "body": {
    "phoneNumber": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier of the call
  * body **required** [CallTransfer](#calltransfer)

#### Output
* output [Call](#call)

### callVMTransfer
Send call to voicemail


```js
vonage_vgis.callVMTransfer({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier of the call

#### Output
* output [Call](#call)

### listEvents
List events


```js
vonage_vgis.listEvents({}, context)
```

#### Input
* input `object`
  * types `string` (values: CALL): Record type
  * fromDate `integer`: Return events that occurred after this point in time
  * toDate `integer`: Return events that occurred before this point in time
  * direction `string` (values: INBOUND, OUTBOUND): Filter by event direction
  * states `string` (values: INITIALIZING, RINGING, ACTIVE, HELD, REMOTE_HELD, DETACHED, REJECTED, CANCELLED, ANSWERED, MISSED): Filter events by state
  * offset `integer`: Page number of events to return
  * size `integer`: Return this amount of events in the response
  * order `string` (values: DESC, ASC): Sort in either ascending or descending order'
  * sort `string`: Sort events by property

#### Output
* output `array`
  * items [Event](#event)

### getEventsCount
Get events count


```js
vonage_vgis.getEventsCount({}, context)
```

#### Input
* input `object`
  * fromDate `integer`: Return events that occurred after this point in time
  * toDate `integer`: Return events that occurred before this point in time
  * direction `string` (values: INBOUND, OUTBOUND): Filter by event direction
  * states `string` (values: INITIALIZING, RINGING, ACTIVE, HELD, REMOTE_HELD): Filter events by state

#### Output
* output [EventsCount](#eventscount)

### getEvent
Get event


```js
vonage_vgis.getEvent({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier of the event

#### Output
* output `array`
  * items [Event](#event)

### listWebhooks
List web hooks


```js
vonage_vgis.listWebhooks(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Webhook](#webhook)

### createWebhook
Create a new webhook subscription


```js
vonage_vgis.createWebhook({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [WebhookCreate](#webhookcreate)

#### Output
* output [Webhook](#webhook)

### destroyWebhook
Remove a web hook


```js
vonage_vgis.destroyWebhook({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier of the webhook

#### Output
*Output schema unknown*

### viewWebhook
Get web hook details


```js
vonage_vgis.viewWebhook({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique identifier of the webhook

#### Output
* output [Webhook](#webhook)

### renewWebhook
Renews a web hook


```js
vonage_vgis.renewWebhook({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Webhook ID

#### Output
* output [Webhook](#webhook)



## Definitions

### Account
* Account `object`
  * id `integer`: Unique identifier of the account
  * name `string`: Name of the account
  * org `string`: Organization of the account
  * status `string` (values: PENDING, ACTIVE, DELETED, ARCHIVED): Status of the account
  * ucis `array`
    * items `object`
      * health `object`
        * message `string`
        * status `string`
      * id `integer`
      * type `string`
      * ucpAccountId `string`
      * ucpLabel `string`

### Call
* Call `object`
  * accountId **required** `integer`: Unique identifier of the account
  * answerTime `string`: Time to answer the call
  * callerId `string`: Remote caller ID
  * direction **required** `string` (values: INBOUND, OUTBOUND): Direction of the call
  * duration **required** `integer`: Duration of the call in milliseconds
  * endTime `string`: End time of the call
  * externalId `string`: External identifier of the call
  * id **required** `integer`: Unique identifier of the call
  * phoneNumber **required** `string`: Unique identifier of the account
  * startTime **required** `string`: Start time of the call
  * state **required** `string` (values: INITIALIZING, RINGING, ACTIVE, HELD, REMOTE_HELD, DETACHED, REJECTED, CANCELLED, ANSWERED, MISSED): Status of the call
  * type **required** `string` (values: CALL): Record type
  * uciId **required** `integer`: Unique identifier of communications provider
  * userId **required** `integer`: Unique identifier of the user

### CallCreate
* CallCreate `object`
  * phoneNumber **required** `string`: Phone number to call

### CallTransfer
* CallTransfer `object`
  * phoneNumber **required** `string`: Phone number to transfer to

### Error
* Error `object`
  * field `string`
  * message `string`

### ErrorResponse
* ErrorResponse `object`
  * errorCode `string`
  * errorMessage `string`
  * errors `array`
    * items [Error](#error)

### Event
* Event `object`
  * accountId **required** `integer`: Unique identifier of the account
  * answerTime `string`: Time to answer the event
  * callerId `string`: Remote caller ID
  * direction **required** `string` (values: INBOUND, OUTBOUND): Direction of the event
  * duration `integer`: Duration of the call in milliseconds
  * endTime `string`: End time of the event
  * externalId `string`: External identifier of the event
  * id **required** `integer`: Unique identifier of the event
  * phoneNumber **required** `string`: Unique identifier of the account
  * smsData `string`
  * startTime **required** `string`: Start time of the event
  * state **required** `string` (values: INITIALIZING, RINGING, ACTIVE, HELD, REMOTE_HELD, DETACHED, REJECTED, CANCELLED, ANSWERED, MISSED): Status of the event
  * type **required** `string` (values: CALL): Record type
  * uciId **required** `integer`: Unique identifier of communications provider
  * userId **required** `integer`: Unique identifier of the user

### EventsCount
* EventsCount `object`
  * count `integer`: Number of events found

### User
* User `object`
  * accountId `integer`: Unique identifier of the user's account
  * acountLabel `string`: The name of the user's account
  * contactNumber `string`: Contact number of the user
  * emailAddress `string`: Email address of the user
  * firstName `string`: First name of the user
  * id `integer`: Unique identifier of the user
  * lastName `string`: Last name of the user
  * roles `array`
    * items `object`
      * code `string`: Code for the role
      * name `string`: Name for the role
  * status `string` (values: PENDING, ACTIVE, DELETED, ARCHIVED): Status of the user
  * ucis `array`
    * items `object`
      * health `object`
        * message `string`
        * status `string`
      * id `integer`
      * type `string`
      * ucpLabel `string`

### Webhook
* Webhook `object`
  * accountId `string`: Unique identifier of the account
  * createdAt `string`: Created time for the webhook
  * events `array`: Subscribed events for the webhook
    * items `string` (values: CALL)
  * expireAt `string`: Expiration time for the webhook
  * id `string`: Unique identifier for the webhook
  * metadataPolicy `string` (values: NONE, HEADER, BODY): Metadata policy for the webhook
  * purgeAt `string`: Scheduled purge time for the webhook
  * renewedAt `string`: Last renewed time for the webhook
  * signingAlgo `string` (values: HMAC_SHA256, NONE): Signing algorithm for the webhook
  * signingKey `string`: Signing key for the webhook
  * statistics `object`
    * failed `boolean`: Current delivery status
    * totalAttempts `integer`: Total delivery attempts
    * totalFailures `integer`: Total failed deliveries
    * totalSuccesses `integer`: Total successful deliveries
  * status `string` (values: ACTIVE, PAUSED): Status for the webhook
  * url `string`: Destination URL for events
  * userId `string`: Unique identifier of the user

### WebhookCreate
* WebhookCreate `object`
  * events `array`: Events to subscribe to the webhook
    * items `string` (values: CALL)
  * metadataPolicy `string` (values: NONE, HEADER, BODY): Metadata policy for the webhook
  * signingAlgo `string` (values: HMAC_SHA256): Signing algorithm for the webhook
  * signingKey `string`: Signing key for the webhook
  * url `string`: Destination URL for events


