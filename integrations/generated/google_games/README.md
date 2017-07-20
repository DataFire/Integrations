# @datafire/google_games

Client library for Google Play Game Services

## Installation and Usage
```bash
npm install --save datafire @datafire/google_games
```

```js
let datafire = require('datafire');
let google_games = require('@datafire/google_games').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_games: account,
  }
})


google_games.turnBasedMatches.sync({}, context).then(data => {
  console.log(data);
})
```

## Description
The API for Google Play Game Services.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_games.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_games.oauthRefresh(null, context)
```


### achievementDefinitions.list
Lists all the achievement definitions for your application.


```js
google_games.achievementDefinitions.list({}, context)
```


### achievements.updateMultiple
Updates multiple achievements for the currently authenticated player.


```js
google_games.achievements.updateMultiple({}, context)
```


### achievements.increment
Increments the steps of the achievement with the given ID for the currently authenticated player.


```js
google_games.achievements.increment({
  "achievementId": "",
  "stepsToIncrement": 0
}, context)
```

#### Parameters
* achievementId (string) **required** - The ID of the achievement used by this method.
* stepsToIncrement (integer) **required** - The number of steps to increment.
* consistencyToken (string) - The last-seen mutation timestamp.
* requestId (string) - A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### achievements.reveal
Sets the state of the achievement with the given ID to REVEALED for the currently authenticated player.


```js
google_games.achievements.reveal({
  "achievementId": ""
}, context)
```

#### Parameters
* achievementId (string) **required** - The ID of the achievement used by this method.
* consistencyToken (string) - The last-seen mutation timestamp.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### achievements.setStepsAtLeast
Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.


```js
google_games.achievements.setStepsAtLeast({
  "achievementId": "",
  "steps": 0
}, context)
```

#### Parameters
* achievementId (string) **required** - The ID of the achievement used by this method.
* steps (integer) **required** - The minimum value to set the steps to.
* consistencyToken (string) - The last-seen mutation timestamp.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### achievements.unlock
Unlocks this achievement for the currently authenticated player.


```js
google_games.achievements.unlock({
  "achievementId": ""
}, context)
```

#### Parameters
* achievementId (string) **required** - The ID of the achievement used by this method.
* consistencyToken (string) - The last-seen mutation timestamp.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### applications.played
Indicate that the the currently authenticated user is playing your application.


```js
google_games.applications.played({}, context)
```


### applications.get
Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified platformType, the returned response will not include any instance data.


```js
google_games.applications.get({
  "applicationId": ""
}, context)
```

#### Parameters
* applicationId (string) **required** - The application ID from the Google Play developer console.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* platformType (string) - Restrict application details returned to the specific platform.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### applications.verify
Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.


```js
google_games.applications.verify({
  "applicationId": ""
}, context)
```

#### Parameters
* applicationId (string) **required** - The application ID from the Google Play developer console.
* consistencyToken (string) - The last-seen mutation timestamp.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### events.listDefinitions
Returns a list of the event definitions in this application.


```js
google_games.events.listDefinitions({}, context)
```


### events.listByPlayer
Returns a list showing the current progress on events in this application for the currently authenticated user.


```js
google_games.events.listByPlayer({}, context)
```


### events.record
Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.


```js
google_games.events.record({}, context)
```


### leaderboards.list
Lists all the leaderboard metadata for your application.


```js
google_games.leaderboards.list({}, context)
```


### scores.submitMultiple
Submits multiple scores to leaderboards.


```js
google_games.scores.submitMultiple({}, context)
```


### leaderboards.get
Retrieves the metadata of the leaderboard with the given ID.


```js
google_games.leaderboards.get({
  "leaderboardId": ""
}, context)
```

#### Parameters
* leaderboardId (string) **required** - The ID of the leaderboard.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### scores.submit
Submits a score to the specified leaderboard.


```js
google_games.scores.submit({
  "leaderboardId": "",
  "score": ""
}, context)
```

#### Parameters
* leaderboardId (string) **required** - The ID of the leaderboard.
* score (string) **required** - The score you're submitting. The submitted score is ignored if it is worse than a previously submitted score, where worse depends on the leaderboard sort order. The meaning of the score value depends on the leaderboard format type. For fixed-point, the score represents the raw value. For time, the score represents elapsed time in milliseconds. For currency, the score represents a value in micro units.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* scoreTag (string) - Additional information about the score you're submitting. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### scores.list
Lists the scores in a leaderboard, starting from the top.


```js
google_games.scores.list({
  "leaderboardId": "",
  "collection": "",
  "timeSpan": ""
}, context)
```

#### Parameters
* leaderboardId (string) **required** - The ID of the leaderboard.
* collection (string) **required** - The collection of scores you're requesting.
* timeSpan (string) **required** - The time span for the scores and ranks you're requesting.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* maxResults (integer) - The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
* pageToken (string) - The token returned by the previous request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### scores.listWindow
Lists the scores in a leaderboard around (and including) a player's score.


```js
google_games.scores.listWindow({
  "leaderboardId": "",
  "collection": "",
  "timeSpan": ""
}, context)
```

#### Parameters
* leaderboardId (string) **required** - The ID of the leaderboard.
* collection (string) **required** - The collection of scores you're requesting.
* timeSpan (string) **required** - The time span for the scores and ranks you're requesting.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* maxResults (integer) - The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
* pageToken (string) - The token returned by the previous request.
* resultsAbove (integer) - The preferred number of scores to return above the player's score. More scores may be returned if the player is at the bottom of the leaderboard; fewer may be returned if the player is at the top. Must be less than or equal to maxResults.
* returnTopIfAbsent (boolean) - True if the top scores should be returned when the player is not in the leaderboard. Defaults to true.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### metagame.getMetagameConfig
Return the metagame configuration data for the calling application.


```js
google_games.metagame.getMetagameConfig({}, context)
```


### players.list
Get the collection of players for the currently authenticated user.


```js
google_games.players.list({
  "collection": ""
}, context)
```

#### Parameters
* collection (string) **required** - Collection of players being retrieved
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* maxResults (integer) - The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified maxResults.
* pageToken (string) - The token returned by the previous request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### players.get
Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set playerId to me.


```js
google_games.players.get({
  "playerId": ""
}, context)
```

#### Parameters
* playerId (string) **required** - A player ID. A value of me may be used in place of the authenticated player's ID.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### achievements.list
Lists the progress for all your application's achievements for the currently authenticated player.


```js
google_games.achievements.list({
  "playerId": ""
}, context)
```

#### Parameters
* playerId (string) **required** - A player ID. A value of me may be used in place of the authenticated player's ID.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* maxResults (integer) - The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified maxResults.
* pageToken (string) - The token returned by the previous request.
* state (string) - Tells the server to return only achievements with the specified state. If this parameter isn't specified, all achievements are returned.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### metagame.listCategoriesByPlayer
List play data aggregated per category for the player corresponding to playerId.


```js
google_games.metagame.listCategoriesByPlayer({
  "playerId": "",
  "collection": ""
}, context)
```

#### Parameters
* playerId (string) **required** - A player ID. A value of me may be used in place of the authenticated player's ID.
* collection (string) **required** - The collection of categories for which data will be returned.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* maxResults (integer) - The maximum number of category resources to return in the response, used for paging. For any response, the actual number of category resources returned may be less than the specified maxResults.
* pageToken (string) - The token returned by the previous request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### scores.get
Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, leaderboardId can be set to ALL to retrieve data for all leaderboards in a given time span.
NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.


```js
google_games.scores.get({
  "playerId": "",
  "leaderboardId": "",
  "timeSpan": ""
}, context)
```

#### Parameters
* playerId (string) **required** - A player ID. A value of me may be used in place of the authenticated player's ID.
* leaderboardId (string) **required** - The ID of the leaderboard. Can be set to 'ALL' to retrieve data for all leaderboards for this application.
* timeSpan (string) **required** - The time span for the scores and ranks you're requesting.
* consistencyToken (string) - The last-seen mutation timestamp.
* includeRankType (string) - The types of ranks to return. If the parameter is omitted, no ranks will be returned.
* language (string) - The preferred language to use for strings returned by this method.
* maxResults (integer) - The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
* pageToken (string) - The token returned by the previous request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### quests.list
Get a list of quests for your application and the currently authenticated player.


```js
google_games.quests.list({
  "playerId": ""
}, context)
```

#### Parameters
* playerId (string) **required** - A player ID. A value of me may be used in place of the authenticated player's ID.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* maxResults (integer) - The maximum number of quest resources to return in the response, used for paging. For any response, the actual number of quest resources returned may be less than the specified maxResults. Acceptable values are 1 to 50, inclusive. (Default: 50).
* pageToken (string) - The token returned by the previous request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### snapshots.list
Retrieves a list of snapshots created by your application for the player corresponding to the player ID.


```js
google_games.snapshots.list({
  "playerId": ""
}, context)
```

#### Parameters
* playerId (string) **required** - A player ID. A value of me may be used in place of the authenticated player's ID.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* maxResults (integer) - The maximum number of snapshot resources to return in the response, used for paging. For any response, the actual number of snapshot resources returned may be less than the specified maxResults.
* pageToken (string) - The token returned by the previous request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### pushtokens.update
Registers a push token for the current user and application.


```js
google_games.pushtokens.update({}, context)
```


### pushtokens.remove
Removes a push token for the current user and application. Removing a non-existent push token will report success.


```js
google_games.pushtokens.remove({}, context)
```


### quests.accept
Indicates that the currently authorized user will participate in the quest.


```js
google_games.quests.accept({
  "questId": ""
}, context)
```

#### Parameters
* questId (string) **required** - The ID of the quest.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### questMilestones.claim
Report that a reward for the milestone corresponding to milestoneId for the quest corresponding to questId has been claimed by the currently authorized user.


```js
google_games.questMilestones.claim({
  "questId": "",
  "milestoneId": "",
  "requestId": ""
}, context)
```

#### Parameters
* questId (string) **required** - The ID of the quest.
* milestoneId (string) **required** - The ID of the milestone.
* requestId (string) **required** - A numeric ID to ensure that the request is handled correctly across retries. Your client application must generate this ID randomly.
* consistencyToken (string) - The last-seen mutation timestamp.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### revisions.check
Checks whether the games client is out of date.


```js
google_games.revisions.check({
  "clientRevision": ""
}, context)
```

#### Parameters
* clientRevision (string) **required** - The revision of the client SDK used by your application. Format:
* consistencyToken (string) - The last-seen mutation timestamp.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### rooms.list
Returns invitations to join rooms.


```js
google_games.rooms.list({}, context)
```


### rooms.create
Create a room. For internal use by the Games SDK only. Calling this method directly is unsupported.


```js
google_games.rooms.create({}, context)
```


### rooms.get
Get the data for a room.


```js
google_games.rooms.get({
  "roomId": ""
}, context)
```

#### Parameters
* roomId (string) **required** - The ID of the room.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### rooms.decline
Decline an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.


```js
google_games.rooms.decline({
  "roomId": ""
}, context)
```

#### Parameters
* roomId (string) **required** - The ID of the room.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### rooms.dismiss
Dismiss an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.


```js
google_games.rooms.dismiss({
  "roomId": ""
}, context)
```

#### Parameters
* roomId (string) **required** - The ID of the room.
* consistencyToken (string) - The last-seen mutation timestamp.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### rooms.join
Join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.


```js
google_games.rooms.join({
  "roomId": ""
}, context)
```

#### Parameters
* roomId (string) **required** - The ID of the room.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* body (object) - This is a JSON template for a join room request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### rooms.leave
Leave a room. For internal use by the Games SDK only. Calling this method directly is unsupported.


```js
google_games.rooms.leave({
  "roomId": ""
}, context)
```

#### Parameters
* roomId (string) **required** - The ID of the room.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* body (object) - This is a JSON template for a leave room request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### rooms.reportStatus
Updates sent by a client reporting the status of peers in a room. For internal use by the Games SDK only. Calling this method directly is unsupported.


```js
google_games.rooms.reportStatus({
  "roomId": ""
}, context)
```

#### Parameters
* roomId (string) **required** - The ID of the room.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* body (object) - This is a JSON template for an update on the status of peers in a room.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### snapshots.get
Retrieves the metadata for a given snapshot ID.


```js
google_games.snapshots.get({
  "snapshotId": ""
}, context)
```

#### Parameters
* snapshotId (string) **required** - The ID of the snapshot.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### turnBasedMatches.list
Returns turn-based matches the player is or was involved in.


```js
google_games.turnBasedMatches.list({}, context)
```


### turnBasedMatches.create
Create a turn-based match.


```js
google_games.turnBasedMatches.create({}, context)
```


### turnBasedMatches.sync
Returns turn-based matches the player is or was involved in that changed since the last sync call, with the least recent changes coming first. Matches that should be removed from the local cache will have a status of MATCH_DELETED.


```js
google_games.turnBasedMatches.sync({}, context)
```


### turnBasedMatches.get
Get the data for a turn-based match.


```js
google_games.turnBasedMatches.get({
  "matchId": ""
}, context)
```

#### Parameters
* matchId (string) **required** - The ID of the match.
* consistencyToken (string) - The last-seen mutation timestamp.
* includeMatchData (boolean) - Get match data along with metadata.
* language (string) - The preferred language to use for strings returned by this method.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### turnBasedMatches.cancel
Cancel a turn-based match.


```js
google_games.turnBasedMatches.cancel({
  "matchId": ""
}, context)
```

#### Parameters
* matchId (string) **required** - The ID of the match.
* consistencyToken (string) - The last-seen mutation timestamp.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### turnBasedMatches.decline
Decline an invitation to play a turn-based match.


```js
google_games.turnBasedMatches.decline({
  "matchId": ""
}, context)
```

#### Parameters
* matchId (string) **required** - The ID of the match.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### turnBasedMatches.dismiss
Dismiss a turn-based match from the match list. The match will no longer show up in the list and will not generate notifications.


```js
google_games.turnBasedMatches.dismiss({
  "matchId": ""
}, context)
```

#### Parameters
* matchId (string) **required** - The ID of the match.
* consistencyToken (string) - The last-seen mutation timestamp.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### turnBasedMatches.finish
Finish a turn-based match. Each player should make this call once, after all results are in. Only the player whose turn it is may make the first call to Finish, and can pass in the final match state.


```js
google_games.turnBasedMatches.finish({
  "matchId": ""
}, context)
```

#### Parameters
* matchId (string) **required** - The ID of the match.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* body (object) - This is a JSON template for a turn-based match results object.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### turnBasedMatches.join
Join a turn-based match.


```js
google_games.turnBasedMatches.join({
  "matchId": ""
}, context)
```

#### Parameters
* matchId (string) **required** - The ID of the match.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### turnBasedMatches.leave
Leave a turn-based match when it is not the current player's turn, without canceling the match.


```js
google_games.turnBasedMatches.leave({
  "matchId": ""
}, context)
```

#### Parameters
* matchId (string) **required** - The ID of the match.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### turnBasedMatches.leaveTurn
Leave a turn-based match during the current player's turn, without canceling the match.


```js
google_games.turnBasedMatches.leaveTurn({
  "matchId": "",
  "matchVersion": 0
}, context)
```

#### Parameters
* matchId (string) **required** - The ID of the match.
* matchVersion (integer) **required** - The version of the match being updated.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* pendingParticipantId (string) - The ID of another participant who should take their turn next. If not set, the match will wait for other player(s) to join via automatching; this is only valid if automatch criteria is set on the match with remaining slots for automatched players.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### turnBasedMatches.rematch
Create a rematch of a match that was previously completed, with the same participants. This can be called by only one player on a match still in their list; the player must have called Finish first. Returns the newly created match; it will be the caller's turn.


```js
google_games.turnBasedMatches.rematch({
  "matchId": ""
}, context)
```

#### Parameters
* matchId (string) **required** - The ID of the match.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* requestId (string) - A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### turnBasedMatches.takeTurn
Commit the results of a player turn.


```js
google_games.turnBasedMatches.takeTurn({
  "matchId": ""
}, context)
```

#### Parameters
* matchId (string) **required** - The ID of the match.
* consistencyToken (string) - The last-seen mutation timestamp.
* language (string) - The preferred language to use for strings returned by this method.
* body (object) - This is a JSON template for the object representing a turn.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

