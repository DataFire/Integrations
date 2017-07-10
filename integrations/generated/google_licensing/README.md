# @datafire/google_licensing
Views and manages licenses for your domain.

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
## Operation: licenseAssignments.insert
Assign License.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "productId": {
      "type": "string",
      "description": "Name for product"
    },
    "skuId": {
      "type": "string",
      "description": "Name for sku"
    },
    "body": {
      "$ref": "#/definitions/LicenseAssignmentInsert"
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
    "productId",
    "skuId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LicenseAssignment"
}
```
## Operation: licenseAssignments.delete
Revoke License.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "productId": {
      "type": "string",
      "description": "Name for product"
    },
    "skuId": {
      "type": "string",
      "description": "Name for sku"
    },
    "userId": {
      "type": "string",
      "description": "email id or unique Id of the user"
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
    "productId",
    "skuId",
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: licenseAssignments.get
Get license assignment of a particular product and sku for a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "productId": {
      "type": "string",
      "description": "Name for product"
    },
    "skuId": {
      "type": "string",
      "description": "Name for sku"
    },
    "userId": {
      "type": "string",
      "description": "email id or unique Id of the user"
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
    "productId",
    "skuId",
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LicenseAssignment"
}
```
## Operation: licenseAssignments.patch
Assign License. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "productId": {
      "type": "string",
      "description": "Name for product"
    },
    "skuId": {
      "type": "string",
      "description": "Name for sku for which license would be revoked"
    },
    "userId": {
      "type": "string",
      "description": "email id or unique Id of the user"
    },
    "body": {
      "$ref": "#/definitions/LicenseAssignment"
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
    "productId",
    "skuId",
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LicenseAssignment"
}
```
## Operation: licenseAssignments.update
Assign License.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "productId": {
      "type": "string",
      "description": "Name for product"
    },
    "skuId": {
      "type": "string",
      "description": "Name for sku for which license would be revoked"
    },
    "userId": {
      "type": "string",
      "description": "email id or unique Id of the user"
    },
    "body": {
      "$ref": "#/definitions/LicenseAssignment"
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
    "productId",
    "skuId",
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LicenseAssignment"
}
```
## Operation: licenseAssignments.listForProductAndSku
List license assignments for given product and sku of the customer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "productId": {
      "type": "string",
      "description": "Name for product"
    },
    "skuId": {
      "type": "string",
      "description": "Name for sku"
    },
    "customerId": {
      "type": "string",
      "description": "CustomerId represents the customer for whom licenseassignments are queried"
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100.",
      "maximum": 1000,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "Token to fetch the next page.Optional. By default server will return first page"
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
    "productId",
    "skuId",
    "customerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LicenseAssignmentList"
}
```
## Operation: licenseAssignments.listForProduct
List license assignments for given product of the customer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "productId": {
      "type": "string",
      "description": "Name for product"
    },
    "customerId": {
      "type": "string",
      "description": "CustomerId represents the customer for whom licenseassignments are queried"
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100.",
      "maximum": 1000,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "Token to fetch the next page.Optional. By default server will return first page"
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
    "productId",
    "customerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LicenseAssignmentList"
}
```
