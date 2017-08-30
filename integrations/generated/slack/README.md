# @datafire/slack

Client library for Slack

## Installation and Usage
```bash
npm install --save datafire @datafire/slack
```

```js
let datafire = require('datafire');
let slack = require('@datafire/slack').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

slack.starsList({}).then(data => {
  console.log(data);
})
```

## Description
A messaging app for teams

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
slack.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
slack.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### authTest
Checks authentication and tells you who you are.


```js
slack.authTest({
  "token": ""
}, context)
```

#### Parameters
* token (string) **required** - Authentication token

### channelsHistory
Fetches history of messages and events from a channel.


```js
slack.channelsHistory({
  "channel": ""
}, context)
```

#### Parameters
* channel (string) **required** - Channel to fetch history for.
* latest (string) - Timestamp of the oldest recent seen message.
* oldest (string) - Timestamp of the latest previously seen message.
* count (number) - Number of messages to return, between 1 and 1000.
* has_more (boolean)
* is_limited (boolean)

### channelsInfo
Gets information about a channel.


```js
slack.channelsInfo({
  "channel": ""
}, context)
```

#### Parameters
* channel (string) **required** - Channel to fetch history for.

### channelsInvite
Invites a user to a channel.


```js
slack.channelsInvite({
  "channel": "",
  "user": ""
}, context)
```

#### Parameters
* channel (string) **required** - Channel to fetch history for.
* user (string) **required** - User to invite to channel.

### channelsJoin
Joins a channel, creating it if needed.


