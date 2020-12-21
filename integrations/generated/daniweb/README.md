# @datafire/daniweb

Client library for DaniWeb Connect API

## Installation and Usage
```bash
npm install --save @datafire/daniweb
```
```js
let daniweb = require('@datafire/daniweb').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

User Recommendation Engine and Chat Network

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
daniweb.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
daniweb.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### apps.get
Fetch all Daniapps that are currently in production mode.


```js
daniweb.apps.get({}, context)
```

#### Input
* input `object`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-get-apps](#endpoint-get-apps)

### apps.ID.get
Fetch an array of Daniapps that are currently in production mode.


```js
daniweb.apps.ID.get({
  "ID": []
}, context)
```

#### Input
* input `object`
  * ID **required** `array`

#### Output
* output [Endpoint-get-apps-ID](#endpoint-get-apps-id)

### audiences.get
Fetch all Daniapp audience segments that comprise the current access token's bubble.


```js
daniweb.audiences.get({}, context)
```

#### Input
* input `object`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-get-audiences](#endpoint-get-audiences)

### audiences.ID.get
Fetch an array of Daniapp audience segments that comprise the current access token's bubble.


```js
daniweb.audiences.ID.get({
  "ID": []
}, context)
```

#### Input
* input `object`
  * ID **required** `array`

#### Output
* output [Endpoint-get-audiences-ID](#endpoint-get-audiences-id)

### audiences.ID.memberships.post
Create a membership record for the OAuth'ed end-user based on the current audience segment/bubble combination.


```js
daniweb.audiences.ID.memberships.post({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`

#### Output
* output [Endpoint-post-audiences-ID-memberships](#endpoint-post-audiences-id-memberships)

### autocompletes.get
Retrieve an array of names and locations, filtered by category, that begin with the query string passed in. Ideally used for search autocomplete dropdowns, as the search functionality filters against name and location. The four potential categories are: `conversations` for names of users you are in existing conversations with; `matches` for names of users you have previously skipped over; `people` for names of all other users; `locations` for locations of users. Only users and their locations who exist with the current access token's bubble are considered.


```js
daniweb.autocompletes.get({}, context)
```

#### Input
* input `object`
  * query `string`

#### Output
* output [Endpoint-get-autocompletes](#endpoint-get-autocompletes)

### conversations.schedules.post
Paginated report of information about messages contributed by conversation and date. Only conversations that exist within the current access token's bubble are considered in the calculations. Optionally roll up all conversations to retrieve one record per date. Optionally specify a date formatted as YYYY-MM-DD to retrieve information just from the single date, along with additional navigational information, which is useful when generating a transcript for a single day and wanting to reference the previous and next days there were messages.


```js
daniweb.conversations.schedules.post({}, context)
```

#### Input
* input `object`
  * sort `string` (values: asc, desc)
  * roll_up `boolean`
  * date `string`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-post-conversations-schedules](#endpoint-post-conversations-schedules)

### conversations.searches.post
Fetch messages authored from within the current bubble that match a query string passed in as a search parameter along with their relevancy score.


```js
daniweb.conversations.searches.post({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`
  * gt_message_id `integer`
  * date `string`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-post-conversations-searches](#endpoint-post-conversations-searches)

### conversations.statuses.get
Retrieve conversations that you are participating in with users who exists within the same bubble, along with your current relationship with the conversations. The user_a / user_b properties of the conversation are populated with as much data as is available if the user is not you. If the user is you, only the id field is populated. There is a separate status endpoint to retrieve relationship information for individual conversations. Optionally filter: 'new' to only show conversations with messages you haven't yet seen; 'introductions' to only show conversations where users have introduced themselves to you but nothing more; 'unreplied' to only show conversations where you have introduced yourself to other users but nothing more; 'notifications' to show all conversations where the other user was the last person to message. Optionally only show conversations engaging within the existing access token's bubble. This report is limited to your ~500-1000 most recently active conversations you've engaged in within current the access token's bubble.


```js
daniweb.conversations.statuses.get({}, context)
```

#### Input
* input `object`
  * filter `string` (values: new, introductions, unreplied, notifications)
  * include_archived `boolean`
  * bubbled `boolean`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-get-conversations-statuses](#endpoint-get-conversations-statuses)

### conversations.ID.get
Fetch an array of conversations. You can only retrieve conversations with users who exist within the current access token's bubble.


```js
daniweb.conversations.ID.get({
  "ID": []
}, context)
```

#### Input
* input `object`
  * ID **required** `array`

#### Output
* output [Endpoint-get-conversations-ID](#endpoint-get-conversations-id)

### conversations.ID.messages.get
Retrieve the last {limit} messages in the conversation, provided the conversations exist within the current access token's bubble. If a timeout is 0 or greater, the batch is sorted oldest first. Otherwise, if timeout is a negative number, the transcript is paginated and sorted newest first. Specify a timeout for long polling (which delays the server sending back results for up to n seconds or until results are available, whichever comes first), or default to 0 for immediate results. Optionally record your status as online along with sharing the latest message you've seen with the other conversation participant. Optionally specify a gt_message_id to retrieve only messages with an ID greater than that specified (such as greater than the latest message ID received in the last poll). Optionally only poll for messages authored by the other person in the conversation, and echo messages authored by you when sending, for a perceived increase in performance. Optionally only retrieve messages that were posted from within the current access token's bubble. Optionally specify a date formatted as YYYY-MM-DD to retrieve a transcript of messages from a single day. When record_seen is set to true, the new message count for the conversation is reset to zero.


```js
daniweb.conversations.ID.messages.get({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`
  * gt_message_id `integer`
  * exclude_self `boolean`
  * date `string`
  * bubbled `boolean`
  * record_seen `boolean`
  * timeout `integer`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-get-conversations-ID-messages](#endpoint-get-conversations-id-messages)

### conversations.ID.messages.post
Post a message to a conversation that is with a user who exists within the current access token's bubble. Optionally specify whether emoticons should be parsed into smiley images. Optionally specify whether the message should be bubbled within the app. Additionally, optionally attach a single metadata key/value pair to the message upon submission.


```js
daniweb.conversations.ID.messages.post({
  "ID": 0,
  "text_raw": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`
  * text_raw **required** `string`
  * text_emoticons `boolean`
  * bubbled `boolean`
  * metadata_0_key `string`
  * metadata_0_values[] `array`
  * metadata_0_privacy `string` (values: Public, Private, Bubbled, User)
  * metadata_1_key `string`
  * metadata_1_values[] `array`
  * metadata_1_privacy `string` (values: Public, Private, Bubbled, User)
  * metadata_2_key `string`
  * metadata_2_values[] `array`
  * metadata_2_privacy `string` (values: Public, Private, Bubbled, User)

#### Output
* output [Endpoint-post-conversations-ID-messages](#endpoint-post-conversations-id-messages)

### conversations.ID.schedules.post
Paginated report of information about messages contributed by conversation and date. Only conversations that exist within the current access token's bubble are considered in the calculations. Optionally roll up all conversations to retrieve one record per date. Optionally specify a date formatted as YYYY-MM-DD to retrieve information just from the single date, along with additional navigational information, which is useful when generating a transcript for a single day and wanting to reference the previous and next days there were messages within the conversation(s).


```js
daniweb.conversations.ID.schedules.post({
  "ID": []
}, context)
```

#### Input
* input `object`
  * ID **required** `array`
  * sort `string` (values: asc, desc)
  * roll_up `boolean`
  * date `string`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-post-conversations-ID-schedules](#endpoint-post-conversations-id-schedules)

### conversations.ID.searches.post
Fetch messages authored from within specified conversations that match a query string passed in as a search parameter along with their relevancy score.


```js
daniweb.conversations.ID.searches.post({
  "ID": [],
  "query": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `array`
  * query **required** `string`
  * gt_message_id `integer`
  * date `string`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-post-conversations-ID-searches](#endpoint-post-conversations-id-searches)

### conversations.ID.statuses.get
Status information about your current relationship with one or more conversations you participating in, provided the conversations exist within the current access token's bubble.


```js
daniweb.conversations.ID.statuses.get({
  "ID": []
}, context)
```

#### Input
* input `object`
  * ID **required** `array`

#### Output
* output [Endpoint-get-conversations-ID-statuses](#endpoint-get-conversations-id-statuses)

### conversations.ID.statuses.patch
Archive or unarchive a conversation that is with a user who exists within the same bubble.


```js
daniweb.conversations.ID.statuses.patch({
  "ID": 0,
  "archived_status": true
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`
  * archived_status **required** `boolean`

#### Output
* output [Endpoint-patch-conversations-ID-statuses](#endpoint-patch-conversations-id-statuses)

### groups.get
Fetch an array of all groups that were created by users existing within the current access token's bubble. The groups must be either Public or you must be a member of them. Unlisted and Private groups that you are not a member of are not listed.


```js
daniweb.groups.get({}, context)
```

#### Input
* input `object`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-get-groups](#endpoint-get-groups)

### groups.post
Create a new group for other members to join. Any user who is using an access token whose bubble you exist in can join your group provided it is not a private group. Private groups can only be joined by members who know its passphrase. Unlisted groups can be joined by anybody as long as they know the Group ID, but they are not referenced anywhere to non-members. Public groups can be joined by anybody, are discoverable, and anyone can see the public groups a user is a member of, provided the group owner exists in their access token's bubble. Groups each have their own discussions, transcripts, schedules, and ability to list and search their members.


```js
daniweb.groups.post({
  "name": "",
  "slug": "",
  "description": "",
  "privacy": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * slug **required** `string`
  * description **required** `string`
  * privacy **required** `string` (values: Public, Unlisted, Private)
  * passphrase `string`

#### Output
* output [Endpoint-post-groups](#endpoint-post-groups)

### groups.messages.metadata.filters.post
Paginated listing of messages filtered by arbitrary metadata criteria. Messages must match on all key/value pairs passed in. Messages may only match on one value of an array passed in. However, messages are sorted based on how many distinct values they match on (most matches first).


```js
daniweb.groups.messages.metadata.filters.post({}, context)
```

#### Input
* input `object`
  * metadata_0_key `string`
  * metadata_0_values[] `array`
  * metadata_1_key `string`
  * metadata_1_values[] `array`
  * metadata_2_key `string`
  * metadata_2_values[] `array`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-post-groups-messages-metadata-filters](#endpoint-post-groups-messages-metadata-filters)

### groups.messages.ID.delete
Delete an array of group messages. You must be the owner or moderator of the group.


```js
daniweb.groups.messages.ID.delete({
  "ID": []
}, context)
```

#### Input
* input `object`
  * ID **required** `array`

#### Output
* output [Endpoint-delete-groups-messages-ID](#endpoint-delete-groups-messages-id)

### groups.messages.ID.get
Fetch an array of group messages. You can only retrieve messages authored by you or by users existing within the current access token's bubble.


```js
daniweb.groups.messages.ID.get({
  "ID": []
}, context)
```

#### Input
* input `object`
  * ID **required** `array`

#### Output
* output [Endpoint-get-groups-messages-ID](#endpoint-get-groups-messages-id)

### groups.messages.ID.metadata.get
Retrieve all key/value pairs attached to the current message that you have access to, so long as the user who created the group exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble.


```js
daniweb.groups.messages.ID.metadata.get({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-get-groups-messages-ID-metadata](#endpoint-get-groups-messages-id-metadata)

### groups.messages.ID.metadata.post
Attach one-to-many key/value pairs of metadata to a group message, so long as the user who authored the message exists within the current access token's bubble and you are a member of their group. A key is unique for each author/bubble combination. Attaching metadata with an existing key that was previously created by you, from within the same bubble, overwrites the key with the new value or set of values. The privacy setting allows you to specify who will have access to the metadata: Public metadata by anyone using an access token which grants them access to the user who authored the message and who is also a member of the group the message belongs to; Bubbled metadata by anyone using an access token existing within the current bubble who is also a member of the group the message belongs to; User metadata by you, so long as you are using an access token which grants you access to the user who authored the message and you remain a member of the group; Private metadata by you, so long as you are using an access token existing within the current bubble and you remain a member of the group.


```js
daniweb.groups.messages.ID.metadata.post({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`
  * metadata_0_key `string`
  * metadata_0_values[] `array`
  * metadata_0_privacy `string` (values: Public, Private, Bubbled, User)
  * metadata_1_key `string`
  * metadata_1_values[] `array`
  * metadata_1_privacy `string` (values: Public, Private, Bubbled, User)
  * metadata_2_key `string`
  * metadata_2_values[] `array`
  * metadata_2_privacy `string` (values: Public, Private, Bubbled, User)

#### Output
* output [Endpoint-post-groups-messages-ID-metadata](#endpoint-post-groups-messages-id-metadata)

### groups.messages.ID.metadata.collections.get
Retrieve all key/value pairs attached to the current message that you have access to, so long as the user who created the group exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble. Metadata will be grouped by key.


```js
daniweb.groups.messages.ID.metadata.collections.get({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`

#### Output
* output [Endpoint-get-groups-messages-ID-metadata-collections](#endpoint-get-groups-messages-id-metadata-collections)

### groups.schedules.post
Paginated report of information about messages contributed by group and date. Only groups you're a member of and group messages authored by users the current access token has access to are considered in the calculations. Optionally roll up all groups to retrieve one record per date. Optionally specify a date formatted as YYYY-MM-DD to retrieve information just from the single date, along with additional navigational information, which is useful when generating a transcript for a single day and wanting to reference the previous and next days there were messages.


```js
daniweb.groups.schedules.post({}, context)
```

#### Input
* input `object`
  * sort `string` (values: asc, desc)
  * roll_up `boolean`
  * date `string`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-post-groups-schedules](#endpoint-post-groups-schedules)

### groups.statuses.get
Retrieve groups that were created by users within the current access token's bubble, along with your current relationship with the groups. The groups must be either Public or you must be a member of them. Unlisted and Private groups that you are not a member of are not listed. Optionally only retrieve groups that you are a member of.


```js
daniweb.groups.statuses.get({}, context)
```

#### Input
* input `object`
  * existing_membership `boolean`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-get-groups-statuses](#endpoint-get-groups-statuses)

### groups.ID.get
Fetch an array of groups. You can only retrieve groups created by users existing within the current access token's bubble.


```js
daniweb.groups.ID.get({
  "ID": []
}, context)
```

#### Input
* input `object`
  * ID **required** `array`

#### Output
* output [Endpoint-get-groups-ID](#endpoint-get-groups-id)

### groups.ID.patch
Modify a group you previously created.


```js
daniweb.groups.ID.patch({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`
  * name `string`
  * slug `string`
  * description `string`
  * privacy `string` (values: Public, Unlisted, Private)
  * passphrase `string`

#### Output
* output [Endpoint-patch-groups-ID](#endpoint-patch-groups-id)

### groups.ID.memberships.delete
Leave a group that you are a member of and that was created by a user who exists within the current access token's bubble.


```js
daniweb.groups.ID.memberships.delete({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`

#### Output
* output [Endpoint-delete-groups-ID-memberships](#endpoint-delete-groups-id-memberships)

### groups.ID.memberships.get
Fetch an array of users who are members of specific groups that you are also a member of. You can only retrieve users existing within the current access token's bubble.


```js
daniweb.groups.ID.memberships.get({
  "ID": []
}, context)
```

#### Input
* input `object`
  * ID **required** `array`
  * moderators_only `boolean`
  * offset `integer`

#### Output
* output [Endpoint-get-groups-ID-memberships](#endpoint-get-groups-id-memberships)

### groups.ID.memberships.patch
Promote or demote a member's privileges within a group that you created. The user must exist within the current access token's bubble and be an existing member of the group.


```js
daniweb.groups.ID.memberships.patch({
  "ID": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`
  * user_id **required** `integer`
  * moderator `boolean`

#### Output
* output [Endpoint-patch-groups-ID-memberships](#endpoint-patch-groups-id-memberships)

### groups.ID.memberships.post
Join a group that was created by a user who exists within the current access token's bubble, or join other users into a group that you created. If you are the group owner, you can pass in a user_id to create membership records for a user you are in a conversation with. The user must exist within the current access token's bubble. If the group is private, you must successfully pass in its passphrase in order to join. You can obtain the passphrase from the group's owner.


```js
daniweb.groups.ID.memberships.post({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`
  * user_id `integer`
  * passphrase `string`

#### Output
* output [Endpoint-post-groups-ID-memberships](#endpoint-post-groups-id-memberships)

### groups.ID.messages.get
Retrieve the last {limit} messages in the group, for messages authored by users within the current access token's bubble. If a timeout is 0 or greater, the batch is sorted oldest first. Otherwise, if timeout is a negative number, the transcript is paginated and sorted newest first. Specify a timeout for long polling (which delays the server sending back results for up to n seconds or until results are available, whichever comes first), or default to 0 for immediate results. Optionally record your status as online along with sharing the latest message you've seen with other group members. Optionally specify a gt_message_id to retrieve only messages with an ID greater than that specified (such as greater than the latest message ID received in the last poll). Optionally only poll for messages authored by other members of the group, and echo messages authored by you when sending, for a perceived increase in performance. Optionally only retrieve messages that were posted from within the current access token's bubble. Optionally specify a date formatted as YYYY-MM-DD to retrieve a transcript of messages from a single day. When record_seen is set to true, the new message count for the group is reset to zero.


```js
daniweb.groups.ID.messages.get({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`
  * gt_message_id `integer`
  * exclude_self `boolean`
  * include_deleted `boolean`
  * date `string`
  * bubbled `boolean`
  * record_seen `boolean`
  * timeout `integer`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-get-groups-ID-messages](#endpoint-get-groups-id-messages)

### groups.ID.messages.post
Post a message to a group that you are a member of and that was created by a user who exists within the current access token's bubble. Optionally specify whether emoticons should be parsed into smiley images. Additionally, optionally attach a single metadata key/value pair to the group message upon submission.


```js
daniweb.groups.ID.messages.post({
  "ID": 0,
  "text_raw": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`
  * text_raw **required** `string`
  * text_emoticons `boolean`
  * metadata_0_key `string`
  * metadata_0_values[] `array`
  * metadata_0_privacy `string` (values: Public, Private, Bubbled, User)
  * metadata_1_key `string`
  * metadata_1_values[] `array`
  * metadata_1_privacy `string` (values: Public, Private, Bubbled, User)
  * metadata_2_key `string`
  * metadata_2_values[] `array`
  * metadata_2_privacy `string` (values: Public, Private, Bubbled, User)

#### Output
* output [Endpoint-post-groups-ID-messages](#endpoint-post-groups-id-messages)

### groups.ID.schedules.post
Paginated report of information about group messages contributed by conversation and date. Only groups you're a member of and group messages authored by users existing within the current access token's bubble are considered in the calculations. Optionally roll up all groups to retrieve one record per date. Optionally specify a date formatted as YYYY-MM-DD to retrieve information just from the single date, along with additional navigational information, which is useful when generating a transcript for a single day and wanting to reference the previous and next days there were messages within the group discussion(s).


```js
daniweb.groups.ID.schedules.post({
  "ID": []
}, context)
```

#### Input
* input `object`
  * ID **required** `array`
  * sort `string` (values: asc, desc)
  * roll_up `boolean`
  * date `string`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-post-groups-ID-schedules](#endpoint-post-groups-id-schedules)

### groups.ID.statuses.get
Status information about your current relationship with one or more groups you are a member of, provided the users who created the groups exist within the current access token's bubble.


```js
daniweb.groups.ID.statuses.get({
  "ID": []
}, context)
```

#### Input
* input `object`
  * ID **required** `array`

#### Output
* output [Endpoint-get-groups-ID-statuses](#endpoint-get-groups-id-statuses)

### industries.get



```js
daniweb.industries.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Endpoint-get-industries](#endpoint-get-industries)

### markdown.post



```js
daniweb.markdown.post({
  "text_raw": ""
}, context)
```

#### Input
* input `object`
  * text_raw **required** `string`
  * text_emoticons `boolean`

#### Output
* output [Endpoint-post-markdown](#endpoint-post-markdown)

### markdown.emoticons.get



```js
daniweb.markdown.emoticons.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Endpoint-get-markdown-emoticons](#endpoint-get-markdown-emoticons)

### messages.metadata.filters.post
Paginated listing of messages filtered by arbitrary metadata criteria. Messages must match on all key/value pairs passed in. Messages may only match on one value of an array passed in. However, messages are sorted based on how many distinct values they match on (most matches first).


```js
daniweb.messages.metadata.filters.post({}, context)
```

#### Input
* input `object`
  * metadata_0_key `string`
  * metadata_0_values[] `array`
  * metadata_1_key `string`
  * metadata_1_values[] `array`
  * metadata_2_key `string`
  * metadata_2_values[] `array`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-post-messages-metadata-filters](#endpoint-post-messages-metadata-filters)

### messages.ID.get
Fetch an array of messages. You can only retrieve messages authored by you or by users who exist within the current access token's bubble.


```js
daniweb.messages.ID.get({
  "ID": []
}, context)
```

#### Input
* input `object`
  * ID **required** `array`

#### Output
* output [Endpoint-get-messages-ID](#endpoint-get-messages-id)

### messages.ID.metadata.get
Retrieve all key/value pairs attached to the current message that you have access to, so long as the user who authored the message exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble.


```js
daniweb.messages.ID.metadata.get({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-get-messages-ID-metadata](#endpoint-get-messages-id-metadata)

### messages.ID.metadata.post
Attach one-to-many key/value pairs of metadata to a message, so long as the user who authored the message exists within the current access token's bubble. A key is unique for each author/bubble combination. Attaching metadata with an existing key that was previously created by you, from within the same bubble, overwrites the key with the new value or set of values. The privacy setting allows you to specify who will have access to the metadata: Public metadata by you or the other user in the message's conversation, using an access token which grants you access to the user who authored the message, if it wasn't you; Bubbled metadata by you or the other user in the message's conversation, using an access token existing within the current bubble; User metadata by you, so long as you are using an access token which grants you access to the user who authored the message, if it wasn't you; Private metadata by you, so long as you are using an access token existing within the current bubble.


```js
daniweb.messages.ID.metadata.post({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`
  * metadata_0_key `string`
  * metadata_0_values[] `array`
  * metadata_0_privacy `string` (values: Public, Private, Bubbled, User)
  * metadata_1_key `string`
  * metadata_1_values[] `array`
  * metadata_1_privacy `string` (values: Public, Private, Bubbled, User)
  * metadata_2_key `string`
  * metadata_2_values[] `array`
  * metadata_2_privacy `string` (values: Public, Private, Bubbled, User)

#### Output
* output [Endpoint-post-messages-ID-metadata](#endpoint-post-messages-id-metadata)

### messages.ID.metadata.collections.get
Retrieve all key/value pairs attached to the current message that you have access to, so long as the user who authored the message exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble. Metadata will be grouped by key.


```js
daniweb.messages.ID.metadata.collections.get({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`

#### Output
* output [Endpoint-get-messages-ID-metadata-collections](#endpoint-get-messages-id-metadata-collections)

### positions.post
Update the OAuth'ed end user's Curriculum Vitae by adding a position.


```js
daniweb.positions.post({
  "category": "",
  "role": "",
  "organization": "",
  "start_date": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string` (values: Experience, Education, Awards, Affiliations, Portfolio)
  * role **required** `string`
  * organization **required** `string`
  * organization_size `string` (values: Self-employed, 2 - 9 Employees, 10 - 49 Employees, 50 - 99 Employees, 100 - 499 Employees, 500 - 999 Employees, 1000 - 4999 Employees, 5000+ Employees, Don't Know)
  * position `string` (values: Executive Management (C-level), VP-level Executive, Manager / Director / Supervisor, Systems Development, Software Development, Web Developer, IT Consultant, Technical Support, Sales, Other technology related, Other non-technology related, Student, Retired)
  * start_date **required** `string`
  * end_date `string`
  * summary `string`
  * url `string`

#### Output
* output [Endpoint-post-positions](#endpoint-post-positions)

### positions.ID.delete
Remove an item from the OAuth'ed end user's Curriculum Vitae.


```js
daniweb.positions.ID.delete({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`

#### Output
* output [Endpoint-delete-positions-ID](#endpoint-delete-positions-id)

### positions.ID.patch
Update the OAuth'ed end user's Curriculum Vitae by modifying an existing position.


```js
daniweb.positions.ID.patch({
  "ID": 0,
  "category": "",
  "role": "",
  "organization": "",
  "start_date": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`
  * category **required** `string` (values: Experience, Education, Awards, Affiliations, Portfolio)
  * role **required** `string`
  * organization **required** `string`
  * organization_size `string` (values: Self-employed, 2 - 9 Employees, 10 - 49 Employees, 50 - 99 Employees, 100 - 499 Employees, 500 - 999 Employees, 1000 - 4999 Employees, 5000+ Employees, Don't Know)
  * position `string` (values: Executive Management (C-level), VP-level Executive, Manager / Director / Supervisor, Systems Development, Software Development, Web Developer, IT Consultant, Technical Support, Sales, Other technology related, Other non-technology related, Student, Retired)
  * start_date **required** `string`
  * end_date `string`
  * summary `string`
  * url `string`

#### Output
* output [Endpoint-patch-positions-ID](#endpoint-patch-positions-id)

### users.get
Fetch an array of users that you've been matched with, connected with, skipped, or muted. You can only retrieve users existing within the current access token's bubble. This report may be limited to the last ~500-1000 users you've communicated with within the access token's bubble. Matches are always ordered by synergy, and the order_by parameter is ignored. You can only retrieve bubbled users when retrieving matches, and the bubbled parameter is ignored otherwise. Your 100 best algorithmic matches are based on: Complementary data submitted to Profiles, CVs, and Metadata; Complementary data acquired from third-parties; Location information; Many behavioral data points, such as how responsive users are to connections; Degrees of separation (mutual connections); etc. You may connect with 3 of these algorithmic matches per day for free. However, new members are allowed a grace period of additional daily matches. Each time you choose to meet or mute one of your algorithmic matches, a new match is introduced.


```js
daniweb.users.get({}, context)
```

#### Input
* input `object`
  * filter `string` (values: connections, matches, skipped, muted)
  * order_by `string` (values: id, last_activity, first_name, last_name, industry)
  * bubbled `boolean`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-get-users](#endpoint-get-users)

### users.invites.post
Invite users to into your current access token's bubble by having Dazah send out email invitations on your behalf. The invitation sends users to begin the OAuth flow for the current application (based on the settings specified in the application's profile), and therefore they will be redirected to the application upon signing up / logging in. Upon doing so, if they aren't already, they will automatically be connected with you as well. If your current access token does not escape the bubble, the invitation will specify you wish to connect within the application's name. If your current access token escapes the bubble, the invitation will specify you wish to connect within Dazah. Submit either a list of emails, or a LinkedIn or Outlook CSV file. You can retrieve your LinkedIn CSV file by exporting your LinkedIn Connections at https://www.linkedin.com/people/export-settings. You can retrieve your Outlook CSV file by using the Outlook Import and Export Wizard. This endpoint buckets the invitations into four categories: Existing invites are existing users who are already connected with you within the current bubble, and are therefore not emailed; Discovered invites are existing Dazah users who are available to be connected with within the current bubble, and are therefore not emailed. Now that they have been discovered, the users/{:ID}/meet API endpoint may be used to connect with them; Invalid invites are existing Dazah users who are unavailable to be connected with, because they have deactivated accounts, are muting you, etc., and are therefore not emailed; Emailed invites are queued to receive an invitation within approximately 1 hour. Note that if you are attempting to invite an existing Dazah user who does not currently exist within your current access token's bubble, they will fall within the Discovered bucket if your current access token escapes the bubble, but will be emailed an invitation to join the application if your current access token does not escape the bubble.


```js
daniweb.users.invites.post({}, context)
```

#### Input
* input `object`
  * emails[] `array`
  * csv `string`, `object`
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output [Endpoint-post-users-invites](#endpoint-post-users-invites)

### users.metadata.filters.post
Paginated listing of users filtered by arbitrary metadata criteria. Users must match on all key/value pairs passed in. Users may only match on one value of an array passed in. However, users are sorted based on how many distinct values they match on (most matches first).


```js
daniweb.users.metadata.filters.post({}, context)
```

#### Input
* input `object`
  * metadata_0_key `string`
  * metadata_0_values[] `array`
  * metadata_1_key `string`
  * metadata_1_values[] `array`
  * metadata_2_key `string`
  * metadata_2_values[] `array`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-post-users-metadata-filters](#endpoint-post-users-metadata-filters)

### users.nearby.get
Fetch an array of users that are geographically close to a set of coordinates. You can only retrieve users existing within the current access token's bubble.


```js
daniweb.users.nearby.get({}, context)
```

#### Input
* input `object`
  * latitude `number`
  * longitude `number`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-get-users-nearby](#endpoint-get-users-nearby)

### users.searches.post
Filter and perform a weighted search against user profile fields, CV fields, and metadata by specifying a string to search on for each individual field. By default, results are filtered such that all words in the string must exist, unless you seprate the words with OR. To perform a weighted search (as opposed to filtering), specify the weight (from 0-100) the search algorithm should assign to the field. You can optionally exclude users who you are already in or not in conversations with, exclude users who you previously skipped, or exclude users who you are muting. By doing so, you can effectively customize your own matching algorithm. You can specify geo coordinates to only find users a certain distance away from a specific location, or only find users within a certain distance from the OAuth'ed end-user's last known location. If your app utilizes multiple audience segments, you can specify which audiences you would like to search. You can also limit users to just those who have been recently active. You can also choose to only receive users originating from the current access token's bubble. Only users existing within the current access token's bubble will be matched, and you can only search within a group created by a bubbled user.


```js
daniweb.users.searches.post({}, context)
```

#### Input
* input `object`
  * profile_first_name_query `string`
  * profile_last_name_query `string`
  * profile_headline_query `string`
  * profile_pitch_query `string`
  * profile_goals_query `string`
  * position_role_query `string`
  * position_organization_query `string`
  * position_summary_query `string`
  * profile_industry_query `string`
  * location_city_query `string`
  * location_region_query `string`
  * location_country_query `string`
  * profile_first_name_weight `integer`
  * profile_last_name_weight `integer`
  * profile_headline_weight `integer`
  * profile_pitch_weight `integer`
  * profile_goals_weight `string`
  * position_role_weight `integer`
  * position_organization_weight `integer`
  * position_summary_weight `integer`
  * profile_industry_weight `integer`
  * location_city_weight `integer`
  * location_region_weight `integer`
  * location_country_weight `integer`
  * metadata_0_key `string`
  * metadata_0_weight `integer`
  * metadata_0_query `string`
  * metadata_1_key `string`
  * metadata_1_weight `integer`
  * metadata_1_query `string`
  * metadata_2_key `string`
  * metadata_2_weight `integer`
  * metadata_2_query `string`
  * group_id `integer`
  * geo_latitude `number`
  * geo_longitude `number`
  * geo_miles_away `number`
  * audience_ids[] `array`
  * exclude_muted `boolean`
  * exclude_skipped `boolean`
  * exclude_connections `boolean`
  * exclude_matches `boolean`
  * active_within_x_days `integer`
  * bubbled `boolean`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-post-users-searches](#endpoint-post-users-searches)

### users.ID.get
Fetch an array of users. You can only retrieve users existing within the current access token's bubble.


```js
daniweb.users.ID.get({
  "ID": []
}, context)
```

#### Input
* input `object`
  * ID **required** `array`

#### Output
* output [Endpoint-get-users-ID](#endpoint-get-users-id)

### users.ID.groups.get
You can only retrieve groups that were created by users existing within the current access token's bubble.


```js
daniweb.users.ID.groups.get({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`

#### Output
* output [Endpoint-get-users-ID-groups](#endpoint-get-users-id-groups)

### users.ID.groups.messages.get
Paginated transcript of group messages authored by an individual user who exists within the current access token's bubble. Messages are sorted oldest to newest.


```js
daniweb.users.ID.groups.messages.get({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-get-users-ID-groups-messages](#endpoint-get-users-id-groups-messages)

### users.ID.messages.post
Initiate a conversation with a user who exists within the current access token's bubble by sending them an introductory message. If you aren't already in a conversation with them, this endpoint meets them first, and then sends the message. Note that if you aren't in an existing conversation, you still must meet the criteria to meet them, meaning the user must currently be free for you to meet. You will receive an error message unless it is currently free for you to meet the user. You can use the users/{:IDS}/synergies endpoint to first determine if the user isn't already in a conversation with you and is free for you to meet and, if they aren't, how to pay to meet them. If you don't specify a message, it defaults to your custom introductory message defined in your settings.


```js
daniweb.users.ID.messages.post({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`
  * text_raw `string`
  * text_emoticons `boolean`
  * bubbled `boolean`
  * metadata_0_key `string`
  * metadata_0_values[] `array`
  * metadata_0_privacy `string` (values: Public, Private, Bubbled, User)
  * metadata_1_key `string`
  * metadata_1_values[] `array`
  * metadata_1_privacy `string` (values: Public, Private, Bubbled, User)
  * metadata_2_key `string`
  * metadata_2_values[] `array`
  * metadata_2_privacy `string` (values: Public, Private, Bubbled, User)

#### Output
* output [Endpoint-post-users-ID-messages](#endpoint-post-users-id-messages)

### users.ID.metadata.get
Retrieve all key/value pairs attached to the current user that you have access to, so long as the user exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble. You will receive an error message unless either the current access token is bubbled, the user is an algorithmic match for you and you have not reached your quota of new introductions for the day, or you have paid to meet them. However, you can always use the /users/metadata/filters endpoint to filter across all users, including those that are unmatched, existing within the current access token's bubble based on preknown metadata key/value pairs.


```js
daniweb.users.ID.metadata.get({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`
  * offset `integer`
  * limit `integer`

#### Output
* output [Endpoint-get-users-ID-metadata](#endpoint-get-users-id-metadata)

### users.ID.metadata.post
Attach one-to-many key/value pairs of metadata to a user, so long as the user exists within the current access token's bubble. You can set one key at a time, with one or many values. A key is unique for each author/bubble combination. Attaching metadata with an existing key that was previously created by you, from within the same bubble, overwrites the key with the new value or set of values. The privacy setting allows you to specify who will have access to the metadata: Public metadata by anyone using an access token which grants them access to the user; Bubbled metadata by anyone using an access token existing within the current bubble; User metadata by you, so long as you are using an access token which grants you access to the user; Private metadata by you, so long as you are using an access token existing within the current bubble.


```js
daniweb.users.ID.metadata.post({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`
  * metadata_0_key `string`
  * metadata_0_values[] `array`
  * metadata_0_privacy `string` (values: Public, Private, Bubbled, User)
  * metadata_1_key `string`
  * metadata_1_values[] `array`
  * metadata_1_privacy `string` (values: Public, Private, Bubbled, User)
  * metadata_2_key `string`
  * metadata_2_values[] `array`
  * metadata_2_privacy `string` (values: Public, Private, Bubbled, User)

#### Output
* output [Endpoint-post-users-ID-metadata](#endpoint-post-users-id-metadata)

### users.ID.metadata.collections.get
Retrieve all key/value pairs attached to the current user that you have access to, so long as the user exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble. You will receive an error message unless either the current access token is bubbled, the user is an algorithmic match for you and you have not reached your quota of new introductions for the day, or you have paid to meet them. However, you can always use the /users/metadata/filters endpoint to filter across all users, including those that are unmatched, existing within the current access token's bubble based on preknown metadata key/value pairs. Metadata will be grouped by key.


```js
daniweb.users.ID.metadata.collections.get({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`

#### Output
* output [Endpoint-get-users-ID-metadata-collections](#endpoint-get-users-id-metadata-collections)

### users.ID.positions.get
Retrieve the CV of a user who exists within the current access token's bubble. You will receive an error message unless either the current access token is bubbled, the user is an algorithmic match for you and you have not reached your quota of new introductions for the day, or you have paid to meet them. You can only record CV data to your own account. However, any app that you have OAuth'ed against can do so. By default, you will receive CV data that all apps have recorded for the user. Optionally, you can choose to only receive data that the current access token's bubble has recorded.


```js
daniweb.users.ID.positions.get({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`
  * bubbled `boolean`

#### Output
* output [Endpoint-get-users-ID-positions](#endpoint-get-users-id-positions)

### users.ID.synergies.get
Determine your match relationship with one or more users who exist within the current access token's bubble. Under some conditions, the price to meet the user will be $0. However, if this is not the case, the PayPal URL payment method will be provided along with the price to meet the user. The PayPal API can be leveraged to send payments programatically, provided the parameters passed in remain the same to ensure that the payment is correctly recorded. Once the payment has been recorded via PayPal IPN, the price to meet the user changes to $0. You can then call the users/{:ID}/meet endpoint to meet the user.


```js
daniweb.users.ID.synergies.get({
  "ID": []
}, context)
```

#### Input
* input `object`
  * ID **required** `array`

#### Output
* output [Endpoint-get-users-ID-synergies](#endpoint-get-users-id-synergies)

### users.ID.synergies.patch
Skip, mute or unmute a user you've been matched with. Skipped matches are only presented as algorithmic matches after all other candidates have been exhausted. You cannot be matched with or meet muted users. You can only skip, mute or unmute users existing within the same bubble.


```js
daniweb.users.ID.synergies.patch({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`
  * relationship_skipped `boolean`
  * relationship_muted `boolean`

#### Output
* output [Endpoint-patch-users-ID-synergies](#endpoint-patch-users-id-synergies)

### users._.get
Retrieve the currently OAuth'ed end-user, based on the access token being used, including private information and settings such as their email address.


```js
daniweb.users._.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Endpoint-get-users--](#endpoint-get-users--)

### users._.patch
Update the OAuth'ed end user's account profile. At this time, for anti-spam reasons, restrictions preclude the ability to update email address and some other settings via the API.


```js
daniweb.users._.patch({}, context)
```

#### Input
* input `object`
  * first_name `string`
  * last_name `string`
  * headline `string`
  * industry `string` (values: Accounting, Airlines/Aviation, Alternative Dispute Resolution, Alternative Medicine, Animation, Apparel & Fashion, Architecture & Planning, Arts and Crafts, Automotive, Aviation & Aerospace, Banking, Biotechnology, Broadcast Media, Building Materials, Business Supplies and Equipment, Capital Markets, Chemicals, Civic & Social Organization, Civil Engineering, Commercial Real Estate, Computer & Network Security, Computer Games, Computer Hardware, Computer Networking, Computer Software, Construction, Consumer Electronics, Consumer Goods, Consumer Services, Cosmetics, Dairy, Defense & Space, Design, E-Learning, Education Management, Electrical/Electronic Manufacturing, Entertainment, Environmental Services, Events Services, Executive Office, Facilities Services, Farming, Financial Services, Fine Art, Fishery, Food & Beverages, Food Production, Fund-Raising, Furniture, Gambling & Casinos, Glass, Ceramics & Concrete, Government Administration, Government Relations, Graphic Design, Health, Wellness and Fitness, Higher Education, Hospital & Health Care, Hospitality, Human Resources, Import and Export, Individual & Family Services, Industrial Automation, Information Services, Information Technology and Services, Insurance, International Affairs, International Trade and Development, Internet, Investment Banking, Investment Management, Judiciary, Law Enforcement, Law Practice, Legal Services, Legislative Office, Leisure, Travel & Tourism, Libraries, Logistics and Supply Chain, Luxury Goods & Jewelry, Machinery, Management Consulting, Maritime, Market Research, Marketing and Advertising, Mechanical or Industrial Engineering, Media Production, Medical Devices, Medical Practice, Mental Health Care, Military, Mining & Metals, Motion Pictures and Film, Museums and Institutions, Music, Nanotechnology, Newspapers, Non-Profit Organization Management, Oil & Energy, Online Media, Outsourcing/Offshoring, Package/Freight Delivery, Packaging and Containers, Paper & Forest Products, Performing Arts, Pharmaceuticals, Philanthropy, Photography, Plastics, Political Organization, Primary/Secondary Education, Printing, Professional Training & Coaching, Program Development, Public Policy, Public Relations and Communications, Public Safety, Publishing, Railroad Manufacture, Ranching, Real Estate, Recreational Facilities and Services, Religious Institutions, Renewables & Environment, Research, Restaurants, Retail, Security and Investigations, Semiconductors, Shipbuilding, Sporting Goods, Sports, Staffing and Recruiting, Supermarkets, Telecommunications, Textiles, Think Tanks, Tobacco, Translation and Localization, Transportation/Trucking/Railroad, Utilities, Venture Capital & Private Equity, Veterinary, Warehousing, Wholesale, Wine and Spirits, Wireless, Writing and Editing)
  * pitch `string`
  * tags[] `array`
  * url `string`
  * company `string`
  * job_position `string` (values: Executive Management (C-level), VP-level Executive, Manager / Director / Supervisor, Systems Development, Software Development, Web Developer, IT Consultant, Technical Support, Sales, Other technology related, Other non-technology related, Student, Retired)
  * company_size `string` (values: Self-employed, 2 - 9 Employees, 10 - 49 Employees, 50 - 99 Employees, 100 - 499 Employees, 500 - 999 Employees, 1000 - 4999 Employees, 5000+ Employees, Don't Know)
  * targeted_industry `string` (values: Accounting, Airlines/Aviation, Alternative Dispute Resolution, Alternative Medicine, Animation, Apparel & Fashion, Architecture & Planning, Arts and Crafts, Automotive, Aviation & Aerospace, Banking, Biotechnology, Broadcast Media, Building Materials, Business Supplies and Equipment, Capital Markets, Chemicals, Civic & Social Organization, Civil Engineering, Commercial Real Estate, Computer & Network Security, Computer Games, Computer Hardware, Computer Networking, Computer Software, Construction, Consumer Electronics, Consumer Goods, Consumer Services, Cosmetics, Dairy, Defense & Space, Design, E-Learning, Education Management, Electrical/Electronic Manufacturing, Entertainment, Environmental Services, Events Services, Executive Office, Facilities Services, Farming, Financial Services, Fine Art, Fishery, Food & Beverages, Food Production, Fund-Raising, Furniture, Gambling & Casinos, Glass, Ceramics & Concrete, Government Administration, Government Relations, Graphic Design, Health, Wellness and Fitness, Higher Education, Hospital & Health Care, Hospitality, Human Resources, Import and Export, Individual & Family Services, Industrial Automation, Information Services, Information Technology and Services, Insurance, International Affairs, International Trade and Development, Internet, Investment Banking, Investment Management, Judiciary, Law Enforcement, Law Practice, Legal Services, Legislative Office, Leisure, Travel & Tourism, Libraries, Logistics and Supply Chain, Luxury Goods & Jewelry, Machinery, Management Consulting, Maritime, Market Research, Marketing and Advertising, Mechanical or Industrial Engineering, Media Production, Medical Devices, Medical Practice, Mental Health Care, Military, Mining & Metals, Motion Pictures and Film, Museums and Institutions, Music, Nanotechnology, Newspapers, Non-Profit Organization Management, Oil & Energy, Online Media, Outsourcing/Offshoring, Package/Freight Delivery, Packaging and Containers, Paper & Forest Products, Performing Arts, Pharmaceuticals, Philanthropy, Photography, Plastics, Political Organization, Primary/Secondary Education, Printing, Professional Training & Coaching, Program Development, Public Policy, Public Relations and Communications, Public Safety, Publishing, Railroad Manufacture, Ranching, Real Estate, Recreational Facilities and Services, Religious Institutions, Renewables & Environment, Research, Restaurants, Retail, Security and Investigations, Semiconductors, Shipbuilding, Sporting Goods, Sports, Staffing and Recruiting, Supermarkets, Telecommunications, Textiles, Think Tanks, Tobacco, Translation and Localization, Transportation/Trucking/Railroad, Utilities, Venture Capital & Private Equity, Veterinary, Warehousing, Wholesale, Wine and Spirits, Wireless, Writing and Editing)
  * match_tags[] `array`
  * goals[] `array` (values: Find business partnerships, Find prospective clients, Hire employees, Find a job, Find a co-founder, Receive mentorship from others, Mentor others)
  * location_importance `string` (values: Yes, Somewhat, No)
  * introduction `string`

#### Output
* output [Endpoint-patch-users--](#endpoint-patch-users--)

### webhooks.get
Fetch a listing of all webhooks owned by the current user/bubble combination.


```js
daniweb.webhooks.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Endpoint-get-webhooks](#endpoint-get-webhooks)

### webhooks.post
Register a new webhook for the current user/bubble combination. Specify an object_id to only be notified on an event related to that specific Conversation ID, Group ID, or User ID. Your access token must have access to the user being tracked, user you are in the conversation with, or user who created the group. You must be connected with a user in order to keep track of their online status. Alternatively, do not specify an object_id to be notified on all events that are related to conversations you're in, groups you're a member of, or users you are in conversations with. You may only have one webhook for each object_id/event. The webhook URI must reside on your own server. Webhooks do not expire when the access token used to create them expires. However, they will temporarily cease to function if the user who created them deauthorizes access to the application (effectively no longer existing within the bubble), unless/until the user reauthorizes the application using OAuth.


```js
daniweb.webhooks.post({
  "name": "",
  "event": "",
  "uri": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * bubbled `boolean`
  * object_id `integer`
  * event **required** `string` (values: conversation_message, conversation_seen, group_update, group_message, group_seen, user_online, user_update)
  * uri **required** `string`

#### Output
* output [Endpoint-post-webhooks](#endpoint-post-webhooks)

### webhooks.ID.delete
Delete a webhook that was previously registered by the current user/bubble combination.


```js
daniweb.webhooks.ID.delete({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`

#### Output
* output [Endpoint-delete-webhooks-ID](#endpoint-delete-webhooks-id)



## Definitions

### Api-pagination
* Api-pagination `object`
  * limit `number`
  * offset `number`
  * total_records `number`

### App
* App `object`
  * about `object`
    * description `string`
    * name `string`
    * website `object`
      * thumbshot `string`
      * url `string`
  * id **required** `number`
  * legal `object`
    * privacy_url `string`
    * tos_url `string`

### Bubble
* Bubble `object`
  * about `object`
    * name `string`
  * id **required** `number`

### Conversation
* Conversation `object`
  * first_message `object`
    * author [User](#user)
    * timestamp `string`
  * id **required** `number`
  * latest_message [Message](#message)
  * user_a [User](#user)
  * user_b [User](#user)

### Endpoint-delete-groups-ID-memberships
* Endpoint-delete-groups-ID-memberships `object`
  * success `boolean`

### Endpoint-delete-groups-messages-ID
* Endpoint-delete-groups-messages-ID `object`
  * data `array`
    * items [Group_message](#group_message)
  * status `boolean`

### Endpoint-delete-positions-ID
* Endpoint-delete-positions-ID `object`
  * success `boolean`

### Endpoint-delete-webhooks-ID
* Endpoint-delete-webhooks-ID `object`
  * success `boolean`

### Endpoint-get-apps
* Endpoint-get-apps `object`
  * data `array`
    * items [App](#app)
  * pagination [Api-pagination](#api-pagination)

### Endpoint-get-apps-ID
* Endpoint-get-apps-ID `object`
  * data `array`
    * items [App](#app)

### Endpoint-get-audiences
* Endpoint-get-audiences `object`
  * data `array`
    * items [Bubble](#bubble)
  * pagination [Api-pagination](#api-pagination)

### Endpoint-get-audiences-ID
* Endpoint-get-audiences-ID `object`
  * data `array`
    * items [Bubble](#bubble)

### Endpoint-get-autocompletes
* Endpoint-get-autocompletes `object`
  * data `object`
    * conversations `array`
      * items `string`
    * locations `array`
      * items `string`
    * matches `array`
      * items `string`
    * people `array`
      * items `string`

### Endpoint-get-conversations-ID
* Endpoint-get-conversations-ID `object`
  * data `array`
    * items [Conversation](#conversation)

### Endpoint-get-conversations-ID-messages
* Endpoint-get-conversations-ID-messages `object`
  * data `array`
    * items [Message](#message)
  * pagination [Api-pagination](#api-pagination)

### Endpoint-get-conversations-ID-statuses
* Endpoint-get-conversations-ID-statuses `object`
  * data `array`
    * items `object`
      * archived_status `boolean`
      * bubbled `object`
        * latest_message [Message](#message)
      * conversation [Conversation](#conversation)
      * earliest_unseen_message [Message](#message)
      * new_message_count `number`

### Endpoint-get-conversations-statuses
* Endpoint-get-conversations-statuses `object`
  * data `array`
    * items `object`
      * archived_status `boolean`
      * bubbled `object`
        * latest_message [Message](#message)
      * conversation [Conversation](#conversation)
      * earliest_unseen_message [Message](#message)
      * new_message_count `number`
  * pagination [Api-pagination](#api-pagination)

### Endpoint-get-groups
* Endpoint-get-groups `object`
  * data `array`
    * items [Group](#group)
  * pagination [Api-pagination](#api-pagination)

### Endpoint-get-groups-ID
* Endpoint-get-groups-ID `object`
  * data `array`
    * items [Group](#group)

### Endpoint-get-groups-ID-memberships
* Endpoint-get-groups-ID-memberships `object`
  * data `array`
    * items `object`
      * group [Group](#group)
      * member [User](#user)
      * privileges `object`
        * moderator `boolean`
        * owner `boolean`
  * pagination [Api-pagination](#api-pagination)

### Endpoint-get-groups-ID-messages
* Endpoint-get-groups-ID-messages `object`
  * data `array`
    * items [Group_message](#group_message)
  * pagination [Api-pagination](#api-pagination)

### Endpoint-get-groups-ID-statuses
* Endpoint-get-groups-ID-statuses `object`
  * data `array`
    * items `object`
      * earliest_unseen_message [Group_message](#group_message)
      * group [Group](#group)
      * membership_status `boolean`
      * new_message_count `number`

### Endpoint-get-groups-messages-ID
* Endpoint-get-groups-messages-ID `object`
  * data `array`
    * items [Group_message](#group_message)

### Endpoint-get-groups-messages-ID-metadata
* Endpoint-get-groups-messages-ID-metadata `object`
  * data `array`
    * items [Group_message_data](#group_message_data)
  * pagination [Api-pagination](#api-pagination)

### Endpoint-get-groups-messages-ID-metadata-collections
* Endpoint-get-groups-messages-ID-metadata-collections `object`
  * data `object`

### Endpoint-get-groups-statuses
* Endpoint-get-groups-statuses `object`
  * data `array`
    * items `object`
      * earliest_unseen_message [Group_message](#group_message)
      * group [Group](#group)
      * new_message_count `number`
  * pagination [Api-pagination](#api-pagination)

### Endpoint-get-industries
* Endpoint-get-industries `object`
  * data `array`
    * items `string`

### Endpoint-get-markdown-emoticons
* Endpoint-get-markdown-emoticons `object`
  * data `array`
    * items `object`
      * alt `string`
      * emoticon `string`
      * image `string`

### Endpoint-get-messages-ID
* Endpoint-get-messages-ID `object`
  * data `array`
    * items [Message](#message)

### Endpoint-get-messages-ID-metadata
* Endpoint-get-messages-ID-metadata `object`
  * data `array`
    * items [Message_data](#message_data)
  * pagination [Api-pagination](#api-pagination)

### Endpoint-get-messages-ID-metadata-collections
* Endpoint-get-messages-ID-metadata-collections `object`
  * data `object`

### Endpoint-get-users
* Endpoint-get-users `object`
  * data `array`
    * items [User](#user)
  * pagination [Api-pagination](#api-pagination)

### Endpoint-get-users--
* Endpoint-get-users-- `object`
  * data [Me](#me)

### Endpoint-get-users-ID
* Endpoint-get-users-ID `object`
  * data `array`
    * items [User](#user)

### Endpoint-get-users-ID-groups
* Endpoint-get-users-ID-groups `object`
  * data `array`
    * items [Group](#group)

### Endpoint-get-users-ID-groups-messages
* Endpoint-get-users-ID-groups-messages `object`
  * data `array`
    * items [Group_message](#group_message)
  * pagination [Api-pagination](#api-pagination)

### Endpoint-get-users-ID-metadata
* Endpoint-get-users-ID-metadata `object`
  * data `array`
    * items [User_data](#user_data)
  * pagination [Api-pagination](#api-pagination)

### Endpoint-get-users-ID-metadata-collections
* Endpoint-get-users-ID-metadata-collections `object`
  * data `object`

### Endpoint-get-users-ID-positions
* Endpoint-get-users-ID-positions `object`
  * data `array`
    * items [Position](#position)

### Endpoint-get-users-ID-synergies
* Endpoint-get-users-ID-synergies `object`
  * data `array`
    * items `object`
      * additional `object`
        * metadata_count `number`
        * positions_count `number`
      * conversation [Conversation](#conversation)
      * match `object`
        * algorithmic_match `boolean`
        * complementary_goals `array`
          * items `string`
        * distance_away `object`
          * miles `number`
        * industry `object`
          * complementary `boolean`
          * mutual_match `boolean`
          * similar `boolean`
        * mutual_connections `object`
          * count `number`
        * recommendation_strength `number`
      * meet `object`
        * payment `object`
          * paypal `object`
        * price_usd `number`
      * relationship `object`
        * existing_bubbled_conversation `boolean`
        * existing_conversation `boolean`
        * muted `boolean`
        * skipped `boolean`

### Endpoint-get-users-nearby
* Endpoint-get-users-nearby `object`
  * data `array`
    * items `object`
      * distance_away `object`
        * miles `number`
      * user [User](#user)
  * pagination [Api-pagination](#api-pagination)

### Endpoint-get-webhooks
* Endpoint-get-webhooks `object`
  * data `array`
    * items [Webhook](#webhook)

### Endpoint-patch-conversations-ID-statuses
* Endpoint-patch-conversations-ID-statuses `object`
  * data `object`
    * archived_status `boolean`
    * conversation [Conversation](#conversation)
  * success `boolean`

### Endpoint-patch-groups-ID
* Endpoint-patch-groups-ID `object`
  * data [Group](#group)
  * success `boolean`

### Endpoint-patch-groups-ID-memberships
* Endpoint-patch-groups-ID-memberships `object`
  * data `array`
    * items `object`
      * group [Group](#group)
      * member [User](#user)
      * privileges `object`
        * moderator `boolean`
  * pagination [Api-pagination](#api-pagination)
  * success `boolean`

### Endpoint-patch-positions-ID
* Endpoint-patch-positions-ID `object`
  * data [Position](#position)
  * success `boolean`

### Endpoint-patch-users--
* Endpoint-patch-users-- `object`
  * data [Me](#me)
  * success `boolean`

### Endpoint-patch-users-ID-synergies
* Endpoint-patch-users-ID-synergies `object`
  * data `object`
    * relationship `object`
      * muted `boolean`
      * skipped `boolean`
  * success `boolean`

### Endpoint-post-audiences-ID-memberships
* Endpoint-post-audiences-ID-memberships `object`
  * data `object`
    * audience `object`
      * id `number`
    * member [User](#user)
  * success `boolean`

### Endpoint-post-conversations-ID-messages
* Endpoint-post-conversations-ID-messages `object`
  * data [Message](#message)
  * success `boolean`

### Endpoint-post-conversations-ID-schedules
* Endpoint-post-conversations-ID-schedules `object`
  * data `array`
    * items `object`
      * author_count `number`
      * conversation_count `number`
      * conversation_id `number`
      * date `string`
      * first_message [Message](#message)
      * last_message [Message](#message)
      * message_count `number`
      * my_message_count `number`
      * navigation `object`
        * earliest_date `string`
        * next_date `string`
        * previous_date `string`
  * pagination [Api-pagination](#api-pagination)

### Endpoint-post-conversations-ID-searches
* Endpoint-post-conversations-ID-searches `object`
  * data `array`
    * items `object`
      * message [Message](#message)
      * relevance `object`
        * score `number`
  * pagination [Api-pagination](#api-pagination)

### Endpoint-post-conversations-schedules
* Endpoint-post-conversations-schedules `object`
  * data `array`
    * items `object`
      * author_count `number`
      * conversation_count `number`
      * conversation_id `number`
      * date `string`
      * first_message [Message](#message)
      * last_message [Message](#message)
      * message_count `number`
      * my_message_count `number`
      * navigation `object`
        * earliest_date `string`
        * next_date `string`
        * previous_date `string`
  * pagination [Api-pagination](#api-pagination)

### Endpoint-post-conversations-searches
* Endpoint-post-conversations-searches `object`
  * data `array`
    * items `object`
      * message [Message](#message)
      * relevance `object`
        * score `number`
  * pagination [Api-pagination](#api-pagination)

### Endpoint-post-groups
* Endpoint-post-groups `object`
  * data [Group](#group)
  * success `boolean`

### Endpoint-post-groups-ID-memberships
* Endpoint-post-groups-ID-memberships `object`
  * data `object`
    * group [Group](#group)
    * member [User](#user)
  * success `boolean`

### Endpoint-post-groups-ID-messages
* Endpoint-post-groups-ID-messages `object`
  * data `array`
    * items [Group_message](#group_message)
  * success `boolean`

### Endpoint-post-groups-ID-schedules
* Endpoint-post-groups-ID-schedules `object`
  * data `array`
    * items `object`
      * author_count `number`
      * date `string`
      * first_message [Group_message](#group_message)
      * group_count `number`
      * group_id `number`
      * last_message [Group_message](#group_message)
      * message_count `number`
      * my_message_count `number`
      * navigation `object`
        * earliest_date `string`
        * next_date `string`
        * previous_date `string`
  * pagination [Api-pagination](#api-pagination)

### Endpoint-post-groups-messages-ID-metadata
* Endpoint-post-groups-messages-ID-metadata `object`
  * data `object`
  * success `boolean`

### Endpoint-post-groups-messages-metadata-filters
* Endpoint-post-groups-messages-metadata-filters `object`
  * data `array`
    * items `object`
      * matched_metadata `object`
      * message [Group_message](#group_message)
  * pagination [Api-pagination](#api-pagination)

### Endpoint-post-groups-schedules
* Endpoint-post-groups-schedules `object`
  * data `array`
    * items `object`
      * author_count `number`
      * date `string`
      * first_message [Group_message](#group_message)
      * group_count `number`
      * group_id `number`
      * last_message [Group_message](#group_message)
      * message_count `number`
      * my_message_count `number`
      * navigation `object`
        * earliest_date `string`
        * next_date `string`
        * previous_date `string`
  * pagination [Api-pagination](#api-pagination)

### Endpoint-post-markdown
* Endpoint-post-markdown `object`
  * data `object`
    * parsed `string`
    * raw `string`

### Endpoint-post-messages-ID-metadata
* Endpoint-post-messages-ID-metadata `object`
  * data `object`
  * success `boolean`

### Endpoint-post-messages-metadata-filters
* Endpoint-post-messages-metadata-filters `object`
  * data `array`
    * items `object`
      * matched_metadata `object`
      * message [Message](#message)
  * pagination [Api-pagination](#api-pagination)

### Endpoint-post-positions
* Endpoint-post-positions `object`
  * data [Position](#position)
  * success `boolean`

### Endpoint-post-users-ID-messages
* Endpoint-post-users-ID-messages `object`
  * data [Message](#message)
  * success `boolean`

### Endpoint-post-users-ID-metadata
* Endpoint-post-users-ID-metadata `object`
  * data `object`
  * success `boolean`

### Endpoint-post-users-invites
* Endpoint-post-users-invites `object`
  * data `object`
    * discovered `object`
      * users `array`
        * items [User](#user)
    * emailed `object`
      * emails `array`
        * items `string`
    * existing `object`
      * conversations `array`
        * items [User](#user)
    * invalid `object`
      * emails `array`
        * items `string`
  * success `boolean`

### Endpoint-post-users-metadata-filters
* Endpoint-post-users-metadata-filters `object`
  * data `array`
    * items `object`
      * matched_metadata `object`
      * user [User](#user)
  * pagination [Api-pagination](#api-pagination)

### Endpoint-post-users-searches
* Endpoint-post-users-searches `object`
  * data `array`
    * items `object`
      * relevance `object`
        * score `number`
      * user [User](#user)
  * pagination [Api-pagination](#api-pagination)

### Endpoint-post-webhooks
* Endpoint-post-webhooks `object`
  * data [Webhook](#webhook)
  * success `boolean`

### Group
* Group `object`
  * first_message `object`
    * timestamp `string`
  * id **required** `number`
  * latest_message [Group_message](#group_message)
  * member_count `number`
  * owner [User](#user)
  * properties `object`
    * description `string`
    * name `string`
    * privacy `string`
    * slug `string`

### Group_message
* Group_message `object`
  * author [User](#user)
  * group [Group](#group)
  * id **required** `number`
  * last_seen `object`
    * timestamp `string`
    * user [User](#user)
  * moderated `object`
    * deleted_status `boolean`
  * text `object`
    * parsed `string`
  * timestamp `string`

### Group_message_data
* Group_message_data `object`
  * app [App](#app)
  * content `object`
    * key `string`
    * value `string`
  * id **required** `number`
  * message [Group_message](#group_message)
  * owner [User](#user)
  * settings `object`
    * privacy `string`
  * status `object`
    * last_updated_timestamp `string`

### Me
* Me `object`
  * business_card `object`
    * company_name `string`
    * company_size `string`
    * headline `string`
    * industry `string`
    * interest_tags `array`
      * items `string`
    * job_position `string`
    * summary `string`
    * website `object`
      * thumbshot_uri `string`
      * url `string`
  * community_persona [Member](#member)
  * id **required** `number`
  * location `object`
    * city `string`
    * country `number`
    * ip_address `string`
    * latitude `string`
    * longitude `string`
    * region `string`
  * matching `object`
    * goals `array`
      * items `string`
    * interest_tags `array`
      * items `string`
    * location_importance `string`
    * targeted_industry `string`
  * profile `object`
    * first_name `string`
    * introduction `string`
    * last_name `string`
  * settings `object`
    * email `string`
    * email_verified `boolean`
    * notifications `string`
    * timezone `number`
  * usage `object`
    * available_status `boolean`
    * joined_timestamp `string`
    * last_activity_timestamp `string`
    * online_status `boolean`

### Member
* Member `object`
  * id **required** `number`
  * identity `object`
    * avatar_uri `string`
    * badge `string`
    * profile_url `string`
    * username `string`
  * location `object`
    * free_form `string`
  * personal `object`
    * about_me `string`
    * birthday `string`
    * interests `string`
    * pc_specs `string`
  * signature `object`
    * parsed `string`
    * raw `string`
  * stats `object`
    * answered_count `number`
    * endorsements_count `number`
    * posts_count `number`
    * reputation_count `number`

### Message
* Message `object`
  * author [User](#user)
  * conversation [Conversation](#conversation)
  * id **required** `number`
  * last_seen `object`
    * timestamp `string`
    * user [User](#user)
  * text `object`
    * parsed `string`
  * timestamp `string`

### Message_data
* Message_data `object`
  * app [App](#app)
  * content `object`
    * key `string`
    * value `string`
  * id **required** `number`
  * message [Message](#message)
  * owner [User](#user)
  * settings `object`
    * privacy `string`
  * status `object`
    * last_updated_timestamp `string`

### Position
* Position `object`
  * app [App](#app)
  * category `string`
  * id **required** `number`
  * organization `object`
    * industry `string`
    * name `string`
    * size `string`
    * ticker `string`
    * type `string`
    * url `string`
  * role `object`
    * end_date `string`
    * start_date `string`
    * summary `string`
    * title `string`
  * user [User](#user)

### User
* User `object`
  * business_card `object`
    * company_name `string`
    * company_size `string`
    * headline `string`
    * industry `string`
    * interest_tags `array`
      * items `string`
    * job_position `string`
    * summary `string`
    * website `object`
      * thumbshot_uri `string`
      * url `string`
  * community_persona [Member](#member)
  * id **required** `number`
  * profile `object`
    * first_name `string`
    * last_name `string`
  * usage `object`
    * available_status `boolean`
    * joined_timestamp `string`
    * last_activity_timestamp `string`
    * online_status `boolean`

### User_data
* User_data `object`
  * app [App](#app)
  * content `object`
    * key `string`
    * value `string`
  * id **required** `number`
  * owner [User](#user)
  * settings `object`
    * privacy `string`
  * status `object`
    * last_updated_timestamp `string`
  * user [User](#user)

### Webhook
* Webhook `object`
  * app [App](#app)
  * event `object`
    * action `string`
  * id **required** `number`
  * name `string`
  * object `object`
    * id `number`
    * type `string`
  * uri `string`
  * user [User](#user)


