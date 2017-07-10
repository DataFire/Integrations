# @datafire/google_fusiontables
API for working with Fusion Tables data.

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
## Operation: query.sqlGet
Executes a SQL statement which can be any of 
- SELECT
- SHOW
- DESCRIBE

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sql": {
      "type": "string",
      "description": "A SQL statement which can be any of \n- SELECT\n- SHOW\n- DESCRIBE"
    },
    "hdrs": {
      "type": "boolean",
      "description": "Whether column names are included (in the first row). Default is true."
    },
    "typed": {
      "type": "boolean",
      "description": "Whether typed values are returned in the (JSON) response: numbers for numeric values and parsed geometries for KML values. Default is true."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "sql"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Sqlresponse"
}
```
## Operation: query.sql
Executes a Fusion Tables SQL statement, which can be any of 
- SELECT
- INSERT
- UPDATE
- DELETE
- SHOW
- DESCRIBE
- CREATE statement.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sql": {
      "type": "string",
      "description": "A Fusion Tables SQL statement, which can be any of \n- SELECT\n- INSERT\n- UPDATE\n- DELETE\n- SHOW\n- DESCRIBE\n- CREATE"
    },
    "hdrs": {
      "type": "boolean",
      "description": "Whether column names are included in the first row. Default is true."
    },
    "typed": {
      "type": "boolean",
      "description": "Whether typed values are returned in the (JSON) response: numbers for numeric values and parsed geometries for KML values. Default is true."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "sql"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Sqlresponse"
}
```
## Operation: table.list
Retrieves a list of tables a user owns.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of tables to return. Default is 5.",
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token specifying which result page to return."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
  "$ref": "#/definitions/TableList"
}
```
## Operation: table.insert
Creates a new table.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/Table"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
  "$ref": "#/definitions/Table"
}
```
## Operation: table.importTable
Imports a new table.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name to be assigned to the new table."
    },
    "delimiter": {
      "type": "string",
      "description": "The delimiter used to separate cell values. This can only consist of a single character. Default is ,."
    },
    "encoding": {
      "type": "string",
      "description": "The encoding of the content. Default is UTF-8. Use auto-detect if you are unsure of the encoding."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Table"
}
```
## Operation: table.delete
Deletes a table.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "ID of the table to be deleted."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: table.get
Retrieves a specific table by its ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Identifier for the table being requested."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Table"
}
```
## Operation: table.patch
Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "ID of the table that is being updated."
    },
    "replaceViewDefinition": {
      "type": "boolean",
      "description": "Whether the view definition is also updated. The specified view definition replaces the existing one. Only a view can be updated with a new definition."
    },
    "body": {
      "$ref": "#/definitions/Table"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Table"
}
```
## Operation: table.update
Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "ID of the table that is being updated."
    },
    "replaceViewDefinition": {
      "type": "boolean",
      "description": "Whether the view definition is also updated. The specified view definition replaces the existing one. Only a view can be updated with a new definition."
    },
    "body": {
      "$ref": "#/definitions/Table"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Table"
}
```
## Operation: column.list
Retrieves a list of columns.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Table whose columns are being listed."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of columns to return. Default is 5.",
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token specifying which result page to return."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ColumnList"
}
```
## Operation: column.insert
Adds a new column to the table.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Table for which a new column is being added."
    },
    "body": {
      "$ref": "#/definitions/Column"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Column"
}
```
## Operation: column.delete
Deletes the specified column.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Table from which the column is being deleted."
    },
    "columnId": {
      "type": "string",
      "description": "Name or identifier for the column being deleted."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId",
    "columnId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: column.get
Retrieves a specific column by its ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Table to which the column belongs."
    },
    "columnId": {
      "type": "string",
      "description": "Name or identifier for the column that is being requested."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId",
    "columnId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Column"
}
```
## Operation: column.patch
Updates the name or type of an existing column. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Table for which the column is being updated."
    },
    "columnId": {
      "type": "string",
      "description": "Name or identifier for the column that is being updated."
    },
    "body": {
      "$ref": "#/definitions/Column"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId",
    "columnId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Column"
}
```
## Operation: column.update
Updates the name or type of an existing column.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Table for which the column is being updated."
    },
    "columnId": {
      "type": "string",
      "description": "Name or identifier for the column that is being updated."
    },
    "body": {
      "$ref": "#/definitions/Column"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId",
    "columnId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Column"
}
```
## Operation: table.copy
Copies a table.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "ID of the table that is being copied."
    },
    "copyPresentation": {
      "type": "boolean",
      "description": "Whether to also copy tabs, styles, and templates. Default is false."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Table"
}
```
## Operation: table.importRows
Imports more rows into a table.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "The table into which new rows are being imported."
    },
    "delimiter": {
      "type": "string",
      "description": "The delimiter used to separate cell values. This can only consist of a single character. Default is ,."
    },
    "encoding": {
      "type": "string",
      "description": "The encoding of the content. Default is UTF-8. Use auto-detect if you are unsure of the encoding."
    },
    "endLine": {
      "type": "integer",
      "description": "The index of the line up to which data will be imported. Default is to import the entire file. If endLine is negative, it is an offset from the end of the file; the imported content will exclude the last endLine lines."
    },
    "isStrict": {
      "type": "boolean",
      "description": "Whether the imported CSV must have the same number of values for each row. If false, rows with fewer values will be padded with empty values. Default is true."
    },
    "startLine": {
      "type": "integer",
      "description": "The index of the first line from which to start importing, inclusive. Default is 0."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Import"
}
```
## Operation: table.replaceRows
Replaces rows of an existing table. Current rows remain visible until all replacement rows are ready.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Table whose rows will be replaced."
    },
    "delimiter": {
      "type": "string",
      "description": "The delimiter used to separate cell values. This can only consist of a single character. Default is ,."
    },
    "encoding": {
      "type": "string",
      "description": "The encoding of the content. Default is UTF-8. Use 'auto-detect' if you are unsure of the encoding."
    },
    "endLine": {
      "type": "integer",
      "description": "The index of the line up to which data will be imported. Default is to import the entire file. If endLine is negative, it is an offset from the end of the file; the imported content will exclude the last endLine lines."
    },
    "isStrict": {
      "type": "boolean",
      "description": "Whether the imported CSV must have the same number of column values for each row. If true, throws an exception if the CSV does not have the same number of columns. If false, rows with fewer column values will be padded with empty values. Default is true."
    },
    "startLine": {
      "type": "integer",
      "description": "The index of the first line from which to start importing, inclusive. Default is 0."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Task"
}
```
## Operation: style.list
Retrieves a list of styles.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Table whose styles are being listed"
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of styles to return. Optional. Default is 5.",
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token specifying which result page to return. Optional."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StyleSettingList"
}
```
## Operation: style.insert
Adds a new style for the table.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Table for which a new style is being added"
    },
    "body": {
      "$ref": "#/definitions/StyleSetting"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StyleSetting"
}
```
## Operation: style.delete
Deletes a style.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Table from which the style is being deleted"
    },
    "styleId": {
      "type": "integer",
      "description": "Identifier (within a table) for the style being deleted"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId",
    "styleId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: style.get
Gets a specific style.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Table to which the requested style belongs"
    },
    "styleId": {
      "type": "integer",
      "description": "Identifier (integer) for a specific style in a table"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId",
    "styleId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StyleSetting"
}
```
## Operation: style.patch
Updates an existing style. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Table whose style is being updated."
    },
    "styleId": {
      "type": "integer",
      "description": "Identifier (within a table) for the style being updated."
    },
    "body": {
      "$ref": "#/definitions/StyleSetting"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId",
    "styleId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StyleSetting"
}
```
## Operation: style.update
Updates an existing style.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Table whose style is being updated."
    },
    "styleId": {
      "type": "integer",
      "description": "Identifier (within a table) for the style being updated."
    },
    "body": {
      "$ref": "#/definitions/StyleSetting"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId",
    "styleId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StyleSetting"
}
```
## Operation: task.list
Retrieves a list of tasks.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Table whose tasks are being listed."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of tasks to return. Default is 5.",
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token specifying which result page to return."
    },
    "startIndex": {
      "type": "integer",
      "description": "Index of the first result returned in the current page."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TaskList"
}
```
## Operation: task.delete
Deletes a specific task by its ID, unless that task has already started running.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Table from which the task is being deleted."
    },
    "taskId": {
      "type": "string",
      "description": "The identifier of the task to delete."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId",
    "taskId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: task.get
Retrieves a specific task by its ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Table to which the task belongs."
    },
    "taskId": {
      "type": "string",
      "description": "The identifier of the task to get."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId",
    "taskId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Task"
}
```
## Operation: template.list
Retrieves a list of templates.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Identifier for the table whose templates are being requested"
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of templates to return. Optional. Default is 5.",
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token specifying which results page to return. Optional."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TemplateList"
}
```
## Operation: template.insert
Creates a new template for the table.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Table for which a new template is being created"
    },
    "body": {
      "$ref": "#/definitions/Template"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Template"
}
```
## Operation: template.delete
Deletes a template

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Table from which the template is being deleted"
    },
    "templateId": {
      "type": "integer",
      "description": "Identifier for the template which is being deleted"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId",
    "templateId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: template.get
Retrieves a specific template by its id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Table to which the template belongs"
    },
    "templateId": {
      "type": "integer",
      "description": "Identifier for the template that is being requested"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId",
    "templateId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Template"
}
```
## Operation: template.patch
Updates an existing template. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Table to which the updated template belongs"
    },
    "templateId": {
      "type": "integer",
      "description": "Identifier for the template that is being updated"
    },
    "body": {
      "$ref": "#/definitions/Template"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId",
    "templateId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Template"
}
```
## Operation: template.update
Updates an existing template

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tableId": {
      "type": "string",
      "description": "Table to which the updated template belongs"
    },
    "templateId": {
      "type": "integer",
      "description": "Identifier for the template that is being updated"
    },
    "body": {
      "$ref": "#/definitions/Template"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "tableId",
    "templateId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Template"
}
```
