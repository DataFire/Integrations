# @datafire/google_androidenterprise

Client library for Google Play EMM API

## Installation and Usage
```bash
npm install --save @datafire/google_androidenterprise
```
```js
let google_androidenterprise = require('@datafire/google_androidenterprise').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Manages the deployment of apps to Android Enterprise devices.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_androidenterprise.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_androidenterprise.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### androidenterprise.enterprises.list
Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.


```js
google_androidenterprise.androidenterprise.enterprises.list({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: Required. The exact primary domain name of the enterprise to look up.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [EnterprisesListResponse](#enterpriseslistresponse)

### androidenterprise.enterprises.acknowledgeNotificationSet
Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.


```js
google_androidenterprise.androidenterprise.enterprises.acknowledgeNotificationSet({}, context)
```

#### Input
* input `object`
  * notificationSetId `string`: The notification set ID as returned by Enterprises.PullNotificationSet. This must be provided.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### androidenterprise.enterprises.completeSignup
Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.


```js
google_androidenterprise.androidenterprise.enterprises.completeSignup({}, context)
```

#### Input
* input `object`
  * completionToken `string`: The Completion token initially returned by GenerateSignupUrl.
  * enterpriseToken `string`: The Enterprise token appended to the Callback URL.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Enterprise](#enterprise)

### androidenterprise.enterprises.enroll
Enrolls an enterprise with the calling EMM.


```js
google_androidenterprise.androidenterprise.enterprises.enroll({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Required. The token provided by the enterprise to register the EMM.
  * body [Enterprise](#enterprise)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Enterprise](#enterprise)

### androidenterprise.enterprises.pullNotificationSet
Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending. A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty. Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy. Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending. If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.


```js
google_androidenterprise.androidenterprise.enterprises.pullNotificationSet({}, context)
```

#### Input
* input `object`
  * requestMode `string` (values: waitForNotifications, returnImmediately): The request mode for pulling notifications. Specifying waitForNotifications will cause the request to block and wait until one or more notifications are present, or return an empty notification list if no notifications are present after some time. Speciying returnImmediately will cause the request to immediately return the pending notifications, or an empty list if no notifications are present. If omitted, defaults to waitForNotifications.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [NotificationSet](#notificationset)

### androidenterprise.enterprises.generateSignupUrl
Generates a sign-up URL.


```js
google_androidenterprise.androidenterprise.enterprises.generateSignupUrl({}, context)
```

#### Input
* input `object`
  * callbackUrl `string`: The callback URL to which the Admin will be redirected after successfully creating an enterprise. Before redirecting there the system will add a single query parameter to this URL named "enterpriseToken" which will contain an opaque token to be used for the CompleteSignup request. Beware that this means that the URL will be parsed, the parameter added and then a new URL formatted, i.e. there may be some minor formatting changes and, more importantly, the URL must be well-formed so that it can be parsed.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SignupInfo](#signupinfo)

### androidenterprise.enterprises.get
Retrieves the name and domain of an enterprise.


```js
google_androidenterprise.androidenterprise.enterprises.get({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Enterprise](#enterprise)

### androidenterprise.enterprises.setAccount
Sets the account that will be used to authenticate to the API as the enterprise.


```js
google_androidenterprise.androidenterprise.enterprises.setAccount({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * body [EnterpriseAccount](#enterpriseaccount)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [EnterpriseAccount](#enterpriseaccount)

### androidenterprise.enterprises.createWebToken
Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the javascript API documentation for further information.


```js
google_androidenterprise.androidenterprise.enterprises.createWebToken({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * body [AdministratorWebTokenSpec](#administratorwebtokenspec)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AdministratorWebToken](#administratorwebtoken)

### androidenterprise.grouplicenses.list
Retrieves IDs of all products for which the enterprise has a group license.


```js
google_androidenterprise.androidenterprise.grouplicenses.list({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GroupLicensesListResponse](#grouplicenseslistresponse)

### androidenterprise.grouplicenses.get
Retrieves details of an enterprise's group license for a product.


```js
google_androidenterprise.androidenterprise.grouplicenses.get({
  "enterpriseId": "",
  "groupLicenseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * groupLicenseId **required** `string`: The ID of the product the group license is for, e.g. "app:com.google.android.gm".
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GroupLicense](#grouplicense)

### androidenterprise.grouplicenseusers.list
Retrieves the IDs of the users who have been granted entitlements under the license.


```js
google_androidenterprise.androidenterprise.grouplicenseusers.list({
  "enterpriseId": "",
  "groupLicenseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * groupLicenseId **required** `string`: The ID of the product the group license is for, e.g. "app:com.google.android.gm".
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GroupLicenseUsersListResponse](#grouplicenseuserslistresponse)

### androidenterprise.products.list
Finds approved products that match a query, or all approved products if there is no query.


```js
google_androidenterprise.androidenterprise.products.list({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * approved `boolean`: Specifies whether to search among all products (false) or among only products that have been approved (true). Only "true" is supported, and should be specified.
  * language `string`: The BCP47 tag for the user's preferred language (e.g. "en-US", "de"). Results are returned in the language best matching the preferred language.
  * maxResults `integer`: Defines how many results the list operation should return. The default number depends on the resource collection.
  * query `string`: The search query as typed in the Google Play store search box. If omitted, all approved apps will be returned (using the pagination parameters), including apps that are not available in the store (e.g. unpublished apps).
  * token `string`: Defines the token of the page to return, usually taken from TokenPagination. This can only be used if token paging is enabled.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ProductsListResponse](#productslistresponse)

### androidenterprise.products.get
Retrieves details of a product for display to an enterprise admin.


```js
google_androidenterprise.androidenterprise.products.get({
  "enterpriseId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * productId **required** `string`: The ID of the product, e.g. "app:com.google.android.gm".
  * language `string`: The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Product](#product)

### androidenterprise.products.getAppRestrictionsSchema
Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.


```js
google_androidenterprise.androidenterprise.products.getAppRestrictionsSchema({
  "enterpriseId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * productId **required** `string`: The ID of the product.
  * language `string`: The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AppRestrictionsSchema](#apprestrictionsschema)

### androidenterprise.products.approve
 Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000. To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design. 


```js
google_androidenterprise.androidenterprise.products.approve({
  "enterpriseId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * productId **required** `string`: The ID of the product.
  * body [ProductsApproveRequest](#productsapproverequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### androidenterprise.products.generateApprovalUrl
Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product. Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day.


```js
google_androidenterprise.androidenterprise.products.generateApprovalUrl({
  "enterpriseId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * productId **required** `string`: The ID of the product.
  * languageCode `string`: The BCP 47 language code used for permission names and descriptions in the returned iframe, for instance "en-US".
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ProductsGenerateApprovalUrlResponse](#productsgenerateapprovalurlresponse)

### androidenterprise.managedconfigurationssettings.list
Lists all the managed configurations settings for the specified app.


```js
google_androidenterprise.androidenterprise.managedconfigurationssettings.list({
  "enterpriseId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * productId **required** `string`: The ID of the product for which the managed configurations settings applies to.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ManagedConfigurationsSettingsListResponse](#managedconfigurationssettingslistresponse)

### androidenterprise.products.getPermissions
Retrieves the Android app permissions required by this app.


```js
google_androidenterprise.androidenterprise.products.getPermissions({
  "enterpriseId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * productId **required** `string`: The ID of the product.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ProductPermissions](#productpermissions)

### androidenterprise.products.unapprove
Unapproves the specified product (and the relevant app permissions, if any)


```js
google_androidenterprise.androidenterprise.products.unapprove({
  "enterpriseId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * productId **required** `string`: The ID of the product.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### androidenterprise.enterprises.sendTestPushNotification
Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.


```js
google_androidenterprise.androidenterprise.enterprises.sendTestPushNotification({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [EnterprisesSendTestPushNotificationResponse](#enterprisessendtestpushnotificationresponse)

### androidenterprise.enterprises.getServiceAccount
Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side. This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error. Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials. Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource.


```js
google_androidenterprise.androidenterprise.enterprises.getServiceAccount({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * keyType `string` (values: googleCredentials, pkcs12): The type of credential to return with the service account. Required.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ServiceAccount](#serviceaccount)

### androidenterprise.serviceaccountkeys.list
Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.


```js
google_androidenterprise.androidenterprise.serviceaccountkeys.list({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ServiceAccountKeysListResponse](#serviceaccountkeyslistresponse)

### androidenterprise.serviceaccountkeys.insert
Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount. Only the type of the key should be populated in the resource to be inserted.


```js
google_androidenterprise.androidenterprise.serviceaccountkeys.insert({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * body [ServiceAccountKey](#serviceaccountkey)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ServiceAccountKey](#serviceaccountkey)

### androidenterprise.serviceaccountkeys.delete
Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.


```js
google_androidenterprise.androidenterprise.serviceaccountkeys.delete({
  "enterpriseId": "",
  "keyId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * keyId **required** `string`: The ID of the key.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### androidenterprise.enterprises.getStoreLayout
Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.


```js
google_androidenterprise.androidenterprise.enterprises.getStoreLayout({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [StoreLayout](#storelayout)

### androidenterprise.enterprises.setStoreLayout
Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.


```js
google_androidenterprise.androidenterprise.enterprises.setStoreLayout({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * body [StoreLayout](#storelayout)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [StoreLayout](#storelayout)

### androidenterprise.storelayoutpages.list
Retrieves the details of all pages in the store.


```js
google_androidenterprise.androidenterprise.storelayoutpages.list({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [StoreLayoutPagesListResponse](#storelayoutpageslistresponse)

### androidenterprise.storelayoutpages.insert
Inserts a new store page.


```js
google_androidenterprise.androidenterprise.storelayoutpages.insert({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * body [StorePage](#storepage)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [StorePage](#storepage)

### androidenterprise.storelayoutpages.delete
Deletes a store page.


```js
google_androidenterprise.androidenterprise.storelayoutpages.delete({
  "enterpriseId": "",
  "pageId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * pageId **required** `string`: The ID of the page.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### androidenterprise.storelayoutpages.get
Retrieves details of a store page.


```js
google_androidenterprise.androidenterprise.storelayoutpages.get({
  "enterpriseId": "",
  "pageId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * pageId **required** `string`: The ID of the page.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [StorePage](#storepage)

### androidenterprise.storelayoutpages.update
Updates the content of a store page.


```js
google_androidenterprise.androidenterprise.storelayoutpages.update({
  "enterpriseId": "",
  "pageId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * pageId **required** `string`: The ID of the page.
  * body [StorePage](#storepage)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [StorePage](#storepage)

### androidenterprise.storelayoutclusters.list
Retrieves the details of all clusters on the specified page.


```js
google_androidenterprise.androidenterprise.storelayoutclusters.list({
  "enterpriseId": "",
  "pageId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * pageId **required** `string`: The ID of the page.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [StoreLayoutClustersListResponse](#storelayoutclusterslistresponse)

### androidenterprise.storelayoutclusters.insert
Inserts a new cluster in a page.


```js
google_androidenterprise.androidenterprise.storelayoutclusters.insert({
  "enterpriseId": "",
  "pageId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * pageId **required** `string`: The ID of the page.
  * body [StoreCluster](#storecluster)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [StoreCluster](#storecluster)

### androidenterprise.storelayoutclusters.delete
Deletes a cluster.


```js
google_androidenterprise.androidenterprise.storelayoutclusters.delete({
  "enterpriseId": "",
  "pageId": "",
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * pageId **required** `string`: The ID of the page.
  * clusterId **required** `string`: The ID of the cluster.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### androidenterprise.storelayoutclusters.get
Retrieves details of a cluster.


```js
google_androidenterprise.androidenterprise.storelayoutclusters.get({
  "enterpriseId": "",
  "pageId": "",
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * pageId **required** `string`: The ID of the page.
  * clusterId **required** `string`: The ID of the cluster.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [StoreCluster](#storecluster)

### androidenterprise.storelayoutclusters.update
Updates a cluster.


```js
google_androidenterprise.androidenterprise.storelayoutclusters.update({
  "enterpriseId": "",
  "pageId": "",
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * pageId **required** `string`: The ID of the page.
  * clusterId **required** `string`: The ID of the cluster.
  * body [StoreCluster](#storecluster)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [StoreCluster](#storecluster)

### androidenterprise.enterprises.unenroll
Unenrolls an enterprise from the calling EMM.


```js
google_androidenterprise.androidenterprise.enterprises.unenroll({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### androidenterprise.users.list
Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call.


```js
google_androidenterprise.androidenterprise.users.list({
  "enterpriseId": "",
  "email": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * email **required** `string`: Required. The exact primary email address of the user to look up.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [UsersListResponse](#userslistresponse)

### androidenterprise.users.insert
Creates a new EMM-managed user. The Users resource passed in the body of the request should include an accountIdentifier and an accountType. If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.


```js
google_androidenterprise.androidenterprise.users.insert({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * body [User](#user)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [User](#user)

### androidenterprise.users.delete
Deleted an EMM-managed user.


```js
google_androidenterprise.androidenterprise.users.delete({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### androidenterprise.users.get
Retrieves a user's details.


```js
google_androidenterprise.androidenterprise.users.get({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [User](#user)

### androidenterprise.users.update
Updates the details of an EMM-managed user. Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value.


```js
google_androidenterprise.androidenterprise.users.update({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * body [User](#user)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [User](#user)

### androidenterprise.users.generateAuthenticationToken
Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes. You can provision a maximum of 10 devices per user. This call only works with EMM-managed accounts.


```js
google_androidenterprise.androidenterprise.users.generateAuthenticationToken({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AuthenticationToken](#authenticationtoken)

### androidenterprise.users.getAvailableProductSet
Retrieves the set of products a user is entitled to access.


```js
google_androidenterprise.androidenterprise.users.getAvailableProductSet({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ProductSet](#productset)

### androidenterprise.users.setAvailableProductSet
Modifies the set of products that a user is entitled to access (referred to as *whitelisted* products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted.


```js
google_androidenterprise.androidenterprise.users.setAvailableProductSet({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * body [ProductSet](#productset)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ProductSet](#productset)

### androidenterprise.users.revokeDeviceAccess
Revokes access to all devices currently provisioned to the user. The user will no longer be able to use the managed Play store on any of their managed devices. This call only works with EMM-managed accounts.


```js
google_androidenterprise.androidenterprise.users.revokeDeviceAccess({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### androidenterprise.devices.list
Retrieves the IDs of all of a user's devices.


```js
google_androidenterprise.androidenterprise.devices.list({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [DevicesListResponse](#deviceslistresponse)

### androidenterprise.devices.get
Retrieves the details of a device.


```js
google_androidenterprise.androidenterprise.devices.get({
  "enterpriseId": "",
  "userId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * deviceId **required** `string`: The ID of the device.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Device](#device)

### androidenterprise.devices.update
Updates the device policy. To ensure the policy is properly enforced, you need to prevent unmanaged accounts from accessing Google Play by setting the allowed_accounts in the managed configuration for the Google Play package. See restrict accounts in Google Play.


```js
google_androidenterprise.androidenterprise.devices.update({
  "enterpriseId": "",
  "userId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * deviceId **required** `string`: The ID of the device.
  * updateMask `string`: Mask that identifies which fields to update. If not set, all modifiable fields will be modified. When set in a query parameter, this field should be specified as updateMask=<field1>,<field2>,...
  * body [Device](#device)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Device](#device)

### androidenterprise.devices.forceReportUpload
Uploads a report containing any changes in app states on the device since the last report was generated. You can call this method up to 3 times every 24 hours for a given device. If you exceed the quota, then the Google Play EMM API returns HTTP 429 Too Many Requests.


```js
google_androidenterprise.androidenterprise.devices.forceReportUpload({
  "enterpriseId": "",
  "userId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * deviceId **required** `string`: The ID of the device.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### androidenterprise.installs.list
Retrieves the details of all apps installed on the specified device.


```js
google_androidenterprise.androidenterprise.installs.list({
  "enterpriseId": "",
  "userId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * deviceId **required** `string`: The Android ID of the device.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [InstallsListResponse](#installslistresponse)

### androidenterprise.installs.delete
Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed.


```js
google_androidenterprise.androidenterprise.installs.delete({
  "enterpriseId": "",
  "userId": "",
  "deviceId": "",
  "installId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * deviceId **required** `string`: The Android ID of the device.
  * installId **required** `string`: The ID of the product represented by the install, e.g. "app:com.google.android.gm".
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### androidenterprise.installs.get
Retrieves details of an installation of an app on a device.


```js
google_androidenterprise.androidenterprise.installs.get({
  "enterpriseId": "",
  "userId": "",
  "deviceId": "",
  "installId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * deviceId **required** `string`: The Android ID of the device.
  * installId **required** `string`: The ID of the product represented by the install, e.g. "app:com.google.android.gm".
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Install](#install)

### androidenterprise.installs.update
Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary.


```js
google_androidenterprise.androidenterprise.installs.update({
  "enterpriseId": "",
  "userId": "",
  "deviceId": "",
  "installId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * deviceId **required** `string`: The Android ID of the device.
  * installId **required** `string`: The ID of the product represented by the install, e.g. "app:com.google.android.gm".
  * body [Install](#install)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Install](#install)

### androidenterprise.managedconfigurationsfordevice.list
Lists all the per-device managed configurations for the specified device. Only the ID is set.


```js
google_androidenterprise.androidenterprise.managedconfigurationsfordevice.list({
  "enterpriseId": "",
  "userId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * deviceId **required** `string`: The Android ID of the device.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ManagedConfigurationsForDeviceListResponse](#managedconfigurationsfordevicelistresponse)

### androidenterprise.managedconfigurationsfordevice.delete
Removes a per-device managed configuration for an app for the specified device.


```js
google_androidenterprise.androidenterprise.managedconfigurationsfordevice.delete({
  "enterpriseId": "",
  "userId": "",
  "deviceId": "",
  "managedConfigurationForDeviceId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * deviceId **required** `string`: The Android ID of the device.
  * managedConfigurationForDeviceId **required** `string`: The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### androidenterprise.managedconfigurationsfordevice.get
Retrieves details of a per-device managed configuration.


```js
google_androidenterprise.androidenterprise.managedconfigurationsfordevice.get({
  "enterpriseId": "",
  "userId": "",
  "deviceId": "",
  "managedConfigurationForDeviceId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * deviceId **required** `string`: The Android ID of the device.
  * managedConfigurationForDeviceId **required** `string`: The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ManagedConfiguration](#managedconfiguration)

### androidenterprise.managedconfigurationsfordevice.update
Adds or updates a per-device managed configuration for an app for the specified device.


```js
google_androidenterprise.androidenterprise.managedconfigurationsfordevice.update({
  "enterpriseId": "",
  "userId": "",
  "deviceId": "",
  "managedConfigurationForDeviceId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * deviceId **required** `string`: The Android ID of the device.
  * managedConfigurationForDeviceId **required** `string`: The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
  * body [ManagedConfiguration](#managedconfiguration)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ManagedConfiguration](#managedconfiguration)

### androidenterprise.devices.getState
Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.


```js
google_androidenterprise.androidenterprise.devices.getState({
  "enterpriseId": "",
  "userId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * deviceId **required** `string`: The ID of the device.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [DeviceState](#devicestate)

### androidenterprise.devices.setState
Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.


```js
google_androidenterprise.androidenterprise.devices.setState({
  "enterpriseId": "",
  "userId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * deviceId **required** `string`: The ID of the device.
  * body [DeviceState](#devicestate)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [DeviceState](#devicestate)

### androidenterprise.entitlements.list
Lists all entitlements for the specified user. Only the ID is set.


```js
google_androidenterprise.androidenterprise.entitlements.list({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [EntitlementsListResponse](#entitlementslistresponse)

### androidenterprise.entitlements.delete
Removes an entitlement to an app for a user.


```js
google_androidenterprise.androidenterprise.entitlements.delete({
  "enterpriseId": "",
  "userId": "",
  "entitlementId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * entitlementId **required** `string`: The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### androidenterprise.entitlements.get
Retrieves details of an entitlement.


```js
google_androidenterprise.androidenterprise.entitlements.get({
  "enterpriseId": "",
  "userId": "",
  "entitlementId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * entitlementId **required** `string`: The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Entitlement](#entitlement)

### androidenterprise.entitlements.update
Adds or updates an entitlement to an app for a user.


```js
google_androidenterprise.androidenterprise.entitlements.update({
  "enterpriseId": "",
  "userId": "",
  "entitlementId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * entitlementId **required** `string`: The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
  * install `boolean`: Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user.
  * body [Entitlement](#entitlement)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Entitlement](#entitlement)

### androidenterprise.managedconfigurationsforuser.list
Lists all the per-user managed configurations for the specified user. Only the ID is set.


```js
google_androidenterprise.androidenterprise.managedconfigurationsforuser.list({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ManagedConfigurationsForUserListResponse](#managedconfigurationsforuserlistresponse)

### androidenterprise.managedconfigurationsforuser.delete
Removes a per-user managed configuration for an app for the specified user.


```js
google_androidenterprise.androidenterprise.managedconfigurationsforuser.delete({
  "enterpriseId": "",
  "userId": "",
  "managedConfigurationForUserId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * managedConfigurationForUserId **required** `string`: The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### androidenterprise.managedconfigurationsforuser.get
Retrieves details of a per-user managed configuration for an app for the specified user.


```js
google_androidenterprise.androidenterprise.managedconfigurationsforuser.get({
  "enterpriseId": "",
  "userId": "",
  "managedConfigurationForUserId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * managedConfigurationForUserId **required** `string`: The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ManagedConfiguration](#managedconfiguration)

### androidenterprise.managedconfigurationsforuser.update
Adds or updates the managed configuration settings for an app for the specified user. If you support the Managed configurations iframe, you can apply managed configurations to a user by specifying an mcmId and its associated configuration variables (if any) in the request. Alternatively, all EMMs can apply managed configurations by passing a list of managed properties.


```js
google_androidenterprise.androidenterprise.managedconfigurationsforuser.update({
  "enterpriseId": "",
  "userId": "",
  "managedConfigurationForUserId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * managedConfigurationForUserId **required** `string`: The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
  * body [ManagedConfiguration](#managedconfiguration)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ManagedConfiguration](#managedconfiguration)

### androidenterprise.webapps.list
Retrieves the details of all web apps for a given enterprise.


```js
google_androidenterprise.androidenterprise.webapps.list({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [WebAppsListResponse](#webappslistresponse)

### androidenterprise.webapps.insert
Creates a new web app for the enterprise.


```js
google_androidenterprise.androidenterprise.webapps.insert({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * body [WebApp](#webapp)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [WebApp](#webapp)

### androidenterprise.webapps.delete
Deletes an existing web app.


```js
google_androidenterprise.androidenterprise.webapps.delete({
  "enterpriseId": "",
  "webAppId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * webAppId **required** `string`: The ID of the web app.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### androidenterprise.webapps.get
Gets an existing web app.


```js
google_androidenterprise.androidenterprise.webapps.get({
  "enterpriseId": "",
  "webAppId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * webAppId **required** `string`: The ID of the web app.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [WebApp](#webapp)

### androidenterprise.webapps.update
Updates an existing web app.


```js
google_androidenterprise.androidenterprise.webapps.update({
  "enterpriseId": "",
  "webAppId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * webAppId **required** `string`: The ID of the web app.
  * body [WebApp](#webapp)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [WebApp](#webapp)

### androidenterprise.permissions.get
Retrieves details of an Android app permission for display to an enterprise admin.


```js
google_androidenterprise.androidenterprise.permissions.get({
  "permissionId": ""
}, context)
```

#### Input
* input `object`
  * permissionId **required** `string`: The ID of the permission.
  * language `string`: The BCP47 tag for the user's preferred language (e.g. "en-US", "de")
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Permission](#permission)



## Definitions

### Administrator
* Administrator `object`: This represents an enterprise admin who can manage the enterprise in the managed Google Play store.
  * email `string`: The admin's email address.

### AdministratorWebToken
* AdministratorWebToken `object`: A token authorizing an admin to access an iframe.
  * token `string`: An opaque token to be passed to the Play front-end to generate an iframe.

### AdministratorWebTokenSpec
* AdministratorWebTokenSpec `object`: Specification for a token used to generate iframes. The token specifies what data the admin is allowed to modify and the URI the iframe is allowed to communiate with.
  * managedConfigurations [AdministratorWebTokenSpecManagedConfigurations](#administratorwebtokenspecmanagedconfigurations)
  * parent `string`: The URI of the parent frame hosting the iframe. To prevent XSS, the iframe may not be hosted at other URIs. This URI must be https. Use whitespaces to separate multiple parent URIs.
  * permission `array`: Deprecated. Use PlaySearch.approveApps.
    * items `string` (values: unknown, approveApps, manageMcm)
  * playSearch [AdministratorWebTokenSpecPlaySearch](#administratorwebtokenspecplaysearch)
  * privateApps [AdministratorWebTokenSpecPrivateApps](#administratorwebtokenspecprivateapps)
  * storeBuilder [AdministratorWebTokenSpecStoreBuilder](#administratorwebtokenspecstorebuilder)
  * webApps [AdministratorWebTokenSpecWebApps](#administratorwebtokenspecwebapps)

### AdministratorWebTokenSpecManagedConfigurations
* AdministratorWebTokenSpecManagedConfigurations `object`
  * enabled `boolean`: Whether the Managed Configuration page is displayed. Default is true.

### AdministratorWebTokenSpecPlaySearch
* AdministratorWebTokenSpecPlaySearch `object`
  * approveApps `boolean`: Allow access to the iframe in approve mode. Default is false.
  * enabled `boolean`: Whether the managed Play Search apps page is displayed. Default is true.

### AdministratorWebTokenSpecPrivateApps
* AdministratorWebTokenSpecPrivateApps `object`
  * enabled `boolean`: Whether the Private Apps page is displayed. Default is true.

### AdministratorWebTokenSpecStoreBuilder
* AdministratorWebTokenSpecStoreBuilder `object`
  * enabled `boolean`: Whether the Organize apps page is displayed. Default is true.

### AdministratorWebTokenSpecWebApps
* AdministratorWebTokenSpecWebApps `object`
  * enabled `boolean`: Whether the Web Apps page is displayed. Default is true.

### AppRestrictionsSchema
* AppRestrictionsSchema `object`: Represents the list of app restrictions available to be pre-configured for the product.
  * kind `string`: Deprecated.
  * restrictions `array`: The set of restrictions that make up this schema.
    * items [AppRestrictionsSchemaRestriction](#apprestrictionsschemarestriction)

### AppRestrictionsSchemaChangeEvent
* AppRestrictionsSchemaChangeEvent `object`: An event generated when a new app version is uploaded to Google Play and its app restrictions schema changed. To fetch the app restrictions schema for an app, use Products.getAppRestrictionsSchema on the EMM API.
  * productId `string`: The id of the product (e.g. "app:com.google.android.gm") for which the app restriction schema changed. This field will always be present.

### AppRestrictionsSchemaRestriction
* AppRestrictionsSchemaRestriction `object`: A restriction in the App Restriction Schema represents a piece of configuration that may be pre-applied.
  * defaultValue [AppRestrictionsSchemaRestrictionRestrictionValue](#apprestrictionsschemarestrictionrestrictionvalue)
  * description `string`: A longer description of the restriction, giving more detail of what it affects.
  * entry `array`: For choice or multiselect restrictions, the list of possible entries' human-readable names.
    * items `string`
  * entryValue `array`: For choice or multiselect restrictions, the list of possible entries' machine-readable values. These values should be used in the configuration, either as a single string value for a choice restriction or in a stringArray for a multiselect restriction.
    * items `string`
  * key `string`: The unique key that the product uses to identify the restriction, e.g. "com.google.android.gm.fieldname".
  * nestedRestriction `array`: For bundle or bundleArray restrictions, the list of nested restrictions. A bundle restriction is always nested within a bundleArray restriction, and a bundleArray restriction is at most two levels deep.
    * items [AppRestrictionsSchemaRestriction](#apprestrictionsschemarestriction)
  * restrictionType `string` (values: bool, string, integer, choice, multiselect, hidden, bundle, bundleArray): The type of the restriction.
  * title `string`: The name of the restriction.

### AppRestrictionsSchemaRestrictionRestrictionValue
* AppRestrictionsSchemaRestrictionRestrictionValue `object`: A typed value for the restriction.
  * type `string` (values: bool, string, integer, choice, multiselect, hidden, bundle, bundleArray): The type of the value being provided.
  * valueBool `boolean`: The boolean value - this will only be present if type is bool.
  * valueInteger `integer`: The integer value - this will only be present if type is integer.
  * valueMultiselect `array`: The list of string values - this will only be present if type is multiselect.
    * items `string`
  * valueString `string`: The string value - this will be present for types string, choice and hidden.

### AppState
* AppState `object`: List of states set by the app.
  * keyedAppState `array`: List of keyed app states. This field will always be present.
    * items [KeyedAppState](#keyedappstate)
  * packageName `string`: The package name of the app. This field will always be present.

### AppUpdateEvent
* AppUpdateEvent `object`: An event generated when a new version of an app is uploaded to Google Play. Notifications are sent for new public versions only: alpha, beta, or canary versions do not generate this event. To fetch up-to-date version history for an app, use Products.Get on the EMM API.
  * productId `string`: The id of the product (e.g. "app:com.google.android.gm") that was updated. This field will always be present.

### AppVersion
* AppVersion `object`: This represents a single version of the app.
  * isProduction `boolean`: True if this version is a production APK.
  * track `string` (values: appTrackUnspecified, production, beta, alpha): Deprecated, use trackId instead.
  * trackId `array`: Track ids that the app version is published in. Replaces the track field (deprecated), but doesn't include the production track (see isProduction instead).
    * items `string`
  * versionCode `integer`: Unique increasing identifier for the app version.
  * versionString `string`: The string used in the Play store by the app developer to identify the version. The string is not necessarily unique or localized (for example, the string could be "1.4").

### ApprovalUrlInfo
* ApprovalUrlInfo `object`: Information on an approval URL.
  * approvalUrl `string`: A URL that displays a product's permissions and that can also be used to approve the product with the Products.approve call.

### AuthenticationToken
* AuthenticationToken `object`: An AuthenticationToken is used by the EMM's device policy client on a device to provision the given EMM-managed user on that device.
  * token `string`: The authentication token to be passed to the device policy client on the device where it can be used to provision the account for which this token was generated.

### AutoInstallConstraint
* AutoInstallConstraint `object`: The auto-install constraint. Defines a set of restrictions for installation. At least one of the fields must be set.
  * chargingStateConstraint `string` (values: chargingStateConstraintUnspecified, chargingNotRequired, chargingRequired): Charging state constraint.
  * deviceIdleStateConstraint `string` (values: deviceIdleStateConstraintUnspecified, deviceIdleNotRequired, deviceIdleRequired): Device idle state constraint.
  * networkTypeConstraint `string` (values: networkTypeConstraintUnspecified, anyNetwork, unmeteredNetwork): Network type constraint.

### AutoInstallPolicy
* AutoInstallPolicy `object`
  * autoInstallConstraint `array`: The constraints for auto-installing the app. You can specify a maximum of one constraint.
    * items [AutoInstallConstraint](#autoinstallconstraint)
  * autoInstallMode `string` (values: autoInstallModeUnspecified, doNotAutoInstall, autoInstallOnce, forceAutoInstall): The auto-install mode. If unset defaults to "doNotAutoInstall".
  * autoInstallPriority `integer`: The priority of the install, as an unsigned integer. A lower number means higher priority.
  * minimumVersionCode `integer`: The minimum version of the app. If a lower version of the app is installed, then the app will be auto-updated according to the auto-install constraints, instead of waiting for the regular auto-update. You can set a minimum version code for at most 20 apps per device.

### ConfigurationVariables
* ConfigurationVariables `object`: A configuration variables resource contains the managed configuration settings ID to be applied to a single user, as well as the variable set that is attributed to the user. The variable set will be used to replace placeholders in the managed configuration settings.
  * mcmId `string`: The ID of the managed configurations settings.
  * variableSet `array`: The variable set that is attributed to the user.
    * items [VariableSet](#variableset)

### Device
* Device `object`: A Devices resource represents a mobile device managed by the EMM and belonging to a specific enterprise user.
  * androidId `string`: The Google Play Services Android ID for the device encoded as a lowercase hex string. For example, "123456789abcdef0".
  * managementType `string` (values: managedDevice, managedProfile, containerApp, unmanagedProfile): Identifies the extent to which the device is controlled by a managed Google Play EMM in various deployment configurations. Possible values include: - "managedDevice", a device that has the EMM's device policy controller (DPC) as the device owner. - "managedProfile", a device that has a profile managed by the DPC (DPC is profile owner) in addition to a separate, personal profile that is unavailable to the DPC. - "containerApp", no longer used (deprecated). - "unmanagedProfile", a device that has been allowed (by the domain's admin, using the Admin Console to enable the privilege) to use managed Google Play, but the profile is itself not owned by a DPC. 
  * policy [Policy](#policy)
  * report [DeviceReport](#devicereport)

### DeviceReport
* DeviceReport `object`: Device report updated with the latest app states for managed apps on the device.
  * appState `array`: List of app states set by managed apps on the device. App states are defined by the app's developers. This field will always be present.
    * items [AppState](#appstate)
  * lastUpdatedTimestampMillis `string`: The timestamp of the last report update in milliseconds since epoch. This field will always be present.

### DeviceReportUpdateEvent
* DeviceReportUpdateEvent `object`: An event generated when an updated device report is available.
  * deviceId `string`: The Android ID of the device. This field will always be present.
  * report [DeviceReport](#devicereport)
  * userId `string`: The ID of the user. This field will always be present.

### DeviceState
* DeviceState `object`: The state of a user's device, as accessed by the getState and setState methods on device resources.
  * accountState `string` (values: enabled, disabled): The state of the Google account on the device. "enabled" indicates that the Google account on the device can be used to access Google services (including Google Play), while "disabled" means that it cannot. A new device is initially in the "disabled" state.

### DevicesListResponse
* DevicesListResponse `object`
  * device `array`: A managed device.
    * items [Device](#device)

### Enterprise
* Enterprise `object`: An Enterprises resource represents the binding between an EMM and a specific organization. That binding can be instantiated in one of two different ways using this API as follows: - For Google managed domain customers, the process involves using Enterprises.enroll and Enterprises.setAccount (in conjunction with artifacts obtained from the Admin console and the Google API Console) and submitted to the EMM through a more-or-less manual process. - For managed Google Play Accounts customers, the process involves using Enterprises.generateSignupUrl and Enterprises.completeSignup in conjunction with the managed Google Play sign-up UI (Google-provided mechanism) to create the binding without manual steps. As an EMM, you can support either or both approaches in your EMM console. See Create an Enterprise for details.
  * administrator `array`: Admins of the enterprise. This is only supported for enterprises created via the EMM-initiated flow.
    * items [Administrator](#administrator)
  * id `string`: The unique ID for the enterprise.
  * name `string`: The name of the enterprise, for example, "Example, Inc".
  * primaryDomain `string`: The enterprise's primary domain, such as "example.com".

### EnterpriseAccount
* EnterpriseAccount `object`: A service account that can be used to authenticate as the enterprise to API calls that require such authentication.
  * accountEmail `string`: The email address of the service account.

### EnterprisesListResponse
* EnterprisesListResponse `object`
  * enterprise `array`: An enterprise.
    * items [Enterprise](#enterprise)

### EnterprisesSendTestPushNotificationResponse
* EnterprisesSendTestPushNotificationResponse `object`
  * messageId `string`: The message ID of the test push notification that was sent.
  * topicName `string`: The name of the Cloud Pub/Sub topic to which notifications for this enterprise's enrolled account will be sent.

### Entitlement
* Entitlement `object`: The presence of an Entitlements resource indicates that a user has the right to use a particular app. Entitlements are user specific, not device specific. This allows a user with an entitlement to an app to install the app on all their devices. It's also possible for a user to hold an entitlement to an app without installing the app on any device. The API can be used to create an entitlement. As an option, you can also use the API to trigger the installation of an app on all a user's managed devices at the same time the entitlement is created. If the app is free, creating the entitlement also creates a group license for that app. For paid apps, creating the entitlement consumes one license, and that license remains consumed until the entitlement is removed. If the enterprise hasn't purchased enough licenses, then no entitlement is created and the installation fails. An entitlement is also not created for an app if the app requires permissions that the enterprise hasn't accepted. If an entitlement is deleted, the app may be uninstalled from a user's device. As a best practice, uninstall the app by calling Installs.delete() before deleting the entitlement. Entitlements for apps that a user pays for on an unmanaged profile have "userPurchase" as the entitlement reason. These entitlements cannot be removed via the API.
  * productId `string`: The ID of the product that the entitlement is for. For example, "app:com.google.android.gm".
  * reason `string` (values: free, groupLicense, userPurchase): The reason for the entitlement. For example, "free" for free apps. This property is temporary: it will be replaced by the acquisition kind field of group licenses.

### EntitlementsListResponse
* EntitlementsListResponse `object`
  * entitlement `array`: An entitlement of a user to a product (e.g. an app). For example, a free app that they have installed, or a paid app that they have been allocated a license to.
    * items [Entitlement](#entitlement)

### GroupLicense
* GroupLicense `object`: Group license objects allow you to keep track of licenses (called entitlements) for both free and paid apps. For a free app, a group license is created when an enterprise admin first approves the product in Google Play or when the first entitlement for the product is created for a user via the API. For a paid app, a group license object is only created when an enterprise admin purchases the product in Google Play for the first time. Use the API to query group licenses. A Grouplicenses resource includes the total number of licenses purchased (paid apps only) and the total number of licenses currently in use. In other words, the total number of Entitlements that exist for the product. Only one group license object is created per product and group license objects are never deleted. If a product is unapproved, its group license remains. This allows enterprise admins to keep track of any remaining entitlements for the product.
  * acquisitionKind `string` (values: free, bulkPurchase): How this group license was acquired. "bulkPurchase" means that this Grouplicenses resource was created because the enterprise purchased licenses for this product; otherwise, the value is "free" (for free products).
  * approval `string` (values: approved, unapproved): Whether the product to which this group license relates is currently approved by the enterprise. Products are approved when a group license is first created, but this approval may be revoked by an enterprise admin via Google Play. Unapproved products will not be visible to end users in collections, and new entitlements to them should not normally be created.
  * numProvisioned `integer`: The total number of provisioned licenses for this product. Returned by read operations, but ignored in write operations.
  * numPurchased `integer`: The number of purchased licenses (possibly in multiple purchases). If this field is omitted, then there is no limit on the number of licenses that can be provisioned (for example, if the acquisition kind is "free").
  * permissions `string` (values: currentApproved, needsReapproval, allCurrentAndFutureApproved): The permission approval status of the product. This field is only set if the product is approved. Possible states are: - "currentApproved", the current set of permissions is approved, but additional permissions will require the administrator to reapprove the product (If the product was approved without specifying the approved permissions setting, then this is the default behavior.), - "needsReapproval", the product has unapproved permissions. No additional product licenses can be assigned until the product is reapproved, - "allCurrentAndFutureApproved", the current permissions are approved and any future permission updates will be automatically approved without administrator review. 
  * productId `string`: The ID of the product that the license is for. For example, "app:com.google.android.gm".

### GroupLicenseUsersListResponse
* GroupLicenseUsersListResponse `object`
  * user `array`: A user of an enterprise.
    * items [User](#user)

### GroupLicensesListResponse
* GroupLicensesListResponse `object`
  * groupLicense `array`: A group license for a product approved for use in the enterprise.
    * items [GroupLicense](#grouplicense)

### Install
* Install `object`: The existence of an Installs resource indicates that an app is installed on a particular device (or that an install is pending). The API can be used to create an install resource using the update method. This triggers the actual install of the app on the device. If the user does not already have an entitlement for the app, then an attempt is made to create one. If this fails (for example, because the app is not free and there is no available license), then the creation of the install fails. The API can also be used to update an installed app. If the update method is used on an existing install, then the app will be updated to the latest available version. Note that it is not possible to force the installation of a specific version of an app: the version code is read-only. If a user installs an app themselves (as permitted by the enterprise), then again an install resource and possibly an entitlement resource are automatically created. The API can also be used to delete an install resource, which triggers the removal of the app from the device. Note that deleting an install does not automatically remove the corresponding entitlement, even if there are no remaining installs. The install resource will also be deleted if the user uninstalls the app themselves.
  * installState `string` (values: installed, installPending): Install state. The state "installPending" means that an install request has recently been made and download to the device is in progress. The state "installed" means that the app has been installed. This field is read-only.
  * productId `string`: The ID of the product that the install is for. For example, "app:com.google.android.gm".
  * versionCode `integer`: The version of the installed product. Guaranteed to be set only if the install state is "installed".

### InstallFailureEvent
* InstallFailureEvent `object`: An event generated when an app installation failed on a device
  * deviceId `string`: The Android ID of the device. This field will always be present.
  * failureDetails `string`: Additional details on the failure if applicable.
  * failureReason `string` (values: unknown, timeout): The reason for the installation failure. This field will always be present.
  * productId `string`: The id of the product (e.g. "app:com.google.android.gm") for which the install failure event occured. This field will always be present.
  * userId `string`: The ID of the user. This field will always be present.

### InstallsListResponse
* InstallsListResponse `object`
  * install `array`: An installation of an app for a user on a specific device. The existence of an install implies that the user must have an entitlement to the app.
    * items [Install](#install)

### KeyedAppState
* KeyedAppState `object`: Represents a keyed app state containing a key, timestamp, severity level, optional description, and optional data.
  * data `string`: Additional field intended for machine-readable data. For example, a number or JSON object. To prevent XSS, we recommend removing any HTML from the data before displaying it.
  * key `string`: Key indicating what the app is providing a state for. The content of the key is set by the app's developer. To prevent XSS, we recommend removing any HTML from the key before displaying it. This field will always be present.
  * message `string`: Free-form, human-readable message describing the app state. For example, an error message. To prevent XSS, we recommend removing any HTML from the message before displaying it.
  * severity `string` (values: severityUnknown, severityInfo, severityError): Severity of the app state. This field will always be present.
  * stateTimestampMillis `string`: Timestamp of when the app set the state in milliseconds since epoch. This field will always be present.

### LocalizedText
* LocalizedText `object`: A localized string with its locale.
  * locale `string`: The BCP47 tag for a locale. (e.g. "en-US", "de").
  * text `string`: The text localized in the associated locale.

### MaintenanceWindow
* MaintenanceWindow `object`: Maintenance window for managed Google Play Accounts. This allows Play store to update the apps on the foreground in the designated window.
  * durationMs `string`: Duration of the maintenance window, in milliseconds. The duration must be between 30 minutes and 24 hours (inclusive).
  * startTimeAfterMidnightMs `string`: Start time of the maintenance window, in milliseconds after midnight on the device. Windows can span midnight.

### ManagedConfiguration
* ManagedConfiguration `object`: A managed configuration resource contains the set of managed properties defined by the app developer in the app's managed configurations schema, as well as any configuration variables defined for the user.
  * configurationVariables [ConfigurationVariables](#configurationvariables)
  * kind `string`: Deprecated.
  * managedProperty `array`: The set of managed properties for this configuration.
    * items [ManagedProperty](#managedproperty)
  * productId `string`: The ID of the product that the managed configuration is for, e.g. "app:com.google.android.gm".

### ManagedConfigurationsForDeviceListResponse
* ManagedConfigurationsForDeviceListResponse `object`
  * managedConfigurationForDevice `array`: A managed configuration for an app on a specific device.
    * items [ManagedConfiguration](#managedconfiguration)

### ManagedConfigurationsForUserListResponse
* ManagedConfigurationsForUserListResponse `object`
  * managedConfigurationForUser `array`: A managed configuration for an app for a specific user.
    * items [ManagedConfiguration](#managedconfiguration)

### ManagedConfigurationsSettings
* ManagedConfigurationsSettings `object`: A managed configurations settings resource contains the set of managed properties that have been configured for an Android app to be applied to a set of users. The app's developer would have defined configurable properties in the managed configurations schema.
  * lastUpdatedTimestampMillis `string`: The last updated time of the managed configuration settings in milliseconds since 1970-01-01T00:00:00Z.
  * mcmId `string`: The ID of the managed configurations settings.
  * name `string`: The name of the managed configurations settings.

### ManagedConfigurationsSettingsListResponse
* ManagedConfigurationsSettingsListResponse `object`
  * managedConfigurationsSettings `array`: A managed configurations settings for an app that may be assigned to a group of users in an enterprise.
    * items [ManagedConfigurationsSettings](#managedconfigurationssettings)

### ManagedProperty
* ManagedProperty `object`: A managed property of a managed configuration. The property must match one of the properties in the app restrictions schema of the product. Exactly one of the value fields must be populated, and it must match the property's type in the app restrictions schema.
  * key `string`: The unique key that identifies the property.
  * valueBool `boolean`: The boolean value - this will only be present if type of the property is bool.
  * valueBundle [ManagedPropertyBundle](#managedpropertybundle)
  * valueBundleArray `array`: The list of bundles of properties - this will only be present if type of the property is bundle_array.
    * items [ManagedPropertyBundle](#managedpropertybundle)
  * valueInteger `integer`: The integer value - this will only be present if type of the property is integer.
  * valueString `string`: The string value - this will only be present if type of the property is string, choice or hidden.
  * valueStringArray `array`: The list of string values - this will only be present if type of the property is multiselect.
    * items `string`

### ManagedPropertyBundle
* ManagedPropertyBundle `object`: A bundle of managed properties.
  * managedProperty `array`: The list of managed properties.
    * items [ManagedProperty](#managedproperty)

### NewDeviceEvent
* NewDeviceEvent `object`: An event generated when a new device is ready to be managed.
  * deviceId `string`: The Android ID of the device. This field will always be present.
  * dpcPackageName `string`: Policy app on the device.
  * managementType `string` (values: managedDevice, managedProfile): Identifies the extent to which the device is controlled by an Android EMM in various deployment configurations. Possible values include: - "managedDevice", a device where the DPC is set as device owner, - "managedProfile", a device where the DPC is set as profile owner. 
  * userId `string`: The ID of the user. This field will always be present.

### NewPermissionsEvent
* NewPermissionsEvent `object`: An event generated when new permissions are added to an app.
  * approvedPermissions `array`: The set of permissions that the enterprise admin has already approved for this application. Use Permissions.Get on the EMM API to retrieve details about these permissions.
    * items `string`
  * productId `string`: The id of the product (e.g. "app:com.google.android.gm") for which new permissions were added. This field will always be present.
  * requestedPermissions `array`: The set of permissions that the app is currently requesting. Use Permissions.Get on the EMM API to retrieve details about these permissions.
    * items `string`

### Notification
* Notification `object`: A notification of one event relating to an enterprise.
  * appRestrictionsSchemaChangeEvent [AppRestrictionsSchemaChangeEvent](#apprestrictionsschemachangeevent)
  * appUpdateEvent [AppUpdateEvent](#appupdateevent)
  * deviceReportUpdateEvent [DeviceReportUpdateEvent](#devicereportupdateevent)
  * enterpriseId `string`: The ID of the enterprise for which the notification is sent. This will always be present.
  * installFailureEvent [InstallFailureEvent](#installfailureevent)
  * newDeviceEvent [NewDeviceEvent](#newdeviceevent)
  * newPermissionsEvent [NewPermissionsEvent](#newpermissionsevent)
  * notificationType `string` (values: unknown, testNotification, productApproval, installFailure, appUpdate, newPermissions, appRestricionsSchemaChange, productAvailabilityChange, newDevice, deviceReportUpdate): Type of the notification.
  * productApprovalEvent [ProductApprovalEvent](#productapprovalevent)
  * productAvailabilityChangeEvent [ProductAvailabilityChangeEvent](#productavailabilitychangeevent)
  * timestampMillis `string`: The time when the notification was published in milliseconds since 1970-01-01T00:00:00Z. This will always be present.

### NotificationSet
* NotificationSet `object`: A resource returned by the PullNotificationSet API, which contains a collection of notifications for enterprises associated with the service account authenticated for the request.
  * notification `array`: The notifications received, or empty if no notifications are present.
    * items [Notification](#notification)
  * notificationSetId `string`: The notification set ID, required to mark the notification as received with the Enterprises.AcknowledgeNotification API. This will be omitted if no notifications are present.

### PageInfo
* PageInfo `object`: Information about the current page. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned.
  * resultPerPage `integer`: Maximum number of results returned in one page. ! The number of results included in the API response.
  * startIndex `integer`: Index of the first result returned in the current page.
  * totalResults `integer`: Total number of results available on the backend ! The total number of results in the result set.

### Permission
* Permission `object`: A Permissions resource represents some extra capability, to be granted to an Android app, which requires explicit consent. An enterprise admin must consent to these permissions on behalf of their users before an entitlement for the app can be created. The permissions collection is read-only. The information provided for each permission (localized name and description) is intended to be used in the MDM user interface when obtaining consent from the enterprise.
  * description `string`: A longer description of the Permissions resource, giving more details of what it affects.
  * name `string`: The name of the permission.
  * permissionId `string`: An opaque string uniquely identifying the permission.

### Policy
* Policy `object`: The device policy for a given managed device.
  * autoUpdatePolicy `string` (values: autoUpdatePolicyUnspecified, choiceToTheUser, never, wifiOnly, always): The auto-update policy for apps installed on the device. "choiceToTheUser" allows the device's user to configure the app update policy. "always" enables auto updates. "never" disables auto updates. "wifiOnly" enables auto updates only when the device is connected to wifi.
  * deviceReportPolicy `string` (values: deviceReportPolicyUnspecified, deviceReportDisabled, deviceReportEnabled): Whether the device reports app states to the EMM. The default value is "deviceReportDisabled".
  * maintenanceWindow [MaintenanceWindow](#maintenancewindow)
  * productAvailabilityPolicy `string` (values: productAvailabilityPolicyUnspecified, whitelist, all): The availability granted to the device for the specified products. "all" gives the device access to all products, regardless of approval status. "all" does not enable automatic visibility of "alpha" or "beta" tracks. "whitelist" grants the device access the products specified in productPolicy[]. Only products that are approved or products that were previously approved (products with revoked approval) by the enterprise can be whitelisted. If no value is provided, the availability set at the user level is applied by default.
  * productPolicy `array`: The list of product policies. The productAvailabilityPolicy needs to be set to WHITELIST or ALL for the product policies to be applied.
    * items [ProductPolicy](#productpolicy)

### Product
* Product `object`: A Products resource represents an app in the Google Play store that is available to at least some users in the enterprise. (Some apps are restricted to a single enterprise, and no information about them is made available outside that enterprise.) The information provided for each product (localized name, icon, link to the full Google Play details page) is intended to allow a basic representation of the product within an EMM user interface.
  * appTracks `array`: The tracks visible to the enterprise.
    * items [TrackInfo](#trackinfo)
  * appVersion `array`: App versions currently available for this product.
    * items [AppVersion](#appversion)
  * authorName `string`: The name of the author of the product (for example, the app developer).
  * availableCountries `array`: The countries which this app is available in.
    * items `string`
  * availableTracks `array`: Deprecated, use appTracks instead.
    * items `string` (values: appTrackUnspecified, production, beta, alpha)
  * category `string`: The app category (e.g. RACING, SOCIAL, etc.)
  * contentRating `string` (values: ratingUnknown, all, preTeen, teen, mature): The content rating for this app.
  * description `string`: The localized promotional description, if available.
  * detailsUrl `string`: A link to the (consumer) Google Play details page for the product.
  * distributionChannel `string` (values: publicGoogleHosted, privateGoogleHosted, privateSelfHosted): How and to whom the package is made available. The value publicGoogleHosted means that the package is available through the Play store and not restricted to a specific enterprise. The value privateGoogleHosted means that the package is a private app (restricted to an enterprise) but hosted by Google. The value privateSelfHosted means that the package is a private app (restricted to an enterprise) and is privately hosted.
  * features `array`: Noteworthy features (if any) of this product.
    * items `string` (values: featureUnknown, vpnApp)
  * iconUrl `string`: A link to an image that can be used as an icon for the product. This image is suitable for use at up to 512px x 512px.
  * lastUpdatedTimestampMillis `string`: The approximate time (within 7 days) the app was last published, expressed in milliseconds since epoch.
  * minAndroidSdkVersion `integer`: The minimum Android SDK necessary to run the app.
  * permissions `array`: A list of permissions required by the app.
    * items [ProductPermission](#productpermission)
  * productId `string`: A string of the form *app:<package name>*. For example, app:com.google.android.gm represents the Gmail app.
  * productPricing `string` (values: unknown, free, freeWithInAppPurchase, paid): Whether this product is free, free with in-app purchases, or paid. If the pricing is unknown, this means the product is not generally available anymore (even though it might still be available to people who own it).
  * recentChanges `string`: A description of the recent changes made to the app.
  * requiresContainerApp `boolean`: Deprecated.
  * screenshotUrls `array`: A list of screenshot links representing the app.
    * items `string`
  * signingCertificate [ProductSigningCertificate](#productsigningcertificate)
  * smallIconUrl `string`: A link to a smaller image that can be used as an icon for the product. This image is suitable for use at up to 128px x 128px.
  * title `string`: The name of the product.
  * workDetailsUrl `string`: A link to the managed Google Play details page for the product, for use by an Enterprise admin.

### ProductApprovalEvent
* ProductApprovalEvent `object`: An event generated when a product's approval status is changed.
  * approved `string` (values: unknown, approved, unapproved): Whether the product was approved or unapproved. This field will always be present.
  * productId `string`: The id of the product (e.g. "app:com.google.android.gm") for which the approval status has changed. This field will always be present.

### ProductAvailabilityChangeEvent
* ProductAvailabilityChangeEvent `object`: An event generated whenever a product's availability changes.
  * availabilityStatus `string` (values: unknown, available, removed, unpublished): The new state of the product. This field will always be present.
  * productId `string`: The id of the product (e.g. "app:com.google.android.gm") for which the product availability changed. This field will always be present.

### ProductPermission
* ProductPermission `object`: A product permissions resource represents the set of permissions required by a specific app and whether or not they have been accepted by an enterprise admin. The API can be used to read the set of permissions, and also to update the set to indicate that permissions have been accepted.
  * permissionId `string`: An opaque string uniquely identifying the permission.
  * state `string` (values: required, accepted): Whether the permission has been accepted or not.

### ProductPermissions
* ProductPermissions `object`: Information about the permissions required by a specific app and whether they have been accepted by the enterprise.
  * permission `array`: The permissions required by the app.
    * items [ProductPermission](#productpermission)
  * productId `string`: The ID of the app that the permissions relate to, e.g. "app:com.google.android.gm".

### ProductPolicy
* ProductPolicy `object`: The policy for a product.
  * autoInstallPolicy [AutoInstallPolicy](#autoinstallpolicy)
  * autoUpdateMode `string` (values: autoUpdateModeUnspecified, autoUpdateDefault, autoUpdatePostponed, autoUpdateHighPriority): The auto-update mode for the product.
  * managedConfiguration [ManagedConfiguration](#managedconfiguration)
  * productId `string`: The ID of the product. For example, "app:com.google.android.gm".
  * trackIds `array`: Grants the device visibility to the specified product release track(s), identified by trackIds. The list of release tracks of a product can be obtained by calling Products.Get.
    * items `string`
  * tracks `array`: Deprecated. Use trackIds instead.
    * items `string` (values: appTrackUnspecified, production, beta, alpha)

### ProductSet
* ProductSet `object`: A set of products.
  * productId `array`: The list of product IDs making up the set of products.
    * items `string`
  * productSetBehavior `string` (values: unknown, whitelist, includeAll, allApproved): The interpretation of this product set. "unknown" should never be sent and is ignored if received. "whitelist" means that the user is entitled to access the product set. "includeAll" means that all products are accessible, including products that are approved, products with revoked approval, and products that have never been approved. "allApproved" means that the user is entitled to access all products that are approved for the enterprise. If the value is "allApproved" or "includeAll", the productId field is ignored. If no value is provided, it is interpreted as "whitelist" for backwards compatibility. Further "allApproved" or "includeAll" does not enable automatic visibility of "alpha" or "beta" tracks for Android app. Use ProductVisibility to enable "alpha" or "beta" tracks per user.
  * productVisibility `array`: Additional list of product IDs making up the product set. Unlike the productID array, in this list It's possible to specify which tracks (alpha, beta, production) of a product are visible to the user. See ProductVisibility and its fields for more information. Specifying the same product ID both here and in the productId array is not allowed and it will result in an error.
    * items [ProductVisibility](#productvisibility)

### ProductSigningCertificate
* ProductSigningCertificate `object`
  * certificateHashSha1 `string`: The base64 urlsafe encoded SHA1 hash of the certificate. (This field is deprecated in favor of SHA2-256. It should not be used and may be removed at any time.)
  * certificateHashSha256 `string`: The base64 urlsafe encoded SHA2-256 hash of the certificate.

### ProductVisibility
* ProductVisibility `object`: A product to be made visible to a user.
  * productId `string`: The product ID to make visible to the user. Required for each item in the productVisibility list.
  * trackIds `array`: Grants the user visibility to the specified product track(s), identified by trackIds.
    * items `string`
  * tracks `array`: Deprecated. Use trackIds instead.
    * items `string` (values: appTrackUnspecified, production, beta, alpha)

### ProductsApproveRequest
* ProductsApproveRequest `object`
  * approvalUrlInfo [ApprovalUrlInfo](#approvalurlinfo)
  * approvedPermissions `string` (values: currentPermissionsOnly, allPermissions): Sets how new permission requests for the product are handled. "allPermissions" automatically approves all current and future permissions for the product. "currentPermissionsOnly" approves the current set of permissions for the product, but any future permissions added through updates will require manual reapproval. If not specified, only the current set of permissions will be approved.

### ProductsGenerateApprovalUrlResponse
* ProductsGenerateApprovalUrlResponse `object`
  * url `string`: A URL that can be rendered in an iframe to display the permissions (if any) of a product. This URL can be used to approve the product only once and only within 24 hours of being generated, using the Products.approve call. If the product is currently unapproved and has no permissions, this URL will point to an empty page. If the product is currently approved, a URL will only be generated if that product has added permissions since it was last approved, and the URL will only display those new permissions that have not yet been accepted.

### ProductsListResponse
* ProductsListResponse `object`
  * pageInfo [PageInfo](#pageinfo)
  * product `array`: Information about a product (e.g. an app) in the Google Play store, for display to an enterprise admin.
    * items [Product](#product)
  * tokenPagination [TokenPagination](#tokenpagination)

### ServiceAccount
* ServiceAccount `object`: A service account identity, including the name and credentials that can be used to authenticate as the service account.
  * key [ServiceAccountKey](#serviceaccountkey)
  * name `string`: The account name of the service account, in the form of an email address. Assigned by the server.

### ServiceAccountKey
* ServiceAccountKey `object`: Credentials that can be used to authenticate as a service account.
  * data `string`: The body of the private key credentials file, in string format. This is only populated when the ServiceAccountKey is created, and is not stored by Google.
  * id `string`: An opaque, unique identifier for this ServiceAccountKey. Assigned by the server.
  * publicData `string`: Public key data for the credentials file. This is an X.509 cert. If you are using the googleCredentials key type, this is identical to the cert that can be retrieved by using the X.509 cert url inside of the credentials file.
  * type `string` (values: googleCredentials, pkcs12): The file format of the generated key data.

### ServiceAccountKeysListResponse
* ServiceAccountKeysListResponse `object`
  * serviceAccountKey `array`: The service account credentials.
    * items [ServiceAccountKey](#serviceaccountkey)

### SignupInfo
* SignupInfo `object`: A resource returned by the GenerateSignupUrl API, which contains the Signup URL and Completion Token.
  * completionToken `string`: An opaque token that will be required, along with the Enterprise Token, for obtaining the enterprise resource from CompleteSignup.
  * kind `string`: Deprecated.
  * url `string`: A URL under which the Admin can sign up for an enterprise. The page pointed to cannot be rendered in an iframe.

### StoreCluster
* StoreCluster `object`: Definition of a managed Google Play store cluster, a list of products displayed as part of a store page.
  * id `string`: Unique ID of this cluster. Assigned by the server. Immutable once assigned.
  * name `array`: Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry.
    * items [LocalizedText](#localizedtext)
  * orderInPage `string`: String (US-ASCII only) used to determine order of this cluster within the parent page's elements. Page elements are sorted in lexicographic order of this field. Duplicated values are allowed, but ordering between elements with duplicate order is undefined. The value of this field is never visible to a user, it is used solely for the purpose of defining an ordering. Maximum length is 256 characters.
  * productId `array`: List of products in the order they are displayed in the cluster. There should not be duplicates within a cluster.
    * items `string`

### StoreLayout
* StoreLayout `object`: General setting for the managed Google Play store layout, currently only specifying the page to display the first time the store is opened.
  * homepageId `string`: The ID of the store page to be used as the homepage. The homepage is the first page shown in the managed Google Play Store. Not specifying a homepage is equivalent to setting the store layout type to "basic".
  * storeLayoutType `string` (values: unknown, basic, custom): The store layout type. By default, this value is set to "basic" if the homepageId field is not set, and to "custom" otherwise. If set to "basic", the layout will consist of all approved apps that have been whitelisted for the user.

### StoreLayoutClustersListResponse
* StoreLayoutClustersListResponse `object`
  * cluster `array`: A store cluster of an enterprise.
    * items [StoreCluster](#storecluster)

### StoreLayoutPagesListResponse
* StoreLayoutPagesListResponse `object`
  * page `array`: A store page of an enterprise.
    * items [StorePage](#storepage)

### StorePage
* StorePage `object`: Definition of a managed Google Play store page, made of a localized name and links to other pages. A page also contains clusters defined as a subcollection.
  * id `string`: Unique ID of this page. Assigned by the server. Immutable once assigned.
  * link `array`: Ordered list of pages a user should be able to reach from this page. The list can't include this page. It is recommended that the basic pages are created first, before adding the links between pages. The API doesn't verify that the pages exist or the pages are reachable.
    * items `string`
  * name `array`: Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry.
    * items [LocalizedText](#localizedtext)

### TokenPagination
* TokenPagination `object`: Pagination information returned by a List operation when token pagination is enabled. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned. When using token pagination, clients should use the next/previous token to get another page of the result. The presence or absence of next/previous token indicates whether a next/previous page is available and provides a mean of accessing this page. ListRequest.page_token should be set to either next_page_token or previous_page_token to access another page.
  * nextPageToken `string`: Tokens to pass to the standard list field 'page_token'. Whenever available, tokens are preferred over manipulating start_index.
  * previousPageToken `string`

### TrackInfo
* TrackInfo `object`: Id to name association of a track.
  * trackAlias `string`: A modifiable name for a track. This is the visible name in the play developer console.
  * trackId `string`: Unmodifiable, unique track identifier. This identifier is the releaseTrackId in the url of the play developer console page that displays the track information.

### User
* User `object`: A Users resource represents an account associated with an enterprise. The account may be specific to a device or to an individual user (who can then use the account across multiple devices). The account may provide access to managed Google Play only, or to other Google services, depending on the identity model: - The Google managed domain identity model requires synchronization to Google account sources (via primaryEmail). - The managed Google Play Accounts identity model provides a dynamic means for enterprises to create user or device accounts as needed. These accounts provide access to managed Google Play. 
  * accountIdentifier `string`: A unique identifier you create for this user, such as "user342" or "asset#44418". Do not use personally identifiable information (PII) for this property. Must always be set for EMM-managed users. Not set for Google-managed users.
  * accountType `string` (values: deviceAccount, userAccount): The type of account that this user represents. A userAccount can be installed on multiple devices, but a deviceAccount is specific to a single device. An EMM-managed user (emmManaged) can be either type (userAccount, deviceAccount), but a Google-managed user (googleManaged) is always a userAccount.
  * displayName `string`: The name that will appear in user interfaces. Setting this property is optional when creating EMM-managed users. If you do set this property, use something generic about the organization (such as "Example, Inc.") or your name (as EMM). Not used for Google-managed user accounts. @mutable androidenterprise.users.update
  * id `string`: The unique ID for the user.
  * managementType `string` (values: googleManaged, emmManaged): The entity that manages the user. With googleManaged users, the source of truth is Google so EMMs have to make sure a Google Account exists for the user. With emmManaged users, the EMM is in charge.
  * primaryEmail `string`: The user's primary email address, for example, "jsmith@example.com". Will always be set for Google managed users and not set for EMM managed users.

### UsersListResponse
* UsersListResponse `object`
  * user `array`: A user of an enterprise.
    * items [User](#user)

### VariableSet
* VariableSet `object`: A variable set is a key-value pair of EMM-provided placeholders and its corresponding value, which is attributed to a user. For example, $FIRSTNAME could be a placeholder, and its value could be Alice. Placeholders should start with a '$' sign and should be alphanumeric only.
  * placeholder `string`: The placeholder string; defined by EMM.
  * userValue `string`: The value of the placeholder, specific to the user.

### WebApp
* WebApp `object`: A WebApps resource represents a web app created for an enterprise. Web apps are published to managed Google Play and can be distributed like other Android apps. On a user's device, a web app opens its specified URL.
  * displayMode `string` (values: displayModeUnspecified, minimalUi, standalone, fullScreen): The display mode of the web app. Possible values include: - "minimalUi", the device's status bar, navigation bar, the app's URL, and a refresh button are visible when the app is open. For HTTP URLs, you can only select this option. - "standalone", the device's status bar and navigation bar are visible when the app is open. - "fullScreen", the app opens in full screen mode, hiding the device's status and navigation bars. All browser UI elements, page URL, system status bar and back button are not visible, and the web app takes up the entirety of the available display area. 
  * icons `array`: A list of icons representing this website. If absent, a default icon (for create) or the current icon (for update) will be used.
    * items [WebAppIcon](#webappicon)
  * isPublished `boolean`: A flag whether the app has been published to the Play store yet.
  * startUrl `string`: The start URL, i.e. the URL that should load when the user opens the application.
  * title `string`: The title of the web app as displayed to the user (e.g., amongst a list of other applications, or as a label for an icon).
  * versionCode `string`: The current version of the app. Note that the version can automatically increase during the lifetime of the web app, while Google does internal housekeeping to keep the web app up-to-date.
  * webAppId `string`: The ID of the application. A string of the form "app:<package name>" where the package name always starts with the prefix "com.google.enterprise.webapp." followed by a random id.

### WebAppIcon
* WebAppIcon `object`: Icon for a web app.
  * imageData `string`: The actual bytes of the image in a base64url encoded string (c.f. RFC4648, section 5 "Base 64 Encoding with URL and Filename Safe Alphabet"). - The image type can be png or jpg. - The image should ideally be square. - The image should ideally have a size of 512x512. 

### WebAppsListResponse
* WebAppsListResponse `object`
  * webApp `array`: The manifest describing a web app.
    * items [WebApp](#webapp)


