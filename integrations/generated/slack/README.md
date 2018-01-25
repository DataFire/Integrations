# @datafire/slack

Client library for Slack

## Installation and Usage
```bash
npm install --save @datafire/slack
```
```js
let slack = require('@datafire/slack').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

slack.users_setPresence({}).then(data => {
  console.log(data);
});
```

## Description

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
slack.oauthCallback({
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
slack.oauthRefresh(null, context)
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

### api_test
Checks API calling code.


```js
slack.api_test({}, context)
```

#### Input
* input `object`
  * foo `string`: example property to return
  * error `string`: Error response to return

#### Output
* output `object`: Schema for successful response api.test method
  * ok **required** [defs_ok_true](#defs_ok_true)

### apps_permissions_info
Returns list of permissions this app has on a team.


```js
slack.apps_permissions_info({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `none`

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### apps_permissions_request
Allows an app to request additional scopes


```js
slack.apps_permissions_request({}, context)
```

#### Input
* input `object`
  * scopes `string`: A comma separated list of scopes to request for
  * token `string`: Authentication token. Requires scope: `none`
  * trigger_id `string`: Token used to trigger the permissions API

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### auth_revoke
Revokes a token.


```js
slack.auth_revoke({}, context)
```

#### Input
* input `object`
  * test `boolean`: Setting this parameter to `1` triggers a _testing mode_ where the specified token will not actually be revoked.
  * token `string`: Authentication token. Requires scope: `none`

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### auth_test
Checks authentication & identity.


```js
slack.auth_test({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `none`

#### Output
* output `object`: Schema for successful response auth.test method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * team **required** `string`
  * team_id **required** [defs_team](#defs_team)
  * url **required** `string`
  * user **required** `string`
  * user_id **required** [defs_user](#defs_user)

### bots_info
Gets information about a bot user.


```js
slack.bots_info({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `users:read`
  * bot `string`: Bot user to get info on

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_archive
Archives a channel.


```js
slack.channels_archive({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `channels:write`
  * channel `string`: Channel to archive

#### Output
* output `object`: Schema for successful response from channels.archive method
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_create
Creates a channel.


```js
slack.channels_create({}, context)
```

#### Input
* input `object`
  * validate `boolean`: Whether to return errors on invalid channel name instead of modifying it to meet the specified criteria.
  * token `string`: Authentication token. Requires scope: `channels:write`
  * name `string`: Name of channel to create

#### Output
* output `object`: Schema for successful response channels.create method
  * channel **required** [objs_channel](#objs_channel)
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_history
Fetches history of messages and events from a channel.


```js
slack.channels_history({}, context)
```

#### Input
* input `object`
  * count `integer`: Number of messages to return, between 1 and 1000.
  * unreads `boolean`: Include `unread_count_display` in the output?
  * inclusive `boolean`: Include messages with latest or oldest timestamp in results.
  * token `string`: Authentication token. Requires scope: `channels:history`
  * oldest `number`: Start of time range of messages to include in results.
  * channel `string`: Channel to fetch history for.
  * latest `number`: End of time range of messages to include in results.

#### Output
* output `object`: Schema for successful response channels.history method
  * has_more **required** `boolean`
  * messages **required** `array`
    * items [objs_message](#objs_message)
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_info
Gets information about a channel.


```js
slack.channels_info({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `channels:read`
  * include_locale `boolean`: Set this to `true` to receive the locale for this channel. Defaults to `false`
  * channel `string`: Channel to get info on

#### Output
* output `object`: Schema for successful response channels.info method
  * channel **required** [objs_channel](#objs_channel)
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_invite
Invites a user to a channel.


```js
slack.channels_invite({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `channels:write`
  * user `string`: User to invite to channel.
  * channel `string`: Channel to invite user to.

#### Output
* output `object`: Schema for successful response channels.invite method
  * channel **required** [objs_channel](#objs_channel)
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_join
Joins a channel, creating it if needed.


```js
slack.channels_join({}, context)
```

#### Input
* input `object`
  * validate `boolean`: Whether to return errors on invalid channel name instead of modifying it to meet the specified criteria.
  * token `string`: Authentication token. Requires scope: `channels:write`
  * name `string`: Name of channel to join

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_kick
Removes a user from a channel.


```js
slack.channels_kick({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `channels:write`
  * user `string`: User to remove from channel.
  * channel `string`: Channel to remove user from.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_leave
Leaves a channel.


```js
slack.channels_leave({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `channels:write`
  * channel `string`: Channel to leave

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_list
Lists all channels in a Slack team.


```js
slack.channels_list({}, context)
```

#### Input
* input `object`
  * exclude_members `boolean`: Exclude the `members` collection from each `channel`
  * cursor `string`: Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.
  * token `string`: Authentication token. Requires scope: `channels:read`
  * limit `integer`: The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.
  * exclude_archived `boolean`: Exclude archived channels from the list

#### Output
* output `object`: Schema for successful response channels.list method
  * channels **required** `array`
    * items [objs_channel](#objs_channel)
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_mark
Sets the read cursor in a channel.


```js
slack.channels_mark({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `channels:write`
  * ts `number`: Timestamp of the most recently seen message.
  * channel `string`: Channel to set reading cursor in.

#### Output
* output `object`: Schema for successful response channels.mark method
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_rename
Renames a channel.


```js
slack.channels_rename({}, context)
```

#### Input
* input `object`
  * validate `boolean`: Whether to return errors on invalid channel name instead of modifying it to meet the specified criteria.
  * token `string`: Authentication token. Requires scope: `channels:write`
  * name `string`: New name for channel.
  * channel `string`: Channel to rename

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_replies
Retrieve a thread of messages posted to a channel


```js
slack.channels_replies({}, context)
```

#### Input
* input `object`
  * thread_ts `number`: Unique identifier of a thread's parent message
  * token `string`: Authentication token. Requires scope: `channels:history`
  * channel `string`: Channel to fetch thread from

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_setPurpose
Sets the purpose for a channel.


```js
slack.channels_setPurpose({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `channels:write`
  * purpose `string`: The new purpose
  * channel `string`: Channel to set the purpose of

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_setTopic
Sets the topic for a channel.


```js
slack.channels_setTopic({}, context)
```

#### Input
* input `object`
  * topic `string`: The new topic
  * token `string`: Authentication token. Requires scope: `channels:write`
  * channel `string`: Channel to set the topic of

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_unarchive
Unarchives a channel.


```js
slack.channels_unarchive({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `channels:write`
  * channel `string`: Channel to unarchive

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### chat_delete
Deletes a message.


```js
slack.chat_delete({}, context)
```

#### Input
* input `object`
  * as_user `boolean`: Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot users](/bot-users) in this context are considered authed users. If unused or false, the message will be deleted with `chat:write:bot` scope.
  * token `string`: Authentication token. Requires scope: `chat:write`
  * ts `number`: Timestamp of the message to be deleted.
  * channel `string`: Channel containing the message to be deleted.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### chat_meMessage
Share a me message into a channel.


```js
slack.chat_meMessage({}, context)
```

#### Input
* input `object`
  * text `string`: Text of the message to send.
  * token `string`: Authentication token. Requires scope: `chat:write:user`
  * channel `string`: Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### chat_postEphemeral
Sends an ephemeral message to a user in a channel.


```js
slack.chat_postEphemeral({}, context)
```

#### Input
* input `object`
  * attachments `string`: A JSON-based array of structured attachments, presented as a URL-encoded string.
  * text `string`: Text of the message to send. See below for an explanation of [formatting](#formatting). This field is usually required, unless you're providing only `attachments` instead.
  * link_names `boolean`: Find and link channel names and usernames.
  * parse `string`: Change how messages are treated. Defaults to `none`. See [below](#formatting).
  * token `string`: Authentication token. Requires scope: `chat:write`
  * user `string`: `id` of the user who will receive the ephemeral message. The user should be in the channel specified by the `channel` argument.
  * as_user `boolean`: Pass true to post the message as the authed bot. Defaults to false.
  * channel `string`: Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name.

#### Output
* output `object`: Schema for successful response of chat.postEphemeral method
  * message_ts **required** [defs_ts](#defs_ts)
  * ok **required** [defs_ok_true](#defs_ok_true)

### chat_postMessage
Sends a message to a channel.


```js
slack.chat_postMessage({}, context)
```

#### Input
* input `object`
  * username `string`: Set your bot's user name. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below.
  * thread_ts `number`: Provide another message's `ts` value to make this message a reply. Avoid using a reply's `ts` value; use its parent instead.
  * attachments `string`: A JSON-based array of structured attachments, presented as a URL-encoded string.
  * unfurl_links `boolean`: Pass true to enable unfurling of primarily text-based content.
  * text `string`: Text of the message to send. See below for an explanation of [formatting](#formatting). This field is usually required, unless you're providing only `attachments` instead.
  * unfurl_media `boolean`: Pass false to disable unfurling of media content.
  * parse `string`: Change how messages are treated. Defaults to `none`. See [below](#formatting).
  * as_user `boolean`: Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [authorship](#authorship) below.
  * token `string`: Authentication token. Requires scope: `chat:write`
  * icon_emoji `string`: Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction with `as_user` set to `false`, otherwise ignored. See [authorship](#authorship) below.
  * link_names `boolean`: Find and link channel names and usernames.
  * icon_url `string`: URL to an image to use as the icon for this message. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below.
  * channel `string`: Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. See [below](#channels) for more details.
  * reply_broadcast `boolean`: Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to `false`.

#### Output
* output `object`: Schema for successful response of chat.postMessage method
  * channel **required** [defs_channel](#defs_channel)
  * message **required** [objs_message](#objs_message)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * ts **required** [defs_ts](#defs_ts)

### chat_unfurl
Provide custom unfurl behavior for user-posted URLs


```js
slack.chat_unfurl({}, context)
```

#### Input
* input `object`
  * user_auth_message `string`: Provide a simply-formatted string to send as an ephemeral message to the user as invitation to authenticate further and enable full unfurling behavior
  * user_auth_required `boolean`: Set to `true` or `1` to indicate the user must install your Slack app to trigger unfurls for this domain
  * unfurls `string`: URL-encoded JSON map with keys set to URLs featured in the the message, pointing to their unfurl message attachments.
  * ts `string`: Timestamp of the message to add unfurl behavior to.
  * user_auth_url `string`: Send users to this custom URL where they will complete authentication in your app to fully trigger unfurling. Value should be properly URL-encoded.
  * token `string`: Authentication token. Requires scope: `links:write`
  * channel `string`: Channel ID of the message

#### Output
* output `object`: Schema for successful response of chat.unfurl method
  * ok **required** [defs_ok_true](#defs_ok_true)

### chat_update
Updates a message.


```js
slack.chat_update({}, context)
```

#### Input
* input `object`
  * attachments `string`: A JSON-based array of structured attachments, presented as a URL-encoded string. This field is required when not presenting `text`.
  * text `string`: New text for the message, using the [default formatting rules](/docs/formatting). It's not required when presenting `attachments`.
  * ts `number`: Timestamp of the message to be updated.
  * parse `string`: Change how messages are treated. Defaults to `client`, unlike `chat.postMessage`. See [below](#formatting).
  * as_user `boolean`: Pass true to update the message as the authed user. [Bot users](/bot-users) in this context are considered authed users.
  * token `string`: Authentication token. Requires scope: `chat:write`
  * link_names `boolean`: Find and link channel names and usernames. Defaults to `none`. This parameter should be used in conjunction with `parse`. To set `link_names` to `1`, specify a `parse` mode of `full`.
  * channel `string`: Channel containing the message to be updated.

#### Output
* output `object`: Schema for successful response of chat.update method
  * channel **required** [defs_channel](#defs_channel)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * text **required** `string`
  * ts **required** [defs_ts](#defs_ts)

### conversations_archive
Archives a conversation.


```js
slack.conversations_archive({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * channel `string`: ID of conversation to archive

#### Output
* output `object`: Schema for successful response conversations.archive method
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_close
Closes a direct message or multi-person direct message.


```js
slack.conversations_close({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * channel `string`: Conversation to close.

#### Output
* output `object`: Schema for successful response conversations.close method
  * already_closed `boolean`
  * no_op `boolean`
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_create
Initiates a public or private channel-based conversation


```js
slack.conversations_create({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * name `string`: Name of the public or private channel to create
  * is_private `boolean`: Create a private channel instead of a public one

#### Output
* output `object`: Schema for successful response conversations.create method
  * channel **required** [objs_conversation](#objs_conversation)
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_history
Fetches a conversation's history of messages and events.


```js
slack.conversations_history({}, context)
```

#### Input
* input `object`
  * cursor `string`: Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.
  * token `string`: Authentication token. Requires scope: `conversations:history`
  * limit `integer`: The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.
  * oldest `number`: Start of time range of messages to include in results.
  * channel `string`: Conversation ID to fetch history for.
  * latest `number`: End of time range of messages to include in results.

#### Output
* output `object`: Schema for successful response from conversations.history method
  * has_more **required** `boolean`
  * messages **required** `array`
    * items [objs_message](#objs_message)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * pin_count **required** `integer`

### conversations_info
Retrieve information about a conversation.


```js
slack.conversations_info({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:read`
  * channel `string`: Conversation ID to learn more about
  * include_locale `boolean`: Set this to `true` to receive the locale for this conversation. Defaults to `false`

#### Output
* output `object`: Schema for successful response conversations.info
  * channel **required** [objs_conversation](#objs_conversation)
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_invite
Invites users to a channel.


```js
slack.conversations_invite({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * users `string`: A comma separated list of user IDs. Up to 30 users may be listed.
  * channel `string`: The ID of the public or private channel to invite user(s) to.

#### Output
* output `object`: Schema for successful response from conversations.invite method
  * channel **required** [objs_conversation](#objs_conversation)
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_join
Joins an existing conversation.


```js
slack.conversations_join({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `channels:write`
  * channel `string`: ID of conversation to join

#### Output
* output `object`: Schema for successful response from conversations.join method
  * channel **required** [objs_conversation](#objs_conversation)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * response_metadata `object`
    * warnings `array`
      * items `string`
  * warning `string`

### conversations_kick
Removes a user from a conversation.


```js
slack.conversations_kick({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * user `string`: User ID to be removed.
  * channel `string`: ID of conversation to remove user from.

#### Output
* output `object`: Schema for successful response conversations.kick method
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_leave
Leaves a conversation.


```js
slack.conversations_leave({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * channel `string`: Conversation to leave

#### Output
* output `object`: Schema for successful response from conversations.leave method
  * not_in_channel `boolean` (values: true)
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_list
Lists all channels in a Slack team.


```js
slack.conversations_list({}, context)
```

#### Input
* input `object`
  * cursor `string`: Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.
  * token `string`: Authentication token. Requires scope: `conversations:read`
  * exclude_archived `boolean`: Set to `true` to exclude archived channels from the list
  * limit `integer`: The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. Must be an integer no larger than 1000.
  * types `string`: Mix and match channel types by providing a comma-separated list of any combination of `public_channel`, `private_channel`, `mpim`, `im`

#### Output
* output `object`: Schema for successful response from conversations.list method
  * channels **required** `array`
    * items [objs_conversation](#objs_conversation)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * response_metadata `object`
    * next_cursor **required** `string`

### conversations_members
Retrieve members of a conversation.


```js
slack.conversations_members({}, context)
```

#### Input
* input `object`
  * cursor `string`: Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.
  * token `string`: Authentication token. Requires scope: `conversations:read`
  * limit `integer`: The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.
  * channel `string`: ID of the conversation to retrieve members for

#### Output
* output `object`: Schema for successful response conversations.members method
  * members **required** `array`
    * items [defs_user](#defs_user)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * response_metadata **required** `object`
    * next_cursor **required** `string`

### conversations_open
Opens or resumes a direct message or multi-person direct message.


```js
slack.conversations_open({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * return_im `boolean`: Boolean, indicates you want the full IM channel definition in the response.
  * users `string`: Comma separated lists of users. If only one user is included, this creates a 1:1 DM.  The ordering of the users is preserved whenever a multi-person direct message is returned. Supply a `channel` when not supplying `users`.
  * channel `string`: Resume a conversation by supplying an `im` or `mpim`'s ID. Or provide the `users` field instead.

#### Output
* output `object`: Schema for successful response from conversations.open method when opening channels, ims, mpims
  * already_open `boolean`
  * channel **required** [objs_conversation](#objs_conversation)
  * no_op `boolean`
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_rename
Renames a conversation.


```js
slack.conversations_rename({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * name `string`: New name for conversation.
  * channel `string`: ID of conversation to rename

#### Output
* output `object`: Schema for successful response from conversations.rename method
  * channel **required** [objs_conversation](#objs_conversation)
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_replies
Retrieve a thread of messages posted to a conversation


```js
slack.conversations_replies({}, context)
```

#### Input
* input `object`
  * ts `number`: Unique identifier of a thread's parent message
  * cursor `string`: Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.
  * token `string`: Authentication token. Requires scope: `conversations:history`
  * limit `integer`: The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.
  * channel `string`: Conversation ID to fetch thread from

#### Output
* output `object`: Schema for successful response from conversations.replies method
  * has_more `boolean`
  * messages **required** `array`
    * items

  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_setPurpose
Sets the purpose for a conversation.


```js
slack.conversations_setPurpose({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * purpose `string`: A new, specialer purpose
  * channel `string`: Conversation to set the purpose of

#### Output
* output `object`: Schema for successful response from conversations.setPurpose method
  * channel **required** [objs_conversation](#objs_conversation)
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_setTopic
Sets the topic for a conversation.


```js
slack.conversations_setTopic({}, context)
```

#### Input
* input `object`
  * topic `string`: The new topic string. Does not support formatting or linkification.
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * channel `string`: Conversation to set the topic of

#### Output
* output `object`: Schema for successful response from conversations.setTopic method
  * channel **required** [objs_conversation](#objs_conversation)
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_unarchive
Reverses conversation archival.


```js
slack.conversations_unarchive({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * channel `string`: ID of conversation to unarchive

#### Output
* output `object`: Schema for successful response from conversations.unarchive method
  * ok **required** [defs_ok_true](#defs_ok_true)

### dialog_open
Open a dialog with a user


```js
slack.dialog_open({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `none`
  * dialog `string`: The dialog definition. This must be a JSON-encoded string.
  * trigger_id `string`: Exchange a trigger to post to the user.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### dnd_endDnd
Ends the current user's Do Not Disturb session immediately.


```js
slack.dnd_endDnd({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `dnd:write`

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### dnd_endSnooze
Ends the current user's snooze mode immediately.


```js
slack.dnd_endSnooze({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `dnd:write`

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### dnd_info
Retrieves a user's current Do Not Disturb status.


```js
slack.dnd_info({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `dnd:read`
  * user `string`: User to fetch status for (defaults to current user)

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### dnd_setSnooze
Turns on Do Not Disturb mode for the current user, or changes its duration.


```js
slack.dnd_setSnooze({}, context)
```

#### Input
* input `object`
  * num_minutes `integer`: Number of minutes, from now, to snooze until.
  * token `string`: Authentication token. Requires scope: `dnd:write`

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### dnd_teamInfo
Retrieves the Do Not Disturb status for users on a team.


```js
slack.dnd_teamInfo({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `dnd:read`
  * users `string`: Comma-separated list of users to fetch Do Not Disturb status for

#### Output
* output `object`: Schema for successful response from dnd.teamInfo method
  * cached `boolean`
  * ok **required** [defs_ok_true](#defs_ok_true)
  * users **required** `object`

### emoji_list
Lists custom emoji for a team.


```js
slack.emoji_list({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `emoji:read`

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### files_comments_add
Add a comment to an existing file.


```js
slack.files_comments_add({}, context)
```

#### Input
* input `object`
  * comment `string`: Text of the comment to add.
  * token `string`: Authentication token. Requires scope: `files:write:user`
  * file `string`: File to add a comment to.

#### Output
* output `object`: Schema for successful response files.comments.add method
  * comment **required** [objs_comment](#objs_comment)
  * ok **required** [defs_ok_true](#defs_ok_true)

### files_comments_delete
Deletes an existing comment on a file.


```js
slack.files_comments_delete({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `files:write:user`
  * id `string`: The comment to delete.
  * file `string`: File to delete a comment from.

#### Output
* output `object`: Schema for successful response files.comments.delete method
  * ok **required** [defs_ok_true](#defs_ok_true)

### files_comments_edit
Edit an existing file comment.


```js
slack.files_comments_edit({}, context)
```

#### Input
* input `object`
  * comment `string`: Text of the comment to edit.
  * token `string`: Authentication token. Requires scope: `files:write:user`
  * id `string`: The comment to edit.
  * file `string`: File containing the comment to edit.

#### Output
* output `object`: Schema for successful response files.comments.edit method
  * comment **required** [objs_comment](#objs_comment)
  * ok **required** [defs_ok_true](#defs_ok_true)

### files_delete
Deletes a file.


```js
slack.files_delete({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `files:write:user`
  * file `string`: ID of file to delete.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### files_info
Gets information about a team file.


```js
slack.files_info({}, context)
```

#### Input
* input `object`
  * count `string`
  * token `string`: Authentication token. Requires scope: `files:read`
  * file `string`: Specify a file by providing its ID.
  * page `string`

#### Output
* output `object`: Schema for successful response files.info method
  * comments **required** [objs_comments](#objs_comments)
  * file **required** [objs_file](#objs_file)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * paging **required** [objs_paging](#objs_paging)

### files_list
Lists & filters team files.


```js
slack.files_list({}, context)
```

#### Input
* input `object`
  * count `string`
  * channel `string`: Filter files appearing in a specific channel, indicated by its ID.
  * ts_to `number`: Filter files created before this timestamp (inclusive).
  * ts_from `number`: Filter files created after this timestamp (inclusive).
  * token `string`: Authentication token. Requires scope: `files:read`
  * user `string`: Filter files created by a single user.
  * page `string`
  * types `string`: Filter files by type:

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### files_revokePublicURL
Revokes public/external sharing access for a file


```js
slack.files_revokePublicURL({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `files:write:user`
  * file `string`: File to revoke

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### files_sharedPublicURL
Enables a file for public/external sharing.


```js
slack.files_sharedPublicURL({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `files:write:user`
  * file `string`: File to share

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### files_upload
Uploads or creates a file.


```js
slack.files_upload({}, context)
```

#### Input
* input `object`
  * channels `string`: Comma-separated list of channel names or IDs where the file will be shared.
  * title `string`: Title of file.
  * initial_comment `string`: Initial comment to add to file.
  * filetype `string`: A [file type](/types/file#file_types) identifier.
  * filename `string`: Filename of file.
  * content `string`: File contents via a POST variable. If omitting this parameter, you must provide a `file`.
  * token `string`: Authentication token. Requires scope: `files:write:user`
  * file `string`: File contents via `multipart/form-data`. If omitting this parameter, you must submit `content`.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_archive
Archives a private channel.


```js
slack.groups_archive({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `groups:write`
  * channel `string`: Private channel to archive

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_create
Creates a private channel.


```js
slack.groups_create({}, context)
```

#### Input
* input `object`
  * validate `boolean`: Whether to return errors on invalid channel name instead of modifying it to meet the specified criteria.
  * token `string`: Authentication token. Requires scope: `groups:write`
  * name `string`: Name of private channel to create

#### Output
* output `object`: Schema for successful response groups.create method
  * group **required** [objs_group](#objs_group)
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_createChild
Clones and archives a private channel.


```js
slack.groups_createChild({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `groups:write`
  * channel `string`: Private channel to clone and archive.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_history
Fetches history of messages and events from a private channel.


```js
slack.groups_history({}, context)
```

#### Input
* input `object`
  * count `integer`: Number of messages to return, between 1 and 1000.
  * unreads `boolean`: Include `unread_count_display` in the output?
  * inclusive `boolean`: Include messages with latest or oldest timestamp in results.
  * token `string`: Authentication token. Requires scope: `groups:history`
  * oldest `number`: Start of time range of messages to include in results.
  * channel `string`: Private channel to fetch history for.
  * latest `number`: End of time range of messages to include in results.

#### Output
* output `object`: Schema for successful response groups.history method
  * has_more **required** `boolean`
  * messages **required** `array`
    * items [objs_message](#objs_message)
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_info
Gets information about a private channel.


```js
slack.groups_info({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `groups:read`
  * include_locale `boolean`: Set this to `true` to receive the locale for this group. Defaults to `false`
  * channel `string`: Private channel to get info on

#### Output
* output `object`: Schema for successful response groups.info method
  * group **required** [objs_group](#objs_group)
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_invite
Invites a user to a private channel.


```js
slack.groups_invite({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `groups:write`
  * user `string`: User to invite.
  * channel `string`: Private channel to invite user to.

#### Output
* output `object`: Schema for successful response groups.invite method
  * group **required** [objs_group](#objs_group)
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_kick
Removes a user from a private channel.


```js
slack.groups_kick({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `groups:write`
  * user `string`: User to remove from private channel.
  * channel `string`: Private channel to remove user from.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_leave
Leaves a private channel.


```js
slack.groups_leave({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `groups:write`
  * channel `string`: Private channel to leave

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_list
Lists private channels that the calling user has access to.


```js
slack.groups_list({}, context)
```

#### Input
* input `object`
  * exclude_members `boolean`: Exlude the `members` from each `group`
  * token `string`: Authentication token. Requires scope: `groups:read`
  * exclude_archived `boolean`: Don't return archived private channels.

#### Output
* output `object`: Schema for successful response groups.list method
  * groups **required** `array`
    * items [objs_group](#objs_group)
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_mark
Sets the read cursor in a private channel.


```js
slack.groups_mark({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `groups:write`
  * ts `number`: Timestamp of the most recently seen message.
  * channel `string`: Private channel to set reading cursor in.

#### Output
* output `object`: Schema for successful response from groups.mark method
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_open
Opens a private channel.


```js
slack.groups_open({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `groups:write`
  * channel `string`: Private channel to open.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_rename
Renames a private channel.


```js
slack.groups_rename({}, context)
```

#### Input
* input `object`
  * validate `boolean`: Whether to return errors on invalid channel name instead of modifying it to meet the specified criteria.
  * token `string`: Authentication token. Requires scope: `groups:write`
  * name `string`: New name for private channel.
  * channel `string`: Private channel to rename

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_replies
Retrieve a thread of messages posted to a private channel


```js
slack.groups_replies({}, context)
```

#### Input
* input `object`
  * thread_ts `number`: Unique identifier of a thread's parent message
  * token `string`: Authentication token. Requires scope: `groups:history`
  * channel `string`: Private channel to fetch thread from

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_setPurpose
Sets the purpose for a private channel.


```js
slack.groups_setPurpose({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `groups:write`
  * purpose `string`: The new purpose
  * channel `string`: Private channel to set the purpose of

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_setTopic
Sets the topic for a private channel.


```js
slack.groups_setTopic({}, context)
```

#### Input
* input `object`
  * topic `string`: The new topic
  * token `string`: Authentication token. Requires scope: `groups:write`
  * channel `string`: Private channel to set the topic of

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_unarchive
Unarchives a private channel.


```js
slack.groups_unarchive({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `groups:write`
  * channel `string`: Private channel to unarchive

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### im_close
Close a direct message channel.


```js
slack.im_close({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `im:write`
  * channel `string`: Direct message channel to close.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### im_history
Fetches history of messages and events from direct message channel.


```js
slack.im_history({}, context)
```

#### Input
* input `object`
  * count `integer`: Number of messages to return, between 1 and 1000.
  * unreads `boolean`: Include `unread_count_display` in the output?
  * inclusive `boolean`: Include messages with latest or oldest timestamp in results.
  * token `string`: Authentication token. Requires scope: `im:history`
  * oldest `number`: Start of time range of messages to include in results.
  * channel `string`: Direct message channel to fetch history for.
  * latest `number`: End of time range of messages to include in results.

#### Output
* output `object`: Schema for successful response from im.history method
  * has_more **required** `boolean`
  * messages **required** `array`
    * items [objs_message](#objs_message)
  * ok **required** [defs_ok_true](#defs_ok_true)

### im_list
Lists direct message channels for the calling user.


```js
slack.im_list({}, context)
```

#### Input
* input `object`
  * cursor `string`: Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.
  * token `string`: Authentication token. Requires scope: `im:read`
  * limit `integer`: The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.

#### Output
* output `object`: Schema for successful response im.list method
  * ims **required** `array`
    * items [objs_im](#objs_im)
  * ok **required** [defs_ok_true](#defs_ok_true)

### im_mark
Sets the read cursor in a direct message channel.


```js
slack.im_mark({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `im:write`
  * ts `number`: Timestamp of the most recently seen message.
  * channel `string`: Direct message channel to set reading cursor in.

#### Output
* output `object`: Schema for successful response im.mark method
  * ok **required** [defs_ok_true](#defs_ok_true)

### im_open
Opens a direct message channel.


```js
slack.im_open({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `im:write`
  * return_im `boolean`: Boolean, indicates you want the full IM channel definition in the response.
  * user `string`: User to open a direct message channel with.
  * include_locale `boolean`: Set this to `true` to receive the locale for this im. Defaults to `false`

#### Output
* output `object`: Schema for successful response from im.open method
  * already_open `boolean`
  * channel **required** `object`
    * created `string`
    * id **required** [defs_dm_id](#defs_dm_id)
    * is_im `boolean`
    * is_open `boolean`
    * last_read [defs_ts](#defs_ts)
    * latest [objs_message](#objs_message)
    * unread_count `number`
    * unread_count_display `number`
    * user [defs_user](#defs_user)
  * no_op `boolean`
  * ok **required** [defs_ok_true](#defs_ok_true)

### im_replies
Retrieve a thread of messages posted to a direct message conversation


```js
slack.im_replies({}, context)
```

#### Input
* input `object`
  * thread_ts `number`: Unique identifier of a thread's parent message
  * token `string`: Authentication token. Requires scope: `im:history`
  * channel `string`: Direct message channel to fetch thread from

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### mpim_close
Closes a multiparty direct message channel.


```js
slack.mpim_close({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `mpim:write`
  * channel `string`: MPIM to close.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### mpim_history
Fetches history of messages and events from a multiparty direct message.


```js
slack.mpim_history({}, context)
```

#### Input
* input `object`
  * count `integer`: Number of messages to return, between 1 and 1000.
  * unreads `boolean`: Include `unread_count_display` in the output?
  * inclusive `boolean`: Include messages with latest or oldest timestamp in results.
  * token `string`: Authentication token. Requires scope: `mpim:history`
  * oldest `number`: Start of time range of messages to include in results.
  * channel `string`: Multiparty direct message to fetch history for.
  * latest `number`: End of time range of messages to include in results.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### mpim_list
Lists multiparty direct message channels for the calling user.


```js
slack.mpim_list({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `mpim:read`

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### mpim_mark
Sets the read cursor in a multiparty direct message channel.


```js
slack.mpim_mark({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `mpim:write`
  * ts `number`: Timestamp of the most recently seen message.
  * channel `string`: multiparty direct message channel to set reading cursor in.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### mpim_open
This method opens a multiparty direct message.


```js
slack.mpim_open({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `mpim:write`
  * users `string`: Comma separated lists of users.  The ordering of the users is preserved whenever a MPIM group is returned.

#### Output
* output `object`: Schema for successful response from mpim.open method
  * group **required** [objs_group](#objs_group)
  * ok **required** [defs_ok_true](#defs_ok_true)

### mpim_replies
Retrieve a thread of messages posted to a direct message conversation from a multiparty direct message.


```js
slack.mpim_replies({}, context)
```

#### Input
* input `object`
  * thread_ts `number`: Unique identifier of a thread's parent message.
  * token `string`: Authentication token. Requires scope: `mpim:history`
  * channel `string`: Multiparty direct message channel to fetch thread from.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### oauth_access
Exchanges a temporary OAuth code for an API token.


```js
slack.oauth_access({}, context)
```

#### Input
* input `object`
  * client_secret `string`: Issued when you created your application.
  * code `string`: The `code` param returned via the OAuth callback.
  * client_id `string`: Issued when you created your application.
  * redirect_uri `string`: This must match the originally submitted URI (if one was sent).

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### oauth_token
Exchanges a temporary OAuth verifier code for a workspace token.


```js
slack.oauth_token({}, context)
```

#### Input
* input `object`
  * client_secret `string`: Issued when you created your application.
  * code `string`: The `code` param returned via the OAuth callback.
  * single_channel `boolean`: Request the user to add your app only to a single channel.
  * client_id `string`: Issued when you created your application.
  * redirect_uri `string`: This must match the originally submitted URI (if one was sent).

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### pins_add
Pins an item to a channel.


```js
slack.pins_add({}, context)
```

#### Input
* input `object`
  * file_comment `string`: File comment to pin.
  * timestamp `number`: Timestamp of the message to pin.
  * token `string`: Authentication token. Requires scope: `pins:write`
  * file `string`: File to pin.
  * channel `string`: Channel to pin the item in.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### pins_list
Lists items pinned to a channel.


```js
slack.pins_list({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `pins:read`
  * channel `string`: Channel to get pinned items for.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### pins_remove
Un-pins an item from a channel.


```js
slack.pins_remove({}, context)
```

#### Input
* input `object`
  * file_comment `string`: File comment to un-pin.
  * timestamp `number`: Timestamp of the message to un-pin.
  * token `string`: Authentication token. Requires scope: `pins:write`
  * file `string`: File to un-pin.
  * channel `string`: Channel where the item is pinned to.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### reactions_add
Adds a reaction to an item.


```js
slack.reactions_add({}, context)
```

#### Input
* input `object`
  * name `string`: Reaction (emoji) name.
  * file_comment `string`: File comment to add reaction to.
  * timestamp `number`: Timestamp of the message to add reaction to.
  * token `string`: Authentication token. Requires scope: `reactions:write`
  * file `string`: File to add reaction to.
  * channel `string`: Channel where the message to add reaction to was posted.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### reactions_get
Gets reactions for an item.


```js
slack.reactions_get({}, context)
```

#### Input
* input `object`
  * full `boolean`: If true always return the complete reaction list.
  * file_comment `string`: File comment to get reactions for.
  * timestamp `number`: Timestamp of the message to get reactions for.
  * token `string`: Authentication token. Requires scope: `reactions:read`
  * file `string`: File to get reactions for.
  * channel `string`: Channel where the message to get reactions for was posted.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### reactions_list
Lists reactions made by a user.


```js
slack.reactions_list({}, context)
```

#### Input
* input `object`
  * count `string`
  * token `string`: Authentication token. Requires scope: `reactions:read`
  * full `boolean`: If true always return the complete reaction list.
  * user `string`: Show reactions made by this user. Defaults to the authed user.
  * page `string`

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### reactions_remove
Removes a reaction from an item.


```js
slack.reactions_remove({}, context)
```

#### Input
* input `object`
  * name `string`: Reaction (emoji) name.
  * file_comment `string`: File comment to remove reaction from.
  * timestamp `number`: Timestamp of the message to remove reaction from.
  * token `string`: Authentication token. Requires scope: `reactions:write`
  * file `string`: File to remove reaction from.
  * channel `string`: Channel where the message to remove reaction from was posted.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### reminders_add
Creates a reminder.


```js
slack.reminders_add({}, context)
```

#### Input
* input `object`
  * text `string`: The content of the reminder
  * token `string`: Authentication token. Requires scope: `reminders:write`
  * user `string`: The user who will receive the reminder. If no user is specified, the reminder will go to user who created it.
  * time `string`: When this reminder should happen: the Unix timestamp (up to five years from now), the number of seconds until the reminder (if within 24 hours), or a natural language description (Ex. "in 15 minutes," or "every Thursday")

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### reminders_complete
Marks a reminder as complete.


```js
slack.reminders_complete({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `reminders:write`
  * reminder `string`: The ID of the reminder to be marked as complete

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### reminders_delete
Deletes a reminder.


```js
slack.reminders_delete({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `reminders:write`
  * reminder `string`: The ID of the reminder

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### reminders_info
Gets information about a reminder.


```js
slack.reminders_info({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `reminders:read`
  * reminder `string`: The ID of the reminder

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### reminders_list
Lists all reminders created by or for a given user.


```js
slack.reminders_list({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `reminders:read`

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### rtm_connect
Starts a Real Time Messaging session.


```js
slack.rtm_connect({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `rtm:stream`
  * batch_presence_aware `boolean`: Only deliver presence events when requested by subscription. See [presence subscriptions](/docs/presence-and-status#subscriptions).

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### rtm_start
Starts a Real Time Messaging session.


```js
slack.rtm_start({}, context)
```

#### Input
* input `object`
  * no_latest `boolean`: Exclude latest timestamps for channels, groups, mpims, and ims. Automatically sets `no_unreads` to `1`
  * simple_latest `boolean`: Return timestamp only for latest message object of each channel (improves performance).
  * include_locale `boolean`: Set this to `true` to receive the locale for users and channels. Defaults to `false`
  * no_unreads `boolean`: Skip unread counts for each channel (improves performance).
  * batch_presence_aware `boolean`: Only deliver presence events when requested by subscription. See [presence subscriptions](/docs/presence-and-status#subscriptions).
  * mpim_aware `boolean`: Returns MPIMs to the client in the API response.
  * token `string`: Authentication token. Requires scope: `rtm:stream`

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### search_all
Searches for messages and files matching a query.


```js
slack.search_all({}, context)
```

#### Input
* input `object`
  * sort_dir `string`: Change sort direction to ascending (`asc`) or descending (`desc`).
  * query `string`: Search query. May contains booleans, etc.
  * sort `string`: Return matches sorted by either `score` or `timestamp`.
  * count `string`
  * token `string`: Authentication token. Requires scope: `search:read`
  * highlight `boolean`: Pass a value of `true` to enable query highlight markers (see below).
  * page `string`

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### search_files
Searches for files matching a query.


```js
slack.search_files({}, context)
```

#### Input
* input `object`
  * sort_dir `string`: Change sort direction to ascending (`asc`) or descending (`desc`).
  * query `string`: Search query. May contain booleans, etc.
  * sort `string`: Return matches sorted by either `score` or `timestamp`.
  * highlight `boolean`: Pass a value of `true` to enable query highlight markers (see below).
  * count `string`
  * token `string`: Authentication token. Requires scope: `search:read`
  * page `string`

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### search_messages
Searches for messages matching a query.


```js
slack.search_messages({}, context)
```

#### Input
* input `object`
  * sort_dir `string`: Change sort direction to ascending (`asc`) or descending (`desc`).
  * query `string`: Search query. May contains booleans, etc.
  * sort `string`: Return matches sorted by either `score` or `timestamp`.
  * count `string`
  * token `string`: Authentication token. Requires scope: `search:read`
  * highlight `boolean`: Pass a value of `true` to enable query highlight markers (see below).
  * page `string`

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### stars_add
Adds a star to an item.


```js
slack.stars_add({}, context)
```

#### Input
* input `object`
  * file_comment `string`: File comment to add star to.
  * timestamp `number`: Timestamp of the message to add star to.
  * token `string`: Authentication token. Requires scope: `stars:write`
  * channel `string`: Channel to add star to, or channel where the message to add star to was posted (used with `timestamp`).
  * file `string`: File to add star to.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### stars_list
Lists stars for a user.


```js
slack.stars_list({}, context)
```

#### Input
* input `object`
  * count `string`
  * token `string`: Authentication token. Requires scope: `stars:read`
  * page `string`

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### stars_remove
Removes a star from an item.


```js
slack.stars_remove({}, context)
```

#### Input
* input `object`
  * file_comment `string`: File comment to remove star from.
  * timestamp `number`: Timestamp of the message to remove star from.
  * token `string`: Authentication token. Requires scope: `stars:write`
  * channel `string`: Channel to remove star from, or channel where the message to remove star from was posted (used with `timestamp`).
  * file `string`: File to remove star from.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### team_accessLogs
Gets the access logs for the current team.


```js
slack.team_accessLogs({}, context)
```

#### Input
* input `object`
  * count `string`
  * token `string`: Authentication token. Requires scope: `admin`
  * page `string`
  * before `integer`: End of time range of logs to include in results (inclusive).

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### team_billableInfo
Gets billable users information for the current team.


```js
slack.team_billableInfo({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `admin`
  * user `string`: A user to retrieve the billable information for. Defaults to all users.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### team_info
Gets information about the current team.


```js
slack.team_info({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `team:read`

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### team_integrationLogs
Gets the integration logs for the current team.


```js
slack.team_integrationLogs({}, context)
```

#### Input
* input `object`
  * count `string`
  * change_type `string`: Filter logs with this change type. Defaults to all logs.
  * app_id `integer`: Filter logs to this Slack app. Defaults to all logs.
  * token `string`: Authentication token. Requires scope: `admin`
  * user `string`: Filter logs generated by this user’s actions. Defaults to all logs.
  * service_id `integer`: Filter logs to this service. Defaults to all logs.
  * page `string`

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### team_profile_get
Retrieve a team's profile.


```js
slack.team_profile_get({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `users.profile:read`
  * visibility `string`: Filter by visibility.

#### Output
* output `object`: Schema for successful response from team.profile.get method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * profile **required** `object`
    * fields **required** `array`
      * items [objs_team_profile_field](#objs_team_profile_field)

### usergroups_create
Create a User Group


```js
slack.usergroups_create({}, context)
```

#### Input
* input `object`
  * handle `string`: A mention handle. Must be unique among channels, users and User Groups.
  * name `string`: A name for the User Group. Must be unique among User Groups.
  * channels `string`: A comma separated string of encoded channel IDs for which the User Group uses as a default.
  * token `string`: Authentication token. Requires scope: `usergroups:write`
  * include_count `boolean`: Include the number of users in each User Group.
  * description `string`: A short description of the User Group.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### usergroups_disable
Disable an existing User Group


```js
slack.usergroups_disable({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `usergroups:write`
  * include_count `boolean`: Include the number of users in the User Group.
  * usergroup `string`: The encoded ID of the User Group to disable.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### usergroups_enable
Enable a User Group


```js
slack.usergroups_enable({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `usergroups:write`
  * include_count `boolean`: Include the number of users in the User Group.
  * usergroup `string`: The encoded ID of the User Group to enable.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### usergroups_list
List all User Groups for a team


```js
slack.usergroups_list({}, context)
```

#### Input
* input `object`
  * include_users `boolean`: Include the list of users for each User Group.
  * token `string`: Authentication token. Requires scope: `usergroups:read`
  * include_count `boolean`: Include the number of users in each User Group.
  * include_disabled `boolean`: Include disabled User Groups.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### usergroups_update
Update an existing User Group


```js
slack.usergroups_update({}, context)
```

#### Input
* input `object`
  * handle `string`: A mention handle. Must be unique among channels, users and User Groups.
  * description `string`: A short description of the User Group.
  * channels `string`: A comma separated string of encoded channel IDs for which the User Group uses as a default.
  * token `string`: Authentication token. Requires scope: `usergroups:write`
  * include_count `boolean`: Include the number of users in the User Group.
  * usergroup `string`: The encoded ID of the User Group to update.
  * name `string`: A name for the User Group. Must be unique among User Groups.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### usergroups_users_list
List all users in a User Group


```js
slack.usergroups_users_list({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `usergroups:read`
  * include_disabled `boolean`: Allow results that involve disabled User Groups.
  * usergroup `string`: The encoded ID of the User Group to update.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### usergroups_users_update
Update the list of users for a User Group


```js
slack.usergroups_users_update({}, context)
```

#### Input
* input `object`
  * include_count `boolean`: Include the number of users in the User Group.
  * token `string`: Authentication token. Requires scope: `usergroups:write`
  * users `string`: A comma separated string of encoded user IDs that represent the entire list of users for the User Group.
  * usergroup `string`: The encoded ID of the User Group to update.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### users_deletePhoto
Delete the user profile photo


```js
slack.users_deletePhoto({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `users.profile:write`

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### users_getPresence
Gets user presence information.


```js
slack.users_getPresence({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `users:read`
  * user `string`: User to get presence info on. Defaults to the authed user.

#### Output
* output `object`: Generated from users.getPresence with shasum e7251aec575d8863f9e0eb38663ae9dc26655f65
  * auto_away `boolean`
  * connection_count `integer`
  * last_activity `integer`
  * manual_away `boolean`
  * ok **required** [defs_ok_true](#defs_ok_true)
  * online `boolean`
  * presence **required** `string`

### users_identity
Get a user's identity.


```js
slack.users_identity({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `identity.basic`

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### users_info
Gets information about a user.


```js
slack.users_info({}, context)
```

#### Input
* input `object`
  * include_locale `boolean`: Set this to `true` to receive the locale for this user. Defaults to `false`
  * token `string`: Authentication token. Requires scope: `users:read`
  * user `string`: User to get info on

#### Output
* output `object`: Schema for successful response from users.info method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * user **required** `object`
    * color **required** `string`
    * deleted **required** `boolean`
    * has_2fa **required** `boolean`
    * id **required** [defs_user](#defs_user)
    * is_admin **required** `boolean`
    * is_app_user **required** `boolean`
    * is_bot **required** `boolean`
    * is_owner **required** `boolean`
    * is_primary_owner **required** `boolean`
    * is_restricted **required** `boolean`
    * is_ultra_restricted **required** `boolean`
    * locale `string`
    * name **required** `string`
    * profile **required** [objs_user_profile](#objs_user_profile)
    * real_name **required** `string`
    * team_id **required** [defs_team](#defs_team)
    * tz **required** `string`
    * tz_label **required** `string`
    * tz_offset **required** `number`
    * updated **required** `number`

### users_list
Lists all users in a Slack team.


```js
slack.users_list({}, context)
```

#### Input
* input `object`
  * presence `boolean`: Whether to include presence data in the output. Setting this to `false` improves performance, especially with large teams.
  * cursor `string`: Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.
  * token `string`: Authentication token. Requires scope: `users:read`
  * limit `integer`: The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.
  * include_locale `boolean`: Set this to `true` to receive the locale for users. Defaults to `false`

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### users_profile_get
Retrieves a user's profile information.


```js
slack.users_profile_get({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `users.profile:read`
  * include_labels `boolean`: Include labels for each ID in custom profile fields
  * user `string`: User to retrieve profile info for

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### users_profile_set
Set the profile information for a user.


```js
slack.users_profile_set({}, context)
```

#### Input
* input `object`
  * profile `string`: Collection of key:value pairs presented as a URL-encoded JSON hash.
  * token `string`: Authentication token. Requires scope: `users.profile:write`
  * user `string`: ID of user to change. This argument may only be specified by team admins on paid teams.
  * value `string`: Value to set a single key to. Usable only if `profile` is not passed.
  * name `string`: Name of a single key to set. Usable only if `profile` is not passed.

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### users_setActive
Marks a user as active.


```js
slack.users_setActive({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `users:write`

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### users_setPhoto
Set the user profile photo


```js
slack.users_setPhoto({}, context)
```

#### Input
* input `object`
  * image `string`: File contents via `multipart/form-data`.
  * crop_w `integer`: Width/height of crop box (always square)
  * token `string`: Authentication token. Requires scope: `users.profile:write`
  * crop_y `integer`: Y coordinate of top-left corner of crop box
  * crop_x `integer`: X coordinate of top-left corner of crop box

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### users_setPresence
Manually sets user presence.


```js
slack.users_setPresence({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `users:write`
  * presence `string`: Either `auto` or `away`

#### Output
* output `object`: Verbose schema not yet ready for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)



## Definitions

### defs_bot_id
* Bot User ID `string`

### defs_channel
* Channel-like conversation ID `string`

### defs_channel_id
* Channel ID `string`

### defs_channel_name
* Name of a channel `string`

### defs_dm_id
* Direct Message Channel ID `string`

### defs_file_id
* File ID `string`

### defs_group_id
* Private Channel ID `string`

### defs_invite_id
* Invite ID for an external shared channel `integer`

### defs_ok_false
* default failure response `boolean` (values: false)

### defs_ok_true
* default success response `boolean` (values: true)

### defs_room_id
* Room ID for a slack call `string`

### defs_team
* Team ID `string`

### defs_topic_purpose_creator
* User ID or empty string, used for topic and purpose creation `string`

### defs_ts
* Timestamp in format 0123456789.012345 `string`

### defs_user
* User ID `string`

### objs_channel
* Channel Object `object`
  * accepted_user [defs_user](#defs_user)
  * created **required** `integer`
  * creator **required** [defs_user](#defs_user)
  * id **required** [defs_channel_id](#defs_channel_id)
  * is_archived `boolean`
  * is_channel **required** `boolean`
  * is_general `boolean`
  * is_member `boolean`
  * is_moved `integer`
  * is_mpim **required** `boolean`
  * is_org_shared **required** `boolean`
  * is_pending_ext_shared `boolean`
  * is_private **required** `boolean`
  * is_read_only `boolean`
  * is_shared **required** `boolean`
  * last_read [defs_ts](#defs_ts)
  * latest

  * members **required** `array`
    * items [defs_user](#defs_user)
  * name **required** `string`
  * name_normalized **required** `string`
  * num_members `integer`
  * pending_shared `array`
    * items [defs_team](#defs_team)
  * previous_names `array`
    * items [defs_channel_name](#defs_channel_name)
  * priority `integer`
  * purpose **required** `object`
    * creator **required** [defs_topic_purpose_creator](#defs_topic_purpose_creator)
    * last_set **required** `integer`
    * value **required** `string`
  * topic **required** `object`
    * creator **required** [defs_topic_purpose_creator](#defs_topic_purpose_creator)
    * last_set **required** `integer`
    * value **required** `string`
  * unlinked `integer`
  * unread_count `integer`
  * unread_count_display `integer`

### objs_comment
* File Comment Object `object`
  * comment `string`
  * created `integer`
  * id `string`
  * is_intro `boolean`
  * timestamp `integer`
  * user `string`

### objs_comments
* file comments object `array`


### objs_conversation
* objs_conversation


### objs_file
* file object `object`
  * channels `array`
    * items [defs_channel_id](#defs_channel_id)
  * comments_count `integer`
  * created `integer`
  * display_as_bot `boolean`
  * editable `boolean`
  * external_type `string`
  * filetype `string`
  * groups `array`

  * id [defs_file_id](#defs_file_id)
  * image_exif_rotation `integer`
  * ims `array`

  * is_external `boolean`
  * is_public `boolean`
  * mimetype `string`
  * mode `string`
  * name `string`
  * original_h `integer`
  * original_w `integer`
  * permalink `string`
  * permalink_public `string`
  * pretty_type `string`
  * public_url_shared `boolean`
  * size `integer`
  * thumb_160 `string`
  * thumb_360 `string`
  * thumb_360_h `integer`
  * thumb_360_w `integer`
  * thumb_64 `string`
  * thumb_80 `string`
  * timestamp `integer`
  * title `string`
  * url_private `string`
  * url_private_download `string`
  * user `string`
  * username `string`

### objs_file_object_with_id_only
* file object with ID only [defs_file_id](#defs_file_id)

### objs_group
* Group object `object`
  * created **required** `integer`
  * creator **required** [defs_user](#defs_user)
  * id **required** [defs_group_id](#defs_group_id)
  * is_archived `boolean`
  * is_group **required** `boolean`
  * is_moved `integer`
  * is_mpim `boolean`
  * is_open `boolean`
  * is_pending_ext_shared `boolean`
  * last_read [defs_ts](#defs_ts)
  * latest

  * members **required** `array`
    * items [defs_user](#defs_user)
  * name **required** `string`
  * name_normalized **required** `string`
  * priority `integer`
  * purpose **required** `object`
    * creator **required** [defs_topic_purpose_creator](#defs_topic_purpose_creator)
    * last_set **required** `integer`
    * value **required** `string`
  * topic **required** `object`
    * creator **required** [defs_topic_purpose_creator](#defs_topic_purpose_creator)
    * last_set **required** `integer`
    * value **required** `string`
  * unread_count `integer`
  * unread_count_display `integer`

### objs_im
* IM Object `object`
  * created **required** `integer`
  * id **required** [defs_dm_id](#defs_dm_id)
  * is_im **required** `boolean`
  * is_org_shared **required** `boolean`
  * is_user_deleted **required** `boolean`
  * priority `integer`
  * user **required** [defs_user](#defs_user)

### objs_message
* Message object `object`
  * attachments `array`
    * items `object`
      * fallback `string`
      * id **required** `integer`
      * image_bytes `integer`
      * image_height `integer`
      * image_url `string`
      * image_width `integer`
  * bot_id [defs_bot_id](#defs_bot_id)
  * icons `object`
    * emoji `string`
  * inviter [defs_user](#defs_user)
  * last_read [defs_ts](#defs_ts)
  * name `string`
  * old_name `string`
  * purpose `string`
  * replies `array`
    * items `object`
      * ts **required** [defs_ts](#defs_ts)
      * user **required** [defs_user](#defs_user)
  * reply_count `integer`
  * source_team [defs_team](#defs_team)
  * subscribed `boolean`
  * subtype `string`
  * team [defs_team](#defs_team)
  * text **required** `string`
  * thread_ts [defs_ts](#defs_ts)
  * topic `string`
  * ts **required** [defs_ts](#defs_ts)
  * type **required** `string`
  * unread_count `integer`
  * user [defs_user](#defs_user)
  * user_profile [objs_user_profile_short](#objs_user_profile_short)
  * user_team [defs_team](#defs_team)
  * username `string`

### objs_paging
* paging object for files `object`
  * count **required** `integer`
  * page **required** `integer`
  * pages `integer`
  * total **required** `integer`

### objs_team
* Team Object `object`
  * domain **required** `string`
  * email_domain **required** `string`
  * has_compliance_export **required** `boolean`
  * icon **required** `object`
    * image_102 `string`
    * image_132 `string`
    * image_230 `string`
    * image_34 `string`
    * image_44 `string`
    * image_68 `string`
    * image_88 `string`
    * image_default `boolean`
  * id **required** [defs_team](#defs_team)
  * name **required** `string`

### objs_team_profile_field
* objs_team_profile_field `object`
  * field_name `string`
  * hint **required** `string`
  * id **required** `string`
  * is_hidden `boolean`
  * label **required** `string`
  * options **required** `array`
  * ordering **required** `number`
  * possible_values `array`
  * type **required** `string` (values: text, date, link, mailto, options_list, user)

### objs_user_profile
* User profile object `object`
  * avatar_hash **required** `string`
  * display_name **required** `string`
  * display_name_normalized **required** `string`
  * email **required** `string`
  * fields `object`
  * first_name `string`
  * guest_channels `string`
  * image_192 **required** `string`
  * image_24 **required** `string`
  * image_32 **required** `string`
  * image_48 **required** `string`
  * image_512 `string`
  * image_72 **required** `string`
  * image_original `string`
  * last_name `string`
  * phone `string`
  * real_name **required** `string`
  * real_name_normalized **required** `string`
  * skype `string`
  * status_emoji `string`
  * status_text `string`
  * team [defs_team](#defs_team)
  * title `string`

### objs_user_profile_short
* objs_user_profile_short `object`
  * avatar_hash **required** `string`
  * display_name **required** `string`
  * first_name **required** `string`
  * image_72 **required** `string`
  * is_restricted **required** `boolean`
  * is_ultra_restricted **required** `boolean`
  * name **required** `string`
  * real_name **required** `string`
  * team **required** [defs_team](#defs_team)


