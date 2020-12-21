# @datafire/google_chat

Client library for Hangouts Chat API

## Installation and Usage
```bash
npm install --save @datafire/google_chat
```
```js
let google_chat = require('@datafire/google_chat').create();

.then(data => {
  console.log(data);
});
```

## Description

Enables bots to fetch information and perform actions in Hangouts Chat.

## Actions

### chat.media.download
Downloads media. Download is supported on the URI `/v1/media/{+name}?alt=media`.


```js
google_chat.chat.media.download({
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceName **required** `string`: Name of the media that is being downloaded. See ReadRequest.resource_name.
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
* output [Media](#media)

### chat.spaces.list
Lists spaces the caller is a member of.


```js
google_chat.chat.spaces.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Requested page size. The value is capped at 1000. Server may return fewer results than requested. If unspecified, server will default to 100.
  * pageToken `string`: A token identifying a page of results the server should return.
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
* output [ListSpacesResponse](#listspacesresponse)

### chat.spaces.messages.delete
Deletes a message.


```js
google_chat.chat.spaces.messages.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Resource name of the message to be deleted, in the form "spaces/*/messages/*" Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
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
* output [Empty](#empty)

### chat.spaces.messages.attachments.get
Gets the metadata of a message attachment. The attachment data is fetched using the media API.


```js
google_chat.chat.spaces.messages.attachments.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name of the attachment, in the form "spaces/*/messages/*/attachments/*".
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
* output [Attachment](#attachment)

### chat.spaces.messages.update
Updates a message.


```js
google_chat.chat.spaces.messages.update({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name, in the form "spaces/*/messages/*". Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
  * updateMask `string`: Required. The field paths to be updated, comma separated if there are multiple. Currently supported field paths: * text * cards
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

### chat.spaces.members.list
Lists human memberships in a space.


```js
google_chat.chat.spaces.members.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the space for which membership list is to be fetched, in the form "spaces/*". Example: spaces/AAAAMpdlehY
  * pageSize `integer`: Requested page size. The value is capped at 1000. Server may return fewer results than requested. If unspecified, server will default to 100.
  * pageToken `string`: A token identifying a page of results the server should return.
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
* output [ListMembershipsResponse](#listmembershipsresponse)

### chat.spaces.messages.create
Creates a message.


```js
google_chat.chat.spaces.messages.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Space resource name, in the form "spaces/*". Example: spaces/AAAAMpdlehY
  * threadKey `string`: Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Hangouts Chat thread ID of a thread (created earlier by them) to post further updates to it. Has no effect if thread field, corresponding to an existing thread, is set in message.
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



## Definitions

### ActionParameter
* ActionParameter `object`: List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze 1 day, snooze next week. You might use action method = snooze(), passing the snooze type and snooze time in the list of string parameters.
  * key `string`: The name of the parameter for the action script.
  * value `string`: The value of the parameter.

### ActionResponse
* ActionResponse `object`: Parameters that a bot can use to configure how it's response is posted.
  * type `string` (values: TYPE_UNSPECIFIED, NEW_MESSAGE, UPDATE_MESSAGE, REQUEST_CONFIG): The type of bot response.
  * url `string`: URL for users to auth or config. (Only for REQUEST_CONFIG response types.)

### Annotation
* Annotation `object`: Annotations associated with the plain-text body of the message. Example plain-text message body: ``` Hello @FooBot how are you!" ``` The corresponding annotations metadata: ``` "annotations":[{ "type":"USER_MENTION", "startIndex":6, "length":7, "userMention": { "user": { "name":"users/107946847022116401880", "displayName":"FooBot", "avatarUrl":"https://goo.gl/aeDtrS", "type":"BOT" }, "type":"MENTION" } }] ```
  * length `integer`: Length of the substring in the plain-text message body this annotation corresponds to.
  * slashCommand [SlashCommandMetadata](#slashcommandmetadata)
  * startIndex `integer`: Start index (0-based, inclusive) in the plain-text message body this annotation corresponds to.
  * type `string` (values: ANNOTATION_TYPE_UNSPECIFIED, USER_MENTION, SLASH_COMMAND): The type of this annotation.
  * userMention [UserMentionMetadata](#usermentionmetadata)

### Attachment
* Attachment `object`: An attachment in Hangouts Chat.
  * attachmentDataRef [AttachmentDataRef](#attachmentdataref)
  * contentName `string`: The original file name for the content, not the full path.
  * contentType `string`: The content type (MIME type) of the file.
  * downloadUri `string`: Output only. The download URL which should be used to allow a human user to download the attachment. Bots should not use this URL to download attachment content.
  * driveDataRef [DriveDataRef](#drivedataref)
  * name `string`: Resource name of the attachment, in the form "spaces/*/messages/*/attachments/*".
  * source `string` (values: SOURCE_UNSPECIFIED, DRIVE_FILE, UPLOADED_CONTENT): The source of the attachment.
  * thumbnailUri `string`: Output only. The thumbnail URL which should be used to preview the attachment to a human user. Bots should not use this URL to download attachment content.

### AttachmentDataRef
* AttachmentDataRef `object`: A reference to the data of an attachment.
  * resourceName `string`: The resource name of the attachment data. This is used with the media API to download the attachment data.

### Button
* Button `object`: A button. Can be a text button or an image button.
  * imageButton [ImageButton](#imagebutton)
  * textButton [TextButton](#textbutton)

### Card
* Card `object`: A card is a UI element that can contain UI widgets such as texts, images.
  * cardActions `array`: The actions of this card.
    * items [CardAction](#cardaction)
  * header [CardHeader](#cardheader)
  * name `string`: Name of the card.
  * sections `array`: Sections are separated by a line divider.
    * items [Section](#section)

### CardAction
* CardAction `object`: A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser.
  * actionLabel `string`: The label used to be displayed in the action menu item.
  * onClick [OnClick](#onclick)

### CardHeader
* CardHeader `object`
  * imageStyle `string` (values: IMAGE_STYLE_UNSPECIFIED, IMAGE, AVATAR): The image's type (e.g. square border or circular border).
  * imageUrl `string`: The URL of the image in the card header.
  * subtitle `string`: The subtitle of the card header.
  * title `string`: The title must be specified. The header has a fixed height: if both a title and subtitle is specified, each will take up 1 line. If only the title is specified, it will take up both lines.

### DeprecatedEvent
* DeprecatedEvent `object`: Google Chat events.
  * action [FormAction](#formaction)
  * configCompleteRedirectUrl `string`: The URL the bot should redirect the user to after they have completed an authorization or configuration flow outside of Google Chat. See the [Authorizing access to 3p services guide](/hangouts/chat/how-tos/auth-3p) for more information.
  * eventTime `string`: The timestamp indicating when the event was dispatched.
  * message [Message](#message)
  * space [Space](#space)
  * threadKey `string`: The bot-defined key for the thread related to the event. See the thread_key field of the `spaces.message.create` request for more information.
  * token `string`: A secret value that bots can use to verify if a request is from Google. The token is randomly generated by Google, remains static, and can be obtained from the Google Chat API configuration page in the Cloud Console. Developers can revoke/regenerate it if needed from the same page.
  * type `string` (values: UNSPECIFIED, MESSAGE, ADDED_TO_SPACE, REMOVED_FROM_SPACE, CARD_CLICKED): The type of the event.
  * user [User](#user)

### DriveDataRef
* DriveDataRef `object`: A reference to the data of a drive attachment.
  * driveFileId `string`: The id for the drive file, for use with the Drive API.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### FormAction
* FormAction `object`: A form action describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.
  * parameters `array`: List of action parameters.
    * items [ActionParameter](#actionparameter)
  * actionMethodName `string`: The method name is used to identify which part of the form triggered the form submission. This information is echoed back to the bot as part of the card click event. The same method name can be used for several elements that trigger a common behavior if desired.

### Image
* Image `object`: An image that is specified by a URL and can have an onclick action.
  * aspectRatio `number`: The aspect ratio of this image (width/height). This field allows clients to reserve the right height for the image while waiting for it to load. It's not meant to override the native aspect ratio of the image. If unset, the server fills it by prefetching the image.
  * imageUrl `string`: The URL of the image.
  * onClick [OnClick](#onclick)

### ImageButton
* ImageButton `object`: An image button with an onclick action.
  * icon `string` (values: ICON_UNSPECIFIED, AIRPLANE, BOOKMARK, BUS, CAR, CLOCK, CONFIRMATION_NUMBER_ICON, DOLLAR, DESCRIPTION, EMAIL, EVENT_PERFORMER, EVENT_SEAT, FLIGHT_ARRIVAL, FLIGHT_DEPARTURE, HOTEL, HOTEL_ROOM_TYPE, INVITE, MAP_PIN, MEMBERSHIP, MULTIPLE_PEOPLE, OFFER, PERSON, PHONE, RESTAURANT_ICON, SHOPPING_CART, STAR, STORE, TICKET, TRAIN, VIDEO_CAMERA, VIDEO_PLAY): The icon specified by an enum that indices to an icon provided by Chat API.
  * iconUrl `string`: The icon specified by a URL.
  * name `string`: The name of this image_button which will be used for accessibility. Default value will be provided if developers don't specify.
  * onClick [OnClick](#onclick)

### KeyValue
* KeyValue `object`: A UI element contains a key (label) and a value (content). And this element may also contain some actions such as onclick button.
  * bottomLabel `string`: The text of the bottom label. Formatted text supported.
  * button [Button](#button)
  * content `string`: The text of the content. Formatted text supported and always required.
  * contentMultiline `boolean`: If the content should be multiline.
  * icon `string` (values: ICON_UNSPECIFIED, AIRPLANE, BOOKMARK, BUS, CAR, CLOCK, CONFIRMATION_NUMBER_ICON, DOLLAR, DESCRIPTION, EMAIL, EVENT_PERFORMER, EVENT_SEAT, FLIGHT_ARRIVAL, FLIGHT_DEPARTURE, HOTEL, HOTEL_ROOM_TYPE, INVITE, MAP_PIN, MEMBERSHIP, MULTIPLE_PEOPLE, OFFER, PERSON, PHONE, RESTAURANT_ICON, SHOPPING_CART, STAR, STORE, TICKET, TRAIN, VIDEO_CAMERA, VIDEO_PLAY): An enum value that will be replaced by the Chat API with the corresponding icon image.
  * iconUrl `string`: The icon specified by a URL.
  * onClick [OnClick](#onclick)
  * topLabel `string`: The text of the top label. Formatted text supported.

### ListMembershipsResponse
* ListMembershipsResponse `object`
  * memberships `array`: List of memberships in the requested (or first) page.
    * items [Membership](#membership)
  * nextPageToken `string`: Continuation token to retrieve the next page of results. It will be empty for the last page of results.

### ListSpacesResponse
* ListSpacesResponse `object`
  * nextPageToken `string`: Continuation token to retrieve the next page of results. It will be empty for the last page of results. Tokens expire in an hour. An error is thrown if an expired token is passed.
  * spaces `array`: List of spaces in the requested (or first) page.
    * items [Space](#space)

### Media
* Media `object`: Media resource.
  * resourceName `string`: Name of the media resource.

### Membership
* Membership `object`: Represents a membership relation in Hangouts Chat.
  * createTime `string`: The creation time of the membership a.k.a the time at which the member joined the space, if applicable.
  * member [User](#user)
  * name `string`
  * state `string` (values: MEMBERSHIP_STATE_UNSPECIFIED, JOINED, INVITED, NOT_A_MEMBER): State of the membership.

### Message
* Message `object`: A message in Hangouts Chat.
  * actionResponse [ActionResponse](#actionresponse)
  * annotations `array`: Output only. Annotations associated with the text in this message.
    * items [Annotation](#annotation)
  * argumentText `string`: Plain-text body of the message with all bot mentions stripped out.
  * attachment `array`: User uploaded attachment.
    * items [Attachment](#attachment)
  * cards `array`: Rich, formatted and interactive cards that can be used to display UI elements such as: formatted texts, buttons, clickable images. Cards are normally displayed below the plain-text body of the message.
    * items [Card](#card)
  * createTime `string`: Output only. The time at which the message was created in Hangouts Chat server.
  * fallbackText `string`: A plain-text description of the message's cards, used when the actual cards cannot be displayed (e.g. mobile notifications).
  * name `string`: Resource name, in the form "spaces/*/messages/*". Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
  * previewText `string`: Text for generating preview chips. This text will not be displayed to the user, but any links to images, web pages, videos, etc. included here will generate preview chips.
  * sender [User](#user)
  * slashCommand [SlashCommand](#slashcommand)
  * space [Space](#space)
  * text `string`: Plain-text body of the message.
  * thread [Thread](#thread)

### OnClick
* OnClick `object`: An onclick action (e.g. open a link).
  * action [FormAction](#formaction)
  * openLink [OpenLink](#openlink)

### OpenLink
* OpenLink `object`: A link that opens a new window.
  * url `string`: The URL to open.

### Section
* Section `object`: A section contains a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there is currently no need for layout properties (e.g. float).
  * header `string`: The header of the section, text formatted supported.
  * widgets `array`: A section must contain at least 1 widget.
    * items [WidgetMarkup](#widgetmarkup)

### SlashCommand
* SlashCommand `object`: A Slash Command in Hangouts Chat.
  * commandId `string`: The id of the slash command invoked.

### SlashCommandMetadata
* SlashCommandMetadata `object`: Annotation metadata for slash commands (/).
  * bot [User](#user)
  * commandId `string`: The command id of the invoked slash command.
  * commandName `string`: The name of the invoked slash command.
  * triggersDialog `boolean`: Indicating whether the slash command is for a dialog.
  * type `string` (values: TYPE_UNSPECIFIED, ADD, INVOKE): The type of slash command.

### Space
* Space `object`: A room or DM in Hangouts Chat.
  * displayName `string`: Output only. The display name (only if the space is a room). Please note that this field might not be populated in direct messages between humans.
  * name `string`: Resource name of the space, in the form "spaces/*". Example: spaces/AAAAMpdlehYs
  * singleUserBotDm `boolean`: Whether the space is a DM between a bot and a single human.
  * threaded `boolean`: Whether the messages are threaded in this space.
  * type `string` (values: TYPE_UNSPECIFIED, ROOM, DM): Output only. The type of a space. This is deprecated. Use `single_user_bot_dm` instead.

### TextButton
* TextButton `object`: A button with text and onclick action.
  * onClick [OnClick](#onclick)
  * text `string`: The text of the button.

### TextParagraph
* TextParagraph `object`: A paragraph of text. Formatted text supported.
  * text `string`

### Thread
* Thread `object`: A thread in Hangouts Chat.
  * name `string`: Resource name, in the form "spaces/*/threads/*". Example: spaces/AAAAMpdlehY/threads/UMxbHmzDlr4

### User
* User `object`: A user in Hangouts Chat.
  * displayName `string`: The user's display name.
  * domainId `string`: Obfuscated domain information.
  * isAnonymous `boolean`: True when the user is deleted or the user's proifle is not visible.
  * name `string`: Resource name, in the format "users/*".
  * type `string` (values: TYPE_UNSPECIFIED, HUMAN, BOT): User type.

### UserMentionMetadata
* UserMentionMetadata `object`: Annotation metadata for user mentions (@).
  * type `string` (values: TYPE_UNSPECIFIED, ADD, MENTION): The type of user mention.
  * user [User](#user)

### WidgetMarkup
* WidgetMarkup `object`: A widget is a UI element that presents texts, images, etc.
  * buttons `array`: A list of buttons. Buttons is also oneof data and only one of these fields should be set.
    * items [Button](#button)
  * image [Image](#image)
  * keyValue [KeyValue](#keyvalue)
  * textParagraph [TextParagraph](#textparagraph)


