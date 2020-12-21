# @datafire/google_reseller

Client library for Google Workspace Reseller API

## Installation and Usage
```bash
npm install --save @datafire/google_reseller
```
```js
let google_reseller = require('@datafire/google_reseller').create({
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

Perform common functions that are available on the Channel Services console at scale, like placing orders and viewing customer information

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_reseller.oauthCallback({
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
google_reseller.oauthRefresh(null, context)
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

### reseller.customers.insert
Order a new customer's account.


```js
google_reseller.reseller.customers.insert({}, context)
```

#### Input
* input `object`
  * customerAuthToken `string`: The customerAuthToken query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
  * body [Customer](#customer)
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
* output [Customer](#customer)

### reseller.customers.get
Get a customer account.


```js
google_reseller.reseller.customers.get({
  "customerId": ""
}, context)
```

#### Input
* input `object`
  * customerId **required** `string`: Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
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
* output [Customer](#customer)

### reseller.customers.patch
Patch a customer account's settings via Apiary Patch Orchestration


```js
google_reseller.reseller.customers.patch({
  "customerId": ""
}, context)
```

#### Input
* input `object`
  * customerId **required** `string`: Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
  * body [Customer](#customer)
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
* output [Customer](#customer)

### reseller.customers.update
Update a customer account's settings.


```js
google_reseller.reseller.customers.update({
  "customerId": ""
}, context)
```

#### Input
* input `object`
  * customerId **required** `string`: Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
  * body [Customer](#customer)
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
* output [Customer](#customer)

### reseller.subscriptions.insert
Create or transfer a subscription.


```js
google_reseller.reseller.subscriptions.insert({
  "customerId": ""
}, context)
```

#### Input
* input `object`
  * customerId **required** `string`: Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
  * customerAuthToken `string`: The customerAuthToken query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
  * body [Subscription](#subscription)
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
* output [Subscription](#subscription)

### reseller.subscriptions.delete
Cancel, suspend, or transfer a subscription to direct.


```js
google_reseller.reseller.subscriptions.delete({
  "customerId": "",
  "subscriptionId": "",
  "deletionType": ""
}, context)
```

#### Input
* input `object`
  * customerId **required** `string`: Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
  * subscriptionId **required** `string`: This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
  * deletionType **required** `string` (values: deletion_type_undefined, cancel, transfer_to_direct): The deletionType query string enables the cancellation, downgrade, or suspension of a subscription.
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

### reseller.subscriptions.get
Get a specific subscription.


```js
google_reseller.reseller.subscriptions.get({
  "customerId": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * customerId **required** `string`: Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
  * subscriptionId **required** `string`: This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
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
* output [Subscription](#subscription)

### reseller.subscriptions.activate
Activates a subscription previously suspended by the reseller


```js
google_reseller.reseller.subscriptions.activate({
  "customerId": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * customerId **required** `string`: Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
  * subscriptionId **required** `string`: This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
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
* output [Subscription](#subscription)

### reseller.subscriptions.changePlan
Update a subscription plan. Use this method to update a plan for a 30-day trial or a flexible plan subscription to an annual commitment plan with monthly or yearly payments.


```js
google_reseller.reseller.subscriptions.changePlan({
  "customerId": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * customerId **required** `string`: Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
  * subscriptionId **required** `string`: This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
  * body [ChangePlanRequest](#changeplanrequest)
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
* output [Subscription](#subscription)

### reseller.subscriptions.changeRenewalSettings
Update a user license's renewal settings. This is applicable for accounts with annual commitment plans only.


```js
google_reseller.reseller.subscriptions.changeRenewalSettings({
  "customerId": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * customerId **required** `string`: Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
  * subscriptionId **required** `string`: This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
  * body [RenewalSettings](#renewalsettings)
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
* output [Subscription](#subscription)

### reseller.subscriptions.changeSeats
Update a subscription's user license settings.


```js
google_reseller.reseller.subscriptions.changeSeats({
  "customerId": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * customerId **required** `string`: Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
  * subscriptionId **required** `string`: This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
  * body [Seats](#seats)
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
* output [Subscription](#subscription)

### reseller.subscriptions.startPaidService
Immediately move a 30-day free trial subscription to a paid service subscription.


```js
google_reseller.reseller.subscriptions.startPaidService({
  "customerId": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * customerId **required** `string`: Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
  * subscriptionId **required** `string`: This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
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
* output [Subscription](#subscription)

### reseller.subscriptions.suspend
Suspends an active subscription.


```js
google_reseller.reseller.subscriptions.suspend({
  "customerId": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * customerId **required** `string`: Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
  * subscriptionId **required** `string`: This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
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
* output [Subscription](#subscription)

### reseller.resellernotify.getwatchdetails
Returns all the details of the watch corresponding to the reseller.


```js
google_reseller.reseller.resellernotify.getwatchdetails({}, context)
```

#### Input
* input `object`
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
* output [ResellernotifyGetwatchdetailsResponse](#resellernotifygetwatchdetailsresponse)

### reseller.resellernotify.register
Registers a Reseller for receiving notifications.


```js
google_reseller.reseller.resellernotify.register({}, context)
```

#### Input
* input `object`
  * serviceAccountEmailAddress `string`: The service account which will own the created Cloud-PubSub topic.
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
* output [ResellernotifyResource](#resellernotifyresource)

### reseller.resellernotify.unregister
Unregisters a Reseller for receiving notifications.


```js
google_reseller.reseller.resellernotify.unregister({}, context)
```

#### Input
* input `object`
  * serviceAccountEmailAddress `string`: The service account which owns the Cloud-PubSub topic.
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
* output [ResellernotifyResource](#resellernotifyresource)

### reseller.subscriptions.list
List of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's transferable subscriptions.


```js
google_reseller.reseller.subscriptions.list({}, context)
```

#### Input
* input `object`
  * customerAuthToken `string`: The customerAuthToken query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
  * customerId `string`: Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
  * customerNamePrefix `string`: When retrieving all of your subscriptions and filtering for specific customers, you can enter a prefix for a customer name. Using an example customer group that includes exam.com, example20.com and example.com: - exa -- Returns all customer names that start with 'exa' which could include exam.com, example20.com, and example.com. A name prefix is similar to using a regular expression's asterisk, exa*. - example -- Returns example20.com and example.com. 
  * maxResults `integer`: When retrieving a large list, the maxResults is the maximum number of results per page. The nextPageToken value takes you to the next page. The default is 20.
  * pageToken `string`: Token to specify next page in the list
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
* output [Subscriptions](#subscriptions)



## Definitions

### Address
* Address `object`: JSON template for address of a customer.
  * addressLine1 `string`: A customer's physical address. An address can be composed of one to three lines. The addressline2 and addressLine3 are optional.
  * addressLine2 `string`: Line 2 of the address.
  * addressLine3 `string`: Line 3 of the address.
  * contactName `string`: The customer contact's name. This is required.
  * countryCode `string`: For countryCode information, see the ISO 3166 country code elements. Verify that country is approved for resale of Google products. This property is required when creating a new customer.
  * kind `string`: Identifies the resource as a customer address. Value: customers#address
  * locality `string`: An example of a locality value is the city of San Francisco.
  * organizationName `string`: The company or company division name. This is required.
  * postalCode `string`: A postalCode example is a postal zip code such as 94043. This property is required when creating a new customer.
  * region `string`: An example of a region value is CA for the state of California.

### ChangePlanRequest
* ChangePlanRequest `object`: JSON template for the ChangePlan rpc request.
  * dealCode `string`: Google-issued code (100 char max) for discounted pricing on subscription plans. Deal code must be included in changePlan request in order to receive discounted rate. This property is optional. If a deal code has already been added to a subscription, this property may be left empty and the existing discounted rate will still apply (if not empty, only provide the deal code that is already present on the subscription). If a deal code has never been added to a subscription and this property is left blank, regular pricing will apply.
  * kind `string`: Identifies the resource as a subscription change plan request. Value: subscriptions#changePlanRequest
  * planName `string`: The planName property is required. This is the name of the subscription's payment plan. For more information about the Google payment plans, see API concepts. Possible values are: - ANNUAL_MONTHLY_PAY - The annual commitment plan with monthly payments *Caution: *ANNUAL_MONTHLY_PAY is returned as ANNUAL in all API responses. - ANNUAL_YEARLY_PAY - The annual commitment plan with yearly payments - FLEXIBLE - The flexible plan - TRIAL - The 30-day free trial plan 
  * purchaseOrderId `string`: This is an optional property. This purchase order (PO) information is for resellers to use for their company tracking usage. If a purchaseOrderId value is given it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters.
  * seats [Seats](#seats)

### Customer
* Customer `object`: JSON template for a customer.
  * alternateEmail `string`: Like the "Customer email" in the reseller tools, this email is the secondary contact used if something happens to the customer's service such as service outage or a security issue. This property is required when creating a new customer and should not use the same domain as customerDomain .
  * customerDomain `string`: The customer's primary domain name string. customerDomain is required when creating a new customer. Do not include the www prefix in the domain when adding a customer.
  * customerDomainVerified `boolean`: Whether the customer's primary domain has been verified.
  * customerId `string`: This property will always be returned in a response as the unique identifier generated by Google. In a request, this property can be either the primary domain or the unique identifier generated by Google.
  * kind `string`: Identifies the resource as a customer. Value: reseller#customer
  * phoneNumber `string`: Customer contact phone number. Must start with "+" followed by the country code. The rest of the number can be contiguous numbers or respect the phone local format conventions, but it must be a real phone number and not, for example, "123". This field is silently ignored if invalid.
  * postalAddress [Address](#address)
  * resourceUiUrl `string`: URL to customer's Admin console dashboard. The read-only URL is generated by the API service. This is used if your client application requires the customer to complete a task in the Admin console.

### RenewalSettings
* RenewalSettings `object`: JSON template for a subscription renewal settings.
  * kind `string`: Identifies the resource as a subscription renewal setting. Value: subscriptions#renewalSettings
  * renewalType `string`: Renewal settings for the annual commitment plan. For more detailed information, see renewal options in the administrator help center. When renewing a subscription, the renewalType is a required property.

### ResellernotifyGetwatchdetailsResponse
* ResellernotifyGetwatchdetailsResponse `object`: JSON template for resellernotify getwatchdetails response.
  * serviceAccountEmailAddresses `array`: List of registered service accounts.
    * items `string`
  * topicName `string`: Topic name of the PubSub

### ResellernotifyResource
* ResellernotifyResource `object`: JSON template for resellernotify response.
  * topicName `string`: Topic name of the PubSub

### Seats
* Seats `object`: JSON template for subscription seats.
  * kind `string`: Identifies the resource as a subscription seat setting. Value: subscriptions#seats
  * licensedNumberOfSeats `integer`: Read-only field containing the current number of users that are assigned a license for the product defined in skuId. This field's value is equivalent to the numerical count of users returned by the Enterprise License Manager API method: listForProductAndSku
  * maximumNumberOfSeats `integer`: This is a required property and is exclusive to subscriptions with FLEXIBLE or TRIAL plans. This property sets the maximum number of licensed users allowed on a subscription. This quantity can be increased up to the maximum limit defined in the reseller's contract. The minimum quantity is the current number of users in the customer account. *Note: *G Suite subscriptions automatically assign a license to every user.
  * numberOfSeats `integer`: This is a required property and is exclusive to subscriptions with ANNUAL_MONTHLY_PAY and ANNUAL_YEARLY_PAY plans. This property sets the maximum number of licenses assignable to users on a subscription. The reseller can add more licenses, but once set, the numberOfSeats cannot be reduced until renewal. The reseller is invoiced based on the numberOfSeats value regardless of how many of these user licenses are assigned. *Note: *G Suite subscriptions automatically assign a license to every user.

### Subscription
* Subscription `object`: JSON template for a subscription.
  * billingMethod `string`: Read-only field that returns the current billing method for a subscription.
  * creationTime `string`: The creationTime property is the date when subscription was created. It is in milliseconds using the Epoch format. See an example Epoch converter.
  * customerDomain `string`: Primary domain name of the customer
  * customerId `string`: This property will always be returned in a response as the unique identifier generated by Google. In a request, this property can be either the primary domain or the unique identifier generated by Google.
  * dealCode `string`: Google-issued code (100 char max) for discounted pricing on subscription plans. Deal code must be included in insert requests in order to receive discounted rate. This property is optional, regular pricing applies if left empty.
  * kind `string`: Identifies the resource as a Subscription. Value: reseller#subscription
  * plan `object`: The plan property is required. In this version of the API, the G Suite plans are the flexible plan, annual commitment plan, and the 30-day free trial plan. For more information about the API"s payment plans, see the API concepts.
    * commitmentInterval `object`: In this version of the API, annual commitment plan's interval is one year. *Note: *When billingMethod value is OFFLINE, the subscription property object plan.commitmentInterval is omitted in all API responses. 
      * endTime `string`: An annual commitment plan's interval's endTime in milliseconds using the UNIX Epoch format. See an example Epoch converter.
      * startTime `string`: An annual commitment plan's interval's startTime in milliseconds using UNIX Epoch format. See an example Epoch converter.
    * isCommitmentPlan `boolean`: The isCommitmentPlan property's boolean value identifies the plan as an annual commitment plan: - true — The subscription's plan is an annual commitment plan. - false — The plan is not an annual commitment plan. 
    * planName `string`: The planName property is required. This is the name of the subscription's plan. For more information about the Google payment plans, see the API concepts. Possible values are: - ANNUAL_MONTHLY_PAY — The annual commitment plan with monthly payments. *Caution: *ANNUAL_MONTHLY_PAY is returned as ANNUAL in all API responses. - ANNUAL_YEARLY_PAY — The annual commitment plan with yearly payments - FLEXIBLE — The flexible plan - TRIAL — The 30-day free trial plan. A subscription in trial will be suspended after the 30th free day if no payment plan is assigned. Calling changePlan will assign a payment plan to a trial but will not activate the plan. A trial will automatically begin its assigned payment plan after its 30th free day or immediately after calling startPaidService. - FREE — The free plan is exclusive to the Cloud Identity SKU and does not incur any billing. 
  * purchaseOrderId `string`: This is an optional property. This purchase order (PO) information is for resellers to use for their company tracking usage. If a purchaseOrderId value is given it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters.
  * renewalSettings [RenewalSettings](#renewalsettings)
  * resourceUiUrl `string`: URL to customer's Subscriptions page in the Admin console. The read-only URL is generated by the API service. This is used if your client application requires the customer to complete a task using the Subscriptions page in the Admin console.
  * seats [Seats](#seats)
  * skuId `string`: A required property. The skuId is a unique system identifier for a product's SKU assigned to a customer in the subscription. For products and SKUs available in this version of the API, see Product and SKU IDs.
  * skuName `string`: Read-only external display name for a product's SKU assigned to a customer in the subscription. SKU names are subject to change at Google's discretion. For products and SKUs available in this version of the API, see Product and SKU IDs.
  * status `string`: This is an optional property.
  * subscriptionId `string`: The subscriptionId is the subscription identifier and is unique for each customer. This is a required property. Since a subscriptionId changes when a subscription is updated, we recommend not using this ID as a key for persistent data. Use the subscriptionId as described in retrieve all reseller subscriptions.
  * suspensionReasons `array`: Read-only field containing an enumerable of all the current suspension reasons for a subscription. It is possible for a subscription to have many concurrent, overlapping suspension reasons. A subscription's STATUS is SUSPENDED until all pending suspensions are removed. Possible options include: - PENDING_TOS_ACCEPTANCE - The customer has not logged in and accepted the G Suite Resold Terms of Services. - RENEWAL_WITH_TYPE_CANCEL - The customer's commitment ended and their service was cancelled at the end of their term. - RESELLER_INITIATED - A manual suspension invoked by a Reseller. - TRIAL_ENDED - The customer's trial expired without a plan selected. - OTHER - The customer is suspended for an internal Google reason (e.g. abuse or otherwise). 
    * items `string`
  * transferInfo `object`: Read-only transfer related information for the subscription. For more information, see retrieve transferable subscriptions for a customer.
    * minimumTransferableSeats `integer`: When inserting a subscription, this is the minimum number of seats listed in the transfer order for this product. For example, if the customer has 20 users, the reseller cannot place a transfer order of 15 seats. The minimum is 20 seats.
    * transferabilityExpirationTime `string`: The time when transfer token or intent to transfer will expire. The time is in milliseconds using UNIX Epoch format.
  * trialSettings `object`: The G Suite annual commitment and flexible payment plans can be in a 30-day free trial. For more information, see the API concepts.
    * isInTrial `boolean`: Determines if a subscription's plan is in a 30-day free trial or not: - true — The plan is in trial. - false — The plan is not in trial. 
    * trialEndTime `string`: Date when the trial ends. The value is in milliseconds using the UNIX Epoch format. See an example Epoch converter.

### Subscriptions
* Subscriptions `object`: JSON template for a subscription list.
  * kind `string`: Identifies the resource as a collection of subscriptions. Value: reseller#subscriptions
  * nextPageToken `string`: The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
  * subscriptions `array`: The subscriptions in this page of results.
    * items [Subscription](#subscription)


