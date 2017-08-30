# @datafire/google_androidenterprise

Client library for Google Play EMM

## Installation and Usage
```bash
npm install --save datafire @datafire/google_androidenterprise
```

```js
let datafire = require('datafire');
let google_androidenterprise = require('@datafire/google_androidenterprise').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_androidenterprise.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### enterprises.list
Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.


```js
google_androidenterprise.enterprises.list({
  "domain": ""
}, context)
```

#### Parameters
* domain (string) **required** - The exact primary domain name of the enterprise to look up.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### enterprises.insert
Establishes the binding between the EMM and an enterprise. This is now deprecated; use enroll instead.


```js
google_androidenterprise.enterprises.insert({
  "token": ""
}, context)
```

#### Parameters
* token (string) **required** - The token provided by the enterprise to register the EMM.
* body (object) - An Enterprises resource represents the binding between an EMM and a specific organization. That binding can be instantiated in one of two different ways using this API as follows: 
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### enterprises.acknowledgeNotificationSet
Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.


```js
google_androidenterprise.enterprises.acknowledgeNotificationSet({}, context)
```

#### Parameters
* notificationSetId (string) - The notification set ID as returned by Enterprises.PullNotificationSet. This must be provided.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### enterprises.completeSignup
Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.


```js
google_androidenterprise.enterprises.completeSignup({}, context)
```

#### Parameters
* completionToken (string) - The Completion token initially returned by GenerateSignupUrl.
* enterpriseToken (string) - The Enterprise token appended to the Callback URL.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### enterprises.enroll
Enrolls an enterprise with the calling EMM.


```js
google_androidenterprise.enterprises.enroll({
  "token": ""
}, context)
```

#### Parameters
* token (string) **required** - The token provided by the enterprise to register the EMM.
* body (object) - An Enterprises resource represents the binding between an EMM and a specific organization. That binding can be instantiated in one of two different ways using this API as follows: 
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### enterprises.pullNotificationSet
Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending.
A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty.
Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy.
Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending.
If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.


```js
google_androidenterprise.enterprises.pullNotificationSet({}, context)
```

#### Parameters
* requestMode (string) - The request mode for pulling notifications.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### enterprises.generateSignupUrl
Generates a sign-up URL.


```js
google_androidenterprise.enterprises.generateSignupUrl({}, context)
```

#### Parameters
* callbackUrl (string) - The callback URL to which the Admin will be redirected after successfully creating an enterprise. Before redirecting there the system will add a single query parameter to this URL named "enterpriseToken" which will contain an opaque token to be used for the CompleteSignup request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### enterprises.delete
Deletes the binding between the EMM and enterprise. This is now deprecated. Use this method only to unenroll customers that were previously enrolled with the insert call, then enroll them again with the enroll call.


```js
google_androidenterprise.enterprises.delete({
  "enterpriseId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### enterprises.get
Retrieves the name and domain of an enterprise.


```js
google_androidenterprise.enterprises.get({
  "enterpriseId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### enterprises.setAccount
Sets the account that will be used to authenticate to the API as the enterprise.


```js
google_androidenterprise.enterprises.setAccount({
  "enterpriseId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* body (object) - A service account that can be used to authenticate as the enterprise to API calls that require such authentication.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### enterprises.createWebToken
Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the javascript API documentation for further information.


```js
google_androidenterprise.enterprises.createWebToken({
  "enterpriseId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* body (object) - Specification for a token used to generate iframes. The token specifies what data the admin is allowed to modify and the URI the iframe is allowed to communiate with.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### grouplicenses.list
Retrieves IDs of all products for which the enterprise has a group license.


```js
google_androidenterprise.grouplicenses.list({
  "enterpriseId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### grouplicenses.get
Retrieves details of an enterprise's group license for a product.


```js
google_androidenterprise.grouplicenses.get({
  "enterpriseId": "",
  "groupLicenseId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* groupLicenseId (string) **required** - The ID of the product the group license is for, e.g. "app:com.google.android.gm".
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### grouplicenseusers.list
Retrieves the IDs of the users who have been granted entitlements under the license.


```js
google_androidenterprise.grouplicenseusers.list({
  "enterpriseId": "",
  "groupLicenseId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* groupLicenseId (string) **required** - The ID of the product the group license is for, e.g. "app:com.google.android.gm".
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### products.list
Finds approved products that match a query, or all approved products if there is no query.


```js
google_androidenterprise.products.list({
  "enterpriseId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* approved (boolean) - Specifies whether to search among all products (false) or among only products that have been approved (true). Only "true" is supported, and should be specified.
* language (string) - The BCP47 tag for the user's preferred language (e.g. "en-US", "de"). Results are returned in the language best matching the preferred language.
* maxResults (integer) - Specifies the maximum number of products that can be returned per request. If not specified, uses a default value of 100, which is also the maximum retrievable within a single response.
* query (string) - The search query as typed in the Google Play store search box. If omitted, all approved apps will be returned (using the pagination parameters), including apps that are not available in the store (e.g. unpublished apps).
* token (string) - A pagination token is contained in a request''s response when there are more products. The token can be used in a subsequent request to obtain more products, and so forth. This parameter cannot be used in the initial request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### products.get
Retrieves details of a product for display to an enterprise admin.


```js
google_androidenterprise.products.get({
  "enterpriseId": "",
  "productId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* productId (string) **required** - The ID of the product, e.g. "app:com.google.android.gm".
* language (string) - The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### products.getAppRestrictionsSchema
Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.


```js
google_androidenterprise.products.getAppRestrictionsSchema({
  "enterpriseId": "",
  "productId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* productId (string) **required** - The ID of the product.
* language (string) - The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### products.approve
Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000.

To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design.


```js
google_androidenterprise.products.approve({
  "enterpriseId": "",
  "productId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* productId (string) **required** - The ID of the product.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### products.generateApprovalUrl
Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product.

Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day.


```js
google_androidenterprise.products.generateApprovalUrl({
  "enterpriseId": "",
  "productId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* productId (string) **required** - The ID of the product.
* languageCode (string) - The BCP 47 language code used for permission names and descriptions in the returned iframe, for instance "en-US".
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### products.getPermissions
Retrieves the Android app permissions required by this app.


```js
google_androidenterprise.products.getPermissions({
  "enterpriseId": "",
  "productId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* productId (string) **required** - The ID of the product.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### products.unapprove
Unapproves the specified product (and the relevant app permissions, if any)


```js
google_androidenterprise.products.unapprove({
  "enterpriseId": "",
  "productId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* productId (string) **required** - The ID of the product.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### enterprises.sendTestPushNotification
Sends a test push notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.


```js
google_androidenterprise.enterprises.sendTestPushNotification({
  "enterpriseId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* keyType (string) - The type of credential to return with the service account. Required.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### serviceaccountkeys.list
Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.


```js
google_androidenterprise.serviceaccountkeys.list({
  "enterpriseId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### serviceaccountkeys.insert
Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.

Only the type of the key should be populated in the resource to be inserted.


```js
google_androidenterprise.serviceaccountkeys.insert({
  "enterpriseId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* body (object) - Credentials that can be used to authenticate as a service account.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### serviceaccountkeys.delete
Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.


```js
google_androidenterprise.serviceaccountkeys.delete({
  "enterpriseId": "",
  "keyId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* keyId (string) **required** - The ID of the key.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### enterprises.getStoreLayout
Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.


```js
google_androidenterprise.enterprises.getStoreLayout({
  "enterpriseId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### enterprises.setStoreLayout
Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the  setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.


```js
google_androidenterprise.enterprises.setStoreLayout({
  "enterpriseId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* body (object) - General setting for the managed Google Play store layout, currently only specifying the page to display the first time the store is opened.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### storelayoutpages.list
Retrieves the details of all pages in the store.


```js
google_androidenterprise.storelayoutpages.list({
  "enterpriseId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### storelayoutpages.insert
Inserts a new store page.


```js
google_androidenterprise.storelayoutpages.insert({
  "enterpriseId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* body (object) - Definition of a managed Google Play store page, made of a localized name and links to other pages. A page also contains clusters defined as a subcollection.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### storelayoutpages.delete
Deletes a store page.


```js
google_androidenterprise.storelayoutpages.delete({
  "enterpriseId": "",
  "pageId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* pageId (string) **required** - The ID of the page.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### storelayoutpages.get
Retrieves details of a store page.


```js
google_androidenterprise.storelayoutpages.get({
  "enterpriseId": "",
  "pageId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* pageId (string) **required** - The ID of the page.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### storelayoutpages.patch
Updates the content of a store page. This method supports patch semantics.


```js
google_androidenterprise.storelayoutpages.patch({
  "enterpriseId": "",
  "pageId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* pageId (string) **required** - The ID of the page.
* body (object) - Definition of a managed Google Play store page, made of a localized name and links to other pages. A page also contains clusters defined as a subcollection.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### storelayoutpages.update
Updates the content of a store page.


```js
google_androidenterprise.storelayoutpages.update({
  "enterpriseId": "",
  "pageId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* pageId (string) **required** - The ID of the page.
* body (object) - Definition of a managed Google Play store page, made of a localized name and links to other pages. A page also contains clusters defined as a subcollection.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### storelayoutclusters.list
Retrieves the details of all clusters on the specified page.


```js
google_androidenterprise.storelayoutclusters.list({
  "enterpriseId": "",
  "pageId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* pageId (string) **required** - The ID of the page.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### storelayoutclusters.insert
Inserts a new cluster in a page.


```js
google_androidenterprise.storelayoutclusters.insert({
  "enterpriseId": "",
  "pageId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* pageId (string) **required** - The ID of the page.
* body (object) - Definition of a managed Google Play store cluster, a list of products displayed as part of a store page.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### storelayoutclusters.delete
Deletes a cluster.


```js
google_androidenterprise.storelayoutclusters.delete({
  "enterpriseId": "",
  "pageId": "",
  "clusterId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* pageId (string) **required** - The ID of the page.
* clusterId (string) **required** - The ID of the cluster.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### storelayoutclusters.get
Retrieves details of a cluster.


```js
google_androidenterprise.storelayoutclusters.get({
  "enterpriseId": "",
  "pageId": "",
  "clusterId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* pageId (string) **required** - The ID of the page.
* clusterId (string) **required** - The ID of the cluster.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### storelayoutclusters.patch
Updates a cluster. This method supports patch semantics.


```js
google_androidenterprise.storelayoutclusters.patch({
  "enterpriseId": "",
  "pageId": "",
  "clusterId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* pageId (string) **required** - The ID of the page.
* clusterId (string) **required** - The ID of the cluster.
* body (object) - Definition of a managed Google Play store cluster, a list of products displayed as part of a store page.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### storelayoutclusters.update
Updates a cluster.


```js
google_androidenterprise.storelayoutclusters.update({
  "enterpriseId": "",
  "pageId": "",
  "clusterId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* pageId (string) **required** - The ID of the page.
* clusterId (string) **required** - The ID of the cluster.
* body (object) - Definition of a managed Google Play store cluster, a list of products displayed as part of a store page.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### enterprises.unenroll
Unenrolls an enterprise from the calling EMM.


```js
google_androidenterprise.enterprises.unenroll({
  "enterpriseId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.list
Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call.


```js
google_androidenterprise.users.list({
  "enterpriseId": "",
  "email": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* email (string) **required** - The exact primary email address of the user to look up.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.insert
Creates a new EMM-managed user.

The Users resource passed in the body of the request should include an accountIdentifier and an accountType.
If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.


```js
google_androidenterprise.users.insert({
  "enterpriseId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* body (object) - A Users resource represents an account associated with an enterprise. The account may be specific to a device or to an individual user (who can then use the account across multiple devices). The account may provide access to managed Google Play only, or to other Google services, depending on the identity model: 
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.delete
Deleted an EMM-managed user.


```js
google_androidenterprise.users.delete({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.get
Retrieves a user's details.


```js
google_androidenterprise.users.get({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.patch
Updates the details of an EMM-managed user.

Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value. This method supports patch semantics.


```js
google_androidenterprise.users.patch({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* body (object) - A Users resource represents an account associated with an enterprise. The account may be specific to a device or to an individual user (who can then use the account across multiple devices). The account may provide access to managed Google Play only, or to other Google services, depending on the identity model: 
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.update
Updates the details of an EMM-managed user.

Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value.


```js
google_androidenterprise.users.update({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* body (object) - A Users resource represents an account associated with an enterprise. The account may be specific to a device or to an individual user (who can then use the account across multiple devices). The account may provide access to managed Google Play only, or to other Google services, depending on the identity model: 
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.generateAuthenticationToken
Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes.

This call only works with EMM-managed accounts.


```js
google_androidenterprise.users.generateAuthenticationToken({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.getAvailableProductSet
Retrieves the set of products a user is entitled to access.


```js
google_androidenterprise.users.getAvailableProductSet({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.setAvailableProductSet
Modifies the set of products that a user is entitled to access (referred to as whitelisted products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted.


```js
google_androidenterprise.users.setAvailableProductSet({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* body (object) - A set of products.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### devices.list
Retrieves the IDs of all of a user's devices.


```js
google_androidenterprise.devices.list({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### devices.get
Retrieves the details of a device.


```js
google_androidenterprise.devices.get({
  "enterpriseId": "",
  "userId": "",
  "deviceId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* deviceId (string) **required** - The ID of the device.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### installs.list
Retrieves the details of all apps installed on the specified device.


```js
google_androidenterprise.installs.list({
  "enterpriseId": "",
  "userId": "",
  "deviceId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* deviceId (string) **required** - The Android ID of the device.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* deviceId (string) **required** - The Android ID of the device.
* installId (string) **required** - The ID of the product represented by the install, e.g. "app:com.google.android.gm".
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* deviceId (string) **required** - The Android ID of the device.
* installId (string) **required** - The ID of the product represented by the install, e.g. "app:com.google.android.gm".
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* deviceId (string) **required** - The Android ID of the device.
* installId (string) **required** - The ID of the product represented by the install, e.g. "app:com.google.android.gm".
* body (object) - The existence of an Installs resource indicates that an app is installed on a particular device (or that an install is pending).
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* deviceId (string) **required** - The Android ID of the device.
* installId (string) **required** - The ID of the product represented by the install, e.g. "app:com.google.android.gm".
* body (object) - The existence of an Installs resource indicates that an app is installed on a particular device (or that an install is pending).
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### managedconfigurationsfordevice.list
Lists all the per-device managed configurations for the specified device. Only the ID is set.


```js
google_androidenterprise.managedconfigurationsfordevice.list({
  "enterpriseId": "",
  "userId": "",
  "deviceId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* deviceId (string) **required** - The Android ID of the device.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* deviceId (string) **required** - The Android ID of the device.
* managedConfigurationForDeviceId (string) **required** - The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* deviceId (string) **required** - The Android ID of the device.
* managedConfigurationForDeviceId (string) **required** - The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* deviceId (string) **required** - The Android ID of the device.
* managedConfigurationForDeviceId (string) **required** - The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
* body (object) - A managed configuration resource contains the set of managed properties that have been configured for an Android app. The app's developer would have defined configurable properties in the managed configurations schema.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* deviceId (string) **required** - The Android ID of the device.
* managedConfigurationForDeviceId (string) **required** - The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
* body (object) - A managed configuration resource contains the set of managed properties that have been configured for an Android app. The app's developer would have defined configurable properties in the managed configurations schema.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### devices.getState
Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.


```js
google_androidenterprise.devices.getState({
  "enterpriseId": "",
  "userId": "",
  "deviceId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* deviceId (string) **required** - The ID of the device.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### devices.setState
Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.


```js
google_androidenterprise.devices.setState({
  "enterpriseId": "",
  "userId": "",
  "deviceId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* deviceId (string) **required** - The ID of the device.
* body (object) - The state of a user's device, as accessed by the getState and setState methods on device resources.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### entitlements.list
Lists all entitlements for the specified user. Only the ID is set.


```js
google_androidenterprise.entitlements.list({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### entitlements.delete
Removes an entitlement to an app for a user.


```js
google_androidenterprise.entitlements.delete({
  "enterpriseId": "",
  "userId": "",
  "entitlementId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* entitlementId (string) **required** - The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### entitlements.get
Retrieves details of an entitlement.


```js
google_androidenterprise.entitlements.get({
  "enterpriseId": "",
  "userId": "",
  "entitlementId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* entitlementId (string) **required** - The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### entitlements.patch
Adds or updates an entitlement to an app for a user. This method supports patch semantics.


```js
google_androidenterprise.entitlements.patch({
  "enterpriseId": "",
  "userId": "",
  "entitlementId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* entitlementId (string) **required** - The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
* install (boolean) - Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user.
* body (object) - The presence of an Entitlements resource indicates that a user has the right to use a particular app. Entitlements are user specific, not device specific. This allows a user with an entitlement to an app to install the app on all their devices. It's also possible for a user to hold an entitlement to an app without installing the app on any device.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### entitlements.update
Adds or updates an entitlement to an app for a user.


```js
google_androidenterprise.entitlements.update({
  "enterpriseId": "",
  "userId": "",
  "entitlementId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* entitlementId (string) **required** - The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
* install (boolean) - Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user.
* body (object) - The presence of an Entitlements resource indicates that a user has the right to use a particular app. Entitlements are user specific, not device specific. This allows a user with an entitlement to an app to install the app on all their devices. It's also possible for a user to hold an entitlement to an app without installing the app on any device.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### managedconfigurationsforuser.list
Lists all the per-user managed configurations for the specified user. Only the ID is set.


```js
google_androidenterprise.managedconfigurationsforuser.list({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### managedconfigurationsforuser.delete
Removes a per-user managed configuration for an app for the specified user.


```js
google_androidenterprise.managedconfigurationsforuser.delete({
  "enterpriseId": "",
  "userId": "",
  "managedConfigurationForUserId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* managedConfigurationForUserId (string) **required** - The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### managedconfigurationsforuser.get
Retrieves details of a per-user managed configuration for an app for the specified user.


```js
google_androidenterprise.managedconfigurationsforuser.get({
  "enterpriseId": "",
  "userId": "",
  "managedConfigurationForUserId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* managedConfigurationForUserId (string) **required** - The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### managedconfigurationsforuser.patch
Adds or updates a per-user managed configuration for an app for the specified user. This method supports patch semantics.


```js
google_androidenterprise.managedconfigurationsforuser.patch({
  "enterpriseId": "",
  "userId": "",
  "managedConfigurationForUserId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* managedConfigurationForUserId (string) **required** - The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
* body (object) - A managed configuration resource contains the set of managed properties that have been configured for an Android app. The app's developer would have defined configurable properties in the managed configurations schema.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### managedconfigurationsforuser.update
Adds or updates a per-user managed configuration for an app for the specified user.


```js
google_androidenterprise.managedconfigurationsforuser.update({
  "enterpriseId": "",
  "userId": "",
  "managedConfigurationForUserId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* managedConfigurationForUserId (string) **required** - The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
* body (object) - A managed configuration resource contains the set of managed properties that have been configured for an Android app. The app's developer would have defined configurable properties in the managed configurations schema.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.revokeToken
Revokes a previously generated token (activation code) for the user.


```js
google_androidenterprise.users.revokeToken({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.generateToken
Generates a token (activation code) to allow this user to configure their managed account in the Android Setup Wizard. Revokes any previously generated token.

This call only works with Google managed accounts.


```js
google_androidenterprise.users.generateToken({
  "enterpriseId": "",
  "userId": ""
}, context)
```

#### Parameters
* enterpriseId (string) **required** - The ID of the enterprise.
* userId (string) **required** - The ID of the user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### permissions.get
Retrieves details of an Android app permission for display to an enterprise admin.


```js
google_androidenterprise.permissions.get({
  "permissionId": ""
}, context)
```

#### Parameters
* permissionId (string) **required** - The ID of the permission.
* language (string) - The BCP47 tag for the user's preferred language (e.g. "en-US", "de")
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

