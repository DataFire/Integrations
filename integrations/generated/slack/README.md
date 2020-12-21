# @datafire/slack

Client library for Slack Web API

## Installation and Usage
```bash
npm install --save @datafire/slack
```
```js
let slack = require('@datafire/slack').create({
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

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
slack.oauthCallback({
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
slack.oauthRefresh(null, context)
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

### admin_apps_approve
Approve an app for installation on a workspace.


```js
slack.admin_apps_approve({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `admin.apps:write`
  * app_id `string`: The id of the app to approve.
  * request_id `string`: The id of the request to approve.
  * team_id `string`

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_apps_approved_list
List approved apps for an org or workspace.


```js
slack.admin_apps_approved_list({
  "token": ""
}, context)
```

#### Input
* input `object`
  * cursor `string`: Set `cursor` to `next_cursor` returned by the previous call to list items in the next page
  * token **required** `string`: Authentication token. Requires scope: `admin.apps:read`
  * limit `integer`: The maximum number of items to return. Must be between 1 - 1000 both inclusive.
  * team_id `string`
  * enterprise_id `string`

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_apps_requests_list
List app requests for a team/workspace.


```js
slack.admin_apps_requests_list({
  "token": ""
}, context)
```

#### Input
* input `object`
  * cursor `string`: Set `cursor` to `next_cursor` returned by the previous call to list items in the next page
  * token **required** `string`: Authentication token. Requires scope: `admin.apps:read`
  * limit `integer`: The maximum number of items to return. Must be between 1 - 1000 both inclusive.
  * team_id `string`

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_apps_restrict
Restrict an app for installation on a workspace.


```js
slack.admin_apps_restrict({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `admin.apps:write`
  * app_id `string`: The id of the app to restrict.
  * request_id `string`: The id of the request to restrict.
  * team_id `string`

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_apps_restricted_list
List restricted apps for an org or workspace.


```js
slack.admin_apps_restricted_list({
  "token": ""
}, context)
```

#### Input
* input `object`
  * cursor `string`: Set `cursor` to `next_cursor` returned by the previous call to list items in the next page
  * token **required** `string`: Authentication token. Requires scope: `admin.apps:read`
  * limit `integer`: The maximum number of items to return. Must be between 1 - 1000 both inclusive.
  * team_id `string`
  * enterprise_id `string`

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_conversations_setTeams
Set the workspaces in an Enterprise grid org that connect to a channel.


```js
slack.admin_conversations_setTeams({
  "token": "",
  "channel_id": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `admin.conversations:write`
  * channel_id **required** `string`: The encoded `channel_id` to add or remove to workspaces.
  * org_channel `boolean`: True if channel has to be converted to an org channel
  * target_team_ids `string`: The list of workspaces to which the channel should be shared. Not required if the channel is being shared orgwide. Example: `['T1234', 'T5678']`
  * team_id `string`: The workspace to which the channel belongs. Omit this argument if the channel is a cross-workspace shared channel.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_emoji_add
Add an emoji.


```js
slack.admin_emoji_add({
  "name": "",
  "token": "",
  "url": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included.
  * token **required** `string`: Authentication token. Requires scope: `admin.teams:write`
  * url **required** `string`: The URL of a file to use as an image for the emoji. Square images under 128KB and with transparent backgrounds work best.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_emoji_addAlias
Add an emoji alias.


```js
slack.admin_emoji_addAlias({
  "alias_for": "",
  "name": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * alias_for **required** `string`: The alias of the emoji.
  * name **required** `string`: The name of the emoji to be aliased. Colons (`:myemoji:`) around the value are not required, although they may be included.
  * token **required** `string`: Authentication token. Requires scope: `admin.teams:write`

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_emoji_list
List emoji for an Enterprise Grid organization.


```js
slack.admin_emoji_list({
  "token": ""
}, context)
```

#### Input
* input `object`
  * cursor `string`: Set `cursor` to `next_cursor` returned by the previous call to list items in the next page
  * token **required** `string`: Authentication token. Requires scope: `admin.teams:read`
  * limit `integer`: The maximum number of items to return. Must be between 1 - 1000 both inclusive.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_emoji_remove
Remove an emoji across an Enterprise Grid organization


```js
slack.admin_emoji_remove({
  "name": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included.
  * token **required** `string`: Authentication token. Requires scope: `admin.teams:write`

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_emoji_rename
Rename an emoji.


```js
slack.admin_emoji_rename({
  "name": "",
  "new_name": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the emoji to be renamed. Colons (`:myemoji:`) around the value are not required, although they may be included.
  * new_name **required** `string`: The new name of the emoji.
  * token **required** `string`: Authentication token. Requires scope: `admin.teams:write`

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_inviteRequests_approve
Approve a workspace invite request.


```js
slack.admin_inviteRequests_approve({
  "token": "",
  "invite_request_id": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `admin.invites:write`
  * invite_request_id **required** `string`: ID of the request to invite.
  * team_id `string`: ID for the workspace where the invite request was made.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_inviteRequests_approved_list
List all approved workspace invite requests.


```js
slack.admin_inviteRequests_approved_list({
  "token": ""
}, context)
```

#### Input
* input `object`
  * cursor `string`: Value of the `next_cursor` field sent as part of the previous API response
  * token **required** `string`: Authentication token. Requires scope: `admin.invites:read`
  * limit `integer`: The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive
  * team_id `string`: ID for the workspace where the invite requests were made.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_inviteRequests_denied_list
List all denied workspace invite requests.


```js
slack.admin_inviteRequests_denied_list({
  "token": ""
}, context)
```

#### Input
* input `object`
  * cursor `string`: Value of the `next_cursor` field sent as part of the previous api response
  * token **required** `string`: Authentication token. Requires scope: `admin.invites:read`
  * limit `integer`: The number of results that will be returned by the API on each invocation. Must be between 1 - 1000 both inclusive
  * team_id `string`: ID for the workspace where the invite requests were made.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_inviteRequests_deny
Deny a workspace invite request.


```js
slack.admin_inviteRequests_deny({
  "token": "",
  "invite_request_id": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `admin.invites:write`
  * invite_request_id **required** `string`: ID of the request to invite.
  * team_id `string`: ID for the workspace where the invite request was made.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_inviteRequests_list
List all pending workspace invite requests.


```js
slack.admin_inviteRequests_list({
  "token": ""
}, context)
```

#### Input
* input `object`
  * cursor `string`: Value of the `next_cursor` field sent as part of the previous API response
  * token **required** `string`: Authentication token. Requires scope: `admin.invites:read`
  * limit `integer`: The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive
  * team_id `string`: ID for the workspace where the invite requests were made.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_teams_admins_list
List all of the admins on a given workspace.


```js
slack.admin_teams_admins_list({
  "token": "",
  "team_id": ""
}, context)
```

#### Input
* input `object`
  * cursor `string`: Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.
  * token **required** `string`: Authentication token. Requires scope: `admin.teams:read`
  * limit `integer`: The maximum number of items to return.
  * team_id **required** `string`

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_teams_create
Create an Enterprise team.


```js
slack.admin_teams_create({
  "token": "",
  "team_domain": "",
  "team_name": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `admin.teams:write`
  * team_description `string`: Description for the team.
  * team_discoverability `string`: Who can join the team. A team's discoverability can be `open`, `closed`, `invite_only`, or `unlisted`.
  * team_domain **required** `string`: Team domain (for example, slacksoftballteam).
  * team_name **required** `string`: Team name (for example, Slack Softball Team).

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_teams_list
List all teams on an Enterprise organization


```js
slack.admin_teams_list({
  "token": ""
}, context)
```

#### Input
* input `object`
  * cursor `string`: Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.
  * token **required** `string`: Authentication token. Requires scope: `admin.teams:read`
  * limit `integer`: The maximum number of items to return. Must be between 1 - 100 both inclusive.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_teams_owners_list
List all of the owners on a given workspace.


```js
slack.admin_teams_owners_list({
  "token": "",
  "team_id": ""
}, context)
```

#### Input
* input `object`
  * cursor `string`: Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.
  * token **required** `string`: Authentication token. Requires scope: `admin.teams:read`
  * limit `integer`: The maximum number of items to return. Must be between 1 - 1000 both inclusive.
  * team_id **required** `string`

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_teams_settings_info
Fetch information about settings in a workspace


```js
slack.admin_teams_settings_info({
  "token": "",
  "team_id": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `admin.teams:read`
  * team_id **required** `string`

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_teams_settings_setDefaultChannels
Set the default channels of a workspace.


```js
slack.admin_teams_settings_setDefaultChannels({
  "channel_ids": "",
  "team_id": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * channel_ids **required** `string`: An array of channel IDs.
  * team_id **required** `string`: ID for the workspace to set the default channel for.
  * token **required** `string`: Authentication token. Requires scope: `admin.teams:write`

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_teams_settings_setDescription
Set the description of a given workspace.


```js
slack.admin_teams_settings_setDescription({
  "token": "",
  "description": "",
  "team_id": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `admin.teams:write`
  * description **required** `string`: The new description for the workspace.
  * team_id **required** `string`: ID for the workspace to set the description for.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_teams_settings_setDiscoverability
An API method that allows admins to set the discoverability of a given workspace


```js
slack.admin_teams_settings_setDiscoverability({
  "token": "",
  "discoverability": "",
  "team_id": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `admin.teams:write`
  * discoverability **required** `string`: This workspace's discovery setting. It must be set to one of `open`, `invite_only`, `closed`, or `unlisted`.
  * team_id **required** `string`: The ID of the workspace to set discoverability on.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_teams_settings_setIcon
Sets the icon of a workspace.


```js
slack.admin_teams_settings_setIcon({
  "image_url": "",
  "team_id": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * image_url **required** `string`: Image URL for the icon
  * team_id **required** `string`: ID for the workspace to set the icon for.
  * token **required** `string`: Authentication token. Requires scope: `admin.teams:write`

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_teams_settings_setName
Set the name of a given workspace.


```js
slack.admin_teams_settings_setName({
  "token": "",
  "name": "",
  "team_id": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `admin.teams:write`
  * name **required** `string`: The new name of the workspace.
  * team_id **required** `string`: ID for the workspace to set the name for.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_users_assign
Add an Enterprise user to a workspace.


```js
slack.admin_users_assign({
  "token": "",
  "team_id": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `admin.users:write`
  * channel_ids `string`: Comma separated values of channel IDs to add user in the new workspace.
  * is_restricted `boolean`: True if user should be added to the workspace as a guest.
  * is_ultra_restricted `boolean`: True if user should be added to the workspace as a single-channel guest.
  * team_id **required** `string`: The ID (`T1234`) of the workspace.
  * user_id **required** `string`: The ID of the user to add to the workspace.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_users_invite
Invite a user to a workspace.


```js
slack.admin_users_invite({
  "token": "",
  "channel_ids": "",
  "email": "",
  "team_id": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `admin.users:write`
  * channel_ids **required** `string`: A comma-separated list of `channel_id`s for this user to join. At least one channel is required.
  * custom_message `string`: An optional message to send to the user in the invite email.
  * email **required** `string`: The email address of the person to invite.
  * guest_expiration_ts `string`: Timestamp when guest account should be disabled. Only include this timestamp if you are inviting a guest user and you want their account to expire on a certain date.
  * is_restricted `boolean`: Is this user a multi-channel guest user? (default: false)
  * is_ultra_restricted `boolean`: Is this user a single channel guest user? (default: false)
  * real_name `string`: Full name of the user.
  * resend `boolean`: Allow this invite to be resent in the future if a user has not signed up yet. (default: false)
  * team_id **required** `string`: The ID (`T1234`) of the workspace.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_users_list
List users on a workspace


```js
slack.admin_users_list({
  "token": "",
  "team_id": ""
}, context)
```

#### Input
* input `object`
  * cursor `string`: Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.
  * token **required** `string`: Authentication token. Requires scope: `admin.users:read`
  * limit `integer`: Limit for how many users to be retrieved per page
  * team_id **required** `string`: The ID (`T1234`) of the workspace.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_users_remove
Remove a user from a workspace.


```js
slack.admin_users_remove({
  "token": "",
  "team_id": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `admin.users:write`
  * team_id **required** `string`: The ID (`T1234`) of the workspace.
  * user_id **required** `string`: The ID of the user to remove.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_users_session_reset
Wipes all valid sessions on all devices for a given user


```js
slack.admin_users_session_reset({
  "token": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `admin.users:write`
  * mobile_only `boolean`: Only expire mobile sessions (default: false)
  * user_id **required** `string`: The ID of the user to wipe sessions for
  * web_only `boolean`: Only expire web sessions (default: false)

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_users_setAdmin
Set an existing guest, regular user, or owner to be an admin user.


```js
slack.admin_users_setAdmin({
  "token": "",
  "team_id": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `admin.users:write`
  * team_id **required** `string`: The ID (`T1234`) of the workspace.
  * user_id **required** `string`: The ID of the user to designate as an admin.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_users_setExpiration
Set an expiration for a guest user


```js
slack.admin_users_setExpiration({
  "token": "",
  "expiration_ts": 0,
  "team_id": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `admin.users:write`
  * expiration_ts **required** `integer`: Timestamp when guest account should be disabled.
  * team_id **required** `string`: The ID (`T1234`) of the workspace.
  * user_id **required** `string`: The ID of the user to set an expiration for.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_users_setOwner
Set an existing guest, regular user, or admin user to be a workspace owner.


```js
slack.admin_users_setOwner({
  "token": "",
  "team_id": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `admin.users:write`
  * team_id **required** `string`: The ID (`T1234`) of the workspace.
  * user_id **required** `string`: Id of the user to promote to owner.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### admin_users_setRegular
Set an existing guest user, admin user, or owner to be a regular user.


```js
slack.admin_users_setRegular({
  "token": "",
  "team_id": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `admin.users:write`
  * team_id **required** `string`: The ID (`T1234`) of the workspace.
  * user_id **required** `string`: The ID of the user to designate as a regular user.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### api_test
Checks API calling code.


```js
slack.api_test({}, context)
```

#### Input
* input `object`
  * foo `string`: example property to return
  * error `string`: Error response to return

#### Output
* output `object`: Schema for successful response api.test method
  * ok **required** [defs_ok_true](#defs_ok_true)

### apps_permissions_info
Returns list of permissions this app has on a team.


```js
slack.apps_permissions_info({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `none`

#### Output
* output `object`: Schema for successful response from apps.permissions.info method
  * info **required** `object`
    * app_home **required** `object`
      * resources [objs_resources](#objs_resources)
      * scopes [objs_scopes](#objs_scopes)
    * channel **required** `object`
      * resources [objs_resources](#objs_resources)
      * scopes [objs_scopes](#objs_scopes)
    * group **required** `object`
      * resources [objs_resources](#objs_resources)
      * scopes [objs_scopes](#objs_scopes)
    * im **required** `object`
      * resources [objs_resources](#objs_resources)
      * scopes [objs_scopes](#objs_scopes)
    * mpim **required** `object`
      * resources [objs_resources](#objs_resources)
      * scopes [objs_scopes](#objs_scopes)
    * team **required** `object`
      * resources **required** [objs_resources](#objs_resources)
      * scopes **required** [objs_scopes](#objs_scopes)
  * ok **required** [defs_ok_true](#defs_ok_true)

### apps_permissions_request
Allows an app to request additional scopes


```js
slack.apps_permissions_request({
  "scopes": "",
  "token": "",
  "trigger_id": ""
}, context)
```

#### Input
* input `object`
  * scopes **required** `string`: A comma separated list of scopes to request for
  * token **required** `string`: Authentication token. Requires scope: `none`
  * trigger_id **required** `string`: Token used to trigger the permissions API

#### Output
* output `object`: Schema for successful response from apps.permissions.request method
  * ok **required** [defs_ok_true](#defs_ok_true)

### apps_permissions_resources_list
Returns list of resource grants this app has on a team.


```js
slack.apps_permissions_resources_list({
  "token": ""
}, context)
```

#### Input
* input `object`
  * cursor `string`: Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.
  * token **required** `string`: Authentication token. Requires scope: `none`
  * limit `integer`: The maximum number of items to return.

#### Output
* output `object`: Schema for successful response apps.permissions.resources.list method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * resources **required** `array`
    * items `object`
      * id `string`
      * type `string`
  * response_metadata `object`
    * next_cursor **required** `string`

### apps_permissions_scopes_list
Returns list of scopes this app has on a team.


```js
slack.apps_permissions_scopes_list({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `none`

#### Output
* output `object`: Schema for successful response api.permissions.scopes.list method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * scopes **required** `object`
    * app_home [objs_scopes](#objs_scopes)
    * channel [objs_scopes](#objs_scopes)
    * group [objs_scopes](#objs_scopes)
    * im [objs_scopes](#objs_scopes)
    * mpim [objs_scopes](#objs_scopes)
    * team [objs_scopes](#objs_scopes)
    * user [objs_scopes](#objs_scopes)

### apps_permissions_users_list
Returns list of user grants and corresponding scopes this app has on a team.


```js
slack.apps_permissions_users_list({
  "token": ""
}, context)
```

#### Input
* input `object`
  * cursor `string`: Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.
  * token **required** `string`: Authentication token. Requires scope: `none`
  * limit `integer`: The maximum number of items to return.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### apps_permissions_users_request
Enables an app to trigger a permissions modal to grant an app access to a user access scope.


```js
slack.apps_permissions_users_request({
  "scopes": "",
  "token": "",
  "user": "",
  "trigger_id": ""
}, context)
```

#### Input
* input `object`
  * scopes **required** `string`: A comma separated list of user scopes to request for
  * token **required** `string`: Authentication token. Requires scope: `none`
  * user **required** `string`: The user this scope is being requested for
  * trigger_id **required** `string`: Token used to trigger the request

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### apps_uninstall
Uninstalls your app from a workspace.


```js
slack.apps_uninstall({}, context)
```

#### Input
* input `object`
  * client_secret `string`: Issued when you created your application.
  * token `string`: Authentication token. Requires scope: `none`
  * client_id `string`: Issued when you created your application.

#### Output
* output `object`: Schema for successful response from apps.uninstall method
  * ok **required** [defs_ok_true](#defs_ok_true)

### auth_revoke
Revokes a token.


```js
slack.auth_revoke({
  "token": ""
}, context)
```

#### Input
* input `object`
  * test `boolean`: Setting this parameter to `1` triggers a _testing mode_ where the specified token will not actually be revoked.
  * token **required** `string`: Authentication token. Requires scope: `none`

#### Output
* output `object`: Schema for successful response from auth.revoke method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * revoked **required** `boolean`

### auth_test
Checks authentication & identity.


```js
slack.auth_test({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `none`

#### Output
* output `object`: Schema for successful response auth.test method
  * is_enterprise_install `boolean`
  * ok **required** [defs_ok_true](#defs_ok_true)
  * team **required** `string`
  * team_id **required** [defs_team](#defs_team)
  * url **required** `string`
  * user **required** `string`
  * user_id **required** [defs_user_id](#defs_user_id)

### bots_info
Gets information about a bot user.


```js
slack.bots_info({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `users:read`
  * bot `string`: Bot user to get info on

#### Output
* output `object`: Schema for successful response from bots.info method
  * bot **required** `object`
    * app_id **required** [defs_app_id](#defs_app_id)
    * deleted **required** `boolean`
    * icons **required** `object`
      * image_36 **required** `string`
      * image_48 **required** `string`
      * image_72 **required** `string`
    * id **required** [defs_bot_id](#defs_bot_id)
    * name **required** `string`
    * updated **required** `integer`
    * user_id [defs_user_id](#defs_user_id)
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_archive
Archives a channel.


```js
slack.channels_archive({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `channels:write`
  * channel `string`: Channel to archive

#### Output
* output `object`: Schema for successful response from channels.archive method
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_create
Creates a channel.


```js
slack.channels_create({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `channels:write`
  * name `string`: Name of channel to create
  * validate `boolean`: Whether to return errors on invalid channel name instead of modifying it to meet the specified criteria.

#### Output
* output `object`: Schema for successful response channels.create method
  * channel **required** [objs_channel](#objs_channel)
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_history
Fetches history of messages and events from a channel.


```js
slack.channels_history({}, context)
```

#### Input
* input `object`
  * count `integer`: Number of messages to return, between 1 and 1000.
  * unreads `boolean`: Include `unread_count_display` in the output?
  * inclusive `boolean`: Include messages with latest or oldest timestamp in results.
  * token `string`: Authentication token. Requires scope: `channels:history`
  * oldest `number`: Start of time range of messages to include in results.
  * channel `string`: Channel to fetch history for.
  * latest `number`: End of time range of messages to include in results.

#### Output
* output `object`: Schema for successful response channels.history method
  * channel_actions_count **required** `integer`
  * channel_actions_ts **required**
  * has_more **required** `boolean`
  * is_limited `boolean`
  * messages **required** `array`
    * items [objs_message](#objs_message)
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_info
Gets information about a channel.


```js
slack.channels_info({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `channels:read`
  * include_locale `boolean`: Set this to `true` to receive the locale for this channel. Defaults to `false`
  * channel `string`: Channel to get info on

#### Output
* output `object`: Schema for successful response channels.info method
  * channel **required** [objs_channel](#objs_channel)
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_invite
Invites a user to a channel.


```js
slack.channels_invite({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `channels:write`
  * channel `string`: Channel to invite user to.
  * user `string`: User to invite to channel.

#### Output
* output `object`: Schema for successful response channels.invite method
  * channel **required** [objs_channel](#objs_channel)
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_join
Joins a channel, creating it if needed.


```js
slack.channels_join({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `channels:write`
  * name `string`: Name of channel to join
  * validate `boolean`: Whether to return errors on invalid channel name instead of modifying it to meet the specified criteria.

#### Output
* output `object`: Schema for successful response from channels.join method
  * already_in_channel `boolean`
  * channel **required** [objs_channel](#objs_channel)
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_kick
Removes a user from a channel.


```js
slack.channels_kick({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `channels:write`
  * channel `string`: Channel to remove user from.
  * user `string`: User to remove from channel.

#### Output
* output `object`: Schema for successful response from channels.kick method
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_leave
Leaves a channel.


```js
slack.channels_leave({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `channels:write`
  * channel `string`: Channel to leave

#### Output
* output `object`: Schema for successful response from channels.leave method
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_list
Lists all channels in a Slack team.


```js
slack.channels_list({}, context)
```

#### Input
* input `object`
  * exclude_members `boolean`: Exclude the `members` collection from each `channel`
  * cursor `string`: Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.
  * token `string`: Authentication token. Requires scope: `channels:read`
  * limit `integer`: The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.
  * exclude_archived `boolean`: Exclude archived channels from the list

#### Output
* output `object`: Schema for successful response channels.list method
  * channels **required** `array`
    * items [objs_channel](#objs_channel)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * response_metadata [objs_response_metadata](#objs_response_metadata)

### channels_mark
Sets the read cursor in a channel.


```js
slack.channels_mark({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `channels:write`
  * channel `string`: Channel to set reading cursor in.
  * ts `number`: Timestamp of the most recently seen message.

#### Output
* output `object`: Schema for successful response channels.mark method
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_rename
Renames a channel.


```js
slack.channels_rename({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `channels:write`
  * channel `string`: Channel to rename
  * name `string`: New name for channel.
  * validate `boolean`: Whether to return errors on invalid channel name instead of modifying it to meet the specified criteria.

#### Output
* output `object`: Schema for successful response from channels.rename method
  * channel **required** [objs_channel](#objs_channel)
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_replies
Retrieve a thread of messages posted to a channel


```js
slack.channels_replies({}, context)
```

#### Input
* input `object`
  * thread_ts `number`: Unique identifier of a thread's parent message
  * token `string`: Authentication token. Requires scope: `channels:history`
  * channel `string`: Channel to fetch thread from

#### Output
* output `object`: Schema for successful response from channels.replies method
  * has_more **required** `boolean`
  * messages **required** `array`
    * items
  * ok **required** [defs_ok_true](#defs_ok_true)

### channels_setPurpose
Sets the purpose for a channel.


```js
slack.channels_setPurpose({
  "token": "",
  "channel": "",
  "purpose": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `channels:write`
  * channel **required** `string`: Channel to set the purpose of
  * name_tagging `boolean`: if it is true, treat this like a message and not an unescaped thing
  * purpose **required** `string`: The new purpose

#### Output
* output `object`: Schema for successful response from channels.setPurpose method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * purpose **required** `string`

### channels_setTopic
Sets the topic for a channel.


```js
slack.channels_setTopic({
  "token": "",
  "channel": "",
  "topic": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `channels:write`
  * channel **required** `string`: Channel to set the topic of
  * topic **required** `string`: The new topic

#### Output
* output `object`: Schema for successful response from channels.setTopic method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * topic **required** `string`

### channels_unarchive
Unarchives a channel.


```js
slack.channels_unarchive({
  "token": "",
  "channel": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `channels:write`
  * channel **required** `string`: Channel to unarchive

#### Output
* output `object`: Schema for successful response from channels.unarchive method
  * ok **required** [defs_ok_true](#defs_ok_true)

### chat_delete
Deletes a message.


```js
slack.chat_delete({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `chat:write`
  * as_user `boolean`: Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot users](/bot-users) in this context are considered authed users. If unused or false, the message will be deleted with `chat:write:bot` scope.
  * channel `string`: Channel containing the message to be deleted.
  * ts `number`: Timestamp of the message to be deleted.

#### Output
* output `object`: Schema for successful response of chat.delete method
  * channel **required** [defs_channel](#defs_channel)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * ts **required** [defs_ts](#defs_ts)

### chat_deleteScheduledMessage
Deletes a pending scheduled message from the queue.


```js
slack.chat_deleteScheduledMessage({
  "token": "",
  "channel": "",
  "scheduled_message_id": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `chat:write`
  * as_user `boolean`: Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot users](/bot-users) in this context are considered authed users. If unused or false, the message will be deleted with `chat:write:bot` scope.
  * channel **required** `string`: The channel the scheduled_message is posting to
  * scheduled_message_id **required** `string`: `scheduled_message_id` returned from call to chat.scheduleMessage

#### Output
* output `object`: Schema for successful response from chat.deleteScheduledMessage method
  * ok **required** [defs_ok_true](#defs_ok_true)

### chat_getPermalink
Retrieve a permalink URL for a specific extant message


```js
slack.chat_getPermalink({
  "token": "",
  "message_ts": "",
  "channel": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `none`
  * message_ts **required** `string`: A message's `ts` value, uniquely identifying it within a channel
  * channel **required** `string`: The ID of the conversation or channel containing the message

#### Output
* output `object`: Schema for successful response chat.getPermalink
  * channel **required** [defs_channel](#defs_channel)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * permalink **required** `string`

### chat_meMessage
Share a me message into a channel.


```js
slack.chat_meMessage({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `chat:write:user`
  * channel `string`: Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name.
  * text `string`: Text of the message to send.

#### Output
* output `object`: Schema for successful response from chat.meMessage method
  * channel [defs_channel](#defs_channel)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * ts [defs_ts](#defs_ts)

### chat_postEphemeral
Sends an ephemeral message to a user in a channel.


```js
slack.chat_postEphemeral({
  "token": "",
  "channel": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `chat:write`
  * as_user `boolean`: Pass true to post the message as the authed user. Defaults to true if the chat:write:bot scope is not included. Otherwise, defaults to false.
  * attachments `string`: A JSON-based array of structured attachments, presented as a URL-encoded string.
  * blocks `string`: A JSON-based array of structured blocks, presented as a URL-encoded string.
  * channel **required** `string`: Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name.
  * icon_emoji `string`: Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction with `as_user` set to `false`, otherwise ignored. See [authorship](#authorship) below.
  * icon_url `string`: URL to an image to use as the icon for this message. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below.
  * link_names `boolean`: Find and link channel names and usernames.
  * parse `string`: Change how messages are treated. Defaults to `none`. See [below](#formatting).
  * text `string`: How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail.
  * thread_ts `string`: Provide another message's `ts` value to post this message in a thread. Avoid using a reply's `ts` value; use its parent's value instead. Ephemeral messages in threads are only shown if there is already an active thread.
  * user **required** `string`: `id` of the user who will receive the ephemeral message. The user should be in the channel specified by the `channel` argument.
  * username `string`: Set your bot's user name. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below.

#### Output
* output `object`: Schema for successful response from chat.postEphemeral method
  * message_ts **required** [defs_ts](#defs_ts)
  * ok **required** [defs_ok_true](#defs_ok_true)

### chat_postMessage
Sends a message to a channel.


```js
slack.chat_postMessage({
  "token": "",
  "channel": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `chat:write`
  * as_user `string`: Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [authorship](#authorship) below.
  * attachments `string`: A JSON-based array of structured attachments, presented as a URL-encoded string.
  * blocks `string`: A JSON-based array of structured blocks, presented as a URL-encoded string.
  * channel **required** `string`: Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. See [below](#channels) for more details.
  * icon_emoji `string`: Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction with `as_user` set to `false`, otherwise ignored. See [authorship](#authorship) below.
  * icon_url `string`: URL to an image to use as the icon for this message. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below.
  * link_names `boolean`: Find and link channel names and usernames.
  * mrkdwn `boolean`: Disable Slack markup parsing by setting to `false`. Enabled by default.
  * parse `string`: Change how messages are treated. Defaults to `none`. See [below](#formatting).
  * reply_broadcast `boolean`: Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to `false`.
  * text `string`: How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail.
  * thread_ts `string`: Provide another message's `ts` value to make this message a reply. Avoid using a reply's `ts` value; use its parent instead.
  * unfurl_links `boolean`: Pass true to enable unfurling of primarily text-based content.
  * unfurl_media `boolean`: Pass false to disable unfurling of media content.
  * username `string`: Set your bot's user name. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below.

#### Output
* output `object`: Schema for successful response of chat.postMessage method
  * channel **required** [defs_channel](#defs_channel)
  * message **required** [objs_message](#objs_message)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * ts **required** [defs_ts](#defs_ts)

### chat_scheduleMessage
Schedules a message to be sent to a channel.


```js
slack.chat_scheduleMessage({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `chat:write`
  * as_user `boolean`: Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [chat.postMessage](chat.postMessage#authorship).
  * attachments `string`: A JSON-based array of structured attachments, presented as a URL-encoded string.
  * blocks `string`: A JSON-based array of structured blocks, presented as a URL-encoded string.
  * channel `string`: Channel, private group, or DM channel to send message to. Can be an encoded ID, or a name. See [below](#channels) for more details.
  * link_names `boolean`: Find and link channel names and usernames.
  * parse `string`: Change how messages are treated. Defaults to `none`. See [chat.postMessage](chat.postMessage#formatting).
  * post_at `string`: Unix EPOCH timestamp of time in future to send the message.
  * reply_broadcast `boolean`: Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to `false`.
  * text `string`: How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail.
  * thread_ts `number`: Provide another message's `ts` value to make this message a reply. Avoid using a reply's `ts` value; use its parent instead.
  * unfurl_links `boolean`: Pass true to enable unfurling of primarily text-based content.
  * unfurl_media `boolean`: Pass false to disable unfurling of media content.

#### Output
* output `object`: Schema for successful response of chat.scheduleMessage method
  * channel **required** [defs_channel](#defs_channel)
  * message **required** `object`
    * bot_id **required** [defs_bot_id](#defs_bot_id)
    * bot_profile [objs_bot_profile](#objs_bot_profile)
    * team **required** [defs_team](#defs_team)
    * text **required** `string`
    * type **required** `string`
    * user **required** [defs_user_id](#defs_user_id)
    * username `string`
  * ok **required** [defs_ok_true](#defs_ok_true)
  * post_at **required** `integer`
  * scheduled_message_id **required** `string`

### chat_scheduledMessages_list
Returns a list of scheduled messages.


```js
slack.chat_scheduledMessages_list({}, context)
```

#### Input
* input `object`
  * cursor `string`: For pagination purposes, this is the `cursor` value returned from a previous call to `chat.scheduledmessages.list` indicating where you want to start this call from.
  * token `string`: Authentication token. Requires scope: `none`
  * limit `integer`: Maximum number of original entries to return.
  * oldest `number`: A UNIX timestamp of the oldest value in the time range
  * channel `string`: The channel of the scheduled messages
  * latest `number`: A UNIX timestamp of the latest value in the time range

#### Output
* output `object`: Schema for successful response from chat.scheduledMessages.list method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * response_metadata **required** `object`
    * next_cursor **required** `string`
  * scheduled_messages **required** `array`
    * items `object`
      * channel_id **required** [defs_channel_id](#defs_channel_id)
      * date_created **required** `integer`
      * id **required** `string`
      * post_at **required** `integer`
      * text `string`

### chat_unfurl
Provide custom unfurl behavior for user-posted URLs


```js
slack.chat_unfurl({
  "token": "",
  "channel": "",
  "ts": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `links:write`
  * channel **required** `string`: Channel ID of the message
  * ts **required** `string`: Timestamp of the message to add unfurl behavior to.
  * unfurls `string`: URL-encoded JSON map with keys set to URLs featured in the the message, pointing to their unfurl blocks or message attachments.
  * user_auth_message `string`: Provide a simply-formatted string to send as an ephemeral message to the user as invitation to authenticate further and enable full unfurling behavior
  * user_auth_required `boolean`: Set to `true` or `1` to indicate the user must install your Slack app to trigger unfurls for this domain
  * user_auth_url `string`: Send users to this custom URL where they will complete authentication in your app to fully trigger unfurling. Value should be properly URL-encoded.

#### Output
* output `object`: Schema for successful response from chat.unfurl method
  * ok **required** [defs_ok_true](#defs_ok_true)

### chat_update
Updates a message.


```js
slack.chat_update({
  "token": "",
  "channel": "",
  "ts": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `chat:write`
  * as_user `string`: Pass true to update the message as the authed user. [Bot users](/bot-users) in this context are considered authed users.
  * attachments `string`: A JSON-based array of structured attachments, presented as a URL-encoded string. This field is required when not presenting `text`.
  * blocks `string`: A JSON-based array of structured blocks, presented as a URL-encoded string.
  * channel **required** `string`: Channel containing the message to be updated.
  * link_names `string`: Find and link channel names and usernames. Defaults to `none`. See [below](#formatting).
  * parse `string`: Change how messages are treated. Defaults to `client`, unlike `chat.postMessage`. Accepts either `none` or `full`. See [below](#formatting).
  * text `string`: New text for the message, using the [default formatting rules](/docs/formatting). It's not required when presenting `attachments`.
  * ts **required** `string`: Timestamp of the message to be updated.

#### Output
* output `object`: Schema for successful response of chat.update method
  * channel **required** `string`
  * message **required** `object`
    * attachments `array`
      * items `object`
    * blocks [blocks](#blocks)
    * text **required** `string`
  * ok **required** [defs_ok_true](#defs_ok_true)
  * text **required** `string`
  * ts **required** `string`

### conversations_archive
Archives a conversation.


```js
slack.conversations_archive({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * channel `string`: ID of conversation to archive

#### Output
* output `object`: Schema for successful response conversations.archive method
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_close
Closes a direct message or multi-person direct message.


```js
slack.conversations_close({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * channel `string`: Conversation to close.

#### Output
* output `object`: Schema for successful response conversations.close method
  * already_closed `boolean`
  * no_op `boolean`
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_create
Initiates a public or private channel-based conversation


```js
slack.conversations_create({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * is_private `boolean`: Create a private channel instead of a public one
  * name `string`: Name of the public or private channel to create
  * user_ids `string`: **Required** for workspace apps. A list of between 1 and 30 human users that will be added to the newly-created conversation. This argument has no effect when used by classic Slack apps.

#### Output
* output `object`: Schema for successful response conversations.create method
  * channel **required** [objs_conversation](#objs_conversation)
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_history
Fetches a conversation's history of messages and events.


```js
slack.conversations_history({}, context)
```

#### Input
* input `object`
  * inclusive `boolean`: Include messages with latest or oldest timestamp in results only when either timestamp is specified.
  * cursor `string`: Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.
  * token `string`: Authentication token. Requires scope: `conversations:history`
  * limit `integer`: The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.
  * oldest `number`: Start of time range of messages to include in results.
  * channel `string`: Conversation ID to fetch history for.
  * latest `number`: End of time range of messages to include in results.

#### Output
* output `object`: Schema for successful response from conversations.history method
  * channel_actions_count **required** `integer`
  * channel_actions_ts **required**
  * has_more **required** `boolean`
  * messages **required** `array`
    * items [objs_message](#objs_message)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * pin_count **required** `integer`

### conversations_info
Retrieve information about a conversation.


```js
slack.conversations_info({}, context)
```

#### Input
* input `object`
  * include_num_members `boolean`: Set to `true` to include the member count for the specified conversation. Defaults to `false`
  * token `string`: Authentication token. Requires scope: `conversations:read`
  * channel `string`: Conversation ID to learn more about
  * include_locale `boolean`: Set this to `true` to receive the locale for this conversation. Defaults to `false`

#### Output
* output `object`: Schema for successful response conversations.info
  * channel **required** [objs_conversation](#objs_conversation)
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_invite
Invites users to a channel.


```js
slack.conversations_invite({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * channel `string`: The ID of the public or private channel to invite user(s) to.
  * users `string`: A comma separated list of user IDs. Up to 1000 users may be listed.

#### Output
* output `object`: Schema for successful response from conversations.invite method
  * channel **required** [objs_conversation](#objs_conversation)
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_join
Joins an existing conversation.


```js
slack.conversations_join({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `channels:write`
  * channel `string`: ID of conversation to join

#### Output
* output `object`: Schema for successful response from conversations.join method
  * channel **required** [objs_conversation](#objs_conversation)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * response_metadata `object`
    * warnings `array`
      * items `string`
  * warning `string`

### conversations_kick
Removes a user from a conversation.


```js
slack.conversations_kick({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * channel `string`: ID of conversation to remove user from.
  * user `string`: User ID to be removed.

#### Output
* output `object`: Schema for successful response conversations.kick method
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_leave
Leaves a conversation.


```js
slack.conversations_leave({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * channel `string`: Conversation to leave

#### Output
* output `object`: Schema for successful response from conversations.leave method
  * not_in_channel `boolean` (values: true)
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_list
Lists all channels in a Slack team.


```js
slack.conversations_list({}, context)
```

#### Input
* input `object`
  * cursor `string`: Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.
  * token `string`: Authentication token. Requires scope: `conversations:read`
  * limit `integer`: The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. Must be an integer no larger than 1000.
  * exclude_archived `boolean`: Set to `true` to exclude archived channels from the list
  * types `string`: Mix and match channel types by providing a comma-separated list of any combination of `public_channel`, `private_channel`, `mpim`, `im`

#### Output
* output `object`: Schema for successful response from conversations.list method
  * channels **required** `array`
    * items [objs_conversation](#objs_conversation)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * response_metadata `object`
    * next_cursor **required** `string`

### conversations_members
Retrieve members of a conversation.


```js
slack.conversations_members({}, context)
```

#### Input
* input `object`
  * cursor `string`: Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.
  * token `string`: Authentication token. Requires scope: `conversations:read`
  * limit `integer`: The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.
  * channel `string`: ID of the conversation to retrieve members for

#### Output
* output `object`: Schema for successful response conversations.members method
  * members **required** `array`
    * items [defs_user_id](#defs_user_id)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * response_metadata **required** `object`
    * next_cursor **required** `string`

### conversations_open
Opens or resumes a direct message or multi-person direct message.


```js
slack.conversations_open({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * channel `string`: Resume a conversation by supplying an `im` or `mpim`'s ID. Or provide the `users` field instead.
  * return_im `boolean`: Boolean, indicates you want the full IM channel definition in the response.
  * users `string`: Comma separated lists of users. If only one user is included, this creates a 1:1 DM.  The ordering of the users is preserved whenever a multi-person direct message is returned. Supply a `channel` when not supplying `users`.

#### Output
* output `object`: Schema for successful response from conversations.open method when opening channels, ims, mpims
  * already_open `boolean`
  * channel **required**
  * no_op `boolean`
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_rename
Renames a conversation.


```js
slack.conversations_rename({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * channel `string`: ID of conversation to rename
  * name `string`: New name for conversation.

#### Output
* output `object`: Schema for successful response from conversations.rename method
  * channel **required** [objs_conversation](#objs_conversation)
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_replies
Retrieve a thread of messages posted to a conversation


```js
slack.conversations_replies({}, context)
```

#### Input
* input `object`
  * inclusive `boolean`: Include messages with latest or oldest timestamp in results only when either timestamp is specified.
  * ts `number`: Unique identifier of a thread's parent message.
  * cursor `string`: Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.
  * token `string`: Authentication token. Requires scope: `conversations:history`
  * limit `integer`: The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.
  * oldest `number`: Start of time range of messages to include in results.
  * channel `string`: Conversation ID to fetch thread from.
  * latest `number`: End of time range of messages to include in results.

#### Output
* output `object`: Schema for successful response from conversations.replies method
  * has_more `boolean`
  * messages **required** `array`
    * items
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_setPurpose
Sets the purpose for a conversation.


```js
slack.conversations_setPurpose({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * channel `string`: Conversation to set the purpose of
  * purpose `string`: A new, specialer purpose

#### Output
* output `object`: Schema for successful response from conversations.setPurpose method
  * channel **required** [objs_conversation](#objs_conversation)
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_setTopic
Sets the topic for a conversation.


```js
slack.conversations_setTopic({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * channel `string`: Conversation to set the topic of
  * topic `string`: The new topic string. Does not support formatting or linkification.

#### Output
* output `object`: Schema for successful response from conversations.setTopic method
  * channel **required** [objs_conversation](#objs_conversation)
  * ok **required** [defs_ok_true](#defs_ok_true)

### conversations_unarchive
Reverses conversation archival.


```js
slack.conversations_unarchive({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `conversations:write`
  * channel `string`: ID of conversation to unarchive

#### Output
* output `object`: Schema for successful response from conversations.unarchive method
  * ok **required** [defs_ok_true](#defs_ok_true)

### dialog_open
Open a dialog with a user


```js
slack.dialog_open({
  "token": "",
  "trigger_id": "",
  "dialog": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `none`
  * trigger_id **required** `string`: Exchange a trigger to post to the user.
  * dialog **required** `string`: The dialog definition. This must be a JSON-encoded string.

#### Output
* output `object`: Schema for successful response from dialog.open method
  * ok **required** [defs_ok_true](#defs_ok_true)

### dnd_endDnd
Ends the current user's Do Not Disturb session immediately.


```js
slack.dnd_endDnd({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `dnd:write`

#### Output
* output `object`: Schema for successful response from dnd.endDnd method
  * ok **required** [defs_ok_true](#defs_ok_true)

### dnd_endSnooze
Ends the current user's snooze mode immediately.


```js
slack.dnd_endSnooze({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `dnd:write`

#### Output
* output `object`: Schema for successful response from dnd.endSnooze method
  * dnd_enabled **required** `boolean`
  * next_dnd_end_ts **required** `integer`
  * next_dnd_start_ts **required** `integer`
  * ok **required** [defs_ok_true](#defs_ok_true)
  * snooze_enabled **required** `boolean`

### dnd_info
Retrieves a user's current Do Not Disturb status.


```js
slack.dnd_info({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `dnd:read`
  * user `string`: User to fetch status for (defaults to current user)

#### Output
* output `object`: Schema for successful response from dnd.info method
  * dnd_enabled **required** `boolean`
  * next_dnd_end_ts **required** `integer`
  * next_dnd_start_ts **required** `integer`
  * ok **required** [defs_ok_true](#defs_ok_true)
  * snooze_enabled **required** `boolean`
  * snooze_endtime **required** `integer`
  * snooze_remaining **required** `integer`

### dnd_setSnooze
Turns on Do Not Disturb mode for the current user, or changes its duration.


```js
slack.dnd_setSnooze({
  "num_minutes": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * num_minutes **required** `string`: Number of minutes, from now, to snooze until.
  * token **required** `string`: Authentication token. Requires scope: `dnd:write`

#### Output
* output `object`: Schema for successful response from dnd.setSnooze method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * snooze_enabled **required** `boolean`
  * snooze_endtime **required** `integer`
  * snooze_remaining **required** `integer`

### dnd_teamInfo
Retrieves the Do Not Disturb status for up to 50 users on a team.


```js
slack.dnd_teamInfo({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `dnd:read`
  * users `string`: Comma-separated list of users to fetch Do Not Disturb status for

#### Output
* output `object`: Schema for successful response from dnd.teamInfo method
  * cached `boolean`
  * ok **required** [defs_ok_true](#defs_ok_true)
  * users **required** `object`

### emoji_list
Lists custom emoji for a team.


```js
slack.emoji_list({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `emoji:read`

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### files_comments_delete
Deletes an existing comment on a file.


```js
slack.files_comments_delete({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `files:write:user`
  * file `string`: File to delete a comment from.
  * id `string`: The comment to delete.

#### Output
* output `object`: Schema for successful response files.comments.delete method
  * ok **required** [defs_ok_true](#defs_ok_true)

### files_delete
Deletes a file.


```js
slack.files_delete({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `files:write:user`
  * file `string`: ID of file to delete.

#### Output
* output `object`: Schema for successful response files.delete method
  * ok **required** [defs_ok_true](#defs_ok_true)

### files_info
Gets information about a team file.


```js
slack.files_info({}, context)
```

#### Input
* input `object`
  * count `string`
  * cursor `string`: Parameter for pagination. File comments are paginated for a single file. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection of comments. See [pagination](/docs/pagination) for more details.
  * token `string`: Authentication token. Requires scope: `files:read`
  * limit `integer`: The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached.
  * file `string`: Specify a file by providing its ID.
  * page `string`

#### Output
* output `object`: Schema for successful response from files.info method
  * comments **required** [objs_comments](#objs_comments)
  * editor [defs_user_id](#defs_user_id)
  * file **required** [objs_file](#objs_file)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * paging [objs_paging](#objs_paging)
  * response_metadata [objs_response_metadata](#objs_response_metadata)

### files_list
Lists & filters team files.


```js
slack.files_list({}, context)
```

#### Input
* input `object`
  * count `string`
  * channel `string`: Filter files appearing in a specific channel, indicated by its ID.
  * ts_to `number`: Filter files created before this timestamp (inclusive).
  * ts_from `number`: Filter files created after this timestamp (inclusive).
  * token `string`: Authentication token. Requires scope: `files:read`
  * user `string`: Filter files created by a single user.
  * show_files_hidden_by_limit `boolean`: Show truncated file info for files hidden due to being too old, and the team who owns the file being over the file limit.
  * page `string`
  * types `string`: Filter files by type ([see below](#file_types)). You can pass multiple values in the types argument, like `types=spaces,snippets`.The default value is `all`, which does not filter the list.

#### Output
* output `object`: Schema for successful response from files.list method
  * files **required** `array`
    * items [objs_file](#objs_file)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * paging **required** [objs_paging](#objs_paging)

### files_remote_add
Adds a file from a remote service


```js
slack.files_remote_add({}, context)
```

#### Input
* input `object`
  * external_id `string`: Creator defined GUID for the file.
  * external_url `string`: URL of the remote file.
  * filetype `string`: type of file
  * indexable_file_contents `string`: A text file (txt, pdf, doc, etc.) containing textual search terms that are used to improve discovery of the remote file.
  * preview_image `string`: Preview of the document via `multipart/form-data`.
  * title `string`: Title of the file being shared.
  * token `string`: Authentication token. Requires scope: `remote_files:write`

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### files_remote_info
Retrieve information about a remote file added to Slack


```js
slack.files_remote_info({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `remote_files:read`
  * external_id `string`: Creator defined GUID for the file.
  * file `string`: Specify a file by providing its ID.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### files_remote_list
Retrieve information about a remote file added to Slack


```js
slack.files_remote_list({}, context)
```

#### Input
* input `object`
  * ts_to `number`: Filter files created before this timestamp (inclusive).
  * cursor `string`: Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.
  * ts_from `number`: Filter files created after this timestamp (inclusive).
  * token `string`: Authentication token. Requires scope: `remote_files:read`
  * limit `integer`: The maximum number of items to return.
  * channel `string`: Filter files appearing in a specific channel, indicated by its ID.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### files_remote_remove
Remove a remote file.


```js
slack.files_remote_remove({}, context)
```

#### Input
* input `object`
  * external_id `string`: Creator defined GUID for the file.
  * file `string`: Specify a file by providing its ID.
  * token `string`: Authentication token. Requires scope: `remote_files:write`

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### files_remote_share
Share a remote file into a channel.


```js
slack.files_remote_share({}, context)
```

#### Input
* input `object`
  * channels `string`: Comma-separated list of channel IDs where the file will be shared.
  * token `string`: Authentication token. Requires scope: `remote_files:share`
  * external_id `string`: Creator defined GUID for the file.
  * file `string`: Specify a file by providing its ID.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### files_remote_update
Updates an existing remote file.


```js
slack.files_remote_update({}, context)
```

#### Input
* input `object`
  * external_id `string`: Creator defined GUID for the file.
  * external_url `string`: URL of the remote file.
  * file `string`: Specify a file by providing its ID.
  * filetype `string`: type of file
  * indexable_file_contents `string`: File containing contents that can be used to improve searchability for the remote file.
  * preview_image `string`: Preview of the document via `multipart/form-data`.
  * title `string`: Title of the file being shared.
  * token `string`: Authentication token. Requires scope: `remote_files:write`

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### files_revokePublicURL
Revokes public/external sharing access for a file


```js
slack.files_revokePublicURL({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `files:write:user`
  * file `string`: File to revoke

#### Output
* output `object`: Schema for successful response from files.revokePublicURL method
  * file **required** [objs_file](#objs_file)
  * ok **required** [defs_ok_true](#defs_ok_true)

### files_sharedPublicURL
Enables a file for public/external sharing.


```js
slack.files_sharedPublicURL({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `files:write:user`
  * file `string`: File to share

#### Output
* output `object`: Schema for successful response from files.sharedPublicURL method
  * file **required** [objs_file](#objs_file)
  * ok **required** [defs_ok_true](#defs_ok_true)

### files_upload
Uploads or creates a file.


```js
slack.files_upload({}, context)
```

#### Input
* input `object`
  * channels `string`: Comma-separated list of channel names or IDs where the file will be shared.
  * content `string`: File contents via a POST variable. If omitting this parameter, you must provide a `file`.
  * file `string`: File contents via `multipart/form-data`. If omitting this parameter, you must submit `content`.
  * filename `string`: Filename of file.
  * filetype `string`: A [file type](/types/file#file_types) identifier.
  * initial_comment `string`: The message text introducing the file in specified `channels`.
  * thread_ts `number`: Provide another message's `ts` value to upload this file as a reply. Never use a reply's `ts` value; use its parent instead.
  * title `string`: Title of file.
  * token `string`: Authentication token. Requires scope: `files:write:user`

#### Output
* output `object`: Schema for successful response files.upload method
  * file **required** [objs_file](#objs_file)
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_archive
Archives a private channel.


```js
slack.groups_archive({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `groups:write`
  * channel `string`: Private channel to archive

#### Output
* output `object`: Schema for successful response from groups.archive method
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_create
Creates a private channel.


```js
slack.groups_create({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `groups:write`
  * name `string`: Name of private channel to create
  * validate `boolean`: Whether to return errors on invalid channel name instead of modifying it to meet the specified criteria.

#### Output
* output `object`: Schema for successful response groups.create method
  * group **required** [objs_group](#objs_group)
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_createChild
Clones and archives a private channel.


```js
slack.groups_createChild({}, context)
```

#### Input
* input `object`
  * channel `string`: Private channel to clone and archive.
  * token `string`: Authentication token. Requires scope: `groups:write`

#### Output
* output `object`: Schema for successful response from groups.createChild method
  * group **required** [objs_group](#objs_group)
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_history
Fetches history of messages and events from a private channel.


```js
slack.groups_history({}, context)
```

#### Input
* input `object`
  * count `integer`: Number of messages to return, between 1 and 1000.
  * unreads `boolean`: Include `unread_count_display` in the output?
  * inclusive `boolean`: Include messages with latest or oldest timestamp in results.
  * token `string`: Authentication token. Requires scope: `groups:history`
  * oldest `number`: Start of time range of messages to include in results.
  * channel `string`: Private channel to fetch history for.
  * latest `number`: End of time range of messages to include in results.

#### Output
* output `object`: Schema for successful response groups.history method
  * channel_actions_count **required** `integer`
  * channel_actions_ts **required**
  * has_more **required** `boolean`
  * messages **required** `array`
    * items [objs_message](#objs_message)
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_info
Gets information about a private channel.


```js
slack.groups_info({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `groups:read`
  * include_locale `boolean`: Set this to `true` to receive the locale for this group. Defaults to `false`
  * channel `string`: Private channel to get info on

#### Output
* output `object`: Schema for successful response groups.info method
  * group **required** [objs_group](#objs_group)
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_invite
Invites a user to a private channel.


```js
slack.groups_invite({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `groups:write`
  * channel `string`: Private channel to invite user to.
  * user `string`: User to invite.

#### Output
* output `object`: Schema for successful response groups.invite method
  * group **required** [objs_group](#objs_group)
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_kick
Removes a user from a private channel.


```js
slack.groups_kick({
  "token": "",
  "channel": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `groups:write`
  * channel **required** `string`: Private channel to remove user from.
  * user **required** `string`: User to remove from private channel.

#### Output
* output `object`: Schema for successful response from groups.kick method
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_leave
Leaves a private channel.


```js
slack.groups_leave({
  "token": "",
  "channel": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `groups:write`
  * channel **required** `string`: Private channel to leave

#### Output
* output `object`: Schema for successful response from groups.leave method
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_list
Lists private channels that the calling user has access to.


```js
slack.groups_list({}, context)
```

#### Input
* input `object`
  * exclude_members `boolean`: Exclude the `members` from each `group`
  * cursor `string`: Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection. See [pagination](/docs/pagination) for more details.
  * token `string`: Authentication token. Requires scope: `groups:read`
  * limit `integer`: The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached.
  * exclude_archived `boolean`: Don't return archived private channels.

#### Output
* output `object`: Schema for successful response groups.list method
  * groups **required** `array`
    * items [objs_group](#objs_group)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * response_metadata [objs_response_metadata](#objs_response_metadata)

### groups_mark
Sets the read cursor in a private channel.


```js
slack.groups_mark({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `groups:write`
  * channel `string`: Private channel to set reading cursor in.
  * ts `number`: Timestamp of the most recently seen message.

#### Output
* output `object`: Schema for successful response from groups.mark method
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_open
Opens a private channel.


```js
slack.groups_open({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `groups:write`
  * channel `string`: Private channel to open.

#### Output
* output `object`: Schema for successful response from groups.open method
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_rename
Renames a private channel.


```js
slack.groups_rename({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `groups:write`
  * channel `string`: Private channel to rename
  * name `string`: New name for private channel.
  * validate `boolean`: Whether to return errors on invalid channel name instead of modifying it to meet the specified criteria.

#### Output
* output `object`: Schema for successful response from groups.rename method
  * channel **required** [objs_group](#objs_group)
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_replies
Retrieve a thread of messages posted to a private channel


```js
slack.groups_replies({}, context)
```

#### Input
* input `object`
  * thread_ts `number`: Unique identifier of a thread's parent message
  * token `string`: Authentication token. Requires scope: `groups:history`
  * channel `string`: Private channel to fetch thread from

#### Output
* output `object`: Schema for successful response from groups.replies method
  * has_more `boolean`
  * messages **required** `array`
    * items [objs_message](#objs_message)
  * ok **required** [defs_ok_true](#defs_ok_true)

### groups_setPurpose
Sets the purpose for a private channel.


```js
slack.groups_setPurpose({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `groups:write`
  * channel `string`: Private channel to set the purpose of
  * purpose `string`: The new purpose

#### Output
* output `object`: Schema for successful response from groups.setPurpose method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * purpose **required** `string`

### groups_setTopic
Sets the topic for a private channel.


```js
slack.groups_setTopic({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `groups:write`
  * channel `string`: Private channel to set the topic of
  * topic `string`: The new topic

#### Output
* output `object`: Schema for successful response from groups.setTopic method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * topic **required** `string`

### groups_unarchive
Unarchives a private channel.


```js
slack.groups_unarchive({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `groups:write`
  * channel `string`: Private channel to unarchive

#### Output
* output `object`: Schema for successful response from groups.unarchive method
  * ok **required** [defs_ok_true](#defs_ok_true)

### im_close
Close a direct message channel.


```js
slack.im_close({
  "token": "",
  "channel": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `im:write`
  * channel **required** `string`: Direct message channel to close.

#### Output
* output `object`: Schema for successful response from im.close method
  * already_closed `boolean`
  * no_op `boolean`
  * ok **required** [defs_ok_true](#defs_ok_true)

### im_history
Fetches history of messages and events from direct message channel.


```js
slack.im_history({}, context)
```

#### Input
* input `object`
  * count `integer`: Number of messages to return, between 1 and 1000.
  * unreads `boolean`: Include `unread_count_display` in the output?
  * inclusive `boolean`: Include messages with latest or oldest timestamp in results.
  * token `string`: Authentication token. Requires scope: `im:history`
  * oldest `number`: Start of time range of messages to include in results.
  * channel `string`: Direct message channel to fetch history for.
  * latest `number`: End of time range of messages to include in results.

#### Output
* output `object`: Schema for successful response from im.history method
  * channel_actions_count **required** `integer`
  * channel_actions_ts **required**
  * has_more **required** `boolean`
  * messages **required** `array`
    * items [objs_message](#objs_message)
  * ok **required** [defs_ok_true](#defs_ok_true)

### im_list
Lists direct message channels for the calling user.


```js
slack.im_list({}, context)
```

#### Input
* input `object`
  * cursor `string`: Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.
  * token `string`: Authentication token. Requires scope: `im:read`
  * limit `integer`: The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.

#### Output
* output `object`: Schema for successful response im.list method
  * ims **required** `array`
    * items [objs_im](#objs_im)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * response_metadata [objs_response_metadata](#objs_response_metadata)

### im_mark
Sets the read cursor in a direct message channel.


```js
slack.im_mark({
  "token": "",
  "channel": "",
  "ts": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `im:write`
  * channel **required** `string`: Direct message channel to set reading cursor in.
  * ts **required** `string`: Timestamp of the most recently seen message.

#### Output
* output `object`: Schema for successful response im.mark method
  * ok **required** [defs_ok_true](#defs_ok_true)

### im_open
Opens a direct message channel.


```js
slack.im_open({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `im:write`
  * include_locale `boolean`: Set this to `true` to receive the locale for this im. Defaults to `false`
  * return_im `boolean`: Boolean, indicates you want the full IM channel definition in the response.
  * user `string`: User to open a direct message channel with.

#### Output
* output `object`: Schema for successful response from im.open method
  * already_open `boolean`
  * channel **required** `object`
    * created `string`
    * id **required** [defs_dm_id](#defs_dm_id)
    * is_im `boolean`
    * is_open `boolean`
    * last_read [defs_ts](#defs_ts)
    * latest [objs_message](#objs_message)
    * unread_count `number`
    * unread_count_display `number`
    * user [defs_user_id](#defs_user_id)
  * no_op `boolean`
  * ok **required** [defs_ok_true](#defs_ok_true)

### im_replies
Retrieve a thread of messages posted to a direct message conversation


```js
slack.im_replies({}, context)
```

#### Input
* input `object`
  * thread_ts `number`: Unique identifier of a thread's parent message
  * token `string`: Authentication token. Requires scope: `im:history`
  * channel `string`: Direct message channel to fetch thread from

#### Output
* output `object`: Schema for successful response from im.replies method
  * has_more **required** `boolean`
  * messages **required** `array`
    * items
  * ok **required** [defs_ok_true](#defs_ok_true)

### migration_exchange
For Enterprise Grid workspaces, map local user IDs to global user IDs


```js
slack.migration_exchange({
  "token": "",
  "users": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `tokens.basic`
  * to_old `boolean`: Specify `true` to convert `W` global user IDs to workspace-specific `U` IDs. Defaults to `false`.
  * users **required** `string`: A comma-separated list of user ids, up to 400 per request

#### Output
* output `object`: Schema for successful response from migration.exchange method
  * enterprise_id **required** `string`
  * invalid_user_ids `array`
    * items `string`
  * ok **required** [defs_ok_true](#defs_ok_true)
  * team_id **required** [defs_team](#defs_team)
  * user_id_map `object`

### mpim_close
Closes a multiparty direct message channel.


```js
slack.mpim_close({
  "token": "",
  "channel": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `mpim:write`
  * channel **required** `string`: MPIM to close.

#### Output
* output `object`: Schema for successful response from mpim.close method
  * ok **required** [defs_ok_true](#defs_ok_true)

### mpim_history
Fetches history of messages and events from a multiparty direct message.


```js
slack.mpim_history({}, context)
```

#### Input
* input `object`
  * count `integer`: Number of messages to return, between 1 and 1000.
  * unreads `boolean`: Include `unread_count_display` in the output?
  * inclusive `boolean`: Include messages with latest or oldest timestamp in results.
  * token `string`: Authentication token. Requires scope: `mpim:history`
  * oldest `number`: Start of time range of messages to include in results.
  * channel `string`: Multiparty direct message to fetch history for.
  * latest `number`: End of time range of messages to include in results.

#### Output
* output `object`: Schema for successful response from mpim.history method
  * channel_actions_count **required** `integer`
  * channel_actions_ts **required**
  * has_more **required** `boolean`
  * messages **required** `array`
    * items [objs_message](#objs_message)
  * ok **required** [defs_ok_true](#defs_ok_true)

### mpim_list
Lists multiparty direct message channels for the calling user.


```js
slack.mpim_list({}, context)
```

#### Input
* input `object`
  * cursor `string`: Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection. See [pagination](/docs/pagination) for more details.
  * token `string`: Authentication token. Requires scope: `mpim:read`
  * limit `integer`: The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached.

#### Output
* output `object`: Schema for successful response from mpim.list method
  * groups **required** `array`
    * items [objs_group](#objs_group)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * response_metadata [objs_response_metadata](#objs_response_metadata)

### mpim_mark
Sets the read cursor in a multiparty direct message channel.


```js
slack.mpim_mark({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `mpim:write`
  * channel `string`: multiparty direct message channel to set reading cursor in.
  * ts `number`: Timestamp of the most recently seen message.

#### Output
* output `object`: Schema for successful response from mpim.mark method
  * ok **required** [defs_ok_true](#defs_ok_true)

### mpim_open
This method opens a multiparty direct message.


```js
slack.mpim_open({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `mpim:write`
  * users `string`: Comma separated lists of users.  The ordering of the users is preserved whenever a MPIM group is returned.

#### Output
* output `object`: Schema for successful response from mpim.open method
  * group **required** [objs_group](#objs_group)
  * ok **required** [defs_ok_true](#defs_ok_true)

### mpim_replies
Retrieve a thread of messages posted to a direct message conversation from a multiparty direct message.


```js
slack.mpim_replies({}, context)
```

#### Input
* input `object`
  * thread_ts `number`: Unique identifier of a thread's parent message.
  * token `string`: Authentication token. Requires scope: `mpim:history`
  * channel `string`: Multiparty direct message channel to fetch thread from.

#### Output
* output `object`: Schema for successful response from mpim.replies method
  * has_more **required** `boolean`
  * messages **required** `array`
    * items
  * ok **required** [defs_ok_true](#defs_ok_true)

### oauth_access
Exchanges a temporary OAuth verifier code for an access token.


```js
slack.oauth_access({}, context)
```

#### Input
* input `object`
  * code `string`: The `code` param returned via the OAuth callback.
  * token `string`: Authentication token. Requires scope: `none`
  * redirect_uri `string`: This must match the originally submitted URI (if one was sent).
  * single_channel `boolean`: Request the user to add your app only to a single channel. Only valid with a [legacy workspace app](https://api.slack.com/legacy-workspace-apps).
  * client_id `string`: Issued when you created your application.
  * client_secret `string`: Issued when you created your application.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### oauth_token
Exchanges a temporary OAuth verifier code for a workspace token.


```js
slack.oauth_token({}, context)
```

#### Input
* input `object`
  * client_secret `string`: Issued when you created your application.
  * code `string`: The `code` param returned via the OAuth callback.
  * single_channel `boolean`: Request the user to add your app only to a single channel.
  * client_id `string`: Issued when you created your application.
  * redirect_uri `string`: This must match the originally submitted URI (if one was sent).

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### oauth_v2_access
Exchanges a temporary OAuth verifier code for an access token.


```js
slack.oauth_v2_access({
  "code": ""
}, context)
```

#### Input
* input `object`
  * client_secret `string`: Issued when you created your application.
  * code **required** `string`: The `code` param returned via the OAuth callback.
  * client_id `string`: Issued when you created your application.
  * redirect_uri `string`: This must match the originally submitted URI (if one was sent).

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### pins_add
Pins an item to a channel.


```js
slack.pins_add({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `pins:write`
  * channel `string`: Channel to pin the item in.
  * timestamp `number`: Timestamp of the message to pin.

#### Output
* output `object`: Schema for successful response from pins.add method
  * ok **required** [defs_ok_true](#defs_ok_true)

### pins_list
Lists items pinned to a channel.


```js
slack.pins_list({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `pins:read`
  * channel `string`: Channel to get pinned items for.

#### Output
* output: Schema for successful response from pins.list method

### pins_remove
Un-pins an item from a channel.


```js
slack.pins_remove({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `pins:write`
  * channel `string`: Channel where the item is pinned to.
  * file `string`: File to un-pin.
  * file_comment `string`: File comment to un-pin.
  * timestamp `number`: Timestamp of the message to un-pin.

#### Output
* output `object`: Schema for successful response from pins.remove method
  * ok **required** [defs_ok_true](#defs_ok_true)

### reactions_add
Adds a reaction to an item.


```js
slack.reactions_add({
  "token": "",
  "channel": "",
  "name": "",
  "timestamp": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `reactions:write`
  * channel **required** `string`: Channel where the message to add reaction to was posted.
  * name **required** `string`: Reaction (emoji) name.
  * timestamp **required** `string`: Timestamp of the message to add reaction to.

#### Output
* output `object`: Schema for successful response from reactions.add method
  * ok **required** [defs_ok_true](#defs_ok_true)

### reactions_get
Gets reactions for an item.


```js
slack.reactions_get({
  "token": ""
}, context)
```

#### Input
* input `object`
  * full `boolean`: If true always return the complete reaction list.
  * file_comment `string`: File comment to get reactions for.
  * timestamp `string`: Timestamp of the message to get reactions for.
  * token **required** `string`: Authentication token. Requires scope: `reactions:read`
  * file `string`: File to get reactions for.
  * channel `string`: Channel where the message to get reactions for was posted.

#### Output
* output `object`: Schema for successful response from reactions.get method

### reactions_list
Lists reactions made by a user.


```js
slack.reactions_list({
  "token": ""
}, context)
```

#### Input
* input `object`
  * count `integer`
  * full `boolean`: If true always return the complete reaction list.
  * cursor `string`: Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection. See [pagination](/docs/pagination) for more details.
  * token **required** `string`: Authentication token. Requires scope: `reactions:read`
  * limit `integer`: The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached.
  * user `string`: Show reactions made by this user. Defaults to the authed user.
  * page `integer`

#### Output
* output `object`: Schema for successful response from reactions.list method
  * items **required** `array`
    * items
  * ok **required** [defs_ok_true](#defs_ok_true)
  * paging [objs_paging](#objs_paging)
  * response_metadata [objs_response_metadata](#objs_response_metadata)

### reactions_remove
Removes a reaction from an item.


```js
slack.reactions_remove({
  "token": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `reactions:write`
  * channel `string`: Channel where the message to remove reaction from was posted.
  * file `string`: File to remove reaction from.
  * file_comment `string`: File comment to remove reaction from.
  * name **required** `string`: Reaction (emoji) name.
  * timestamp `string`: Timestamp of the message to remove reaction from.

#### Output
* output `object`: Schema for successful response from reactions.remove method
  * ok **required** [defs_ok_true](#defs_ok_true)

### reminders_add
Creates a reminder.


```js
slack.reminders_add({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `reminders:write`
  * text `string`: The content of the reminder
  * time `string`: When this reminder should happen: the Unix timestamp (up to five years from now), the number of seconds until the reminder (if within 24 hours), or a natural language description (Ex. "in 15 minutes," or "every Thursday")
  * user `string`: The user who will receive the reminder. If no user is specified, the reminder will go to user who created it.

#### Output
* output `object`: Schema for successful response from reminders.add method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * reminder **required** [objs_reminder](#objs_reminder)

### reminders_complete
Marks a reminder as complete.


```js
slack.reminders_complete({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `reminders:write`
  * reminder `string`: The ID of the reminder to be marked as complete

#### Output
* output `object`: Schema for successful response from reminders.complete method
  * ok **required** [defs_ok_true](#defs_ok_true)

### reminders_delete
Deletes a reminder.


```js
slack.reminders_delete({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `reminders:write`
  * reminder `string`: The ID of the reminder

#### Output
* output `object`: Schema for successful response from reminders.delete method
  * ok **required** [defs_ok_true](#defs_ok_true)

### reminders_info
Gets information about a reminder.


```js
slack.reminders_info({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `reminders:read`
  * reminder `string`: The ID of the reminder

#### Output
* output `object`: Schema for successful response from reminders.info method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * reminder **required** [objs_reminder](#objs_reminder)

### reminders_list
Lists all reminders created by or for a given user.


```js
slack.reminders_list({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `reminders:read`

#### Output
* output `object`: Schema for successful response from reminders.list method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * reminders **required** `array`
    * items [objs_reminder](#objs_reminder)

### rtm_connect
Starts a Real Time Messaging session.


```js
slack.rtm_connect({
  "token": ""
}, context)
```

#### Input
* input `object`
  * presence_sub `boolean`: Only deliver presence events when requested by subscription. See [presence subscriptions](/docs/presence-and-status#subscriptions).
  * token **required** `string`: Authentication token. Requires scope: `rtm:stream`
  * batch_presence_aware `boolean`: Batch presence deliveries via subscription. Enabling changes the shape of `presence_change` events. See [batch presence](/docs/presence-and-status#batching).

#### Output
* output `object`: Schema for successful response from rtm.connect method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * self **required** `object`
    * id **required** [defs_user_id](#defs_user_id)
    * name **required** `string`
  * team **required** `object`
    * domain **required** `string`
    * id **required** [defs_team](#defs_team)
    * name **required** `string`
  * url **required** `string`

### search_messages
Searches for messages matching a query.


```js
slack.search_messages({
  "query": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * sort_dir `string`: Change sort direction to ascending (`asc`) or descending (`desc`).
  * query **required** `string`: Search query.
  * sort `string`: Return matches sorted by either `score` or `timestamp`.
  * count `integer`: Pass the number of results you want per "page". Maximum of `100`.
  * token **required** `string`: Authentication token. Requires scope: `search:read`
  * highlight `boolean`: Pass a value of `true` to enable query highlight markers (see below).
  * page `integer`

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### stars_add
Adds a star to an item.


```js
slack.stars_add({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `stars:write`
  * channel `string`: Channel to add star to, or channel where the message to add star to was posted (used with `timestamp`).
  * file `string`: File to add star to.
  * file_comment `string`: File comment to add star to.
  * timestamp `string`: Timestamp of the message to add star to.

#### Output
* output `object`: Schema for successful response from stars.add method
  * ok **required** [defs_ok_true](#defs_ok_true)

### stars_list
Lists stars for a user.


```js
slack.stars_list({}, context)
```

#### Input
* input `object`
  * count `string`
  * cursor `string`: Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection. See [pagination](/docs/pagination) for more details.
  * token `string`: Authentication token. Requires scope: `stars:read`
  * limit `integer`: The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached.
  * page `string`

#### Output
* output `object`: Schema for successful response from stars.list method
  * items **required** `array`
    * items
  * ok **required** [defs_ok_true](#defs_ok_true)
  * paging [objs_paging](#objs_paging)

### stars_remove
Removes a star from an item.


```js
slack.stars_remove({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `stars:write`
  * channel `string`: Channel to remove star from, or channel where the message to remove star from was posted (used with `timestamp`).
  * file `string`: File to remove star from.
  * file_comment `string`: File comment to remove star from.
  * timestamp `number`: Timestamp of the message to remove star from.

#### Output
* output `object`: Schema for successful response from stars.remove method
  * ok **required** [defs_ok_true](#defs_ok_true)

### team_accessLogs
Gets the access logs for the current team.


```js
slack.team_accessLogs({
  "token": ""
}, context)
```

#### Input
* input `object`
  * count `integer`
  * token **required** `string`: Authentication token. Requires scope: `admin`
  * page `integer`
  * before `string`: End of time range of logs to include in results (inclusive).

#### Output
* output `object`: Schema for successful response from team.accessLogs method
  * logins **required** `array`
    * items `object`
      * count **required** `integer`
      * country **required** `string`
      * date_first **required** `integer`
      * date_last **required** `integer`
      * ip **required** `string`
      * isp **required** `string`
      * region **required** `string`
      * user_agent **required** `string`
      * user_id **required** [defs_user_id](#defs_user_id)
      * username **required** `string`
  * ok **required** [defs_ok_true](#defs_ok_true)
  * paging **required** [objs_paging](#objs_paging)

### team_billableInfo
Gets billable users information for the current team.


```js
slack.team_billableInfo({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `admin`
  * user `string`: A user to retrieve the billable information for. Defaults to all users.

#### Output
* output `object`: Schema for successful response from team.billableInfo method
  * billable_info **required** `object`
  * ok **required** [defs_ok_true](#defs_ok_true)

### team_info
Gets information about the current team.


```js
slack.team_info({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `team:read`
  * team `string`: Team to get info on, if omitted, will return information about the current team. Will only return team that the authenticated token is allowed to see through external shared channels

#### Output
* output `object`: Schema for successful response from team.info method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * team **required** [objs_team](#objs_team)

### team_integrationLogs
Gets the integration logs for the current team.


```js
slack.team_integrationLogs({
  "token": ""
}, context)
```

#### Input
* input `object`
  * count `integer`
  * change_type `string`: Filter logs with this change type. Defaults to all logs.
  * app_id `integer`: Filter logs to this Slack app. Defaults to all logs.
  * token **required** `string`: Authentication token. Requires scope: `admin`
  * user `string`: Filter logs generated by this user’s actions. Defaults to all logs.
  * service_id `integer`: Filter logs to this service. Defaults to all logs.
  * page `string`

#### Output
* output `object`: Schema for successful response from team.integrationLogs method
  * logs **required** `array`
    * items `object`
      * admin_app_id [defs_app_id](#defs_app_id)
      * app_id **required** [defs_app_id](#defs_app_id)
      * app_type **required** `string`
      * change_type **required** `string`
      * channel [defs_channel](#defs_channel)
      * date **required** `string`
      * scope **required** `string`
      * service_id `string`
      * service_type `string`
      * user_id **required** [defs_user_id](#defs_user_id)
      * user_name **required** `string`
  * ok **required** [defs_ok_true](#defs_ok_true)
  * paging **required** [objs_paging](#objs_paging)

### team_profile_get
Retrieve a team's profile.


```js
slack.team_profile_get({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `users.profile:read`
  * visibility `string`: Filter by visibility.

#### Output
* output `object`: Schema for successful response from team.profile.get method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * profile **required** `object`
    * fields **required** `array`
      * items [objs_team_profile_field](#objs_team_profile_field)

### usergroups_create
Create a User Group


```js
slack.usergroups_create({
  "token": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `usergroups:write`
  * channels `string`: A comma separated string of encoded channel IDs for which the User Group uses as a default.
  * description `string`: A short description of the User Group.
  * handle `string`: A mention handle. Must be unique among channels, users and User Groups.
  * include_count `boolean`: Include the number of users in each User Group.
  * name **required** `string`: A name for the User Group. Must be unique among User Groups.

#### Output
* output `object`: Schema for successful response from usergroups.create method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * usergroup **required** [objs_subteam](#objs_subteam)

### usergroups_disable
Disable an existing User Group


```js
slack.usergroups_disable({
  "token": "",
  "usergroup": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `usergroups:write`
  * include_count `boolean`: Include the number of users in the User Group.
  * usergroup **required** `string`: The encoded ID of the User Group to disable.

#### Output
* output `object`: Schema for successful response from usergroups.disable method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * usergroup **required** [objs_subteam](#objs_subteam)

### usergroups_enable
Enable a User Group


```js
slack.usergroups_enable({
  "token": "",
  "usergroup": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `usergroups:write`
  * include_count `boolean`: Include the number of users in the User Group.
  * usergroup **required** `string`: The encoded ID of the User Group to enable.

#### Output
* output `object`: Schema for successful response from usergroups.enable method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * usergroup **required** [objs_subteam](#objs_subteam)

### usergroups_list
List all User Groups for a team


```js
slack.usergroups_list({
  "token": ""
}, context)
```

#### Input
* input `object`
  * include_users `boolean`: Include the list of users for each User Group.
  * token **required** `string`: Authentication token. Requires scope: `usergroups:read`
  * include_count `boolean`: Include the number of users in each User Group.
  * include_disabled `boolean`: Include disabled User Groups.

#### Output
* output `object`: Schema for successful response from usergroups.list method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * usergroups **required** `array`
    * items [objs_subteam](#objs_subteam)

### usergroups_update
Update an existing User Group


```js
slack.usergroups_update({
  "token": "",
  "usergroup": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `usergroups:write`
  * channels `string`: A comma separated string of encoded channel IDs for which the User Group uses as a default.
  * description `string`: A short description of the User Group.
  * handle `string`: A mention handle. Must be unique among channels, users and User Groups.
  * include_count `boolean`: Include the number of users in the User Group.
  * name `string`: A name for the User Group. Must be unique among User Groups.
  * usergroup **required** `string`: The encoded ID of the User Group to update.

#### Output
* output `object`: Schema for successful response from usergroups.update method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * usergroup **required** [objs_subteam](#objs_subteam)

### usergroups_users_list
List all users in a User Group


```js
slack.usergroups_users_list({
  "token": "",
  "usergroup": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `usergroups:read`
  * include_disabled `boolean`: Allow results that involve disabled User Groups.
  * usergroup **required** `string`: The encoded ID of the User Group to update.

#### Output
* output `object`: Schema for successful response from usergroups.users.list method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * users **required** `array`
    * items [defs_user_id](#defs_user_id)

### usergroups_users_update
Update the list of users for a User Group


```js
slack.usergroups_users_update({
  "token": "",
  "usergroup": "",
  "users": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `usergroups:write`
  * include_count `boolean`: Include the number of users in the User Group.
  * usergroup **required** `string`: The encoded ID of the User Group to update.
  * users **required** `string`: A comma separated string of encoded user IDs that represent the entire list of users for the User Group.

#### Output
* output `object`: Schema for successful response from usergroups.users.update method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * usergroup **required** [objs_subteam](#objs_subteam)

### users_conversations
List conversations the calling user may access.


```js
slack.users_conversations({}, context)
```

#### Input
* input `object`
  * cursor `string`: Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.
  * token `string`: Authentication token. Requires scope: `conversations:read`
  * limit `integer`: The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. Must be an integer no larger than 1000.
  * user `string`: Browse conversations by a specific user ID's membership. Non-public channels are restricted to those where the calling user shares membership.
  * exclude_archived `boolean`: Set to `true` to exclude archived channels from the list
  * types `string`: Mix and match channel types by providing a comma-separated list of any combination of `public_channel`, `private_channel`, `mpim`, `im`

#### Output
* output `object`: Schema for successful response from users.conversations method. Returned conversation objects do not include `num_members` or `is_member`
  * channels **required** `array`
    * items [objs_conversation](#objs_conversation)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * response_metadata `object`
    * next_cursor **required** `string`

### users_deletePhoto
Delete the user profile photo


```js
slack.users_deletePhoto({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `users.profile:write`

#### Output
* output `object`: Schema for successful response from users.deletePhoto method
  * ok **required** [defs_ok_true](#defs_ok_true)

### users_getPresence
Gets user presence information.


```js
slack.users_getPresence({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `users:read`
  * user `string`: User to get presence info on. Defaults to the authed user.

#### Output
* output `object`: Generated from users.getPresence with shasum e7251aec575d8863f9e0eb38663ae9dc26655f65
  * auto_away `boolean`
  * connection_count `integer`
  * last_activity `integer`
  * manual_away `boolean`
  * ok **required** [defs_ok_true](#defs_ok_true)
  * online `boolean`
  * presence **required** `string`

### users_identity
Get a user's identity.


```js
slack.users_identity({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `identity.basic`

#### Output
* output: Schema for successful response from users.identity method

### users_info
Gets information about a user.


```js
slack.users_info({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `users:read`
  * user `string`: User to get info on
  * include_locale `boolean`: Set this to `true` to receive the locale for this user. Defaults to `false`

#### Output
* output `object`: Schema for successful response from users.info method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * user **required** [objs_user](#objs_user)

### users_list
Lists all users in a Slack team.


```js
slack.users_list({}, context)
```

#### Input
* input `object`
  * cursor `string`: Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.
  * token `string`: Authentication token. Requires scope: `users:read`
  * limit `integer`: The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.
  * include_locale `boolean`: Set this to `true` to receive the locale for users. Defaults to `false`

#### Output
* output `object`: Schema for successful response from users.list method
  * cache_ts **required** `integer`
  * members **required** `array`
    * items [objs_user](#objs_user)
  * ok **required** [defs_ok_true](#defs_ok_true)
  * response_metadata [objs_response_metadata](#objs_response_metadata)

### users_lookupByEmail
Find a user with an email address.


```js
slack.users_lookupByEmail({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `users:read.email`
  * email `string`: An email address belonging to a user in the workspace

#### Output
* output `object`: Schema for successful response from users.lookupByEmail method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * user **required** [objs_user](#objs_user)

### users_profile_get
Retrieves a user's profile information.


```js
slack.users_profile_get({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `users.profile:read`
  * include_labels `boolean`: Include labels for each ID in custom profile fields
  * user `string`: User to retrieve profile info for

#### Output
* output `object`: Schema for successful response from users.profile.get method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * profile **required** [objs_user_profile](#objs_user_profile)

### users_profile_set
Set the profile information for a user.


```js
slack.users_profile_set({}, context)
```

#### Input
* input `object`
  * token `string`: Authentication token. Requires scope: `users.profile:write`
  * name `string`: Name of a single key to set. Usable only if `profile` is not passed.
  * profile `string`: Collection of key:value pairs presented as a URL-encoded JSON hash. At most 50 fields may be set. Each field name is limited to 255 characters.
  * user `string`: ID of user to change. This argument may only be specified by team admins on paid teams.
  * value `string`: Value to set a single key to. Usable only if `profile` is not passed.

#### Output
* output `object`: Schema for successful response from users.profile.set method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * profile **required** [objs_user_profile](#objs_user_profile)
  * username **required** `string`

### users_setActive
Marked a user as active. Deprecated and non-functional.


```js
slack.users_setActive({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `users:write`

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### users_setPhoto
Set the user profile photo


```js
slack.users_setPhoto({}, context)
```

#### Input
* input `object`
  * crop_w `integer`: Width/height of crop box (always square)
  * crop_x `integer`: X coordinate of top-left corner of crop box
  * crop_y `integer`: Y coordinate of top-left corner of crop box
  * image `string`: File contents via `multipart/form-data`.
  * token `string`: Authentication token. Requires scope: `users.profile:write`

#### Output
* output `object`: Schema for successful response from users.setPhoto method
  * ok **required** [defs_ok_true](#defs_ok_true)
  * profile **required** `object`
    * avatar_hash **required** `string`
    * image_1024 **required** `string`
    * image_192 **required** `string`
    * image_24 **required** `string`
    * image_32 **required** `string`
    * image_48 **required** `string`
    * image_512 **required** `string`
    * image_72 **required** `string`
    * image_original **required** `string`

### users_setPresence
Manually sets user presence.


```js
slack.users_setPresence({
  "token": "",
  "presence": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `users:write`
  * presence **required** `string`: Either `auto` or `away`

#### Output
* output `object`: Schema for successful response from users.setPresence method
  * ok **required** [defs_ok_true](#defs_ok_true)

### views_open
Open a view for a user.


```js
slack.views_open({
  "token": "",
  "trigger_id": "",
  "view": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `none`
  * trigger_id **required** `string`: Exchange a trigger to post to the user.
  * view **required** `string`: A [view payload](/reference/surfaces/views). This must be a JSON-encoded string.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### views_publish
Publish a static view for a User.


```js
slack.views_publish({
  "token": "",
  "user_id": "",
  "view": ""
}, context)
```

#### Input
* input `object`
  * hash `string`: A string that represents view state to protect against possible race conditions.
  * token **required** `string`: Authentication token. Requires scope: `none`
  * user_id **required** `string`: `id` of the user you want publish a view to.
  * view **required** `string`: A [view payload](/reference/surfaces/views). This must be a JSON-encoded string.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### views_push
Push a view onto the stack of a root view.


```js
slack.views_push({
  "token": "",
  "trigger_id": "",
  "view": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Authentication token. Requires scope: `none`
  * trigger_id **required** `string`: Exchange a trigger to post to the user.
  * view **required** `string`: A [view payload](/reference/surfaces/views). This must be a JSON-encoded string.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)

### views_update
Update an existing view.


```js
slack.views_update({
  "token": ""
}, context)
```

#### Input
* input `object`
  * hash `string`: A string that represents view state to protect against possible race conditions.
  * view_id `string`: A unique identifier of the view to be updated. Either `view_id` or `external_id` is required.
  * token **required** `string`: Authentication token. Requires scope: `none`
  * external_id `string`: A unique identifier of the view set by the developer. Must be unique for all views on a team. Max length of 255 characters. Either `view_id` or `external_id` is required.
  * view `string`: A [view payload](/reference/surfaces/views) This must be a JSON-encoded string.

#### Output
* output `object`: This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
  * ok **required** [defs_ok_true](#defs_ok_true)



## Definitions

### blocks
* Block Kit blocks `array`: This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace.
  * items `object`
    * type **required** `string`

### defs_app_id
* App ID `string`

### defs_bot_id
* Bot User ID `string`

### defs_channel
* Channel-like conversation ID `string`

### defs_channel_id
* Channel ID `string`

### defs_channel_name
* Name of a channel `string`

### defs_comment_id
* File Comment ID `string`

### defs_dm_id
* Direct Message Channel ID `string`

### defs_enterprise_id
* Enterprise ID `string`

### defs_enterprise_name
* Name of the enterprise org `string`

### defs_enterprise_user_id
* Enterprise User ID `string`

### defs_file_id
* File ID `string`

### defs_group_id
* Private Channel ID `string`

### defs_ok_false
* default failure response `boolean` (values: false)

### defs_ok_true
* default success response `boolean` (values: true)

### defs_pinned_info
* Info for a pinned item `object`

### defs_reminder_id
* Reminder ID `string`

### defs_subteam_id
* Subteam ID `string`

### defs_team
* Team ID `string`

### defs_topic_purpose_creator
* User ID or empty string, used for topic and purpose creation `string`

### defs_ts
* Timestamp in format 0123456789.012345 `string`

### defs_user_id
* User ID `string`

### defs_workspace_id
* Team or Enterprise ID `string`

### objs_bot_profile
* Bot Profile Object `object`
  * app_id **required** [defs_app_id](#defs_app_id)
  * deleted **required** `boolean`
  * icons **required** `object`
    * image_36 **required** `string`
    * image_48 **required** `string`
    * image_72 **required** `string`
  * id **required** [defs_bot_id](#defs_bot_id)
  * name **required** `string`
  * team_id **required** [defs_team](#defs_team)
  * updated **required** `integer`

### objs_channel
* Channel Object `object`
  * accepted_user [defs_user_id](#defs_user_id)
  * created **required** `integer`
  * creator **required** [defs_user_id](#defs_user_id)
  * id **required** [defs_channel_id](#defs_channel_id)
  * is_archived `boolean`
  * is_channel **required** `boolean`
  * is_frozen `boolean`
  * is_general `boolean`
  * is_member `boolean`
  * is_moved `integer`
  * is_mpim **required** `boolean`
  * is_non_threadable `boolean`
  * is_org_shared **required** `boolean`
  * is_pending_ext_shared `boolean`
  * is_private **required** `boolean`
  * is_read_only `boolean`
  * is_shared **required** `boolean`
  * is_thread_only `boolean`
  * last_read [defs_ts](#defs_ts)
  * latest
  * members **required** `array`
    * items [defs_user_id](#defs_user_id)
  * name **required** `string`
  * name_normalized **required** `string`
  * num_members `integer`
  * pending_shared `array`
    * items [defs_team](#defs_team)
  * previous_names `array`
    * items [defs_channel_name](#defs_channel_name)
  * priority `number`
  * purpose **required** `object`
    * creator **required** [defs_topic_purpose_creator](#defs_topic_purpose_creator)
    * last_set **required** `integer`
    * value **required** `string`
  * topic **required** `object`
    * creator **required** [defs_topic_purpose_creator](#defs_topic_purpose_creator)
    * last_set **required** `integer`
    * value **required** `string`
  * unlinked `integer`
  * unread_count `integer`
  * unread_count_display `integer`

### objs_comment
* File Comment Object `object`
  * comment **required** `string`
  * created **required** `integer`
  * id **required** [defs_comment_id](#defs_comment_id)
  * is_intro **required** `boolean`
  * is_starred `boolean`
  * num_stars `integer`
  * pinned_info [defs_pinned_info](#defs_pinned_info)
  * pinned_to `array`
    * items [defs_channel](#defs_channel)
  * reactions `array`
    * items [objs_reaction](#objs_reaction)
  * timestamp **required** `integer`
  * user **required** [defs_user_id](#defs_user_id)

### objs_comments
* file comments object `array`

### objs_conversation
* objs_conversation

### objs_enterprise_user
* objs_enterprise_user `object`
  * enterprise_id **required** [defs_enterprise_id](#defs_enterprise_id)
  * enterprise_name **required** [defs_enterprise_name](#defs_enterprise_name)
  * id **required** [defs_enterprise_user_id](#defs_enterprise_user_id)
  * is_admin **required** `boolean`
  * is_owner **required** `boolean`
  * teams **required** `array`
    * items [defs_team](#defs_team)

### objs_file
* file object `object`
  * channels `array`
    * items [defs_channel_id](#defs_channel_id)
  * comments_count `integer`
  * created `integer`
  * date_delete `integer`
  * display_as_bot `boolean`
  * editable `boolean`
  * editor [defs_user_id](#defs_user_id)
  * external_id `string`
  * external_type `string`
  * external_url `string`
  * filetype `string`
  * groups `array`
    * items [defs_group_id](#defs_group_id)
  * has_rich_preview `boolean`
  * id [defs_file_id](#defs_file_id)
  * image_exif_rotation `integer`
  * ims `array`
    * items [defs_dm_id](#defs_dm_id)
  * is_external `boolean`
  * is_public `boolean`
  * is_starred `boolean`
  * is_tombstoned `boolean`
  * last_editor [defs_user_id](#defs_user_id)
  * mimetype `string`
  * mode `string`
  * name `string`
  * non_owner_editable `boolean`
  * num_stars `integer`
  * original_h `integer`
  * original_w `integer`
  * permalink `string`
  * permalink_public `string`
  * pinned_info [defs_pinned_info](#defs_pinned_info)
  * pinned_to `array`
    * items [defs_channel](#defs_channel)
  * pretty_type `string`
  * preview `string`
  * public_url_shared `boolean`
  * reactions `array`
    * items [objs_reaction](#objs_reaction)
  * shares `object`
  * size `integer`
  * source_team [defs_team](#defs_team)
  * state `string`
  * thumb_1024 `string`
  * thumb_1024_h `integer`
  * thumb_1024_w `integer`
  * thumb_160 `string`
  * thumb_360 `string`
  * thumb_360_h `integer`
  * thumb_360_w `integer`
  * thumb_480 `string`
  * thumb_480_h `integer`
  * thumb_480_w `integer`
  * thumb_64 `string`
  * thumb_720 `string`
  * thumb_720_h `integer`
  * thumb_720_w `integer`
  * thumb_80 `string`
  * thumb_800 `string`
  * thumb_800_h `integer`
  * thumb_800_w `integer`
  * thumb_960 `string`
  * thumb_960_h `integer`
  * thumb_960_w `integer`
  * thumb_tiny `string`
  * timestamp `integer`
  * title `string`
  * updated `integer`
  * url_private `string`
  * url_private_download `string`
  * user `string`
  * user_team [defs_team](#defs_team)
  * username `string`

### objs_group
* Group object `object`
  * created **required** `integer`
  * creator **required** [defs_user_id](#defs_user_id)
  * id **required** [defs_group_id](#defs_group_id)
  * is_archived `boolean`
  * is_deleted `boolean`
  * is_group **required** `boolean`
  * is_moved `integer`
  * is_mpim `boolean`
  * is_open `boolean`
  * is_pending_ext_shared `boolean`
  * is_read_only `boolean`
  * is_thread_only `boolean`
  * last_read [defs_ts](#defs_ts)
  * latest
  * members `array`
    * items [defs_user_id](#defs_user_id)
  * name **required** `string`
  * name_normalized **required** `string`
  * num_members `integer`
  * parent_group [defs_group_id](#defs_group_id)
  * priority `number`
  * purpose **required** `object`
    * creator **required** [defs_topic_purpose_creator](#defs_topic_purpose_creator)
    * last_set **required** `integer`
    * value **required** `string`
  * topic **required** `object`
    * creator **required** [defs_topic_purpose_creator](#defs_topic_purpose_creator)
    * last_set **required** `integer`
    * value **required** `string`
  * unread_count `integer`
  * unread_count_display `integer`

### objs_icon
* objs_icon `object`
  * image_102 `string`
  * image_132 `string`
  * image_230 `string`
  * image_34 `string`
  * image_44 `string`
  * image_68 `string`
  * image_88 `string`
  * image_default `boolean`

### objs_im
* IM Object `object`
  * created **required** `integer`
  * id **required** [defs_dm_id](#defs_dm_id)
  * is_app_home `boolean`
  * is_archived `boolean`
  * is_ext_shared `boolean`
  * is_frozen `boolean`
  * is_im **required** `boolean`
  * is_org_shared **required** `boolean`
  * is_shared `boolean`
  * is_user_deleted **required** `boolean`
  * priority `number`
  * user **required** [defs_user_id](#defs_user_id)

### objs_message
* Message object `object`
  * attachments `array`
    * items `object`
      * fallback `string`
      * id **required** `integer`
      * image_bytes `integer`
      * image_height `integer`
      * image_url `string`
      * image_width `integer`
  * blocks [blocks](#blocks)
  * bot_id
  * bot_profile [objs_bot_profile](#objs_bot_profile)
  * client_msg_id `string`
  * comment [objs_comment](#objs_comment)
  * display_as_bot `boolean`
  * file [objs_file](#objs_file)
  * files `array`
    * items [objs_file](#objs_file)
  * icons `object`
    * emoji `string`
  * inviter [defs_user_id](#defs_user_id)
  * is_delayed_message `boolean`
  * is_intro `boolean`
  * is_starred `boolean`
  * last_read [defs_ts](#defs_ts)
  * latest_reply [defs_ts](#defs_ts)
  * name `string`
  * old_name `string`
  * parent_user_id [defs_user_id](#defs_user_id)
  * permalink `string`
  * pinned_to `array`
    * items [defs_channel](#defs_channel)
  * purpose `string`
  * reactions `array`
    * items [objs_reaction](#objs_reaction)
  * replies `array`
    * items `object`
      * ts **required** [defs_ts](#defs_ts)
      * user **required** [defs_user_id](#defs_user_id)
  * reply_count `integer`
  * reply_users `array`
    * items [defs_user_id](#defs_user_id)
  * reply_users_count `integer`
  * source_team [defs_workspace_id](#defs_workspace_id)
  * subscribed `boolean`
  * subtype `string`
  * team [defs_workspace_id](#defs_workspace_id)
  * text **required** `string`
  * thread_ts [defs_ts](#defs_ts)
  * topic `string`
  * ts **required** [defs_ts](#defs_ts)
  * type **required** `string`
  * unread_count `integer`
  * upload `boolean`
  * user [defs_user_id](#defs_user_id)
  * user_profile [objs_user_profile_short](#objs_user_profile_short)
  * user_team [defs_workspace_id](#defs_workspace_id)
  * username `string`

### objs_paging
* paging object `object`
  * count `integer`
  * page **required** `integer`
  * pages `integer`
  * per_page `integer`
  * spill `integer`
  * total **required** `integer`

### objs_reaction
* Reaction object `object`
  * count **required** `integer`
  * name **required** `string`
  * users **required** `array`
    * items [defs_user_id](#defs_user_id)

### objs_reminder
* objs_reminder `object`
  * complete_ts `integer`
  * creator **required** [defs_user_id](#defs_user_id)
  * id **required** [defs_reminder_id](#defs_reminder_id)
  * recurring **required** `boolean`
  * text **required** `string`
  * time `integer`
  * user **required** [defs_user_id](#defs_user_id)

### objs_resources
* resources in info from apps.permissions.info `object`
  * excluded_ids `array`
    * items
  * ids **required** `array`
    * items
  * wildcard `boolean`

### objs_response_metadata
* new paging style `object`
  * next_cursor **required** `string`

### objs_scopes
* objs_scopes `array`
  * items `string`

### objs_subteam
* Subteam/Usergroup Object `object`
  * auto_provision **required** `boolean`
  * auto_type **required**
  * created_by **required** [defs_user_id](#defs_user_id)
  * date_create **required** `integer`
  * date_delete **required** `integer`
  * date_update **required** `integer`
  * deleted_by **required**
  * description **required** `string`
  * enterprise_subteam_id **required** `string`
  * handle **required** `string`
  * id **required** [defs_subteam_id](#defs_subteam_id)
  * is_external **required** `boolean`
  * is_subteam **required** `boolean`
  * is_usergroup **required** `boolean`
  * name **required** `string`
  * prefs **required** `object`
    * channels **required** `array`
      * items [defs_channel_id](#defs_channel_id)
    * groups **required** `array`
      * items [defs_group_id](#defs_group_id)
  * team_id **required** [defs_team](#defs_team)
  * updated_by **required** [defs_user_id](#defs_user_id)
  * user_count `integer`
  * users `array`
    * items [defs_user_id](#defs_user_id)

### objs_team
* Team Object `object`
  * archived `boolean`
  * avatar_base_url `string`
  * created `integer`
  * date_create `integer`
  * deleted `boolean`
  * description `string`
  * discoverable `string`
  * domain **required** `string`
  * email_domain **required** `string`
  * enterprise_id [defs_enterprise_id](#defs_enterprise_id)
  * enterprise_name [defs_enterprise_name](#defs_enterprise_name)
  * has_compliance_export `boolean`
  * icon **required** [objs_icon](#objs_icon)
  * id **required** [defs_team](#defs_team)
  * is_assigned `boolean`
  * is_enterprise `integer`
  * limit_ts `integer`
  * messages_count `integer`
  * msg_edit_window_mins `integer`
  * name **required** `string`
  * over_integrations_limit `boolean`
  * over_storage_limit `boolean`
  * plan `string` (values: , std, plus, compliance, enterprise)

### objs_team_profile_field
* objs_team_profile_field `object`
  * field_name `string`
  * hint **required** `string`
  * id **required** `string`
  * is_hidden `boolean`
  * label **required** `string`
  * options **required** `array`
    * items `string`
  * ordering **required** `number`
  * possible_values `array`
    * items `string`
  * type **required** `string` (values: text, date, link, mailto, options_list, user)

### objs_user
* objs_user

### objs_user_profile
* User profile object `object`
  * always_active `boolean`
  * api_app_id [defs_app_id](#defs_app_id)
  * avatar_hash **required** `string`
  * bot_id [defs_bot_id](#defs_bot_id)
  * display_name **required** `string`
  * display_name_normalized **required** `string`
  * email `string`
  * fields
    * items `object`
  * first_name `string`
  * guest_expiration_ts `integer`
  * guest_invited_by `string`
  * image_1024 `string`
  * image_192 `string`
  * image_24 `string`
  * image_32 `string`
  * image_48 `string`
  * image_512 `string`
  * image_72 `string`
  * image_original `string`
  * is_custom_image `boolean`
  * last_name `string`
  * phone `string`
  * real_name **required** `string`
  * real_name_normalized **required** `string`
  * skype `string`
  * status_emoji `string`
  * status_expiration `integer`
  * status_text `string`
  * status_text_canonical `string`
  * team [defs_workspace_id](#defs_workspace_id)
  * teams [defs_workspace_id](#defs_workspace_id)
  * title `string`

### objs_user_profile_short
* objs_user_profile_short `object`
  * avatar_hash **required** `string`
  * display_name **required** `string`
  * display_name_normalized `string`
  * first_name **required** `string`
  * image_72 **required** `string`
  * is_restricted **required** `boolean`
  * is_ultra_restricted **required** `boolean`
  * name **required** `string`
  * real_name **required** `string`
  * real_name_normalized `string`
  * team **required** [defs_workspace_id](#defs_workspace_id)


