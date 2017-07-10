# @datafire/google_firebaserules
Creates and manages rules that determine when a Firebase Rules-enabled service should permit a request.


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
## Operation: projects.releases.delete
Delete a `Release` by resource name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Resource name for the `Release` to delete.\n\nFormat: `projects/{project_id}/releases/{release_id}`"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
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
  "$ref": "#/definitions/Empty"
}
```
## Operation: projects.releases.get
Get a `Release` by name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Resource name of the `Release`.\n\nFormat: `projects/{project_id}/releases/{release_id}`"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
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
  "$ref": "#/definitions/Release"
}
```
## Operation: projects.releases.update
Update a `Release`.

Only updates to the `ruleset_name` and `test_suite_name` fields will be
honored. `Release` rename is not supported. To create a `Release` use the
CreateRelease method.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Resource name for the `Release`.\n\n`Release` names may be structured `app1/prod/v2` or flat `app1_prod_v2`\nwhich affords developers a great deal of flexibility in mapping the name\nto the style that best fits their existing development practices. For\nexample, a name could refer to an environment, an app, a version, or some\ncombination of three.\n\nIn the table below, for the project name `projects/foo`, the following\nrelative release paths show how flat and structured names might be chosen\nto match a desired development / deployment strategy.\n\nUse Case     | Flat Name           | Structured Name\n-------------|---------------------|----------------\nEnvironments | releases/qa         | releases/qa\nApps         | releases/app1_qa    | releases/app1/qa\nVersions     | releases/app1_v2_qa | releases/app1/v2/qa\n\nThe delimiter between the release name path elements can be almost anything\nand it should work equally well with the release name list filter, but in\nmany ways the structured paths provide a clearer picture of the\nrelationship between `Release` instances.\n\nFormat: `projects/{project_id}/releases/{release_id}`"
    },
    "body": {
      "$ref": "#/definitions/Release"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
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
  "$ref": "#/definitions/Release"
}
```
## Operation: projects.releases.list
List the `Release` values for a project. This list may optionally be
filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any
combination thereof.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "filter": {
      "type": "string",
      "description": "`Release` filter. The list method supports filters with restrictions on the\n`Release.name`, `Release.ruleset_name`, and `Release.test_suite_name`.\n\nExample 1: A filter of 'name=prod*' might return `Release`s with names\nwithin 'projects/foo' prefixed with 'prod':\n\nName                          | Ruleset Name\n------------------------------|-------------\nprojects/foo/releases/prod    | projects/foo/rulesets/uuid1234\nprojects/foo/releases/prod/v1 | projects/foo/rulesets/uuid1234\nprojects/foo/releases/prod/v2 | projects/foo/rulesets/uuid8888\n\nExample 2: A filter of `name=prod* ruleset_name=uuid1234` would return only\n`Release` instances for 'projects/foo' with names prefixed with 'prod'\nreferring to the same `Ruleset` name of 'uuid1234':\n\nName                          | Ruleset Name\n------------------------------|-------------\nprojects/foo/releases/prod    | projects/foo/rulesets/1234\nprojects/foo/releases/prod/v1 | projects/foo/rulesets/1234\n\nIn the examples, the filter parameters refer to the search filters are\nrelative to the project. Fully qualified prefixed may also be used. e.g.\n`test_suite_name=projects/foo/testsuites/uuid1`"
    },
    "name": {
      "type": "string",
      "description": "Resource name for the project.\n\nFormat: `projects/{project_id}`"
    },
    "pageSize": {
      "type": "integer",
      "description": "Page size to load. Maximum of 100. Defaults to 10.\nNote: `page_size` is just a hint and the service may choose to load fewer\nthan `page_size` results due to the size of the output. To traverse all of\nthe releases, the caller should iterate until the `page_token` on the\nresponse is empty."
    },
    "pageToken": {
      "type": "string",
      "description": "Next page token for the next batch of `Release` instances."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
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
  "$ref": "#/definitions/ListReleasesResponse"
}
```
## Operation: projects.releases.create
Create a `Release`.

