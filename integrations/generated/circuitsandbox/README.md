# @datafire/circuitsandbox

Client library for REST API Version 2

## Installation and Usage
```bash
npm install --save @datafire/circuitsandbox
```
```js
let circuitsandbox = require('@datafire/circuitsandbox').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

circuitsandbox.updateProfile({}).then(data => {
  console.log(data);
})
```

## Description

Circuit REST API to interact with the Circuit system.

[Learn more about the Circuit Development Community](https://www.circuit.com/web/developers/home)

## Actions

### alexaRequest



```js
circuitsandbox.alexaRequest(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getConversations
Gets a list of conversations and communities the authenticated user participates in.


```js
circuitsandbox.getConversations({}, context)
```

#### Input
* input `object`
  * modTime `string`: The modification time of the conversation in UTC format. During the query the conversations before (<i>default</i>) or after this timestamp are returned. In case no timestamp is specified the current server time in UTC is used, i.e. the last 25 modified conversations are returned
  * direction `string` (values: BEFORE, AFTER): The direction of the search based on the modification time. Valid values are either BEFORE (default) or AFTER
  * results `number`: The maximum number of returned results (default 25). The maximum allowed value is 100.

#### Output
* output `array`
  * items [Conversation](#conversation)

### getCommunityConversations
Gets a list of communities. This endpoint can be used to explore the communities the authenticated user could join.


```js
circuitsandbox.getCommunityConversations({}, context)
```

#### Input
* input `object`
  * sort `string` (values: ALPHABETICALLY, RECENT_ACTIVITY, POPULARITY): Defines the type of sorting for the community conversations (default is alphabetical)
  * order `string` (values: ASCENDING, DESCENDING): Defines the ordering of the conversations (default is ascending)
  * includeOwn `boolean`: If set to false only conversations are returned where the user is no member of, otherwise all community conversations are returned
  * startIndex `number`: The index of the conversation that is the first one that has to be returned. E.g. if a request starts with startIndex 40 and results 20 the conversations 40 to 60 are returned
  * results `number`: The maximum number of returned results (default 25). The maximum allowed value is 100.

#### Output
* output `array`
  * items [Conversation](#conversation)

### createCommunityConversation
Creates a community. Communities are open conversations that anyone in a Circuit domain (tenant) can join without having to be added by another user.


```js
circuitsandbox.createCommunityConversation({
  "topic": ""
}, context)
```

#### Input
* input `object`
  * participants `array`: list of participants that will be part of this conversation, specified by the Circuit user ID or the unique email address. At least one participant needs to be added
  * description `string`: An optional description for the community conversation
  * topic **required** `string`: An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used)

#### Output
* output [Conversation](#conversation)

### updateConversationCommunity
Updates the information of the given community.


```js
circuitsandbox.updateConversationCommunity({
  "convId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation which should be updated
  * description `string`: An optional description for the community conversation
  * topic `string`: An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used)

#### Output
* output [Conversation](#conversation)

### joinCommunityConversation
Adds the authenticated user to the given community (i.e., allows the user to join this community). Contrary to the operation of adding a new participant, this operation can only be performed by a user who is not yet a member of the community.


```js
circuitsandbox.joinCommunityConversation({
  "convId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation which the user will join

#### Output
* output [Conversation](#conversation)

### removeParticipantCommunity
Removes one or more participants from the given community. The last participant of a community cannot be removed. This operation can only be performed by a user who is already a member of the community.


```js
circuitsandbox.removeParticipantCommunity({
  "convId": "",
  "participants": []
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation from which the participant have to be removed
  * participants **required** `array`: The IDs or the unique email addresses of the Circuit users that have to be removed

#### Output
* output [Conversation](#conversation)

### addParticipantCommunity
Adds one or more participants to the given community. This operation can only be performed by a user who is already a member of the community.


```js
circuitsandbox.addParticipantCommunity({
  "convId": "",
  "participants": []
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation to which the participant has to be added.
  * participants **required** `array`: The IDs or the unique email addresses of the Circuit users that should to be added.

#### Output
* output [Conversation](#conversation)

### createDirectConversation
Creates a 1-to-1 conversation between the authenticated user and the user with the provided userId. In case there is already an existing 1-to-1 conversation between these users, the endpoint returns the existing conversation.


```js
circuitsandbox.createDirectConversation({
  "participant": ""
}, context)
```

#### Input
* input `object`
  * participant **required** `string`: The participant that will be part of this conversation together with the creator, specified by the Circuit user ID or the unique email address

#### Output
* output [Conversation](#conversation)

### getFavoriteConversations
Gets the conversationIds which are marked as favorites.


```js
circuitsandbox.getFavoriteConversations(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [String](#string)

### createGroupConversation
Creates a group conversation between three or more users. The authenticated user is directly added to this conversation.


```js
circuitsandbox.createGroupConversation({
  "participants": []
}, context)
```

#### Input
* input `object`
  * participants **required** `array`: A list of participants that will be part of this conversation, specified by the Circuit user ID or the unique email address. At least one participant needs to be added
  * topic `string`: An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used)

#### Output
* output [Conversation](#conversation)

### updateConversationGroup
Updates the information of the given group conversation.


```js
circuitsandbox.updateConversationGroup({
  "convId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation which should be updated
  * topic `string`: An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used)

#### Output
* output [Conversation](#conversation)

### removeParticipantGroup
Removes one or more participants from the given group conversation. The last participant of a group conversation cannot be removed. This operation can only be performed on behalf of a user who is already a member of the conversation.


```js
circuitsandbox.removeParticipantGroup({
  "convId": "",
  "participants": []
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation from which the participant have to be removed
  * participants **required** `array`: The IDs or the unique email addresses of the Circuit users that have to be removed

#### Output
* output [Conversation](#conversation)

### addParticipantGroup
Adds one or more participants to the given group conversation. This operation can only be performed by a user who is already a member of the conversation.


```js
circuitsandbox.addParticipantGroup({
  "convId": "",
  "participants": []
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation to which the participant has to be added.
  * participants **required** `array`: The IDs or the unique email addresses of the Circuit users that should to be added.

#### Output
* output [Conversation](#conversation)

### getFlagItemConv
Gets a list of all the messages the authenticated user has flagged. This endpoint should be used carefully in case where the authenticated user has a lot of flagged messages.


```js
circuitsandbox.getFlagItemConv(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ConversationItem](#conversationitem)

### searchConversations
Performs a search for conversation content. A maximum of 100 conversations is returned. If you hit this limit you should refine the search term.


```js
circuitsandbox.searchConversations({
  "term": ""
}, context)
```

#### Input
* input `object`
  * term **required** `string`: The search term
  * includeItemIds `boolean`: not available

#### Output
* output [ConversationSearchResult](#conversationsearchresult)

### getConversationbyId
Gets a conversation based on the given ID.


```js
circuitsandbox.getConversationbyId({
  "convId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation which should be updated

#### Output
* output [Conversation](#conversation)

### getJoinDetails
Gets the conference details of the given conversation. Conference details include the URL, which is used to join the conference through a web or mobile application, as well as the dial-in phone numbers and conference PIN, which are used to join the conference by phone.


```js
circuitsandbox.getJoinDetails({
  "convId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation for which the join details should be returned

#### Output
* output [ConversationDetails](#conversationdetails)

### deleteFavorite
Removes a conversation from favorites. Favorites can be displayed in a separate side tab inside of the Circuit client to have a better overview of important conversations.


```js
circuitsandbox.deleteFavorite({
  "convId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation which will be unmarked as favorite

#### Output
*Output schema unknown*

### addFavorite
Adds a conversation to the favorites. Favorites can be displayed in a separate side tab inside of the Circuit client to have a better overview of important conversations.


```js
circuitsandbox.addFavorite({
  "convId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation which will be marked as favorite

#### Output
*Output schema unknown*

### getConversationItems
Gets a list of conversation items.


```js
circuitsandbox.getConversationItems({
  "convId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation to which the items belong
  * modTime `string`: The modification time of the item in UTC format. During the query the items before (default) or after this timestamps are returned. In case no timestamp is specified the current server time in UTC is used, i.e. the last 25 modified items are returned
  * direction `string` (values: BEFORE, AFTER): The direction of the search based on the modification time. Valid values are either BEFORE (default) or AFTER
  * results `number`: The maximum number of returned results (default 25). The maximum allowed value is 100.

#### Output
* output `array`
  * items [ConversationItem](#conversationitem)

### assignLabel
Adds a label to a conversation, you can search and organize your conversations based on these labels


```js
circuitsandbox.assignLabel({
  "convId": "",
  "label": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation to which the label is added
  * label **required** `string`: The actual label 

#### Output
* output [Label](#label)

### unassignLabel
Removes a label from a conversation, you can search and organize your conversations based on these labels


```js
circuitsandbox.unassignLabel({
  "convId": "",
  "labelId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation from which the label is removed
  * labelId **required** `string`: not available

#### Output
* output [Label](#label)

### addTextItem
Adds a message to the given conversation. This operation can be only performed on behalf of a user who is already a member of the conversation.


```js
circuitsandbox.addTextItem({
  "convId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation to which the new item has to be added
  * content `string`: The actual content of the item, is mandatory unless an attachment is added
  * attachments `array`: A comma separated list of attachment IDs from the file API.
  * subject `string`: The subject (headline) of the new text item

#### Output
* output [ConversationItem](#conversationitem)

### getFlagItem
Gets a list of all the flagged messages in the given conversation.


```js
circuitsandbox.getFlagItem({
  "convId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation to which the item belongs

#### Output
* output `array`
  * items [ConversationItem](#conversationitem)

### deleteTextItem
Marks a message in the given conversation as deleted. Deleted messages are still part of the conversation, but their content is no more visible. This operation can only be performed on behalf of the message's creator.


```js
circuitsandbox.deleteTextItem({
  "convId": "",
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation to which the item belongs
  * itemId **required** `string`: The ID of the item that will be deleted

#### Output
* output [ConversationItem](#conversationitem)

### addTextItemWithParent
Adds a message to the existing item. The added message will be a child item of the message with the given itemId.


```js
circuitsandbox.addTextItemWithParent({
  "convId": "",
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation to which the new item has to be added
  * itemId **required** `string`: The ID of the item to which the new one has to be added as child
  * content `string`: The actual content of the item
  * attachments `array`: not available
  * subject `string`: The subject (headline) of the new text item

#### Output
* output [ConversationItem](#conversationitem)

### updateTextItem
Updates the content or subject of the existing message. Only the creator of the message is allowed to perform this operation.


```js
circuitsandbox.updateTextItem({
  "convId": "",
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation to which the item belongs
  * itemId **required** `string`: The ID of the item to update
  * content `string`: The actual content of the item
  * subject `string`: The subject (headline) of the new text item

#### Output
* output [ConversationItem](#conversationitem)

### unFlagItem
Removes the flag from a given message that is posted to the given conversation.


```js
circuitsandbox.unFlagItem({
  "convId": "",
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation to which the item belongs
  * itemId **required** `string`: The ID of the item that will be flagged

#### Output
*Output schema unknown*

### flagItem
Adds a flag to the given message in the given conversation.


```js
circuitsandbox.flagItem({
  "convId": "",
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation to which the item belongs
  * itemId **required** `string`: The ID of the item that will be flagged
  * itemCreationTime `string`: The time when the item was created
  * parentId `string`: The ID of the item's parent

#### Output
*Output schema unknown*

### unlikeItem
Removes a "like" from the given message in the given conversation


```js
circuitsandbox.unlikeItem({
  "convId": "",
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation to which the item belongs
  * itemId **required** `string`: The ID of the item that will be unliked

#### Output
*Output schema unknown*

### likeItem
Adds a "like" to the given message in the given conversation


```js
circuitsandbox.likeItem({
  "convId": "",
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation to which the item belongs
  * itemId **required** `string`: The ID of the item that will be liked

#### Output
*Output schema unknown*

### oAuthGetClientIds
Gets a list of the client IDs (applications) that were created for this user.


```js
circuitsandbox.oAuthGetClientIds(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [OAuthClientId](#oauthclientid)

### oAuthValidateAccessToken
Gets the access token for the given token ID.


```js
circuitsandbox.oAuthValidateAccessToken({
  "tokenId": ""
}, context)
```

#### Input
* input `object`
  * tokenId **required** `string`: The unique id of the token to get the data for.

#### Output
* output [ValidateAccessToken](#validateaccesstoken)

### searchUser
Gets a user based on an email address or username. If both parameters are defined, the email address will be used.


```js
circuitsandbox.searchUser({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Search for a user by name

#### Output
* output `array`
  * items [User](#user)

### getLabel
Returns all labels of the user that were defined either explicit or implicit via assignment to conversations.


```js
circuitsandbox.getLabel(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Label](#label)

### addLabel
Add a label to the list of user labels


```js
circuitsandbox.addLabel({
  "label": ""
}, context)
```

#### Input
* input `object`
  * label **required** `string`: The label value to add

#### Output
* output [Label](#label)

### removeLabel
Remove a label from the list of user labels


```js
circuitsandbox.removeLabel({
  "labelId": ""
}, context)
```

#### Input
* input `object`
  * labelId **required** `string`: not available

#### Output
* output [Label](#label)

### getPresence
Gets the presence status of the users whose IDs or email addresses are given.


```js
circuitsandbox.getPresence({
  "userIds": []
}, context)
```

#### Input
* input `object`
  * userIds **required** `array`: A list of unique user IDs or email addresses of the users you want to query the presence state for

#### Output
* output `array`
  * items [Presence](#presence)

### setUserPresence
Updates the presence status of the authenticated user.


```js
circuitsandbox.setUserPresence({
  "state": ""
}, context)
```

#### Input
* input `object`
  * state **required** `string`: The user's presence.
  * dndUntil `string`: Timestamp until the DND state of the user is active. This field is mandatory when the state is set to DND.
  * clearDND `boolean`: not available
  * statusMessage `string`: An optional status message that is displayed instead of the location

#### Output
* output [Presence](#presence)

### getProfile
Gets the authenticated user's profile information.


```js
circuitsandbox.getProfile(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [User](#user)

### updateProfile
Updates the user profile of the authenticated user


```js
circuitsandbox.updateProfile({}, context)
```

#### Input
* input `object`
  * firstname `string`: The new firstname of the user
  * lastname `string`: The new lastname of the user
  * jobTitle `string`: The new job title of the user
  * locale `string` (values: EN_US, DE_DE, EN_GB, ES_ES, FR_FR, IT_IT, RU_RU, ZH_HANS_CN): The new locale of the user. One of EN_US, DE_DE, EN_GB, ES_ES, FR_FR, IT_IT, RU_RU, ZH_HANS_CN.

#### Output
* output [User](#user)

### getUserById
Gets the profile information of the user with the given ID.


```js
circuitsandbox.getUserById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique ID or the email address of the user to fetch

#### Output
* output [User](#user)

### getUserPresence
Gets the presence status of the users whose ID or email address is given.


```js
circuitsandbox.getUserPresence({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique ID or the email address of the user to fetch.

#### Output
* output [Presence](#presence)

### removeWebHooks
Unregisters all webHooks of the authenticated user


```js
circuitsandbox.removeWebHooks(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getWebHook
Gets the list of webHooks registered for this user or API.


```js
circuitsandbox.getWebHook(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [WebHook](#webhook)

### addWebHook
Registers the webHook with the given filter and callback URL.


```js
circuitsandbox.addWebHook({
  "url": "",
  "filter": []
}, context)
```

#### Input
* input `object`
  * url **required** `string`: WebHook callback URL. Currently only HTTP is supported
  * filter **required** `array`: A filter for WebHooks that checks for a list of configured events. This filter will use a regular expression to determine if it is interested in the events or not. The event itself is converted into a string of format AREA.EVENT. Examples: CONVERSATION.CREATE / USER.UPDATE

#### Output
* output [WebHook](#webhook)

### addPresenceWebHook
Registers a webHook that has a presence filter with the given URL and userIds. There is a maximum number of userIds allowed


```js
circuitsandbox.addPresenceWebHook({
  "url": "",
  "userIds": []
}, context)
```

#### Input
* input `object`
  * url **required** `string`: WebHook callback URL. Currently only HTTP is supported
  * userIds **required** `array`: not available

#### Output
* output [WebHook](#webhook)

### updatePresenceWebHook
Updates a registration of a webHook that has a presence filter. The update can be performed either on the URL and/or the userIds. The new userIds, if any, will override any existing userIds.


```js
circuitsandbox.updatePresenceWebHook({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique ID of the webHook to update
  * url `string`: WebHook callback URL. Currently only HTTP is supported
  * userIds `array`: not available

#### Output
* output [WebHook](#webhook)

### removeWebHook
Unregisters the webHook with the given ID.


```js
circuitsandbox.removeWebHook({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique ID of the webHook to remove

#### Output
*Output schema unknown*

### getWebHookById
Gets the registered webHook with the given ID.


```js
circuitsandbox.getWebHookById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique ID of the webHook to fetch

#### Output
* output [WebHook](#webhook)

### updateWebHook
Updates a webHook registration with the given filter and callback URL.


```js
circuitsandbox.updateWebHook({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique ID of the webHook to update
  * url `string`: WebHook callback URL. Currently only HTTP is supported
  * filter `array`: A filter for WebHooks that checks for a list of configured events. This filter will use a regular expression to determine if it is interested in the events or not. The event itself is converted into a string of format AREA.EVENT. Examples: CONVERSATION.CREATE / USER.UPDATE

#### Output
* output [WebHook](#webhook)



## Definitions

### Attachment
* Attachment `object`
  * creationTime `number`: not available
  * creatorId `string`: not available
  * deleteUrl `string`: not available
  * fileId `string`: not available
  * fileName `string`: not available
  * itemId `string`: not available
  * mimeType `string`: not available
  * modificationTime `number`: not available
  * size `number`: not available
  * url `string`: not available

### BridgeNumber
* BridgeNumber `object`
  * bridgeNumber `string`: The number that has to be called to join the real time session of a conversation
  * country `string`: The country where the bridge is hosted
  * locale `string`: The locale of the bridge
  * name `string`: The name / identifier of the bridge
  * type `string`: Information of the billing for the call, i.e. if the caller has to pay or not for the call

### Conversation
* Conversation `object`
  * avatar `string`: The URL of the small avatar image of the conversation
  * avatarLarge `string`: The URL of the large avatar image of the conversation
  * convId `string`: The ID of the conversation
  * creationTime `number`: UTC timestamp when the conversation was created
  * creatorId `string`: The ID of the user who created the conversation
  * creatorTenantId `string`: The ID of the Circuit domain (tenant) where the creator of the conversation belongs to
  * description `string`: The description of the conversation. This field is available only for conversations with type COMMUNITY
  * isGuestAccessDisabled `boolean`: Indicates whether guest access to the conversation is disabled or not
  * isModerated `boolean`: Indicates whether the conversation is moderated or not. In a moderated conversation only participants who have been assigned the role of a moderator are allowed to add or remove participants into the conversation
  * modificationTime `number`: UTC timestamp when the conversation was modified. A conversation is modified when any of the conversation object fields change but not when conversation items are added or edited
  * participants `array`: Array of active participants
    * items `string`
  * topic `string`: The title of the conversation. Conversations of type DIRECT cannot have a title
  * type `string`: The type of the conversation. It can be one of the following: DIRECT, GROUP, COMMUNITY or LARGE

### ConversationDetails
* ConversationDetails `object`
  * bridgeNumbers `array`: A list of bridge numbers which can be used to dial in to the real time session via phone
    * items [BridgeNumber](#bridgenumber)
  * conversationCreatorId `string`: The user ID of the conversation creator
  * isModerationAllowed `boolean`: Indicates if the conversation is allowed to be moderated
  * isRecordingAllowed `boolean`: Indicates if the conversation is allowed to be recorded
  * link `string`: A link that can be used in a browser to join the session
  * pin `string`: The PIN to join a real time session via phone

### ConversationItem
* ConversationItem `object`
  * attachments `array`: Array of files attached to the item
    * items [Attachment](#attachment)
  * convId `string`: The ID of the conversation the item belongs to
  * creationTime `number`: UTC timestamp when the item was created
  * creatorId `string`: The ID of the user who created the conversation item
  * includeInUnreadCount `boolean`: Indicates whether the item is included in the unread message count
  * itemId `string`: The ID of the item
  * modificationTime `number`: UTC timestamp when the conversation was modified
  * rtc [RtcItem](#rtcitem)
  * system [SystemItem](#systemitem)
  * text [ConversationTextItem](#conversationtextitem)
  * type `string`: The type of the conversation item. It can be one of the following TEXT, SYSTEM or RTC

### ConversationSearchResult
* ConversationSearchResult `object`
  * matchingConversations `array`: A list of result items for conversations that match the search term.
    * items [ConversationSearchResultItem](#conversationsearchresultitem)

### ConversationSearchResultItem
* ConversationSearchResultItem `object`
  * convId `string`: The ID of the conversation to which the matching items belong.
  * itemIds `array`: The conversation items which contain the search result. The list maybe empty in case a hit was found for the conversation related data like topic or participants.
    * items `string`

### ConversationTextItem
* ConversationTextItem `object`
  * content `string`: The content of the text item
  * contentType `string`: The type of the text item. It can be one of the following: RICH (with HTML content) or PLAIN (only text)
  * likedUserIds `array`: Array of IDs of the users who liked the item
    * items `string`
  * parentId `string`: The ID of the parent item of the text item. This field is optional and can be used for thread views
  * preview [Preview](#preview)
  * state `string`: The state of the text item. It can be one of the following: CREATED (which denotes that it was not modified since its creation), EDITED (which denotes that the creator of this item modified the item) or DELETED (which denotes that the item itself exists but its content was removed)
  * subject `string`: TThe subject of the text item. This field is optional and maybe filled when creating the text item

### Label
* Label `object`
  * labelId `string`: not available
  * value `string`: The clear text value

### OAuthClientId
* OAuthClientId `object`
  * accessTokenURL `string`: The URL to fetch the access token for an authorization code
  * applicationName `string`: A free text identifier of the application that uses the client ID
  * authorizationURL `string`: The URL to redirect a user for Circuit authentication
  * clientId `string`: The client ID
  * domains `array`: The valid domains for the client ID
    * items `string`
  * grantTypes `array`: A list of grant types which are supported by this client ID
    * items `string`
  * scopes `array`: The available scopes for OAUTH 2.0 access
    * items `string`
  * ttl `string`: The TTL for a token generated with this client ID
  * userId `string`: The ID of the user who owns a token

### Presence
* Presence `object`
  * dndUntil `number`: Timestamp until the DND state of the user is active
  * isOptedOut `boolean`: Indicates whether the user has opted out of their presence
  * latitude `number`: The latitude of the geo location of the user
  * locationText `string`: The geo location of the user in clear text
  * longitude `number`: The longitude of the geo location of the user
  * mobile `boolean`: Identifies whether the presence state is based on the state information of a mobile device or not
  * poor `boolean`: n/a
  * state `string`: The presence state of the user. It can be one of the following: AVAILABLE, OFFLINE, AWAY, BUSY, or DND (Do-Not-Disturb)
  * statusMessage `string`: A free formed status message of the user
  * timeZoneOffset `number`: The timezone offset of the user compared to UTC
  * userId `string`: The ID of the user

### Preview
* Preview `object`
  * imageURI `string`: n/a
  * srcURL `string`: n/a
  * title `string`: n/a
  * type `string`: n/a

### RtcItem
* RtcItem `object`
  * missed `string`: Indicates a missed call
  * type `string`: The type of the RTC item

### String
* String `object`

### SystemItem
* SystemItem `object`
  * affectedParticipants `array`: not available
    * items `string`
  * newTopic `string`: not available
  * oldTopic `string`: not available
  * type `string`: The type of the system item

### User
* User `object`
  * company `string`: The name of the user's company
  * displayName `string`: The user's display name
  * emailAddress `string`: The primary email address of the user
  * firstName `string`: The first name of the user
  * jobTitle `string`: The job title of the user
  * lastName `string`: The last name of the user
  * locale `string`: The locale of the user. (E.g. en-US, de-DE)
  * userId `string`: The ID of the user
  * userPresenceState [Presence](#presence)

### ValidateAccessToken
* ValidateAccessToken `object`
  * accessToken `string`: The access token issued by the authorization server
  * clientId `string`: The client ID used to generate the access token
  * expirationTime `number`: The date when the token expires
  * scopes `array`: Array of the scopes of the access token
    * items `string`

### WebHook
* WebHook `object`
  * creationTime `number`: The time when this WebHook was created. This does not necessary mean the time when an manifest file was created.
  * filter `array`: An optional list of filter parameters for this webhook.
    * items `string`
  * id `string`: The unique identifier for this webhook. Can be used later to unregister the webhook.
  * subscriptionIds `array`: The optional list of userids for which this webhook is subscribed, i.e. presence events for the user are forwarded to the WebHook callback URL.
    * items `string`
  * type `string`: The type of a WebHook. This can either be MANUAL or EXTENSION. While manual WebHooks are only temporary and for development only use, permanent ones (EXTENSION) will bemanaged by the system.
  * url `string`: The callback URL of this webhook.
  * userId `string`: The user ID for which this webhook is subscribed, i.e. events for this user are forwarded to the WebHook callback URL.


