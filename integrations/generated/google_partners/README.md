# @datafire/google_partners
Searches certified companies and creates contact leads with them, and also audits the usage of clients.

## Operation: analytics.list
Lists analytics data for a user's associated company.
Should only be called within the context of an authorized logged in user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "requestMetadata.userOverrides.userId": {
      "type": "string",
      "description": "Logged-in user ID to impersonate instead of the user's ID."
    },
    "requestMetadata.partnersSessionId": {
      "type": "string",
      "description": "Google Partners session ID."
    },
    "pageToken": {
      "type": "string",
      "description": "A token identifying a page of results that the server returns.\nTypically, this is the value of `ListAnalyticsResponse.next_page_token`\nreturned from the previous call to\nListAnalytics.\nWill be a date string in `YYYY-MM-DD` format representing the end date\nof the date range of results to return.\nIf unspecified or set to \"\", default value is the current date."
    },
    "pageSize": {
      "type": "integer",
      "description": "Requested page size. Server may return fewer analytics than requested.\nIf unspecified or set to 0, default value is 30.\nSpecifies the number of days in the date range when querying analytics.\nThe `page_token` represents the end date of the date range\nand the start date is calculated using the `page_size` as the number\nof days BEFORE the end date.\nMust be a non-negative integer."
    },
    "requestMetadata.trafficSource.trafficSourceId": {
      "type": "string",
      "description": "Identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "requestMetadata.locale": {
      "type": "string",
      "description": "Locale to use for the current request."
    },
    "requestMetadata.userOverrides.ipAddress": {
      "type": "string",
      "description": "IP address to use instead of the user's geo-located IP address."
    },
    "requestMetadata.experimentIds": {
      "type": "array",
      "description": "Experiment IDs the current request belongs to."
    },
    "requestMetadata.trafficSource.trafficSubId": {
      "type": "string",
      "description": "Second level identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
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
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListAnalyticsResponse"
}
```
## Operation: clientMessages.log
Logs a generic message from the client, such as
`Failed to render component`, `Profile page is running slow`,
`More than 500 users have accessed this result.`, etc.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/LogMessageRequest"
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
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LogMessageResponse"
}
```
## Operation: companies.list
Lists companies.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "requestMetadata.partnersSessionId": {
      "type": "string",
      "description": "Google Partners session ID."
    },
    "pageToken": {
      "type": "string",
      "description": "A token identifying a page of results that the server returns.\nTypically, this is the value of `ListCompaniesResponse.next_page_token`\nreturned from the previous call to\nListCompanies."
    },
    "companyName": {
      "type": "string",
      "description": "Company name to search for."
    },
    "industries": {
      "type": "array",
      "description": "List of industries the company can help with."
    },
    "websiteUrl": {
      "type": "string",
      "description": "Website URL that will help to find a better matched company.\n."
    },
    "gpsMotivations": {
      "type": "array",
      "description": "List of reasons for using Google Partner Search to get companies."
    },
    "languageCodes": {
      "type": "array",
      "description": "List of language codes that company can support. Only primary language\nsubtags are accepted as defined by\n<a href=\"https://tools.ietf.org/html/bcp47\">BCP 47</a>\n(IETF BCP 47, \"Tags for Identifying Languages\")."
    },
    "pageSize": {
      "type": "integer",
      "description": "Requested page size. Server may return fewer companies than requested.\nIf unspecified, server picks an appropriate default."
    },
    "requestMetadata.userOverrides.ipAddress": {
      "type": "string",
      "description": "IP address to use instead of the user's geo-located IP address."
    },
    "requestMetadata.experimentIds": {
      "type": "array",
      "description": "Experiment IDs the current request belongs to."
    },
    "orderBy": {
      "type": "string",
      "description": "How to order addresses within the returned companies. Currently, only\n`address` and `address desc` is supported which will sorted by closest to\nfarthest in distance from given address and farthest to closest distance\nfrom given address respectively."
    },
    "specializations": {
      "type": "array",
      "description": "List of specializations that the returned agencies should provide. If this\nis not empty, any returned agency must have at least one of these\nspecializations, or one of the services in the \"services\" field."
    },
    "maxMonthlyBudget.currencyCode": {
      "type": "string",
      "description": "The 3-letter currency code defined in ISO 4217."
    },
    "requestMetadata.userOverrides.userId": {
      "type": "string",
      "description": "Logged-in user ID to impersonate instead of the user's ID."
    },
    "minMonthlyBudget.currencyCode": {
      "type": "string",
      "description": "The 3-letter currency code defined in ISO 4217."
    },
    "view": {
      "type": "string",
      "description": "The view of the `Company` resource to be returned. This must not be\n`COMPANY_VIEW_UNSPECIFIED`.",
      "enum": [
        "COMPANY_VIEW_UNSPECIFIED",
        "CV_GOOGLE_PARTNER_SEARCH"
      ]
    },
    "requestMetadata.locale": {
      "type": "string",
      "description": "Locale to use for the current request."
    },
    "address": {
      "type": "string",
      "description": "The address to use when searching for companies.\nIf not given, the geo-located address of the request is used."
    },
    "minMonthlyBudget.units": {
      "type": "string",
      "description": "The whole units of the amount.\nFor example if `currencyCode` is `\"USD\"`, then 1 unit is one US dollar."
    },
    "maxMonthlyBudget.nanos": {
      "type": "integer",
      "description": "Number of nano (10^-9) units of the amount.\nThe value must be between -999,999,999 and +999,999,999 inclusive.\nIf `units` is positive, `nanos` must be positive or zero.\nIf `units` is zero, `nanos` can be positive, zero, or negative.\nIf `units` is negative, `nanos` must be negative or zero.\nFor example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000."
    },
    "services": {
      "type": "array",
      "description": "List of services that the returned agencies should provide. If this is\nnot empty, any returned agency must have at least one of these services,\nor one of the specializations in the \"specializations\" field."
    },
    "maxMonthlyBudget.units": {
      "type": "string",
      "description": "The whole units of the amount.\nFor example if `currencyCode` is `\"USD\"`, then 1 unit is one US dollar."
    },
    "requestMetadata.trafficSource.trafficSourceId": {
      "type": "string",
      "description": "Identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "minMonthlyBudget.nanos": {
      "type": "integer",
      "description": "Number of nano (10^-9) units of the amount.\nThe value must be between -999,999,999 and +999,999,999 inclusive.\nIf `units` is positive, `nanos` must be positive or zero.\nIf `units` is zero, `nanos` can be positive, zero, or negative.\nIf `units` is negative, `nanos` must be negative or zero.\nFor example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000."
    },
    "requestMetadata.trafficSource.trafficSubId": {
      "type": "string",
      "description": "Second level identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
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
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListCompaniesResponse"
}
```
## Operation: updateCompanies
Update company.
Should only be called within the context of an authorized logged in user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "requestMetadata.userOverrides.ipAddress": {
      "type": "string",
      "description": "IP address to use instead of the user's geo-located IP address."
    },
    "updateMask": {
      "type": "string",
      "description": "Standard field mask for the set of fields to be updated.\nRequired with at least 1 value in FieldMask's paths."
    },
    "requestMetadata.experimentIds": {
      "type": "array",
      "description": "Experiment IDs the current request belongs to."
    },
    "requestMetadata.trafficSource.trafficSubId": {
      "type": "string",
      "description": "Second level identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "requestMetadata.partnersSessionId": {
      "type": "string",
      "description": "Google Partners session ID."
    },
    "requestMetadata.userOverrides.userId": {
      "type": "string",
      "description": "Logged-in user ID to impersonate instead of the user's ID."
    },
    "requestMetadata.trafficSource.trafficSourceId": {
      "type": "string",
      "description": "Identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "requestMetadata.locale": {
      "type": "string",
      "description": "Locale to use for the current request."
    },
    "body": {
      "$ref": "#/definitions/Company"
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
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Company"
}
```
## Operation: companies.get
Gets a company.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "companyId": {
      "type": "string",
      "description": "The ID of the company to retrieve."
    },
    "requestMetadata.trafficSource.trafficSourceId": {
      "type": "string",
      "description": "Identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "requestMetadata.userOverrides.ipAddress": {
      "type": "string",
      "description": "IP address to use instead of the user's geo-located IP address."
    },
    "requestMetadata.experimentIds": {
      "type": "array",
      "description": "Experiment IDs the current request belongs to."
    },
    "currencyCode": {
      "type": "string",
      "description": "If the company's budget is in a different currency code than this one, then\nthe converted budget is converted to this currency code."
    },
    "orderBy": {
      "type": "string",
      "description": "How to order addresses within the returned company. Currently, only\n`address` and `address desc` is supported which will sorted by closest to\nfarthest in distance from given address and farthest to closest distance\nfrom given address respectively."
    },
    "requestMetadata.trafficSource.trafficSubId": {
      "type": "string",
      "description": "Second level identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "requestMetadata.userOverrides.userId": {
      "type": "string",
      "description": "Logged-in user ID to impersonate instead of the user's ID."
    },
    "requestMetadata.partnersSessionId": {
      "type": "string",
      "description": "Google Partners session ID."
    },
    "view": {
      "type": "string",
      "description": "The view of `Company` resource to be returned. This must not be\n`COMPANY_VIEW_UNSPECIFIED`.",
      "enum": [
        "COMPANY_VIEW_UNSPECIFIED",
        "CV_GOOGLE_PARTNER_SEARCH"
      ]
    },
    "requestMetadata.locale": {
      "type": "string",
      "description": "Locale to use for the current request."
    },
    "address": {
      "type": "string",
      "description": "The address to use for sorting the company's addresses by proximity.\nIf not given, the geo-located address of the request is used.\nUsed when order_by is set."
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
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    }
  },
  "additionalProperties": false,
  "required": [
    "companyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetCompanyResponse"
}
```
## Operation: companies.leads.create
Creates an advertiser lead for the given company ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "companyId": {
      "type": "string",
      "description": "The ID of the company to contact."
    },
    "body": {
      "$ref": "#/definitions/CreateLeadRequest"
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
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    }
  },
  "additionalProperties": false,
  "required": [
    "companyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreateLeadResponse"
}
```
## Operation: exams.getToken
Gets an Exam Token for a Partner's user to take an exam in the Exams System

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "examType": {
      "type": "string",
      "description": "The exam type we are requesting a token for.",
      "enum": [
        "CERTIFICATION_EXAM_TYPE_UNSPECIFIED",
        "CET_ADWORDS_FUNDAMENTALS",
        "CET_ADWORDS_ADVANCED_SEARCH",
        "CET_ADWORDS_ADVANCED_DISPLAY",
        "CET_VIDEO_ADS",
        "CET_DOUBLECLICK",
        "CET_ANALYTICS",
        "CET_SHOPPING",
        "CET_MOBILE",
        "CET_DIGITAL_SALES",
        "CET_MOBILE_SITES"
      ]
    },
    "requestMetadata.trafficSource.trafficSubId": {
      "type": "string",
      "description": "Second level identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "requestMetadata.userOverrides.userId": {
      "type": "string",
      "description": "Logged-in user ID to impersonate instead of the user's ID."
    },
    "requestMetadata.partnersSessionId": {
      "type": "string",
      "description": "Google Partners session ID."
    },
    "requestMetadata.trafficSource.trafficSourceId": {
      "type": "string",
      "description": "Identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "requestMetadata.locale": {
      "type": "string",
      "description": "Locale to use for the current request."
    },
    "requestMetadata.userOverrides.ipAddress": {
      "type": "string",
      "description": "IP address to use instead of the user's geo-located IP address."
    },
    "requestMetadata.experimentIds": {
      "type": "array",
      "description": "Experiment IDs the current request belongs to."
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
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    }
  },
  "additionalProperties": false,
  "required": [
    "examType"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExamToken"
}
```
## Operation: leads.list
Lists advertiser leads for a user's associated company.
Should only be called within the context of an authorized logged in user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "requestMetadata.userOverrides.ipAddress": {
      "type": "string",
      "description": "IP address to use instead of the user's geo-located IP address."
    },
    "requestMetadata.experimentIds": {
      "type": "array",
      "description": "Experiment IDs the current request belongs to."
    },
    "requestMetadata.trafficSource.trafficSubId": {
      "type": "string",
      "description": "Second level identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "orderBy": {
      "type": "string",
      "description": "How to order Leads. Currently, only `create_time`\nand `create_time desc` are supported"
    },
    "requestMetadata.userOverrides.userId": {
      "type": "string",
      "description": "Logged-in user ID to impersonate instead of the user's ID."
    },
    "requestMetadata.partnersSessionId": {
      "type": "string",
      "description": "Google Partners session ID."
    },
    "pageToken": {
      "type": "string",
      "description": "A token identifying a page of results that the server returns.\nTypically, this is the value of `ListLeadsResponse.next_page_token`\nreturned from the previous call to\nListLeads."
    },
    "pageSize": {
      "type": "integer",
      "description": "Requested page size. Server may return fewer leads than requested.\nIf unspecified, server picks an appropriate default."
    },
    "requestMetadata.trafficSource.trafficSourceId": {
      "type": "string",
      "description": "Identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "requestMetadata.locale": {
      "type": "string",
      "description": "Locale to use for the current request."
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
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListLeadsResponse"
}
```
## Operation: updateLeads
Updates the specified lead.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "requestMetadata.trafficSource.trafficSourceId": {
      "type": "string",
      "description": "Identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "requestMetadata.locale": {
      "type": "string",
      "description": "Locale to use for the current request."
    },
    "requestMetadata.userOverrides.ipAddress": {
      "type": "string",
      "description": "IP address to use instead of the user's geo-located IP address."
    },
    "updateMask": {
      "type": "string",
      "description": "Standard field mask for the set of fields to be updated.\nRequired with at least 1 value in FieldMask's paths.\nOnly `state` and `adwords_customer_id` are currently supported."
    },
    "requestMetadata.experimentIds": {
      "type": "array",
      "description": "Experiment IDs the current request belongs to."
    },
    "requestMetadata.trafficSource.trafficSubId": {
      "type": "string",
      "description": "Second level identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "requestMetadata.userOverrides.userId": {
      "type": "string",
      "description": "Logged-in user ID to impersonate instead of the user's ID."
    },
    "requestMetadata.partnersSessionId": {
      "type": "string",
      "description": "Google Partners session ID."
    },
    "body": {
      "$ref": "#/definitions/Lead"
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
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Lead"
}
```
## Operation: offers.list
Lists the Offers available for the current user

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "requestMetadata.partnersSessionId": {
      "type": "string",
      "description": "Google Partners session ID."
    },
    "requestMetadata.userOverrides.userId": {
      "type": "string",
      "description": "Logged-in user ID to impersonate instead of the user's ID."
    },
    "requestMetadata.trafficSource.trafficSourceId": {
      "type": "string",
      "description": "Identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "requestMetadata.locale": {
      "type": "string",
      "description": "Locale to use for the current request."
    },
    "requestMetadata.userOverrides.ipAddress": {
      "type": "string",
      "description": "IP address to use instead of the user's geo-located IP address."
    },
    "requestMetadata.experimentIds": {
      "type": "array",
      "description": "Experiment IDs the current request belongs to."
    },
    "requestMetadata.trafficSource.trafficSubId": {
      "type": "string",
      "description": "Second level identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
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
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListOffersResponse"
}
```
## Operation: offers.history.list
Lists the Historical Offers for the current user (or user's entire company)

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "pageToken": {
      "type": "string",
      "description": "Token to retrieve a specific page."
    },
    "pageSize": {
      "type": "integer",
      "description": "Maximum number of rows to return per page."
    },
    "requestMetadata.trafficSource.trafficSourceId": {
      "type": "string",
      "description": "Identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "requestMetadata.locale": {
      "type": "string",
      "description": "Locale to use for the current request."
    },
    "requestMetadata.userOverrides.ipAddress": {
      "type": "string",
      "description": "IP address to use instead of the user's geo-located IP address."
    },
    "entireCompany": {
      "type": "boolean",
      "description": "if true, show history for the entire company.  Requires user to be admin."
    },
    "requestMetadata.experimentIds": {
      "type": "array",
      "description": "Experiment IDs the current request belongs to."
    },
    "orderBy": {
      "type": "string",
      "description": "Comma-separated list of fields to order by, e.g.: \"foo,bar,baz\".\nUse \"foo desc\" to sort descending.\nList of valid field names is: name, offer_code, expiration_time, status,\n    last_modified_time, sender_name, creation_time, country_code,\n    offer_type."
    },
    "requestMetadata.trafficSource.trafficSubId": {
      "type": "string",
      "description": "Second level identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "requestMetadata.userOverrides.userId": {
      "type": "string",
      "description": "Logged-in user ID to impersonate instead of the user's ID."
    },
    "requestMetadata.partnersSessionId": {
      "type": "string",
      "description": "Google Partners session ID."
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
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListOffersHistoryResponse"
}
```
## Operation: getPartnersstatus
Gets Partners Status of the logged in user's agency.
Should only be called if the logged in user is the admin of the agency.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "requestMetadata.userOverrides.userId": {
      "type": "string",
      "description": "Logged-in user ID to impersonate instead of the user's ID."
    },
    "requestMetadata.partnersSessionId": {
      "type": "string",
      "description": "Google Partners session ID."
    },
    "requestMetadata.trafficSource.trafficSourceId": {
      "type": "string",
      "description": "Identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "requestMetadata.locale": {
      "type": "string",
      "description": "Locale to use for the current request."
    },
    "requestMetadata.userOverrides.ipAddress": {
      "type": "string",
      "description": "IP address to use instead of the user's geo-located IP address."
    },
    "requestMetadata.experimentIds": {
      "type": "array",
      "description": "Experiment IDs the current request belongs to."
    },
    "requestMetadata.trafficSource.trafficSubId": {
      "type": "string",
      "description": "Second level identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
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
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetPartnersStatusResponse"
}
```
## Operation: userEvents.log
Logs a user event.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/LogUserEventRequest"
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
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LogUserEventResponse"
}
```
## Operation: userStates.list
Lists states for current user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "requestMetadata.userOverrides.userId": {
      "type": "string",
      "description": "Logged-in user ID to impersonate instead of the user's ID."
    },
    "requestMetadata.partnersSessionId": {
      "type": "string",
      "description": "Google Partners session ID."
    },
    "requestMetadata.trafficSource.trafficSourceId": {
      "type": "string",
      "description": "Identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "requestMetadata.locale": {
      "type": "string",
      "description": "Locale to use for the current request."
    },
    "requestMetadata.userOverrides.ipAddress": {
      "type": "string",
      "description": "IP address to use instead of the user's geo-located IP address."
    },
    "requestMetadata.experimentIds": {
      "type": "array",
      "description": "Experiment IDs the current request belongs to."
    },
    "requestMetadata.trafficSource.trafficSubId": {
      "type": "string",
      "description": "Second level identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
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
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListUserStatesResponse"
}
```
## Operation: users.updateProfile
Updates a user's profile. A user can only update their own profile and
should only be called within the context of a logged in user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "requestMetadata.trafficSource.trafficSubId": {
      "type": "string",
      "description": "Second level identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "requestMetadata.partnersSessionId": {
      "type": "string",
      "description": "Google Partners session ID."
    },
    "requestMetadata.userOverrides.userId": {
      "type": "string",
      "description": "Logged-in user ID to impersonate instead of the user's ID."
    },
    "requestMetadata.trafficSource.trafficSourceId": {
      "type": "string",
      "description": "Identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "requestMetadata.locale": {
      "type": "string",
      "description": "Locale to use for the current request."
    },
    "requestMetadata.userOverrides.ipAddress": {
      "type": "string",
      "description": "IP address to use instead of the user's geo-located IP address."
    },
    "requestMetadata.experimentIds": {
      "type": "array",
      "description": "Experiment IDs the current request belongs to."
    },
    "body": {
      "$ref": "#/definitions/UserProfile"
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
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserProfile"
}
```
## Operation: users.get
Gets a user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "Identifier of the user. Can be set to <code>me</code> to mean the currently\nauthenticated user."
    },
    "requestMetadata.userOverrides.userId": {
      "type": "string",
      "description": "Logged-in user ID to impersonate instead of the user's ID."
    },
    "requestMetadata.partnersSessionId": {
      "type": "string",
      "description": "Google Partners session ID."
    },
    "userView": {
      "type": "string",
      "description": "Specifies what parts of the user information to return.",
      "enum": [
        "BASIC",
        "PROFILE",
        "PUBLIC_PROFILE"
      ]
    },
    "requestMetadata.trafficSource.trafficSourceId": {
      "type": "string",
      "description": "Identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "requestMetadata.locale": {
      "type": "string",
      "description": "Locale to use for the current request."
    },
    "requestMetadata.userOverrides.ipAddress": {
      "type": "string",
      "description": "IP address to use instead of the user's geo-located IP address."
    },
    "requestMetadata.experimentIds": {
      "type": "array",
      "description": "Experiment IDs the current request belongs to."
    },
    "requestMetadata.trafficSource.trafficSubId": {
      "type": "string",
      "description": "Second level identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
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
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
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
  "$ref": "#/definitions/User"
}
```
## Operation: users.deleteCompanyRelation
Deletes a user's company relation. Unaffiliaites the user from a company.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The ID of the user. Can be set to <code>me</code> to mean\nthe currently authenticated user."
    },
    "requestMetadata.trafficSource.trafficSubId": {
      "type": "string",
      "description": "Second level identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "requestMetadata.userOverrides.userId": {
      "type": "string",
      "description": "Logged-in user ID to impersonate instead of the user's ID."
    },
    "requestMetadata.partnersSessionId": {
      "type": "string",
      "description": "Google Partners session ID."
    },
    "requestMetadata.trafficSource.trafficSourceId": {
      "type": "string",
      "description": "Identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "requestMetadata.locale": {
      "type": "string",
      "description": "Locale to use for the current request."
    },
    "requestMetadata.userOverrides.ipAddress": {
      "type": "string",
      "description": "IP address to use instead of the user's geo-located IP address."
    },
    "requestMetadata.experimentIds": {
      "type": "array",
      "description": "Experiment IDs the current request belongs to."
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
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
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
  "$ref": "#/definitions/Empty"
}
```
## Operation: users.createCompanyRelation
Creates a user's company relation. Affiliates the user to a company.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The ID of the user. Can be set to <code>me</code> to mean\nthe currently authenticated user."
    },
    "requestMetadata.userOverrides.userId": {
      "type": "string",
      "description": "Logged-in user ID to impersonate instead of the user's ID."
    },
    "requestMetadata.partnersSessionId": {
      "type": "string",
      "description": "Google Partners session ID."
    },
    "requestMetadata.trafficSource.trafficSourceId": {
      "type": "string",
      "description": "Identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "requestMetadata.locale": {
      "type": "string",
      "description": "Locale to use for the current request."
    },
    "requestMetadata.userOverrides.ipAddress": {
      "type": "string",
      "description": "IP address to use instead of the user's geo-located IP address."
    },
    "requestMetadata.experimentIds": {
      "type": "array",
      "description": "Experiment IDs the current request belongs to."
    },
    "requestMetadata.trafficSource.trafficSubId": {
      "type": "string",
      "description": "Second level identifier to indicate where the traffic comes from.\nAn identifier has multiple letters created by a team which redirected the\ntraffic to us."
    },
    "body": {
      "$ref": "#/definitions/CompanyRelation"
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
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
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
  "$ref": "#/definitions/CompanyRelation"
}
```
