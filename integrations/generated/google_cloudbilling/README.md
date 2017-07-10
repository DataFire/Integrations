# @datafire/google_cloudbilling
Allows developers to manage billing for their Google Cloud Platform projects
    programmatically.

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
## Operation: billingAccounts.list
Lists the billing accounts that the current authenticated user
[owns](https://support.google.com/cloud/answer/4430947).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "pageSize": {
      "type": "integer",
      "description": "Requested page size. The maximum page size is 100; this is also the\ndefault."
    },
    "pageToken": {
      "type": "string",
      "description": "A token identifying a page of results to return. This should be a\n`next_page_token` value returned from a previous `ListBillingAccounts`\ncall. If unspecified, the first page of results is returned."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
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
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListBillingAccountsResponse"
}
```
## Operation: billingAccounts.get
Gets information about a billing account. The current authenticated user
must be an [owner of the billing
account](https://support.google.com/cloud/answer/4430947).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The resource name of the billing account to retrieve. For example,\n`billingAccounts/012345-567890-ABCDEF`."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
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
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
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
  "$ref": "#/definitions/BillingAccount"
}
```
## Operation: projects.getBillingInfo
Gets the billing information for a project. The current authenticated user
must have [permission to view the
project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo
).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The resource name of the project for which billing information is\nretrieved. For example, `projects/tokyo-rain-123`."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
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
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
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
  "$ref": "#/definitions/ProjectBillingInfo"
}
```
## Operation: projects.updateBillingInfo
Sets or updates the billing account associated with a project. You specify
the new billing account by setting the `billing_account_name` in the
`ProjectBillingInfo` resource to the resource name of a billing account.
Associating a project with an open billing account enables billing on the
project and allows charges for resource usage. If the project already had a
billing account, this method changes the billing account used for resource
usage charges.

*Note:* Incurred charges that have not yet been reported in the transaction
history of the Google Cloud Console may be billed to the new billing
account, even if the charge occurred before the new billing account was
assigned to the project.

The current authenticated user must have ownership privileges for both the
[project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo
) and the [billing
account](https://support.google.com/cloud/answer/4430947).

You can disable billing on the project by setting the
`billing_account_name` field to empty. This action disassociates the
current billing account from the project. Any billable activity of your
in-use services will stop, and your application could stop functioning as
expected. Any unbilled charges to date will be billed to the previously
associated account. The current authenticated user must be either an owner
of the project or an owner of the billing account for the project.

Note that associating a project with a *closed* billing account will have
much the same effect as disabling billing on the project: any paid
resources used by the project will be shut down. Thus, unless you wish to
disable billing, you should always call this method with the name of an
*open* billing account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The resource name of the project associated with the billing information\nthat you want to update. For example, `projects/tokyo-rain-123`."
    },
    "body": {
      "$ref": "#/definitions/ProjectBillingInfo"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
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
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
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
  "$ref": "#/definitions/ProjectBillingInfo"
}
```
## Operation: billingAccounts.projects.list
Lists the projects associated with a billing account. The current
authenticated user must be an [owner of the billing
account](https://support.google.com/cloud/answer/4430947).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The resource name of the billing account associated with the projects that\nyou want to list. For example, `billingAccounts/012345-567890-ABCDEF`."
    },
    "pageSize": {
      "type": "integer",
      "description": "Requested page size. The maximum page size is 100; this is also the\ndefault."
    },
    "pageToken": {
      "type": "string",
      "description": "A token identifying a page of results to be returned. This should be a\n`next_page_token` value returned from a previous `ListProjectBillingInfo`\ncall. If unspecified, the first page of results is returned."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
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
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
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
  "$ref": "#/definitions/ListProjectBillingInfoResponse"
}
```
