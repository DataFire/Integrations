# @datafire/circuitsandbox

Client library for REST API Version 2

## Installation and Usage
```bash
npm install --save datafire @datafire/circuitsandbox
```

```js
let datafire = require('datafire');
let circuitsandbox = require('@datafire/circuitsandbox').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

circuitsandbox.updateProfile({}).then(data => {
  console.log(data);
})
```

## Description
Circuit REST API to interact with the Circuit system.

[Learn more about the Circuit Development Community](https://www.circuit.com/web/developers/home)

## Actions
### getConversations
Gets a list of conversations and communities the authenticated user participates in.


```js
circuitsandbox.getConversations({}, context)
```

#### Parameters
* modTime (string) - The modification time of the conversation in UTC format. During the query the conversations before (<i>default</i>) or after this timestamp are returned. In case no timestamp is specified the current server time in UTC is used, i.e. the last 25 modified conversations are returned
* direction (string) - The direction of the search based on the modification time. Valid values are either BEFORE (default) or AFTER
* results (number) - The maximum number of returned results (default 25). The maximum allowed value is 100.

### getCommunityConversations
Gets a list of communities. This endpoint can be used to explore the communities the authenticated user could join.


```js
circuitsandbox.getCommunityConversations({}, context)
```

#### Parameters
* sort (string) - Defines the type of sorting for the community conversations (default is alphabetical)
* order (string) - Defines the ordering of the conversations (default is ascending)
* includeOwn (boolean) - If set to false only conversations are returned where the user is no member of, otherwise all community conversations are returned
* startIndex (number) - The index of the conversation that is the first one that has to be returned. E.g. if a request starts with startIndex 40 and results 20 the conversations 40 to 60 are returned
* results (number) - The maximum number of returned results (default 25). The maximum allowed value is 100.

### createCommunityConversation
Creates a community. Communities are open conversations that anyone in a Circuit domain (tenant) can join without having to be added by another user.


```js
circuitsandbox.createCommunityConversation({
  "topic": ""
}, context)
```

#### Parameters
* participants (array) - list of participants that will be part of this conversation, specified by the Circuit user ID or the unique email address. At least one participant needs to be added
* description (string) - An optional description for the community conversation
* topic (string) **required** - An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used)

### updateConversationCommunity
Updates the information of the given community.


