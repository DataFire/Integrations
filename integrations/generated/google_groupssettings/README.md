# @datafire/google_groupssettings

Client library for Groups Settings API

## Installation and Usage
```bash
npm install --save @datafire/google_groupssettings
```
```js
let google_groupssettings = require('@datafire/google_groupssettings').create({
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

Manages permission levels and related settings of a group.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_groupssettings.oauthCallback({
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
google_groupssettings.oauthRefresh(null, context)
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

### groupsSettings.groups.get
Gets one resource by id.


```js
google_groupssettings.groupsSettings.groups.get({
  "groupUniqueId": ""
}, context)
```

#### Input
* input `object`
  * groupUniqueId **required** `string`: The group's email address.
  * alt `string` (values: atom, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Groups](#groups)

### groupsSettings.groups.patch
Updates an existing resource. This method supports patch semantics.


```js
google_groupssettings.groupsSettings.groups.patch({
  "groupUniqueId": ""
}, context)
```

#### Input
* input `object`
  * groupUniqueId **required** `string`: The group's email address.
  * body [Groups](#groups)
  * alt `string` (values: atom, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Groups](#groups)

### groupsSettings.groups.update
Updates an existing resource.


```js
google_groupssettings.groupsSettings.groups.update({
  "groupUniqueId": ""
}, context)
```

#### Input
* input `object`
  * groupUniqueId **required** `string`: The group's email address.
  * body [Groups](#groups)
  * alt `string` (values: atom, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Groups](#groups)



## Definitions

### Groups
* Groups `object`: JSON template for Group resource
  * allowExternalMembers `string`: Identifies whether members external to your organization can join the group. Possible values are:  
  * allowGoogleCommunication `string`: Deprecated. Allows Google to contact administrator of the group.  
  * allowWebPosting `string`: Allows posting from web. Possible values are:  
  * archiveOnly `string`: Allows the group to be archived only. Possible values are:  
  * customFooterText `string`: Set the content of custom footer text. The maximum number of characters is 1,000.
  * customReplyTo `string`: An email address used when replying to a message if the replyTo property is set to REPLY_TO_CUSTOM. This address is defined by an account administrator.  
  * customRolesEnabledForSettingsToBeMerged `string`: Specifies whether the group has a custom role that's included in one of the settings being merged. This field is read-only and update/patch requests to it are ignored. Possible values are:  
  * defaultMessageDenyNotificationText `string`: When a message is rejected, this is text for the rejection notification sent to the message's author. By default, this property is empty and has no value in the API's response body. The maximum notification text size is 10,000 characters. Note: Requires sendMessageDenyNotification property to be true.
  * description `string`: Description of the group. This property value may be an empty string if no group description has been entered. If entered, the maximum group description is no more than 300 characters.
  * email `string`: The group's email address. This property can be updated using the Directory API. Note: Only a group owner can change a group's email address. A group manager can't do this.
  * enableCollaborativeInbox `string`: Specifies whether a collaborative inbox will remain turned on for the group. Possible values are:  
  * favoriteRepliesOnTop `string`: Indicates if favorite replies should be displayed above other replies.  
  * includeCustomFooter `string`: Whether to include custom footer. Possible values are:  
  * includeInGlobalAddressList `string`: Enables the group to be included in the Global Address List. For more information, see the help center. Possible values are:  
  * isArchived `string`: Allows the Group contents to be archived. Possible values are:  
  * kind `string`: The type of the resource. It is always groupsSettings#groups.
  * maxMessageBytes `integer`: Deprecated. The maximum size of a message is 25Mb.
  * membersCanPostAsTheGroup `string`: Enables members to post messages as the group. Possible values are:  
  * messageDisplayFont `string`: Deprecated. The default message display font always has a value of "DEFAULT_FONT".
  * messageModerationLevel `string`: Moderation level of incoming messages. Possible values are:  
  * name `string`: Name of the group, which has a maximum size of 75 characters.
  * primaryLanguage `string`: The primary language for group. For a group's primary language use the language tags from the G Suite languages found at G Suite Email Settings API Email Language Tags.
  * replyTo `string`: Specifies who receives the default reply. Possible values are:  
  * sendMessageDenyNotification `string`: Allows a member to be notified if the member's message to the group is denied by the group owner. Possible values are:  
  * showInGroupDirectory `string`: Deprecated. This is merged into the new whoCanDiscoverGroup setting. Allows the group to be visible in the Groups Directory. Possible values are:  
  * spamModerationLevel `string`: Specifies moderation levels for messages detected as spam. Possible values are:  
  * whoCanAdd `string`: Deprecated. This is merged into the new whoCanModerateMembers setting. Permissions to add members. Possible values are:  
  * whoCanAddReferences `string`: Deprecated. This functionality is no longer supported in the Google Groups UI. The value is always "NONE".
  * whoCanApproveMembers `string`: Specifies who can approve members who ask to join groups. This permission will be deprecated once it is merged into the new whoCanModerateMembers setting. Possible values are:  
  * whoCanApproveMessages `string`: Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can approve pending messages in the moderation queue. Possible values are:  
  * whoCanAssignTopics `string`: Deprecated. This is merged into the new whoCanAssistContent setting. Permission to assign topics in a forum to another user. Possible values are:  
  * whoCanAssistContent `string`: Specifies who can moderate metadata. Possible values are:  
  * whoCanBanUsers `string`: Specifies who can deny membership to users. This permission will be deprecated once it is merged into the new whoCanModerateMembers setting. Possible values are:  
  * whoCanContactOwner `string`: Permission to contact owner of the group via web UI. Possible values are:  
  * whoCanDeleteAnyPost `string`: Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can delete replies to topics. (Authors can always delete their own posts). Possible values are:  
  * whoCanDeleteTopics `string`: Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can delete topics. Possible values are:  
  * whoCanDiscoverGroup `string`: Specifies the set of users for whom this group is discoverable. Possible values are:  
  * whoCanEnterFreeFormTags `string`: Deprecated. This is merged into the new whoCanAssistContent setting. Permission to enter free form tags for topics in a forum. Possible values are:  
  * whoCanHideAbuse `string`: Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can hide posts by reporting them as abuse. Possible values are:  
  * whoCanInvite `string`: Deprecated. This is merged into the new whoCanModerateMembers setting. Permissions to invite new members. Possible values are:  
  * whoCanJoin `string`: Permission to join group. Possible values are:  
  * whoCanLeaveGroup `string`: Permission to leave the group. Possible values are:  
  * whoCanLockTopics `string`: Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can prevent users from posting replies to topics. Possible values are:  
  * whoCanMakeTopicsSticky `string`: Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can make topics appear at the top of the topic list. Possible values are:  
  * whoCanMarkDuplicate `string`: Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark a topic as a duplicate of another topic. Possible values are:  
  * whoCanMarkFavoriteReplyOnAnyTopic `string`: Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark any other user's post as a favorite reply. Possible values are:  
  * whoCanMarkFavoriteReplyOnOwnTopic `string`: Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark a post for a topic they started as a favorite reply. Possible values are:  
  * whoCanMarkNoResponseNeeded `string`: Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark a topic as not needing a response. Possible values are:  
  * whoCanModerateContent `string`: Specifies who can moderate content. Possible values are:  
  * whoCanModerateMembers `string`: Specifies who can manage members. Possible values are:  
  * whoCanModifyMembers `string`: Deprecated. This is merged into the new whoCanModerateMembers setting. Specifies who can change group members' roles. Possible values are:  
  * whoCanModifyTagsAndCategories `string`: Deprecated. This is merged into the new whoCanAssistContent setting. Permission to change tags and categories. Possible values are:  
  * whoCanMoveTopicsIn `string`: Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can move topics into the group or forum. Possible values are:  
  * whoCanMoveTopicsOut `string`: Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can move topics out of the group or forum. Possible values are:  
  * whoCanPostAnnouncements `string`: Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can post announcements, a special topic type. Possible values are:  
  * whoCanPostMessage `string`: Permissions to post messages. Possible values are:  
  * whoCanTakeTopics `string`: Deprecated. This is merged into the new whoCanAssistContent setting. Permission to take topics in a forum. Possible values are:  
  * whoCanUnassignTopic `string`: Deprecated. This is merged into the new whoCanAssistContent setting. Permission to unassign any topic in a forum. Possible values are:  
  * whoCanUnmarkFavoriteReplyOnAnyTopic `string`: Deprecated. This is merged into the new whoCanAssistContent setting. Permission to unmark any post from a favorite reply. Possible values are:  
  * whoCanViewGroup `string`: Permissions to view group messages. Possible values are:  
  * whoCanViewMembership `string`: Permissions to view membership. Possible values are:  


