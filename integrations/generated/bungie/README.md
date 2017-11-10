# @datafire/bungie

Client library for Bungie.Net

## Installation and Usage
```bash
npm install --save datafire @datafire/bungie
```

```js
let datafire = require('datafire');
let bungie = require('@datafire/bungie').create({
  apiKey: "",
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

bungie.User.SearchUsers({}).then(data => {
  console.log(data);
})
```

## Description
These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
bungie.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
bungie.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### CommunityContent.GetCommunityContent
Returns community content.


```js
bungie.CommunityContent.GetCommunityContent({
  "mediaFilter": 0,
  "page": 0,
  "sort": 0
}, context)
```

#### Parameters
* mediaFilter (integer) **required** - The type of media to get
* page (integer) **required** - Zero based page
* sort (integer) **required** - The sort mode.

### CommunityContent.GetCommunityLiveStatuses
Returns info about community members who are live streaming.


```js
bungie.CommunityContent.GetCommunityLiveStatuses({
  "page": 0,
  "partnershipType": 0,
  "sort": 0
}, context)
```

#### Parameters
* modeHash (integer) - The hash of the Activity Mode for which streams should be retrieved. Don't pass it in or pass 0 to not filter by mode.
* page (integer) **required** - Zero based page.
* partnershipType (integer) **required** - The type of partnership for which the status should be returned.
* sort (integer) **required** - The sort mode.
* streamLocale (string) - The locale for streams you'd like to see. Don't pass this to fall back on your BNet locale. Pass 'ALL' to not filter by locale.

### CommunityContent.GetCommunityLiveStatusesForClanmates
Returns info about community members who are live streaming in your clans.


```js
bungie.CommunityContent.GetCommunityLiveStatusesForClanmates({
  "page": 0,
  "partnershipType": 0,
  "sort": 0
}, context)
```

#### Parameters
* page (integer) **required** - Zero based page.
* partnershipType (integer) **required** - The type of partnership for which the status should be returned.
* sort (integer) **required** - The sort mode.

### CommunityContent.GetFeaturedCommunityLiveStatuses
Returns info about Featured live streams.


```js
bungie.CommunityContent.GetFeaturedCommunityLiveStatuses({
  "page": 0,
  "partnershipType": 0,
  "sort": 0
}, context)
```

#### Parameters
* page (integer) **required** - Zero based page.
* partnershipType (integer) **required** - The type of partnership for which the status should be returned.
* sort (integer) **required** - The sort mode.
* streamLocale (string) - The locale for streams you'd like to see. Don't pass this to fall back on your BNet locale. Pass 'ALL' to not filter by locale.

### CommunityContent.GetCommunityLiveStatusesForFriends
Returns info about community members who are live streaming among your friends.


```js
bungie.CommunityContent.GetCommunityLiveStatusesForFriends({
  "page": 0,
  "partnershipType": 0,
  "sort": 0
}, context)
```

#### Parameters
* page (integer) **required** - Zero based page.
* partnershipType (integer) **required** - The type of partnership for which the status should be returned.
* sort (integer) **required** - The sort mode.

### CommunityContent.GetStreamingStatusForMember
Gets the Live Streaming status of a particular Account and Membership Type.


```js
bungie.CommunityContent.GetStreamingStatusForMember({
  "membershipId": 0,
  "membershipType": 0,
  "partnershipType": 0
}, context)
```

#### Parameters
* membershipId (integer) **required** - The membershipId related to that type.
* membershipType (integer) **required** - The type of account for which info will be extracted.
* partnershipType (integer) **required** - The type of partnership for which info will be extracted.

### Destiny2.ActivateTalentNode
Activate a Talent Node. Chill out, everyone: we haven't decided yet whether this will be able to activate nodes with costs, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. PREVIEW: This service is not actually implemented yet, but we are returning the planned schema of the endpoint for review, comment, and preparation for its eventual implementation.


```js
bungie.Destiny2.ActivateTalentNode(null, context)
```

#### Parameters
*This action has no parameters*

### Destiny2.EquipItem
Equip an item. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.


```js
bungie.Destiny2.EquipItem(null, context)
```

#### Parameters
*This action has no parameters*

### Destiny2.EquipItems
Equip a list of items by itemInstanceIds. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Any items not found on your character will be ignored.


