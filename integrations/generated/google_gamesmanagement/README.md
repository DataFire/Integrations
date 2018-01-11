# @datafire/google_gamesmanagement

Client library for Google Play Game Services Management

## Installation and Usage
```bash
npm install --save @datafire/google_gamesmanagement
```
```js
let google_gamesmanagement = require('@datafire/google_gamesmanagement').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_gamesmanagement.turnBasedMatches.resetForAllPlayers({}).then(data => {
  console.log(data);
})
```

## Description

The Management API for Google Play Game Services.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_gamesmanagement.oauthCallback({
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
google_gamesmanagement.oauthRefresh(null, context)
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

### achievements.resetAll
Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.


```js
google_gamesmanagement.achievements.resetAll({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AchievementResetAllResponse](#achievementresetallresponse)

### achievements.resetAllForAllPlayers
Resets all draft achievements for all players. This method is only available to user accounts for your developer console.


```js
google_gamesmanagement.achievements.resetAllForAllPlayers({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### achievements.resetMultipleForAllPlayers
Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.


```js
google_gamesmanagement.achievements.resetMultipleForAllPlayers({}, context)
```

#### Input
* input `object`
  * body [AchievementResetMultipleForAllRequest](#achievementresetmultipleforallrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### achievements.reset
Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.


```js
google_gamesmanagement.achievements.reset({
  "achievementId": ""
}, context)
```

#### Input
* input `object`
  * achievementId **required** `string`: The ID of the achievement used by this method.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AchievementResetResponse](#achievementresetresponse)

### achievements.resetForAllPlayers
Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.


```js
google_gamesmanagement.achievements.resetForAllPlayers({
  "achievementId": ""
}, context)
```

#### Input
* input `object`
  * achievementId **required** `string`: The ID of the achievement used by this method.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### applications.listHidden
Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.


```js
google_gamesmanagement.applications.listHidden({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The application ID from the Google Play developer console.
  * maxResults `integer`: The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified maxResults.
  * pageToken `string`: The token returned by the previous request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [HiddenPlayerList](#hiddenplayerlist)

### players.unhide
Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.


```js
google_gamesmanagement.players.unhide({
  "applicationId": "",
  "playerId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The application ID from the Google Play developer console.
  * playerId **required** `string`: A player ID. A value of me may be used in place of the authenticated player's ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### players.hide
Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.


```js
google_gamesmanagement.players.hide({
  "applicationId": "",
  "playerId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The application ID from the Google Play developer console.
  * playerId **required** `string`: A player ID. A value of me may be used in place of the authenticated player's ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### events.resetAll
Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application. All quests for this player will also be reset.


```js
google_gamesmanagement.events.resetAll({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### events.resetAllForAllPlayers
Resets all draft events for all players. This method is only available to user accounts for your developer console. All quests that use any of these events will also be reset.


```js
google_gamesmanagement.events.resetAllForAllPlayers({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### events.resetMultipleForAllPlayers
Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset. All quests that use any of the events will also be reset.


```js
google_gamesmanagement.events.resetMultipleForAllPlayers({}, context)
```

#### Input
* input `object`
  * body [EventsResetMultipleForAllRequest](#eventsresetmultipleforallrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### events.reset
Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application. All quests for this player that use the event will also be reset.


```js
google_gamesmanagement.events.reset({
  "eventId": ""
}, context)
```

#### Input
* input `object`
  * eventId **required** `string`: The ID of the event.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### events.resetForAllPlayers
Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset. All quests that use the event will also be reset.


```js
google_gamesmanagement.events.resetForAllPlayers({
  "eventId": ""
}, context)
```

#### Input
* input `object`
  * eventId **required** `string`: The ID of the event.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### scores.reset
Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.


```js
google_gamesmanagement.scores.reset({
  "leaderboardId": ""
}, context)
```

#### Input
* input `object`
  * leaderboardId **required** `string`: The ID of the leaderboard.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PlayerScoreResetResponse](#playerscoreresetresponse)

### scores.resetForAllPlayers
Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.


```js
google_gamesmanagement.scores.resetForAllPlayers({
  "leaderboardId": ""
}, context)
```

#### Input
* input `object`
  * leaderboardId **required** `string`: The ID of the leaderboard.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### quests.resetAll
Resets all player progress on all quests for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.


```js
google_gamesmanagement.quests.resetAll({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### quests.resetAllForAllPlayers
Resets all draft quests for all players. This method is only available to user accounts for your developer console.


```js
google_gamesmanagement.quests.resetAllForAllPlayers({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### quests.resetMultipleForAllPlayers
Resets quests with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft quests may be reset.


```js
google_gamesmanagement.quests.resetMultipleForAllPlayers({}, context)
```

#### Input
* input `object`
  * body [QuestsResetMultipleForAllRequest](#questsresetmultipleforallrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### quests.reset
Resets all player progress on the quest with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.


```js
google_gamesmanagement.quests.reset({
  "questId": ""
}, context)
```

#### Input
* input `object`
  * questId **required** `string`: The ID of the quest.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### quests.resetForAllPlayers
Resets all player progress on the quest with the given ID for all players. This method is only available to user accounts for your developer console. Only draft quests can be reset.


```js
google_gamesmanagement.quests.resetForAllPlayers({
  "questId": ""
}, context)
```

#### Input
* input `object`
  * questId **required** `string`: The ID of the quest.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### rooms.reset
Reset all rooms for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.


```js
google_gamesmanagement.rooms.reset({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### rooms.resetForAllPlayers
Deletes rooms where the only room participants are from whitelisted tester accounts for your application. This method is only available to user accounts for your developer console.


```js
google_gamesmanagement.rooms.resetForAllPlayers({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### scores.resetAll
Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.


```js
google_gamesmanagement.scores.resetAll({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PlayerScoreResetAllResponse](#playerscoreresetallresponse)

### scores.resetAllForAllPlayers
Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.


```js
google_gamesmanagement.scores.resetAllForAllPlayers({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### scores.resetMultipleForAllPlayers
Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.


```js
google_gamesmanagement.scores.resetMultipleForAllPlayers({}, context)
```

#### Input
* input `object`
  * body [ScoresResetMultipleForAllRequest](#scoresresetmultipleforallrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### turnBasedMatches.reset
Reset all turn-based match data for a user. This method is only accessible to whitelisted tester accounts for your application.


```js
google_gamesmanagement.turnBasedMatches.reset({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### turnBasedMatches.resetForAllPlayers
Deletes turn-based matches where the only match participants are from whitelisted tester accounts for your application. This method is only available to user accounts for your developer console.


```js
google_gamesmanagement.turnBasedMatches.resetForAllPlayers({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*



## Definitions

### AchievementResetAllResponse
* AchievementResetAllResponse `object`: This is a JSON template for achievement reset all response.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#achievementResetAllResponse.
  * results `array`: The achievement reset results.
    * items [AchievementResetResponse](#achievementresetresponse)

### AchievementResetMultipleForAllRequest
* AchievementResetMultipleForAllRequest `object`: This is a JSON template for multiple achievements reset all request.
  * achievement_ids `array`: The IDs of achievements to reset.
    * items `string`
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#achievementResetMultipleForAllRequest.

### AchievementResetResponse
* AchievementResetResponse `object`: This is a JSON template for an achievement reset response.
  * currentState `string`: The current state of the achievement. This is the same as the initial state of the achievement.
  * definitionId `string`: The ID of an achievement for which player state has been updated.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#achievementResetResponse.
  * updateOccurred `boolean`: Flag to indicate if the requested update actually occurred.

### EventsResetMultipleForAllRequest
* EventsResetMultipleForAllRequest `object`: This is a JSON template for multiple events reset all request.
  * event_ids `array`: The IDs of events to reset.
    * items `string`
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#eventsResetMultipleForAllRequest.

### GamesPlayedResource
* GamesPlayedResource `object`: This is a JSON template for metadata about a player playing a game with the currently authenticated user.
  * autoMatched `boolean`: True if the player was auto-matched with the currently authenticated user.
  * timeMillis `string`: The last time the player played the game in milliseconds since the epoch in UTC.

### GamesPlayerExperienceInfoResource
* GamesPlayerExperienceInfoResource `object`: This is a JSON template for 1P/3P metadata about the player's experience.
  * currentExperiencePoints `string`: The current number of experience points for the player.
  * currentLevel [GamesPlayerLevelResource](#gamesplayerlevelresource)
  * lastLevelUpTimestampMillis `string`: The timestamp when the player was leveled up, in millis since Unix epoch UTC.
  * nextLevel [GamesPlayerLevelResource](#gamesplayerlevelresource)

### GamesPlayerLevelResource
* GamesPlayerLevelResource `object`: This is a JSON template for 1P/3P metadata about a user's level.
  * level `integer`: The level for the user.
  * maxExperiencePoints `string`: The maximum experience points for this level.
  * minExperiencePoints `string`: The minimum experience points for this level.

### HiddenPlayer
* HiddenPlayer `object`: This is a JSON template for the HiddenPlayer resource.
  * hiddenTimeMillis `string`: The time this player was hidden.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#hiddenPlayer.
  * player [Player](#player)

### HiddenPlayerList
* HiddenPlayerList `object`: This is a JSON template for a list of hidden players.
  * items `array`: The players.
    * items [HiddenPlayer](#hiddenplayer)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#hiddenPlayerList.
  * nextPageToken `string`: The pagination token for the next page of results.

### Player
* Player `object`: This is a JSON template for a Player resource.
  * avatarImageUrl `string`: The base URL for the image that represents the player.
  * bannerUrlLandscape `string`: The url to the landscape mode player banner image.
  * bannerUrlPortrait `string`: The url to the portrait mode player banner image.
  * displayName `string`: The name to display for the player.
  * experienceInfo [GamesPlayerExperienceInfoResource](#gamesplayerexperienceinforesource)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#player.
  * lastPlayedWith [GamesPlayedResource](#gamesplayedresource)
  * name `object`: An object representation of the individual components of the player's name. For some players, these fields may not be present.
    * familyName `string`: The family name of this player. In some places, this is known as the last name.
    * givenName `string`: The given name of this player. In some places, this is known as the first name.
  * originalPlayerId `string`: The player ID that was used for this player the first time they signed into the game in question. This is only populated for calls to player.get for the requesting player, only if the player ID has subsequently changed, and only to clients that support remapping player IDs.
  * playerId `string`: The ID of the player.
  * profileSettings [ProfileSettings](#profilesettings)
  * title `string`: The player's title rewarded for their game activities.

### PlayerScoreResetAllResponse
* PlayerScoreResetAllResponse `object`: This is a JSON template for a list of leaderboard reset resources.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#playerScoreResetResponse.
  * results `array`: The leaderboard reset results.
    * items [PlayerScoreResetResponse](#playerscoreresetresponse)

### PlayerScoreResetResponse
* PlayerScoreResetResponse `object`: This is a JSON template for a list of reset leaderboard entry resources.
  * definitionId `string`: The ID of an leaderboard for which player state has been updated.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#playerScoreResetResponse.
  * resetScoreTimeSpans `array`: The time spans of the updated score.
    * items `string`

### ProfileSettings
* ProfileSettings `object`: This is a JSON template for profile settings
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#profileSettings.
  * profileVisible `boolean`: The player's current profile visibility. This field is visible to both 1P and 3P APIs.

### QuestsResetMultipleForAllRequest
* QuestsResetMultipleForAllRequest `object`: This is a JSON template for multiple quests reset all request.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#questsResetMultipleForAllRequest.
  * quest_ids `array`: The IDs of quests to reset.
    * items `string`

### ScoresResetMultipleForAllRequest
* ScoresResetMultipleForAllRequest `object`: This is a JSON template for multiple scores reset all request.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#scoresResetMultipleForAllRequest.
  * leaderboard_ids `array`: The IDs of leaderboards to reset.
    * items `string`


