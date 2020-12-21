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

.then(data => {
  console.log(data);
});
```

## Description

Circuit REST API to interact with the Circuit system.

[Learn more about the Circuit Development Community](https://www.circuit.com/web/developers/home)

## Actions

### getConversations
Gets a list of conversations and communities the authenticated user participates in.
OauthScopes: ALL, READ_CONVERSATIONS


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
OauthScopes: ALL, READ_CONVERSATIONS


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
OauthScopes: ALL, WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS


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
OauthScopes: ALL, WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS


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
OauthScopes: ALL, WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS


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
OauthScopes: ALL, WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS


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
OauthScopes: ALL, WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS


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

### getDirectConversation
Checks if a 1-to-1 conversation between the authenticated user and the user with the provided userId exists.
OauthScopes: ALL, READ_CONVERSATIONS


```js
circuitsandbox.getDirectConversation({
  "participant": ""
}, context)
```

#### Input
* input `object`
  * participant **required** `string`: The participant that will be part of this conversation together with the creator, specified by the Circuit user ID or the unique email address

#### Output
* output [Conversation](#conversation)

### createDirectConversation
Creates a 1-to-1 conversation between the authenticated user and the user with the provided userId. In case there is already an existing 1-to-1 conversation between these users, the endpoint returns the existing conversation.
OauthScopes: ALL, WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS


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
OauthScopes: ALL, READ_CONVERSATIONS


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
OauthScopes: ALL, WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS


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
OauthScopes: ALL, WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS


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
OauthScopes: ALL, WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS


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
OauthScopes: ALL, WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS


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

### getConversationsByLabel
Returns conversations with matching labels and paginated 
OauthScopes: ALL, READ_CONVERSATIONS


```js
circuitsandbox.getConversationsByLabel({
  "labelId": ""
}, context)
```

#### Input
* input `object`
  * labelId **required** `string`: Id of the label to look for
  * nextPagePointer `string`: Pointer to the next page of conversations if there are any
  * pageSize `number`: Numbers of max conversations per page

#### Output
* output [ConversationsPage](#conversationspage)

### getFlagItemConv
Gets a list of all the messages the authenticated user has flagged. This endpoint should be used carefully in case where the authenticated user has a lot of flagged messages.
OauthScopes: ALL, READ_CONVERSATIONS


```js
circuitsandbox.getFlagItemConv(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ConversationItem](#conversationitem)

### getSingleConversationtem
Returns a text item for a given item id
OauthScopes: ALL, READ_CONVERSATIONS


```js
circuitsandbox.getSingleConversationtem({
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: The ID of the item that will be returned

#### Output
* output [ConversationItem](#conversationitem)

### moderateConversation
Set a conversation in moderatd mode. Moderators can be added and removed
OauthScopes: ALL, WRITE_CONVERSATIONS, MODERATE_CONVERSATIONS


```js
circuitsandbox.moderateConversation({
  "convId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation which will be set to moderated state

#### Output
*Output schema unknown*

### resolveInvitationToken
Resolves an invite token to a conversation
OauthScopes: ALL, READ_CONVERSATIONS


```js
circuitsandbox.resolveInvitationToken({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: The invite token to resolve

#### Output
* output [Conversation](#conversation)

### searchConversations
Performs a search for conversation content. A maximum of 100 conversations is returned. If you hit this limit you should refine the search term.
OauthScopes: ALL, WRITE_CONVERSATIONS


```js
circuitsandbox.searchConversations({
  "term": ""
}, context)
```

#### Input
* input `object`
  * term **required** `string`: The search term
  * includeItemIds `boolean`: Optional parameter to specify if a deep or normal search is executed. In a deep search all matching item IDs inside every conversation are returned (up to a maximum of 100). For a normal search only the conversation IDs are returned. Default is a normal search (without item IDs).

#### Output
* output [ConversationSearchResult](#conversationsearchresult)

### unmoderateConversation
Set a conversation to unmoderatd mode
OauthScopes: ALL, WRITE_CONVERSATIONS, MODERATE_CONVERSATIONS


```js
circuitsandbox.unmoderateConversation({
  "convId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation which will be set to unmoderated state

#### Output
*Output schema unknown*

### getConversationbyId
Gets a conversation based on the given ID.
OauthScopes: ALL, READ_CONVERSATIONS


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
OauthScopes: ALL, READ_CONVERSATIONS


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
OauthScopes: ALL, WRITE_CONVERSATIONS


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
OauthScopes: ALL, WRITE_CONVERSATIONS


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
OauthScopes: ALL, READ_CONVERSATIONS


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
OauthScopes: ALL, WRITE_CONVERSATIONS, ORGANIZE_CONVERSATIONS


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
OauthScopes: ALL, WRITE_CONVERSATIONS


```js
circuitsandbox.unassignLabel({
  "convId": "",
  "labelId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation from which the label is removed
  * labelId **required** `string`: The actual label 

#### Output
* output [Label](#label)

### addTextItem
Adds a message to the given conversation. This operation can be only performed on behalf of a user who is already a member of the conversation.
OauthScopes: ALL, WRITE_CONVERSATIONS, CREATE_CONVERSATIONS_CONTENT


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
  * formMetaData `string`: The form meta data of the new text item

#### Output
* output [ConversationItem](#conversationitem)

### getFlagItem
Gets a list of all the flagged messages in the given conversation.
OauthScopes: ALL, READ_CONVERSATIONS, ORGANIZE_CONVERSATIONS


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
OauthScopes: ALL, WRITE_CONVERSATIONS, DELETE_CONVERSATIONS_CONTENT


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
OauthScopes: ALL, WRITE_CONVERSATIONS


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
  * attachments `array`: A comma separated list of attachment IDs from the file API.
  * subject `string`: The subject (headline) of the new text item
  * formMetaData `string`: The form meta data of the new text item

#### Output
* output [ConversationItem](#conversationitem)

### updateTextItem
Updates the content or subject of the existing message. Only the creator of the message is allowed to perform this operation.
OauthScopes: ALL, WRITE_CONVERSATIONS, UPDATE_CONVERSATION_CONTENT


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
  * attachments `array`: A comma separated list of attachment IDs from the file API.
  * subject `string`: The subject (headline) of the new text item
  * formMetaData `string`: The form meta data of the new text item

#### Output
* output [ConversationItem](#conversationitem)

### unFlagItem
Removes the flag from a given message that is posted to the given conversation.
OauthScopes: ALL, WRITE_CONVERSATIONS, ORGANIZE_CONVERSATIONS


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
OauthScopes: ALL, WRITE_CONVERSATIONS, ORGANIZE_CONVERSATIONS


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
OauthScopes: ALL, WRITE_CONVERSATIONS, UPDATE_CONVERSATION_CONTENT


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
OauthScopes: ALL, WRITE_CONVERSATIONS, UPDATE_CONVERSATION_CONTENT


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

### removeModerators
Removes a list of moderators from a conversation
OauthScopes: ALL, WRITE_CONVERSATIONS, MODERATE_CONVERSATIONS


```js
circuitsandbox.removeModerators({
  "convId": "",
  "moderators": []
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation where the moderators are removed
  * moderators **required** `array`: The list of moderator ids to remove

#### Output
*Output schema unknown*

### addModerators
Adds a list of moderators to a conversation
OauthScopes: ALL, WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS


```js
circuitsandbox.addModerators({
  "convId": "",
  "moderators": []
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation to which the moderators are added
  * moderators **required** `array`: The list of moderator ids to add 

#### Output
*Output schema unknown*

### getParticipantsByConvId
Performs a search for participants. The max number of participants is configurable. If more participants are available a search pointer is returned for consecutive calls.
OauthScopes: ALL, READ_CONVERSATIONS


```js
circuitsandbox.getParticipantsByConvId({
  "convId": "",
  "pageSize": 0
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The id of the conversation the participants are searched for.
  * pageSize **required** `number`: The page size of the hit list
  * name `string`: Part of name to filter the results
  * type `string` (values: REGULAR, MODERATOR, GUEST, FORMER, BOT): Type of participant to filter the results
  * searchPointer `string`: Pointer for paged output. Add to consecutive request to get next page

#### Output
* output `array`
  * items [ConversationParticipantsList](#conversationparticipantslist)

### getPinnedConversations
Returns pinned topics of a conversation
OauthScopes: ALL, READ_CONVERSATIONS


```js
circuitsandbox.getPinnedConversations({
  "convId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: ID of the conversation

#### Output
* output `array`
  * items [PinnedTopic](#pinnedtopic)

### unPinAConversation
Unpins a topic of a conversation
OauthScopes: ALL, READ_CONVERSATIONS


```js
circuitsandbox.unPinAConversation({
  "convId": "",
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation
  * itemId **required** `string`: The ID of the topic

#### Output
* output [Conversation](#conversation)

### pinAConversation
Pins a topic of a conversation
OauthScopes: ALL, READ_CONVERSATIONS


```js
circuitsandbox.pinAConversation({
  "convId": "",
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * convId **required** `string`: The ID of the conversation
  * itemId **required** `string`: The ID of the topic

#### Output
* output [Conversation](#conversation)

### getActiveSessions
Gets a list of active RTCsessions
OauthScopes: ALL, CALLS


```js
circuitsandbox.getActiveSessions(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Label](#label)

### getSpaces
Get the spaces
OauthScopes: ALL


```js
circuitsandbox.getSpaces({}, context)
```

#### Input
* input `object`
  * timestamp `string`: a beautiful timestamp
  * numberOfResults `number`: the number of results you want

#### Output
* output [GetSpacesResult](#getspacesresult)

### createSpace
Create a space
OauthScopes: ALL


```js
circuitsandbox.createSpace({
  "name": "",
  "accessModeType": "",
  "status": "",
  "role": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: name of the space
  * description `string`: description of the space
  * tags `array`: tags of the space
  * accessModeType **required** `string` (values: INTERNAL_ONLY, INTERNAL_EXTERNAL): Access mode
  * status **required** `string` (values: ENABLED, DISABLED): status
  * role **required** `string` (values: MODERATOR, AUTHOR, PARTICIPANT, READER): role
  * type **required** `string` (values: OPEN, CLOSED, SECRET): type
  * largePictureBase64 `string`: large picture
  * smallPictureBase64 `string`: small picture

#### Output
* output [ParticipantSpaceWrapper](#participantspacewrapper)

### getDirectory
Get the directory by a search query in ordered way
OauthScopes: ALL


```js
circuitsandbox.getDirectory({
  "sortBy": "",
  "sortOrder": "",
  "filter": ""
}, context)
```

#### Input
* input `object`
  * sortBy **required** `string` (values: LAST_CONTENT, NAME, NUMBER_OF_USERS, CREATION_DATE): sort the spaces by LAST_CONTENT, NAME, NUMBER_OF_USERS or CREATION_DATE
  * sortOrder **required** `string` (values: ASCENDING, DESCENDING): ascending or descending
  * filter **required** `string` (values: NONE, JOINED, REQUESTED, OPEN, CLOSED, NOT_JOINED_REQUESTED): filter for spaces (JOINED, REQUESTED, OPEN, CLOSED or NOT_JOINED_REQUESTED)
  * query `string`: some sort of query
  * pagePointer `string`: page pointer, start with nothing and for next query use returned pointer
  * numberOfResults `number`: number of results to return, 25 by default.

#### Output
* output [DirectoryResult](#directoryresult)

### existsSpaceName
Find out if a space name already exists for non-secret spaces.
OauthScopes: ALL


```js
circuitsandbox.existsSpaceName({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name to check for existence.

#### Output
*Output schema unknown*

### flagSpaceItem
flag a space item
OauthScopes: ALL


```js
circuitsandbox.flagSpaceItem({
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: the id of the item you want to flag

#### Output
*Output schema unknown*

### getFlaggedItems
Get flagged items
OauthScopes: ALL


```js
circuitsandbox.getFlaggedItems({
  "searchDirection": "",
  "timestamp": ""
}, context)
```

#### Input
* input `object`
  * searchDirection **required** `string` (values: BEFORE, AFTER): before or after the time stamp
  * timestamp **required** `string`: The timestamp according to which you want to retrieve the flagged items
  * searchPointer `string`: The searchpointer for the search (initially not set).
  * numberOfResults `number`: The number of results you want to retrieve.

#### Output
* output [FlaggedItemsResult](#flaggeditemsresult)

### getSpacesByIds
Get the spaces by their ids
OauthScopes: ALL


```js
circuitsandbox.getSpacesByIds({
  "ids": []
}, context)
```

#### Input
* input `object`
  * ids **required** `array`: an array of ids

#### Output
* output [GetSpacesResult](#getspacesresult)

### deleteSpaceItem
deletes a space item
OauthScopes: ALL


```js
circuitsandbox.deleteSpaceItem({
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: the id of the spaceItem

#### Output
*Output schema unknown*

### likeSpaceItem
Like a space item
OauthScopes: ALL


```js
circuitsandbox.likeSpaceItem({
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: The id of the item you want to like

#### Output
*Output schema unknown*

### getLikes
Get the likes of an item
OauthScopes: ALL


```js
circuitsandbox.getLikes({
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: The id of the item to retrieve the likes from
  * searchPointer `string`: The searchpointer for the search (initially not set).
  * numberOfResults `number`: The number of results you want to retrieve.

#### Output
* output [ParticipantsLikeResult](#participantslikeresult)

### addRecentSpaceSearch
Add recent search of a client to search controller.
OauthScopes: ALL


```js
circuitsandbox.addRecentSpaceSearch({
  "scope": "",
  "searchTerm": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string` (values: ALL, SPACES, TOPICBY, FILES, TAGS, LABELS, DATE): The scope of the search.
  * searchTerm **required** `string`: The term to search for.
  * startTime `string`: The start time.
  * endTime `string`: The end time.

#### Output
*Output schema unknown*

### cancelSpaceSearch
Cancels a space search of a client.
OauthScopes: ALL


```js
circuitsandbox.cancelSpaceSearch({
  "searchId": ""
}, context)
```

#### Input
* input `object`
  * searchId **required** `string`: The id of the search to cancel

#### Output
*Output schema unknown*

### getRecentSearches
Retrieve recent space searches for a user.
OauthScopes: ALL


```js
circuitsandbox.getRecentSearches(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [SpacesSearchTermResult](#spacessearchtermresult)

### startBasicSpacesSearch
starts a basic search in spaces
OauthScopes: ALL


```js
circuitsandbox.startBasicSpacesSearch({
  "scope": "",
  "searchTerm": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string` (values: ALL, SPACES, TOPICBY, FILES, TAGS, LABELS, DATE): the scope of the search
  * searchTerm **required** `string`: the term to search for
  * startTime `string`: the starttime
  * endTime `string`: the end time
  * prioritySpaces `array`: list of prioritized spaces

#### Output
* output [BasicSearchResult](#basicsearchresult)

### startDetailedSpaceSearch
starts a detailed search in a space
OauthScopes: ALL


```js
circuitsandbox.startDetailedSpaceSearch({
  "scope": "",
  "searchTerm": "",
  "spaceId": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string` (values: ALL, SPACES, TOPICBY, FILES, TAGS, LABELS, DATE): the scope of the search
  * searchTerm **required** `string`: the term to search for
  * startTime `string`: the starttime
  * endTime `string`: the end time
  * spaceId **required** `string`: missing documentation
  * searchId `string`: missing documentation

#### Output
* output `array`
  * items [SpaceSearchResultDetailedBack](#spacesearchresultdetailedback)

### unflagSpaceItem
Unflag a space item
OauthScopes: ALL


```js
circuitsandbox.unflagSpaceItem({
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: the id of the item you want to unflag

#### Output
*Output schema unknown*

### unlikeSpaceItem
Unlike a space item
OauthScopes: ALL


```js
circuitsandbox.unlikeSpaceItem({
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: The id of the item you want to unlike

#### Output
*Output schema unknown*

### deleteSpace
Delete a space
OauthScopes: ALL


```js
circuitsandbox.deleteSpace({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: id of the space

#### Output
*Output schema unknown*

### updateSpace
Update a space
OauthScopes: ALL


```js
circuitsandbox.updateSpace({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: id of the space
  * name `string`: name of the space
  * description `string`: description of the space
  * tags `array`: tags of the space
  * ownerId `string`: ownerid of the space
  * accessModeType `string` (values: INTERNAL_ONLY, INTERNAL_EXTERNAL, NO_CHANGE): Access mode
  * status `string` (values: ENABLED, DISABLED): status
  * role `string` (values: MODERATOR, AUTHOR, PARTICIPANT, READER, NO_CHANGE): role
  * type `string` (values: OPEN, CLOSED, SECRET, NO_CHANGE): type
  * largePictureBase64 `string`: large picture
  * smallPictureBase64 `string`: small picture

#### Output
* output [ParticipantSpaceWrapper](#participantspacewrapper)

### joinSpace
Join a space
OauthScopes: ALL


```js
circuitsandbox.joinSpace({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the space

#### Output
* output [ParticipantSpaceWrapper](#participantspacewrapper)

### leaveSpace
Leave a space
OauthScopes: ALL


```js
circuitsandbox.leaveSpace({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the space

#### Output
*Output schema unknown*

### addParticipantsToSpace
Add a participant to a space
OauthScopes: ALL


```js
circuitsandbox.addParticipantsToSpace({
  "id": "",
  "userId": [],
  "role": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the space
  * userId **required** `array`: The user id of the participant
  * role **required** `string` (values: DEFAULT, MODERATOR, AUTHOR, PARTICIPANT, READER): The name of the role of the participant

#### Output
* output `array`
  * items [ParticipantAddResult](#participantaddresult)

### v2RemoveParticipantsFromSpace
removes Participants from a space
OauthScopes: ALL


```js
circuitsandbox.v2RemoveParticipantsFromSpace({
  "id": "",
  "userIds": []
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the space
  * userIds **required** `array`: The ids of the participants to remove 

#### Output
*Output schema unknown*

### getSpaceParticipants
Get the participants of a space
OauthScopes: ALL


```js
circuitsandbox.getSpaceParticipants({
  "id": "",
  "sortBy": "",
  "sortOrder": "",
  "filterType": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the space.
  * sortBy **required** `string` (values: DISPLAY_NAME, NAME, FIRST_NAME): sort the spaces by LAST_CONTENT, NAME, NUMBER_OF_USERS or CREATION_DATE
  * sortOrder **required** `string` (values: ASCENDING, DESCENDING): ascending or descending
  * filterType **required** `string` (values: NONE, ACCESS_TYPE, ROLE, STATE): filtertype for participants (ACCESS_TYPE, ROLE or STATE)
  * filterValue `string`: value for the filter
  * query `string`: some sort of query
  * searchPointer `string`: The search pointer (leave empty initially).
  * numberOfResults `number`: number of results to return, 25 by default.

#### Output
* output [ParticipantsSearchResult](#participantssearchresult)

### getPendingParticipants
Get the pending participants of a space
OauthScopes: ALL


```js
circuitsandbox.getPendingParticipants({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the space.
  * searchPointer `string`: The search pointer (leave empty initially).
  * numberOfResults `number`: number of results to return, 25 by default.

#### Output
* output [ParticipantsSearchResult](#participantssearchresult)

### getPinnedTopics
Retrieve pinned topics of a space
OauthScopes: ALL


```js
circuitsandbox.getPinnedTopics({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the space.

#### Output
* output `array`
  * items [SpacePinnedTopic](#spacepinnedtopic)

### searchParticipantsToAdd
Finds participants to add to a space 
OauthScopes: ALL


```js
circuitsandbox.searchParticipantsToAdd({
  "id": "",
  "query": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the space
  * query **required** `string`: The query 

#### Output
* output `array`
  * items [AddParticipantsSearchResult](#addparticipantssearchresult)

### searchSpaceParticipants
Get the participants of a space
OauthScopes: ALL


```js
circuitsandbox.searchSpaceParticipants({
  "id": "",
  "query": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the space.
  * query **required** `string`: The query to search with. If searchpointer/hasMotre is returned, refine query.

#### Output
* output `array`
  * items [ParticipantsSearchResultLarge](#participantssearchresultlarge)

### updateReadTimestamp
Update read timestamp
OauthScopes: ALL


```js
circuitsandbox.updateReadTimestamp({
  "id": "",
  "timestamp": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of a space
  * timestamp **required** `string`: The new timestamp

#### Output
*Output schema unknown*

### updateParticipantInSpace
missing documentation
OauthScopes: ALL


```js
circuitsandbox.updateParticipantInSpace({
  "spaceId": "",
  "userId": "",
  "role": ""
}, context)
```

#### Input
* input `object`
  * spaceId **required** `string`: missing documentation
  * userId **required** `string`: missing documentation
  * role **required** `string` (values: MODERATOR, AUTHOR, PARTICIPANT, READER): missing documentation

#### Output
*Output schema unknown*

### getParticipantsImportData
missing documentation
OauthScopes: ALL


```js
circuitsandbox.getParticipantsImportData({
  "spaceId": ""
}, context)
```

#### Input
* input `object`
  * spaceId **required** `string`: missing documentation

#### Output
* output [ParticipantsImportDataResult](#participantsimportdataresult)

### requestSpaceAcces
request access for a space
OauthScopes: ALL


```js
circuitsandbox.requestSpaceAcces({
  "spaceId": ""
}, context)
```

#### Input
* input `object`
  * spaceId **required** `string`: Id of the space
  * reason `string`: Reason why the Access has been requested

#### Output
*Output schema unknown*

### denySpaceAcces
Deny access for a space
OauthScopes: ALL


```js
circuitsandbox.denySpaceAcces({
  "spaceId": "",
  "participantId": ""
}, context)
```

#### Input
* input `object`
  * spaceId **required** `string`: Id of the space
  * participantId **required** `string`: Id of the participant
  * reason `string`: Reason why the request has been denied

#### Output
*Output schema unknown*

### grantSpaceAcces
grant access for a space
OauthScopes: ALL


```js
circuitsandbox.grantSpaceAcces({
  "spaceId": "",
  "participantId": ""
}, context)
```

#### Input
* input `object`
  * spaceId **required** `string`: Id of the space
  * participantId **required** `string`: Id of the participant

#### Output
*Output schema unknown*

### createSpaceTopic
creates a new space topic
OauthScopes: ALL


```js
circuitsandbox.createSpaceTopic({
  "spaceId": "",
  "subject": ""
}, context)
```

#### Input
* input `object`
  * spaceId **required** `string`: The ID of the space
  * subject **required** `string`: The subject of the topic
  * content `string`: The content of this topic
  * complex `boolean`: complex or not
  * mentionedUser `string`: A list of mentioned users
  * formMetaData `string`: The formMetaData
  * attachments `array`: the attached files

#### Output
* output [SpaceTopic](#spacetopic)

### v2GetTopicWithReplies
Gets a number of Space replies with a matching topic
OauthScopes: ALL


```js
circuitsandbox.v2GetTopicWithReplies({
  "spaceId": "",
  "topicId": ""
}, context)
```

#### Input
* input `object`
  * spaceId **required** `string`: Id of the topic
  * topicId **required** `string`: ID of the topic
  * numberOfReplies `number`: The number of replies

#### Output
* output [SpaceTopicWithReplies](#spacetopicwithreplies)

### updateSpaceTopic
Updates a topic
OauthScopes: ALL


```js
circuitsandbox.updateSpaceTopic({
  "spaceId": "",
  "topicId": ""
}, context)
```

#### Input
* input `object`
  * spaceId **required** `string`: ID of the space
  * topicId **required** `string`: Id of the topic to update
  * subject `string`: the subject of the topic
  * content `string`: content of the topic
  * formMetaData `string`: formMetaData to update
  * mentionedUsers `array`: the updated mentioned users
  * complex `boolean`: complex or not
  * attachments `array`: the attached files

#### Output
* output [SpaceTopic](#spacetopic)

### getSpaceReplies
Gets a number of Space replies
OauthScopes: ALL


```js
circuitsandbox.getSpaceReplies({
  "spaceId": "",
  "topicId": "",
  "searchDirection": ""
}, context)
```

#### Input
* input `object`
  * spaceId **required** `string`: Id of the containing space
  * topicId **required** `string`: Id of the topic
  * searchDirection **required** `string` (values: BEFORE, AFTER): Search before or after a certain timestamp
  * timestamp `string`: Timestamp to start the search from
  * numberOfResults `number`: The number of results that should be returned

#### Output
* output [SpaceReply](#spacereply)

### createReply
creates a reply to a topic
OauthScopes: ALL


```js
circuitsandbox.createReply({
  "spaceId": "",
  "topicId": ""
}, context)
```

#### Input
* input `object`
  * spaceId **required** `string`: ID of the space
  * topicId **required** `string`: ID of the topic
  * content `string`: Content of the reply
  * complex `boolean`: complex or not
  * mentionedUser `string`: the user mentioned in the reply
  * formMetaData `string`: formMetaData used in the reply
  * attachments `array`: the attached files

#### Output
* output [SpaceReply](#spacereply)

### updateSpaceReply
Updates a space reply
OauthScopes: ALL


```js
circuitsandbox.updateSpaceReply({
  "spaceId": "",
  "topicId": "",
  "replyId": ""
}, context)
```

#### Input
* input `object`
  * spaceId **required** `string`: ID of the space
  * topicId **required** `string`: ID of the topic
  * replyId **required** `string`: id of the reply
  * content `string`: the content of the reply
  * complex `boolean`: complex or not
  * formMetaData `string`: formMetaData of the reply
  * mentionedUsers `array`: the mentioned users in the reply
  * attachments `array`: the attached files

#### Output
* output [SpaceReply](#spacereply)

### getSpaceTopics
Gets a number of Space topics
OauthScopes: ALL


```js
circuitsandbox.getSpaceTopics({
  "spaceId": "",
  "searchDirection": ""
}, context)
```

#### Input
* input `object`
  * spaceId **required** `string`: Id of the space
  * searchDirection **required** `string` (values: BEFORE, AFTER): Search before or after a certain timestamp
  * timestamp `string`: Timestamp to start the search from
  * numberOfResults `number`: The number of results that should be returned

#### Output
* output `array`
  * items [SpaceTopic](#spacetopic)

### pinTopic
Pin a topic
OauthScopes: ALL


```js
circuitsandbox.pinTopic({
  "topicId": "",
  "position": 0
}, context)
```

#### Input
* input `object`
  * topicId **required** `string`: The id of the topic
  * position **required** `number`: The position to pin to

#### Output
*Output schema unknown*

### unpinTopic
Unpin a topic
OauthScopes: ALL


```js
circuitsandbox.unpinTopic({
  "topicId": ""
}, context)
```

#### Input
* input `object`
  * topicId **required** `string`: The id of the topic to unpin

#### Output
*Output schema unknown*

### searchUser
Search for users based on an email address or username
OauthScopes: ALL, READ_USER


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
OauthScopes: ALL, READ_USER_PROFILE, ORGANIZE_CONVERSATIONS


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
OauthScopes: ALL, WRITE_USER_PROFILE, ORGANIZE_CONVERSATIONS


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
OauthScopes: ALL, WRITE_USER_PROFILE, ORGANIZE_CONVERSATIONS


```js
circuitsandbox.removeLabel({
  "labelId": ""
}, context)
```

#### Input
* input `object`
  * labelId **required** `string`: The label value to remove, either the unique ID or the label value

#### Output
* output [Label](#label)

### searchUsersList
Search multiple users given by id or email address.
OauthScopes: ALL, READ_USER


```js
circuitsandbox.searchUsersList({
  "name": []
}, context)
```

#### Input
* input `object`
  * name **required** `array`: Multiple email addresses or UUIDs.

#### Output
* output `array`
  * items [User](#user)

### getPresence
Gets the presence status of the users whose IDs or email addresses are given.
OauthScopes: ALL, READ_USER


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
OauthScopes: ALL, WRITE_USER_PROFILE, MANAGE_PRESENCE


```js
circuitsandbox.setUserPresence({
  "state": ""
}, context)
```

#### Input
* input `object`
  * state **required** `string`: The user's presence.
  * dndUntil `string`: Timestamp until the DND state of the user is active. This field is mandatory when the state is set to DND.
  * clearDND `boolean`: Clear the DND of the user.
  * statusMessage `string`: An optional status message that is displayed instead of the location

#### Output
* output [Presence](#presence)

### getProfile
Gets the authenticated user's profile information.
OauthScopes: ALL, READ_USER_PROFILE


```js
circuitsandbox.getProfile(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [User](#user)

### updateProfile
Updates the user profile of the authenticated user
OauthScopes: ALL, WRITE_USER_PROFILE


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
OauthScopes: ALL, READ_USER


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
OauthScopes: ALL, READ_USER


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
OauthScopes: ALL, READ_CONVERSATIONS, READ_USER


```js
circuitsandbox.removeWebHooks(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getWebHook
Gets the list of webHooks registered for this user or API.
OauthScopes: ALL, READ_CONVERSATIONS, READ_USER


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
OauthScopes: ALL, READ_CONVERSATIONS, READ_USER


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

### createIncomingWebhook
Create a new webhook. Conversation must exist and creater has to be participant.
OauthScopes: ALL, MANAGE_CONVERSATIONS


```js
circuitsandbox.createIncomingWebhook({
  "conversationId": ""
}, context)
```

#### Input
* input `object`
  * conversationId **required** `string`: The id of the conversation.
  * name `string`: The name of the webhook
  * userId `string`: The id of the user of the webhook
  * description `string`: A short description of the webhook

#### Output
* output [IncomingWebhook](#incomingwebhook)

### getIncomingWebhookByUser
Get all webhooks of a special user.
OauthScopes: ALL, MANAGE_CONVERSATIONS


```js
circuitsandbox.getIncomingWebhookByUser({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The id of the user.
  * pagesize `number`: Max number of hooks per request. Default is 25
  * searchpointer `string`: Start of search if consequtive call.

#### Output
* output `array`
  * items [IncomingWebhook](#incomingwebhook)

### deleteIncomingWebhook
Delete a new webhook. Webhook must exist
OauthScopes: ALL, MANAGE_CONVERSATIONS


```js
circuitsandbox.deleteIncomingWebhook({
  "webhookId": ""
}, context)
```

#### Input
* input `object`
  * webhookId **required** `string`: The id of the webhook

#### Output
*Output schema unknown*

### postWebhookAsSlackMessage
Post text items to conversations via slack apps.


```js
circuitsandbox.postWebhookAsSlackMessage({
  "webhookId": "",
  "content": null
}, context)
```

#### Input
* input `object`
  * webhookId **required** `string`: The id of the webhook.
  * content **required** [IncomingWebhookSlackMessage](#incomingwebhookslackmessage)

#### Output
*Output schema unknown*

### addPresenceWebHook
Registers a webHook that has a presence filter with the given URL and userIds. There is a maximum number of userIds allowed
OauthScopes: ALL, READ_USER


```js
circuitsandbox.addPresenceWebHook({
  "url": "",
  "userIds": []
}, context)
```

#### Input
* input `object`
  * url **required** `string`: WebHook callback URL. Currently only HTTP is supported
  * userIds **required** `array`: The IDs of the users to subscribe for their presence

#### Output
* output [WebHook](#webhook)

### updatePresenceWebHook
Updates a registration of a webHook that has a presence filter. The update can be performed either on the URL and/or the userIds. The new userIds, if any, will override any existing userIds.
OauthScopes: ALL, READ_USER


```js
circuitsandbox.updatePresenceWebHook({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique ID of the webHook to update
  * url `string`: WebHook callback URL. Currently only HTTP is supported
  * userIds `array`: The IDs of the users to subscribe for their presence

#### Output
* output [WebHook](#webhook)

### removeWebHook
Unregisters the webHook with the given ID.
OauthScopes: ALL, READ_CONVERSATIONS, READ_USER


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
OauthScopes: ALL, READ_CONVERSATIONS, READ_USER


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
OauthScopes: ALL, READ_CONVERSATIONS, READ_USER


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

### AddParticipantsSearchResult
* AddParticipantsSearchResult `object`
  * department `string`: The department of the participant
  * firstName `string`: The first name of the participant
  * isMember `boolean`: is the participant a member, true or false
  * jobTitle `string`: The job title of the participant
  * lastName `string`: The last name of the participant
  * smallImageUri `string`: The uri of the small picture of the participant
  * tenantId `string`: the tenant id of the participant
  * userId `string`: The id of the participant

### Attachment
* Attachment `object`
  * creationTime `number`: The creation time of the attachment.
  * creatorId `string`: The id of the creator of the attachment.
  * deleteUrl `string`: The delete URL of the attachment.
  * fileId `string`: The id of the attachment file.
  * fileName `string`: The name of the attachment file.
  * itemId `string`: The item id to which the attachment is attached.
  * mimeType `string`: The mime type of the attachment file.
  * modificationTime `number`: The modification time of the attachment.
  * size `number`: The size of the attachment file.
  * url `string`: The URL of the attachment.

### BasicSearchResult
* BasicSearchResult `object`
  * spaces `array`: List of spaces
    * items [Space](#space)
  * status `string`: The status of the search (NORESULT, ERROR, TIMEOUT, MORERESULT)

### BridgeNumber
* BridgeNumber `object`
  * bridgeNumber `string`: The number that has to be called to join the real time session of a conversation
  * country `string`: The country where the bridge is hosted
  * isMostUsed `boolean`: Is most used
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
  * topicPlaceholder `string`: The title of the conversation. Conversations of type DIRECT cannot have a title
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

### ConversationParticipant
* ConversationParticipant `object`
  * displayName `string`: The display name of the participant.
  * firstName `string`: The first name of the participant.
  * isDeleted `boolean`: If the participant is deleted.
  * largeImageUri `string`: The large image uri of the participant.
  * lastName `string`: The last name of the participant.
  * smallImageUri `string`: The small image uri of the participant;
  * type `string`: The type of the participant
  * userId `string`: The unique user id of the participant.

### ConversationParticipantsList
* ConversationParticipantsList `object`
  * hasMore `boolean`: are more results available, then start another search with finer query
  * participantList `array`: list of participants
    * items [ConversationParticipant](#conversationparticipant)
  * searchPointer `string`: pointer for stored search 

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
  * formMetaData `string`: The meta data form
  * isWebhookMessage `boolean`: Is this a webhook message?
  * likedUserIds `array`: Array of IDs of the users who liked the item
    * items `string`
  * parentId `string`: The ID of the parent item of the text item. This field is optional and can be used for thread views
  * preview [Preview](#preview)
  * state `string`: The state of the text item. It can be one of the following: CREATED (which denotes that it was not modified since its creation), EDITED (which denotes that the creator of this item modified the item) or DELETED (which denotes that the item itself exists but its content was removed)
  * subject `string`: TThe subject of the text item. This field is optional and maybe filled when creating the text item

### ConversationsPage
* ConversationsPage `object`
  * conversationList `array`: List of conversations
    * items [Conversation](#conversation)
  * nextPagePointer `string`: Pointer to the next set page of conversations

### DirectoryResult
* DirectoryResult `object`
  * hasMore `boolean`: are more results available, than start another search
  * searchPointer `string`: pointer for stored search 
  * spaces `array`: list of spaces
    * items [Space](#space)

### FlaggedItem
* FlaggedItem `object`
  * item [SpaceItem](#spaceitem)
  * parentItem [SpaceItem](#spaceitem)

### FlaggedItemsResult
* FlaggedItemsResult `object`
  * flaggedItems `array`: A list of flagged items
    * items [FlaggedItem](#flaggeditem)
  * hasMore `boolean`: More results available (true-use searchpointer for next search/false)
  * searchPointer `string`: The searchpointer

### GetSpacesResult
* GetSpacesResult `object`

### IncomingWebhook
* IncomingWebhook `object`
  * conversationId `string`: The conversation where the posts go to
  * creationTime `number`: Milliseconds since 1.1.1900 when the hook was created
  * creatorId `string`: Th e user who created the webhook
  * description `string`: A short plain text to describe the webhook
  * modificationTime `number`: Milliseconds since 1.1.1900 when the hook was modified
  * name `string`: A name to identify the webhook
  * status `string`: Status may be ENABLED or DISABLED. A disabled hook cannot be used
  * tenantId `string`: The tenant where the conversation and users belong to
  * url `string`: The url where the webhokk can be used
  * userId `string`: The user who will occur as author of the posts
  * webhookId `string`: Unique id of the webhook

### IncomingWebhookSlackMessage
* IncomingWebhookSlackMessage `object`
  * mrkdwn `boolean`: Optional field. If false, textitem will not be formatted. Default is true.
  * text `string`: The text which will occur in the conversation. May contain formats like *bold* or _italic_

### Label
* Label `object`
  * labelId `string`: The unique ID of the label
  * value `string`: The clear text value

### Participant
* Participant `object`
  * creationTime `number`: Time when the participant was added to the space
  * labelIds `array`: The list of label IDs of all the labels assigned to the space.
    * items `string`
  * lastContentCreationTime `number`: Time stamp when user last created content in the space.
  * lastReadTimestamp `number`: Last time stamp when the user read content in this space.
  * modificationTime `number`: Time when the participant was changed last.
  * numberOfReplies `number`: Number of replies in the space created by this participant.
  * numberOfTopics `number`: Number of topics in the space created by this participant.
  * role `string`: The name of the role of the participant.
  * spaceId `string`: The unique ID of the space to which the participant.
  * state `string`: The name of the state of the participant;
  * tenantId `string`: The unique tenant id of the participant.
  * userId `string`: The unique user id of the participant.

### ParticipantAddResult
* ParticipantAddResult `object`

### ParticipantSearchResult
* ParticipantSearchResult `object`
  * creationTime `number`: Time when the participant was added to the space
  * firstName `string`: The first name of the participant
  * lastName `string`: The last name of the participant
  * modificationTime `number`: Time when the participant was changed last.
  * numberOfReplies `number`: Number of replies in the space created by this participant.
  * numberOfTopics `number`: Number of topics in the space created by this participant.
  * role `string`: The name of the role of the participant
  * smallImageUri `string`: The uri of the small picture of the participant
  * state `string`: The name of the state of the participant
  * tenantId `string`: the tenant id of the participant
  * userId `string`: The id of the participant

### ParticipantSearchResultLarge
* ParticipantSearchResultLarge `object`
  * creationTime `number`: Time when the participant was added to the space
  * department `string`: The department of the participant
  * firstName `string`: The first name of the participant
  * isMember `boolean`: Is the participant a member of the space
  * jobDescription `string`: The job description of the participant
  * lastContentCreationTime `number`: The last time the participant created content.
  * lastName `string`: The last name of the participant
  * modificationTime `number`: Time when the participant was changed last.
  * numberOfReplies `number`: The number of replies
  * numberOfTopics `number`: The number of topics
  * reason `string`: The reason of it all (42)
  * role `string`: The name of the role of the participant
  * smallImageUri `string`: The uri of the small picture of the participant
  * spaceId `string`: The id of the space
  * state `string`: The name of the state 
  * tenantId `string`: the tenant id of the participant
  * userId `string`: The id of the participant

### ParticipantSpaceWrapper
* ParticipantSpaceWrapper `object`

### ParticipantsImportDataResult
* ParticipantsImportDataResult `object`
  * actualNumberOfImportedParticipants `number`: Actual number of imported participants
  * estimatedImportDuration `number`: Estimated import duration
  * importEndDate `number`: Import end date
  * importFileId `string`: The file id of the import
  * importFileName `string`: The name of the import file
  * importProgress `number`: The progress of the import
  * importStartDate `number`: Import start date
  * importStatus `string`: The status of the import
  * plannedNumberOfImportedParticipants `number`: Planned number of imported participants
  * resultFileId `string`: The file id of the result file
  * resultFileName `string`: The name of the result file

### ParticipantsLike
* ParticipantsLike `object`
  * firstName `string`: The first name of the user
  * largeImageUri `string`: The large image uri of the user
  * lastName `string`: The last name of the user
  * smallImageUri `string`: The small image uri of the user
  * userId `string`: The id of the user

### ParticipantsLikeResult
* ParticipantsLikeResult `object`
  * hasMore `boolean`: More results available (true-use searchpointer for next search/false)
  * participants `array`: A list of participants who like the topic
    * items [ParticipantsLike](#participantslike)
  * searchPointer `string`: The searchpointer

### ParticipantsSearchResult
* ParticipantsSearchResult `object`
  * hasMore `boolean`: are more results available, than start another search
  * participants `array`: list of participants
    * items [ParticipantSearchResult](#participantsearchresult)
  * searchPointer `string`: pointer for stored search 

### ParticipantsSearchResultLarge
* ParticipantsSearchResultLarge `object`
  * hasMore `boolean`: are more results available, then start another search with finer query
  * participants `array`: list of participants
    * items [ParticipantSearchResultLarge](#participantsearchresultlarge)
  * searchPointer `string`: pointer for stored search 

### PinnedTopic
* PinnedTopic `object`
  * conversationId `string`: "ID of the conversation"
  * conversationItemId `string`: "ID of the pinned topic"
  * pinnedTime `number`: "The exact moment the Pinning was happening"

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

### RtcEnded
* RtcEnded `object`
  * duration `number`: The duration of the call.
  * maxNumberOfAttendees `number`: The maximum number of attendees during a call.
  * pickFromParticipant `string`: UserID of the pick from participant.

### RtcItem
* RtcItem `object`
  * ended [RtcEnded](#rtcended)
  * missed `string`: Indicates a missed call.
  * moved [RtcMoved](#rtcmoved)
  * rtcParticipants `array`: Participants of the call.
    * items [RtcParticipant](#rtcparticipant)
  * type `string`: The type of the RTC item.

### RtcMoved
* RtcMoved `object`
  * conversationId `string`: ID of the conversation moved from or to.
  * direction `string`: Moved from or to conversation.

### RtcParticipant
* RtcParticipant `object`
  * displayName `string`: The display name of the participant.
  * type `string`: The RTC type of the participant.
  * userId `string`: The ID of the participant.

### Space
* Space `object`
  * accessModeType `string`: The name of the access mode type of the space.
  * creationTime `number`: The space creation time.
  * creatorId `string`: The ID of the space creator.
  * defaultRole `string`: The name of the default role of a new participant.
  * description `string`: The space description.
  * largePictureBase64 `string`: Base64 encoded image that can be set during the creation and the update of a space.
  * largePictureContentType `string`: The content type of the image.
  * largePictureId `string`: The file id of the large version of the picture.
  * lastContentCreationTime `number`: Time stamp when the last content (topic / reply) was created within this space.
  * lastContentCreatorId `string`: User ID of the user which created the last content.
  * modificationTime `number`: The space modification time.
  * name `string`: The unique space name.
  * numberOfExternalParticipants `number`: Number of external participants in the space.
  * numberOfParticipants `number`: Number of participants in the space.
  * numberOfPinnedTopics `number`: Number of pinned topics in the space.
  * numberOfReplies `number`: Number of replies in the space.
  * numberOfTopics `number`: Number of topics in the space.
  * ownerId `string`: The ID of the space owner.
  * smallPictureBase64 `string`: Base64 encoded image that can be set during the creation and the update of a space.
  * smallPictureContentType `string`: The content type of the image.
  * smallPictureId `string`: The file id of the small version of the picture.
  * spaceId `string`: The unique space ID generated by the backend during the creation of the space.
  * status `string`: The name of the status of the space.
  * tags `array`: The list of space tags.
    * items `string`
  * tenantId `string`: The ID of the space tenant.
  * type `string`: The name of the space type.

### SpaceAttachment
* SpaceAttachment `object`
  * creationTime `number`: time this item has been created
  * creatorId `string`: the id of the creator
  * fileId `string`: the id of the field
  * fileName `string`: name of the file
  * inlineUsage `boolean`: is inline usage allowed
  * itemId `string`: id of the item
  * layout `string`: layout
  * mimeType `string`: the media type
  * modificationTime `number`: the time this item has been ben modified
  * size `number`: size of this file
  * spaceId `string`: id of the space
  * thumbnailId `string`: the id of the tumbnail

### SpaceExternalAttachment
* SpaceExternalAttachment `object`
  * attachment [SpaceAttachment](#spaceattachment)
  * downloadLocation `string`: the location of the download
  * previewLocation `string`: the location of the preview
  * shareLinkToken `string`: The share link token
  * type `string`: the type

### SpaceItem
* SpaceItem `object`
  * Status `string`: The Status of this item
  * attachments `array`: The list of attachments
    * items [SpaceAttachment](#spaceattachment)
  * complex `boolean`: Is this item complex
  * content `string`: The content of this item
  * creationTime `number`: The time this item got created
  * creatorId `string`: The Id of the creator
  * deletedBy `string`: Incase this item got deleted, the id of the deletor
  * externalAttachments `array`: A list of external attachments
    * items [SpaceExternalAttachment](#spaceexternalattachment)
  * formMetaData `string`: Incase there is FormMetaData
  * itemId `string`: the Id of this item
  * mentionedUsers `array`: A list of userIds who have been mentioned in this item
    * items `string`
  * modificationTime `number`: the time this item got modified
  * numberOfLikes `number`: The number of likes
  * previews `array`: A list of previews
    * items [SpaceItemPreview](#spaceitempreview)
  * spaceId `string`: the Id of the space containing this item
  * tenantId `string`: the Id of the tenant

### SpaceItemPreview
* SpaceItemPreview `object`
  * description `string`: The description of this preview
  * html `string`: Html code
  * imageURI `string`: The URI of the image
  * provider `string`: the provider
  * srcURL `string`: The URL of the source
  * title `string`: The title of this preview
  * type `string`: The type of this preview

### SpacePinnedTopic
* SpacePinnedTopic `object`
  * position `number`: The position of a pinned topic
  * subject `string`: The subject of a pinned topic
  * topicId `string`: The id of a pinned topic

### SpaceReply
* SpaceReply `object`
  * parentTopicId `string`: The Id of the parent topic
  * spaceItem [SpaceItem](#spaceitem)

### SpaceSearchResultDetailed
* SpaceSearchResultDetailed `object`
  * fileIds `array`: =The list of file ids
    * items `string`
  * itemIds `array`: =The list of items ids
    * items `string`
  * spaceId `string`: The id of the space
  * status `string`: The status of the search (NORESULT, ERROR, TIMEOUT, MORERESULT)

### SpaceSearchResultDetailedBack
* SpaceSearchResultDetailedBack `object`
  * resList `array`: A list of v2restspacesearchresultdetailedback containing spaceId, item ids and file ids
    * items [SpaceSearchResultDetailed](#spacesearchresultdetailed)

### SpaceTopic
* SpaceTopic `object`
  * lastContentCreationTime `number`: The last time new content was created
  * lastContentCreatorId `string`: The Id of the last content creator
  * numberOfReplies `number`: The number of replies this topic has
  * pinned `boolean`: Is this topic pinned
  * spaceItem [SpaceItem](#spaceitem)
  * subject `string`: The subject of this topic

### SpaceTopicWithReplies
* SpaceTopicWithReplies `object`
  * replies `array`: A List holding the replies for a topic
    * items [SpaceReply](#spacereply)
  * topic [SpaceTopic](#spacetopic)

### SpacesSearchTerm
* SpacesSearchTerm `object`
  * scope `string`: The scope of the search
  * searchTerm `string`: The search term

### SpacesSearchTermResult
* SpacesSearchTermResult `object`
  * resList `array`: A list of space search terms.
    * items [SpacesSearchTerm](#spacessearchterm)

### String
* String `object`

### SystemItem
* SystemItem `object`
  * affectedParticipants `array`: List off affected participants (user ID of the Circuit user) in case the item type PARTICIPANT_ADDED or PARTICIPANT_REMOVED
    * items `string`
  * newTopic `string`: Filled with the new topic of a conversation if the type of the item is CONVERSATION_RENAMED.
  * oldTopic `string`: Filled with the previous topic of a conversation if the type of the item is CONVERSATION_RENAMED.
  * type `string`: The type of the system item

### User
* User `object`
  * avatar `string`: The URL of the small avatar picture.
  * avatarLarge `string`: The URL of the large avatar picture.
  * company `string`: The name of the user's company
  * displayName `string`: The user's display name
  * emailAddress `string`: The primary email address of the user
  * emailAddresses `array`: additional email addresses of the user
    * items [UserEmailAddress](#useremailaddress)
  * firstName `string`: The first name of the user
  * jobTitle `string`: The job title of the user
  * lastName `string`: The last name of the user
  * locale `string`: The locale of the user. (E.g. en-US, de-DE)
  * phoneNumber `string`: provisioned phone number of the user
  * phoneNumbers `array`: additional phone numbers of the user
    * items [UserPhoneNumber](#userphonenumber)
  * userId `string`: The ID of the user
  * userType `string`: the type of the user

### UserEmailAddress
* UserEmailAddress `object`
  * address `string`: the email address
  * type `string`: the type of the email address

### UserPhoneNumber
* UserPhoneNumber `object`
  * phoneNumber `string`: the phone number
  * type `string`: the type of the phone number

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


