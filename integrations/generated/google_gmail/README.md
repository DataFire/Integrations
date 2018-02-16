# @datafire/google_gmail

Client library for Gmail

## Installation and Usage
```bash
npm install --save @datafire/google_gmail
```
```js
let google_gmail = require('@datafire/google_gmail').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_gmail.users.drafts.list({
  "userId": ""
}).then(data => {
  console.log(data);
});
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
google_gmail.oauthRefresh(null, context)
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

### users.drafts.list
Lists the drafts in the user's mailbox.


```js
google_gmail.users.drafts.list({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * includeSpamTrash `boolean`: Include drafts from SPAM and TRASH in the results.
  * maxResults `integer`: Maximum number of drafts to return.
  * pageToken `string`: Page token to retrieve a specific page of results in the list.
  * q `string`: Only return draft messages matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com rfc822msgid: is:unread".
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListDraftsResponse](#listdraftsresponse)

### users.drafts.create
Creates a new draft with the DRAFT label.


```js
google_gmail.users.drafts.create({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [Draft](#draft)
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Draft](#draft)

### users.drafts.send
Sends the specified, existing draft to the recipients in the To, Cc, and Bcc headers.


```js
google_gmail.users.drafts.send({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [Draft](#draft)
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Message](#message)

### users.drafts.delete
Immediately and permanently deletes the specified draft. Does not simply trash it.


```js
google_gmail.users.drafts.delete({
  "id": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the draft to delete.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### users.drafts.get
Gets the specified draft.


```js
google_gmail.users.drafts.get({
  "id": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * format `string` (values: full, metadata, minimal, raw): The format to return the draft in.
  * id **required** `string`: The ID of the draft to retrieve.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Draft](#draft)

### users.drafts.update
Replaces a draft's content.


```js
google_gmail.users.drafts.update({
  "id": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [Draft](#draft)
  * id **required** `string`: The ID of the draft to update.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Draft](#draft)

### users.history.list
Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing historyId).


```js
google_gmail.users.history.list({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * historyTypes `array`: History types to be returned by the function
  * labelId `string`: Only return messages with a label matching the ID.
  * maxResults `integer`: The maximum number of history records to return.
  * pageToken `string`: Page token to retrieve a specific page of results in the list.
  * startHistoryId `string`: Required. Returns history records after the specified startHistoryId. The supplied startHistoryId should be obtained from the historyId of a message, thread, or previous list response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date startHistoryId typically returns an HTTP 404 error code. A historyId is typically valid for at least a week, but in some rare circumstances may be valid for only a few hours. If you receive an HTTP 404 error response, your application should perform a full sync. If you receive no nextPageToken in the response, there are no updates to retrieve and you can store the returned historyId for a future request.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListHistoryResponse](#listhistoryresponse)

### users.labels.list
Lists all labels in the user's mailbox.


```js
google_gmail.users.labels.list({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListLabelsResponse](#listlabelsresponse)

### users.labels.create
Creates a new label.


```js
google_gmail.users.labels.create({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [Label](#label)
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Label](#label)

### users.labels.delete
Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to.


```js
google_gmail.users.labels.delete({
  "id": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the label to delete.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### users.labels.get
Gets the specified label.


```js
google_gmail.users.labels.get({
  "id": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the label to retrieve.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Label](#label)

### users.labels.patch
Updates the specified label. This method supports patch semantics.


```js
google_gmail.users.labels.patch({
  "id": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [Label](#label)
  * id **required** `string`: The ID of the label to update.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Label](#label)

### users.labels.update
Updates the specified label.


```js
google_gmail.users.labels.update({
  "id": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [Label](#label)
  * id **required** `string`: The ID of the label to update.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Label](#label)

### users.messages.list
Lists the messages in the user's mailbox.


```js
google_gmail.users.messages.list({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * includeSpamTrash `boolean`: Include messages from SPAM and TRASH in the results.
  * labelIds `array`: Only return messages with labels that match all of the specified label IDs.
  * maxResults `integer`: Maximum number of messages to return.
  * pageToken `string`: Page token to retrieve a specific page of results in the list.
  * q `string`: Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com rfc822msgid:<somemsgid@example.com> is:unread". Parameter cannot be used when accessing the api using the gmail.metadata scope.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListMessagesResponse](#listmessagesresponse)

### users.messages.insert
Directly inserts a message into only this user's mailbox similar to IMAP APPEND, bypassing most scanning and classification. Does not send a message.


```js
google_gmail.users.messages.insert({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [Message](#message)
  * deleted `boolean`: Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for G Suite accounts.
  * internalDateSource `string` (values: dateHeader, receivedTime): Source for Gmail's internal date of the message.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Message](#message)

### users.messages.batchDelete
Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.


```js
google_gmail.users.messages.batchDelete({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [BatchDeleteMessagesRequest](#batchdeletemessagesrequest)
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### users.messages.batchModify
Modifies the labels on the specified messages.


```js
google_gmail.users.messages.batchModify({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [BatchModifyMessagesRequest](#batchmodifymessagesrequest)
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### users.messages.import
Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. Does not send a message.


```js
google_gmail.users.messages.import({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [Message](#message)
  * deleted `boolean`: Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for G Suite accounts.
  * internalDateSource `string` (values: dateHeader, receivedTime): Source for Gmail's internal date of the message.
  * neverMarkSpam `boolean`: Ignore the Gmail spam classifier decision and never mark this email as SPAM in the mailbox.
  * processForCalendar `boolean`: Process calendar invites in the email and add any extracted meetings to the Google Calendar for this user.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Message](#message)

### users.messages.send
Sends the specified message to the recipients in the To, Cc, and Bcc headers.


```js
google_gmail.users.messages.send({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [Message](#message)
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Message](#message)

### users.messages.delete
Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer messages.trash instead.


```js
google_gmail.users.messages.delete({
  "id": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the message to delete.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### users.messages.get
Gets the specified message.


```js
google_gmail.users.messages.get({
  "id": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * format `string` (values: full, metadata, minimal, raw): The format to return the message in.
  * id **required** `string`: The ID of the message to retrieve.
  * metadataHeaders `array`: When given and format is METADATA, only include headers specified.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Message](#message)

### users.messages.modify
Modifies the labels on the specified message.


```js
google_gmail.users.messages.modify({
  "id": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [ModifyMessageRequest](#modifymessagerequest)
  * id **required** `string`: The ID of the message to modify.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Message](#message)

### users.messages.trash
Moves the specified message to the trash.


```js
google_gmail.users.messages.trash({
  "id": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the message to Trash.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Message](#message)

### users.messages.untrash
Removes the specified message from the trash.


```js
google_gmail.users.messages.untrash({
  "id": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the message to remove from Trash.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Message](#message)

### users.messages.attachments.get
Gets the specified message attachment.


```js
google_gmail.users.messages.attachments.get({
  "id": "",
  "messageId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the attachment.
  * messageId **required** `string`: The ID of the message containing the attachment.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [MessagePartBody](#messagepartbody)

### users.getProfile
Gets the current user's Gmail profile.


```js
google_gmail.users.getProfile({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Profile](#profile)

### users.settings.getAutoForwarding
Gets the auto-forwarding setting for the specified account.


```js
google_gmail.users.settings.getAutoForwarding({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AutoForwarding](#autoforwarding)

### users.settings.updateAutoForwarding
Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled.

This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.users.settings.updateAutoForwarding({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [AutoForwarding](#autoforwarding)
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AutoForwarding](#autoforwarding)

### users.settings.filters.list
Lists the message filters of a Gmail user.


```js
google_gmail.users.settings.filters.list({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListFiltersResponse](#listfiltersresponse)

### users.settings.filters.create
Creates a filter.


```js
google_gmail.users.settings.filters.create({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [Filter](#filter)
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Filter](#filter)

### users.settings.filters.delete
Deletes a filter.


```js
google_gmail.users.settings.filters.delete({
  "id": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the filter to be deleted.
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### users.settings.filters.get
Gets a filter.


```js
google_gmail.users.settings.filters.get({
  "id": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the filter to be fetched.
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Filter](#filter)

### users.settings.forwardingAddresses.list
Lists the forwarding addresses for the specified account.


```js
google_gmail.users.settings.forwardingAddresses.list({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListForwardingAddressesResponse](#listforwardingaddressesresponse)

### users.settings.forwardingAddresses.create
Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to pending; otherwise, the resource will be created with verification status set to accepted.

This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.users.settings.forwardingAddresses.create({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [ForwardingAddress](#forwardingaddress)
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ForwardingAddress](#forwardingaddress)

### users.settings.forwardingAddresses.delete
Deletes the specified forwarding address and revokes any verification that may have been required.

This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.users.settings.forwardingAddresses.delete({
  "forwardingEmail": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * forwardingEmail **required** `string`: The forwarding address to be deleted.
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### users.settings.forwardingAddresses.get
Gets the specified forwarding address.


```js
google_gmail.users.settings.forwardingAddresses.get({
  "forwardingEmail": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * forwardingEmail **required** `string`: The forwarding address to be retrieved.
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ForwardingAddress](#forwardingaddress)

### users.settings.getImap
Gets IMAP settings.


```js
google_gmail.users.settings.getImap({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ImapSettings](#imapsettings)

### users.settings.updateImap
Updates IMAP settings.


```js
google_gmail.users.settings.updateImap({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [ImapSettings](#imapsettings)
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ImapSettings](#imapsettings)

### users.settings.getPop
Gets POP settings.


```js
google_gmail.users.settings.getPop({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PopSettings](#popsettings)

### users.settings.updatePop
Updates POP settings.


```js
google_gmail.users.settings.updatePop({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [PopSettings](#popsettings)
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PopSettings](#popsettings)

### users.settings.sendAs.list
Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom "from" aliases.


```js
google_gmail.users.settings.sendAs.list({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListSendAsResponse](#listsendasresponse)

### users.settings.sendAs.create
Creates a custom "from" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's verification status will be set to pending; otherwise, the resource will be created with verification status set to accepted. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.

This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.users.settings.sendAs.create({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [SendAs](#sendas)
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SendAs](#sendas)

### users.settings.sendAs.delete
Deletes the specified send-as alias. Revokes any verification that may have been required for using it.

This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.users.settings.sendAs.delete({
  "sendAsEmail": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * sendAsEmail **required** `string`: The send-as alias to be deleted.
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### users.settings.sendAs.get
Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection.


```js
google_gmail.users.settings.sendAs.get({
  "sendAsEmail": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * sendAsEmail **required** `string`: The send-as alias to be retrieved.
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SendAs](#sendas)

### users.settings.sendAs.patch
Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.

Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority. This method supports patch semantics.


```js
google_gmail.users.settings.sendAs.patch({
  "sendAsEmail": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [SendAs](#sendas)
  * sendAsEmail **required** `string`: The send-as alias to be updated.
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SendAs](#sendas)

### users.settings.sendAs.update
Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.

Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.


```js
google_gmail.users.settings.sendAs.update({
  "sendAsEmail": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [SendAs](#sendas)
  * sendAsEmail **required** `string`: The send-as alias to be updated.
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SendAs](#sendas)

### users.settings.sendAs.smimeInfo.list
Lists S/MIME configs for the specified send-as alias.


```js
google_gmail.users.settings.sendAs.smimeInfo.list({
  "sendAsEmail": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * sendAsEmail **required** `string`: The email address that appears in the "From:" header for mail sent using this alias.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListSmimeInfoResponse](#listsmimeinforesponse)

### users.settings.sendAs.smimeInfo.insert
Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key.


```js
google_gmail.users.settings.sendAs.smimeInfo.insert({
  "sendAsEmail": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [SmimeInfo](#smimeinfo)
  * sendAsEmail **required** `string`: The email address that appears in the "From:" header for mail sent using this alias.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SmimeInfo](#smimeinfo)

### users.settings.sendAs.smimeInfo.delete
Deletes the specified S/MIME config for the specified send-as alias.


```js
google_gmail.users.settings.sendAs.smimeInfo.delete({
  "id": "",
  "sendAsEmail": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The immutable ID for the SmimeInfo.
  * sendAsEmail **required** `string`: The email address that appears in the "From:" header for mail sent using this alias.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### users.settings.sendAs.smimeInfo.get
Gets the specified S/MIME config for the specified send-as alias.


```js
google_gmail.users.settings.sendAs.smimeInfo.get({
  "id": "",
  "sendAsEmail": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The immutable ID for the SmimeInfo.
  * sendAsEmail **required** `string`: The email address that appears in the "From:" header for mail sent using this alias.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SmimeInfo](#smimeinfo)

### users.settings.sendAs.smimeInfo.setDefault
Sets the default S/MIME config for the specified send-as alias.


```js
google_gmail.users.settings.sendAs.smimeInfo.setDefault({
  "id": "",
  "sendAsEmail": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The immutable ID for the SmimeInfo.
  * sendAsEmail **required** `string`: The email address that appears in the "From:" header for mail sent using this alias.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### users.settings.sendAs.verify
Sends a verification email to the specified send-as alias address. The verification status must be pending.

This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.users.settings.sendAs.verify({
  "sendAsEmail": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * sendAsEmail **required** `string`: The send-as alias to be verified.
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### users.settings.getVacation
Gets vacation responder settings.


```js
google_gmail.users.settings.getVacation({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [VacationSettings](#vacationsettings)

### users.settings.updateVacation
Updates vacation responder settings.


```js
google_gmail.users.settings.updateVacation({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [VacationSettings](#vacationsettings)
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [VacationSettings](#vacationsettings)

### users.stop
Stop receiving push notifications for the given user mailbox.


```js
google_gmail.users.stop({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### users.threads.list
Lists the threads in the user's mailbox.


```js
google_gmail.users.threads.list({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * includeSpamTrash `boolean`: Include threads from SPAM and TRASH in the results.
  * labelIds `array`: Only return threads with labels that match all of the specified label IDs.
  * maxResults `integer`: Maximum number of threads to return.
  * pageToken `string`: Page token to retrieve a specific page of results in the list.
  * q `string`: Only return threads matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com rfc822msgid: is:unread". Parameter cannot be used when accessing the api using the gmail.metadata scope.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListThreadsResponse](#listthreadsresponse)

### users.threads.delete
Immediately and permanently deletes the specified thread. This operation cannot be undone. Prefer threads.trash instead.


```js
google_gmail.users.threads.delete({
  "id": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the Thread to delete.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### users.threads.get
Gets the specified thread.


```js
google_gmail.users.threads.get({
  "id": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * format `string` (values: full, metadata, minimal): The format to return the messages in.
  * id **required** `string`: The ID of the thread to retrieve.
  * metadataHeaders `array`: When given and format is METADATA, only include headers specified.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Thread](#thread)

### users.threads.modify
Modifies the labels applied to the thread. This applies to all messages in the thread.


```js
google_gmail.users.threads.modify({
  "id": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [ModifyThreadRequest](#modifythreadrequest)
  * id **required** `string`: The ID of the thread to modify.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Thread](#thread)

### users.threads.trash
Moves the specified thread to the trash.


```js
google_gmail.users.threads.trash({
  "id": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the thread to Trash.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Thread](#thread)

### users.threads.untrash
Removes the specified thread from the trash.


```js
google_gmail.users.threads.untrash({
  "id": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the thread to remove from Trash.
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Thread](#thread)

### users.watch
Set up or update a push notification watch on the given user mailbox.


```js
google_gmail.users.watch({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * body [WatchRequest](#watchrequest)
  * userId **required** `string`: The user's email address. The special value me can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [WatchResponse](#watchresponse)



## Definitions

### AutoForwarding
* AutoForwarding `object`: Auto-forwarding settings for an account.
  * disposition `string` (values: archive, dispositionUnspecified, leaveInInbox, markRead, trash): The state that a message should be left in after it has been forwarded.
  * emailAddress `string`: Email address to which all incoming messages are forwarded. This email address must be a verified member of the forwarding addresses.
  * enabled `boolean`: Whether all incoming mail is automatically forwarded to another address.

### BatchDeleteMessagesRequest
* BatchDeleteMessagesRequest `object`
  * ids `array`: The IDs of the messages to delete.
    * items `string`

### BatchModifyMessagesRequest
* BatchModifyMessagesRequest `object`
  * addLabelIds `array`: A list of label IDs to add to messages.
    * items `string`
  * ids `array`: The IDs of the messages to modify. There is a limit of 1000 ids per request.
    * items `string`
  * removeLabelIds `array`: A list of label IDs to remove from messages.
    * items `string`

### Draft
* Draft `object`: A draft email in the user's mailbox.
  * id `string`: The immutable ID of the draft.
  * message [Message](#message)

### Filter
* Filter `object`: Resource definition for Gmail filters. Filters apply to specific messages instead of an entire email thread.
  * action [FilterAction](#filteraction)
  * criteria [FilterCriteria](#filtercriteria)
  * id `string`: The server assigned ID of the filter.

### FilterAction
* FilterAction `object`: A set of actions to perform on a message.
  * addLabelIds `array`: List of labels to add to the message.
    * items `string`
  * forward `string`: Email address that the message should be forwarded to.
  * removeLabelIds `array`: List of labels to remove from the message.
    * items `string`

### FilterCriteria
* FilterCriteria `object`: Message matching criteria.
  * excludeChats `boolean`: Whether the response should exclude chats.
  * from `string`: The sender's display name or email address.
  * hasAttachment `boolean`: Whether the message has any attachment.
  * negatedQuery `string`: Only return messages not matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com rfc822msgid: is:unread".
  * query `string`: Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com rfc822msgid: is:unread".
  * size `integer`: The size of the entire RFC822 message in bytes, including all headers and attachments.
  * sizeComparison `string` (values: larger, smaller, unspecified): How the message size in bytes should be in relation to the size field.
  * subject `string`: Case-insensitive phrase found in the message's subject. Trailing and leading whitespace are be trimmed and adjacent spaces are collapsed.
  * to `string`: The recipient's display name or email address. Includes recipients in the "to", "cc", and "bcc" header fields. You can use simply the local part of the email address. For example, "example" and "example@" both match "example@gmail.com". This field is case-insensitive.

### ForwardingAddress
* ForwardingAddress `object`: Settings for a forwarding address.
  * forwardingEmail `string`: An email address to which messages can be forwarded.
  * verificationStatus `string` (values: accepted, pending, verificationStatusUnspecified): Indicates whether this address has been verified and is usable for forwarding. Read-only.

### History
* History `object`: A record of a change to the user's mailbox. Each history change may affect multiple messages in multiple ways.
  * id `string`: The mailbox sequence ID.
  * labelsAdded `array`: Labels added to messages in this history record.
    * items [HistoryLabelAdded](#historylabeladded)
  * labelsRemoved `array`: Labels removed from messages in this history record.
    * items [HistoryLabelRemoved](#historylabelremoved)
  * messages `array`: List of messages changed in this history record. The fields for specific change types, such as messagesAdded may duplicate messages in this field. We recommend using the specific change-type fields instead of this.
    * items [Message](#message)
  * messagesAdded `array`: Messages added to the mailbox in this history record.
    * items [HistoryMessageAdded](#historymessageadded)
  * messagesDeleted `array`: Messages deleted (not Trashed) from the mailbox in this history record.
    * items [HistoryMessageDeleted](#historymessagedeleted)

### HistoryLabelAdded
* HistoryLabelAdded `object`
  * labelIds `array`: Label IDs added to the message.
    * items `string`
  * message [Message](#message)

### HistoryLabelRemoved
* HistoryLabelRemoved `object`
  * labelIds `array`: Label IDs removed from the message.
    * items `string`
  * message [Message](#message)

### HistoryMessageAdded
* HistoryMessageAdded `object`
  * message [Message](#message)

### HistoryMessageDeleted
* HistoryMessageDeleted `object`
  * message [Message](#message)

### ImapSettings
* ImapSettings `object`: IMAP settings for an account.
  * autoExpunge `boolean`: If this value is true, Gmail will immediately expunge a message when it is marked as deleted in IMAP. Otherwise, Gmail will wait for an update from the client before expunging messages marked as deleted.
  * enabled `boolean`: Whether IMAP is enabled for the account.
  * expungeBehavior `string` (values: archive, deleteForever, expungeBehaviorUnspecified, trash): The action that will be executed on a message when it is marked as deleted and expunged from the last visible IMAP folder.
  * maxFolderSize `integer`: An optional limit on the number of messages that an IMAP folder may contain. Legal values are 0, 1000, 2000, 5000 or 10000. A value of zero is interpreted to mean that there is no limit.

### Label
* Label `object`: Labels are used to categorize messages and threads within the user's mailbox.
  * color [LabelColor](#labelcolor)
  * id `string`: The immutable ID of the label.
  * labelListVisibility `string` (values: labelHide, labelShow, labelShowIfUnread): The visibility of the label in the label list in the Gmail web interface.
  * messageListVisibility `string` (values: hide, show): The visibility of the label in the message list in the Gmail web interface.
  * messagesTotal `integer`: The total number of messages with the label.
  * messagesUnread `integer`: The number of unread messages with the label.
  * name `string`: The display name of the label.
  * threadsTotal `integer`: The total number of threads with the label.
  * threadsUnread `integer`: The number of unread threads with the label.
  * type `string` (values: system, user): The owner type for the label. User labels are created by the user and can be modified and deleted by the user and can be applied to any message or thread. System labels are internally created and cannot be added, modified, or deleted. System labels may be able to be applied to or removed from messages and threads under some circumstances but this is not guaranteed. For example, users can apply and remove the INBOX and UNREAD labels from messages and threads, but cannot apply or remove the DRAFTS or SENT labels from messages or threads.

### LabelColor
* LabelColor `object`
  * backgroundColor `string`: The background color represented as hex string #RRGGBB (ex #000000). This field is required in order to set the color of a label. Only the following predefined set of color values are allowed:
  * textColor `string`: The text color of the label, represented as hex string. This field is required in order to set the color of a label. Only the following predefined set of color values are allowed:

### ListDraftsResponse
* ListDraftsResponse `object`
  * drafts `array`: List of drafts.
    * items [Draft](#draft)
  * nextPageToken `string`: Token to retrieve the next page of results in the list.
  * resultSizeEstimate `integer`: Estimated total number of results.

### ListFiltersResponse
* ListFiltersResponse `object`: Response for the ListFilters method.
  * filter `array`: List of a user's filters.
    * items [Filter](#filter)

### ListForwardingAddressesResponse
* ListForwardingAddressesResponse `object`: Response for the ListForwardingAddresses method.
  * forwardingAddresses `array`: List of addresses that may be used for forwarding.
    * items [ForwardingAddress](#forwardingaddress)

### ListHistoryResponse
* ListHistoryResponse `object`
  * history `array`: List of history records. Any messages contained in the response will typically only have id and threadId fields populated.
    * items [History](#history)
  * historyId `string`: The ID of the mailbox's current history record.
  * nextPageToken `string`: Page token to retrieve the next page of results in the list.

### ListLabelsResponse
* ListLabelsResponse `object`
  * labels `array`: List of labels.
    * items [Label](#label)

### ListMessagesResponse
* ListMessagesResponse `object`
  * messages `array`: List of messages.
    * items [Message](#message)
  * nextPageToken `string`: Token to retrieve the next page of results in the list.
  * resultSizeEstimate `integer`: Estimated total number of results.

### ListSendAsResponse
* ListSendAsResponse `object`: Response for the ListSendAs method.
  * sendAs `array`: List of send-as aliases.
    * items [SendAs](#sendas)

### ListSmimeInfoResponse
* ListSmimeInfoResponse `object`
  * smimeInfo `array`: List of SmimeInfo.
    * items [SmimeInfo](#smimeinfo)

### ListThreadsResponse
* ListThreadsResponse `object`
  * nextPageToken `string`: Page token to retrieve the next page of results in the list.
  * resultSizeEstimate `integer`: Estimated total number of results.
  * threads `array`: List of threads.
    * items [Thread](#thread)

### Message
* Message `object`: An email message.
  * historyId `string`: The ID of the last history record that modified this message.
  * id `string`: The immutable ID of the message.
  * internalDate `string`: The internal message creation timestamp (epoch ms), which determines ordering in the inbox. For normal SMTP-received email, this represents the time the message was originally accepted by Google, which is more reliable than the Date header. However, for API-migrated mail, it can be configured by client to be based on the Date header.
  * labelIds `array`: List of IDs of labels applied to this message.
    * items `string`
  * payload [MessagePart](#messagepart)
  * raw `string`: The entire email message in an RFC 2822 formatted and base64url encoded string. Returned in messages.get and drafts.get responses when the format=RAW parameter is supplied.
  * sizeEstimate `integer`: Estimated size in bytes of the message.
  * snippet `string`: A short part of the message text.
  * threadId `string`: The ID of the thread the message belongs to. To add a message or draft to a thread, the following criteria must be met: 

### MessagePart
* MessagePart `object`: A single MIME message part.
  * body [MessagePartBody](#messagepartbody)
  * filename `string`: The filename of the attachment. Only present if this message part represents an attachment.
  * headers `array`: List of headers on this message part. For the top-level message part, representing the entire message payload, it will contain the standard RFC 2822 email headers such as To, From, and Subject.
    * items [MessagePartHeader](#messagepartheader)
  * mimeType `string`: The MIME type of the message part.
  * partId `string`: The immutable ID of the message part.
  * parts `array`: The child MIME message parts of this part. This only applies to container MIME message parts, for example multipart/*. For non- container MIME message part types, such as text/plain, this field is empty. For more information, see RFC 1521.
    * items [MessagePart](#messagepart)

### MessagePartBody
* MessagePartBody `object`: The body of a single MIME message part.
  * attachmentId `string`: When present, contains the ID of an external attachment that can be retrieved in a separate messages.attachments.get request. When not present, the entire content of the message part body is contained in the data field.
  * data `string`: The body data of a MIME message part as a base64url encoded string. May be empty for MIME container types that have no message body or when the body data is sent as a separate attachment. An attachment ID is present if the body data is contained in a separate attachment.
  * size `integer`: Number of bytes for the message part data (encoding notwithstanding).

### MessagePartHeader
* MessagePartHeader `object`
  * name `string`: The name of the header before the : separator. For example, To.
  * value `string`: The value of the header after the : separator. For example, someuser@example.com.

### ModifyMessageRequest
* ModifyMessageRequest `object`
  * addLabelIds `array`: A list of IDs of labels to add to this message.
    * items `string`
  * removeLabelIds `array`: A list IDs of labels to remove from this message.
    * items `string`

### ModifyThreadRequest
* ModifyThreadRequest `object`
  * addLabelIds `array`: A list of IDs of labels to add to this thread.
    * items `string`
  * removeLabelIds `array`: A list of IDs of labels to remove from this thread.
    * items `string`

### PopSettings
* PopSettings `object`: POP settings for an account.
  * accessWindow `string` (values: accessWindowUnspecified, allMail, disabled, fromNowOn): The range of messages which are accessible via POP.
  * disposition `string` (values: archive, dispositionUnspecified, leaveInInbox, markRead, trash): The action that will be executed on a message after it has been fetched via POP.

### Profile
* Profile `object`: Profile for a Gmail user.
  * emailAddress `string`: The user's email address.
  * historyId `string`: The ID of the mailbox's current history record.
  * messagesTotal `integer`: The total number of messages in the mailbox.
  * threadsTotal `integer`: The total number of threads in the mailbox.

### SendAs
* SendAs `object`: Settings associated with a send-as alias, which can be either the primary login address associated with the account or a custom "from" address. Send-as aliases correspond to the "Send Mail As" feature in the web interface.
  * displayName `string`: A name that appears in the "From:" header for mail sent using this alias. For custom "from" addresses, when this is empty, Gmail will populate the "From:" header with the name that is used for the primary address associated with the account.
  * isDefault `boolean`: Whether this address is selected as the default "From:" address in situations such as composing a new message or sending a vacation auto-reply. Every Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is true. Changing this from false to true for an address will result in this field becoming false for the other previous default address.
  * isPrimary `boolean`: Whether this address is the primary address used to login to the account. Every Gmail account has exactly one primary address, and it cannot be deleted from the collection of send-as aliases. This field is read-only.
  * replyToAddress `string`: An optional email address that is included in a "Reply-To:" header for mail sent using this alias. If this is empty, Gmail will not generate a "Reply-To:" header.
  * sendAsEmail `string`: The email address that appears in the "From:" header for mail sent using this alias. This is read-only for all operations except create.
  * signature `string`: An optional HTML signature that is included in messages composed with this alias in the Gmail web UI.
  * smtpMsa [SmtpMsa](#smtpmsa)
  * treatAsAlias `boolean`: Whether Gmail should  treat this address as an alias for the user's primary email address. This setting only applies to custom "from" aliases.
  * verificationStatus `string` (values: accepted, pending, verificationStatusUnspecified): Indicates whether this address has been verified for use as a send-as alias. Read-only. This setting only applies to custom "from" aliases.

### SmimeInfo
* SmimeInfo `object`: An S/MIME email config.
  * encryptedKeyPassword `string`: Encrypted key password, when key is encrypted.
  * expiration `string`: When the certificate expires (in milliseconds since epoch).
  * id `string`: The immutable ID for the SmimeInfo.
  * isDefault `boolean`: Whether this SmimeInfo is the default one for this user's send-as address.
  * issuerCn `string`: The S/MIME certificate issuer's common name.
  * pem `string`: PEM formatted X509 concatenated certificate string (standard base64 encoding). Format used for returning key, which includes public key as well as certificate chain (not private key).
  * pkcs12 `string`: PKCS#12 format containing a single private/public key pair and certificate chain. This format is only accepted from client for creating a new SmimeInfo and is never returned, because the private key is not intended to be exported. PKCS#12 may be encrypted, in which case encryptedKeyPassword should be set appropriately.

### SmtpMsa
* SmtpMsa `object`: Configuration for communication with an SMTP service.
  * host `string`: The hostname of the SMTP service. Required.
  * password `string`: The password that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.
  * port `integer`: The port of the SMTP service. Required.
  * securityMode `string` (values: none, securityModeUnspecified, ssl, starttls): The protocol that will be used to secure communication with the SMTP service. Required.
  * username `string`: The username that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.

### Thread
* Thread `object`: A collection of messages representing a conversation.
  * historyId `string`: The ID of the last history record that modified this thread.
  * id `string`: The unique ID of the thread.
  * messages `array`: The list of messages in the thread.
    * items [Message](#message)
  * snippet `string`: A short part of the message text.

### VacationSettings
* VacationSettings `object`: Vacation auto-reply settings for an account. These settings correspond to the "Vacation responder" feature in the web interface.
  * enableAutoReply `boolean`: Flag that controls whether Gmail automatically replies to messages.
  * endTime `string`: An optional end time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives before the end time. If both startTime and endTime are specified, startTime must precede endTime.
  * responseBodyHtml `string`: Response body in HTML format. Gmail will sanitize the HTML before storing it.
  * responseBodyPlainText `string`: Response body in plain text format.
  * responseSubject `string`: Optional text to prepend to the subject line in vacation responses. In order to enable auto-replies, either the response subject or the response body must be nonempty.
  * restrictToContacts `boolean`: Flag that determines whether responses are sent to recipients who are not in the user's list of contacts.
  * restrictToDomain `boolean`: Flag that determines whether responses are sent to recipients who are outside of the user's domain. This feature is only available for G Suite users.
  * startTime `string`: An optional start time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives after the start time. If both startTime and endTime are specified, startTime must precede endTime.

### WatchRequest
* WatchRequest `object`: Set up or update a new push notification watch on this user's mailbox.
  * labelFilterAction `string` (values: exclude, include): Filtering behavior of labelIds list specified.
  * labelIds `array`: List of label_ids to restrict notifications about. By default, if unspecified, all changes are pushed out. If specified then dictates which labels are required for a push notification to be generated.
    * items `string`
  * topicName `string`: A fully qualified Google Cloud Pub/Sub API topic name to publish the events to. This topic name **must** already exist in Cloud Pub/Sub and you **must** have already granted gmail "publish" permission on it. For example, "projects/my-project-identifier/topics/my-topic-name" (using the Cloud Pub/Sub "v1" topic naming format).

### WatchResponse
* WatchResponse `object`: Push notification watch response.
  * expiration `string`: When Gmail will stop sending notifications for mailbox updates (epoch millis). Call watch again before this time to renew the watch.
  * historyId `string`: The ID of the mailbox's current history record.


