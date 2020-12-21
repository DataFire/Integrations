# @datafire/google_gmail

Client library for Gmail API

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

.then(data => {
  console.log(data);
});
```

## Description

The Gmail API lets you view and manage Gmail mailbox data like threads, messages, and labels.

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

### gmail.users.drafts.list
Lists the drafts in the user's mailbox.


```js
google_gmail.gmail.users.drafts.list({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * includeSpamTrash `boolean`: Include drafts from `SPAM` and `TRASH` in the results.
  * maxResults `integer`: Maximum number of drafts to return.
  * pageToken `string`: Page token to retrieve a specific page of results in the list.
  * q `string`: Only return draft messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListDraftsResponse](#listdraftsresponse)

### gmail.users.drafts.create
Creates a new draft with the `DRAFT` label.


```js
google_gmail.gmail.users.drafts.create({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * body [Draft](#draft)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Draft](#draft)

### gmail.users.drafts.send
Sends the specified, existing draft to the recipients in the `To`, `Cc`, and `Bcc` headers.


```js
google_gmail.gmail.users.drafts.send({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * body [Draft](#draft)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Message](#message)

### gmail.users.drafts.delete
Immediately and permanently deletes the specified draft. Does not simply trash it.


```js
google_gmail.gmail.users.drafts.delete({
  "userId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * id **required** `string`: The ID of the draft to delete.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gmail.users.drafts.get
Gets the specified draft.


```js
google_gmail.gmail.users.drafts.get({
  "userId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * id **required** `string`: The ID of the draft to retrieve.
  * format `string` (values: minimal, full, raw, metadata): The format to return the draft in.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Draft](#draft)

### gmail.users.drafts.update
Replaces a draft's content.


```js
google_gmail.gmail.users.drafts.update({
  "userId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * id **required** `string`: The ID of the draft to update.
  * body [Draft](#draft)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Draft](#draft)

### gmail.users.history.list
Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing `historyId`).


```js
google_gmail.gmail.users.history.list({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * historyTypes `array`: History types to be returned by the function
  * labelId `string`: Only return messages with a label matching the ID.
  * maxResults `integer`: The maximum number of history records to return.
  * pageToken `string`: Page token to retrieve a specific page of results in the list.
  * startHistoryId `string`: Required. Returns history records after the specified `startHistoryId`. The supplied `startHistoryId` should be obtained from the `historyId` of a message, thread, or previous `list` response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date `startHistoryId` typically returns an `HTTP 404` error code. A `historyId` is typically valid for at least a week, but in some rare circumstances may be valid for only a few hours. If you receive an `HTTP 404` error response, your application should perform a full sync. If you receive no `nextPageToken` in the response, there are no updates to retrieve and you can store the returned `historyId` for a future request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListHistoryResponse](#listhistoryresponse)

### gmail.users.labels.list
Lists all labels in the user's mailbox.


```js
google_gmail.gmail.users.labels.list({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListLabelsResponse](#listlabelsresponse)

### gmail.users.labels.create
Creates a new label.


```js
google_gmail.gmail.users.labels.create({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * body [Label](#label)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Label](#label)

### gmail.users.labels.delete
Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to.


```js
google_gmail.gmail.users.labels.delete({
  "userId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * id **required** `string`: The ID of the label to delete.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gmail.users.labels.get
Gets the specified label.


```js
google_gmail.gmail.users.labels.get({
  "userId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * id **required** `string`: The ID of the label to retrieve.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Label](#label)

### gmail.users.labels.patch
Patch the specified label.


```js
google_gmail.gmail.users.labels.patch({
  "userId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * id **required** `string`: The ID of the label to update.
  * body [Label](#label)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Label](#label)

### gmail.users.labels.update
Updates the specified label.


```js
google_gmail.gmail.users.labels.update({
  "userId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * id **required** `string`: The ID of the label to update.
  * body [Label](#label)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Label](#label)

### gmail.users.messages.list
Lists the messages in the user's mailbox.


```js
google_gmail.gmail.users.messages.list({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * includeSpamTrash `boolean`: Include messages from `SPAM` and `TRASH` in the results.
  * labelIds `array`: Only return messages with labels that match all of the specified label IDs.
  * maxResults `integer`: Maximum number of messages to return.
  * pageToken `string`: Page token to retrieve a specific page of results in the list.
  * q `string`: Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. Parameter cannot be used when accessing the api using the gmail.metadata scope.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListMessagesResponse](#listmessagesresponse)

### gmail.users.messages.insert
Directly inserts a message into only this user's mailbox similar to `IMAP APPEND`, bypassing most scanning and classification. Does not send a message.


```js
google_gmail.gmail.users.messages.insert({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * deleted `boolean`: Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for G Suite accounts.
  * internalDateSource `string` (values: receivedTime, dateHeader): Source for Gmail's internal date of the message.
  * body [Message](#message)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Message](#message)

### gmail.users.messages.batchDelete
Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.


```js
google_gmail.gmail.users.messages.batchDelete({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * body [BatchDeleteMessagesRequest](#batchdeletemessagesrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gmail.users.messages.batchModify
Modifies the labels on the specified messages.


```js
google_gmail.gmail.users.messages.batchModify({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * body [BatchModifyMessagesRequest](#batchmodifymessagesrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gmail.users.messages.import
Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. Does not send a message. Note: This function doesn't trigger forwarding rules or filters set up by the user.


```js
google_gmail.gmail.users.messages.import({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * deleted `boolean`: Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for G Suite accounts.
  * internalDateSource `string` (values: receivedTime, dateHeader): Source for Gmail's internal date of the message.
  * neverMarkSpam `boolean`: Ignore the Gmail spam classifier decision and never mark this email as SPAM in the mailbox.
  * processForCalendar `boolean`: Process calendar invites in the email and add any extracted meetings to the Google Calendar for this user.
  * body [Message](#message)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Message](#message)

### gmail.users.messages.send
Sends the specified message to the recipients in the `To`, `Cc`, and `Bcc` headers.


```js
google_gmail.gmail.users.messages.send({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * body [Message](#message)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Message](#message)

### gmail.users.messages.delete
Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer `messages.trash` instead.


```js
google_gmail.gmail.users.messages.delete({
  "userId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * id **required** `string`: The ID of the message to delete.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gmail.users.messages.get
Gets the specified message.


```js
google_gmail.gmail.users.messages.get({
  "userId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * id **required** `string`: The ID of the message to retrieve.
  * format `string` (values: minimal, full, raw, metadata): The format to return the message in.
  * metadataHeaders `array`: When given and format is `METADATA`, only include headers specified.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Message](#message)

### gmail.users.messages.modify
Modifies the labels on the specified message.


```js
google_gmail.gmail.users.messages.modify({
  "userId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * id **required** `string`: The ID of the message to modify.
  * body [ModifyMessageRequest](#modifymessagerequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Message](#message)

### gmail.users.messages.trash
Moves the specified message to the trash.


```js
google_gmail.gmail.users.messages.trash({
  "userId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * id **required** `string`: The ID of the message to Trash.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Message](#message)

### gmail.users.messages.untrash
Removes the specified message from the trash.


```js
google_gmail.gmail.users.messages.untrash({
  "userId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * id **required** `string`: The ID of the message to remove from Trash.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Message](#message)

### gmail.users.messages.attachments.get
Gets the specified message attachment.


```js
google_gmail.gmail.users.messages.attachments.get({
  "userId": "",
  "messageId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * messageId **required** `string`: The ID of the message containing the attachment.
  * id **required** `string`: The ID of the attachment.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [MessagePartBody](#messagepartbody)

### gmail.users.getProfile
Gets the current user's Gmail profile.


```js
google_gmail.gmail.users.getProfile({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Profile](#profile)

### gmail.users.settings.getAutoForwarding
Gets the auto-forwarding setting for the specified account.


```js
google_gmail.gmail.users.settings.getAutoForwarding({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AutoForwarding](#autoforwarding)

### gmail.users.settings.updateAutoForwarding
Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled. This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.gmail.users.settings.updateAutoForwarding({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * body [AutoForwarding](#autoforwarding)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AutoForwarding](#autoforwarding)

### gmail.users.settings.delegates.list
Lists the delegates for the specified account. This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.gmail.users.settings.delegates.list({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListDelegatesResponse](#listdelegatesresponse)

### gmail.users.settings.delegates.create
Adds a delegate with its verification status set directly to `accepted`, without sending any verification email. The delegate user must be a member of the same G Suite organization as the delegator user. Gmail imposes limitations on the number of delegates and delegators each user in a G Suite organization can have. These limits depend on your organization, but in general each user can have up to 25 delegates and up to 10 delegators. Note that a delegate user must be referred to by their primary email address, and not an email alias. Also note that when a new delegate is created, there may be up to a one minute delay before the new delegate is available for use. This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.gmail.users.settings.delegates.create({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * body [Delegate](#delegate)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Delegate](#delegate)

### gmail.users.settings.delegates.delete
Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.gmail.users.settings.delegates.delete({
  "userId": "",
  "delegateEmail": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * delegateEmail **required** `string`: The email address of the user to be removed as a delegate.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gmail.users.settings.delegates.get
Gets the specified delegate. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.gmail.users.settings.delegates.get({
  "userId": "",
  "delegateEmail": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * delegateEmail **required** `string`: The email address of the user whose delegate relationship is to be retrieved.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Delegate](#delegate)

### gmail.users.settings.filters.list
Lists the message filters of a Gmail user.


```js
google_gmail.gmail.users.settings.filters.list({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListFiltersResponse](#listfiltersresponse)

### gmail.users.settings.filters.create
Creates a filter. Note: you can only create a maximum of 1,000 filters.


```js
google_gmail.gmail.users.settings.filters.create({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * body [Filter](#filter)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Filter](#filter)

### gmail.users.settings.filters.delete
Deletes a filter.


```js
google_gmail.gmail.users.settings.filters.delete({
  "userId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * id **required** `string`: The ID of the filter to be deleted.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gmail.users.settings.filters.get
Gets a filter.


```js
google_gmail.gmail.users.settings.filters.get({
  "userId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * id **required** `string`: The ID of the filter to be fetched.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Filter](#filter)

### gmail.users.settings.forwardingAddresses.list
Lists the forwarding addresses for the specified account.


```js
google_gmail.gmail.users.settings.forwardingAddresses.list({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListForwardingAddressesResponse](#listforwardingaddressesresponse)

### gmail.users.settings.forwardingAddresses.create
Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.gmail.users.settings.forwardingAddresses.create({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * body [ForwardingAddress](#forwardingaddress)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ForwardingAddress](#forwardingaddress)

### gmail.users.settings.forwardingAddresses.delete
Deletes the specified forwarding address and revokes any verification that may have been required. This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.gmail.users.settings.forwardingAddresses.delete({
  "userId": "",
  "forwardingEmail": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * forwardingEmail **required** `string`: The forwarding address to be deleted.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gmail.users.settings.forwardingAddresses.get
Gets the specified forwarding address.


```js
google_gmail.gmail.users.settings.forwardingAddresses.get({
  "userId": "",
  "forwardingEmail": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * forwardingEmail **required** `string`: The forwarding address to be retrieved.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ForwardingAddress](#forwardingaddress)

### gmail.users.settings.getImap
Gets IMAP settings.


```js
google_gmail.gmail.users.settings.getImap({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ImapSettings](#imapsettings)

### gmail.users.settings.updateImap
Updates IMAP settings.


```js
google_gmail.gmail.users.settings.updateImap({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * body [ImapSettings](#imapsettings)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ImapSettings](#imapsettings)

### gmail.users.settings.getLanguage
Gets language settings.


```js
google_gmail.gmail.users.settings.getLanguage({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [LanguageSettings](#languagesettings)

### gmail.users.settings.updateLanguage
Updates language settings. If successful, the return object contains the `displayLanguage` that was saved for the user, which may differ from the value passed into the request. This is because the requested `displayLanguage` may not be directly supported by Gmail but have a close variant that is, and so the variant may be chosen and saved instead.


```js
google_gmail.gmail.users.settings.updateLanguage({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * body [LanguageSettings](#languagesettings)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [LanguageSettings](#languagesettings)

### gmail.users.settings.getPop
Gets POP settings.


```js
google_gmail.gmail.users.settings.getPop({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [PopSettings](#popsettings)

### gmail.users.settings.updatePop
Updates POP settings.


```js
google_gmail.gmail.users.settings.updatePop({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * body [PopSettings](#popsettings)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [PopSettings](#popsettings)

### gmail.users.settings.sendAs.list
Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom "from" aliases.


```js
google_gmail.gmail.users.settings.sendAs.list({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListSendAsResponse](#listsendasresponse)

### gmail.users.settings.sendAs.create
Creates a custom "from" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.gmail.users.settings.sendAs.create({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * body [SendAs](#sendas)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SendAs](#sendas)

### gmail.users.settings.sendAs.delete
Deletes the specified send-as alias. Revokes any verification that may have been required for using it. This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.gmail.users.settings.sendAs.delete({
  "userId": "",
  "sendAsEmail": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * sendAsEmail **required** `string`: The send-as alias to be deleted.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gmail.users.settings.sendAs.get
Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection.


```js
google_gmail.gmail.users.settings.sendAs.get({
  "userId": "",
  "sendAsEmail": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * sendAsEmail **required** `string`: The send-as alias to be retrieved.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SendAs](#sendas)

### gmail.users.settings.sendAs.patch
Patch the specified send-as alias.


```js
google_gmail.gmail.users.settings.sendAs.patch({
  "userId": "",
  "sendAsEmail": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * sendAsEmail **required** `string`: The send-as alias to be updated.
  * body [SendAs](#sendas)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SendAs](#sendas)

### gmail.users.settings.sendAs.update
Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.


```js
google_gmail.gmail.users.settings.sendAs.update({
  "userId": "",
  "sendAsEmail": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * sendAsEmail **required** `string`: The send-as alias to be updated.
  * body [SendAs](#sendas)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SendAs](#sendas)

### gmail.users.settings.sendAs.smimeInfo.list
Lists S/MIME configs for the specified send-as alias.


```js
google_gmail.gmail.users.settings.sendAs.smimeInfo.list({
  "userId": "",
  "sendAsEmail": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * sendAsEmail **required** `string`: The email address that appears in the "From:" header for mail sent using this alias.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListSmimeInfoResponse](#listsmimeinforesponse)

### gmail.users.settings.sendAs.smimeInfo.insert
Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key.


```js
google_gmail.gmail.users.settings.sendAs.smimeInfo.insert({
  "userId": "",
  "sendAsEmail": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * sendAsEmail **required** `string`: The email address that appears in the "From:" header for mail sent using this alias.
  * body [SmimeInfo](#smimeinfo)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SmimeInfo](#smimeinfo)

### gmail.users.settings.sendAs.smimeInfo.delete
Deletes the specified S/MIME config for the specified send-as alias.


```js
google_gmail.gmail.users.settings.sendAs.smimeInfo.delete({
  "userId": "",
  "sendAsEmail": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * sendAsEmail **required** `string`: The email address that appears in the "From:" header for mail sent using this alias.
  * id **required** `string`: The immutable ID for the SmimeInfo.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gmail.users.settings.sendAs.smimeInfo.get
Gets the specified S/MIME config for the specified send-as alias.


```js
google_gmail.gmail.users.settings.sendAs.smimeInfo.get({
  "userId": "",
  "sendAsEmail": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * sendAsEmail **required** `string`: The email address that appears in the "From:" header for mail sent using this alias.
  * id **required** `string`: The immutable ID for the SmimeInfo.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SmimeInfo](#smimeinfo)

### gmail.users.settings.sendAs.smimeInfo.setDefault
Sets the default S/MIME config for the specified send-as alias.


```js
google_gmail.gmail.users.settings.sendAs.smimeInfo.setDefault({
  "userId": "",
  "sendAsEmail": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * sendAsEmail **required** `string`: The email address that appears in the "From:" header for mail sent using this alias.
  * id **required** `string`: The immutable ID for the SmimeInfo.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gmail.users.settings.sendAs.verify
Sends a verification email to the specified send-as alias address. The verification status must be `pending`. This method is only available to service account clients that have been delegated domain-wide authority.


```js
google_gmail.gmail.users.settings.sendAs.verify({
  "userId": "",
  "sendAsEmail": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * sendAsEmail **required** `string`: The send-as alias to be verified.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gmail.users.settings.getVacation
Gets vacation responder settings.


```js
google_gmail.gmail.users.settings.getVacation({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [VacationSettings](#vacationsettings)

### gmail.users.settings.updateVacation
Updates vacation responder settings.


```js
google_gmail.gmail.users.settings.updateVacation({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: User's email address. The special value "me" can be used to indicate the authenticated user.
  * body [VacationSettings](#vacationsettings)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [VacationSettings](#vacationsettings)

### gmail.users.stop
Stop receiving push notifications for the given user mailbox.


```js
google_gmail.gmail.users.stop({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gmail.users.threads.list
Lists the threads in the user's mailbox.


```js
google_gmail.gmail.users.threads.list({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * includeSpamTrash `boolean`: Include threads from `SPAM` and `TRASH` in the results.
  * labelIds `array`: Only return threads with labels that match all of the specified label IDs.
  * maxResults `integer`: Maximum number of threads to return.
  * pageToken `string`: Page token to retrieve a specific page of results in the list.
  * q `string`: Only return threads matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. Parameter cannot be used when accessing the api using the gmail.metadata scope.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListThreadsResponse](#listthreadsresponse)

### gmail.users.threads.delete
Immediately and permanently deletes the specified thread. This operation cannot be undone. Prefer `threads.trash` instead.


```js
google_gmail.gmail.users.threads.delete({
  "userId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * id **required** `string`: ID of the Thread to delete.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gmail.users.threads.get
Gets the specified thread.


```js
google_gmail.gmail.users.threads.get({
  "userId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * id **required** `string`: The ID of the thread to retrieve.
  * format `string` (values: full, metadata, minimal): The format to return the messages in.
  * metadataHeaders `array`: When given and format is METADATA, only include headers specified.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Thread](#thread)

### gmail.users.threads.modify
Modifies the labels applied to the thread. This applies to all messages in the thread.


```js
google_gmail.gmail.users.threads.modify({
  "userId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * id **required** `string`: The ID of the thread to modify.
  * body [ModifyThreadRequest](#modifythreadrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Thread](#thread)

### gmail.users.threads.trash
Moves the specified thread to the trash.


```js
google_gmail.gmail.users.threads.trash({
  "userId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * id **required** `string`: The ID of the thread to Trash.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Thread](#thread)

### gmail.users.threads.untrash
Removes the specified thread from the trash.


```js
google_gmail.gmail.users.threads.untrash({
  "userId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * id **required** `string`: The ID of the thread to remove from Trash.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Thread](#thread)

### gmail.users.watch
Set up or update a push notification watch on the given user mailbox.


```js
google_gmail.gmail.users.watch({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user's email address. The special value `me` can be used to indicate the authenticated user.
  * body [WatchRequest](#watchrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [WatchResponse](#watchresponse)

### buildMessage



```js
google_gmail.buildMessage({}, context)
```

#### Input
* input `object`
  * to `string`, `array`: One or more email addresses
    * items `string`
  * from `string`: An email address, or a name and email address in the form `John Doe <john@doe.com>`
  * subject `string`
  * body `string`

#### Output
* output `string`: RFC 2822 formatted and base64url encoded message



## Definitions

### AutoForwarding
* AutoForwarding `object`: Auto-forwarding settings for an account.
  * disposition `string` (values: dispositionUnspecified, leaveInInbox, archive, trash, markRead): The state that a message should be left in after it has been forwarded.
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

### Delegate
* Delegate `object`: Settings for a delegate. Delegates can read, send, and delete messages, as well as view and add contacts, for the delegator's account. See "Set up mail delegation" for more information about delegates.
  * delegateEmail `string`: The email address of the delegate.
  * verificationStatus `string` (values: verificationStatusUnspecified, accepted, pending, rejected, expired): Indicates whether this address has been verified and can act as a delegate for the account. Read-only.

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
  * negatedQuery `string`: Only return messages not matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`.
  * query `string`: Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`.
  * size `integer`: The size of the entire RFC822 message in bytes, including all headers and attachments.
  * sizeComparison `string` (values: unspecified, smaller, larger): How the message size in bytes should be in relation to the size field.
  * subject `string`: Case-insensitive phrase found in the message's subject. Trailing and leading whitespace are be trimmed and adjacent spaces are collapsed.
  * to `string`: The recipient's display name or email address. Includes recipients in the "to", "cc", and "bcc" header fields. You can use simply the local part of the email address. For example, "example" and "example@" both match "example@gmail.com". This field is case-insensitive.

### ForwardingAddress
* ForwardingAddress `object`: Settings for a forwarding address.
  * forwardingEmail `string`: An email address to which messages can be forwarded.
  * verificationStatus `string` (values: verificationStatusUnspecified, accepted, pending): Indicates whether this address has been verified and is usable for forwarding. Read-only.

### History
* History `object`: A record of a change to the user's mailbox. Each history change may affect multiple messages in multiple ways.
  * id `string`: The mailbox sequence ID.
  * labelsAdded `array`: Labels added to messages in this history record.
    * items [HistoryLabelAdded](#historylabeladded)
  * labelsRemoved `array`: Labels removed from messages in this history record.
    * items [HistoryLabelRemoved](#historylabelremoved)
  * messages `array`: List of messages changed in this history record. The fields for specific change types, such as `messagesAdded` may duplicate messages in this field. We recommend using the specific change-type fields instead of this.
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
  * expungeBehavior `string` (values: expungeBehaviorUnspecified, archive, trash, deleteForever): The action that will be executed on a message when it is marked as deleted and expunged from the last visible IMAP folder.
  * maxFolderSize `integer`: An optional limit on the number of messages that an IMAP folder may contain. Legal values are 0, 1000, 2000, 5000 or 10000. A value of zero is interpreted to mean that there is no limit.

### Label
* Label `object`: Labels are used to categorize messages and threads within the user's mailbox.
  * color [LabelColor](#labelcolor)
  * id `string`: The immutable ID of the label.
  * labelListVisibility `string` (values: labelShow, labelShowIfUnread, labelHide): The visibility of the label in the label list in the Gmail web interface.
  * messageListVisibility `string` (values: show, hide): The visibility of messages with this label in the message list in the Gmail web interface.
  * messagesTotal `integer`: The total number of messages with the label.
  * messagesUnread `integer`: The number of unread messages with the label.
  * name `string`: The display name of the label.
  * threadsTotal `integer`: The total number of threads with the label.
  * threadsUnread `integer`: The number of unread threads with the label.
  * type `string` (values: system, user): The owner type for the label. User labels are created by the user and can be modified and deleted by the user and can be applied to any message or thread. System labels are internally created and cannot be added, modified, or deleted. System labels may be able to be applied to or removed from messages and threads under some circumstances but this is not guaranteed. For example, users can apply and remove the `INBOX` and `UNREAD` labels from messages and threads, but cannot apply or remove the `DRAFTS` or `SENT` labels from messages or threads.

### LabelColor
* LabelColor `object`
  * backgroundColor `string`: The background color represented as hex string #RRGGBB (ex #000000). This field is required in order to set the color of a label. Only the following predefined set of color values are allowed: \#000000, #434343, #666666, #999999, #cccccc, #efefef, #f3f3f3, #ffffff, \#fb4c2f, #ffad47, #fad165, #16a766, #43d692, #4a86e8, #a479e2, #f691b3, \#f6c5be, #ffe6c7, #fef1d1, #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8, \#efa093, #ffd6a2, #fce8b3, #89d3b2, #a0eac9, #a4c2f4, #d0bcf1, #fbc8d9, \#e66550, #ffbc6b, #fcda83, #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0, \#cc3a21, #eaa041, #f2c960, #149e60, #3dc789, #3c78d8, #8e63ce, #e07798, \#ac2b16, #cf8933, #d5ae49, #0b804b, #2a9c68, #285bac, #653e9b, #b65775, \#822111, #a46a21, #aa8831, #076239, #1a764d, #1c4587, #41236d, #83334c \#464646, #e7e7e7, #0d3472, #b6cff5, #0d3b44, #98d7e4, #3d188e, #e3d7ff, \#711a36, #fbd3e0, #8a1c0a, #f2b2a8, #7a2e0b, #ffc8af, #7a4706, #ffdeb5, \#594c05, #fbe983, #684e07, #fdedc1, #0b4f30, #b3efd3, #04502e, #a2dcc1, \#c2c2c2, #4986e7, #2da2bb, #b99aff, #994a64, #f691b2, #ff7537, #ffad46, \#662e37, #ebdbde, #cca6ac, #094228, #42d692, #16a765
  * textColor `string`: The text color of the label, represented as hex string. This field is required in order to set the color of a label. Only the following predefined set of color values are allowed: \#000000, #434343, #666666, #999999, #cccccc, #efefef, #f3f3f3, #ffffff, \#fb4c2f, #ffad47, #fad165, #16a766, #43d692, #4a86e8, #a479e2, #f691b3, \#f6c5be, #ffe6c7, #fef1d1, #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8, \#efa093, #ffd6a2, #fce8b3, #89d3b2, #a0eac9, #a4c2f4, #d0bcf1, #fbc8d9, \#e66550, #ffbc6b, #fcda83, #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0, \#cc3a21, #eaa041, #f2c960, #149e60, #3dc789, #3c78d8, #8e63ce, #e07798, \#ac2b16, #cf8933, #d5ae49, #0b804b, #2a9c68, #285bac, #653e9b, #b65775, \#822111, #a46a21, #aa8831, #076239, #1a764d, #1c4587, #41236d, #83334c \#464646, #e7e7e7, #0d3472, #b6cff5, #0d3b44, #98d7e4, #3d188e, #e3d7ff, \#711a36, #fbd3e0, #8a1c0a, #f2b2a8, #7a2e0b, #ffc8af, #7a4706, #ffdeb5, \#594c05, #fbe983, #684e07, #fdedc1, #0b4f30, #b3efd3, #04502e, #a2dcc1, \#c2c2c2, #4986e7, #2da2bb, #b99aff, #994a64, #f691b2, #ff7537, #ffad46, \#662e37, #ebdbde, #cca6ac, #094228, #42d692, #16a765

### LanguageSettings
* LanguageSettings `object`: Language settings for an account. These settings correspond to the "Language settings" feature in the web interface.
  * displayLanguage `string`: The language to display Gmail in, formatted as an RFC 3066 Language Tag (for example `en-GB`, `fr` or `ja` for British English, French, or Japanese respectively). The set of languages supported by Gmail evolves over time, so please refer to the "Language" dropdown in the Gmail settings for all available options, as described in the language settings help article. A table of sample values is also provided in the Managing Language Settings guide Not all Gmail clients can display the same set of languages. In the case that a user's display language is not available for use on a particular client, said client automatically chooses to display in the closest supported variant (or a reasonable default).

### ListDelegatesResponse
* ListDelegatesResponse `object`: Response for the ListDelegates method.
  * delegates `array`: List of the user's delegates (with any verification status). If an account doesn't have delegates, this field doesn't appear.
    * items [Delegate](#delegate)

### ListDraftsResponse
* ListDraftsResponse `object`
  * drafts `array`: List of drafts. Note that the `Message` property in each `Draft` resource only contains an `id` and a `threadId`. The messages.get method can fetch additional message details.
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
  * history `array`: List of history records. Any `messages` contained in the response will typically only have `id` and `threadId` fields populated.
    * items [History](#history)
  * historyId `string`: The ID of the mailbox's current history record.
  * nextPageToken `string`: Page token to retrieve the next page of results in the list.

### ListLabelsResponse
* ListLabelsResponse `object`
  * labels `array`: List of labels. Note that each label resource only contains an `id`, `name`, `messageListVisibility`, `labelListVisibility`, and `type`. The labels.get method can fetch additional label details.
    * items [Label](#label)

### ListMessagesResponse
* ListMessagesResponse `object`
  * messages `array`: List of messages. Note that each message resource contains only an `id` and a `threadId`. Additional message details can be fetched using the messages.get method.
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
  * threads `array`: List of threads. Note that each thread resource does not contain a list of `messages`. The list of `messages` for a given thread can be fetched using the threads.get method.
    * items [Thread](#thread)

### Message
* Message `object`: An email message.
  * historyId `string`: The ID of the last history record that modified this message.
  * id `string`: The immutable ID of the message.
  * internalDate `string`: The internal message creation timestamp (epoch ms), which determines ordering in the inbox. For normal SMTP-received email, this represents the time the message was originally accepted by Google, which is more reliable than the `Date` header. However, for API-migrated mail, it can be configured by client to be based on the `Date` header.
  * labelIds `array`: List of IDs of labels applied to this message.
    * items `string`
  * payload [MessagePart](#messagepart)
  * raw `string`: The entire email message in an RFC 2822 formatted and base64url encoded string. Returned in `messages.get` and `drafts.get` responses when the `format=RAW` parameter is supplied.
  * sizeEstimate `integer`: Estimated size in bytes of the message.
  * snippet `string`: A short part of the message text.
  * threadId `string`: The ID of the thread the message belongs to. To add a message or draft to a thread, the following criteria must be met: 1. The requested `threadId` must be specified on the `Message` or `Draft.Message` you supply with your request. 2. The `References` and `In-Reply-To` headers must be set in compliance with the [RFC 2822](https://tools.ietf.org/html/rfc2822) standard. 3. The `Subject` headers must match. 

### MessagePart
* MessagePart `object`: A single MIME message part.
  * body [MessagePartBody](#messagepartbody)
  * filename `string`: The filename of the attachment. Only present if this message part represents an attachment.
  * headers `array`: List of headers on this message part. For the top-level message part, representing the entire message payload, it will contain the standard RFC 2822 email headers such as `To`, `From`, and `Subject`.
    * items [MessagePartHeader](#messagepartheader)
  * mimeType `string`: The MIME type of the message part.
  * partId `string`: The immutable ID of the message part.
  * parts `array`: The child MIME message parts of this part. This only applies to container MIME message parts, for example `multipart/*`. For non- container MIME message part types, such as `text/plain`, this field is empty. For more information, see RFC 1521.
    * items [MessagePart](#messagepart)

### MessagePartBody
* MessagePartBody `object`: The body of a single MIME message part.
  * attachmentId `string`: When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get` request. When not present, the entire content of the message part body is contained in the data field.
  * data `string`: The body data of a MIME message part as a base64url encoded string. May be empty for MIME container types that have no message body or when the body data is sent as a separate attachment. An attachment ID is present if the body data is contained in a separate attachment.
  * size `integer`: Number of bytes for the message part data (encoding notwithstanding).

### MessagePartHeader
* MessagePartHeader `object`
  * name `string`: The name of the header before the `:` separator. For example, `To`.
  * value `string`: The value of the header after the `:` separator. For example, `someuser@example.com`.

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
  * accessWindow `string` (values: accessWindowUnspecified, disabled, fromNowOn, allMail): The range of messages which are accessible via POP.
  * disposition `string` (values: dispositionUnspecified, leaveInInbox, archive, trash, markRead): The action that will be executed on a message after it has been fetched via POP.

### Profile
* Profile `object`: Profile for a Gmail user.
  * emailAddress `string`: The user's email address.
  * historyId `string`: The ID of the mailbox's current history record.
  * messagesTotal `integer`: The total number of messages in the mailbox.
  * threadsTotal `integer`: The total number of threads in the mailbox.

### SendAs
* SendAs `object`: Settings associated with a send-as alias, which can be either the primary login address associated with the account or a custom "from" address. Send-as aliases correspond to the "Send Mail As" feature in the web interface.
  * displayName `string`: A name that appears in the "From:" header for mail sent using this alias. For custom "from" addresses, when this is empty, Gmail will populate the "From:" header with the name that is used for the primary address associated with the account. If the admin has disabled the ability for users to update their name format, requests to update this field for the primary login will silently fail.
  * isDefault `boolean`: Whether this address is selected as the default "From:" address in situations such as composing a new message or sending a vacation auto-reply. Every Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is `true`. Changing this from `false` to `true` for an address will result in this field becoming `false` for the other previous default address.
  * isPrimary `boolean`: Whether this address is the primary address used to login to the account. Every Gmail account has exactly one primary address, and it cannot be deleted from the collection of send-as aliases. This field is read-only.
  * replyToAddress `string`: An optional email address that is included in a "Reply-To:" header for mail sent using this alias. If this is empty, Gmail will not generate a "Reply-To:" header.
  * sendAsEmail `string`: The email address that appears in the "From:" header for mail sent using this alias. This is read-only for all operations except create.
  * signature `string`: An optional HTML signature that is included in messages composed with this alias in the Gmail web UI.
  * smtpMsa [SmtpMsa](#smtpmsa)
  * treatAsAlias `boolean`: Whether Gmail should treat this address as an alias for the user's primary email address. This setting only applies to custom "from" aliases.
  * verificationStatus `string` (values: verificationStatusUnspecified, accepted, pending): Indicates whether this address has been verified for use as a send-as alias. Read-only. This setting only applies to custom "from" aliases.

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
  * securityMode `string` (values: securityModeUnspecified, none, ssl, starttls): The protocol that will be used to secure communication with the SMTP service. Required.
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
  * endTime `string`: An optional end time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives before the end time. If both `startTime` and `endTime` are specified, `startTime` must precede `endTime`.
  * responseBodyHtml `string`: Response body in HTML format. Gmail will sanitize the HTML before storing it. If both `response_body_plain_text` and `response_body_html` are specified, `response_body_html` will be used.
  * responseBodyPlainText `string`: Response body in plain text format. If both `response_body_plain_text` and `response_body_html` are specified, `response_body_html` will be used.
  * responseSubject `string`: Optional text to prepend to the subject line in vacation responses. In order to enable auto-replies, either the response subject or the response body must be nonempty.
  * restrictToContacts `boolean`: Flag that determines whether responses are sent to recipients who are not in the user's list of contacts.
  * restrictToDomain `boolean`: Flag that determines whether responses are sent to recipients who are outside of the user's domain. This feature is only available for G Suite users.
  * startTime `string`: An optional start time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives after the start time. If both `startTime` and `endTime` are specified, `startTime` must precede `endTime`.

### WatchRequest
* WatchRequest `object`: Set up or update a new push notification watch on this user's mailbox.
  * labelFilterAction `string` (values: include, exclude): Filtering behavior of labelIds list specified.
  * labelIds `array`: List of label_ids to restrict notifications about. By default, if unspecified, all changes are pushed out. If specified then dictates which labels are required for a push notification to be generated.
    * items `string`
  * topicName `string`: A fully qualified Google Cloud Pub/Sub API topic name to publish the events to. This topic name **must** already exist in Cloud Pub/Sub and you **must** have already granted gmail "publish" permission on it. For example, "projects/my-project-identifier/topics/my-topic-name" (using the Cloud Pub/Sub "v1" topic naming format). Note that the "my-project-identifier" portion must exactly match your Google developer project id (the one executing this watch request).

### WatchResponse
* WatchResponse `object`: Push notification watch response.
  * expiration `string`: When Gmail will stop sending notifications for mailbox updates (epoch millis). Call `watch` again before this time to renew the watch.
  * historyId `string`: The ID of the mailbox's current history record.


