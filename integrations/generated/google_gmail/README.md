# @datafire/google_gmail
Access Gmail mailboxes including sending user email.

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
## Operation: users.drafts.list
Lists the drafts in the user's mailbox.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "includeSpamTrash": {
      "type": "boolean",
      "description": "Include drafts from SPAM and TRASH in the results."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of drafts to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Page token to retrieve a specific page of results in the list."
    },
    "q": {
      "type": "string",
      "description": "Only return draft messages matching the specified query. Supports the same query format as the Gmail search box. For example, \"from:someuser@example.com rfc822msgid: is:unread\"."
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListDraftsResponse"
}
```
## Operation: users.drafts.create
Creates a new draft with the DRAFT label.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "body": {
      "$ref": "#/definitions/Draft"
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Draft"
}
```
## Operation: users.drafts.send
Sends the specified, existing draft to the recipients in the To, Cc, and Bcc headers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "body": {
      "$ref": "#/definitions/Draft"
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Message"
}
```
## Operation: users.drafts.delete
Immediately and permanently deletes the specified draft. Does not simply trash it.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "id": {
      "type": "string",
      "description": "The ID of the draft to delete."
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
    "userId",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.drafts.get
Gets the specified draft.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "id": {
      "type": "string",
      "description": "The ID of the draft to retrieve."
    },
    "format": {
      "type": "string",
      "description": "The format to return the draft in.",
      "enum": [
        "full",
        "metadata",
        "minimal",
        "raw"
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
    "userId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Draft"
}
```
## Operation: users.drafts.update
Replaces a draft's content.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "id": {
      "type": "string",
      "description": "The ID of the draft to update."
    },
    "body": {
      "$ref": "#/definitions/Draft"
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
    "userId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Draft"
}
```
## Operation: users.history.list
Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing historyId).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "historyTypes": {
      "type": "array",
      "description": "History types to be returned by the function"
    },
    "labelId": {
      "type": "string",
      "description": "Only return messages with a label matching the ID."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of history records to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Page token to retrieve a specific page of results in the list."
    },
    "startHistoryId": {
      "type": "string",
      "description": "Required. Returns history records after the specified startHistoryId. The supplied startHistoryId should be obtained from the historyId of a message, thread, or previous list response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date startHistoryId typically returns an HTTP 404 error code. A historyId is typically valid for at least a week, but in some rare circumstances may be valid for only a few hours. If you receive an HTTP 404 error response, your application should perform a full sync. If you receive no nextPageToken in the response, there are no updates to retrieve and you can store the returned historyId for a future request."
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListHistoryResponse"
}
```
## Operation: users.labels.list
Lists all labels in the user's mailbox.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListLabelsResponse"
}
```
## Operation: users.labels.create
Creates a new label.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "body": {
      "$ref": "#/definitions/Label"
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Label"
}
```
## Operation: users.labels.delete
Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "id": {
      "type": "string",
      "description": "The ID of the label to delete."
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
    "userId",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.labels.get
Gets the specified label.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "id": {
      "type": "string",
      "description": "The ID of the label to retrieve."
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
    "userId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Label"
}
```
## Operation: users.labels.patch
Updates the specified label. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "id": {
      "type": "string",
      "description": "The ID of the label to update."
    },
    "body": {
      "$ref": "#/definitions/Label"
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
    "userId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Label"
}
```
## Operation: users.labels.update
Updates the specified label.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "id": {
      "type": "string",
      "description": "The ID of the label to update."
    },
    "body": {
      "$ref": "#/definitions/Label"
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
    "userId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Label"
}
```
## Operation: users.messages.list
Lists the messages in the user's mailbox.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "includeSpamTrash": {
      "type": "boolean",
      "description": "Include messages from SPAM and TRASH in the results."
    },
    "labelIds": {
      "type": "array",
      "description": "Only return messages with labels that match all of the specified label IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of messages to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Page token to retrieve a specific page of results in the list."
    },
    "q": {
      "type": "string",
      "description": "Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, \"from:someuser@example.com rfc822msgid: is:unread\". Parameter cannot be used when accessing the api using the gmail.metadata scope."
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListMessagesResponse"
}
```
## Operation: users.messages.insert
Directly inserts a message into only this user's mailbox similar to IMAP APPEND, bypassing most scanning and classification. Does not send a message.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "deleted": {
      "type": "boolean",
      "description": "Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for G Suite accounts."
    },
    "internalDateSource": {
      "type": "string",
      "description": "Source for Gmail's internal date of the message.",
      "enum": [
        "dateHeader",
        "receivedTime"
      ]
    },
    "body": {
      "$ref": "#/definitions/Message"
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Message"
}
```
## Operation: users.messages.batchDelete
Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "body": {
      "$ref": "#/definitions/BatchDeleteMessagesRequest"
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
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.messages.batchModify
Modifies the labels on the specified messages.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "body": {
      "$ref": "#/definitions/BatchModifyMessagesRequest"
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
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.messages.import
Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. Does not send a message.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "deleted": {
      "type": "boolean",
      "description": "Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for G Suite accounts."
    },
    "internalDateSource": {
      "type": "string",
      "description": "Source for Gmail's internal date of the message.",
      "enum": [
        "dateHeader",
        "receivedTime"
      ]
    },
    "neverMarkSpam": {
      "type": "boolean",
      "description": "Ignore the Gmail spam classifier decision and never mark this email as SPAM in the mailbox."
    },
    "processForCalendar": {
      "type": "boolean",
      "description": "Process calendar invites in the email and add any extracted meetings to the Google Calendar for this user."
    },
    "body": {
      "$ref": "#/definitions/Message"
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Message"
}
```
## Operation: users.messages.send
Sends the specified message to the recipients in the To, Cc, and Bcc headers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "body": {
      "$ref": "#/definitions/Message"
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Message"
}
```
## Operation: users.messages.delete
Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer messages.trash instead.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "id": {
      "type": "string",
      "description": "The ID of the message to delete."
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
    "userId",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.messages.get
Gets the specified message.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "id": {
      "type": "string",
      "description": "The ID of the message to retrieve."
    },
    "format": {
      "type": "string",
      "description": "The format to return the message in.",
      "enum": [
        "full",
        "metadata",
        "minimal",
        "raw"
      ]
    },
    "metadataHeaders": {
      "type": "array",
      "description": "When given and format is METADATA, only include headers specified."
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
    "userId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Message"
}
```
## Operation: users.messages.modify
Modifies the labels on the specified message.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "id": {
      "type": "string",
      "description": "The ID of the message to modify."
    },
    "body": {
      "$ref": "#/definitions/ModifyMessageRequest"
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
    "userId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Message"
}
```
## Operation: users.messages.trash
Moves the specified message to the trash.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "id": {
      "type": "string",
      "description": "The ID of the message to Trash."
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
    "userId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Message"
}
```
## Operation: users.messages.untrash
Removes the specified message from the trash.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "id": {
      "type": "string",
      "description": "The ID of the message to remove from Trash."
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
    "userId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Message"
}
```
## Operation: users.messages.attachments.get
Gets the specified message attachment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "messageId": {
      "type": "string",
      "description": "The ID of the message containing the attachment."
    },
    "id": {
      "type": "string",
      "description": "The ID of the attachment."
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
    "userId",
    "messageId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MessagePartBody"
}
```
## Operation: users.getProfile
Gets the current user's Gmail profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Profile"
}
```
## Operation: users.settings.getAutoForwarding
Gets the auto-forwarding setting for the specified account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AutoForwarding"
}
```
## Operation: users.settings.updateAutoForwarding
Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled.

