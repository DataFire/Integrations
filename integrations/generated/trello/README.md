# @datafire/trello

Client library for Trello

## Installation and Usage
```bash
npm install --save @datafire/trello
```
```js
let trello = require('@datafire/trello').create({
  api_key: "",
  api_token: ""
});

trello.getTokensMemberByToken({}).then(data => {
  console.log(data);
});
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
  "idAction": ""
}, context)
```

#### Input
* input `object`
  * idAction **required** `string`: idAction

#### Output
*Output schema unknown*

### getActionsByIdAction
getActionsByIdAction()


```js
trello.getActionsByIdAction({
  "idAction": ""
}, context)
```

#### Input
* input `object`
  * idAction **required** `string`: idAction
  * display `string`:  true or false
  * entities `string`:  true or false
  * fields `string`: all or a comma-separated list of: data, date, idMemberCreator or type
  * member `string`:  true or false
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * memberCreator `string`:  true or false
  * memberCreator_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### Output
*Output schema unknown*

### updateActionsByIdAction
updateActionsByIdAction()


```js
trello.updateActionsByIdAction({
  "idAction": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idAction **required** `string`: idAction
  * body **required** [actions](#actions)

#### Output
*Output schema unknown*

### getActionsBoardByIdAction
getActionsBoardByIdAction()


```js
trello.getActionsBoardByIdAction({
  "idAction": ""
}, context)
```

#### Input
* input `object`
  * idAction **required** `string`: idAction
  * fields `string`: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

#### Output
*Output schema unknown*

### getActionsBoardByIdActionByField
getActionsBoardByIdActionByField()


```js
trello.getActionsBoardByIdActionByField({
  "idAction": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idAction **required** `string`: idAction
  * field **required** `string`: field

#### Output
*Output schema unknown*

### getActionsCardByIdAction
getActionsCardByIdAction()


```js
trello.getActionsCardByIdAction({
  "idAction": ""
}, context)
```

#### Input
* input `object`
  * idAction **required** `string`: idAction
  * fields `string`: all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

#### Output
*Output schema unknown*

### getActionsCardByIdActionByField
getActionsCardByIdActionByField()


```js
trello.getActionsCardByIdActionByField({
  "idAction": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idAction **required** `string`: idAction
  * field **required** `string`: field

#### Output
*Output schema unknown*

### getActionsDisplayByIdAction
getActionsDisplayByIdAction()


```js
trello.getActionsDisplayByIdAction({
  "idAction": ""
}, context)
```

#### Input
* input `object`
  * idAction **required** `string`: idAction

#### Output
*Output schema unknown*

### getActionsEntitiesByIdAction
getActionsEntitiesByIdAction()


```js
trello.getActionsEntitiesByIdAction({
  "idAction": ""
}, context)
```

#### Input
* input `object`
  * idAction **required** `string`: idAction

#### Output
*Output schema unknown*

### getActionsListByIdAction
getActionsListByIdAction()


```js
trello.getActionsListByIdAction({
  "idAction": ""
}, context)
```

#### Input
* input `object`
  * idAction **required** `string`: idAction
  * fields `string`: all or a comma-separated list of: closed, idBoard, name, pos or subscribed

#### Output
*Output schema unknown*

### getActionsListByIdActionByField
getActionsListByIdActionByField()


```js
trello.getActionsListByIdActionByField({
  "idAction": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idAction **required** `string`: idAction
  * field **required** `string`: field

#### Output
*Output schema unknown*

### getActionsMemberByIdAction
getActionsMemberByIdAction()


```js
trello.getActionsMemberByIdAction({
  "idAction": ""
}, context)
```

#### Input
* input `object`
  * idAction **required** `string`: idAction
  * fields `string`: all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username

#### Output
*Output schema unknown*

### getActionsMemberByIdActionByField
getActionsMemberByIdActionByField()


```js
trello.getActionsMemberByIdActionByField({
  "idAction": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idAction **required** `string`: idAction
  * field **required** `string`: field

#### Output
*Output schema unknown*

### getActionsMemberCreatorByIdAction
getActionsMemberCreatorByIdAction()


```js
trello.getActionsMemberCreatorByIdAction({
  "idAction": ""
}, context)
```

#### Input
* input `object`
  * idAction **required** `string`: idAction
  * fields `string`: all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username

#### Output
*Output schema unknown*

### getActionsMemberCreatorByIdActionByField
getActionsMemberCreatorByIdActionByField()


```js
trello.getActionsMemberCreatorByIdActionByField({
  "idAction": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idAction **required** `string`: idAction
  * field **required** `string`: field

#### Output
*Output schema unknown*

### getActionsOrganizationByIdAction
getActionsOrganizationByIdAction()


```js
trello.getActionsOrganizationByIdAction({
  "idAction": ""
}, context)
```

#### Input
* input `object`
  * idAction **required** `string`: idAction
  * fields `string`: all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website

#### Output
*Output schema unknown*

### getActionsOrganizationByIdActionByField
getActionsOrganizationByIdActionByField()


```js
trello.getActionsOrganizationByIdActionByField({
  "idAction": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idAction **required** `string`: idAction
  * field **required** `string`: field

#### Output
*Output schema unknown*

### updateActionsTextByIdAction
updateActionsTextByIdAction()


```js
trello.updateActionsTextByIdAction({
  "idAction": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idAction **required** `string`: idAction
  * body **required** [actions_text](#actions_text)

#### Output
*Output schema unknown*

### getActionsByIdActionByField
getActionsByIdActionByField()


```js
trello.getActionsByIdActionByField({
  "idAction": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idAction **required** `string`: idAction
  * field **required** `string`: field

#### Output
*Output schema unknown*

### getBatch
getBatch()


```js
trello.getBatch({
  "urls": ""
}, context)
```

#### Input
* input `object`
  * urls **required** `string`: list of API v1 GET routes, not including the version prefix

#### Output
*Output schema unknown*

### addBoards
addBoards()


```js
trello.addBoards({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [boards](#boards)

#### Output
*Output schema unknown*

### getBoardsByIdBoard
getBoardsByIdBoard()


```js
trello.getBoardsByIdBoard({
  "idBoard": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * actions `string`: all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
  * actions_entities `string`:  true or false
  * actions_display `string`:  true or false
  * actions_format `string`: One of: count, list or minimal
  * actions_since `string`: A date, null or lastView
  * actions_limit `string`: a number from 0 to 1000
  * action_fields `string`: all or a comma-separated list of: data, date, idMemberCreator or type
  * action_member `string`:  true or false
  * action_member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * action_memberCreator `string`:  true or false
  * action_memberCreator_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * cards `string`: One of: all, closed, none, open or visible
  * card_fields `string`: all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
  * card_attachments `string`: A boolean value or &quot;cover&quot; for only card cover attachments
  * card_attachment_fields `string`: all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
  * card_checklists `string`: One of: all or none
  * card_stickers `string`:  true or false
  * boardStars `string`: One of: mine or none
  * labels `string`: One of: all or none
  * label_fields `string`: all or a comma-separated list of: color, idBoard, name or uses
  * labels_limit `string`: a number from 0 to 1000
  * lists `string`: One of: all, closed, none or open
  * list_fields `string`: all or a comma-separated list of: closed, idBoard, name, pos or subscribed
  * memberships `string`: all or a comma-separated list of: active, admin, deactivated, me or normal
  * memberships_member `string`:  true or false
  * memberships_member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * members `string`: One of: admins, all, none, normal or owners
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * membersInvited `string`: One of: admins, all, none, normal or owners
  * membersInvited_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * checklists `string`: One of: all or none
  * checklist_fields `string`: all or a comma-separated list of: idBoard, idCard, name or pos
  * organization `string`:  true or false
  * organization_fields `string`: all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
  * organization_memberships `string`: all or a comma-separated list of: active, admin, deactivated, me or normal
  * myPrefs `string`:  true or false
  * fields `string`: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

#### Output
*Output schema unknown*

### updateBoardsByIdBoard
updateBoardsByIdBoard()


```js
trello.updateBoardsByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [boards](#boards)

#### Output
*Output schema unknown*

### getBoardsActionsByIdBoard
getBoardsActionsByIdBoard()


```js
trello.getBoardsActionsByIdBoard({
  "idBoard": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * entities `string`:  true or false
  * display `string`:  true or false
  * filter `string`: all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
  * fields `string`: all or a comma-separated list of: data, date, idMemberCreator or type
  * limit `string`: a number from 0 to 1000
  * format `string`: One of: count, list or minimal
  * since `string`: A date, null or lastView
  * before `string`: A date, or null
  * page `string`: Page * limit must be less than 1000
  * idModels `string`: Only return actions related to these model ids
  * member `string`:  true or false
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * memberCreator `string`:  true or false
  * memberCreator_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### Output
*Output schema unknown*

### getBoardsBoardStarsByIdBoard
getBoardsBoardStarsByIdBoard()


```js
trello.getBoardsBoardStarsByIdBoard({
  "idBoard": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * filter `string`: One of: mine or none

#### Output
*Output schema unknown*

### addBoardsCalendarKeyGenerateByIdBoard
addBoardsCalendarKeyGenerateByIdBoard()


```js
trello.addBoardsCalendarKeyGenerateByIdBoard({
  "idBoard": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id

#### Output
*Output schema unknown*

### getBoardsCardsByIdBoard
getBoardsCardsByIdBoard()


```js
trello.getBoardsCardsByIdBoard({
  "idBoard": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * actions `string`: all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
  * attachments `string`: A boolean value or &quot;cover&quot; for only card cover attachments
  * attachment_fields `string`: all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
  * stickers `string`:  true or false
  * members `string`:  true or false
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * checkItemStates `string`:  true or false
  * checklists `string`: One of: all or none
  * limit `string`: a number from 1 to 1000
  * since `string`: A date, or null
  * before `string`: A date, or null
  * filter `string`: One of: all, closed, none, open or visible
  * fields `string`: all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

#### Output
*Output schema unknown*

### getBoardsCardsByIdBoardByFilter
getBoardsCardsByIdBoardByFilter()


```js
trello.getBoardsCardsByIdBoardByFilter({
  "idBoard": "",
  "filter": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * filter **required** `string`: filter

#### Output
*Output schema unknown*

### getBoardsCardsByIdBoardByIdCard
getBoardsCardsByIdBoardByIdCard()


```js
trello.getBoardsCardsByIdBoardByIdCard({
  "idBoard": "",
  "idCard": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * idCard **required** `string`: idCard
  * attachments `string`: A boolean value or &quot;cover&quot; for only card cover attachments
  * attachment_fields `string`: all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
  * actions `string`: all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
  * actions_entities `string`:  true or false
  * actions_display `string`:  true or false
  * actions_limit `string`: a number from 0 to 1000
  * action_fields `string`: all or a comma-separated list of: data, date, idMemberCreator or type
  * action_memberCreator_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * members `string`:  true or false
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * checkItemStates `string`:  true or false
  * checkItemState_fields `string`: all or a comma-separated list of: idCheckItem or state
  * labels `string`:  true or false
  * checklists `string`: One of: all or none
  * checklist_fields `string`: all or a comma-separated list of: idBoard, idCard, name or pos
  * fields `string`: all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

#### Output
*Output schema unknown*

### getBoardsChecklistsByIdBoard
getBoardsChecklistsByIdBoard()


```js
trello.getBoardsChecklistsByIdBoard({
  "idBoard": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * cards `string`: One of: all, closed, none, open or visible
  * card_fields `string`: all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
  * checkItems `string`: One of: all or none
  * checkItem_fields `string`: all or a comma-separated list of: name, nameData, pos, state or type
  * filter `string`: One of: all or none
  * fields `string`: all or a comma-separated list of: idBoard, idCard, name or pos

#### Output
*Output schema unknown*

### addBoardsChecklistsByIdBoard
addBoardsChecklistsByIdBoard()


```js
trello.addBoardsChecklistsByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [boards_checklists](#boards_checklists)

#### Output
*Output schema unknown*

### updateBoardsClosedByIdBoard
updateBoardsClosedByIdBoard()


```js
trello.updateBoardsClosedByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [boards_closed](#boards_closed)

#### Output
*Output schema unknown*

### getBoardsDeltasByIdBoard
getBoardsDeltasByIdBoard()


```js
trello.getBoardsDeltasByIdBoard({
  "idBoard": "",
  "tags": "",
  "ixLastUpdate": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * tags **required** `string`: A valid tag for subscribing
  * ixLastUpdate **required** `string`: a number from -1 to Infinity

#### Output
*Output schema unknown*

### updateBoardsDescByIdBoard
updateBoardsDescByIdBoard()


```js
trello.updateBoardsDescByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [boards_desc](#boards_desc)

#### Output
*Output schema unknown*

### addBoardsEmailKeyGenerateByIdBoard
addBoardsEmailKeyGenerateByIdBoard()


```js
trello.addBoardsEmailKeyGenerateByIdBoard({
  "idBoard": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id

#### Output
*Output schema unknown*

### updateBoardsIdOrganizationByIdBoard
updateBoardsIdOrganizationByIdBoard()


```js
trello.updateBoardsIdOrganizationByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [boards_idOrganization](#boards_idorganization)

#### Output
*Output schema unknown*

### updateBoardsLabelNamesBlueByIdBoard
updateBoardsLabelNamesBlueByIdBoard()


```js
trello.updateBoardsLabelNamesBlueByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [labelNames_blue](#labelnames_blue)

#### Output
*Output schema unknown*

### updateBoardsLabelNamesGreenByIdBoard
updateBoardsLabelNamesGreenByIdBoard()


```js
trello.updateBoardsLabelNamesGreenByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [labelNames_green](#labelnames_green)

#### Output
*Output schema unknown*

### updateBoardsLabelNamesOrangeByIdBoard
updateBoardsLabelNamesOrangeByIdBoard()


```js
trello.updateBoardsLabelNamesOrangeByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [labelNames_orange](#labelnames_orange)

#### Output
*Output schema unknown*

### updateBoardsLabelNamesPurpleByIdBoard
updateBoardsLabelNamesPurpleByIdBoard()


```js
trello.updateBoardsLabelNamesPurpleByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [labelNames_purple](#labelnames_purple)

#### Output
*Output schema unknown*

### updateBoardsLabelNamesRedByIdBoard
updateBoardsLabelNamesRedByIdBoard()


```js
trello.updateBoardsLabelNamesRedByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [labelNames_red](#labelnames_red)

#### Output
*Output schema unknown*

### updateBoardsLabelNamesYellowByIdBoard
updateBoardsLabelNamesYellowByIdBoard()


```js
trello.updateBoardsLabelNamesYellowByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [labelNames_yellow](#labelnames_yellow)

#### Output
*Output schema unknown*

### getBoardsLabelsByIdBoard
getBoardsLabelsByIdBoard()


```js
trello.getBoardsLabelsByIdBoard({
  "idBoard": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * fields `string`: all or a comma-separated list of: color, idBoard, name or uses
  * limit `string`: a number from 0 to 1000

#### Output
*Output schema unknown*

### addBoardsLabelsByIdBoard
addBoardsLabelsByIdBoard()


```js
trello.addBoardsLabelsByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [boards_labels](#boards_labels)

#### Output
*Output schema unknown*

### getBoardsLabelsByIdBoardByIdLabel
getBoardsLabelsByIdBoardByIdLabel()


```js
trello.getBoardsLabelsByIdBoardByIdLabel({
  "idBoard": "",
  "idLabel": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * idLabel **required** `string`: idLabel
  * fields `string`: all or a comma-separated list of: color, idBoard, name or uses

#### Output
*Output schema unknown*

### getBoardsListsByIdBoard
getBoardsListsByIdBoard()


```js
trello.getBoardsListsByIdBoard({
  "idBoard": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * cards `string`: One of: all, closed, none, open or visible
  * card_fields `string`: all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
  * filter `string`: One of: all, closed, none or open
  * fields `string`: all or a comma-separated list of: closed, idBoard, name, pos or subscribed

#### Output
*Output schema unknown*

### addBoardsListsByIdBoard
addBoardsListsByIdBoard()


```js
trello.addBoardsListsByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [boards_lists](#boards_lists)

#### Output
*Output schema unknown*

### getBoardsListsByIdBoardByFilter
getBoardsListsByIdBoardByFilter()


```js
trello.getBoardsListsByIdBoardByFilter({
  "idBoard": "",
  "filter": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * filter **required** `string`: filter

#### Output
*Output schema unknown*

### addBoardsMarkAsViewedByIdBoard
addBoardsMarkAsViewedByIdBoard()


```js
trello.addBoardsMarkAsViewedByIdBoard({
  "idBoard": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id

#### Output
*Output schema unknown*

### getBoardsMembersByIdBoard
getBoardsMembersByIdBoard()


```js
trello.getBoardsMembersByIdBoard({
  "idBoard": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * filter `string`: One of: admins, all, none, normal or owners
  * fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * activity `string`: true or false ; works for premium organizations only.

#### Output
*Output schema unknown*

### updateBoardsMembersByIdBoard
updateBoardsMembersByIdBoard()


```js
trello.updateBoardsMembersByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [boards_members](#boards_members)

#### Output
*Output schema unknown*

### getBoardsMembersByIdBoardByFilter
getBoardsMembersByIdBoardByFilter()


```js
trello.getBoardsMembersByIdBoardByFilter({
  "idBoard": "",
  "filter": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * filter **required** `string`: filter

#### Output
*Output schema unknown*

### deleteBoardsMembersByIdBoardByIdMember
deleteBoardsMembersByIdBoardByIdMember()


```js
trello.deleteBoardsMembersByIdBoardByIdMember({
  "idBoard": "",
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * idMember **required** `string`: idMember

#### Output
*Output schema unknown*

### updateBoardsMembersByIdBoardByIdMember
updateBoardsMembersByIdBoardByIdMember()


```js
trello.updateBoardsMembersByIdBoardByIdMember({
  "idBoard": "",
  "idMember": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * idMember **required** `string`: idMember
  * body **required** [boards_members](#boards_members)

#### Output
*Output schema unknown*

### getBoardsMembersCardsByIdBoardByIdMember
getBoardsMembersCardsByIdBoardByIdMember()


```js
trello.getBoardsMembersCardsByIdBoardByIdMember({
  "idBoard": "",
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * idMember **required** `string`: idMember
  * actions `string`: all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
  * attachments `string`: A boolean value or &quot;cover&quot; for only card cover attachments
  * attachment_fields `string`: all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
  * members `string`:  true or false
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * checkItemStates `string`:  true or false
  * checklists `string`: One of: all or none
  * board `string`:  true or false
  * board_fields `string`: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
  * list `string`:  true or false
  * list_fields `string`: all or a comma-separated list of: closed, idBoard, name, pos or subscribed
  * filter `string`: One of: all, closed, none, open or visible
  * fields `string`: all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

#### Output
*Output schema unknown*

### getBoardsMembersInvitedByIdBoard
getBoardsMembersInvitedByIdBoard()


```js
trello.getBoardsMembersInvitedByIdBoard({
  "idBoard": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * fields `string`: all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username

#### Output
*Output schema unknown*

### getBoardsMembersInvitedByIdBoardByField
getBoardsMembersInvitedByIdBoardByField()


```js
trello.getBoardsMembersInvitedByIdBoardByField({
  "idBoard": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * field **required** `string`: field

#### Output
*Output schema unknown*

### getBoardsMembershipsByIdBoard
getBoardsMembershipsByIdBoard()


```js
trello.getBoardsMembershipsByIdBoard({
  "idBoard": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * filter `string`: all or a comma-separated list of: active, admin, deactivated, me or normal
  * member `string`:  true or false
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### Output
*Output schema unknown*

### getBoardsMembershipsByIdBoardByIdMembership
getBoardsMembershipsByIdBoardByIdMembership()


```js
trello.getBoardsMembershipsByIdBoardByIdMembership({
  "idBoard": "",
  "idMembership": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * idMembership **required** `string`: idMembership
  * member `string`:  true or false
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### Output
*Output schema unknown*

### updateBoardsMembershipsByIdBoardByIdMembership
updateBoardsMembershipsByIdBoardByIdMembership()


```js
trello.updateBoardsMembershipsByIdBoardByIdMembership({
  "idBoard": "",
  "idMembership": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * idMembership **required** `string`: idMembership
  * body **required** [boards_memberships](#boards_memberships)

#### Output
*Output schema unknown*

### getBoardsMyPrefsByIdBoard
getBoardsMyPrefsByIdBoard()


```js
trello.getBoardsMyPrefsByIdBoard({
  "idBoard": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id

#### Output
*Output schema unknown*

### updateBoardsMyPrefsEmailPositionByIdBoard
updateBoardsMyPrefsEmailPositionByIdBoard()


```js
trello.updateBoardsMyPrefsEmailPositionByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [myPrefs_emailPosition](#myprefs_emailposition)

#### Output
*Output schema unknown*

### updateBoardsMyPrefsIdEmailListByIdBoard
updateBoardsMyPrefsIdEmailListByIdBoard()


```js
trello.updateBoardsMyPrefsIdEmailListByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [myPrefs_idEmailList](#myprefs_idemaillist)

#### Output
*Output schema unknown*

### updateBoardsMyPrefsShowListGuideByIdBoard
updateBoardsMyPrefsShowListGuideByIdBoard()


```js
trello.updateBoardsMyPrefsShowListGuideByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [myPrefs_showListGuide](#myprefs_showlistguide)

#### Output
*Output schema unknown*

### updateBoardsMyPrefsShowSidebarByIdBoard
updateBoardsMyPrefsShowSidebarByIdBoard()


```js
trello.updateBoardsMyPrefsShowSidebarByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [myPrefs_showSidebar](#myprefs_showsidebar)

#### Output
*Output schema unknown*

### updateBoardsMyPrefsShowSidebarActivityByIdBoard
updateBoardsMyPrefsShowSidebarActivityByIdBoard()


```js
trello.updateBoardsMyPrefsShowSidebarActivityByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [myPrefs_showSidebarActivity](#myprefs_showsidebaractivity)

#### Output
*Output schema unknown*

### updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard
updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard()


```js
trello.updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [myPrefs_showSidebarBoardActions](#myprefs_showsidebarboardactions)

#### Output
*Output schema unknown*

### updateBoardsMyPrefsShowSidebarMembersByIdBoard
updateBoardsMyPrefsShowSidebarMembersByIdBoard()


```js
trello.updateBoardsMyPrefsShowSidebarMembersByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [myPrefs_showSidebarMembers](#myprefs_showsidebarmembers)

#### Output
*Output schema unknown*

### updateBoardsNameByIdBoard
updateBoardsNameByIdBoard()


```js
trello.updateBoardsNameByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [boards_name](#boards_name)

#### Output
*Output schema unknown*

### getBoardsOrganizationByIdBoard
getBoardsOrganizationByIdBoard()


```js
trello.getBoardsOrganizationByIdBoard({
  "idBoard": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * fields `string`: all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website

#### Output
*Output schema unknown*

### getBoardsOrganizationByIdBoardByField
getBoardsOrganizationByIdBoardByField()


```js
trello.getBoardsOrganizationByIdBoardByField({
  "idBoard": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * field **required** `string`: field

#### Output
*Output schema unknown*

### addBoardsPowerUpsByIdBoard
addBoardsPowerUpsByIdBoard()


```js
trello.addBoardsPowerUpsByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [boards_powerUps](#boards_powerups)

#### Output
*Output schema unknown*

### deleteBoardsPowerUpsByIdBoardByPowerUp
deleteBoardsPowerUpsByIdBoardByPowerUp()


```js
trello.deleteBoardsPowerUpsByIdBoardByPowerUp({
  "idBoard": "",
  "powerUp": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * powerUp **required** `string`: powerUp

#### Output
*Output schema unknown*

### updateBoardsPrefsBackgroundByIdBoard
updateBoardsPrefsBackgroundByIdBoard()


```js
trello.updateBoardsPrefsBackgroundByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [prefs_background](#prefs_background)

#### Output
*Output schema unknown*

### updateBoardsPrefsCalendarFeedEnabledByIdBoard
updateBoardsPrefsCalendarFeedEnabledByIdBoard()


```js
trello.updateBoardsPrefsCalendarFeedEnabledByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [prefs_calendarFeedEnabled](#prefs_calendarfeedenabled)

#### Output
*Output schema unknown*

### updateBoardsPrefsCardAgingByIdBoard
updateBoardsPrefsCardAgingByIdBoard()


```js
trello.updateBoardsPrefsCardAgingByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [prefs_cardAging](#prefs_cardaging)

#### Output
*Output schema unknown*

### updateBoardsPrefsCardCoversByIdBoard
updateBoardsPrefsCardCoversByIdBoard()


```js
trello.updateBoardsPrefsCardCoversByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [prefs_cardCovers](#prefs_cardcovers)

#### Output
*Output schema unknown*

### updateBoardsPrefsCommentsByIdBoard
updateBoardsPrefsCommentsByIdBoard()


```js
trello.updateBoardsPrefsCommentsByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [prefs_comments](#prefs_comments)

#### Output
*Output schema unknown*

### updateBoardsPrefsInvitationsByIdBoard
updateBoardsPrefsInvitationsByIdBoard()


```js
trello.updateBoardsPrefsInvitationsByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [prefs_invitations](#prefs_invitations)

#### Output
*Output schema unknown*

### updateBoardsPrefsPermissionLevelByIdBoard
updateBoardsPrefsPermissionLevelByIdBoard()


```js
trello.updateBoardsPrefsPermissionLevelByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [prefs_permissionLevel](#prefs_permissionlevel)

#### Output
*Output schema unknown*

### updateBoardsPrefsSelfJoinByIdBoard
updateBoardsPrefsSelfJoinByIdBoard()


```js
trello.updateBoardsPrefsSelfJoinByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [prefs_selfJoin](#prefs_selfjoin)

#### Output
*Output schema unknown*

### updateBoardsPrefsVotingByIdBoard
updateBoardsPrefsVotingByIdBoard()


```js
trello.updateBoardsPrefsVotingByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [prefs_voting](#prefs_voting)

#### Output
*Output schema unknown*

### updateBoardsSubscribedByIdBoard
updateBoardsSubscribedByIdBoard()


```js
trello.updateBoardsSubscribedByIdBoard({
  "idBoard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * body **required** [boards_subscribed](#boards_subscribed)

#### Output
*Output schema unknown*

### getBoardsByIdBoardByField
getBoardsByIdBoardByField()


```js
trello.getBoardsByIdBoardByField({
  "idBoard": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idBoard **required** `string`: board_id
  * field **required** `string`: field

#### Output
*Output schema unknown*

### addCards
addCards()


```js
trello.addCards({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [cards](#cards)

#### Output
*Output schema unknown*

### deleteCardsByIdCard
deleteCardsByIdCard()


```js
trello.deleteCardsByIdCard({
  "idCard": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink

#### Output
*Output schema unknown*

### getCardsByIdCard
getCardsByIdCard()


```js
trello.getCardsByIdCard({
  "idCard": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * actions `string`: all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
  * actions_entities `string`:  true or false
  * actions_display `string`:  true or false
  * actions_limit `string`: a number from 0 to 1000
  * action_fields `string`: all or a comma-separated list of: data, date, idMemberCreator or type
  * action_memberCreator_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * attachments `string`: A boolean value or &quot;cover&quot; for only card cover attachments
  * attachment_fields `string`: all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
  * members `string`:  true or false
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * membersVoted `string`:  true or false
  * memberVoted_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * checkItemStates `string`:  true or false
  * checkItemState_fields `string`: all or a comma-separated list of: idCheckItem or state
  * checklists `string`: One of: all or none
  * checklist_fields `string`: all or a comma-separated list of: idBoard, idCard, name or pos
  * board `string`:  true or false
  * board_fields `string`: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
  * list `string`:  true or false
  * list_fields `string`: all or a comma-separated list of: closed, idBoard, name, pos or subscribed
  * stickers `string`:  true or false
  * sticker_fields `string`: all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex
  * fields `string`: all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

#### Output
*Output schema unknown*

### updateCardsByIdCard
updateCardsByIdCard()


```js
trello.updateCardsByIdCard({
  "idCard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * body **required** [cards](#cards)

#### Output
*Output schema unknown*

### getCardsActionsByIdCard
getCardsActionsByIdCard()


```js
trello.getCardsActionsByIdCard({
  "idCard": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * entities `string`:  true or false
  * display `string`:  true or false
  * filter `string`: all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
  * fields `string`: all or a comma-separated list of: data, date, idMemberCreator or type
  * limit `string`: a number from 0 to 1000
  * format `string`: One of: count, list or minimal
  * since `string`: A date, null or lastView
  * before `string`: A date, or null
  * page `string`: Page * limit must be less than 1000
  * idModels `string`: Only return actions related to these model ids
  * member `string`:  true or false
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * memberCreator `string`:  true or false
  * memberCreator_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### Output
*Output schema unknown*

### addCardsActionsCommentsByIdCard
addCardsActionsCommentsByIdCard()


```js
trello.addCardsActionsCommentsByIdCard({
  "idCard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * body **required** [actions_comments](#actions_comments)

#### Output
*Output schema unknown*

### deleteCardsActionsCommentsByIdCardByIdAction
This can only be done by the original author of the comment, or someone with higher permissions than the original author.


```js
trello.deleteCardsActionsCommentsByIdCardByIdAction({
  "idCard": "",
  "idAction": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * idAction **required** `string`: idAction

#### Output
*Output schema unknown*

### updateCardsActionsCommentsByIdCardByIdAction
This can only be done by the original author of the comment.


```js
trello.updateCardsActionsCommentsByIdCardByIdAction({
  "idCard": "",
  "idAction": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * idAction **required** `string`: idAction
  * body **required** [cards_actions_comments](#cards_actions_comments)

#### Output
*Output schema unknown*

### getCardsAttachmentsByIdCard
getCardsAttachmentsByIdCard()


```js
trello.getCardsAttachmentsByIdCard({
  "idCard": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * fields `string`: all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
  * filter `string`: A boolean value or &quot;cover&quot; for only card cover attachments

#### Output
*Output schema unknown*

### addCardsAttachmentsByIdCard
addCardsAttachmentsByIdCard()


```js
trello.addCardsAttachmentsByIdCard({
  "idCard": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * body [cards_attachments](#cards_attachments)
  * file `string`, `object`: File contents
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
*Output schema unknown*

### deleteCardsAttachmentsByIdCardByIdAttachment
deleteCardsAttachmentsByIdCardByIdAttachment()


```js
trello.deleteCardsAttachmentsByIdCardByIdAttachment({
  "idCard": "",
  "idAttachment": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * idAttachment **required** `string`: idAttachment

#### Output
*Output schema unknown*

### getCardsAttachmentsByIdCardByIdAttachment
getCardsAttachmentsByIdCardByIdAttachment()


```js
trello.getCardsAttachmentsByIdCardByIdAttachment({
  "idCard": "",
  "idAttachment": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * idAttachment **required** `string`: idAttachment
  * fields `string`: all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url

#### Output
*Output schema unknown*

### getCardsBoardByIdCard
getCardsBoardByIdCard()


```js
trello.getCardsBoardByIdCard({
  "idCard": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * fields `string`: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

#### Output
*Output schema unknown*

### getCardsBoardByIdCardByField
getCardsBoardByIdCardByField()


```js
trello.getCardsBoardByIdCardByField({
  "idCard": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * field **required** `string`: field

#### Output
*Output schema unknown*

### getCardsCheckItemStatesByIdCard
getCardsCheckItemStatesByIdCard()


```js
trello.getCardsCheckItemStatesByIdCard({
  "idCard": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * fields `string`: all or a comma-separated list of: idCheckItem or state

#### Output
*Output schema unknown*

### updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem
updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem()


```js
trello.updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem({
  "idCard": "",
  "idChecklistCurrent": "",
  "idCheckItem": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * idChecklistCurrent **required** `string`: idChecklistCurrent
  * idCheckItem **required** `string`: idCheckItem
  * body **required** [cards_checklist_idChecklistCurrent_checkItem](#cards_checklist_idchecklistcurrent_checkitem)

#### Output
*Output schema unknown*

### addCardsChecklistCheckItemByIdCardByIdChecklist
addCardsChecklistCheckItemByIdCardByIdChecklist()


```js
trello.addCardsChecklistCheckItemByIdCardByIdChecklist({
  "idCard": "",
  "idChecklist": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * idChecklist **required** `string`: idChecklist
  * body **required** [cards_checklist_checkItem](#cards_checklist_checkitem)

#### Output
*Output schema unknown*

### deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem
deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem()


```js
trello.deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem({
  "idCard": "",
  "idChecklist": "",
  "idCheckItem": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * idChecklist **required** `string`: idChecklist
  * idCheckItem **required** `string`: idCheckItem

#### Output
*Output schema unknown*

### addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem
addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem()


```js
trello.addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem({
  "idCard": "",
  "idChecklist": "",
  "idCheckItem": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * idChecklist **required** `string`: idChecklist
  * idCheckItem **required** `string`: idCheckItem

#### Output
*Output schema unknown*

### updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem
updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem()


```js
trello.updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem({
  "idCard": "",
  "idChecklist": "",
  "idCheckItem": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * idChecklist **required** `string`: idChecklist
  * idCheckItem **required** `string`: idCheckItem
  * body **required** [cards_checklist_checkItem_name](#cards_checklist_checkitem_name)

#### Output
*Output schema unknown*

### updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem
updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem()


```js
trello.updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem({
  "idCard": "",
  "idChecklist": "",
  "idCheckItem": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * idChecklist **required** `string`: idChecklist
  * idCheckItem **required** `string`: idCheckItem
  * body **required** [cards_checklist_checkItem_pos](#cards_checklist_checkitem_pos)

#### Output
*Output schema unknown*

### updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem
updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem()


```js
trello.updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem({
  "idCard": "",
  "idChecklist": "",
  "idCheckItem": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * idChecklist **required** `string`: idChecklist
  * idCheckItem **required** `string`: idCheckItem
  * body **required** [cards_checklist_checkItem_state](#cards_checklist_checkitem_state)

#### Output
*Output schema unknown*

### getCardsChecklistsByIdCard
getCardsChecklistsByIdCard()


```js
trello.getCardsChecklistsByIdCard({
  "idCard": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * cards `string`: One of: all, closed, none, open or visible
  * card_fields `string`: all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
  * checkItems `string`: One of: all or none
  * checkItem_fields `string`: all or a comma-separated list of: name, nameData, pos, state or type
  * filter `string`: One of: all or none
  * fields `string`: all or a comma-separated list of: idBoard, idCard, name or pos

#### Output
*Output schema unknown*

### addCardsChecklistsByIdCard
addCardsChecklistsByIdCard()


```js
trello.addCardsChecklistsByIdCard({
  "idCard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * body **required** [cards_checklists](#cards_checklists)

#### Output
*Output schema unknown*

### deleteCardsChecklistsByIdCardByIdChecklist
deleteCardsChecklistsByIdCardByIdChecklist()


```js
trello.deleteCardsChecklistsByIdCardByIdChecklist({
  "idCard": "",
  "idChecklist": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * idChecklist **required** `string`: idChecklist

#### Output
*Output schema unknown*

### updateCardsClosedByIdCard
updateCardsClosedByIdCard()


```js
trello.updateCardsClosedByIdCard({
  "idCard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * body **required** [cards_closed](#cards_closed)

#### Output
*Output schema unknown*

### updateCardsDescByIdCard
updateCardsDescByIdCard()


```js
trello.updateCardsDescByIdCard({
  "idCard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * body **required** [cards_desc](#cards_desc)

#### Output
*Output schema unknown*

### updateCardsDueByIdCard
updateCardsDueByIdCard()


```js
trello.updateCardsDueByIdCard({
  "idCard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * body **required** [cards_due](#cards_due)

#### Output
*Output schema unknown*

### updateCardsIdAttachmentCoverByIdCard
updateCardsIdAttachmentCoverByIdCard()


```js
trello.updateCardsIdAttachmentCoverByIdCard({
  "idCard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * body **required** [cards_idAttachmentCover](#cards_idattachmentcover)

#### Output
*Output schema unknown*

### updateCardsIdBoardByIdCard
updateCardsIdBoardByIdCard()


```js
trello.updateCardsIdBoardByIdCard({
  "idCard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * body **required** [cards_idBoard](#cards_idboard)

#### Output
*Output schema unknown*

### addCardsIdLabelsByIdCard
addCardsIdLabelsByIdCard()


```js
trello.addCardsIdLabelsByIdCard({
  "idCard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * body **required** [cards_idLabels](#cards_idlabels)

#### Output
*Output schema unknown*

### deleteCardsIdLabelsByIdCardByIdLabel
deleteCardsIdLabelsByIdCardByIdLabel()


```js
trello.deleteCardsIdLabelsByIdCardByIdLabel({
  "idCard": "",
  "idLabel": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * idLabel **required** `string`: idLabel

#### Output
*Output schema unknown*

### updateCardsIdListByIdCard
updateCardsIdListByIdCard()


```js
trello.updateCardsIdListByIdCard({
  "idCard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * body **required** [cards_idList](#cards_idlist)

#### Output
*Output schema unknown*

### addCardsIdMembersByIdCard
addCardsIdMembersByIdCard()


```js
trello.addCardsIdMembersByIdCard({
  "idCard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * body **required** [cards_idMembers](#cards_idmembers)

#### Output
*Output schema unknown*

### updateCardsIdMembersByIdCard
updateCardsIdMembersByIdCard()


```js
trello.updateCardsIdMembersByIdCard({
  "idCard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * body **required** [cards_idMembers](#cards_idmembers)

#### Output
*Output schema unknown*

### deleteCardsIdMembersByIdCardByIdMember
deleteCardsIdMembersByIdCardByIdMember()


```js
trello.deleteCardsIdMembersByIdCardByIdMember({
  "idCard": "",
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * idMember **required** `string`: idMember

#### Output
*Output schema unknown*

### addCardsLabelsByIdCard
addCardsLabelsByIdCard()


```js
trello.addCardsLabelsByIdCard({
  "idCard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * body **required** [cards_labels](#cards_labels)

#### Output
*Output schema unknown*

### updateCardsLabelsByIdCard
updateCardsLabelsByIdCard()


```js
trello.updateCardsLabelsByIdCard({
  "idCard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * body **required** [cards_labels](#cards_labels)

#### Output
*Output schema unknown*

### deleteCardsLabelsByIdCardByColor
deleteCardsLabelsByIdCardByColor()


```js
trello.deleteCardsLabelsByIdCardByColor({
  "idCard": "",
  "color": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * color **required** `string`: color

#### Output
*Output schema unknown*

### getCardsListByIdCard
getCardsListByIdCard()


```js
trello.getCardsListByIdCard({
  "idCard": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * fields `string`: all or a comma-separated list of: closed, idBoard, name, pos or subscribed

#### Output
*Output schema unknown*

### getCardsListByIdCardByField
getCardsListByIdCardByField()


```js
trello.getCardsListByIdCardByField({
  "idCard": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * field **required** `string`: field

#### Output
*Output schema unknown*

### addCardsMarkAssociatedNotificationsReadByIdCard
addCardsMarkAssociatedNotificationsReadByIdCard()


```js
trello.addCardsMarkAssociatedNotificationsReadByIdCard({
  "idCard": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink

#### Output
*Output schema unknown*

### getCardsMembersByIdCard
getCardsMembersByIdCard()


```js
trello.getCardsMembersByIdCard({
  "idCard": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### Output
*Output schema unknown*

### getCardsMembersVotedByIdCard
getCardsMembersVotedByIdCard()


```js
trello.getCardsMembersVotedByIdCard({
  "idCard": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### Output
*Output schema unknown*

### addCardsMembersVotedByIdCard
addCardsMembersVotedByIdCard()


```js
trello.addCardsMembersVotedByIdCard({
  "idCard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * body **required** [cards_membersVoted](#cards_membersvoted)

#### Output
*Output schema unknown*

### deleteCardsMembersVotedByIdCardByIdMember
deleteCardsMembersVotedByIdCardByIdMember()


```js
trello.deleteCardsMembersVotedByIdCardByIdMember({
  "idCard": "",
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * idMember **required** `string`: idMember

#### Output
*Output schema unknown*

### updateCardsNameByIdCard
updateCardsNameByIdCard()


```js
trello.updateCardsNameByIdCard({
  "idCard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * body **required** [cards_name](#cards_name)

#### Output
*Output schema unknown*

### updateCardsPosByIdCard
updateCardsPosByIdCard()


```js
trello.updateCardsPosByIdCard({
  "idCard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * body **required** [cards_pos](#cards_pos)

#### Output
*Output schema unknown*

### getCardsStickersByIdCard
getCardsStickersByIdCard()


```js
trello.getCardsStickersByIdCard({
  "idCard": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * fields `string`: all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex

#### Output
*Output schema unknown*

### addCardsStickersByIdCard
addCardsStickersByIdCard()


```js
trello.addCardsStickersByIdCard({
  "idCard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * body **required** [cards_stickers](#cards_stickers)

#### Output
*Output schema unknown*

### deleteCardsStickersByIdCardByIdSticker
deleteCardsStickersByIdCardByIdSticker()


```js
trello.deleteCardsStickersByIdCardByIdSticker({
  "idCard": "",
  "idSticker": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * idSticker **required** `string`: idSticker

#### Output
*Output schema unknown*

### getCardsStickersByIdCardByIdSticker
getCardsStickersByIdCardByIdSticker()


```js
trello.getCardsStickersByIdCardByIdSticker({
  "idCard": "",
  "idSticker": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * idSticker **required** `string`: idSticker
  * fields `string`: all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex

#### Output
*Output schema unknown*

### updateCardsStickersByIdCardByIdSticker
updateCardsStickersByIdCardByIdSticker()


```js
trello.updateCardsStickersByIdCardByIdSticker({
  "idCard": "",
  "idSticker": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * idSticker **required** `string`: idSticker
  * body **required** [cards_stickers](#cards_stickers)

#### Output
*Output schema unknown*

### updateCardsSubscribedByIdCard
updateCardsSubscribedByIdCard()


```js
trello.updateCardsSubscribedByIdCard({
  "idCard": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * body **required** [cards_subscribed](#cards_subscribed)

#### Output
*Output schema unknown*

### getCardsByIdCardByField
getCardsByIdCardByField()


```js
trello.getCardsByIdCardByField({
  "idCard": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idCard **required** `string`: card id or shortlink
  * field **required** `string`: field

#### Output
*Output schema unknown*

### addChecklists
addChecklists()


```js
trello.addChecklists({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [checklists](#checklists)

#### Output
*Output schema unknown*

### deleteChecklistsByIdChecklist
deleteChecklistsByIdChecklist()


```js
trello.deleteChecklistsByIdChecklist({
  "idChecklist": ""
}, context)
```

#### Input
* input `object`
  * idChecklist **required** `string`: idChecklist

#### Output
*Output schema unknown*

### getChecklistsByIdChecklist
getChecklistsByIdChecklist()


```js
trello.getChecklistsByIdChecklist({
  "idChecklist": ""
}, context)
```

#### Input
* input `object`
  * idChecklist **required** `string`: idChecklist
  * cards `string`: One of: all, closed, none, open or visible
  * card_fields `string`: all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
  * checkItems `string`: One of: all or none
  * checkItem_fields `string`: all or a comma-separated list of: name, nameData, pos, state or type
  * fields `string`: all or a comma-separated list of: idBoard, idCard, name or pos

#### Output
*Output schema unknown*

### updateChecklistsByIdChecklist
updateChecklistsByIdChecklist()


```js
trello.updateChecklistsByIdChecklist({
  "idChecklist": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idChecklist **required** `string`: idChecklist
  * body **required** [checklists](#checklists)

#### Output
*Output schema unknown*

### getChecklistsBoardByIdChecklist
getChecklistsBoardByIdChecklist()


```js
trello.getChecklistsBoardByIdChecklist({
  "idChecklist": ""
}, context)
```

#### Input
* input `object`
  * idChecklist **required** `string`: idChecklist
  * fields `string`: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

#### Output
*Output schema unknown*

### getChecklistsBoardByIdChecklistByField
getChecklistsBoardByIdChecklistByField()


```js
trello.getChecklistsBoardByIdChecklistByField({
  "idChecklist": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idChecklist **required** `string`: idChecklist
  * field **required** `string`: field

#### Output
*Output schema unknown*

### getChecklistsCardsByIdChecklist
getChecklistsCardsByIdChecklist()


```js
trello.getChecklistsCardsByIdChecklist({
  "idChecklist": ""
}, context)
```

#### Input
* input `object`
  * idChecklist **required** `string`: idChecklist
  * actions `string`: all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
  * attachments `string`: A boolean value or &quot;cover&quot; for only card cover attachments
  * attachment_fields `string`: all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
  * stickers `string`:  true or false
  * members `string`:  true or false
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * checkItemStates `string`:  true or false
  * checklists `string`: One of: all or none
  * limit `string`: a number from 1 to 1000
  * since `string`: A date, or null
  * before `string`: A date, or null
  * filter `string`: One of: all, closed, none or open
  * fields `string`: all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

#### Output
*Output schema unknown*

### getChecklistsCardsByIdChecklistByFilter
getChecklistsCardsByIdChecklistByFilter()


```js
trello.getChecklistsCardsByIdChecklistByFilter({
  "idChecklist": "",
  "filter": ""
}, context)
```

#### Input
* input `object`
  * idChecklist **required** `string`: idChecklist
  * filter **required** `string`: filter

#### Output
*Output schema unknown*

### getChecklistsCheckItemsByIdChecklist
getChecklistsCheckItemsByIdChecklist()


```js
trello.getChecklistsCheckItemsByIdChecklist({
  "idChecklist": ""
}, context)
```

#### Input
* input `object`
  * idChecklist **required** `string`: idChecklist
  * filter `string`: One of: all or none
  * fields `string`: all or a comma-separated list of: name, nameData, pos, state or type

#### Output
*Output schema unknown*

### addChecklistsCheckItemsByIdChecklist
addChecklistsCheckItemsByIdChecklist()


```js
trello.addChecklistsCheckItemsByIdChecklist({
  "idChecklist": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idChecklist **required** `string`: idChecklist
  * body **required** [checklists_checkItems](#checklists_checkitems)

#### Output
*Output schema unknown*

### deleteChecklistsCheckItemsByIdChecklistByIdCheckItem
deleteChecklistsCheckItemsByIdChecklistByIdCheckItem()


```js
trello.deleteChecklistsCheckItemsByIdChecklistByIdCheckItem({
  "idChecklist": "",
  "idCheckItem": ""
}, context)
```

#### Input
* input `object`
  * idChecklist **required** `string`: idChecklist
  * idCheckItem **required** `string`: idCheckItem

#### Output
*Output schema unknown*

### getChecklistsCheckItemsByIdChecklistByIdCheckItem
getChecklistsCheckItemsByIdChecklistByIdCheckItem()


```js
trello.getChecklistsCheckItemsByIdChecklistByIdCheckItem({
  "idChecklist": "",
  "idCheckItem": ""
}, context)
```

#### Input
* input `object`
  * idChecklist **required** `string`: idChecklist
  * idCheckItem **required** `string`: idCheckItem
  * fields `string`: all or a comma-separated list of: name, nameData, pos, state or type

#### Output
*Output schema unknown*

### updateChecklistsIdCardByIdChecklist
updateChecklistsIdCardByIdChecklist()


```js
trello.updateChecklistsIdCardByIdChecklist({
  "idChecklist": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idChecklist **required** `string`: idChecklist
  * body **required** [checklists_idCard](#checklists_idcard)

#### Output
*Output schema unknown*

### updateChecklistsNameByIdChecklist
updateChecklistsNameByIdChecklist()


```js
trello.updateChecklistsNameByIdChecklist({
  "idChecklist": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idChecklist **required** `string`: idChecklist
  * body **required** [checklists_name](#checklists_name)

#### Output
*Output schema unknown*

### updateChecklistsPosByIdChecklist
updateChecklistsPosByIdChecklist()


```js
trello.updateChecklistsPosByIdChecklist({
  "idChecklist": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idChecklist **required** `string`: idChecklist
  * body **required** [checklists_pos](#checklists_pos)

#### Output
*Output schema unknown*

### getChecklistsByIdChecklistByField
getChecklistsByIdChecklistByField()


```js
trello.getChecklistsByIdChecklistByField({
  "idChecklist": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idChecklist **required** `string`: idChecklist
  * field **required** `string`: field

#### Output
*Output schema unknown*

### addLabels
addLabels()


```js
trello.addLabels({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [labels](#labels)

#### Output
*Output schema unknown*

### deleteLabelsByIdLabel
deleteLabelsByIdLabel()


```js
trello.deleteLabelsByIdLabel({
  "idLabel": ""
}, context)
```

#### Input
* input `object`
  * idLabel **required** `string`: idLabel

#### Output
*Output schema unknown*

### getLabelsByIdLabel
getLabelsByIdLabel()


```js
trello.getLabelsByIdLabel({
  "idLabel": ""
}, context)
```

#### Input
* input `object`
  * idLabel **required** `string`: idLabel
  * fields `string`: all or a comma-separated list of: color, idBoard, name or uses

#### Output
*Output schema unknown*

### updateLabelsByIdLabel
updateLabelsByIdLabel()


```js
trello.updateLabelsByIdLabel({
  "idLabel": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idLabel **required** `string`: idLabel
  * body **required** [labels](#labels)

#### Output
*Output schema unknown*

### getLabelsBoardByIdLabel
getLabelsBoardByIdLabel()


```js
trello.getLabelsBoardByIdLabel({
  "idLabel": ""
}, context)
```

#### Input
* input `object`
  * idLabel **required** `string`: idLabel
  * fields `string`: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

#### Output
*Output schema unknown*

### getLabelsBoardByIdLabelByField
getLabelsBoardByIdLabelByField()


```js
trello.getLabelsBoardByIdLabelByField({
  "idLabel": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idLabel **required** `string`: idLabel
  * field **required** `string`: field

#### Output
*Output schema unknown*

### updateLabelsColorByIdLabel
updateLabelsColorByIdLabel()


```js
trello.updateLabelsColorByIdLabel({
  "idLabel": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idLabel **required** `string`: idLabel
  * body **required** [labels_color](#labels_color)

#### Output
*Output schema unknown*

### updateLabelsNameByIdLabel
updateLabelsNameByIdLabel()


```js
trello.updateLabelsNameByIdLabel({
  "idLabel": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idLabel **required** `string`: idLabel
  * body **required** [labels_name](#labels_name)

#### Output
*Output schema unknown*

### addLists
addLists()


```js
trello.addLists({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [lists](#lists)

#### Output
*Output schema unknown*

### getListsByIdList
getListsByIdList()


```js
trello.getListsByIdList({
  "idList": ""
}, context)
```

#### Input
* input `object`
  * idList **required** `string`: idList
  * cards `string`: One of: all, closed, none or open
  * card_fields `string`: all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
  * board `string`:  true or false
  * board_fields `string`: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
  * fields `string`: all or a comma-separated list of: closed, idBoard, name, pos or subscribed

#### Output
*Output schema unknown*

### updateListsByIdList
updateListsByIdList()


```js
trello.updateListsByIdList({
  "idList": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idList **required** `string`: idList
  * body **required** [lists](#lists)

#### Output
*Output schema unknown*

### getListsActionsByIdList
getListsActionsByIdList()


```js
trello.getListsActionsByIdList({
  "idList": ""
}, context)
```

#### Input
* input `object`
  * idList **required** `string`: idList
  * entities `string`:  true or false
  * display `string`:  true or false
  * filter `string`: all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
  * fields `string`: all or a comma-separated list of: data, date, idMemberCreator or type
  * limit `string`: a number from 0 to 1000
  * format `string`: One of: count, list or minimal
  * since `string`: A date, null or lastView
  * before `string`: A date, or null
  * page `string`: Page * limit must be less than 1000
  * idModels `string`: Only return actions related to these model ids
  * member `string`:  true or false
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * memberCreator `string`:  true or false
  * memberCreator_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### Output
*Output schema unknown*

### addListsArchiveAllCardsByIdList
addListsArchiveAllCardsByIdList()


```js
trello.addListsArchiveAllCardsByIdList({
  "idList": ""
}, context)
```

#### Input
* input `object`
  * idList **required** `string`: idList

#### Output
*Output schema unknown*

### getListsBoardByIdList
getListsBoardByIdList()


```js
trello.getListsBoardByIdList({
  "idList": ""
}, context)
```

#### Input
* input `object`
  * idList **required** `string`: idList
  * fields `string`: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

#### Output
*Output schema unknown*

### getListsBoardByIdListByField
getListsBoardByIdListByField()


```js
trello.getListsBoardByIdListByField({
  "idList": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idList **required** `string`: idList
  * field **required** `string`: field

#### Output
*Output schema unknown*

### getListsCardsByIdList
getListsCardsByIdList()


```js
trello.getListsCardsByIdList({
  "idList": ""
}, context)
```

#### Input
* input `object`
  * idList **required** `string`: idList
  * actions `string`: all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
  * attachments `string`: A boolean value or &quot;cover&quot; for only card cover attachments
  * attachment_fields `string`: all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
  * stickers `string`:  true or false
  * members `string`:  true or false
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * checkItemStates `string`:  true or false
  * checklists `string`: One of: all or none
  * limit `string`: a number from 1 to 1000
  * since `string`: A date, or null
  * before `string`: A date, or null
  * filter `string`: One of: all, closed, none or open
  * fields `string`: all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

#### Output
*Output schema unknown*

### addListsCardsByIdList
addListsCardsByIdList()


```js
trello.addListsCardsByIdList({
  "idList": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idList **required** `string`: idList
  * body **required** [lists_cards](#lists_cards)

#### Output
*Output schema unknown*

### getListsCardsByIdListByFilter
getListsCardsByIdListByFilter()


```js
trello.getListsCardsByIdListByFilter({
  "idList": "",
  "filter": ""
}, context)
```

#### Input
* input `object`
  * idList **required** `string`: idList
  * filter **required** `string`: filter

#### Output
*Output schema unknown*

### updateListsClosedByIdList
updateListsClosedByIdList()


```js
trello.updateListsClosedByIdList({
  "idList": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idList **required** `string`: idList
  * body **required** [lists_closed](#lists_closed)

#### Output
*Output schema unknown*

### updateListsIdBoardByIdList
updateListsIdBoardByIdList()


```js
trello.updateListsIdBoardByIdList({
  "idList": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idList **required** `string`: idList
  * body **required** [lists_idBoard](#lists_idboard)

#### Output
*Output schema unknown*

### addListsMoveAllCardsByIdList
addListsMoveAllCardsByIdList()


```js
trello.addListsMoveAllCardsByIdList({
  "idList": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idList **required** `string`: idList
  * body **required** [lists_moveAllCards](#lists_moveallcards)

#### Output
*Output schema unknown*

### updateListsNameByIdList
updateListsNameByIdList()


```js
trello.updateListsNameByIdList({
  "idList": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idList **required** `string`: idList
  * body **required** [lists_name](#lists_name)

#### Output
*Output schema unknown*

### updateListsPosByIdList
updateListsPosByIdList()


```js
trello.updateListsPosByIdList({
  "idList": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idList **required** `string`: idList
  * body **required** [lists_pos](#lists_pos)

#### Output
*Output schema unknown*

### updateListsSubscribedByIdList
updateListsSubscribedByIdList()


```js
trello.updateListsSubscribedByIdList({
  "idList": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idList **required** `string`: idList
  * body **required** [lists_subscribed](#lists_subscribed)

#### Output
*Output schema unknown*

### getListsByIdListByField
getListsByIdListByField()


```js
trello.getListsByIdListByField({
  "idList": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idList **required** `string`: idList
  * field **required** `string`: field

#### Output
*Output schema unknown*

### getMembersByIdMember
If you specify 'me' as the username, this call will respond as if you had supplied the username associated with the supplied token


```js
trello.getMembersByIdMember({
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * actions `string`: all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
  * actions_entities `string`:  true or false
  * actions_display `string`:  true or false
  * actions_limit `string`: a number from 0 to 1000
  * action_fields `string`: all or a comma-separated list of: data, date, idMemberCreator or type
  * action_since `string`: A date, null or lastView
  * action_before `string`: A date, or null
  * cards `string`: One of: all, closed, none, open or visible
  * card_fields `string`: all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
  * card_members `string`:  true or false
  * card_member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * card_attachments `string`: A boolean value or &quot;cover&quot; for only card cover attachments
  * card_attachment_fields `string`: all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
  * card_stickers `string`:  true or false
  * boards `string`: all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned
  * board_fields `string`: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
  * board_actions `string`: all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
  * board_actions_entities `string`:  true or false
  * board_actions_display `string`:  true or false
  * board_actions_format `string`: One of: count, list or minimal
  * board_actions_since `string`: A date, null or lastView
  * board_actions_limit `string`: a number from 0 to 1000
  * board_action_fields `string`: all or a comma-separated list of: data, date, idMemberCreator or type
  * board_lists `string`: One of: all, closed, none or open
  * board_memberships `string`: all or a comma-separated list of: active, admin, deactivated, me or normal
  * board_organization `string`:  true or false
  * board_organization_fields `string`: all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
  * boardsInvited `string`: all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned
  * boardsInvited_fields `string`: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
  * boardStars `string`:  true or false
  * savedSearches `string`:  true or false
  * organizations `string`: One of: all, members, none or public
  * organization_fields `string`: all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
  * organization_paid_account `string`:  true or false
  * organizationsInvited `string`: One of: all, members, none or public
  * organizationsInvited_fields `string`: all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
  * notifications `string`: all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard
  * notifications_entities `string`:  true or false
  * notifications_display `string`:  true or false
  * notifications_limit `string`: a number from 1 to 1000
  * notification_fields `string`: all or a comma-separated list of: data, date, idMemberCreator, type or unread
  * notification_memberCreator `string`:  true or false
  * notification_memberCreator_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * notification_before `string`: An id, or null
  * notification_since `string`: An id, or null
  * tokens `string`: One of: all or none
  * paid_account `string`:  true or false
  * boardBackgrounds `string`: One of: all, custom, default, none or premium
  * customBoardBackgrounds `string`: One of: all or none
  * customStickers `string`: One of: all or none
  * customEmoji `string`: One of: all or none
  * fields `string`: all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username

#### Output
*Output schema unknown*

### updateMembersByIdMember
updateMembersByIdMember()


```js
trello.updateMembersByIdMember({
  "idMember": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * body **required** [members](#members)

#### Output
*Output schema unknown*

### getMembersActionsByIdMember
getMembersActionsByIdMember()


```js
trello.getMembersActionsByIdMember({
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * entities `string`:  true or false
  * display `string`:  true or false
  * filter `string`: all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
  * fields `string`: all or a comma-separated list of: data, date, idMemberCreator or type
  * limit `string`: a number from 0 to 1000
  * format `string`: One of: count, list or minimal
  * since `string`: A date, null or lastView
  * before `string`: A date, or null
  * page `string`: Page * limit must be less than 1000
  * idModels `string`: Only return actions related to these model ids
  * member `string`:  true or false
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * memberCreator `string`:  true or false
  * memberCreator_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### Output
*Output schema unknown*

### addMembersAvatarByIdMember
addMembersAvatarByIdMember()


```js
trello.addMembersAvatarByIdMember({
  "idMember": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * body **required** [members_avatar](#members_avatar)

#### Output
*Output schema unknown*

### updateMembersAvatarSourceByIdMember
updateMembersAvatarSourceByIdMember()


```js
trello.updateMembersAvatarSourceByIdMember({
  "idMember": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * body **required** [members_avatarSource](#members_avatarsource)

#### Output
*Output schema unknown*

### updateMembersBioByIdMember
updateMembersBioByIdMember()


```js
trello.updateMembersBioByIdMember({
  "idMember": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * body **required** [members_bio](#members_bio)

#### Output
*Output schema unknown*

### getMembersBoardBackgroundsByIdMember
getMembersBoardBackgroundsByIdMember()


```js
trello.getMembersBoardBackgroundsByIdMember({
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * filter `string`: One of: all, custom, default, none or premium

#### Output
*Output schema unknown*

### addMembersBoardBackgroundsByIdMember
addMembersBoardBackgroundsByIdMember()


```js
trello.addMembersBoardBackgroundsByIdMember({
  "idMember": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * body **required** [members_boardBackgrounds](#members_boardbackgrounds)

#### Output
*Output schema unknown*

### deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground
deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground()


```js
trello.deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground({
  "idMember": "",
  "idBoardBackground": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * idBoardBackground **required** `string`: idBoardBackground

#### Output
*Output schema unknown*

### getMembersBoardBackgroundsByIdMemberByIdBoardBackground
getMembersBoardBackgroundsByIdMemberByIdBoardBackground()


```js
trello.getMembersBoardBackgroundsByIdMemberByIdBoardBackground({
  "idMember": "",
  "idBoardBackground": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * idBoardBackground **required** `string`: idBoardBackground
  * fields `string`: all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile

#### Output
*Output schema unknown*

### updateMembersBoardBackgroundsByIdMemberByIdBoardBackground
updateMembersBoardBackgroundsByIdMemberByIdBoardBackground()


```js
trello.updateMembersBoardBackgroundsByIdMemberByIdBoardBackground({
  "idMember": "",
  "idBoardBackground": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * idBoardBackground **required** `string`: idBoardBackground
  * body **required** [members_boardBackgrounds](#members_boardbackgrounds)

#### Output
*Output schema unknown*

### getMembersBoardStarsByIdMember
getMembersBoardStarsByIdMember()


```js
trello.getMembersBoardStarsByIdMember({
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username

#### Output
*Output schema unknown*

### addMembersBoardStarsByIdMember
addMembersBoardStarsByIdMember()


```js
trello.addMembersBoardStarsByIdMember({
  "idMember": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * body **required** [members_boardStars](#members_boardstars)

#### Output
*Output schema unknown*

### deleteMembersBoardStarsByIdMemberByIdBoardStar
deleteMembersBoardStarsByIdMemberByIdBoardStar()


```js
trello.deleteMembersBoardStarsByIdMemberByIdBoardStar({
  "idMember": "",
  "idBoardStar": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * idBoardStar **required** `string`: idBoardStar

#### Output
*Output schema unknown*

### getMembersBoardStarsByIdMemberByIdBoardStar
getMembersBoardStarsByIdMemberByIdBoardStar()


```js
trello.getMembersBoardStarsByIdMemberByIdBoardStar({
  "idMember": "",
  "idBoardStar": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * idBoardStar **required** `string`: idBoardStar

#### Output
*Output schema unknown*

### updateMembersBoardStarsByIdMemberByIdBoardStar
updateMembersBoardStarsByIdMemberByIdBoardStar()


```js
trello.updateMembersBoardStarsByIdMemberByIdBoardStar({
  "idMember": "",
  "idBoardStar": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * idBoardStar **required** `string`: idBoardStar
  * body **required** [members_boardStars](#members_boardstars)

#### Output
*Output schema unknown*

### updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar
updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar()


```js
trello.updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar({
  "idMember": "",
  "idBoardStar": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * idBoardStar **required** `string`: idBoardStar
  * body **required** [members_boardStars_idBoard](#members_boardstars_idboard)

#### Output
*Output schema unknown*

### updateMembersBoardStarsPosByIdMemberByIdBoardStar
updateMembersBoardStarsPosByIdMemberByIdBoardStar()


```js
trello.updateMembersBoardStarsPosByIdMemberByIdBoardStar({
  "idMember": "",
  "idBoardStar": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * idBoardStar **required** `string`: idBoardStar
  * body **required** [members_boardStars_pos](#members_boardstars_pos)

#### Output
*Output schema unknown*

### getMembersBoardsByIdMember
getMembersBoardsByIdMember()


```js
trello.getMembersBoardsByIdMember({
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * filter `string`: all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned
  * fields `string`: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
  * actions `string`: all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
  * actions_entities `string`:  true or false
  * actions_limit `string`: a number from 0 to 1000
  * actions_format `string`: One of: count, list or minimal
  * actions_since `string`: A date, null or lastView
  * action_fields `string`: all or a comma-separated list of: data, date, idMemberCreator or type
  * memberships `string`: all or a comma-separated list of: active, admin, deactivated, me or normal
  * organization `string`:  true or false
  * organization_fields `string`: all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
  * lists `string`: One of: all, closed, none or open

#### Output
*Output schema unknown*

### getMembersBoardsByIdMemberByFilter
getMembersBoardsByIdMemberByFilter()


```js
trello.getMembersBoardsByIdMemberByFilter({
  "idMember": "",
  "filter": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * filter **required** `string`: filter

#### Output
*Output schema unknown*

### getMembersBoardsInvitedByIdMember
getMembersBoardsInvitedByIdMember()


```js
trello.getMembersBoardsInvitedByIdMember({
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * fields `string`: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

#### Output
*Output schema unknown*

### getMembersBoardsInvitedByIdMemberByField
getMembersBoardsInvitedByIdMemberByField()


```js
trello.getMembersBoardsInvitedByIdMemberByField({
  "idMember": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * field **required** `string`: field

#### Output
*Output schema unknown*

### getMembersCardsByIdMember
getMembersCardsByIdMember()


```js
trello.getMembersCardsByIdMember({
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * actions `string`: all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
  * attachments `string`: A boolean value or &quot;cover&quot; for only card cover attachments
  * attachment_fields `string`: all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
  * stickers `string`:  true or false
  * members `string`:  true or false
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * checkItemStates `string`:  true or false
  * checklists `string`: One of: all or none
  * limit `string`: a number from 1 to 1000
  * since `string`: A date, or null
  * before `string`: A date, or null
  * filter `string`: One of: all, closed, none, open or visible
  * fields `string`: all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

#### Output
*Output schema unknown*

### getMembersCardsByIdMemberByFilter
getMembersCardsByIdMemberByFilter()


```js
trello.getMembersCardsByIdMemberByFilter({
  "idMember": "",
  "filter": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * filter **required** `string`: filter

#### Output
*Output schema unknown*

### getMembersCustomBoardBackgroundsByIdMember
getMembersCustomBoardBackgroundsByIdMember()


```js
trello.getMembersCustomBoardBackgroundsByIdMember({
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * filter `string`: One of: all or none

#### Output
*Output schema unknown*

### addMembersCustomBoardBackgroundsByIdMember
addMembersCustomBoardBackgroundsByIdMember()


```js
trello.addMembersCustomBoardBackgroundsByIdMember({
  "idMember": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * body **required** [members_customBoardBackgrounds](#members_customboardbackgrounds)

#### Output
*Output schema unknown*

### deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground
deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()


```js
trello.deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground({
  "idMember": "",
  "idBoardBackground": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * idBoardBackground **required** `string`: idBoardBackground

#### Output
*Output schema unknown*

### getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground
getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()


```js
trello.getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground({
  "idMember": "",
  "idBoardBackground": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * idBoardBackground **required** `string`: idBoardBackground
  * fields `string`: all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile

#### Output
*Output schema unknown*

### updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground
updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()


```js
trello.updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground({
  "idMember": "",
  "idBoardBackground": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * idBoardBackground **required** `string`: idBoardBackground
  * body **required** [members_customBoardBackgrounds](#members_customboardbackgrounds)

#### Output
*Output schema unknown*

### getMembersCustomEmojiByIdMember
This gets the list of all of the user’s uploaded emoji


```js
trello.getMembersCustomEmojiByIdMember({
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * filter `string`: One of: all or none

#### Output
*Output schema unknown*

### addMembersCustomEmojiByIdMember
addMembersCustomEmojiByIdMember()


```js
trello.addMembersCustomEmojiByIdMember({
  "idMember": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * body **required** [members_customEmoji](#members_customemoji)

#### Output
*Output schema unknown*

### getMembersCustomEmojiByIdMemberByIdCustomEmoji
getMembersCustomEmojiByIdMemberByIdCustomEmoji()


```js
trello.getMembersCustomEmojiByIdMemberByIdCustomEmoji({
  "idMember": "",
  "idCustomEmoji": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * idCustomEmoji **required** `string`: idCustomEmoji
  * fields `string`: all or a comma-separated list of: name or url

#### Output
*Output schema unknown*

### getMembersCustomStickersByIdMember
This gets a list of all of the user’s uploaded stickers


```js
trello.getMembersCustomStickersByIdMember({
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * filter `string`: One of: all or none

#### Output
*Output schema unknown*

### addMembersCustomStickersByIdMember
addMembersCustomStickersByIdMember()


```js
trello.addMembersCustomStickersByIdMember({
  "idMember": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * body **required** [members_customStickers](#members_customstickers)

#### Output
*Output schema unknown*

### deleteMembersCustomStickersByIdMemberByIdCustomSticker
deleteMembersCustomStickersByIdMemberByIdCustomSticker()


```js
trello.deleteMembersCustomStickersByIdMemberByIdCustomSticker({
  "idMember": "",
  "idCustomSticker": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * idCustomSticker **required** `string`: idCustomSticker

#### Output
*Output schema unknown*

### getMembersCustomStickersByIdMemberByIdCustomSticker
getMembersCustomStickersByIdMemberByIdCustomSticker()


```js
trello.getMembersCustomStickersByIdMemberByIdCustomSticker({
  "idMember": "",
  "idCustomSticker": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * idCustomSticker **required** `string`: idCustomSticker
  * fields `string`: all or a comma-separated list of: scaled or url

#### Output
*Output schema unknown*

### getMembersDeltasByIdMember
getMembersDeltasByIdMember()


```js
trello.getMembersDeltasByIdMember({
  "idMember": "",
  "tags": "",
  "ixLastUpdate": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * tags **required** `string`: A valid tag for subscribing
  * ixLastUpdate **required** `string`: a number from -1 to Infinity

#### Output
*Output schema unknown*

### updateMembersFullNameByIdMember
updateMembersFullNameByIdMember()


```js
trello.updateMembersFullNameByIdMember({
  "idMember": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * body **required** [members_fullName](#members_fullname)

#### Output
*Output schema unknown*

### updateMembersInitialsByIdMember
updateMembersInitialsByIdMember()


```js
trello.updateMembersInitialsByIdMember({
  "idMember": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * body **required** [members_initials](#members_initials)

#### Output
*Output schema unknown*

### getMembersNotificationsByIdMember
You can only read the notifications for the member associated with the supplied token


```js
trello.getMembersNotificationsByIdMember({
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * entities `string`:  true or false
  * display `string`:  true or false
  * filter `string`: all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard
  * read_filter `string`: One of: all, read or unread
  * fields `string`: all or a comma-separated list of: data, date, idMemberCreator, type or unread
  * limit `string`: a number from 1 to 1000
  * page `string`: a number from 0 to 100
  * before `string`: An id, or null
  * since `string`: An id, or null
  * memberCreator `string`:  true or false
  * memberCreator_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### Output
*Output schema unknown*

### getMembersNotificationsByIdMemberByFilter
getMembersNotificationsByIdMemberByFilter()


```js
trello.getMembersNotificationsByIdMemberByFilter({
  "idMember": "",
  "filter": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * filter **required** `string`: filter

#### Output
*Output schema unknown*

### addMembersOneTimeMessagesDismissedByIdMember
addMembersOneTimeMessagesDismissedByIdMember()


```js
trello.addMembersOneTimeMessagesDismissedByIdMember({
  "idMember": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * body **required** [members_oneTimeMessagesDismissed](#members_onetimemessagesdismissed)

#### Output
*Output schema unknown*

### getMembersOrganizationsByIdMember
getMembersOrganizationsByIdMember()


```js
trello.getMembersOrganizationsByIdMember({
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * filter `string`: One of: all, members, none or public
  * fields `string`: all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
  * paid_account `string`:  true or false

#### Output
*Output schema unknown*

### getMembersOrganizationsByIdMemberByFilter
getMembersOrganizationsByIdMemberByFilter()


```js
trello.getMembersOrganizationsByIdMemberByFilter({
  "idMember": "",
  "filter": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * filter **required** `string`: filter

#### Output
*Output schema unknown*

### getMembersOrganizationsInvitedByIdMember
getMembersOrganizationsInvitedByIdMember()


```js
trello.getMembersOrganizationsInvitedByIdMember({
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * fields `string`: all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website

#### Output
*Output schema unknown*

### getMembersOrganizationsInvitedByIdMemberByField
getMembersOrganizationsInvitedByIdMemberByField()


```js
trello.getMembersOrganizationsInvitedByIdMemberByField({
  "idMember": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * field **required** `string`: field

#### Output
*Output schema unknown*

### updateMembersPrefsColorBlindByIdMember
updateMembersPrefsColorBlindByIdMember()


```js
trello.updateMembersPrefsColorBlindByIdMember({
  "idMember": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * body **required** [prefs_colorBlind](#prefs_colorblind)

#### Output
*Output schema unknown*

### updateMembersPrefsLocaleByIdMember
updateMembersPrefsLocaleByIdMember()


```js
trello.updateMembersPrefsLocaleByIdMember({
  "idMember": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * body **required** [prefs_locale](#prefs_locale)

#### Output
*Output schema unknown*

### updateMembersPrefsMinutesBetweenSummariesByIdMember
updateMembersPrefsMinutesBetweenSummariesByIdMember()


```js
trello.updateMembersPrefsMinutesBetweenSummariesByIdMember({
  "idMember": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * body **required** [prefs_minutesBetweenSummaries](#prefs_minutesbetweensummaries)

#### Output
*Output schema unknown*

### getMembersSavedSearchesByIdMember
getMembersSavedSearchesByIdMember()


```js
trello.getMembersSavedSearchesByIdMember({
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username

#### Output
*Output schema unknown*

### addMembersSavedSearchesByIdMember
addMembersSavedSearchesByIdMember()


```js
trello.addMembersSavedSearchesByIdMember({
  "idMember": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * body **required** [members_savedSearches](#members_savedsearches)

#### Output
*Output schema unknown*

### deleteMembersSavedSearchesByIdMemberByIdSavedSearch
deleteMembersSavedSearchesByIdMemberByIdSavedSearch()


```js
trello.deleteMembersSavedSearchesByIdMemberByIdSavedSearch({
  "idMember": "",
  "idSavedSearch": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * idSavedSearch **required** `string`: idSavedSearch

#### Output
*Output schema unknown*

### getMembersSavedSearchesByIdMemberByIdSavedSearch
getMembersSavedSearchesByIdMemberByIdSavedSearch()


```js
trello.getMembersSavedSearchesByIdMemberByIdSavedSearch({
  "idMember": "",
  "idSavedSearch": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * idSavedSearch **required** `string`: idSavedSearch

#### Output
*Output schema unknown*

### updateMembersSavedSearchesByIdMemberByIdSavedSearch
updateMembersSavedSearchesByIdMemberByIdSavedSearch()


```js
trello.updateMembersSavedSearchesByIdMemberByIdSavedSearch({
  "idMember": "",
  "idSavedSearch": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * idSavedSearch **required** `string`: idSavedSearch
  * body **required** [members_savedSearches](#members_savedsearches)

#### Output
*Output schema unknown*

### updateMembersSavedSearchesNameByIdMemberByIdSavedSearch
updateMembersSavedSearchesNameByIdMemberByIdSavedSearch()


```js
trello.updateMembersSavedSearchesNameByIdMemberByIdSavedSearch({
  "idMember": "",
  "idSavedSearch": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * idSavedSearch **required** `string`: idSavedSearch
  * body **required** [members_savedSearches_name](#members_savedsearches_name)

#### Output
*Output schema unknown*

### updateMembersSavedSearchesPosByIdMemberByIdSavedSearch
updateMembersSavedSearchesPosByIdMemberByIdSavedSearch()


```js
trello.updateMembersSavedSearchesPosByIdMemberByIdSavedSearch({
  "idMember": "",
  "idSavedSearch": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * idSavedSearch **required** `string`: idSavedSearch
  * body **required** [members_savedSearches_pos](#members_savedsearches_pos)

#### Output
*Output schema unknown*

### updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch
updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch()


```js
trello.updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch({
  "idMember": "",
  "idSavedSearch": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * idSavedSearch **required** `string`: idSavedSearch
  * body **required** [members_savedSearches_query](#members_savedsearches_query)

#### Output
*Output schema unknown*

### getMembersTokensByIdMember
getMembersTokensByIdMember()


```js
trello.getMembersTokensByIdMember({
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * filter `string`: One of: all or none

#### Output
*Output schema unknown*

### updateMembersUsernameByIdMember
updateMembersUsernameByIdMember()


```js
trello.updateMembersUsernameByIdMember({
  "idMember": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * body **required** [members_username](#members_username)

#### Output
*Output schema unknown*

### getMembersByIdMemberByField
getMembersByIdMemberByField()


```js
trello.getMembersByIdMemberByField({
  "idMember": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idMember **required** `string`: idMember or username
  * field **required** `string`: field

#### Output
*Output schema unknown*

### addNotificationsAllRead
addNotificationsAllRead()


```js
trello.addNotificationsAllRead(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getNotificationsByIdNotification
getNotificationsByIdNotification()


```js
trello.getNotificationsByIdNotification({
  "idNotification": ""
}, context)
```

#### Input
* input `object`
  * idNotification **required** `string`: idNotification
  * display `string`:  true or false
  * entities `string`:  true or false
  * fields `string`: all or a comma-separated list of: data, date, idMemberCreator, type or unread
  * memberCreator `string`:  true or false
  * memberCreator_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * board `string`:  true or false
  * board_fields `string`: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
  * list `string`:  true or false
  * card `string`:  true or false
  * card_fields `string`: all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
  * organization `string`:  true or false
  * organization_fields `string`: all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
  * member `string`:  true or false
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### Output
*Output schema unknown*

### updateNotificationsByIdNotification
updateNotificationsByIdNotification()


```js
trello.updateNotificationsByIdNotification({
  "idNotification": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idNotification **required** `string`: idNotification
  * body **required** [notifications](#notifications)

#### Output
*Output schema unknown*

### getNotificationsBoardByIdNotification
getNotificationsBoardByIdNotification()


```js
trello.getNotificationsBoardByIdNotification({
  "idNotification": ""
}, context)
```

#### Input
* input `object`
  * idNotification **required** `string`: idNotification
  * fields `string`: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

#### Output
*Output schema unknown*

### getNotificationsBoardByIdNotificationByField
getNotificationsBoardByIdNotificationByField()


```js
trello.getNotificationsBoardByIdNotificationByField({
  "idNotification": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idNotification **required** `string`: idNotification
  * field **required** `string`: field

#### Output
*Output schema unknown*

### getNotificationsCardByIdNotification
getNotificationsCardByIdNotification()


```js
trello.getNotificationsCardByIdNotification({
  "idNotification": ""
}, context)
```

#### Input
* input `object`
  * idNotification **required** `string`: idNotification
  * fields `string`: all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

#### Output
*Output schema unknown*

### getNotificationsCardByIdNotificationByField
getNotificationsCardByIdNotificationByField()


```js
trello.getNotificationsCardByIdNotificationByField({
  "idNotification": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idNotification **required** `string`: idNotification
  * field **required** `string`: field

#### Output
*Output schema unknown*

### getNotificationsDisplayByIdNotification
getNotificationsDisplayByIdNotification()


```js
trello.getNotificationsDisplayByIdNotification({
  "idNotification": ""
}, context)
```

#### Input
* input `object`
  * idNotification **required** `string`: idNotification

#### Output
*Output schema unknown*

### getNotificationsEntitiesByIdNotification
getNotificationsEntitiesByIdNotification()


```js
trello.getNotificationsEntitiesByIdNotification({
  "idNotification": ""
}, context)
```

#### Input
* input `object`
  * idNotification **required** `string`: idNotification

#### Output
*Output schema unknown*

### getNotificationsListByIdNotification
getNotificationsListByIdNotification()


```js
trello.getNotificationsListByIdNotification({
  "idNotification": ""
}, context)
```

#### Input
* input `object`
  * idNotification **required** `string`: idNotification
  * fields `string`: all or a comma-separated list of: closed, idBoard, name, pos or subscribed

#### Output
*Output schema unknown*

### getNotificationsListByIdNotificationByField
getNotificationsListByIdNotificationByField()


```js
trello.getNotificationsListByIdNotificationByField({
  "idNotification": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idNotification **required** `string`: idNotification
  * field **required** `string`: field

#### Output
*Output schema unknown*

### getNotificationsMemberByIdNotification
getNotificationsMemberByIdNotification()


```js
trello.getNotificationsMemberByIdNotification({
  "idNotification": ""
}, context)
```

#### Input
* input `object`
  * idNotification **required** `string`: idNotification
  * fields `string`: all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username

#### Output
*Output schema unknown*

### getNotificationsMemberByIdNotificationByField
getNotificationsMemberByIdNotificationByField()


```js
trello.getNotificationsMemberByIdNotificationByField({
  "idNotification": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idNotification **required** `string`: idNotification
  * field **required** `string`: field

#### Output
*Output schema unknown*

### getNotificationsMemberCreatorByIdNotification
getNotificationsMemberCreatorByIdNotification()


```js
trello.getNotificationsMemberCreatorByIdNotification({
  "idNotification": ""
}, context)
```

#### Input
* input `object`
  * idNotification **required** `string`: idNotification
  * fields `string`: all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username

#### Output
*Output schema unknown*

### getNotificationsMemberCreatorByIdNotificationByField
getNotificationsMemberCreatorByIdNotificationByField()


```js
trello.getNotificationsMemberCreatorByIdNotificationByField({
  "idNotification": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idNotification **required** `string`: idNotification
  * field **required** `string`: field

#### Output
*Output schema unknown*

### getNotificationsOrganizationByIdNotification
getNotificationsOrganizationByIdNotification()


```js
trello.getNotificationsOrganizationByIdNotification({
  "idNotification": ""
}, context)
```

#### Input
* input `object`
  * idNotification **required** `string`: idNotification
  * fields `string`: all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website

#### Output
*Output schema unknown*

### getNotificationsOrganizationByIdNotificationByField
getNotificationsOrganizationByIdNotificationByField()


```js
trello.getNotificationsOrganizationByIdNotificationByField({
  "idNotification": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idNotification **required** `string`: idNotification
  * field **required** `string`: field

#### Output
*Output schema unknown*

### updateNotificationsUnreadByIdNotification
updateNotificationsUnreadByIdNotification()


```js
trello.updateNotificationsUnreadByIdNotification({
  "idNotification": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idNotification **required** `string`: idNotification
  * body **required** [notifications_unread](#notifications_unread)

#### Output
*Output schema unknown*

### getNotificationsByIdNotificationByField
getNotificationsByIdNotificationByField()


```js
trello.getNotificationsByIdNotificationByField({
  "idNotification": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idNotification **required** `string`: idNotification
  * field **required** `string`: field

#### Output
*Output schema unknown*

### addOrganizations
addOrganizations()


```js
trello.addOrganizations({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [organizations](#organizations)

#### Output
*Output schema unknown*

### deleteOrganizationsByIdOrg
deleteOrganizationsByIdOrg()


```js
trello.deleteOrganizationsByIdOrg({
  "idOrg": ""
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name

#### Output
*Output schema unknown*

### getOrganizationsByIdOrg
getOrganizationsByIdOrg()


```js
trello.getOrganizationsByIdOrg({
  "idOrg": ""
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * actions `string`: all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
  * actions_entities `string`:  true or false
  * actions_display `string`:  true or false
  * actions_limit `string`: a number from 0 to 1000
  * action_fields `string`: all or a comma-separated list of: data, date, idMemberCreator or type
  * memberships `string`: all or a comma-separated list of: active, admin, deactivated, me or normal
  * memberships_member `string`:  true or false
  * memberships_member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * members `string`: One of: admins, all, none, normal or owners
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * member_activity `string`: true or false ; works for premium organizations only.
  * membersInvited `string`: One of: admins, all, none, normal or owners
  * membersInvited_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * boards `string`: all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned
  * board_fields `string`: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
  * board_actions `string`: all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
  * board_actions_entities `string`:  true or false
  * board_actions_display `string`:  true or false
  * board_actions_format `string`: One of: count, list or minimal
  * board_actions_since `string`: A date, null or lastView
  * board_actions_limit `string`: a number from 0 to 1000
  * board_action_fields `string`: all or a comma-separated list of: data, date, idMemberCreator or type
  * board_lists `string`: One of: all, closed, none or open
  * paid_account `string`:  true or false
  * fields `string`: all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website

#### Output
*Output schema unknown*

### updateOrganizationsByIdOrg
updateOrganizationsByIdOrg()


```js
trello.updateOrganizationsByIdOrg({
  "idOrg": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * body **required** [organizations](#organizations)

#### Output
*Output schema unknown*

### getOrganizationsActionsByIdOrg
getOrganizationsActionsByIdOrg()


```js
trello.getOrganizationsActionsByIdOrg({
  "idOrg": ""
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * entities `string`:  true or false
  * display `string`:  true or false
  * filter `string`: all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
  * fields `string`: all or a comma-separated list of: data, date, idMemberCreator or type
  * limit `string`: a number from 0 to 1000
  * format `string`: One of: count, list or minimal
  * since `string`: A date, null or lastView
  * before `string`: A date, or null
  * page `string`: Page * limit must be less than 1000
  * idModels `string`: Only return actions related to these model ids
  * member `string`:  true or false
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * memberCreator `string`:  true or false
  * memberCreator_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### Output
*Output schema unknown*

### getOrganizationsBoardsByIdOrg
getOrganizationsBoardsByIdOrg()


```js
trello.getOrganizationsBoardsByIdOrg({
  "idOrg": ""
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * filter `string`: all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned
  * fields `string`: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
  * actions `string`: all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
  * actions_entities `string`:  true or false
  * actions_limit `string`: a number from 0 to 1000
  * actions_format `string`: One of: count, list or minimal
  * actions_since `string`: A date, null or lastView
  * action_fields `string`: all or a comma-separated list of: data, date, idMemberCreator or type
  * memberships `string`: all or a comma-separated list of: active, admin, deactivated, me or normal
  * organization `string`:  true or false
  * organization_fields `string`: all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
  * lists `string`: One of: all, closed, none or open

#### Output
*Output schema unknown*

### getOrganizationsBoardsByIdOrgByFilter
getOrganizationsBoardsByIdOrgByFilter()


```js
trello.getOrganizationsBoardsByIdOrgByFilter({
  "idOrg": "",
  "filter": ""
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * filter **required** `string`: filter

#### Output
*Output schema unknown*

### getOrganizationsDeltasByIdOrg
getOrganizationsDeltasByIdOrg()


```js
trello.getOrganizationsDeltasByIdOrg({
  "idOrg": "",
  "tags": "",
  "ixLastUpdate": ""
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * tags **required** `string`: A valid tag for subscribing
  * ixLastUpdate **required** `string`: a number from -1 to Infinity

#### Output
*Output schema unknown*

### updateOrganizationsDescByIdOrg
updateOrganizationsDescByIdOrg()


```js
trello.updateOrganizationsDescByIdOrg({
  "idOrg": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * body **required** [organizations_desc](#organizations_desc)

#### Output
*Output schema unknown*

### updateOrganizationsDisplayNameByIdOrg
updateOrganizationsDisplayNameByIdOrg()


```js
trello.updateOrganizationsDisplayNameByIdOrg({
  "idOrg": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * body **required** [organizations_displayName](#organizations_displayname)

#### Output
*Output schema unknown*

### deleteOrganizationsLogoByIdOrg
deleteOrganizationsLogoByIdOrg()


```js
trello.deleteOrganizationsLogoByIdOrg({
  "idOrg": ""
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name

#### Output
*Output schema unknown*

### addOrganizationsLogoByIdOrg
addOrganizationsLogoByIdOrg()


```js
trello.addOrganizationsLogoByIdOrg({
  "idOrg": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * body **required** [organizations_logo](#organizations_logo)

#### Output
*Output schema unknown*

### getOrganizationsMembersByIdOrg
getOrganizationsMembersByIdOrg()


```js
trello.getOrganizationsMembersByIdOrg({
  "idOrg": ""
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * filter `string`: One of: admins, all, none, normal or owners
  * fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * activity `string`: true or false ; works for premium organizations only.

#### Output
*Output schema unknown*

### updateOrganizationsMembersByIdOrg
updateOrganizationsMembersByIdOrg()


```js
trello.updateOrganizationsMembersByIdOrg({
  "idOrg": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * body **required** [organizations_members](#organizations_members)

#### Output
*Output schema unknown*

### getOrganizationsMembersByIdOrgByFilter
getOrganizationsMembersByIdOrgByFilter()


```js
trello.getOrganizationsMembersByIdOrgByFilter({
  "idOrg": "",
  "filter": ""
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * filter **required** `string`: filter

#### Output
*Output schema unknown*

### deleteOrganizationsMembersByIdOrgByIdMember
deleteOrganizationsMembersByIdOrgByIdMember()


```js
trello.deleteOrganizationsMembersByIdOrgByIdMember({
  "idOrg": "",
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * idMember **required** `string`: idMember

#### Output
*Output schema unknown*

### updateOrganizationsMembersByIdOrgByIdMember
updateOrganizationsMembersByIdOrgByIdMember()


```js
trello.updateOrganizationsMembersByIdOrgByIdMember({
  "idOrg": "",
  "idMember": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * idMember **required** `string`: idMember
  * body **required** [organizations_members](#organizations_members)

#### Output
*Output schema unknown*

### deleteOrganizationsMembersAllByIdOrgByIdMember
deleteOrganizationsMembersAllByIdOrgByIdMember()


```js
trello.deleteOrganizationsMembersAllByIdOrgByIdMember({
  "idOrg": "",
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * idMember **required** `string`: idMember

#### Output
*Output schema unknown*

### getOrganizationsMembersCardsByIdOrgByIdMember
getOrganizationsMembersCardsByIdOrgByIdMember()


```js
trello.getOrganizationsMembersCardsByIdOrgByIdMember({
  "idOrg": "",
  "idMember": ""
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * idMember **required** `string`: idMember
  * actions `string`: all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
  * attachments `string`: A boolean value or &quot;cover&quot; for only card cover attachments
  * attachment_fields `string`: all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
  * members `string`:  true or false
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * checkItemStates `string`:  true or false
  * checklists `string`: One of: all or none
  * board `string`:  true or false
  * board_fields `string`: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
  * list `string`:  true or false
  * list_fields `string`: all or a comma-separated list of: closed, idBoard, name, pos or subscribed
  * filter `string`: One of: all, closed, none, open or visible
  * fields `string`: all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

#### Output
*Output schema unknown*

### updateOrganizationsMembersDeactivatedByIdOrgByIdMember
updateOrganizationsMembersDeactivatedByIdOrgByIdMember()


```js
trello.updateOrganizationsMembersDeactivatedByIdOrgByIdMember({
  "idOrg": "",
  "idMember": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * idMember **required** `string`: idMember
  * body **required** [organizations_members_deactivated](#organizations_members_deactivated)

#### Output
*Output schema unknown*

### getOrganizationsMembersInvitedByIdOrg
getOrganizationsMembersInvitedByIdOrg()


```js
trello.getOrganizationsMembersInvitedByIdOrg({
  "idOrg": ""
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * fields `string`: all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username

#### Output
*Output schema unknown*

### getOrganizationsMembersInvitedByIdOrgByField
getOrganizationsMembersInvitedByIdOrgByField()


```js
trello.getOrganizationsMembersInvitedByIdOrgByField({
  "idOrg": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * field **required** `string`: field

#### Output
*Output schema unknown*

### getOrganizationsMembershipsByIdOrg
getOrganizationsMembershipsByIdOrg()


```js
trello.getOrganizationsMembershipsByIdOrg({
  "idOrg": ""
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * filter `string`: all or a comma-separated list of: active, admin, deactivated, me or normal
  * member `string`:  true or false
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### Output
*Output schema unknown*

### getOrganizationsMembershipsByIdOrgByIdMembership
getOrganizationsMembershipsByIdOrgByIdMembership()


```js
trello.getOrganizationsMembershipsByIdOrgByIdMembership({
  "idOrg": "",
  "idMembership": ""
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * idMembership **required** `string`: idMembership
  * member `string`:  true or false
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### Output
*Output schema unknown*

### updateOrganizationsMembershipsByIdOrgByIdMembership
updateOrganizationsMembershipsByIdOrgByIdMembership()


```js
trello.updateOrganizationsMembershipsByIdOrgByIdMembership({
  "idOrg": "",
  "idMembership": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * idMembership **required** `string`: idMembership
  * body **required** [organizations_memberships](#organizations_memberships)

#### Output
*Output schema unknown*

### updateOrganizationsNameByIdOrg
updateOrganizationsNameByIdOrg()


```js
trello.updateOrganizationsNameByIdOrg({
  "idOrg": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * body **required** [organizations_name](#organizations_name)

#### Output
*Output schema unknown*

### deleteOrganizationsPrefsAssociatedDomainByIdOrg
deleteOrganizationsPrefsAssociatedDomainByIdOrg()


```js
trello.deleteOrganizationsPrefsAssociatedDomainByIdOrg({
  "idOrg": ""
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name

#### Output
*Output schema unknown*

### updateOrganizationsPrefsAssociatedDomainByIdOrg
updateOrganizationsPrefsAssociatedDomainByIdOrg()


```js
trello.updateOrganizationsPrefsAssociatedDomainByIdOrg({
  "idOrg": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * body **required** [prefs_associatedDomain](#prefs_associateddomain)

#### Output
*Output schema unknown*

### updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg
updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg()


```js
trello.updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg({
  "idOrg": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * body **required** [prefs_boardVisibilityRestrict](#prefs_boardvisibilityrestrict)

#### Output
*Output schema unknown*

### updateOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg
updateOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg()


```js
trello.updateOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg({
  "idOrg": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * body **required** [prefs_boardVisibilityRestrict](#prefs_boardvisibilityrestrict)

#### Output
*Output schema unknown*

### updateOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg
updateOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg()


```js
trello.updateOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg({
  "idOrg": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * body **required** [prefs_boardVisibilityRestrict](#prefs_boardvisibilityrestrict)

#### Output
*Output schema unknown*

### updateOrganizationsPrefsExternalMembersDisabledByIdOrg
updateOrganizationsPrefsExternalMembersDisabledByIdOrg()


```js
trello.updateOrganizationsPrefsExternalMembersDisabledByIdOrg({
  "idOrg": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * body **required** [prefs_externalMembersDisabled](#prefs_externalmembersdisabled)

#### Output
*Output schema unknown*

### updateOrganizationsPrefsGoogleAppsVersionByIdOrg
updateOrganizationsPrefsGoogleAppsVersionByIdOrg()


```js
trello.updateOrganizationsPrefsGoogleAppsVersionByIdOrg({
  "idOrg": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * body **required** [prefs_googleAppsVersion](#prefs_googleappsversion)

#### Output
*Output schema unknown*

### deleteOrganizationsPrefsOrgInviteRestrictByIdOrg
deleteOrganizationsPrefsOrgInviteRestrictByIdOrg()


```js
trello.deleteOrganizationsPrefsOrgInviteRestrictByIdOrg({
  "idOrg": "",
  "value": ""
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * value **required** `string`: An email address with optional expansion tokens

#### Output
*Output schema unknown*

### updateOrganizationsPrefsOrgInviteRestrictByIdOrg
updateOrganizationsPrefsOrgInviteRestrictByIdOrg()


```js
trello.updateOrganizationsPrefsOrgInviteRestrictByIdOrg({
  "idOrg": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * body **required** [prefs_orgInviteRestrict](#prefs_orginviterestrict)

#### Output
*Output schema unknown*

### updateOrganizationsPrefsPermissionLevelByIdOrg
updateOrganizationsPrefsPermissionLevelByIdOrg()


```js
trello.updateOrganizationsPrefsPermissionLevelByIdOrg({
  "idOrg": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * body **required** [prefs_permissionLevel](#prefs_permissionlevel)

#### Output
*Output schema unknown*

### updateOrganizationsWebsiteByIdOrg
updateOrganizationsWebsiteByIdOrg()


```js
trello.updateOrganizationsWebsiteByIdOrg({
  "idOrg": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * body **required** [organizations_website](#organizations_website)

#### Output
*Output schema unknown*

### getOrganizationsByIdOrgByField
getOrganizationsByIdOrgByField()


```js
trello.getOrganizationsByIdOrgByField({
  "idOrg": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idOrg **required** `string`: idOrg or name
  * field **required** `string`: field

#### Output
*Output schema unknown*

### getSearch
getSearch()


```js
trello.getSearch({
  "query": "",
  "idOrganizations": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: a string with a length from 1 to 16384
  * idBoards `string`: A comma-separated list of objectIds, 24-character hex strings
  * idOrganizations **required** `string`: A comma-separated list of objectIds, 24-character hex strings
  * idCards `string`: A comma-separated list of objectIds, 24-character hex strings
  * modelTypes `string`: all or a comma-separated list of: actions, boards, cards, members or organizations
  * board_fields `string`: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
  * boards_limit `string`: a number from 1 to 1000
  * card_fields `string`: all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
  * cards_limit `string`: a number from 1 to 1000
  * cards_page `string`: a number from 0 to 100
  * card_board `string`:  true or false
  * card_list `string`:  true or false
  * card_members `string`:  true or false
  * card_stickers `string`:  true or false
  * card_attachments `string`: A boolean value or &quot;cover&quot; for only card cover attachments
  * organization_fields `string`: all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
  * organizations_limit `string`: a number from 1 to 1000
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * members_limit `string`: a number from 1 to 1000
  * partial `string`:  true or false

#### Output
*Output schema unknown*

### getSearchMembers
getSearchMembers()


```js
trello.getSearchMembers({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: a string with a length from 1 to 16384
  * limit `string`: a number from 1 to 20
  * idBoard `string`: An id, or null
  * idOrganization `string`: An id, or null
  * onlyOrgMembers `string`: A boolean

#### Output
*Output schema unknown*

### addSessions
addSessions()


```js
trello.addSessions({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [sessions](#sessions)

#### Output
*Output schema unknown*

### getSessionsSocket
This is the route for WebSocket requests.  See the socket API reference for a description of WebSocket usage.


```js
trello.getSessionsSocket(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### updateSessionsByIdSession
updateSessionsByIdSession()


```js
trello.updateSessionsByIdSession({
  "idSession": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idSession **required** `string`: idSession
  * body **required** [sessions](#sessions)

#### Output
*Output schema unknown*

### updateSessionsStatusByIdSession
updateSessionsStatusByIdSession()


```js
trello.updateSessionsStatusByIdSession({
  "idSession": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idSession **required** `string`: idSession
  * body **required** [sessions_status](#sessions_status)

#### Output
*Output schema unknown*

### deleteTokensByToken
deleteTokensByToken()


```js
trello.deleteTokensByToken(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getTokensByToken
getTokensByToken()


```js
trello.getTokensByToken({}, context)
```

#### Input
* input `object`
  * fields `string`: all or a comma-separated list of: dateCreated, dateExpires, idMember, identifier or permissions
  * webhooks `string`:  true or false

#### Output
*Output schema unknown*

### getTokensMemberByToken
getTokensMemberByToken()


```js
trello.getTokensMemberByToken({}, context)
```

#### Input
* input `object`
  * fields `string`: all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username

#### Output
*Output schema unknown*

### getTokensMemberByTokenByField
getTokensMemberByTokenByField()


```js
trello.getTokensMemberByTokenByField({
  "field": ""
}, context)
```

#### Input
* input `object`
  * field **required** `string`: field

#### Output
*Output schema unknown*

### getTokensWebhooksByToken
getTokensWebhooksByToken()


```js
trello.getTokensWebhooksByToken(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### addTokensWebhooksByToken
addTokensWebhooksByToken()


```js
trello.addTokensWebhooksByToken({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [tokens_webhooks](#tokens_webhooks)

#### Output
*Output schema unknown*

### updateTokensWebhooksByToken
updateTokensWebhooksByToken()


```js
trello.updateTokensWebhooksByToken({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [tokens_webhooks](#tokens_webhooks)

#### Output
*Output schema unknown*

### deleteTokensWebhooksByTokenByIdWebhook
deleteTokensWebhooksByTokenByIdWebhook()


```js
trello.deleteTokensWebhooksByTokenByIdWebhook({
  "idWebhook": ""
}, context)
```

#### Input
* input `object`
  * idWebhook **required** `string`: idWebhook

#### Output
*Output schema unknown*

### getTokensWebhooksByTokenByIdWebhook
getTokensWebhooksByTokenByIdWebhook()


```js
trello.getTokensWebhooksByTokenByIdWebhook({
  "idWebhook": ""
}, context)
```

#### Input
* input `object`
  * idWebhook **required** `string`: idWebhook

#### Output
*Output schema unknown*

### getTokensByTokenByField
getTokensByTokenByField()


```js
trello.getTokensByTokenByField({
  "field": ""
}, context)
```

#### Input
* input `object`
  * field **required** `string`: field

#### Output
*Output schema unknown*

### getTypesById
getTypesById()


```js
trello.getTypesById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: id

#### Output
*Output schema unknown*

### addWebhooks
addWebhooks()


```js
trello.addWebhooks({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [webhooks](#webhooks)

#### Output
*Output schema unknown*

### updateWebhooks
updateWebhooks()


```js
trello.updateWebhooks({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [webhooks](#webhooks)

#### Output
*Output schema unknown*

### deleteWebhooksByIdWebhook
deleteWebhooksByIdWebhook()


```js
trello.deleteWebhooksByIdWebhook({
  "idWebhook": ""
}, context)
```

#### Input
* input `object`
  * idWebhook **required** `string`: idWebhook

#### Output
*Output schema unknown*

### getWebhooksByIdWebhook
getWebhooksByIdWebhook()


```js
trello.getWebhooksByIdWebhook({
  "idWebhook": ""
}, context)
```

#### Input
* input `object`
  * idWebhook **required** `string`: idWebhook

#### Output
*Output schema unknown*

### updateWebhooksByIdWebhook
updateWebhooksByIdWebhook()


```js
trello.updateWebhooksByIdWebhook({
  "idWebhook": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idWebhook **required** `string`: idWebhook
  * body **required** [webhooks](#webhooks)

#### Output
*Output schema unknown*

### updateWebhooksActiveByIdWebhook
updateWebhooksActiveByIdWebhook()


```js
trello.updateWebhooksActiveByIdWebhook({
  "idWebhook": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idWebhook **required** `string`: idWebhook
  * body **required** [webhooks_active](#webhooks_active)

#### Output
*Output schema unknown*

### updateWebhooksCallbackURLByIdWebhook
updateWebhooksCallbackURLByIdWebhook()


```js
trello.updateWebhooksCallbackURLByIdWebhook({
  "idWebhook": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idWebhook **required** `string`: idWebhook
  * body **required** [webhooks_callbackURL](#webhooks_callbackurl)

#### Output
*Output schema unknown*

### updateWebhooksDescriptionByIdWebhook
updateWebhooksDescriptionByIdWebhook()


```js
trello.updateWebhooksDescriptionByIdWebhook({
  "idWebhook": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idWebhook **required** `string`: idWebhook
  * body **required** [webhooks_description](#webhooks_description)

#### Output
*Output schema unknown*

### updateWebhooksIdModelByIdWebhook
updateWebhooksIdModelByIdWebhook()


```js
trello.updateWebhooksIdModelByIdWebhook({
  "idWebhook": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * idWebhook **required** `string`: idWebhook
  * body **required** [webhooks_idModel](#webhooks_idmodel)

#### Output
*Output schema unknown*

### getWebhooksByIdWebhookByField
getWebhooksByIdWebhookByField()


```js
trello.getWebhooksByIdWebhookByField({
  "idWebhook": "",
  "field": ""
}, context)
```

#### Input
* input `object`
  * idWebhook **required** `string`: idWebhook
  * field **required** `string`: field

#### Output
*Output schema unknown*



## Definitions

### actions
* actions `object`
  * text `string`: a string with a length from 1 to 16384

### actions_comments
* actions_comments `object`
  * text `string`: a string with a length from 1 to 16384

### actions_text
* actions_text `object`
  * value `string`: a string with a length from 1 to 16384

### boards
* boards `object`
  * closed `string`:  true or false
  * desc `string`: a string with a length from 0 to 16384
  * idBoardSource `string`: The id of the board to copy into the new board
  * idOrganization `string`: The id or name of the organization to add the board to.
  * keepFromSource `string`: Components of the source board to copy.
  * labelNames/blue `string`: a string with a length from 0 to 16384
  * labelNames/green `string`: a string with a length from 0 to 16384
  * labelNames/orange `string`: a string with a length from 0 to 16384
  * labelNames/purple `string`: a string with a length from 0 to 16384
  * labelNames/red `string`: a string with a length from 0 to 16384
  * labelNames/yellow `string`: a string with a length from 0 to 16384
  * name `string`: a string with a length from 1 to 16384
  * powerUps `string`: all or a comma-separated list of: calendar, cardAging, recap or voting
  * prefs/background `string`: A standard background name, or the id of a custom background
  * prefs/calendarFeedEnabled `string`:  true or false
  * prefs/cardAging `string`: One of: pirate or regular
  * prefs/cardCovers `string`:  true or false
  * prefs/comments `string`: One of: disabled, members, observers, org or public
  * prefs/invitations `string`: One of: admins or members
  * prefs/permissionLevel `string`: One of: org, private or public
  * prefs/selfJoin `string`:  true or false
  * prefs/voting `string`: One of: disabled, members, observers, org or public
  * prefs_background `string`: a string with a length from 0 to 16384
  * prefs_cardAging `string`: One of: pirate or regular
  * prefs_cardCovers `string`:  true or false
  * prefs_comments `string`: One of: disabled, members, observers, org or public
  * prefs_invitations `string`: One of: admins or members
  * prefs_permissionLevel `string`: One of: org, private or public
  * prefs_selfJoin `string`:  true or false
  * prefs_voting `string`: One of: disabled, members, observers, org or public
  * subscribed `string`:  true or false

### boards_checklists
* boards_checklists `object`
  * name `string`: a string with a length from 1 to 16384

### boards_closed
* boards_closed `object`
  * value `string`:  true or false

### boards_desc
* boards_desc `object`
  * value `string`: a string with a length from 0 to 16384

### boards_idOrganization
* boards_idOrganization `object`
  * value `string`: a string with a length from 0 to 16384

### boards_labels
* boards_labels `object`
  * color `string`: A valid label color or null
  * name `string`: a string with a length from 0 to 16384

### boards_lists
* boards_lists `object`
  * name `string`: a string with a length from 1 to 16384
  * pos `string`: A position. top , bottom , or a positive number.

### boards_members
* boards_members `object`
  * email `string`: An email address
  * fullName `string`: A string with a length of at least 1.  Cannot begin or end with a space.
  * type `string`: One of: admin, normal or observer

### boards_memberships
* boards_memberships `object`
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * type `string`: One of: admin, normal or observer

### boards_name
* boards_name `object`
  * value `string`: a string with a length from 1 to 16384

### boards_powerUps
* boards_powerUps `object`
  * value `string`: One of: calendar, cardAging, recap or voting

### boards_subscribed
* boards_subscribed `object`
  * value `string`:  true or false

### cards
* cards `object`
  * closed `string`:  true or false
  * desc `string`: a string with a length from 0 to 16384
  * due `string`: A date, or null
  * fileSource `string`: A file
  * idAttachmentCover `string`: Id of the image attachment of this card to use as its cover, or null for no cover
  * idBoard `string`: id of the board the card should be moved to
  * idCardSource `string`: The id of the card to copy into a new card.
  * idLabels `string`: A comma-separated list of objectIds, 24-character hex strings
  * idList `string`: id of the list that the card should be added to
  * idMembers `string`: A comma-separated list of objectIds, 24-character hex strings
  * keepFromSource `string`: Properties of the card to copy over from the source.
  * labels `string`: all or a comma-separated list of: blue, green, orange, purple, red or yellow
  * name `string`: The name of the new card.  It isn&#39;t required if the name is being copied from provided by a URL, file or card that is being copied.
  * pos `string`: A position. top , bottom , or a positive number.
  * subscribed `string`:  true or false
  * urlSource `string`: A URL starting with http:// or https:// or null

### cards_actions_comments
* cards_actions_comments `object`
  * text `string`: a string with a length from 1 to 16384

### cards_attachments
* cards_attachments `object`
  * file `string`: A file
  * mimeType `string`: a string with a length from 0 to 256
  * name `string`: a string with a length from 0 to 256
  * url `string`: A URL starting with http:// or https:// or null

### cards_checklist_checkItem
* cards_checklist_checkItem `object`
  * name `string`: a string with a length from 1 to 16384
  * pos `string`: A position. top , bottom , or a positive number.

### cards_checklist_checkItem_name
* cards_checklist_checkItem_name `object`
  * value `string`: a string with a length from 1 to 16384

### cards_checklist_checkItem_pos
* cards_checklist_checkItem_pos `object`
  * value `string`: A position. top , bottom , or a positive number.

### cards_checklist_checkItem_state
* cards_checklist_checkItem_state `object`
  * value `string`: One of: complete, false, incomplete or true

### cards_checklist_idChecklistCurrent_checkItem
* cards_checklist_idChecklistCurrent_checkItem `object`
  * idChecklist `string`: An id, or null
  * name `string`: a string with a length from 1 to 16384
  * pos `string`: A position. top , bottom , or a positive number.
  * state `string`: One of: complete, false, incomplete or true

### cards_checklists
* cards_checklists `object`
  * idChecklistSource `string`: The id of the source checklist to copy into a new checklist.
  * name `string`: a string with a length from 0 to 16384
  * value `string`: The id of the checklist to add to the card, or null to create a new one.

### cards_closed
* cards_closed `object`
  * value `string`:  true or false

### cards_desc
* cards_desc `object`
  * value `string`: a string with a length from 0 to 16384

### cards_due
* cards_due `object`
  * value `string`: A date, or null

### cards_idAttachmentCover
* cards_idAttachmentCover `object`
  * value `string`: Id of the image attachment of this card to use as its cover, or null for no cover

### cards_idBoard
* cards_idBoard `object`
  * idList `string`: id of the list that the card should be moved to on the new board
  * value `string`: id of the board the card should be moved to

### cards_idLabels
* cards_idLabels `object`
  * value `string`: The id of the label to add

### cards_idList
* cards_idList `object`
  * value `string`: id of the list the card should be moved to

### cards_idMembers
* cards_idMembers `object`
  * value `string`: The id of the member to add to the card

### cards_labels
* cards_labels `object`
  * color `string`: A valid label color or null
  * name `string`: a string with a length from 0 to 16384
  * value `string`: all or a comma-separated list of: blue, green, orange, purple, red or yellow

### cards_membersVoted
* cards_membersVoted `object`
  * value `string`: The id of the member to vote &#39;yes&#39; on the card

### cards_name
* cards_name `object`
  * value `string`: a string with a length from 1 to 16384

### cards_pos
* cards_pos `object`
  * value `string`: A position. top , bottom , or a positive number.

### cards_stickers
* cards_stickers `object`
  * image `string`: a string with a length from 0 to 16384
  * left `string`: undefined
  * rotate `string`: undefined
  * top `string`: undefined
  * zIndex `string`: Valid Z values for stickers, must be an integer

### cards_subscribed
* cards_subscribed `object`
  * value `string`:  true or false

### checklists
* checklists `object`
  * idBoard `string`: id of the board that the checklist should be added to
  * idCard `string`: id of the card that the checklist should be added to
  * idChecklistSource `string`: The id of the source checklist to copy into a new checklist.
  * name `string`: a string with a length from 0 to 16384
  * pos `string`: A position. top , bottom , or a positive number.

### checklists_checkItems
* checklists_checkItems `object`
  * checked `string`:  true or false
  * name `string`: a string with a length from 1 to 16384
  * pos `string`: A position. top , bottom , or a positive number.

### checklists_idCard
* checklists_idCard `object`
  * value `string`: The id of the card that the checklist is on

### checklists_name
* checklists_name `object`
  * value `string`: a string with a length from 1 to 16384

### checklists_pos
* checklists_pos `object`
  * value `string`: A position. top , bottom , or a positive number.

### labelNames_blue
* labelNames_blue `object`
  * value `string`: a string with a length from 0 to 16384

### labelNames_green
* labelNames_green `object`
  * value `string`: a string with a length from 0 to 16384

### labelNames_orange
* labelNames_orange `object`
  * value `string`: a string with a length from 0 to 16384

### labelNames_purple
* labelNames_purple `object`
  * value `string`: a string with a length from 0 to 16384

### labelNames_red
* labelNames_red `object`
  * value `string`: a string with a length from 0 to 16384

### labelNames_yellow
* labelNames_yellow `object`
  * value `string`: a string with a length from 0 to 16384

### labels
* labels `object`
  * color `string`: A valid label color or null
  * idBoard `string`: An id
  * name `string`: a string with a length from 0 to 16384

### labels_color
* labels_color `object`
  * value `string`: A valid label color or null

### labels_name
* labels_name `object`
  * value `string`: a string with a length from 0 to 16384

### lists
* lists `object`
  * closed `string`:  true or false
  * idBoard `string`: id of the board that the list should be added to
  * idListSource `string`: The id of the list to copy into a new list.
  * name `string`: a string with a length from 1 to 16384
  * pos `string`: A position. top , bottom , or a positive number.
  * subscribed `string`:  true or false

### lists_cards
* lists_cards `object`
  * desc `string`: a string with a length from 0 to 16384
  * due `string`: A date, or null
  * idMembers `string`: A comma-separated list of objectIds, 24-character hex strings
  * labels `string`: all or a comma-separated list of: blue, green, orange, purple, red or yellow
  * name `string`: a string with a length from 1 to 16384

### lists_closed
* lists_closed `object`
  * value `string`:  true or false

### lists_idBoard
* lists_idBoard `object`
  * pos `string`: position of the list on the new board
  * value `string`: id of the board the list should be moved to

### lists_moveAllCards
* lists_moveAllCards `object`
  * idBoard `string`: id of the board that the cards should be moved to

### lists_name
* lists_name `object`
  * value `string`: a string with a length from 1 to 16384

### lists_pos
* lists_pos `object`
  * value `string`: A position. top , bottom , or a positive number.

### lists_subscribed
* lists_subscribed `object`
  * value `string`:  true or false

### members
* members `object`
  * avatarSource `string`: One of: gravatar, none or upload
  * bio `string`: a string with a length from 0 to 16384
  * fullName `string`: A string with a length of at least 1.  Cannot begin or end with a space.
  * initials `string`: A string with a length from 1 to 4.  Cannot begin or end with a space
  * prefs/colorBlind `string`:  true or false
  * prefs/locale `string`: a string with a length from 0 to 255
  * prefs/minutesBetweenSummaries `string`: -1 (disabled), 1 or 60
  * username `string`: A string with a length of at least 3.  Only lowercase letters, underscores, and numbers are allowed.  Must be unique.

### members_avatar
* members_avatar `object`
  * file `string`: A file

### members_avatarSource
* members_avatarSource `object`
  * value `string`: One of: gravatar, none or upload

### members_bio
* members_bio `object`
  * value `string`: a string with a length from 0 to 16384

### members_boardBackgrounds
* members_boardBackgrounds `object`
  * brightness `string`: One of: dark, light or unknown
  * file `string`: A file
  * tile `string`:  true or false

### members_boardStars
* members_boardStars `object`
  * idBoard `string`: The id of the board to star
  * pos `string`: A position. top , bottom , or a positive number.

### members_boardStars_idBoard
* members_boardStars_idBoard `object`
  * value `string`: An id

### members_boardStars_pos
* members_boardStars_pos `object`
  * value `string`: A position. top , bottom , or a positive number.

### members_customBoardBackgrounds
* members_customBoardBackgrounds `object`
  * brightness `string`: One of: dark, light or unknown
  * file `string`: A file
  * tile `string`:  true or false

### members_customEmoji
* members_customEmoji `object`
  * file `string`: A file
  * name `string`: a string with a length from 2 to 64

### members_customStickers
* members_customStickers `object`
  * file `string`: A file

### members_fullName
* members_fullName `object`
  * value `string`: A string with a length of at least 1.  Cannot begin or end with a space.

### members_initials
* members_initials `object`
  * value `string`: A string with a length from 1 to 4.  Cannot begin or end with a space

### members_oneTimeMessagesDismissed
* members_oneTimeMessagesDismissed `object`
  * value `string`: Type of message dismissed

### members_savedSearches
* members_savedSearches `object`
  * name `string`: A non-empty string with at least one non-space character
  * pos `string`: A position. top , bottom , or a positive number.
  * query `string`: a string with a length from 1 to 16384

### members_savedSearches_name
* members_savedSearches_name `object`
  * value `string`: A non-empty string with at least one non-space character

### members_savedSearches_pos
* members_savedSearches_pos `object`
  * value `string`: A position. top , bottom , or a positive number.

### members_savedSearches_query
* members_savedSearches_query `object`
  * value `string`: a string with a length from 1 to 16384

### members_username
* members_username `object`
  * value `string`: A string with a length of at least 3.  Only lowercase letters, underscores, and numbers are allowed.  Must be unique.

### myPrefs_emailPosition
* myPrefs_emailPosition `object`
  * value `string`: One of: bottom or top

### myPrefs_idEmailList
* myPrefs_idEmailList `object`
  * value `string`: An id

### myPrefs_showListGuide
* myPrefs_showListGuide `object`
  * value `string`:  true or false

### myPrefs_showSidebar
* myPrefs_showSidebar `object`
  * value `string`:  true or false

### myPrefs_showSidebarActivity
* myPrefs_showSidebarActivity `object`
  * value `string`:  true or false

### myPrefs_showSidebarBoardActions
* myPrefs_showSidebarBoardActions `object`
  * value `string`:  true or false

### myPrefs_showSidebarMembers
* myPrefs_showSidebarMembers `object`
  * value `string`:  true or false

### notifications
* notifications `object`
  * unread `string`:  true or false

### notifications_unread
* notifications_unread `object`
  * value `string`:  true or false

### organizations
* organizations `object`
  * desc `string`: a string with a length from 0 to 16384
  * displayName `string`: A string with a length of at least 1.  Cannot begin or end with a space.
  * name `string`: a string with a length from 0 to 16384
  * prefs/associatedDomain `string`: The google apps domain to link this org to.
  * prefs/boardVisibilityRestrict/org `string`: One of: admin, none or org
  * prefs/boardVisibilityRestrict/private `string`: One of: admin, none or org
  * prefs/boardVisibilityRestrict/public `string`: One of: admin, none or org
  * prefs/externalMembersDisabled `string`:  true or false
  * prefs/googleAppsVersion `string`: a number from 1 to 2
  * prefs/orgInviteRestrict `string`: An email address with optional expansion tokens
  * prefs/permissionLevel `string`: One of: private or public
  * website `string`: A URL starting with http:// or https:// or null

### organizations_desc
* organizations_desc `object`
  * value `string`: a string with a length from 0 to 16384

### organizations_displayName
* organizations_displayName `object`
  * value `string`: A string with a length of at least 1.  Cannot begin or end with a space.

### organizations_logo
* organizations_logo `object`
  * file `string`: A file

### organizations_members
* organizations_members `object`
  * email `string`: An email address
  * fullName `string`: A string with a length of at least 1.  Cannot begin or end with a space.
  * type `string`: One of: admin, normal or observer

### organizations_members_deactivated
* organizations_members_deactivated `object`
  * value `string`:  true or false

### organizations_memberships
* organizations_memberships `object`
  * member_fields `string`: all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
  * type `string`: One of: admin, normal or observer

### organizations_name
* organizations_name `object`
  * value `string`: A string with a length of at least 3.  Only lowercase letters, underscores, and numbers are allowed.  Must be unique.

### organizations_website
* organizations_website `object`
  * value `string`: A URL starting with http:// or https:// or null

### prefs_associatedDomain
* prefs_associatedDomain `object`
  * value `string`: The google apps domain to link this org to.

### prefs_background
* prefs_background `object`
  * value `string`: A standard background name, or the id of a custom background

### prefs_boardVisibilityRestrict
* prefs_boardVisibilityRestrict `object`
  * value `string`: One of: admin, none or org

### prefs_calendarFeedEnabled
* prefs_calendarFeedEnabled `object`
  * value `string`:  true or false

### prefs_cardAging
* prefs_cardAging `object`
  * value `string`: One of: pirate or regular

### prefs_cardCovers
* prefs_cardCovers `object`
  * value `string`:  true or false

### prefs_colorBlind
* prefs_colorBlind `object`
  * value `string`:  true or false

### prefs_comments
* prefs_comments `object`
  * value `string`: One of: disabled, members, observers, org or public

### prefs_externalMembersDisabled
* prefs_externalMembersDisabled `object`
  * value `string`:  true or false

### prefs_googleAppsVersion
* prefs_googleAppsVersion `object`
  * value `string`: a number from 1 to 2

### prefs_invitations
* prefs_invitations `object`
  * value `string`: One of: admins or members

### prefs_locale
* prefs_locale `object`
  * value `string`: a string with a length from 0 to 255

### prefs_minutesBetweenSummaries
* prefs_minutesBetweenSummaries `object`
  * value `string`: -1 (disabled), 1 or 60

### prefs_orgInviteRestrict
* prefs_orgInviteRestrict `object`
  * value `string`: An email address with optional expansion tokens

### prefs_permissionLevel
* prefs_permissionLevel `object`
  * value `string`: One of: private or public

### prefs_selfJoin
* prefs_selfJoin `object`
  * value `string`:  true or false

### prefs_voting
* prefs_voting `object`
  * value `string`: One of: disabled, members, observers, org or public

### sessions
* sessions `object`
  * idBoard `string`: The id of the board you&#39;re viewing.  Boards with no viewers will not get updates about members&#39; statuses.
  * status `string`: One of: active, disconnected or idle

### sessions_status
* sessions_status `object`
  * value `string`: One of: active, disconnected or idle

### tokens_webhooks
* tokens_webhooks `object`
  * callbackURL `string`: A valid URL that is reachable with a HEAD request
  * description `string`: a string with a length from 0 to 16384
  * idModel `string`: id of the model to be monitored

### webhooks
* webhooks `object`
  * active `string`:  true or false
  * callbackURL `string`: A valid URL that is reachable with a HEAD request
  * description `string`: a string with a length from 0 to 16384
  * idModel `string`: id of the model that should be hooked

### webhooks_active
* webhooks_active `object`
  * value `string`:  true or false

### webhooks_callbackURL
* webhooks_callbackURL `object`
  * value `string`: A valid URL that is reachable with a HEAD request

### webhooks_description
* webhooks_description `object`
  * value `string`: a string with a length from 0 to 16384

### webhooks_idModel
* webhooks_idModel `object`
  * value `string`: id of the model to be monitored


