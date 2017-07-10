# @datafire/trello
This document describes the REST API of Trello as published by Trello.com.
 - <a href='https://trello.com/docs/index.html' target='_blank'>Official Documentation</a>
 - <a href='https://trello.com/docs/api' target='_blank'>The HTML pages that were scraped in order to generate this specification.</a>

## Operation: deleteActionsByIdAction
deleteActionsByIdAction()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idAction": {
      "type": "string",
      "description": "idAction"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idAction",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getActionsByIdAction
getActionsByIdAction()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idAction": {
      "type": "string",
      "description": "idAction"
    },
    "display": {
      "type": "string",
      "description": " true or false"
    },
    "entities": {
      "type": "string",
      "description": " true or false"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
    },
    "member": {
      "type": "string",
      "description": " true or false"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "memberCreator": {
      "type": "string",
      "description": " true or false"
    },
    "memberCreator_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idAction",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateActionsByIdAction
updateActionsByIdAction()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idAction": {
      "type": "string",
      "description": "idAction"
    },
    "body": {
      "$ref": "#/definitions/actions"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idAction",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getActionsBoardByIdAction
getActionsBoardByIdAction()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idAction": {
      "type": "string",
      "description": "idAction"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idAction",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getActionsBoardByIdActionByField
getActionsBoardByIdActionByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idAction": {
      "type": "string",
      "description": "idAction"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idAction",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getActionsCardByIdAction
getActionsCardByIdAction()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idAction": {
      "type": "string",
      "description": "idAction"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idAction",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getActionsCardByIdActionByField
getActionsCardByIdActionByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idAction": {
      "type": "string",
      "description": "idAction"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idAction",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getActionsDisplayByIdAction
getActionsDisplayByIdAction()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idAction": {
      "type": "string",
      "description": "idAction"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idAction",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getActionsEntitiesByIdAction
getActionsEntitiesByIdAction()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idAction": {
      "type": "string",
      "description": "idAction"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idAction",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getActionsListByIdAction
getActionsListByIdAction()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idAction": {
      "type": "string",
      "description": "idAction"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idAction",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getActionsListByIdActionByField
getActionsListByIdActionByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idAction": {
      "type": "string",
      "description": "idAction"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idAction",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getActionsMemberByIdAction
getActionsMemberByIdAction()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idAction": {
      "type": "string",
      "description": "idAction"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idAction",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getActionsMemberByIdActionByField
getActionsMemberByIdActionByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idAction": {
      "type": "string",
      "description": "idAction"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idAction",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getActionsMemberCreatorByIdAction
getActionsMemberCreatorByIdAction()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idAction": {
      "type": "string",
      "description": "idAction"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idAction",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getActionsMemberCreatorByIdActionByField
getActionsMemberCreatorByIdActionByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idAction": {
      "type": "string",
      "description": "idAction"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idAction",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getActionsOrganizationByIdAction
getActionsOrganizationByIdAction()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idAction": {
      "type": "string",
      "description": "idAction"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idAction",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getActionsOrganizationByIdActionByField
getActionsOrganizationByIdActionByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idAction": {
      "type": "string",
      "description": "idAction"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idAction",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateActionsTextByIdAction
updateActionsTextByIdAction()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idAction": {
      "type": "string",
      "description": "idAction"
    },
    "body": {
      "$ref": "#/definitions/actions_text"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idAction",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getActionsByIdActionByField
getActionsByIdActionByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idAction": {
      "type": "string",
      "description": "idAction"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idAction",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBatch
getBatch()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "urls": {
      "type": "string",
      "description": "list of API v1 GET routes, not including the version prefix"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "urls",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addBoards
addBoards()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/boards"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsByIdBoard
getBoardsByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "actions": {
      "type": "string",
      "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
    },
    "actions_entities": {
      "type": "string",
      "description": " true or false"
    },
    "actions_display": {
      "type": "string",
      "description": " true or false"
    },
    "actions_format": {
      "type": "string",
      "description": "One of: count, list or minimal"
    },
    "actions_since": {
      "type": "string",
      "description": "A date, null or lastView"
    },
    "actions_limit": {
      "type": "string",
      "description": "a number from 0 to 1000"
    },
    "action_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
    },
    "action_member": {
      "type": "string",
      "description": " true or false"
    },
    "action_member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "action_memberCreator": {
      "type": "string",
      "description": " true or false"
    },
    "action_memberCreator_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "cards": {
      "type": "string",
      "description": "One of: all, closed, none, open or visible"
    },
    "card_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
    },
    "card_attachments": {
      "type": "string",
      "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
    },
    "card_attachment_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
    },
    "card_checklists": {
      "type": "string",
      "description": "One of: all or none"
    },
    "card_stickers": {
      "type": "string",
      "description": " true or false"
    },
    "boardStars": {
      "type": "string",
      "description": "One of: mine or none"
    },
    "labels": {
      "type": "string",
      "description": "One of: all or none"
    },
    "label_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: color, idBoard, name or uses"
    },
    "labels_limit": {
      "type": "string",
      "description": "a number from 0 to 1000"
    },
    "lists": {
      "type": "string",
      "description": "One of: all, closed, none or open"
    },
    "list_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
    },
    "memberships": {
      "type": "string",
      "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
    },
    "memberships_member": {
      "type": "string",
      "description": " true or false"
    },
    "memberships_member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "members": {
      "type": "string",
      "description": "One of: admins, all, none, normal or owners"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "membersInvited": {
      "type": "string",
      "description": "One of: admins, all, none, normal or owners"
    },
    "membersInvited_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "checklists": {
      "type": "string",
      "description": "One of: all or none"
    },
    "checklist_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: idBoard, idCard, name or pos"
    },
    "organization": {
      "type": "string",
      "description": " true or false"
    },
    "organization_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
    },
    "organization_memberships": {
      "type": "string",
      "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
    },
    "myPrefs": {
      "type": "string",
      "description": " true or false"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsByIdBoard
updateBoardsByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/boards"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsActionsByIdBoard
getBoardsActionsByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "entities": {
      "type": "string",
      "description": " true or false"
    },
    "display": {
      "type": "string",
      "description": " true or false"
    },
    "filter": {
      "type": "string",
      "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
    },
    "limit": {
      "type": "string",
      "description": "a number from 0 to 1000"
    },
    "format": {
      "type": "string",
      "description": "One of: count, list or minimal"
    },
    "since": {
      "type": "string",
      "description": "A date, null or lastView"
    },
    "before": {
      "type": "string",
      "description": "A date, or null"
    },
    "page": {
      "type": "string",
      "description": "Page * limit must be less than 1000"
    },
    "idModels": {
      "type": "string",
      "description": "Only return actions related to these model ids"
    },
    "member": {
      "type": "string",
      "description": " true or false"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "memberCreator": {
      "type": "string",
      "description": " true or false"
    },
    "memberCreator_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsBoardStarsByIdBoard
getBoardsBoardStarsByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "filter": {
      "type": "string",
      "description": "One of: mine or none"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addBoardsCalendarKeyGenerateByIdBoard
addBoardsCalendarKeyGenerateByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsCardsByIdBoard
getBoardsCardsByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "actions": {
      "type": "string",
      "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
    },
    "attachments": {
      "type": "string",
      "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
    },
    "attachment_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
    },
    "stickers": {
      "type": "string",
      "description": " true or false"
    },
    "members": {
      "type": "string",
      "description": " true or false"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "checkItemStates": {
      "type": "string",
      "description": " true or false"
    },
    "checklists": {
      "type": "string",
      "description": "One of: all or none"
    },
    "limit": {
      "type": "string",
      "description": "a number from 1 to 1000"
    },
    "since": {
      "type": "string",
      "description": "A date, or null"
    },
    "before": {
      "type": "string",
      "description": "A date, or null"
    },
    "filter": {
      "type": "string",
      "description": "One of: all, closed, none, open or visible"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsCardsByIdBoardByFilter
getBoardsCardsByIdBoardByFilter()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "filter": {
      "type": "string",
      "description": "filter"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "filter",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsCardsByIdBoardByIdCard
getBoardsCardsByIdBoardByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "idCard": {
      "type": "string",
      "description": "idCard"
    },
    "attachments": {
      "type": "string",
      "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
    },
    "attachment_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
    },
    "actions": {
      "type": "string",
      "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
    },
    "actions_entities": {
      "type": "string",
      "description": " true or false"
    },
    "actions_display": {
      "type": "string",
      "description": " true or false"
    },
    "actions_limit": {
      "type": "string",
      "description": "a number from 0 to 1000"
    },
    "action_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
    },
    "action_memberCreator_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "members": {
      "type": "string",
      "description": " true or false"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "checkItemStates": {
      "type": "string",
      "description": " true or false"
    },
    "checkItemState_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: idCheckItem or state"
    },
    "labels": {
      "type": "string",
      "description": " true or false"
    },
    "checklists": {
      "type": "string",
      "description": "One of: all or none"
    },
    "checklist_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: idBoard, idCard, name or pos"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "idCard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsChecklistsByIdBoard
getBoardsChecklistsByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "cards": {
      "type": "string",
      "description": "One of: all, closed, none, open or visible"
    },
    "card_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
    },
    "checkItems": {
      "type": "string",
      "description": "One of: all or none"
    },
    "checkItem_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: name, nameData, pos, state or type"
    },
    "filter": {
      "type": "string",
      "description": "One of: all or none"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: idBoard, idCard, name or pos"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addBoardsChecklistsByIdBoard
addBoardsChecklistsByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/boards_checklists"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsClosedByIdBoard
updateBoardsClosedByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/boards_closed"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsDeltasByIdBoard
getBoardsDeltasByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "tags": {
      "type": "string",
      "description": "A valid tag for subscribing"
    },
    "ixLastUpdate": {
      "type": "string",
      "description": "a number from -1 to Infinity"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "tags",
    "ixLastUpdate",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsDescByIdBoard
updateBoardsDescByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/boards_desc"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addBoardsEmailKeyGenerateByIdBoard
addBoardsEmailKeyGenerateByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsIdOrganizationByIdBoard
updateBoardsIdOrganizationByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/boards_idOrganization"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsLabelNamesBlueByIdBoard
updateBoardsLabelNamesBlueByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/labelNames_blue"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsLabelNamesGreenByIdBoard
updateBoardsLabelNamesGreenByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/labelNames_green"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsLabelNamesOrangeByIdBoard
updateBoardsLabelNamesOrangeByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/labelNames_orange"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsLabelNamesPurpleByIdBoard
updateBoardsLabelNamesPurpleByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/labelNames_purple"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsLabelNamesRedByIdBoard
updateBoardsLabelNamesRedByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/labelNames_red"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsLabelNamesYellowByIdBoard
updateBoardsLabelNamesYellowByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/labelNames_yellow"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsLabelsByIdBoard
getBoardsLabelsByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: color, idBoard, name or uses"
    },
    "limit": {
      "type": "string",
      "description": "a number from 0 to 1000"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addBoardsLabelsByIdBoard
addBoardsLabelsByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/boards_labels"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsLabelsByIdBoardByIdLabel
getBoardsLabelsByIdBoardByIdLabel()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "idLabel": {
      "type": "string",
      "description": "idLabel"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: color, idBoard, name or uses"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "idLabel",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsListsByIdBoard
getBoardsListsByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "cards": {
      "type": "string",
      "description": "One of: all, closed, none, open or visible"
    },
    "card_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
    },
    "filter": {
      "type": "string",
      "description": "One of: all, closed, none or open"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addBoardsListsByIdBoard
addBoardsListsByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/boards_lists"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsListsByIdBoardByFilter
getBoardsListsByIdBoardByFilter()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "filter": {
      "type": "string",
      "description": "filter"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "filter",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addBoardsMarkAsViewedByIdBoard
addBoardsMarkAsViewedByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsMembersByIdBoard
getBoardsMembersByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "filter": {
      "type": "string",
      "description": "One of: admins, all, none, normal or owners"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "activity": {
      "type": "string",
      "description": "true or false ; works for premium organizations only."
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsMembersByIdBoard
updateBoardsMembersByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/boards_members"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsMembersByIdBoardByFilter
getBoardsMembersByIdBoardByFilter()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "filter": {
      "type": "string",
      "description": "filter"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "filter",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteBoardsMembersByIdBoardByIdMember
deleteBoardsMembersByIdBoardByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "idMember": {
      "type": "string",
      "description": "idMember"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsMembersByIdBoardByIdMember
updateBoardsMembersByIdBoardByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "idMember": {
      "type": "string",
      "description": "idMember"
    },
    "body": {
      "$ref": "#/definitions/boards_members"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "idMember",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsMembersCardsByIdBoardByIdMember
getBoardsMembersCardsByIdBoardByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "idMember": {
      "type": "string",
      "description": "idMember"
    },
    "actions": {
      "type": "string",
      "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
    },
    "attachments": {
      "type": "string",
      "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
    },
    "attachment_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
    },
    "members": {
      "type": "string",
      "description": " true or false"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "checkItemStates": {
      "type": "string",
      "description": " true or false"
    },
    "checklists": {
      "type": "string",
      "description": "One of: all or none"
    },
    "board": {
      "type": "string",
      "description": " true or false"
    },
    "board_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
    },
    "list": {
      "type": "string",
      "description": " true or false"
    },
    "list_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
    },
    "filter": {
      "type": "string",
      "description": "One of: all, closed, none, open or visible"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsMembersInvitedByIdBoard
getBoardsMembersInvitedByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsMembersInvitedByIdBoardByField
getBoardsMembersInvitedByIdBoardByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsMembershipsByIdBoard
getBoardsMembershipsByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "filter": {
      "type": "string",
      "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
    },
    "member": {
      "type": "string",
      "description": " true or false"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsMembershipsByIdBoardByIdMembership
getBoardsMembershipsByIdBoardByIdMembership()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "idMembership": {
      "type": "string",
      "description": "idMembership"
    },
    "member": {
      "type": "string",
      "description": " true or false"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "idMembership",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsMembershipsByIdBoardByIdMembership
updateBoardsMembershipsByIdBoardByIdMembership()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "idMembership": {
      "type": "string",
      "description": "idMembership"
    },
    "body": {
      "$ref": "#/definitions/boards_memberships"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "idMembership",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsMyPrefsByIdBoard
getBoardsMyPrefsByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsMyPrefsEmailPositionByIdBoard
updateBoardsMyPrefsEmailPositionByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/myPrefs_emailPosition"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsMyPrefsIdEmailListByIdBoard
updateBoardsMyPrefsIdEmailListByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/myPrefs_idEmailList"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsMyPrefsShowListGuideByIdBoard
updateBoardsMyPrefsShowListGuideByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/myPrefs_showListGuide"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsMyPrefsShowSidebarByIdBoard
updateBoardsMyPrefsShowSidebarByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/myPrefs_showSidebar"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsMyPrefsShowSidebarActivityByIdBoard
updateBoardsMyPrefsShowSidebarActivityByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/myPrefs_showSidebarActivity"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard
updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/myPrefs_showSidebarBoardActions"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsMyPrefsShowSidebarMembersByIdBoard
updateBoardsMyPrefsShowSidebarMembersByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/myPrefs_showSidebarMembers"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsNameByIdBoard
updateBoardsNameByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/boards_name"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsOrganizationByIdBoard
getBoardsOrganizationByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsOrganizationByIdBoardByField
getBoardsOrganizationByIdBoardByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addBoardsPowerUpsByIdBoard
addBoardsPowerUpsByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/boards_powerUps"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteBoardsPowerUpsByIdBoardByPowerUp
deleteBoardsPowerUpsByIdBoardByPowerUp()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "powerUp": {
      "type": "string",
      "description": "powerUp"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "powerUp",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsPrefsBackgroundByIdBoard
updateBoardsPrefsBackgroundByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/prefs_background"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsPrefsCalendarFeedEnabledByIdBoard
updateBoardsPrefsCalendarFeedEnabledByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/prefs_calendarFeedEnabled"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsPrefsCardAgingByIdBoard
updateBoardsPrefsCardAgingByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/prefs_cardAging"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsPrefsCardCoversByIdBoard
updateBoardsPrefsCardCoversByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/prefs_cardCovers"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsPrefsCommentsByIdBoard
updateBoardsPrefsCommentsByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/prefs_comments"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsPrefsInvitationsByIdBoard
updateBoardsPrefsInvitationsByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/prefs_invitations"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsPrefsPermissionLevelByIdBoard
updateBoardsPrefsPermissionLevelByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/prefs_permissionLevel"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsPrefsSelfJoinByIdBoard
updateBoardsPrefsSelfJoinByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/prefs_selfJoin"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsPrefsVotingByIdBoard
updateBoardsPrefsVotingByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/prefs_voting"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateBoardsSubscribedByIdBoard
updateBoardsSubscribedByIdBoard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "body": {
      "$ref": "#/definitions/boards_subscribed"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBoardsByIdBoardByField
getBoardsByIdBoardByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idBoard": {
      "type": "string",
      "description": "board_id"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idBoard",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addCards
addCards()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/cards"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteCardsByIdCard
deleteCardsByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCardsByIdCard
getCardsByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "actions": {
      "type": "string",
      "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
    },
    "actions_entities": {
      "type": "string",
      "description": " true or false"
    },
    "actions_display": {
      "type": "string",
      "description": " true or false"
    },
    "actions_limit": {
      "type": "string",
      "description": "a number from 0 to 1000"
    },
    "action_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
    },
    "action_memberCreator_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "attachments": {
      "type": "string",
      "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
    },
    "attachment_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
    },
    "members": {
      "type": "string",
      "description": " true or false"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "membersVoted": {
      "type": "string",
      "description": " true or false"
    },
    "memberVoted_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "checkItemStates": {
      "type": "string",
      "description": " true or false"
    },
    "checkItemState_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: idCheckItem or state"
    },
    "checklists": {
      "type": "string",
      "description": "One of: all or none"
    },
    "checklist_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: idBoard, idCard, name or pos"
    },
    "board": {
      "type": "string",
      "description": " true or false"
    },
    "board_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
    },
    "list": {
      "type": "string",
      "description": " true or false"
    },
    "list_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
    },
    "stickers": {
      "type": "string",
      "description": " true or false"
    },
    "sticker_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateCardsByIdCard
updateCardsByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "body": {
      "$ref": "#/definitions/cards"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCardsActionsByIdCard
getCardsActionsByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "entities": {
      "type": "string",
      "description": " true or false"
    },
    "display": {
      "type": "string",
      "description": " true or false"
    },
    "filter": {
      "type": "string",
      "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
    },
    "limit": {
      "type": "string",
      "description": "a number from 0 to 1000"
    },
    "format": {
      "type": "string",
      "description": "One of: count, list or minimal"
    },
    "since": {
      "type": "string",
      "description": "A date, null or lastView"
    },
    "before": {
      "type": "string",
      "description": "A date, or null"
    },
    "page": {
      "type": "string",
      "description": "Page * limit must be less than 1000"
    },
    "idModels": {
      "type": "string",
      "description": "Only return actions related to these model ids"
    },
    "member": {
      "type": "string",
      "description": " true or false"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "memberCreator": {
      "type": "string",
      "description": " true or false"
    },
    "memberCreator_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addCardsActionsCommentsByIdCard
addCardsActionsCommentsByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "body": {
      "$ref": "#/definitions/actions_comments"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteCardsActionsCommentsByIdCardByIdAction
This can only be done by the original author of the comment, or someone with higher permissions than the original author.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "idAction": {
      "type": "string",
      "description": "idAction"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "idAction",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateCardsActionsCommentsByIdCardByIdAction
This can only be done by the original author of the comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "idAction": {
      "type": "string",
      "description": "idAction"
    },
    "body": {
      "$ref": "#/definitions/cards_actions_comments"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "idAction",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCardsAttachmentsByIdCard
getCardsAttachmentsByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
    },
    "filter": {
      "type": "string",
      "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addCardsAttachmentsByIdCard
addCardsAttachmentsByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "body": {
      "$ref": "#/definitions/cards_attachments"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteCardsAttachmentsByIdCardByIdAttachment
deleteCardsAttachmentsByIdCardByIdAttachment()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "idAttachment": {
      "type": "string",
      "description": "idAttachment"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "idAttachment",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCardsAttachmentsByIdCardByIdAttachment
getCardsAttachmentsByIdCardByIdAttachment()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "idAttachment": {
      "type": "string",
      "description": "idAttachment"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "idAttachment",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCardsBoardByIdCard
getCardsBoardByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCardsBoardByIdCardByField
getCardsBoardByIdCardByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCardsCheckItemStatesByIdCard
getCardsCheckItemStatesByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: idCheckItem or state"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem
updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "idChecklistCurrent": {
      "type": "string",
      "description": "idChecklistCurrent"
    },
    "idCheckItem": {
      "type": "string",
      "description": "idCheckItem"
    },
    "body": {
      "$ref": "#/definitions/cards_checklist_idChecklistCurrent_checkItem"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "idChecklistCurrent",
    "idCheckItem",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addCardsChecklistCheckItemByIdCardByIdChecklist
addCardsChecklistCheckItemByIdCardByIdChecklist()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "body": {
      "$ref": "#/definitions/cards_checklist_checkItem"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "idChecklist",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem
deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "idCheckItem": {
      "type": "string",
      "description": "idCheckItem"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "idChecklist",
    "idCheckItem",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem
addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "idCheckItem": {
      "type": "string",
      "description": "idCheckItem"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "idChecklist",
    "idCheckItem",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem
updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "idCheckItem": {
      "type": "string",
      "description": "idCheckItem"
    },
    "body": {
      "$ref": "#/definitions/cards_checklist_checkItem_name"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "idChecklist",
    "idCheckItem",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem
updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "idCheckItem": {
      "type": "string",
      "description": "idCheckItem"
    },
    "body": {
      "$ref": "#/definitions/cards_checklist_checkItem_pos"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "idChecklist",
    "idCheckItem",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem
updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "idCheckItem": {
      "type": "string",
      "description": "idCheckItem"
    },
    "body": {
      "$ref": "#/definitions/cards_checklist_checkItem_state"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "idChecklist",
    "idCheckItem",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCardsChecklistsByIdCard
getCardsChecklistsByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "cards": {
      "type": "string",
      "description": "One of: all, closed, none, open or visible"
    },
    "card_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
    },
    "checkItems": {
      "type": "string",
      "description": "One of: all or none"
    },
    "checkItem_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: name, nameData, pos, state or type"
    },
    "filter": {
      "type": "string",
      "description": "One of: all or none"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: idBoard, idCard, name or pos"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addCardsChecklistsByIdCard
addCardsChecklistsByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "body": {
      "$ref": "#/definitions/cards_checklists"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteCardsChecklistsByIdCardByIdChecklist
deleteCardsChecklistsByIdCardByIdChecklist()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "idChecklist",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateCardsClosedByIdCard
updateCardsClosedByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "body": {
      "$ref": "#/definitions/cards_closed"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateCardsDescByIdCard
updateCardsDescByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "body": {
      "$ref": "#/definitions/cards_desc"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateCardsDueByIdCard
updateCardsDueByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "body": {
      "$ref": "#/definitions/cards_due"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateCardsIdAttachmentCoverByIdCard
updateCardsIdAttachmentCoverByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "body": {
      "$ref": "#/definitions/cards_idAttachmentCover"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateCardsIdBoardByIdCard
updateCardsIdBoardByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "body": {
      "$ref": "#/definitions/cards_idBoard"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addCardsIdLabelsByIdCard
addCardsIdLabelsByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "body": {
      "$ref": "#/definitions/cards_idLabels"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteCardsIdLabelsByIdCardByIdLabel
deleteCardsIdLabelsByIdCardByIdLabel()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "idLabel": {
      "type": "string",
      "description": "idLabel"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "idLabel",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateCardsIdListByIdCard
updateCardsIdListByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "body": {
      "$ref": "#/definitions/cards_idList"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addCardsIdMembersByIdCard
addCardsIdMembersByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "body": {
      "$ref": "#/definitions/cards_idMembers"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateCardsIdMembersByIdCard
updateCardsIdMembersByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "body": {
      "$ref": "#/definitions/cards_idMembers"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteCardsIdMembersByIdCardByIdMember
deleteCardsIdMembersByIdCardByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "idMember": {
      "type": "string",
      "description": "idMember"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addCardsLabelsByIdCard
addCardsLabelsByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "body": {
      "$ref": "#/definitions/cards_labels"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateCardsLabelsByIdCard
updateCardsLabelsByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "body": {
      "$ref": "#/definitions/cards_labels"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteCardsLabelsByIdCardByColor
deleteCardsLabelsByIdCardByColor()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "color": {
      "type": "string",
      "description": "color"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "color",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCardsListByIdCard
getCardsListByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCardsListByIdCardByField
getCardsListByIdCardByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addCardsMarkAssociatedNotificationsReadByIdCard
addCardsMarkAssociatedNotificationsReadByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCardsMembersByIdCard
getCardsMembersByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCardsMembersVotedByIdCard
getCardsMembersVotedByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addCardsMembersVotedByIdCard
addCardsMembersVotedByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "body": {
      "$ref": "#/definitions/cards_membersVoted"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteCardsMembersVotedByIdCardByIdMember
deleteCardsMembersVotedByIdCardByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "idMember": {
      "type": "string",
      "description": "idMember"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateCardsNameByIdCard
updateCardsNameByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "body": {
      "$ref": "#/definitions/cards_name"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateCardsPosByIdCard
updateCardsPosByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "body": {
      "$ref": "#/definitions/cards_pos"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCardsStickersByIdCard
getCardsStickersByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addCardsStickersByIdCard
addCardsStickersByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "body": {
      "$ref": "#/definitions/cards_stickers"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteCardsStickersByIdCardByIdSticker
deleteCardsStickersByIdCardByIdSticker()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "idSticker": {
      "type": "string",
      "description": "idSticker"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "idSticker",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCardsStickersByIdCardByIdSticker
getCardsStickersByIdCardByIdSticker()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "idSticker": {
      "type": "string",
      "description": "idSticker"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "idSticker",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateCardsStickersByIdCardByIdSticker
updateCardsStickersByIdCardByIdSticker()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "idSticker": {
      "type": "string",
      "description": "idSticker"
    },
    "body": {
      "$ref": "#/definitions/cards_stickers"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "idSticker",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateCardsSubscribedByIdCard
updateCardsSubscribedByIdCard()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "body": {
      "$ref": "#/definitions/cards_subscribed"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCardsByIdCardByField
getCardsByIdCardByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idCard": {
      "type": "string",
      "description": "card id or shortlink"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idCard",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addChecklists
addChecklists()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/checklists"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteChecklistsByIdChecklist
deleteChecklistsByIdChecklist()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idChecklist",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getChecklistsByIdChecklist
getChecklistsByIdChecklist()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "cards": {
      "type": "string",
      "description": "One of: all, closed, none, open or visible"
    },
    "card_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
    },
    "checkItems": {
      "type": "string",
      "description": "One of: all or none"
    },
    "checkItem_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: name, nameData, pos, state or type"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: idBoard, idCard, name or pos"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idChecklist",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateChecklistsByIdChecklist
updateChecklistsByIdChecklist()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "body": {
      "$ref": "#/definitions/checklists"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idChecklist",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getChecklistsBoardByIdChecklist
getChecklistsBoardByIdChecklist()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idChecklist",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getChecklistsBoardByIdChecklistByField
getChecklistsBoardByIdChecklistByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idChecklist",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getChecklistsCardsByIdChecklist
getChecklistsCardsByIdChecklist()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "actions": {
      "type": "string",
      "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
    },
    "attachments": {
      "type": "string",
      "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
    },
    "attachment_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
    },
    "stickers": {
      "type": "string",
      "description": " true or false"
    },
    "members": {
      "type": "string",
      "description": " true or false"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "checkItemStates": {
      "type": "string",
      "description": " true or false"
    },
    "checklists": {
      "type": "string",
      "description": "One of: all or none"
    },
    "limit": {
      "type": "string",
      "description": "a number from 1 to 1000"
    },
    "since": {
      "type": "string",
      "description": "A date, or null"
    },
    "before": {
      "type": "string",
      "description": "A date, or null"
    },
    "filter": {
      "type": "string",
      "description": "One of: all, closed, none or open"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idChecklist",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getChecklistsCardsByIdChecklistByFilter
getChecklistsCardsByIdChecklistByFilter()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "filter": {
      "type": "string",
      "description": "filter"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idChecklist",
    "filter",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getChecklistsCheckItemsByIdChecklist
getChecklistsCheckItemsByIdChecklist()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "filter": {
      "type": "string",
      "description": "One of: all or none"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: name, nameData, pos, state or type"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idChecklist",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addChecklistsCheckItemsByIdChecklist
addChecklistsCheckItemsByIdChecklist()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "body": {
      "$ref": "#/definitions/checklists_checkItems"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idChecklist",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteChecklistsCheckItemsByIdChecklistByIdCheckItem
deleteChecklistsCheckItemsByIdChecklistByIdCheckItem()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "idCheckItem": {
      "type": "string",
      "description": "idCheckItem"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idChecklist",
    "idCheckItem",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getChecklistsCheckItemsByIdChecklistByIdCheckItem
getChecklistsCheckItemsByIdChecklistByIdCheckItem()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "idCheckItem": {
      "type": "string",
      "description": "idCheckItem"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: name, nameData, pos, state or type"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idChecklist",
    "idCheckItem",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateChecklistsIdCardByIdChecklist
updateChecklistsIdCardByIdChecklist()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "body": {
      "$ref": "#/definitions/checklists_idCard"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idChecklist",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateChecklistsNameByIdChecklist
updateChecklistsNameByIdChecklist()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "body": {
      "$ref": "#/definitions/checklists_name"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idChecklist",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateChecklistsPosByIdChecklist
updateChecklistsPosByIdChecklist()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "body": {
      "$ref": "#/definitions/checklists_pos"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idChecklist",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getChecklistsByIdChecklistByField
getChecklistsByIdChecklistByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idChecklist": {
      "type": "string",
      "description": "idChecklist"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idChecklist",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addLabels
addLabels()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/labels"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteLabelsByIdLabel
deleteLabelsByIdLabel()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idLabel": {
      "type": "string",
      "description": "idLabel"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idLabel",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getLabelsByIdLabel
getLabelsByIdLabel()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idLabel": {
      "type": "string",
      "description": "idLabel"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: color, idBoard, name or uses"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idLabel",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateLabelsByIdLabel
updateLabelsByIdLabel()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idLabel": {
      "type": "string",
      "description": "idLabel"
    },
    "body": {
      "$ref": "#/definitions/labels"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idLabel",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getLabelsBoardByIdLabel
getLabelsBoardByIdLabel()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idLabel": {
      "type": "string",
      "description": "idLabel"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idLabel",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getLabelsBoardByIdLabelByField
getLabelsBoardByIdLabelByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idLabel": {
      "type": "string",
      "description": "idLabel"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idLabel",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateLabelsColorByIdLabel
updateLabelsColorByIdLabel()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idLabel": {
      "type": "string",
      "description": "idLabel"
    },
    "body": {
      "$ref": "#/definitions/labels_color"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idLabel",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateLabelsNameByIdLabel
updateLabelsNameByIdLabel()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idLabel": {
      "type": "string",
      "description": "idLabel"
    },
    "body": {
      "$ref": "#/definitions/labels_name"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idLabel",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addLists
addLists()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/lists"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getListsByIdList
getListsByIdList()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idList": {
      "type": "string",
      "description": "idList"
    },
    "cards": {
      "type": "string",
      "description": "One of: all, closed, none or open"
    },
    "card_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
    },
    "board": {
      "type": "string",
      "description": " true or false"
    },
    "board_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idList",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateListsByIdList
updateListsByIdList()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idList": {
      "type": "string",
      "description": "idList"
    },
    "body": {
      "$ref": "#/definitions/lists"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idList",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getListsActionsByIdList
getListsActionsByIdList()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idList": {
      "type": "string",
      "description": "idList"
    },
    "entities": {
      "type": "string",
      "description": " true or false"
    },
    "display": {
      "type": "string",
      "description": " true or false"
    },
    "filter": {
      "type": "string",
      "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
    },
    "limit": {
      "type": "string",
      "description": "a number from 0 to 1000"
    },
    "format": {
      "type": "string",
      "description": "One of: count, list or minimal"
    },
    "since": {
      "type": "string",
      "description": "A date, null or lastView"
    },
    "before": {
      "type": "string",
      "description": "A date, or null"
    },
    "page": {
      "type": "string",
      "description": "Page * limit must be less than 1000"
    },
    "idModels": {
      "type": "string",
      "description": "Only return actions related to these model ids"
    },
    "member": {
      "type": "string",
      "description": " true or false"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "memberCreator": {
      "type": "string",
      "description": " true or false"
    },
    "memberCreator_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idList",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addListsArchiveAllCardsByIdList
addListsArchiveAllCardsByIdList()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idList": {
      "type": "string",
      "description": "idList"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idList",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getListsBoardByIdList
getListsBoardByIdList()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idList": {
      "type": "string",
      "description": "idList"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idList",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getListsBoardByIdListByField
getListsBoardByIdListByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idList": {
      "type": "string",
      "description": "idList"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idList",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getListsCardsByIdList
getListsCardsByIdList()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idList": {
      "type": "string",
      "description": "idList"
    },
    "actions": {
      "type": "string",
      "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
    },
    "attachments": {
      "type": "string",
      "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
    },
    "attachment_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
    },
    "stickers": {
      "type": "string",
      "description": " true or false"
    },
    "members": {
      "type": "string",
      "description": " true or false"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "checkItemStates": {
      "type": "string",
      "description": " true or false"
    },
    "checklists": {
      "type": "string",
      "description": "One of: all or none"
    },
    "limit": {
      "type": "string",
      "description": "a number from 1 to 1000"
    },
    "since": {
      "type": "string",
      "description": "A date, or null"
    },
    "before": {
      "type": "string",
      "description": "A date, or null"
    },
    "filter": {
      "type": "string",
      "description": "One of: all, closed, none or open"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idList",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addListsCardsByIdList
addListsCardsByIdList()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idList": {
      "type": "string",
      "description": "idList"
    },
    "body": {
      "$ref": "#/definitions/lists_cards"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idList",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getListsCardsByIdListByFilter
getListsCardsByIdListByFilter()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idList": {
      "type": "string",
      "description": "idList"
    },
    "filter": {
      "type": "string",
      "description": "filter"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idList",
    "filter",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateListsClosedByIdList
updateListsClosedByIdList()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idList": {
      "type": "string",
      "description": "idList"
    },
    "body": {
      "$ref": "#/definitions/lists_closed"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idList",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateListsIdBoardByIdList
updateListsIdBoardByIdList()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idList": {
      "type": "string",
      "description": "idList"
    },
    "body": {
      "$ref": "#/definitions/lists_idBoard"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idList",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addListsMoveAllCardsByIdList
addListsMoveAllCardsByIdList()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idList": {
      "type": "string",
      "description": "idList"
    },
    "body": {
      "$ref": "#/definitions/lists_moveAllCards"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idList",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateListsNameByIdList
updateListsNameByIdList()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idList": {
      "type": "string",
      "description": "idList"
    },
    "body": {
      "$ref": "#/definitions/lists_name"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idList",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateListsPosByIdList
updateListsPosByIdList()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idList": {
      "type": "string",
      "description": "idList"
    },
    "body": {
      "$ref": "#/definitions/lists_pos"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idList",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateListsSubscribedByIdList
updateListsSubscribedByIdList()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idList": {
      "type": "string",
      "description": "idList"
    },
    "body": {
      "$ref": "#/definitions/lists_subscribed"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idList",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getListsByIdListByField
getListsByIdListByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idList": {
      "type": "string",
      "description": "idList"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idList",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersByIdMember
If you specify 'me' as the username, this call will respond as if you had supplied the username associated with the supplied token

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "actions": {
      "type": "string",
      "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
    },
    "actions_entities": {
      "type": "string",
      "description": " true or false"
    },
    "actions_display": {
      "type": "string",
      "description": " true or false"
    },
    "actions_limit": {
      "type": "string",
      "description": "a number from 0 to 1000"
    },
    "action_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
    },
    "action_since": {
      "type": "string",
      "description": "A date, null or lastView"
    },
    "action_before": {
      "type": "string",
      "description": "A date, or null"
    },
    "cards": {
      "type": "string",
      "description": "One of: all, closed, none, open or visible"
    },
    "card_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
    },
    "card_members": {
      "type": "string",
      "description": " true or false"
    },
    "card_member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "card_attachments": {
      "type": "string",
      "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
    },
    "card_attachment_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
    },
    "card_stickers": {
      "type": "string",
      "description": " true or false"
    },
    "boards": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned"
    },
    "board_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
    },
    "board_actions": {
      "type": "string",
      "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
    },
    "board_actions_entities": {
      "type": "string",
      "description": " true or false"
    },
    "board_actions_display": {
      "type": "string",
      "description": " true or false"
    },
    "board_actions_format": {
      "type": "string",
      "description": "One of: count, list or minimal"
    },
    "board_actions_since": {
      "type": "string",
      "description": "A date, null or lastView"
    },
    "board_actions_limit": {
      "type": "string",
      "description": "a number from 0 to 1000"
    },
    "board_action_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
    },
    "board_lists": {
      "type": "string",
      "description": "One of: all, closed, none or open"
    },
    "board_memberships": {
      "type": "string",
      "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
    },
    "board_organization": {
      "type": "string",
      "description": " true or false"
    },
    "board_organization_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
    },
    "boardsInvited": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned"
    },
    "boardsInvited_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
    },
    "boardStars": {
      "type": "string",
      "description": " true or false"
    },
    "savedSearches": {
      "type": "string",
      "description": " true or false"
    },
    "organizations": {
      "type": "string",
      "description": "One of: all, members, none or public"
    },
    "organization_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
    },
    "organization_paid_account": {
      "type": "string",
      "description": " true or false"
    },
    "organizationsInvited": {
      "type": "string",
      "description": "One of: all, members, none or public"
    },
    "organizationsInvited_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
    },
    "notifications": {
      "type": "string",
      "description": "all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard"
    },
    "notifications_entities": {
      "type": "string",
      "description": " true or false"
    },
    "notifications_display": {
      "type": "string",
      "description": " true or false"
    },
    "notifications_limit": {
      "type": "string",
      "description": "a number from 1 to 1000"
    },
    "notification_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: data, date, idMemberCreator, type or unread"
    },
    "notification_memberCreator": {
      "type": "string",
      "description": " true or false"
    },
    "notification_memberCreator_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "notification_before": {
      "type": "string",
      "description": "An id, or null"
    },
    "notification_since": {
      "type": "string",
      "description": "An id, or null"
    },
    "tokens": {
      "type": "string",
      "description": "One of: all or none"
    },
    "paid_account": {
      "type": "string",
      "description": " true or false"
    },
    "boardBackgrounds": {
      "type": "string",
      "description": "One of: all, custom, default, none or premium"
    },
    "customBoardBackgrounds": {
      "type": "string",
      "description": "One of: all or none"
    },
    "customStickers": {
      "type": "string",
      "description": "One of: all or none"
    },
    "customEmoji": {
      "type": "string",
      "description": "One of: all or none"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateMembersByIdMember
updateMembersByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "body": {
      "$ref": "#/definitions/members"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersActionsByIdMember
getMembersActionsByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "entities": {
      "type": "string",
      "description": " true or false"
    },
    "display": {
      "type": "string",
      "description": " true or false"
    },
    "filter": {
      "type": "string",
      "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
    },
    "limit": {
      "type": "string",
      "description": "a number from 0 to 1000"
    },
    "format": {
      "type": "string",
      "description": "One of: count, list or minimal"
    },
    "since": {
      "type": "string",
      "description": "A date, null or lastView"
    },
    "before": {
      "type": "string",
      "description": "A date, or null"
    },
    "page": {
      "type": "string",
      "description": "Page * limit must be less than 1000"
    },
    "idModels": {
      "type": "string",
      "description": "Only return actions related to these model ids"
    },
    "member": {
      "type": "string",
      "description": " true or false"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "memberCreator": {
      "type": "string",
      "description": " true or false"
    },
    "memberCreator_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addMembersAvatarByIdMember
addMembersAvatarByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "body": {
      "$ref": "#/definitions/members_avatar"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateMembersAvatarSourceByIdMember
updateMembersAvatarSourceByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "body": {
      "$ref": "#/definitions/members_avatarSource"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateMembersBioByIdMember
updateMembersBioByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "body": {
      "$ref": "#/definitions/members_bio"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersBoardBackgroundsByIdMember
getMembersBoardBackgroundsByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "filter": {
      "type": "string",
      "description": "One of: all, custom, default, none or premium"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addMembersBoardBackgroundsByIdMember
addMembersBoardBackgroundsByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "body": {
      "$ref": "#/definitions/members_boardBackgrounds"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground
deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "idBoardBackground": {
      "type": "string",
      "description": "idBoardBackground"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "idBoardBackground",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersBoardBackgroundsByIdMemberByIdBoardBackground
getMembersBoardBackgroundsByIdMemberByIdBoardBackground()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "idBoardBackground": {
      "type": "string",
      "description": "idBoardBackground"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "idBoardBackground",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateMembersBoardBackgroundsByIdMemberByIdBoardBackground
updateMembersBoardBackgroundsByIdMemberByIdBoardBackground()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "idBoardBackground": {
      "type": "string",
      "description": "idBoardBackground"
    },
    "body": {
      "$ref": "#/definitions/members_boardBackgrounds"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "idBoardBackground",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersBoardStarsByIdMember
getMembersBoardStarsByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addMembersBoardStarsByIdMember
addMembersBoardStarsByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "body": {
      "$ref": "#/definitions/members_boardStars"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteMembersBoardStarsByIdMemberByIdBoardStar
deleteMembersBoardStarsByIdMemberByIdBoardStar()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "idBoardStar": {
      "type": "string",
      "description": "idBoardStar"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "idBoardStar",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersBoardStarsByIdMemberByIdBoardStar
getMembersBoardStarsByIdMemberByIdBoardStar()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "idBoardStar": {
      "type": "string",
      "description": "idBoardStar"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "idBoardStar",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateMembersBoardStarsByIdMemberByIdBoardStar
updateMembersBoardStarsByIdMemberByIdBoardStar()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "idBoardStar": {
      "type": "string",
      "description": "idBoardStar"
    },
    "body": {
      "$ref": "#/definitions/members_boardStars"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "idBoardStar",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar
updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "idBoardStar": {
      "type": "string",
      "description": "idBoardStar"
    },
    "body": {
      "$ref": "#/definitions/members_boardStars_idBoard"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "idBoardStar",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateMembersBoardStarsPosByIdMemberByIdBoardStar
updateMembersBoardStarsPosByIdMemberByIdBoardStar()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "idBoardStar": {
      "type": "string",
      "description": "idBoardStar"
    },
    "body": {
      "$ref": "#/definitions/members_boardStars_pos"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "idBoardStar",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersBoardsByIdMember
getMembersBoardsByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "filter": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
    },
    "actions": {
      "type": "string",
      "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
    },
    "actions_entities": {
      "type": "string",
      "description": " true or false"
    },
    "actions_limit": {
      "type": "string",
      "description": "a number from 0 to 1000"
    },
    "actions_format": {
      "type": "string",
      "description": "One of: count, list or minimal"
    },
    "actions_since": {
      "type": "string",
      "description": "A date, null or lastView"
    },
    "action_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
    },
    "memberships": {
      "type": "string",
      "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
    },
    "organization": {
      "type": "string",
      "description": " true or false"
    },
    "organization_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
    },
    "lists": {
      "type": "string",
      "description": "One of: all, closed, none or open"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersBoardsByIdMemberByFilter
getMembersBoardsByIdMemberByFilter()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "filter": {
      "type": "string",
      "description": "filter"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "filter",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersBoardsInvitedByIdMember
getMembersBoardsInvitedByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersBoardsInvitedByIdMemberByField
getMembersBoardsInvitedByIdMemberByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersCardsByIdMember
getMembersCardsByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "actions": {
      "type": "string",
      "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
    },
    "attachments": {
      "type": "string",
      "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
    },
    "attachment_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
    },
    "stickers": {
      "type": "string",
      "description": " true or false"
    },
    "members": {
      "type": "string",
      "description": " true or false"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "checkItemStates": {
      "type": "string",
      "description": " true or false"
    },
    "checklists": {
      "type": "string",
      "description": "One of: all or none"
    },
    "limit": {
      "type": "string",
      "description": "a number from 1 to 1000"
    },
    "since": {
      "type": "string",
      "description": "A date, or null"
    },
    "before": {
      "type": "string",
      "description": "A date, or null"
    },
    "filter": {
      "type": "string",
      "description": "One of: all, closed, none, open or visible"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersCardsByIdMemberByFilter
getMembersCardsByIdMemberByFilter()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "filter": {
      "type": "string",
      "description": "filter"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "filter",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersCustomBoardBackgroundsByIdMember
getMembersCustomBoardBackgroundsByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "filter": {
      "type": "string",
      "description": "One of: all or none"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addMembersCustomBoardBackgroundsByIdMember
addMembersCustomBoardBackgroundsByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "body": {
      "$ref": "#/definitions/members_customBoardBackgrounds"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground
deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "idBoardBackground": {
      "type": "string",
      "description": "idBoardBackground"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "idBoardBackground",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground
getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "idBoardBackground": {
      "type": "string",
      "description": "idBoardBackground"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "idBoardBackground",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground
updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "idBoardBackground": {
      "type": "string",
      "description": "idBoardBackground"
    },
    "body": {
      "$ref": "#/definitions/members_customBoardBackgrounds"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "idBoardBackground",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersCustomEmojiByIdMember
This gets the list of all of the user’s uploaded emoji

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "filter": {
      "type": "string",
      "description": "One of: all or none"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addMembersCustomEmojiByIdMember
addMembersCustomEmojiByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "body": {
      "$ref": "#/definitions/members_customEmoji"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersCustomEmojiByIdMemberByIdCustomEmoji
getMembersCustomEmojiByIdMemberByIdCustomEmoji()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "idCustomEmoji": {
      "type": "string",
      "description": "idCustomEmoji"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: name or url"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "idCustomEmoji",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersCustomStickersByIdMember
This gets a list of all of the user’s uploaded stickers

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "filter": {
      "type": "string",
      "description": "One of: all or none"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addMembersCustomStickersByIdMember
addMembersCustomStickersByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "body": {
      "$ref": "#/definitions/members_customStickers"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteMembersCustomStickersByIdMemberByIdCustomSticker
deleteMembersCustomStickersByIdMemberByIdCustomSticker()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "idCustomSticker": {
      "type": "string",
      "description": "idCustomSticker"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "idCustomSticker",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersCustomStickersByIdMemberByIdCustomSticker
getMembersCustomStickersByIdMemberByIdCustomSticker()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "idCustomSticker": {
      "type": "string",
      "description": "idCustomSticker"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: scaled or url"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "idCustomSticker",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersDeltasByIdMember
getMembersDeltasByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "tags": {
      "type": "string",
      "description": "A valid tag for subscribing"
    },
    "ixLastUpdate": {
      "type": "string",
      "description": "a number from -1 to Infinity"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "tags",
    "ixLastUpdate",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateMembersFullNameByIdMember
updateMembersFullNameByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "body": {
      "$ref": "#/definitions/members_fullName"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateMembersInitialsByIdMember
updateMembersInitialsByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "body": {
      "$ref": "#/definitions/members_initials"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersNotificationsByIdMember
You can only read the notifications for the member associated with the supplied token

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "entities": {
      "type": "string",
      "description": " true or false"
    },
    "display": {
      "type": "string",
      "description": " true or false"
    },
    "filter": {
      "type": "string",
      "description": "all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard"
    },
    "read_filter": {
      "type": "string",
      "description": "One of: all, read or unread"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: data, date, idMemberCreator, type or unread"
    },
    "limit": {
      "type": "string",
      "description": "a number from 1 to 1000"
    },
    "page": {
      "type": "string",
      "description": "a number from 0 to 100"
    },
    "before": {
      "type": "string",
      "description": "An id, or null"
    },
    "since": {
      "type": "string",
      "description": "An id, or null"
    },
    "memberCreator": {
      "type": "string",
      "description": " true or false"
    },
    "memberCreator_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersNotificationsByIdMemberByFilter
getMembersNotificationsByIdMemberByFilter()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "filter": {
      "type": "string",
      "description": "filter"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "filter",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addMembersOneTimeMessagesDismissedByIdMember
addMembersOneTimeMessagesDismissedByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "body": {
      "$ref": "#/definitions/members_oneTimeMessagesDismissed"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersOrganizationsByIdMember
getMembersOrganizationsByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "filter": {
      "type": "string",
      "description": "One of: all, members, none or public"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
    },
    "paid_account": {
      "type": "string",
      "description": " true or false"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersOrganizationsByIdMemberByFilter
getMembersOrganizationsByIdMemberByFilter()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "filter": {
      "type": "string",
      "description": "filter"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "filter",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersOrganizationsInvitedByIdMember
getMembersOrganizationsInvitedByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersOrganizationsInvitedByIdMemberByField
getMembersOrganizationsInvitedByIdMemberByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateMembersPrefsColorBlindByIdMember
updateMembersPrefsColorBlindByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "body": {
      "$ref": "#/definitions/prefs_colorBlind"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateMembersPrefsLocaleByIdMember
updateMembersPrefsLocaleByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "body": {
      "$ref": "#/definitions/prefs_locale"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateMembersPrefsMinutesBetweenSummariesByIdMember
updateMembersPrefsMinutesBetweenSummariesByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "body": {
      "$ref": "#/definitions/prefs_minutesBetweenSummaries"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersSavedSearchesByIdMember
getMembersSavedSearchesByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addMembersSavedSearchesByIdMember
addMembersSavedSearchesByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "body": {
      "$ref": "#/definitions/members_savedSearches"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteMembersSavedSearchesByIdMemberByIdSavedSearch
deleteMembersSavedSearchesByIdMemberByIdSavedSearch()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "idSavedSearch": {
      "type": "string",
      "description": "idSavedSearch"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "idSavedSearch",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersSavedSearchesByIdMemberByIdSavedSearch
getMembersSavedSearchesByIdMemberByIdSavedSearch()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "idSavedSearch": {
      "type": "string",
      "description": "idSavedSearch"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "idSavedSearch",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateMembersSavedSearchesByIdMemberByIdSavedSearch
updateMembersSavedSearchesByIdMemberByIdSavedSearch()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "idSavedSearch": {
      "type": "string",
      "description": "idSavedSearch"
    },
    "body": {
      "$ref": "#/definitions/members_savedSearches"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "idSavedSearch",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateMembersSavedSearchesNameByIdMemberByIdSavedSearch
updateMembersSavedSearchesNameByIdMemberByIdSavedSearch()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "idSavedSearch": {
      "type": "string",
      "description": "idSavedSearch"
    },
    "body": {
      "$ref": "#/definitions/members_savedSearches_name"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "idSavedSearch",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateMembersSavedSearchesPosByIdMemberByIdSavedSearch
updateMembersSavedSearchesPosByIdMemberByIdSavedSearch()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "idSavedSearch": {
      "type": "string",
      "description": "idSavedSearch"
    },
    "body": {
      "$ref": "#/definitions/members_savedSearches_pos"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "idSavedSearch",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch
updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "idSavedSearch": {
      "type": "string",
      "description": "idSavedSearch"
    },
    "body": {
      "$ref": "#/definitions/members_savedSearches_query"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "idSavedSearch",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersTokensByIdMember
getMembersTokensByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "filter": {
      "type": "string",
      "description": "One of: all or none"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateMembersUsernameByIdMember
updateMembersUsernameByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "body": {
      "$ref": "#/definitions/members_username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMembersByIdMemberByField
getMembersByIdMemberByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idMember": {
      "type": "string",
      "description": "idMember or username"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idMember",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addNotificationsAllRead
addNotificationsAllRead()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getNotificationsByIdNotification
getNotificationsByIdNotification()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idNotification": {
      "type": "string",
      "description": "idNotification"
    },
    "display": {
      "type": "string",
      "description": " true or false"
    },
    "entities": {
      "type": "string",
      "description": " true or false"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: data, date, idMemberCreator, type or unread"
    },
    "memberCreator": {
      "type": "string",
      "description": " true or false"
    },
    "memberCreator_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "board": {
      "type": "string",
      "description": " true or false"
    },
    "board_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
    },
    "list": {
      "type": "string",
      "description": " true or false"
    },
    "card": {
      "type": "string",
      "description": " true or false"
    },
    "card_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
    },
    "organization": {
      "type": "string",
      "description": " true or false"
    },
    "organization_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
    },
    "member": {
      "type": "string",
      "description": " true or false"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idNotification",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateNotificationsByIdNotification
updateNotificationsByIdNotification()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idNotification": {
      "type": "string",
      "description": "idNotification"
    },
    "body": {
      "$ref": "#/definitions/notifications"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idNotification",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getNotificationsBoardByIdNotification
getNotificationsBoardByIdNotification()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idNotification": {
      "type": "string",
      "description": "idNotification"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idNotification",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getNotificationsBoardByIdNotificationByField
getNotificationsBoardByIdNotificationByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idNotification": {
      "type": "string",
      "description": "idNotification"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idNotification",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getNotificationsCardByIdNotification
getNotificationsCardByIdNotification()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idNotification": {
      "type": "string",
      "description": "idNotification"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idNotification",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getNotificationsCardByIdNotificationByField
getNotificationsCardByIdNotificationByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idNotification": {
      "type": "string",
      "description": "idNotification"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idNotification",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getNotificationsDisplayByIdNotification
getNotificationsDisplayByIdNotification()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idNotification": {
      "type": "string",
      "description": "idNotification"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idNotification",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getNotificationsEntitiesByIdNotification
getNotificationsEntitiesByIdNotification()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idNotification": {
      "type": "string",
      "description": "idNotification"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idNotification",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getNotificationsListByIdNotification
getNotificationsListByIdNotification()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idNotification": {
      "type": "string",
      "description": "idNotification"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idNotification",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getNotificationsListByIdNotificationByField
getNotificationsListByIdNotificationByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idNotification": {
      "type": "string",
      "description": "idNotification"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idNotification",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getNotificationsMemberByIdNotification
getNotificationsMemberByIdNotification()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idNotification": {
      "type": "string",
      "description": "idNotification"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idNotification",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getNotificationsMemberByIdNotificationByField
getNotificationsMemberByIdNotificationByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idNotification": {
      "type": "string",
      "description": "idNotification"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idNotification",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getNotificationsMemberCreatorByIdNotification
getNotificationsMemberCreatorByIdNotification()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idNotification": {
      "type": "string",
      "description": "idNotification"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idNotification",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getNotificationsMemberCreatorByIdNotificationByField
getNotificationsMemberCreatorByIdNotificationByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idNotification": {
      "type": "string",
      "description": "idNotification"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idNotification",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getNotificationsOrganizationByIdNotification
getNotificationsOrganizationByIdNotification()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idNotification": {
      "type": "string",
      "description": "idNotification"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idNotification",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getNotificationsOrganizationByIdNotificationByField
getNotificationsOrganizationByIdNotificationByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idNotification": {
      "type": "string",
      "description": "idNotification"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idNotification",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateNotificationsUnreadByIdNotification
updateNotificationsUnreadByIdNotification()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idNotification": {
      "type": "string",
      "description": "idNotification"
    },
    "body": {
      "$ref": "#/definitions/notifications_unread"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idNotification",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getNotificationsByIdNotificationByField
getNotificationsByIdNotificationByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idNotification": {
      "type": "string",
      "description": "idNotification"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idNotification",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addOrganizations
addOrganizations()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/organizations"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteOrganizationsByIdOrg
deleteOrganizationsByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getOrganizationsByIdOrg
getOrganizationsByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "actions": {
      "type": "string",
      "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
    },
    "actions_entities": {
      "type": "string",
      "description": " true or false"
    },
    "actions_display": {
      "type": "string",
      "description": " true or false"
    },
    "actions_limit": {
      "type": "string",
      "description": "a number from 0 to 1000"
    },
    "action_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
    },
    "memberships": {
      "type": "string",
      "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
    },
    "memberships_member": {
      "type": "string",
      "description": " true or false"
    },
    "memberships_member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "members": {
      "type": "string",
      "description": "One of: admins, all, none, normal or owners"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "member_activity": {
      "type": "string",
      "description": "true or false ; works for premium organizations only."
    },
    "membersInvited": {
      "type": "string",
      "description": "One of: admins, all, none, normal or owners"
    },
    "membersInvited_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "boards": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned"
    },
    "board_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
    },
    "board_actions": {
      "type": "string",
      "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
    },
    "board_actions_entities": {
      "type": "string",
      "description": " true or false"
    },
    "board_actions_display": {
      "type": "string",
      "description": " true or false"
    },
    "board_actions_format": {
      "type": "string",
      "description": "One of: count, list or minimal"
    },
    "board_actions_since": {
      "type": "string",
      "description": "A date, null or lastView"
    },
    "board_actions_limit": {
      "type": "string",
      "description": "a number from 0 to 1000"
    },
    "board_action_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
    },
    "board_lists": {
      "type": "string",
      "description": "One of: all, closed, none or open"
    },
    "paid_account": {
      "type": "string",
      "description": " true or false"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateOrganizationsByIdOrg
updateOrganizationsByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "body": {
      "$ref": "#/definitions/organizations"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getOrganizationsActionsByIdOrg
getOrganizationsActionsByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "entities": {
      "type": "string",
      "description": " true or false"
    },
    "display": {
      "type": "string",
      "description": " true or false"
    },
    "filter": {
      "type": "string",
      "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
    },
    "limit": {
      "type": "string",
      "description": "a number from 0 to 1000"
    },
    "format": {
      "type": "string",
      "description": "One of: count, list or minimal"
    },
    "since": {
      "type": "string",
      "description": "A date, null or lastView"
    },
    "before": {
      "type": "string",
      "description": "A date, or null"
    },
    "page": {
      "type": "string",
      "description": "Page * limit must be less than 1000"
    },
    "idModels": {
      "type": "string",
      "description": "Only return actions related to these model ids"
    },
    "member": {
      "type": "string",
      "description": " true or false"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "memberCreator": {
      "type": "string",
      "description": " true or false"
    },
    "memberCreator_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getOrganizationsBoardsByIdOrg
getOrganizationsBoardsByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "filter": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
    },
    "actions": {
      "type": "string",
      "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
    },
    "actions_entities": {
      "type": "string",
      "description": " true or false"
    },
    "actions_limit": {
      "type": "string",
      "description": "a number from 0 to 1000"
    },
    "actions_format": {
      "type": "string",
      "description": "One of: count, list or minimal"
    },
    "actions_since": {
      "type": "string",
      "description": "A date, null or lastView"
    },
    "action_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
    },
    "memberships": {
      "type": "string",
      "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
    },
    "organization": {
      "type": "string",
      "description": " true or false"
    },
    "organization_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
    },
    "lists": {
      "type": "string",
      "description": "One of: all, closed, none or open"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getOrganizationsBoardsByIdOrgByFilter
getOrganizationsBoardsByIdOrgByFilter()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "filter": {
      "type": "string",
      "description": "filter"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "filter",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getOrganizationsDeltasByIdOrg
getOrganizationsDeltasByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "tags": {
      "type": "string",
      "description": "A valid tag for subscribing"
    },
    "ixLastUpdate": {
      "type": "string",
      "description": "a number from -1 to Infinity"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "tags",
    "ixLastUpdate",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateOrganizationsDescByIdOrg
updateOrganizationsDescByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "body": {
      "$ref": "#/definitions/organizations_desc"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateOrganizationsDisplayNameByIdOrg
updateOrganizationsDisplayNameByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "body": {
      "$ref": "#/definitions/organizations_displayName"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteOrganizationsLogoByIdOrg
deleteOrganizationsLogoByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addOrganizationsLogoByIdOrg
addOrganizationsLogoByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "body": {
      "$ref": "#/definitions/organizations_logo"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getOrganizationsMembersByIdOrg
getOrganizationsMembersByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "filter": {
      "type": "string",
      "description": "One of: admins, all, none, normal or owners"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "activity": {
      "type": "string",
      "description": "true or false ; works for premium organizations only."
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateOrganizationsMembersByIdOrg
updateOrganizationsMembersByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "body": {
      "$ref": "#/definitions/organizations_members"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getOrganizationsMembersByIdOrgByFilter
getOrganizationsMembersByIdOrgByFilter()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "filter": {
      "type": "string",
      "description": "filter"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "filter",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteOrganizationsMembersByIdOrgByIdMember
deleteOrganizationsMembersByIdOrgByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "idMember": {
      "type": "string",
      "description": "idMember"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateOrganizationsMembersByIdOrgByIdMember
updateOrganizationsMembersByIdOrgByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "idMember": {
      "type": "string",
      "description": "idMember"
    },
    "body": {
      "$ref": "#/definitions/organizations_members"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "idMember",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteOrganizationsMembersAllByIdOrgByIdMember
deleteOrganizationsMembersAllByIdOrgByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "idMember": {
      "type": "string",
      "description": "idMember"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getOrganizationsMembersCardsByIdOrgByIdMember
getOrganizationsMembersCardsByIdOrgByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "idMember": {
      "type": "string",
      "description": "idMember"
    },
    "actions": {
      "type": "string",
      "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
    },
    "attachments": {
      "type": "string",
      "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
    },
    "attachment_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
    },
    "members": {
      "type": "string",
      "description": " true or false"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "checkItemStates": {
      "type": "string",
      "description": " true or false"
    },
    "checklists": {
      "type": "string",
      "description": "One of: all or none"
    },
    "board": {
      "type": "string",
      "description": " true or false"
    },
    "board_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
    },
    "list": {
      "type": "string",
      "description": " true or false"
    },
    "list_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
    },
    "filter": {
      "type": "string",
      "description": "One of: all, closed, none, open or visible"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "idMember",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateOrganizationsMembersDeactivatedByIdOrgByIdMember
updateOrganizationsMembersDeactivatedByIdOrgByIdMember()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "idMember": {
      "type": "string",
      "description": "idMember"
    },
    "body": {
      "$ref": "#/definitions/organizations_members_deactivated"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "idMember",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getOrganizationsMembersInvitedByIdOrg
getOrganizationsMembersInvitedByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getOrganizationsMembersInvitedByIdOrgByField
getOrganizationsMembersInvitedByIdOrgByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getOrganizationsMembershipsByIdOrg
getOrganizationsMembershipsByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "filter": {
      "type": "string",
      "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
    },
    "member": {
      "type": "string",
      "description": " true or false"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getOrganizationsMembershipsByIdOrgByIdMembership
getOrganizationsMembershipsByIdOrgByIdMembership()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "idMembership": {
      "type": "string",
      "description": "idMembership"
    },
    "member": {
      "type": "string",
      "description": " true or false"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "idMembership",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateOrganizationsMembershipsByIdOrgByIdMembership
updateOrganizationsMembershipsByIdOrgByIdMembership()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "idMembership": {
      "type": "string",
      "description": "idMembership"
    },
    "body": {
      "$ref": "#/definitions/organizations_memberships"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "idMembership",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateOrganizationsNameByIdOrg
updateOrganizationsNameByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "body": {
      "$ref": "#/definitions/organizations_name"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteOrganizationsPrefsAssociatedDomainByIdOrg
deleteOrganizationsPrefsAssociatedDomainByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateOrganizationsPrefsAssociatedDomainByIdOrg
updateOrganizationsPrefsAssociatedDomainByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "body": {
      "$ref": "#/definitions/prefs_associatedDomain"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg
updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "body": {
      "$ref": "#/definitions/prefs_boardVisibilityRestrict"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg
updateOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "body": {
      "$ref": "#/definitions/prefs_boardVisibilityRestrict"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg
updateOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "body": {
      "$ref": "#/definitions/prefs_boardVisibilityRestrict"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateOrganizationsPrefsExternalMembersDisabledByIdOrg
updateOrganizationsPrefsExternalMembersDisabledByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "body": {
      "$ref": "#/definitions/prefs_externalMembersDisabled"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateOrganizationsPrefsGoogleAppsVersionByIdOrg
updateOrganizationsPrefsGoogleAppsVersionByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "body": {
      "$ref": "#/definitions/prefs_googleAppsVersion"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteOrganizationsPrefsOrgInviteRestrictByIdOrg
deleteOrganizationsPrefsOrgInviteRestrictByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "value": {
      "type": "string",
      "description": "An email address with optional expansion tokens"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "value",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateOrganizationsPrefsOrgInviteRestrictByIdOrg
updateOrganizationsPrefsOrgInviteRestrictByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "body": {
      "$ref": "#/definitions/prefs_orgInviteRestrict"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateOrganizationsPrefsPermissionLevelByIdOrg
updateOrganizationsPrefsPermissionLevelByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "body": {
      "$ref": "#/definitions/prefs_permissionLevel"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateOrganizationsWebsiteByIdOrg
updateOrganizationsWebsiteByIdOrg()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "body": {
      "$ref": "#/definitions/organizations_website"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getOrganizationsByIdOrgByField
getOrganizationsByIdOrgByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idOrg": {
      "type": "string",
      "description": "idOrg or name"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idOrg",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getSearch
getSearch()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "a string with a length from 1 to 16384"
    },
    "idBoards": {
      "type": "string",
      "description": "A comma-separated list of objectIds, 24-character hex strings"
    },
    "idOrganizations": {
      "type": "string",
      "description": "A comma-separated list of objectIds, 24-character hex strings"
    },
    "idCards": {
      "type": "string",
      "description": "A comma-separated list of objectIds, 24-character hex strings"
    },
    "modelTypes": {
      "type": "string",
      "description": "all or a comma-separated list of: actions, boards, cards, members or organizations"
    },
    "board_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
    },
    "boards_limit": {
      "type": "string",
      "description": "a number from 1 to 1000"
    },
    "card_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
    },
    "cards_limit": {
      "type": "string",
      "description": "a number from 1 to 1000"
    },
    "cards_page": {
      "type": "string",
      "description": "a number from 0 to 100"
    },
    "card_board": {
      "type": "string",
      "description": " true or false"
    },
    "card_list": {
      "type": "string",
      "description": " true or false"
    },
    "card_members": {
      "type": "string",
      "description": " true or false"
    },
    "card_stickers": {
      "type": "string",
      "description": " true or false"
    },
    "card_attachments": {
      "type": "string",
      "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
    },
    "organization_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
    },
    "organizations_limit": {
      "type": "string",
      "description": "a number from 1 to 1000"
    },
    "member_fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
    },
    "members_limit": {
      "type": "string",
      "description": "a number from 1 to 1000"
    },
    "partial": {
      "type": "string",
      "description": " true or false"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "query",
    "idOrganizations",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getSearchMembers
getSearchMembers()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "a string with a length from 1 to 16384"
    },
    "limit": {
      "type": "string",
      "description": "a number from 1 to 20"
    },
    "idBoard": {
      "type": "string",
      "description": "An id, or null"
    },
    "idOrganization": {
      "type": "string",
      "description": "An id, or null"
    },
    "onlyOrgMembers": {
      "type": "string",
      "description": "A boolean"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "query",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addSessions
addSessions()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/sessions"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getSessionsSocket
This is the route for WebSocket requests.  See the socket API reference for a description of WebSocket usage.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateSessionsByIdSession
updateSessionsByIdSession()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idSession": {
      "type": "string",
      "description": "idSession"
    },
    "body": {
      "$ref": "#/definitions/sessions"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idSession",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateSessionsStatusByIdSession
updateSessionsStatusByIdSession()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idSession": {
      "type": "string",
      "description": "idSession"
    },
    "body": {
      "$ref": "#/definitions/sessions_status"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idSession",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteTokensByToken
deleteTokensByToken()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "token"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token_query": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "key",
    "token_query"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getTokensByToken
getTokensByToken()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "token"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: dateCreated, dateExpires, idMember, identifier or permissions"
    },
    "webhooks": {
      "type": "string",
      "description": " true or false"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token_query": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "key",
    "token_query"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getTokensMemberByToken
getTokensMemberByToken()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "token"
    },
    "fields": {
      "type": "string",
      "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token_query": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "key",
    "token_query"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getTokensMemberByTokenByField
getTokensMemberByTokenByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "token"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token_query": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "field",
    "key",
    "token_query"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getTokensWebhooksByToken
getTokensWebhooksByToken()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "token"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token_query": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "key",
    "token_query"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addTokensWebhooksByToken
addTokensWebhooksByToken()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "token"
    },
    "body": {
      "$ref": "#/definitions/tokens_webhooks"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token_query": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "body",
    "key",
    "token_query"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateTokensWebhooksByToken
updateTokensWebhooksByToken()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "token"
    },
    "body": {
      "$ref": "#/definitions/tokens_webhooks"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token_query": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "body",
    "key",
    "token_query"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteTokensWebhooksByTokenByIdWebhook
deleteTokensWebhooksByTokenByIdWebhook()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "token"
    },
    "idWebhook": {
      "type": "string",
      "description": "idWebhook"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token_query": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "idWebhook",
    "key",
    "token_query"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getTokensWebhooksByTokenByIdWebhook
getTokensWebhooksByTokenByIdWebhook()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "token"
    },
    "idWebhook": {
      "type": "string",
      "description": "idWebhook"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token_query": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "idWebhook",
    "key",
    "token_query"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getTokensByTokenByField
getTokensByTokenByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "token"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token_query": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "field",
    "key",
    "token_query"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getTypesById
getTypesById()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "id"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addWebhooks
addWebhooks()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/webhooks"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateWebhooks
updateWebhooks()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/webhooks"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteWebhooksByIdWebhook
deleteWebhooksByIdWebhook()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idWebhook": {
      "type": "string",
      "description": "idWebhook"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idWebhook",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getWebhooksByIdWebhook
getWebhooksByIdWebhook()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idWebhook": {
      "type": "string",
      "description": "idWebhook"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idWebhook",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateWebhooksByIdWebhook
updateWebhooksByIdWebhook()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idWebhook": {
      "type": "string",
      "description": "idWebhook"
    },
    "body": {
      "$ref": "#/definitions/webhooks"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idWebhook",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateWebhooksActiveByIdWebhook
updateWebhooksActiveByIdWebhook()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idWebhook": {
      "type": "string",
      "description": "idWebhook"
    },
    "body": {
      "$ref": "#/definitions/webhooks_active"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idWebhook",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateWebhooksCallbackURLByIdWebhook
updateWebhooksCallbackURLByIdWebhook()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idWebhook": {
      "type": "string",
      "description": "idWebhook"
    },
    "body": {
      "$ref": "#/definitions/webhooks_callbackURL"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idWebhook",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateWebhooksDescriptionByIdWebhook
updateWebhooksDescriptionByIdWebhook()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idWebhook": {
      "type": "string",
      "description": "idWebhook"
    },
    "body": {
      "$ref": "#/definitions/webhooks_description"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idWebhook",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateWebhooksIdModelByIdWebhook
updateWebhooksIdModelByIdWebhook()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idWebhook": {
      "type": "string",
      "description": "idWebhook"
    },
    "body": {
      "$ref": "#/definitions/webhooks_idModel"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idWebhook",
    "body",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getWebhooksByIdWebhookByField
getWebhooksByIdWebhookByField()

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "idWebhook": {
      "type": "string",
      "description": "idWebhook"
    },
    "field": {
      "type": "string",
      "description": "field"
    },
    "key": {
      "type": "string",
      "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
    },
    "token": {
      "type": "string",
      "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
    }
  },
  "additionalProperties": false,
  "required": [
    "idWebhook",
    "field",
    "key",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
