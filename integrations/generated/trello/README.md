# @datafire/trello

Client library for Trello

## Installation and Usage
```bash
npm install --save datafire @datafire/trello
```

```js
let datafire = require('datafire');
let trello = require('@datafire/trello').actions;

let account = {
  api_key: "",
  api_token: "",
}
let context = new datafire.Context({
  accounts: {
    trello: account,
  }
})

trello.deleteActionsByIdAction({}, context).then(data => {
  console.log(data);
})
```

## Description
This document describes the REST API of Trello as published by Trello.com.
 - <a href='https://trello.com/docs/index.html' target='_blank'>Official Documentation</a>
 - <a href='https://trello.com/docs/api' target='_blank'>The HTML pages that were scraped in order to generate this specification.</a>

## Actions
### deleteActionsByIdAction
deleteActionsByIdAction()


```js
trello.deleteActionsByIdAction({
  "idAction": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idAction (string) **required** - idAction
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsByIdAction
getActionsByIdAction()


```js
trello.getActionsByIdAction({
  "idAction": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idAction (string) **required** - idAction
* display (string) -  true or false
* entities (string) -  true or false
* fields (string) - all or a comma-separated list of: data, date, idMemberCreator or type
* member (string) -  true or false
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* memberCreator (string) -  true or false
* memberCreator_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateActionsByIdAction
updateActionsByIdAction()


```js
trello.updateActionsByIdAction({
  "idAction": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idAction (string) **required** - idAction
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsBoardByIdAction
getActionsBoardByIdAction()


```js
trello.getActionsBoardByIdAction({
  "idAction": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idAction (string) **required** - idAction
* fields (string) - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsBoardByIdActionByField
getActionsBoardByIdActionByField()


```js
trello.getActionsBoardByIdActionByField({
  "idAction": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idAction (string) **required** - idAction
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsCardByIdAction
getActionsCardByIdAction()


```js
trello.getActionsCardByIdAction({
  "idAction": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idAction (string) **required** - idAction
* fields (string) - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsCardByIdActionByField
getActionsCardByIdActionByField()


```js
trello.getActionsCardByIdActionByField({
  "idAction": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idAction (string) **required** - idAction
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsDisplayByIdAction
getActionsDisplayByIdAction()


```js
trello.getActionsDisplayByIdAction({
  "idAction": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idAction (string) **required** - idAction
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsEntitiesByIdAction
getActionsEntitiesByIdAction()


```js
trello.getActionsEntitiesByIdAction({
  "idAction": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idAction (string) **required** - idAction
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsListByIdAction
getActionsListByIdAction()


```js
trello.getActionsListByIdAction({
  "idAction": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idAction (string) **required** - idAction
* fields (string) - all or a comma-separated list of: closed, idBoard, name, pos or subscribed
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsListByIdActionByField
getActionsListByIdActionByField()


```js
trello.getActionsListByIdActionByField({
  "idAction": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idAction (string) **required** - idAction
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsMemberByIdAction
getActionsMemberByIdAction()


```js
trello.getActionsMemberByIdAction({
  "idAction": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idAction (string) **required** - idAction
* fields (string) - all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsMemberByIdActionByField
getActionsMemberByIdActionByField()


```js
trello.getActionsMemberByIdActionByField({
  "idAction": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idAction (string) **required** - idAction
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsMemberCreatorByIdAction
getActionsMemberCreatorByIdAction()


```js
trello.getActionsMemberCreatorByIdAction({
  "idAction": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idAction (string) **required** - idAction
* fields (string) - all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsMemberCreatorByIdActionByField
getActionsMemberCreatorByIdActionByField()


```js
trello.getActionsMemberCreatorByIdActionByField({
  "idAction": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idAction (string) **required** - idAction
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsOrganizationByIdAction
getActionsOrganizationByIdAction()


```js
trello.getActionsOrganizationByIdAction({
  "idAction": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idAction (string) **required** - idAction
* fields (string) - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsOrganizationByIdActionByField
getActionsOrganizationByIdActionByField()


```js
trello.getActionsOrganizationByIdActionByField({
  "idAction": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idAction (string) **required** - idAction
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateActionsTextByIdAction
updateActionsTextByIdAction()


```js
trello.updateActionsTextByIdAction({
  "idAction": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idAction (string) **required** - idAction
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsByIdActionByField
getActionsByIdActionByField()


```js
trello.getActionsByIdActionByField({
  "idAction": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idAction (string) **required** - idAction
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBatch
getBatch()


```js
trello.getBatch({
  "urls": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* urls (string) **required** - list of API v1 GET routes, not including the version prefix
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addBoards
addBoards()


```js
trello.addBoards({
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsByIdBoard
getBoardsByIdBoard()


```js
trello.getBoardsByIdBoard({
  "idBoard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* actions (string) - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* actions_entities (string) -  true or false
* actions_display (string) -  true or false
* actions_format (string) - One of: count, list or minimal
* actions_since (string) - A date, null or lastView
* actions_limit (string) - a number from 0 to 1000
* action_fields (string) - all or a comma-separated list of: data, date, idMemberCreator or type
* action_member (string) -  true or false
* action_member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* action_memberCreator (string) -  true or false
* action_memberCreator_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* cards (string) - One of: all, closed, none, open or visible
* card_fields (string) - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* card_attachments (string) - A boolean value or &quot;cover&quot; for only card cover attachments
* card_attachment_fields (string) - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* card_checklists (string) - One of: all or none
* card_stickers (string) -  true or false
* boardStars (string) - One of: mine or none
* labels (string) - One of: all or none
* label_fields (string) - all or a comma-separated list of: color, idBoard, name or uses
* labels_limit (string) - a number from 0 to 1000
* lists (string) - One of: all, closed, none or open
* list_fields (string) - all or a comma-separated list of: closed, idBoard, name, pos or subscribed
* memberships (string) - all or a comma-separated list of: active, admin, deactivated, me or normal
* memberships_member (string) -  true or false
* memberships_member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* members (string) - One of: admins, all, none, normal or owners
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* membersInvited (string) - One of: admins, all, none, normal or owners
* membersInvited_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* checklists (string) - One of: all or none
* checklist_fields (string) - all or a comma-separated list of: idBoard, idCard, name or pos
* organization (string) -  true or false
* organization_fields (string) - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* organization_memberships (string) - all or a comma-separated list of: active, admin, deactivated, me or normal
* myPrefs (string) -  true or false
* fields (string) - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsByIdBoard
updateBoardsByIdBoard()


```js
trello.updateBoardsByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsActionsByIdBoard
getBoardsActionsByIdBoard()


```js
trello.getBoardsActionsByIdBoard({
  "idBoard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* entities (string) -  true or false
* display (string) -  true or false
* filter (string) - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* fields (string) - all or a comma-separated list of: data, date, idMemberCreator or type
* limit (string) - a number from 0 to 1000
* format (string) - One of: count, list or minimal
* since (string) - A date, null or lastView
* before (string) - A date, or null
* page (string) - Page * limit must be less than 1000
* idModels (string) - Only return actions related to these model ids
* member (string) -  true or false
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* memberCreator (string) -  true or false
* memberCreator_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsBoardStarsByIdBoard
getBoardsBoardStarsByIdBoard()


```js
trello.getBoardsBoardStarsByIdBoard({
  "idBoard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* filter (string) - One of: mine or none
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addBoardsCalendarKeyGenerateByIdBoard
addBoardsCalendarKeyGenerateByIdBoard()


```js
trello.addBoardsCalendarKeyGenerateByIdBoard({
  "idBoard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsCardsByIdBoard
getBoardsCardsByIdBoard()


```js
trello.getBoardsCardsByIdBoard({
  "idBoard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* actions (string) - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* attachments (string) - A boolean value or &quot;cover&quot; for only card cover attachments
* attachment_fields (string) - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* stickers (string) -  true or false
* members (string) -  true or false
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* checkItemStates (string) -  true or false
* checklists (string) - One of: all or none
* limit (string) - a number from 1 to 1000
* since (string) - A date, or null
* before (string) - A date, or null
* filter (string) - One of: all, closed, none, open or visible
* fields (string) - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsCardsByIdBoardByFilter
getBoardsCardsByIdBoardByFilter()


```js
trello.getBoardsCardsByIdBoardByFilter({
  "idBoard": "",
  "filter": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* filter (string) **required** - filter
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsCardsByIdBoardByIdCard
getBoardsCardsByIdBoardByIdCard()


```js
trello.getBoardsCardsByIdBoardByIdCard({
  "idBoard": "",
  "idCard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* idCard (string) **required** - idCard
* attachments (string) - A boolean value or &quot;cover&quot; for only card cover attachments
* attachment_fields (string) - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* actions (string) - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* actions_entities (string) -  true or false
* actions_display (string) -  true or false
* actions_limit (string) - a number from 0 to 1000
* action_fields (string) - all or a comma-separated list of: data, date, idMemberCreator or type
* action_memberCreator_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* members (string) -  true or false
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* checkItemStates (string) -  true or false
* checkItemState_fields (string) - all or a comma-separated list of: idCheckItem or state
* labels (string) -  true or false
* checklists (string) - One of: all or none
* checklist_fields (string) - all or a comma-separated list of: idBoard, idCard, name or pos
* fields (string) - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsChecklistsByIdBoard
getBoardsChecklistsByIdBoard()


```js
trello.getBoardsChecklistsByIdBoard({
  "idBoard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* cards (string) - One of: all, closed, none, open or visible
* card_fields (string) - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* checkItems (string) - One of: all or none
* checkItem_fields (string) - all or a comma-separated list of: name, nameData, pos, state or type
* filter (string) - One of: all or none
* fields (string) - all or a comma-separated list of: idBoard, idCard, name or pos
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addBoardsChecklistsByIdBoard
addBoardsChecklistsByIdBoard()


```js
trello.addBoardsChecklistsByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsClosedByIdBoard
updateBoardsClosedByIdBoard()


```js
trello.updateBoardsClosedByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsDeltasByIdBoard
getBoardsDeltasByIdBoard()


```js
trello.getBoardsDeltasByIdBoard({
  "idBoard": "",
  "tags": "",
  "ixLastUpdate": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* tags (string) **required** - A valid tag for subscribing
* ixLastUpdate (string) **required** - a number from -1 to Infinity
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsDescByIdBoard
updateBoardsDescByIdBoard()


```js
trello.updateBoardsDescByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addBoardsEmailKeyGenerateByIdBoard
addBoardsEmailKeyGenerateByIdBoard()


```js
trello.addBoardsEmailKeyGenerateByIdBoard({
  "idBoard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsIdOrganizationByIdBoard
updateBoardsIdOrganizationByIdBoard()


```js
trello.updateBoardsIdOrganizationByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsLabelNamesBlueByIdBoard
updateBoardsLabelNamesBlueByIdBoard()


```js
trello.updateBoardsLabelNamesBlueByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsLabelNamesGreenByIdBoard
updateBoardsLabelNamesGreenByIdBoard()


```js
trello.updateBoardsLabelNamesGreenByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsLabelNamesOrangeByIdBoard
updateBoardsLabelNamesOrangeByIdBoard()


```js
trello.updateBoardsLabelNamesOrangeByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsLabelNamesPurpleByIdBoard
updateBoardsLabelNamesPurpleByIdBoard()


```js
trello.updateBoardsLabelNamesPurpleByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsLabelNamesRedByIdBoard
updateBoardsLabelNamesRedByIdBoard()


```js
trello.updateBoardsLabelNamesRedByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsLabelNamesYellowByIdBoard
updateBoardsLabelNamesYellowByIdBoard()


```js
trello.updateBoardsLabelNamesYellowByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsLabelsByIdBoard
getBoardsLabelsByIdBoard()


```js
trello.getBoardsLabelsByIdBoard({
  "idBoard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* fields (string) - all or a comma-separated list of: color, idBoard, name or uses
* limit (string) - a number from 0 to 1000
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addBoardsLabelsByIdBoard
addBoardsLabelsByIdBoard()


```js
trello.addBoardsLabelsByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsLabelsByIdBoardByIdLabel
getBoardsLabelsByIdBoardByIdLabel()


```js
trello.getBoardsLabelsByIdBoardByIdLabel({
  "idBoard": "",
  "idLabel": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* idLabel (string) **required** - idLabel
* fields (string) - all or a comma-separated list of: color, idBoard, name or uses
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsListsByIdBoard
getBoardsListsByIdBoard()


```js
trello.getBoardsListsByIdBoard({
  "idBoard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* cards (string) - One of: all, closed, none, open or visible
* card_fields (string) - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* filter (string) - One of: all, closed, none or open
* fields (string) - all or a comma-separated list of: closed, idBoard, name, pos or subscribed
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addBoardsListsByIdBoard
addBoardsListsByIdBoard()


```js
trello.addBoardsListsByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsListsByIdBoardByFilter
getBoardsListsByIdBoardByFilter()


```js
trello.getBoardsListsByIdBoardByFilter({
  "idBoard": "",
  "filter": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* filter (string) **required** - filter
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addBoardsMarkAsViewedByIdBoard
addBoardsMarkAsViewedByIdBoard()


```js
trello.addBoardsMarkAsViewedByIdBoard({
  "idBoard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsMembersByIdBoard
getBoardsMembersByIdBoard()


```js
trello.getBoardsMembersByIdBoard({
  "idBoard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* filter (string) - One of: admins, all, none, normal or owners
* fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* activity (string) - true or false ; works for premium organizations only.
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsMembersByIdBoard
updateBoardsMembersByIdBoard()


```js
trello.updateBoardsMembersByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsMembersByIdBoardByFilter
getBoardsMembersByIdBoardByFilter()


```js
trello.getBoardsMembersByIdBoardByFilter({
  "idBoard": "",
  "filter": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* filter (string) **required** - filter
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteBoardsMembersByIdBoardByIdMember
deleteBoardsMembersByIdBoardByIdMember()


```js
trello.deleteBoardsMembersByIdBoardByIdMember({
  "idBoard": "",
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* idMember (string) **required** - idMember
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsMembersByIdBoardByIdMember
updateBoardsMembersByIdBoardByIdMember()


```js
trello.updateBoardsMembersByIdBoardByIdMember({
  "idBoard": "",
  "idMember": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* idMember (string) **required** - idMember
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsMembersCardsByIdBoardByIdMember
getBoardsMembersCardsByIdBoardByIdMember()


```js
trello.getBoardsMembersCardsByIdBoardByIdMember({
  "idBoard": "",
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* idMember (string) **required** - idMember
* actions (string) - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* attachments (string) - A boolean value or &quot;cover&quot; for only card cover attachments
* attachment_fields (string) - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* members (string) -  true or false
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* checkItemStates (string) -  true or false
* checklists (string) - One of: all or none
* board (string) -  true or false
* board_fields (string) - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* list (string) -  true or false
* list_fields (string) - all or a comma-separated list of: closed, idBoard, name, pos or subscribed
* filter (string) - One of: all, closed, none, open or visible
* fields (string) - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsMembersInvitedByIdBoard
getBoardsMembersInvitedByIdBoard()


```js
trello.getBoardsMembersInvitedByIdBoard({
  "idBoard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* fields (string) - all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsMembersInvitedByIdBoardByField
getBoardsMembersInvitedByIdBoardByField()


```js
trello.getBoardsMembersInvitedByIdBoardByField({
  "idBoard": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsMembershipsByIdBoard
getBoardsMembershipsByIdBoard()


```js
trello.getBoardsMembershipsByIdBoard({
  "idBoard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* filter (string) - all or a comma-separated list of: active, admin, deactivated, me or normal
* member (string) -  true or false
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsMembershipsByIdBoardByIdMembership
getBoardsMembershipsByIdBoardByIdMembership()


```js
trello.getBoardsMembershipsByIdBoardByIdMembership({
  "idBoard": "",
  "idMembership": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* idMembership (string) **required** - idMembership
* member (string) -  true or false
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsMembershipsByIdBoardByIdMembership
updateBoardsMembershipsByIdBoardByIdMembership()


```js
trello.updateBoardsMembershipsByIdBoardByIdMembership({
  "idBoard": "",
  "idMembership": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* idMembership (string) **required** - idMembership
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsMyPrefsByIdBoard
getBoardsMyPrefsByIdBoard()


```js
trello.getBoardsMyPrefsByIdBoard({
  "idBoard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsMyPrefsEmailPositionByIdBoard
updateBoardsMyPrefsEmailPositionByIdBoard()


```js
trello.updateBoardsMyPrefsEmailPositionByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsMyPrefsIdEmailListByIdBoard
updateBoardsMyPrefsIdEmailListByIdBoard()


```js
trello.updateBoardsMyPrefsIdEmailListByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsMyPrefsShowListGuideByIdBoard
updateBoardsMyPrefsShowListGuideByIdBoard()


```js
trello.updateBoardsMyPrefsShowListGuideByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsMyPrefsShowSidebarByIdBoard
updateBoardsMyPrefsShowSidebarByIdBoard()


```js
trello.updateBoardsMyPrefsShowSidebarByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsMyPrefsShowSidebarActivityByIdBoard
updateBoardsMyPrefsShowSidebarActivityByIdBoard()


```js
trello.updateBoardsMyPrefsShowSidebarActivityByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard
updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard()


```js
trello.updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsMyPrefsShowSidebarMembersByIdBoard
updateBoardsMyPrefsShowSidebarMembersByIdBoard()


```js
trello.updateBoardsMyPrefsShowSidebarMembersByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsNameByIdBoard
updateBoardsNameByIdBoard()


```js
trello.updateBoardsNameByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsOrganizationByIdBoard
getBoardsOrganizationByIdBoard()


```js
trello.getBoardsOrganizationByIdBoard({
  "idBoard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* fields (string) - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsOrganizationByIdBoardByField
getBoardsOrganizationByIdBoardByField()


```js
trello.getBoardsOrganizationByIdBoardByField({
  "idBoard": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addBoardsPowerUpsByIdBoard
addBoardsPowerUpsByIdBoard()


```js
trello.addBoardsPowerUpsByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteBoardsPowerUpsByIdBoardByPowerUp
deleteBoardsPowerUpsByIdBoardByPowerUp()


```js
trello.deleteBoardsPowerUpsByIdBoardByPowerUp({
  "idBoard": "",
  "powerUp": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* powerUp (string) **required** - powerUp
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsPrefsBackgroundByIdBoard
updateBoardsPrefsBackgroundByIdBoard()


```js
trello.updateBoardsPrefsBackgroundByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsPrefsCalendarFeedEnabledByIdBoard
updateBoardsPrefsCalendarFeedEnabledByIdBoard()


```js
trello.updateBoardsPrefsCalendarFeedEnabledByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsPrefsCardAgingByIdBoard
updateBoardsPrefsCardAgingByIdBoard()


```js
trello.updateBoardsPrefsCardAgingByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsPrefsCardCoversByIdBoard
updateBoardsPrefsCardCoversByIdBoard()


```js
trello.updateBoardsPrefsCardCoversByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsPrefsCommentsByIdBoard
updateBoardsPrefsCommentsByIdBoard()


```js
trello.updateBoardsPrefsCommentsByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsPrefsInvitationsByIdBoard
updateBoardsPrefsInvitationsByIdBoard()


```js
trello.updateBoardsPrefsInvitationsByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsPrefsPermissionLevelByIdBoard
updateBoardsPrefsPermissionLevelByIdBoard()


```js
trello.updateBoardsPrefsPermissionLevelByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsPrefsSelfJoinByIdBoard
updateBoardsPrefsSelfJoinByIdBoard()


```js
trello.updateBoardsPrefsSelfJoinByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsPrefsVotingByIdBoard
updateBoardsPrefsVotingByIdBoard()


```js
trello.updateBoardsPrefsVotingByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsSubscribedByIdBoard
updateBoardsSubscribedByIdBoard()


```js
trello.updateBoardsSubscribedByIdBoard({
  "idBoard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsByIdBoardByField
getBoardsByIdBoardByField()


```js
trello.getBoardsByIdBoardByField({
  "idBoard": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idBoard (string) **required** - board_id
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCards
addCards()


```js
trello.addCards({
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteCardsByIdCard
deleteCardsByIdCard()


```js
trello.deleteCardsByIdCard({
  "idCard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsByIdCard
getCardsByIdCard()


```js
trello.getCardsByIdCard({
  "idCard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* actions (string) - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* actions_entities (string) -  true or false
* actions_display (string) -  true or false
* actions_limit (string) - a number from 0 to 1000
* action_fields (string) - all or a comma-separated list of: data, date, idMemberCreator or type
* action_memberCreator_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* attachments (string) - A boolean value or &quot;cover&quot; for only card cover attachments
* attachment_fields (string) - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* members (string) -  true or false
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* membersVoted (string) -  true or false
* memberVoted_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* checkItemStates (string) -  true or false
* checkItemState_fields (string) - all or a comma-separated list of: idCheckItem or state
* checklists (string) - One of: all or none
* checklist_fields (string) - all or a comma-separated list of: idBoard, idCard, name or pos
* board (string) -  true or false
* board_fields (string) - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* list (string) -  true or false
* list_fields (string) - all or a comma-separated list of: closed, idBoard, name, pos or subscribed
* stickers (string) -  true or false
* sticker_fields (string) - all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex
* fields (string) - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsByIdCard
updateCardsByIdCard()


```js
trello.updateCardsByIdCard({
  "idCard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsActionsByIdCard
getCardsActionsByIdCard()


```js
trello.getCardsActionsByIdCard({
  "idCard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* entities (string) -  true or false
* display (string) -  true or false
* filter (string) - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* fields (string) - all or a comma-separated list of: data, date, idMemberCreator or type
* limit (string) - a number from 0 to 1000
* format (string) - One of: count, list or minimal
* since (string) - A date, null or lastView
* before (string) - A date, or null
* page (string) - Page * limit must be less than 1000
* idModels (string) - Only return actions related to these model ids
* member (string) -  true or false
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* memberCreator (string) -  true or false
* memberCreator_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsActionsCommentsByIdCard
addCardsActionsCommentsByIdCard()


```js
trello.addCardsActionsCommentsByIdCard({
  "idCard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteCardsActionsCommentsByIdCardByIdAction
This can only be done by the original author of the comment, or someone with higher permissions than the original author.


```js
trello.deleteCardsActionsCommentsByIdCardByIdAction({
  "idCard": "",
  "idAction": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* idAction (string) **required** - idAction
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsActionsCommentsByIdCardByIdAction
This can only be done by the original author of the comment.


```js
trello.updateCardsActionsCommentsByIdCardByIdAction({
  "idCard": "",
  "idAction": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* idAction (string) **required** - idAction
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsAttachmentsByIdCard
getCardsAttachmentsByIdCard()


```js
trello.getCardsAttachmentsByIdCard({
  "idCard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* fields (string) - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* filter (string) - A boolean value or &quot;cover&quot; for only card cover attachments
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsAttachmentsByIdCard
addCardsAttachmentsByIdCard()


```js
trello.addCardsAttachmentsByIdCard({
  "idCard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteCardsAttachmentsByIdCardByIdAttachment
deleteCardsAttachmentsByIdCardByIdAttachment()


```js
trello.deleteCardsAttachmentsByIdCardByIdAttachment({
  "idCard": "",
  "idAttachment": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* idAttachment (string) **required** - idAttachment
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsAttachmentsByIdCardByIdAttachment
getCardsAttachmentsByIdCardByIdAttachment()


```js
trello.getCardsAttachmentsByIdCardByIdAttachment({
  "idCard": "",
  "idAttachment": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* idAttachment (string) **required** - idAttachment
* fields (string) - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsBoardByIdCard
getCardsBoardByIdCard()


```js
trello.getCardsBoardByIdCard({
  "idCard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* fields (string) - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsBoardByIdCardByField
getCardsBoardByIdCardByField()


```js
trello.getCardsBoardByIdCardByField({
  "idCard": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsCheckItemStatesByIdCard
getCardsCheckItemStatesByIdCard()


```js
trello.getCardsCheckItemStatesByIdCard({
  "idCard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* fields (string) - all or a comma-separated list of: idCheckItem or state
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem
updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem()


```js
trello.updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem({
  "idCard": "",
  "idChecklistCurrent": "",
  "idCheckItem": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* idChecklistCurrent (string) **required** - idChecklistCurrent
* idCheckItem (string) **required** - idCheckItem
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsChecklistCheckItemByIdCardByIdChecklist
addCardsChecklistCheckItemByIdCardByIdChecklist()


```js
trello.addCardsChecklistCheckItemByIdCardByIdChecklist({
  "idCard": "",
  "idChecklist": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* idChecklist (string) **required** - idChecklist
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem
deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem()


```js
trello.deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem({
  "idCard": "",
  "idChecklist": "",
  "idCheckItem": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* idChecklist (string) **required** - idChecklist
* idCheckItem (string) **required** - idCheckItem
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem
addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem()


```js
trello.addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem({
  "idCard": "",
  "idChecklist": "",
  "idCheckItem": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* idChecklist (string) **required** - idChecklist
* idCheckItem (string) **required** - idCheckItem
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem
updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem()


```js
trello.updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem({
  "idCard": "",
  "idChecklist": "",
  "idCheckItem": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* idChecklist (string) **required** - idChecklist
* idCheckItem (string) **required** - idCheckItem
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem
updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem()


```js
trello.updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem({
  "idCard": "",
  "idChecklist": "",
  "idCheckItem": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* idChecklist (string) **required** - idChecklist
* idCheckItem (string) **required** - idCheckItem
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem
updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem()


```js
trello.updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem({
  "idCard": "",
  "idChecklist": "",
  "idCheckItem": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* idChecklist (string) **required** - idChecklist
* idCheckItem (string) **required** - idCheckItem
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsChecklistsByIdCard
getCardsChecklistsByIdCard()


```js
trello.getCardsChecklistsByIdCard({
  "idCard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* cards (string) - One of: all, closed, none, open or visible
* card_fields (string) - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* checkItems (string) - One of: all or none
* checkItem_fields (string) - all or a comma-separated list of: name, nameData, pos, state or type
* filter (string) - One of: all or none
* fields (string) - all or a comma-separated list of: idBoard, idCard, name or pos
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsChecklistsByIdCard
addCardsChecklistsByIdCard()


```js
trello.addCardsChecklistsByIdCard({
  "idCard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteCardsChecklistsByIdCardByIdChecklist
deleteCardsChecklistsByIdCardByIdChecklist()


```js
trello.deleteCardsChecklistsByIdCardByIdChecklist({
  "idCard": "",
  "idChecklist": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* idChecklist (string) **required** - idChecklist
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsClosedByIdCard
updateCardsClosedByIdCard()


```js
trello.updateCardsClosedByIdCard({
  "idCard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsDescByIdCard
updateCardsDescByIdCard()


```js
trello.updateCardsDescByIdCard({
  "idCard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsDueByIdCard
updateCardsDueByIdCard()


```js
trello.updateCardsDueByIdCard({
  "idCard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsIdAttachmentCoverByIdCard
updateCardsIdAttachmentCoverByIdCard()


```js
trello.updateCardsIdAttachmentCoverByIdCard({
  "idCard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsIdBoardByIdCard
updateCardsIdBoardByIdCard()


```js
trello.updateCardsIdBoardByIdCard({
  "idCard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsIdLabelsByIdCard
addCardsIdLabelsByIdCard()


```js
trello.addCardsIdLabelsByIdCard({
  "idCard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteCardsIdLabelsByIdCardByIdLabel
deleteCardsIdLabelsByIdCardByIdLabel()


```js
trello.deleteCardsIdLabelsByIdCardByIdLabel({
  "idCard": "",
  "idLabel": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* idLabel (string) **required** - idLabel
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsIdListByIdCard
updateCardsIdListByIdCard()


```js
trello.updateCardsIdListByIdCard({
  "idCard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsIdMembersByIdCard
addCardsIdMembersByIdCard()


```js
trello.addCardsIdMembersByIdCard({
  "idCard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsIdMembersByIdCard
updateCardsIdMembersByIdCard()


```js
trello.updateCardsIdMembersByIdCard({
  "idCard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteCardsIdMembersByIdCardByIdMember
deleteCardsIdMembersByIdCardByIdMember()


```js
trello.deleteCardsIdMembersByIdCardByIdMember({
  "idCard": "",
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* idMember (string) **required** - idMember
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsLabelsByIdCard
addCardsLabelsByIdCard()


```js
trello.addCardsLabelsByIdCard({
  "idCard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsLabelsByIdCard
updateCardsLabelsByIdCard()


```js
trello.updateCardsLabelsByIdCard({
  "idCard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteCardsLabelsByIdCardByColor
deleteCardsLabelsByIdCardByColor()


```js
trello.deleteCardsLabelsByIdCardByColor({
  "idCard": "",
  "color": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* color (string) **required** - color
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsListByIdCard
getCardsListByIdCard()


```js
trello.getCardsListByIdCard({
  "idCard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* fields (string) - all or a comma-separated list of: closed, idBoard, name, pos or subscribed
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsListByIdCardByField
getCardsListByIdCardByField()


```js
trello.getCardsListByIdCardByField({
  "idCard": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsMarkAssociatedNotificationsReadByIdCard
addCardsMarkAssociatedNotificationsReadByIdCard()


```js
trello.addCardsMarkAssociatedNotificationsReadByIdCard({
  "idCard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsMembersByIdCard
getCardsMembersByIdCard()


```js
trello.getCardsMembersByIdCard({
  "idCard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsMembersVotedByIdCard
getCardsMembersVotedByIdCard()


```js
trello.getCardsMembersVotedByIdCard({
  "idCard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsMembersVotedByIdCard
addCardsMembersVotedByIdCard()


```js
trello.addCardsMembersVotedByIdCard({
  "idCard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteCardsMembersVotedByIdCardByIdMember
deleteCardsMembersVotedByIdCardByIdMember()


```js
trello.deleteCardsMembersVotedByIdCardByIdMember({
  "idCard": "",
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* idMember (string) **required** - idMember
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsNameByIdCard
updateCardsNameByIdCard()


```js
trello.updateCardsNameByIdCard({
  "idCard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsPosByIdCard
updateCardsPosByIdCard()


```js
trello.updateCardsPosByIdCard({
  "idCard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsStickersByIdCard
getCardsStickersByIdCard()


```js
trello.getCardsStickersByIdCard({
  "idCard": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* fields (string) - all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsStickersByIdCard
addCardsStickersByIdCard()


```js
trello.addCardsStickersByIdCard({
  "idCard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteCardsStickersByIdCardByIdSticker
deleteCardsStickersByIdCardByIdSticker()


```js
trello.deleteCardsStickersByIdCardByIdSticker({
  "idCard": "",
  "idSticker": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* idSticker (string) **required** - idSticker
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsStickersByIdCardByIdSticker
getCardsStickersByIdCardByIdSticker()


```js
trello.getCardsStickersByIdCardByIdSticker({
  "idCard": "",
  "idSticker": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* idSticker (string) **required** - idSticker
* fields (string) - all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsStickersByIdCardByIdSticker
updateCardsStickersByIdCardByIdSticker()


```js
trello.updateCardsStickersByIdCardByIdSticker({
  "idCard": "",
  "idSticker": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* idSticker (string) **required** - idSticker
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsSubscribedByIdCard
updateCardsSubscribedByIdCard()


```js
trello.updateCardsSubscribedByIdCard({
  "idCard": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsByIdCardByField
getCardsByIdCardByField()


```js
trello.getCardsByIdCardByField({
  "idCard": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idCard (string) **required** - card id or shortlink
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addChecklists
addChecklists()


```js
trello.addChecklists({
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteChecklistsByIdChecklist
deleteChecklistsByIdChecklist()


```js
trello.deleteChecklistsByIdChecklist({
  "idChecklist": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idChecklist (string) **required** - idChecklist
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getChecklistsByIdChecklist
getChecklistsByIdChecklist()


```js
trello.getChecklistsByIdChecklist({
  "idChecklist": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idChecklist (string) **required** - idChecklist
* cards (string) - One of: all, closed, none, open or visible
* card_fields (string) - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* checkItems (string) - One of: all or none
* checkItem_fields (string) - all or a comma-separated list of: name, nameData, pos, state or type
* fields (string) - all or a comma-separated list of: idBoard, idCard, name or pos
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateChecklistsByIdChecklist
updateChecklistsByIdChecklist()


```js
trello.updateChecklistsByIdChecklist({
  "idChecklist": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idChecklist (string) **required** - idChecklist
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getChecklistsBoardByIdChecklist
getChecklistsBoardByIdChecklist()


```js
trello.getChecklistsBoardByIdChecklist({
  "idChecklist": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idChecklist (string) **required** - idChecklist
* fields (string) - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getChecklistsBoardByIdChecklistByField
getChecklistsBoardByIdChecklistByField()


```js
trello.getChecklistsBoardByIdChecklistByField({
  "idChecklist": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idChecklist (string) **required** - idChecklist
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getChecklistsCardsByIdChecklist
getChecklistsCardsByIdChecklist()


```js
trello.getChecklistsCardsByIdChecklist({
  "idChecklist": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idChecklist (string) **required** - idChecklist
* actions (string) - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* attachments (string) - A boolean value or &quot;cover&quot; for only card cover attachments
* attachment_fields (string) - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* stickers (string) -  true or false
* members (string) -  true or false
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* checkItemStates (string) -  true or false
* checklists (string) - One of: all or none
* limit (string) - a number from 1 to 1000
* since (string) - A date, or null
* before (string) - A date, or null
* filter (string) - One of: all, closed, none or open
* fields (string) - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getChecklistsCardsByIdChecklistByFilter
getChecklistsCardsByIdChecklistByFilter()


```js
trello.getChecklistsCardsByIdChecklistByFilter({
  "idChecklist": "",
  "filter": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idChecklist (string) **required** - idChecklist
* filter (string) **required** - filter
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getChecklistsCheckItemsByIdChecklist
getChecklistsCheckItemsByIdChecklist()


```js
trello.getChecklistsCheckItemsByIdChecklist({
  "idChecklist": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idChecklist (string) **required** - idChecklist
* filter (string) - One of: all or none
* fields (string) - all or a comma-separated list of: name, nameData, pos, state or type
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addChecklistsCheckItemsByIdChecklist
addChecklistsCheckItemsByIdChecklist()


```js
trello.addChecklistsCheckItemsByIdChecklist({
  "idChecklist": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idChecklist (string) **required** - idChecklist
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteChecklistsCheckItemsByIdChecklistByIdCheckItem
deleteChecklistsCheckItemsByIdChecklistByIdCheckItem()


```js
trello.deleteChecklistsCheckItemsByIdChecklistByIdCheckItem({
  "idChecklist": "",
  "idCheckItem": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idChecklist (string) **required** - idChecklist
* idCheckItem (string) **required** - idCheckItem
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getChecklistsCheckItemsByIdChecklistByIdCheckItem
getChecklistsCheckItemsByIdChecklistByIdCheckItem()


```js
trello.getChecklistsCheckItemsByIdChecklistByIdCheckItem({
  "idChecklist": "",
  "idCheckItem": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idChecklist (string) **required** - idChecklist
* idCheckItem (string) **required** - idCheckItem
* fields (string) - all or a comma-separated list of: name, nameData, pos, state or type
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateChecklistsIdCardByIdChecklist
updateChecklistsIdCardByIdChecklist()


```js
trello.updateChecklistsIdCardByIdChecklist({
  "idChecklist": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idChecklist (string) **required** - idChecklist
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateChecklistsNameByIdChecklist
updateChecklistsNameByIdChecklist()


```js
trello.updateChecklistsNameByIdChecklist({
  "idChecklist": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idChecklist (string) **required** - idChecklist
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateChecklistsPosByIdChecklist
updateChecklistsPosByIdChecklist()


```js
trello.updateChecklistsPosByIdChecklist({
  "idChecklist": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idChecklist (string) **required** - idChecklist
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getChecklistsByIdChecklistByField
getChecklistsByIdChecklistByField()


```js
trello.getChecklistsByIdChecklistByField({
  "idChecklist": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idChecklist (string) **required** - idChecklist
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addLabels
addLabels()


```js
trello.addLabels({
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteLabelsByIdLabel
deleteLabelsByIdLabel()


```js
trello.deleteLabelsByIdLabel({
  "idLabel": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idLabel (string) **required** - idLabel
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getLabelsByIdLabel
getLabelsByIdLabel()


```js
trello.getLabelsByIdLabel({
  "idLabel": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idLabel (string) **required** - idLabel
* fields (string) - all or a comma-separated list of: color, idBoard, name or uses
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateLabelsByIdLabel
updateLabelsByIdLabel()


```js
trello.updateLabelsByIdLabel({
  "idLabel": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idLabel (string) **required** - idLabel
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getLabelsBoardByIdLabel
getLabelsBoardByIdLabel()


```js
trello.getLabelsBoardByIdLabel({
  "idLabel": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idLabel (string) **required** - idLabel
* fields (string) - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getLabelsBoardByIdLabelByField
getLabelsBoardByIdLabelByField()


```js
trello.getLabelsBoardByIdLabelByField({
  "idLabel": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idLabel (string) **required** - idLabel
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateLabelsColorByIdLabel
updateLabelsColorByIdLabel()


```js
trello.updateLabelsColorByIdLabel({
  "idLabel": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idLabel (string) **required** - idLabel
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateLabelsNameByIdLabel
updateLabelsNameByIdLabel()


```js
trello.updateLabelsNameByIdLabel({
  "idLabel": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idLabel (string) **required** - idLabel
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addLists
addLists()


```js
trello.addLists({
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getListsByIdList
getListsByIdList()


```js
trello.getListsByIdList({
  "idList": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idList (string) **required** - idList
* cards (string) - One of: all, closed, none or open
* card_fields (string) - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* board (string) -  true or false
* board_fields (string) - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* fields (string) - all or a comma-separated list of: closed, idBoard, name, pos or subscribed
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateListsByIdList
updateListsByIdList()


```js
trello.updateListsByIdList({
  "idList": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idList (string) **required** - idList
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getListsActionsByIdList
getListsActionsByIdList()


```js
trello.getListsActionsByIdList({
  "idList": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idList (string) **required** - idList
* entities (string) -  true or false
* display (string) -  true or false
* filter (string) - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* fields (string) - all or a comma-separated list of: data, date, idMemberCreator or type
* limit (string) - a number from 0 to 1000
* format (string) - One of: count, list or minimal
* since (string) - A date, null or lastView
* before (string) - A date, or null
* page (string) - Page * limit must be less than 1000
* idModels (string) - Only return actions related to these model ids
* member (string) -  true or false
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* memberCreator (string) -  true or false
* memberCreator_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addListsArchiveAllCardsByIdList
addListsArchiveAllCardsByIdList()


```js
trello.addListsArchiveAllCardsByIdList({
  "idList": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idList (string) **required** - idList
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getListsBoardByIdList
getListsBoardByIdList()


```js
trello.getListsBoardByIdList({
  "idList": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idList (string) **required** - idList
* fields (string) - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getListsBoardByIdListByField
getListsBoardByIdListByField()


```js
trello.getListsBoardByIdListByField({
  "idList": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idList (string) **required** - idList
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getListsCardsByIdList
getListsCardsByIdList()


```js
trello.getListsCardsByIdList({
  "idList": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idList (string) **required** - idList
* actions (string) - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* attachments (string) - A boolean value or &quot;cover&quot; for only card cover attachments
* attachment_fields (string) - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* stickers (string) -  true or false
* members (string) -  true or false
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* checkItemStates (string) -  true or false
* checklists (string) - One of: all or none
* limit (string) - a number from 1 to 1000
* since (string) - A date, or null
* before (string) - A date, or null
* filter (string) - One of: all, closed, none or open
* fields (string) - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addListsCardsByIdList
addListsCardsByIdList()


```js
trello.addListsCardsByIdList({
  "idList": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idList (string) **required** - idList
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getListsCardsByIdListByFilter
getListsCardsByIdListByFilter()


```js
trello.getListsCardsByIdListByFilter({
  "idList": "",
  "filter": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idList (string) **required** - idList
* filter (string) **required** - filter
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateListsClosedByIdList
updateListsClosedByIdList()


```js
trello.updateListsClosedByIdList({
  "idList": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idList (string) **required** - idList
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateListsIdBoardByIdList
updateListsIdBoardByIdList()


```js
trello.updateListsIdBoardByIdList({
  "idList": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idList (string) **required** - idList
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addListsMoveAllCardsByIdList
addListsMoveAllCardsByIdList()


```js
trello.addListsMoveAllCardsByIdList({
  "idList": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idList (string) **required** - idList
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateListsNameByIdList
updateListsNameByIdList()


```js
trello.updateListsNameByIdList({
  "idList": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idList (string) **required** - idList
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateListsPosByIdList
updateListsPosByIdList()


```js
trello.updateListsPosByIdList({
  "idList": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idList (string) **required** - idList
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateListsSubscribedByIdList
updateListsSubscribedByIdList()


```js
trello.updateListsSubscribedByIdList({
  "idList": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idList (string) **required** - idList
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getListsByIdListByField
getListsByIdListByField()


```js
trello.getListsByIdListByField({
  "idList": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idList (string) **required** - idList
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersByIdMember
If you specify 'me' as the username, this call will respond as if you had supplied the username associated with the supplied token


```js
trello.getMembersByIdMember({
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* actions (string) - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* actions_entities (string) -  true or false
* actions_display (string) -  true or false
* actions_limit (string) - a number from 0 to 1000
* action_fields (string) - all or a comma-separated list of: data, date, idMemberCreator or type
* action_since (string) - A date, null or lastView
* action_before (string) - A date, or null
* cards (string) - One of: all, closed, none, open or visible
* card_fields (string) - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* card_members (string) -  true or false
* card_member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* card_attachments (string) - A boolean value or &quot;cover&quot; for only card cover attachments
* card_attachment_fields (string) - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* card_stickers (string) -  true or false
* boards (string) - all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned
* board_fields (string) - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* board_actions (string) - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* board_actions_entities (string) -  true or false
* board_actions_display (string) -  true or false
* board_actions_format (string) - One of: count, list or minimal
* board_actions_since (string) - A date, null or lastView
* board_actions_limit (string) - a number from 0 to 1000
* board_action_fields (string) - all or a comma-separated list of: data, date, idMemberCreator or type
* board_lists (string) - One of: all, closed, none or open
* board_memberships (string) - all or a comma-separated list of: active, admin, deactivated, me or normal
* board_organization (string) -  true or false
* board_organization_fields (string) - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* boardsInvited (string) - all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned
* boardsInvited_fields (string) - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* boardStars (string) -  true or false
* savedSearches (string) -  true or false
* organizations (string) - One of: all, members, none or public
* organization_fields (string) - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* organization_paid_account (string) -  true or false
* organizationsInvited (string) - One of: all, members, none or public
* organizationsInvited_fields (string) - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* notifications (string) - all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard
* notifications_entities (string) -  true or false
* notifications_display (string) -  true or false
* notifications_limit (string) - a number from 1 to 1000
* notification_fields (string) - all or a comma-separated list of: data, date, idMemberCreator, type or unread
* notification_memberCreator (string) -  true or false
* notification_memberCreator_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* notification_before (string) - An id, or null
* notification_since (string) - An id, or null
* tokens (string) - One of: all or none
* paid_account (string) -  true or false
* boardBackgrounds (string) - One of: all, custom, default, none or premium
* customBoardBackgrounds (string) - One of: all or none
* customStickers (string) - One of: all or none
* customEmoji (string) - One of: all or none
* fields (string) - all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersByIdMember
updateMembersByIdMember()


```js
trello.updateMembersByIdMember({
  "idMember": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersActionsByIdMember
getMembersActionsByIdMember()


```js
trello.getMembersActionsByIdMember({
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* entities (string) -  true or false
* display (string) -  true or false
* filter (string) - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* fields (string) - all or a comma-separated list of: data, date, idMemberCreator or type
* limit (string) - a number from 0 to 1000
* format (string) - One of: count, list or minimal
* since (string) - A date, null or lastView
* before (string) - A date, or null
* page (string) - Page * limit must be less than 1000
* idModels (string) - Only return actions related to these model ids
* member (string) -  true or false
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* memberCreator (string) -  true or false
* memberCreator_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addMembersAvatarByIdMember
addMembersAvatarByIdMember()


```js
trello.addMembersAvatarByIdMember({
  "idMember": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersAvatarSourceByIdMember
updateMembersAvatarSourceByIdMember()


```js
trello.updateMembersAvatarSourceByIdMember({
  "idMember": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersBioByIdMember
updateMembersBioByIdMember()


```js
trello.updateMembersBioByIdMember({
  "idMember": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersBoardBackgroundsByIdMember
getMembersBoardBackgroundsByIdMember()


```js
trello.getMembersBoardBackgroundsByIdMember({
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* filter (string) - One of: all, custom, default, none or premium
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addMembersBoardBackgroundsByIdMember
addMembersBoardBackgroundsByIdMember()


```js
trello.addMembersBoardBackgroundsByIdMember({
  "idMember": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground
deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground()


```js
trello.deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground({
  "idMember": "",
  "idBoardBackground": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* idBoardBackground (string) **required** - idBoardBackground
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersBoardBackgroundsByIdMemberByIdBoardBackground
getMembersBoardBackgroundsByIdMemberByIdBoardBackground()


```js
trello.getMembersBoardBackgroundsByIdMemberByIdBoardBackground({
  "idMember": "",
  "idBoardBackground": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* idBoardBackground (string) **required** - idBoardBackground
* fields (string) - all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersBoardBackgroundsByIdMemberByIdBoardBackground
updateMembersBoardBackgroundsByIdMemberByIdBoardBackground()


```js
trello.updateMembersBoardBackgroundsByIdMemberByIdBoardBackground({
  "idMember": "",
  "idBoardBackground": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* idBoardBackground (string) **required** - idBoardBackground
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersBoardStarsByIdMember
getMembersBoardStarsByIdMember()


```js
trello.getMembersBoardStarsByIdMember({
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addMembersBoardStarsByIdMember
addMembersBoardStarsByIdMember()


```js
trello.addMembersBoardStarsByIdMember({
  "idMember": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteMembersBoardStarsByIdMemberByIdBoardStar
deleteMembersBoardStarsByIdMemberByIdBoardStar()


```js
trello.deleteMembersBoardStarsByIdMemberByIdBoardStar({
  "idMember": "",
  "idBoardStar": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* idBoardStar (string) **required** - idBoardStar
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersBoardStarsByIdMemberByIdBoardStar
getMembersBoardStarsByIdMemberByIdBoardStar()


```js
trello.getMembersBoardStarsByIdMemberByIdBoardStar({
  "idMember": "",
  "idBoardStar": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* idBoardStar (string) **required** - idBoardStar
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersBoardStarsByIdMemberByIdBoardStar
updateMembersBoardStarsByIdMemberByIdBoardStar()


```js
trello.updateMembersBoardStarsByIdMemberByIdBoardStar({
  "idMember": "",
  "idBoardStar": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* idBoardStar (string) **required** - idBoardStar
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar
updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar()


```js
trello.updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar({
  "idMember": "",
  "idBoardStar": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* idBoardStar (string) **required** - idBoardStar
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersBoardStarsPosByIdMemberByIdBoardStar
updateMembersBoardStarsPosByIdMemberByIdBoardStar()


```js
trello.updateMembersBoardStarsPosByIdMemberByIdBoardStar({
  "idMember": "",
  "idBoardStar": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* idBoardStar (string) **required** - idBoardStar
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersBoardsByIdMember
getMembersBoardsByIdMember()


```js
trello.getMembersBoardsByIdMember({
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* filter (string) - all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned
* fields (string) - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* actions (string) - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* actions_entities (string) -  true or false
* actions_limit (string) - a number from 0 to 1000
* actions_format (string) - One of: count, list or minimal
* actions_since (string) - A date, null or lastView
* action_fields (string) - all or a comma-separated list of: data, date, idMemberCreator or type
* memberships (string) - all or a comma-separated list of: active, admin, deactivated, me or normal
* organization (string) -  true or false
* organization_fields (string) - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* lists (string) - One of: all, closed, none or open
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersBoardsByIdMemberByFilter
getMembersBoardsByIdMemberByFilter()


```js
trello.getMembersBoardsByIdMemberByFilter({
  "idMember": "",
  "filter": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* filter (string) **required** - filter
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersBoardsInvitedByIdMember
getMembersBoardsInvitedByIdMember()


```js
trello.getMembersBoardsInvitedByIdMember({
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* fields (string) - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersBoardsInvitedByIdMemberByField
getMembersBoardsInvitedByIdMemberByField()


```js
trello.getMembersBoardsInvitedByIdMemberByField({
  "idMember": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersCardsByIdMember
getMembersCardsByIdMember()


```js
trello.getMembersCardsByIdMember({
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* actions (string) - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* attachments (string) - A boolean value or &quot;cover&quot; for only card cover attachments
* attachment_fields (string) - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* stickers (string) -  true or false
* members (string) -  true or false
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* checkItemStates (string) -  true or false
* checklists (string) - One of: all or none
* limit (string) - a number from 1 to 1000
* since (string) - A date, or null
* before (string) - A date, or null
* filter (string) - One of: all, closed, none, open or visible
* fields (string) - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersCardsByIdMemberByFilter
getMembersCardsByIdMemberByFilter()


```js
trello.getMembersCardsByIdMemberByFilter({
  "idMember": "",
  "filter": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* filter (string) **required** - filter
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersCustomBoardBackgroundsByIdMember
getMembersCustomBoardBackgroundsByIdMember()


```js
trello.getMembersCustomBoardBackgroundsByIdMember({
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* filter (string) - One of: all or none
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addMembersCustomBoardBackgroundsByIdMember
addMembersCustomBoardBackgroundsByIdMember()


```js
trello.addMembersCustomBoardBackgroundsByIdMember({
  "idMember": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground
deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()


```js
trello.deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground({
  "idMember": "",
  "idBoardBackground": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* idBoardBackground (string) **required** - idBoardBackground
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground
getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()


```js
trello.getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground({
  "idMember": "",
  "idBoardBackground": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* idBoardBackground (string) **required** - idBoardBackground
* fields (string) - all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground
updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()


```js
trello.updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground({
  "idMember": "",
  "idBoardBackground": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* idBoardBackground (string) **required** - idBoardBackground
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersCustomEmojiByIdMember
This gets the list of all of the user’s uploaded emoji


```js
trello.getMembersCustomEmojiByIdMember({
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* filter (string) - One of: all or none
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addMembersCustomEmojiByIdMember
addMembersCustomEmojiByIdMember()


```js
trello.addMembersCustomEmojiByIdMember({
  "idMember": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersCustomEmojiByIdMemberByIdCustomEmoji
getMembersCustomEmojiByIdMemberByIdCustomEmoji()


```js
trello.getMembersCustomEmojiByIdMemberByIdCustomEmoji({
  "idMember": "",
  "idCustomEmoji": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* idCustomEmoji (string) **required** - idCustomEmoji
* fields (string) - all or a comma-separated list of: name or url
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersCustomStickersByIdMember
This gets a list of all of the user’s uploaded stickers


```js
trello.getMembersCustomStickersByIdMember({
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* filter (string) - One of: all or none
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addMembersCustomStickersByIdMember
addMembersCustomStickersByIdMember()


```js
trello.addMembersCustomStickersByIdMember({
  "idMember": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteMembersCustomStickersByIdMemberByIdCustomSticker
deleteMembersCustomStickersByIdMemberByIdCustomSticker()


```js
trello.deleteMembersCustomStickersByIdMemberByIdCustomSticker({
  "idMember": "",
  "idCustomSticker": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* idCustomSticker (string) **required** - idCustomSticker
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersCustomStickersByIdMemberByIdCustomSticker
getMembersCustomStickersByIdMemberByIdCustomSticker()


```js
trello.getMembersCustomStickersByIdMemberByIdCustomSticker({
  "idMember": "",
  "idCustomSticker": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* idCustomSticker (string) **required** - idCustomSticker
* fields (string) - all or a comma-separated list of: scaled or url
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersDeltasByIdMember
getMembersDeltasByIdMember()


```js
trello.getMembersDeltasByIdMember({
  "idMember": "",
  "tags": "",
  "ixLastUpdate": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* tags (string) **required** - A valid tag for subscribing
* ixLastUpdate (string) **required** - a number from -1 to Infinity
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersFullNameByIdMember
updateMembersFullNameByIdMember()


```js
trello.updateMembersFullNameByIdMember({
  "idMember": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersInitialsByIdMember
updateMembersInitialsByIdMember()


```js
trello.updateMembersInitialsByIdMember({
  "idMember": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersNotificationsByIdMember
You can only read the notifications for the member associated with the supplied token


```js
trello.getMembersNotificationsByIdMember({
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* entities (string) -  true or false
* display (string) -  true or false
* filter (string) - all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard
* read_filter (string) - One of: all, read or unread
* fields (string) - all or a comma-separated list of: data, date, idMemberCreator, type or unread
* limit (string) - a number from 1 to 1000
* page (string) - a number from 0 to 100
* before (string) - An id, or null
* since (string) - An id, or null
* memberCreator (string) -  true or false
* memberCreator_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersNotificationsByIdMemberByFilter
getMembersNotificationsByIdMemberByFilter()


```js
trello.getMembersNotificationsByIdMemberByFilter({
  "idMember": "",
  "filter": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* filter (string) **required** - filter
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addMembersOneTimeMessagesDismissedByIdMember
addMembersOneTimeMessagesDismissedByIdMember()


```js
trello.addMembersOneTimeMessagesDismissedByIdMember({
  "idMember": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersOrganizationsByIdMember
getMembersOrganizationsByIdMember()


```js
trello.getMembersOrganizationsByIdMember({
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* filter (string) - One of: all, members, none or public
* fields (string) - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* paid_account (string) -  true or false
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersOrganizationsByIdMemberByFilter
getMembersOrganizationsByIdMemberByFilter()


```js
trello.getMembersOrganizationsByIdMemberByFilter({
  "idMember": "",
  "filter": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* filter (string) **required** - filter
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersOrganizationsInvitedByIdMember
getMembersOrganizationsInvitedByIdMember()


```js
trello.getMembersOrganizationsInvitedByIdMember({
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* fields (string) - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersOrganizationsInvitedByIdMemberByField
getMembersOrganizationsInvitedByIdMemberByField()


```js
trello.getMembersOrganizationsInvitedByIdMemberByField({
  "idMember": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersPrefsColorBlindByIdMember
updateMembersPrefsColorBlindByIdMember()


```js
trello.updateMembersPrefsColorBlindByIdMember({
  "idMember": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersPrefsLocaleByIdMember
updateMembersPrefsLocaleByIdMember()


```js
trello.updateMembersPrefsLocaleByIdMember({
  "idMember": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersPrefsMinutesBetweenSummariesByIdMember
updateMembersPrefsMinutesBetweenSummariesByIdMember()


```js
trello.updateMembersPrefsMinutesBetweenSummariesByIdMember({
  "idMember": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersSavedSearchesByIdMember
getMembersSavedSearchesByIdMember()


```js
trello.getMembersSavedSearchesByIdMember({
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addMembersSavedSearchesByIdMember
addMembersSavedSearchesByIdMember()


```js
trello.addMembersSavedSearchesByIdMember({
  "idMember": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteMembersSavedSearchesByIdMemberByIdSavedSearch
deleteMembersSavedSearchesByIdMemberByIdSavedSearch()


```js
trello.deleteMembersSavedSearchesByIdMemberByIdSavedSearch({
  "idMember": "",
  "idSavedSearch": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* idSavedSearch (string) **required** - idSavedSearch
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersSavedSearchesByIdMemberByIdSavedSearch
getMembersSavedSearchesByIdMemberByIdSavedSearch()


```js
trello.getMembersSavedSearchesByIdMemberByIdSavedSearch({
  "idMember": "",
  "idSavedSearch": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* idSavedSearch (string) **required** - idSavedSearch
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersSavedSearchesByIdMemberByIdSavedSearch
updateMembersSavedSearchesByIdMemberByIdSavedSearch()


```js
trello.updateMembersSavedSearchesByIdMemberByIdSavedSearch({
  "idMember": "",
  "idSavedSearch": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* idSavedSearch (string) **required** - idSavedSearch
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersSavedSearchesNameByIdMemberByIdSavedSearch
updateMembersSavedSearchesNameByIdMemberByIdSavedSearch()


```js
trello.updateMembersSavedSearchesNameByIdMemberByIdSavedSearch({
  "idMember": "",
  "idSavedSearch": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* idSavedSearch (string) **required** - idSavedSearch
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersSavedSearchesPosByIdMemberByIdSavedSearch
updateMembersSavedSearchesPosByIdMemberByIdSavedSearch()


```js
trello.updateMembersSavedSearchesPosByIdMemberByIdSavedSearch({
  "idMember": "",
  "idSavedSearch": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* idSavedSearch (string) **required** - idSavedSearch
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch
updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch()


```js
trello.updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch({
  "idMember": "",
  "idSavedSearch": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* idSavedSearch (string) **required** - idSavedSearch
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersTokensByIdMember
getMembersTokensByIdMember()


```js
trello.getMembersTokensByIdMember({
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* filter (string) - One of: all or none
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersUsernameByIdMember
updateMembersUsernameByIdMember()


```js
trello.updateMembersUsernameByIdMember({
  "idMember": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersByIdMemberByField
getMembersByIdMemberByField()


```js
trello.getMembersByIdMemberByField({
  "idMember": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idMember (string) **required** - idMember or username
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addNotificationsAllRead
addNotificationsAllRead()


```js
trello.addNotificationsAllRead({
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsByIdNotification
getNotificationsByIdNotification()


```js
trello.getNotificationsByIdNotification({
  "idNotification": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idNotification (string) **required** - idNotification
* display (string) -  true or false
* entities (string) -  true or false
* fields (string) - all or a comma-separated list of: data, date, idMemberCreator, type or unread
* memberCreator (string) -  true or false
* memberCreator_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* board (string) -  true or false
* board_fields (string) - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* list (string) -  true or false
* card (string) -  true or false
* card_fields (string) - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* organization (string) -  true or false
* organization_fields (string) - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* member (string) -  true or false
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateNotificationsByIdNotification
updateNotificationsByIdNotification()


```js
trello.updateNotificationsByIdNotification({
  "idNotification": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idNotification (string) **required** - idNotification
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsBoardByIdNotification
getNotificationsBoardByIdNotification()


```js
trello.getNotificationsBoardByIdNotification({
  "idNotification": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idNotification (string) **required** - idNotification
* fields (string) - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsBoardByIdNotificationByField
getNotificationsBoardByIdNotificationByField()


```js
trello.getNotificationsBoardByIdNotificationByField({
  "idNotification": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idNotification (string) **required** - idNotification
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsCardByIdNotification
getNotificationsCardByIdNotification()


```js
trello.getNotificationsCardByIdNotification({
  "idNotification": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idNotification (string) **required** - idNotification
* fields (string) - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsCardByIdNotificationByField
getNotificationsCardByIdNotificationByField()


```js
trello.getNotificationsCardByIdNotificationByField({
  "idNotification": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idNotification (string) **required** - idNotification
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsDisplayByIdNotification
getNotificationsDisplayByIdNotification()


```js
trello.getNotificationsDisplayByIdNotification({
  "idNotification": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idNotification (string) **required** - idNotification
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsEntitiesByIdNotification
getNotificationsEntitiesByIdNotification()


```js
trello.getNotificationsEntitiesByIdNotification({
  "idNotification": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idNotification (string) **required** - idNotification
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsListByIdNotification
getNotificationsListByIdNotification()


```js
trello.getNotificationsListByIdNotification({
  "idNotification": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idNotification (string) **required** - idNotification
* fields (string) - all or a comma-separated list of: closed, idBoard, name, pos or subscribed
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsListByIdNotificationByField
getNotificationsListByIdNotificationByField()


```js
trello.getNotificationsListByIdNotificationByField({
  "idNotification": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idNotification (string) **required** - idNotification
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsMemberByIdNotification
getNotificationsMemberByIdNotification()


```js
trello.getNotificationsMemberByIdNotification({
  "idNotification": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idNotification (string) **required** - idNotification
* fields (string) - all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsMemberByIdNotificationByField
getNotificationsMemberByIdNotificationByField()


```js
trello.getNotificationsMemberByIdNotificationByField({
  "idNotification": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idNotification (string) **required** - idNotification
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsMemberCreatorByIdNotification
getNotificationsMemberCreatorByIdNotification()


```js
trello.getNotificationsMemberCreatorByIdNotification({
  "idNotification": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idNotification (string) **required** - idNotification
* fields (string) - all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsMemberCreatorByIdNotificationByField
getNotificationsMemberCreatorByIdNotificationByField()


```js
trello.getNotificationsMemberCreatorByIdNotificationByField({
  "idNotification": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idNotification (string) **required** - idNotification
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsOrganizationByIdNotification
getNotificationsOrganizationByIdNotification()


```js
trello.getNotificationsOrganizationByIdNotification({
  "idNotification": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idNotification (string) **required** - idNotification
* fields (string) - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsOrganizationByIdNotificationByField
getNotificationsOrganizationByIdNotificationByField()


```js
trello.getNotificationsOrganizationByIdNotificationByField({
  "idNotification": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idNotification (string) **required** - idNotification
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateNotificationsUnreadByIdNotification
updateNotificationsUnreadByIdNotification()


```js
trello.updateNotificationsUnreadByIdNotification({
  "idNotification": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idNotification (string) **required** - idNotification
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsByIdNotificationByField
getNotificationsByIdNotificationByField()


```js
trello.getNotificationsByIdNotificationByField({
  "idNotification": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idNotification (string) **required** - idNotification
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addOrganizations
addOrganizations()


```js
trello.addOrganizations({
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteOrganizationsByIdOrg
deleteOrganizationsByIdOrg()


```js
trello.deleteOrganizationsByIdOrg({
  "idOrg": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsByIdOrg
getOrganizationsByIdOrg()


```js
trello.getOrganizationsByIdOrg({
  "idOrg": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* actions (string) - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* actions_entities (string) -  true or false
* actions_display (string) -  true or false
* actions_limit (string) - a number from 0 to 1000
* action_fields (string) - all or a comma-separated list of: data, date, idMemberCreator or type
* memberships (string) - all or a comma-separated list of: active, admin, deactivated, me or normal
* memberships_member (string) -  true or false
* memberships_member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* members (string) - One of: admins, all, none, normal or owners
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* member_activity (string) - true or false ; works for premium organizations only.
* membersInvited (string) - One of: admins, all, none, normal or owners
* membersInvited_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* boards (string) - all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned
* board_fields (string) - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* board_actions (string) - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* board_actions_entities (string) -  true or false
* board_actions_display (string) -  true or false
* board_actions_format (string) - One of: count, list or minimal
* board_actions_since (string) - A date, null or lastView
* board_actions_limit (string) - a number from 0 to 1000
* board_action_fields (string) - all or a comma-separated list of: data, date, idMemberCreator or type
* board_lists (string) - One of: all, closed, none or open
* paid_account (string) -  true or false
* fields (string) - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsByIdOrg
updateOrganizationsByIdOrg()


```js
trello.updateOrganizationsByIdOrg({
  "idOrg": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsActionsByIdOrg
getOrganizationsActionsByIdOrg()


```js
trello.getOrganizationsActionsByIdOrg({
  "idOrg": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* entities (string) -  true or false
* display (string) -  true or false
* filter (string) - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* fields (string) - all or a comma-separated list of: data, date, idMemberCreator or type
* limit (string) - a number from 0 to 1000
* format (string) - One of: count, list or minimal
* since (string) - A date, null or lastView
* before (string) - A date, or null
* page (string) - Page * limit must be less than 1000
* idModels (string) - Only return actions related to these model ids
* member (string) -  true or false
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* memberCreator (string) -  true or false
* memberCreator_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsBoardsByIdOrg
getOrganizationsBoardsByIdOrg()


```js
trello.getOrganizationsBoardsByIdOrg({
  "idOrg": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* filter (string) - all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned
* fields (string) - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* actions (string) - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* actions_entities (string) -  true or false
* actions_limit (string) - a number from 0 to 1000
* actions_format (string) - One of: count, list or minimal
* actions_since (string) - A date, null or lastView
* action_fields (string) - all or a comma-separated list of: data, date, idMemberCreator or type
* memberships (string) - all or a comma-separated list of: active, admin, deactivated, me or normal
* organization (string) -  true or false
* organization_fields (string) - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* lists (string) - One of: all, closed, none or open
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsBoardsByIdOrgByFilter
getOrganizationsBoardsByIdOrgByFilter()


```js
trello.getOrganizationsBoardsByIdOrgByFilter({
  "idOrg": "",
  "filter": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* filter (string) **required** - filter
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsDeltasByIdOrg
getOrganizationsDeltasByIdOrg()


```js
trello.getOrganizationsDeltasByIdOrg({
  "idOrg": "",
  "tags": "",
  "ixLastUpdate": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* tags (string) **required** - A valid tag for subscribing
* ixLastUpdate (string) **required** - a number from -1 to Infinity
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsDescByIdOrg
updateOrganizationsDescByIdOrg()


```js
trello.updateOrganizationsDescByIdOrg({
  "idOrg": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsDisplayNameByIdOrg
updateOrganizationsDisplayNameByIdOrg()


```js
trello.updateOrganizationsDisplayNameByIdOrg({
  "idOrg": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteOrganizationsLogoByIdOrg
deleteOrganizationsLogoByIdOrg()


```js
trello.deleteOrganizationsLogoByIdOrg({
  "idOrg": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addOrganizationsLogoByIdOrg
addOrganizationsLogoByIdOrg()


```js
trello.addOrganizationsLogoByIdOrg({
  "idOrg": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsMembersByIdOrg
getOrganizationsMembersByIdOrg()


```js
trello.getOrganizationsMembersByIdOrg({
  "idOrg": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* filter (string) - One of: admins, all, none, normal or owners
* fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* activity (string) - true or false ; works for premium organizations only.
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsMembersByIdOrg
updateOrganizationsMembersByIdOrg()


```js
trello.updateOrganizationsMembersByIdOrg({
  "idOrg": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsMembersByIdOrgByFilter
getOrganizationsMembersByIdOrgByFilter()


```js
trello.getOrganizationsMembersByIdOrgByFilter({
  "idOrg": "",
  "filter": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* filter (string) **required** - filter
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteOrganizationsMembersByIdOrgByIdMember
deleteOrganizationsMembersByIdOrgByIdMember()


```js
trello.deleteOrganizationsMembersByIdOrgByIdMember({
  "idOrg": "",
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* idMember (string) **required** - idMember
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsMembersByIdOrgByIdMember
updateOrganizationsMembersByIdOrgByIdMember()


```js
trello.updateOrganizationsMembersByIdOrgByIdMember({
  "idOrg": "",
  "idMember": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* idMember (string) **required** - idMember
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteOrganizationsMembersAllByIdOrgByIdMember
deleteOrganizationsMembersAllByIdOrgByIdMember()


```js
trello.deleteOrganizationsMembersAllByIdOrgByIdMember({
  "idOrg": "",
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* idMember (string) **required** - idMember
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsMembersCardsByIdOrgByIdMember
getOrganizationsMembersCardsByIdOrgByIdMember()


```js
trello.getOrganizationsMembersCardsByIdOrgByIdMember({
  "idOrg": "",
  "idMember": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* idMember (string) **required** - idMember
* actions (string) - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* attachments (string) - A boolean value or &quot;cover&quot; for only card cover attachments
* attachment_fields (string) - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* members (string) -  true or false
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* checkItemStates (string) -  true or false
* checklists (string) - One of: all or none
* board (string) -  true or false
* board_fields (string) - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* list (string) -  true or false
* list_fields (string) - all or a comma-separated list of: closed, idBoard, name, pos or subscribed
* filter (string) - One of: all, closed, none, open or visible
* fields (string) - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsMembersDeactivatedByIdOrgByIdMember
updateOrganizationsMembersDeactivatedByIdOrgByIdMember()


```js
trello.updateOrganizationsMembersDeactivatedByIdOrgByIdMember({
  "idOrg": "",
  "idMember": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* idMember (string) **required** - idMember
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsMembersInvitedByIdOrg
getOrganizationsMembersInvitedByIdOrg()


```js
trello.getOrganizationsMembersInvitedByIdOrg({
  "idOrg": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* fields (string) - all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsMembersInvitedByIdOrgByField
getOrganizationsMembersInvitedByIdOrgByField()


```js
trello.getOrganizationsMembersInvitedByIdOrgByField({
  "idOrg": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsMembershipsByIdOrg
getOrganizationsMembershipsByIdOrg()


```js
trello.getOrganizationsMembershipsByIdOrg({
  "idOrg": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* filter (string) - all or a comma-separated list of: active, admin, deactivated, me or normal
* member (string) -  true or false
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsMembershipsByIdOrgByIdMembership
getOrganizationsMembershipsByIdOrgByIdMembership()


```js
trello.getOrganizationsMembershipsByIdOrgByIdMembership({
  "idOrg": "",
  "idMembership": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* idMembership (string) **required** - idMembership
* member (string) -  true or false
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsMembershipsByIdOrgByIdMembership
updateOrganizationsMembershipsByIdOrgByIdMembership()


```js
trello.updateOrganizationsMembershipsByIdOrgByIdMembership({
  "idOrg": "",
  "idMembership": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* idMembership (string) **required** - idMembership
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsNameByIdOrg
updateOrganizationsNameByIdOrg()


```js
trello.updateOrganizationsNameByIdOrg({
  "idOrg": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteOrganizationsPrefsAssociatedDomainByIdOrg
deleteOrganizationsPrefsAssociatedDomainByIdOrg()


```js
trello.deleteOrganizationsPrefsAssociatedDomainByIdOrg({
  "idOrg": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsPrefsAssociatedDomainByIdOrg
updateOrganizationsPrefsAssociatedDomainByIdOrg()


```js
trello.updateOrganizationsPrefsAssociatedDomainByIdOrg({
  "idOrg": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg
updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg()


```js
trello.updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg({
  "idOrg": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg
updateOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg()


```js
trello.updateOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg({
  "idOrg": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg
updateOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg()


```js
trello.updateOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg({
  "idOrg": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsPrefsExternalMembersDisabledByIdOrg
updateOrganizationsPrefsExternalMembersDisabledByIdOrg()


```js
trello.updateOrganizationsPrefsExternalMembersDisabledByIdOrg({
  "idOrg": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsPrefsGoogleAppsVersionByIdOrg
updateOrganizationsPrefsGoogleAppsVersionByIdOrg()


```js
trello.updateOrganizationsPrefsGoogleAppsVersionByIdOrg({
  "idOrg": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteOrganizationsPrefsOrgInviteRestrictByIdOrg
deleteOrganizationsPrefsOrgInviteRestrictByIdOrg()


```js
trello.deleteOrganizationsPrefsOrgInviteRestrictByIdOrg({
  "idOrg": "",
  "value": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* value (string) **required** - An email address with optional expansion tokens
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsPrefsOrgInviteRestrictByIdOrg
updateOrganizationsPrefsOrgInviteRestrictByIdOrg()


```js
trello.updateOrganizationsPrefsOrgInviteRestrictByIdOrg({
  "idOrg": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsPrefsPermissionLevelByIdOrg
updateOrganizationsPrefsPermissionLevelByIdOrg()


```js
trello.updateOrganizationsPrefsPermissionLevelByIdOrg({
  "idOrg": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsWebsiteByIdOrg
updateOrganizationsWebsiteByIdOrg()


```js
trello.updateOrganizationsWebsiteByIdOrg({
  "idOrg": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsByIdOrgByField
getOrganizationsByIdOrgByField()


```js
trello.getOrganizationsByIdOrgByField({
  "idOrg": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idOrg (string) **required** - idOrg or name
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getSearch
getSearch()


```js
trello.getSearch({
  "query": "",
  "idOrganizations": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* query (string) **required** - a string with a length from 1 to 16384
* idBoards (string) - A comma-separated list of objectIds, 24-character hex strings
* idOrganizations (string) **required** - A comma-separated list of objectIds, 24-character hex strings
* idCards (string) - A comma-separated list of objectIds, 24-character hex strings
* modelTypes (string) - all or a comma-separated list of: actions, boards, cards, members or organizations
* board_fields (string) - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* boards_limit (string) - a number from 1 to 1000
* card_fields (string) - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* cards_limit (string) - a number from 1 to 1000
* cards_page (string) - a number from 0 to 100
* card_board (string) -  true or false
* card_list (string) -  true or false
* card_members (string) -  true or false
* card_stickers (string) -  true or false
* card_attachments (string) - A boolean value or &quot;cover&quot; for only card cover attachments
* organization_fields (string) - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* organizations_limit (string) - a number from 1 to 1000
* member_fields (string) - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* members_limit (string) - a number from 1 to 1000
* partial (string) -  true or false
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getSearchMembers
getSearchMembers()


```js
trello.getSearchMembers({
  "query": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* query (string) **required** - a string with a length from 1 to 16384
* limit (string) - a number from 1 to 20
* idBoard (string) - An id, or null
* idOrganization (string) - An id, or null
* onlyOrgMembers (string) - A boolean
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addSessions
addSessions()


```js
trello.addSessions({
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getSessionsSocket
This is the route for WebSocket requests.  See the socket API reference for a description of WebSocket usage.


```js
trello.getSessionsSocket({
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateSessionsByIdSession
updateSessionsByIdSession()


```js
trello.updateSessionsByIdSession({
  "idSession": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idSession (string) **required** - idSession
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateSessionsStatusByIdSession
updateSessionsStatusByIdSession()


```js
trello.updateSessionsStatusByIdSession({
  "idSession": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idSession (string) **required** - idSession
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteTokensByToken
deleteTokensByToken()


```js
trello.deleteTokensByToken({
  "token": "",
  "key": "",
  "token_query": ""
}, context)
```

#### Parameters
* token (string) **required** - token
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token_query (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getTokensByToken
getTokensByToken()


```js
trello.getTokensByToken({
  "token": "",
  "key": "",
  "token_query": ""
}, context)
```

#### Parameters
* token (string) **required** - token
* fields (string) - all or a comma-separated list of: dateCreated, dateExpires, idMember, identifier or permissions
* webhooks (string) -  true or false
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token_query (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getTokensMemberByToken
getTokensMemberByToken()


```js
trello.getTokensMemberByToken({
  "token": "",
  "key": "",
  "token_query": ""
}, context)
```

#### Parameters
* token (string) **required** - token
* fields (string) - all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token_query (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getTokensMemberByTokenByField
getTokensMemberByTokenByField()


```js
trello.getTokensMemberByTokenByField({
  "token": "",
  "field": "",
  "key": "",
  "token_query": ""
}, context)
```

#### Parameters
* token (string) **required** - token
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token_query (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getTokensWebhooksByToken
getTokensWebhooksByToken()


```js
trello.getTokensWebhooksByToken({
  "token": "",
  "key": "",
  "token_query": ""
}, context)
```

#### Parameters
* token (string) **required** - token
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token_query (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addTokensWebhooksByToken
addTokensWebhooksByToken()


```js
trello.addTokensWebhooksByToken({
  "token": "",
  "body": {},
  "key": "",
  "token_query": ""
}, context)
```

#### Parameters
* token (string) **required** - token
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token_query (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateTokensWebhooksByToken
updateTokensWebhooksByToken()


```js
trello.updateTokensWebhooksByToken({
  "token": "",
  "body": {},
  "key": "",
  "token_query": ""
}, context)
```

#### Parameters
* token (string) **required** - token
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token_query (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteTokensWebhooksByTokenByIdWebhook
deleteTokensWebhooksByTokenByIdWebhook()


```js
trello.deleteTokensWebhooksByTokenByIdWebhook({
  "token": "",
  "idWebhook": "",
  "key": "",
  "token_query": ""
}, context)
```

#### Parameters
* token (string) **required** - token
* idWebhook (string) **required** - idWebhook
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token_query (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getTokensWebhooksByTokenByIdWebhook
getTokensWebhooksByTokenByIdWebhook()


```js
trello.getTokensWebhooksByTokenByIdWebhook({
  "token": "",
  "idWebhook": "",
  "key": "",
  "token_query": ""
}, context)
```

#### Parameters
* token (string) **required** - token
* idWebhook (string) **required** - idWebhook
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token_query (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getTokensByTokenByField
getTokensByTokenByField()


```js
trello.getTokensByTokenByField({
  "token": "",
  "field": "",
  "key": "",
  "token_query": ""
}, context)
```

#### Parameters
* token (string) **required** - token
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token_query (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getTypesById
getTypesById()


```js
trello.getTypesById({
  "id": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* id (string) **required** - id
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addWebhooks
addWebhooks()


```js
trello.addWebhooks({
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateWebhooks
updateWebhooks()


```js
trello.updateWebhooks({
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteWebhooksByIdWebhook
deleteWebhooksByIdWebhook()


```js
trello.deleteWebhooksByIdWebhook({
  "idWebhook": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idWebhook (string) **required** - idWebhook
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getWebhooksByIdWebhook
getWebhooksByIdWebhook()


```js
trello.getWebhooksByIdWebhook({
  "idWebhook": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idWebhook (string) **required** - idWebhook
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateWebhooksByIdWebhook
updateWebhooksByIdWebhook()


```js
trello.updateWebhooksByIdWebhook({
  "idWebhook": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idWebhook (string) **required** - idWebhook
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateWebhooksActiveByIdWebhook
updateWebhooksActiveByIdWebhook()


```js
trello.updateWebhooksActiveByIdWebhook({
  "idWebhook": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idWebhook (string) **required** - idWebhook
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateWebhooksCallbackURLByIdWebhook
updateWebhooksCallbackURLByIdWebhook()


```js
trello.updateWebhooksCallbackURLByIdWebhook({
  "idWebhook": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idWebhook (string) **required** - idWebhook
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateWebhooksDescriptionByIdWebhook
updateWebhooksDescriptionByIdWebhook()


```js
trello.updateWebhooksDescriptionByIdWebhook({
  "idWebhook": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idWebhook (string) **required** - idWebhook
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateWebhooksIdModelByIdWebhook
updateWebhooksIdModelByIdWebhook()


```js
trello.updateWebhooksIdModelByIdWebhook({
  "idWebhook": "",
  "body": {},
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idWebhook (string) **required** - idWebhook
* body (object) **required**
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getWebhooksByIdWebhookByField
getWebhooksByIdWebhookByField()


```js
trello.getWebhooksByIdWebhookByField({
  "idWebhook": "",
  "field": "",
  "key": "",
  "token": ""
}, context)
```

#### Parameters
* idWebhook (string) **required** - idWebhook
* field (string) **required** - field
* key (string) **required** - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* token (string) **required** - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

