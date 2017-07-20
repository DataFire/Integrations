# @datafire/swaggerhub
# Introduction
This is the registry API for SwaggerHub. It allows you to access, manage, and update your APIs and Domains in SwaggerHub bypassing the Web application.

# Authentication
Use your personal API Key: you may find it by visiting the   [API Key page](https://app.swaggerhub.com/settings/apiKey).


## Operation: searchApis
Retrieves a list of currently defined APIs in APIs.json format

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "query": {
      "type": "string",
      "description": "free text query to match"
    },
    "state": {
      "type": "string",
      "description": "matches against published state",
      "enum": [
        "ALL",
        "PUBLISHED"
      ]
    },
    "tag": {
      "type": "array",
      "description": "matches against tags associated with an API"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "page to return"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "number of results per page"
    },
    "sort": {
      "type": "string",
      "description": "sort criteria",
      "enum": [
        "NAME",
        "UPDATED"
      ]
    },
    "order": {
      "type": "string",
      "description": "sort order",
      "enum": [
        "ASC",
        "DESC"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApisJson"
}
```
## Operation: getApiTemplates
Retrieves list of apis templates

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TemplateCatalog"
}
```
## Operation: getOwnerApis
Retrieves an APIs.json listing of all APIs defined for this owner

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "page to return"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "number of results per page"
    },
    "sort": {
      "type": "string",
      "description": "sort criteria",
      "enum": [
        "NAME",
        "UPDATED"
      ]
    },
    "order": {
      "type": "string",
      "description": "sort order",
      "enum": [
        "ASC",
        "DESC"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "owner"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApisJson"
}
```
## Operation: updateOwner
Updates owner

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "newNameToken": {
      "type": "string",
      "description": "Token for updating owner name"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "newNameToken"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteApi
Deletes the specified API

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getApiVersions
Retrieves an APIs.json listing for all API versions for this owner and API

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApisJson"
}
```
## Operation: saveDefinition
Saves the provided Swagger definition; the owner must match the token owner. The version will be extracted from the Swagger definitions itself.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "isPrivate": {
      "type": "boolean",
      "description": "Defines whether the API has to be private"
    },
    "version": {
      "type": "string",
      "description": "api version"
    },
    "definition": {
      "type": "string"
    },
    "force": {
      "type": "boolean",
      "description": "force update"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "definition"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteCollaboration
Deletes API's collaboration

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCollaboration
Gets API's collaboration

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "expandTeams": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Collaboration"
}
```
## Operation: updateCollaboration
Updates API's collaboration

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "body": {
      "$ref": "#/definitions/Collaboration"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: renameApi
Renames API

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "newName": {
      "type": "string",
      "description": "New name"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "newName"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: saveApiDefinitionByTemplate
Creates API by template

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "isPrivate": {
      "type": "boolean",
      "description": "Defines whether the API has to be private"
    },
    "template": {
      "type": "string",
      "description": "Template id"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "template"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: transferApi
transfers api to another owner

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "newOwner": {
      "type": "string",
      "description": "New owner"
    },
    "transferIntegrations": {
      "type": "boolean",
      "description": "Transfer integrations"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "newOwner"
  ]
}
```
### Output Schema
```json
{
  "properties": {},
  "type": "object"
}
```
## Operation: deleteApiVersion
Deletes a particular version of the specified API

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getDefinition
Retrieves the Swagger definition for the specified API and version

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "version"
  ]
}
```
### Output Schema
```json
{
  "properties": {},
  "type": "object"
}
```
## Operation: bumpApi
Adds API version.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "isPrivate": {
      "type": "boolean",
      "description": "Defines whether the API has to be private"
    },
    "newVersion": {
      "type": "string",
      "description": "New api version"
    },
    "force": {
      "type": "boolean",
      "description": "force update"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "version",
    "newVersion"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getApiComments
Returns the list of comments for the specified API

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "version"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ClosableComment"
  },
  "type": "array"
}
```
## Operation: addApiComment
Adds a new comment to the specified API

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "body": {
      "$ref": "#/definitions/NewComment"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "version",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ClosableComment"
}
```
## Operation: updateApiComments
Updates passed batch of comments

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "body": {
      "$ref": "#/definitions/CommentsBatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "version",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteApiComment
Deletes specified comment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "comment": {
      "type": "string",
      "description": "comment identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "version",
    "comment"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateApiComment
Updates specified comment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "comment": {
      "type": "string",
      "description": "comment identifier"
    },
    "body": {
      "$ref": "#/definitions/ClosableCommentPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "version",
    "comment"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ClosableComment"
}
```
## Operation: addApiCommentReply
Adds a new reply to the specified comment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "comment": {
      "type": "string",
      "description": "comment identifier"
    },
    "body": {
      "$ref": "#/definitions/NewReply"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "version",
    "comment",
    "body"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Comment"
  },
  "type": "array"
}
```
## Operation: deleteApiCommentReply
Deletes specified comment reply

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "comment": {
      "type": "string",
      "description": "comment identifier"
    },
    "reply": {
      "type": "string",
      "description": "reply identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "version",
    "comment",
    "reply"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateApiCommentReply
Updates specified comment reply

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "comment": {
      "type": "string",
      "description": "comment identifier"
    },
    "reply": {
      "type": "string",
      "description": "reply identifier"
    },
    "body": {
      "$ref": "#/definitions/CommentPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "version",
    "comment",
    "reply"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Comment"
}
```
## Operation: setApiCommentStatus
Updates status to the specified comment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "comment": {
      "type": "string",
      "description": "comment identifier"
    },
    "status": {
      "type": "string",
      "description": "comment status",
      "enum": [
        "OPEN",
        "RESOLVED"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "version",
    "comment",
    "status"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteDraftApi
Deletes a particular version of the specified API

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getDraft
Retrieves the draft for the specified API and version

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "version"
  ]
}
```
### Output Schema
```json
{
  "properties": {},
  "type": "object"
}
```
## Operation: saveDraft
Saves the provided draft for a swagger definition.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "definition": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "version",
    "definition"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: forkApi
Forks the provided Swagger definition.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "isPrivate": {
      "type": "boolean",
      "description": "Defines whether the API has to be private"
    },
    "newSpec": {
      "$ref": "#/definitions/SpecId"
    },
    "force": {
      "type": "boolean",
      "description": "force update"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "version",
    "newSpec"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: compareApis
Compares two APIs

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "method": {
      "type": "string",
      "description": "The method to use for comparing two APIs.\n* FULL - Full line-by-line text comparison of the two APIs\n* LOGICAL - Compares if the two API's are logically equivalent. Ignores non-structural fields like descriptions, examples etc. Also ignores order when not important.\n* STRUCTURAL - Like LOGICAL but also compares non-structural fields\n",
      "enum": [
        "FULL",
        "LOGICAL",
        "STRUCTURAL"
      ]
    },
    "otherApiPath": {
      "type": "string",
      "description": "URL to external API or path to internal API"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "version",
    "method",
    "otherApiPath"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Comparison"
}
```
## Operation: compareApisFromFile
Compares two APIs

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "method": {
      "type": "string",
      "description": "The method to use for comparing two APIs.\n* FULL - Full line-by-line text comparison of the two APIs\n* LOGICAL - Compares if the two API's are logically equivalent. Ignores non-structural fields like descriptions, examples etc. Also ignores order when not important.\n* STRUCTURAL - Like LOGICAL but also compares non-structural fields\n",
      "enum": [
        "FULL",
        "LOGICAL",
        "STRUCTURAL"
      ]
    },
    "definition": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "version",
    "method",
    "definition"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Comparison"
}
```
## Operation: getJsonDefinition
Retrieves the Swagger definition for the specified API and version in JSON format

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "version"
  ]
}
```
### Output Schema
```json
{
  "properties": {},
  "type": "object"
}
```
## Operation: getYamlDefinition
Retrieves the Swagger definition for the specified API and version in YAML format

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "api": {
      "type": "string",
      "description": "API identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "api",
    "version"
  ]
}
```
### Output Schema
```json
{
  "properties": {},
  "type": "object"
}
```
## Operation: searchDomains
Retrieves a list of currently defined domains in APIs.json format

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "query": {
      "type": "string",
      "description": "free text query to match"
    },
    "state": {
      "type": "string",
      "description": "matches against published state",
      "enum": [
        "ALL",
        "PUBLISHED"
      ]
    },
    "tag": {
      "type": "array",
      "description": "matches against tags associated with a domain"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "page to return"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "number of results per page"
    },
    "sort": {
      "type": "string",
      "description": "sort criteria",
      "enum": [
        "NAME",
        "UPDATED"
      ]
    },
    "order": {
      "type": "string",
      "description": "sort order",
      "enum": [
        "ASC",
        "DESC"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApisJson"
}
```
## Operation: getDomainTemplates
Retrieves list of domains templates

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TemplateCatalog"
}
```
## Operation: getOwnerDomains
Retrieves an APIs.json listing of all domains defined for this owner

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "page to return"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "number of results per page"
    },
    "sort": {
      "type": "string",
      "description": "sort criteria",
      "enum": [
        "NAME",
        "UPDATED"
      ]
    },
    "order": {
      "type": "string",
      "description": "sort order",
      "enum": [
        "ASC",
        "DESC"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "owner"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApisJson"
}
```
## Operation: getOwnerReferences
Retrieves an APIs.json listing of entries referensing owner domains

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApisJson"
}
```
## Operation: deleteDomain
Deletes the specified domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "force": {
      "type": "boolean",
      "description": "force update"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getDomainVersions
Retrieves an APIs.json listing for all domain versions for this owner and domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApisJson"
}
```
## Operation: saveDomainDefinition
Saves the provided Swagger definition of a domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "isPrivate": {
      "type": "boolean",
      "description": "Defines whether the API has to be private"
    },
    "version": {
      "type": "string",
      "description": "domain version"
    },
    "definition": {
      "type": "string"
    },
    "force": {
      "type": "boolean",
      "description": "force update"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: renameDomain
Renames domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "newName": {
      "type": "string",
      "description": "New name"
    },
    "force": {
      "type": "boolean",
      "description": "force update"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "newName"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: transferDomain
transfers domain to another owner

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "newOwner": {
      "type": "string",
      "description": "New owner"
    },
    "force": {
      "type": "boolean",
      "description": "force update"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "newOwner"
  ]
}
```
### Output Schema
```json
{
  "properties": {},
  "type": "object"
}
```
## Operation: deleteDomainVersion
Deletes a particular version of the specified domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "force": {
      "type": "boolean",
      "description": "force update"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getDomainDefinition
Retrieves the Swagger definition for the specified domain and version

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "version"
  ]
}
```
### Output Schema
```json
{
  "properties": {},
  "type": "object"
}
```
## Operation: bumpDomain
Adds domain version.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "isPrivate": {
      "type": "boolean",
      "description": "Defines whether the API has to be private"
    },
    "newVersion": {
      "type": "string",
      "description": "New domain version"
    },
    "force": {
      "type": "boolean",
      "description": "force update"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "version",
    "newVersion"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getDomainComments
Returns the list of comments for the specified domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "version"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ClosableComment"
  },
  "type": "array"
}
```
## Operation: addDomainComment
Adds a new comment to the specified domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "body": {
      "$ref": "#/definitions/NewComment"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "version",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ClosableComment"
}
```
## Operation: updateDomainComments
Updates passed batch of comments

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "body": {
      "$ref": "#/definitions/CommentsBatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "version",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteDomainComment
Deletes specified comment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "comment": {
      "type": "string",
      "description": "comment identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "version",
    "comment"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateDomainComment
Updates specified comment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "comment": {
      "type": "string",
      "description": "comment identifier"
    },
    "body": {
      "$ref": "#/definitions/ClosableCommentPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "version",
    "comment"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ClosableComment"
}
```
## Operation: addDomainCommentReply
Adds a new reply to the specified comment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "comment": {
      "type": "string",
      "description": "comment identifier"
    },
    "body": {
      "$ref": "#/definitions/NewReply"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "version",
    "comment",
    "body"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Comment"
  },
  "type": "array"
}
```
## Operation: deleteDomainCommentReply
Deletes specified comment reply

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "comment": {
      "type": "string",
      "description": "comment identifier"
    },
    "reply": {
      "type": "string",
      "description": "reply identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "version",
    "comment",
    "reply"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateDomainCommentReply
Updates specified comment reply

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "comment": {
      "type": "string",
      "description": "comment identifier"
    },
    "reply": {
      "type": "string",
      "description": "reply identifier"
    },
    "body": {
      "$ref": "#/definitions/CommentPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "version",
    "comment",
    "reply"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Comment"
}
```
## Operation: setDomainCommentStatus
Updates status to the specified comment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "comment": {
      "type": "string",
      "description": "comment identifier"
    },
    "status": {
      "type": "string",
      "description": "comment status",
      "enum": [
        "OPEN",
        "RESOLVED"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "version",
    "comment",
    "status"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteDraftDomain
Deletes a particular version of the specified Domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getDraftDomain
Retrieves the draft for the specified domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "version"
  ]
}
```
### Output Schema
```json
{
  "properties": {},
  "type": "object"
}
```
## Operation: saveDraftDomain
Saves the provided draft for a domain definition.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "definition": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: forkDomain
Forks the provided domain definition.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "isPrivate": {
      "type": "boolean",
      "description": "Defines whether the API has to be private"
    },
    "newSpec": {
      "$ref": "#/definitions/SpecId"
    },
    "force": {
      "type": "boolean",
      "description": "force update"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "version",
    "newSpec"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: saveDomainDefinitionByTemplate
Creates Domain by template

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    },
    "isPrivate": {
      "type": "boolean",
      "description": "Defines whether the API has to be private"
    },
    "template": {
      "type": "string",
      "description": "Template id"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "version",
    "template"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getDomainJsonDefinition
Retrieves the definition for the specified domain and version in JSON format

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "version"
  ]
}
```
### Output Schema
```json
{
  "properties": {},
  "type": "object"
}
```
## Operation: getDomainYamlDefinition
Retrieves the definition for the specified domain and version in YAML format

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "API owner identifier"
    },
    "domain": {
      "type": "string",
      "description": "domain identifier"
    },
    "version": {
      "type": "string",
      "description": "version identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "domain",
    "version"
  ]
}
```
### Output Schema
```json
{
  "properties": {},
  "type": "object"
}
```
## Operation: getAvailablePlugins
Retrieves a list of all available plugins (ignore system plugins)

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/PluginDefinition"
  },
  "type": "array"
}
```
## Operation: removePluginConfiguration
Deletes the provided Plugin configuration

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pluginConfiguration": {
      "$ref": "#/definitions/PluginConfiguration"
    }
  },
  "additionalProperties": false,
  "required": [
    "pluginConfiguration"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getPlugins
Retrieves a list of enabled plugin configurations

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "objectId": {
      "type": "string",
      "description": "plugin configuration objectId"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "page to return"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "number of results per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "objectId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/PluginConfiguration"
  },
  "type": "array"
}
```
## Operation: addPluginConfiguration
Saves the provided Plugin configuration

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pluginConfiguration": {
      "$ref": "#/definitions/PluginConfiguration"
    },
    "trigger": {
      "type": "boolean",
      "description": "if true, also execute plugin"
    }
  },
  "additionalProperties": false,
  "required": [
    "pluginConfiguration"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updatePluginConfiguration
Updated the provided Plugin configuration

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pluginConfiguration": {
      "$ref": "#/definitions/PluginConfiguration"
    },
    "trigger": {
      "type": "boolean",
      "description": "if true, also execute plugin"
    }
  },
  "additionalProperties": false,
  "required": [
    "pluginConfiguration"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: triggerPluginConfiguration
triggers execution of plugin configuration identified by id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "plugin configuration id"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: buildConfigurationSchema
Get configuration schema for the provided Plugin configuration

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pluginConfiguration": {
      "$ref": "#/definitions/PluginConfiguration"
    }
  },
  "additionalProperties": false,
  "required": [
    "pluginConfiguration"
  ]
}
```
### Output Schema
```json
{
  "properties": {},
  "type": "object"
}
```
## Operation: getApiTokenByCredentials
Retrieves an API token valid for the user identified by user object in body

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "$ref": "#/definitions/UserCredentials"
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccessToken"
}
```
