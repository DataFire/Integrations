# @datafire/google_chat

Client library for Hangouts Chat

## Installation and Usage
```bash
npm install --save @datafire/google_chat
```
```js
let google_chat = require('@datafire/google_chat').create();

google_chat.spaces.list({}).then(data => {
  console.log(data);
});
```

## Description

Enables bots to fetch information and perform actions in the new Hangouts Chat.

## Actions

### spaces.list
Lists spaces the caller is a member of.


```js
google_chat.spaces.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Requested page size. The value is capped at 1000.
  * pageToken `string`: A token identifying a page of results the server should return.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListSpacesResponse](#listspacesresponse)

### spaces.messages.delete
Deletes a message.


```js
google_chat.spaces.messages.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Resource name of the message to be deleted, in the form
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

### spaces.messages.get
Returns a message.


```js
google_chat.spaces.messages.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Resource name of the message to be retrieved, in the form
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Message](#message)

### spaces.messages.update
Updates a message.


```js
google_chat.spaces.messages.update({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [Message](#message)
  * name **required** `string`: Resource name, in the form "spaces/*/messages/*".
  * updateMask `string`: Required. The field paths to be updated.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Message](#message)

### spaces.members.list
Lists human memberships in a space.


```js
google_chat.spaces.members.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Requested page size. The value is capped at 1000.
  * pageToken `string`: A token identifying a page of results the server should return.
  * parent **required** `string`: Required. The resource name of the space for which membership list is to be
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListMembershipsResponse](#listmembershipsresponse)

### spaces.messages.create
Creates a message.


```js
google_chat.spaces.messages.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [Message](#message)
  * parent **required** `string`: Required. Space resource name, in the form "spaces/*".
  * threadKey `string`: Opaque thread identifier string that can be specified to group messages
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Message](#message)



## Definitions

### ActionParameter
* ActionParameter `object`: List of string parameters to supply when the action method is invoked.
  * key `string`: The name of the parameter for the action script.
  * value `string`: The value of the parameter.

### ActionResponse
* ActionResponse `object`: Parameters that a bot can use to configure how it's response is posted.
  * type `string` (values: TYPE_UNSPECIFIED, NEW_MESSAGE, UPDATE_MESSAGE, REQUEST_CONFIG): The type of bot response.
  * url `string`: URL for users to auth or config. (Only for REQUEST_CONFIG response types.)

### Annotation
* Annotation `object`: Annotations associated with the plain-text body of the message.
  * length `integer`: Length of the substring in the plain-text message body this annotation
  * startIndex `integer`: Start index (0-based, inclusive) in the plain-text message body this
  * type `string` (values: ANNOTATION_TYPE_UNSPECIFIED, USER_MENTION): The type of this annotation.
  * userMention [UserMentionMetadata](#usermentionmetadata)

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
* CardAction `object`: A card action is
  * actionLabel `string`: The label used to be displayed in the action menu item.
  * onClick [OnClick](#onclick)

### CardHeader
* CardHeader `object`
  * imageStyle `string` (values: IMAGE_STYLE_UNSPECIFIED, IMAGE, AVATAR): The image's type (e.g. square border or circular border).
  * imageUrl `string`: The URL of the image in the card header.
  * subtitle `string`: The subtitle of the card header.
  * title `string`: The title must be specified. The header has a fixed height: if both a

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### FormAction
* FormAction `object`: A form action describes the behavior when the form is submitted.
  * actionMethodName `string`: Apps Script function to invoke when the containing element is
  * parameters `array`: List of action parameters.
    * items [ActionParameter](#actionparameter)

### Image
* Image `object`: An image that is specified by a URL and can have an onclick action.
  * aspectRatio `number`: The aspect ratio of this image (width/height).
  * imageUrl `string`: The URL of the image.
  * onClick [OnClick](#onclick)

### ImageButton
* ImageButton `object`: An image button with an onclick action.
  * icon `string` (values: ICON_UNSPECIFIED, AIRPLANE, BOOKMARK, BUS, CAR, CLOCK, CONFIRMATION_NUMBER_ICON, DOLLAR, DESCRIPTION, EMAIL, EVENT_PERFORMER, EVENT_SEAT, FLIGHT_ARRIVAL, FLIGHT_DEPARTURE, HOTEL, HOTEL_ROOM_TYPE, INVITE, MAP_PIN, MEMBERSHIP, MULTIPLE_PEOPLE, OFFER, PERSON, PHONE, RESTAURANT_ICON, SHOPPING_CART, STAR, STORE, TICKET, TRAIN, VIDEO_CAMERA, VIDEO_PLAY): The icon specified by an enum that indices to an icon provided by Chat
  * iconUrl `string`: The icon specified by a URL.
  * name `string`: The name of this image_button which will be used for accessibility.
  * onClick [OnClick](#onclick)

### KeyValue
* KeyValue `object`: A UI element contains a key (label) and a value (content). And this
  * bottomLabel `string`: The text of the bottom label. Formatted text supported.
  * button [Button](#button)
  * content `string`: The text of the content. Formatted text supported and always required.
  * contentMultiline `boolean`: If the content should be multiline.
  * icon `string` (values: ICON_UNSPECIFIED, AIRPLANE, BOOKMARK, BUS, CAR, CLOCK, CONFIRMATION_NUMBER_ICON, DOLLAR, DESCRIPTION, EMAIL, EVENT_PERFORMER, EVENT_SEAT, FLIGHT_ARRIVAL, FLIGHT_DEPARTURE, HOTEL, HOTEL_ROOM_TYPE, INVITE, MAP_PIN, MEMBERSHIP, MULTIPLE_PEOPLE, OFFER, PERSON, PHONE, RESTAURANT_ICON, SHOPPING_CART, STAR, STORE, TICKET, TRAIN, VIDEO_CAMERA, VIDEO_PLAY): An enum value that will be replaced by the Chat API with the
  * iconUrl `string`: The icon specified by a URL.
  * onClick [OnClick](#onclick)
  * topLabel `string`: The text of the top label. Formatted text supported.

### ListMembershipsResponse
* ListMembershipsResponse `object`
  * memberships `array`: List of memberships in the requested (or first) page.
    * items [Membership](#membership)
  * nextPageToken `string`: Continuation token to retrieve the next page of results. It will be empty

### ListSpacesResponse
* ListSpacesResponse `object`
  * nextPageToken `string`: Continuation token to retrieve the next page of results. It will be empty
  * spaces `array`: List of spaces in the requested (or first) page.
    * items [Space](#space)

### Membership
* Membership `object`: Represents a membership relation in Hangouts Chat.
  * createTime `string`: The creation time of the membership a.k.a the time at which the member
  * member [User](#user)
  * name `string`: Resource name of the membership, in the form "spaces/*/members/*".
  * state `string` (values: MEMBERSHIP_STATE_UNSPECIFIED, JOINED, INVITED, NOT_A_MEMBER): State of the membership.

### Message
* Message `object`: A message in Hangouts Chat.
  * actionResponse [ActionResponse](#actionresponse)
  * annotations `array`: Output only. Annotations associated with the text in this message.
    * items [Annotation](#annotation)
  * argumentText `string`: Plain-text body of the message with all bot mentions stripped out.
  * cards `array`: Rich, formatted and interactive cards that can be used to display UI
    * items [Card](#card)
  * createTime `string`: Output only. The time at which the message was created in Hangouts Chat
  * fallbackText `string`: A plain-text description of the message's cards, used when the actual cards
  * name `string`: Resource name, in the form "spaces/*/messages/*".
  * previewText `string`: Text for generating preview chips. This text will not be displayed to the
  * sender [User](#user)
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
* Section `object`: A section contains a collection of widgets that are rendered
  * header `string`: The header of the section, text formatted supported.
  * widgets `array`: A section must contain at least 1 widget.
    * items [WidgetMarkup](#widgetmarkup)

### Space
* Space `object`: A room or DM in Hangouts Chat.
  * displayName `string`: Output only. The display name (only if the space is a room).
  * name `string`: Resource name of the space, in the form "spaces/*".
  * type `string` (values: TYPE_UNSPECIFIED, ROOM, DM): Output only. The type of a space.

### TextButton
* TextButton `object`: A button with text and onclick action.
  * onClick [OnClick](#onclick)
  * text `string`: The text of the button.

### TextParagraph
* TextParagraph `object`: A paragraph of text. Formatted text supported.
  * text `string`

### Thread
* Thread `object`: A thread in Hangouts Chat.
  * name `string`: Resource name, in the form "spaces/*/threads/*".

### User
* User `object`: A user in Hangouts Chat.
  * displayName `string`: The user's display name.
  * name `string`: Resource name, in the format "users/*".
  * type `string` (values: TYPE_UNSPECIFIED, HUMAN, BOT): User type.

### UserMentionMetadata
* UserMentionMetadata `object`: Annotation metadata for user mentions (@).
  * type `string` (values: TYPE_UNSPECIFIED, ADD, MENTION): The type of user mention.
  * user [User](#user)

### WidgetMarkup
* WidgetMarkup `object`: A widget is a UI element that presents texts, images, etc.
  * buttons `array`: A list of buttons. Buttons is also oneof data and only one of these
    * items [Button](#button)
  * image [Image](#image)
  * keyValue [KeyValue](#keyvalue)
  * textParagraph [TextParagraph](#textparagraph)