This method is only available to service account clients that have been delegated domain-wide authority.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
    },
    "body": {
      "$ref": "#/definitions/AutoForwarding"
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AutoForwarding"
}
```
## Operation: users.settings.filters.list
Lists the message filters of a Gmail user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListFiltersResponse"
}
```
## Operation: users.settings.filters.create
Creates a filter.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
    },
    "body": {
      "$ref": "#/definitions/Filter"
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Filter"
}
```
## Operation: users.settings.filters.delete
Deletes a filter.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
    },
    "id": {
      "type": "string",
      "description": "The ID of the filter to be deleted."
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
    "userId",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.settings.filters.get
Gets a filter.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
    },
    "id": {
      "type": "string",
      "description": "The ID of the filter to be fetched."
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
    "userId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Filter"
}
```
## Operation: users.settings.forwardingAddresses.list
Lists the forwarding addresses for the specified account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListForwardingAddressesResponse"
}
```
## Operation: users.settings.forwardingAddresses.create
Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to pending; otherwise, the resource will be created with verification status set to accepted.

This method is only available to service account clients that have been delegated domain-wide authority.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
    },
    "body": {
      "$ref": "#/definitions/ForwardingAddress"
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ForwardingAddress"
}
```
## Operation: users.settings.forwardingAddresses.delete
Deletes the specified forwarding address and revokes any verification that may have been required.