```js
circuitsandbox.updateConversationCommunity({
  "convId": ""
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation which should be updated
* description (string) - An optional description for the community conversation
* topic (string) - An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used)

### joinCommunityConversation
Adds the authenticated user to the given community (i.e., allows the user to join this community). Contrary to the operation of adding a new participant, this operation can only be performed by a user who is not yet a member of the community.


```js
circuitsandbox.joinCommunityConversation({
  "convId": ""
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation which the user will join

### removeParticipantCommunity
Removes one or more participants from the given community. The last participant of a community cannot be removed. This operation can only be performed by a user who is already a member of the community.


```js
circuitsandbox.removeParticipantCommunity({
  "convId": "",
  "participants": []
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation from which the participant have to be removed
* participants (array) **required** - The IDs or the unique email addresses of the Circuit users that have to be removed

### addParticipantCommunity
Adds one or more participants to the given community. This operation can only be performed by a user who is already a member of the community.


```js
circuitsandbox.addParticipantCommunity({
  "convId": "",
  "participants": []
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation to which the participant has to be added.
* participants (array) **required** - The IDs or the unique email addresses of the Circuit users that should to be added.

### createDirectConversation
Creates a 1-to-1 conversation between the authenticated user and the user with the provided userId. In case there is already an existing 1-to-1 conversation between these users, the endpoint returns the existing conversation.


```js
circuitsandbox.createDirectConversation({
  "participant": ""
}, context)
```

#### Parameters
* participant (string) **required** - The participant that will be part of this conversation together with the creator, specified by the Circuit user ID or the unique email address

### getFavoriteConversations
Gets the conversationIds which are marked as favorites.


```js
circuitsandbox.getFavoriteConversations(null, context)
```

#### Parameters
*This action has no parameters*

### createGroupConversation
Creates a group conversation between three or more users. The authenticated user is directly added to this conversation.


```js
circuitsandbox.createGroupConversation({
  "participants": []
}, context)
```

#### Parameters
* participants (array) **required** - A list of participants that will be part of this conversation, specified by the Circuit user ID or the unique email address. At least one participant needs to be added
* topic (string) - An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used)

### updateConversationGroup
Updates the information of the given group conversation.


```js
circuitsandbox.updateConversationGroup({
  "convId": ""
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation which should be updated
* topic (string) - An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used)

### removeParticipantGroup
Removes one or more participants from the given group conversation. The last participant of a group conversation cannot be removed. This operation can only be performed on behalf of a user who is already a member of the conversation.


```js
circuitsandbox.removeParticipantGroup({
  "convId": "",
  "participants": []
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation from which the participant have to be removed
* participants (array) **required** - The IDs or the unique email addresses of the Circuit users that have to be removed

### addParticipantGroup
Adds one or more participants to the given group conversation. This operation can only be performed by a user who is already a member of the conversation.


```js
circuitsandbox.addParticipantGroup({
  "convId": "",
  "participants": []
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation to which the participant has to be added.
* participants (array) **required** - The IDs or the unique email addresses of the Circuit users that should to be added.

### getFlagItemConv
Gets a list of all the messages the authenticated user has flagged. This endpoint should be used carefully in case where the authenticated user has a lot of flagged messages.


```js
circuitsandbox.getFlagItemConv(null, context)
```

#### Parameters
*This action has no parameters*

### searchConversations
Performs a search for conversation content. A maximum of 100 conversations is returned. If you hit this limit you should refine the search term.


```js
circuitsandbox.searchConversations({
  "term": ""
}, context)
```

#### Parameters
* term (string) **required** - The search term
* includeItemIds (boolean) - not available

### getConversationbyId
Gets a conversation based on the given ID.


```js
circuitsandbox.getConversationbyId({
  "convId": ""
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation which should be updated

### getJoinDetails
Gets the conference details of the given conversation. Conference details include the URL, which is used to join the conference through a web or mobile application, as well as the dial-in phone numbers and conference PIN, which are used to join the conference by phone.


```js
circuitsandbox.getJoinDetails({
  "convId": ""
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation for which the join details should be returned

### deleteFavorite
Removes a conversation from favorites. Favorites can be displayed in a separate side tab inside of the Circuit client to have a better overview of important conversations.


```js
circuitsandbox.deleteFavorite({
  "convId": ""
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation which will be unmarked as favorite

### addFavorite
Adds a conversation to the favorites. Favorites can be displayed in a separate side tab inside of the Circuit client to have a better overview of important conversations.


```js
circuitsandbox.addFavorite({
  "convId": ""
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation which will be marked as favorite

### getConversationItems
Gets a list of conversation items.


```js
circuitsandbox.getConversationItems({
  "convId": ""
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation to which the items belong
* modTime (string) - The modification time of the item in UTC format. During the query the items before (default) or after this timestamps are returned. In case no timestamp is specified the current server time in UTC is used, i.e. the last 25 modified items are returned
* direction (string) - The direction of the search based on the modification time. Valid values are either BEFORE (default) or AFTER
* results (number) - The maximum number of returned results (default 25). The maximum allowed value is 100.

### assignLabel
Adds a label to a conversation, you can search and organize your conversations based on these labels


```js
circuitsandbox.assignLabel({
  "convId": "",
  "label": ""
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation to which the label is added
* label (string) **required** - The actual label 

### unassignLabel
Removes a label from a conversation, you can search and organize your conversations based on these labels


```js
circuitsandbox.unassignLabel({
  "convId": "",
  "labelId": ""
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation from which the label is removed
* labelId (string) **required** - not available

### addTextItem
Adds a message to the given conversation. This operation can be only performed on behalf of a user who is already a member of the conversation.


```js
circuitsandbox.addTextItem({
  "convId": ""
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation to which the new item has to be added
* content (string) - The actual content of the item, is mandatory unless an attachment is added
* attachments (array) - A comma separated list of attachment IDs from the file API.
* subject (string) - The subject (headline) of the new text item

### getFlagItem
Gets a list of all the flagged messages in the given conversation.


```js
circuitsandbox.getFlagItem({
  "convId": ""
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation to which the item belongs

### deleteTextItem
Marks a message in the given conversation as deleted. Deleted messages are still part of the conversation, but their content is no more visible. This operation can only be performed on behalf of the message's creator.


```js
circuitsandbox.deleteTextItem({
  "convId": "",
  "itemId": ""
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation to which the item belongs
* itemId (string) **required** - The ID of the item that will be deleted

### addTextItemWithParent
Adds a message to the existing item. The added message will be a child item of the message with the given itemId.


```js
circuitsandbox.addTextItemWithParent({
  "convId": "",
  "itemId": ""
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation to which the new item has to be added
* itemId (string) **required** - The ID of the item to which the new one has to be added as child
* content (string) - The actual content of the item
* attachments (array) - not available
* subject (string) - The subject (headline) of the new text item

### updateTextItem
Updates the content or subject of the existing message. Only the creator of the message is allowed to perform this operation.


```js
circuitsandbox.updateTextItem({
  "convId": "",
  "itemId": ""
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation to which the item belongs
* itemId (string) **required** - The ID of the item to update
* content (string) - The actual content of the item
* subject (string) - The subject (headline) of the new text item

### unFlagItem
Removes the flag from a given message that is posted to the given conversation.


```js
circuitsandbox.unFlagItem({
  "convId": "",
  "itemId": ""
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation to which the item belongs
* itemId (string) **required** - The ID of the item that will be flagged

### flagItem
Adds a flag to the given message in the given conversation.


```js
circuitsandbox.flagItem({
  "convId": "",
  "itemId": ""
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation to which the item belongs
* itemId (string) **required** - The ID of the item that will be flagged
* itemCreationTime (string) - The time when the item was created
* parentId (string) - The ID of the item's parent

### unlikeItem
Removes a "like" from the given message in the given conversation


```js
circuitsandbox.unlikeItem({
  "convId": "",
  "itemId": ""
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation to which the item belongs
* itemId (string) **required** - The ID of the item that will be unliked

### likeItem
Adds a "like" to the given message in the given conversation


```js
circuitsandbox.likeItem({
  "convId": "",
  "itemId": ""
}, context)
```

#### Parameters
* convId (string) **required** - The ID of the conversation to which the item belongs
* itemId (string) **required** - The ID of the item that will be liked

### oAuthGetClientIds
Gets a list of the client IDs (applications) that were created for this user.


```js
circuitsandbox.oAuthGetClientIds(null, context)
```

#### Parameters
*This action has no parameters*

### oAuthValidateAccessToken
Gets the access token for the given token ID.


```js
circuitsandbox.oAuthValidateAccessToken({
  "tokenId": ""
}, context)
```

#### Parameters
* tokenId (string) **required** - The unique id of the token to get the data for.

### searchUser
Gets a user based on an email address or username. If both parameters are defined, the email address will be used.


```js
circuitsandbox.searchUser({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - Search for a user by name

### getLabel
Returns all labels of the user that were defined either explicit or implicit via assignment to conversations.


```js
circuitsandbox.getLabel(null, context)
```

#### Parameters
*This action has no parameters*

### addLabel
Add a label to the list of user labels


```js
circuitsandbox.addLabel({
  "label": ""
}, context)
```

#### Parameters
* label (string) **required** - The label value to add

### removeLabel
Remove a label from the list of user labels


```js
circuitsandbox.removeLabel({
  "labelId": ""
}, context)
```

#### Parameters
* labelId (string) **required** - not available

### getPresence
Gets the presence status of the users whose IDs or email addresses are given.


```js
circuitsandbox.getPresence({
  "userIds": []
}, context)
```

#### Parameters
* userIds (array) **required** - A list of unique user IDs or email addresses of the users you want to query the presence state for

### setUserPresence
Updates the presence status of the authenticated user.


```js
circuitsandbox.setUserPresence({
  "state": ""
}, context)
```

#### Parameters
* state (string) **required** - The user's presence.
* dndUntil (string) - Timestamp until the DND state of the user is active. This field is mandatory when the state is set to DND.
* statusMessage (string) - An optional status message that is displayed instead of the location

### getProfile
Gets the authenticated user's profile information.


```js
circuitsandbox.getProfile(null, context)
```

#### Parameters
*This action has no parameters*

### updateProfile
Updates the user profile of the authenticated user


```js
circuitsandbox.updateProfile({}, context)
```

#### Parameters
* firstname (string) - The new firstname of the user
* lastname (string) - The new lastname of the user
* jobTitle (string) - The new job title of the user
* locale (string) - The new locale of the user. One of EN_US, DE_DE, EN_GB, ES_ES, FR_FR, IT_IT, RU_RU, ZH_HANS_CN.

### getUserById
Gets the profile information of the user with the given ID.


```js
circuitsandbox.getUserById({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The unique ID or the email address of the user to fetch

### getUserPresence
Gets the presence status of the users whose ID or email address is given.


```js
circuitsandbox.getUserPresence({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The unique ID or the email address of the user to fetch.