```js
bungie.Destiny2.EquipItems(null, context)
```

#### Parameters
*This action has no parameters*

### Destiny2.InsertSocketPlug
Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. PREVIEW: This service is not yet active, but we are returning the planned schema of the endpoint for review, comment, and preparation for its eventual implementation.


```js
bungie.Destiny2.InsertSocketPlug(null, context)
```

#### Parameters
*This action has no parameters*

### Destiny2.SetItemLockState
Set the Lock State for an instanced item. You must have a valid Destiny Account.


```js
bungie.Destiny2.SetItemLockState(null, context)
```

#### Parameters
*This action has no parameters*

### Destiny2.TransferItem
Transfer an item to/from your vault. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item. itshappening.gif


```js
bungie.Destiny2.TransferItem(null, context)
```

#### Parameters
*This action has no parameters*

### Destiny2.SearchDestinyEntities
Gets a page list of Destiny items.


```js
bungie.Destiny2.SearchDestinyEntities({
  "searchTerm": "",
  "type": ""
}, context)
```

#### Parameters
* page (integer) - Page number to return, starting with 0.
* searchTerm (string) **required** - The string to use when searching for Destiny entities.
* type (string) **required** - The type of entity for whom you would like results. These correspond to the entity's definition contract name. For instance, if you are looking for items, this property should be 'DestinyInventoryItemDefinition'. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is tentatively in final form, but there may be bugs that prevent desirable operation.

### Destiny2.GetClanWeeklyRewardState
Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.


