# @datafire/nexmo_conversation

Client library for Conversation API

## Installation and Usage
```bash
npm install --save @datafire/nexmo_conversation
```
```js
let nexmo_conversation = require('@datafire/nexmo_conversation').create({
  bearerAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Conversation API enables you to build conversation features where communication can take place across multiple mediums including IP Messaging, PSTN Voice, SMS and WebRTC Audio and Video. The context of the conversations is maintained though each communication event taking place within a conversation, no matter the medium.

## Actions

### listConversations
<div class="Vlt-callout Vlt-callout--warning"> <i></i> <div class="Vlt-callout__content"> <p><strong>This API endpoint is deprecated. Please use <a href="/api/conversation.v2#get-conversations">/v0.2/conversations</a></strong>.<br />This endpoint will return a maximum of 100 items.</p> </div> </div>
List all conversations associated with your application.  This endpoint required an admin JWT. To find all conversations for the currently logged in user, see [GET /users/:id/conversations](#getuserConversations)



```js
nexmo_conversation.listConversations({}, context)
```

#### Input
* input `object`
  * date_start `string`: Return the records that occurred after this point in time.
  * date_end `string`: Return the records that occurred before this point in time.
  * page_size `number`: Return this amount of records in the response
  * record_index `number`: Return calls from this index in the response
  * order `string` (values: asc, desc, ASC, DESC): Return the records in ascending or descending order.

#### Output
* output `object`
  * _embedded **required** `object`: A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
    * conversations **required** `array`
      * items `object`
        * _links `object`
          * self `object`
        * name **required** [name_conversation](#name_conversation)
        * uuid **required** [conversation_id](#conversation_id)
  * _links **required** [_links_conversations_list](#_links_conversations_list)
  * count **required** `number`: The total number of records returned by your request.
  * page_size **required** [page_size](#page_size)
  * record_index **required** [record_index](#record_index)

### createConversation
Create a conversation


```js
nexmo_conversation.createConversation({}, context)
```

#### Input
* input `object`
  * body `object`
    * display_name [display_name](#display_name)
    * image_url [image_url](#image_url)
    * name [name_conversation](#name_conversation)
    * properties [conversation_properties](#conversation_properties)

#### Output
* output `object`
  * href **required** [href_conversation](#href_conversation)
  * id **required** [conversation_id](#conversation_id)

### deleteConversation
Delete a conversation


```js
nexmo_conversation.deleteConversation({
  "conversation_id": ""
}, context)
```

#### Input
* input `object`
  * conversation_id **required** `string`: Conversation ID

#### Output
* output `object`: Empty JSON payload

### retrieveConversation
Retrieve a conversation


```js
nexmo_conversation.retrieveConversation({
  "conversation_id": ""
}, context)
```

#### Input
* input `object`
  * conversation_id **required** `string`: Conversation ID

#### Output
* output `object`: Conversation Object
  * _links [_links_conversation](#_links_conversation)
  * api_key `string`: The API key for your account
  * display_name [display_name](#display_name)
  * members `array`: Users associated to this conversation as members
    * items `object`
      * channel [channel](#channel)
      * initiator [initiator](#initiator)
      * member_id [member_id](#member_id)
      * name [name_user](#name_user)
      * state [member_state](#member_state)
      * timestamp [timestamp_res_member](#timestamp_res_member)
      * user_id [user_id](#user_id)
  * name [name_conversation](#name_conversation)
  * numbers `object`
  * properties `object`
    * video `boolean`
  * sequence_number `string`: The last Event ID in this conversation. This ID can be used to [retrieve a specific event](#getEvent)
  * timestamp [timestamp_res_conversation](#timestamp_res_conversation)
  * uuid **required** [conversation_id](#conversation_id)

### replaceConversation
Update a conversation


```js
nexmo_conversation.replaceConversation({
  "conversation_id": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * display_name [display_name](#display_name)
    * image_url [image_url](#image_url)
    * name [name_conversation](#name_conversation)
    * properties [conversation_properties](#conversation_properties)
  * conversation_id **required** `string`: Conversation ID

#### Output
* output `object`
  * href **required** [href_conversation](#href_conversation)
  * id **required** [conversation_id](#conversation_id)

### getEvents
<div class="Vlt-callout Vlt-callout--warning"> <i></i> <div class="Vlt-callout__content"> <p><strong>This API endpoint is deprecated. Please use <a href="/api/conversation.v2#get-events">/v0.2/events</a></strong><br />This endpoint will return a maximum of 100 items.</p> </div> </div>



```js
nexmo_conversation.getEvents({
  "conversation_id": ""
}, context)
```

#### Input
* input `object`
  * conversation_id **required** `string`: Conversation ID

#### Output
* output `array`
  * items [event_retrieved](#event_retrieved)

### createEvent
Create an event


```js
nexmo_conversation.createEvent({
  "conversation_id": ""
}, context)
```

#### Input
* input `object`
  * body `object`: Create New Event Request Payload Object
    * body [event_body](#event_body)
    * from **required** [member_id](#member_id)
    * to [member_id](#member_id)
    * type **required** [event_type](#event_type)
  * conversation_id **required** `string`: Conversation ID

#### Output
* output `object`: Create New Event Response Payload Object
  * href [href_event](#href_event)
  * id [event_id](#event_id)
  * timestamp [timestamp_res_event](#timestamp_res_event)

### deleteEvent
Delete an event


```js
nexmo_conversation.deleteEvent({
  "conversation_id": "",
  "event_id": ""
}, context)
```

#### Input
* input `object`
  * conversation_id **required** `string`: Conversation ID
  * event_id **required** `string`: Event ID

#### Output
* output `object`: Empty JSON payload

### getEvent
Retrieve an event


```js
nexmo_conversation.getEvent({
  "conversation_id": "",
  "event_id": ""
}, context)
```

#### Input
* input `object`
  * conversation_id **required** `string`: Conversation ID
  * event_id **required** `string`: Event ID

#### Output
* output [event_retrieved](#event_retrieved)

### getMembers
<div class="Vlt-callout Vlt-callout--warning"> <i></i> <div class="Vlt-callout__content"> <p><strong>This API endpoint is deprecated. Please use <a href="/api/conversation.v2#get-members">/v0.2/members</a></strong><br />This endpoint will return a maximum of 100 items.</p> </div> </div>



```js
nexmo_conversation.getMembers({
  "conversation_id": ""
}, context)
```

#### Input
* input `object`
  * conversation_id **required** `string`: Conversation ID

#### Output
* output `array`
  * items `object`
    * name **required** [name_user](#name_user)
    * state **required** [member_state](#member_state)
    * user_id **required** [user_id](#user_id)
    * user_name **required** [name_user](#name_user)

### createMember
Create a member


```js
nexmo_conversation.createMember({
  "conversation_id": ""
}, context)
```

#### Input
* input `object`
  * body `object`: Create a Member in invite state 
    * action [member_action](#member_action)
    * channel **required** [channel](#channel)
    * knocking_id [knocker_id](#knocker_id)
    * media [media](#media)
    * member_id [member_id](#member_id)
    * member_id_inviting [member_id_inviting](#member_id_inviting)
    * user_id **required** [user_id](#user_id)
  * conversation_id **required** `string`: Conversation ID

#### Output
* output `object`
  * channel [channel](#channel)
  * href [href_member](#href_member)
  * id [member_id](#member_id)
  * initiator [initiator](#initiator)
  * state [member_state](#member_state)
  * timestamp [timestamp_res_member](#timestamp_res_member)
  * user_id [user_id](#user_id)

### deleteMember
Delete a member


```js
nexmo_conversation.deleteMember({
  "conversation_id": "",
  "member_id": ""
}, context)
```

#### Input
* input `object`
  * conversation_id **required** `string`: Conversation ID
  * member_id **required** `string`: Member ID

#### Output
* output `object`: Empty JSON payload

### getMember
Retrieve a member


```js
nexmo_conversation.getMember({
  "conversation_id": "",
  "member_id": ""
}, context)
```

#### Input
* input `object`
  * conversation_id **required** `string`: Conversation ID
  * member_id **required** `string`: Member ID

#### Output
* output `object`
  * href [href_member](#href_member)
  * id [member_id](#member_id)

### updateMember
Update a member


```js
nexmo_conversation.updateMember({
  "conversation_id": "",
  "member_id": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * action [member_action](#member_action)
    * channel [channel](#channel)
  * conversation_id **required** `string`: Conversation ID
  * member_id **required** `string`: Member ID

#### Output
* output `object`
  * href [href_member](#href_member)
  * id [member_id](#member_id)

### recordConversation
Record a conversation


```js
nexmo_conversation.recordConversation({
  "conversation_id": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * action **required** [action](#action)
    * event_method [event_method](#event_method)
    * event_url [event_url](#event_url)
    * format [format](#format)
    * split [split](#split)
  * conversation_id **required** `string`: Conversation ID

#### Output
*Output schema unknown*

### listLegs
List legs


```js
nexmo_conversation.listLegs(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`: List Legs Response Payload Object
  * _embedded **required** `object`: A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
    * legs **required** `array`
      * items `object`
        * _embedded `object`
        * _links `object`
        * conversation_uuid [conversation_id](#conversation_id)
        * from `object`
        * start_end [timestamp_leg_end_time](#timestamp_leg_end_time)
        * start_time [timestamp_leg_start_time](#timestamp_leg_start_time)
        * state [leg_state](#leg_state)
        * to `object`
        * type [channel_type](#channel_type)
        * uuid **required** [leg_id](#leg_id)
  * _links **required** `object`
    * self **required** `object`
      * href `string`
  * count **required** `number`: The total number of records returned by your request.
  * page_size **required** [page_size](#page_size)
  * record_index **required** [record_index](#record_index)

### deleteLeg
Delete a leg


```js
nexmo_conversation.deleteLeg({
  "leg_id": ""
}, context)
```

#### Input
* input `object`
  * leg_id **required** `string`: Leg ID

#### Output
* output `object`: Empty JSON payload

### getUsers
<div class="Vlt-callout Vlt-callout--warning"> <i></i> <div class="Vlt-callout__content"> <strong>This API endpoint is deprecated. Please use <a href="/api/conversation.v2#get-users">/v0.2/users</a><br />This endpoint will return a maximum of 100 items.</strong> </div> </div>



```js
nexmo_conversation.getUsers(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * href [href_user](#href_user)
    * id [user_id](#user_id)
    * name [name_user](#name_user)

### createUser
Note: Users must be created with an admin JWT.


```js
nexmo_conversation.createUser({}, context)
```

#### Input
* input `object`
  * body `object`: Create a Member in invite state 
    * display_name [display_name_user](#display_name_user)
    * image_url [image_url](#image_url)
    * name [name_user](#name_user)

#### Output
* output `object`
  * href [href_user](#href_user)
  * id [user_id](#user_id)

### deleteUser
Delete a user


```js
nexmo_conversation.deleteUser({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: User ID

#### Output
* output `object`: Empty JSON payload

### getUser
Retrieve a user


```js
nexmo_conversation.getUser({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: User ID

#### Output
* output `object`
  * href `string`
  * id [user_id](#user_id)
  * name [name_user](#name_user)

### updateUser
Update a user


```js
nexmo_conversation.updateUser({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * channels [channel](#channel)
    * display_name [display_name_user](#display_name_user)
    * image_url [image_url](#image_url)
    * name [name_user](#name_user)
  * user_id **required** `string`: User ID

#### Output
* output `object`
  * href [href_user](#href_user)
  * id [user_id](#user_id)

### getuserConversations
List user conversations


```js
nexmo_conversation.getuserConversations({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: User ID

#### Output
* output `array`
  * items `object`
    * display_name [display_name](#display_name)
    * href [href](#href)
    * id [conversation_id](#conversation_id)
    * image_url [image_url](#image_url)
    * member_id [member_id](#member_id)
    * name [name_conversation](#name_conversation)
    * sequence_number `integer`: the id of the last event of the conversation (event's id is an incremental number
    * state [member_state](#member_state)
    * timestamp `object`
      * created [timestamp](#timestamp)



## Definitions

### _links_conversation
* _links_conversation `object`
  * self `object`
    * href [href_conversation](#href_conversation)

### _links_conversations_list
* _links_conversations_list `object`: A series of links between resources in this API in the http://stateless.co/hal_specification.html.
  * self **required** `object`
    * href **required** [href_conversations_list](#href_conversations_list)

### action
* action `string` (values: start, stop): Recording Action

### channel
* channel `object`: A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`
  * leg_id [leg_id](#leg_id)
  * leg_ids `array`: Leg ids associated with this Channel. The first item in the array represents the main active Leg. The second item, if exists, represents a screen-share Leg.
    * items `object`
      * leg_id [leg_id](#leg_id)
  * type [channel_type](#channel_type)

### channel_number
* channel_number `string`: this can be a phone number or a random string

### channel_type
* channel_type `string` (values: app, phone, sip, websocket, vbc): Channel type

### conversation_id
* conversation_id `string`: The unique identifier for this conversation

### conversation_properties
* conversation_properties `object`: Conversation properties
  * ttl `number`: Time to leave. After how many seconds an empty conversation is deleted.

### display_name
* display_name `string`: The display name for the conversation. It does not have to be unique

### display_name_user
* display_name_user `string`: A string to be displayed as user name. It does not need to be unique

### event_body
* event_body `object`: Event Body

### event_id
* event_id `string`: Event id. This is a progressive integer

### event_method
* event_method `string`: The HTTP method used to send event information to event_url.

### event_retrieved
* event_retrieved `object`: Retrieve Events Response Payload Object Item
  * body **required** [event_body](#event_body)
  * from [member_id](#member_id)
  * href **required** [href_event](#href_event)
  * id **required** [event_id](#event_id)
  * state [member_state](#member_state)
  * timestamp **required** [timestamp_created](#timestamp_created)
  * to [member_id](#member_id)
  * type **required** [event_type](#event_type)

### event_type
* event_type `string`: Event type

### event_url
* event_url `array`: The webhook endpoint where recording progress events are sent to.
  * items `string`

### format
* format `string` (values: mp3, wav): Record the Conversation in a specific format.

### href
* href `string`: A link towards a resources included in Conversation API

### href_conversation
* href_conversation `string`: A link towards a conversation included in Conversation API

### href_conversations_list
* href_conversations_list `string`: A link towards a conversations list included in Conversation API

### href_event
* href_event `string`: A link towards a conversation event included in Conversation API

### href_member
* href_member `string`: A link towards a member included in Conversation API

### href_rtc
* href_rtc `string`: A link towards a rtc (leg) included in Conversation API

### href_user
* href_user `string`: A link towards a user included in Conversation API

### image_url
* image_url `string`: A link to an image for conversations' and users' avatars

### initiator
* initiator `object`
  * joined `object`
    * isSystem `boolean`: `true` if the user was invited by an admin JWT. `user_id` and `member_id` will not exist if `true`
    * member_id [member_id](#member_id)
    * user_id [user_id](#user_id)

### knocker_id
* knocker_id `string`: Knocker ID. A knocker is a pre-member of a conversation who does not exist yet

### leg_id
* leg_id `string`: The id of the leg. rtc_id and call_id are leg id

### leg_state
* leg_state `string` (values: terminated): Leg Status

### media
* media `object`: Media Object

### member_action
* member_action `string` (values: invite, join): Invite or join a member to a conversation

### member_id
* member_id `string`: Member ID

### member_id_inviting
* member_id_inviting `string`: Member ID of the member that sends the invitation

### member_state
* member_state `string` (values: invited, joined, left, unknown): The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown`

### name
* name `string`: Unique name

### name_conversation
* name_conversation `string`: Unique name for a conversation

### name_user
* name_user `string`: Unique name for a user

### page_size
* page_size `number`: The amount of records returned in this response

### record_index
* record_index `number`: Return `page_size` amount of conversations from this index in the response. That is, if your request returns 300 conversations, set `record_index` to 5 in order to return conversations 50 to 59. The default value is 0. That is, the first `page_size` calls.

### split
* split `string`: Record the sent and received audio in separate channels of a stereo recording

### timestamp
* timestamp `string`: Timestamp

### timestamp_created
* timestamp_created `string`: Time of creation

### timestamp_destroyed
* timestamp_destroyed `string`: Time of last update

### timestamp_leg_end_time
* timestamp_leg_end_time `string`: Time of leg end

### timestamp_leg_start_time
* timestamp_leg_start_time `string`: Time of leg start

### timestamp_obj_leg
* timestamp_obj_leg `object`
  * end [timestamp](#timestamp)
  * request [timestamp](#timestamp)
  * start [timestamp_created](#timestamp_created)

### timestamp_res_conversation
* timestamp_res_conversation `object`
  * created [timestamp_created](#timestamp_created)
  * destroyed [timestamp_destroyed](#timestamp_destroyed)
  * updated [timestamp_updated](#timestamp_updated)

### timestamp_res_event
* timestamp_res_event `string`: Time of event creation

### timestamp_res_member
* timestamp_res_member `object`
  * invited [timestamp](#timestamp)
  * joined [timestamp](#timestamp)
  * left [timestamp](#timestamp)

### timestamp_updated
* timestamp_updated `string`: Time of last update

### user_id
* user_id `string`: User ID

### user_id_or_user_name
* user_id_or_user_name `string`: user name or user id of the inviter


