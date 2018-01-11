# @datafire/google_androidenterprise

Client library for Google Play EMM

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

google_androidenterprise.enterprises.generateSignupUrl({}).then(data => {
  console.log(data);
})
```

## Description

Manages the deployment of apps to Android for Work users.

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

### enterprises.list
Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.


```js
google_androidenterprise.enterprises.list({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: The exact primary domain name of the enterprise to look up.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EnterprisesListResponse](#enterpriseslistresponse)

### enterprises.insert
Establishes the binding between the EMM and an enterprise. This is now deprecated; use enroll instead.


```js
google_androidenterprise.enterprises.insert({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: The token provided by the enterprise to register the EMM.
  * body [Enterprise](#enterprise)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Enterprise](#enterprise)

### enterprises.acknowledgeNotificationSet
Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.


```js
google_androidenterprise.enterprises.acknowledgeNotificationSet({}, context)
```

#### Input
* input `object`
  * notificationSetId `string`: The notification set ID as returned by Enterprises.PullNotificationSet. This must be provided.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### enterprises.completeSignup
Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.


```js
google_androidenterprise.enterprises.completeSignup({}, context)
```

#### Input
* input `object`
  * completionToken `string`: The Completion token initially returned by GenerateSignupUrl.
  * enterpriseToken `string`: The Enterprise token appended to the Callback URL.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Enterprise](#enterprise)

### enterprises.enroll
Enrolls an enterprise with the calling EMM.


```js
google_androidenterprise.enterprises.enroll({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: The token provided by the enterprise to register the EMM.
  * body [Enterprise](#enterprise)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Enterprise](#enterprise)

### enterprises.pullNotificationSet
Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending.
A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty.
Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy.
Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending.
If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.


```js
google_androidenterprise.enterprises.pullNotificationSet({}, context)
```

#### Input
* input `object`
  * requestMode `string` (values: returnImmediately, waitForNotifications): The request mode for pulling notifications.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [NotificationSet](#notificationset)

### enterprises.generateSignupUrl
Generates a sign-up URL.


```js
google_androidenterprise.enterprises.generateSignupUrl({}, context)
```

#### Input
* input `object`
  * callbackUrl `string`: The callback URL to which the Admin will be redirected after successfully creating an enterprise. Before redirecting there the system will add a single query parameter to this URL named "enterpriseToken" which will contain an opaque token to be used for the CompleteSignup request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SignupInfo](#signupinfo)

### enterprises.delete
Deletes the binding between the EMM and enterprise. This is now deprecated. Use this method only to unenroll customers that were previously enrolled with the insert call, then enroll them again with the enroll call.


```js
google_androidenterprise.enterprises.delete({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### enterprises.get
Retrieves the name and domain of an enterprise.


```js
google_androidenterprise.enterprises.get({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Enterprise](#enterprise)

### enterprises.setAccount
Sets the account that will be used to authenticate to the API as the enterprise.


```js
google_androidenterprise.enterprises.setAccount({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * body [EnterpriseAccount](#enterpriseaccount)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EnterpriseAccount](#enterpriseaccount)

### enterprises.getAndroidDevicePolicyConfig
Returns the Android Device Policy config resource.


```js
google_androidenterprise.enterprises.getAndroidDevicePolicyConfig({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AndroidDevicePolicyConfig](#androiddevicepolicyconfig)

### enterprises.setAndroidDevicePolicyConfig
Sets the Android Device Policy config resource. EMM may use this method to enable or disable Android Device Policy support for the specified enterprise. To learn more about managing devices and apps with Android Device Policy, see the Android Management API.


```js
google_androidenterprise.enterprises.setAndroidDevicePolicyConfig({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * body [AndroidDevicePolicyConfig](#androiddevicepolicyconfig)
  * enterpriseId **required** `string`: The ID of the enterprise.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AndroidDevicePolicyConfig](#androiddevicepolicyconfig)

### enterprises.createWebToken
Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the javascript API documentation for further information.


```js
google_androidenterprise.enterprises.createWebToken({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * body [AdministratorWebTokenSpec](#administratorwebtokenspec)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AdministratorWebToken](#administratorwebtoken)

### grouplicenses.list
Retrieves IDs of all products for which the enterprise has a group license.


```js
google_androidenterprise.grouplicenses.list({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GroupLicensesListResponse](#grouplicenseslistresponse)

### grouplicenses.get
Retrieves details of an enterprise's group license for a product.


```js
google_androidenterprise.grouplicenses.get({
  "enterpriseId": "",
  "groupLicenseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * groupLicenseId **required** `string`: The ID of the product the group license is for, e.g. "app:com.google.android.gm".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GroupLicense](#grouplicense)

### grouplicenseusers.list
Retrieves the IDs of the users who have been granted entitlements under the license.


```js
google_androidenterprise.grouplicenseusers.list({
  "enterpriseId": "",
  "groupLicenseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * groupLicenseId **required** `string`: The ID of the product the group license is for, e.g. "app:com.google.android.gm".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GroupLicenseUsersListResponse](#grouplicenseuserslistresponse)

### products.list
Finds approved products that match a query, or all approved products if there is no query.


```js
google_androidenterprise.products.list({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * approved `boolean`: Specifies whether to search among all products (false) or among only products that have been approved (true). Only "true" is supported, and should be specified.
  * language `string`: The BCP47 tag for the user's preferred language (e.g. "en-US", "de"). Results are returned in the language best matching the preferred language.
  * maxResults `integer`: Specifies the maximum number of products that can be returned per request. If not specified, uses a default value of 100, which is also the maximum retrievable within a single response.
  * query `string`: The search query as typed in the Google Play store search box. If omitted, all approved apps will be returned (using the pagination parameters), including apps that are not available in the store (e.g. unpublished apps).
  * token `string`: A pagination token is contained in a request''s response when there are more products. The token can be used in a subsequent request to obtain more products, and so forth. This parameter cannot be used in the initial request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ProductsListResponse](#productslistresponse)

### products.get
Retrieves details of a product for display to an enterprise admin.


```js
google_androidenterprise.products.get({
  "enterpriseId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * productId **required** `string`: The ID of the product, e.g. "app:com.google.android.gm".
  * language `string`: The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Product](#product)

### products.getAppRestrictionsSchema
Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.


```js
google_androidenterprise.products.getAppRestrictionsSchema({
  "enterpriseId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * productId **required** `string`: The ID of the product.
  * language `string`: The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AppRestrictionsSchema](#apprestrictionsschema)

### products.approve
Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000.

To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design.


```js
google_androidenterprise.products.approve({
  "enterpriseId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * productId **required** `string`: The ID of the product.
  * body [ProductsApproveRequest](#productsapproverequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### products.generateApprovalUrl
Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product.

Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day.


```js
google_androidenterprise.products.generateApprovalUrl({
  "enterpriseId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * productId **required** `string`: The ID of the product.
  * languageCode `string`: The BCP 47 language code used for permission names and descriptions in the returned iframe, for instance "en-US".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ProductsGenerateApprovalUrlResponse](#productsgenerateapprovalurlresponse)

### products.getPermissions
Retrieves the Android app permissions required by this app.


```js
google_androidenterprise.products.getPermissions({
  "enterpriseId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * productId **required** `string`: The ID of the product.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ProductPermissions](#productpermissions)

### products.unapprove
Unapproves the specified product (and the relevant app permissions, if any)


```js
google_androidenterprise.products.unapprove({
  "enterpriseId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * productId **required** `string`: The ID of the product.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### enterprises.sendTestPushNotification
Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.


```js
google_androidenterprise.enterprises.sendTestPushNotification({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EnterprisesSendTestPushNotificationResponse](#enterprisessendtestpushnotificationresponse)

### enterprises.getServiceAccount
Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side.

This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error.

Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials.

Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource.


```js
google_androidenterprise.enterprises.getServiceAccount({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * keyType `string` (values: googleCredentials, pkcs12): The type of credential to return with the service account. Required.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ServiceAccount](#serviceaccount)

### serviceaccountkeys.list
Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.


```js
google_androidenterprise.serviceaccountkeys.list({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ServiceAccountKeysListResponse](#serviceaccountkeyslistresponse)

### serviceaccountkeys.insert
Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.

Only the type of the key should be populated in the resource to be inserted.


```js
google_androidenterprise.serviceaccountkeys.insert({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * body [ServiceAccountKey](#serviceaccountkey)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ServiceAccountKey](#serviceaccountkey)

### serviceaccountkeys.delete
Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.


```js
google_androidenterprise.serviceaccountkeys.delete({
  "enterpriseId": "",
  "keyId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * keyId **required** `string`: The ID of the key.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### enterprises.getStoreLayout
Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.


```js
google_androidenterprise.enterprises.getStoreLayout({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [StoreLayout](#storelayout)

### enterprises.setStoreLayout
Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the  setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.


```js
google_androidenterprise.enterprises.setStoreLayout({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * body [StoreLayout](#storelayout)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [StoreLayout](#storelayout)

### storelayoutpages.list
Retrieves the details of all pages in the store.


```js
google_androidenterprise.storelayoutpages.list({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [StoreLayoutPagesListResponse](#storelayoutpageslistresponse)

### storelayoutpages.insert
Inserts a new store page.


```js
google_androidenterprise.storelayoutpages.insert({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * body [StorePage](#storepage)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [StorePage](#storepage)

### storelayoutpages.delete
Deletes a store page.


```js
google_androidenterprise.storelayoutpages.delete({
  "enterpriseId": "",
  "pageId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * pageId **required** `string`: The ID of the page.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### storelayoutpages.get
Retrieves details of a store page.


```js
google_androidenterprise.storelayoutpages.get({
  "enterpriseId": "",
  "pageId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * pageId **required** `string`: The ID of the page.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [StorePage](#storepage)

### storelayoutpages.patch
Updates the content of a store page. This method supports patch semantics.


```js
google_androidenterprise.storelayoutpages.patch({
  "enterpriseId": "",
  "pageId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * pageId **required** `string`: The ID of the page.
  * body [StorePage](#storepage)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [StorePage](#storepage)

### storelayoutpages.update
Updates the content of a store page.


```js
google_androidenterprise.storelayoutpages.update({
  "enterpriseId": "",
  "pageId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * pageId **required** `string`: The ID of the page.
  * body [StorePage](#storepage)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [StorePage](#storepage)

### storelayoutclusters.list
Retrieves the details of all clusters on the specified page.


```js
google_androidenterprise.storelayoutclusters.list({
  "enterpriseId": "",
  "pageId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * pageId **required** `string`: The ID of the page.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [StoreLayoutClustersListResponse](#storelayoutclusterslistresponse)

### storelayoutclusters.insert
Inserts a new cluster in a page.


```js
google_androidenterprise.storelayoutclusters.insert({
  "enterpriseId": "",
  "pageId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * pageId **required** `string`: The ID of the page.
  * body [StoreCluster](#storecluster)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [StoreCluster](#storecluster)

### storelayoutclusters.delete
Deletes a cluster.


```js
google_androidenterprise.storelayoutclusters.delete({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### storelayoutclusters.get
Retrieves details of a cluster.


```js
google_androidenterprise.storelayoutclusters.get({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [StoreCluster](#storecluster)

### storelayoutclusters.patch
Updates a cluster. This method supports patch semantics.


```js
google_androidenterprise.storelayoutclusters.patch({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [StoreCluster](#storecluster)

### storelayoutclusters.update
Updates a cluster.


```js
google_androidenterprise.storelayoutclusters.update({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [StoreCluster](#storecluster)

### enterprises.unenroll
Unenrolls an enterprise from the calling EMM.


```js
google_androidenterprise.enterprises.unenroll({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### users.list
Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call.


```js
google_androidenterprise.users.list({
  "enterpriseId": "",
  "email": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * email **required** `string`: The exact primary email address of the user to look up.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UsersListResponse](#userslistresponse)

### users.insert
Creates a new EMM-managed user.

The Users resource passed in the body of the request should include an accountIdentifier and an accountType.
If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.


```js
google_androidenterprise.users.insert({
  "enterpriseId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * body [User](#user)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [User](#user)

### users.delete
Deleted an EMM-managed user.


```js
google_androidenterprise.users.delete({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### users.get
Retrieves a user's details.


```js
google_androidenterprise.users.get({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [User](#user)

### users.patch
Updates the details of an EMM-managed user.

Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value. This method supports patch semantics.


```js
google_androidenterprise.users.patch({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * body [User](#user)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [User](#user)

### users.update
Updates the details of an EMM-managed user.

Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value.


```js
google_androidenterprise.users.update({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * body [User](#user)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [User](#user)

### users.generateAuthenticationToken
Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes.

This call only works with EMM-managed accounts.


```js
google_androidenterprise.users.generateAuthenticationToken({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AuthenticationToken](#authenticationtoken)

### users.getAvailableProductSet
Retrieves the set of products a user is entitled to access.


```js
google_androidenterprise.users.getAvailableProductSet({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ProductSet](#productset)

### users.setAvailableProductSet
Modifies the set of products that a user is entitled to access (referred to as whitelisted products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted.


```js
google_androidenterprise.users.setAvailableProductSet({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * body [ProductSet](#productset)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ProductSet](#productset)

### devices.list
Retrieves the IDs of all of a user's devices.


```js
google_androidenterprise.devices.list({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DevicesListResponse](#deviceslistresponse)

### devices.get
Retrieves the details of a device.


```js
google_androidenterprise.devices.get({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Device](#device)

### installs.list
Retrieves the details of all apps installed on the specified device.


```js
google_androidenterprise.installs.list({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InstallsListResponse](#installslistresponse)

### installs.delete
Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed.


```js
google_androidenterprise.installs.delete({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### installs.get
Retrieves details of an installation of an app on a device.


```js
google_androidenterprise.installs.get({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Install](#install)

### installs.patch
Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary. This method supports patch semantics.


```js
google_androidenterprise.installs.patch({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Install](#install)

### installs.update
Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary.


```js
google_androidenterprise.installs.update({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Install](#install)

### managedconfigurationsfordevice.list
Lists all the per-device managed configurations for the specified device. Only the ID is set.


```js
google_androidenterprise.managedconfigurationsfordevice.list({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ManagedConfigurationsForDeviceListResponse](#managedconfigurationsfordevicelistresponse)

### managedconfigurationsfordevice.delete
Removes a per-device managed configuration for an app for the specified device.


```js
google_androidenterprise.managedconfigurationsfordevice.delete({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### managedconfigurationsfordevice.get
Retrieves details of a per-device managed configuration.


```js
google_androidenterprise.managedconfigurationsfordevice.get({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ManagedConfiguration](#managedconfiguration)

### managedconfigurationsfordevice.patch
Adds or updates a per-device managed configuration for an app for the specified device. This method supports patch semantics.


```js
google_androidenterprise.managedconfigurationsfordevice.patch({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ManagedConfiguration](#managedconfiguration)

### managedconfigurationsfordevice.update
Adds or updates a per-device managed configuration for an app for the specified device.


```js
google_androidenterprise.managedconfigurationsfordevice.update({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ManagedConfiguration](#managedconfiguration)

### devices.getState
Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.


```js
google_androidenterprise.devices.getState({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DeviceState](#devicestate)

### devices.setState
Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.


```js
google_androidenterprise.devices.setState({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DeviceState](#devicestate)

### entitlements.list
Lists all entitlements for the specified user. Only the ID is set.


```js
google_androidenterprise.entitlements.list({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EntitlementsListResponse](#entitlementslistresponse)

### entitlements.delete
Removes an entitlement to an app for a user.


```js
google_androidenterprise.entitlements.delete({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### entitlements.get
Retrieves details of an entitlement.


```js
google_androidenterprise.entitlements.get({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Entitlement](#entitlement)

### entitlements.patch
Adds or updates an entitlement to an app for a user. This method supports patch semantics.


```js
google_androidenterprise.entitlements.patch({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Entitlement](#entitlement)

### entitlements.update
Adds or updates an entitlement to an app for a user.


```js
google_androidenterprise.entitlements.update({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Entitlement](#entitlement)

### managedconfigurationsforuser.list
Lists all the per-user managed configurations for the specified user. Only the ID is set.


```js
google_androidenterprise.managedconfigurationsforuser.list({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ManagedConfigurationsForUserListResponse](#managedconfigurationsforuserlistresponse)

### managedconfigurationsforuser.delete
Removes a per-user managed configuration for an app for the specified user.


```js
google_androidenterprise.managedconfigurationsforuser.delete({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### managedconfigurationsforuser.get
Retrieves details of a per-user managed configuration for an app for the specified user.


```js
google_androidenterprise.managedconfigurationsforuser.get({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ManagedConfiguration](#managedconfiguration)

### managedconfigurationsforuser.patch
Adds or updates a per-user managed configuration for an app for the specified user. This method supports patch semantics.


```js
google_androidenterprise.managedconfigurationsforuser.patch({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ManagedConfiguration](#managedconfiguration)

### managedconfigurationsforuser.update
Adds or updates a per-user managed configuration for an app for the specified user.


```js
google_androidenterprise.managedconfigurationsforuser.update({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ManagedConfiguration](#managedconfiguration)

### users.revokeToken
Revokes a previously generated token (activation code) for the user.


```js
google_androidenterprise.users.revokeToken({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### users.generateToken
Generates a token (activation code) to allow this user to configure their managed account in the Android Setup Wizard. Revokes any previously generated token.

This call only works with Google managed accounts.


```js
google_androidenterprise.users.generateToken({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * enterpriseId **required** `string`: The ID of the enterprise.
  * userId **required** `string`: The ID of the user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UserToken](#usertoken)

### permissions.get
Retrieves details of an Android app permission for display to an enterprise admin.


```js
google_androidenterprise.permissions.get({
  "permissionId": ""
}, context)
```

#### Input
* input `object`
  * permissionId **required** `string`: The ID of the permission.
  * language `string`: The BCP47 tag for the user's preferred language (e.g. "en-US", "de")
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Permission](#permission)



## Definitions

### Administrator
* Administrator `object`: This represents an enterprise admin who can manage the enterprise in the managed Google Play store.
  * email `string`: The admin's email address.

### AdministratorWebToken
* AdministratorWebToken `object`: A token authorizing an admin to access an iframe.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#administratorWebToken".
  * token `string`: An opaque token to be passed to the Play front-end to generate an iframe.

### AdministratorWebTokenSpec
* AdministratorWebTokenSpec `object`: Specification for a token used to generate iframes. The token specifies what data the admin is allowed to modify and the URI the iframe is allowed to communiate with.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#administratorWebTokenSpec".
  * parent `string`: The URI of the parent frame hosting the iframe. To prevent XSS, the iframe may not be hosted at other URIs. This URI must be https.
  * permission `array`: The list of permissions the admin is granted within the iframe. The admin will only be allowed to view an iframe if they have all of the permissions associated with it. The only valid value is "approveApps" that will allow the admin to access the iframe in "approve" mode.
    * items `string`

### AndroidDevicePolicyConfig
* AndroidDevicePolicyConfig `object`: The Android Device Policy configuration of an enterprise.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#androidDevicePolicyConfig".
  * state `string`: The state of Android Device Policy. "enabled" indicates that Android Device Policy is enabled for the enterprise and the EMM is allowed to manage devices with Android Device Policy, while "disabled" means that it cannot.

### AppRestrictionsSchema
* AppRestrictionsSchema `object`: Represents the list of app restrictions available to be pre-configured for the product.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#appRestrictionsSchema".
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
  * restrictionType `string`: The type of the restriction.
  * title `string`: The name of the restriction.

### AppRestrictionsSchemaRestrictionRestrictionValue
* AppRestrictionsSchemaRestrictionRestrictionValue `object`: A typed value for the restriction.
  * type `string`: The type of the value being provided.
  * valueBool `boolean`: The boolean value - this will only be present if type is bool.
  * valueInteger `integer`: The integer value - this will only be present if type is integer.
  * valueMultiselect `array`: The list of string values - this will only be present if type is multiselect.
    * items `string`
  * valueString `string`: The string value - this will be present for types string, choice and hidden.

### AppUpdateEvent
* AppUpdateEvent `object`: An event generated when a new version of an app is uploaded to Google Play. Notifications are sent for new public versions only: alpha, beta, or canary versions do not generate this event. To fetch up-to-date version history for an app, use Products.Get on the EMM API.
  * productId `string`: The id of the product (e.g. "app:com.google.android.gm") that was updated. This field will always be present.

### AppVersion
* AppVersion `object`: This represents a single version of the app.
  * track `string`: The track that this app was published in. For example if track is "alpha", this is an alpha version of the app.
  * versionCode `integer`: Unique increasing identifier for the app version.
  * versionString `string`: The string used in the Play store by the app developer to identify the version. The string is not necessarily unique or localized (for example, the string could be "1.4").

### ApprovalUrlInfo
* ApprovalUrlInfo `object`: Information on an approval URL.
  * approvalUrl `string`: A URL that displays a product's permissions and that can also be used to approve the product with the Products.approve call.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#approvalUrlInfo".

### AuthenticationToken
* AuthenticationToken `object`: An AuthenticationToken is used by the EMM's device policy client on a device to provision the given EMM-managed user on that device.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#authenticationToken".
  * token `string`: The authentication token to be passed to the device policy client on the device where it can be used to provision the account for which this token was generated.

### Device
* Device `object`: A Devices resource represents a mobile device managed by the EMM and belonging to a specific enterprise user.
  * androidId `string`: The Google Play Services Android ID for the device encoded as a lowercase hex string. For example, "123456789abcdef0".
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#device".
  * managementType `string`: Identifies the extent to which the device is controlled by a managed Google Play EMM in various deployment configurations.

### DeviceState
* DeviceState `object`: The state of a user's device, as accessed by the getState and setState methods on device resources.
  * accountState `string`: The state of the Google account on the device. "enabled" indicates that the Google account on the device can be used to access Google services (including Google Play), while "disabled" means that it cannot. A new device is initially in the "disabled" state.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#deviceState".

### DevicesListResponse
* DevicesListResponse `object`: The device resources for the user.
  * device `array`: A managed device.
    * items [Device](#device)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#devicesListResponse".

### Enterprise
* Enterprise `object`: An Enterprises resource represents the binding between an EMM and a specific organization. That binding can be instantiated in one of two different ways using this API as follows: 
  * administrator `array`: Admins of the enterprise. This is only supported for enterprises created via the EMM-initiated flow.
    * items [Administrator](#administrator)
  * id `string`: The unique ID for the enterprise.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#enterprise".
  * name `string`: The name of the enterprise, for example, "Example, Inc".
  * primaryDomain `string`: The enterprise's primary domain, such as "example.com".

### EnterpriseAccount
* EnterpriseAccount `object`: A service account that can be used to authenticate as the enterprise to API calls that require such authentication.
  * accountEmail `string`: The email address of the service account.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#enterpriseAccount".

### EnterprisesListResponse
* EnterprisesListResponse `object`: The matching enterprise resources.
  * enterprise `array`: An enterprise.
    * items [Enterprise](#enterprise)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#enterprisesListResponse".

### EnterprisesSendTestPushNotificationResponse
* EnterprisesSendTestPushNotificationResponse `object`
  * messageId `string`: The message ID of the test push notification that was sent.
  * topicName `string`: The name of the Cloud Pub/Sub topic to which notifications for this enterprise's enrolled account will be sent.

### Entitlement
* Entitlement `object`: The presence of an Entitlements resource indicates that a user has the right to use a particular app. Entitlements are user specific, not device specific. This allows a user with an entitlement to an app to install the app on all their devices. It's also possible for a user to hold an entitlement to an app without installing the app on any device.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#entitlement".
  * productId `string`: The ID of the product that the entitlement is for. For example, "app:com.google.android.gm".
  * reason `string`: The reason for the entitlement. For example, "free" for free apps. This property is temporary: it will be replaced by the acquisition kind field of group licenses.

### EntitlementsListResponse
* EntitlementsListResponse `object`: The entitlement resources for the user.
  * entitlement `array`: An entitlement of a user to a product (e.g. an app). For example, a free app that they have installed, or a paid app that they have been allocated a license to.
    * items [Entitlement](#entitlement)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#entitlementsListResponse".

### GroupLicense
* GroupLicense `object`: Group license objects allow you to keep track of licenses (called entitlements) for both free and paid apps. For a free app, a group license is created when an enterprise admin first approves the product in Google Play or when the first entitlement for the product is created for a user via the API. For a paid app, a group license object is only created when an enterprise admin purchases the product in Google Play for the first time.
  * acquisitionKind `string`: How this group license was acquired. "bulkPurchase" means that this Grouplicenses resource was created because the enterprise purchased licenses for this product; otherwise, the value is "free" (for free products).
  * approval `string`: Whether the product to which this group license relates is currently approved by the enterprise. Products are approved when a group license is first created, but this approval may be revoked by an enterprise admin via Google Play. Unapproved products will not be visible to end users in collections, and new entitlements to them should not normally be created.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#groupLicense".
  * numProvisioned `integer`: The total number of provisioned licenses for this product. Returned by read operations, but ignored in write operations.
  * numPurchased `integer`: The number of purchased licenses (possibly in multiple purchases). If this field is omitted, then there is no limit on the number of licenses that can be provisioned (for example, if the acquisition kind is "free").
  * permissions `string`: The permission approval status of the product. This field is only set if the product is approved. Possible states are: 
  * productId `string`: The ID of the product that the license is for. For example, "app:com.google.android.gm".

### GroupLicenseUsersListResponse
* GroupLicenseUsersListResponse `object`: The user resources for the group license.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#groupLicenseUsersListResponse".
  * user `array`: A user of an enterprise.
    * items [User](#user)

### GroupLicensesListResponse
* GroupLicensesListResponse `object`: The grouplicense resources for the enterprise.
  * groupLicense `array`: A group license for a product approved for use in the enterprise.
    * items [GroupLicense](#grouplicense)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#groupLicensesListResponse".

### Install
* Install `object`: The existence of an Installs resource indicates that an app is installed on a particular device (or that an install is pending).
  * installState `string`: Install state. The state "installPending" means that an install request has recently been made and download to the device is in progress. The state "installed" means that the app has been installed. This field is read-only.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#install".
  * productId `string`: The ID of the product that the install is for. For example, "app:com.google.android.gm".
  * versionCode `integer`: The version of the installed product. Guaranteed to be set only if the install state is "installed".

### InstallFailureEvent
* InstallFailureEvent `object`: An event generated when an app installation failed on a device
  * deviceId `string`: The Android ID of the device. This field will always be present.
  * failureDetails `string`: Additional details on the failure if applicable.
  * failureReason `string`: The reason for the installation failure. This field will always be present.
  * productId `string`: The id of the product (e.g. "app:com.google.android.gm") for which the install failure event occured. This field will always be present.
  * userId `string`: The ID of the user. This field will always be present.

### InstallsListResponse
* InstallsListResponse `object`: The install resources for the device.
  * install `array`: An installation of an app for a user on a specific device. The existence of an install implies that the user must have an entitlement to the app.
    * items [Install](#install)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#installsListResponse".

### LocalizedText
* LocalizedText `object`: A localized string with its locale.
  * locale `string`: The BCP47 tag for a locale. (e.g. "en-US", "de").
  * text `string`: The text localized in the associated locale.

### ManagedConfiguration
* ManagedConfiguration `object`: A managed configuration resource contains the set of managed properties that have been configured for an Android app. The app's developer would have defined configurable properties in the managed configurations schema.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#managedConfiguration".
  * managedProperty `array`: The set of managed properties for this configuration.
    * items [ManagedProperty](#managedproperty)
  * productId `string`: The ID of the product that the managed configuration is for, e.g. "app:com.google.android.gm".

### ManagedConfigurationsForDeviceListResponse
* ManagedConfigurationsForDeviceListResponse `object`: The managed configuration resources for the device.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#managedConfigurationsForDeviceListResponse".
  * managedConfigurationForDevice `array`: A managed configuration for an app on a specific device.
    * items [ManagedConfiguration](#managedconfiguration)

### ManagedConfigurationsForUserListResponse
* ManagedConfigurationsForUserListResponse `object`: The managed configuration resources for the user.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#managedConfigurationsForUserListResponse".
  * managedConfigurationForUser `array`: A managed configuration for an app for a specific user.
    * items [ManagedConfiguration](#managedconfiguration)

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
  * managementType `string`: Identifies the extent to which the device is controlled by an Android EMM in various deployment configurations.
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
  * enterpriseId `string`: The ID of the enterprise for which the notification is sent. This will always be present.
  * installFailureEvent [InstallFailureEvent](#installfailureevent)
  * newDeviceEvent [NewDeviceEvent](#newdeviceevent)
  * newPermissionsEvent [NewPermissionsEvent](#newpermissionsevent)
  * notificationType `string`: Type of the notification.
  * productApprovalEvent [ProductApprovalEvent](#productapprovalevent)
  * productAvailabilityChangeEvent [ProductAvailabilityChangeEvent](#productavailabilitychangeevent)
  * timestampMillis `string`: The time when the notification was published in milliseconds since 1970-01-01T00:00:00Z. This will always be present.

### NotificationSet
* NotificationSet `object`: A resource returned by the PullNotificationSet API, which contains a collection of notifications for enterprises associated with the service account authenticated for the request.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#notificationSet".
  * notification `array`: The notifications received, or empty if no notifications are present.
    * items [Notification](#notification)
  * notificationSetId `string`: The notification set ID, required to mark the notification as received with the Enterprises.AcknowledgeNotification API. This will be omitted if no notifications are present.

### PageInfo
* PageInfo `object`
  * resultPerPage `integer`
  * startIndex `integer`
  * totalResults `integer`

### Permission
* Permission `object`: A Permissions resource represents some extra capability, to be granted to an Android app, which requires explicit consent. An enterprise admin must consent to these permissions on behalf of their users before an entitlement for the app can be created.
  * description `string`: A longer description of the Permissions resource, giving more details of what it affects.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#permission".
  * name `string`: The name of the permission.
  * permissionId `string`: An opaque string uniquely identifying the permission.

### Product
* Product `object`: A Products resource represents an app in the Google Play store that is available to at least some users in the enterprise. (Some apps are restricted to a single enterprise, and no information about them is made available outside that enterprise.)
  * appVersion `array`: App versions currently available for this product.
    * items [AppVersion](#appversion)
  * authorName `string`: The name of the author of the product (for example, the app developer).
  * availableTracks `array`: The tracks that are visible to the enterprise.
    * items `string`
  * detailsUrl `string`: A link to the (consumer) Google Play details page for the product.
  * distributionChannel `string`: How and to whom the package is made available. The value publicGoogleHosted means that the package is available through the Play store and not restricted to a specific enterprise. The value privateGoogleHosted means that the package is a private app (restricted to an enterprise) but hosted by Google. The value privateSelfHosted means that the package is a private app (restricted to an enterprise) and is privately hosted.
  * iconUrl `string`: A link to an image that can be used as an icon for the product. This image is suitable for use at up to 512px x 512px.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#product".
  * productId `string`: A string of the form app:<package name>. For example, app:com.google.android.gm represents the Gmail app.
  * productPricing `string`: Whether this product is free, free with in-app purchases, or paid. If the pricing is unknown, this means the product is not generally available anymore (even though it might still be available to people who own it).
  * requiresContainerApp `boolean`: Deprecated.
  * signingCertificate [ProductSigningCertificate](#productsigningcertificate)
  * smallIconUrl `string`: A link to a smaller image that can be used as an icon for the product. This image is suitable for use at up to 128px x 128px.
  * title `string`: The name of the product.
  * workDetailsUrl `string`: A link to the managed Google Play details page for the product, for use by an Enterprise admin.

### ProductApprovalEvent
* ProductApprovalEvent `object`: An event generated when a product's approval status is changed.
  * approved `string`: Whether the product was approved or unapproved. This field will always be present.
  * productId `string`: The id of the product (e.g. "app:com.google.android.gm") for which the approval status has changed. This field will always be present.

### ProductAvailabilityChangeEvent
* ProductAvailabilityChangeEvent `object`: An event generated whenever a product's availability changes.
  * availabilityStatus `string`: The new state of the product. This field will always be present.
  * productId `string`: The id of the product (e.g. "app:com.google.android.gm") for which the product availability changed. This field will always be present.

### ProductPermission
* ProductPermission `object`: A product permissions resource represents the set of permissions required by a specific app and whether or not they have been accepted by an enterprise admin.
  * permissionId `string`: An opaque string uniquely identifying the permission.
  * state `string`: Whether the permission has been accepted or not.

### ProductPermissions
* ProductPermissions `object`: Information about the permissions required by a specific app and whether they have been accepted by the enterprise.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#productPermissions".
  * permission `array`: The permissions required by the app.
    * items [ProductPermission](#productpermission)
  * productId `string`: The ID of the app that the permissions relate to, e.g. "app:com.google.android.gm".

### ProductSet
* ProductSet `object`: A set of products.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#productSet".
  * productId `array`: The list of product IDs making up the set of products.
    * items `string`
  * productSetBehavior `string`: The interpretation of this product set. "unknown" should never be sent and is ignored if received. "whitelist" means that the user is entitled to access the product set. "includeAll" means that all products are accessible, including products that are approved, products with revoked approval, and products that have never been approved. "allApproved" means that the user is entitled to access all products that are approved for the enterprise. If the value is "allApproved" or "includeAll", the productId field is ignored. If no value is provided, it is interpreted as "whitelist" for backwards compatibility. Further "allApproved" or "includeAll" does not enable automatic visibility of "alpha" or "beta" tracks for Android app. Use ProductVisibility to enable "alpha" or "beta" tracks per user.
  * productVisibility `array`: Additional list of product IDs making up the product set. Unlike the productID array, in this list It's possible to specify which tracks (alpha, beta, production) of a product are visible to the user. See ProductVisibility and its fields for more information. Specifying the same product ID both here and in the productId array is not allowed and it will result in an error.
    * items [ProductVisibility](#productvisibility)

### ProductSigningCertificate
* ProductSigningCertificate `object`
  * certificateHashSha1 `string`: The base64 urlsafe encoded SHA1 hash of the certificate. (This field is deprecated in favor of SHA2-256. It should not be used and may be removed at any time.)
  * certificateHashSha256 `string`: The base64 urlsafe encoded SHA2-256 hash of the certificate.

### ProductVisibility
* ProductVisibility `object`: A product to be made visible to a user.
  * productId `string`: The product ID to make visible to the user. Required for each item in the productVisibility list.
  * tracks `array`: Grants visibility to the specified track(s) of the product to the user. The track available to the user is based on the following order of preference: alpha, beta, production. For example, if an app has a prod version, a beta version and an alpha version and the enterprise has been granted visibility to both the alpha and beta tracks, if tracks is {"beta", "production"} the user will be able to install the app and they will get the beta version of the app. If there are no app versions in the specified track adding the "alpha" and "beta" values to the list of tracks will have no effect. Note that the enterprise requires access to alpha and/or beta tracks before users can be granted visibility to apps in those tracks.
    * items `string`

### ProductsApproveRequest
* ProductsApproveRequest `object`
  * approvalUrlInfo [ApprovalUrlInfo](#approvalurlinfo)
  * approvedPermissions `string`: Sets how new permission requests for the product are handled. "allPermissions" automatically approves all current and future permissions for the product. "currentPermissionsOnly" approves the current set of permissions for the product, but any future permissions added through updates will require manual reapproval. If not specified, only the current set of permissions will be approved.

### ProductsGenerateApprovalUrlResponse
* ProductsGenerateApprovalUrlResponse `object`
  * url `string`: A URL that can be rendered in an iframe to display the permissions (if any) of a product. This URL can be used to approve the product only once and only within 24 hours of being generated, using the Products.approve call. If the product is currently unapproved and has no permissions, this URL will point to an empty page. If the product is currently approved, a URL will only be generated if that product has added permissions since it was last approved, and the URL will only display those new permissions that have not yet been accepted.

### ProductsListResponse
* ProductsListResponse `object`: The matching products.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#productsListResponse".
  * pageInfo [PageInfo](#pageinfo)
  * product `array`: Information about a product (e.g. an app) in the Google Play store, for display to an enterprise admin.
    * items [Product](#product)
  * tokenPagination [TokenPagination](#tokenpagination)

### ServiceAccount
* ServiceAccount `object`: A service account identity, including the name and credentials that can be used to authenticate as the service account.
  * key [ServiceAccountKey](#serviceaccountkey)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#serviceAccount".
  * name `string`: The account name of the service account, in the form of an email address. Assigned by the server.

### ServiceAccountKey
* ServiceAccountKey `object`: Credentials that can be used to authenticate as a service account.
  * data `string`: The body of the private key credentials file, in string format. This is only populated when the ServiceAccountKey is created, and is not stored by Google.
  * id `string`: An opaque, unique identifier for this ServiceAccountKey. Assigned by the server.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#serviceAccountKey".
  * publicData `string`: Public key data for the credentials file. This is an X.509 cert. If you are using the googleCredentials key type, this is identical to the cert that can be retrieved by using the X.509 cert url inside of the credentials file.
  * type `string`: The file format of the generated key data.

### ServiceAccountKeysListResponse
* ServiceAccountKeysListResponse `object`
  * serviceAccountKey `array`: The service account credentials.
    * items [ServiceAccountKey](#serviceaccountkey)

### SignupInfo
* SignupInfo `object`: A resource returned by the GenerateSignupUrl API, which contains the Signup URL and Completion Token.
  * completionToken `string`: An opaque token that will be required, along with the Enterprise Token, for obtaining the enterprise resource from CompleteSignup.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#signupInfo".
  * url `string`: A URL under which the Admin can sign up for an enterprise. The page pointed to cannot be rendered in an iframe.

### StoreCluster
* StoreCluster `object`: Definition of a managed Google Play store cluster, a list of products displayed as part of a store page.
  * id `string`: Unique ID of this cluster. Assigned by the server. Immutable once assigned.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#storeCluster".
  * name `array`: Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry.
    * items [LocalizedText](#localizedtext)
  * orderInPage `string`: String (US-ASCII only) used to determine order of this cluster within the parent page's elements. Page elements are sorted in lexicographic order of this field. Duplicated values are allowed, but ordering between elements with duplicate order is undefined.
  * productId `array`: List of products in the order they are displayed in the cluster. There should not be duplicates within a cluster.
    * items `string`

### StoreLayout
* StoreLayout `object`: General setting for the managed Google Play store layout, currently only specifying the page to display the first time the store is opened.
  * homepageId `string`: The ID of the store page to be used as the homepage. The homepage is the first page shown in the managed Google Play Store.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#storeLayout".
  * storeLayoutType `string`: The store layout type. By default, this value is set to "basic" if the homepageId field is not set, and to "custom" otherwise. If set to "basic", the layout will consist of all approved apps that have been whitelisted for the user.

### StoreLayoutClustersListResponse
* StoreLayoutClustersListResponse `object`: The store page resources for the enterprise.
  * cluster `array`: A store cluster of an enterprise.
    * items [StoreCluster](#storecluster)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#storeLayoutClustersListResponse".

### StoreLayoutPagesListResponse
* StoreLayoutPagesListResponse `object`: The store page resources for the enterprise.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#storeLayoutPagesListResponse".
  * page `array`: A store page of an enterprise.
    * items [StorePage](#storepage)

### StorePage
* StorePage `object`: Definition of a managed Google Play store page, made of a localized name and links to other pages. A page also contains clusters defined as a subcollection.
  * id `string`: Unique ID of this page. Assigned by the server. Immutable once assigned.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#storePage".
  * link `array`: Ordered list of pages a user should be able to reach from this page. The pages must exist, must not be this page, and once a link is created the page linked to cannot be deleted until all links to it are removed. It is recommended that the basic pages are created first, before adding the links between pages.
    * items `string`
  * name `array`: Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry.
    * items [LocalizedText](#localizedtext)

### TokenPagination
* TokenPagination `object`
  * nextPageToken `string`
  * previousPageToken `string`

### User
* User `object`: A Users resource represents an account associated with an enterprise. The account may be specific to a device or to an individual user (who can then use the account across multiple devices). The account may provide access to managed Google Play only, or to other Google services, depending on the identity model: 
  * accountIdentifier `string`: A unique identifier you create for this user, such as "user342" or "asset#44418". Do not use personally identifiable information (PII) for this property. Must always be set for EMM-managed users. Not set for Google-managed users.
  * accountType `string`: The type of account that this user represents. A userAccount can be installed on multiple devices, but a deviceAccount is specific to a single device. An EMM-managed user (emmManaged) can be either type (userAccount, deviceAccount), but a Google-managed user (googleManaged) is always a userAccount.
  * displayName `string`: The name that will appear in user interfaces. Setting this property is optional when creating EMM-managed users. If you do set this property, use something generic about the organization (such as "Example, Inc.") or your name (as EMM). Not used for Google-managed user accounts.
  * id `string`: The unique ID for the user.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#user".
  * managementType `string`: The entity that manages the user. With googleManaged users, the source of truth is Google so EMMs have to make sure a Google Account exists for the user. With emmManaged users, the EMM is in charge.
  * primaryEmail `string`: The user's primary email address, for example, "jsmith@example.com". Will always be set for Google managed users and not set for EMM managed users.

### UserToken
* UserToken `object`: A UserToken is used by a user when setting up a managed device or profile with their managed Google Play account on a device. When the user enters their email address and token (activation code) the appropriate EMM app can be automatically downloaded.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#userToken".
  * token `string`: The token (activation code) to be entered by the user. This consists of a sequence of decimal digits. Note that the leading digit may be 0.
  * userId `string`: The unique ID for the user.

### UsersListResponse
* UsersListResponse `object`: The matching user resources.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidenterprise#usersListResponse".
  * user `array`: A user of an enterprise.
    * items [User](#user)