```js
bungie.Destiny2.GetClanWeeklyRewardState({
  "groupId": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - A valid group id of clan.

### Destiny2.GetDestinyManifest
Returns the current version of the manifest as a json object.


```js
bungie.Destiny2.GetDestinyManifest(null, context)
```

#### Parameters
*This action has no parameters*

### Destiny2.GetDestinyEntityDefinition
Returns the static definition of an entity of the given Type and hash identifier. Examine the API Documentation for the Type Names of entities that have their own definitions. Note that the return type will always *inherit from* DestinyDefinition, but the specific type returned will be the requested entity type if it can be found. Please don't use this as a chatty alternative to the Manifest database if you require large sets of data, but for simple and one-off accesses this should be handy.


```js
bungie.Destiny2.GetDestinyEntityDefinition({
  "entityType": "",
  "hashIdentifier": 0
}, context)
```

#### Parameters
* entityType (string) **required** - The type of entity for whom you would like results. These correspond to the entity's definition contract name. For instance, if you are looking for items, this property should be 'DestinyInventoryItemDefinition'. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is tentatively in final form, but there may be bugs that prevent desirable operation.
* hashIdentifier (integer) **required** - The hash identifier for the specific Entity you want returned.

### Destiny2.GetPublicMilestones
Gets public information about currently available Milestones.


```js
bungie.Destiny2.GetPublicMilestones(null, context)
```

#### Parameters
*This action has no parameters*

### Destiny2.GetPublicMilestoneContent
Gets custom localized content for the milestone of the given hash, if it exists.


```js
bungie.Destiny2.GetPublicMilestoneContent({
  "milestoneHash": 0
}, context)
```

#### Parameters
* milestoneHash (integer) **required** - The identifier for the milestone to be returned.

### Destiny2.SearchDestinyPlayer
Returns a list of Destiny memberships given a full Gamertag or PSN ID.


```js
bungie.Destiny2.SearchDestinyPlayer({
  "displayName": "",
  "membershipType": 0
}, context)
```

#### Parameters
* displayName (string) **required** - The full gamertag or PSN id of the player. Spaces and case are ignored.
* membershipType (integer) **required** - A valid non-BungieNet membership type, or All.

### Destiny2.GetClanAggregateStats
Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.


```js
bungie.Destiny2.GetClanAggregateStats({
  "groupId": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - Group ID of the clan whose leaderboards you wish to fetch.
* modes (string) - List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.

### Destiny2.GetHistoricalStatsDefinition
Gets historical stats definitions.


```js
bungie.Destiny2.GetHistoricalStatsDefinition(null, context)
```

#### Parameters
*This action has no parameters*

### Destiny2.GetClanLeaderboards
Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.


```js
bungie.Destiny2.GetClanLeaderboards({
  "groupId": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - Group ID of the clan whose leaderboards you wish to fetch.
* maxtop (integer) - Maximum number of top players to return. Use a large number to get entire leaderboard.
* modes (string) - List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
* statid (string) - ID of stat to return rather than returning all Leaderboard stats.

### Destiny2.GetLeaderboardsForCharacter
Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.


```js
bungie.Destiny2.GetLeaderboardsForCharacter({
  "characterId": 0,
  "destinyMembershipId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* characterId (integer) **required** - The specific character to build the leaderboard around for the provided Destiny Membership.
* destinyMembershipId (integer) **required** - The Destiny membershipId of the user to retrieve.
* maxtop (integer) - Maximum number of top players to return. Use a large number to get entire leaderboard.
* membershipType (integer) **required** - A valid non-BungieNet membership type.
* modes (string) - List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
* statid (string) - ID of stat to return rather than returning all Leaderboard stats.

### Destiny2.GetPostGameCarnageReport
Gets the available post game carnage report for the activity ID.


```js
bungie.Destiny2.GetPostGameCarnageReport({
  "activityId": 0
}, context)
```

#### Parameters
* activityId (integer) **required** - The ID of the activity whose PGCR is requested.

### Destiny2.GetHistoricalStats
Gets historical stats for indicated character. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.


```js
bungie.Destiny2.GetHistoricalStats({
  "characterId": 0,
  "destinyMembershipId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* characterId (integer) **required** - The id of the character to retrieve. You can omit this character ID or set it to 0 to get aggregate stats across all characters.
* dayend (string) - Last day to return when daily stats are requested. Use the format YYYY-MM-DD.
* daystart (string) - First day to return when daily stats are requested. Use the format YYYY-MM-DD
* destinyMembershipId (integer) **required** - The Destiny membershipId of the user to retrieve.
* groups (array) - Group of stats to include, otherwise only general stats are returned. Comma separated list is allowed. Values: General, Weapons, Medals
* membershipType (integer) **required** - A valid non-BungieNet membership type.
* modes (array) - Game modes to return. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
* periodType (integer) - Indicates a specific period type to return. Optional. May be: Daily, AllTime, or Activity

### Destiny2.GetActivityHistory
Gets activity history stats for indicated character. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.


```js
bungie.Destiny2.GetActivityHistory({
  "characterId": 0,
  "destinyMembershipId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* characterId (integer) **required** - The id of the character to retrieve.
* count (integer) - Number of rows to return
* destinyMembershipId (integer) **required** - The Destiny membershipId of the user to retrieve.
* membershipType (integer) **required** - A valid non-BungieNet membership type.
* mode (integer) - A filter for the activity mode to be returned. None returns all activities. See the documentation for DestinyActivityModeType for valid values, and pass in string representation.
* page (integer) - Page number to return, starting with 0.

### Destiny2.GetDestinyAggregateActivityStats
Gets all activities the character has participated in together with aggregate statistics for those activities. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.


```js
bungie.Destiny2.GetDestinyAggregateActivityStats({
  "characterId": 0,
  "destinyMembershipId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* characterId (integer) **required** - The specific character whose activities should be returned.
* destinyMembershipId (integer) **required** - The Destiny membershipId of the user to retrieve.
* membershipType (integer) **required** - A valid non-BungieNet membership type.

### Destiny2.GetUniqueWeaponHistory
Gets details about unique weapon usage, including all exotic weapons. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.


```js
bungie.Destiny2.GetUniqueWeaponHistory({
  "characterId": 0,
  "destinyMembershipId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* characterId (integer) **required** - The id of the character to retrieve.
* destinyMembershipId (integer) **required** - The Destiny membershipId of the user to retrieve.
* membershipType (integer) **required** - A valid non-BungieNet membership type.

### Destiny2.GetHistoricalStatsForAccount
Gets aggregate historical stats organized around each character for a given account. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.


```js
bungie.Destiny2.GetHistoricalStatsForAccount({
  "destinyMembershipId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* destinyMembershipId (integer) **required** - The Destiny membershipId of the user to retrieve.
* groups (array) - Groups of stats to include, otherwise only general stats are returned. Comma separated list is allowed. Values: General, Weapons, Medals.
* membershipType (integer) **required** - A valid non-BungieNet membership type.

### Destiny2.GetLeaderboards
Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.


```js
bungie.Destiny2.GetLeaderboards({
  "destinyMembershipId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* destinyMembershipId (integer) **required** - The Destiny membershipId of the user to retrieve.
* maxtop (integer) - Maximum number of top players to return. Use a large number to get entire leaderboard.
* membershipType (integer) **required** - A valid non-BungieNet membership type.
* modes (string) - List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
* statid (string) - ID of stat to return rather than returning all Leaderboard stats.

### Destiny2.GetProfile
Returns Destiny Profile information for the supplied membership.


```js
bungie.Destiny2.GetProfile({
  "destinyMembershipId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* components (array) - A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
* destinyMembershipId (integer) **required** - Destiny membership ID.
* membershipType (integer) **required** - A valid non-BungieNet membership type.

### Destiny2.GetCharacter
Returns character information for the supplied character.


```js
bungie.Destiny2.GetCharacter({
  "characterId": 0,
  "destinyMembershipId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* characterId (integer) **required** - ID of the character.
* components (array) - A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
* destinyMembershipId (integer) **required** - Destiny membership ID.
* membershipType (integer) **required** - A valid non-BungieNet membership type.

### Destiny2.GetVendors
Get currently available vendors. PREVIEW: This service is not yet active, but we are returning the planned schema of the endpoint for review, comment, and preparation for its eventual implementation.


```js
bungie.Destiny2.GetVendors({
  "characterId": 0,
  "destinyMembershipId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* characterId (integer) **required** - The Destiny Character ID of the character for whom we're getting vendor info.
* components (array) - A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
* destinyMembershipId (integer) **required** - Destiny membership ID of another user. You may be denied.
* membershipType (integer) **required** - A valid non-BungieNet membership type.

### Destiny2.GetVendor
Get the details of a specific Vendor. PREVIEW: This service is not yet active, but we are returning the planned schema of the endpoint for review, comment, and preparation for its eventual implementation.


```js
bungie.Destiny2.GetVendor({
  "characterId": 0,
  "destinyMembershipId": 0,
  "membershipType": 0,
  "vendorHash": 0
}, context)
```

#### Parameters
* characterId (integer) **required** - The Destiny Character ID of the character for whom we're getting vendor info.
* components (array) - A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
* destinyMembershipId (integer) **required** - Destiny membership ID of another user. You may be denied.
* membershipType (integer) **required** - A valid non-BungieNet membership type.
* vendorHash (integer) **required** - The Hash identifier of the Vendor to be returned.

### Destiny2.GetItem
Retrieve the details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId. Non-instanced items, such as materials, have no useful instance-specific details and thus are not queryable here.


```js
bungie.Destiny2.GetItem({
  "destinyMembershipId": 0,
  "itemInstanceId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* components (array) - A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
* destinyMembershipId (integer) **required** - The membership ID of the destiny profile.
* itemInstanceId (integer) **required** - The Instance ID of the destiny item.
* membershipType (integer) **required** - A valid non-BungieNet membership type.

### Forum.GetCoreTopicsPaged
Gets a listing of all topics marked as part of the core group.


```js
bungie.Forum.GetCoreTopicsPaged({
  "categoryFilter": 0,
  "page": 0,
  "quickDate": 0,
  "sort": 0
}, context)
```

#### Parameters
* categoryFilter (integer) **required** - The category filter.
* locales (string) - Comma seperated list of locales posts must match to return in the result list. Default 'en'
* page (integer) **required** - Zero base page
* quickDate (integer) **required** - The date filter.
* sort (integer) **required** - The sort mode.

### Forum.GetForumTagSuggestions
Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.


```js
bungie.Forum.GetForumTagSuggestions({}, context)
```

#### Parameters
* partialtag (string) - The partial tag input to generate suggestions from.

### Forum.GetPostAndParent
Returns the post specified and its immediate parent.


```js
bungie.Forum.GetPostAndParent({
  "childPostId": 0
}, context)
```

#### Parameters
* childPostId (integer) **required**
* showbanned (string) - If this value is not null or empty, banned posts are requested to be returned

### Forum.GetPostAndParentAwaitingApproval
Returns the post specified and its immediate parent of posts that are awaiting approval.


```js
bungie.Forum.GetPostAndParentAwaitingApproval({
  "childPostId": 0
}, context)
```

#### Parameters
* childPostId (integer) **required**
* showbanned (string) - If this value is not null or empty, banned posts are requested to be returned

### Forum.GetPostsThreadedPaged
Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.


```js
bungie.Forum.GetPostsThreadedPaged({
  "getParentPost": true,
  "page": 0,
  "pageSize": 0,
  "parentPostId": 0,
  "replySize": 0,
  "rootThreadMode": true,
  "sortMode": 0
}, context)
```

#### Parameters
* getParentPost (boolean) **required**
* page (integer) **required**
* pageSize (integer) **required**
* parentPostId (integer) **required**
* replySize (integer) **required**
* rootThreadMode (boolean) **required**
* showbanned (string) - If this value is not null or empty, banned posts are requested to be returned
* sortMode (integer) **required**

### Forum.GetPostsThreadedPagedFromChild
Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.


```js
bungie.Forum.GetPostsThreadedPagedFromChild({
  "childPostId": 0,
  "page": 0,
  "pageSize": 0,
  "replySize": 0,
  "rootThreadMode": true,
  "sortMode": 0
}, context)
```

#### Parameters
* childPostId (integer) **required**
* page (integer) **required**
* pageSize (integer) **required**
* replySize (integer) **required**
* rootThreadMode (boolean) **required**
* showbanned (string) - If this value is not null or empty, banned posts are requested to be returned
* sortMode (integer) **required**

### Forum.GetTopicForContent
Gets the post Id for the given content item's comments, if it exists.


```js
bungie.Forum.GetTopicForContent({
  "contentId": 0
}, context)
```

#### Parameters
* contentId (integer) **required**

### Forum.GetTopicsPaged
Get topics from any forum.


```js
bungie.Forum.GetTopicsPaged({
  "categoryFilter": 0,
  "group": 0,
  "page": 0,
  "pageSize": 0,
  "quickDate": 0,
  "sort": 0
}, context)
```

#### Parameters
* categoryFilter (integer) **required** - A category filter
* group (integer) **required** - The group, if any.
* locales (string) - Comma seperated list of locales posts must match to return in the result list. Default 'en'
* page (integer) **required** - Zero paged page number
* pageSize (integer) **required** - Unused
* quickDate (integer) **required** - A date filter.
* sort (integer) **required** - The sort mode.
* tagstring (string) - The tags to search, if any.

### Forum.GetPoll
Gets the specified forum poll.


```js
bungie.Forum.GetPoll({
  "topicId": 0
}, context)
```

#### Parameters
* topicId (integer) **required** - The post id of the topic that has the poll.

### Forum.ApproveFireteamThread
Allows the owner of a fireteam thread to approve all joined members and start a private message conversation with them.


```js
bungie.Forum.ApproveFireteamThread({
  "topicId": 0
}, context)
```

#### Parameters
* topicId (integer) **required** - The post id of the recruitment topic to approve.

### Forum.JoinFireteamThread
Allows a user to slot themselves into a recruitment thread fireteam slot. Returns the new state of the fireteam.


```js
bungie.Forum.JoinFireteamThread({
  "topicId": 0
}, context)
```

#### Parameters
* topicId (integer) **required** - The post id of the recruitment topic you wish to join.

### Forum.KickBanFireteamApplicant
Allows a recruitment thread owner to kick a join user from the fireteam. Returns the new state of the fireteam.


```js
bungie.Forum.KickBanFireteamApplicant({
  "targetMembershipId": 0,
  "topicId": 0
}, context)
```

#### Parameters
* targetMembershipId (integer) **required** - The id of the user you wish to kick.
* topicId (integer) **required** - The post id of the recruitment topic you wish to join.

### Forum.LeaveFireteamThread
Allows a user to remove themselves from a recruitment thread fireteam slot. Returns the new state of the fireteam.


```js
bungie.Forum.LeaveFireteamThread({
  "topicId": 0
}, context)
```

#### Parameters
* topicId (integer) **required** - The post id of the recruitment topic you wish to leave.

### Forum.GetRecruitmentThreadSummaries
Allows the caller to get a list of to 25 recruitment thread summary information objects.


```js
bungie.Forum.GetRecruitmentThreadSummaries(null, context)
```

#### Parameters
*This action has no parameters*

### GroupV2.CreateGroup
Create a new group.


```js
bungie.GroupV2.CreateGroup(null, context)
```

#### Parameters
*This action has no parameters*

### GroupV2.GetAvailableAvatars
Returns a list of all available group avatars for the signed-in user.


```js
bungie.GroupV2.GetAvailableAvatars(null, context)
```

#### Parameters
*This action has no parameters*

### GroupV2.GetAvailableThemes
Returns a list of all available group themes.


```js
bungie.GroupV2.GetAvailableThemes(null, context)
```

#### Parameters
*This action has no parameters*

### GroupV2.GetUserClanInviteSetting
Gets the state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.


```js
bungie.GroupV2.GetUserClanInviteSetting({
  "mType": 0
}, context)
```

#### Parameters
* mType (integer) **required** - The Destiny membership type of the account we wish to access settings.

### GroupV2.GetGroupByName
Get information about a specific group with the given name and type.


```js
bungie.GroupV2.GetGroupByName({
  "groupName": "",
  "groupType": 0
}, context)
```

#### Parameters
* groupName (string) **required** - Exact name of the group to find.
* groupType (integer) **required** - Type of group to find.

### GroupV2.GetRecommendedGroups
Gets groups recommended for you based on the groups to whom those you follow belong.


```js
bungie.GroupV2.GetRecommendedGroups(null, context)
```

#### Parameters
*This action has no parameters*

### GroupV2.GroupSearch
Search for Groups.


```js
bungie.GroupV2.GroupSearch(null, context)
```

#### Parameters
*This action has no parameters*

### GroupV2.SetUserClanInviteSetting
Sets the state of the user's clan invite preferences - true if they wish to be invited to clans, false otherwise.


```js
bungie.GroupV2.SetUserClanInviteSetting({
  "allowInvites": true,
  "mType": 0
}, context)
```

#### Parameters
* allowInvites (boolean) **required** - True to allow invites of this user to clans, false otherwise.
* mType (integer) **required** - The Destiny membership type of linked account we are manipulating.

### GroupV2.GetPotentialGroupsForMember
Get information about the groups that a given member has applied to or been invited to.


```js
bungie.GroupV2.GetPotentialGroupsForMember({
  "filter": 0,
  "groupType": 0,
  "membershipId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* filter (integer) **required** - Filter apply to list of potential joined groups.
* groupType (integer) **required** - Type of group the supplied member applied.
* membershipId (integer) **required** - Membership ID to for which to find applied groups.
* membershipType (integer) **required** - Membership type of the supplied membership ID.

### GroupV2.GetGroupsForMember
Get information about the groups that a given member has joined.


```js
bungie.GroupV2.GetGroupsForMember({
  "filter": 0,
  "groupType": 0,
  "membershipId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* filter (integer) **required** - Filter apply to list of joined groups.
* groupType (integer) **required** - Type of group the supplied member founded.
* membershipId (integer) **required** - Membership ID to for which to find founded groups.
* membershipType (integer) **required** - Membership type of the supplied membership ID.

### GroupV2.GetGroup
Get information about a specific group of the given ID.


```js
bungie.GroupV2.GetGroup({
  "groupId": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - Requested group's id.

### GroupV2.AbdicateFoundership
An administrative method to allow the founder of a group or clan to give up their position to another admin permanently.


```js
bungie.GroupV2.AbdicateFoundership({
  "founderIdNew": 0,
  "groupId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* founderIdNew (integer) **required** - The new founder for this group. Must already be a group admin.
* groupId (integer) **required** - The target group id.
* membershipType (integer) **required** - Membership type of the provided founderIdNew.

### GroupV2.GetAdminsAndFounderOfGroup
Get the list of members in a given group who are of admin level or higher.


```js
bungie.GroupV2.GetAdminsAndFounderOfGroup({
  "groupId": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - The ID of the group.

### GroupV2.GetBannedMembersOfGroup
Get the list of banned members in a given group. Only accessible to group Admins and above. Not applicable to all groups. Check group features.


```js
bungie.GroupV2.GetBannedMembersOfGroup({
  "groupId": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - Group ID whose banned members you are fetching

### GroupV2.EditGroup
Edit an existing group. You must have suitable permissions in the group to perform this operation. This latest revision will only edit the fields you pass in - pass null for properties you want to leave unaltered.


```js
bungie.GroupV2.EditGroup({
  "groupId": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - Group ID of the group to edit.

### GroupV2.EditClanBanner
Edit an existing group's clan banner. You must have suitable permissions in the group to perform this operation. All fields are required.


```js
bungie.GroupV2.EditClanBanner({
  "groupId": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - Group ID of the group to edit.

### GroupV2.EditFounderOptions
Edit group options only available to a founder. You must have suitable permissions in the group to perform this operation.


```js
bungie.GroupV2.EditFounderOptions({
  "groupId": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - Group ID of the group to edit.

### GroupV2.GetMembersOfGroup
Get the list of members in a given group.


```js
bungie.GroupV2.GetMembersOfGroup({
  "groupId": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - The ID of the group.
* memberType (integer) - Filter out other member types. Use None for all members.
* nameSearch (string) - The name fragment upon which a search should be executed for members with matching display or unique names.

### GroupV2.RequestGroupMembership
Request permission to join the given group.


```js
bungie.GroupV2.RequestGroupMembership({
  "groupId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - ID of the group you would like to join.
* membershipType (integer) **required** - MembershipType of the account to use when joining.

### GroupV2.ApproveAllPending
Approve all of the pending users for the given group.


```js
bungie.GroupV2.ApproveAllPending({
  "groupId": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - ID of the group.

### GroupV2.ApprovePendingForList
Approve all of the pending users for the given group.


```js
bungie.GroupV2.ApprovePendingForList({
  "groupId": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - ID of the group.

### GroupV2.DenyAllPending
Deny all of the pending users for the given group.


```js
bungie.GroupV2.DenyAllPending({
  "groupId": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - ID of the group.

### GroupV2.DenyPendingForList
Deny all of the pending users for the given group that match the passed-in .


```js
bungie.GroupV2.DenyPendingForList({
  "groupId": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - ID of the group.

### GroupV2.IndividualGroupInvite
Invite a user to join this group.


```js
bungie.GroupV2.IndividualGroupInvite({
  "groupId": 0,
  "membershipId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - ID of the group you would like to join.
* membershipId (integer) **required** - Membership id of the account being invited.
* membershipType (integer) **required** - MembershipType of the account being invited.

### GroupV2.IndividualGroupInviteCancel
Cancels a pending invitation to join a group.


```js
bungie.GroupV2.IndividualGroupInviteCancel({
  "groupId": 0,
  "membershipId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - ID of the group you would like to join.
* membershipId (integer) **required** - Membership id of the account being cancelled.
* membershipType (integer) **required** - MembershipType of the account being cancelled.

### GroupV2.GetInvitedIndividuals
Get the list of users who have been invited into the group.


```js
bungie.GroupV2.GetInvitedIndividuals({
  "groupId": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - ID of the group.

### GroupV2.GetPendingMemberships
Get the list of users who are awaiting a decision on their application to join a given group. Modified to include application info.


```js
bungie.GroupV2.GetPendingMemberships({
  "groupId": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - ID of the group.

### GroupV2.RescindGroupMembership
Rescind your application to join the given group or leave the group if you are already a member..


```js
bungie.GroupV2.RescindGroupMembership({
  "groupId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - ID of the group.
* membershipType (integer) **required** - MembershipType of the account to leave.

### GroupV2.BanMember
Bans the requested member from the requested group for the specified period of time.


```js
bungie.GroupV2.BanMember({
  "groupId": 0,
  "membershipId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - Group ID that has the member to ban.
* membershipId (integer) **required** - Membership ID of the member to ban from the group.
* membershipType (integer) **required** - Membership type of the provided membership ID.

### GroupV2.KickMember
Kick a member from the given group, forcing them to reapply if they wish to re-join the group. You must have suitable permissions in the group to perform this operation.


```js
bungie.GroupV2.KickMember({
  "groupId": 0,
  "membershipId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - Group ID to kick the user from.
* membershipId (integer) **required** - Membership ID to kick.
* membershipType (integer) **required** - Membership type of the provided membership ID.

### GroupV2.EditGroupMembership
Edit the membership type of a given member. You must have suitable permissions in the group to perform this operation.


```js
bungie.GroupV2.EditGroupMembership({
  "groupId": 0,
  "membershipId": 0,
  "membershipType": 0,
  "memberType": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - ID of the group to which the member belongs.
* membershipId (integer) **required** - Membership ID to modify.
* membershipType (integer) **required** - Membership type of the provide membership ID.
* memberType (integer) **required** - New membertype for the specified member.

### GroupV2.UnbanMember
Unbans the requested member, allowing them to re-apply for membership.


```js
bungie.GroupV2.UnbanMember({
  "groupId": 0,
  "membershipId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* groupId (integer) **required**
* membershipId (integer) **required** - Membership ID of the member to unban from the group
* membershipType (integer) **required** - Membership type of the provided membership ID.

### GroupV2.GetGroupOptionalConversations
Gets a list of available optional conversation channels and their settings.


```js
bungie.GroupV2.GetGroupOptionalConversations({
  "groupId": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - Requested group's id.

### GroupV2.AddOptionalConversation
Add a new optional conversation/chat channel. Requires admin permissions to the group.


```js
bungie.GroupV2.AddOptionalConversation({
  "groupId": 0
}, context)
```

#### Parameters
* groupId (integer) **required** - Group ID of the group to edit.

### GroupV2.EditOptionalConversation
Edit the settings of an optional conversation/chat channel. Requires admin permissions to the group.


```js
bungie.GroupV2.EditOptionalConversation({
  "conversationId": 0,
  "groupId": 0
}, context)
```

#### Parameters
* conversationId (integer) **required** - Conversation Id of the channel being edited.
* groupId (integer) **required** - Group ID of the group to edit.

### Trending.GetTrendingCategories
Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.


```js
bungie.Trending.GetTrendingCategories(null, context)
```

#### Parameters
*This action has no parameters*

### Trending.GetTrendingCategory
Returns paginated lists of trending items for a category.


```js
bungie.Trending.GetTrendingCategory({
  "categoryId": "",
  "pageNumber": 0
}, context)
```

#### Parameters
* categoryId (string) **required** - The ID of the category for whom you want additional results.
* pageNumber (integer) **required** - The page # of results to return.

### Trending.GetTrendingEntryDetail
Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.


```js
bungie.Trending.GetTrendingEntryDetail({
  "identifier": "",
  "trendingEntryType": 0
}, context)
```

#### Parameters
* identifier (string) **required** - The identifier for the entity to be returned.
* trendingEntryType (integer) **required** - The type of entity to be returned.

### User.GetAvailableThemes
Returns a list of all available user themes.


```js
bungie.User.GetAvailableThemes(null, context)
```

#### Parameters
*This action has no parameters*

### User.GetBungieNetUserById
Loads a bungienet user by membership id.


```js
bungie.User.GetBungieNetUserById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The requested Bungie.net membership id.

### User.GetMembershipDataById
Returns a list of accounts associated with the supplied membership ID and membership type. This will include all linked accounts (even when hidden) if supplied credentials permit it.


```js
bungie.User.GetMembershipDataById({
  "membershipId": 0,
  "membershipType": 0
}, context)
```

#### Parameters
* membershipId (integer) **required** - The membership ID of the target user.
* membershipType (integer) **required** - Type of the supplied membership ID.

### User.GetMembershipDataForCurrentUser
Returns a list of accounts associated with signed in user. This is useful for OAuth implementations that do not give you access to the token response.


```js
bungie.User.GetMembershipDataForCurrentUser(null, context)
```

#### Parameters
*This action has no parameters*

### User.GetUserAliases
Loads aliases of a bungienet membership id.


```js
bungie.User.GetUserAliases({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The requested Bungie.net membership id.

### User.SearchUsers
Returns a list of possible users based on the search string


```js
bungie.User.SearchUsers({}, context)
```

#### Parameters
* q (string) - The search string.

### User.GetPartnerships
Returns a user's linked Partnerships.


```js
bungie.User.GetPartnerships({
  "membershipId": 0
}, context)
```

#### Parameters
* membershipId (integer) **required** - The ID of the member for whom partnerships should be returned.

