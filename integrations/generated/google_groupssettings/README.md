# @datafire/google_groupssettings

Client library for Groups Settings

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

google_groupssettings.groups.get({
  "groupUniqueId": ""
}).then(data => {
  console.log(data);
});
```

## Description

Lets you manage permission levels and related settings of a group.

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

### groups.get
Gets one resource by id.


```js
google_groupssettings.groups.get({
  "groupUniqueId": ""
}, context)
```

#### Input
* input `object`
  * groupUniqueId **required** `string`: The resource ID
  * alt `string` (values: atom, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Groups](#groups)

### groups.patch
Updates an existing resource. This method supports patch semantics.


```js
google_groupssettings.groups.patch({
  "groupUniqueId": ""
}, context)
```

#### Input
* input `object`
  * body [Groups](#groups)
  * groupUniqueId **required** `string`: The resource ID
  * alt `string` (values: atom, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Groups](#groups)

### groups.update
Updates an existing resource.


```js
google_groupssettings.groups.update({
  "groupUniqueId": ""
}, context)
```

#### Input
* input `object`
  * body [Groups](#groups)
  * groupUniqueId **required** `string`: The resource ID
  * alt `string` (values: atom, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Groups](#groups)



## Definitions

### Groups
* Groups `object`: JSON template for Group resource
  * allowExternalMembers `string`: Are external members allowed to join the group.
  * allowGoogleCommunication `string`: Is google allowed to contact admins.
  * allowWebPosting `string`: If posting from web is allowed.
  * archiveOnly `string`: If the group is archive only
  * customFooterText `string`: Custom footer text.
  * customReplyTo `string`: Default email to which reply to any message should go.
  * defaultMessageDenyNotificationText `string`: Default message deny notification message
  * description `string`: Description of the group
  * email `string`: Email id of the group
  * includeCustomFooter `string`: Whether to include custom footer.
  * includeInGlobalAddressList `string`: If this groups should be included in global address list or not.
  * isArchived `string`: If the contents of the group are archived.
  * kind `string`: The type of the resource.
  * maxMessageBytes `integer`: Maximum message size allowed.
  * membersCanPostAsTheGroup `string`: Can members post using the group email address.
  * messageDisplayFont `string`: Default message display font. Possible values are: DEFAULT_FONT FIXED_WIDTH_FONT
  * messageModerationLevel `string`: Moderation level for messages. Possible values are: MODERATE_ALL_MESSAGES MODERATE_NON_MEMBERS MODERATE_NEW_MEMBERS MODERATE_NONE
  * name `string`: Name of the Group
  * primaryLanguage `string`: Primary language for the group.
  * replyTo `string`: Whome should the default reply to a message go to. Possible values are: REPLY_TO_CUSTOM REPLY_TO_SENDER REPLY_TO_LIST REPLY_TO_OWNER REPLY_TO_IGNORE REPLY_TO_MANAGERS
  * sendMessageDenyNotification `string`: Should the member be notified if his message is denied by owner.
  * showInGroupDirectory `string`: Is the group listed in groups directory
  * spamModerationLevel `string`: Moderation level for messages detected as spam. Possible values are: ALLOW MODERATE SILENTLY_MODERATE REJECT
  * whoCanAdd `string`: Permissions to add members. Possible values are: ALL_MANAGERS_CAN_ADD ALL_MEMBERS_CAN_ADD NONE_CAN_ADD
  * whoCanContactOwner `string`: Permission to contact owner of the group via web UI. Possible values are: ANYONE_CAN_CONTACT ALL_IN_DOMAIN_CAN_CONTACT ALL_MEMBERS_CAN_CONTACT ALL_MANAGERS_CAN_CONTACT
  * whoCanInvite `string`: Permissions to invite members. Possible values are: ALL_MEMBERS_CAN_INVITE ALL_MANAGERS_CAN_INVITE NONE_CAN_INVITE
  * whoCanJoin `string`: Permissions to join the group. Possible values are: ANYONE_CAN_JOIN ALL_IN_DOMAIN_CAN_JOIN INVITED_CAN_JOIN CAN_REQUEST_TO_JOIN
  * whoCanLeaveGroup `string`: Permission to leave the group. Possible values are: ALL_MANAGERS_CAN_LEAVE ALL_MEMBERS_CAN_LEAVE NONE_CAN_LEAVE
  * whoCanPostMessage `string`: Permissions to post messages to the group. Possible values are: NONE_CAN_POST ALL_MANAGERS_CAN_POST ALL_MEMBERS_CAN_POST ALL_OWNERS_CAN_POST ALL_IN_DOMAIN_CAN_POST ANYONE_CAN_POST
  * whoCanViewGroup `string`: Permissions to view group. Possible values are: ANYONE_CAN_VIEW ALL_IN_DOMAIN_CAN_VIEW ALL_MEMBERS_CAN_VIEW ALL_MANAGERS_CAN_VIEW
  * whoCanViewMembership `string`: Permissions to view membership. Possible values are: ALL_IN_DOMAIN_CAN_VIEW ALL_MEMBERS_CAN_VIEW ALL_MANAGERS_CAN_VIEW


