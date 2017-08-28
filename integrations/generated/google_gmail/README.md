# @datafire/google_gmail

Client library for Gmail

## Installation and Usage
```bash
npm install --save datafire @datafire/google_gmail
```

```js
let datafire = require('datafire');
let google_gmail = require('@datafire/google_gmail').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_gmail: account,
  }
})

google_gmail.users.drafts.list({}, context).then(data => {
  console.log(data);
})
```

## Description
Access Gmail mailboxes including sending user email.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_gmail.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_gmail.oauthRefresh(null, context)
```


### users.drafts.list
Lists the drafts in the user's mailbox.


```js
google_gmail.users.drafts.list({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* includeSpamTrash (boolean) - Include drafts from SPAM and TRASH in the results.
* maxResults (integer) - Maximum number of drafts to return.
* pageToken (string) - Page token to retrieve a specific page of results in the list.
* q (string) - Only return draft messages matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com rfc822msgid: is:unread".
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.drafts.create
Creates a new draft with the DRAFT label.


```js
google_gmail.users.drafts.create({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* body (object) - A draft email in the user's mailbox.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.drafts.send
Sends the specified, existing draft to the recipients in the To, Cc, and Bcc headers.


```js
google_gmail.users.drafts.send({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* body (object) - A draft email in the user's mailbox.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.drafts.delete
Immediately and permanently deletes the specified draft. Does not simply trash it.


```js
google_gmail.users.drafts.delete({
  "userId": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* id (string) **required** - The ID of the draft to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.drafts.get
Gets the specified draft.


```js
google_gmail.users.drafts.get({
  "userId": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* id (string) **required** - The ID of the draft to retrieve.
* format (string) - The format to return the draft in.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.drafts.update
Replaces a draft's content.


```js
google_gmail.users.drafts.update({
  "userId": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* id (string) **required** - The ID of the draft to update.
* body (object) - A draft email in the user's mailbox.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.history.list
Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing historyId).


```js
google_gmail.users.history.list({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* historyTypes (array) - History types to be returned by the function
* labelId (string) - Only return messages with a label matching the ID.
* maxResults (integer) - The maximum number of history records to return.
* pageToken (string) - Page token to retrieve a specific page of results in the list.
* startHistoryId (string) - Required. Returns history records after the specified startHistoryId. The supplied startHistoryId should be obtained from the historyId of a message, thread, or previous list response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date startHistoryId typically returns an HTTP 404 error code. A historyId is typically valid for at least a week, but in some rare circumstances may be valid for only a few hours. If you receive an HTTP 404 error response, your application should perform a full sync. If you receive no nextPageToken in the response, there are no updates to retrieve and you can store the returned historyId for a future request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.labels.list
Lists all labels in the user's mailbox.


```js
google_gmail.users.labels.list({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.labels.create
Creates a new label.


```js
google_gmail.users.labels.create({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* body (object) - Labels are used to categorize messages and threads within the user's mailbox.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.labels.delete
Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to.


```js
google_gmail.users.labels.delete({
  "userId": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* id (string) **required** - The ID of the label to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.labels.get
Gets the specified label.


```js
google_gmail.users.labels.get({
  "userId": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* id (string) **required** - The ID of the label to retrieve.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.labels.patch
Updates the specified label. This method supports patch semantics.


```js
google_gmail.users.labels.patch({
  "userId": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* id (string) **required** - The ID of the label to update.
* body (object) - Labels are used to categorize messages and threads within the user's mailbox.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.labels.update
Updates the specified label.


```js
google_gmail.users.labels.update({
  "userId": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* id (string) **required** - The ID of the label to update.
* body (object) - Labels are used to categorize messages and threads within the user's mailbox.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.messages.list
Lists the messages in the user's mailbox.


```js
google_gmail.users.messages.list({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* includeSpamTrash (boolean) - Include messages from SPAM and TRASH in the results.
* labelIds (array) - Only return messages with labels that match all of the specified label IDs.
* maxResults (integer) - Maximum number of messages to return.
* pageToken (string) - Page token to retrieve a specific page of results in the list.
* q (string) - Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com rfc822msgid: is:unread". Parameter cannot be used when accessing the api using the gmail.metadata scope.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.messages.insert
Directly inserts a message into only this user's mailbox similar to IMAP APPEND, bypassing most scanning and classification. Does not send a message.


```js
google_gmail.users.messages.insert({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* deleted (boolean) - Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for G Suite accounts.
* internalDateSource (string) - Source for Gmail's internal date of the message.
* body (object) - An email message.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.messages.batchDelete
Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.


```js
google_gmail.users.messages.batchDelete({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.messages.batchModify
Modifies the labels on the specified messages.


```js
google_gmail.users.messages.batchModify({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.messages.import
Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. Does not send a message.


```js
google_gmail.users.messages.import({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* deleted (boolean) - Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for G Suite accounts.
* internalDateSource (string) - Source for Gmail's internal date of the message.
* neverMarkSpam (boolean) - Ignore the Gmail spam classifier decision and never mark this email as SPAM in the mailbox.
* processForCalendar (boolean) - Process calendar invites in the email and add any extracted meetings to the Google Calendar for this user.
* body (object) - An email message.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.messages.send
Sends the specified message to the recipients in the To, Cc, and Bcc headers.


```js
google_gmail.users.messages.send({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* body (object) - An email message.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.messages.delete
Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer messages.trash instead.


```js
google_gmail.users.messages.delete({
  "userId": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* id (string) **required** - The ID of the message to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.messages.get
Gets the specified message.


```js
google_gmail.users.messages.get({
  "userId": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* id (string) **required** - The ID of the message to retrieve.
* format (string) - The format to return the message in.
* metadataHeaders (array) - When given and format is METADATA, only include headers specified.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.messages.modify
Modifies the labels on the specified message.


```js
google_gmail.users.messages.modify({
  "userId": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* id (string) **required** - The ID of the message to modify.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.messages.trash
Moves the specified message to the trash.


```js
google_gmail.users.messages.trash({
  "userId": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* id (string) **required** - The ID of the message to Trash.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.messages.untrash
Removes the specified message from the trash.


```js
google_gmail.users.messages.untrash({
  "userId": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* id (string) **required** - The ID of the message to remove from Trash.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.messages.attachments.get
Gets the specified message attachment.


```js
google_gmail.users.messages.attachments.get({
  "userId": "",
  "messageId": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* messageId (string) **required** - The ID of the message containing the attachment.
* id (string) **required** - The ID of the attachment.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.getProfile
Gets the current user's Gmail profile.


```js
google_gmail.users.getProfile({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.getAutoForwarding
Gets the auto-forwarding setting for the specified account.


```js
google_gmail.users.settings.getAutoForwarding({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.updateAutoForwarding
Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled.

This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.users.settings.updateAutoForwarding({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* body (object) - Auto-forwarding settings for an account.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.filters.list
Lists the message filters of a Gmail user.


```js
google_gmail.users.settings.filters.list({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.filters.create
Creates a filter.


```js
google_gmail.users.settings.filters.create({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* body (object) - Resource definition for Gmail filters. Filters apply to specific messages instead of an entire email thread.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.filters.delete
Deletes a filter.


```js
google_gmail.users.settings.filters.delete({
  "userId": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* id (string) **required** - The ID of the filter to be deleted.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.filters.get
Gets a filter.


```js
google_gmail.users.settings.filters.get({
  "userId": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* id (string) **required** - The ID of the filter to be fetched.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.forwardingAddresses.list
Lists the forwarding addresses for the specified account.


```js
google_gmail.users.settings.forwardingAddresses.list({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.forwardingAddresses.create
Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to pending; otherwise, the resource will be created with verification status set to accepted.

This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.users.settings.forwardingAddresses.create({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* body (object) - Settings for a forwarding address.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.forwardingAddresses.delete
Deletes the specified forwarding address and revokes any verification that may have been required.

This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.users.settings.forwardingAddresses.delete({
  "userId": "",
  "forwardingEmail": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* forwardingEmail (string) **required** - The forwarding address to be deleted.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.forwardingAddresses.get
Gets the specified forwarding address.


```js
google_gmail.users.settings.forwardingAddresses.get({
  "userId": "",
  "forwardingEmail": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* forwardingEmail (string) **required** - The forwarding address to be retrieved.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.getImap
Gets IMAP settings.


```js
google_gmail.users.settings.getImap({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.updateImap
Updates IMAP settings.


```js
google_gmail.users.settings.updateImap({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* body (object) - IMAP settings for an account.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.getPop
Gets POP settings.


```js
google_gmail.users.settings.getPop({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.updatePop
Updates POP settings.


```js
google_gmail.users.settings.updatePop({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* body (object) - POP settings for an account.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.sendAs.list
Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom "from" aliases.


```js
google_gmail.users.settings.sendAs.list({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.sendAs.create
Creates a custom "from" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's verification status will be set to pending; otherwise, the resource will be created with verification status set to accepted. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.

This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.users.settings.sendAs.create({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* body (object) - Settings associated with a send-as alias, which can be either the primary login address associated with the account or a custom "from" address. Send-as aliases correspond to the "Send Mail As" feature in the web interface.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.sendAs.delete
Deletes the specified send-as alias. Revokes any verification that may have been required for using it.

This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.users.settings.sendAs.delete({
  "userId": "",
  "sendAsEmail": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* sendAsEmail (string) **required** - The send-as alias to be deleted.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.sendAs.get
Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection.


```js
google_gmail.users.settings.sendAs.get({
  "userId": "",
  "sendAsEmail": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* sendAsEmail (string) **required** - The send-as alias to be retrieved.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.sendAs.patch
Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.

Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority. This method supports patch semantics.


```js
google_gmail.users.settings.sendAs.patch({
  "userId": "",
  "sendAsEmail": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* sendAsEmail (string) **required** - The send-as alias to be updated.
* body (object) - Settings associated with a send-as alias, which can be either the primary login address associated with the account or a custom "from" address. Send-as aliases correspond to the "Send Mail As" feature in the web interface.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.sendAs.update
Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.

Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.


```js
google_gmail.users.settings.sendAs.update({
  "userId": "",
  "sendAsEmail": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* sendAsEmail (string) **required** - The send-as alias to be updated.
* body (object) - Settings associated with a send-as alias, which can be either the primary login address associated with the account or a custom "from" address. Send-as aliases correspond to the "Send Mail As" feature in the web interface.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.sendAs.smimeInfo.list
Lists S/MIME configs for the specified send-as alias.


```js
google_gmail.users.settings.sendAs.smimeInfo.list({
  "userId": "",
  "sendAsEmail": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* sendAsEmail (string) **required** - The email address that appears in the "From:" header for mail sent using this alias.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.sendAs.smimeInfo.insert
Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key.


```js
google_gmail.users.settings.sendAs.smimeInfo.insert({
  "userId": "",
  "sendAsEmail": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* sendAsEmail (string) **required** - The email address that appears in the "From:" header for mail sent using this alias.
* body (object) - An S/MIME email config.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.sendAs.smimeInfo.delete
Deletes the specified S/MIME config for the specified send-as alias.


```js
google_gmail.users.settings.sendAs.smimeInfo.delete({
  "userId": "",
  "sendAsEmail": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* sendAsEmail (string) **required** - The email address that appears in the "From:" header for mail sent using this alias.
* id (string) **required** - The immutable ID for the SmimeInfo.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.sendAs.smimeInfo.get
Gets the specified S/MIME config for the specified send-as alias.


```js
google_gmail.users.settings.sendAs.smimeInfo.get({
  "userId": "",
  "sendAsEmail": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* sendAsEmail (string) **required** - The email address that appears in the "From:" header for mail sent using this alias.
* id (string) **required** - The immutable ID for the SmimeInfo.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.sendAs.smimeInfo.setDefault
Sets the default S/MIME config for the specified send-as alias.


```js
google_gmail.users.settings.sendAs.smimeInfo.setDefault({
  "userId": "",
  "sendAsEmail": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* sendAsEmail (string) **required** - The email address that appears in the "From:" header for mail sent using this alias.
* id (string) **required** - The immutable ID for the SmimeInfo.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.sendAs.verify
Sends a verification email to the specified send-as alias address. The verification status must be pending.

This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.users.settings.sendAs.verify({
  "userId": "",
  "sendAsEmail": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* sendAsEmail (string) **required** - The send-as alias to be verified.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.getVacation
Gets vacation responder settings.


```js
google_gmail.users.settings.getVacation({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.settings.updateVacation
Updates vacation responder settings.


```js
google_gmail.users.settings.updateVacation({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - User's email address. The special value "me" can be used to indicate the authenticated user.
* body (object) - Vacation auto-reply settings for an account. These settings correspond to the "Vacation responder" feature in the web interface.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.stop
Stop receiving push notifications for the given user mailbox.


```js
google_gmail.users.stop({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.threads.list
Lists the threads in the user's mailbox.


```js
google_gmail.users.threads.list({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* includeSpamTrash (boolean) - Include threads from SPAM and TRASH in the results.
* labelIds (array) - Only return threads with labels that match all of the specified label IDs.
* maxResults (integer) - Maximum number of threads to return.
* pageToken (string) - Page token to retrieve a specific page of results in the list.
* q (string) - Only return threads matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com rfc822msgid: is:unread". Parameter cannot be used when accessing the api using the gmail.metadata scope.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.threads.delete
Immediately and permanently deletes the specified thread. This operation cannot be undone. Prefer threads.trash instead.


```js
google_gmail.users.threads.delete({
  "userId": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* id (string) **required** - ID of the Thread to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.threads.get
Gets the specified thread.


```js
google_gmail.users.threads.get({
  "userId": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* id (string) **required** - The ID of the thread to retrieve.
* format (string) - The format to return the messages in.
* metadataHeaders (array) - When given and format is METADATA, only include headers specified.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.threads.modify
Modifies the labels applied to the thread. This applies to all messages in the thread.


```js
google_gmail.users.threads.modify({
  "userId": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* id (string) **required** - The ID of the thread to modify.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.threads.trash
Moves the specified thread to the trash.


```js
google_gmail.users.threads.trash({
  "userId": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* id (string) **required** - The ID of the thread to Trash.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.threads.untrash
Removes the specified thread from the trash.


```js
google_gmail.users.threads.untrash({
  "userId": "",
  "id": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* id (string) **required** - The ID of the thread to remove from Trash.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.watch
Set up or update a push notification watch on the given user mailbox.


```js
google_gmail.users.watch({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The user's email address. The special value me can be used to indicate the authenticated user.
* body (object) - Set up or update a new push notification watch on this user's mailbox.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### buildMessage



```js
google_gmail.buildMessage({}, context)
```

#### Parameters
* to (string)
* from (string)
* subject (string)
* body (string)

### sendMessage



```js
google_gmail.sendMessage({}, context)
```

#### Parameters
* to (string)
* from (string)
* subject (string)
* body (string)

