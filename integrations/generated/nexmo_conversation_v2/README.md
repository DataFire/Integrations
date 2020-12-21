# @datafire/nexmo_conversation_v2

Client library for Conversation API

## Installation and Usage
```bash
npm install --save @datafire/nexmo_conversation_v2
```
```js
let nexmo_conversation_v2 = require('@datafire/nexmo_conversation_v2').create();

.then(data => {
  console.log(data);
});
```

## Description

The Conversation API enables you to build conversation features where communication can take place across multiple mediums including IP Messaging, PSTN Voice, SMS and WebRTC Audio and Video. The context of the conversations is maintained though each communication event taking place within a conversation, no matter the medium.

## Actions

### conversations.get
Please note that not all data is available in the list endpoint. Once 
you've identified the conversation you need to work with, use the 
[GET /conversations/:id](#get-conversation) endpoint to fetch all of the conversation details



```js
nexmo_conversation_v2.conversations.get({}, context)
```

#### Input
* input `object`
  * page_size `integer`: The number of results returned per page.   The default value is `10`. The maximum value is `100`.
  * order `string` (values: asc, desc): Show the most (`desc`) / least (`asc`) recently created entries first
  * cursor `string`: The cursor to start returning results from.
  * date_start `string`: Search for conversations created after this ISO8601 date
  * date_end `string`: Search for conversations created before this ISO8601 date

#### Output
* output `object`
  * _embedded `object`
    * data `object`
      * conversations `array`: List of conversations matching the provided filter
        * items [conversation_list](#conversation_list)
  * _links `object`
    * first `object`
      * href `string`
    * next `object`
      * href `string`
    * prev `object`
      * href `string`
    * self `object`
      * href `string`
  * cursor `string`: Current cursor
  * page_size `integer`: The number of results returned on this page.

### conversations.conversation_id.events.get
List Events


```js
nexmo_conversation_v2.conversations.conversation_id.events.get({
  "conversation_id": ""
}, context)
```

#### Input
* input `object`
  * conversation_id **required** `string`: The ID of the conversation
  * page_size `integer`: The number of results returned per page.   The default value is `10`. The maximum value is `100`.
  * order `string` (values: asc, desc): Show the most (`desc`) / least (`asc`) recently created entries first
  * cursor `string`: The cursor to start returning results from.
  * start_id `string`: The ID to start returning events at
  * end_id `string`: The ID to end returning events at
  * event_type `string`: The type of event to search for. Does not currently support custom events

#### Output
* output `object`
  * _embedded `object`
    * data `object`
      * events `array`: List of events matching the provided filter
        * items [all_events](#all_events)
  * _links `object`
    * first `object`
      * href `string`
    * next `object`
      * href `string`
    * prev `object`
      * href `string`
    * self `object`
      * href `string`
  * page_size `integer`: The number of results returned on this page.

### conversations.conversation_id.members.get
List Members


```js
nexmo_conversation_v2.conversations.conversation_id.members.get({
  "conversation_id": ""
}, context)
```

#### Input
* input `object`
  * conversation_id **required** `string`: The ID of the conversation
  * page_size `integer`: The number of results returned per page.   The default value is `10`. The maximum value is `100`.
  * order `string` (values: asc, desc): Show the most (`desc`) / least (`asc`) recently created entries first
  * cursor `string`: The cursor to start returning results from.

#### Output
* output `object`
  * _embedded `object`
    * data `object`
      * members `array`: List of members matching the provided filter
        * items [member_list](#member_list)
  * _links `object`
    * first `object`
      * href `string`
    * next `object`
      * href `string`
    * prev `object`
      * href `string`
    * self `object`
      * href `string`
  * page_size `integer`: The number of results returned on this page

### users.get
List Users


```js
nexmo_conversation_v2.users.get({}, context)
```

#### Input
* input `object`
  * page_size `integer`: The number of results returned per page.   The default value is `10`. The maximum value is `100`.
  * order `string` (values: asc, desc): Show the most (`desc`) / least (`asc`) recently created entries first
  * cursor `string`: The cursor to start returning results from.

#### Output
* output `object`
  * _embedded `object`
    * data `object`
      * users `array`: List of users matching the provided filter
        * items [user_list](#user_list)
  * _links `object`
    * first `object`
      * href `string`
    * next `object`
      * href `string`
    * prev `object`
      * href `string`
    * self `object`
      * href `string`
  * cursor `string`: Current cursor
  * page_size `integer`: The number of results returned on this page



## Definitions

### all_events


### conversation_display_name
* conversation_display_name `string`: The public facing name of the conversation

### conversation_id
* conversation_id `string`: Automatically generated conversation ID

### conversation_image_url
* conversation_image_url `string`: An image URL that you associate with the conversation

### conversation_list
* conversation_list `object`
  * _links `object`
    * self `object`
      * href `string`
  * display_name [conversation_display_name](#conversation_display_name)
  * id `string`: The ID of the conversation
  * image_url [conversation_image_url](#conversation_image_url)
  * name [conversation_name](#conversation_name)
  * timestamp `object`
    * created `string`: The time that the conversation was created

### conversation_name
* conversation_name `string`: Your internal conversation name. Must be unique

### custom_event
* custom_event
  * body `object`: The body of your `custom` event
  * type `string`: The event type (`custom:<YOUR_IDENTIFIER>`)
  * _links `object`
    * self `object`
      * href `string`
  * from `string`: The member ID of the sender
  * id `integer`: The ID of the event
  * timestamp `string`: The time that the event happened

### event
* event `object`
  * _links `object`
    * self `object`
      * href `string`
  * from `string`: The member ID of the sender
  * id `integer`: The ID of the event
  * timestamp `string`: The time that the event happened

### member
* member
  * _links `object`
    * self `object`
      * href `string`
  * display_name `string`: The display name of the User
  * id `string`: Member ID
  * name `string`: The name of the User
  * state `string` (values: INVITED, JOINED): The state that the member is in for this conversation
  * user_id `string`: The ID of the User
  * channel `object`
    * type `string` (values: app): The channel that the member joins with
  * initiator `object`
    * invited `object`
      * is_system `boolean`
    * joined `object`
      * is_system `boolean`
  * media `object`: The current media state for the member
    * audio_settings `object`: The current audio state for the member
      * earmuffed `boolean`: Can the member hear other participants?
      * enabled `boolean`: Is audio enabled?
      * muted `boolean`: Can the member speak to other participants?
  * timestamp `object`
    * invited `string`: The time that an invitation was sent
    * joined `string`: The time that the conversation was joined
    * left `string`: The time that the member left the conversation

### member_invited_event
* member_invited_event
  * type `string`: The event type (`member:invited`)
  * _links `object`
    * self `object`
      * href `string`
  * from `string`: The member ID of the sender
  * id `integer`: The ID of the event
  * timestamp `string`: The time that the event happened
  * body [member](#member)

### member_left_event
* member_left_event
  * type `string`: The event type (`member:left`)
  * _links `object`
    * self `object`
      * href `string`
  * from `string`: The member ID of the sender
  * id `integer`: The ID of the event
  * timestamp `string`: The time that the event happened
  * body [member](#member)

### member_list
* member_list `object`
  * _links `object`
    * self `object`
      * href `string`
  * display_name `string`: The display name of the User
  * id `string`: Member ID
  * name `string`: The name of the User
  * state `string` (values: INVITED, JOINED): The state that the member is in for this conversation
  * user_id `string`: The ID of the User

### text_event
* text_event
  * body `object`: The body of the `text` event
    * text `string`: The text sent in this event
  * conversation_id `string`: The ID of the Conversation that the member belongs to
  * type `string`: The event type (`text`)
  * _links `object`
    * self `object`
      * href `string`
  * from `string`: The member ID of the sender
  * id `integer`: The ID of the event
  * timestamp `string`: The time that the event happened

### user_id
* user_id `string`: The ID of the user

### user_links
* user_links `object`
  * self `object`
    * href `string`

### user_list
* user_list `object`
  * _links [user_links](#user_links)
  * id [user_id](#user_id)
  * name [user_name](#user_name)

### user_name
* user_name `string`: The name of the user