This method is only available to service account clients that have been delegated domain-wide authority.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
    },
    "forwardingEmail": {
      "type": "string",
      "description": "The forwarding address to be deleted."
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
    "userId",
    "forwardingEmail"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.settings.forwardingAddresses.get
Gets the specified forwarding address.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
    },
    "forwardingEmail": {
      "type": "string",
      "description": "The forwarding address to be retrieved."
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
    "userId",
    "forwardingEmail"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ForwardingAddress"
}
```
## Operation: users.settings.getImap
Gets IMAP settings.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ImapSettings"
}
```
## Operation: users.settings.updateImap
Updates IMAP settings.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
    },
    "body": {
      "$ref": "#/definitions/ImapSettings"
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ImapSettings"
}
```
## Operation: users.settings.getPop
Gets POP settings.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PopSettings"
}
```
## Operation: users.settings.updatePop
Updates POP settings.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
    },
    "body": {
      "$ref": "#/definitions/PopSettings"
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PopSettings"
}
```
## Operation: users.settings.sendAs.list
Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom "from" aliases.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListSendAsResponse"
}
```
## Operation: users.settings.sendAs.create
Creates a custom "from" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's verification status will be set to pending; otherwise, the resource will be created with verification status set to accepted. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.

This method is only available to service account clients that have been delegated domain-wide authority.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
    },
    "body": {
      "$ref": "#/definitions/SendAs"
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SendAs"
}
```
## Operation: users.settings.sendAs.delete
Deletes the specified send-as alias. Revokes any verification that may have been required for using it.

This method is only available to service account clients that have been delegated domain-wide authority.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
    },
    "sendAsEmail": {
      "type": "string",
      "description": "The send-as alias to be deleted."
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
    "userId",
    "sendAsEmail"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.settings.sendAs.get
Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
    },
    "sendAsEmail": {
      "type": "string",
      "description": "The send-as alias to be retrieved."
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
    "userId",
    "sendAsEmail"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SendAs"
}
```
## Operation: users.settings.sendAs.patch
Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.

Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
    },
    "sendAsEmail": {
      "type": "string",
      "description": "The send-as alias to be updated."
    },
    "body": {
      "$ref": "#/definitions/SendAs"
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
    "userId",
    "sendAsEmail"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SendAs"
}
```
## Operation: users.settings.sendAs.update
Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.

Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
    },
    "sendAsEmail": {
      "type": "string",
      "description": "The send-as alias to be updated."
    },
    "body": {
      "$ref": "#/definitions/SendAs"
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
    "userId",
    "sendAsEmail"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SendAs"
}
```
## Operation: users.settings.sendAs.smimeInfo.list
Lists S/MIME configs for the specified send-as alias.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "sendAsEmail": {
      "type": "string",
      "description": "The email address that appears in the \"From:\" header for mail sent using this alias."
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
    "userId",
    "sendAsEmail"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListSmimeInfoResponse"
}
```
## Operation: users.settings.sendAs.smimeInfo.insert
Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "sendAsEmail": {
      "type": "string",
      "description": "The email address that appears in the \"From:\" header for mail sent using this alias."
    },
    "body": {
      "$ref": "#/definitions/SmimeInfo"
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
    "userId",
    "sendAsEmail"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SmimeInfo"
}
```
## Operation: users.settings.sendAs.smimeInfo.delete
Deletes the specified S/MIME config for the specified send-as alias.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "sendAsEmail": {
      "type": "string",
      "description": "The email address that appears in the \"From:\" header for mail sent using this alias."
    },
    "id": {
      "type": "string",
      "description": "The immutable ID for the SmimeInfo."
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
    "userId",
    "sendAsEmail",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.settings.sendAs.smimeInfo.get
Gets the specified S/MIME config for the specified send-as alias.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "sendAsEmail": {
      "type": "string",
      "description": "The email address that appears in the \"From:\" header for mail sent using this alias."
    },
    "id": {
      "type": "string",
      "description": "The immutable ID for the SmimeInfo."
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
    "userId",
    "sendAsEmail",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SmimeInfo"
}
```
## Operation: users.settings.sendAs.smimeInfo.setDefault
Sets the default S/MIME config for the specified send-as alias.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "sendAsEmail": {
      "type": "string",
      "description": "The email address that appears in the \"From:\" header for mail sent using this alias."
    },
    "id": {
      "type": "string",
      "description": "The immutable ID for the SmimeInfo."
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
    "userId",
    "sendAsEmail",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.settings.sendAs.verify
Sends a verification email to the specified send-as alias address. The verification status must be pending.

This method is only available to service account clients that have been delegated domain-wide authority.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
    },
    "sendAsEmail": {
      "type": "string",
      "description": "The send-as alias to be verified."
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
    "userId",
    "sendAsEmail"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.settings.getVacation
Gets vacation responder settings.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VacationSettings"
}
```
## Operation: users.settings.updateVacation
Updates vacation responder settings.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "User's email address. The special value \"me\" can be used to indicate the authenticated user."
    },
    "body": {
      "$ref": "#/definitions/VacationSettings"
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VacationSettings"
}
```
## Operation: users.stop
Stop receiving push notifications for the given user mailbox.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
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
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.threads.list
Lists the threads in the user's mailbox.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "includeSpamTrash": {
      "type": "boolean",
      "description": "Include threads from SPAM and TRASH in the results."
    },
    "labelIds": {
      "type": "array",
      "description": "Only return threads with labels that match all of the specified label IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of threads to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Page token to retrieve a specific page of results in the list."
    },
    "q": {
      "type": "string",
      "description": "Only return threads matching the specified query. Supports the same query format as the Gmail search box. For example, \"from:someuser@example.com rfc822msgid: is:unread\". Parameter cannot be used when accessing the api using the gmail.metadata scope."
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListThreadsResponse"
}
```
## Operation: users.threads.delete
Immediately and permanently deletes the specified thread. This operation cannot be undone. Prefer threads.trash instead.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "id": {
      "type": "string",
      "description": "ID of the Thread to delete."
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
    "userId",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.threads.get
Gets the specified thread.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "id": {
      "type": "string",
      "description": "The ID of the thread to retrieve."
    },
    "format": {
      "type": "string",
      "description": "The format to return the messages in.",
      "enum": [
        "full",
        "metadata",
        "minimal"
      ]
    },
    "metadataHeaders": {
      "type": "array",
      "description": "When given and format is METADATA, only include headers specified."
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
    "userId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Thread"
}
```
## Operation: users.threads.modify
Modifies the labels applied to the thread. This applies to all messages in the thread.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "id": {
      "type": "string",
      "description": "The ID of the thread to modify."
    },
    "body": {
      "$ref": "#/definitions/ModifyThreadRequest"
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
    "userId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Thread"
}
```
## Operation: users.threads.trash
Moves the specified thread to the trash.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "id": {
      "type": "string",
      "description": "The ID of the thread to Trash."
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
    "userId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Thread"
}
```
## Operation: users.threads.untrash
Removes the specified thread from the trash.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "id": {
      "type": "string",
      "description": "The ID of the thread to remove from Trash."
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
    "userId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Thread"
}
```
## Operation: users.watch
Set up or update a push notification watch on the given user mailbox.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The user's email address. The special value me can be used to indicate the authenticated user."
    },
    "body": {
      "$ref": "#/definitions/WatchRequest"
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WatchResponse"
}
```
## Operation: buildMessage


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "to": {
      "type": "string"
    },
    "from": {
      "type": "string"
    },
    "subject": {
      "type": "string",
      "default": ""
    },
    "body": {
      "type": "string",
      "default": ""
    }
  }
}
```
### Output Schema
```json
{}
```
