# @datafire/google_appsactivity
Provides a historical view of activity.

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
## Operation: activities.list
Returns a list of activities visible to the current logged in user. Visible activities are determined by the visiblity settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "drive.ancestorId": {
      "type": "string",
      "description": "Identifies the Drive folder containing the items for which to return activities."
    },
    "drive.fileId": {
      "type": "string",
      "description": "Identifies the Drive item to return activities for."
    },
    "groupingStrategy": {
      "type": "string",
      "description": "Indicates the strategy to use when grouping singleEvents items in the associated combinedEvent object.",
      "enum": [
        "driveUi",
        "none"
      ]
    },
    "pageSize": {
      "type": "integer",
      "description": "The maximum number of events to return on a page. The response includes a continuation token if there are more events."
    },
    "pageToken": {
      "type": "string",
      "description": "A token to retrieve a specific page of results."
    },
    "source": {
      "type": "string",
      "description": "The Google service from which to return activities. Possible values of source are: \n- drive.google.com"
    },
    "userId": {
      "type": "string",
      "description": "Indicates the user to return activity for. Use the special value me to indicate the currently authenticated user."
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
  "$ref": "#/definitions/ListActivitiesResponse"
}
```
