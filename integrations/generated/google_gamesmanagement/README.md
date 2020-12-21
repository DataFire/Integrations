# @datafire/google_gamesmanagement

Client library for Google Play Game Management

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

.then(data => {
  console.log(data);
});
```

## Description

The Google Play Game Management API allows developers to manage resources from the Google Play Game service.

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

### gamesManagement.achievements.resetAll
Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.


```js
google_gamesmanagement.gamesManagement.achievements.resetAll({}, context)
```

#### Input
* input `object`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AchievementResetAllResponse](#achievementresetallresponse)

### gamesManagement.achievements.resetAllForAllPlayers
Resets all draft achievements for all players. This method is only available to user accounts for your developer console.


```js
google_gamesmanagement.gamesManagement.achievements.resetAllForAllPlayers({}, context)
```

#### Input
* input `object`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gamesManagement.achievements.resetMultipleForAllPlayers
Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.


```js
google_gamesmanagement.gamesManagement.achievements.resetMultipleForAllPlayers({}, context)
```

#### Input
* input `object`
  * body [AchievementResetMultipleForAllRequest](#achievementresetmultipleforallrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gamesManagement.achievements.reset
Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.


```js
google_gamesmanagement.gamesManagement.achievements.reset({
  "achievementId": ""
}, context)
```

#### Input
* input `object`
  * achievementId **required** `string`: The ID of the achievement used by this method.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AchievementResetResponse](#achievementresetresponse)

### gamesManagement.achievements.resetForAllPlayers
Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.


```js
google_gamesmanagement.gamesManagement.achievements.resetForAllPlayers({
  "achievementId": ""
}, context)
```

#### Input
* input `object`
  * achievementId **required** `string`: The ID of the achievement used by this method.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gamesManagement.applications.listHidden
Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.


```js
google_gamesmanagement.gamesManagement.applications.listHidden({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The application ID from the Google Play developer console.
  * maxResults `integer`: The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified `maxResults`.
  * pageToken `string`: The token returned by the previous request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [HiddenPlayerList](#hiddenplayerlist)

### gamesManagement.players.unhide
Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.


```js
google_gamesmanagement.gamesManagement.players.unhide({
  "applicationId": "",
  "playerId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The application ID from the Google Play developer console.
  * playerId **required** `string`: A player ID. A value of `me` may be used in place of the authenticated player's ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gamesManagement.players.hide
Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.


```js
google_gamesmanagement.gamesManagement.players.hide({
  "applicationId": "",
  "playerId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The application ID from the Google Play developer console.
  * playerId **required** `string`: A player ID. A value of `me` may be used in place of the authenticated player's ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gamesManagement.events.resetAll
Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.


```js
google_gamesmanagement.gamesManagement.events.resetAll({}, context)
```

#### Input
* input `object`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gamesManagement.events.resetAllForAllPlayers
Resets all draft events for all players. This method is only available to user accounts for your developer console.


```js
google_gamesmanagement.gamesManagement.events.resetAllForAllPlayers({}, context)
```

#### Input
* input `object`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gamesManagement.events.resetMultipleForAllPlayers
Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.


```js
google_gamesmanagement.gamesManagement.events.resetMultipleForAllPlayers({}, context)
```

#### Input
* input `object`
  * body [EventsResetMultipleForAllRequest](#eventsresetmultipleforallrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gamesManagement.events.reset
Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.


```js
google_gamesmanagement.gamesManagement.events.reset({
  "eventId": ""
}, context)
```

#### Input
* input `object`
  * eventId **required** `string`: The ID of the event.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gamesManagement.events.resetForAllPlayers
Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.


```js
google_gamesmanagement.gamesManagement.events.resetForAllPlayers({
  "eventId": ""
}, context)
```

#### Input
* input `object`
  * eventId **required** `string`: The ID of the event.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gamesManagement.scores.reset
Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.


```js
google_gamesmanagement.gamesManagement.scores.reset({
  "leaderboardId": ""
}, context)
```

#### Input
* input `object`
  * leaderboardId **required** `string`: The ID of the leaderboard.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [PlayerScoreResetResponse](#playerscoreresetresponse)

### gamesManagement.scores.resetForAllPlayers
Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.


```js
google_gamesmanagement.gamesManagement.scores.resetForAllPlayers({
  "leaderboardId": ""
}, context)
```

#### Input
* input `object`
  * leaderboardId **required** `string`: The ID of the leaderboard.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gamesManagement.scores.resetAll
Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.


```js
google_gamesmanagement.gamesManagement.scores.resetAll({}, context)
```

#### Input
* input `object`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [PlayerScoreResetAllResponse](#playerscoreresetallresponse)

### gamesManagement.scores.resetAllForAllPlayers
Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.


```js
google_gamesmanagement.gamesManagement.scores.resetAllForAllPlayers({}, context)
```

#### Input
* input `object`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### gamesManagement.scores.resetMultipleForAllPlayers
Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.


```js
google_gamesmanagement.gamesManagement.scores.resetMultipleForAllPlayers({}, context)
```

#### Input
* input `object`
  * body [ScoresResetMultipleForAllRequest](#scoresresetmultipleforallrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*



## Definitions

### AchievementResetAllResponse
* AchievementResetAllResponse `object`: Achievement reset all response.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetAllResponse`.
  * results `array`: The achievement reset results.
    * items [AchievementResetResponse](#achievementresetresponse)

### AchievementResetMultipleForAllRequest
* AchievementResetMultipleForAllRequest `object`
  * achievement_ids `array`: The IDs of achievements to reset.
    * items `string`
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetMultipleForAllRequest`.

### AchievementResetResponse
* AchievementResetResponse `object`: An achievement reset response.
  * currentState `string`: The current state of the achievement. This is the same as the initial state of the achievement. Possible values are: - "`HIDDEN`"- Achievement is hidden. - "`REVEALED`" - Achievement is revealed. - "`UNLOCKED`" - Achievement is unlocked. 
  * definitionId `string`: The ID of an achievement for which player state has been updated.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetResponse`.
  * updateOccurred `boolean`: Flag to indicate if the requested update actually occurred.

### EventsResetMultipleForAllRequest
* EventsResetMultipleForAllRequest `object`: Multiple events reset all request.
  * event_ids `array`: The IDs of events to reset.
    * items `string`
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#eventsResetMultipleForAllRequest`.

### GamesPlayerExperienceInfoResource
* GamesPlayerExperienceInfoResource `object`: 1P/3P metadata about the player's experience.
  * currentExperiencePoints `string`: The current number of experience points for the player.
  * currentLevel [GamesPlayerLevelResource](#gamesplayerlevelresource)
  * lastLevelUpTimestampMillis `string`: The timestamp when the player was leveled up, in millis since Unix epoch UTC.
  * nextLevel [GamesPlayerLevelResource](#gamesplayerlevelresource)

### GamesPlayerLevelResource
* GamesPlayerLevelResource `object`: 1P/3P metadata about a user's level.
  * level `integer`: The level for the user.
  * maxExperiencePoints `string`: The maximum experience points for this level.
  * minExperiencePoints `string`: The minimum experience points for this level.

### HiddenPlayer
* HiddenPlayer `object`: The HiddenPlayer resource.
  * hiddenTimeMillis `string`: Output only. The time this player was hidden.
  * kind `string`: Output only. Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#hiddenPlayer`.
  * player [Player](#player)

### HiddenPlayerList
* HiddenPlayerList `object`: A list of hidden players.
  * items `array`: The players.
    * items [HiddenPlayer](#hiddenplayer)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#hiddenPlayerList`.
  * nextPageToken `string`: The pagination token for the next page of results.

### Player
* Player `object`: A Player resource.
  * avatarImageUrl `string`: The base URL for the image that represents the player.
  * bannerUrlLandscape `string`: The url to the landscape mode player banner image.
  * bannerUrlPortrait `string`: The url to the portrait mode player banner image.
  * displayName `string`: The name to display for the player.
  * experienceInfo [GamesPlayerExperienceInfoResource](#gamesplayerexperienceinforesource)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#player`.
  * name `object`: An object representation of the individual components of the player's name. For some players, these fields may not be present.
    * familyName `string`: The family name of this player. In some places, this is known as the last name.
    * givenName `string`: The given name of this player. In some places, this is known as the first name.
  * originalPlayerId `string`: The player ID that was used for this player the first time they signed into the game in question. This is only populated for calls to player.get for the requesting player, only if the player ID has subsequently changed, and only to clients that support remapping player IDs.
  * playerId `string`: The ID of the player.
  * profileSettings [ProfileSettings](#profilesettings)
  * title `string`: The player's title rewarded for their game activities.

### PlayerScoreResetAllResponse
* PlayerScoreResetAllResponse `object`: A list of leaderboard reset resources.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#playerScoreResetAllResponse`.
  * results `array`: The leaderboard reset results.
    * items [PlayerScoreResetResponse](#playerscoreresetresponse)

### PlayerScoreResetResponse
* PlayerScoreResetResponse `object`: A list of reset leaderboard entry resources.
  * definitionId `string`: The ID of an leaderboard for which player state has been updated.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#playerScoreResetResponse`.
  * resetScoreTimeSpans `array`: The time spans of the updated score. Possible values are: - "`ALL_TIME`" - The score is an all-time score. - "`WEEKLY`" - The score is a weekly score. - "`DAILY`" - The score is a daily score. 
    * items `string`

### ProfileSettings
* ProfileSettings `object`: Profile settings
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#profileSettings`.
  * profileVisible `boolean`

### ScoresResetMultipleForAllRequest
* ScoresResetMultipleForAllRequest `object`
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#scoresResetMultipleForAllRequest`.
  * leaderboard_ids `array`: The IDs of leaderboards to reset.
    * items `string`


