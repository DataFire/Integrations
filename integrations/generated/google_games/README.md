# @datafire/google_games
The API for Google Play Game Services.

## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: achievementDefinitions.list
Lists all the achievement definitions for your application.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified maxResults.",
      "maximum": 200,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AchievementDefinitionsListResponse"
}
```
## Operation: achievements.updateMultiple
Updates multiple achievements for the currently authenticated player.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "body": {
      "$ref": "#/definitions/AchievementUpdateMultipleRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AchievementUpdateMultipleResponse"
}
```
## Operation: achievements.increment
Increments the steps of the achievement with the given ID for the currently authenticated player.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "achievementId": {
      "type": "string",
      "description": "The ID of the achievement used by this method."
    },
    "stepsToIncrement": {
      "type": "integer",
      "description": "The number of steps to increment.",
      "minimum": 1
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "requestId": {
      "type": "string",
      "description": "A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "achievementId",
    "stepsToIncrement"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AchievementIncrementResponse"
}
```
## Operation: achievements.reveal
Sets the state of the achievement with the given ID to REVEALED for the currently authenticated player.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "achievementId": {
      "type": "string",
      "description": "The ID of the achievement used by this method."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "achievementId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AchievementRevealResponse"
}
```
## Operation: achievements.setStepsAtLeast
Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "achievementId": {
      "type": "string",
      "description": "The ID of the achievement used by this method."
    },
    "steps": {
      "type": "integer",
      "description": "The minimum value to set the steps to.",
      "minimum": 1
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "achievementId",
    "steps"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AchievementSetStepsAtLeastResponse"
}
```
## Operation: achievements.unlock
Unlocks this achievement for the currently authenticated player.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "achievementId": {
      "type": "string",
      "description": "The ID of the achievement used by this method."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "achievementId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AchievementUnlockResponse"
}
```
## Operation: applications.played
Indicate that the the currently authenticated user is playing your application.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: applications.get
Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified platformType, the returned response will not include any instance data.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "applicationId": {
      "type": "string",
      "description": "The application ID from the Google Play developer console."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "platformType": {
      "type": "string",
      "description": "Restrict application details returned to the specific platform.",
      "enum": [
        "ANDROID",
        "IOS",
        "WEB_APP"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "applicationId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Application"
}
```
## Operation: applications.verify
Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "applicationId": {
      "type": "string",
      "description": "The application ID from the Google Play developer console."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "applicationId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApplicationVerifyResponse"
}
```
## Operation: events.listDefinitions
Returns a list of the event definitions in this application.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of event definitions to return in the response, used for paging. For any response, the actual number of event definitions to return may be less than the specified maxResults.",
      "maximum": 100,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EventDefinitionListResponse"
}
```
## Operation: events.listByPlayer
Returns a list showing the current progress on events in this application for the currently authenticated user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of events to return in the response, used for paging. For any response, the actual number of events to return may be less than the specified maxResults.",
      "maximum": 100,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlayerEventListResponse"
}
```
## Operation: events.record
Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "body": {
      "$ref": "#/definitions/EventRecordRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EventUpdateResponse"
}
```
## Operation: leaderboards.list
Lists all the leaderboard metadata for your application.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of leaderboards to return in the response. For any response, the actual number of leaderboards returned may be less than the specified maxResults.",
      "maximum": 200,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LeaderboardListResponse"
}
```
## Operation: scores.submitMultiple
Submits multiple scores to leaderboards.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "body": {
      "$ref": "#/definitions/PlayerScoreSubmissionList"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlayerScoreListResponse"
}
```
## Operation: leaderboards.get
Retrieves the metadata of the leaderboard with the given ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "leaderboardId": {
      "type": "string",
      "description": "The ID of the leaderboard."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "leaderboardId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Leaderboard"
}
```
## Operation: scores.submit
Submits a score to the specified leaderboard.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "leaderboardId": {
      "type": "string",
      "description": "The ID of the leaderboard."
    },
    "score": {
      "type": "string",
      "description": "The score you're submitting. The submitted score is ignored if it is worse than a previously submitted score, where worse depends on the leaderboard sort order. The meaning of the score value depends on the leaderboard format type. For fixed-point, the score represents the raw value. For time, the score represents elapsed time in milliseconds. For currency, the score represents a value in micro units."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "scoreTag": {
      "type": "string",
      "description": "Additional information about the score you're submitting. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "leaderboardId",
    "score"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlayerScoreResponse"
}
```
## Operation: scores.list
Lists the scores in a leaderboard, starting from the top.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "leaderboardId": {
      "type": "string",
      "description": "The ID of the leaderboard."
    },
    "collection": {
      "type": "string",
      "description": "The collection of scores you're requesting.",
      "enum": [
        "PUBLIC",
        "SOCIAL",
        "SOCIAL_1P"
      ]
    },
    "timeSpan": {
      "type": "string",
      "description": "The time span for the scores and ranks you're requesting.",
      "enum": [
        "ALL_TIME",
        "DAILY",
        "WEEKLY"
      ]
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.",
      "maximum": 30,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "leaderboardId",
    "collection",
    "timeSpan"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LeaderboardScores"
}
```
## Operation: scores.listWindow
Lists the scores in a leaderboard around (and including) a player's score.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "leaderboardId": {
      "type": "string",
      "description": "The ID of the leaderboard."
    },
    "collection": {
      "type": "string",
      "description": "The collection of scores you're requesting.",
      "enum": [
        "PUBLIC",
        "SOCIAL",
        "SOCIAL_1P"
      ]
    },
    "timeSpan": {
      "type": "string",
      "description": "The time span for the scores and ranks you're requesting.",
      "enum": [
        "ALL_TIME",
        "DAILY",
        "WEEKLY"
      ]
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.",
      "maximum": 30,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
    },
    "resultsAbove": {
      "type": "integer",
      "description": "The preferred number of scores to return above the player's score. More scores may be returned if the player is at the bottom of the leaderboard; fewer may be returned if the player is at the top. Must be less than or equal to maxResults."
    },
    "returnTopIfAbsent": {
      "type": "boolean",
      "description": "True if the top scores should be returned when the player is not in the leaderboard. Defaults to true."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "leaderboardId",
    "collection",
    "timeSpan"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LeaderboardScores"
}
```
## Operation: metagame.getMetagameConfig
Return the metagame configuration data for the calling application.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MetagameConfig"
}
```
## Operation: players.list
Get the collection of players for the currently authenticated user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection": {
      "type": "string",
      "description": "Collection of players being retrieved",
      "enum": [
        "connected",
        "playedWith",
        "played_with",
        "visible"
      ]
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified maxResults.",
      "maximum": 50,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "collection"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlayerListResponse"
}
```
## Operation: players.get
Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set playerId to me.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "playerId": {
      "type": "string",
      "description": "A player ID. A value of me may be used in place of the authenticated player's ID."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "playerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Player"
}
```
## Operation: achievements.list
Lists the progress for all your application's achievements for the currently authenticated player.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "playerId": {
      "type": "string",
      "description": "A player ID. A value of me may be used in place of the authenticated player's ID."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified maxResults.",
      "maximum": 200,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
    },
    "state": {
      "type": "string",
      "description": "Tells the server to return only achievements with the specified state. If this parameter isn't specified, all achievements are returned.",
      "enum": [
        "ALL",
        "HIDDEN",
        "REVEALED",
        "UNLOCKED"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "playerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlayerAchievementListResponse"
}
```
## Operation: metagame.listCategoriesByPlayer
List play data aggregated per category for the player corresponding to playerId.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "playerId": {
      "type": "string",
      "description": "A player ID. A value of me may be used in place of the authenticated player's ID."
    },
    "collection": {
      "type": "string",
      "description": "The collection of categories for which data will be returned.",
      "enum": [
        "all"
      ]
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of category resources to return in the response, used for paging. For any response, the actual number of category resources returned may be less than the specified maxResults.",
      "maximum": 100,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "playerId",
    "collection"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CategoryListResponse"
}
```
## Operation: scores.get
Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, leaderboardId can be set to ALL to retrieve data for all leaderboards in a given time span.
NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "playerId": {
      "type": "string",
      "description": "A player ID. A value of me may be used in place of the authenticated player's ID."
    },
    "leaderboardId": {
      "type": "string",
      "description": "The ID of the leaderboard. Can be set to 'ALL' to retrieve data for all leaderboards for this application."
    },
    "timeSpan": {
      "type": "string",
      "description": "The time span for the scores and ranks you're requesting.",
      "enum": [
        "ALL",
        "ALL_TIME",
        "DAILY",
        "WEEKLY"
      ]
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "includeRankType": {
      "type": "string",
      "description": "The types of ranks to return. If the parameter is omitted, no ranks will be returned.",
      "enum": [
        "ALL",
        "PUBLIC",
        "SOCIAL"
      ]
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.",
      "maximum": 30,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "playerId",
    "leaderboardId",
    "timeSpan"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlayerLeaderboardScoreListResponse"
}
```
## Operation: quests.list
Get a list of quests for your application and the currently authenticated player.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "playerId": {
      "type": "string",
      "description": "A player ID. A value of me may be used in place of the authenticated player's ID."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of quest resources to return in the response, used for paging. For any response, the actual number of quest resources returned may be less than the specified maxResults. Acceptable values are 1 to 50, inclusive. (Default: 50).",
      "maximum": 50,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "playerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/QuestListResponse"
}
```
## Operation: snapshots.list
Retrieves a list of snapshots created by your application for the player corresponding to the player ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "playerId": {
      "type": "string",
      "description": "A player ID. A value of me may be used in place of the authenticated player's ID."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of snapshot resources to return in the response, used for paging. For any response, the actual number of snapshot resources returned may be less than the specified maxResults.",
      "maximum": 25,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "playerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SnapshotListResponse"
}
```
## Operation: pushtokens.update
Registers a push token for the current user and application.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "body": {
      "$ref": "#/definitions/PushToken"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: pushtokens.remove
Removes a push token for the current user and application. Removing a non-existent push token will report success.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "body": {
      "$ref": "#/definitions/PushTokenId"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: quests.accept
Indicates that the currently authorized user will participate in the quest.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "questId": {
      "type": "string",
      "description": "The ID of the quest."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "questId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Quest"
}
```
## Operation: questMilestones.claim
Report that a reward for the milestone corresponding to milestoneId for the quest corresponding to questId has been claimed by the currently authorized user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "questId": {
      "type": "string",
      "description": "The ID of the quest."
    },
    "milestoneId": {
      "type": "string",
      "description": "The ID of the milestone."
    },
    "requestId": {
      "type": "string",
      "description": "A numeric ID to ensure that the request is handled correctly across retries. Your client application must generate this ID randomly."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "questId",
    "milestoneId",
    "requestId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: revisions.check
Checks whether the games client is out of date.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "clientRevision": {
      "type": "string",
      "description": "The revision of the client SDK used by your application. Format:\n[PLATFORM_TYPE]:[VERSION_NUMBER]. Possible values of PLATFORM_TYPE are:\n \n- \"ANDROID\" - Client is running the Android SDK. \n- \"IOS\" - Client is running the iOS SDK. \n- \"WEB_APP\" - Client is running as a Web App."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "clientRevision"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RevisionCheckResponse"
}
```
## Operation: rooms.list
Returns invitations to join rooms.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of rooms to return in the response, used for paging. For any response, the actual number of rooms to return may be less than the specified maxResults.",
      "maximum": 500,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RoomList"
}
```
## Operation: rooms.create
Create a room. For internal use by the Games SDK only. Calling this method directly is unsupported.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "body": {
      "$ref": "#/definitions/RoomCreateRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Room"
}
```
## Operation: rooms.get
Get the data for a room.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "roomId": {
      "type": "string",
      "description": "The ID of the room."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "roomId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Room"
}
```
## Operation: rooms.decline
Decline an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "roomId": {
      "type": "string",
      "description": "The ID of the room."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "roomId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Room"
}
```
## Operation: rooms.dismiss
Dismiss an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "roomId": {
      "type": "string",
      "description": "The ID of the room."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "roomId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: rooms.join
Join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "roomId": {
      "type": "string",
      "description": "The ID of the room."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "body": {
      "$ref": "#/definitions/RoomJoinRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "roomId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Room"
}
```
## Operation: rooms.leave
Leave a room. For internal use by the Games SDK only. Calling this method directly is unsupported.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "roomId": {
      "type": "string",
      "description": "The ID of the room."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "body": {
      "$ref": "#/definitions/RoomLeaveRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "roomId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Room"
}
```
## Operation: rooms.reportStatus
Updates sent by a client reporting the status of peers in a room. For internal use by the Games SDK only. Calling this method directly is unsupported.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "roomId": {
      "type": "string",
      "description": "The ID of the room."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "body": {
      "$ref": "#/definitions/RoomP2PStatuses"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "roomId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RoomStatus"
}
```
## Operation: snapshots.get
Retrieves the metadata for a given snapshot ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "snapshotId": {
      "type": "string",
      "description": "The ID of the snapshot."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "snapshotId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Snapshot"
}
```
## Operation: turnBasedMatches.list
Returns turn-based matches the player is or was involved in.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "includeMatchData": {
      "type": "boolean",
      "description": "True if match data should be returned in the response. Note that not all data will necessarily be returned if include_match_data is true; the server may decide to only return data for some of the matches to limit download size for the client. The remainder of the data for these matches will be retrievable on request."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "maxCompletedMatches": {
      "type": "integer",
      "description": "The maximum number of completed or canceled matches to return in the response. If not set, all matches returned could be completed or canceled.",
      "maximum": 500,
      "minimum": 0
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of matches to return in the response, used for paging. For any response, the actual number of matches to return may be less than the specified maxResults.",
      "maximum": 500,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TurnBasedMatchList"
}
```
## Operation: turnBasedMatches.create
Create a turn-based match.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "body": {
      "$ref": "#/definitions/TurnBasedMatchCreateRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TurnBasedMatch"
}
```
## Operation: turnBasedMatches.sync
Returns turn-based matches the player is or was involved in that changed since the last sync call, with the least recent changes coming first. Matches that should be removed from the local cache will have a status of MATCH_DELETED.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "includeMatchData": {
      "type": "boolean",
      "description": "True if match data should be returned in the response. Note that not all data will necessarily be returned if include_match_data is true; the server may decide to only return data for some of the matches to limit download size for the client. The remainder of the data for these matches will be retrievable on request."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "maxCompletedMatches": {
      "type": "integer",
      "description": "The maximum number of completed or canceled matches to return in the response. If not set, all matches returned could be completed or canceled.",
      "maximum": 500,
      "minimum": 0
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of matches to return in the response, used for paging. For any response, the actual number of matches to return may be less than the specified maxResults.",
      "maximum": 500,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TurnBasedMatchSync"
}
```
## Operation: turnBasedMatches.get
Get the data for a turn-based match.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "matchId": {
      "type": "string",
      "description": "The ID of the match."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "includeMatchData": {
      "type": "boolean",
      "description": "Get match data along with metadata."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "matchId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TurnBasedMatch"
}
```
## Operation: turnBasedMatches.cancel
Cancel a turn-based match.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "matchId": {
      "type": "string",
      "description": "The ID of the match."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "matchId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: turnBasedMatches.decline
Decline an invitation to play a turn-based match.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "matchId": {
      "type": "string",
      "description": "The ID of the match."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "matchId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TurnBasedMatch"
}
```
## Operation: turnBasedMatches.dismiss
Dismiss a turn-based match from the match list. The match will no longer show up in the list and will not generate notifications.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "matchId": {
      "type": "string",
      "description": "The ID of the match."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "matchId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: turnBasedMatches.finish
Finish a turn-based match. Each player should make this call once, after all results are in. Only the player whose turn it is may make the first call to Finish, and can pass in the final match state.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "matchId": {
      "type": "string",
      "description": "The ID of the match."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "body": {
      "$ref": "#/definitions/TurnBasedMatchResults"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "matchId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TurnBasedMatch"
}
```
## Operation: turnBasedMatches.join
Join a turn-based match.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "matchId": {
      "type": "string",
      "description": "The ID of the match."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "matchId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TurnBasedMatch"
}
```
## Operation: turnBasedMatches.leave
Leave a turn-based match when it is not the current player's turn, without canceling the match.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "matchId": {
      "type": "string",
      "description": "The ID of the match."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "matchId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TurnBasedMatch"
}
```
## Operation: turnBasedMatches.leaveTurn
Leave a turn-based match during the current player's turn, without canceling the match.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "matchId": {
      "type": "string",
      "description": "The ID of the match."
    },
    "matchVersion": {
      "type": "integer",
      "description": "The version of the match being updated."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "pendingParticipantId": {
      "type": "string",
      "description": "The ID of another participant who should take their turn next. If not set, the match will wait for other player(s) to join via automatching; this is only valid if automatch criteria is set on the match with remaining slots for automatched players."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "matchId",
    "matchVersion"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TurnBasedMatch"
}
```
## Operation: turnBasedMatches.rematch
Create a rematch of a match that was previously completed, with the same participants. This can be called by only one player on a match still in their list; the player must have called Finish first. Returns the newly created match; it will be the caller's turn.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "matchId": {
      "type": "string",
      "description": "The ID of the match."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "requestId": {
      "type": "string",
      "description": "A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "matchId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TurnBasedMatchRematch"
}
```
## Operation: turnBasedMatches.takeTurn
Commit the results of a player turn.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "matchId": {
      "type": "string",
      "description": "The ID of the match."
    },
    "consistencyToken": {
      "type": "string",
      "description": "The last-seen mutation timestamp."
    },
    "language": {
      "type": "string",
      "description": "The preferred language to use for strings returned by this method."
    },
    "body": {
      "$ref": "#/definitions/TurnBasedMatchTurn"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "matchId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TurnBasedMatch"
}
```
