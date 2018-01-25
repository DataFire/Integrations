# @datafire/google_mirror

Client library for Google Mirror

## Installation and Usage
```bash
npm install --save @datafire/google_mirror
```
```js
let google_mirror = require('@datafire/google_mirror').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_mirror.timeline.insert({}).then(data => {
  console.log(data);
});
```

## Description

Interacts with Glass users via the timeline.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_mirror.oauthCallback({
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
google_mirror.oauthRefresh(null, context)
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

### accounts.insert
Inserts a new account for a user


```js
google_mirror.accounts.insert({
  "userToken": "",
  "accountType": "",
  "accountName": ""
}, context)
```

#### Input
* input `object`
  * userToken **required** `string`: The ID for the user.
  * accountType **required** `string`: Account type to be passed to Android Account Manager.
  * accountName **required** `string`: The name of the account to be passed to the Android Account Manager.
  * body [Account](#account)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Account](#account)

### contacts.list
Retrieves a list of contacts for the authenticated user.


```js
google_mirror.contacts.list({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ContactsListResponse](#contactslistresponse)

### contacts.insert
Inserts a new contact.


```js
google_mirror.contacts.insert({}, context)
```

#### Input
* input `object`
  * body [Contact](#contact)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Contact](#contact)

### contacts.delete
Deletes a contact.


```js
google_mirror.contacts.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the contact.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### contacts.get
Gets a single contact by ID.


```js
google_mirror.contacts.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the contact.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Contact](#contact)

### contacts.patch
Updates a contact in place. This method supports patch semantics.


```js
google_mirror.contacts.patch({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the contact.
  * body [Contact](#contact)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Contact](#contact)

### contacts.update
Updates a contact in place.


```js
google_mirror.contacts.update({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the contact.
  * body [Contact](#contact)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Contact](#contact)

### locations.list
Retrieves a list of locations for the user.


```js
google_mirror.locations.list({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [LocationsListResponse](#locationslistresponse)

### locations.get
Gets a single location by ID.


```js
google_mirror.locations.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the location or latest for the last known location.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Location](#location)

### settings.get
Gets a single setting by ID.


```js
google_mirror.settings.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the setting. The following IDs are valid: 
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Setting](#setting)

### subscriptions.list
Retrieves a list of subscriptions for the authenticated user and service.


```js
google_mirror.subscriptions.list({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SubscriptionsListResponse](#subscriptionslistresponse)

### subscriptions.insert
Creates a new subscription.


```js
google_mirror.subscriptions.insert({}, context)
```

#### Input
* input `object`
  * body [Subscription](#subscription)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Subscription](#subscription)

### subscriptions.delete
Deletes a subscription.


```js
google_mirror.subscriptions.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the subscription.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### subscriptions.update
Updates an existing subscription in place.


```js
google_mirror.subscriptions.update({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the subscription.
  * body [Subscription](#subscription)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Subscription](#subscription)

### timeline.list
Retrieves a list of timeline items for the authenticated user.


```js
google_mirror.timeline.list({}, context)
```

#### Input
* input `object`
  * bundleId `string`: If provided, only items with the given bundleId will be returned.
  * includeDeleted `boolean`: If true, tombstone records for deleted items will be returned.
  * maxResults `integer`: The maximum number of items to include in the response, used for paging.
  * orderBy `string` (values: displayTime, writeTime): Controls the order in which timeline items are returned.
  * pageToken `string`: Token for the page of results to return.
  * pinnedOnly `boolean`: If true, only pinned items will be returned.
  * sourceItemId `string`: If provided, only items with the given sourceItemId will be returned.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TimelineListResponse](#timelinelistresponse)

### timeline.insert
Inserts a new item into the timeline.


```js
google_mirror.timeline.insert({}, context)
```

#### Input
* input `object`
  * body [TimelineItem](#timelineitem)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TimelineItem](#timelineitem)

### timeline.delete
Deletes a timeline item.


```js
google_mirror.timeline.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the timeline item.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### timeline.get
Gets a single timeline item by ID.


```js
google_mirror.timeline.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the timeline item.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TimelineItem](#timelineitem)

### timeline.patch
Updates a timeline item in place. This method supports patch semantics.


```js
google_mirror.timeline.patch({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the timeline item.
  * body [TimelineItem](#timelineitem)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TimelineItem](#timelineitem)

### timeline.update
Updates a timeline item in place.


```js
google_mirror.timeline.update({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the timeline item.
  * body [TimelineItem](#timelineitem)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TimelineItem](#timelineitem)

### timeline.attachments.list
Returns a list of attachments for a timeline item.


```js
google_mirror.timeline.attachments.list({
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: The ID of the timeline item whose attachments should be listed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AttachmentsListResponse](#attachmentslistresponse)

### timeline.attachments.insert
Adds a new attachment to a timeline item.


```js
google_mirror.timeline.attachments.insert({
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: The ID of the timeline item the attachment belongs to.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Attachment](#attachment)

### timeline.attachments.delete
Deletes an attachment from a timeline item.


```js
google_mirror.timeline.attachments.delete({
  "itemId": "",
  "attachmentId": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: The ID of the timeline item the attachment belongs to.
  * attachmentId **required** `string`: The ID of the attachment.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### timeline.attachments.get
Retrieves an attachment on a timeline item by item ID and attachment ID.


```js
google_mirror.timeline.attachments.get({
  "itemId": "",
  "attachmentId": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: The ID of the timeline item the attachment belongs to.
  * attachmentId **required** `string`: The ID of the attachment.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Attachment](#attachment)



## Definitions

### Account
* Account `object`: Represents an account passed into the Account Manager on Glass.
  * authTokens `array`
    * items [AuthToken](#authtoken)
  * features `array`
    * items `string`
  * password `string`
  * userData `array`
    * items [UserData](#userdata)

### Attachment
* Attachment `object`: Represents media content, such as a photo, that can be attached to a timeline item.
  * contentType `string`: The MIME type of the attachment.
  * contentUrl `string`: The URL for the content.
  * id `string`: The ID of the attachment.
  * isProcessingContent `boolean`: Indicates that the contentUrl is not available because the attachment content is still being processed. If the caller wishes to retrieve the content, it should try again later.

### AttachmentsListResponse
* AttachmentsListResponse `object`: A list of Attachments. This is the response from the server to GET requests on the attachments collection.
  * items `array`: The list of attachments.
    * items [Attachment](#attachment)
  * kind `string`: The type of resource. This is always mirror#attachmentsList.

### AuthToken
* AuthToken `object`
  * authToken `string`
  * type `string`

### Command
* Command `object`: A single menu command that is part of a Contact.
  * type `string`: The type of operation this command corresponds to. Allowed values are:  

### Contact
* Contact `object`: A person or group that can be used as a creator or a contact.
  * acceptCommands `array`: A list of voice menu commands that a contact can handle. Glass shows up to three contacts for each voice menu command. If there are more than that, the three contacts with the highest priority are shown for that particular command.
    * items [Command](#command)
  * acceptTypes `array`: A list of MIME types that a contact supports. The contact will be shown to the user if any of its acceptTypes matches any of the types of the attachments on the item. If no acceptTypes are given, the contact will be shown for all items.
    * items `string`
  * displayName `string`: The name to display for this contact.
  * id `string`: An ID for this contact. This is generated by the application and is treated as an opaque token.
  * imageUrls `array`: Set of image URLs to display for a contact. Most contacts will have a single image, but a "group" contact may include up to 8 image URLs and they will be resized and cropped into a mosaic on the client.
    * items `string`
  * kind `string`: The type of resource. This is always mirror#contact.
  * phoneNumber `string`: Primary phone number for the contact. This can be a fully-qualified number, with country calling code and area code, or a local number.
  * priority `integer`: Priority for the contact to determine ordering in a list of contacts. Contacts with higher priorities will be shown before ones with lower priorities.
  * sharingFeatures `array`: A list of sharing features that a contact can handle. Allowed values are:  
    * items `string`
  * source `string`: The ID of the application that created this contact. This is populated by the API
  * speakableName `string`: Name of this contact as it should be pronounced. If this contact's name must be spoken as part of a voice disambiguation menu, this name is used as the expected pronunciation. This is useful for contact names with unpronounceable characters or whose display spelling is otherwise not phonetic.
  * type `string`: The type for this contact. This is used for sorting in UIs. Allowed values are:  

### ContactsListResponse
* ContactsListResponse `object`: A list of Contacts representing contacts. This is the response from the server to GET requests on the contacts collection.
  * items `array`: Contact list.
    * items [Contact](#contact)
  * kind `string`: The type of resource. This is always mirror#contacts.

### Location
* Location `object`: A geographic location that can be associated with a timeline item.
  * accuracy `number`: The accuracy of the location fix in meters.
  * address `string`: The full address of the location.
  * displayName `string`: The name to be displayed. This may be a business name or a user-defined place, such as "Home".
  * id `string`: The ID of the location.
  * kind `string`: The type of resource. This is always mirror#location.
  * latitude `number`: The latitude, in degrees.
  * longitude `number`: The longitude, in degrees.
  * timestamp `string`: The time at which this location was captured, formatted according to RFC 3339.

### LocationsListResponse
* LocationsListResponse `object`: A list of Locations. This is the response from the server to GET requests on the locations collection.
  * items `array`: The list of locations.
    * items [Location](#location)
  * kind `string`: The type of resource. This is always mirror#locationsList.

### MenuItem
* MenuItem `object`: A custom menu item that can be presented to the user by a timeline item.
  * action `string`: Controls the behavior when the user picks the menu option. Allowed values are:  
  * contextual_command `string`: The ContextualMenus.Command associated with this MenuItem (e.g. READ_ALOUD). The voice label for this command will be displayed in the voice menu and the touch label will be displayed in the touch menu. Note that the default menu value's display name will be overriden if you specify this property. Values that do not correspond to a ContextualMenus.Command name will be ignored.
  * id `string`: The ID for this menu item. This is generated by the application and is treated as an opaque token.
  * payload `string`: A generic payload whose meaning changes depending on this MenuItem's action.  
  * removeWhenSelected `boolean`: If set to true on a CUSTOM menu item, that item will be removed from the menu after it is selected.
  * values `array`: For CUSTOM items, a list of values controlling the appearance of the menu item in each of its states. A value for the DEFAULT state must be provided. If the PENDING or CONFIRMED states are missing, they will not be shown.
    * items [MenuValue](#menuvalue)

### MenuValue
* MenuValue `object`: A single value that is part of a MenuItem.
  * displayName `string`: The name to display for the menu item. If you specify this property for a built-in menu item, the default contextual voice command for that menu item is not shown.
  * iconUrl `string`: URL of an icon to display with the menu item.
  * state `string`: The state that this value applies to. Allowed values are:  

### Notification
* Notification `object`: A notification delivered by the API.
  * collection `string`: The collection that generated the notification.
  * itemId `string`: The ID of the item that generated the notification.
  * operation `string`: The type of operation that generated the notification.
  * userActions `array`: A list of actions taken by the user that triggered the notification.
    * items [UserAction](#useraction)
  * userToken `string`: The user token provided by the service when it subscribed for notifications.
  * verifyToken `string`: The secret verify token provided by the service when it subscribed for notifications.

### NotificationConfig
* NotificationConfig `object`: Controls how notifications for a timeline item are presented to the user.
  * deliveryTime `string`: The time at which the notification should be delivered.
  * level `string`: Describes how important the notification is. Allowed values are:  

### Setting
* Setting `object`: A setting for Glass.
  * id `string`: The setting's ID. The following IDs are valid:  
  * kind `string`: The type of resource. This is always mirror#setting.
  * value `string`: The setting value, as a string.

### Subscription
* Subscription `object`: A subscription to events on a collection.
  * callbackUrl `string`: The URL where notifications should be delivered (must start with https://).
  * collection `string`: The collection to subscribe to. Allowed values are:  
  * id `string`: The ID of the subscription.
  * kind `string`: The type of resource. This is always mirror#subscription.
  * notification [Notification](#notification)
  * operation `array`: A list of operations that should be subscribed to. An empty list indicates that all operations on the collection should be subscribed to. Allowed values are:  
    * items `string`
  * updated `string`: The time at which this subscription was last modified, formatted according to RFC 3339.
  * userToken `string`: An opaque token sent to the subscriber in notifications so that it can determine the ID of the user.
  * verifyToken `string`: A secret token sent to the subscriber in notifications so that it can verify that the notification was generated by Google.

### SubscriptionsListResponse
* SubscriptionsListResponse `object`: A list of Subscriptions. This is the response from the server to GET requests on the subscription collection.
  * items `array`: The list of subscriptions.
    * items [Subscription](#subscription)
  * kind `string`: The type of resource. This is always mirror#subscriptionsList.

### TimelineItem
* TimelineItem `object`: Each item in the user's timeline is represented as a TimelineItem JSON structure, described below.
  * attachments `array`: A list of media attachments associated with this item. As a convenience, you can refer to attachments in your HTML payloads with the attachment or cid scheme. For example:  
    * items [Attachment](#attachment)
  * bundleId `string`: The bundle ID for this item. Services can specify a bundleId to group many items together. They appear under a single top-level item on the device.
  * canonicalUrl `string`: A canonical URL pointing to the canonical/high quality version of the data represented by the timeline item.
  * created `string`: The time at which this item was created, formatted according to RFC 3339.
  * creator [Contact](#contact)
  * displayTime `string`: The time that should be displayed when this item is viewed in the timeline, formatted according to RFC 3339. This user's timeline is sorted chronologically on display time, so this will also determine where the item is displayed in the timeline. If not set by the service, the display time defaults to the updated time.
  * etag `string`: ETag for this item.
  * html `string`: HTML content for this item. If both text and html are provided for an item, the html will be rendered in the timeline.
  * id `string`: The ID of the timeline item. This is unique within a user's timeline.
  * inReplyTo `string`: If this item was generated as a reply to another item, this field will be set to the ID of the item being replied to. This can be used to attach a reply to the appropriate conversation or post.
  * isBundleCover `boolean`: Whether this item is a bundle cover.
  * isDeleted `boolean`: When true, indicates this item is deleted, and only the ID property is set.
  * isPinned `boolean`: When true, indicates this item is pinned, which means it's grouped alongside "active" items like navigation and hangouts, on the opposite side of the home screen from historical (non-pinned) timeline items. You can allow the user to toggle the value of this property with the TOGGLE_PINNED built-in menu item.
  * kind `string`: The type of resource. This is always mirror#timelineItem.
  * location [Location](#location)
  * menuItems `array`: A list of menu items that will be presented to the user when this item is selected in the timeline.
    * items [MenuItem](#menuitem)
  * notification [NotificationConfig](#notificationconfig)
  * pinScore `integer`: For pinned items, this determines the order in which the item is displayed in the timeline, with a higher score appearing closer to the clock. Note: setting this field is currently not supported.
  * recipients `array`: A list of users or groups that this item has been shared with.
    * items [Contact](#contact)
  * selfLink `string`: A URL that can be used to retrieve this item.
  * sourceItemId `string`: Opaque string you can use to map a timeline item to data in your own service.
  * speakableText `string`: The speakable version of the content of this item. Along with the READ_ALOUD menu item, use this field to provide text that would be clearer when read aloud, or to provide extended information to what is displayed visually on Glass.
  * speakableType `string`: A speakable description of the type of this item. This will be announced to the user prior to reading the content of the item in cases where the additional context is useful, for example when the user requests that the item be read aloud following a notification.
  * text `string`: Text content of this item.
  * title `string`: The title of this item.
  * updated `string`: The time at which this item was last modified, formatted according to RFC 3339.

### TimelineListResponse
* TimelineListResponse `object`: A list of timeline items. This is the response from the server to GET requests on the timeline collection.
  * items `array`: Items in the timeline.
    * items [TimelineItem](#timelineitem)
  * kind `string`: The type of resource. This is always mirror#timeline.
  * nextPageToken `string`: The next page token. Provide this as the pageToken parameter in the request to retrieve the next page of results.

### UserAction
* UserAction `object`: Represents an action taken by the user that triggered a notification.
  * payload `string`: An optional payload for the action.
  * type `string`: The type of action. The value of this can be:  

### UserData
* UserData `object`
  * key `string`
  * value `string`