```js
slack.channelsJoin({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - Name of channel to join

### channelsLeave
Leaves a channel.


```js
slack.channelsLeave({
  "channel": ""
}, context)
```

#### Parameters
* channel (string) **required** - Channel to fetch history for.

### channelsList
Lists all channels in a Slack team.


```js
slack.channelsList({}, context)
```

#### Parameters
* exclude_archived (string) - Don't return archived channels.

### channelsMark
Sets the read cursor in a channel.


```js
slack.channelsMark({
  "channel": "",
  "ts": ""
}, context)
```

#### Parameters
* channel (string) **required** - Channel to fetch history for.
* ts (string) **required** - Timestamp of the most recently seen message.

### channelsSetPurpose
Sets the purpose for a channel.


```js
slack.channelsSetPurpose({
  "channel": "",
  "purpose": ""
}, context)
```

#### Parameters
* channel (string) **required** - Channel to fetch history for.
* purpose (string) **required** - The new purpose

### channelsSetTopic
Sets the topic for a channel.


```js
slack.channelsSetTopic({
  "channel": "",
  "topic": ""
}, context)
```

#### Parameters
* channel (string) **required** - Channel to fetch history for.
* topic (string) **required** - The new topic

### chatDelete
Deletes a message.


```js
slack.chatDelete({
  "channel": "",
  "ts": ""
}, context)
```

#### Parameters
* channel (string) **required** - Channel to fetch history for.
* ts (string) **required** - Timestamp of the most recently seen message.

### chatPostMessage
Sends a message to a channel.


```js
slack.chatPostMessage({
  "channel": "",
  "text": ""
}, context)
```

#### Parameters
* channel (string) **required** - Channel to fetch history for.
* text (string) **required** - Text of the message to send. See below for an explanation of formatting.
* username (string) - Name of bot.
* parse (string) - Change how messages are treated. See below.
* link_names (string) - Find and link channel names and usernames.
* unfurl_links (string) - Pass 1 to enable unfurling of primarily text-based content.
* icon_url (string) - URL to an image to use as the icon for this message
* icon_emoji (string) - emoji to use as the icon for this message. Overrides icon_url.
* attachments (string) - Structured message attachments.

### chatUpdate
Updates a message.


```js
slack.chatUpdate({
  "channel": "",
  "text": "",
  "ts": ""
}, context)
```

#### Parameters
* channel (string) **required** - Channel to fetch history for.
* text (string) **required** - Text of the message to send. See below for an explanation of formatting.
* ts (string) **required** - Timestamp of the most recently seen message.

### emojiList
Lists custom emoji for a team.


```js
slack.emojiList(null, context)
```

#### Parameters
*This action has no parameters*

### filesInfo
Gets information about a team file.


```js
slack.filesInfo({
  "file": ""
}, context)
```

#### Parameters
* file (string) **required** - File to fetch info for
* count (number) - Number of items to return per page.
* page (number) - Page number of results to return.

### filesList
Lists and filters team files.


```js
slack.filesList({
  "file": ""
}, context)
```

#### Parameters
* file (string) **required** - File to fetch info for
* user (string) - Filter files created by a single user.
* ts_from (string) - Filter files created after this timestamp (inclusive).
* ts_to (string) - Filter files created before this timestamp (inclusive).
* types (string) - You can pass multiple values in the types argument, like types=posts,snippets.The default value is all, which does not filter the list.

### filesUpload
Uploads or creates a file.


```js
slack.filesUpload({}, context)
```

#### Parameters
* file (string) - File contents via multipart/form-data.
* content (string) - File contents via a POST var.
* filetype (string) - Slack-internal file type identifier.
* filename (string) - Filename of file.
* title (string) - Title of file.
* initial_comment (string) - Initial comment to add to file.
* channels (string) - Comma separated list of channels to share the file into.

### groupsHistory
Fetches history of messages and events from a private group.


```js
slack.groupsHistory({
  "channel": ""
}, context)
```

#### Parameters
* channel (string) **required** - Group to fetch history for.
* latest (string) - Timestamp of the oldest recent seen message.
* oldest (string) - Timestamp of the latest previously seen message.
* count (number) - Number of messages to return, between 1 and 1000.
* has_more (boolean)
* is_limited (boolean)

### groupsList
Lists private groups that the calling user has access to.


```js
slack.groupsList({}, context)
```

#### Parameters
* exclude_archived (string) - Don't return archived channels.

### groupsMark
Sets the read cursor in a private group.


```js
slack.groupsMark({
  "channel": "",
  "ts": ""
}, context)
```

#### Parameters
* channel (string) **required** - Group to fetch history for.
* ts (string) **required** - Timestamp of the most recently seen message.

### groupsSetPurpose
Sets the purpose for a private group.


```js
slack.groupsSetPurpose({
  "channel": "",
  "purpose": ""
}, context)
```

#### Parameters
* channel (string) **required** - Group to fetch history for.
* purpose (string) **required** - The new purpose

### groupsSetTopic
Sets the topic for a private group.


```js
slack.groupsSetTopic({
  "channel": "",
  "topic": ""
}, context)
```

#### Parameters
* channel (string) **required** - Channel to fetch history for.
* topic (string) **required** - The new topic

### imHistory
Fetches history of messages and events from direct message channel.


```js
slack.imHistory({
  "channel": ""
}, context)
```

#### Parameters
* channel (string) **required** - Direct message channel to fetch history for.
* latest (string) - Timestamp of the oldest recent seen message.
* oldest (string) - Timestamp of the latest previously seen message.
* count (number) - Number of messages to return, between 1 and 1000.
* has_more (boolean)
* is_limited (boolean)

### imList
Lists direct message channels for the calling user.


```js
slack.imList(null, context)
```

#### Parameters
*This action has no parameters*

### imMark
Sets the read cursor in a direct message channel.


```js
slack.imMark({
  "channel": "",
  "ts": ""
}, context)
```

#### Parameters
* channel (string) **required** - Channel to fetch history for.
* ts (string) **required** - Timestamp of the most recently seen message.

### searchAll
Searches for messages and files matching a query.


```js
slack.searchAll({
  "query": ""
}, context)
```

#### Parameters
* query (string) **required** - Search query. May contains booleans, etc.
* sort (string) - Return matches sorted by either score or timestamp.
* sort_dir (string) - Change sort direction to ascending (asc) or descending (desc).
* highlight (string) - Pass a value of 1 to enable query highlight markers .
* count (number) - Number of items to return per page.
* page (number) - Page number of results to return.

### searchFiles
Searches for files matching a query.


```js
slack.searchFiles({
  "query": ""
}, context)
```

#### Parameters
* query (string) **required** - Search query. May contains booleans, etc.
* sort (string) - Return matches sorted by either score or timestamp.
* sort_dir (string) - Change sort direction to ascending (asc) or descending (desc).
* highlight (string) - Pass a value of 1 to enable query highlight markers .
* count (number) - Number of items to return per page.
* page (number) - Page number of results to return.

### searchMessages
Searches for messages matching a query.


```js
slack.searchMessages({
  "query": ""
}, context)
```

#### Parameters
* query (string) **required** - Search query. May contains booleans, etc.
* sort (string) - Return matches sorted by either score or timestamp.
* sort_dir (string) - Change sort direction to ascending (asc) or descending (desc).
* highlight (string) - Pass a value of 1 to enable query highlight markers .
* count (number) - Number of items to return per page.
* page (number) - Page number of results to return.

### starsList
Lists stars for a user.


```js
slack.starsList({}, context)
```

#### Parameters
* user (string) - Show stars by this user. Defaults to the authed user.
* count (number) - Number of items to return per page.
* page (number) - Page number of results to return.

### usersList
Lists all users in a Slack team.


```js
slack.usersList(null, context)
```

#### Parameters
*This action has no parameters*