Release names should reflect the developer's deployment practices. For
example, the release name may include the environment name, application
name, application version, or any other name meaningful to the developer.
Once a `Release` refers to a `Ruleset`, the rules can be enforced by
Firebase Rules-enabled services.

More than one `Release` may be 'live' concurrently. Consider the following
three `Release` names for `projects/foo` and the `Ruleset` to which they
refer.

Release Name                    | Ruleset Name
--------------------------------|-------------
projects/foo/releases/prod      | projects/foo/rulesets/uuid123
projects/foo/releases/prod/beta | projects/foo/rulesets/uuid123
projects/foo/releases/prod/v23  | projects/foo/rulesets/uuid456

The table reflects the `Ruleset` rollout in progress. The `prod` and
`prod/beta` releases refer to the same `Ruleset`. However, `prod/v23`
refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be
updated using the UpdateRelease method.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Resource name for the project which owns this `Release`.\n\nFormat: `projects/{project_id}`"
    },
    "body": {
      "$ref": "#/definitions/Release"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
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
  "$ref": "#/definitions/Release"
}
```
## Operation: projects.rulesets.list
List `Ruleset` metadata only and optionally filter the results by `Ruleset`
name.

The full `Source` contents of a `Ruleset` may be retrieved with
GetRuleset.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "filter": {
      "type": "string",
      "description": "`Ruleset` filter. The list method supports filters with restrictions on\n`Ruleset.name`.\n\nFilters on `Ruleset.create_time` should use the `date` function which\nparses strings that conform to the RFC 3339 date/time specifications.\n\nExample: `create_time > date(\"2017-01-01\") AND name=UUID-*`"
    },
    "name": {
      "type": "string",
      "description": "Resource name for the project.\n\nFormat: `projects/{project_id}`"
    },
    "pageSize": {
      "type": "integer",
      "description": "Page size to load. Maximum of 100. Defaults to 10.\nNote: `page_size` is just a hint and the service may choose to load less\nthan `page_size` due to the size of the output. To traverse all of the\nreleases, caller should iterate until the `page_token` is empty."
    },
    "pageToken": {
      "type": "string",
      "description": "Next page token for loading the next batch of `Ruleset` instances."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
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
  "$ref": "#/definitions/ListRulesetsResponse"
}
```
## Operation: projects.rulesets.create
Create a `Ruleset` from `Source`.

The `Ruleset` is given a unique generated name which is returned to the
caller. `Source` containing syntactic or semantics errors will result in an
error response indicating the first error encountered. For a detailed view
of `Source` issues, use TestRuleset.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Resource name for Project which owns this `Ruleset`.\n\nFormat: `projects/{project_id}`"
    },
    "body": {
      "$ref": "#/definitions/Ruleset"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
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
  "$ref": "#/definitions/Ruleset"
}
```
## Operation: projects.test
Test `Source` for syntactic and semantic correctness. Issues present, if
any, will be returned to the caller with a description, severity, and
source location.

The test method may be executed with `Source` or a `Ruleset` name.
Passing `Source` is useful for unit testing new rules. Passing a `Ruleset`
name is useful for regression testing an existing rule.

The following is an example of `Source` that permits users to upload images
to a bucket bearing their user id and matching the correct metadata:

_*Example*_

    // Users are allowed to subscribe and unsubscribe to the blog.
    service firebase.storage {
      match /users/{userId}/images/{imageName} {
          allow write: if userId == request.auth.uid
              && (imageName.matches('*.png$')
              || imageName.matches('*.jpg$'))
              && resource.mimeType.matches('^image/')
      }
    }

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/TestRulesetRequest"
    },
    "name": {
      "type": "string",
      "description": "Tests may either provide `source` or a `Ruleset` resource name.\n\nFor tests against `source`, the resource name must refer to the project:\nFormat: `projects/{project_id}`\n\nFor tests against a `Ruleset`, this must be the `Ruleset` resource name:\nFormat: `projects/{project_id}/rulesets/{ruleset_id}`"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
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
  "$ref": "#/definitions/TestRulesetResponse"
}
```
