# @datafire/bungie

Client library for Bungie.Net

## Installation and Usage
```bash
npm install --save @datafire/bungie
```
```js
let bungie = require('@datafire/bungie').create({
  apiKey: "",
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

These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
bungie.oauthCallback({
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
bungie.oauthRefresh(null, context)
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

### CommunityContent.GetCommunityContent
Returns community content.


```js
bungie.CommunityContent.GetCommunityContent({
  "mediaFilter": 0,
  "page": 0,
  "sort": 0
}, context)
```

#### Input
* input `object`
  * mediaFilter **required** `integer` (values: 0, 1, 2, 4, 8, 16, 32, 64, 128): The type of media to get
  * page **required** `integer`: Zero based page
  * sort **required** `integer` (values: 0, 1, 2): The sort mode.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Forum.PostSearchResponse](#forum.postsearchresponse)
  * ThrottleSeconds `integer`

### CommunityContent.GetCommunityLiveStatuses
Returns info about community members who are live streaming.


```js
bungie.CommunityContent.GetCommunityLiveStatuses({
  "page": 0,
  "partnershipType": 0,
  "sort": 0
}, context)
```

#### Input
* input `object`
  * modeHash `integer`: The hash of the Activity Mode for which streams should be retrieved. Don't pass it in or pass 0 to not filter by mode.
  * page **required** `integer`: Zero based page.
  * partnershipType **required** `integer` (values: 0, 1): The type of partnership for which the status should be returned.
  * sort **required** `integer` (values: 0, 1, 2, 3): The sort mode.
  * streamLocale `string`: The locale for streams you'd like to see. Don't pass this to fall back on your BNet locale. Pass 'ALL' to not filter by locale.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [SearchResultOfCommunityLiveStatus](#searchresultofcommunitylivestatus)
  * ThrottleSeconds `integer`

### CommunityContent.GetCommunityLiveStatusesForClanmates
Returns info about community members who are live streaming in your clans.


```js
bungie.CommunityContent.GetCommunityLiveStatusesForClanmates({
  "page": 0,
  "partnershipType": 0,
  "sort": 0
}, context)
```

#### Input
* input `object`
  * page **required** `integer`: Zero based page.
  * partnershipType **required** `integer` (values: 0, 1): The type of partnership for which the status should be returned.
  * sort **required** `integer` (values: 0, 1, 2, 3): The sort mode.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [SearchResultOfCommunityLiveStatus](#searchresultofcommunitylivestatus)
  * ThrottleSeconds `integer`

### CommunityContent.GetFeaturedCommunityLiveStatuses
Returns info about Featured live streams.


```js
bungie.CommunityContent.GetFeaturedCommunityLiveStatuses({
  "page": 0,
  "partnershipType": 0,
  "sort": 0
}, context)
```

#### Input
* input `object`
  * page **required** `integer`: Zero based page.
  * partnershipType **required** `integer` (values: 0, 1): The type of partnership for which the status should be returned.
  * sort **required** `integer` (values: 0, 1, 2, 3): The sort mode.
  * streamLocale `string`: The locale for streams you'd like to see. Don't pass this to fall back on your BNet locale. Pass 'ALL' to not filter by locale.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [SearchResultOfCommunityLiveStatus](#searchresultofcommunitylivestatus)
  * ThrottleSeconds `integer`

### CommunityContent.GetCommunityLiveStatusesForFriends
Returns info about community members who are live streaming among your friends.


```js
bungie.CommunityContent.GetCommunityLiveStatusesForFriends({
  "page": 0,
  "partnershipType": 0,
  "sort": 0
}, context)
```

#### Input
* input `object`
  * page **required** `integer`: Zero based page.
  * partnershipType **required** `integer` (values: 0, 1): The type of partnership for which the status should be returned.
  * sort **required** `integer` (values: 0, 1, 2, 3): The sort mode.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [SearchResultOfCommunityLiveStatus](#searchresultofcommunitylivestatus)
  * ThrottleSeconds `integer`

### CommunityContent.GetStreamingStatusForMember
Gets the Live Streaming status of a particular Account and Membership Type.


```js
bungie.CommunityContent.GetStreamingStatusForMember({
  "membershipId": 0,
  "membershipType": 0,
  "partnershipType": 0
}, context)
```

#### Input
* input `object`
  * membershipId **required** `integer`: The membershipId related to that type.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): The type of account for which info will be extracted.
  * partnershipType **required** `integer` (values: 0, 1): The type of partnership for which info will be extracted.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Community.CommunityLiveStatus](#community.communitylivestatus)
  * ThrottleSeconds `integer`

### Destiny2.ActivateTalentNode
Activate a Talent Node. Chill out, everyone: we haven't decided yet whether this will be able to activate nodes with costs, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. PREVIEW: This service is not actually implemented yet, but we are returning the planned schema of the endpoint for review, comment, and preparation for its eventual implementation.


```js
bungie.Destiny2.ActivateTalentNode(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `integer`
  * ThrottleSeconds `integer`

### Destiny2.EquipItem
Equip an item. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.


```js
bungie.Destiny2.EquipItem(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `integer`
  * ThrottleSeconds `integer`

### Destiny2.EquipItems
Equip a list of items by itemInstanceIds. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Any items not found on your character will be ignored.


```js
bungie.Destiny2.EquipItems(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Destiny.DestinyEquipItemResults](#destiny.destinyequipitemresults)
  * ThrottleSeconds `integer`

### Destiny2.InsertSocketPlug
Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. PREVIEW: This service is not yet active, but we are returning the planned schema of the endpoint for review, comment, and preparation for its eventual implementation.


```js
bungie.Destiny2.InsertSocketPlug(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `integer`
  * ThrottleSeconds `integer`

### Destiny2.SetItemLockState
Set the Lock State for an instanced item. You must have a valid Destiny Account.


```js
bungie.Destiny2.SetItemLockState(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `integer`
  * ThrottleSeconds `integer`

### Destiny2.TransferItem
Transfer an item to/from your vault. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item. itshappening.gif


```js
bungie.Destiny2.TransferItem(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `integer`
  * ThrottleSeconds `integer`

### Destiny2.SearchDestinyEntities
Gets a page list of Destiny items.


```js
bungie.Destiny2.SearchDestinyEntities({
  "searchTerm": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: Page number to return, starting with 0.
  * searchTerm **required** `string`: The string to use when searching for Destiny entities.
  * type **required** `string`: The type of entity for whom you would like results. These correspond to the entity's definition contract name. For instance, if you are looking for items, this property should be 'DestinyInventoryItemDefinition'. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is tentatively in final form, but there may be bugs that prevent desirable operation.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Destiny.Definitions.DestinyEntitySearchResult](#destiny.definitions.destinyentitysearchresult)
  * ThrottleSeconds `integer`

### Destiny2.GetClanWeeklyRewardState
Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.


```js
bungie.Destiny2.GetClanWeeklyRewardState({
  "groupId": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: A valid group id of clan.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Destiny.Milestones.DestinyMilestone](#destiny.milestones.destinymilestone)
  * ThrottleSeconds `integer`

### Destiny2.GetDestinyManifest
Returns the current version of the manifest as a json object.


```js
bungie.Destiny2.GetDestinyManifest(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Destiny.Config.DestinyManifest](#destiny.config.destinymanifest)
  * ThrottleSeconds `integer`

### Destiny2.GetDestinyEntityDefinition
Returns the static definition of an entity of the given Type and hash identifier. Examine the API Documentation for the Type Names of entities that have their own definitions. Note that the return type will always *inherit from* DestinyDefinition, but the specific type returned will be the requested entity type if it can be found. Please don't use this as a chatty alternative to the Manifest database if you require large sets of data, but for simple and one-off accesses this should be handy.


```js
bungie.Destiny2.GetDestinyEntityDefinition({
  "entityType": "",
  "hashIdentifier": 0
}, context)
```

#### Input
* input `object`
  * entityType **required** `string`: The type of entity for whom you would like results. These correspond to the entity's definition contract name. For instance, if you are looking for items, this property should be 'DestinyInventoryItemDefinition'. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is tentatively in final form, but there may be bugs that prevent desirable operation.
  * hashIdentifier **required** `integer`: The hash identifier for the specific Entity you want returned.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Destiny.Definitions.DestinyDefinition](#destiny.definitions.destinydefinition)
  * ThrottleSeconds `integer`

### Destiny2.GetPublicMilestones
Gets public information about currently available Milestones.


```js
bungie.Destiny2.GetPublicMilestones(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `object`
  * ThrottleSeconds `integer`

### Destiny2.GetPublicMilestoneContent
Gets custom localized content for the milestone of the given hash, if it exists.


```js
bungie.Destiny2.GetPublicMilestoneContent({
  "milestoneHash": 0
}, context)
```

#### Input
* input `object`
  * milestoneHash **required** `integer`: The identifier for the milestone to be returned.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Destiny.Milestones.DestinyMilestoneContent](#destiny.milestones.destinymilestonecontent)
  * ThrottleSeconds `integer`

### Destiny2.SearchDestinyPlayer
Returns a list of Destiny memberships given a full Gamertag or PSN ID.


```js
bungie.Destiny2.SearchDestinyPlayer({
  "displayName": "",
  "membershipType": 0
}, context)
```

#### Input
* input `object`
  * displayName **required** `string`: The full gamertag or PSN id of the player. Spaces and case are ignored.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): A valid non-BungieNet membership type, or All.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `array`
    * items [User.UserInfoCard](#user.userinfocard)
  * ThrottleSeconds `integer`

### Destiny2.GetClanAggregateStats
Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.


```js
bungie.Destiny2.GetClanAggregateStats({
  "groupId": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: Group ID of the clan whose leaderboards you wish to fetch.
  * modes `string`: List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `array`
    * items [Destiny.HistoricalStats.DestinyClanAggregateStat](#destiny.historicalstats.destinyclanaggregatestat)
  * ThrottleSeconds `integer`

### Destiny2.GetHistoricalStatsDefinition
Gets historical stats definitions.


```js
bungie.Destiny2.GetHistoricalStatsDefinition(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `object`
  * ThrottleSeconds `integer`

### Destiny2.GetClanLeaderboards
Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.


```js
bungie.Destiny2.GetClanLeaderboards({
  "groupId": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: Group ID of the clan whose leaderboards you wish to fetch.
  * maxtop `integer`: Maximum number of top players to return. Use a large number to get entire leaderboard.
  * modes `string`: List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
  * statid `string`: ID of stat to return rather than returning all Leaderboard stats.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `object`
  * ThrottleSeconds `integer`

### Destiny2.GetLeaderboardsForCharacter
Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.


```js
bungie.Destiny2.GetLeaderboardsForCharacter({
  "characterId": 0,
  "destinyMembershipId": 0,
  "membershipType": 0
}, context)
```

#### Input
* input `object`
  * characterId **required** `integer`: The specific character to build the leaderboard around for the provided Destiny Membership.
  * destinyMembershipId **required** `integer`: The Destiny membershipId of the user to retrieve.
  * maxtop `integer`: Maximum number of top players to return. Use a large number to get entire leaderboard.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): A valid non-BungieNet membership type.
  * modes `string`: List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
  * statid `string`: ID of stat to return rather than returning all Leaderboard stats.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `object`
  * ThrottleSeconds `integer`

### Destiny2.GetPostGameCarnageReport
Gets the available post game carnage report for the activity ID.


```js
bungie.Destiny2.GetPostGameCarnageReport({
  "activityId": 0
}, context)
```

#### Input
* input `object`
  * activityId **required** `integer`: The ID of the activity whose PGCR is requested.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Destiny.HistoricalStats.DestinyPostGameCarnageReportData](#destiny.historicalstats.destinypostgamecarnagereportdata)
  * ThrottleSeconds `integer`

### Destiny2.GetHistoricalStats
Gets historical stats for indicated character. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.


```js
bungie.Destiny2.GetHistoricalStats({
  "characterId": 0,
  "destinyMembershipId": 0,
  "membershipType": 0
}, context)
```

#### Input
* input `object`
  * characterId **required** `integer`: The id of the character to retrieve. You can omit this character ID or set it to 0 to get aggregate stats across all characters.
  * dayend `string`: Last day to return when daily stats are requested. Use the format YYYY-MM-DD.
  * daystart `string`: First day to return when daily stats are requested. Use the format YYYY-MM-DD
  * destinyMembershipId **required** `integer`: The Destiny membershipId of the user to retrieve.
  * groups `array`: Group of stats to include, otherwise only general stats are returned. Comma separated list is allowed. Values: General, Weapons, Medals
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): A valid non-BungieNet membership type.
  * modes `array`: Game modes to return. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
  * periodType `integer` (values: 0, 1, 2, 3): Indicates a specific period type to return. Optional. May be: Daily, AllTime, or Activity

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `object`
  * ThrottleSeconds `integer`

### Destiny2.GetActivityHistory
Gets activity history stats for indicated character. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.


```js
bungie.Destiny2.GetActivityHistory({
  "characterId": 0,
  "destinyMembershipId": 0,
  "membershipType": 0
}, context)
```

#### Input
* input `object`
  * characterId **required** `integer`: The id of the character to retrieve.
  * count `integer`: Number of rows to return
  * destinyMembershipId **required** `integer`: The Destiny membershipId of the user to retrieve.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): A valid non-BungieNet membership type.
  * mode `integer` (values: 0, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 37, 38, 39, 40): A filter for the activity mode to be returned. None returns all activities. See the documentation for DestinyActivityModeType for valid values, and pass in string representation.
  * page `integer`: Page number to return, starting with 0.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Destiny.HistoricalStats.DestinyActivityHistoryResults](#destiny.historicalstats.destinyactivityhistoryresults)
  * ThrottleSeconds `integer`

### Destiny2.GetDestinyAggregateActivityStats
Gets all activities the character has participated in together with aggregate statistics for those activities. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.


```js
bungie.Destiny2.GetDestinyAggregateActivityStats({
  "characterId": 0,
  "destinyMembershipId": 0,
  "membershipType": 0
}, context)
```

#### Input
* input `object`
  * characterId **required** `integer`: The specific character whose activities should be returned.
  * destinyMembershipId **required** `integer`: The Destiny membershipId of the user to retrieve.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): A valid non-BungieNet membership type.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Destiny.HistoricalStats.DestinyAggregateActivityResults](#destiny.historicalstats.destinyaggregateactivityresults)
  * ThrottleSeconds `integer`

### Destiny2.GetUniqueWeaponHistory
Gets details about unique weapon usage, including all exotic weapons. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.


```js
bungie.Destiny2.GetUniqueWeaponHistory({
  "characterId": 0,
  "destinyMembershipId": 0,
  "membershipType": 0
}, context)
```

#### Input
* input `object`
  * characterId **required** `integer`: The id of the character to retrieve.
  * destinyMembershipId **required** `integer`: The Destiny membershipId of the user to retrieve.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): A valid non-BungieNet membership type.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Destiny.HistoricalStats.DestinyHistoricalWeaponStatsData](#destiny.historicalstats.destinyhistoricalweaponstatsdata)
  * ThrottleSeconds `integer`

### Destiny2.GetHistoricalStatsForAccount
Gets aggregate historical stats organized around each character for a given account. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.


```js
bungie.Destiny2.GetHistoricalStatsForAccount({
  "destinyMembershipId": 0,
  "membershipType": 0
}, context)
```

#### Input
* input `object`
  * destinyMembershipId **required** `integer`: The Destiny membershipId of the user to retrieve.
  * groups `array`: Groups of stats to include, otherwise only general stats are returned. Comma separated list is allowed. Values: General, Weapons, Medals.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): A valid non-BungieNet membership type.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Destiny.HistoricalStats.DestinyHistoricalStatsAccountResult](#destiny.historicalstats.destinyhistoricalstatsaccountresult)
  * ThrottleSeconds `integer`

### Destiny2.GetLeaderboards
Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.


```js
bungie.Destiny2.GetLeaderboards({
  "destinyMembershipId": 0,
  "membershipType": 0
}, context)
```

#### Input
* input `object`
  * destinyMembershipId **required** `integer`: The Destiny membershipId of the user to retrieve.
  * maxtop `integer`: Maximum number of top players to return. Use a large number to get entire leaderboard.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): A valid non-BungieNet membership type.
  * modes `string`: List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
  * statid `string`: ID of stat to return rather than returning all Leaderboard stats.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `object`
  * ThrottleSeconds `integer`

### Destiny2.GetProfile
Returns Destiny Profile information for the supplied membership.


```js
bungie.Destiny2.GetProfile({
  "destinyMembershipId": 0,
  "membershipType": 0
}, context)
```

#### Input
* input `object`
  * components `array`: A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
  * destinyMembershipId **required** `integer`: Destiny membership ID.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): A valid non-BungieNet membership type.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Destiny.Responses.DestinyProfileResponse](#destiny.responses.destinyprofileresponse)
  * ThrottleSeconds `integer`

### Destiny2.GetCharacter
Returns character information for the supplied character.


```js
bungie.Destiny2.GetCharacter({
  "characterId": 0,
  "destinyMembershipId": 0,
  "membershipType": 0
}, context)
```

#### Input
* input `object`
  * characterId **required** `integer`: ID of the character.
  * components `array`: A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
  * destinyMembershipId **required** `integer`: Destiny membership ID.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): A valid non-BungieNet membership type.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Destiny.Responses.DestinyCharacterResponse](#destiny.responses.destinycharacterresponse)
  * ThrottleSeconds `integer`

### Destiny2.GetVendors
Get currently available vendors. PREVIEW: This service is not yet active, but we are returning the planned schema of the endpoint for review, comment, and preparation for its eventual implementation.


```js
bungie.Destiny2.GetVendors({
  "characterId": 0,
  "destinyMembershipId": 0,
  "membershipType": 0
}, context)
```

#### Input
* input `object`
  * characterId **required** `integer`: The Destiny Character ID of the character for whom we're getting vendor info.
  * components `array`: A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
  * destinyMembershipId **required** `integer`: Destiny membership ID of another user. You may be denied.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): A valid non-BungieNet membership type.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `array`
    * items [Destiny.Responses.DestinyVendorResponse](#destiny.responses.destinyvendorresponse)
  * ThrottleSeconds `integer`

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

#### Input
* input `object`
  * characterId **required** `integer`: The Destiny Character ID of the character for whom we're getting vendor info.
  * components `array`: A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
  * destinyMembershipId **required** `integer`: Destiny membership ID of another user. You may be denied.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): A valid non-BungieNet membership type.
  * vendorHash **required** `integer`: The Hash identifier of the Vendor to be returned.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Destiny.Responses.DestinyVendorResponse](#destiny.responses.destinyvendorresponse)
  * ThrottleSeconds `integer`

### Destiny2.GetItem
Retrieve the details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId. Non-instanced items, such as materials, have no useful instance-specific details and thus are not queryable here.


```js
bungie.Destiny2.GetItem({
  "destinyMembershipId": 0,
  "itemInstanceId": 0,
  "membershipType": 0
}, context)
```

#### Input
* input `object`
  * components `array`: A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
  * destinyMembershipId **required** `integer`: The membership ID of the destiny profile.
  * itemInstanceId **required** `integer`: The Instance ID of the destiny item.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): A valid non-BungieNet membership type.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Destiny.Responses.DestinyItemResponse](#destiny.responses.destinyitemresponse)
  * ThrottleSeconds `integer`

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

#### Input
* input `object`
  * categoryFilter **required** `integer` (values: 0, 1, 2, 4, 8, 16, 32, 64, 128): The category filter.
  * locales `string`: Comma seperated list of locales posts must match to return in the result list. Default 'en'
  * page **required** `integer`: Zero base page
  * quickDate **required** `integer` (values: 0, 1, 2, 3, 4): The date filter.
  * sort **required** `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7): The sort mode.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Forum.PostSearchResponse](#forum.postsearchresponse)
  * ThrottleSeconds `integer`

### Forum.GetForumTagSuggestions
Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.


```js
bungie.Forum.GetForumTagSuggestions({}, context)
```

#### Input
* input `object`
  * partialtag `string`: The partial tag input to generate suggestions from.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `array`
    * items [Tags.Models.Contracts.TagResponse](#tags.models.contracts.tagresponse)
  * ThrottleSeconds `integer`

### Forum.GetPostAndParent
Returns the post specified and its immediate parent.


```js
bungie.Forum.GetPostAndParent({
  "childPostId": 0
}, context)
```

#### Input
* input `object`
  * childPostId **required** `integer`
  * showbanned `string`: If this value is not null or empty, banned posts are requested to be returned

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Forum.PostSearchResponse](#forum.postsearchresponse)
  * ThrottleSeconds `integer`

### Forum.GetPostAndParentAwaitingApproval
Returns the post specified and its immediate parent of posts that are awaiting approval.


```js
bungie.Forum.GetPostAndParentAwaitingApproval({
  "childPostId": 0
}, context)
```

#### Input
* input `object`
  * childPostId **required** `integer`
  * showbanned `string`: If this value is not null or empty, banned posts are requested to be returned

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Forum.PostSearchResponse](#forum.postsearchresponse)
  * ThrottleSeconds `integer`

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

#### Input
* input `object`
  * getParentPost **required** `boolean`
  * page **required** `integer`
  * pageSize **required** `integer`
  * parentPostId **required** `integer`
  * replySize **required** `integer`
  * rootThreadMode **required** `boolean`
  * showbanned `string`: If this value is not null or empty, banned posts are requested to be returned
  * sortMode **required** `integer` (values: 0, 1)

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Forum.PostSearchResponse](#forum.postsearchresponse)
  * ThrottleSeconds `integer`

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

#### Input
* input `object`
  * childPostId **required** `integer`
  * page **required** `integer`
  * pageSize **required** `integer`
  * replySize **required** `integer`
  * rootThreadMode **required** `boolean`
  * showbanned `string`: If this value is not null or empty, banned posts are requested to be returned
  * sortMode **required** `integer` (values: 0, 1)

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Forum.PostSearchResponse](#forum.postsearchresponse)
  * ThrottleSeconds `integer`

### Forum.GetTopicForContent
Gets the post Id for the given content item's comments, if it exists.


```js
bungie.Forum.GetTopicForContent({
  "contentId": 0
}, context)
```

#### Input
* input `object`
  * contentId **required** `integer`

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `integer`
  * ThrottleSeconds `integer`

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

#### Input
* input `object`
  * categoryFilter **required** `integer` (values: 0, 1, 2, 4, 8, 16, 32, 64, 128): A category filter
  * group **required** `integer`: The group, if any.
  * locales `string`: Comma seperated list of locales posts must match to return in the result list. Default 'en'
  * page **required** `integer`: Zero paged page number
  * pageSize **required** `integer`: Unused
  * quickDate **required** `integer` (values: 0, 1, 2, 3, 4): A date filter.
  * sort **required** `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7): The sort mode.
  * tagstring `string`: The tags to search, if any.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Forum.PostSearchResponse](#forum.postsearchresponse)
  * ThrottleSeconds `integer`

### Forum.GetPoll
Gets the specified forum poll.


```js
bungie.Forum.GetPoll({
  "topicId": 0
}, context)
```

#### Input
* input `object`
  * topicId **required** `integer`: The post id of the topic that has the poll.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Forum.PostSearchResponse](#forum.postsearchresponse)
  * ThrottleSeconds `integer`

### Forum.ApproveFireteamThread
Allows the owner of a fireteam thread to approve all joined members and start a private message conversation with them.


```js
bungie.Forum.ApproveFireteamThread({
  "topicId": 0
}, context)
```

#### Input
* input `object`
  * topicId **required** `integer`: The post id of the recruitment topic to approve.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Messages.Responses.SaveMessageResult](#messages.responses.savemessageresult)
  * ThrottleSeconds `integer`

### Forum.JoinFireteamThread
Allows a user to slot themselves into a recruitment thread fireteam slot. Returns the new state of the fireteam.


```js
bungie.Forum.JoinFireteamThread({
  "topicId": 0
}, context)
```

#### Input
* input `object`
  * topicId **required** `integer`: The post id of the recruitment topic you wish to join.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Forum.ForumRecruitmentDetail](#forum.forumrecruitmentdetail)
  * ThrottleSeconds `integer`

### Forum.KickBanFireteamApplicant
Allows a recruitment thread owner to kick a join user from the fireteam. Returns the new state of the fireteam.


```js
bungie.Forum.KickBanFireteamApplicant({
  "targetMembershipId": 0,
  "topicId": 0
}, context)
```

#### Input
* input `object`
  * targetMembershipId **required** `integer`: The id of the user you wish to kick.
  * topicId **required** `integer`: The post id of the recruitment topic you wish to join.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Forum.ForumRecruitmentDetail](#forum.forumrecruitmentdetail)
  * ThrottleSeconds `integer`

### Forum.LeaveFireteamThread
Allows a user to remove themselves from a recruitment thread fireteam slot. Returns the new state of the fireteam.


```js
bungie.Forum.LeaveFireteamThread({
  "topicId": 0
}, context)
```

#### Input
* input `object`
  * topicId **required** `integer`: The post id of the recruitment topic you wish to leave.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Forum.ForumRecruitmentDetail](#forum.forumrecruitmentdetail)
  * ThrottleSeconds `integer`

### Forum.GetRecruitmentThreadSummaries
Allows the caller to get a list of to 25 recruitment thread summary information objects.


```js
bungie.Forum.GetRecruitmentThreadSummaries(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `array`
    * items [Forum.ForumRecruitmentDetail](#forum.forumrecruitmentdetail)
  * ThrottleSeconds `integer`

### GroupV2.CreateGroup
Create a new group.


```js
bungie.GroupV2.CreateGroup(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [GroupsV2.GroupCreationResponse](#groupsv2.groupcreationresponse)
  * ThrottleSeconds `integer`

### GroupV2.GetAvailableAvatars
Returns a list of all available group avatars for the signed-in user.


```js
bungie.GroupV2.GetAvailableAvatars(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `object`
  * ThrottleSeconds `integer`

### GroupV2.GetAvailableThemes
Returns a list of all available group themes.


```js
bungie.GroupV2.GetAvailableThemes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `array`
    * items [Config.GroupTheme](#config.grouptheme)
  * ThrottleSeconds `integer`

### GroupV2.GetUserClanInviteSetting
Gets the state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.


```js
bungie.GroupV2.GetUserClanInviteSetting({
  "mType": 0
}, context)
```

#### Input
* input `object`
  * mType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): The Destiny membership type of the account we wish to access settings.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `boolean`
  * ThrottleSeconds `integer`

### GroupV2.GetGroupByName
Get information about a specific group with the given name and type.


```js
bungie.GroupV2.GetGroupByName({
  "groupName": "",
  "groupType": 0
}, context)
```

#### Input
* input `object`
  * groupName **required** `string`: Exact name of the group to find.
  * groupType **required** `integer` (values: 0, 1): Type of group to find.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [GroupsV2.GroupResponse](#groupsv2.groupresponse)
  * ThrottleSeconds `integer`

### GroupV2.GetRecommendedGroups
Gets groups recommended for you based on the groups to whom those you follow belong.


```js
bungie.GroupV2.GetRecommendedGroups(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [GroupsV2.GroupSearchResponse](#groupsv2.groupsearchresponse)
  * ThrottleSeconds `integer`

### GroupV2.GroupSearch
Search for Groups.


```js
bungie.GroupV2.GroupSearch(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [GroupsV2.GroupSearchResponse](#groupsv2.groupsearchresponse)
  * ThrottleSeconds `integer`

### GroupV2.SetUserClanInviteSetting
Sets the state of the user's clan invite preferences - true if they wish to be invited to clans, false otherwise.


```js
bungie.GroupV2.SetUserClanInviteSetting({
  "allowInvites": true,
  "mType": 0
}, context)
```

#### Input
* input `object`
  * allowInvites **required** `boolean`: True to allow invites of this user to clans, false otherwise.
  * mType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): The Destiny membership type of linked account we are manipulating.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `integer`
  * ThrottleSeconds `integer`

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

#### Input
* input `object`
  * filter **required** `integer` (values: 0, 1, 2): Filter apply to list of potential joined groups.
  * groupType **required** `integer` (values: 0, 1): Type of group the supplied member applied.
  * membershipId **required** `integer`: Membership ID to for which to find applied groups.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): Membership type of the supplied membership ID.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [GroupsV2.GroupPotentialMembershipSearchResponse](#groupsv2.grouppotentialmembershipsearchresponse)
  * ThrottleSeconds `integer`

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

#### Input
* input `object`
  * filter **required** `integer` (values: 0, 1, 2): Filter apply to list of joined groups.
  * groupType **required** `integer` (values: 0, 1): Type of group the supplied member founded.
  * membershipId **required** `integer`: Membership ID to for which to find founded groups.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): Membership type of the supplied membership ID.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [GroupsV2.GroupMembershipSearchResponse](#groupsv2.groupmembershipsearchresponse)
  * ThrottleSeconds `integer`

### GroupV2.GetGroup
Get information about a specific group of the given ID.


```js
bungie.GroupV2.GetGroup({
  "groupId": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: Requested group's id.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [GroupsV2.GroupResponse](#groupsv2.groupresponse)
  * ThrottleSeconds `integer`

### GroupV2.AbdicateFoundership
An administrative method to allow the founder of a group or clan to give up their position to another admin permanently.


```js
bungie.GroupV2.AbdicateFoundership({
  "founderIdNew": 0,
  "groupId": 0,
  "membershipType": 0
}, context)
```

#### Input
* input `object`
  * founderIdNew **required** `integer`: The new founder for this group. Must already be a group admin.
  * groupId **required** `integer`: The target group id.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): Membership type of the provided founderIdNew.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `boolean`
  * ThrottleSeconds `integer`

### GroupV2.GetAdminsAndFounderOfGroup
Get the list of members in a given group who are of admin level or higher.


```js
bungie.GroupV2.GetAdminsAndFounderOfGroup({
  "groupId": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: The ID of the group.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [SearchResultOfGroupMember](#searchresultofgroupmember)
  * ThrottleSeconds `integer`

### GroupV2.GetBannedMembersOfGroup
Get the list of banned members in a given group. Only accessible to group Admins and above. Not applicable to all groups. Check group features.


```js
bungie.GroupV2.GetBannedMembersOfGroup({
  "groupId": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: Group ID whose banned members you are fetching

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [SearchResultOfGroupBan](#searchresultofgroupban)
  * ThrottleSeconds `integer`

### GroupV2.EditGroup
Edit an existing group. You must have suitable permissions in the group to perform this operation. This latest revision will only edit the fields you pass in - pass null for properties you want to leave unaltered.


```js
bungie.GroupV2.EditGroup({
  "groupId": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: Group ID of the group to edit.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `integer`
  * ThrottleSeconds `integer`

### GroupV2.EditClanBanner
Edit an existing group's clan banner. You must have suitable permissions in the group to perform this operation. All fields are required.


```js
bungie.GroupV2.EditClanBanner({
  "groupId": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: Group ID of the group to edit.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `integer`
  * ThrottleSeconds `integer`

### GroupV2.EditFounderOptions
Edit group options only available to a founder. You must have suitable permissions in the group to perform this operation.


```js
bungie.GroupV2.EditFounderOptions({
  "groupId": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: Group ID of the group to edit.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `integer`
  * ThrottleSeconds `integer`

### GroupV2.GetMembersOfGroup
Get the list of members in a given group.


```js
bungie.GroupV2.GetMembersOfGroup({
  "groupId": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: The ID of the group.
  * memberType `integer` (values: 0, 1, 2, 3, 4, 5): Filter out other member types. Use None for all members.
  * nameSearch `string`: The name fragment upon which a search should be executed for members with matching display or unique names.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [SearchResultOfGroupMember](#searchresultofgroupmember)
  * ThrottleSeconds `integer`

### GroupV2.RequestGroupMembership
Request permission to join the given group.


```js
bungie.GroupV2.RequestGroupMembership({
  "groupId": 0,
  "membershipType": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: ID of the group you would like to join.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): MembershipType of the account to use when joining.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [GroupsV2.GroupApplicationResponse](#groupsv2.groupapplicationresponse)
  * ThrottleSeconds `integer`

### GroupV2.ApproveAllPending
Approve all of the pending users for the given group.


```js
bungie.GroupV2.ApproveAllPending({
  "groupId": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: ID of the group.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `array`
    * items [Entities.EntityActionResult](#entities.entityactionresult)
  * ThrottleSeconds `integer`

### GroupV2.ApprovePendingForList
Approve all of the pending users for the given group.


```js
bungie.GroupV2.ApprovePendingForList({
  "groupId": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: ID of the group.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `array`
    * items [Entities.EntityActionResult](#entities.entityactionresult)
  * ThrottleSeconds `integer`

### GroupV2.DenyAllPending
Deny all of the pending users for the given group.


```js
bungie.GroupV2.DenyAllPending({
  "groupId": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: ID of the group.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `array`
    * items [Entities.EntityActionResult](#entities.entityactionresult)
  * ThrottleSeconds `integer`

### GroupV2.DenyPendingForList
Deny all of the pending users for the given group that match the passed-in .


```js
bungie.GroupV2.DenyPendingForList({
  "groupId": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: ID of the group.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `array`
    * items [Entities.EntityActionResult](#entities.entityactionresult)
  * ThrottleSeconds `integer`

### GroupV2.IndividualGroupInvite
Invite a user to join this group.


```js
bungie.GroupV2.IndividualGroupInvite({
  "groupId": 0,
  "membershipId": 0,
  "membershipType": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: ID of the group you would like to join.
  * membershipId **required** `integer`: Membership id of the account being invited.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): MembershipType of the account being invited.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [GroupsV2.GroupApplicationResponse](#groupsv2.groupapplicationresponse)
  * ThrottleSeconds `integer`

### GroupV2.IndividualGroupInviteCancel
Cancels a pending invitation to join a group.


```js
bungie.GroupV2.IndividualGroupInviteCancel({
  "groupId": 0,
  "membershipId": 0,
  "membershipType": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: ID of the group you would like to join.
  * membershipId **required** `integer`: Membership id of the account being cancelled.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): MembershipType of the account being cancelled.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [GroupsV2.GroupApplicationResponse](#groupsv2.groupapplicationresponse)
  * ThrottleSeconds `integer`

### GroupV2.GetInvitedIndividuals
Get the list of users who have been invited into the group.


```js
bungie.GroupV2.GetInvitedIndividuals({
  "groupId": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: ID of the group.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [SearchResultOfGroupMemberApplication](#searchresultofgroupmemberapplication)
  * ThrottleSeconds `integer`

### GroupV2.GetPendingMemberships
Get the list of users who are awaiting a decision on their application to join a given group. Modified to include application info.


```js
bungie.GroupV2.GetPendingMemberships({
  "groupId": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: ID of the group.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [SearchResultOfGroupMemberApplication](#searchresultofgroupmemberapplication)
  * ThrottleSeconds `integer`

### GroupV2.RescindGroupMembership
Rescind your application to join the given group or leave the group if you are already a member..


```js
bungie.GroupV2.RescindGroupMembership({
  "groupId": 0,
  "membershipType": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: ID of the group.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): MembershipType of the account to leave.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [GroupsV2.GroupMemberLeaveResult](#groupsv2.groupmemberleaveresult)
  * ThrottleSeconds `integer`

### GroupV2.BanMember
Bans the requested member from the requested group for the specified period of time.


```js
bungie.GroupV2.BanMember({
  "groupId": 0,
  "membershipId": 0,
  "membershipType": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: Group ID that has the member to ban.
  * membershipId **required** `integer`: Membership ID of the member to ban from the group.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): Membership type of the provided membership ID.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `integer`
  * ThrottleSeconds `integer`

### GroupV2.KickMember
Kick a member from the given group, forcing them to reapply if they wish to re-join the group. You must have suitable permissions in the group to perform this operation.


```js
bungie.GroupV2.KickMember({
  "groupId": 0,
  "membershipId": 0,
  "membershipType": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: Group ID to kick the user from.
  * membershipId **required** `integer`: Membership ID to kick.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): Membership type of the provided membership ID.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [GroupsV2.GroupMemberLeaveResult](#groupsv2.groupmemberleaveresult)
  * ThrottleSeconds `integer`

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

#### Input
* input `object`
  * groupId **required** `integer`: ID of the group to which the member belongs.
  * membershipId **required** `integer`: Membership ID to modify.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): Membership type of the provide membership ID.
  * memberType **required** `integer` (values: 0, 1, 2, 3, 4, 5): New membertype for the specified member.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `integer`
  * ThrottleSeconds `integer`

### GroupV2.UnbanMember
Unbans the requested member, allowing them to re-apply for membership.


```js
bungie.GroupV2.UnbanMember({
  "groupId": 0,
  "membershipId": 0,
  "membershipType": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`
  * membershipId **required** `integer`: Membership ID of the member to unban from the group
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): Membership type of the provided membership ID.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `integer`
  * ThrottleSeconds `integer`

### GroupV2.GetGroupOptionalConversations
Gets a list of available optional conversation channels and their settings.


```js
bungie.GroupV2.GetGroupOptionalConversations({
  "groupId": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: Requested group's id.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `array`
    * items [GroupsV2.GroupOptionalConversation](#groupsv2.groupoptionalconversation)
  * ThrottleSeconds `integer`

### GroupV2.AddOptionalConversation
Add a new optional conversation/chat channel. Requires admin permissions to the group.


```js
bungie.GroupV2.AddOptionalConversation({
  "groupId": 0
}, context)
```

#### Input
* input `object`
  * groupId **required** `integer`: Group ID of the group to edit.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `integer`
  * ThrottleSeconds `integer`

### GroupV2.EditOptionalConversation
Edit the settings of an optional conversation/chat channel. Requires admin permissions to the group.


```js
bungie.GroupV2.EditOptionalConversation({
  "conversationId": 0,
  "groupId": 0
}, context)
```

#### Input
* input `object`
  * conversationId **required** `integer`: Conversation Id of the channel being edited.
  * groupId **required** `integer`: Group ID of the group to edit.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `integer`
  * ThrottleSeconds `integer`

### Trending.GetTrendingCategories
Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.


```js
bungie.Trending.GetTrendingCategories(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Trending.TrendingCategories](#trending.trendingcategories)
  * ThrottleSeconds `integer`

### Trending.GetTrendingCategory
Returns paginated lists of trending items for a category.


```js
bungie.Trending.GetTrendingCategory({
  "categoryId": "",
  "pageNumber": 0
}, context)
```

#### Input
* input `object`
  * categoryId **required** `string`: The ID of the category for whom you want additional results.
  * pageNumber **required** `integer`: The page # of results to return.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [SearchResultOfTrendingEntry](#searchresultoftrendingentry)
  * ThrottleSeconds `integer`

### Trending.GetTrendingEntryDetail
Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.


```js
bungie.Trending.GetTrendingEntryDetail({
  "identifier": "",
  "trendingEntryType": 0
}, context)
```

#### Input
* input `object`
  * identifier **required** `string`: The identifier for the entity to be returned.
  * trendingEntryType **required** `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9): The type of entity to be returned.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [Trending.TrendingDetail](#trending.trendingdetail)
  * ThrottleSeconds `integer`

### User.GetAvailableThemes
Returns a list of all available user themes.


```js
bungie.User.GetAvailableThemes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `array`
    * items [Config.UserTheme](#config.usertheme)
  * ThrottleSeconds `integer`

### User.GetBungieNetUserById
Loads a bungienet user by membership id.


```js
bungie.User.GetBungieNetUserById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The requested Bungie.net membership id.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [User.GeneralUser](#user.generaluser)
  * ThrottleSeconds `integer`

### User.GetMembershipDataById
Returns a list of accounts associated with the supplied membership ID and membership type. This will include all linked accounts (even when hidden) if supplied credentials permit it.


```js
bungie.User.GetMembershipDataById({
  "membershipId": 0,
  "membershipType": 0
}, context)
```

#### Input
* input `object`
  * membershipId **required** `integer`: The membership ID of the target user.
  * membershipType **required** `integer` (values: 0, 1, 2, 4, 10, 254, -1): Type of the supplied membership ID.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [User.UserMembershipData](#user.usermembershipdata)
  * ThrottleSeconds `integer`

### User.GetMembershipDataForCurrentUser
Returns a list of accounts associated with signed in user. This is useful for OAuth implementations that do not give you access to the token response.


```js
bungie.User.GetMembershipDataForCurrentUser(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response [User.UserMembershipData](#user.usermembershipdata)
  * ThrottleSeconds `integer`

### User.GetUserAliases
Loads aliases of a bungienet membership id.


```js
bungie.User.GetUserAliases({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The requested Bungie.net membership id.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `array`
    * items [User.Models.UserAlias](#user.models.useralias)
  * ThrottleSeconds `integer`

### User.SearchUsers
Returns a list of possible users based on the search string


```js
bungie.User.SearchUsers({}, context)
```

#### Input
* input `object`
  * q `string`: The search string.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `array`
    * items [User.GeneralUser](#user.generaluser)
  * ThrottleSeconds `integer`

### User.GetPartnerships
Returns a user's linked Partnerships.


```js
bungie.User.GetPartnerships({
  "membershipId": 0
}, context)
```

#### Input
* input `object`
  * membershipId **required** `integer`: The ID of the member for whom partnerships should be returned.

#### Output
* output `object`
  * ErrorCode [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)
  * ErrorStatus `string`
  * Message `string`
  * MessageData `object`
  * Response `array`
    * items [Partnerships.PublicPartnershipDetail](#partnerships.publicpartnershipdetail)
  * ThrottleSeconds `integer`



## Definitions

### Applications.ApplicationScopes
* Applications.ApplicationScopes `integer` (values: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024)

### BungieMembershipType
* BungieMembershipType `integer` (values: 0, 1, 2, 4, 10, 254, -1): The types of membership the Accounts system supports. This is the external facing enum used in place of the internal-only Bungie.SharedDefinitions.MembershipType.

### BungieMembershipType[]
* BungieMembershipType[] `array`
  * items [BungieMembershipType](#bungiemembershiptype)

### Community.CommunityLiveStatus
* Community.CommunityLiveStatus `object`
  * activityModeHash `integer`
  * currentActivityHash `integer`
  * currentViewers `integer`
  * dateFeatured `string`
  * dateLastPlayed `string`
  * dateStatusUpdated `string`
  * dateStreamStarted `string`
  * destinyCharacterId `integer`
  * followers `integer`
  * isFeatured `boolean`
  * isSubscribable `boolean`
  * locale `string`
  * overallViewers `integer`
  * partnershipIdentifier `string`
  * partnershipType [Partnerships.PartnershipType](#partnerships.partnershiptype)
  * thumbnail `string`
  * thumbnailLarge `string`
  * thumbnailSmall `string`
  * title `string`
  * trendingValue `number`
  * url `string`
  * userInfo [User.UserInfoCard](#user.userinfocard)

### Community.CommunityStatusSort
* Community.CommunityStatusSort `integer` (values: 0, 1, 2, 3)

### Components.ComponentPrivacySetting
* Components.ComponentPrivacySetting `integer` (values: 0, 1, 2): A set of flags for reason(s) why the component populated in the way that it did. Inspect the individual flags for the reasons.

### Components.ComponentResponse
* Components.ComponentResponse `object`: The base class for any component-returning object that may need to indicate information about the state of the component being returned.
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### Config.GroupTheme
* Config.GroupTheme `object`
  * description `string`
  * folder `string`
  * name `string`

### Config.UserTheme
* Config.UserTheme `object`
  * userThemeDescription `string`
  * userThemeId `integer`
  * userThemeName `string`

### Content.CommentSummary
* Content.CommentSummary `object`
  * commentCount `integer`
  * topicId `integer`

### Content.ContentItemPublicContract
* Content.ContentItemPublicContract `object`
  * allowComments `boolean`
  * author [User.GeneralUser](#user.generaluser)
  * autoEnglishPropertyFallback `boolean`
  * cType `string`
  * cmsPath `string`
  * commentSummary [Content.CommentSummary](#content.commentsummary)
  * contentId `integer`
  * creationDate `string`
  * hasAgeGate `boolean`
  * minimumAge `integer`
  * modifyDate `string`
  * properties `object`: Firehose content is really a collection of metadata and "properties", which are the potentially-but-not-strictly localizable data that comprises the meat of whatever content is being shown.
  * ratingImagePath `string`
  * representations `array`
    * items [Content.ContentRepresentation](#content.contentrepresentation)
  * tags `array`
    * items `string`

### Content.ContentRepresentation
* Content.ContentRepresentation `object`
  * name `string`
  * path `string`
  * validationString `string`

### Dates.DateRange
* Dates.DateRange `object`
  * end `string`
  * start `string`

### Destiny.Activities.DestinyPublicActivityStatus
* Destiny.Activities.DestinyPublicActivityStatus `object`: Represents the public-facing status of an activity: any data about what is currently active in the Activity, regardless of an individual character's progress in it.
  * challengeObjectiveHashes `array`: Active Challenges for the activity, if any - represented as hashes for DestinyObjectiveDefinitions.
    * items `integer`
  * modifierHashes `array`: The active modifiers on this activity, if any - represented as hashes for DestinyActivityModifierDefinitions.
    * items `integer`
  * rewardTooltipItems `array`: If the activity itself provides any specific "mock" rewards, this will be the items and their quantity.
    * items [Destiny.DestinyItemQuantity](#destiny.destinyitemquantity)

### Destiny.ActivityGraphNodeHighlightType
* Destiny.ActivityGraphNodeHighlightType `integer` (values: 0, 1, 2, 3, 4): The various known UI styles in which an item can be highlighted. It'll be up to you to determine what you want to show based on this highlighting, BNet doesn't have any assets that correspond to these states. And yeah, RiseOfIron and Comet have their own special highlight states. Don't ask me, I can't imagine they're still used.

### Destiny.BucketCategory
* Destiny.BucketCategory `integer` (values: 0, 1, 2, 3, 4)

### Destiny.BucketScope
* Destiny.BucketScope `integer` (values: 0, 1)

### Destiny.Challenges.DestinyChallengeStatus
* Destiny.Challenges.DestinyChallengeStatus `object`: Represents the status and other related information for a challenge that is - or was - available to a player. 
  * objective `object`: The progress - including completion status - of the active challenge.
    * activityHash `integer`: If the Objective has an Activity associated with it, this is the unique identifier of the Activity being referred to. Use to look up the DestinyActivityDefinition in static data. This will give localized data about *what* you should be playing for the objective to be achieved.
    * complete `boolean`: Whether or not the Objective is completed.
    * destinationHash `integer`: If the Objective has a Destination associated with it, this is the unique identifier of the Destination being referred to. Use to look up the DestinyDestinationDefinition in static data. This will give localized data about *where* in the universe the objective should be achieved.
    * objectiveHash `integer`: The unique identifier of the Objective being referred to. Use to look up the DestinyObjectiveDefinition in static data.
    * progress `integer`: If progress has been made, and the progress can be measured numerically, this will be the value of that progress. You can compare it to the DestinyObjectiveDefinition.completionValue property for current vs. upper bounds, and use DestinyObjectiveDefinition.valueStyle to determine how this should be rendered. Note that progress, in Destiny 2, need not be a literal numeric progression. It could be one of a number of possible values, even a Timestamp. Always examine DestinyObjectiveDefinition.valueStyle before rendering progress.

### Destiny.Character.DestinyCharacterCustomization
* Destiny.Character.DestinyCharacterCustomization `object`: Raw data about the customization options chosen for a character's face and appearance.
  * decalColor `integer`
  * decalIndex `integer`
  * eyeColor `integer`
  * face `integer`
  * featureColors `array`
    * items `integer`
  * featureIndex `integer`
  * hairColors `array`
    * items `integer`
  * hairIndex `integer`
  * lipColor `integer`
  * personality `integer`
  * skinColor `integer`
  * wearHelmet `boolean`

### Destiny.Character.DestinyCharacterPeerView
* Destiny.Character.DestinyCharacterPeerView `object`: A minimal view of a character's equipped items, for the purpose of rendering a summary screen or showing the character in 3D.
  * equipment `array`
    * items [Destiny.Character.DestinyItemPeerView](#destiny.character.destinyitempeerview)

### Destiny.Character.DestinyItemPeerView
* Destiny.Character.DestinyItemPeerView `object`: Bare minimum summary information for an item, for the sake of 3D rendering the item.
  * dyes `array`: The list of dyes that have been applied to this item.
    * items [Destiny.DyeReference](#destiny.dyereference)
  * itemHash `integer`: The hash identifier of the item in question. Use it to look up the DestinyInventoryItemDefinition of the item for static rendering data.

### Destiny.Components.Items.DestinyItemPlugComponent
* Destiny.Components.Items.DestinyItemPlugComponent `object`: Plugs are non-instanced items that can provide Stat and Perk benefits when socketed into an instanced item. Items have Sockets, and Plugs are inserted into Sockets.
  * enableFailIndexes `array`: If a plug is not enabled, this will be populated with indexes into the plug item definition's plug.enabledRules property, so that you can show the reasons why it is not enabled.
    * items `integer`
  * insertFailIndexes `array`: If the plug cannot be inserted for some reason, this will have the indexes into the plug item definition's plug.insertionRules property, so you can show the reasons why it can't be inserted.
    * items `integer`

### Destiny.Components.Kiosks.DestinyKioskItem
* Destiny.Components.Kiosks.DestinyKioskItem `object`
  * canAcquire `boolean`: If true, the user can not only see the item, but they can acquire it. It is possible that a user can see a kiosk item and not be able to acquire it.
  * failureIndexes `array`: Indexes into failureStrings for the Vendor, indicating the reasons why it failed if any.
    * items `integer`
  * index `integer`: The index of the item in the related DestinyVendorDefintion's itemList property, representing the sale.

### Destiny.Components.Kiosks.DestinyKiosksComponent
* Destiny.Components.Kiosks.DestinyKiosksComponent `object`: A Kiosk is a Vendor (DestinyVendorDefinition) that sells items based on whether you have already acquired that item before.
  * kioskItems `object`: A dictionary keyed by the Kiosk Vendor's hash identifier (use it to look up the DestinyVendorDefinition for the relevant kiosk vendor), and whose value is a list of all the items that the user can "see" in the Kiosk, and any other interesting metadata.

### Destiny.Config.DestinyManifest
* Destiny.Config.DestinyManifest `object`: DestinyManifest is the external-facing contract for just the properties needed by those calling the Destiny Platform.
  * mobileAssetContentPath `string`
  * mobileClanBannerDatabasePath `string`
  * mobileGearAssetDataBases `array`
    * items [Destiny.Config.GearAssetDataBaseDefinition](#destiny.config.gearassetdatabasedefinition)
  * mobileGearCDN `object`
  * mobileWorldContentPaths `object`
  * version `string`

### Destiny.Config.GearAssetDataBaseDefinition
* Destiny.Config.GearAssetDataBaseDefinition `object`
  * path `string`
  * version `integer`

### Destiny.DamageType
* Destiny.DamageType `integer` (values: 0, 1, 2, 3, 4, 5)

### Destiny.Definitions.ActivityModifiers.DestinyActivityModifierDefinition
* Destiny.Definitions.ActivityModifiers.DestinyActivityModifierDefinition `object`: Modifiers - in Destiny 1, these were referred to as "Skulls" - are changes that can be applied to an Activity.
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

### Destiny.Definitions.Animations.DestinyAnimationReference
* Destiny.Definitions.Animations.DestinyAnimationReference `object`
  * animIdentifier `string`
  * animName `string`
  * path `string`

### Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition
* Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition `object`: Many Destiny*Definition contracts - the "first order" entities of Destiny that have their own tables in the Manifest Database - also have displayable information. This is the base class for that display information.
  * description `string`
  * hasIcon `boolean`
  * icon `string`: Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
  * name `string`

### Destiny.Definitions.Common.DestinyPositionDefinition
* Destiny.Definitions.Common.DestinyPositionDefinition `object`
  * x `integer`
  * y `integer`
  * z `integer`

### Destiny.Definitions.DestinyActivityChallengeDefinition
* Destiny.Definitions.DestinyActivityChallengeDefinition `object`: Represents a reference to a Challenge, which for now is just an Objective.
  * objectiveHash `integer`: The hash for the Objective that matches this challenge. Use it to look up the DestinyObjectiveDefinition.

### Destiny.Definitions.DestinyActivityDefinition
* Destiny.Definitions.DestinyActivityDefinition `object`: The static data about Activities in Destiny 2.
  * activityGraphList `array`: Unfortunately, in practice this is almost never populated. In theory, this is supposed to tell which Activity Graph to show if you bring up the director while in this activity.
    * items [Destiny.Definitions.DestinyActivityGraphListEntryDefinition](#destiny.definitions.destinyactivitygraphlistentrydefinition)
  * activityLevel `integer`: The difficulty level of the activity.
  * activityLightLevel `integer`: The recommended light level for this activity.
  * activityModeHashes `array`
    * items `integer`
  * activityModeTypes `array`
    * items [Destiny.HistoricalStats.Definitions.DestinyActivityModeType](#destiny.historicalstats.definitions.destinyactivitymodetype)
  * activityTypeHash `integer`: The hash identifier for the Activity Type of this Activity. You may use it to look up the DestinyActivityTypeDefinition for human readable info, but be forewarned: Playlists and many PVP Map Activities will map to generic Activity Types. You'll have to use your knowledge of the Activity Mode being played to get more specific information about what the user is playing.
  * challenges `array`: An activity can have many Challenges, of which any subset of them may be active for play at any given period of time. This gives the information about the challenges and data that we use to understand when they're active and what rewards they provide. Sadly, at the moment there's no central definition for challenges: much like "Skulls" were in Destiny 1, these are defined on individual activities and there can be many duplicates/near duplicates across the Destiny 2 ecosystem. I have it in mind to centralize these in a future revision of the API, but we are out of time.
    * items [Destiny.Definitions.DestinyActivityChallengeDefinition](#destiny.definitions.destinyactivitychallengedefinition)
  * destinationHash `integer`: The hash identifier for the Destination on which this Activity is played. Use it to look up the DestinyDestinationDefinition for human readable info about the destination. A Destination can be thought of as a more specific location than a "Place". For instance, if the "Place" is Earth, the "Destination" would be a specific city or region on Earth.
  * directActivityModeHash `integer`
  * directActivityModeType `integer` (values: 0, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 37, 38, 39, 40)
  * displayProperties `object`: The title, subtitle, and icon for the activity.
    * description `string`
    * hasIcon `boolean`
    * icon `string`: Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
    * name `string`
  * guidedGame `object`: This block of data, if it exists, provides information about the guided game experience and restrictions for this activity. If it doesn't exist, the game is not able to be played as a guided game.
    * guidedDisbandCount `integer`: If -1, the guided group cannot be disbanded. Otherwise, take the total # of players in the activity and subtract this number: that is the total # of votes needed for the guided group to disband.
    * guidedMaxLobbySize `integer`: The maximum amount of people that can be in the waiting lobby.
    * guidedMinLobbySize `integer`: The minimum amount of people that can be in the waiting lobby.
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * isPlaylist `boolean`: If True, this Activity is actually a Playlist that refers to multiple possible specific Activities and Activity Modes. For instance, a Crucible Playlist may have references to multiple Activities (Maps) with multiple Activity Modes (specific PvP gameplay modes). If this is true, refer to the playlistItems property for the specific entries in the playlist.
  * isPvP `boolean`: If true, this activity is a PVP activity or playlist.
  * matchmaking `object`: This block of data provides information about the Activity's matchmaking attributes: how many people can join and such.
    * isMatchmade `boolean`: If TRUE, the activity is matchmade. Otherwise, it requires explicit forming of a party.
    * maxParty `integer`: The maximum # of people allowed in a Fireteam.
    * maxPlayers `integer`: The maximum # of people allowed across all teams in the activity.
    * minParty `integer`: The minimum # of people in the fireteam for the activity to launch.
    * requiresGuardianOath `boolean`: If true, you have to Solemnly Swear to be up to Nothing But Good(tm) to play.
  * modifiers `array`: Activities can have Modifiers, as defined in DestinyActivityModifierDefinition. These are references to the modifiers that *can* be applied to that activity, along with data that we use to determine if that modifier is actually active at any given point in time.
    * items [Destiny.Definitions.DestinyActivityModifierReferenceDefinition](#destiny.definitions.destinyactivitymodifierreferencedefinition)
  * optionalUnlockStrings `array`: If there are status strings related to the activity and based on internal state of the game, account, or character, then this will be the definition of those strings and the states needed in order for the strings to be shown.
    * items [Destiny.Definitions.DestinyActivityUnlockStringDefinition](#destiny.definitions.destinyactivityunlockstringdefinition)
  * pgcrImage `string`: When Activities are completed, we generate a "Post-Game Carnage Report", or PGCR, with details about what happened in that activity (how many kills someone got, which team won, etc...) We use this image as the background when displaying PGCR information, and often use it when we refer to the Activity in general.
  * placeHash `integer`: The hash identifier for the "Place" on which this Activity is played. Use it to look up the DestinyPlaceDefinition for human readable info about the Place. A Place is the largest-scoped concept for location information. For instance, if the "Place" is Earth, the "Destination" would be a specific city or region on Earth.
  * playlistItems `array`: Represents all of the possible activities that could be played in the Playlist, along with information that we can use to determine if they are active at the present time.
    * items [Destiny.Definitions.DestinyActivityPlaylistItemDefinition](#destiny.definitions.destinyactivityplaylistitemdefinition)
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
  * releaseIcon `string`: If the activity has an icon associated with a specific release (such as a DLC), this is the path to that release's icon.
  * releaseTime `integer`: If the activity will not be visible until a specific and known time, this will be the seconds since the Epoch when it will become visible.
  * rewards `array`: The expected possible rewards for the activity. These rewards may or may not be accessible for an individual player based on their character state, the account state, and even the game's state overall. But it is a useful reference for possible rewards you can earn in the activity. These match up to rewards displayed when you hover over the Activity in the in-game Director, and often refer to Placeholder or "Dummy" items: items that tell you what you can earn in vague terms rather than what you'll specifically be earning (partly because the game doesn't even know what you'll earn specifically until you roll for it at the end)
    * items [Destiny.Definitions.DestinyActivityRewardDefinition](#destiny.definitions.destinyactivityrewarddefinition)
  * tier `integer`: The difficulty tier of the activity.

### Destiny.Definitions.DestinyActivityGraphListEntryDefinition
* Destiny.Definitions.DestinyActivityGraphListEntryDefinition `object`: Destinations and Activities may have default Activity Graphs that should be shown when you bring up the Director and are playing in either.
  * activityGraphHash `integer`: The hash identifier of the DestinyActivityGraphDefinition that should be shown when opening the director.

### Destiny.Definitions.DestinyActivityGuidedBlockDefinition
* Destiny.Definitions.DestinyActivityGuidedBlockDefinition `object`: Guided Game information for this activity.
  * guidedDisbandCount `integer`: If -1, the guided group cannot be disbanded. Otherwise, take the total # of players in the activity and subtract this number: that is the total # of votes needed for the guided group to disband.
  * guidedMaxLobbySize `integer`: The maximum amount of people that can be in the waiting lobby.
  * guidedMinLobbySize `integer`: The minimum amount of people that can be in the waiting lobby.

### Destiny.Definitions.DestinyActivityMatchmakingBlockDefinition
* Destiny.Definitions.DestinyActivityMatchmakingBlockDefinition `object`: Information about matchmaking and party size for the activity.
  * isMatchmade `boolean`: If TRUE, the activity is matchmade. Otherwise, it requires explicit forming of a party.
  * maxParty `integer`: The maximum # of people allowed in a Fireteam.
  * maxPlayers `integer`: The maximum # of people allowed across all teams in the activity.
  * minParty `integer`: The minimum # of people in the fireteam for the activity to launch.
  * requiresGuardianOath `boolean`: If true, you have to Solemnly Swear to be up to Nothing But Good(tm) to play.

### Destiny.Definitions.DestinyActivityModeDefinition
* Destiny.Definitions.DestinyActivityModeDefinition `object`
  * activityModeCategory [Destiny.DestinyActivityModeCategory](#destiny.destinyactivitymodecategory)
  * activityModeMappings `object`
  * display `boolean`: If FALSE, we want to ignore this type when we're showing activity modes in BNet UI. It will still be returned in case 3rd parties want to use it for any purpose.
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)
  * friendlyName `string`
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * isAggregateMode `boolean`
  * isTeamBased `boolean`
  * modeType [Destiny.HistoricalStats.Definitions.DestinyActivityModeType](#destiny.historicalstats.definitions.destinyactivitymodetype)
  * order `integer`: The relative ordering of activity modes.
  * parentHashes `array`
    * items `integer`
  * pgcrImage `string`
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

### Destiny.Definitions.DestinyActivityModifierReferenceDefinition
* Destiny.Definitions.DestinyActivityModifierReferenceDefinition `object`: A reference to an Activity Modifier from another entity, such as an Activity (for now, just Activities).
  * activityModifierHash `integer`: The hash identifier for the DestinyActivityModifierDefinition referenced by this activity.

### Destiny.Definitions.DestinyActivityPlaylistItemDefinition
* Destiny.Definitions.DestinyActivityPlaylistItemDefinition `object`: If the activity is a playlist, this is the definition for a specific entry in the playlist: a single possible combination of Activity and Activity Mode that can be chosen.
  * activityHash `integer`: The hash identifier of the Activity that can be played. Use it to look up the DestinyActivityDefinition.
  * activityModeHashes `array`
    * items `integer`
  * activityModeTypes `array`
    * items [Destiny.HistoricalStats.Definitions.DestinyActivityModeType](#destiny.historicalstats.definitions.destinyactivitymodetype)
  * directActivityModeHash `integer`
  * directActivityModeType `integer` (values: 0, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 37, 38, 39, 40)

### Destiny.Definitions.DestinyActivityRewardDefinition
* Destiny.Definitions.DestinyActivityRewardDefinition `object`: Activities can refer to one or more sets of tooltip-friendly reward data. These are the definitions for those tooltip friendly rewards.
  * rewardItems `array`: The "Items provided" in the reward. This is almost always a pointer to a DestinyInventoryItemDefintion for an item that you can't actually earn in-game, but that has name/description/icon information for the vague concept of the rewards you will receive. This is because the actual reward generation is non-deterministic and extremely complicated, so the best the game can do is tell you what you'll get in vague terms. And so too shall we.
    * items [Destiny.DestinyItemQuantity](#destiny.destinyitemquantity)
  * rewardText `string`: The header for the reward set, if any.

### Destiny.Definitions.DestinyActivityTypeDefinition
* Destiny.Definitions.DestinyActivityTypeDefinition `object`: The definition for an Activity Type.
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

### Destiny.Definitions.DestinyActivityUnlockStringDefinition
* Destiny.Definitions.DestinyActivityUnlockStringDefinition `object`: Represents a status string that could be conditionally displayed about an activity. Note that externally, you can only see the strings themselves. Internally we combine this information with server state to determine which strings should be shown.
  * displayString `string`: The string to be displayed if the conditions are met.

### Destiny.Definitions.DestinyBubbleDefinition
* Destiny.Definitions.DestinyBubbleDefinition `object`: Basic identifying data about the bubble. Combine with DestinyDestinationBubbleSettingDefinition - see DestinyDestinationDefinition.bubbleSettings for more information.
  * hash `integer`: The identifier for the bubble: only guaranteed to be unique within the Destination.

### Destiny.Definitions.DestinyClassDefinition
* Destiny.Definitions.DestinyClassDefinition `object`: Defines a Character Class in Destiny 2. These are types of characters you can play, like Titan, Warlock, and Hunter.
  * classType `object`: In Destiny 1, we added a convenience Enumeration for referring to classes. We've kept it, though mostly for posterity. This is the enum value for this definition's class.
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)
  * genderedClassNames `object`: A localized string referring to the singular form of the Class's name when referred to in gendered form. Keyed by the DestinyGender.
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * mentorVendorHash `integer`: If the Class has a Mentor (all classes *should*), this will be the hash identifier for that Vendor if you care.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

### Destiny.Definitions.DestinyDamageTypeDefinition
* Destiny.Definitions.DestinyDamageTypeDefinition `object`: All damage types that are possible in the game are defined here, along with localized info and icons as needed.
  * displayProperties `object`: The description of the damage type, icon etc...
    * description `string`
    * hasIcon `boolean`
    * icon `string`: Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
    * name `string`
  * enumValue `object`: We have an enumeration for damage types for quick reference. This is the current definition's damage type enum value.
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
  * showIcon `boolean`: If TRUE, the game shows this damage type's icon. Otherwise, it doesn't. Whether you show it or not is up to you.
  * transparentIconPath `string`: A variant of the icon that is transparent and colorless.

### Destiny.Definitions.DestinyDefinition
* Destiny.Definitions.DestinyDefinition `object`: Provides common properties for destiny definitions.
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

### Destiny.Definitions.DestinyDestinationBubbleSettingDefinition
* Destiny.Definitions.DestinyDestinationBubbleSettingDefinition `object`: Human readable data about the bubble. Combine with DestinyBubbleDefinition - see DestinyDestinationDefinition.bubbleSettings for more information.
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)

### Destiny.Definitions.DestinyDestinationDefinition
* Destiny.Definitions.DestinyDestinationDefinition `object`: On to one of the more confusing subjects of the API. What is a Destination, and what is the relationship between it, Activities, Locations, and Places?
  * activityGraphEntries `array`: If the Destination has default Activity Graphs (i.e. "Map") that should be shown in the director, this is the list of those Graphs. At most, only one should be active at any given time for a Destination: these would represent, for example, different variants on a Map if the Destination is changing on a macro level based on game state.
    * items [Destiny.Definitions.DestinyActivityGraphListEntryDefinition](#destiny.definitions.destinyactivitygraphlistentrydefinition)
  * bubbleSettings `array`: A Destination may have many "Bubbles" zones with human readable properties.
    * items [Destiny.Definitions.DestinyDestinationBubbleSettingDefinition](#destiny.definitions.destinydestinationbubblesettingdefinition)
  * bubbles `array`: This provides the unique identifiers for every bubble in the destination (only guaranteed unique within the destination), and any intrinsic properties of the bubble.
    * items [Destiny.Definitions.DestinyBubbleDefinition](#destiny.definitions.destinybubbledefinition)
  * defaultFreeroamActivityHash `integer`: If this Destination has a default Free-Roam activity, this is the hash for that Activity. Use it to look up the DestinyActivityDefintion.
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * placeHash `integer`: The place that "owns" this Destination. Use this hash to look up the DestinyPlaceDefinition.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

### Destiny.Definitions.DestinyDisplayCategoryDefinition
* Destiny.Definitions.DestinyDisplayCategoryDefinition `object`: Display Categories are different from "categories" in that these are specifically for visual grouping and display of categories in Vendor UI. The "categories" structure is for validation of the contained items, and can be categorized entirely separately from "Display Categories", there need be and often will be no meaningful relationship between the two.
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)
  * identifier `string`: A string identifier for the display category.

### Destiny.Definitions.DestinyEntitySearchResult
* Destiny.Definitions.DestinyEntitySearchResult `object`: The results of a search for Destiny content. This will be improved on over time, I've been doing some experimenting to see what might be useful.
  * results `object`: The items found that are matches/near matches for the searched-for term, sorted by something vaguely resembling "relevance". Hopefully this will get better in the future.
    * hasMore `boolean`
    * query [Queries.PagedQuery](#queries.pagedquery)
    * replacementContinuationToken `string`
    * results `array`
      * items [Destiny.Definitions.DestinyEntitySearchResultItem](#destiny.definitions.destinyentitysearchresultitem)
    * totalResults `integer`
    * useTotalResults `boolean`: If useTotalResults is true, then totalResults represents an accurate count.
  * suggestedWords `array`: A list of suggested words that might make for better search results, based on the text searched for.
    * items `string`

### Destiny.Definitions.DestinyEntitySearchResultItem
* Destiny.Definitions.DestinyEntitySearchResultItem `object`: An individual Destiny Entity returned from the entity search.
  * displayProperties `object`: Basic display properties on the entity, so you don't have to look up the definition to show basic results for the item.
    * description `string`
    * hasIcon `boolean`
    * icon `string`: Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
    * name `string`
  * entityType `string`: The type of entity, returned as a string matching the DestinyDefinition's contract class name. You'll have to have your own mapping from class names to actually looking up those definitions in the manifest databases.
  * hash `integer`: The hash identifier of the entity. You will use this to look up the DestinyDefinition relevant for the entity found.
  * weight `number`: The ranking value for sorting that we calculated using our relevance formula. This will hopefully get better with time and iteration.

### Destiny.Definitions.DestinyEquipmentSlotDefinition
* Destiny.Definitions.DestinyEquipmentSlotDefinition `object`: Characters can not only have Inventory buckets (containers of items that are generally matched by their type or functionality), they can also have Equipment Slots.
  * applyCustomArtDyes `boolean`: If True, equipped items should have their custom art dyes applied when rendering the item. Otherwise, custom art dyes on an item should be ignored if the item is equipped in this slot.
  * bucketTypeHash `integer`: The inventory bucket that owns this equipment slot.
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)
  * equipmentCategoryHash `integer`: These technically point to "Equipment Category Definitions". But don't get excited. There's nothing of significant value in those definitions, so I didn't bother to expose them. You can use the hash here to group equipment slots by common functionality, which serves the same purpose as if we had the Equipment Category definitions exposed.
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

### Destiny.Definitions.DestinyEquippingBlockDefinition
* Destiny.Definitions.DestinyEquippingBlockDefinition `object`: Items that can be equipped define this block. It contains information we need to understand how and when the item can be equipped.
  * attributes `object`: These are custom attributes on the equippability of the item.
  * displayStrings `array`: These are strings that represent the possible Game/Account/Character state failure conditions that can occur when trying to equip the item. They match up one-to-one with requiredUnlockExpressions.
    * items `string`
  * equipmentSlotTypeHash `integer`: An equipped item *must* be equipped in an Equipment Slot. This is the hash identifier of the DestinyEquipmentSlotDefinition into which it must be equipped.
  * gearsetItemHash `integer`: If the item is part of a gearset, this is a reference to that gearset item.
  * uniqueLabel `string`: If defined, this is the label used to check if the item has other items of matching types already equipped. 
  * uniqueLabelHash `integer`: The hash of that unique label. Does not point to a specific definition.

### Destiny.Definitions.DestinyFactionDefinition
* Destiny.Definitions.DestinyFactionDefinition `object`: These definitions represent Factions in the game. Factions have ended up unilaterally being related to Vendors that represent them, but that need not necessarily be the case.
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * progressionHash `integer`: The hash identifier for the DestinyProgressionDefinition that indicates the character's relationship with this faction in terms of experience and levels.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

### Destiny.Definitions.DestinyGearArtArrangementReference
* Destiny.Definitions.DestinyGearArtArrangementReference `object`
  * artArrangementHash `integer`
  * classHash `integer`

### Destiny.Definitions.DestinyGenderDefinition
* Destiny.Definitions.DestinyGenderDefinition `object`: Gender is a social construct, and as such we have definitions for Genders. Right now there happens to only be two, but we'll see what the future holds.
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)
  * genderType `object`: This is a quick reference enumeration for all of the currently defined Genders. We use the enumeration for quicker lookups in related data, like DestinyClassDefinition.genderedClassNames.
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

### Destiny.Definitions.DestinyInventoryBucketDefinition
* Destiny.Definitions.DestinyInventoryBucketDefinition `object`: An Inventory (be it Character or Profile level) is comprised of many Buckets. An example of a bucket is "Primary Weapons", where all of the primary weapons on a character are gathered together into a single visual element in the UI: a subset of the inventory that has a limited number of slots, and in this case also has an associated Equipment Slot for equipping an item in the bucket.
  * bucketOrder `integer`: Use this property to provide a quick-and-dirty recommended ordering for buckets in the UI. Most UIs will likely want to forsake this for something more custom and manual.
  * category `object`: An enum value for what items can be found in the bucket. See the BucketCategory enum for more details.
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)
  * enabled `boolean`: If True, this bucket is enabled. Disabled buckets may include buckets that were included for test purposes, or that were going to be used but then were abandoned but never removed from content *cough*.
  * fifo `boolean`: if a FIFO bucket fills up, it will delete the oldest item from said bucket when a new item tries to be added to it. If this is FALSE, the bucket will not allow new items to be placed in it until room is made by the user manually deleting items from it. You can see an example of this with the Postmaster's bucket.
  * hasTransferDestination `boolean`: If TRUE, there is at least one Vendor that can transfer items to/from this bucket. See the DestinyVendorDefinition's acceptedItems property for more information on how transferring works.
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * itemCount `integer`: The maximum # of item "slots" in a bucket. A slot is a given combination of item + quantity.
  * location `object`: Sometimes, inventory buckets represent conceptual "locations" in the game that might not be expected. This value indicates the conceptual location of the bucket, regardless of where it is actually contained on the character/account. 
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
  * scope `object`: Where the bucket is found. 0 = Character, 1 = Account

### Destiny.Definitions.DestinyInventoryItemDefinition
* Destiny.Definitions.DestinyInventoryItemDefinition `object`: So much of what you see in Destiny is actually an Item used in a new and creative way. This is the definition for Items in Destiny, which started off as just entities that could exist in your Inventory but ended up being the backing data for so much more: quests, reward previews, slots, and subclasses.
  * action `object`: If the item can be "used", this block will be non-null, and will have data related to the action performed when using the item. (Guess what? 99% of the time, this action is "dismantle". Shocker)
    * actionTypeLabel `string`: The internal identifier for the action.
    * consumeEntireStack `boolean`: If true, the entire stack is deleted when the action completes.
    * deleteOnAction `boolean`: If true, the item is deleted when the action completes.
    * isPositive `boolean`: The content has this property, however it's not entirely clear how it is used.
    * overlayIcon `string`: The icon associated with the overlay screen for the action, if any.
    * overlayScreenName `string`: If the action has an overlay screen associated with it, this is the name of that screen. Unfortunately, we cannot return the screen's data itself.
    * progressionRewards `array`: If performing this action earns you Progression, this is the list of progressions and values granted for those progressions by performing this action.
      * items [Destiny.Definitions.DestinyProgressionRewardDefinition](#destiny.definitions.destinyprogressionrewarddefinition)
    * requiredCooldownHash `integer`: The identifier hash for the Cooldown associated with this action. We have not pulled this data yet for you to have more data to use for cooldowns.
    * requiredCooldownSeconds `integer`: The number of seconds to delay before allowing this action to be performed again.
    * requiredItems `array`: If the action requires other items to exist or be destroyed, this is the list of those items and requirements.
      * items [Destiny.Definitions.DestinyItemActionRequiredItemDefinition](#destiny.definitions.destinyitemactionrequireditemdefinition)
    * requiredLocation `string`: Theoretically, an item could have a localized string for a hint about the location in which the action should be performed. In practice, no items yet have this property.
    * useOnAcquire `boolean`: If true, this action will be performed as soon as you earn this item. Some rewards work this way, providing you a single item to pick up from a reward-granting vendor in-game and then immediately consuming itself to provide you multiple items.
    * verbDescription `string`: Localized text describing the action being performed.
    * verbName `string`: Localized text for the verb of the action being performed.
  * allowActions `boolean`: BNet may forbid the execution of actions on this item via the API. If that is occurring, allowActions will be set to false.
  * animations `array`: If any animations were extracted from game content for this item, these will be the definitions of those animations.
    * items [Destiny.Definitions.Animations.DestinyAnimationReference](#destiny.definitions.animations.destinyanimationreference)
  * classType `object`: We run a similarly weak-sauce algorithm to try and determine whether an item is restricted to a specific class. If we find it to be restricted in such a way, we set this classType property to match the class' enumeration value so that users can easily identify class restricted items.
  * damageTypeHashes `array`: Theoretically, an item can have many possible damage types. In *practice*, this is not true, but just in case weapons start being made that have multiple (for instance, an item where a socket has reusable plugs for every possible damage type that you can choose from freely), this field will return all of the possible damage types that are available to the weapon by default.
    * items `integer`
  * damageTypes `array`: This is the list of all damage types that we know ahead of time the item can take on. Unfortunately, this does not preclude the possibility of something funky happening to give the item a damage type that cannot be predicted beforehand: for example, if some designer decides to create arbitrary non-reusable plugs that cause damage type to change.
    * items [Destiny.DamageType](#destiny.damagetype)
  * defaultDamageType `object`: If the item has a damage type that could be considered to be default, it will be populated here.
  * defaultDamageTypeHash `integer`: Similar to defaultDamageType, but represented as the hash identifier for a DestinyDamageTypeDefinition.
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)
  * displaySource `string`: In theory, it is a localized string telling you about how you can find the item. I really wish this was more consistent. Many times, it has nothing. Sometimes, it's instead a more narrative-forward description of the item. Which is cool, and I wish all properties had that data, but it should really be its own property.
  * equippable `boolean`: If true, then you will be allowed to equip the item if you pass its other requirements.
  * equippingBlock `object`: If this item can be equipped, this block will be non-null and will be populated with the conditions under which it can be equipped.
    * attributes `object`: These are custom attributes on the equippability of the item.
    * displayStrings `array`: These are strings that represent the possible Game/Account/Character state failure conditions that can occur when trying to equip the item. They match up one-to-one with requiredUnlockExpressions.
      * items `string`
    * equipmentSlotTypeHash `integer`: An equipped item *must* be equipped in an Equipment Slot. This is the hash identifier of the DestinyEquipmentSlotDefinition into which it must be equipped.
    * gearsetItemHash `integer`: If the item is part of a gearset, this is a reference to that gearset item.
    * uniqueLabel `string`: If defined, this is the label used to check if the item has other items of matching types already equipped. 
    * uniqueLabelHash `integer`: The hash of that unique label. Does not point to a specific definition.
  * gearset `object`: If this item has related items in a "Gear Set", this will be non-null and the relationships defined herein.
    * itemList `array`: The list of hashes for items in the gearset. Use them to look up DestinyInventoryItemDefinition entries for the items in the set.
      * items `integer`
    * trackingValueMax `integer`: The maximum possible number of items that can be collected.
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * inventory `object`: If this item can exist in an inventory, this block will be non-null. In practice, every item that currently exists has one of these blocks. But note that it is not necessarily guaranteed.
    * bucketTypeHash `integer`: The hash identifier for the DestinyInventoryBucketDefinition to which this item belongs. I should have named this "bucketHash", but too many things refer to it now. Sigh.
    * isInstanceItem `boolean`: If TRUE, this item is instanced. Otherwise, it is a generic item that merely has a quantity in a stack (like Glimmer).
    * maxStackSize `integer`: The maximum quantity of this item that can exist in a stack.
    * recoveryBucketTypeHash `integer`: If the item is picked up by the lost loot queue, this is the hash identifier for the DestinyInventoryBucketDefinition into which it will be placed. Again, I should have named this recoveryBucketHash instead.
    * stackUniqueLabel `string`: If this string is populated, you can't have more than one stack with this label in a given inventory. Note that this is different from the equipping block's unique label, which is used for equipping uniqueness.
    * tierType `object`: The enumeration matching the tier type of the item to known values, again for convenience sake.
    * tierTypeHash `integer`: The hash identifier for the Tier Type of the item, use to look up its DestinyItemTierTypeDefinition if you need to show localized data for the item's tier.
    * tierTypeName `string`: The localized name of the tier type, which is a useful shortcut so you don't have to look up the definition every time. However, it's mostly a holdover from days before we had a DestinyItemTierTypeDefinition to refer to.
  * investmentStats `array`: If the item has stats, this block will be defined. It has the "raw" investment stats for the item. These investment stats don't take into account the ways that the items can spawn, nor do they take into account any Stat Group transformations. I have retained them for debugging purposes, but I do not know how useful people will find them.
    * items [Destiny.Definitions.DestinyItemInvestmentStatDefinition](#destiny.definitions.destinyiteminvestmentstatdefinition)
  * itemCategoryHashes `array`: BNet attempts to make a more formal definition of item "Categories", as defined by DestinyItemCategoryDefinition. This is a list of all Categories that we were able to algorithmically determine that this item is a member of. (for instance, that it's a "Weapon", that it's an "Auto Rifle", etc...)
    * items `integer`
  * itemSubType `object`: A value indicating the "sub-type" of the item. For instance, where an item might have an itemType value "Weapon", this will be something more specific like "Auto Rifle".
  * itemType `object`: A value indicating the "base" the of the item. This enum is a useful but dramatic oversimplification of what it means for an item to have a "Type". Still, it's handy in many situations.
  * itemTypeAndTierDisplayName `string`: It became a common enough pattern in our UI to show Item Type and Tier combined into a single localized string that I'm just going to go ahead and start pre-creating these for items.
  * itemTypeDisplayName `string`: The localized title/name of the item's type. This can be whatever the designers want, and has no guarantee of consistency between items.
  * links `array`: If we added any help or informational URLs about this item, these will be those links.
    * items [Links.HyperlinkReference](#links.hyperlinkreference)
  * loreHash `integer`: If the item has any related Lore (DestinyLoreDefinition), this will be the hash identifier you can use to look up the lore definition.
  * nonTransferrable `boolean`: The intrinsic transferability of an item.
  * objectives `object`: If this item has Objectives (extra tasks that can be accomplished related to the item... most frequently when the item is a Quest Step and the Objectives need to be completed to move on to the next Quest Step), this block will be non-null and the objectives defined herein.
    * displayActivityHashes `array`: For every entry in objectiveHashes, there is a corresponding entry in this array at the same index. If the objective is meant to be associated with a specific DestinyActivityDefinition, there will be a valid hash at that index. Otherwise, it will be invalid (0).
      * items `integer`
    * narrative `string`: The localized string for narrative text related to this quest step, if any.
    * objectiveHashes `array`: The hashes to Objectives (DestinyObjectiveDefinition) that are part of this Quest Step, in the order that they should be rendered.
      * items `integer`
    * objectiveVerbName `string`: The localized string describing an action to be performed associated with the objectives, if any.
    * questTypeHash `integer`: A hashed value for the questTypeIdentifier, because apparently I like to be redundant.
    * questTypeIdentifier `string`: The identifier for the type of quest being performed, if any. Not associated with any fixed definition, yet.
    * questlineItemHash `integer`: The hash for the DestinyInventoryItemDefinition representing the Quest to which this Quest Step belongs.
    * requireFullObjectiveCompletion `boolean`: If True, all objectives must be completed for the step to be completed. If False, any one objective can be completed for the step to be completed.
  * perks `array`: If the item has any *intrinsic* Perks (Perks that it will provide regardless of Sockets, Talent Grid, and other transitory state), they will be defined here.
    * items [Destiny.Definitions.DestinyItemPerkEntryDefinition](#destiny.definitions.destinyitemperkentrydefinition)
  * plug `object`: If this item *is* a Plug, this will be non-null and the info defined herein. See DestinyItemPlugDefinition for more information.
    * enabledMaterialRequirementHash `integer`: It's not enough for the plug to be inserted. It has to be enabled as well. For it to be enabled, it may require materials. This is the hash identifier for the DestinyMaterialRequirementSetDefinition for those requirements, if there is one.
    * enabledRules `array`: The rules around whether the plug, once inserted, is enabled and providing its benefits.
      * items [Destiny.Definitions.Items.DestinyPlugRuleDefinition](#destiny.definitions.items.destinyplugruledefinition)
    * insertionMaterialRequirementHash `integer`: If inserting this plug requires materials, this is the hash identifier for looking up the DestinyMaterialRequirementSetDefinition for those requirements.
    * insertionRules `array`: The rules around when this plug can be inserted into a socket, aside from the socket's individual restrictions.
      * items [Destiny.Definitions.Items.DestinyPlugRuleDefinition](#destiny.definitions.items.destinyplugruledefinition)
    * onActionRecreateSelf `boolean`: If you successfully socket the item, this will determine whether or not you get "refunded" on the plug.
    * plugCategoryHash `integer`: The hash for the plugCategoryIdentifier. You can use this instead if you wish: I put both in the definition for debugging purposes.
    * plugCategoryIdentifier `string`: The string identifier for the plug's category. Use the socket's DestinySocketTypeDefinition.plugWhitelist to determine whether this plug can be inserted into the socket.
    * previewItemOverrideHash `integer`: In the game, if you're inspecting a plug item directly, this will be the item shown with the plug attached. Look up the DestinyInventoryItemDefinition for this hash for the item.
  * preview `object`: If this item can be Used or Acquired to gain other items (for instance, how Eververse Boxes can be consumed to get items from the box), this block will be non-null and will give summary information for the items that can be acquired.
    * derivedItemCategories `array`: This is a list of the items being previewed, categorized in the same way as they are in the preview UI.
      * items [Destiny.Definitions.Items.DestinyDerivedItemCategoryDefinition](#destiny.definitions.items.destinyderiveditemcategorydefinition)
    * previewActionString `string`: If the preview has an associated action (like "Open"), this will be the localized string for that action.
    * previewVendorHash `integer`: If the preview data is derived from a fake "Preview" Vendor, this will be the hash identifier for the DestinyVendorDefinition of that fake vendor.
  * quality `object`: If this item can have a level or stats, this block will be non-null and will be populated with default quality (item level, "quality", and infusion) data. See the block for more details, there's often less upfront information in D2 so you'll want to be aware of how you use quality and item level on the definition level now.
    * infusionCategoryHash `integer`: The hash identifier for the infusion. It does not map to a Definition entity.
    * infusionCategoryName `string`: The string identifier for this item's "infusability", if any. 
    * itemLevels `array`: The "base" defined level of an item. This is a list because, in theory, each Expansion could define its own base level for an item.
      * items `integer`
    * progressionLevelRequirementHash `integer`: An item can refer to pre-set level requirements. They are defined in DestinyProgressionLevelRequirementDefinition, and you can use this hash to find the appropriate definition.
    * qualityLevel `integer`: qualityLevel is used in combination with the item's level to calculate stats like Attack and Defense. It plays a role in that calculation, but not nearly as large as itemLevel does.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
  * sack `object`: If this item is a "reward sack" that can be opened to provide other items, this will be non-null and the properties of the sack contained herein.
    * detailAction `string`: A description of what will happen when you open the sack. As far as I can tell, this is blank currently. Unknown whether it will eventually be populated with useful info.
    * openAction `string`: The localized name of the action being performed when you open the sack.
    * selectItemCount `integer`
    * vendorSackType `string`
  * screenshot `string`: If we were able to acquire an in-game screenshot for the item, the path to that screenshot will be returned here. Note that not all items have screenshots: particularly not any non-equippable items.
  * secondaryIcon `string`: A secondary icon associated with the item. Currently this is used in very context specific applications, such as Emblem Nameplates.
  * secondaryOverlay `string`: Pulled from the secondary icon, this is the "secondary background" of the secondary icon. Confusing? Sure, that's why I call it "overlay" here: because as far as it's been used thus far, it has been for an optional overlay image. We'll see if that holds up, but at least for now it explains what this image is a bit better.
  * secondarySpecial `string`: Pulled from the Secondary Icon, this is the "special" background for the item. For Emblems, this is the background image used on the Details view: but it need not be limited to that for other types of items.
  * setData `object`: If this item is a quest, this block will be non-null. In practice, I wish I had called this the Quest block, but at the time it wasn't clear to me whether it would end up being used for purposes other than quests. It will contain data about the steps in the quest, and mechanics we can use for displaying and tracking the quest.
    * itemList `array`: A collection of hashes of set items, for items such as Quest Metadata items that possess this data.
      * items [Destiny.Definitions.DestinyItemSetBlockEntryDefinition](#destiny.definitions.destinyitemsetblockentrydefinition)
    * requireOrderedSetItemAdd `boolean`: If true, items in the set can only be added in increasing order, and adding an item will remove any previous item. For Quests, this is by necessity true. Only one quest step is present at a time, and previous steps are removed as you advance in the quest.
    * setIsFeatured `boolean`: If true, the UI should treat this quest as "featured"
    * setType `string`: A string identifier we can use to attempt to identify the category of the Quest.
  * sockets `object`: If this item has any Sockets, this will be non-null and the individual sockets on the item will be defined herein.
    * detail `string`: This was supposed to be a string that would give per-item details about sockets. In practice, it turns out that all this ever has is the localized word "details". ... that's lame, but perhaps it will become something cool in the future.
    * socketCategories `array`: A convenience property, that refers to the sockets in the "sockets" property, pre-grouped by category and ordered in the manner that they should be grouped in the UI. You could form this yourself with the existing data, but why would you want to? Enjoy life man.
      * items [Destiny.Definitions.DestinyItemSocketCategoryDefinition](#destiny.definitions.destinyitemsocketcategorydefinition)
    * socketEntries `array`: Each socket on an item is defined here. Check inside for more info.
      * items [Destiny.Definitions.DestinyItemSocketEntryDefinition](#destiny.definitions.destinyitemsocketentrydefinition)
  * sourceData `object`: If this item has a known source, this block will be non-null and populated with source information. Unfortunately, at this time we are not generating sources: that is some aggressively manual work which we didn't have time for, and I'm hoping to get back to at some point in the future.
    * exclusive `object`: If we found that this item is exclusive to a specific platform, this will be set to the BungieMembershipType enumeration that matches that platform.
    * sourceHashes `array`: The list of hash identifiers for Reward Sources that hint where the item can be found (DestinyRewardSourceDefinition).
      * items `integer`
    * sources `array`: A collection of details about the stats that were computed for the ways we found that the item could be spawned.
      * items [Destiny.Definitions.Sources.DestinyItemSourceDefinition](#destiny.definitions.sources.destinyitemsourcedefinition)
  * specialItemType `object`: In Destiny 1, we identified some items as having particular categories that we'd like to know about for various internal logic purposes. These are defined in SpecialItemType, and while these days the itemCategoryHashes are the preferred way of identifying types, we have retained this enum for its convenience.
  * stats `object`: If this item can have stats (such as a weapon, armor, or vehicle), this block will be non-null and populated with the stats found on the item.
    * hasDisplayableStats `boolean`: A quick and lazy way to determine whether any stat other than the "primary" stat is actually visible on the item. Items often have stats that we return in case people find them useful, but they're not part of the "Stat Group" and thus we wouldn't display them in our UI. If this is False, then we're not going to display any of these stats other than the primary one.
    * primaryBaseStatHash `integer`: This stat is determined to be the "primary" stat, and can be looked up in the stats or any other stat collection related to the item.
    * statGroupHash `integer`: If the item's stats are meant to be modified by a DestinyStatGroupDefinition, this will be the identifier for that definition.
    * stats `object`: If you are looking for precomputed values for the stats on a weapon, this is where they are stored. Technically these are the "Display" stat values. Please see DestinyStatsDefinition for what Display Stat Values means, it's a very long story... but essentially these are the closest values BNet can get to the item stats that you see in-game.
  * summary `object`: Summary data about the item.
    * sortPriority `integer`: Apparently when rendering an item in a reward, this should be used as a sort priority. We're not doing it presently.
  * summaryItemHash `integer`: There are times when the game will show you a "summary/vague" version of an item - such as a description of its type represented as a DestinyInventoryItemDefinition - rather than display the item itself.
  * talentGrid `object`: If the item has a Talent Grid, this will be non-null and the properties of the grid defined herein. Note that, while many items still have talent grids, the only ones with meaningful Nodes still on them will be Subclass/"Build" items.
    * buildName `string`: A shortcut string identifier for the "build" in question, if this talent grid has an associated build. Doesn't map to anything we can expose at the moment.
    * hudDamageType `object`: If the talent grid implies a damage type, this is the enum value for that damage type.
    * hudIcon `string`: If the talent grid has a special icon that's shown in the game UI (like builds, funny that), this is the identifier for that icon. Sadly, we don't actually get that icon right now. I'll be looking to replace this with a path to the actual icon itself.
    * itemDetailString `string`: This is meant to be a subtitle for looking at the talent grid. In practice, somewhat frustratingly, this always merely says the localized word for "Details". Great. Maybe it'll have more if talent grids ever get used for more than builds and subclasses again.
    * talentGridHash `integer`: The hash identifier of the DestinyTalentGridDefinition attached to this item.
  * tooltipStyle `string`: An identifier that the game UI uses to determine what type of tooltip to show for the item. These have no corresponding definitions that BNet can link to: so it'll be up to you to interpret and display your UI differently according to these styles (or ignore it).
  * translationBlock `object`: If this item can be rendered, this block will be non-null and will be populated with rendering information.
    * arrangements `array`
      * items [Destiny.Definitions.DestinyGearArtArrangementReference](#destiny.definitions.destinygearartarrangementreference)
    * customDyes `array`
      * items [Destiny.DyeReference](#destiny.dyereference)
    * defaultDyes `array`
      * items [Destiny.DyeReference](#destiny.dyereference)
    * hasGeometry `boolean`
    * lockedDyes `array`
      * items [Destiny.DyeReference](#destiny.dyereference)
    * weaponPatternHash `integer`
    * weaponPatternIdentifier `string`
  * value `object`: The conceptual "Value" of an item, if any was defined. See the DestinyItemValueBlockDefinition for more details.
    * itemValue `array`: References to the items that make up this item's "value", and the quantity.
      * items [Destiny.DestinyItemQuantity](#destiny.destinyitemquantity)
    * valueDescription `string`: If there's a localized text description of the value provided, this will be said description.

### Destiny.Definitions.DestinyInventoryItemStatDefinition
* Destiny.Definitions.DestinyInventoryItemStatDefinition `object`: Defines a specific stat value on an item, and the minimum/maximum range that we could compute for the item based on our heuristics for how the item might be generated.
  * maximum `integer`: The maximum possible value for this stat that we think the item can roll.
  * minimum `integer`: The minimum possible value for this stat that we think the item can roll.
  * statHash `integer`: The hash for the DestinyStatDefinition representing this stat.
  * value `integer`: This value represents the stat value assuming the minimum possible roll but accounting for any mandatory bonuses that should be applied to the stat on item creation.

### Destiny.Definitions.DestinyItemActionBlockDefinition
* Destiny.Definitions.DestinyItemActionBlockDefinition `object`: If an item can have an action performed on it (like "Dismantle"), it will be defined here if you care.
  * actionTypeLabel `string`: The internal identifier for the action.
  * consumeEntireStack `boolean`: If true, the entire stack is deleted when the action completes.
  * deleteOnAction `boolean`: If true, the item is deleted when the action completes.
  * isPositive `boolean`: The content has this property, however it's not entirely clear how it is used.
  * overlayIcon `string`: The icon associated with the overlay screen for the action, if any.
  * overlayScreenName `string`: If the action has an overlay screen associated with it, this is the name of that screen. Unfortunately, we cannot return the screen's data itself.
  * progressionRewards `array`: If performing this action earns you Progression, this is the list of progressions and values granted for those progressions by performing this action.
    * items [Destiny.Definitions.DestinyProgressionRewardDefinition](#destiny.definitions.destinyprogressionrewarddefinition)
  * requiredCooldownHash `integer`: The identifier hash for the Cooldown associated with this action. We have not pulled this data yet for you to have more data to use for cooldowns.
  * requiredCooldownSeconds `integer`: The number of seconds to delay before allowing this action to be performed again.
  * requiredItems `array`: If the action requires other items to exist or be destroyed, this is the list of those items and requirements.
    * items [Destiny.Definitions.DestinyItemActionRequiredItemDefinition](#destiny.definitions.destinyitemactionrequireditemdefinition)
  * requiredLocation `string`: Theoretically, an item could have a localized string for a hint about the location in which the action should be performed. In practice, no items yet have this property.
  * useOnAcquire `boolean`: If true, this action will be performed as soon as you earn this item. Some rewards work this way, providing you a single item to pick up from a reward-granting vendor in-game and then immediately consuming itself to provide you multiple items.
  * verbDescription `string`: Localized text describing the action being performed.
  * verbName `string`: Localized text for the verb of the action being performed.

### Destiny.Definitions.DestinyItemActionRequiredItemDefinition
* Destiny.Definitions.DestinyItemActionRequiredItemDefinition `object`: The definition of an item and quantity required in a character's inventory in order to perform an action.
  * count `integer`: The minimum quantity of the item you have to have.
  * deleteOnAction `boolean`: If true, the item/quantity will be deleted from your inventory when the action is performed. Otherwise, you'll retain these required items after the action is complete.
  * itemHash `integer`: The hash identifier of the item you need to have. Use it to look up the DestinyInventoryItemDefinition for more info.

### Destiny.Definitions.DestinyItemCategoryDefinition
* Destiny.Definitions.DestinyItemCategoryDefinition `object`: In an attempt to categorize items by type, usage, and other interesting properties, we created DestinyItemCategoryDefinition: information about types that is assembled using a set of heuristics that examine the properties of an item such as what inventory bucket it's in, its item type name, and whether it has or is missing certain blocks of data.
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)
  * grantDestinyClass `object`: If an item belongs to this category, it will also get this class restriction enum value.
  * grantDestinyItemType `object`: If an item belongs to this category, it will also receive this item type. This is now how DestinyItemType is populated for items: it used to be an even jankier process, but that's a story that requires more alcohol.
  * grantDestinySubType `object`: If an item belongs to this category, it will also receive this subtype enum value.
  * groupedCategoryHashes `array`: If this category is a "parent" category of other categories, those children will have their hashes listed in rendering order here, and can be looked up using these hashes against DestinyItemCategoryDefinition.
    * items `integer`
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * itemTypeRegex `string`: The janky regular expression we used against the item type to try and discern whether the item belongs to this category.
  * itemTypeRegexNot `string`: If the item type matches this janky regex, it does *not* belong to this category.
  * originBucketIdentifier `string`: If the item belongs to this bucket, it does belong to this category.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
  * shortTitle `string`: A shortened version of the title. The reason why we have this is because the Armory in German had titles that were too long to display in our UI, so these were localized abbreviated versions of those categories. The property still exists today, even though the Armory doesn't exist for D2... yet.
  * visible `boolean`: If True, this category should be visible in UI. Sometimes we make categories that we don't think are interesting externally. It's up to you if you want to skip on showing them.

### Destiny.Definitions.DestinyItemCreationEntryLevelDefinition
* Destiny.Definitions.DestinyItemCreationEntryLevelDefinition `object`: An overly complicated wrapper for the item level at which the item should spawn.
  * level `integer`

### Destiny.Definitions.DestinyItemGearsetBlockDefinition
* Destiny.Definitions.DestinyItemGearsetBlockDefinition `object`: If an item has a related gearset, this is the list of items in that set, and an unlock expression that evaluates to a number representing the progress toward gearset completion (a very rare use for unlock expressions!)
  * itemList `array`: The list of hashes for items in the gearset. Use them to look up DestinyInventoryItemDefinition entries for the items in the set.
    * items `integer`
  * trackingValueMax `integer`: The maximum possible number of items that can be collected.

### Destiny.Definitions.DestinyItemInventoryBlockDefinition
* Destiny.Definitions.DestinyItemInventoryBlockDefinition `object`: If the item can exist in an inventory - the overwhelming majority of them can and do - then this is the basic properties regarding the item's relationship with the inventory.
  * bucketTypeHash `integer`: The hash identifier for the DestinyInventoryBucketDefinition to which this item belongs. I should have named this "bucketHash", but too many things refer to it now. Sigh.
  * isInstanceItem `boolean`: If TRUE, this item is instanced. Otherwise, it is a generic item that merely has a quantity in a stack (like Glimmer).
  * maxStackSize `integer`: The maximum quantity of this item that can exist in a stack.
  * recoveryBucketTypeHash `integer`: If the item is picked up by the lost loot queue, this is the hash identifier for the DestinyInventoryBucketDefinition into which it will be placed. Again, I should have named this recoveryBucketHash instead.
  * stackUniqueLabel `string`: If this string is populated, you can't have more than one stack with this label in a given inventory. Note that this is different from the equipping block's unique label, which is used for equipping uniqueness.
  * tierType `object`: The enumeration matching the tier type of the item to known values, again for convenience sake.
  * tierTypeHash `integer`: The hash identifier for the Tier Type of the item, use to look up its DestinyItemTierTypeDefinition if you need to show localized data for the item's tier.
  * tierTypeName `string`: The localized name of the tier type, which is a useful shortcut so you don't have to look up the definition every time. However, it's mostly a holdover from days before we had a DestinyItemTierTypeDefinition to refer to.

### Destiny.Definitions.DestinyItemInvestmentStatDefinition
* Destiny.Definitions.DestinyItemInvestmentStatDefinition `object`: Represents a "raw" investment stat, before calculated stats are calculated and before any DestinyStatGroupDefinition is applied to transform the stat into something closer to what you see in-game.
  * statTypeHash `integer`: The hash identifier for the DestinyStatDefinition defining this stat.
  * value `integer`: The raw "Investment" value for the stat, before transformations are performed to turn this raw stat into stats that are displayed in the game UI.

### Destiny.Definitions.DestinyItemObjectiveBlockDefinition
* Destiny.Definitions.DestinyItemObjectiveBlockDefinition `object`: An item can have objectives on it. In practice, these are the exclusive purview of "Quest Step" items: DestinyInventoryItemDefinitions that represent a specific step in a Quest.
  * displayActivityHashes `array`: For every entry in objectiveHashes, there is a corresponding entry in this array at the same index. If the objective is meant to be associated with a specific DestinyActivityDefinition, there will be a valid hash at that index. Otherwise, it will be invalid (0).
    * items `integer`
  * narrative `string`: The localized string for narrative text related to this quest step, if any.
  * objectiveHashes `array`: The hashes to Objectives (DestinyObjectiveDefinition) that are part of this Quest Step, in the order that they should be rendered.
    * items `integer`
  * objectiveVerbName `string`: The localized string describing an action to be performed associated with the objectives, if any.
  * questTypeHash `integer`: A hashed value for the questTypeIdentifier, because apparently I like to be redundant.
  * questTypeIdentifier `string`: The identifier for the type of quest being performed, if any. Not associated with any fixed definition, yet.
  * questlineItemHash `integer`: The hash for the DestinyInventoryItemDefinition representing the Quest to which this Quest Step belongs.
  * requireFullObjectiveCompletion `boolean`: If True, all objectives must be completed for the step to be completed. If False, any one objective can be completed for the step to be completed.

### Destiny.Definitions.DestinyItemPerkEntryDefinition
* Destiny.Definitions.DestinyItemPerkEntryDefinition `object`: An intrinsic perk on an item, and the requirements for it to be activated.
  * perkHash `integer`: A hash identifier for the DestinySandboxPerkDefinition being provided on the item.
  * requirementDisplayString `string`: If this perk is not active, this is the string to show for why it's not providing its benefits.

### Destiny.Definitions.DestinyItemPreviewBlockDefinition
* Destiny.Definitions.DestinyItemPreviewBlockDefinition `object`: Items like Sacks or Boxes can have items that it shows in-game when you view details that represent the items you can obtain if you use or acquire the item.
  * derivedItemCategories `array`: This is a list of the items being previewed, categorized in the same way as they are in the preview UI.
    * items [Destiny.Definitions.Items.DestinyDerivedItemCategoryDefinition](#destiny.definitions.items.destinyderiveditemcategorydefinition)
  * previewActionString `string`: If the preview has an associated action (like "Open"), this will be the localized string for that action.
  * previewVendorHash `integer`: If the preview data is derived from a fake "Preview" Vendor, this will be the hash identifier for the DestinyVendorDefinition of that fake vendor.

### Destiny.Definitions.DestinyItemQualityBlockDefinition
* Destiny.Definitions.DestinyItemQualityBlockDefinition `object`: An item's "Quality" determines its calculated stats. The Level at which the item spawns is combined with its "qualityLevel" along with some additional calculations to determine the value of those stats.
  * infusionCategoryHash `integer`: The hash identifier for the infusion. It does not map to a Definition entity.
  * infusionCategoryName `string`: The string identifier for this item's "infusability", if any. 
  * itemLevels `array`: The "base" defined level of an item. This is a list because, in theory, each Expansion could define its own base level for an item.
    * items `integer`
  * progressionLevelRequirementHash `integer`: An item can refer to pre-set level requirements. They are defined in DestinyProgressionLevelRequirementDefinition, and you can use this hash to find the appropriate definition.
  * qualityLevel `integer`: qualityLevel is used in combination with the item's level to calculate stats like Attack and Defense. It plays a role in that calculation, but not nearly as large as itemLevel does.

### Destiny.Definitions.DestinyItemSackBlockDefinition
* Destiny.Definitions.DestinyItemSackBlockDefinition `object`: Some items are "sacks" - they can be "opened" to produce other items. This is information related to its sack status, mostly UI strings. Engrams are an example of items that are considered to be "Sacks".
  * detailAction `string`: A description of what will happen when you open the sack. As far as I can tell, this is blank currently. Unknown whether it will eventually be populated with useful info.
  * openAction `string`: The localized name of the action being performed when you open the sack.
  * selectItemCount `integer`
  * vendorSackType `string`

### Destiny.Definitions.DestinyItemSetBlockDefinition
* Destiny.Definitions.DestinyItemSetBlockDefinition `object`: Primarily for Quests, this is the definition of properties related to the item if it is a quest and its various quest steps.
  * itemList `array`: A collection of hashes of set items, for items such as Quest Metadata items that possess this data.
    * items [Destiny.Definitions.DestinyItemSetBlockEntryDefinition](#destiny.definitions.destinyitemsetblockentrydefinition)
  * requireOrderedSetItemAdd `boolean`: If true, items in the set can only be added in increasing order, and adding an item will remove any previous item. For Quests, this is by necessity true. Only one quest step is present at a time, and previous steps are removed as you advance in the quest.
  * setIsFeatured `boolean`: If true, the UI should treat this quest as "featured"
  * setType `string`: A string identifier we can use to attempt to identify the category of the Quest.

### Destiny.Definitions.DestinyItemSetBlockEntryDefinition
* Destiny.Definitions.DestinyItemSetBlockEntryDefinition `object`: Defines a particular entry in an ItemSet (AKA a particular Quest Step in a Quest)
  * itemHash `integer`: This is the hash identifier for a DestinyInventoryItemDefinition representing this quest step.
  * trackingValue `integer`: Used for tracking which step a user reached. These values will be populated in the user's internal state, which we expose externally as a more usable DestinyQuestStatus object. If this item has been obtained, this value will be set in trackingUnlockValueHash.

### Destiny.Definitions.DestinyItemSocketBlockDefinition
* Destiny.Definitions.DestinyItemSocketBlockDefinition `object`: If defined, the item has at least one socket.
  * detail `string`: This was supposed to be a string that would give per-item details about sockets. In practice, it turns out that all this ever has is the localized word "details". ... that's lame, but perhaps it will become something cool in the future.
  * socketCategories `array`: A convenience property, that refers to the sockets in the "sockets" property, pre-grouped by category and ordered in the manner that they should be grouped in the UI. You could form this yourself with the existing data, but why would you want to? Enjoy life man.
    * items [Destiny.Definitions.DestinyItemSocketCategoryDefinition](#destiny.definitions.destinyitemsocketcategorydefinition)
  * socketEntries `array`: Each socket on an item is defined here. Check inside for more info.
    * items [Destiny.Definitions.DestinyItemSocketEntryDefinition](#destiny.definitions.destinyitemsocketentrydefinition)

### Destiny.Definitions.DestinyItemSocketCategoryDefinition
* Destiny.Definitions.DestinyItemSocketCategoryDefinition `object`: Sockets are grouped into categories in the UI. These define which category and which sockets are under that category.
  * socketCategoryHash `integer`: The hash for the Socket Category: a quick way to go get the header display information for the category. Use it to look up DestinySocketCategoryDefinition info.
  * socketIndexes `array`: Use these indexes to look up the sockets in the "sockets.socketEntries" property on the item definition. These are the indexes under the category, in game-rendered order.
    * items `integer`

### Destiny.Definitions.DestinyItemSocketEntryDefinition
* Destiny.Definitions.DestinyItemSocketEntryDefinition `object`: The definition information for a specific socket on an item. This will determine how the socket behaves in-game.
  * reusablePlugItems `array`: This is a list of pre-determined plugs that can *always* be plugged into this socket, without the character having the plug in their inventory.
    * items [Destiny.Definitions.DestinyItemSocketEntryPlugItemDefinition](#destiny.definitions.destinyitemsocketentryplugitemdefinition)
  * singleInitialItemHash `integer`: If a valid hash, this is the hash identifier for the DestinyInventoryItemDefinition representing the Plug that will be initially inserted into the item on item creation. Otherwise, this Socket will either start without a plug inserted, or will have one randomly inserted.
  * socketTypeHash `integer`: All sockets have a type, and this is the hash identifier for this particular type. Use it to look up the DestinySocketTypeDefinition: read there for more information on how socket types affect the behavior of the socket.

### Destiny.Definitions.DestinyItemSocketEntryPlugItemDefinition
* Destiny.Definitions.DestinyItemSocketEntryPlugItemDefinition `object`: The definition of a known, reusable plug that can be applied to a socket.
  * plugItemHash `integer`: The hash identifier of a DestinyInventoryItemDefinition representing the plug that can be inserted.

### Destiny.Definitions.DestinyItemSourceBlockDefinition
* Destiny.Definitions.DestinyItemSourceBlockDefinition `object`: Data about an item's "sources": ways that the item can be obtained.
  * exclusive `object`: If we found that this item is exclusive to a specific platform, this will be set to the BungieMembershipType enumeration that matches that platform.
  * sourceHashes `array`: The list of hash identifiers for Reward Sources that hint where the item can be found (DestinyRewardSourceDefinition).
    * items `integer`
  * sources `array`: A collection of details about the stats that were computed for the ways we found that the item could be spawned.
    * items [Destiny.Definitions.Sources.DestinyItemSourceDefinition](#destiny.definitions.sources.destinyitemsourcedefinition)

### Destiny.Definitions.DestinyItemStatBlockDefinition
* Destiny.Definitions.DestinyItemStatBlockDefinition `object`: Information about the item's calculated stats, with as much data as we can find for the stats without having an actual instance of the item.
  * hasDisplayableStats `boolean`: A quick and lazy way to determine whether any stat other than the "primary" stat is actually visible on the item. Items often have stats that we return in case people find them useful, but they're not part of the "Stat Group" and thus we wouldn't display them in our UI. If this is False, then we're not going to display any of these stats other than the primary one.
  * primaryBaseStatHash `integer`: This stat is determined to be the "primary" stat, and can be looked up in the stats or any other stat collection related to the item.
  * statGroupHash `integer`: If the item's stats are meant to be modified by a DestinyStatGroupDefinition, this will be the identifier for that definition.
  * stats `object`: If you are looking for precomputed values for the stats on a weapon, this is where they are stored. Technically these are the "Display" stat values. Please see DestinyStatsDefinition for what Display Stat Values means, it's a very long story... but essentially these are the closest values BNet can get to the item stats that you see in-game.

### Destiny.Definitions.DestinyItemSummaryBlockDefinition
* Destiny.Definitions.DestinyItemSummaryBlockDefinition `object`: This appears to be information used when rendering rewards. We don't currently use it on BNet.
  * sortPriority `integer`: Apparently when rendering an item in a reward, this should be used as a sort priority. We're not doing it presently.

### Destiny.Definitions.DestinyItemTalentGridBlockDefinition
* Destiny.Definitions.DestinyItemTalentGridBlockDefinition `object`: This defines information that can only come from a talent grid on an item. Items mostly have negligible talent grid data these days, but instanced items still retain grids as a source for some of this common information.
  * buildName `string`: A shortcut string identifier for the "build" in question, if this talent grid has an associated build. Doesn't map to anything we can expose at the moment.
  * hudDamageType `object`: If the talent grid implies a damage type, this is the enum value for that damage type.
  * hudIcon `string`: If the talent grid has a special icon that's shown in the game UI (like builds, funny that), this is the identifier for that icon. Sadly, we don't actually get that icon right now. I'll be looking to replace this with a path to the actual icon itself.
  * itemDetailString `string`: This is meant to be a subtitle for looking at the talent grid. In practice, somewhat frustratingly, this always merely says the localized word for "Details". Great. Maybe it'll have more if talent grids ever get used for more than builds and subclasses again.
  * talentGridHash `integer`: The hash identifier of the DestinyTalentGridDefinition attached to this item.

### Destiny.Definitions.DestinyItemTranslationBlockDefinition
* Destiny.Definitions.DestinyItemTranslationBlockDefinition `object`: This Block defines the rendering data associated with the item, if any.
  * arrangements `array`
    * items [Destiny.Definitions.DestinyGearArtArrangementReference](#destiny.definitions.destinygearartarrangementreference)
  * customDyes `array`
    * items [Destiny.DyeReference](#destiny.dyereference)
  * defaultDyes `array`
    * items [Destiny.DyeReference](#destiny.dyereference)
  * hasGeometry `boolean`
  * lockedDyes `array`
    * items [Destiny.DyeReference](#destiny.dyereference)
  * weaponPatternHash `integer`
  * weaponPatternIdentifier `string`

### Destiny.Definitions.DestinyItemValueBlockDefinition
* Destiny.Definitions.DestinyItemValueBlockDefinition `object`: This defines an item's "Value". Unfortunately, this appears to be used in different ways depending on the way that the item itself is used.
  * itemValue `array`: References to the items that make up this item's "value", and the quantity.
    * items [Destiny.DestinyItemQuantity](#destiny.destinyitemquantity)
  * valueDescription `string`: If there's a localized text description of the value provided, this will be said description.

### Destiny.Definitions.DestinyLocationDefinition
* Destiny.Definitions.DestinyLocationDefinition `object`: A "Location" is a sort of shortcut for referring to a specific combination of Activity, Destination, Place, and even Bubble or NavPoint within a space.
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * locationReleases `array`: A Location may refer to different specific spots in the world based on the world's current state. This is a list of those potential spots, and the data we can use at runtime to determine which one of the spots is the currently valid one.
    * items [Destiny.Definitions.DestinyLocationReleaseDefinition](#destiny.definitions.destinylocationreleasedefinition)
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
  * vendorHash `integer`: If the location has a Vendor on it, this is the hash identifier for that Vendor. Look them up with DestinyVendorDefinition.

### Destiny.Definitions.DestinyLocationReleaseDefinition
* Destiny.Definitions.DestinyLocationReleaseDefinition `object`: A specific "spot" referred to by a location. Only one of these can be active at a time for a given Location.
  * activityBubbleName `integer`: The Activity Bubble within the Destination. Look this up in the DestinyDestinationDefinition's bubbles and bubbleSettings properties.
  * activityGraphHash `integer`: The Activity Graph being pointed to by this location.
  * activityGraphNodeHash `integer`: The Activity Graph Node being pointed to by this location. (Remember that Activity Graph Node hashes are only unique within an Activity Graph: so use the combination to find the node being spoken of)
  * activityHash `integer`: The Activity being pointed to by this location.
  * activityPathBundle `integer`: If we had map information, this would tell us something cool about the path this location wants you to take. I wish we had map information.
  * activityPathDestination `integer`: If we had map information, this would tell us about path information related to destination on the map. Sad. Maybe you can do something cool with it. Go to town man.
  * destinationHash `integer`: The Destination being pointed to by this location.
  * displayProperties `object`: Sadly, these don't appear to be populated anymore (ever?)
    * description `string`
    * hasIcon `boolean`
    * icon `string`: Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
    * name `string`
  * navPointType `object`: The type of Nav Point that this represents. See the enumeration for more info.
  * spawnPoint `integer`: If we had map information, this spawnPoint would be interesting. But sadly, we don't have that info.
  * worldPosition `array`: Looks like it should be the position on the map, but sadly it does not look populated... yet?
    * items `integer`

### Destiny.Definitions.DestinyMaterialRequirement
* Destiny.Definitions.DestinyMaterialRequirement `object`: Many actions relating to items require you to expend materials: - Activating a talent node - Inserting a plug into a socket The items will refer to material requirements by a materialRequirementsHash in these cases, and this is the definition for those requirements in terms of the item required, how much of it is required and other interesting info. This is one of the rare/strange times where a single contract class is used both in definitions *and* in live data response contracts. I'm not sure yet whether I regret that.
  * count `integer`: The amount of the material required.
  * deleteOnAction `boolean`: If True, the material will be removed from the character's inventory when the action is performed.
  * itemHash `integer`: The hash identifier of the material required. Use it to look up the material's DestinyInventoryItemDefinition.
  * omitFromRequirements `boolean`: If True, this requirement is "silent": don't bother showing it in a material requirements display. I mean, I'm not your mom: I'm not going to tell you you *can't* show it. But we won't show it in our UI.

### Destiny.Definitions.DestinyMaterialRequirementSetDefinition
* Destiny.Definitions.DestinyMaterialRequirementSetDefinition `object`: Represent a set of material requirements: Items that either need to be owned or need to be consumed in order to perform an action.
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * materials `array`: The list of all materials that are required.
    * items [Destiny.Definitions.DestinyMaterialRequirement](#destiny.definitions.destinymaterialrequirement)
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

### Destiny.Definitions.DestinyNodeActivationRequirement
* Destiny.Definitions.DestinyNodeActivationRequirement `object`: Talent nodes have requirements that must be met before they can be activated.
  * gridLevel `integer`: The Progression level on the Talent Grid required to activate this node.
  * materialRequirementHashes `array`: The list of hash identifiers for material requirement sets: materials that are required for the node to be activated. See DestinyMaterialRequirementSetDefinition for more information about material requirements.
    * items `integer`

### Destiny.Definitions.DestinyNodeSocketReplaceResponse
* Destiny.Definitions.DestinyNodeSocketReplaceResponse `object`: This is a bit of an odd duck. Apparently, if talent nodes steps have this data, the game will go through on step activation and alter the first Socket it finds on the item that has a type matching the given socket type, inserting the indicated plug item.
  * plugItemHash `integer`: The hash identifier of the plug item that will be inserted into the socket found.
  * socketTypeHash `integer`: The hash identifier of the socket type to find amidst the item's sockets (the item to which this talent grid is attached). See DestinyInventoryItemDefinition.sockets.socketEntries to find the socket type of sockets on the item in question.

### Destiny.Definitions.DestinyNodeStepDefinition
* Destiny.Definitions.DestinyNodeStepDefinition `object`: This defines the properties of a "Talent Node Step". When you see a talent node in game, the actual visible properties that you see (its icon, description, the perks and stats it provides) are not provided by the Node itself, but rather by the currently active Step on the node.
  * activationRequirement `object`: If the step has requirements for activation (they almost always do, if nothing else than for the Talent Grid's Progression to have reached a certain level), they will be defined here.
    * gridLevel `integer`: The Progression level on the Talent Grid required to activate this node.
    * materialRequirementHashes `array`: The list of hash identifiers for material requirement sets: materials that are required for the node to be activated. See DestinyMaterialRequirementSetDefinition for more information about material requirements.
      * items `integer`
  * affectsLevel `boolean`: If true, this step can affect the level of the item. See DestinyInventoryItemDefintion for more information about item levels and their effect on stats.
  * affectsQuality `boolean`: If this is true, the step affects the item's Quality in some way. See DestinyInventoryItemDefinition for more information about the meaning of Quality. I already made a joke about Zen and the Art of Motorcycle Maintenance elsewhere in the documentation, so I will avoid doing it again. Oops too late
  * canActivateNextStep `boolean`: There was a time when talent nodes could be activated multiple times, and the effects of subsequent Steps would be compounded on each other, essentially "upgrading" the node. We have moved away from this, but theoretically the capability still exists.
  * damageType `object`: An enum representing a damage type granted by activating this step, if any.
  * damageTypeHash `integer`: If the step provides a damage type, this will be the hash identifier used to look up the damage type's DestinyDamageTypeDefinition.
  * displayProperties `object`: These are the display properties actually used to render the Talent Node. The currently active step's displayProperties are shown.
    * description `string`
    * hasIcon `boolean`
    * icon `string`: Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
    * name `string`
  * interactionDescription `string`: If you can interact with this node in some way, this is the localized description of that interaction.
  * isNextStepRandom `boolean`: If true, the next step to be chosen is random, and if you're allowed to activate the next step. (if canActivateNextStep = true)
  * nextStepIndex `integer`: The stepIndex of the next step in the talent node, or -1 if this is the last step or if the next step to be chosen is random.
  * nodeStepHash `integer`: The hash of this node step. Unfortunately, while it can be used to uniquely identify the step within a node, it is also content version dependent and should not be relied on without ensuring you have the latest vesion of content.
  * perkHashes `array`: The list of hash identifiers for Perks (DestinySandboxPerkDefinition) that are applied when this step is active. Perks provide a variety of benefits and modifications - examine DestinySandboxPerkDefinition to learn more.
    * items `integer`
  * socketReplacements `array`: If this step is activated, this will be a list of information used to replace socket items with new Plugs. See DestinyInventoryItemDefinition for more information about sockets and plugs.
    * items [Destiny.Definitions.DestinyNodeSocketReplaceResponse](#destiny.definitions.destinynodesocketreplaceresponse)
  * startProgressionBarAtProgress `integer`: When the Talent Grid's progression reaches this value, the circular "progress bar" that surrounds the talent node should be shown.
  * statHashes `array`: When the step provides stat benefits on the item or character, this is the list of hash identifiers for stats (DestinyStatDefinition) that are provided.
    * items `integer`
  * stepGroups `object`: In Destiny 1, the Armory's Perk Filtering was driven by a concept of TalentNodeStepGroups: categorizations of talent nodes based on their functionality. While the Armory isn't a BNet-facing thing for now, and the new Armory will need to account for Sockets rather than Talent Nodes, this categorization capability feels useful enough to still keep around.
    * damageTypes [Destiny.Definitions.DestinyTalentNodeStepDamageTypes](#destiny.definitions.destinytalentnodestepdamagetypes)
    * guardianAttributes [Destiny.Definitions.DestinyTalentNodeStepGuardianAttributes](#destiny.definitions.destinytalentnodestepguardianattributes)
    * impactEffects [Destiny.Definitions.DestinyTalentNodeStepImpactEffects](#destiny.definitions.destinytalentnodestepimpacteffects)
    * lightAbilities [Destiny.Definitions.DestinyTalentNodeStepLightAbilities](#destiny.definitions.destinytalentnodesteplightabilities)
    * weaponPerformance [Destiny.Definitions.DestinyTalentNodeStepWeaponPerformances](#destiny.definitions.destinytalentnodestepweaponperformances)
  * stepIndex `integer`: The index of this step in the list of Steps on the Talent Node.

### Destiny.Definitions.DestinyObjectiveDefinition
* Destiny.Definitions.DestinyObjectiveDefinition `object`: Defines an "Objective".
  * allowNegativeValue `boolean`: If true, the value is allowed to go negative.
  * allowValueChangeWhenCompleted `boolean`: If true, you can effectively "un-complete" this objective if you lose progress after crossing the completion threshold. 
  * completionValue `integer`: The value that the unlock value defined in unlockValueHash must reach in order for the objective to be considered Completed. Used in calculating progress and completion status.
  * displayProperties `object`: Ideally, this should tell you what your task is. I'm not going to lie to you though. Sometimes this doesn't have useful information at all. Which sucks, but there's nothing either of us can do about it.
    * description `string`
    * hasIcon `boolean`
    * icon `string`: Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
    * name `string`
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * isCountingDownward `boolean`: If true, completion means having an unlock value less than or equal to the completionValue.
  * locationHash `integer`: OPTIONAL: a hash identifier for the location at which this objective must be accomplished, if there is a location defined. Look up the DestinyLocationDefinition for this hash for that additional location info.
  * perks `object`: If this objective enables Perks intrinsically, the conditions for that enabling are defined here.
    * perkHash `integer`: The hash identifier of the DestinySandboxPerkDefinition that will be applied to the character.
    * style `object`: An enumeration indicating whether it will be applied as long as the Objective is active, when it's completed, or until it's completed.
  * progressDescription `string`: Text to describe the progress bar.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
  * stats `object`: If this objective enables modifications on a player's stats intrinsically, the conditions are defined here.
    * stat `object`: The stat being modified, and the value used.
      * statTypeHash `integer`: The hash identifier for the DestinyStatDefinition defining this stat.
      * value `integer`: The raw "Investment" value for the stat, before transformations are performed to turn this raw stat into stats that are displayed in the game UI.
    * style `object`: Whether it will be applied as long as the objective is active, when it's completed, or until it's completed.
  * valueStyle `object`: The UI style applied to the objective. It's an enum, take a look at DestinyUnlockValueUIStyle for details of the possible styles. Use this info as you wish to customize your UI.

### Destiny.Definitions.DestinyObjectivePerkEntryDefinition
* Destiny.Definitions.DestinyObjectivePerkEntryDefinition `object`: Defines the conditions under which an intrinsic perk is applied while participating in an Objective.
  * perkHash `integer`: The hash identifier of the DestinySandboxPerkDefinition that will be applied to the character.
  * style `object`: An enumeration indicating whether it will be applied as long as the Objective is active, when it's completed, or until it's completed.

### Destiny.Definitions.DestinyObjectiveStatEntryDefinition
* Destiny.Definitions.DestinyObjectiveStatEntryDefinition `object`: Defines the conditions under which stat modifications will be applied to a Character while participating in an objective.
  * stat `object`: The stat being modified, and the value used.
    * statTypeHash `integer`: The hash identifier for the DestinyStatDefinition defining this stat.
    * value `integer`: The raw "Investment" value for the stat, before transformations are performed to turn this raw stat into stats that are displayed in the game UI.
  * style `object`: Whether it will be applied as long as the objective is active, when it's completed, or until it's completed.

### Destiny.Definitions.DestinyPlaceDefinition
* Destiny.Definitions.DestinyPlaceDefinition `object`: Okay, so Activities (DestinyActivityDefinition) take place in Destinations (DestinyDestinationDefinition). Destinations are part of larger locations known as Places (you're reading its documentation right now).
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

### Destiny.Definitions.DestinyProgressionDefinition
* Destiny.Definitions.DestinyProgressionDefinition `object`: A "Progression" in Destiny is best explained by an example.
  * displayProperties [Destiny.Definitions.DestinyProgressionDisplayPropertiesDefinition](#destiny.definitions.destinyprogressiondisplaypropertiesdefinition)
  * factionHash `integer`: If the value exists, this is the hash identifier for the Faction that owns this Progression.
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
  * repeatLastStep `boolean`: If this is True, then the progression doesn't have a maximum level.
  * scope `object`: The "Scope" of the progression indicates the source of the progression's live data.
  * source `string`: If there's a description of how to earn this progression in the local config, this will be that localized description.
  * steps `array`: Progressions are divided into Steps, which roughly equate to "Levels" in the traditional sense of a Progression. Notably, the last step can be repeated indefinitely if repeatLastStep is true, meaning that the calculation for your level is not as simple as comparing your current progress to the max progress of the steps. 
    * items [Destiny.Definitions.DestinyProgressionStepDefinition](#destiny.definitions.destinyprogressionstepdefinition)
  * visible `boolean`: If true, the Progression is something worth showing to users.

### Destiny.Definitions.DestinyProgressionDisplayPropertiesDefinition
* Destiny.Definitions.DestinyProgressionDisplayPropertiesDefinition `object`
  * description `string`
  * displayUnitsName `string`: When progressions show your "experience" gained, that bar has units (i.e. "Experience", "Bad Dudes Snuffed Out", whatever). This is the localized string for that unit of measurement.
  * hasIcon `boolean`
  * icon `string`: Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
  * name `string`

### Destiny.Definitions.DestinyProgressionMappingDefinition
* Destiny.Definitions.DestinyProgressionMappingDefinition `object`: Aggregations of multiple progressions.
  * displayProperties `object`: Infrequently defined in practice. Defer to the individual progressions' display properties.
    * description `string`
    * hasIcon `boolean`
    * icon `string`: Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
    * name `string`
  * displayUnits `string`: The localized unit of measurement for progression across the progressions defined in this mapping. Unfortunately, this is very infrequently defined. Defer to the individual progressions' display units.
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

### Destiny.Definitions.DestinyProgressionRewardDefinition
* Destiny.Definitions.DestinyProgressionRewardDefinition `object`: Inventory Items can reward progression when actions are performed on them. A common example of this in Destiny 1 was Bounties, which would reward Experience on your Character and the like when you completed the bounty.
  * amount `integer`: The amount of experience to give to each of the mapped progressions.
  * applyThrottles `boolean`: If true, the game's internal mechanisms to throttle progression should be applied.
  * progressionMappingHash `integer`: The hash identifier of the DestinyProgressionMappingDefinition that contains the progressions for which experience should be applied.

### Destiny.Definitions.DestinyProgressionStepDefinition
* Destiny.Definitions.DestinyProgressionStepDefinition `object`: This defines a single Step in a progression (which roughly equates to a level. See DestinyProgressionDefinition for caveats).
  * displayEffectType `object`: This appears to be, when you "level up", whether a visual effect will display and on what entity. See DestinyProgressionStepDisplayEffect for slightly more info.
  * progressTotal `integer`: The total amount of progression points/"experience" you will need to initially reach this step. If this is the last step and the progression is repeating indefinitely (DestinyProgressionDefinition.repeatLastStep), this will also be the progress needed to level it up further by repeating this step again.
  * rewardItems `array`: A listing of items rewarded as a result of reaching this level.
    * items [Destiny.DestinyItemQuantity](#destiny.destinyitemquantity)
  * stepName `string`: Very rarely, Progressions will have localized text describing the Level of the progression. This will be that localized text, if it exists. Otherwise, the standard appears to be to simply show the level numerically.

### Destiny.Definitions.DestinyRaceDefinition
* Destiny.Definitions.DestinyRaceDefinition `object`: In Destiny, "Races" are really more like "Species". Sort of. I mean, are the Awoken a separate species from humans? I'm not sure. But either way, they're defined here. You'll see Exo, Awoken, and Human as examples of these Species. Players will choose one for their character.
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)
  * genderedRaceNames `object`: A localized string referring to the singular form of the Race's name when referred to in gendered form. Keyed by the DestinyGender.
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * raceType `object`: An enumeration defining the existing, known Races/Species for player characters. This value will be the enum value matching this definition.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

### Destiny.Definitions.DestinyRewardSourceCategory
* Destiny.Definitions.DestinyRewardSourceCategory `integer` (values: 0, 1, 2, 3): BNet's custom categorization of reward sources. We took a look at the existing ways that items could be spawned, and tried to make high-level categorizations of them. This needs to be re-evaluated for Destiny 2.

### Destiny.Definitions.DestinyRewardSourceDefinition
* Destiny.Definitions.DestinyRewardSourceDefinition `object`: Represents a heuristically-determined "item source" according to Bungie.net. These item sources are non-canonical: we apply a combination of special configuration and often-fragile heuristics to attempt to discern whether an item should be part of a given "source," but we have known cases of false positives and negatives due to our imperfect heuristics.
  * category `object`: Sources are grouped into categories: common ways that items are provided. I hope to see this expand in Destiny 2 once we have time to generate accurate reward source data.
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

### Destiny.Definitions.DestinySandboxPerkDefinition
* Destiny.Definitions.DestinySandboxPerkDefinition `object`: Perks are modifiers to a character or item that can be applied situationally.
  * damageType `object`: If this perk grants a damage type to a weapon, the damage type will be defined here.
  * damageTypeHash `integer`: The hash identifier for looking up the DestinyDamageTypeDefinition, if this perk has a damage type.
  * displayProperties `object`: These display properties are by no means guaranteed to be populated. Usually when it is, it's only because we back-filled them with the displayProperties of some Talent Node or Plug item that happened to be uniquely providing that perk.
    * description `string`
    * hasIcon `boolean`
    * icon `string`: Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
    * name `string`
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * isDisplayable `boolean`: If true, you can actually show the perk in the UI. Otherwise, it doesn't have useful player-facing information.
  * perkGroups `object`: An old holdover from the original Armory, this was an attempt to group perks by functionality.
    * damageTypes [Destiny.Definitions.DestinyTalentNodeStepDamageTypes](#destiny.definitions.destinytalentnodestepdamagetypes)
    * guardianAttributes [Destiny.Definitions.DestinyTalentNodeStepGuardianAttributes](#destiny.definitions.destinytalentnodestepguardianattributes)
    * impactEffects [Destiny.Definitions.DestinyTalentNodeStepImpactEffects](#destiny.definitions.destinytalentnodestepimpacteffects)
    * lightAbilities [Destiny.Definitions.DestinyTalentNodeStepLightAbilities](#destiny.definitions.destinytalentnodesteplightabilities)
    * weaponPerformance [Destiny.Definitions.DestinyTalentNodeStepWeaponPerformances](#destiny.definitions.destinytalentnodestepweaponperformances)
  * perkIdentifier `string`: The string identifier for the perk.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

### Destiny.Definitions.DestinyStatDefinition
* Destiny.Definitions.DestinyStatDefinition `object`: This represents a stat that's applied to a character or an item (such as a weapon, piece of armor, or a vehicle).
  * aggregationType `object`: Stats can exist on a character or an item, and they may potentially be aggregated in different ways. The DestinyStatAggregationType enum value indicates the way that this stat is being aggregated.
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)
  * hasComputedBlock `boolean`: True if the stat is computed rather than being delivered as a raw value on items.
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

### Destiny.Definitions.DestinyStatDisplayDefinition
* Destiny.Definitions.DestinyStatDisplayDefinition `object`: Describes the way that an Item Stat (see DestinyStatDefinition) is transformed using the DestinyStatGroupDefinition related to that item. See both of the aforementioned definitions for more information about the stages of stat transformation.
  * displayAsNumeric `boolean`: If this is true, the stat should be displayed as a number. Otherwise, display it as a progress bar. Or, you know, do whatever you want. There's no displayAsNumeric police.
  * displayInterpolation `array`: The interpolation table representing how the Investment Stat is transformed into a Display Stat. 
    * items [Interpolation.InterpolationPoint](#interpolation.interpolationpoint)
  * maximumValue `integer`: Regardless of the output of interpolation, this is the maximum possible value that the stat can be. It should also be used as the upper bound for displaying the stat as a progress bar (the minimum always being 0)
  * statHash `integer`: The hash identifier for the stat being transformed into a Display stat.

### Destiny.Definitions.DestinyStatGroupDefinition
* Destiny.Definitions.DestinyStatGroupDefinition `object`: When an inventory item (DestinyInventoryItemDefinition) has Stats (such as Attack Power), the item will refer to a Stat Group. This definition enumerates the properties used to transform the item's "Investment" stats into "Display" stats.
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * maximumValue `integer`: The maximum possible value that any stat in this group can be transformed into.
  * overrides `object`: The game has the ability to override, based on the stat group, what the localized text is that is displayed for Stats being shown on the item.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
  * scaledStats `array`: Any stat that requires scaling to be transformed from an "Investment" stat to a "Display" stat will have an entry in this list. For more information on what those types of stats mean and the transformation process, see DestinyStatDefinition.
    * items [Destiny.Definitions.DestinyStatDisplayDefinition](#destiny.definitions.destinystatdisplaydefinition)
  * uiPosition `integer`: This apparently indicates the position of the stats in the UI? I've returned it in case anyone can use it, but it's not of any use to us on BNet. Something's being lost in translation with this value.

### Destiny.Definitions.DestinyStatOverrideDefinition
* Destiny.Definitions.DestinyStatOverrideDefinition `object`: Stat Groups (DestinyStatGroupDefinition) has the ability to override the localized text associated with stats that are to be shown on the items with which they are associated.
  * displayProperties `object`: The display properties to show instead of the base DestinyStatDefinition display properties.
    * description `string`
    * hasIcon `boolean`
    * icon `string`: Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
    * name `string`
  * statHash `integer`: The hash identifier of the stat whose display properties are being overridden.

### Destiny.Definitions.DestinyTalentExclusiveGroup
* Destiny.Definitions.DestinyTalentExclusiveGroup `object`: As of Destiny 2, nodes can exist as part of "Exclusive Groups". These differ from exclusive sets in that, within the group, many nodes can be activated. But the act of activating any node in the group will cause "opposing" nodes (nodes in groups that are not allowed to be activated at the same time as this group) to deactivate.
  * groupHash `integer`: The identifier for this exclusive group. Only guaranteed unique within the talent grid, not globally.
  * loreHash `integer`: If this group has an associated piece of lore to show next to it, this will be the identifier for that DestinyLoreDefinition.
  * nodeHashes `array`: A quick reference of the talent nodes that are part of this group, by their Talent Node hashes. (See DestinyTalentNodeDefinition.nodeHash)
    * items `integer`
  * opposingGroupHashes `array`: A quick reference of Groups whose nodes will be deactivated if any node in this group is activated.
    * items `integer`
  * opposingNodeHashes `array`: A quick reference of Nodes that will be deactivated if any node in this group is activated, by their Talent Node hashes. (See DestinyTalentNodeDefinition.nodeHash)
    * items `integer`

### Destiny.Definitions.DestinyTalentGridDefinition
* Destiny.Definitions.DestinyTalentGridDefinition `object`: The time has unfortunately come to talk about Talent Grids.
  * exclusiveSets `array`: Talent Nodes can exist in "exclusive sets": these are sets of nodes in which only a single node in the set can be activated at any given time. Activating a node in this set will automatically deactivate the other nodes in the set (referred to as a "Swap").
    * items [Destiny.Definitions.DestinyTalentNodeExclusiveSetDefinition](#destiny.definitions.destinytalentnodeexclusivesetdefinition)
  * gridLevelPerColumn `integer`: The meaning of this has been lost in the sands of time: it still exists as a property, but appears to be unused in the modern UI of talent grids. It used to imply that each visual "column" of talent nodes required identical progression levels in order to be activated. Returning this value in case it is still useful to someone? Perhaps it's just a bit of interesting history.
  * groups `object`: Talent Nodes can have "Exclusive Groups". These are not to be confused with Exclusive Sets (see exclusiveSets property).
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * independentNodeIndexes `array`: This is a quick reference to the indexes of nodes that are not part of exclusive sets. Handy for knowing which talent nodes can only be activated directly, rather than via swapping.
    * items `integer`
  * index `integer`: The index of the entity as it was found in the investment tables.
  * maxGridLevel `integer`: The maximum possible level of the Talent Grid: at this level, any nodes are allowed to be activated.
  * nodeCategories `array`: BNet wants to show talent nodes grouped by similar purpose with localized titles. This is the ordered list of those categories: if you want to show nodes by category, you can iterate over this list, render the displayProperties for the category as the title, and then iterate over the talent nodes referenced by the category to show the related nodes.
    * items [Destiny.Definitions.DestinyTalentNodeCategory](#destiny.definitions.destinytalentnodecategory)
  * nodes `array`: The list of Talent Nodes on the Grid (recall that Nodes themselves are really just locations in the UI to show whatever their current Step is. You will only know the current step for a node by retrieving instanced data through platform calls to the API that return DestinyItemTalentGridComponent).
    * items [Destiny.Definitions.DestinyTalentNodeDefinition](#destiny.definitions.destinytalentnodedefinition)
  * progressionHash `integer`: The hash identifier of the Progression (DestinyProgressionDefinition) that drives whether and when Talent Nodes can be activated on the Grid. Items will have instances of this Progression, and will gain experience that will eventually cause the grid to increase in level. As the grid's level increases, it will cross the threshold where nodes can be activated. See DestinyTalentGridStepDefinition's activation requirements for more information.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

### Destiny.Definitions.DestinyTalentNodeCategory
* Destiny.Definitions.DestinyTalentNodeCategory `object`: An artificial construct provided by Bungie.Net, where we attempt to group talent nodes by functionality.
  * displayProperties `object`: Will contain at least the "name", which will be the title of the category. We will likely not have description and an icon yet, but I'm going to keep my options open.
    * description `string`
    * hasIcon `boolean`
    * icon `string`: Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
    * name `string`
  * identifier `string`: Mostly just for debug purposes, but if you find it useful you can have it. This is BNet's manually created identifier for this category.
  * isLoreDriven `boolean`: If true, we found the localized content in a related DestinyLoreDefinition instead of local BNet localization files. This is mostly for ease of my own future investigations.
  * nodeHashes `array`: The set of all hash identifiers for Talent Nodes (DestinyTalentNodeDefinition) in this Talent Grid that are part of this Category.
    * items `integer`

### Destiny.Definitions.DestinyTalentNodeDefinition
* Destiny.Definitions.DestinyTalentNodeDefinition `object`: Talent Grids on items have Nodes. These nodes have positions in the talent grid's UI, and contain "Steps" (DestinyTalentNodeStepDefinition), one of whom will be the "Current" step.
  * autoUnlocks `boolean`: If true, this node will automatically unlock when the Talent Grid's level reaches the required level of the current step of this node.
  * binaryPairNodeIndex `integer`: At one point, Talent Nodes supported the idea of "Binary Pairs": nodes that overlapped each other visually, and where activating one deactivated the other. They ended up not being used, mostly because Exclusive Sets are *almost* a superset of this concept, but the potential for it to be used still exists in theory.
  * column `integer`: The visual "column" where the node should be shown in the UI. If negative, the node is hidden.
  * exclusiveWithNodeHashes `array`: The nodeHash values for nodes that are in an Exclusive Set with this node.
    * items `integer`
  * groupHash `integer`: As of Destiny 2, nodes can exist as part of "Exclusive Groups". These differ from exclusive sets in that, within the group, many nodes can be activated. But the act of activating any node in the group will cause "opposing" nodes (nodes in groups that are not allowed to be activated at the same time as this group) to deactivate.
  * ignoreForCompletion `boolean`: Comes from the talent grid node style: if true, then this node should be ignored for determining whether the grid is complete.
  * isRandom `boolean`: If this is true, the node's step is determined randomly rather than the first step being chosen.
  * isRandomRepurchasable `boolean`: If this is true, the node can be "re-rolled" to acquire a different random current step. This is not used, but still exists for a theoretical future of talent grids.
  * lastStepRepeats `boolean`: At one point, Nodes were going to be able to be activated multiple times, changing the current step and potentially piling on multiple effects from the previously activated steps. This property would indicate if the last step could be activated multiple times. 
  * layoutIdentifier `string`: A string identifier for a custom visual layout to apply to this talent node. Unfortunately, we do not have any data for rendering these custom layouts. It will be up to you to interpret these strings and change your UI if you want to have custom UI matching these layouts.
  * loreHash `integer`: Talent nodes can be associated with a piece of Lore, generally rendered in a tooltip. This is the hash identifier of the lore element to show, if there is one to be show.
  * nodeHash `integer`: The hash identifier for the node, which unfortunately is also content version dependent but can be (and ideally, should be) used instead of the nodeIndex to uniquely identify the node.
  * nodeIndex `integer`: The index into the DestinyTalentGridDefinition's "nodes" property where this node is located. Used to uniquely identify the node within the Talent Grid. Note that this is content version dependent: make sure you have the latest version of content before trying to use these properties.
  * nodeStyleIdentifier `string`: Comes from the talent grid node style: this identifier should be used to determine how to render the node in the UI.
  * prerequisiteNodeIndexes `array`: Indexes into the DestinyTalentGridDefinition.nodes property for any nodes that must be activated before this one is allowed to be activated.
    * items `integer`
  * randomActivationRequirement `object`: At one point, you were going to be able to repurchase talent nodes that had random steps, to "re-roll" the current step of the node (and thus change the properties of your item). This was to be the activation requirement for performing that re-roll.
    * gridLevel `integer`: The Progression level on the Talent Grid required to activate this node.
    * materialRequirementHashes `array`: The list of hash identifiers for material requirement sets: materials that are required for the node to be activated. See DestinyMaterialRequirementSetDefinition for more information about material requirements.
      * items `integer`
  * randomStartProgressionBarAtProgression `integer`: If the node's step is randomly selected, this is the amount of the Talent Grid's progression experience at which the progression bar for the node should be shown.
  * row `integer`: The visual "row" where the node should be shown in the UI. If negative, then the node is hidden.
  * steps `array`: At this point, "steps" have been obfuscated into conceptual entities, aggregating the underlying notions of "properties" and "true steps".
    * items [Destiny.Definitions.DestinyNodeStepDefinition](#destiny.definitions.destinynodestepdefinition)

### Destiny.Definitions.DestinyTalentNodeExclusiveSetDefinition
* Destiny.Definitions.DestinyTalentNodeExclusiveSetDefinition `object`: The list of indexes into the Talent Grid's "nodes" property for nodes in this exclusive set. (See DestinyTalentNodeDefinition.nodeIndex)
  * nodeIndexes `array`: The list of node indexes for the exclusive set. Historically, these were indexes. I would have liked to replace this with nodeHashes for consistency, but it's way too late for that. (9:09 PM, he's right!)
    * items `integer`

### Destiny.Definitions.DestinyTalentNodeStepDamageTypes
* Destiny.Definitions.DestinyTalentNodeStepDamageTypes `integer` (values: 0, 1, 2, 4, 8, 15)

### Destiny.Definitions.DestinyTalentNodeStepGroups
* Destiny.Definitions.DestinyTalentNodeStepGroups `object`: These properties are an attempt to categorize talent node steps by certain common properties. See the related enumerations for the type of properties being categorized.
  * damageTypes [Destiny.Definitions.DestinyTalentNodeStepDamageTypes](#destiny.definitions.destinytalentnodestepdamagetypes)
  * guardianAttributes [Destiny.Definitions.DestinyTalentNodeStepGuardianAttributes](#destiny.definitions.destinytalentnodestepguardianattributes)
  * impactEffects [Destiny.Definitions.DestinyTalentNodeStepImpactEffects](#destiny.definitions.destinytalentnodestepimpacteffects)
  * lightAbilities [Destiny.Definitions.DestinyTalentNodeStepLightAbilities](#destiny.definitions.destinytalentnodesteplightabilities)
  * weaponPerformance [Destiny.Definitions.DestinyTalentNodeStepWeaponPerformances](#destiny.definitions.destinytalentnodestepweaponperformances)

### Destiny.Definitions.DestinyTalentNodeStepGuardianAttributes
* Destiny.Definitions.DestinyTalentNodeStepGuardianAttributes `integer` (values: 0, 1, 2, 4, 8, 16, 32, 64, 128, 255)

### Destiny.Definitions.DestinyTalentNodeStepImpactEffects
* Destiny.Definitions.DestinyTalentNodeStepImpactEffects `integer` (values: 0, 1, 2, 4, 8, 16, 32, 63)

### Destiny.Definitions.DestinyTalentNodeStepLightAbilities
* Destiny.Definitions.DestinyTalentNodeStepLightAbilities `integer` (values: 0, 1, 2, 4, 8, 16, 32, 63)

### Destiny.Definitions.DestinyTalentNodeStepWeaponPerformances
* Destiny.Definitions.DestinyTalentNodeStepWeaponPerformances `integer` (values: 0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8191)

### Destiny.Definitions.DestinyUnlockDefinition
* Destiny.Definitions.DestinyUnlockDefinition `object`: Unlock Flags are small bits (literally, a bit, as in a boolean value) that the game server uses for an extremely wide range of state checks, progress storage, and other interesting tidbits of information.
  * displayProperties `object`: Sometimes, but not frequently, these unlock flags also have human readable information: usually when they are being directly tested for some requirement, in which case the string is a localized description of why the requirement check failed.
    * description `string`
    * hasIcon `boolean`
    * icon `string`: Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
    * name `string`
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

### Destiny.Definitions.DestinyUnlockExpressionDefinition
* Destiny.Definitions.DestinyUnlockExpressionDefinition `object`: Where the sausage gets made. Unlock Expressions are the foundation of the game's gating mechanics and investment-related restrictions. They can test Unlock Flags and Unlock Values for certain states, using a sufficient amount of logical operators such that unlock expressions are effectively Turing complete.
  * scope `object`: A shortcut for determining the most restrictive gating that this expression performs. See the DestinyGatingScope enum's documentation for more details.

### Destiny.Definitions.DestinyVendorAcceptedItemDefinition
* Destiny.Definitions.DestinyVendorAcceptedItemDefinition `object`: If you ever wondered how the Vault works, here it is.
  * acceptedInventoryBucketHash `integer`: The "source" bucket for a transfer. When a user wants to transfer an item, the appropriate DestinyVendorDefinition's acceptedItems property is evaluated, looking for an entry where acceptedInventoryBucketHash matches the bucket that the item being transferred is currently located. If it exists, the item will be transferred into whatever bucket is defined by destinationInventoryBucketHash.
  * destinationInventoryBucketHash `integer`: This is the bucket where the item being transferred will be put, given that it was being transferred *from* the bucket defined in acceptedInventoryBucketHash.

### Destiny.Definitions.DestinyVendorActionDefinition
* Destiny.Definitions.DestinyVendorActionDefinition `object`: If a vendor can ever end up performing actions, these are the properties that will be related to those actions. I'm not going to bother documenting this yet, as it is unused and unclear if it will ever be used... but in case it is ever populated and someone finds it useful, it is defined here.
  * actionHash `integer`
  * actionId `string`
  * autoPerformAction `boolean`
  * description `string`
  * executeSeconds `integer`
  * icon `string`
  * isPositive `boolean`
  * name `string`
  * verb `string`

### Destiny.Definitions.DestinyVendorCategoryEntryDefinition
* Destiny.Definitions.DestinyVendorCategoryEntryDefinition `object`: This is the definition for a single Vendor Category, into which Sale Items are grouped.
  * buyStringOverride `string`: The localized string for making purchases from this category, if it is different from the vendor's string for purchasing.
  * categoryHash `integer`: The hashed identifier for the category. (note that this is NOT pointing to a DestinyVendorCategoryDefinition, it's confusing but this is a sale item category in a vendor, not a categorization of vendors themselves)
  * categoryId `string`: The string identifier of the category.
  * categoryIndex `integer`: The index of the category in the original category definitions for the vendor.
  * disabledDescription `string`: If the category is disabled, this is the localized description to show.
  * displayTitle `string`: The localized title of the category.
  * hideFromRegularPurchase `boolean`: True if this category doesn't allow purchases.
  * hideIfNoCurrency `boolean`: If you don't have the currency required to buy items from this category, should the items be hidden?
  * overlay `object`: If this category has an overlay prompt that should appear, this contains the details of that prompt.
    * choiceDescription `string`
    * description `string`
    * icon `string`
    * title `string`
  * quantityAvailable `integer`: The amount of items that will be available when this category is shown.
  * showUnavailableItems `boolean`: If items aren't up for sale in this category, should we still show them (greyed out)?

### Destiny.Definitions.DestinyVendorCategoryOverlayDefinition
* Destiny.Definitions.DestinyVendorCategoryOverlayDefinition `object`: The details of an overlay prompt to show to a user. They are all fairly self-explanatory localized strings that can be shown.
  * choiceDescription `string`
  * description `string`
  * icon `string`
  * title `string`

### Destiny.Definitions.DestinyVendorDefinition
* Destiny.Definitions.DestinyVendorDefinition `object`: These are the definitions for Vendors.
  * acceptedItems `array`: If the Vendor is actually a vehicle for the transferring of items (like the Vault and Postmaster vendors), this defines the list of source->destination buckets for transferring.
    * items [Destiny.Definitions.DestinyVendorAcceptedItemDefinition](#destiny.definitions.destinyvendoraccepteditemdefinition)
  * actions `array`: Describes "actions" that can be performed on a vendor. Currently, none of these exist. But theoretically a Vendor could let you interact with it by performing actions. We'll see what these end up looking like if they ever get used.
    * items [Destiny.Definitions.DestinyVendorActionDefinition](#destiny.definitions.destinyvendoractiondefinition)
  * buyString `string`: If the vendor has a custom localized string describing the "buy" action, that is returned here.
  * categories `array`: These are the headers for sections of items that the vendor is selling. When you see items organized by category in the header, it is these categories that it is showing.
    * items [Destiny.Definitions.DestinyVendorCategoryEntryDefinition](#destiny.definitions.destinyvendorcategoryentrydefinition)
  * consolidateCategories `boolean`: If TRUE, consolidate categories that only differ by trivial properties (such as having minor differences in name)
  * displayCategories `array`: Display Categories are different from "categories" in that these are specifically for visual grouping and display of categories in Vendor UI. 
    * items [Destiny.Definitions.DestinyDisplayCategoryDefinition](#destiny.definitions.destinydisplaycategorydefinition)
  * displayItemHash `integer`: If the vendor has an item that should be displayed as the "featured" item, this is the hash identifier for that DestinyVendorItemDefinition.
  * displayProperties [Destiny.Definitions.DestinyVendorDisplayPropertiesDefinition](#destiny.definitions.destinyvendordisplaypropertiesdefinition)
  * enabled `boolean`: If a vendor is not enabled, we won't even save the vendor's definition, and we won't return any items or info about them. It's as if they don't exist.
  * factionHash `integer`: If the Vendor has a faction, this hash will be valid and point to a DestinyFactionDefinition.
  * failureStrings `array`: If an item can't be purchased from the vendor, there may be many "custom"/game state specific reasons why not.
    * items `string`
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * inhibitBuying `boolean`: If this is true, you aren't allowed to buy whatever the vendor is selling.
  * inhibitSelling `boolean`: If this is true, you're not allowed to sell whatever the vendor is buying.
  * interactions `array`: In addition to selling items, vendors can have "interactions": UI where you "talk" with the vendor and they offer you a reward, some item, or merely acknowledge via dialog that you did something cool.
    * items [Destiny.Definitions.DestinyVendorInteractionDefinition](#destiny.definitions.destinyvendorinteractiondefinition)
  * inventoryFlyouts `array`: If the vendor shows you items from your own inventory - such as the Vault vendor does - this data describes the UI around showing those inventory buckets and which ones get shown.
    * items [Destiny.Definitions.DestinyVendorInventoryFlyoutDefinition](#destiny.definitions.destinyvendorinventoryflyoutdefinition)
  * itemList `array`: If the vendor sells items (or merely has a list of items to show like the "Sack" vendors do), this is the list of those items that the vendor can sell. From this list, only a subset will be available from the vendor at any given time, selected randomly and reset on the vendor's refresh interval.
    * items [Destiny.Definitions.DestinyVendorItemDefinition](#destiny.definitions.destinyvendoritemdefinition)
  * originalCategories `array`: See the categories property for a description of categories and why originalCategories exists.
    * items [Destiny.Definitions.DestinyVendorCategoryEntryDefinition](#destiny.definitions.destinyvendorcategoryentrydefinition)
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
  * resetIntervalMinutes `integer`: A number used for calculating the frequency of a vendor's inventory resetting/refreshing.
  * resetOffsetMinutes `integer`: Again, used for reset/refreshing of inventory. Don't worry too much about it. Unless you want to.
  * sellString `string`: Ditto for selling. Not that you can sell items to a vendor anymore. Will it come back? Who knows. The string's still there.
  * services `array`: BNet doesn't use this data yet, but it appears to be an optional list of flavor text about services that the Vendor can provide.
    * items [Destiny.Definitions.DestinyVendorServiceDefinition](#destiny.definitions.destinyvendorservicedefinition)
  * unlockRanges `array`: If we were able to predict the dates when this Vendor will be visible/available, this will be the list of those date ranges. Sadly, we're not able to predict this very frequently, so this will often be useless data.
    * items [Dates.DateRange](#dates.daterange)
  * vendorBanner `string`: If the vendor has a custom banner image, that can be found here.
  * vendorCategoryIdentifier `string`: The identifier of the VendorCategoryDefinition for this vendor.
  * vendorIdentifier `string`: The internal identifier for the Vendor. A holdover from the old days of Vendors, but we don't have time to refactor it away.
  * vendorPortrait `string`: A portrait of the Vendor's smiling mug. Or frothing tentacles.
  * vendorSubcategoryIdentifier `string`: The identifier of the VendorCategoryDefinition for this vendor's subcategory.
  * visible `boolean`: If a vendor is not visible, we still have and will give vendor definition info, but we won't use them for things like Advisors or UI.

### Destiny.Definitions.DestinyVendorDisplayPropertiesDefinition
* Destiny.Definitions.DestinyVendorDisplayPropertiesDefinition `object`
  * description `string`
  * hasIcon `boolean`
  * icon `string`: Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
  * largeIcon `string`
  * name `string`
  * requirementsDisplay `array`: Vendors, in addition to expected display property data, may also show some "common requirements" as statically defined definition data. This might be when a vendor accepts a single type of currency, or when the currency is unique to the vendor and the designers wanted to show that currency when you interact with the vendor.
    * items [Destiny.Definitions.DestinyVendorRequirementDisplayEntryDefinition](#destiny.definitions.destinyvendorrequirementdisplayentrydefinition)
  * subtitle `string`

### Destiny.Definitions.DestinyVendorInteractionDefinition
* Destiny.Definitions.DestinyVendorInteractionDefinition `object`: A Vendor Interaction is a dialog shown by the vendor other than sale items or transfer screens. The vendor is showing you something, and asking you to reply to it by choosing an option or reward.
  * flavorLineOne `string`: If the vendor interaction has flavor text, this is some of it.
  * flavorLineTwo `string`: If the vendor interaction has flavor text, this is the rest of it.
  * headerDisplayProperties `object`: The header for the interaction dialog.
    * description `string`
    * hasIcon `boolean`
    * icon `string`: Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
    * name `string`
  * instructions `string`: The localized text telling the player what to do when they see this dialog.
  * questlineItemHash `integer`: If this interaction dialog is about a quest, this is the questline related to the interaction. You can use this to show the quest overview, or even the character's status with the quest if you use it to find the character's current Quest Step by checking their inventory against this questlineItemHash's DestinyInventoryItemDefinition.setData.
  * replies `array`: The potential replies that the user can make to the interaction.
    * items [Destiny.Definitions.DestinyVendorInteractionReplyDefinition](#destiny.definitions.destinyvendorinteractionreplydefinition)
  * rewardBlockLabel `string`: If this interaction is displaying rewards, this is the text to use for the header of the reward-displaying section of the interaction.
  * rewardVendorCategoryIndex `integer`: If the vendor's reward list is sourced from one of his categories, this is the index into the category array of items to show.
  * sackInteractionList `array`: If this interaction is meant to show you sacks, this is the list of types of sacks to be shown. If empty, the interaction is not meant to show sacks.
    * items [Destiny.Definitions.DestinyVendorInteractionSackEntryDefinition](#destiny.definitions.destinyvendorinteractionsackentrydefinition)
  * uiInteractionType `integer`: A UI hint for the behavior of the interaction screen. BNet doesn't use this, but you can choose to.
  * vendorCategoryIndex `integer`: If >= 0, this is the category of sale items to show along with this interaction dialog.

### Destiny.Definitions.DestinyVendorInteractionReplyDefinition
* Destiny.Definitions.DestinyVendorInteractionReplyDefinition `object`: When the interaction is replied to, Reward sites will fire and items potentially selected based on whether the given unlock expression is TRUE.
  * itemRewardsSelection `object`: The rewards granted upon responding to the vendor.
  * reply `string`: The localized text for the reply.
  * replyType `object`: An enum indicating the type of reply being made.

### Destiny.Definitions.DestinyVendorInteractionSackEntryDefinition
* Destiny.Definitions.DestinyVendorInteractionSackEntryDefinition `object`: Compare this sackType to the sack identifier in the DestinyInventoryItemDefinition.vendorSackType property of items. If they match, show this sack with this interaction.
  * sackType `integer`

### Destiny.Definitions.DestinyVendorInventoryFlyoutBucketDefinition
* Destiny.Definitions.DestinyVendorInventoryFlyoutBucketDefinition `object`: Information about a single inventory bucket in a vendor flyout UI and how it is shown.
  * collapsible `boolean`: If true, the inventory bucket should be able to be collapsed visually.
  * inventoryBucketHash `integer`: The inventory bucket whose contents should be shown.
  * sortItemsBy `object`: The methodology to use for sorting items from the flyout.

### Destiny.Definitions.DestinyVendorInventoryFlyoutDefinition
* Destiny.Definitions.DestinyVendorInventoryFlyoutDefinition `object`: The definition for an "inventory flyout": a UI screen where we show you part of an otherwise hidden vendor inventory: like the Vault inventory buckets.
  * buckets `array`: A list of inventory buckets and other metadata to show on the screen.
    * items [Destiny.Definitions.DestinyVendorInventoryFlyoutBucketDefinition](#destiny.definitions.destinyvendorinventoryflyoutbucketdefinition)
  * displayProperties `object`: The title and other common properties of the flyout.
    * description `string`
    * hasIcon `boolean`
    * icon `string`: Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
    * name `string`
  * flyoutId `integer`: An identifier for the flyout, in case anything else needs to refer to them.
  * lockedDescription `string`: If the flyout is locked, this is the reason why.
  * suppressNewness `boolean`: If this is true, don't show any of the glistening "this is a new item" UI elements, like we show on the inventory items themselves in in-game UI.

### Destiny.Definitions.DestinyVendorItemDefinition
* Destiny.Definitions.DestinyVendorItemDefinition `object`: This represents an item being sold by the vendor.
  * action `object`: The action to be performed when purchasing the item, if it's not just "buy".
    * executeSeconds `number`
    * isPositive `boolean`
  * categoryIndex `integer`: The index into the DestinyVendorDefinition.categories array, so you can find the category associated with this item.
  * creationLevels `array`: The Default level at which the item will spawn. Almost always driven by an adjusto these days. Ideally should be singular. It's a long story how this ended up as a list, but there is always either going to be 0:1 of these entities.
    * items [Destiny.Definitions.DestinyItemCreationEntryLevelDefinition](#destiny.definitions.destinyitemcreationentryleveldefinition)
  * currencies `array`: This is a pre-compiled aggregation of item value and priceOverrideList, so that we have one place to check for what the purchaser must pay for the item. Use this instead of trying to piece together the price separately.
    * items [Destiny.DestinyItemQuantity](#destiny.destinyitemquantity)
  * displayCategory `string`: The string identifier for the category selling this item.
  * displayCategoryIndex `integer`: This is an index specifically into the display category, as opposed to the server-side Categories (which do not need to match or pair with each other in any way: server side categories are really just structures for common validation. Display Category will let us more easily categorize items visually)
  * failureIndexes `array`: An list of indexes into the DestinyVendorDefinition.failureStrings array, indicating the possible failure strings that can be relevant for this item.
    * items `integer`
  * inventoryBucketHash `integer`: The inventory bucket into which this item will be placed upon purchase.
  * itemHash `integer`: The hash identifier of the item being sold (DestinyInventoryItemDefinition).
  * maximumLevel `integer`: The maximum character level at which this item is available for sale.
  * minimumLevel `integer`: The minimum character level at which this item is available for sale.
  * originalCategoryIndex `integer`: Same as above, but for the original category indexes.
  * purchasableScope `object`: Similar to visibilityScope, it represents the most restrictive scope that determines whether the item can be purchased. It will at least be as restrictive as visibilityScope, but could be more restrictive if the item has additional purchase requirements beyond whether it is merely visible or not.
  * quantity `integer`: The amount you will recieve of the item described in itemHash if you make the purchase.
  * refundPolicy `object`: If this item can be refunded, this is the policy for what will be refundd, how, and in what time period.
  * refundTimeLimit `integer`: The amount of time before refundability of the newly purchased item will expire.
  * vendorItemIndex `integer`: The index into the DestinyVendorDefinition.saleList. This is what we use to refer to items being sold throughout live and definition data.
  * visibilityScope `object`: The most restrictive scope that determines whether the item is available in the Vendor's inventory. See DestinyGatingScope's documentation for more information.

### Destiny.Definitions.DestinyVendorRequirementDisplayEntryDefinition
* Destiny.Definitions.DestinyVendorRequirementDisplayEntryDefinition `object`: The localized properties of the requirementsDisplay, allowing information about the requirement or item being featured to be seen.
  * icon `string`
  * name `string`
  * source `string`
  * type `string`

### Destiny.Definitions.DestinyVendorSaleItemActionBlockDefinition
* Destiny.Definitions.DestinyVendorSaleItemActionBlockDefinition `object`: Not terribly useful, some basic cooldown interaction info.
  * executeSeconds `number`
  * isPositive `boolean`

### Destiny.Definitions.DestinyVendorServiceDefinition
* Destiny.Definitions.DestinyVendorServiceDefinition `object`: When a vendor provides services, this is the localized name of those services.
  * name `string`: The localized name of a service provided.

### Destiny.Definitions.Director.DestinyActivityGraphArtElementDefinition
* Destiny.Definitions.Director.DestinyActivityGraphArtElementDefinition `object`: These Art Elements are meant to represent one-off visual effects overlaid on the map. Currently, we do not have a pipeline to import the assets for these overlays, so this info exists as a placeholder for when such a pipeline exists (if it ever will)
  * position `object`: The position on the map of the art element.
    * x `integer`
    * y `integer`
    * z `integer`

### Destiny.Definitions.Director.DestinyActivityGraphConnectionDefinition
* Destiny.Definitions.Director.DestinyActivityGraphConnectionDefinition `object`: Nodes on a graph can be visually connected: this appears to be the information about which nodes to link. It appears to lack more detailed information, such as the path for that linking.
  * destNodeHash `integer`
  * sourceNodeHash `integer`

### Destiny.Definitions.Director.DestinyActivityGraphDefinition
* Destiny.Definitions.Director.DestinyActivityGraphDefinition `object`: Represents a Map View in the director: be them overview views, destination views, or other.
  * artElements `array`: Represents one-off/special UI elements that appear on the map.
    * items [Destiny.Definitions.Director.DestinyActivityGraphArtElementDefinition](#destiny.definitions.director.destinyactivitygraphartelementdefinition)
  * connections `array`: Represents connections between graph nodes. However, it lacks context that we'd need to make good use of it.
    * items [Destiny.Definitions.Director.DestinyActivityGraphConnectionDefinition](#destiny.definitions.director.destinyactivitygraphconnectiondefinition)
  * displayObjectives `array`: Objectives can display on maps, and this is supposedly metadata for that. I have not had the time to analyze the details of what is useful within however: we could be missing important data to make this work. Expect this property to be expanded on later if possible.
    * items [Destiny.Definitions.Director.DestinyActivityGraphDisplayObjectiveDefinition](#destiny.definitions.director.destinyactivitygraphdisplayobjectivedefinition)
  * displayProgressions `array`: Progressions can also display on maps, but similarly to displayObjectives we appear to lack some required information and context right now. We will have to look into it later and add more data if possible.
    * items [Destiny.Definitions.Director.DestinyActivityGraphDisplayProgressionDefinition](#destiny.definitions.director.destinyactivitygraphdisplayprogressiondefinition)
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * linkedGraphs `array`: Represents links between this Activity Graph and other ones.
    * items [Destiny.Definitions.Director.DestinyLinkedGraphDefinition](#destiny.definitions.director.destinylinkedgraphdefinition)
  * nodes `array`: These represent the visual "nodes" on the map's view. These are the activities you can click on in the map.
    * items [Destiny.Definitions.Director.DestinyActivityGraphNodeDefinition](#destiny.definitions.director.destinyactivitygraphnodedefinition)
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

### Destiny.Definitions.Director.DestinyActivityGraphDisplayObjectiveDefinition
* Destiny.Definitions.Director.DestinyActivityGraphDisplayObjectiveDefinition `object`: When a Graph needs to show active Objectives, this defines those objectives as well as an identifier.
  * id `integer`: $NOTE $amola 2017-01-19 This field is apparently something that CUI uses to manually wire up objectives to display info. I am unsure how it works.
  * objectiveHash `integer`: The objective being shown on the map.

### Destiny.Definitions.Director.DestinyActivityGraphDisplayProgressionDefinition
* Destiny.Definitions.Director.DestinyActivityGraphDisplayProgressionDefinition `object`: When a Graph needs to show active Progressions, this defines those objectives as well as an identifier.
  * id `integer`
  * progressionHash `integer`

### Destiny.Definitions.Director.DestinyActivityGraphNodeActivityDefinition
* Destiny.Definitions.Director.DestinyActivityGraphNodeActivityDefinition `object`: The actual activity to be redirected to when you click on the node. Note that a node can have many Activities attached to it: but only one will be active at any given time. The list of Node Activities will be traversed, and the first one found to be active will be displayed. This way, a node can layer multiple variants of an activity on top of each other. For instance, one node can control the weekly Crucible Playlist. There are multiple possible playlists, but only one is active for the week.
  * activityHash `integer`: The activity that will be activated if the user clicks on this node. Controls all activity-related information displayed on the node if it is active (the text shown in the tooltip etc)
  * nodeActivityId `integer`: An identifier for this node activity. It is only guaranteed to be unique within the Activity Graph.

### Destiny.Definitions.Director.DestinyActivityGraphNodeDefinition
* Destiny.Definitions.Director.DestinyActivityGraphNodeDefinition `object`: This is the position and other data related to nodes in the activity graph that you can click to launch activities. An Activity Graph node will only have one active Activity at a time, which will determine the activity to be launched (and, unless overrideDisplay information is provided, will also determine the tooltip and other UI related to the node)
  * activities `array`: The node may have various possible activities that could be active for it, however only one may be active at a time. See the DestinyActivityGraphNodeActivityDefinition for details.
    * items [Destiny.Definitions.Director.DestinyActivityGraphNodeActivityDefinition](#destiny.definitions.director.destinyactivitygraphnodeactivitydefinition)
  * featuringStates `array`: The node may have various visual accents placed on it, or styles applied. These are the list of possible styles that the Node can have. The game iterates through each, looking for the first one that passes a check of the required game/character/account state in order to show that style, and then renders the node in that style.
    * items [Destiny.Definitions.Director.DestinyActivityGraphNodeFeaturingStateDefinition](#destiny.definitions.director.destinyactivitygraphnodefeaturingstatedefinition)
  * nodeId `integer`: An identifier for the Activity Graph Node, only guaranteed to be unique within its parent Activity Graph.
  * overrideDisplay `object`: The node *may* have display properties that override the active Activity's display properties.
    * description `string`
    * hasIcon `boolean`
    * icon `string`: Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
    * name `string`
  * position `object`: The position on the map for this node.
    * x `integer`
    * y `integer`
    * z `integer`

### Destiny.Definitions.Director.DestinyActivityGraphNodeFeaturingStateDefinition
* Destiny.Definitions.Director.DestinyActivityGraphNodeFeaturingStateDefinition `object`: Nodes can have different visual states. This object represents a single visual state ("highlight type") that a node can be in, and the unlock expression condition to determine whether it should be set.
  * highlightType `object`: The node can be highlighted in a variety of ways - the game iterates through these and finds the first FeaturingState that is valid at the present moment given the Game, Account, and Character state, and renders the node in that state. See the ActivityGraphNodeHighlightType enum for possible values.

### Destiny.Definitions.Director.DestinyLinkedGraphDefinition
* Destiny.Definitions.Director.DestinyLinkedGraphDefinition `object`: This describes links between the current graph and others, as well as when that link is relevant.
  * description `string`
  * linkedGraphId `integer`
  * linkedGraphs `array`
    * items [Destiny.Definitions.Director.DestinyLinkedGraphEntryDefinition](#destiny.definitions.director.destinylinkedgraphentrydefinition)
  * name `string`
  * overview `string`
  * unlockExpression [Destiny.Definitions.DestinyUnlockExpressionDefinition](#destiny.definitions.destinyunlockexpressiondefinition)

### Destiny.Definitions.Director.DestinyLinkedGraphEntryDefinition
* Destiny.Definitions.Director.DestinyLinkedGraphEntryDefinition `object`
  * activityGraphHash `integer`

### Destiny.Definitions.Items.DestinyDerivedItemCategoryDefinition
* Destiny.Definitions.Items.DestinyDerivedItemCategoryDefinition `object`: A shortcut for the fact that some items have a "Preview Vendor" - See DestinyInventoryItemDefinition.preview.previewVendorHash - that is intended to be used to show what items you can get as a result of acquiring or using this item.
  * categoryDescription `string`: The localized string for the category title. This will be something describing the items you can get as a group, or your likelihood/the quantity you'll get.
  * items `array`: This is the list of all of the items for this category and the basic properties we'll know about them.
    * items [Destiny.Definitions.Items.DestinyDerivedItemDefinition](#destiny.definitions.items.destinyderiveditemdefinition)

### Destiny.Definitions.Items.DestinyDerivedItemDefinition
* Destiny.Definitions.Items.DestinyDerivedItemDefinition `object`: This is a reference to, and summary data for, a specific item that you can get as a result of Using or Acquiring some other Item (For example, this could be summary information for an Emote that you can get by opening an an Eververse Box) See DestinyDerivedItemCategoryDefinition for more information.
  * iconPath `string`: An icon for the item.
  * itemDescription `string`: A brief description of the item.
  * itemDetail `string`: Additional details about the derived item, in addition to the description.
  * itemHash `integer`: The hash for the DestinyInventoryItemDefinition of this derived item, if there is one. Sometimes we are given this information as a manual override, in which case there won't be an actual DestinyInventoryItemDefinition for what we display, but you can still show the strings from this object itself.
  * itemName `string`: The name of the derived item.
  * vendorItemIndex `integer`: If the item was derived from a "Preview Vendor", this will be an index into the DestinyVendorDefinition's itemList property. Otherwise, -1.

### Destiny.Definitions.Items.DestinyItemPlugDefinition
* Destiny.Definitions.Items.DestinyItemPlugDefinition `object`: If an item is a Plug, its DestinyInventoryItemDefinition.plug property will be populated with an instance of one of these bad boys.
  * enabledMaterialRequirementHash `integer`: It's not enough for the plug to be inserted. It has to be enabled as well. For it to be enabled, it may require materials. This is the hash identifier for the DestinyMaterialRequirementSetDefinition for those requirements, if there is one.
  * enabledRules `array`: The rules around whether the plug, once inserted, is enabled and providing its benefits.
    * items [Destiny.Definitions.Items.DestinyPlugRuleDefinition](#destiny.definitions.items.destinyplugruledefinition)
  * insertionMaterialRequirementHash `integer`: If inserting this plug requires materials, this is the hash identifier for looking up the DestinyMaterialRequirementSetDefinition for those requirements.
  * insertionRules `array`: The rules around when this plug can be inserted into a socket, aside from the socket's individual restrictions.
    * items [Destiny.Definitions.Items.DestinyPlugRuleDefinition](#destiny.definitions.items.destinyplugruledefinition)
  * onActionRecreateSelf `boolean`: If you successfully socket the item, this will determine whether or not you get "refunded" on the plug.
  * plugCategoryHash `integer`: The hash for the plugCategoryIdentifier. You can use this instead if you wish: I put both in the definition for debugging purposes.
  * plugCategoryIdentifier `string`: The string identifier for the plug's category. Use the socket's DestinySocketTypeDefinition.plugWhitelist to determine whether this plug can be inserted into the socket.
  * previewItemOverrideHash `integer`: In the game, if you're inspecting a plug item directly, this will be the item shown with the plug attached. Look up the DestinyInventoryItemDefinition for this hash for the item.

### Destiny.Definitions.Items.DestinyItemTierTypeDefinition
* Destiny.Definitions.Items.DestinyItemTierTypeDefinition `object`: Defines the tier type of an item. Mostly this provides human readable properties for types like Common, Rare, etc...
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * infusionProcess `object`: If this tier defines infusion properties, they will be contained here.
    * baseQualityTransferRatio `number`: The default portion of quality that will transfer from the infuser to the infusee item. (InfuserQuality - InfuseeQuality) * baseQualityTransferRatio = base quality transferred.
    * minimumQualityIncrement `integer`: As long as InfuserQuality > InfuseeQuality, the amount of quality bestowed is guaranteed to be at least this value, even if the transferRatio would dictate that it should be less. The total amount of quality that ends up in the Infusee cannot exceed the Infuser's quality however (for instance, if you infuse a 300 item with a 301 item and the minimum quality increment is 10, the infused item will not end up with 310 quality)
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

### Destiny.Definitions.Items.DestinyItemTierTypeInfusionBlock
* Destiny.Definitions.Items.DestinyItemTierTypeInfusionBlock `object`
  * baseQualityTransferRatio `number`: The default portion of quality that will transfer from the infuser to the infusee item. (InfuserQuality - InfuseeQuality) * baseQualityTransferRatio = base quality transferred.
  * minimumQualityIncrement `integer`: As long as InfuserQuality > InfuseeQuality, the amount of quality bestowed is guaranteed to be at least this value, even if the transferRatio would dictate that it should be less. The total amount of quality that ends up in the Infusee cannot exceed the Infuser's quality however (for instance, if you infuse a 300 item with a 301 item and the minimum quality increment is 10, the infused item will not end up with 310 quality)

### Destiny.Definitions.Items.DestinyPlugRuleDefinition
* Destiny.Definitions.Items.DestinyPlugRuleDefinition `object`: Dictates a rule around whether the plug is enabled or insertable.
  * failureMessage `string`: The localized string to show if this rule fails.

### Destiny.Definitions.Lore.DestinyLoreDefinition
* Destiny.Definitions.Lore.DestinyLoreDefinition `object`: These are definitions for in-game "Lore," meant to be narrative enhancements of the game experience.
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
  * subtitle `string`

### Destiny.Definitions.Milestones.DestinyMilestoneActivityDefinition
* Destiny.Definitions.Milestones.DestinyMilestoneActivityDefinition `object`: Milestones can have associated activities which provide additional information about the context, challenges, modifiers, state etc... related to this Milestone. 
  * conceptualActivityHash `integer`: The "Conceptual" activity hash. Basically, we picked the lowest level activity and are treating it as the canonical definition of the activity for rendering purposes.
  * variants `object`: A milestone-referenced activity can have many variants, such as Tiers or alternative modes of play.

### Destiny.Definitions.Milestones.DestinyMilestoneActivityVariantDefinition
* Destiny.Definitions.Milestones.DestinyMilestoneActivityVariantDefinition `object`: Represents a variant on an activity for a Milestone: a specific difficulty tier, or a specific activity variant for example.
  * activityHash `integer`: The hash to use for looking up the variant Activity's definition (DestinyActivityDefinition), where you can find its distinguishing characteristics such as difficulty level and recommended light level. 
  * order `integer`: If you care to do so, render the variants in the order prescribed by this value.

### Destiny.Definitions.Milestones.DestinyMilestoneDefinition
* Destiny.Definitions.Milestones.DestinyMilestoneDefinition `object`: Milestones are an in-game concept where they're attempting to tell you what you can do next in-game.
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)
  * friendlyName `string`: If the milestone has a friendly identifier for association with other features - such as Recruiting - that identifier can be found here. This is "friendly" in that it looks better in a URL than whatever the identifier for the Milestone actually is.
  * hasPredictableDates `boolean`: A shortcut for clients - and the server - to understand whether we can predict the start and end dates for this event. In practice, there are multiple ways that an event could have predictable date ranges, but not all events will be able to be predicted via any mechanism (for instance, events that are manually triggered on and off)
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * image `string`: A custom image someone made just for the milestone. Isn't that special?
  * index `integer`: The index of the entity as it was found in the investment tables.
  * isInGameMilestone `boolean`: Some milestones are explicit objectives that you can see and interact with in the game. Some milestones are more conceptual, built by BNet to help advise you on activities and events that happen in-game but that aren't explicitly shown in game as Milestones. If this is TRUE, you can see this as a milestone in the game. If this is FALSE, it's an event or activity you can participate in, but you won't see it as a Milestone in the game's UI.
  * milestoneType `object`: An enumeration listing one of the possible types of milestones. Check out the DestinyMilestoneType enum for more info!
  * quests `object`: The full set of possible Quests that give the overview of the Milestone event/activity in question. Only one of these can be active at a time for a given Conceptual Milestone, but many of them may be "available" for the user to choose from. (for instance, with Milestones you can choose from the three available Quests, but only one can be active at a time) Keyed by the quest item.
  * recruitable `boolean`: If True, then the Milestone has been integrated with BNet's recruiting feature.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
  * rewards `object`: If this milestone can provide rewards, this will define the categories into which the individual reward entries are placed.
  * showInExplorer `boolean`: If TRUE, this entry should be returned in the list of milestones for the "Explore Destiny" (i.e. new BNet homepage) features of Bungie.net (as long as the underlying event is active)
  * values `object`: Sometimes, milestones will have arbitrary values associated with them that are of interest to us or to third party developers. This is the collection of those values' definitions, keyed by the identifier of the value and providing useful definition information such as localizable names and descriptions for the value.
  * vendors `array`: Sometimes, milestones will have rewards provided by Vendors. This definition gives the information needed to understand which vendors are relevant, the order in which they should be returned if order matters, and the conditions under which the Vendor is relevant to the user.
    * items [Destiny.Definitions.Milestones.DestinyMilestoneVendorDefinition](#destiny.definitions.milestones.destinymilestonevendordefinition)

### Destiny.Definitions.Milestones.DestinyMilestoneQuestDefinition
* Destiny.Definitions.Milestones.DestinyMilestoneQuestDefinition `object`: Any data we need to figure out whether this Quest Item is the currently active one for the conceptual Milestone. Even just typing this description, I already regret it.
  * activities `object`: The full set of all possible "conceptual activities" that are related to this Milestone. Tiers or alternative modes of play within these conceptual activities will be defined as sub-entities. Keyed by the Conceptual Activity Hash. Use the key to look up DestinyActivityDefinition.
  * displayProperties `object`: The individual quests may have different definitions from the overall milestone: if there's a specific active quest, use these displayProperties instead of that of the overall DestinyMilestoneDefinition.
    * description `string`
    * hasIcon `boolean`
    * icon `string`: Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
    * name `string`
  * overrideImage `string`: If populated, this image can be shown instead of the generic milestone's image when this quest is live, or it can be used to show a background image for the quest itself that differs from that of the Activity or the Milestone.
  * questItemHash `integer`: The item representing this Milestone quest. Use this hash to look up the DestinyInventoryItemDefinition for the quest to find its steps and human readable data.
  * questRewards `object`: The rewards you will get for completing this quest, as best as we could extract them from our data. Sometimes, it'll be a decent amount of data. Sometimes, it's going to be sucky. Sorry.
    * items `array`: The items that represent your reward for completing the quest.
      * items [Destiny.Definitions.Milestones.DestinyMilestoneQuestRewardItem](#destiny.definitions.milestones.destinymilestonequestrewarditem)

### Destiny.Definitions.Milestones.DestinyMilestoneQuestRewardItem
* Destiny.Definitions.Milestones.DestinyMilestoneQuestRewardItem `object`: A subclass of DestinyItemQuantity, that provides not just the item and its quantity but also information that BNet can - at some point - use internally to provide more robust runtime information about the item's qualities.
  * itemHash `integer`: The hash identifier for the item in question. Use it to look up the item's DestinyInventoryItemDefinition.
  * itemInstanceId `integer`: If this quantity is referring to a specific instance of an item, this will have the item's instance ID. Normally, this will be null.
  * quantity `integer`: The amount of the item needed/available depending on the context of where DestinyItemQuantity is being used.
  * vendorHash `integer`: The quest reward item *may* be associated with a vendor. If so, this is that vendor. Use this hash to look up the DestinyVendorDefinition.
  * vendorItemIndex `integer`: The quest reward item *may* be associated with a vendor. If so, this is the index of the item being sold, which we can use at runtime to find instanced item information for the reward item.

### Destiny.Definitions.Milestones.DestinyMilestoneQuestRewardsDefinition
* Destiny.Definitions.Milestones.DestinyMilestoneQuestRewardsDefinition `object`: If rewards are given in a quest - as opposed to overall in the entire Milestone - there's way less to track. We're going to simplify this contract as a result. However, this also gives us the opportunity to potentially put more than just item information into the reward data if we're able to mine it out in the future. Remember this if you come back and ask "why are quest reward items nested inside of their own class?"
  * items `array`: The items that represent your reward for completing the quest.
    * items [Destiny.Definitions.Milestones.DestinyMilestoneQuestRewardItem](#destiny.definitions.milestones.destinymilestonequestrewarditem)

### Destiny.Definitions.Milestones.DestinyMilestoneRewardCategoryDefinition
* Destiny.Definitions.Milestones.DestinyMilestoneRewardCategoryDefinition `object`: The definition of a category of rewards, that contains many individual rewards.
  * categoryHash `integer`: Identifies the reward category. Only guaranteed unique within this specific component!
  * categoryIdentifier `string`: The string identifier for the category, if you want to use it for some end. Guaranteed unique within the specific component.
  * displayProperties `object`: Hopefully this is obvious by now.
    * description `string`
    * hasIcon `boolean`
    * icon `string`: Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
    * name `string`
  * order `integer`: If you want to use BNet's recommended order for rendering categories programmatically, use this value and compare it to other categories to determine the order in which they should be rendered. I don't feel great about putting this here, I won't lie.
  * rewardEntries `object`: If this milestone can provide rewards, this will define the sets of rewards that can be earned, the conditions under which they can be acquired, internal data that we'll use at runtime to determine whether you've already earned or redeemed this set of rewards, and the category that this reward should be placed under.

### Destiny.Definitions.Milestones.DestinyMilestoneRewardEntryDefinition
* Destiny.Definitions.Milestones.DestinyMilestoneRewardEntryDefinition `object`: The definition of a specific reward, which may be contained in a category of rewards and that has optional information about how it is obtained.
  * displayProperties `object`: For us to bother returning this info, we should be able to return some kind of information about why these rewards are grouped together. This is ideally that information. Look at how confident I am that this will always remain true.
    * description `string`
    * hasIcon `boolean`
    * icon `string`: Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
    * name `string`
  * items `array`: The items you will get as rewards, and how much of it you'll get.
    * items [Destiny.DestinyItemQuantity](#destiny.destinyitemquantity)
  * order `integer`: If you want to follow BNet's ordering of these rewards, use this number within a given category to order the rewards. Yeah, I know. I feel dirty too.
  * rewardEntryHash `integer`: The identifier for this reward entry. Runtime data will refer to reward entries by this hash. Only guaranteed unique within the specific Milestone.
  * rewardEntryIdentifier `string`: The string identifier, if you care about it. Only guaranteed unique within the specific Milestone.
  * vendorHash `integer`: If this reward is redeemed at a Vendor, this is the hash of the Vendor to go to in order to redeem the reward. Use this hash to look up the DestinyVendorDefinition.

### Destiny.Definitions.Milestones.DestinyMilestoneType
* Destiny.Definitions.Milestones.DestinyMilestoneType `integer` (values: 0, 1, 2, 3, 4, 5): The type of milestone. Milestones can be Tutorials, one-time/triggered/non-repeating but not necessarily tutorials, or Repeating Milestones.

### Destiny.Definitions.Milestones.DestinyMilestoneValueDefinition
* Destiny.Definitions.Milestones.DestinyMilestoneValueDefinition `object`: The definition for information related to a key/value pair that is relevant for a particular Milestone or component within the Milestone. 
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)
  * key `string`

### Destiny.Definitions.Milestones.DestinyMilestoneVendorDefinition
* Destiny.Definitions.Milestones.DestinyMilestoneVendorDefinition `object`: If the Milestone or a component has vendors whose inventories could/should be displayed that are relevant to it, this will return the vendor in question. 
  * vendorHash `integer`: The hash of the vendor whose wares should be shown as associated with the Milestone.

### Destiny.Definitions.Progression.DestinyProgressionLevelRequirementDefinition
* Destiny.Definitions.Progression.DestinyProgressionLevelRequirementDefinition `object`: These are pre-constructed collections of data that can be used to determine the Level Requirement for an item given a Progression to be tested (such as the Character's level).
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * progressionHash `integer`: The progression whose level should be used to determine the level requirement.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
  * requirementCurve `array`: A curve of level requirements, weighted by the related progressions' level.
    * items [Interpolation.InterpolationPointFloat](#interpolation.interpolationpointfloat)

### Destiny.Definitions.Sockets.DestinyInsertPlugActionDefinition
* Destiny.Definitions.Sockets.DestinyInsertPlugActionDefinition `object`: Data related to what happens while a plug is being inserted, mostly for UI purposes.
  * actionExecuteSeconds `integer`: How long it takes for the Plugging of the item to be completed once it is initiated, if you care.

### Destiny.Definitions.Sockets.DestinyPlugWhitelistEntryDefinition
* Destiny.Definitions.Sockets.DestinyPlugWhitelistEntryDefinition `object`: Defines a plug "Category" that is allowed to be plugged into a socket of this type.
  * categoryHash `integer`: The hash identifier of the Plug Category to compare against the plug item's plug.plugCategoryHash.
  * categoryIdentifier `string`: The string identifier for the category, which is here mostly for debug purposes.

### Destiny.Definitions.Sockets.DestinySocketCategoryDefinition
* Destiny.Definitions.Sockets.DestinySocketCategoryDefinition `object`: Sockets on an item are organized into Categories visually.
  * displayProperties [Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition](#destiny.definitions.common.destinydisplaypropertiesdefinition)
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
  * uiCategoryStyle `integer`: A string hinting to the game's UI system about how the sockets in this category should be displayed.

### Destiny.Definitions.Sockets.DestinySocketTypeDefinition
* Destiny.Definitions.Sockets.DestinySocketTypeDefinition `object`: All Sockets have a "Type": a set of common properties that determine when the socket allows Plugs to be inserted, what Categories of Plugs can be inserted, and whether the socket is even visible at all given the current game/character/account state.
  * displayProperties `object`: There are fields for this display data, but they appear to be unpopulated as of now. I am not sure where in the UI these would show if they even were populated, but I will continue to return this data in case it becomes useful.
    * description `string`
    * hasIcon `boolean`
    * icon `string`: Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
    * name `string`
  * hash `integer`: The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
  * index `integer`: The index of the entity as it was found in the investment tables.
  * insertAction `object`: Defines what happens when a plug is inserted into sockets of this type.
    * actionExecuteSeconds `integer`: How long it takes for the Plugging of the item to be completed once it is initiated, if you care.
  * plugWhitelist `array`: A list of Plug "Categories" that are allowed to be plugged into sockets of this type.
    * items [Destiny.Definitions.Sockets.DestinyPlugWhitelistEntryDefinition](#destiny.definitions.sockets.destinyplugwhitelistentrydefinition)
  * redacted `boolean`: If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
  * socketCategoryHash `integer`
  * visibility [Destiny.DestinySocketVisibility](#destiny.destinysocketvisibility)

### Destiny.Definitions.Sources.DestinyItemSourceDefinition
* Destiny.Definitions.Sources.DestinyItemSourceDefinition `object`: Properties of a DestinyInventoryItemDefinition that store all of the information we were able to discern about how the item spawns, and where you can find the item.
  * computedStats `object`: The stats computed for this level/quality range.
  * level `integer`: The level at which the item spawns. Essentially the Primary Key for this source data: there will be multiple of these source entries per item that has source data, grouped by the level at which the item spawns.
  * maxLevelRequired `integer`: The maximum Character Level required for equipping the item when the item spawns at the item level defined on this DestinyItemSourceDefinition, as far as we saw in our processing.
  * maxQuality `integer`: The maximum quality at which the item spawns for this level.
  * minLevelRequired `integer`: The minimum Character Level required for equipping the item when the item spawns at the item level defined on this DestinyItemSourceDefinition, as far as we saw in our processing.
  * minQuality `integer`: The minimum Quality at which the item spawns for this level. Examine DestinyInventoryItemDefinition for more information about what Quality means. Just don't ask Phaedrus about it, he'll never stop talking and you'll have to write a book about it.
  * sourceHashes `array`: The DestinyRewardSourceDefinitions found that can spawn the item at this level.
    * items `integer`

### Destiny.DestinyActivity
* Destiny.DestinyActivity `object`: Represents the "Live" data that we can obtain about a Character's status with a specific Activity. This will tell you whether the character can participate in the activity, as well as some other basic mutable information. 
  * activityHash `integer`: The hash identifier of the Activity. Use this to look up the DestinyActivityDefinition of the activity.
  * canJoin `boolean`: If true, the user is allowed to join with another Fireteam in this activity.
  * canLead `boolean`: If true, the user is allowed to lead a Fireteam into this activity.
  * difficultyTier `object`: A DestinyActivityDifficultyTier enum value indicating the difficulty of the activity.
  * displayLevel `integer`: The difficulty level of the activity, if applicable.
  * isCompleted `boolean`: If true, we both have the ability to know that the user has completed this activity and they have completed it. Unfortunately, we can't necessarily know this for all activities. As such, this should probably only be used if you already know in advance which specific activities you wish to check.
  * isNew `boolean`: If true, then the activity should have a "new" indicator in the Director UI.
  * isVisible `boolean`: If true, the user should be able to see this activity.
  * recommendedLight `integer`: The recommended light level for the activity, if applicable.

### Destiny.DestinyActivityDifficultyTier
* Destiny.DestinyActivityDifficultyTier `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7): An enumeration representing the potential difficulty levels of an activity. Their names are... more qualitative than quantitative.

### Destiny.DestinyActivityModeCategory
* Destiny.DestinyActivityModeCategory `integer` (values: 0, 1, 2): Activity Modes are grouped into a few possible broad categories.

### Destiny.DestinyActivityNavPointType
* Destiny.DestinyActivityNavPointType `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)

### Destiny.DestinyClass
* Destiny.DestinyClass `integer` (values: 0, 1, 2, 3)

### Destiny.DestinyComponentType
* Destiny.DestinyComponentType `integer` (values: 0, 100, 101, 102, 103, 200, 201, 202, 203, 204, 205, 300, 301, 302, 303, 304, 305, 306, 307, 308, 400, 401, 402, 500)

### Destiny.DestinyEquipItemResult
* Destiny.DestinyEquipItemResult `object`: The results of an Equipping operation performed through the Destiny API.
  * equipStatus `object`: A PlatformErrorCodes enum indicating whether it succeeded, and if it failed why.
  * itemInstanceId `integer`: The instance ID of the item in question (all items that can be equipped must, but definition, be Instanced and thus have an Instance ID that you can use to refer to them)

### Destiny.DestinyEquipItemResults
* Destiny.DestinyEquipItemResults `object`: The results of a bulk Equipping operation performed through the Destiny API.
  * equipResults `array`
    * items [Destiny.DestinyEquipItemResult](#destiny.destinyequipitemresult)

### Destiny.DestinyGameVersions
* Destiny.DestinyGameVersions `integer` (values: 0, 1): A flags enumeration indicating the versions of the game that a given user has purchased.

### Destiny.DestinyGatingScope
* Destiny.DestinyGatingScope `integer` (values: 0, 1, 2, 3, 4, 5, 6): This enumeration represents the most restrictive type of gating that is being performed by an entity. This is useful as a shortcut to avoid a lot of lookups when determining whether the gating on an Entity applies to everyone equally, or to their specific Profile or Character states.

### Destiny.DestinyGender
* Destiny.DestinyGender `integer` (values: 0, 1, 2)

### Destiny.DestinyItemQuantity
* Destiny.DestinyItemQuantity `object`: Used in a number of Destiny contracts to return data about an item stack and its quantity. Can optionally return an itemInstanceId if the item is instanced - in which case, the quantity returned will be 1. If it's not... uh, let me know okay? Thanks.
  * itemHash `integer`: The hash identifier for the item in question. Use it to look up the item's DestinyInventoryItemDefinition.
  * itemInstanceId `integer`: If this quantity is referring to a specific instance of an item, this will have the item's instance ID. Normally, this will be null.
  * quantity `integer`: The amount of the item needed/available depending on the context of where DestinyItemQuantity is being used.

### Destiny.DestinyItemSortType
* Destiny.DestinyItemSortType `integer` (values: 0, 1, 2): Determines how items are sorted in an inventory bucket.

### Destiny.DestinyItemSubType
* Destiny.DestinyItemSubType `integer` (values: 0, 1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20): This Enumeration further classifies items by more specific categorizations than DestinyItemType. The "Sub-Type" is where we classify and categorize items one step further in specificity: "Auto Rifle" instead of just "Weapon" for example, or "Vanguard Bounty" instead of merely "Bounty".

### Destiny.DestinyItemType
* Destiny.DestinyItemType `integer` (values: 0, 1, 2, 3, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19): An enumeration that indicates the high-level "type" of the item, attempting to iron out the context specific differences for specific instances of an entity. For instance, though a weapon may be of various wepaon "Types", in DestinyItemType they are all classified as "Weapon". This allows for better filtering on a higher level of abstraction for the concept of types.

### Destiny.DestinyObjectiveGrantStyle
* Destiny.DestinyObjectiveGrantStyle `integer` (values: 0, 1, 2): Some Objectives provide perks, generally as part of providing some kind of interesting modifier for a Challenge or Quest. This indicates when the Perk is granted.

### Destiny.DestinyProgression
* Destiny.DestinyProgression `object`: Information about a current character's status with a Progression. A progression is a value that can increase with activity and has levels. Think Character Level and Reputation Levels. Combine this "live" data with the related DestinyProgressionDefinition for a full picture of the Progression.
  * currentProgress `integer`: This is the total amount of progress obtained overall for this progression (for instance, the total amount of Character Level experience earned)
  * dailyLimit `integer`: If this progression has a daily limit, this is that limit.
  * dailyProgress `integer`: The amount of progress earned today for this progression.
  * level `integer`: This is the level of the progression (for instance, the Character Level).
  * levelCap `integer`: This is the maximum possible level you can achieve for this progression (for example, the maximum character level obtainable)
  * nextLevelAt `integer`: The total amount of progression (i.e. "Experience") needed in order to reach the next level.
  * progressToNextLevel `integer`: The amount of progression (i.e. "Experience") needed to reach the next level of this Progression. Jeez, progression is such an overloaded word.
  * progressionHash `integer`: The hash identifier of the Progression in question. Use it to look up the DestinyProgressionDefinition in static data.
  * stepIndex `integer`: Progressions define their levels in "steps". Since the last step may be repeatable, the user may be at a higher level than the actual Step achieved in the progression. Not necessarily useful, but potentially interesting for those cruising the API. Relate this to the "steps" property of the DestinyProgression to see which step the user is on, if you care about that. (Note that this is Content Version dependent since it refers to indexes.)
  * weeklyLimit `integer`: If this progression has a weekly limit, this is that limit.
  * weeklyProgress `integer`: The amount of progress earned toward this progression in the current week.

### Destiny.DestinyProgressionScope
* Destiny.DestinyProgressionScope `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8): There are many Progressions in Destiny (think Character Level, or Reputation). These are the various "Scopes" of Progressions, which affect many things: * Where/if they are stored * How they are calculated * Where they can be used in other game logic

### Destiny.DestinyProgressionStepDisplayEffect
* Destiny.DestinyProgressionStepDisplayEffect `integer` (values: 0, 1, 2): If progression is earned, this determines whether the progression shows visual effects on the character or its item - or neither.

### Destiny.DestinyRace
* Destiny.DestinyRace `integer` (values: 0, 1, 2, 3)

### Destiny.DestinySocketVisibility
* Destiny.DestinySocketVisibility `integer` (values: 0, 1, 2)

### Destiny.DestinyStat
* Destiny.DestinyStat `object`: Represents a stat on an item *or* Character (NOT a Historical Stat, but a physical attribute stat like Attack, Defense etc...)
  * maximumValue `integer`: The highest possible value for the stat, if we were able to compute it. (I wouldn't necessarily trust this value right now. I would like to improve its calculation in later iterations of the API. Consider this a placeholder for desired future functionality)
  * statHash `integer`: The hash identifier for the Stat. Use it to look up the DestinyStatDefinition for static data about the stat.
  * value `integer`: The current value of the Stat.

### Destiny.DestinyStatAggregationType
* Destiny.DestinyStatAggregationType `integer` (values: 0, 1, 2): When a Stat (DestinyStatDefinition) is aggregated, this is the rules used for determining the level and formula used for aggregation.

### Destiny.DestinyTalentNode
* Destiny.DestinyTalentNode `object`: I see you've come to find out more about Talent Nodes. I'm so sorry. Talent Nodes are the conceptual, visual nodes that appear on Talent Grids. Talent Grids, in Destiny 1, were found on almost every instanced item: they had Nodes that could be activated to change the properties of the item. In Destiny 2, Talent Grids only exist for Builds/Subclasses, and while the basic concept is the same (Nodes can be activated once you've gained sufficient Experience on the Item, and provide effects), there are some new concepts from Destiny 1. Examine DestinyTalentGridDefinition and its subordinates for more information. This is the "Live" information for the current status of a Talent Node on a specific item. Talent Nodes have many Steps, but only one can be active at any one time: and it is the Step that determines both the visual and the game state-changing properties that the Node provides. Examine this and DestinyTalentNodeStepDefinition carefully. *IMPORTANT NOTE* Talent Nodes are, unfortunately, Content Version DEPENDENT. Though they refer to hashes for Nodes and Steps, those hashes are not guaranteed to be immutable across content versions. This is a source of great exasperation for me, but as a result anyone using Talent Grid data must ensure that the content version of their static content matches that of the server responses before showing or making decisions based on talent grid data.
  * activationGridLevel `integer`: The progression level required on the Talent Grid in order to be able to activate this talent node. Talent Grids have their own Progression - similar to Character Level, but in this case it is experience related to the item itself.
  * hidden `boolean`: Whether or not the talent node is actually visible in the game's UI. Whether you want to show it in your own UI is up to you! I'm not gonna tell you who to sock it to.
  * isActivated `boolean`: If true, the node is activated: it's current step then provides its benefits.
  * materialsToUpgrade `array`: If the node has material requirements to be activated, this is the list of those requirements.
    * items [Destiny.Definitions.DestinyMaterialRequirement](#destiny.definitions.destinymaterialrequirement)
  * nodeHash `integer`: The hash of the Talent Node being referred to (in DestinyTalentGridDefinition.nodes). Deceptively CONTENT VERSION DEPENDENT. We have no guarantee of the hash's immutability between content versions.
  * nodeIndex `integer`: The index of the Talent Node being referred to (an index into DestinyTalentGridDefinition.nodes[]). CONTENT VERSION DEPENDENT.
  * nodeStatsBlock `object`: This property has some history. A talent grid can provide stats on both the item it's related to and the character equipping the item. This returns data about those stat bonuses.
    * currentStepStats `array`: The stat benefits conferred when this talent node is activated for the current Step that is active on the node.
      * items [Destiny.DestinyStat](#destiny.destinystat)
    * nextStepStats `array`: This is a holdover from the old days of Destiny 1, when a node could be activated multiple times, conferring multiple steps worth of benefits: you would use this property to show what activating the "next" step on the node would provide vs. what the current step is providing. While Nodes are currently not being used this way, the underlying system for this functionality still exists. I hesitate to remove this property while the ability for designers to make such a talent grid still exists. Whether you want to show it is up to you.
      * items [Destiny.DestinyStat](#destiny.destinystat)
  * progressPercent `number`: If you want to show a progress bar or circle for how close this talent node is to being activate-able, this is the percentage to show. It follows the node's underlying rules about when the progress bar should first show up, and when it should be filled.
  * state `object`: An DestinyTalentNodeState enum value indicating the node's state: whether it can be activated or swapped, and why not if neither can be performed.
  * stepIndex `integer`: The currently relevant Step for the node. It is this step that has rendering data for the node and the benefits that are provided if the node is activated. (the actual rules for benefits provided are extremely complicated in theory, but with how Talent Grids are being used in Destiny 2 you don't have to worry about a lot of those old Destiny 1 rules.) This is an index into: DestinyTalentGridDefinition.nodes[nodeIndex].steps[stepIndex]

### Destiny.DestinyTalentNodeStatBlock
* Destiny.DestinyTalentNodeStatBlock `object`: This property has some history. A talent grid can provide stats on both the item it's related to and the character equipping the item. This returns data about those stat bonuses.
  * currentStepStats `array`: The stat benefits conferred when this talent node is activated for the current Step that is active on the node.
    * items [Destiny.DestinyStat](#destiny.destinystat)
  * nextStepStats `array`: This is a holdover from the old days of Destiny 1, when a node could be activated multiple times, conferring multiple steps worth of benefits: you would use this property to show what activating the "next" step on the node would provide vs. what the current step is providing. While Nodes are currently not being used this way, the underlying system for this functionality still exists. I hesitate to remove this property while the ability for designers to make such a talent grid still exists. Whether you want to show it is up to you.
    * items [Destiny.DestinyStat](#destiny.destinystat)

### Destiny.DestinyTalentNodeState
* Destiny.DestinyTalentNodeState `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13)

### Destiny.DestinyUnlockStatus
* Destiny.DestinyUnlockStatus `object`: Indicates the status of an "Unlock Flag" on a Character or Profile.
  * isSet `boolean`: Whether the unlock flag is set.
  * unlockHash `integer`: The hash identifier for the Unlock Flag. Use to lookup DestinyUnlockDefinition for static data. Not all unlocks have human readable data - in fact, most don't. But when they do, it can be very useful to show. Even if they don't have human readable data, you might be able to infer the meaning of an unlock flag with a bit of experimentation...

### Destiny.DestinyUnlockValueUIStyle
* Destiny.DestinyUnlockValueUIStyle `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8): If you're showing an unlock value in the UI, this is the format in which it should be shown. You'll have to build your own algorithms on the client side to determine how best to render these options.

### Destiny.DestinyVendorInteractionRewardSelection
* Destiny.DestinyVendorInteractionRewardSelection `integer` (values: 0, 1, 2): When a Vendor Interaction provides rewards, they'll either let you choose one or let you have all of them. This determines which it will be.

### Destiny.DestinyVendorItemRefundPolicy
* Destiny.DestinyVendorItemRefundPolicy `integer` (values: 0, 1, 2): The action that happens when the user attempts to refund an item.

### Destiny.DestinyVendorReplyType
* Destiny.DestinyVendorReplyType `integer` (values: 0, 1, 2): This determines the type of reply that a Vendor will have during an Interaction.

### Destiny.DyeReference
* Destiny.DyeReference `object`
  * channelHash `integer`
  * dyeHash `integer`

### Destiny.Entities.Characters.DestinyCharacterActivitiesComponent
* Destiny.Entities.Characters.DestinyCharacterActivitiesComponent `object`: This component holds activity data for a character. It will tell you about the character's current activity status, as well as activities that are available to the user.
  * availableActivities `array`: The list of activities that the user can play.
    * items [Destiny.DestinyActivity](#destiny.destinyactivity)
  * currentActivityHash `integer`: If the user is in an activity, this will be the hash of the Activity being played. Note that you must combine this info with currentActivityModeHash to get a real picture of what the user is doing right now. For instance, PVP "Activities" are just maps: it's the ActivityMode that determines what type of PVP game they're playing.
  * currentActivityModeHash `integer`: If the user is in an activity, this will be the hash of the activity mode being played. Combine with currentActivityHash to give a person a full picture of what they're doing right now.
  * currentActivityModeHashes `array`
    * items `integer`
  * currentActivityModeType `integer` (values: 0, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 37, 38, 39, 40)
  * currentActivityModeTypes `array`
    * items [Destiny.HistoricalStats.Definitions.DestinyActivityModeType](#destiny.historicalstats.definitions.destinyactivitymodetype)
  * currentPlaylistActivityHash `integer`
  * dateActivityStarted `string`: The last date that the user started playing an activity.
  * lastCompletedStoryHash `integer`: This will have the activity hash of the last completed story/campaign mission, in case you care about that.

### Destiny.Entities.Characters.DestinyCharacterComponent
* Destiny.Entities.Characters.DestinyCharacterComponent `object`: This component contains base properties of the character. You'll probably want to always request this component, but hey you do you.
  * baseCharacterLevel `integer`: The "base" level of your character, not accounting for any light level.
  * characterId `integer`: The unique identifier for the character.
  * classHash `integer`: Use this hash to look up the character's DestinyClassDefinition.
  * classType `object`: Mostly for historical purposes at this point, this is an enumeration for the character's class.
  * dateLastPlayed `string`: The last date that the user played Destiny.
  * emblemBackgroundPath `string`: A shortcut path to the user's currently equipped emblem background image. If you're just showing summary info for a user, this is more convenient than examining their equipped emblem and looking up the definition.
  * emblemHash `integer`: The hash of the currently equipped emblem for the user. Can be used to look up the DestinyInventoryItemDefinition.
  * emblemPath `string`: A shortcut path to the user's currently equipped emblem image. If you're just showing summary info for a user, this is more convenient than examining their equipped emblem and looking up the definition.
  * genderHash `integer`: Use this hash to look up the character's DestinyGenderDefinition.
  * genderType `object`: Mostly for historical purposes at this point, this is an enumeration for the character's Gender.
  * levelProgression `object`: The progression that indicates your character's level. Not their light level, but their character level: you know, the thing you max out a couple hours in and then ignore for the sake of light level.
    * currentProgress `integer`: This is the total amount of progress obtained overall for this progression (for instance, the total amount of Character Level experience earned)
    * dailyLimit `integer`: If this progression has a daily limit, this is that limit.
    * dailyProgress `integer`: The amount of progress earned today for this progression.
    * level `integer`: This is the level of the progression (for instance, the Character Level).
    * levelCap `integer`: This is the maximum possible level you can achieve for this progression (for example, the maximum character level obtainable)
    * nextLevelAt `integer`: The total amount of progression (i.e. "Experience") needed in order to reach the next level.
    * progressToNextLevel `integer`: The amount of progression (i.e. "Experience") needed to reach the next level of this Progression. Jeez, progression is such an overloaded word.
    * progressionHash `integer`: The hash identifier of the Progression in question. Use it to look up the DestinyProgressionDefinition in static data.
    * stepIndex `integer`: Progressions define their levels in "steps". Since the last step may be repeatable, the user may be at a higher level than the actual Step achieved in the progression. Not necessarily useful, but potentially interesting for those cruising the API. Relate this to the "steps" property of the DestinyProgression to see which step the user is on, if you care about that. (Note that this is Content Version dependent since it refers to indexes.)
    * weeklyLimit `integer`: If this progression has a weekly limit, this is that limit.
    * weeklyProgress `integer`: The amount of progress earned toward this progression in the current week.
  * light `integer`: The user's calculated "Light Level". Light level is an indicator of your power that mostly matters in the end game, once you've reached the maximum character level: it's a level that's dependent on the average Attack/Defense power of your items.
  * membershipId `integer`: Every Destiny Profile has a membershipId. This is provided on the character as well for convenience.
  * membershipType `object`: membershipType tells you the platform on which the character plays. Examine the BungieMembershipType enumeration for possible values.
  * minutesPlayedThisSession `integer`: If the user is currently playing, this is how long they've been playing.
  * minutesPlayedTotal `integer`: If this value is 525,600, then they played Destiny for a year. Or they're a very dedicated Rent fan. Note that this includes idle time, not just time spent actually in activities shooting things.
  * percentToNextLevel `number`: A number between 0 and 100, indicating the whole and fractional % remaining to get to the next character level.
  * raceHash `integer`: Use this hash to look up the character's DestinyRaceDefinition.
  * raceType `object`: Mostly for historical purposes at this point, this is an enumeration for the character's race.
  * stats `object`: Your character's stats, such as Agility, Resilience, etc... *not* historical stats.

### Destiny.Entities.Characters.DestinyCharacterProgressionComponent
* Destiny.Entities.Characters.DestinyCharacterProgressionComponent `object`: This component returns anything that could be considered "Progression" on a user: data where the user is gaining levels, reputation, completions, rewards, etc...
  * factions `object`: A dictionary of all known Factions, keyed by the Faction's hash. It contains data about this character's status with the faction.
  * milestones `object`: Milestones are related to the simple progressions shown in the game, but return additional and hopefully helpful information for users about the specifics of the Milestone's status.
  * progressions `object`: A Dictionary of all known progressions for the Character, keyed by the Progression's hash.
  * quests `array`: If the user has any active quests, the quests' statuses will be returned here.
    * items [Destiny.Quests.DestinyQuestStatus](#destiny.quests.destinyqueststatus)
  * uninstancedItemObjectives `object`: Sometimes, you have items in your inventory that don't have instances, but still have Objective information. This provides you that objective information for uninstanced items. 

### Destiny.Entities.Characters.DestinyCharacterRenderComponent
* Destiny.Entities.Characters.DestinyCharacterRenderComponent `object`: Only really useful if you're attempting to render the character's current appearance in 3D, this returns a bare minimum of information, pre-aggregated, that you'll need to perform that rendering. Note that you need to combine this with other 3D assets and data from our servers.
  * customDyes `array`: Custom dyes, calculated by iterating over the character's equipped items. Useful for pre-fetching all of the dye data needed from our server.
    * items [Destiny.DyeReference](#destiny.dyereference)
  * customization `object`: This is actually something that Spasm.js *doesn't* do right now, and that we don't return assets for yet. This is the data about what character customization options you picked. You can combine this with DestinyCharacterCustomizationOptionDefinition to show some cool info, and hopefully someday to actually render a user's face in 3D. We'll see if we ever end up with time for that.
    * decalColor `integer`
    * decalIndex `integer`
    * eyeColor `integer`
    * face `integer`
    * featureColors `array`
      * items `integer`
    * featureIndex `integer`
    * hairColors `array`
      * items `integer`
    * hairIndex `integer`
    * lipColor `integer`
    * personality `integer`
    * skinColor `integer`
    * wearHelmet `boolean`
  * peerView `object`: A minimal view of:
    * equipment `array`
      * items [Destiny.Character.DestinyItemPeerView](#destiny.character.destinyitempeerview)

### Destiny.Entities.Inventory.DestinyInventoryComponent
* Destiny.Entities.Inventory.DestinyInventoryComponent `object`: A list of minimal information for items in an inventory: be it a character's inventory, or a Profile's inventory. (Note that the Vault is a collection of inventory buckets in the Profile's inventory)
  * items `array`: The items in this inventory. If you care to bucket them, use the item's bucketHash property to group them.
    * items [Destiny.Entities.Items.DestinyItemComponent](#destiny.entities.items.destinyitemcomponent)

### Destiny.Entities.Items.DestinyItemComponent
* Destiny.Entities.Items.DestinyItemComponent `object`: The base item component, filled with properties that are generally useful to know in any item request or that don't feel worthwhile to put in their own component.
  * bindStatus `object`: If the item is bound to a location, it will be specified in this enum.
  * bucketHash `integer`: The hash identifier for the specific inventory bucket in which the item is located.
  * itemHash `integer`: The identifier for the item's definition, which is where most of the useful static information for the item can be found.
  * itemInstanceId `integer`: If the item is instanced, it will have an instance ID. Lack of an instance ID implies that the item has no distinct local qualities aside from stack size.
  * location `object`: An easy reference for where the item is located. Redundant if you got the item from an Inventory, but useful when making detail calls on specific items.
  * lockable `boolean`: If the item can be locked, this will indicate that state.
  * quantity `integer`: The quantity of the item in this stack. Note that Instanced items cannot stack. If an instanced item, this value will always be 1 (as the stack has exactly one item in it)
  * state `object`: A flags enumeration indicating the states of the item: whether it's tracked or locked for example.
  * transferStatus `object`: If there is a known error state that would cause this item to not be transferable, this Flags enum will indicate all of those error states. Otherwise, it will be 0 (CanTransfer).

### Destiny.Entities.Items.DestinyItemInstanceComponent
* Destiny.Entities.Items.DestinyItemInstanceComponent `object`: If an item is "instanced", this will contain information about the item's instance that doesn't fit easily into other components. One might say this is the "essential" instance data for the item.
  * canEquip `boolean`: If this is an equippable item, you can check it here. There are permanent as well as transitory reasons why an item might not be able to be equipped: check cannotEquipReason for details.
  * cannotEquipReason `object`: If you cannot equip the item, this is a flags enum that enumerates all of the reasons why you couldn't equip the item. You may need to refine your UI further by using unlockHashesRequiredToEquip and equipRequiredLevel.
  * damageType `object`: If the item has a damage type, this is the item's current damage type.
  * damageTypeHash `integer`: The current damage type's hash, so you can look up localized info and icons for it.
  * equipRequiredLevel `integer`: If the item cannot be equipped until you reach a certain level, that level will be reflected here.
  * isEquipped `boolean`: Is the item currently equipped on the given character?
  * itemLevel `integer`: The Item's "Level" has the most significant bearing on its stats, such as Light and Power.
  * primaryStat `object`: The item stat that we consider to be "primary" for the item. For instance, this would be "Attack" for Weapons or "Defense" for armor.
    * maximumValue `integer`: The highest possible value for the stat, if we were able to compute it. (I wouldn't necessarily trust this value right now. I would like to improve its calculation in later iterations of the API. Consider this a placeholder for desired future functionality)
    * statHash `integer`: The hash identifier for the Stat. Use it to look up the DestinyStatDefinition for static data about the stat.
    * value `integer`: The current value of the Stat.
  * quality `integer`: The "Quality" of the item has a lesser - but still impactful - bearing on stats like Light and Power.
  * unlockHashesRequiredToEquip `array`: Sometimes, there are limitations to equipping that are represented by character-level flags called "unlocks".
    * items `integer`

### Destiny.Entities.Items.DestinyItemObjectivesComponent
* Destiny.Entities.Items.DestinyItemObjectivesComponent `object`: Items can have objectives and progression. When you request this block, you will obtain information about any Objectives and progression tied to this item.
  * objectives `array`: If the item has a hard association with objectives, your progress on them will be defined here. 
    * items [Destiny.Quests.DestinyObjectiveProgress](#destiny.quests.destinyobjectiveprogress)

### Destiny.Entities.Items.DestinyItemPerksComponent
* Destiny.Entities.Items.DestinyItemPerksComponent `object`: Instanced items can have perks: benefits that the item bestows.
  * perks `array`: The list of perks to display in an item tooltip - and whether or not they have been activated.
    * items [Destiny.Perks.DestinyPerkReference](#destiny.perks.destinyperkreference)

### Destiny.Entities.Items.DestinyItemRenderComponent
* Destiny.Entities.Items.DestinyItemRenderComponent `object`: Many items can be rendered in 3D. When you request this block, you will obtain the custom data needed to render this specific instance of the item.
  * artRegions `object`: A dictionary for rendering gear components, with:
  * useCustomDyes `boolean`: If you should use custom dyes on this item, it will be indicated here.

### Destiny.Entities.Items.DestinyItemSocketState
* Destiny.Entities.Items.DestinyItemSocketState `object`: The status of a given item's socket. (which plug is inserted, if any: whether it is enabled, what "reusable" plugs can be inserted, etc...)
  * enableFailIndexes `array`: If a plug is inserted but not enabled, this will be populated with indexes into the plug item definition's plug.enabledRules property, so that you can show the reasons why it is not enabled.
    * items `integer`
  * isEnabled `boolean`: Even if a plug is inserted, it doesn't mean it's enabled.
  * plugHash `integer`: The currently active plug, if any.
  * reusablePlugHashes `array`: If the item supports reusable plugs, this is the list of plug item hashes that are currently allowed to be used for this socket. (sometimes restrictions may cause reusable plugs defined on the item definition to not be valid, so you should trust the instanced reusablePlugHashes list rather than the definition's list)
    * items `integer`

### Destiny.Entities.Items.DestinyItemSocketsComponent
* Destiny.Entities.Items.DestinyItemSocketsComponent `object`: Instanced items can have sockets, which are slots on the item where plugs can be inserted.
  * sockets `array`: The list of all sockets on the item, and their status information.
    * items [Destiny.Entities.Items.DestinyItemSocketState](#destiny.entities.items.destinyitemsocketstate)

### Destiny.Entities.Items.DestinyItemStatsComponent
* Destiny.Entities.Items.DestinyItemStatsComponent `object`: If you want the stats on an item's instanced data, get this component.
  * stats `object`: If the item has stats that it provides (damage, defense, etc...), it will be given here.

### Destiny.Entities.Items.DestinyItemTalentGridComponent
* Destiny.Entities.Items.DestinyItemTalentGridComponent `object`: Well, we're here in Destiny 2, and Talent Grids are unfortunately still around.
  * gridProgression `object`: If the item has a progression, it will be detailed here. A progression means that the item can gain experience. Thresholds of experience are what determines whether and when a talent node can be activated.
    * currentProgress `integer`: This is the total amount of progress obtained overall for this progression (for instance, the total amount of Character Level experience earned)
    * dailyLimit `integer`: If this progression has a daily limit, this is that limit.
    * dailyProgress `integer`: The amount of progress earned today for this progression.
    * level `integer`: This is the level of the progression (for instance, the Character Level).
    * levelCap `integer`: This is the maximum possible level you can achieve for this progression (for example, the maximum character level obtainable)
    * nextLevelAt `integer`: The total amount of progression (i.e. "Experience") needed in order to reach the next level.
    * progressToNextLevel `integer`: The amount of progression (i.e. "Experience") needed to reach the next level of this Progression. Jeez, progression is such an overloaded word.
    * progressionHash `integer`: The hash identifier of the Progression in question. Use it to look up the DestinyProgressionDefinition in static data.
    * stepIndex `integer`: Progressions define their levels in "steps". Since the last step may be repeatable, the user may be at a higher level than the actual Step achieved in the progression. Not necessarily useful, but potentially interesting for those cruising the API. Relate this to the "steps" property of the DestinyProgression to see which step the user is on, if you care about that. (Note that this is Content Version dependent since it refers to indexes.)
    * weeklyLimit `integer`: If this progression has a weekly limit, this is that limit.
    * weeklyProgress `integer`: The amount of progress earned toward this progression in the current week.
  * isGridComplete `boolean`: Indicates whether the talent grid on this item is completed, and thus whether it should have a gold border around it.
  * nodes `array`: Detailed information about the individual nodes in the talent grid.
    * items [Destiny.DestinyTalentNode](#destiny.destinytalentnode)
  * talentGridHash `integer`: Most items don't have useful talent grids anymore, but Builds in particular still do.

### Destiny.Entities.Profiles.DestinyProfileComponent
* Destiny.Entities.Profiles.DestinyProfileComponent `object`: The most essential summary information about a Profile (in Destiny 1, we called these "Accounts").
  * characterIds `array`: A list of the character IDs, for further querying on your part.
    * items `integer`
  * dateLastPlayed `string`: The last time the user played with any character on this Profile.
  * userInfo `object`: If you need to render the Profile (their platform name, icon, etc...) somewhere, this property contains that information.
    * displayName `string`: Display Name the player has chosen for themselves. The display name is optional when the data type is used as input to a platform API.
    * iconPath `string`: URL the Icon if available.
    * membershipId `integer`: Membership ID as they user is known in the Accounts service
    * membershipType `object`: Type of the membership.
    * supplementalDisplayName `string`: A platform specific additional display name - ex: psn Real Name, bnet Unique Name, etc.
  * versionsOwned `object`: If you want to know what expansions they own, this will contain that data.

### Destiny.Entities.Profiles.DestinyVendorReceiptsComponent
* Destiny.Entities.Profiles.DestinyVendorReceiptsComponent `object`: For now, this isn't used for much: it's a record of the recent refundable purchases that the user has made. In the future, it could be used for providing refunds/buyback via the API. Wouldn't that be fun?
  * receipts `array`: The receipts for refundable purchases made at a vendor.
    * items [Destiny.Vendors.DestinyVendorReceipt](#destiny.vendors.destinyvendorreceipt)

### Destiny.Entities.Vendors.DestinyVendorCategoriesComponent
* Destiny.Entities.Vendors.DestinyVendorCategoriesComponent `object`: A vendor can have many categories of items that they sell. This component will return the category information for available items, as well as the index into those items in the user's sale item list.
  * categories `array`: The list of categories for items that the vendor sells, in rendering order.
    * items [Destiny.Entities.Vendors.DestinyVendorCategory](#destiny.entities.vendors.destinyvendorcategory)

### Destiny.Entities.Vendors.DestinyVendorCategory
* Destiny.Entities.Vendors.DestinyVendorCategory `object`: Information about the category and items currently sold in that category.
  * categoryIndex `integer`: An index into the DestinyVendorDefinition.categories property, so you can grab the display data for this category.
  * itemIndexes `array`: An ordered list of indexes into items being sold in this category (DestinyVendorDefinition.itemList) which will contain more information about the items being sold themselves. Can also be used to index into DestinyVendorSaleItemComponent data, if you asked for that data to be returned.
    * items `integer`

### Destiny.Entities.Vendors.DestinyVendorComponent
* Destiny.Entities.Vendors.DestinyVendorComponent `object`: This component contains essential/summary information about the vendor.
  * ackState `object`: Long ago, we thought it would be a good idea to have special UI that showed whether or not you've seen a Vendor's inventory after cycling. 
    * ackId `string`: Identifier to use when acknowledging the related item. [category]:[entityId]:[targetId]
    * needsAck `boolean`: Indicates the related item has not been acknowledged.
  * canPurchase `boolean`: If True, you can purchase from the Vendor.
  * enabled `boolean`: If True, the Vendor is currently accessible. 
  * nextRefreshDate `string`: The date when this vendor's inventory will next rotate/refresh.
  * progression `object`: If the Vendor has a related Reputation, this is the Progression data that represents the character's Reputation level with this Vendor.
    * currentProgress `integer`: This is the total amount of progress obtained overall for this progression (for instance, the total amount of Character Level experience earned)
    * dailyLimit `integer`: If this progression has a daily limit, this is that limit.
    * dailyProgress `integer`: The amount of progress earned today for this progression.
    * level `integer`: This is the level of the progression (for instance, the Character Level).
    * levelCap `integer`: This is the maximum possible level you can achieve for this progression (for example, the maximum character level obtainable)
    * nextLevelAt `integer`: The total amount of progression (i.e. "Experience") needed in order to reach the next level.
    * progressToNextLevel `integer`: The amount of progression (i.e. "Experience") needed to reach the next level of this Progression. Jeez, progression is such an overloaded word.
    * progressionHash `integer`: The hash identifier of the Progression in question. Use it to look up the DestinyProgressionDefinition in static data.
    * stepIndex `integer`: Progressions define their levels in "steps". Since the last step may be repeatable, the user may be at a higher level than the actual Step achieved in the progression. Not necessarily useful, but potentially interesting for those cruising the API. Relate this to the "steps" property of the DestinyProgression to see which step the user is on, if you care about that. (Note that this is Content Version dependent since it refers to indexes.)
    * weeklyLimit `integer`: If this progression has a weekly limit, this is that limit.
    * weeklyProgress `integer`: The amount of progress earned toward this progression in the current week.
  * vendorHash `integer`: The unique identifier for the vendor. Use it to look up their DestinyVendorDefinition.

### Destiny.Entities.Vendors.DestinyVendorSaleItemComponent
* Destiny.Entities.Vendors.DestinyVendorSaleItemComponent `object`: Request this component if you want the details about an item being sold in relation to the character making the request: whether the character can buy it, whether they can afford it, and other data related to purchasing the item.
  * costs `array`: A summary of the current costs of the item.
    * items [Destiny.DestinyItemQuantity](#destiny.destinyitemquantity)
  * failureIndexes `array`: Indexes in to the "failureStrings" lookup table in DestinyVendorDefinition for the given Vendor. Gives some more reliable failure information for why you can't purchase an item.
    * items `integer`
  * itemHash `integer`: The hash of the item being sold, as a quick shortcut for looking up the DestinyInventoryItemDefinition of the sale item.
  * requiredUnlocks `array`: If you can't buy the item due to a complex character state, these will be hashes for DestinyUnlockDefinitions that you can check to see messages regarding the failure (if the unlocks have human readable information: it is not guaranteed that Unlocks will have human readable strings, and your application will have to handle that)
    * items `integer`
  * saleStatus `object`: A flag indicating whether the requesting character can buy the item, and if not the reasons why the character can't buy it.
  * unlockStatuses `array`: If any complex unlock states are checked in determining purchasability, these will be returned here along with the status of the unlock check.
    * items [Destiny.DestinyUnlockStatus](#destiny.destinyunlockstatus)
  * vendorItemIndex `integer`: The index into the DestinyVendorDefinition.itemList property. Note that this means Vendor data *is* Content Version dependent: make sure you have the latest content before you use Vendor data, or these indexes may mismatch. 

### Destiny.EquipFailureReason
* Destiny.EquipFailureReason `integer` (values: 0, 1, 2, 4, 8, 16): The reasons why an item cannot be equipped, if any. Many flags can be set, or "None" if

### Destiny.EquippingItemBlockAttributes
* Destiny.EquippingItemBlockAttributes `integer` (values: 0, 1)

### Destiny.HistoricalStats.Definitions.DestinyActivityModeType
* Destiny.HistoricalStats.Definitions.DestinyActivityModeType `integer` (values: 0, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 37, 38, 39, 40)

### Destiny.HistoricalStats.Definitions.DestinyActivityModeType[]
* Destiny.HistoricalStats.Definitions.DestinyActivityModeType[] `array`
  * items [Destiny.HistoricalStats.Definitions.DestinyActivityModeType](#destiny.historicalstats.definitions.destinyactivitymodetype)

### Destiny.HistoricalStats.Definitions.DestinyHistoricalStatsDefinition
* Destiny.HistoricalStats.Definitions.DestinyHistoricalStatsDefinition `object`
  * category `object`: Category for the stat.
  * group `object`: Statistic group
  * iconImage `string`: Optional URI to an icon for the statistic
  * medalTierHash `integer`: The tier associated with this medal - be it implicitly or explicitly.
  * mergeMethod `integer` (values: 0, 1, 2): Optional icon for the statistic
  * modes `array`: Game modes where this statistic can be reported.
    * items [Destiny.HistoricalStats.Definitions.DestinyActivityModeType](#destiny.historicalstats.definitions.destinyactivitymodetype)
  * periodTypes `array`: Time periods the statistic covers
    * items [Destiny.HistoricalStats.Definitions.PeriodType](#destiny.historicalstats.definitions.periodtype)
  * statDescription `string`: Description of a stat if applicable.
  * statId `string`: Unique programmer friendly ID for this stat
  * statName `string`: Display name
  * unitLabel `string`: Localized Unit Name for the stat.
  * unitType `object`: Unit, if any, for the statistic
  * weight `integer`: Weight assigned to this stat indicating its relative impressiveness.

### Destiny.HistoricalStats.Definitions.DestinyStatsCategoryType
* Destiny.HistoricalStats.Definitions.DestinyStatsCategoryType `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)

### Destiny.HistoricalStats.Definitions.DestinyStatsGroupType
* Destiny.HistoricalStats.Definitions.DestinyStatsGroupType `integer` (values: 0, 1, 2, 3, 100, 101, 102, 103, 104)

### Destiny.HistoricalStats.Definitions.DestinyStatsMergeMethod
* Destiny.HistoricalStats.Definitions.DestinyStatsMergeMethod `integer` (values: 0, 1, 2)

### Destiny.HistoricalStats.Definitions.PeriodType
* Destiny.HistoricalStats.Definitions.PeriodType `integer` (values: 0, 1, 2, 3)

### Destiny.HistoricalStats.Definitions.PeriodType[]
* Destiny.HistoricalStats.Definitions.PeriodType[] `array`
  * items [Destiny.HistoricalStats.Definitions.PeriodType](#destiny.historicalstats.definitions.periodtype)

### Destiny.HistoricalStats.Definitions.UnitType
* Destiny.HistoricalStats.Definitions.UnitType `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)

### Destiny.HistoricalStats.DestinyActivityHistoryResults
* Destiny.HistoricalStats.DestinyActivityHistoryResults `object`
  * activities `array`: List of activities, the most recent activity first.
    * items [Destiny.HistoricalStats.DestinyHistoricalStatsPeriodGroup](#destiny.historicalstats.destinyhistoricalstatsperiodgroup)

### Destiny.HistoricalStats.DestinyAggregateActivityResults
* Destiny.HistoricalStats.DestinyAggregateActivityResults `object`
  * activities `array`: List of all activities the player has participated in.
    * items [Destiny.HistoricalStats.DestinyAggregateActivityStats](#destiny.historicalstats.destinyaggregateactivitystats)

### Destiny.HistoricalStats.DestinyAggregateActivityStats
* Destiny.HistoricalStats.DestinyAggregateActivityStats `object`
  * activityHash `integer`: Hash ID that can be looked up in the DestinyActivityTable.
  * values `object`: Collection of stats for the player in this activity.

### Destiny.HistoricalStats.DestinyClanAggregateStat
* Destiny.HistoricalStats.DestinyClanAggregateStat `object`
  * mode `object`: The id of the mode of stats (allPvp, allPvE, etc)
  * statId `string`: The id of the stat
  * value `object`: Value of the stat for this player
    * basic `object`: Basic stat value.
      * displayValue `string`: Localized formated version of the value.
      * value `number`: Raw value of the statistic
    * pga `object`: Per game average for the statistic, if applicable
      * displayValue `string`: Localized formated version of the value.
      * value `number`: Raw value of the statistic
    * statId `string`: Unique ID for this stat
    * weighted `object`: Weighted value of the stat if a weight greater than 1 has been assigned.
      * displayValue `string`: Localized formated version of the value.
      * value `number`: Raw value of the statistic

### Destiny.HistoricalStats.DestinyHistoricalStatsAccountResult
* Destiny.HistoricalStats.DestinyHistoricalStatsAccountResult `object`
  * characters `array`
    * items [Destiny.HistoricalStats.DestinyHistoricalStatsPerCharacter](#destiny.historicalstats.destinyhistoricalstatspercharacter)
  * mergedAllCharacters [Destiny.HistoricalStats.DestinyHistoricalStatsWithMerged](#destiny.historicalstats.destinyhistoricalstatswithmerged)
  * mergedDeletedCharacters [Destiny.HistoricalStats.DestinyHistoricalStatsWithMerged](#destiny.historicalstats.destinyhistoricalstatswithmerged)

### Destiny.HistoricalStats.DestinyHistoricalStatsActivity
* Destiny.HistoricalStats.DestinyHistoricalStatsActivity `object`
  * directorActivityHash `integer`
  * instanceId `integer`: This value can be used to get additional data about this activity such as who else was playing.
  * isPrivate `boolean`: Whether or not the match was a private match.
  * mode `object`: Indicates the game mode of the activity.
  * modes `array`
    * items [Destiny.HistoricalStats.Definitions.DestinyActivityModeType](#destiny.historicalstats.definitions.destinyactivitymodetype)
  * referenceId `integer`: Hash ID that can be looked up in the DestinyActivityTable.

### Destiny.HistoricalStats.DestinyHistoricalStatsByPeriod
* Destiny.HistoricalStats.DestinyHistoricalStatsByPeriod `object`
  * allTime `object`
  * allTimeTier1 `object`
  * allTimeTier2 `object`
  * allTimeTier3 `object`
  * daily `array`
    * items [Destiny.HistoricalStats.DestinyHistoricalStatsPeriodGroup](#destiny.historicalstats.destinyhistoricalstatsperiodgroup)
  * monthly `array`
    * items [Destiny.HistoricalStats.DestinyHistoricalStatsPeriodGroup](#destiny.historicalstats.destinyhistoricalstatsperiodgroup)

### Destiny.HistoricalStats.DestinyHistoricalStatsPerCharacter
* Destiny.HistoricalStats.DestinyHistoricalStatsPerCharacter `object`
  * characterId `integer`
  * deleted `boolean`
  * merged [Destiny.HistoricalStats.DestinyHistoricalStatsByPeriod](#destiny.historicalstats.destinyhistoricalstatsbyperiod)
  * results `object`

### Destiny.HistoricalStats.DestinyHistoricalStatsPeriodGroup
* Destiny.HistoricalStats.DestinyHistoricalStatsPeriodGroup `object`
  * activityDetails `object`: If the period group is for a specific activity, this property will be set.
    * directorActivityHash `integer`
    * instanceId `integer`: This value can be used to get additional data about this activity such as who else was playing.
    * isPrivate `boolean`: Whether or not the match was a private match.
    * mode `object`: Indicates the game mode of the activity.
    * modes `array`
      * items [Destiny.HistoricalStats.Definitions.DestinyActivityModeType](#destiny.historicalstats.definitions.destinyactivitymodetype)
    * referenceId `integer`: Hash ID that can be looked up in the DestinyActivityTable.
  * period `string`: Period for the group. If the stat periodType is day, then this will have a specific day. If the type is monthly, then this value will be the first day of the applicable month. This value is not set when the periodType is 'all time'.
  * values `object`: Collection of stats for the period.

### Destiny.HistoricalStats.DestinyHistoricalStatsResults
* Destiny.HistoricalStats.DestinyHistoricalStatsResults `object`

### Destiny.HistoricalStats.DestinyHistoricalStatsValue
* Destiny.HistoricalStats.DestinyHistoricalStatsValue `object`
  * basic `object`: Basic stat value.
    * displayValue `string`: Localized formated version of the value.
    * value `number`: Raw value of the statistic
  * pga `object`: Per game average for the statistic, if applicable
    * displayValue `string`: Localized formated version of the value.
    * value `number`: Raw value of the statistic
  * statId `string`: Unique ID for this stat
  * weighted `object`: Weighted value of the stat if a weight greater than 1 has been assigned.
    * displayValue `string`: Localized formated version of the value.
    * value `number`: Raw value of the statistic

### Destiny.HistoricalStats.DestinyHistoricalStatsValuePair
* Destiny.HistoricalStats.DestinyHistoricalStatsValuePair `object`
  * displayValue `string`: Localized formated version of the value.
  * value `number`: Raw value of the statistic

### Destiny.HistoricalStats.DestinyHistoricalStatsWithMerged
* Destiny.HistoricalStats.DestinyHistoricalStatsWithMerged `object`
  * merged [Destiny.HistoricalStats.DestinyHistoricalStatsByPeriod](#destiny.historicalstats.destinyhistoricalstatsbyperiod)
  * results `object`

### Destiny.HistoricalStats.DestinyHistoricalWeaponStats
* Destiny.HistoricalStats.DestinyHistoricalWeaponStats `object`
  * referenceId `integer`: The hash ID of the item definition that describes the weapon.
  * values `object`: Collection of stats for the period.

### Destiny.HistoricalStats.DestinyHistoricalWeaponStatsData
* Destiny.HistoricalStats.DestinyHistoricalWeaponStatsData `object`
  * weapons `array`: List of weapons and their perspective values.
    * items [Destiny.HistoricalStats.DestinyHistoricalWeaponStats](#destiny.historicalstats.destinyhistoricalweaponstats)

### Destiny.HistoricalStats.DestinyLeaderboard
* Destiny.HistoricalStats.DestinyLeaderboard `object`
  * entries `array`
    * items [Destiny.HistoricalStats.DestinyLeaderboardEntry](#destiny.historicalstats.destinyleaderboardentry)
  * statId `string`

### Destiny.HistoricalStats.DestinyLeaderboardEntry
* Destiny.HistoricalStats.DestinyLeaderboardEntry `object`
  * characterId `integer`: ID of the player's best character for the reported stat.
  * player `object`: Identity details of the player
    * bungieNetUserInfo `object`: Details about the player as they are known on BungieNet. This will be undefined if the player has marked their credential private, or does not have a BungieNet account.
      * displayName `string`: Display Name the player has chosen for themselves. The display name is optional when the data type is used as input to a platform API.
      * iconPath `string`: URL the Icon if available.
      * membershipId `integer`: Membership ID as they user is known in the Accounts service
      * membershipType `object`: Type of the membership.
      * supplementalDisplayName `string`: A platform specific additional display name - ex: psn Real Name, bnet Unique Name, etc.
    * characterClass `string`: Class of the character if applicable and available.
    * characterLevel `integer`: Level of the character if available. Zero if it is not available.
    * clanName `string`: Current clan name for the player. This value may be null or an empty string if the user does not have a clan.
    * clanTag `string`: Current clan tag for the player. This value may be null or an empty string if the user does not have a clan.
    * destinyUserInfo `object`: Details about the player as they are known in game (platform display name, Destiny emblem)
      * displayName `string`: Display Name the player has chosen for themselves. The display name is optional when the data type is used as input to a platform API.
      * iconPath `string`: URL the Icon if available.
      * membershipId `integer`: Membership ID as they user is known in the Accounts service
      * membershipType `object`: Type of the membership.
      * supplementalDisplayName `string`: A platform specific additional display name - ex: psn Real Name, bnet Unique Name, etc.
    * lightLevel `integer`: Light Level of the character if available. Zero if it is not available.
  * rank `integer`: Where this player ranks on the leaderboard. A value of 1 is the top rank.
  * value `object`: Value of the stat for this player
    * basic `object`: Basic stat value.
      * displayValue `string`: Localized formated version of the value.
      * value `number`: Raw value of the statistic
    * pga `object`: Per game average for the statistic, if applicable
      * displayValue `string`: Localized formated version of the value.
      * value `number`: Raw value of the statistic
    * statId `string`: Unique ID for this stat
    * weighted `object`: Weighted value of the stat if a weight greater than 1 has been assigned.
      * displayValue `string`: Localized formated version of the value.
      * value `number`: Raw value of the statistic

### Destiny.HistoricalStats.DestinyLeaderboardResults
* Destiny.HistoricalStats.DestinyLeaderboardResults `object`
  * focusCharacterId `integer`: Indicate the character ID of the character that is the focal point of the provided leaderboards. May be null, in which case any character from the focus membership can appear in the provided leaderboards.
  * focusMembershipId `integer`: Indicate the membership ID of the account that is the focal point of the provided leaderboards.

### Destiny.HistoricalStats.DestinyPlayer
* Destiny.HistoricalStats.DestinyPlayer `object`
  * bungieNetUserInfo `object`: Details about the player as they are known on BungieNet. This will be undefined if the player has marked their credential private, or does not have a BungieNet account.
    * displayName `string`: Display Name the player has chosen for themselves. The display name is optional when the data type is used as input to a platform API.
    * iconPath `string`: URL the Icon if available.
    * membershipId `integer`: Membership ID as they user is known in the Accounts service
    * membershipType `object`: Type of the membership.
    * supplementalDisplayName `string`: A platform specific additional display name - ex: psn Real Name, bnet Unique Name, etc.
  * characterClass `string`: Class of the character if applicable and available.
  * characterLevel `integer`: Level of the character if available. Zero if it is not available.
  * clanName `string`: Current clan name for the player. This value may be null or an empty string if the user does not have a clan.
  * clanTag `string`: Current clan tag for the player. This value may be null or an empty string if the user does not have a clan.
  * destinyUserInfo `object`: Details about the player as they are known in game (platform display name, Destiny emblem)
    * displayName `string`: Display Name the player has chosen for themselves. The display name is optional when the data type is used as input to a platform API.
    * iconPath `string`: URL the Icon if available.
    * membershipId `integer`: Membership ID as they user is known in the Accounts service
    * membershipType `object`: Type of the membership.
    * supplementalDisplayName `string`: A platform specific additional display name - ex: psn Real Name, bnet Unique Name, etc.
  * lightLevel `integer`: Light Level of the character if available. Zero if it is not available.

### Destiny.HistoricalStats.DestinyPostGameCarnageReportData
* Destiny.HistoricalStats.DestinyPostGameCarnageReportData `object`
  * activityDetails `object`: Details about the activity.
    * directorActivityHash `integer`
    * instanceId `integer`: This value can be used to get additional data about this activity such as who else was playing.
    * isPrivate `boolean`: Whether or not the match was a private match.
    * mode `object`: Indicates the game mode of the activity.
    * modes `array`
      * items [Destiny.HistoricalStats.Definitions.DestinyActivityModeType](#destiny.historicalstats.definitions.destinyactivitymodetype)
    * referenceId `integer`: Hash ID that can be looked up in the DestinyActivityTable.
  * entries `array`: Collection of players and their data for this activity.
    * items [Destiny.HistoricalStats.DestinyPostGameCarnageReportEntry](#destiny.historicalstats.destinypostgamecarnagereportentry)
  * period `string`: Date and time for the activity.
  * teams `array`: Collection of stats for the player in this activity.
    * items [Destiny.HistoricalStats.DestinyPostGameCarnageReportTeamEntry](#destiny.historicalstats.destinypostgamecarnagereportteamentry)

### Destiny.HistoricalStats.DestinyPostGameCarnageReportEntry
* Destiny.HistoricalStats.DestinyPostGameCarnageReportEntry `object`
  * characterId `integer`: ID of the player's character used in the activity.
  * extended `object`: Extended data extracted from the activity blob.
    * values `object`: Collection of stats for the player in this activity.
    * weapons `array`: List of weapons and their perspective values.
      * items [Destiny.HistoricalStats.DestinyHistoricalWeaponStats](#destiny.historicalstats.destinyhistoricalweaponstats)
  * player `object`: Identity details of the player
    * bungieNetUserInfo `object`: Details about the player as they are known on BungieNet. This will be undefined if the player has marked their credential private, or does not have a BungieNet account.
      * displayName `string`: Display Name the player has chosen for themselves. The display name is optional when the data type is used as input to a platform API.
      * iconPath `string`: URL the Icon if available.
      * membershipId `integer`: Membership ID as they user is known in the Accounts service
      * membershipType `object`: Type of the membership.
      * supplementalDisplayName `string`: A platform specific additional display name - ex: psn Real Name, bnet Unique Name, etc.
    * characterClass `string`: Class of the character if applicable and available.
    * characterLevel `integer`: Level of the character if available. Zero if it is not available.
    * clanName `string`: Current clan name for the player. This value may be null or an empty string if the user does not have a clan.
    * clanTag `string`: Current clan tag for the player. This value may be null or an empty string if the user does not have a clan.
    * destinyUserInfo `object`: Details about the player as they are known in game (platform display name, Destiny emblem)
      * displayName `string`: Display Name the player has chosen for themselves. The display name is optional when the data type is used as input to a platform API.
      * iconPath `string`: URL the Icon if available.
      * membershipId `integer`: Membership ID as they user is known in the Accounts service
      * membershipType `object`: Type of the membership.
      * supplementalDisplayName `string`: A platform specific additional display name - ex: psn Real Name, bnet Unique Name, etc.
    * lightLevel `integer`: Light Level of the character if available. Zero if it is not available.
  * score `object`: Score of the player if available
    * basic `object`: Basic stat value.
      * displayValue `string`: Localized formated version of the value.
      * value `number`: Raw value of the statistic
    * pga `object`: Per game average for the statistic, if applicable
      * displayValue `string`: Localized formated version of the value.
      * value `number`: Raw value of the statistic
    * statId `string`: Unique ID for this stat
    * weighted `object`: Weighted value of the stat if a weight greater than 1 has been assigned.
      * displayValue `string`: Localized formated version of the value.
      * value `number`: Raw value of the statistic
  * standing `integer`: Standing of the player
  * values `object`: Collection of stats for the player in this activity.

### Destiny.HistoricalStats.DestinyPostGameCarnageReportExtendedData
* Destiny.HistoricalStats.DestinyPostGameCarnageReportExtendedData `object`
  * values `object`: Collection of stats for the player in this activity.
  * weapons `array`: List of weapons and their perspective values.
    * items [Destiny.HistoricalStats.DestinyHistoricalWeaponStats](#destiny.historicalstats.destinyhistoricalweaponstats)

### Destiny.HistoricalStats.DestinyPostGameCarnageReportTeamEntry
* Destiny.HistoricalStats.DestinyPostGameCarnageReportTeamEntry `object`
  * score `object`: Score earned by the team
    * basic `object`: Basic stat value.
      * displayValue `string`: Localized formated version of the value.
      * value `number`: Raw value of the statistic
    * pga `object`: Per game average for the statistic, if applicable
      * displayValue `string`: Localized formated version of the value.
      * value `number`: Raw value of the statistic
    * statId `string`: Unique ID for this stat
    * weighted `object`: Weighted value of the stat if a weight greater than 1 has been assigned.
      * displayValue `string`: Localized formated version of the value.
      * value `number`: Raw value of the statistic
  * standing `object`: Team's standing relative to other teams.
    * basic `object`: Basic stat value.
      * displayValue `string`: Localized formated version of the value.
      * value `number`: Raw value of the statistic
    * pga `object`: Per game average for the statistic, if applicable
      * displayValue `string`: Localized formated version of the value.
      * value `number`: Raw value of the statistic
    * statId `string`: Unique ID for this stat
    * weighted `object`: Weighted value of the stat if a weight greater than 1 has been assigned.
      * displayValue `string`: Localized formated version of the value.
      * value `number`: Raw value of the statistic
  * teamId `integer`: Integer ID for the team.
  * teamName `string`: Alpha or Bravo

### Destiny.ItemBindStatus
* Destiny.ItemBindStatus `integer` (values: 0, 1, 2, 3)

### Destiny.ItemLocation
* Destiny.ItemLocation `integer` (values: 0, 1, 2, 3, 4)

### Destiny.ItemState
* Destiny.ItemState `integer` (values: 0, 1, 2)

### Destiny.Milestones.DestinyMilestone
* Destiny.Milestones.DestinyMilestone `object`: Represents a runtime instance of a user's milestone status. Live Milestone data should be combined with DestinyMilestoneDefinition data to show the user a picture of what is available for them to do in the game, and their status in regards to said "things to do." Consider it a big, wonky to-do list, or Advisors 3.0 for those who remember the Destiny 1 API.
  * availableQuests `array`: Indicates what quests are available for this Milestone. Usually this will be only a single Quest, but some quests have multiple available that you can choose from at any given time. All possible quests for a milestone can be found in the DestinyMilestoneDefinition, but they must be combined with this Live data to determine which one(s) are actually active right now. It is possible for Milestones to not have any quests.
    * items [Destiny.Milestones.DestinyMilestoneQuest](#destiny.milestones.destinymilestonequest)
  * endDate `string`: If known, this is the date when the event will next end or repeat. It will only be populated for events with fixed and repeating start and end dates.
  * milestoneHash `integer`: The unique identifier for the Milestone. Use it to look up the DestinyMilestoneDefinition, so you can combine the other data in this contract with static definition data.
  * rewards `array`: If the entity to which this component is attached has known active Rewards for the player, this will detail information about those rewards, keyed by the RewardEntry Hash. (See DestinyMilestoneDefinition for more information about Reward Entries) Note that these rewards are not for the Quests related to the Milestone. Think of these as "overview/checklist" rewards that may be provided for Milestones that may provide rewards for performing a variety of tasks that aren't under a specific Quest.
    * items [Destiny.Milestones.DestinyMilestoneRewardCategory](#destiny.milestones.destinymilestonerewardcategory)
  * startDate `string`: If known, this is the date when the event last began or refreshed. It will only be populated for events with fixed and repeating start and end dates.
  * values `object`: Milestones may have arbitrary key/value pairs associated with them, for data that users will want to know about but that doesn't fit neatly into any of the common components such as Quests. A good example of this would be - if this existed in Destiny 1 - the number of wins you currently have on your Trials of Osiris ticket. Looking in the DestinyMilestoneDefinition, you can use the string identifier of this dictionary to look up more info about the value, including localized string content for displaying the value. The value in the dictionary is the floating point number. The definition will tell you how to format this number.
  * vendorHashes `array`: A milestone may have one or more active vendors that are "related" to it (that provide rewards, or that are the initiators of the Milestone). I already regret this, even as I'm typing it. You see, sometimes a milestone may be directly correlated with a set of vendors that provide varying tiers of rewards. The player may not be able to interact with one or more of those vendors. This will return the hashes of the Vendors that the player *can* interact with, allowing you to show their current inventory as rewards or related items to the Milestone or its activities.
    * items `integer`

### Destiny.Milestones.DestinyMilestoneActivity
* Destiny.Milestones.DestinyMilestoneActivity `object`: Sometimes, we know the specific activity that the Milestone wants you to play. This entity provides additional information about that Activity and all of its variants. (sometimes there's only one variant, but I think you get the point)
  * activityHash `integer`: The hash of an arbitrarily chosen variant of this activity. We'll go ahead and call that the "canonical" activity, because if you're using this value you should only use it for properties that are common across the variants: things like the name of the activity, it's location, etc... Use this hash to look up the DestinyActivityDefinition of this activity for rendering data.
  * modifierHashes `array`: If the activity has modifiers, this will be the list of modifiers that all variants have in common. Perform lookups against DestinyActivityModifierDefinition which defines the modifier being applied to get at the modifier data. Note that, in the DestiyActivityDefinition, you will see many more modifiers than this being referred to: those are all *possible* modifiers for the activity, not the active ones. Use only the active ones to match what's really live.
    * items `integer`
  * variants `array`: If you want more than just name/location/etc... you're going to have to dig into and show the variants of the conceptual activity. These will differ in seemingly arbitrary ways, like difficulty level and modifiers applied. Show it in whatever way tickles your fancy.
    * items [Destiny.Milestones.DestinyMilestoneActivityVariant](#destiny.milestones.destinymilestoneactivityvariant)

### Destiny.Milestones.DestinyMilestoneActivityCompletionStatus
* Destiny.Milestones.DestinyMilestoneActivityCompletionStatus `object`: Represents this player's personal completion status for the Activity under a Milestone, if the activity has trackable completion and progress information. (most activities won't, or the concept won't apply. For instance, it makes sense to talk about a tier of a raid as being Completed or having progress, but it doesn't make sense to talk about a Crucible Playlist in those terms.
  * completed `boolean`: If the activity has been "completed", that information will be returned here.
  * phases `array`: If the Activity has discrete "phases" that we can track, that info will be here. Otherwise, this value will be NULL. Note that this is a list and not a dictionary: the order implies the ascending order of phases or progression in this activity.
    * items [Destiny.Milestones.DestinyMilestoneActivityPhase](#destiny.milestones.destinymilestoneactivityphase)

### Destiny.Milestones.DestinyMilestoneActivityPhase
* Destiny.Milestones.DestinyMilestoneActivityPhase `object`: Represents whatever information we can return about an explicit phase in an activity. In the future, I hope we'll have more than just "guh, you done gone and did something," but for the forseeable future that's all we've got. I'm making it more than just a list of booleans out of that overly-optimistic hope.
  * complete `boolean`: Indicates if the phase has been completed.

### Destiny.Milestones.DestinyMilestoneActivityVariant
* Destiny.Milestones.DestinyMilestoneActivityVariant `object`: Represents custom data that we know about an individual variant of an activity.
  * activityHash `integer`: The hash for the specific variant of the activity related to this milestone. You can pull more detailed static info from the DestinyActivityDefinition, such as difficulty level.
  * completionStatus `object`: An OPTIONAL component: if it makes sense to talk about this activity variant in terms of whether or not it has been completed or what progress you have made in it, this will be returned. Otherwise, this will be NULL.
    * completed `boolean`: If the activity has been "completed", that information will be returned here.
    * phases `array`: If the Activity has discrete "phases" that we can track, that info will be here. Otherwise, this value will be NULL. Note that this is a list and not a dictionary: the order implies the ascending order of phases or progression in this activity.
      * items [Destiny.Milestones.DestinyMilestoneActivityPhase](#destiny.milestones.destinymilestoneactivityphase)

### Destiny.Milestones.DestinyMilestoneContent
* Destiny.Milestones.DestinyMilestoneContent `object`: Represents localized, extended content related to Milestones. This is intentionally returned by a separate endpoint and not with Character-level Milestone data because we do not put localized data into standard Destiny responses, both for brevity of response and for caching purposes. If you really need this data, hit the Milestone Content endpoint.
  * about `string`: The "About this Milestone" text from the Firehose.
  * itemCategories `array`: If DPS has defined items related to this Milestone, they can categorize those items in the Firehose. That data will then be returned as item categories here.
    * items [Destiny.Milestones.DestinyMilestoneContentItemCategory](#destiny.milestones.destinymilestonecontentitemcategory)
  * status `string`: The Current Status of the Milestone, as driven by the Firehose.
  * tips `array`: A list of tips, provided by the Firehose.
    * items `string`

### Destiny.Milestones.DestinyMilestoneContentItemCategory
* Destiny.Milestones.DestinyMilestoneContentItemCategory `object`: Part of our dynamic, localized Milestone content is arbitrary categories of items. These are built in our content management system, and thus aren't the same as programmatically generated rewards.
  * itemHashes `array`
    * items `integer`
  * title `string`

### Destiny.Milestones.DestinyMilestoneQuest
* Destiny.Milestones.DestinyMilestoneQuest `object`: If a Milestone has one or more Quests, this will contain the live information for the character's status with one of those quests.
  * activity `object`: *IF* the Milestone has an active Activity that can give you greater details about what you need to do, it will be returned here. Remember to associate this with the DestinyMilestoneDefinition's activities to get details about the activity, including what specific quest it is related to if you have multiple quests to choose from.
    * activityHash `integer`: The hash of an arbitrarily chosen variant of this activity. We'll go ahead and call that the "canonical" activity, because if you're using this value you should only use it for properties that are common across the variants: things like the name of the activity, it's location, etc... Use this hash to look up the DestinyActivityDefinition of this activity for rendering data.
    * modifierHashes `array`: If the activity has modifiers, this will be the list of modifiers that all variants have in common. Perform lookups against DestinyActivityModifierDefinition which defines the modifier being applied to get at the modifier data. Note that, in the DestiyActivityDefinition, you will see many more modifiers than this being referred to: those are all *possible* modifiers for the activity, not the active ones. Use only the active ones to match what's really live.
      * items `integer`
    * variants `array`: If you want more than just name/location/etc... you're going to have to dig into and show the variants of the conceptual activity. These will differ in seemingly arbitrary ways, like difficulty level and modifiers applied. Show it in whatever way tickles your fancy.
      * items [Destiny.Milestones.DestinyMilestoneActivityVariant](#destiny.milestones.destinymilestoneactivityvariant)
  * challenges `array`: The activities referred to by this quest can have many associated challenges. They are all contained here, with activityHashes so that you can associate them with the specific activity variants in which they can be found. In retrospect, I probably should have put these under the specific Activity Variants, but it's too late to change it now. Theoretically, a quest without Activities can still have Challenges, which is why this is on a higher level than activity/variants, but it probably should have been in both places. That may come as a later revision.
    * items [Destiny.Challenges.DestinyChallengeStatus](#destiny.challenges.destinychallengestatus)
  * questItemHash `integer`: Quests are defined as Items in content. As such, this is the hash identifier of the DestinyInventoryItemDefinition that represents this quest. It will have pointers to all of the steps in the quest, and display information for the quest (title, description, icon etc) Individual steps will be referred to in the Quest item's DestinyInventoryItemDefinition.setData property, and themselves are Items with their own renderable data.
  * status `object`: The current status of the quest for the character making the request.
    * completed `boolean`: Whether or not the whole quest has been completed, regardless of whether or not you have redeemed the rewards for the quest.
    * itemInstanceId `integer`: The current Quest Step will be an instanced item in the player's inventory. If you care about that, this is the instance ID of that item.
    * questHash `integer`: The hash identifier for the Quest Item. (Note: Quests are defined as Items, and thus you would use this to look up the quest's DestinyInventoryItemDefinition). For information on all steps in the quest, you can then examine its DestinyInventoryItemDefinition.setData property for Quest Steps (which are *also* items). You can use the Item Definition to display human readable data about the overall quest.
    * redeemed `boolean`: Whether or not you have redeemed rewards for this quest.
    * started `boolean`: Whether or not you have started this quest.
    * stepHash `integer`: The hash identifier of the current Quest Step, which is also a DestinyInventoryItemDefinition. You can use this to get human readable data about the current step and what to do in that step.
    * stepObjectives `array`: A step can have multiple objectives. This will give you the progress for each objective in the current step, in the order in which they are rendered in-game.
      * items [Destiny.Quests.DestinyObjectiveProgress](#destiny.quests.destinyobjectiveprogress)
    * tracked `boolean`: Whether or not the quest is tracked
    * vendorHash `integer`: If the quest has a related Vendor that you should talk to in order to initiate the quest/earn rewards/continue the quest, this will be the hash identifier of that Vendor. Look it up its DestinyVendorDefinition.

### Destiny.Milestones.DestinyMilestoneRewardCategory
* Destiny.Milestones.DestinyMilestoneRewardCategory `object`: Represents a category of "summary" rewards that can be earned for the Milestone regardless of specific quest rewards that can be earned.
  * entries `array`: The individual reward entries for this category, and their status.
    * items [Destiny.Milestones.DestinyMilestoneRewardEntry](#destiny.milestones.destinymilestonerewardentry)
  * rewardCategoryHash `integer`: Look up the relevant DestinyMilestoneDefinition, and then use rewardCategoryHash to look up the category info in DestinyMilestoneDefinition.rewards.

### Destiny.Milestones.DestinyMilestoneRewardEntry
* Destiny.Milestones.DestinyMilestoneRewardEntry `object`: The character-specific data for a milestone's reward entry. See DestinyMilestoneDefinition for more information about Reward Entries.
  * earned `boolean`: If TRUE, the player has earned this reward.
  * redeemed `boolean`: If TRUE, the player has redeemed/picked up/obtained this reward. Feel free to alias this to "gotTheShinyBauble" in your own codebase.
  * rewardEntryHash `integer`: The identifier for the reward entry in question. It is important to look up the related DestinyMilestoneRewardEntryDefinition to get the static details about the reward, which you can do by looking up the milestone's DestinyMilestoneDefinition and examining the DestinyMilestoneDefinition.rewards[rewardCategoryHash].rewardEntries[rewardEntryHash] data.

### Destiny.Milestones.DestinyPublicMilestone
* Destiny.Milestones.DestinyPublicMilestone `object`: Information about milestones, presented in a character state-agnostic manner. Combine this data with DestinyMilestoneDefinition to get a full picture of the milestone, which is basically a checklist of things to do in the game. Think of this as GetPublicAdvisors 3.0, for those who used the Destiny 1 API.
  * availableQuests `array`: A milestone not need have even a single quest, but if there are active quests they will be returned here.
    * items [Destiny.Milestones.DestinyPublicMilestoneQuest](#destiny.milestones.destinypublicmilestonequest)
  * endDate `string`: If known, this is the date when the Milestone will expire/recycle/end.
  * milestoneHash `integer`: The hash identifier for the milestone. Use it to look up the DestinyMilestoneDefinition for static data about the Milestone.
  * startDate `string`: If known, this is the date when the Milestone started/became active.
  * vendorHashes `array`: Sometimes milestones - or activities active in milestones - will have relevant vendors. These are the vendors that are currently relevant.
    * items `integer`

### Destiny.Milestones.DestinyPublicMilestoneActivity
* Destiny.Milestones.DestinyPublicMilestoneActivity `object`: A milestone may have one or more conceptual Activities associated with it, and each of those conceptual activities could have a variety of variants, modes, tiers, what-have-you. Our attempts to determine what qualifies as a conceptual activity are, unfortunately, janky. So if you see missing modes or modes that don't seem appropriate to you, let us know and I'll buy you a beer if we ever meet up in person.
  * activityHash `integer`: The hash identifier of the activity that's been chosen to be considered the canonical "conceptual" activity definition. This may have many variants, defined herein.
  * modifierHashes `array`: The activity may have 0-to-many modifiers: if it does, this will contain the hashes to the DestinyActivityModifierDefinition that defines the modifier being applied.
    * items `integer`
  * variants `array`: Every relevant variation of this conceptual activity, including the conceptual activity itself, have variants defined here.
    * items [Destiny.Milestones.DestinyPublicMilestoneActivityVariant](#destiny.milestones.destinypublicmilestoneactivityvariant)

### Destiny.Milestones.DestinyPublicMilestoneActivityVariant
* Destiny.Milestones.DestinyPublicMilestoneActivityVariant `object`: Represents a variant of an activity that's relevant to a milestone.
  * activityHash `integer`: The hash identifier of this activity variant. Examine the activity's definition in the Manifest database to determine what makes it a distinct variant. Usually it will be difficulty level or whether or not it is a guided game variant of the activity, but theoretically it could be distinguished in any arbitrary way.

### Destiny.Milestones.DestinyPublicMilestoneChallenge
* Destiny.Milestones.DestinyPublicMilestoneChallenge `object`: A Milestone can have many Challenges. Challenges are just extra Objectives that provide a fun way to mix-up play and provide extra rewards.
  * activityHash `integer`: IF the Objective is related to a specific Activity, this will be that activity's hash. Use it to look up the DestinyActivityDefinition for additional data to show.
  * objectiveHash `integer`: The objective for the Challenge, which should have human-readable data about what needs to be done to accomplish the objective. Use this hash to look up the DestinyObjectiveDefinition.

### Destiny.Milestones.DestinyPublicMilestoneQuest
* Destiny.Milestones.DestinyPublicMilestoneQuest `object`
  * activity `object`: A milestone need not have an active activity, but if there is one it will be returned here, along with any variant and additional information.
    * activityHash `integer`: The hash identifier of the activity that's been chosen to be considered the canonical "conceptual" activity definition. This may have many variants, defined herein.
    * modifierHashes `array`: The activity may have 0-to-many modifiers: if it does, this will contain the hashes to the DestinyActivityModifierDefinition that defines the modifier being applied.
      * items `integer`
    * variants `array`: Every relevant variation of this conceptual activity, including the conceptual activity itself, have variants defined here.
      * items [Destiny.Milestones.DestinyPublicMilestoneActivityVariant](#destiny.milestones.destinypublicmilestoneactivityvariant)
  * challenges `array`: For the given quest there could be 0-to-Many challenges: mini quests that you can perform in the course of doing this quest, that may grant you rewards and benefits.
    * items [Destiny.Milestones.DestinyPublicMilestoneChallenge](#destiny.milestones.destinypublicmilestonechallenge)
  * questItemHash `integer`: Quests are defined as Items in content. As such, this is the hash identifier of the DestinyInventoryItemDefinition that represents this quest. It will have pointers to all of the steps in the quest, and display information for the quest (title, description, icon etc) Individual steps will be referred to in the Quest item's DestinyInventoryItemDefinition.setData property, and themselves are Items with their own renderable data.

### Destiny.Perks.DestinyPerkReference
* Destiny.Perks.DestinyPerkReference `object`: The list of perks to display in an item tooltip - and whether or not they have been activated.
  * iconPath `string`: The icon for the perk.
  * isActive `boolean`: Whether this perk is currently active. (We may return perks that you have not actually activated yet: these represent perks that you should show in the item's tooltip, but that the user has not yet activated.)
  * perkHash `integer`: The hash identifier for the perk, which can be used to look up DestinySandboxPerkDefinition if it exists. Be warned, perks frequently do not have user-viewable information. You should examine whether you actually found a name/description in the perk's definition before you show it to the user.
  * visible `boolean`: Some perks provide benefits, but aren't visible in the UI. This value will let you know if this is perk should be shown in your UI.

### Destiny.Progression.DestinyFactionProgression
* Destiny.Progression.DestinyFactionProgression `object`: Mostly for historical purposes, we segregate Faction progressions from other progressions. This is just a DestinyProgression with a shortcut for finding the DestinyFactionDefinition of the faction related to the progression.
  * currentProgress `integer`: This is the total amount of progress obtained overall for this progression (for instance, the total amount of Character Level experience earned)
  * dailyLimit `integer`: If this progression has a daily limit, this is that limit.
  * dailyProgress `integer`: The amount of progress earned today for this progression.
  * factionHash `integer`: The hash identifier of the Faction related to this progression. Use it to look up the DestinyFactionDefinition for more rendering info.
  * level `integer`: This is the level of the progression (for instance, the Character Level).
  * levelCap `integer`: This is the maximum possible level you can achieve for this progression (for example, the maximum character level obtainable)
  * nextLevelAt `integer`: The total amount of progression (i.e. "Experience") needed in order to reach the next level.
  * progressToNextLevel `integer`: The amount of progression (i.e. "Experience") needed to reach the next level of this Progression. Jeez, progression is such an overloaded word.
  * progressionHash `integer`: The hash identifier of the Progression in question. Use it to look up the DestinyProgressionDefinition in static data.
  * stepIndex `integer`: Progressions define their levels in "steps". Since the last step may be repeatable, the user may be at a higher level than the actual Step achieved in the progression. Not necessarily useful, but potentially interesting for those cruising the API. Relate this to the "steps" property of the DestinyProgression to see which step the user is on, if you care about that. (Note that this is Content Version dependent since it refers to indexes.)
  * weeklyLimit `integer`: If this progression has a weekly limit, this is that limit.
  * weeklyProgress `integer`: The amount of progress earned toward this progression in the current week.

### Destiny.Quests.DestinyObjectiveProgress
* Destiny.Quests.DestinyObjectiveProgress `object`: Returns data about a character's status with a given Objective. Combine with DestinyObjectiveDefinition static data for display purposes.
  * activityHash `integer`: If the Objective has an Activity associated with it, this is the unique identifier of the Activity being referred to. Use to look up the DestinyActivityDefinition in static data. This will give localized data about *what* you should be playing for the objective to be achieved.
  * complete `boolean`: Whether or not the Objective is completed.
  * destinationHash `integer`: If the Objective has a Destination associated with it, this is the unique identifier of the Destination being referred to. Use to look up the DestinyDestinationDefinition in static data. This will give localized data about *where* in the universe the objective should be achieved.
  * objectiveHash `integer`: The unique identifier of the Objective being referred to. Use to look up the DestinyObjectiveDefinition in static data.
  * progress `integer`: If progress has been made, and the progress can be measured numerically, this will be the value of that progress. You can compare it to the DestinyObjectiveDefinition.completionValue property for current vs. upper bounds, and use DestinyObjectiveDefinition.valueStyle to determine how this should be rendered. Note that progress, in Destiny 2, need not be a literal numeric progression. It could be one of a number of possible values, even a Timestamp. Always examine DestinyObjectiveDefinition.valueStyle before rendering progress.

### Destiny.Quests.DestinyQuestStatus
* Destiny.Quests.DestinyQuestStatus `object`: Data regarding the progress of a Quest for a specific character. Quests are composed of multiple steps, each with potentially multiple objectives: this QuestStatus will return Objective data for the *currently active* step in this quest.
  * completed `boolean`: Whether or not the whole quest has been completed, regardless of whether or not you have redeemed the rewards for the quest.
  * itemInstanceId `integer`: The current Quest Step will be an instanced item in the player's inventory. If you care about that, this is the instance ID of that item.
  * questHash `integer`: The hash identifier for the Quest Item. (Note: Quests are defined as Items, and thus you would use this to look up the quest's DestinyInventoryItemDefinition). For information on all steps in the quest, you can then examine its DestinyInventoryItemDefinition.setData property for Quest Steps (which are *also* items). You can use the Item Definition to display human readable data about the overall quest.
  * redeemed `boolean`: Whether or not you have redeemed rewards for this quest.
  * started `boolean`: Whether or not you have started this quest.
  * stepHash `integer`: The hash identifier of the current Quest Step, which is also a DestinyInventoryItemDefinition. You can use this to get human readable data about the current step and what to do in that step.
  * stepObjectives `array`: A step can have multiple objectives. This will give you the progress for each objective in the current step, in the order in which they are rendered in-game.
    * items [Destiny.Quests.DestinyObjectiveProgress](#destiny.quests.destinyobjectiveprogress)
  * tracked `boolean`: Whether or not the quest is tracked
  * vendorHash `integer`: If the quest has a related Vendor that you should talk to in order to initiate the quest/earn rewards/continue the quest, this will be the hash identifier of that Vendor. Look it up its DestinyVendorDefinition.

### Destiny.Requests.Actions.DestinyActionRequest
* Destiny.Requests.Actions.DestinyActionRequest `object`
  * membershipType [BungieMembershipType](#bungiemembershiptype)

### Destiny.Requests.Actions.DestinyCharacterActionRequest
* Destiny.Requests.Actions.DestinyCharacterActionRequest `object`
  * characterId `integer`
  * membershipType [BungieMembershipType](#bungiemembershiptype)

### Destiny.Requests.Actions.DestinyItemActionRequest
* Destiny.Requests.Actions.DestinyItemActionRequest `object`
  * characterId `integer`
  * itemId `integer`
  * membershipType [BungieMembershipType](#bungiemembershiptype)

### Destiny.Requests.Actions.DestinyItemSetActionRequest
* Destiny.Requests.Actions.DestinyItemSetActionRequest `object`
  * characterId `integer`
  * itemIds `array`
    * items `integer`
  * membershipType [BungieMembershipType](#bungiemembershiptype)

### Destiny.Requests.Actions.DestinyItemStateRequest
* Destiny.Requests.Actions.DestinyItemStateRequest `object`
  * characterId `integer`
  * itemId `integer`
  * membershipType [BungieMembershipType](#bungiemembershiptype)
  * state `boolean`

### Destiny.Requests.DestinyItemTransferRequest
* Destiny.Requests.DestinyItemTransferRequest `object`
  * characterId `integer`
  * itemId `integer`
  * itemReferenceHash `integer`
  * membershipType [BungieMembershipType](#bungiemembershiptype)
  * stackSize `integer`
  * transferToVault `boolean`

### Destiny.Responses.DestinyCharacterResponse
* Destiny.Responses.DestinyCharacterResponse `object`: The response contract for GetDestinyCharacter, with components that can be returned for character and item-level data.
  * activities `object`: Activity data - info about current activities available to the player.
    * data [Destiny.Entities.Characters.DestinyCharacterActivitiesComponent](#destiny.entities.characters.destinycharacteractivitiescomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * character `object`: Base information about the character in question.
    * data [Destiny.Entities.Characters.DestinyCharacterComponent](#destiny.entities.characters.destinycharactercomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * equipment `object`: Equipped items on the character.
    * data [Destiny.Entities.Inventory.DestinyInventoryComponent](#destiny.entities.inventory.destinyinventorycomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * inventory `object`: The character-level non-equipped inventory items.
    * data [Destiny.Entities.Inventory.DestinyInventoryComponent](#destiny.entities.inventory.destinyinventorycomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * itemComponents `object`: The set of components belonging to the player's instanced items.
    * instances [DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent](#dictionarycomponentresponseofint64anddestinyiteminstancecomponent)
    * objectives [DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent](#dictionarycomponentresponseofint64anddestinyitemobjectivescomponent)
    * perks [DictionaryComponentResponseOfint64AndDestinyItemPerksComponent](#dictionarycomponentresponseofint64anddestinyitemperkscomponent)
    * plugStates [DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent](#dictionarycomponentresponseofuint32anddestinyitemplugcomponent)
    * renderData [DictionaryComponentResponseOfint64AndDestinyItemRenderComponent](#dictionarycomponentresponseofint64anddestinyitemrendercomponent)
    * sockets [DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent](#dictionarycomponentresponseofint64anddestinyitemsocketscomponent)
    * stats [DictionaryComponentResponseOfint64AndDestinyItemStatsComponent](#dictionarycomponentresponseofint64anddestinyitemstatscomponent)
    * talentGrids [DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent](#dictionarycomponentresponseofint64anddestinyitemtalentgridcomponent)
  * kiosks `object`: Items available from Kiosks that are available to this specific character. 
    * data [Destiny.Components.Kiosks.DestinyKiosksComponent](#destiny.components.kiosks.destinykioskscomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * progressions `object`: Character progression data, including Milestones.
    * data [Destiny.Entities.Characters.DestinyCharacterProgressionComponent](#destiny.entities.characters.destinycharacterprogressioncomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * renderData `object`: Character rendering data - a minimal set of information about equipment and dyes used for rendering.
    * data [Destiny.Entities.Characters.DestinyCharacterRenderComponent](#destiny.entities.characters.destinycharacterrendercomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### Destiny.Responses.DestinyItemResponse
* Destiny.Responses.DestinyItemResponse `object`: The response object for retrieving an individual instanced item. None of these components are relevant for an item that doesn't have an "itemInstanceId": for those, get your information from the DestinyInventoryDefinition.
  * characterId `integer`: If the item is on a character, this will return the ID of the character that is holding the item.
  * instance `object`: Basic instance data for the item.
    * data [Destiny.Entities.Items.DestinyItemInstanceComponent](#destiny.entities.items.destinyiteminstancecomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * item `object`: Common data for the item relevant to its non-instanced properties.
    * data [Destiny.Entities.Items.DestinyItemComponent](#destiny.entities.items.destinyitemcomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * objectives `object`: Information specifically about the item's objectives.
    * data [Destiny.Entities.Items.DestinyItemObjectivesComponent](#destiny.entities.items.destinyitemobjectivescomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * perks `object`: Information specifically about the perks currently active on the item.
    * data [Destiny.Entities.Items.DestinyItemPerksComponent](#destiny.entities.items.destinyitemperkscomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * renderData `object`: Information about how to render the item in 3D.
    * data [Destiny.Entities.Items.DestinyItemRenderComponent](#destiny.entities.items.destinyitemrendercomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * sockets `object`: Information about the sockets of the item: which are currently active, what potential sockets you could have and the stats/abilities/perks you can gain from them.
    * data [Destiny.Entities.Items.DestinyItemSocketsComponent](#destiny.entities.items.destinyitemsocketscomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * stats `object`: Information about the computed stats of the item: power, defense, etc...
    * data [Destiny.Entities.Items.DestinyItemStatsComponent](#destiny.entities.items.destinyitemstatscomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * talentGrid `object`: Information about the talent grid attached to the item. Talent nodes can provide a variety of benefits and abilities, and in Destiny 2 are used almost exclusively for the character's "Builds".
    * data [Destiny.Entities.Items.DestinyItemTalentGridComponent](#destiny.entities.items.destinyitemtalentgridcomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### Destiny.Responses.DestinyProfileResponse
* Destiny.Responses.DestinyProfileResponse `object`: The response for GetDestinyProfile, with components for character and item-level data.
  * characterActivities `object`: Character activity data - the activities available to this character and its status, keyed by the Character's Id.
    * data `object`
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * characterEquipment `object`: The character's equipped items, keyed by the Character's Id.
    * data `object`
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * characterInventories `object`: The character-level non-equipped inventory items, keyed by the Character's Id.
    * data `object`
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * characterKiosks `object`: Items available from Kiosks that are available to a specific character as opposed to the account as a whole. It must be combined with data from the profileKiosks property to get a full picture of the character's available items to check out of a kiosk.
    * data `object`
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * characterProgressions `object`: Character-level progression data, keyed by the Character's Id.
    * data `object`
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * characterRenderData `object`: Character rendering data - a minimal set of info needed to render a character in 3D - keyed by the Character's Id.
    * data `object`
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * characters `object`: Basic information about each character, keyed by the CharacterId.
    * data `object`
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * itemComponents `object`: Information about instanced items across all returned characters, keyed by the item's instance ID.
    * instances [DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent](#dictionarycomponentresponseofint64anddestinyiteminstancecomponent)
    * objectives [DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent](#dictionarycomponentresponseofint64anddestinyitemobjectivescomponent)
    * perks [DictionaryComponentResponseOfint64AndDestinyItemPerksComponent](#dictionarycomponentresponseofint64anddestinyitemperkscomponent)
    * plugStates [DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent](#dictionarycomponentresponseofuint32anddestinyitemplugcomponent)
    * renderData [DictionaryComponentResponseOfint64AndDestinyItemRenderComponent](#dictionarycomponentresponseofint64anddestinyitemrendercomponent)
    * sockets [DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent](#dictionarycomponentresponseofint64anddestinyitemsocketscomponent)
    * stats [DictionaryComponentResponseOfint64AndDestinyItemStatsComponent](#dictionarycomponentresponseofint64anddestinyitemstatscomponent)
    * talentGrids [DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent](#dictionarycomponentresponseofint64anddestinyitemtalentgridcomponent)
  * profile `object`: The basic information about the Destiny Profile (formerly "Account").
    * data [Destiny.Entities.Profiles.DestinyProfileComponent](#destiny.entities.profiles.destinyprofilecomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * profileCurrencies `object`: The profile-level currencies owned by the Destiny Profile.
    * data [Destiny.Entities.Inventory.DestinyInventoryComponent](#destiny.entities.inventory.destinyinventorycomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * profileInventory `object`: The profile-level inventory of the Destiny Profile.
    * data [Destiny.Entities.Inventory.DestinyInventoryComponent](#destiny.entities.inventory.destinyinventorycomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * profileKiosks `object`: Items available from Kiosks that are available Profile-wide (i.e. across all characters)
    * data [Destiny.Components.Kiosks.DestinyKiosksComponent](#destiny.components.kiosks.destinykioskscomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * vendorReceipts `object`: Recent, refundable purchases you have made from vendors. When will you use it? Couldn't say...
    * data [Destiny.Entities.Profiles.DestinyVendorReceiptsComponent](#destiny.entities.profiles.destinyvendorreceiptscomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### Destiny.Responses.DestinyVendorResponse
* Destiny.Responses.DestinyVendorResponse `object`: A response containing all of the components for a vendor.
  * categories `object`: Categories that the vendor has available, and references to the sales therein.
    * data [Destiny.Entities.Vendors.DestinyVendorCategoriesComponent](#destiny.entities.vendors.destinyvendorcategoriescomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * items `object`: Item components, keyed by the vendorItemIndex of the active sale items.
    * instances [DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent](#dictionarycomponentresponseofint32anddestinyiteminstancecomponent)
    * objectives [DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent](#dictionarycomponentresponseofint32anddestinyitemobjectivescomponent)
    * perks [DictionaryComponentResponseOfint32AndDestinyItemPerksComponent](#dictionarycomponentresponseofint32anddestinyitemperkscomponent)
    * plugStates [DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent](#dictionarycomponentresponseofuint32anddestinyitemplugcomponent)
    * renderData [DictionaryComponentResponseOfint32AndDestinyItemRenderComponent](#dictionarycomponentresponseofint32anddestinyitemrendercomponent)
    * sockets [DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent](#dictionarycomponentresponseofint32anddestinyitemsocketscomponent)
    * stats [DictionaryComponentResponseOfint32AndDestinyItemStatsComponent](#dictionarycomponentresponseofint32anddestinyitemstatscomponent)
    * talentGrids [DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent](#dictionarycomponentresponseofint32anddestinyitemtalentgridcomponent)
  * sales `object`: Sales, keyed by the vendorItemIndex of the item being sold.
    * data `object`
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)
  * vendor `object`: The base properties of the vendor.
    * data [Destiny.Entities.Vendors.DestinyVendorComponent](#destiny.entities.vendors.destinyvendorcomponent)
    * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### Destiny.SpecialItemType
* Destiny.SpecialItemType `integer` (values: 0, 1, 8, 9, 23, 24, 25, 27, 29): As you run into items that need to be classified for Milestone purposes in ways that we cannot infer via Babel or Bonbobo-sourced data, add a new classification here and use a string constant to represent it in the local item config file.

### Destiny.TierType
* Destiny.TierType `integer` (values: 0, 1, 2, 3, 4, 5, 6)

### Destiny.TransferStatuses
* Destiny.TransferStatuses `integer` (values: 0, 1, 2, 4): Whether you can transfer an item, and why not if you can't.

### Destiny.VendorItemStatus
* Destiny.VendorItemStatus `integer` (values: 0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096)

### Destiny.Vendors.DestinyVendorReceipt
* Destiny.Vendors.DestinyVendorReceipt `object`: If a character purchased an item that is refundable, a Vendor Receipt will be created on the user's Destiny Profile. These expire after a configurable period of time, but until then can be used to get refunds on items. BNet does not provide the ability to refund a purchase *yet*, but you know.
  * currencyPaid `array`: The amount paid for the item, in terms of items that were consumed in the purchase and their quantity.
    * items [Destiny.DestinyItemQuantity](#destiny.destinyitemquantity)
  * expiresOn `string`: The date at which this receipt is rendered invalid.
  * itemReceived `object`: The item that was received, and its quantity.
    * itemHash `integer`: The hash identifier for the item in question. Use it to look up the item's DestinyInventoryItemDefinition.
    * itemInstanceId `integer`: If this quantity is referring to a specific instance of an item, this will have the item's instance ID. Normally, this will be null.
    * quantity `integer`: The amount of the item needed/available depending on the context of where DestinyItemQuantity is being used.
  * licenseUnlockHash `integer`: The unlock flag used to determine whether you still have the purchased item.
  * purchasedByCharacterId `integer`: The ID of the character who made the purchase.
  * refundPolicy `object`: Whether you can get a refund, and what happens in order for the refund to be received. See the DestinyVendorItemRefundPolicy enum for details.
  * sequenceNumber `integer`: The identifier of this receipt.
  * timeToExpiration `integer`: The seconds since epoch at which this receipt is rendered invalid.

### DestinyItemComponentSetOfint32
* DestinyItemComponentSetOfint32 `object`
  * instances [DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent](#dictionarycomponentresponseofint32anddestinyiteminstancecomponent)
  * objectives [DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent](#dictionarycomponentresponseofint32anddestinyitemobjectivescomponent)
  * perks [DictionaryComponentResponseOfint32AndDestinyItemPerksComponent](#dictionarycomponentresponseofint32anddestinyitemperkscomponent)
  * plugStates [DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent](#dictionarycomponentresponseofuint32anddestinyitemplugcomponent)
  * renderData [DictionaryComponentResponseOfint32AndDestinyItemRenderComponent](#dictionarycomponentresponseofint32anddestinyitemrendercomponent)
  * sockets [DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent](#dictionarycomponentresponseofint32anddestinyitemsocketscomponent)
  * stats [DictionaryComponentResponseOfint32AndDestinyItemStatsComponent](#dictionarycomponentresponseofint32anddestinyitemstatscomponent)
  * talentGrids [DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent](#dictionarycomponentresponseofint32anddestinyitemtalentgridcomponent)

### DestinyItemComponentSetOfint64
* DestinyItemComponentSetOfint64 `object`
  * instances [DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent](#dictionarycomponentresponseofint64anddestinyiteminstancecomponent)
  * objectives [DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent](#dictionarycomponentresponseofint64anddestinyitemobjectivescomponent)
  * perks [DictionaryComponentResponseOfint64AndDestinyItemPerksComponent](#dictionarycomponentresponseofint64anddestinyitemperkscomponent)
  * plugStates [DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent](#dictionarycomponentresponseofuint32anddestinyitemplugcomponent)
  * renderData [DictionaryComponentResponseOfint64AndDestinyItemRenderComponent](#dictionarycomponentresponseofint64anddestinyitemrendercomponent)
  * sockets [DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent](#dictionarycomponentresponseofint64anddestinyitemsocketscomponent)
  * stats [DictionaryComponentResponseOfint64AndDestinyItemStatsComponent](#dictionarycomponentresponseofint64anddestinyitemstatscomponent)
  * talentGrids [DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent](#dictionarycomponentresponseofint64anddestinyitemtalentgridcomponent)

### DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent
* DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent
* DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### DictionaryComponentResponseOfint32AndDestinyItemPerksComponent
* DictionaryComponentResponseOfint32AndDestinyItemPerksComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### DictionaryComponentResponseOfint32AndDestinyItemRenderComponent
* DictionaryComponentResponseOfint32AndDestinyItemRenderComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent
* DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### DictionaryComponentResponseOfint32AndDestinyItemStatsComponent
* DictionaryComponentResponseOfint32AndDestinyItemStatsComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent
* DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent
* DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent
* DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### DictionaryComponentResponseOfint64AndDestinyCharacterComponent
* DictionaryComponentResponseOfint64AndDestinyCharacterComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent
* DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### DictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent
* DictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### DictionaryComponentResponseOfint64AndDestinyInventoryComponent
* DictionaryComponentResponseOfint64AndDestinyInventoryComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent
* DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent
* DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### DictionaryComponentResponseOfint64AndDestinyItemPerksComponent
* DictionaryComponentResponseOfint64AndDestinyItemPerksComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### DictionaryComponentResponseOfint64AndDestinyItemRenderComponent
* DictionaryComponentResponseOfint64AndDestinyItemRenderComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent
* DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### DictionaryComponentResponseOfint64AndDestinyItemStatsComponent
* DictionaryComponentResponseOfint64AndDestinyItemStatsComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent
* DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### DictionaryComponentResponseOfint64AndDestinyKiosksComponent
* DictionaryComponentResponseOfint64AndDestinyKiosksComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent
* DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent `object`
  * data `object`
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### Entities.EntityActionResult
* Entities.EntityActionResult `object`
  * entityId `integer`
  * result [Exceptions.PlatformErrorCodes](#exceptions.platformerrorcodes)

### Exceptions.PlatformErrorCodes
* Exceptions.PlatformErrorCodes `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 400, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 641, 642, 643, 644, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 701, 702, 703, 704, 705, 706, 707, 801, 802, 803, 804, 805, 806, 807, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1100, 1204, 1205, 1218, 1223, 1224, 1225, 1226, 1227, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1400, 1401, 1402, 1403, 1404, 1405, 1500, 1501, 1502, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1625, 1626, 1627, 1628, 1629, 1630, 1631, 1632, 1633, 1634, 1635, 1636, 1637, 1638, 1639, 1640, 1641, 1642, 1643, 1644, 1645, 1646, 1647, 1648, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1800, 1801, 1802, 1803, 1804, 1805, 1806, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1910, 1911, 1912, 1913, 1914, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 2200, 2201, 2202, 2203, 2204, 2205, 2206, 2207, 2300, 2500, 2501, 2502, 2600, 2601)

### Forum.CommunityContentSortMode
* Forum.CommunityContentSortMode `integer` (values: 0, 1, 2)

### Forum.ForumFlagsEnum
* Forum.ForumFlagsEnum `integer` (values: 0, 1, 2, 4, 8, 16, 32, 64, 128)

### Forum.ForumMediaType
* Forum.ForumMediaType `integer` (values: 0, 1, 2, 3)

### Forum.ForumPostCategoryEnums
* Forum.ForumPostCategoryEnums `integer` (values: 0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024)

### Forum.ForumPostPopularity
* Forum.ForumPostPopularity `integer` (values: 0, 1, 2, 3, 4, 5)

### Forum.ForumPostSortEnum
* Forum.ForumPostSortEnum `integer` (values: 0, 1)

### Forum.ForumRecruitmentDetail
* Forum.ForumRecruitmentDetail `object`
  * Fireteam `array`
    * items [User.GeneralUser](#user.generaluser)
  * approved `boolean`
  * conversationId `integer`
  * intensity [Forum.ForumRecruitmentIntensityLabel](#forum.forumrecruitmentintensitylabel)
  * kickedPlayerIds `array`
    * items `integer`
  * microphoneRequired `boolean`
  * playerSlotsRemaining `integer`
  * playerSlotsTotal `integer`
  * tone [Forum.ForumRecruitmentToneLabel](#forum.forumrecruitmenttonelabel)
  * topicId `integer`

### Forum.ForumRecruitmentIntensityLabel
* Forum.ForumRecruitmentIntensityLabel `integer` (values: 0, 1, 2)

### Forum.ForumRecruitmentToneLabel
* Forum.ForumRecruitmentToneLabel `integer` (values: 0, 1, 2)

### Forum.ForumTopicsCategoryFiltersEnum
* Forum.ForumTopicsCategoryFiltersEnum `integer` (values: 0, 1, 2, 4, 8, 16, 32, 64, 128)

### Forum.ForumTopicsQuickDateEnum
* Forum.ForumTopicsQuickDateEnum `integer` (values: 0, 1, 2, 3, 4)

### Forum.ForumTopicsSortEnum
* Forum.ForumTopicsSortEnum `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7)

### Forum.PollResponse
* Forum.PollResponse `object`
  * results `array`
    * items [Forum.PollResult](#forum.pollresult)
  * topicId `integer`
  * totalVotes `integer`

### Forum.PollResult
* Forum.PollResult `object`
  * answerSlot `integer`
  * answerText `string`
  * lastVoteDate `string`
  * requestingUserVoted `boolean`
  * votes `integer`

### Forum.PostResponse
* Forum.PostResponse `object`
  * IsPinned `boolean`
  * ignoreStatus [Ignores.IgnoreResponse](#ignores.ignoreresponse)
  * isActive `boolean`
  * isAnnouncement `boolean`
  * lastReplyTimestamp `string`
  * latestReplyAuthorId `integer`
  * latestReplyPostId `integer`
  * locale `string`
  * popularity [Forum.ForumPostPopularity](#forum.forumpostpopularity)
  * thumbnail `string`
  * urlMediaType [Forum.ForumMediaType](#forum.forummediatype)
  * userHasMutedPost `boolean`
  * userHasRated `boolean`
  * userRating `integer`

### Forum.PostSearchResponse
* Forum.PostSearchResponse `object`
  * authors `array`
    * items [User.GeneralUser](#user.generaluser)
  * availablePages `integer`
  * groups `array`
    * items [GroupsV2.GroupResponse](#groupsv2.groupresponse)
  * hasMore `boolean`
  * polls `array`
    * items [Forum.PollResponse](#forum.pollresponse)
  * query [Queries.PagedQuery](#queries.pagedquery)
  * recruitmentDetails `array`
    * items [Forum.ForumRecruitmentDetail](#forum.forumrecruitmentdetail)
  * relatedPosts `array`
    * items [Forum.PostResponse](#forum.postresponse)
  * replacementContinuationToken `string`
  * results `array`
    * items [Forum.PostResponse](#forum.postresponse)
  * searchedTags `array`
    * items [Tags.Models.Contracts.TagResponse](#tags.models.contracts.tagresponse)
  * totalResults `integer`
  * useTotalResults `boolean`: If useTotalResults is true, then totalResults represents an accurate count.

### GroupsV2.Capabilities
* GroupsV2.Capabilities `integer` (values: 0, 1, 2, 4, 8, 16, 32, 64)

### GroupsV2.ChatSecuritySetting
* GroupsV2.ChatSecuritySetting `integer` (values: 0, 1)

### GroupsV2.ClanBanner
* GroupsV2.ClanBanner `object`
  * decalBackgroundColorId `integer`
  * decalColorId `integer`
  * decalId `integer`
  * gonfalonColorId `integer`
  * gonfalonDetailColorId `integer`
  * gonfalonDetailId `integer`
  * gonfalonId `integer`

### GroupsV2.GroupAction
* GroupsV2.GroupAction `object`
  * about `string`
  * allowChat `boolean`
  * avatarImageIndex `integer`
  * callsign `string`
  * chatSecurity [GroupsV2.ChatSecuritySetting](#groupsv2.chatsecuritysetting)
  * groupType `object`: Type of group, either Bungie.net hosted group, or a game services hosted clan.
  * homepage [GroupsV2.GroupHomepage](#groupsv2.grouphomepage)
  * isDefaultPostAlliance `boolean`
  * isDefaultPostPublic `boolean`
  * isPublic `boolean`
  * isPublicTopicAdminOnly `boolean`
  * locale `string`
  * membershipOption [GroupsV2.MembershipOption](#groupsv2.membershipoption)
  * motto `string`
  * name `string`
  * platformMembershipType `object`: When operation needs a platform specific account ID for the present user, use this property. In particular, groupType of Clan requires this value to be set.
  * tags `string`
  * theme `string`

### GroupsV2.GroupAllianceStatus
* GroupsV2.GroupAllianceStatus `integer` (values: 0, 1, 2)

### GroupsV2.GroupApplicationListRequest
* GroupsV2.GroupApplicationListRequest `object`
  * memberships `array`
    * items [User.UserMembership](#user.usermembership)
  * message `string`

### GroupsV2.GroupApplicationRequest
* GroupsV2.GroupApplicationRequest `object`
  * message `string`

### GroupsV2.GroupApplicationResolveState
* GroupsV2.GroupApplicationResolveState `integer` (values: 0, 1, 2, 3)

### GroupsV2.GroupApplicationResponse
* GroupsV2.GroupApplicationResponse `object`
  * resolution [GroupsV2.GroupApplicationResolveState](#groupsv2.groupapplicationresolvestate)

### GroupsV2.GroupBan
* GroupsV2.GroupBan `object`
  * bungieNetUserInfo [User.UserInfoCard](#user.userinfocard)
  * comment `string`
  * createdBy [User.UserInfoCard](#user.userinfocard)
  * dateBanned `string`
  * dateExpires `string`
  * destinyUserInfo [User.UserInfoCard](#user.userinfocard)
  * groupId `integer`
  * lastModifiedBy [User.UserInfoCard](#user.userinfocard)

### GroupsV2.GroupBanRequest
* GroupsV2.GroupBanRequest `object`
  * comment `string`
  * length [Ignores.IgnoreLength](#ignores.ignorelength)

### GroupsV2.GroupCreationResponse
* GroupsV2.GroupCreationResponse `object`
  * groupId `integer`

### GroupsV2.GroupDateRange
* GroupsV2.GroupDateRange `integer` (values: 0, 1, 2, 3, 4)

### GroupsV2.GroupEditAction
* GroupsV2.GroupEditAction `object`
  * about `string`
  * allowChat `boolean`
  * avatarImageIndex `integer`
  * callsign `string`
  * chatSecurity `integer` (values: 0, 1)
  * defaultPublicity `integer` (values: 0, 1, 2)
  * enableInvitationMessagingForAdmins `boolean`
  * homepage `integer` (values: 0, 1, 2)
  * isPublic `boolean`
  * isPublicTopicAdminOnly `boolean`
  * locale `string`
  * membershipOption `integer` (values: 0, 1, 2)
  * motto `string`
  * name `string`
  * tags `string`
  * theme `string`

### GroupsV2.GroupFeatures
* GroupsV2.GroupFeatures `object`
  * capabilities [GroupsV2.Capabilities](#groupsv2.capabilities)
  * hostGuidedGamePermissionOverride `object`: Minimum Member Level allowed to host guided games
  * invitePermissionOverride `boolean`: Minimum Member Level allowed to invite new members to group
  * joinLevel `object`: Level to join a member at when accepting an invite, application, or joining an open clan
  * maximumMembers `integer`
  * maximumMembershipsOfGroupType `integer`: Maximum number of groups of this type a typical membership may join. For example, a user may join about 50 General groups with their Bungie.net account. They may join one clan per Destiny membership.
  * membershipTypes `array`
    * items [BungieMembershipType](#bungiemembershiptype)
  * updateBannerPermissionOverride `boolean`: Minimum Member Level allowed to update banner
  * updateCulturePermissionOverride `boolean`: Minimum Member Level allowed to update group culture

### GroupsV2.GroupHomepage
* GroupsV2.GroupHomepage `integer` (values: 0, 1, 2)

### GroupsV2.GroupMember
* GroupsV2.GroupMember `object`
  * bungieNetUserInfo [User.UserInfoCard](#user.userinfocard)
  * destinyUserInfo [User.UserInfoCard](#user.userinfocard)
  * groupId `integer`
  * isOnline `boolean`
  * joinDate `string`
  * memberType [GroupsV2.RuntimeGroupMemberType](#groupsv2.runtimegroupmembertype)

### GroupsV2.GroupMemberApplication
* GroupsV2.GroupMemberApplication `object`
  * bungieNetUserInfo [User.UserInfoCard](#user.userinfocard)
  * creationDate `string`
  * destinyUserInfo [User.UserInfoCard](#user.userinfocard)
  * groupId `integer`
  * requestMessage `string`
  * resolveDate `string`
  * resolveMessage `string`
  * resolveState [GroupsV2.GroupApplicationResolveState](#groupsv2.groupapplicationresolvestate)
  * resolvedByMembershipId `integer`

### GroupsV2.GroupMemberCountFilter
* GroupsV2.GroupMemberCountFilter `integer` (values: 0, 1, 2, 3)

### GroupsV2.GroupMemberLeaveResult
* GroupsV2.GroupMemberLeaveResult `object`
  * group [GroupsV2.GroupV2](#groupsv2.groupv2)
  * groupDeleted `boolean`

### GroupsV2.GroupMembership
* GroupsV2.GroupMembership `object`
  * group [GroupsV2.GroupV2](#groupsv2.groupv2)
  * member [GroupsV2.GroupMember](#groupsv2.groupmember)

### GroupsV2.GroupMembershipBase
* GroupsV2.GroupMembershipBase `object`
  * group [GroupsV2.GroupV2](#groupsv2.groupv2)

### GroupsV2.GroupMembershipSearchResponse
* GroupsV2.GroupMembershipSearchResponse `object`
  * hasMore `boolean`
  * query [Queries.PagedQuery](#queries.pagedquery)
  * replacementContinuationToken `string`
  * results `array`
    * items [GroupsV2.GroupMembership](#groupsv2.groupmembership)
  * totalResults `integer`
  * useTotalResults `boolean`: If useTotalResults is true, then totalResults represents an accurate count.

### GroupsV2.GroupOptionalConversation
* GroupsV2.GroupOptionalConversation `object`
  * chatEnabled `boolean`
  * chatName `string`
  * chatSecurity [GroupsV2.ChatSecuritySetting](#groupsv2.chatsecuritysetting)
  * conversationId `integer`
  * groupId `integer`

### GroupsV2.GroupOptionalConversationAddRequest
* GroupsV2.GroupOptionalConversationAddRequest `object`
  * chatName `string`
  * chatSecurity [GroupsV2.ChatSecuritySetting](#groupsv2.chatsecuritysetting)

### GroupsV2.GroupOptionalConversationEditRequest
* GroupsV2.GroupOptionalConversationEditRequest `object`
  * chatEnabled `boolean`
  * chatName `string`
  * chatSecurity `integer` (values: 0, 1)

### GroupsV2.GroupOptionsEditAction
* GroupsV2.GroupOptionsEditAction `object`
  * HostGuidedGamePermissionOverride `integer` (values: 0, 1, 2): Minimum Member Level allowed to host guided games
  * InvitePermissionOverride `boolean`: Minimum Member Level allowed to invite new members to group
  * JoinLevel `integer` (values: 0, 1, 2, 3, 4, 5): Level to join a member at when accepting an invite, application, or joining an open clan
  * UpdateBannerPermissionOverride `boolean`: Minimum Member Level allowed to update banner
  * UpdateCulturePermissionOverride `boolean`: Minimum Member Level allowed to update group culture

### GroupsV2.GroupPostPublicity
* GroupsV2.GroupPostPublicity `integer` (values: 0, 1, 2)

### GroupsV2.GroupPotentialMember
* GroupsV2.GroupPotentialMember `object`
  * bungieNetUserInfo [User.UserInfoCard](#user.userinfocard)
  * destinyUserInfo [User.UserInfoCard](#user.userinfocard)
  * groupId `integer`
  * joinDate `string`
  * potentialStatus [GroupsV2.GroupPotentialMemberStatus](#groupsv2.grouppotentialmemberstatus)

### GroupsV2.GroupPotentialMemberStatus
* GroupsV2.GroupPotentialMemberStatus `integer` (values: 0, 1, 2)

### GroupsV2.GroupPotentialMembership
* GroupsV2.GroupPotentialMembership `object`
  * group [GroupsV2.GroupV2](#groupsv2.groupv2)
  * member [GroupsV2.GroupPotentialMember](#groupsv2.grouppotentialmember)

### GroupsV2.GroupPotentialMembershipSearchResponse
* GroupsV2.GroupPotentialMembershipSearchResponse `object`
  * hasMore `boolean`
  * query [Queries.PagedQuery](#queries.pagedquery)
  * replacementContinuationToken `string`
  * results `array`
    * items [GroupsV2.GroupPotentialMembership](#groupsv2.grouppotentialmembership)
  * totalResults `integer`
  * useTotalResults `boolean`: If useTotalResults is true, then totalResults represents an accurate count.

### GroupsV2.GroupQuery
* GroupsV2.GroupQuery `object`
  * creationDate [GroupsV2.GroupDateRange](#groupsv2.groupdaterange)
  * currentPage `integer`
  * groupMemberCountFilter `integer` (values: 0, 1, 2, 3)
  * groupType [GroupsV2.GroupType](#groupsv2.grouptype)
  * itemsPerPage `integer`
  * localeFilter `string`
  * name `string`
  * requestContinuationToken `string`
  * sortBy [GroupsV2.GroupSortBy](#groupsv2.groupsortby)
  * tagText `string`

### GroupsV2.GroupResponse
* GroupsV2.GroupResponse `object`
  * allianceStatus [GroupsV2.GroupAllianceStatus](#groupsv2.groupalliancestatus)
  * alliedIds `array`
    * items `integer`
  * currentUserMemberMap `object`: This property will be populated if the authenticated user is a member of the group. Note that because of account linking, a user can sometimes be part of a clan more than once. As such, this returns the highest member type available.
  * currentUserPotentialMemberMap `object`: This property will be populated if the authenticated user is an applicant or has an outstanding invitation to join. Note that because of account linking, a user can sometimes be part of a clan more than once.
  * detail [GroupsV2.GroupV2](#groupsv2.groupv2)
  * founder [GroupsV2.GroupMember](#groupsv2.groupmember)
  * groupJoinInviteCount `integer`
  * parentGroup [GroupsV2.GroupV2](#groupsv2.groupv2)

### GroupsV2.GroupSearchResponse
* GroupsV2.GroupSearchResponse `object`
  * hasMore `boolean`
  * query [Queries.PagedQuery](#queries.pagedquery)
  * replacementContinuationToken `string`
  * results `array`
    * items [GroupsV2.GroupV2Card](#groupsv2.groupv2card)
  * totalResults `integer`
  * useTotalResults `boolean`: If useTotalResults is true, then totalResults represents an accurate count.

### GroupsV2.GroupSortBy
* GroupsV2.GroupSortBy `integer` (values: 0, 1, 2, 3)

### GroupsV2.GroupType
* GroupsV2.GroupType `integer` (values: 0, 1)

### GroupsV2.GroupUserBase
* GroupsV2.GroupUserBase `object`
  * bungieNetUserInfo [User.UserInfoCard](#user.userinfocard)
  * destinyUserInfo [User.UserInfoCard](#user.userinfocard)
  * groupId `integer`
  * joinDate `string`

### GroupsV2.GroupV2
* GroupsV2.GroupV2 `object`
  * about `string`
  * allowChat `boolean`
  * avatarImageIndex `integer`
  * avatarPath `string`
  * banExpireDate `string`
  * bannerPath `string`
  * chatSecurity [GroupsV2.ChatSecuritySetting](#groupsv2.chatsecuritysetting)
  * clanInfo [GroupsV2.GroupV2ClanInfoAndInvestment](#groupsv2.groupv2claninfoandinvestment)
  * conversationId `integer`
  * creationDate `string`
  * defaultPublicity [GroupsV2.GroupPostPublicity](#groupsv2.grouppostpublicity)
  * enableInvitationMessagingForAdmins `boolean`
  * features [GroupsV2.GroupFeatures](#groupsv2.groupfeatures)
  * groupId `integer`
  * groupType [GroupsV2.GroupType](#groupsv2.grouptype)
  * homepage [GroupsV2.GroupHomepage](#groupsv2.grouphomepage)
  * isAllianceOwner `boolean`
  * isDefaultPostPublic `boolean`
  * isPublic `boolean`
  * isPublicTopicAdminOnly `boolean`
  * locale `string`
  * memberCount `integer`
  * membershipIdCreated `integer`
  * membershipOption [GroupsV2.MembershipOption](#groupsv2.membershipoption)
  * modificationDate `string`
  * motto `string`
  * name `string`
  * primaryAlliedGroupId `integer`
  * tags `array`
    * items `string`
  * theme `string`

### GroupsV2.GroupV2Card
* GroupsV2.GroupV2Card `object`: A small infocard of group information, usually used for when a list of groups are returned
  * about `string`
  * avatarPath `string`
  * capabilities [GroupsV2.Capabilities](#groupsv2.capabilities)
  * clanInfo [GroupsV2.GroupV2ClanInfo](#groupsv2.groupv2claninfo)
  * creationDate `string`
  * groupId `integer`
  * groupType [GroupsV2.GroupType](#groupsv2.grouptype)
  * locale `string`
  * memberCount `integer`
  * membershipOption [GroupsV2.MembershipOption](#groupsv2.membershipoption)
  * motto `string`
  * name `string`
  * theme `string`

### GroupsV2.GroupV2ClanInfo
* GroupsV2.GroupV2ClanInfo `object`: This contract contains clan-specific group information. It does not include any investment data.
  * clanBannerData [GroupsV2.ClanBanner](#groupsv2.clanbanner)
  * clanCallsign `string`

### GroupsV2.GroupV2ClanInfoAndInvestment
* GroupsV2.GroupV2ClanInfoAndInvestment `object`: The same as GroupV2ClanInfo, but includes any investment data.
  * clanBannerData [GroupsV2.ClanBanner](#groupsv2.clanbanner)
  * clanCallsign `string`
  * d2ClanProgressions `object`

### GroupsV2.GroupsForMemberFilter
* GroupsV2.GroupsForMemberFilter `integer` (values: 0, 1, 2)

### GroupsV2.HostGuidedGamesPermissionLevel
* GroupsV2.HostGuidedGamesPermissionLevel `integer` (values: 0, 1, 2): Used for setting the guided game permission level override (admins and founders can always host guided games).

### GroupsV2.MembershipOption
* GroupsV2.MembershipOption `integer` (values: 0, 1, 2)

### GroupsV2.RuntimeGroupMemberType
* GroupsV2.RuntimeGroupMemberType `integer` (values: 0, 1, 2, 3, 4, 5): The member levels used by all V2 Groups API. Individual group types use their own mappings in their native storage (general uses BnetDbGroupMemberType and D2 clans use ClanMemberLevel), but they are all translated to this in the runtime api. These runtime values should NEVER be stored anywhere, so the values can be changed as necessary.

### Ignores.IgnoreLength
* Ignores.IgnoreLength `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)

### Ignores.IgnoreResponse
* Ignores.IgnoreResponse `object`
  * ignoreFlags [Ignores.IgnoreStatus](#ignores.ignorestatus)
  * isIgnored `boolean`

### Ignores.IgnoreStatus
* Ignores.IgnoreStatus `integer` (values: 0, 1, 2, 4, 8, 16, 32)

### Interpolation.InterpolationPoint
* Interpolation.InterpolationPoint `object`
  * value `integer`
  * weight `integer`

### Interpolation.InterpolationPointFloat
* Interpolation.InterpolationPointFloat `object`
  * value `number`
  * weight `number`

### Links.HyperlinkReference
* Links.HyperlinkReference `object`
  * title `string`
  * url `string`

### Messages.Responses.SaveMessageResult
* Messages.Responses.SaveMessageResult `object`
  * conversationId `integer`
  * messageId `integer`

### Partnerships.PartnershipType
* Partnerships.PartnershipType `integer` (values: 0, 1): Representing external partners to which BNet users can link accounts, but that are not Account System credentials: partnerships that BNet uses exclusively for data.

### Partnerships.PublicPartnershipDetail
* Partnerships.PublicPartnershipDetail `object`: All the partnership info that's fit to expose externally, if we care to do so.
  * icon `string`
  * identifier `string`
  * name `string`
  * partnerType [Partnerships.PartnershipType](#partnerships.partnershiptype)

### Queries.PagedQuery
* Queries.PagedQuery `object`
  * currentPage `integer`
  * itemsPerPage `integer`
  * requestContinuationToken `string`

### Queries.SearchResult
* Queries.SearchResult `object`
  * hasMore `boolean`
  * query [Queries.PagedQuery](#queries.pagedquery)
  * replacementContinuationToken `string`
  * totalResults `integer`
  * useTotalResults `boolean`: If useTotalResults is true, then totalResults represents an accurate count.

### SearchResultOfCommunityLiveStatus
* SearchResultOfCommunityLiveStatus `object`
  * hasMore `boolean`
  * query [Queries.PagedQuery](#queries.pagedquery)
  * replacementContinuationToken `string`
  * results `array`
    * items [Community.CommunityLiveStatus](#community.communitylivestatus)
  * totalResults `integer`
  * useTotalResults `boolean`: If useTotalResults is true, then totalResults represents an accurate count.

### SearchResultOfDestinyEntitySearchResultItem
* SearchResultOfDestinyEntitySearchResultItem `object`
  * hasMore `boolean`
  * query [Queries.PagedQuery](#queries.pagedquery)
  * replacementContinuationToken `string`
  * results `array`
    * items [Destiny.Definitions.DestinyEntitySearchResultItem](#destiny.definitions.destinyentitysearchresultitem)
  * totalResults `integer`
  * useTotalResults `boolean`: If useTotalResults is true, then totalResults represents an accurate count.

### SearchResultOfGroupBan
* SearchResultOfGroupBan `object`
  * hasMore `boolean`
  * query [Queries.PagedQuery](#queries.pagedquery)
  * replacementContinuationToken `string`
  * results `array`
    * items [GroupsV2.GroupBan](#groupsv2.groupban)
  * totalResults `integer`
  * useTotalResults `boolean`: If useTotalResults is true, then totalResults represents an accurate count.

### SearchResultOfGroupMember
* SearchResultOfGroupMember `object`
  * hasMore `boolean`
  * query [Queries.PagedQuery](#queries.pagedquery)
  * replacementContinuationToken `string`
  * results `array`
    * items [GroupsV2.GroupMember](#groupsv2.groupmember)
  * totalResults `integer`
  * useTotalResults `boolean`: If useTotalResults is true, then totalResults represents an accurate count.

### SearchResultOfGroupMemberApplication
* SearchResultOfGroupMemberApplication `object`
  * hasMore `boolean`
  * query [Queries.PagedQuery](#queries.pagedquery)
  * replacementContinuationToken `string`
  * results `array`
    * items [GroupsV2.GroupMemberApplication](#groupsv2.groupmemberapplication)
  * totalResults `integer`
  * useTotalResults `boolean`: If useTotalResults is true, then totalResults represents an accurate count.

### SearchResultOfGroupMembership
* SearchResultOfGroupMembership `object`
  * hasMore `boolean`
  * query [Queries.PagedQuery](#queries.pagedquery)
  * replacementContinuationToken `string`
  * results `array`
    * items [GroupsV2.GroupMembership](#groupsv2.groupmembership)
  * totalResults `integer`
  * useTotalResults `boolean`: If useTotalResults is true, then totalResults represents an accurate count.

### SearchResultOfGroupPotentialMembership
* SearchResultOfGroupPotentialMembership `object`
  * hasMore `boolean`
  * query [Queries.PagedQuery](#queries.pagedquery)
  * replacementContinuationToken `string`
  * results `array`
    * items [GroupsV2.GroupPotentialMembership](#groupsv2.grouppotentialmembership)
  * totalResults `integer`
  * useTotalResults `boolean`: If useTotalResults is true, then totalResults represents an accurate count.

### SearchResultOfGroupV2Card
* SearchResultOfGroupV2Card `object`
  * hasMore `boolean`
  * query [Queries.PagedQuery](#queries.pagedquery)
  * replacementContinuationToken `string`
  * results `array`
    * items [GroupsV2.GroupV2Card](#groupsv2.groupv2card)
  * totalResults `integer`
  * useTotalResults `boolean`: If useTotalResults is true, then totalResults represents an accurate count.

### SearchResultOfPostResponse
* SearchResultOfPostResponse `object`
  * hasMore `boolean`
  * query [Queries.PagedQuery](#queries.pagedquery)
  * replacementContinuationToken `string`
  * results `array`
    * items [Forum.PostResponse](#forum.postresponse)
  * totalResults `integer`
  * useTotalResults `boolean`: If useTotalResults is true, then totalResults represents an accurate count.

### SearchResultOfTrendingEntry
* SearchResultOfTrendingEntry `object`
  * hasMore `boolean`
  * query [Queries.PagedQuery](#queries.pagedquery)
  * replacementContinuationToken `string`
  * results `array`
    * items [Trending.TrendingEntry](#trending.trendingentry)
  * totalResults `integer`
  * useTotalResults `boolean`: If useTotalResults is true, then totalResults represents an accurate count.

### SingleComponentResponseOfDestinyCharacterActivitiesComponent
* SingleComponentResponseOfDestinyCharacterActivitiesComponent `object`
  * data [Destiny.Entities.Characters.DestinyCharacterActivitiesComponent](#destiny.entities.characters.destinycharacteractivitiescomponent)
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### SingleComponentResponseOfDestinyCharacterComponent
* SingleComponentResponseOfDestinyCharacterComponent `object`
  * data [Destiny.Entities.Characters.DestinyCharacterComponent](#destiny.entities.characters.destinycharactercomponent)
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### SingleComponentResponseOfDestinyCharacterProgressionComponent
* SingleComponentResponseOfDestinyCharacterProgressionComponent `object`
  * data [Destiny.Entities.Characters.DestinyCharacterProgressionComponent](#destiny.entities.characters.destinycharacterprogressioncomponent)
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### SingleComponentResponseOfDestinyCharacterRenderComponent
* SingleComponentResponseOfDestinyCharacterRenderComponent `object`
  * data [Destiny.Entities.Characters.DestinyCharacterRenderComponent](#destiny.entities.characters.destinycharacterrendercomponent)
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### SingleComponentResponseOfDestinyInventoryComponent
* SingleComponentResponseOfDestinyInventoryComponent `object`
  * data [Destiny.Entities.Inventory.DestinyInventoryComponent](#destiny.entities.inventory.destinyinventorycomponent)
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### SingleComponentResponseOfDestinyItemComponent
* SingleComponentResponseOfDestinyItemComponent `object`
  * data [Destiny.Entities.Items.DestinyItemComponent](#destiny.entities.items.destinyitemcomponent)
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### SingleComponentResponseOfDestinyItemInstanceComponent
* SingleComponentResponseOfDestinyItemInstanceComponent `object`
  * data [Destiny.Entities.Items.DestinyItemInstanceComponent](#destiny.entities.items.destinyiteminstancecomponent)
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### SingleComponentResponseOfDestinyItemObjectivesComponent
* SingleComponentResponseOfDestinyItemObjectivesComponent `object`
  * data [Destiny.Entities.Items.DestinyItemObjectivesComponent](#destiny.entities.items.destinyitemobjectivescomponent)
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### SingleComponentResponseOfDestinyItemPerksComponent
* SingleComponentResponseOfDestinyItemPerksComponent `object`
  * data [Destiny.Entities.Items.DestinyItemPerksComponent](#destiny.entities.items.destinyitemperkscomponent)
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### SingleComponentResponseOfDestinyItemRenderComponent
* SingleComponentResponseOfDestinyItemRenderComponent `object`
  * data [Destiny.Entities.Items.DestinyItemRenderComponent](#destiny.entities.items.destinyitemrendercomponent)
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### SingleComponentResponseOfDestinyItemSocketsComponent
* SingleComponentResponseOfDestinyItemSocketsComponent `object`
  * data [Destiny.Entities.Items.DestinyItemSocketsComponent](#destiny.entities.items.destinyitemsocketscomponent)
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### SingleComponentResponseOfDestinyItemStatsComponent
* SingleComponentResponseOfDestinyItemStatsComponent `object`
  * data [Destiny.Entities.Items.DestinyItemStatsComponent](#destiny.entities.items.destinyitemstatscomponent)
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### SingleComponentResponseOfDestinyItemTalentGridComponent
* SingleComponentResponseOfDestinyItemTalentGridComponent `object`
  * data [Destiny.Entities.Items.DestinyItemTalentGridComponent](#destiny.entities.items.destinyitemtalentgridcomponent)
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### SingleComponentResponseOfDestinyKiosksComponent
* SingleComponentResponseOfDestinyKiosksComponent `object`
  * data [Destiny.Components.Kiosks.DestinyKiosksComponent](#destiny.components.kiosks.destinykioskscomponent)
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### SingleComponentResponseOfDestinyProfileComponent
* SingleComponentResponseOfDestinyProfileComponent `object`
  * data [Destiny.Entities.Profiles.DestinyProfileComponent](#destiny.entities.profiles.destinyprofilecomponent)
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### SingleComponentResponseOfDestinyVendorCategoriesComponent
* SingleComponentResponseOfDestinyVendorCategoriesComponent `object`
  * data [Destiny.Entities.Vendors.DestinyVendorCategoriesComponent](#destiny.entities.vendors.destinyvendorcategoriescomponent)
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### SingleComponentResponseOfDestinyVendorComponent
* SingleComponentResponseOfDestinyVendorComponent `object`
  * data [Destiny.Entities.Vendors.DestinyVendorComponent](#destiny.entities.vendors.destinyvendorcomponent)
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### SingleComponentResponseOfDestinyVendorReceiptsComponent
* SingleComponentResponseOfDestinyVendorReceiptsComponent `object`
  * data [Destiny.Entities.Profiles.DestinyVendorReceiptsComponent](#destiny.entities.profiles.destinyvendorreceiptscomponent)
  * privacy [Components.ComponentPrivacySetting](#components.componentprivacysetting)

### Tags.Models.Contracts.TagResponse
* Tags.Models.Contracts.TagResponse `object`
  * ignoreStatus [Ignores.IgnoreResponse](#ignores.ignoreresponse)
  * tagText `string`

### Trending.TrendingCategories
* Trending.TrendingCategories `object`
  * categories `array`
    * items [Trending.TrendingCategory](#trending.trendingcategory)

### Trending.TrendingCategory
* Trending.TrendingCategory `object`
  * categoryId `string`
  * categoryName `string`
  * entries [SearchResultOfTrendingEntry](#searchresultoftrendingentry)

### Trending.TrendingDetail
* Trending.TrendingDetail `object`
  * creation [Trending.TrendingEntryCommunityCreation](#trending.trendingentrycommunitycreation)
  * destinyActivity [Trending.TrendingEntryDestinyActivity](#trending.trendingentrydestinyactivity)
  * destinyItem [Trending.TrendingEntryDestinyItem](#trending.trendingentrydestinyitem)
  * destinyRitual [Trending.TrendingEntryDestinyRitual](#trending.trendingentrydestinyritual)
  * entityType [Trending.TrendingEntryType](#trending.trendingentrytype)
  * identifier `string`
  * news [Trending.TrendingEntryNews](#trending.trendingentrynews)
  * stream [Trending.TrendingEntryCommunityStream](#trending.trendingentrycommunitystream)
  * support [Trending.TrendingEntrySupportArticle](#trending.trendingentrysupportarticle)

### Trending.TrendingEntry
* Trending.TrendingEntry `object`: The list entry view for trending items. Returns just enough to show the item on the trending page.
  * displayName `string`: The localized "display name/article title/'primary localized identifier'" of the entity.
  * endDate `string`
  * entityType `object`: An enum - unfortunately - dictating all of the possible kinds of trending items that you might get in your result set, in case you want to do custom rendering or call to get the details of the item.
  * featureImage `string`: If isFeatured, this image will be populated with whatever the featured image is. Note that this will likely be a very large image, so don't use it all the time.
  * identifier `string`: We don't know whether the identifier will be a string, a uint, or a long... so we're going to cast it all to a string. But either way, we need any trending item created to have a single unique identifier for its type.
  * image `string`
  * isFeatured `boolean`
  * link `string`
  * mp4Video `string`: If this is populated, the entry has a related MP4 video to show. I am 100% certain I am going to regret putting this directly on TrendingEntry, but it will work so yolo
  * startDate `string`
  * tagline `string`: If the entity has a localized tagline/subtitle/motto/whatever, that is found here.
  * webmVideo `string`: If this is populated, the entry has a related WebM video to show. I am 100% certain I am going to regret putting this directly on TrendingEntry, but it will work so yolo
  * weight `number`: The weighted score of this trending item.

### Trending.TrendingEntryCommunityCreation
* Trending.TrendingEntryCommunityCreation `object`
  * author `string`
  * authorMembershipId `integer`
  * body `string`
  * media `string`
  * postId `integer`
  * title `string`
  * upvotes `integer`

### Trending.TrendingEntryCommunityStream
* Trending.TrendingEntryCommunityStream `object`
  * image `string`
  * partnershipIdentifier `string`
  * partnershipType [Partnerships.PartnershipType](#partnerships.partnershiptype)
  * title `string`

### Trending.TrendingEntryDestinyActivity
* Trending.TrendingEntryDestinyActivity `object`
  * activityHash `integer`
  * status [Destiny.Activities.DestinyPublicActivityStatus](#destiny.activities.destinypublicactivitystatus)

### Trending.TrendingEntryDestinyItem
* Trending.TrendingEntryDestinyItem `object`
  * itemHash `integer`

### Trending.TrendingEntryDestinyRitual
* Trending.TrendingEntryDestinyRitual `object`
  * dateEnd `string`
  * dateStart `string`
  * eventContent `object`: A destiny event will not necessarily have milestone "custom content", but if it does the details will be here.
    * about `string`: The "About this Milestone" text from the Firehose.
    * itemCategories `array`: If DPS has defined items related to this Milestone, they can categorize those items in the Firehose. That data will then be returned as item categories here.
      * items [Destiny.Milestones.DestinyMilestoneContentItemCategory](#destiny.milestones.destinymilestonecontentitemcategory)
    * status `string`: The Current Status of the Milestone, as driven by the Firehose.
    * tips `array`: A list of tips, provided by the Firehose.
      * items `string`
  * icon `string`
  * image `string`
  * milestoneDetails `object`: A destiny event does not necessarily have a related Milestone, but if it does the details will be returned here.
    * availableQuests `array`: A milestone not need have even a single quest, but if there are active quests they will be returned here.
      * items [Destiny.Milestones.DestinyPublicMilestoneQuest](#destiny.milestones.destinypublicmilestonequest)
    * endDate `string`: If known, this is the date when the Milestone will expire/recycle/end.
    * milestoneHash `integer`: The hash identifier for the milestone. Use it to look up the DestinyMilestoneDefinition for static data about the Milestone.
    * startDate `string`: If known, this is the date when the Milestone started/became active.
    * vendorHashes `array`: Sometimes milestones - or activities active in milestones - will have relevant vendors. These are the vendors that are currently relevant.
      * items `integer`
  * subtitle `string`
  * title `string`

### Trending.TrendingEntryNews
* Trending.TrendingEntryNews `object`
  * article [Content.ContentItemPublicContract](#content.contentitempubliccontract)

### Trending.TrendingEntrySupportArticle
* Trending.TrendingEntrySupportArticle `object`
  * article [Content.ContentItemPublicContract](#content.contentitempubliccontract)

### Trending.TrendingEntryType
* Trending.TrendingEntryType `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9): The known entity types that you can have returned from Trending.

### User.AckState
* User.AckState `object`
  * ackId `string`: Identifier to use when acknowledging the related item. [category]:[entityId]:[targetId]
  * needsAck `boolean`: Indicates the related item has not been acknowledged.

### User.GeneralUser
* User.GeneralUser `object`
  * about `string`
  * blizzardDisplayName `string`
  * context [User.UserToUserContext](#user.usertousercontext)
  * displayName `string`
  * fbDisplayName `string`
  * firstAccess `string`
  * isDeleted `boolean`
  * lastBanReportId `integer`
  * lastUpdate `string`
  * legacyPortalUID `integer`
  * locale `string`
  * localeInheritDefault `boolean`
  * membershipId `integer`
  * normalizedName `string`
  * profileBanExpire `string`
  * profilePicture `integer`
  * profilePicturePath `string`
  * profilePictureWidePath `string`
  * profileTheme `integer`
  * profileThemeName `string`
  * psnDisplayName `string`
  * showActivity `boolean`
  * showGroupMessaging `boolean`
  * statusDate `string`
  * statusText `string`
  * successMessageFlags `integer`
  * uniqueName `string`
  * userTitle `integer`
  * userTitleDisplay `string`
  * xboxDisplayName `string`

### User.Models.UserAlias
* User.Models.UserAlias `object`
  * cachePrefix `string`

### User.UserInfoCard
* User.UserInfoCard `object`: This contract supplies basic information commonly used to display a minimal amount of information about a user. Take care to not add more properties here unless the property applies in all (or at least the majority) of the situations where UserInfoCard is used. Avoid adding game specific or platform specific details here. In cases where UserInfoCard is a subset of the data needed in a contract, use UserInfoCard as a property of other contracts.
  * displayName `string`: Display Name the player has chosen for themselves. The display name is optional when the data type is used as input to a platform API.
  * iconPath `string`: URL the Icon if available.
  * membershipId `integer`: Membership ID as they user is known in the Accounts service
  * membershipType `object`: Type of the membership.
  * supplementalDisplayName `string`: A platform specific additional display name - ex: psn Real Name, bnet Unique Name, etc.

### User.UserMembership
* User.UserMembership `object`: Very basic info about a user as returned by the Account server.
  * displayName `string`: Display Name the player has chosen for themselves. The display name is optional when the data type is used as input to a platform API.
  * membershipId `integer`: Membership ID as they user is known in the Accounts service
  * membershipType `object`: Type of the membership.

### User.UserMembershipData
* User.UserMembershipData `object`
  * bungieNetUser [User.GeneralUser](#user.generaluser)
  * destinyMemberships `array`: this allows you to see destiny memberships that are visible and linked to this account (regardless of whether or not they have characters on the world server)
    * items [User.UserInfoCard](#user.userinfocard)

### User.UserToUserContext
* User.UserToUserContext `object`
  * globalIgnoreEndDate `string`
  * ignoreStatus [Ignores.IgnoreResponse](#ignores.ignoreresponse)
  * isFollowing `boolean`


