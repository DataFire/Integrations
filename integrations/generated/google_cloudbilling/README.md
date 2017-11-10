# @datafire/google_cloudbilling

Client library for Google Cloud Billing

## Installation and Usage
```bash
npm install --save datafire @datafire/google_cloudbilling
```

```js
let datafire = require('datafire');
let google_cloudbilling = require('@datafire/google_cloudbilling').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_cloudbilling.services.list({}).then(data => {
  console.log(data);
})
```

## Description
Allows developers to manage billing for their Google Cloud Platform projects
    programmatically.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_cloudbilling.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_cloudbilling.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### billingAccounts.list
Lists the billing accounts that the current authenticated user
[owns](https://support.google.com/cloud/answer/4430947).


```js
google_cloudbilling.billingAccounts.list({}, context)
```

#### Parameters
* pageSize (integer) - Requested page size. The maximum page size is 100; this is also the
* pageToken (string) - A token identifying a page of results to return. This should be a
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### services.list
Lists all public cloud services.


```js
google_cloudbilling.services.list({}, context)
```

#### Parameters
* pageSize (integer) - Requested page size. Defaults to 5000.
* pageToken (string) - A token identifying a page of results to return. This should be a
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### billingAccounts.get
Gets information about a billing account. The current authenticated user
must be an [owner of the billing
account](https://support.google.com/cloud/answer/4430947).


```js
google_cloudbilling.billingAccounts.get({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The resource name of the billing account to retrieve. For example,
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.getBillingInfo
Gets the billing information for a project. The current authenticated user
must have [permission to view the
project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo
).


```js
google_cloudbilling.projects.getBillingInfo({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The resource name of the project for which billing information is
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.updateBillingInfo
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


```js
google_cloudbilling.projects.updateBillingInfo({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The resource name of the project associated with the billing information
* body (object) - Encapsulation of billing information for a Cloud Console project. A project
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### billingAccounts.projects.list
Lists the projects associated with a billing account. The current
authenticated user must be an [owner of the billing
account](https://support.google.com/cloud/answer/4430947).


```js
google_cloudbilling.billingAccounts.projects.list({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The resource name of the billing account associated with the projects that
* pageSize (integer) - Requested page size. The maximum page size is 100; this is also the
* pageToken (string) - A token identifying a page of results to be returned. This should be a
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### services.skus.list
Lists all publicly available SKUs for a given cloud service.


```js
google_cloudbilling.services.skus.list({
  "parent": ""
}, context)
```

#### Parameters
* currencyCode (string) - The ISO 4217 currency code for the pricing info in the response proto.
* endTime (string) - Optional exclusive end time of the time range for which the pricing
* pageSize (integer) - Requested page size. Defaults to 5000.
* pageToken (string) - A token identifying a page of results to return. This should be a
* parent (string) **required** - The name of the service.
* startTime (string) - Optional inclusive start time of the time range for which the pricing
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

