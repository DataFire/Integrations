# @datafire/linode

Client library for Linode

## Installation and Usage
```bash
npm install --save @datafire/linode
```
```js
let linode = require('@datafire/linode').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
  personalAccessToken: ""
});

.then(data => {
  console.log(data);
});
```

## Description

# Introduction
The Linode API provides the ability to programmatically manage the full
range of Linode products and services.

This reference is designed to assist application developers and system
administrators.  Each endpoint includes descriptions, request syntax, and
examples using standard HTTP requests. Response data is returned in JSON
format.


This document was generated from our OpenAPI Specification.  See the
<a target="_top" href="https://www.openapis.org">OpenAPI website</a> for more information.

<a target="_top" href="https://developers.linode.com/api/docs/v4/openapi.yaml">Download the Linode OpenAPI Specification</a>.


# Changelog

<a target="_top" href="https://developers.linode.com/changelog">View our Changelog</a> to see release
notes on all changes made to our API.

# Access and Authentication

Some endpoints are publicly accessible without requiring authentication.
All endpoints affecting your Account, however, require either a Personal
Access Token or OAuth authentication (when using third-party
applications).

## Personal Access Token

The easiest way to access the API is with a Personal Access Token (PAT)
generated from the
<a target="_top" href="https://cloud.linode.com/profile/tokens">Linode Cloud Manager</a>.

All scopes for the OAuth security model (defined below) apply to this
security model as well.

### Authentication

| Security Scheme Type: | HTTP |
|-----------------------|------|
| **HTTP Authorization Scheme** | bearer |

## OAuth

The OAuth workflow is a three-step process to authenticate a User before an
application can start making API calls on the User's behalf. If all you need
is a Personal Access Token, feel free to skip ahead to the next section.

First, the User visits the application's website and is directed to log with
Linode. The User is then redirected to Linode's authentication server and
presented the scope levels the application is requesting. Once the User
accepts the request for access, we redirect them back to the application's
specified redirect URI with an access code.

Once the User has logged in to Linode and you have received an exchange code,
you will need to exchange that access code for an Authorization token. You
do this by making an HTTP POST request to the following address:

```
https://login.linode.com/oauth/token
```

Make this request as `application/x-www-form-urlencoded` or as
`multipart/form-data` and include the following parameters in the POST body:

| PARAMETER | DESCRIPTION |
|-----------|-------------|
| client_id | Your app's client ID |
| client_secret | Your app's client secret |
| code | The code you just received from the redirect |

You'll get a reponse like this:

```json
{
  "scope": "linodes:read_write",
  "access_token": "03d084436a6c91fbafd5c4b20c82e5056a2e9ce1635920c30dc8d81dc7a6665c"
  "token_type": "bearer",
  "expires_in": 7200,
}
```

Included in the reponse is `access_token`. With this token, you can proceed to make
authenticated HTTP requests to the API by adding this header to each request:

```
Authorization: Bearer 03d084436a6c91fbafd5c4b20c82e5056a2e9ce1635920c30dc8d81dc7a6665c
```

### Authentication

| Security Scheme Type: | Oauth2 |
|-----------------------|--------|
| **AuthorizationCode Oauth Flow** |  **Authorization URL:** https://login.linode.com/oauth/authorize<br />**Token URL:** https://login.linode.com/oauth/token<br />**Scopes:**<br /><ul><li>`account:read_only` - Allows access to GET information about your Account.</li><li>`account:read_write` - Allows access to all endpoints related to your Account.</li><li>`domains:read_only` - Allows access to GET Domains on your Account.</li><li>`domains:read_write` - Allows access to all Domain endpoints.</li><li>`events:read_only` - Allows access to GET your Events.</li><li>`events:read_write` - Allows access to all endpoints related to your Events.</li><li>`images:read_only` - Allows access to GET your Images.</li><li>`images:read_write` - Allows access to all endpoints related to your Images.</li><li>`ips:read_only` - Allows access to GET your ips.</li><li>`ips:read_write` - Allows access to all endpoints related to your ips.</li><li>`linodes:read_only` - Allows access to GET Linodes on your Account.</li><li>`linodes:read_write` - Allow access to all endpoints related to your Linodes.</li><li>`longview:read_only` - Allows access to GET your Longview Clients.</li><li>`longview:read_write` - Allows access to all endpoints related to your Longview Clients.</li><li>`nodebalancers:read_only` - Allows access to GET NodeBalancers on your Account.</li><li>`nodebalancers:read_write` - Allows access to all NodeBalancer endpoints.</li><li>`stackscripts:read_only` - Allows access to GET your StackScripts.</li><li>`stackscripts:read_write` - Allows access to all endpoints related to your StackScripts.</li><li>`volumes:read_only` - Allows access to GET your Volumes.</li><li>`volumes:read_write` - Allows access to all endpoints related to your Volumes.</li></ul><br />|

# Requests

Requests must be made over HTTPS to ensure transactions are encrypted. The
following Request methods are supported:

| METHOD | USAGE |
|--------|-------|
| GET    | Retrieves data about collections and individual resources. |
| POST   | For collections, creates a new resource of that type. Also used to perform actions on action endpoints. |
| PUT    | Updates an existing resource. |
| DELETE | Deletes a resource. This is a destructive action. |


# Responses

Actions will return one following HTTP response status codes:

| STATUS  | DESCRIPTION |
|---------|-------------|
| 200 OK  | The request was successful. |
| 204 No Content | The server successfully fulfilled the request and there is no additional content to send. |
| 400 Bad Request | You submitted an invalid request (missing parameters, etc.). |
| 401 Unauthorized | You failed to authenticate for this resource. |
| 403 Forbidden | You are authenticated, but don't have permission to do this. |
| 404 Not Found | The resource you're requesting does not exist. |
| 429 Too Many Requests | You've hit a rate limit. |
| 500 Internal Server Error | Please [open a Support Ticket](/api/v4/support-tickets/#post). |

# Errors

Success is indicated via <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes" target="_top">Standard HTTP status codes</a>.
`2xx` codes indicate success, `4xx` codes indicate a request error, and
`5xx` errors indicate a server error. A
request error might be an invalid input, a required parameter being omitted,
or a malformed request. A server error means something went wrong processing
your request. If this occurs, please
[open a Support Ticket](/api/v4/support-tickets/#post)
and let us know. Though errors are logged and we work quickly to resolve issues,
opening a ticket and providing us with reproducable steps and data is always helpful.

The `errors` field is an array of the things that went wrong with your request.
We will try to include as many of the problems in the response as possible,
but it's conceivable that fixing these errors and resubmitting may result in
new errors coming back once we are able to get further along in the process
of handling your request.


Within each error object, the `field` parameter will be included if the error
pertains to a specific field in the JSON you've submitted. This will be
omitted if there is no relevant field. The `reason` is a human-readable
explanation of the error, and will always be included.

# Pagination

Resource lists are always paginated. The response will look similar to this:

```json
{
    "data": [ ... ],
    "page": 1,
    "pages": 3,
    "results": 300
}
```

* Pages start at 1. You may retrieve a specific page of results by adding
`?page=x` to your URL (for example, `?page=4`). If the value of `page`
exceeds `2^64/page_size`, the last possible page will be returned.


* Page sizes default to 100,
and can be set to return between 25 and 100. Page size can be set using
`?page_size=x`.

# Filtering and Sorting

Collections are searchable by fields they include, marked in the spec as
`x-linode-filterable: true`. Filters are passed
in the `X-Filter` header and are formatted as JSON objects. Here is a request
call for Linode Types in our "standard" class:

```Shell
curl "https://api.linode.com/v4/linode/types" \
  -H 'X-Filter: { \
    "class": "standard"
  }'
```

The filter object's keys are the keys of the object you're filtering,
and the values are accepted values. You can add multiple filters by
including more than one key. For example, filtering for "standard" Linode
Types that offer one vcpu:

```Shell
 curl "https://api.linode.com/v4/linode/types" \
  -H 'X-Filter: { \
    "class": "standard",
    "vcpus": 1
  }'
```

In the above example, both filters are combined with an "and" operation.
However, if you wanted either Types with one vcpu or Types in our "standard"
class, you can add an operator:

```Shell
curl "https://api.linode.com/v4/linode/types" \
  -H 'X-Filter: {
    "+or": [
      { "vcpus": 1 },
      { "class": "standard" }
    ]
  }'
```

Each filter in the `+or` array is its own filter object, and all conditions
in it are combined with an "and" operation as they were in the previous example.

Other operators are also available. Operators are keys of a Filter JSON
object. Their value must be of the appropriate type, and they are evaluated
as described below:

| OPERATOR | TYPE   | DESCRIPTION                       |
|----------|--------|-----------------------------------|
| +and     | array  | All conditions must be true.       |
| +or      | array  | One condition must be true.        |
| +gt      | number | Value must be greater than number. |
| +gte     | number | Value must be greater than or equal to number. |
| +lt      | number | Value must be less than number. |
| +lte     | number | Value must be less than or equal to number. |
| +contains | string | Given string must be in the value. |
| +neq      | string | Does not equal the value.          |
| +order_by | string | Attribute to order the results by - must be filterable. |
| +order    | string | Either "asc" or "desc". Defaults to "asc". Requires `+order_by`. |

For example, filtering for [Linode Types](/api/v4/linode-types)
that offer memory equal to or higher than 61440:

```Shell
curl "https://api.linode.com/v4/linode/types" \
  -H 'X-Filter: {
    "memory": {
      "+gte": 61440
    }
  }'
```

You can combine and nest operators to construct arbitrarily-complex queries.
For example, give me all [Linode Types](/api/v4/linode-types)
which are either `standard` or `highmem` class, or
have between 12 and 20 vcpus:

```Shell
curl "https://api.linode.com/v4/linode/types" \
  -H 'X-Filter: {
    "+or": [
      {
        "+or": [
          {
            "class": "standard"
          },
          {
            "class": "highmem"
          }
        ]
      },
      {
        "+and": [
          {
            "vcpus": {
              "+gte": 12
            }
          },
          {
            "vcpus": {
              "+lte": 20
            }
          }
        ]
      }
    ]
  }'
```

# CLI (Command Line Interface)

The <a href="https://github.com/linode/linode-cli" target="_top">Linode CLI</a> allows you to easily
work with the API using intuitive and simple syntax. It requires a
[Personal Access Token](#section/Personal-Access-Token)
for authentication, and gives you access to all of the features and functionality
of the Linode API that are documented here with CLI examples.

Endpoints that do not have CLI examples are currently unavailable through the CLI, but
can be accessed via other methods such as Shell commands and other third-party applications.

# APIv3

View the [Linode APIv3 Documentation](https://linode.com/apiv3).


## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
linode.oauthCallback({
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
linode.oauthRefresh(null, context)
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

### getAccount
Returns the contact and billing information related to your Account.



```js
linode.getAccount(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Account](#account)

### updateAccount
Updates contact and billing information related to your Account.



```js
linode.updateAccount({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Account](#account)

#### Output
* output [Account](#account)

### cancelAccount
Cancels an active Linode account. This action will cause Linode to attempt to charge the credit card on file for the remaining balance. An error will occur if Linode fails to charge the credit card on file. Restricted users will not be able to cancel an account.



```js
linode.cancelAccount({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * comments `string`: Any reason for cancelling the account, and any other comments you might have about your Linode service.

#### Output
* output `object`
  * survey_link `string`: A link to Linode's exit survey.

### createCreditCard
Adds/edit credit card information to your Account.
Only one credit card can be associated with your Account, so using this endpoint will overwrite your currently active card information with the new credit card.



```js
linode.createCreditCard({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required**
    * card_number **required** `string`: Your credit card number. No spaces or dashes allowed.
    * expiry_month **required** `integer`: A value from 1-12 representing the expiration month of your credit card.
    * expiry_year **required** `integer`: A four-digit integer representing the expiration year of your credit card.
    * cvv `string`: The Card Verification Value on the back of the card.

#### Output
* output `object`

### getEvents
Returns a collection of Event objects representing actions taken on your Account. The Events returned depends on your grants.



```js
linode.getEvents({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [Event](#event)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### getEvent
Returns a single Event object.


```js
linode.getEvent({
  "eventId": 0
}, context)
```

#### Input
* input `object`
  * eventId **required** `integer`: The ID of the Event.

#### Output
* output [Event](#event)

### eventRead
Marks a single Event as read.


```js
linode.eventRead({
  "eventId": 0
}, context)
```

#### Input
* input `object`
  * eventId **required** `integer`: The ID of the Event to designate as read.

#### Output
* output `object`

### eventSeen
Marks all Events up to and including this Event by ID as seen.



```js
linode.eventSeen({
  "eventId": 0
}, context)
```

#### Input
* input `object`
  * eventId **required** `integer`: The ID of the Event to designate as seen.

#### Output
* output `object`

### getInvoices
Returns a paginated list of Invoices against your Account.



```js
linode.getInvoices({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [Invoice](#invoice)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### getInvoice
Returns a single Invoice object.


```js
linode.getInvoice({
  "invoiceId": 0
}, context)
```

#### Input
* input `object`
  * invoiceId **required** `integer`: The ID of the Invoice.

#### Output
* output [Invoice](#invoice)

### getInvoiceItems
Returns a paginated list of Invoice items.


```js
linode.getInvoiceItems({
  "invoiceId": 0
}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.
  * invoiceId **required** `integer`: The ID of the Invoice.

#### Output
* output `object`
  * data `array`
    * items [InvoiceItem](#invoiceitem)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### getNotifications
Returns a collection of Notification objects representing important, often time-sensitive items related to your Account.
You cannot interact directly with Notifications, and a Notification will disappear when the circumstances causing it have been resolved. For example, if you have an important Ticket open, you must respond to the Ticket to dismiss the Notification.



```js
linode.getNotifications(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items [Notification](#notification)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### getClients
Returns a paginated list of OAuth Clients registered to your Account.  OAuth Clients allow users to log into applications you write or host using their Linode Account, and may allow them to grant some level of access to their Linodes or other entities to your application.



```js
linode.getClients({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [OAuthClient](#oauthclient)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### createClient
Creates an OAuth Client, which can be used to allow users (using their Linode account) to log in to your own application, and optionally grant your application some amount of access to their Linodes or other entities.



```js
linode.createClient({}, context)
```

#### Input
* input `object`
  * body
    * public `boolean`: Whether to create a public or private client.
    * id `string`: The OAuth Client ID.  This is used to identify the client, and is a publicly-known value (it is not a secret).
    * label `string`: The name of this application.  This will be presented to users when they are asked to grant it access to their Account.
    * public `boolean`: If this is a public or private OAuth Client.  Public clients have a slightly different authentication workflow than private clients.  See the <a target="_top" href="https://oauth.net/2/">OAuth spec</a> for more details.
    * redirect_uri `string`: The location a successful log in from <a target="_top" href="https://login.linode.com">https://login.linode.com</a> should be redirected to for this client.  The receiver of this redirect should be ready to accept an OAuth exchange code and finish the OAuth exchange.
    * secret `string`: The OAuth Client secret, used in the OAuth exchange.  This is returned as `<REDACTED>` except when an OAuth Client is created or its secret is reset.  This is a secret, and should not be shared or disclosed publicly.
    * status `string` (values: active, disabled, suspended): The status of this application.  `active` by default.
    * thumbnail_url `string`: The URL where this client's thumbnail may be viewed, or `null` if this client does not have a thumbnail set.
    * public `boolean`: Whether to create a public or private client.

#### Output
* output [OAuthClient](#oauthclient)

### deleteClient
Deletes an OAuth Client registered with Linode. The Client ID and Client secret will no longer be accepted by <a target="_top" href="https://login.linode.com">https://login.linode.com</a>, and all tokens issued to this client will be invalidated (meaning that if your application was using a token, it will no longer work).



```js
linode.deleteClient({
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * clientId **required** `string`: The OAuth Client ID to look up.

#### Output
* output `object`

### getClient
Returns information about a single OAuth client.



```js
linode.getClient({
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * clientId **required** `string`: The OAuth Client ID to look up.

#### Output
* output [OAuthClient](#oauthclient)

### updateClient
Update information about an OAuth Client on your Account. This can be especially useful to update the `redirect_uri` of your client in the event that the callback url changed in your application.



```js
linode.updateClient({
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * body [OAuthClient](#oauthclient)
  * clientId **required** `string`: The OAuth Client ID to look up.

#### Output
* output [OAuthClient](#oauthclient)

### resetClientSecret
Resets the OAuth Client secret for a client you own, and returns the OAuth Client with the plaintext secret. This secret is not supposed to be publicly known or disclosed anywhere. This can be used to generate a new secret in case the one you have has been leaked, or to get a new secret if you lost the original. The old secret is expired immediately, and logins to your client with the old secret will fail.



```js
linode.resetClientSecret({
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * clientId **required** `string`: The OAuth Client ID to look up.

#### Output
* output [OAuthClient](#oauthclient)

### getClientThumbnail
Returns the thumbnail for this OAuth Client.  This is a publicly-viewable endpoint, and can be accessed without authentication.



```js
linode.getClientThumbnail({
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * clientId **required** `string`: The OAuth Client ID to look up.

#### Output
* output `string`

### setClientThumbnail
Upload a thumbnail for a client you own.  You must upload an image file that will be returned when the thumbnail is retrieved.  This image will be publicly-viewable.



```js
linode.setClientThumbnail({
  "body": "",
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * body **required** `string`
  * clientId **required** `string`: The OAuth Client ID to look up.

#### Output
* output `object`

### getPayments
Returns a paginated list of Payments made on this Account.



```js
linode.getPayments({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [Payment](#payment)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### createPayment
Makes a Payment to your Account via credit card. This will charge your credit card the requested amount.



```js
linode.createPayment({
  "body": {
    "usd": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [PaymentRequest](#paymentrequest)

#### Output
* output [Payment](#payment)

### createPayPalPayment
This begins the process of submitting a Payment via PayPal. After calling this endpoint, you must take the resulting `payment_id` along with the `payer_id` from your PayPal account and [POST /account/payments/paypal-execute](/api/v4/account-payments-paypal-execute/#post) to complete the Payment.



```js
linode.createPayPalPayment({
  "body": {
    "cancel_url": "",
    "redirect_url": "",
    "usd": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [PayPal](#paypal)

#### Output
* output `object`
  * checkout_token `string`: The checkout token generated for this Payment.
  * payment_id `string`: The paypal-generated ID for this Payment. Used when authorizing the Payment in PayPal's interface.

### executePayPalPayment
Given a PaymentID and PayerID - as generated by PayPal during the transaction authorization process - this endpoint executes the Payment to capture the funds and credit your Linode Account.



```js
linode.executePayPalPayment({
  "body": {
    "payer_id": "",
    "payment_id": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [PayPalExecute](#paypalexecute)

#### Output
* output `object`

### getPayment
Returns information about a specific Payment.



```js
linode.getPayment({
  "paymentId": 0
}, context)
```

#### Input
* input `object`
  * paymentId **required** `integer`: The ID of the Payment to look up.

#### Output
* output [Payment](#payment)

### getAccountSettings
Returns information related to your Account settings: Managed service subscription, Longview subscription, and network helper.



```js
linode.getAccountSettings(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [AccountSettings](#accountsettings)

### updateAccountSettings
Updates your Account settings.



```js
linode.updateAccountSettings({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [AccountSettings](#accountsettings)

#### Output
* output [AccountSettings](#accountsettings)

### enableAccountManged
Enables Linode Managed for the entire account and sends a welcome email to the account's associated email address. Linode Managed can monitor any service or software stack reachable over TCP or HTTP. See our [Linode Managed guide](https://linode.com/docs/platform/linode-managed/) to learn more.



```js
linode.enableAccountManged(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### getTransfer
Returns a Transfer object showing your network utilization, in GB, for the current month.



```js
linode.getTransfer(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Transfer](#transfer)

### getUsers
Returns a paginated list of Users on your Account. Users may access all or part of your Account based on their restricted status and grants.  An unrestricted User may access everything on the account, whereas restricted User may only access entities or perform actions they've been given specific grants to.



```js
linode.getUsers({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [User](#user)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### createUser
Creates a User on your Account. Once created, the User will be able to log in and access portions of your Account. Access is determined by whether or not they are restricted, and what grants they have been given.



```js
linode.createUser({}, context)
```

#### Input
* input `object`
  * body `object`
    * email **required** `string`: The new User's email address.
    * restricted `boolean`: If true, the new User must be granted access to perform actions or access entities on this Account. See [/account/users/{username}/grants](/api/v4/account-users-username-grants) for details on how to configure grants for a restricted User.
    * username **required** `string`: The new User's username. This is used for logging in, and may also be displayed alongside actions the User performs (for example, in Events or public StackScripts).

#### Output
* output [User](#user)

### deleteUser
Deletes a User. The deleted User will be immediately logged out and may no longer log in or perform any actions. All of the User's Grants will be removed.



```js
linode.deleteUser({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: The username to look up.

#### Output
* output `object`

### getUser
Returns information about a single User on your Account.



```js
linode.getUser({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: The username to look up.

#### Output
* output [User](#user)

### updateUser
Update information about a User on your Account. This can be used to change the restricted status of a User. When making a User restricted, no grants will be configured by default and you must then set up grants in order for the User to access anything on the Account.



```js
linode.updateUser({
  "username": ""
}, context)
```

#### Input
* input `object`
  * body [User](#user)
  * username **required** `string`: The username to look up.

#### Output
* output [User](#user)

### getUserGrants
Returns the full grants structure for this User. This includes all entities on the Account alongside what level of access this User has to each of them. Individual users may view their own grants at the [/profile/grants](/api/v4/profile-grants) endpoint, but will not see entities that they have no access to.



```js
linode.getUserGrants({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: The username to look up.

#### Output
* output [GrantsResponse](#grantsresponse)

### updateUserGrants
Update the grants a User has. This can be used to give a User access to new entities or actions, or take access away.  You do not need to include the grant for every entity on the Account in this request; any that are not included will remain unchanged.



```js
linode.updateUserGrants({
  "body": {},
  "username": ""
}, context)
```

#### Input
* input `object`
  * body **required** [GrantsResponse](#grantsresponse)
  * username **required** `string`: The username to look up.

#### Output
* output [GrantsResponse](#grantsresponse)

### getDomains
This is a collection of Domains that you have registered in Linode's DNS Manager.  Linode is not a registrar, and in order for these to work you must own the domains and point your registrar at Linode's nameservers.



```js
linode.getDomains({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [Domain](#domain)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### createDomain
Adds a new Domain to Linode's DNS Manager. Linode is not a registrar, and you must own the domain before adding it here. Be sure to point your registrar to Linode's nameservers so that the records hosted here are used.



```js
linode.createDomain({
  "body": {
    "id": 0,
    "domain": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Domain](#domain)

#### Output
* output [Domain](#domain)

### importDomain
Imports a domain zone from a remote nameserver.
Your nameserver must allow zone transfers (AXFR) from the following IPs:
  - 96.126.114.97
  - 96.126.114.98
  - 2600:3c00::5e
  - 2600:3c00::5f



```js
linode.importDomain({}, context)
```

#### Input
* input `object`
  * body
    * domain `string`: The domain to import.
    * remote_nameserver `string`: The remote nameserver that allows zone transfers (AXFR).

#### Output
* output [Domain](#domain)

### deleteDomain
Deletes a Domain from Linode's DNS Manager. The Domain will be removed from Linode's nameservers shortly after this operation completes. This also deletes all associated Domain Records.



```js
linode.deleteDomain({
  "domainId": 0
}, context)
```

#### Input
* input `object`
  * domainId **required** `integer`: The ID of the Domain to access.

#### Output
* output `object`

### getDomain
This is a single Domain that you have registered in Linode's DNS Manager. Linode is not a registrar, and in order for this Domain record to work you must own the domain and point your registrar at Linode's nameservers.



```js
linode.getDomain({
  "domainId": 0
}, context)
```

#### Input
* input `object`
  * domainId **required** `integer`: The ID of the Domain to access.

#### Output
* output [Domain](#domain)

### updateDomain
Update information about a Domain in Linode's DNS Manager.



```js
linode.updateDomain({
  "body": {
    "id": 0,
    "domain": "",
    "type": ""
  },
  "domainId": 0
}, context)
```

#### Input
* input `object`
  * body **required** [Domain](#domain)
  * domainId **required** `integer`: The ID of the Domain to access.

#### Output
* output [Domain](#domain)

### cloneDomain
Clones a Domain and all associated DNS records from a Domain that is registered in Linode's DNS manager.



```js
linode.cloneDomain({
  "body": {
    "domain": ""
  },
  "domainId": ""
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * domain **required** `string`: The new domain being created.
  * domainId **required** `string`: ID of the Domain to clone.

#### Output
* output [Domain](#domain)

### getDomainRecords
Returns a paginated list of Records configured on a Domain in Linode's
DNS Manager.



```js
linode.getDomainRecords({
  "domainId": 0
}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.
  * domainId **required** `integer`: The ID of the Domain we are accessing Records for.

#### Output
* output `object`
  * data `array`
    * items [DomainRecord](#domainrecord)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### createDomainRecord
Adds a new Domain Record to the zonefile this Domain represents.



```js
linode.createDomainRecord({
  "body": null,
  "domainId": 0
}, context)
```

#### Input
* input `object`
  * body **required**
    * id `integer`: This Record's unique ID.
    * name `string`: The name of this Record. This field's actual usage depends on the type of record this represents. For A and AAAA records, this is the subdomain being associated with an IP address.
    * port `integer`: The port this Record points to.
    * priority `integer`: The priority of the target host. Lower values are preferred.
    * protocol `string`: The protocol this Record's service communicates with. Only valid for SRV records.
    * service `string`: The service this Record identified. Only valid for SRV records.
    * tag `string`: The tag portion of a CAA record. It is invalid to set this on other record types.
    * target `string`: The target for this Record. This field's actual usage depends on the type of record this represents. For A and AAAA records, this is the address the named Domain should resolve to.
    * ttl_sec `integer`: "Time to Live" - the amount of time in seconds that this Domain's records may be cached by resolvers or other domain servers. Valid values are 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200 - any other value will be rounded to the nearest valid value.
    * type `string` (values: A, AAAA, NS, MX, CNAME, TXT, SRV, PTR, CAA): The type of Record this is in the DNS system. For example, A records associate a domain name with an IPv4 address, and AAAA records associate a domain name with an IPv6 address.
    * weight `integer`: The relative weight of this Record. Higher values are preferred.
  * domainId **required** `integer`: The ID of the Domain we are accessing Records for.

#### Output
* output [DomainRecord](#domainrecord)

### deleteDomainRecord
Deletes a Record on this Domain.



```js
linode.deleteDomainRecord({
  "domainId": 0,
  "recordId": 0
}, context)
```

#### Input
* input `object`
  * domainId **required** `integer`: The ID of the Domain whose Record you are accessing.
  * recordId **required** `integer`: The ID of the Record you are accessing.

#### Output
* output `object`

### getDomainRecord
View a single Record on this Domain.



```js
linode.getDomainRecord({
  "domainId": 0,
  "recordId": 0
}, context)
```

#### Input
* input `object`
  * domainId **required** `integer`: The ID of the Domain whose Record you are accessing.
  * recordId **required** `integer`: The ID of the Record you are accessing.

#### Output
* output [DomainRecord](#domainrecord)

### updateDomainRecord
Updates a single Record on this Domain.



```js
linode.updateDomainRecord({
  "body": {},
  "domainId": 0,
  "recordId": 0
}, context)
```

#### Input
* input `object`
  * body **required** [DomainRecord](#domainrecord)
  * domainId **required** `integer`: The ID of the Domain whose Record you are accessing.
  * recordId **required** `integer`: The ID of the Record you are accessing.

#### Output
* output [DomainRecord](#domainrecord)

### getImages
Returns a paginated list of Images.

* Calling this endpoint without authentication returns all public Images.
* Authentication is required to return a combined paginated list of all public and
  your private Images.



```js
linode.getImages({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [ImagePublic](#imagepublic)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### createImage
Creates a private gold-master Image from a Linode Disk. There is no additional charge to store Images for Linode users.
Images are limited to three per Account.



```js
linode.createImage({}, context)
```

#### Input
* input `object`
  * body
    * created `string`: When this Image was created.
    * created_by `string`: The name of the User who created this Image.
    * deprecated `boolean`: Whether or not this Image is deprecated. Will only be True for deprecated public Images.
    * description `string`: A detailed description of this Image.
    * expiry `string`: Only Images created automatically (from a deleted Linode; type=automatic) will expire.
    * id `string`: The unique ID of this Image.
    * is_public `boolean`: True if the Image is public.
    * label `string`: A short description of the Image. Labels cannot contain special characters.
    * size `integer`: The minimum size this Image needs to deploy. Size is in MB.
    * type `string` (values: manual, automatic): How the Image was created. "Manual" Images can be created at any time. "Automatic" images are created automatically from a deleted Linode.
    * vendor `string`: The upstream distribution vendor. `None` for private Images.
    * description `string`: A detailed description of this Image.
    * disk_id `integer`: The ID of the Linode Disk that this Image will be created from.
    * label `string`: A short title of this Image. Defaults to the label of the Disk it is being created from if not provided.

#### Output
* output [ImagePrivate](#imageprivate)

### deleteImage
Deletes a private Image you have permission to `read_write`.


**Deleting an Image is a destructive action and cannot be undone.**



```js
linode.deleteImage({
  "imageId": ""
}, context)
```

#### Input
* input `object`
  * imageId **required** `string`: ID of the Image to look up.

#### Output
* output `object`

### getImage
Get information about a single Image.



```js
linode.getImage({
  "imageId": ""
}, context)
```

#### Input
* input `object`
  * imageId **required** `string`: ID of the Image to look up.

#### Output
* output [ImagePrivate](#imageprivate)

### updateImage
Updates a private Image that you have permission to `read_write`.



```js
linode.updateImage({
  "body": {},
  "imageId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [ImagePrivate](#imageprivate)
  * imageId **required** `string`: ID of the Image to look up.

#### Output
* output [ImagePrivate](#imageprivate)

### getLinodeInstances
Returns a paginated list of Linodes you have permission to view.



```js
linode.getLinodeInstances({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [Linode](#linode)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### createLinodeInstance
Creates a Linode Instance on your Account. In order for this
request to complete successfully, your User must have the `add_linodes` grant. Creating a
new Linode will incur a charge on your Account.

Linodes can be created using one of the available Types. See
[GET /linode/types](/api/v4/linode-types) to get more
information about each Type's specs and cost.

Linodes can be created in any one of our available
[Regions](/api/v4/regions) for a list
of available Regions you can deploy your Linode in.

Linodes can be created in a number of ways:

* Using a Linode Linux Distribution image or an Image you created based on another Linode.
  * The Linode will be `running` after it completes `provisioning`.
  * A default config with two Disks, one being a 512 swap disk, is created.
    * `swap_size` can be used to customize the swap disk size.
  * Requires a `root_pass` be supplied to use for the root User's Account.
  * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.
  * You may also supply a list of usernames via the `authorized_users` field.
    * These users must have an SSH Key associated with your Profile first. See [/profile/sshkeys](/api/v4/profile-sshkeys/#post) for more information.

* Using a StackScript.
  * See [/linode/stackscripts](/api/v4/linode-stackscripts) for
    a list of available StackScripts.
  * The Linode will be `running` after it completes `provisioning`.
  * Requires a compatible Image to be supplied.
    * See [/linode/stackscript/{stackscriptId}](/api/v4/linode-stackscripts-stackscript-id) for compatible Images.
  * Requires a `root_pass` be supplied to use for the root User's Account.
  * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.
  * You may also supply a list of usernames via the `authorized_users` field.
    * These users must have an SSH Key associated with your Profile first. See [/profile/sshkeys](/api/v4/profile-sshkeys/#post) for more information.

* Using one of your other Linode's backups.
  * You must create a Linode large enough to accommodate the Backup's size.
  * The Disks and Config will match that of the Linode that was backed up.
  * The `root_pass` will match that of the Linode that was backed up.

* Create an empty Linode.
  * The Linode will remain `offline` and must be manually started.
    * See [POST /linode/instances/{linodeId}/boot](/api/v4/linode-instances-linode-id-boot/#post).
  * Disks and Configs must be created manually.
  * This is only recommended for advanced use cases.


**Important**: You must be an unrestricted User in order to add or modify
tags on Linodes.



```js
linode.createLinodeInstance({
  "body": {
    "type": "",
    "region": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * tags [Linode/properties/tags](#linode/properties/tags)
    * authorized_keys `array`: A list of SSH public keys to deploy for the root user on the newly-created Linode.  Only accepted if `image` is provided.
      * items `string`
    * authorized_users `array`: A list of usernames. If the usernames have associated SSH keys, the keys will be appended to the root users `~/.ssh/authorized_keys` file automatically.
      * items `string`
    * backup_id `integer`: A Backup ID from another Linode's available backups. Your User must have
    * backups_enabled `boolean`: If this field is set to `true`, the created Linode will automatically be
    * booted `boolean`: Whether to boot this Linode after the deploy is complete. Defaults to true if `image` is provided. Not accepted if not deploying from an Image.
    * group [Linode/properties/group](#linode/properties/group)
    * image `string`: An Image ID to deploy the Disk from. Official Linode Images start with `linode/ `, while your Images start with `private/`.
    * label [Linode/properties/label](#linode/properties/label)
    * private_ip `boolean`: If true, the created Linode will have private networking enabled.
    * region **required** `string`: The [Region](/api/v4/regions) where the Linode will be located.
    * root_pass [DiskRequest/properties/root_pass](#diskrequest/properties/root_pass)
    * stackscript_data `object`: An object containing responses to any User Defined Fields present in the StackScript being deployed to this Linode. Only accepted if `stackscript_id` is given.  The required values depend on the StackScript being deployed.
    * stackscript_id `integer`: The StackScript to deploy to the newly-created Linode.  If provided, "image" must also be provided, and must be an Image that is compatible with this StackScript.
    * swap_size `integer`: When deploying from an Image, this field is optional, otherwise it is ignored. This is used to set the swap disk size for the newly-created Linode.
    * type **required** `string`: The [Linode Type](/api/v4/linode-types) of the Linode you are creating.

#### Output
* output [Linode](#linode)

### deleteLinodeInstance
Deletes a Linode you have permission to `read_write`.

**Deleting a Linode is a destructive action and cannot be undone.**

Additionally, deleting a Linode:

  * Gives up any IP addresses the Linode was assigned.
  * Deletes all Disks, Backups, Configs, etc.
  * Stops billing for the Linode and its associated services. You will be billed for time used
    within the billing period the Linode was active.



```js
linode.deleteLinodeInstance({
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * linodeId **required** `integer`: ID of the Linode to look up

#### Output
* output `object`

### getLinodeInstance
Get a specific Linode by ID.


```js
linode.getLinodeInstance({
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * linodeId **required** `integer`: ID of the Linode to look up

#### Output
* output [Linode](#linode)

### updateLinodeInstance
Updates a Linode that you have permission to `read_write`.

**Important**: You must be an unrestricted User in order to add or modify tags on Linodes.



```js
linode.updateLinodeInstance({
  "body": {},
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * body **required** [Linode](#linode)
  * linodeId **required** `integer`: ID of the Linode to look up

#### Output
* output [Linode](#linode)

### getBackups
Returns information about this Linode's available backups.



```js
linode.getBackups({
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * linodeId **required** `integer`: The ID of the Linode the backups belong to.

#### Output
* output `object`
  * automatic `array`
    * items
      * configs `array`: A list of the labels of the Configuration profiles that are part of the Backup.
        * items `string`
      * created `string`: The date the Backup was taken.
      * disks `array`: A list of the disks that are part of the Backup.
        * items `object`
          * filesystem [Disk/properties/filesystem](#disk/properties/filesystem)
          * label `string`
          * size `integer`
      * finished `string`: The date the Backup completed.
      * id `integer`: The unique ID of this Backup.
      * label `string`: A label for Backups that are of type `snapshot`.
      * status `string` (values: paused, pending, running, needsPostProcessing, successful, failed, userAborted): The current state of a specific Backup.
      * type `string` (values: auto, snapshot): This indicates whether the Backup is an automatic Backup or manual snapshot taken by the User at a specific point in time.
      * updated `string`: The date the Backup was most recently updated.
      * type `string`
  * snapshot `object`
    * current [Backup](#backup)
    * in_progress [Backup](#backup)

### createSnapshot
Creates a snapshot Backup of a Linode.
** If you already have a snapshot of this Linode, this is a destructive action. The previous snapshot will be deleted.**



```js
linode.createSnapshot({
  "body": {
    "label": ""
  },
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * label **required** `string`
  * linodeId **required** `integer`: The ID of the Linode the backups belong to.

#### Output
* output [Backup](#backup)

### cancelBackups
Cancels the Backup service on the given Linode. Deletes all of this Linode's existing backups forever.



```js
linode.cancelBackups({
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * linodeId **required** `integer`: The ID of the Linode to cancel backup service for.

#### Output
* output `object`

### enableBackups
Enables backups for the specified Linode.



```js
linode.enableBackups({
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * linodeId **required** `integer`: The ID of the Linode to enable backup service for.

#### Output
* output `object`

### getBackup
Returns information about a Backup.



```js
linode.getBackup({
  "linodeId": 0,
  "backupId": 0
}, context)
```

#### Input
* input `object`
  * linodeId **required** `integer`: The ID of the Linode the Backup belongs to.
  * backupId **required** `integer`: The ID of the Backup to look up.

#### Output
* output [Backup](#backup)

### restoreBackup
Restores a Linode's Backup to the specified Linode.



```js
linode.restoreBackup({
  "body": {
    "linode_id": 0
  },
  "linodeId": 0,
  "backupId": 0
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * linode_id **required** `integer`: The ID of the Linode to restore a Backup to.
    * overwrite `boolean`: If True, deletes all Disks and Configs on the target Linode
  * linodeId **required** `integer`: The ID of the Linode that the Backup belongs to.
  * backupId **required** `integer`: The ID of the Backup to restore.

#### Output
* output `object`

### bootLinodeInstance
Boots a Linode you have permission to modify. If no parameters are given, a Config profile
will be chosen for this boot based on the following criteria:

* If there is only one Config profile for this Linode, it will be used.
* If there is more than one Config profile, the last booted config will be used.
* If there is more than one Config profile and none were the last to be booted (because the
  Linode was never booted or the last booted config was deleted) an error will be returned.



```js
linode.bootLinodeInstance({
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * config_id `integer`: The Linode Config ID to boot into. If omitted, we will attempt to select a config to use. (This will do the right thing in most cases.)
  * linodeId **required** `integer`: The ID of the Linode to boot.

#### Output
* output `object`

### cloneLinodeInstance
You can clone your Linode's existing Disks or Configuration profiles to
another Linode on your Account. In order for this request to complete
successfully, your User must have the `add_linodes` grant. Cloning to a
new Linode will incur a charge on your Account.

If cloning to an existing Linode, any actions currently running or
queued must be completed first before you can clone to it.

Up to five clone operations from any given source Linode can be run concurrently.
If more concurrent clones are attempted, an HTTP 400 error will be
returned by this endpoint.



```js
linode.cloneLinodeInstance({
  "body": {},
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * backups_enabled `boolean`: If this field is set to `true`, the created Linode will
    * configs `array`: An array of configuration profile IDs.
      * items `integer`
    * disks `array`: An array of disk IDs.
      * items `integer`
    * group `string`: A label used to group Linodes for display. Linodes are not required to have a group.
    * label `string`: The label to assign this Linode when cloning to a new Linode.
    * linode_id `integer`: If an existing Linode is to be the target for the clone, the ID of that Linode. The existing Linode must have enough resources to accept the clone.
    * region `string`: This is the Region where the Linode will be deployed.
    * type `string`: A Linode's Type determines what resources are available to
  * linodeId **required** `integer`: ID of the Linode to clone.

#### Output
* output `object`

### getLinodeConfigs
Lists Configuration profiles associated with a Linode.



```js
linode.getLinodeConfigs({
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.
  * linodeId **required** `integer`: ID of the Linode to look up Configuration profiles for.

#### Output
* output `object`
  * data `array`
    * items [LinodeConfig](#linodeconfig)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### addLinodeConfig
Adds a new Configuration profile to a Linode.



```js
linode.addLinodeConfig({
  "body": {
    "label": "",
    "devices": {}
  },
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * body **required** [LinodeConfig](#linodeconfig)
  * linodeId **required** `integer`: ID of the Linode to look up Configuration profiles for.

#### Output
* output [LinodeConfig](#linodeconfig)

### deleteLinodeConfig
Deletes the specified Configuration profile from the specified Linode.



```js
linode.deleteLinodeConfig({
  "linodeId": 0,
  "configId": 0
}, context)
```

#### Input
* input `object`
  * linodeId **required** `integer`: The ID of the Linode whose Configuration profile to look up.
  * configId **required** `integer`: The ID of the Configuration profile to look up.

#### Output
* output `object`

### getLinodeConfig
Returns information about a specific Configuration profile.



```js
linode.getLinodeConfig({
  "linodeId": 0,
  "configId": 0
}, context)
```

#### Input
* input `object`
  * linodeId **required** `integer`: The ID of the Linode whose Configuration profile to look up.
  * configId **required** `integer`: The ID of the Configuration profile to look up.

#### Output
* output [LinodeConfig](#linodeconfig)

### updateLinodeConfig
Updates a Configuration profile.



```js
linode.updateLinodeConfig({
  "body": null,
  "linodeId": 0,
  "configId": 0
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * comments [LinodeConfig/properties/comments](#linodeconfig/properties/comments)
    * devices **required** `object`: A dictionary of device disks to use as a device map in a Linode's configuration profile.
      * sda [Device](#device)
      * sdb [Device](#device)
      * sdc [Device](#device)
      * sdd [Device](#device)
      * sde [Device](#device)
      * sdf [Device](#device)
      * sdg [Device](#device)
      * sdh [Device](#device)
    * helpers [LinodeConfig/properties/helpers](#linodeconfig/properties/helpers)
    * id [LinodeConfig/properties/id](#linodeconfig/properties/id)
    * kernel [LinodeConfig/properties/kernel](#linodeconfig/properties/kernel)
    * label **required** [LinodeConfig/properties/label](#linodeconfig/properties/label)
    * memory_limit [LinodeConfig/properties/memory_limit](#linodeconfig/properties/memory_limit)
    * root_device `string`: The root device to boot.
    * run_level [LinodeConfig/properties/run_level](#linodeconfig/properties/run_level)
    * virt_mode [LinodeConfig/properties/virt_mode](#linodeconfig/properties/virt_mode)
  * linodeId **required** `integer`: The ID of the Linode whose Configuration profile to look up.
  * configId **required** `integer`: The ID of the Configuration profile to look up.

#### Output
* output [LinodeConfig](#linodeconfig)

### getLinodeDisks
View Disk information for Disks associated with this Linode.



```js
linode.getLinodeDisks({
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.
  * linodeId **required** `integer`: ID of the Linode to look up.

#### Output
* output `object`
  * data `array`
    * items [Disk](#disk)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### addLinodeDisk
Adds a new Disk to a Linode. You can optionally create a Disk from an Image (see [/images](/api/v4/images) for a list of available public images, or use one of your own), and optionally provide a StackScript to deploy with this Disk.



```js
linode.addLinodeDisk({
  "body": {
    "size": 0,
    "label": ""
  },
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * body **required** [DiskRequest](#diskrequest)
  * linodeId **required** `integer`: ID of the Linode to look up.

#### Output
* output [Disk](#disk)

### deleteDisk
Deletes a Disk you have permission to `read_write`.

**Deleting a Disk is a destructive action and cannot be undone.**



```js
linode.deleteDisk({
  "linodeId": 0,
  "diskId": 0
}, context)
```

#### Input
* input `object`
  * linodeId **required** `integer`: ID of the Linode to look up.
  * diskId **required** `integer`: ID of the Disk to look up.

#### Output
* output `object`

### getLinodeDisk
View Disk information for a Disk associated with this Linode.



```js
linode.getLinodeDisk({
  "linodeId": 0,
  "diskId": 0
}, context)
```

#### Input
* input `object`
  * linodeId **required** `integer`: ID of the Linode to look up.
  * diskId **required** `integer`: ID of the Disk to look up.

#### Output
* output [Disk](#disk)

### updateDisk
Updates a Disk that you have permission to `read_write`.



```js
linode.updateDisk({
  "body": {},
  "linodeId": 0,
  "diskId": 0
}, context)
```

#### Input
* input `object`
  * body **required** [Disk](#disk)
  * linodeId **required** `integer`: ID of the Linode to look up.
  * diskId **required** `integer`: ID of the Disk to look up.

#### Output
* output [Disk](#disk)

### cloneLinodeDisk
Copies a disk, byte-for-byte, into a new Disk belonging to the same Linode. The Linode must have enough storage space available to accept a new Disk of the same size as this one or this operation will fail.



```js
linode.cloneLinodeDisk({
  "linodeId": 0,
  "diskId": 0
}, context)
```

#### Input
* input `object`
  * linodeId **required** `integer`: ID of the Linode to look up.
  * diskId **required** `integer`: ID of the Disk to clone.

#### Output
* output [Disk](#disk)

### resetDiskPassword
Resets the password of a Disk you have permission to `read_write`.



```js
linode.resetDiskPassword({
  "body": null,
  "linodeId": 0,
  "diskId": 0
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * password **required** `string`: The new root password for the OS installed on this Disk.
  * linodeId **required** `integer`: ID of the Linode to look up.
  * diskId **required** `integer`: ID of the Disk to look up.

#### Output
* output `object`

### resizeDisk
Resizes a Disk you have permission to `read_write`.
The Linode this Disk is attached to must be shut down for resizing to take effect.
If you are resizing the Disk to a smaller size, it cannot be made smaller than what is required by the total size of the files current on the Disk. The Disk must not be in use. If the Disk is in use, the request will succeed but the resize will ultimately fail.



```js
linode.resizeDisk({
  "body": null,
  "linodeId": 0,
  "diskId": 0
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * size `integer`: The desired size, in MB, of the disk.
  * linodeId **required** `integer`: ID of the Linode to look up.
  * diskId **required** `integer`: ID of the Disk to look up.

#### Output
* output `object`

### getLinodeIPs
Returns networking information for a single Linode.



```js
linode.getLinodeIPs({
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * linodeId **required** `integer`: ID of the Linode to look up.

#### Output
* output `object`
  * ipv4 `object`: Information about this Linode's IPv4 addresses.
    * private `array`: A list of private IP Address objects belonging to this Linode.
      * items [IPAddressPrivate](#ipaddressprivate)
    * public `array`: A list of public IP Address objects belonging to this Linode.
      * items [IPAddress](#ipaddress)
    * reserved `array`: A list of reserved IP Address objects belonging to this Linode.
      * items [IPAddress](#ipaddress)
    * shared `array`: A list of shared IP Address objects assigned to this Linode.
      * items [IPAddress](#ipaddress)
  * ipv6 `object`: Information about this Linode's IPv6 addresses.
    * global [IPv6Pool](#ipv6pool)
    * link_local [IPAddressV6LinkLocal](#ipaddressv6linklocal)
    * slaac [IPAddressV6Slaac](#ipaddressv6slaac)

### addLinodeIP
Allocates a public or private IPv4 address to a Linode. Public IP Addresses, after the one included with each Linode, incur an additional monthly charge. If you need an additional public IP Address you must request one - please [open a support ticket](/api/v4/support-tickets/#post). You may not add more than one private IPv4 address to a single Linode.



```js
linode.addLinodeIP({
  "body": null,
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * public **required** `boolean`: Whether to create a public or private IPv4 address.
    * type **required** `string` (values: ipv4): The type of address you are allocating. Only IPv4 addresses may be allocated through this endpoint.
  * linodeId **required** `integer`: ID of the Linode to look up.

#### Output
* output [IPAddress](#ipaddress)

### removeLinodeIP
Deletes a public IPv4 address associated with this Linode. This will fail if it is the Linode's last remaining public IPv4 address. Private IPv4 addresses cannot be removed via this endpoint.



```js
linode.removeLinodeIP({
  "linodeId": 0,
  "address": ""
}, context)
```

#### Input
* input `object`
  * linodeId **required** `integer`: The ID of the Linode to look up.
  * address **required** `string`: The IP address to look up.

#### Output
* output `object`

### getLinodeIP
View information about the specified IP address associated with the specified Linode.



```js
linode.getLinodeIP({
  "linodeId": 0,
  "address": ""
}, context)
```

#### Input
* input `object`
  * linodeId **required** `integer`: The ID of the Linode to look up.
  * address **required** `string`: The IP address to look up.

#### Output
* output [IPAddress](#ipaddress)

### updateLinodeIP
Updates a particular IP Address associated with this Linode. Only allows setting/resetting reverse DNS.



```js
linode.updateLinodeIP({
  "linodeId": 0,
  "address": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * rdns `string`
    * address `string`: The IP address.
    * gateway `string`: The default gateway for this address.
    * linode_id `integer`: The ID of the Linode this address currently belongs to. For IPv4 addresses, this is by default the Linode that this address was assigned to on creation, and these addresses my be moved using the [/networking/ipv4/assign](/api/v4/networking-ipv-4-assign/#post) endpoint. For SLAAC and link-local addresses, this value may not be changed.
    * prefix `integer`: The number of bits set in the subnet mask.
    * public `boolean`: Whether this is a public or private IP address.
    * rdns `string`: The reverse DNS assigned to this address. For public IPv4 addresses, this will be set to a default value provided by Linode if not explicitly set.
    * region `string`: The Region this IP address resides in.
    * subnet_mask `string`: The mask that separates host bits from network bits for this address.
    * type `string` (values: ipv4, ipv6, ipv6/pool, ipv6/range): The type of address this is.
  * linodeId **required** `integer`: The ID of the Linode to look up.
  * address **required** `string`: The IP address to look up.

#### Output
* output [IPAddress](#ipaddress)

### migrateLinodeInstance
Initiate a pending host migration that has been scheduled by Linode or initiate a cross data center (DC) migration.  A list of pending migrations, if any, can be accessed from [GET /account/notifications](/api/v4/account-notifications). When the migration begins, your Linode will be shutdown if not already off. If the migration initiated the shutdown, it will reboot the Linode when completed.

To initiate a cross DC migration, you must pass a `region` parameter to the request body specifying the target data center region. You can view a list of all available regions and their feature capabilities from [GET /regions](/api/v4/regions). If your Linode has a DC migration already queued or you have initiated a previously scheduled migration, you will not be able to initiate a DC migration until it has completed.

**Note:** Next Generation Network (NGN) data centers do not support IPv6 `/116` pools or IP Failover. If you have these features enabled on your Linode and attempt to migrate to an NGN data center, the migration will not initiate. NGN data centers include Toronto and Mumbai.



```js
linode.migrateLinodeInstance({
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * region `string`: The region to which the Linode will be migrated. Must be a valid region slug. A list of regions can be viewed by using the [GET /regions](/api/v4/regions) endpoint. A cross data center migration will cancel a pending migration that has not yet been initiated.
  * linodeId **required** `integer`: ID of the Linode to migrate.

#### Output
* output `object`

### mutateLinodeInstance
Linodes created with now-deprecated Types are entitled to a free upgrade to the next generation. A mutating Linode will be allocated any new resources the upgraded Type provides, and will be subsequently restarted if it was currently running.
If any actions are currently running or queued, those actions must be completed first before you can initiate a mutate.



```js
linode.mutateLinodeInstance({
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * allow_auto_disk_resize `boolean`: Automatically resize disks when resizing a Linode. When resizing down to a smaller plan your Linode's data must fit within the smaller disk size.
  * linodeId **required** `integer`: ID of the Linode to mutate.

#### Output
* output `object`

### rebootLinodeInstance
Reboots a Linode you have permission to modify. If any actions are currently running or queued, those actions must be completed first before you can initiate a reboot.



```js
linode.rebootLinodeInstance({
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * config_id `integer`: The Linode Config ID to reboot into.  If null or omitted, the last booted config will be used.  If there was no last booted config and this Linode only has one config, it will be used.  If a config cannot be determined, an error will be returned.
  * linodeId **required** `integer`: ID of the linode to reboot.

#### Output
* output `object`

### rebuildLinodeInstance
Rebuilds a Linode you have the `read_write` permission to modify.
A rebuild will first shut down the Linode, delete all disks and configs on the Linode, and then deploy a new `image` to the Linode with the given attributes. Additionally:

  * Requires an `image` be supplied.
  * Requires a `root_pass` be supplied to use for the root User's Account.
  * It is recommended to supply SSH keys for the root User using the
    `authorized_keys` field.



```js
linode.rebuildLinodeInstance({
  "body": {
    "image": "",
    "root_pass": ""
  },
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * image **required** `string`
    * root_pass **required** `string`
    * authorized_keys [DiskRequest/properties/authorized_keys](#diskrequest/properties/authorized_keys)
    * authorized_users [DiskRequest/properties/authorized_users](#diskrequest/properties/authorized_users)
    * booted `boolean`: This field defaults to `true` if the Linode is created with an Image or from a Backup.
    * image [DiskRequest/properties/image](#diskrequest/properties/image)
    * root_pass [DiskRequest/properties/root_pass](#diskrequest/properties/root_pass)
    * stackscript_data [DiskRequest/properties/stackscript_data](#diskrequest/properties/stackscript_data)
    * stackscript_id [DiskRequest/properties/stackscript_id](#diskrequest/properties/stackscript_id)
  * linodeId **required** `integer`: ID of the Linode to rebuild.

#### Output
* output [Linode](#linode)

### rescueLinodeInstance
Rescue Mode is a safe environment for performing many system recovery and disk management tasks. Rescue Mode is based on the Finnix recovery distribution, a self-contained and bootable Linux distribution. You can also use Rescue Mode for tasks other than disaster recovery, such as formatting disks to use different filesystems, copying data between disks, and downloading files from a disk via SSH and SFTP.
* Note that "sdh" is reserved and unavailable during rescue.



```js
linode.rescueLinodeInstance({
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * devices [RescueDevices](#rescuedevices)
  * linodeId **required** `integer`: ID of the Linode to rescue.

#### Output
* output `object`

### resizeLinodeInstance
Resizes a Linode you have the `read_write` permission to a different Type. If any actions are currently running or queued, those actions must be completed first before you can initiate a resize. Additionally, the following criteria must be met in order to resize a Linode:

  * The Linode must not have a pending migration.
  * Your Account cannot have an outstanding balance.
  * The Linode must not have more disk allocation than the new Type allows.
    * In that situation, you must first delete or resize the disk to be smaller.



```js
linode.resizeLinodeInstance({
  "body": {
    "type": ""
  },
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * allow_auto_disk_resize `boolean`: Automatically resize disks when resizing a Linode. When resizing down to a smaller plan your Linode's data must fit within the smaller disk size.
    * type **required** `string`: The ID representing the Linode Type.
  * linodeId **required** `integer`: ID of the Linode to resize.

#### Output
* output `object`

### shutdownLinodeInstance
Shuts down a Linode you have permission to modify. If any actions are currently running or queued, those actions must be completed first before you can initiate a shutdown.



```js
linode.shutdownLinodeInstance({
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * linodeId **required** `integer`: ID of the Linode to shutdown.

#### Output
* output `object`

### getLinodeStats
Returns CPU, IO, IPv4, and IPv6 statistics for your Linode for the past 24 hours.



```js
linode.getLinodeStats({
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * linodeId **required** `integer`: ID of the Linode to look up.

#### Output
* output [LinodeStats](#linodestats)

### getLinodeStatsByYearMonth
Returns statistics for a specific month. The year/month values must be either a date in the past, or the current month. If the current month, statistics will be retrieved for the past 30 days.



```js
linode.getLinodeStatsByYearMonth({
  "linodeId": 0,
  "year": 0,
  "month": 0
}, context)
```

#### Input
* input `object`
  * linodeId **required** `integer`: ID of the Linode to look up.
  * year **required** `integer`: Numeric value representing the year to look up.
  * month **required** `integer`: Numeric value representing the month to look up.

#### Output
* output [LinodeStats](#linodestats)

### getLinodeTransfer
Returns a Linode's network transfer pool statistics for the current month.



```js
linode.getLinodeTransfer({
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * linodeId **required** `integer`: ID of the Linode to look up.

#### Output
* output `object`
  * billable `integer`: The amount of network transfer this Linode has used, in GB, past your monthly quota.
  * quota `integer`: The amount of network transfer this Linode adds to your transfer pool, in GB, for the current month's billing cycle.
  * used `integer`: The amount of network transfer used by this Linode, in bytes, for the current month's billing cycle.

### getLinodeVolumes
View Block Storage Volumes attached to this Linode.



```js
linode.getLinodeVolumes({
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.
  * linodeId **required** `integer`: ID of the Linode to look up.

#### Output
* output `object`
  * data `array`
    * items [Volume](#volume)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### getKernels
Lists available Kernels.



```js
linode.getKernels({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [Kernel](#kernel)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### getKernel
Returns information about a single Kernel.



```js
linode.getKernel({
  "kernelId": ""
}, context)
```

#### Input
* input `object`
  * kernelId **required** `string`: ID of the Kernel to look up.

#### Output
* output [Kernel](#kernel)

### getStackScripts
If the request is not authenticated, only public StackScripts are returned.

For more information on StackScripts, please read our guide: <a target="_top" href="https://linode.com/docs/platform/stackscripts/">Automate Deployment with StackScripts</a>.



```js
linode.getStackScripts({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [StackScript](#stackscript)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### addStackScript
Creates a StackScript in your Account.



```js
linode.addStackScript({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required**
    * created `string`: The date this StackScript was created.
    * deployments_active `integer`: Count of currently active, deployed Linodes created from this StackScript.
    * deployments_total `integer`: The total number of times this StackScript has been deployed.
    * description `string`: A description for the StackScript.
    * id `integer`: The unique ID of this StackScript.
    * images `array`: An array of Image IDs. These are the images that can be deployed with this Stackscript.
      * items `string`
    * is_public `boolean`: This determines whether other users can use your StackScript. **Once a StackScript is made public, it cannot be made private.**
    * label `string`: The StackScript's label is for display purposes only.
    * rev_note `string`: This field allows you to add notes for the set of revisions made to this StackScript.
    * script `string`: The script to execute when provisioning a new Linode with this StackScript.
    * updated `string`: The date this StackScript was last updated.
    * user_defined_fields `array`: This is a list of fields defined with a special syntax inside this StackScript that allow for supplying customized parameters during deployment. See <a target="_top" href="https://www.linode.com/docs/platform/stackscripts/#variables-and-udfs">Variables and UDFs</a> for more information.
      * items [UserDefinedField](#userdefinedfield)
    * user_gravatar_id `string`: The Gravatar ID for the User who created the StackScript.
    * username `string`: The User who created the StackScript.

#### Output
* output [StackScript](#stackscript)

### deleteStackScript
Deletes a private StackScript you have permission to `read_write`. You cannot delete a public StackScript.



```js
linode.deleteStackScript({
  "stackscriptId": ""
}, context)
```

#### Input
* input `object`
  * stackscriptId **required** `string`: The ID of the StackScript to look up.

#### Output
* output `object`

### getStackScript
Returns all of the information about a specified StackScript, including the contents of the script.



```js
linode.getStackScript({
  "stackscriptId": ""
}, context)
```

#### Input
* input `object`
  * stackscriptId **required** `string`: The ID of the StackScript to look up.

#### Output
* output [StackScript](#stackscript)

### updateStackScript
Updates a StackScript.

**Once a StackScript is made public, it cannot be made private.**



```js
linode.updateStackScript({
  "stackscriptId": ""
}, context)
```

#### Input
* input `object`
  * body [StackScript](#stackscript)
  * stackscriptId **required** `string`: The ID of the StackScript to look up.

#### Output
* output [StackScript](#stackscript)

### getLinodeTypes
Returns collection of Linode Types, including pricing and specifications for each Type. These are used when [creating](/api/v4/linode-instances/#post) or [resizing](/api/v4/linode-instances-linode-id-resize/#post) Linodes.



```js
linode.getLinodeTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items [LinodeType](#linodetype)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### getLinodeType
Returns information about a specific Linode Type, including pricing and specifications. This is used when [creating](/api/v4/linode-instances/#post) or [resizing](/api/v4/linode-instances-linode-id-resize/#post) Linodes.



```js
linode.getLinodeType({
  "typeId": ""
}, context)
```

#### Input
* input `object`
  * typeId **required** `string`: The ID of the Linode Type to look up.

#### Output
* output [LinodeType](#linodetype)

### getLongviewClients
Returns a paginated list of Longview Clients you have access to. Longview Client is used to monitor stats on your Linode with the help of the Longview Client application.



```js
linode.getLongviewClients({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [LongviewClient](#longviewclient)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### createLongviewClient
Creates a Longview Client.  This Client will not begin monitoring the status of your server until you configure the Longview Client application on your Linode using the returning `install_code` and `api_key`.



```js
linode.createLongviewClient({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [LongviewClient](#longviewclient)

#### Output
* output [LongviewClient](#longviewclient)

### deleteLongviewClient
Deletes a Longview Client from your Account.

**All information stored for this client will be lost.**

This _does not_ uninstall the Longview Client application for your Linode - you must do that manually.



```js
linode.deleteLongviewClient({
  "clientId": 0
}, context)
```

#### Input
* input `object`
  * clientId **required** `integer`: The Longview Client ID to access.

#### Output
* output `object`

### getLongviewClient
Returns a single Longview Client you can access.



```js
linode.getLongviewClient({
  "clientId": 0
}, context)
```

#### Input
* input `object`
  * clientId **required** `integer`: The Longview Client ID to access.

#### Output
* output [LongviewClient](#longviewclient)

### updateLongviewClient
Updates a Longview Client.  This cannot update how it monitors your server; use the Longview Client application on your Linode for monitoring configuration.



```js
linode.updateLongviewClient({
  "body": {},
  "clientId": 0
}, context)
```

#### Input
* input `object`
  * body **required** [LongviewClient](#longviewclient)
  * clientId **required** `integer`: The Longview Client ID to access.

#### Output
* output [LongviewClient](#longviewclient)

### getLongviewSubscriptions
Returns a paginated list of available Longview Subscriptions. This is a public endpoint and requires no authentication.



```js
linode.getLongviewSubscriptions({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [LongviewSubscription](#longviewsubscription)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### getLongviewSubscription
Returns a single LongviewSubscription object.  This is a public endpoint and requires no authentication.



```js
linode.getLongviewSubscription({
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Longview Subscription to look up.

#### Output
* output [LongviewSubscription](#longviewsubscription)

### getManagedContacts
Returns a paginated list of Managed Contacts on your Account.



```js
linode.getManagedContacts({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [ManagedContact](#managedcontact)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### createManagedContact
Creates a Managed Contact.  A Managed Contact is someone Linode special forces can contact in the course of attempting to resolve an issue with a Managed Service.



```js
linode.createManagedContact({}, context)
```

#### Input
* input `object`
  * body [ManagedContact](#managedcontact)

#### Output
* output [ManagedContact](#managedcontact)

### deleteManagedContact
Deletes a Managed Contact.



```js
linode.deleteManagedContact({
  "contactId": 0
}, context)
```

#### Input
* input `object`
  * contactId **required** `integer`: The ID of the contact to access.

#### Output
* output `object`

### getManagedContact
Returns a single Managed Contact.



```js
linode.getManagedContact({
  "contactId": 0
}, context)
```

#### Input
* input `object`
  * contactId **required** `integer`: The ID of the contact to access.

#### Output
* output [ManagedContact](#managedcontact)

### updateManagedContact
Updates information about a Managed Contact.



```js
linode.updateManagedContact({
  "body": {},
  "contactId": 0
}, context)
```

#### Input
* input `object`
  * body **required** [ManagedContact](#managedcontact)
  * contactId **required** `integer`: The ID of the contact to access.

#### Output
* output [ManagedContact](#managedcontact)

### getManagedCredentials
Returns a paginated list of Managed Credentials on your Account.



```js
linode.getManagedCredentials({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [ManagedCredential](#managedcredential)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### createManagedCredential
Creates a Managed Credential. A Managed Credential is stored securely to allow Linode special forces to access your Managed Services and resolve issues.



```js
linode.createManagedCredential({}, context)
```

#### Input
* input `object`
  * body
    * id `integer`: This Credential's unique ID.
    * label `string`: The unique label for this Credential. This is for display purposes only.
    * last_decrypted `string`: The date this Credential was last decrypted by a member of Linode special forces.
    * password `string`: The password to use when accessing the Managed Service.
    * username `string`: The username to use when accessing the Managed Service.

#### Output
* output [ManagedCredential](#managedcredential)

### viewManagedSSHKey
Returns the unique SSH public key assigned to your Linode account's Managed service. If you [add this public key](https://linode.com/docs/platform/linode-managed/#adding-the-public-key) to a Linode on your account, Linode special forces will be able to log in to the Linode with this key when attempting to resolve issues.



```js
linode.viewManagedSSHKey(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`: A unique SSH public key that allows Linode's special forces to access a Managed server to respond to Issues.
  * ssh_key `string`: The unique SSH public key assigned to your Linode account's Managed service.

### getManagedCredential
Returns a single Managed Credential.



```js
linode.getManagedCredential({
  "credentialId": 0
}, context)
```

#### Input
* input `object`
  * credentialId **required** `integer`: The ID of the Credential to access.

#### Output
* output [ManagedCredential](#managedcredential)

### updateManagedCredential
Updates the label of a Managed Credential. This endpoint does not update the username and password for a Managed Credential. To do this, use the Update Managed Credential Username and Password ([POST /managed/credentials/{credentialId}/update](https://developers.linode.com/api/docs/v4#operation/updateManagedCredentialUsernamePassword)) endpoint instead.



```js
linode.updateManagedCredential({
  "body": {},
  "credentialId": 0
}, context)
```

#### Input
* input `object`
  * body **required** [ManagedCredential](#managedcredential)
  * credentialId **required** `integer`: The ID of the Credential to access.

#### Output
* output [ManagedCredential](#managedcredential)

### deleteManagedCredential
Deletes a Managed Credential.  Linode special forces will no longer have access to this Credential when attempting to resolve issues.



```js
linode.deleteManagedCredential({
  "credentialId": 0
}, context)
```

#### Input
* input `object`
  * credentialId **required** `integer`: The ID of the Credential to access.

#### Output
* output `object`

### updateManagedCredentialUsernamePassword
Updates the username and password for a Managed Credential.



```js
linode.updateManagedCredentialUsernamePassword({
  "credentialId": 0
}, context)
```

#### Input
* input `object`
  * body
    * password `string`: The password to use when accessing the Managed Service.
    * username `string`: The username to use when accessing the Managed Service.
  * credentialId **required** `integer`: The ID of the Credential to update.

#### Output
* output `object`

### getManagedIssues
Returns a paginated list of recent and ongoing issues detected on your Managed Services.



```js
linode.getManagedIssues({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [ManagedIssue](#managedissue)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### getManagedIssue
Returns a single Issue that is impacting or did impact one of your Managed Services.



```js
linode.getManagedIssue({
  "issueId": 0
}, context)
```

#### Input
* input `object`
  * issueId **required** `integer`: The Issue to look up.

#### Output
* output [ManagedIssue](#managedissue)

### getManagedLinodeSettings
Returns a paginated list of Managed Settings for your Linodes. There will be one entry per Linode on your Account.



```js
linode.getManagedLinodeSettings({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [ManagedLinodeSettings](#managedlinodesettings)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### getManagedLinodeSetting
Returns a single Linode's Managed settings.



```js
linode.getManagedLinodeSetting({
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * linodeId **required** `integer`: The Linode ID whose settings we are accessing.

#### Output
* output [ManagedLinodeSettings](#managedlinodesettings)

### updateManagedLinodeSetting
Updates a single Linode's Managed settings.



```js
linode.updateManagedLinodeSetting({
  "body": {},
  "linodeId": 0
}, context)
```

#### Input
* input `object`
  * body **required** [ManagedLinodeSettings](#managedlinodesettings)
  * linodeId **required** `integer`: The Linode ID whose settings we are accessing.

#### Output
* output [ManagedLinodeSettings](#managedlinodesettings)

### getManagedServices
Returns a paginated list of Managed Services on your Account. These are the services Linode Managed is monitoring and will report and attempt to resolve issues with.



```js
linode.getManagedServices(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items [ManagedService](#managedservice)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### createManagedService
Creates a Managed Service. Linode Managed will begin monitoring this service and reporting and attempting to resolve any Issues.



```js
linode.createManagedService({}, context)
```

#### Input
* input `object`
  * body
    * address `string`: The URL at which this Service is monitored.
    * body `string`: What to expect to find in the response body for the Service to be considered up.
    * consultation_group `string`: The group of ManagedContacts who should be notified or consulted with when an Issue is detected.
    * created `string`: When this Managed Service was created.
    * credentials `array`: An array of ManagedCredential IDs that should be used when attempting to resolve issues with this Service.
      * items `integer`
    * id `integer`: This Service's unique ID.
    * label `string`: The label for this Service. This is for display purposes only.
    * notes `string`: Any information relevant to the Service that Linode special forces should know when attempting to resolve Issues.
    * region `string`: The Region in which this Service is located. This is required if address is a private IP, and may not be set otherwise.
    * service_type `string` (values: url, tcp): How this Service is monitored.
    * status `string` (values: disabled, pending, ok, problem): The current status of this Service.
    * timeout `integer`: How long to wait, in seconds, for a response before considering the Service to be down.
    * updated `string`: When this Managed Service was last updated.

#### Output
* output [ManagedService](#managedservice)

### deleteManagedService
Deletes a Managed Service.  This service will no longer be monitored by Linode Managed.



```js
linode.deleteManagedService({
  "serviceId": 0
}, context)
```

#### Input
* input `object`
  * serviceId **required** `integer`: The ID of the Managed Service to access.

#### Output
* output `object`

### getManagedService
Returns information about a single Managed Service on your Account.



```js
linode.getManagedService({
  "serviceId": 0
}, context)
```

#### Input
* input `object`
  * serviceId **required** `integer`: The ID of the Managed Service to access.

#### Output
* output [ManagedService](#managedservice)

### updateManagedService
Updates information about a Managed Service.



```js
linode.updateManagedService({
  "body": {},
  "serviceId": 0
}, context)
```

#### Input
* input `object`
  * body **required** [ManagedService](#managedservice)
  * serviceId **required** `integer`: The ID of the Managed Service to access.

#### Output
* output [ManagedService](#managedservice)

### disableManagedService
Temporarily disables monitoring of a Managed Service.



```js
linode.disableManagedService({
  "serviceId": 0
}, context)
```

#### Input
* input `object`
  * serviceId **required** `integer`: The ID of the Managed Service to disable.

#### Output
* output [ManagedService](#managedservice)

### enableManagedService
Enables monitoring of a Managed Service.



```js
linode.enableManagedService({
  "serviceId": 0
}, context)
```

#### Input
* input `object`
  * serviceId **required** `integer`: The ID of the Managed Service to enable.

#### Output
* output [ManagedService](#managedservice)

### getIPs
Returns a paginated list of IP Addresses on your Account, excluding private addresses.



```js
linode.getIPs(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items [IPAddress](#ipaddress)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### allocateIP
Allocates a new IPv4 Address on your Account. The Linode must be configured to support additional addresses - please [open a support ticket](/api/v4/support-tickets/#post) requesting additional addresses before attempting allocation.



```js
linode.allocateIP({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * linode_id **required** `integer`: The ID of a Linode you you have access to that this address will be allocated to.
    * public **required** `boolean`: Whether to create a public or private IPv4 address.
    * type **required** `string` (values: ipv4): The type of address you are requesting. Only IPv4 addresses may be allocated through this endpoint.

#### Output
* output [IPAddress](#ipaddress)

### getIP
Returns information about a single IP Address on your Account.



```js
linode.getIP({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: The address to operate on.

#### Output
* output [IPAddress](#ipaddress)

### updateIP
Sets RDNS on an IP Address. Forward DNS must already be set up for reverse DNS to be applied. If you set the RDNS to `null` for public IPv4 addresses, it will be reset to the default _members.linode.com_ RDNS value.



```js
linode.updateIP({
  "body": {},
  "address": ""
}, context)
```

#### Input
* input `object`
  * body **required** [IPAddress](#ipaddress)
  * address **required** `string`: The address to operate on.

#### Output
* output [IPAddress](#ipaddress)

### assignIPs
Assign multiple IPs to multiple Linodes in one Region. This allows swapping, shuffling, or otherwise reorganizing IPv4 Addresses to your Linodes.  When the assignment is finished, all Linodes must end up with at least one public IPv4 and no more than one private IPv4.



```js
linode.assignIPs({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * assignments **required** `array`: The list of assignments to make.  You must have read_write access to all IPs being assigned and all Linodes being assigned to in order for the assignments to succeed.
      * items `object`
        * address `string`: Ths IP Address for this assignment. Must be a IPv4 address you can access in the Region specified. May be a public or private address.
        * linode_id `integer`: The ID of the Linode to assign this address to. The IP's previous Linode will lose this address, and must end up with at least one public address and no more than one private address once all assignments have been made.
    * region **required** `string`: The ID of the Region in which these assignments are to take place.  All IPs and Linodes must exist in this Region.

#### Output
* output `object`

### shareIPs
Configure shared IPs.  A shared IP may be brought up on a Linode other than the one it lists in its response.  This can be used to allow one Linode to begin serving requests should another become unresponsive.



```js
linode.shareIPs({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * ips **required** `array`: A list of IPs that will be shared with this Linode.  When this is finished, the given Linode will be able to bring up these addresses in addition to the Linodes that these addresses belong to.  You must have access to all of these addresses and they must be in the same Region as the Linode.
      * items `string`
    * linode_id **required** `integer`: The ID of the Linode that the addresses will be shared with.

#### Output
* output `object`

### getIPv6Pools
Displays the IPv6 pools on your Account.



```js
linode.getIPv6Pools({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [IPv6Pool](#ipv6pool)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### getIPv6Ranges
Displays the IPv6 ranges on your Account.



```js
linode.getIPv6Ranges({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [IPv6Range](#ipv6range)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### getNodeBalancers
Returns a paginated list of NodeBalancers you have access to.



```js
linode.getNodeBalancers({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [NodeBalancer](#nodebalancer)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### createNodeBalancer
Creates a NodeBalancer in the requested Region. This NodeBalancer will not start serving requests until it is configured.



```js
linode.createNodeBalancer({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * client_conn_throttle [NodeBalancer/properties/client_conn_throttle](#nodebalancer/properties/client_conn_throttle)
    * configs `array`: The ports to configure this NodeBalancer with on creation. Each config must have a unique port and at least one Node.
      * items
        * algorithm `string` (values: roundrobin, leastconn, source): What algorithm this NodeBalancer should use for routing traffic to backends.
        * check `string` (values: none, connection, http, http_body): The type of check to perform against backends to ensure they are serving requests. This is used to determine if backends are up or down.
        * check_attempts `integer`: How many times to attempt a check before considering a backend to be down.
        * check_body `string`: This value must be present in the response body of the check in order for it to pass. If this value is not present in the response body of a check request, the backend is considered to be down.
        * check_interval `integer`: How often, in seconds, to check that backends are up and serving requests.
        * check_passive `boolean`: If true, any response from this backend with a `5xx` status code will be enough for it to be considered unhealthy and taken out of rotation.
        * check_path `string`: The URL path to check on each backend. If the backend does not respond to this request it is considered to be down.
        * check_timeout `integer`: How long, in seconds, to wait for a check attempt before considering it failed.
        * cipher_suite `string` (values: recommended, legacy): What ciphers to use for SSL connections served by this NodeBalancer.
        * id `integer`: This config's unique ID
        * nodebalancer_id `integer`: The ID for the NodeBalancer this config belongs to.
        * nodes_status `object`: A structure containing information about the health of the backends for this port.  This information is updated periodically as checks are performed against backends.
          * down `integer`: The number of backends considered to be "DOWN" and unhealthy.  These are not in rotation, and not serving requests.
          * up `integer`: The number of backends considered to be "UP" and healthy, and that are serving requests.
        * port `integer`: The port this Config is for. These values must be unique across configs on a single NodeBalancer (you can't have two configs for port 80, for example).  While some ports imply some protocols, no enforcement is done and you may configure your NodeBalancer however is useful to you. For example, while port 443 is generally used for HTTPS, you do not need SSL configured to have a NodeBalancer listening on port 443.
        * protocol `string` (values: http, https, tcp): The protocol this port is configured to serve.
        * ssl_cert `string`: The PEM-formatted public SSL certificate (or the combined PEM-formatted SSL
        * ssl_commonname `string`: The read-only common name automatically derived from the SSL certificate assigned to this NodeBalancerConfig. Please refer to this field to verify that the appropriate certificate is assigned to your NodeBalancerConfig.
        * ssl_fingerprint `string`: The read-only fingerprint automatically derived from the SSL certificate assigned to this NodeBalancerConfig. Please refer to this field to verify that the appropriate certificate is assigned to your NodeBalancerConfig.
        * ssl_key `string`: The PEM-formatted private key for the SSL certificate set in the `ssl_cert` field.
        * stickiness `string` (values: none, table, http_cookie): Controls how session stickiness is handled on this port.
        * nodes `array`: The NodeBalancer Nodes that serve this port.  When creating a NodeBalancer this way, at least one Node is required per configured port.
          * items [NodeBalancerNode](#nodebalancernode)
    * label [NodeBalancer/properties/label](#nodebalancer/properties/label)
    * region **required** `string`: The ID of the Region to create this NodeBalancer in.

#### Output
* output [NodeBalancer](#nodebalancer)

### deleteNodeBalancer
Deletes a NodeBalancer.

**This is a destructive action and cannot be undone.**

Deleting a NodeBalancer will also delete all associated Configs and Nodes, although the backend servers represented by the Nodes will not be changed or removed. Deleting a NodeBalancer will cause you to lose access to the IP Addresses assigned to this NodeBalancer.



```js
linode.deleteNodeBalancer({
  "nodeBalancerId": 0
}, context)
```

#### Input
* input `object`
  * nodeBalancerId **required** `integer`: The ID of the NodeBalancer to access.

#### Output
* output `object`

### getNodeBalancer
Returns a single NodeBalancer you can access.



```js
linode.getNodeBalancer({
  "nodeBalancerId": 0
}, context)
```

#### Input
* input `object`
  * nodeBalancerId **required** `integer`: The ID of the NodeBalancer to access.

#### Output
* output [NodeBalancer](#nodebalancer)

### updateNodeBalancer
Updates information about a NodeBalancer you can access.



```js
linode.updateNodeBalancer({
  "body": {},
  "nodeBalancerId": 0
}, context)
```

#### Input
* input `object`
  * body **required** [NodeBalancer](#nodebalancer)
  * nodeBalancerId **required** `integer`: The ID of the NodeBalancer to access.

#### Output
* output [NodeBalancer](#nodebalancer)

### getNodeBalancerConfigs
Returns a paginated list of NodeBalancer Configs associated with this NodeBalancer. NodeBalancer Configs represent individual ports that this NodeBalancer will accept traffic on, one Config per port.

For example, if you wanted to accept standard HTTP traffic, you would need a Config listening on port 80.



```js
linode.getNodeBalancerConfigs({
  "nodeBalancerId": 0
}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.
  * nodeBalancerId **required** `integer`: The ID of the NodeBalancer to access.

#### Output
* output `object`
  * data `array`
    * items [NodeBalancerConfig](#nodebalancerconfig)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### createNodeBalancerConfig
Creates a NodeBalancer Config, which allows the NodeBalancer to accept traffic on a new port. You will need to add NodeBalancer Nodes to the new Config before it can actually serve requests.



```js
linode.createNodeBalancerConfig({
  "nodeBalancerId": 0
}, context)
```

#### Input
* input `object`
  * body [NodeBalancerConfig](#nodebalancerconfig)
  * nodeBalancerId **required** `integer`: The ID of the NodeBalancer to access.

#### Output
* output [NodeBalancerConfig](#nodebalancerconfig)

### deleteNodeBalancerConfig
Deletes the Config for a port of this NodeBalancer.

**This cannot be undone.**

Once completed, this NodeBalancer will no longer respond to requests on the given port. This also deletes all associated NodeBalancerNodes, but the Linodes they were routing traffic to will be unchanged and will not be removed.



```js
linode.deleteNodeBalancerConfig({
  "nodeBalancerId": 0,
  "configId": 0
}, context)
```

#### Input
* input `object`
  * nodeBalancerId **required** `integer`: The ID of the NodeBalancer to access.
  * configId **required** `integer`: The ID of the config to access.

#### Output
* output `object`

### getNodeBalancerConfig
Returns configuration information for a single port of this NodeBalancer.



```js
linode.getNodeBalancerConfig({
  "nodeBalancerId": 0,
  "configId": 0
}, context)
```

#### Input
* input `object`
  * nodeBalancerId **required** `integer`: The ID of the NodeBalancer to access.
  * configId **required** `integer`: The ID of the config to access.

#### Output
* output [NodeBalancerConfig](#nodebalancerconfig)

### updateNodeBalancerConfig
Updates the configuration for a single port on a NodeBalancer.



```js
linode.updateNodeBalancerConfig({
  "body": {},
  "nodeBalancerId": 0,
  "configId": 0
}, context)
```

#### Input
* input `object`
  * body **required** [NodeBalancerConfig](#nodebalancerconfig)
  * nodeBalancerId **required** `integer`: The ID of the NodeBalancer to access.
  * configId **required** `integer`: The ID of the config to access.

#### Output
* output [NodeBalancerConfig](#nodebalancerconfig)

### getNodeBalancerConfigNodes
Returns a paginated list of NodeBalancer nodes associated with this Config. These are the backends that will be sent traffic for this port.



```js
linode.getNodeBalancerConfigNodes({
  "nodeBalancerId": 0,
  "configId": 0
}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.
  * nodeBalancerId **required** `integer`: The ID of the NodeBalancer to access.
  * configId **required** `integer`: The ID of the NodeBalancer config to access.

#### Output
* output `object`
  * data `array`
    * items [NodeBalancerNode](#nodebalancernode)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### createNodeBalancerNode
Creates a NodeBalancer Node, a backend that can accept traffic for this NodeBalancer Config. Nodes are routed requests on the configured port based on their status.



```js
linode.createNodeBalancerNode({
  "body": null,
  "nodeBalancerId": 0,
  "configId": 0
}, context)
```

#### Input
* input `object`
  * body **required**
    * address `string`: The private IP Address where this backend can be reached. This _must_ be a private IP address.
    * config_id `integer`: The NodeBalancer Config ID that this Node belongs to.
    * id `integer`: This node's unique ID.
    * label `string`: The label for this node.  This is for display purposes only.
    * mode `string` (values: accept, reject, drain, backup): The mode this NodeBalancer should use when sending traffic to this backend.
    * nodebalancer_id `integer`: The NodeBalancer ID that this Node belongs to.
    * status `string` (values: unknown, UP, DOWN): The current status of this node, based on the configured checks of its NodeBalancer Config.
    * weight `integer`: Used when picking a backend to serve a request and is not pinned to a single backend yet.  Nodes with a higher weight will receive more traffic.
  * nodeBalancerId **required** `integer`: The ID of the NodeBalancer to access.
  * configId **required** `integer`: The ID of the NodeBalancer config to access.

#### Output
* output [NodeBalancerNode](#nodebalancernode)

### deleteNodeBalancerConfigNode
Deletes a Node from this Config. This backend will no longer receive traffic for the configured port of this NodeBalancer.

This does not change or remove the Linode whose address was used in the creation of this Node.



```js
linode.deleteNodeBalancerConfigNode({
  "nodeBalancerId": 0,
  "configId": 0,
  "nodeId": 0
}, context)
```

#### Input
* input `object`
  * nodeBalancerId **required** `integer`: The ID of the NodeBalancer to access.
  * configId **required** `integer`: The ID of the Config to access
  * nodeId **required** `integer`: The ID of the Node to access

#### Output
* output `object`

### getNodeBalancerNode
Returns information about a single Node, a backend for this NodeBalancer's configured port.



```js
linode.getNodeBalancerNode({
  "nodeBalancerId": 0,
  "configId": 0,
  "nodeId": 0
}, context)
```

#### Input
* input `object`
  * nodeBalancerId **required** `integer`: The ID of the NodeBalancer to access.
  * configId **required** `integer`: The ID of the Config to access
  * nodeId **required** `integer`: The ID of the Node to access

#### Output
* output [NodeBalancerNode](#nodebalancernode)

### updateNodeBalancerNode
Updates information about a Node, a backend for this NodeBalancer's configured port.



```js
linode.updateNodeBalancerNode({
  "body": {},
  "nodeBalancerId": 0,
  "configId": 0,
  "nodeId": 0
}, context)
```

#### Input
* input `object`
  * body **required** [NodeBalancerNode](#nodebalancernode)
  * nodeBalancerId **required** `integer`: The ID of the NodeBalancer to access.
  * configId **required** `integer`: The ID of the Config to access
  * nodeId **required** `integer`: The ID of the Node to access

#### Output
* output [NodeBalancerNode](#nodebalancernode)

### rebuildNodeBalancerConfig
Rebuilds a NodeBalancer Config and its Nodes that you have permission to modify.



```js
linode.rebuildNodeBalancerConfig({
  "body": null,
  "nodeBalancerId": 0,
  "configId": 0
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * configs `array`: Each config must have a unique port and at least one Node. Additionally:
      * items
        * algorithm `string` (values: roundrobin, leastconn, source): What algorithm this NodeBalancer should use for routing traffic to backends.
        * check `string` (values: none, connection, http, http_body): The type of check to perform against backends to ensure they are serving requests. This is used to determine if backends are up or down.
        * check_attempts `integer`: How many times to attempt a check before considering a backend to be down.
        * check_body `string`: This value must be present in the response body of the check in order for it to pass. If this value is not present in the response body of a check request, the backend is considered to be down.
        * check_interval `integer`: How often, in seconds, to check that backends are up and serving requests.
        * check_passive `boolean`: If true, any response from this backend with a `5xx` status code will be enough for it to be considered unhealthy and taken out of rotation.
        * check_path `string`: The URL path to check on each backend. If the backend does not respond to this request it is considered to be down.
        * check_timeout `integer`: How long, in seconds, to wait for a check attempt before considering it failed.
        * cipher_suite `string` (values: recommended, legacy): What ciphers to use for SSL connections served by this NodeBalancer.
        * id `integer`: This config's unique ID
        * nodebalancer_id `integer`: The ID for the NodeBalancer this config belongs to.
        * nodes_status `object`: A structure containing information about the health of the backends for this port.  This information is updated periodically as checks are performed against backends.
          * down `integer`: The number of backends considered to be "DOWN" and unhealthy.  These are not in rotation, and not serving requests.
          * up `integer`: The number of backends considered to be "UP" and healthy, and that are serving requests.
        * port `integer`: The port this Config is for. These values must be unique across configs on a single NodeBalancer (you can't have two configs for port 80, for example).  While some ports imply some protocols, no enforcement is done and you may configure your NodeBalancer however is useful to you. For example, while port 443 is generally used for HTTPS, you do not need SSL configured to have a NodeBalancer listening on port 443.
        * protocol `string` (values: http, https, tcp): The protocol this port is configured to serve.
        * ssl_cert `string`: The PEM-formatted public SSL certificate (or the combined PEM-formatted SSL
        * ssl_commonname `string`: The read-only common name automatically derived from the SSL certificate assigned to this NodeBalancerConfig. Please refer to this field to verify that the appropriate certificate is assigned to your NodeBalancerConfig.
        * ssl_fingerprint `string`: The read-only fingerprint automatically derived from the SSL certificate assigned to this NodeBalancerConfig. Please refer to this field to verify that the appropriate certificate is assigned to your NodeBalancerConfig.
        * ssl_key `string`: The PEM-formatted private key for the SSL certificate set in the `ssl_cert` field.
        * stickiness `string` (values: none, table, http_cookie): Controls how session stickiness is handled on this port.
        * nodes `array`: The NodeBalancer Node(s) that serve this port. At least one Node is required per configured port.
          * items [NodeBalancerNode](#nodebalancernode)
  * nodeBalancerId **required** `integer`: The ID of the NodeBalancer to access.
  * configId **required** `integer`: The ID of the Config to access.

#### Output
* output [NodeBalancer](#nodebalancer)

### nodebalancers.nodeBalancerId.stats.get
Returns detailed statistics about the requested NodeBalancer.



```js
linode.nodebalancers.nodeBalancerId.stats.get({
  "nodeBalancerId": 0
}, context)
```

#### Input
* input `object`
  * nodeBalancerId **required** `integer`: The ID of the NodeBalancer to access.

#### Output
* output [NodeBalancerStats](#nodebalancerstats)

### getObjectStorageBuckets
Returns a paginated list of all Object Storage Buckets that you own.


This endpoint is available for convenience. It is recommended that instead you
use the more [fully-featured S3 API](https://docs.ceph.com/docs/mimic/radosgw/s3/serviceops/) directly.


**Beta**: This endpoint is in beta. Please make sure to prepend all requests with
`/v4beta` instead of `/v4`, and be aware that this endpoint may receive breaking
updates in the future. This notice will be removed when this endpoint is out of
beta.



```js
linode.getObjectStorageBuckets(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items [ObjectStorageBucket](#objectstoragebucket)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### createObjectStorageBucket
Creates an Object Storage Bucket in the cluster specified. If the
bucket already exists and is owned by you, this endpoint will return a
`200` response with that bucket as if it had just been created.


This endpoint is available for convenience. It is recommended that instead you
use the more [fully-featured S3 API](https://docs.ceph.com/docs/mimic/radosgw/s3/bucketops/#put-bucket) directly.


**Beta**: This endpoint is in beta. Please make sure to prepend all requests with
`/v4beta` instead of `/v4`, and be aware that this endpoint may receive breaking
updates in the future. This notice will be removed when this endpoint is out of
beta.



```js
linode.createObjectStorageBucket({}, context)
```

#### Input
* input `object`
  * body `object`
    * acl `string` (values: private, public-read, authenticated-read, public-read-write): The Access Control Level of the bucket using a canned ACL string. For more fine-grained control of ACLs, use the S3 API directly.
    * cluster **required** `string`: The ID of the Object Storage Cluster where this bucket should be created.
    * cors_enabled `boolean`: If true, the bucket will be created with CORS enabled for all origins. For more fine-grained controls of CORS, use the S3 API directly.
    * label **required** `string`: The name for this bucket. Must be unique in the cluster you are creating the bucket in, or an error will be returned.

#### Output
* output [ObjectStorageBucket](#objectstoragebucket)

### deleteObjectStorageBucket
Removes a single bucket. While buckets containing objects _may_ be deleted by including the `force` option in the request, such operations will fail if the bucket contains too many objects. The recommended way to empty large buckets is to use the [S3 API to configure lifecycle policies](https://docs.ceph.com/docs/master/radosgw/bucketpolicy/#) that remove all objects, then delete the bucket.

This endpoint is available for convenience. It is recommended that instead you use the more [fully- featured S3 API](https://docs.ceph.com/docs/mimic/radosgw/s3/bucketops/#delete-bucket) directly.

**Beta**: This endpoint is in beta. Please make sure to prepend all requests with `/v4beta` instead of `/v4`, and be aware that this endpoint may receive breaking updates in the future. This notice will be removed when this endpoint is out of beta.



```js
linode.deleteObjectStorageBucket({
  "clusterId": "",
  "bucket": ""
}, context)
```

#### Input
* input `object`
  * force `integer`: If false, this operation will fail if the bucket is not empty. If true, this operation will attempt to remove the bucket and its contents; very large buckets may still return an error and require object deletion manually or through object lifecycle management. See [the S3 API docs](https://docs.ceph.com/docs/mimic/radosgw/s3/bucketops/#delete-bucket) for details.
  * clusterId **required** `string`: The ID of the cluster this bucket exists in.
  * bucket **required** `string`: The bucket name.

#### Output
* output `object`

### getObjectStorageBucket
Returns a single Object Storage Bucket.


This endpoint is available for convenience. It is recommended that instead you
use the more [fully-featured S3 API](https://docs.ceph.com/docs/mimic/radosgw/s3/bucketops/#get-bucket) directly.


**Beta**: This endpoint is in beta. Please make sure to prepend all requests with
`/v4beta` instead of `/v4`, and be aware that this endpoint may receive breaking
updates in the future. This notice will be removed when this endpoint is out of
beta.



```js
linode.getObjectStorageBucket({
  "clusterId": "",
  "bucket": ""
}, context)
```

#### Input
* input `object`
  * clusterId **required** `string`: The ID of the cluster this bucket exists in.
  * bucket **required** `string`: The bucket name.

#### Output
* output [ObjectStorageBucket](#objectstoragebucket)

### modifyObjectStorageBucketAccess
Allows changing basic Cross-origin Resource Sharing (CORS) and Access Control Level (ACL) settings.
Only allows enabling/disabling CORS for all origins, and/or setting canned ACLs.
For more fine-grained control of both systems, please use the S3 API directly.


This endpoint is available for convenience. It is recommended that instead you
use the more more [fully-featured S3 API](https://docs.ceph.com/docs/mimic/radosgw/s3/bucketops/#put-bucket-acl) directly.


**Beta**: This endpoint is in beta. Please make sure to prepend all requests with
`/v4beta` instead of `/v4`, and be aware that this endpoint may receive breaking
updates in the future. This notice will be removed when this endpoint is out of
beta.



```js
linode.modifyObjectStorageBucketAccess({
  "clusterId": "",
  "bucket": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * acl `string` (values: private, public-read, authenticated-read): The Access Control Level of the bucket, as a canned ACL string. For more fine-grained control of ACLs, use the S3 API directly.
    * cors_enabled `boolean`: If true, the bucket will be created with CORS enabled for all origins. For more fine-grained controls of CORS, use the S3 API directly.
  * clusterId **required** `string`: The ID of the cluster this bucket exists in.
  * bucket **required** `string`: The bucket name.

#### Output
* output `object`

### getObjectStorageBucketContent
Returns the contents of a bucket. The contents are paginated using a `marker`,
which is the name of the last object on the previous page.  Objects may
be filtered by `prefix` and `delimiter` as well; see Query Parameters for more
information.


This endpoint is available for convenience. It is recommended that instead you
use the more [fully-featured S3 API](https://docs.ceph.com/docs/luminous/radosgw/s3/bucketops/#get-bucket) directly.


**Beta**: This endpoint is in beta. Please make sure to prepend all requests with
`/v4beta` instead of `/v4`, and be aware that this endpoint may receive breaking
updates in the future. This notice will be removed when this endpoint is out of
beta.



```js
linode.getObjectStorageBucketContent({
  "clusterId": "",
  "bucket": ""
}, context)
```

#### Input
* input `object`
  * marker `string`: The "marker" for this request, which can be used to paginate through large buckets. Its value should be the value of the `next_marker` property returned with the last page. Listing bucket contents *does not* support arbitrary page access. See the `next_marker` property in the responses section for more details.
  * delimiter `string`: The delimiter for object names; if given, object names will be returned up to the first occurrence of this character. This is most commonly used with the `/` character to allow bucket transversal in a manner similar to a filesystem, however any delimiter may be used. Use in conjunction with `prefix` to see object names past the first occurrence of the delimiter.
  * prefix `string`: Filters objects returned to only those whose name start with the given prefix. Commonly used in conjunction with `delimiter` to allow transversal of bucket contents in a manner similar to a filesystem.
  * page_size `integer`: The number of items to return per page.
  * clusterId **required** `string`: The ID of the cluster this bucket exists in.
  * bucket **required** `string`: The bucket name.

#### Output
* output `object`
  * data `array`: This page of objects in the bucket.
    * items [ObjectStorageObject](#objectstorageobject)

### createObjectStorageObjectURL
Creates a pre-signed URL to access a single Object in a bucket. This
can be used to share objects, and also to create/delete objects by using
the appropriate HTTP method in your request body's `method` parameter.


This endpoint is available for convenience. It is recommended that instead you
use the more [fully-featured S3 API](https://docs.ceph.com/docs/mimic/radosgw/s3/)
directly.


**Beta**: This endpoint is in beta. Please make sure to prepend all requests with
`/v4beta` instead of `/v4`, and be aware that this endpoint may receive breaking
updates in the future. This notice will be removed when this endpoint is out of
beta.



```js
linode.createObjectStorageObjectURL({
  "clusterId": "",
  "bucket": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * content_type `string`: The expected `Content-type` header of the request this signed URL will be valid for.  If provided, the `Content-type` header _must_ be sent with the request when this URL is used, and _must_ be the same as it was when the signed URL was created. Required for all methods *except* "GET" or "DELETE".
    * expires_in `integer`: How long this signed URL will be valid for, in seconds.  If omitted, the URL will be valid for 3600 seconds (1 hour).
    * method **required** `string`: The HTTP method allowed to be used with the pre-signed URL.
    * name **required** `string`: The name of the object that will be accessed with the pre-signed URL. This object need not exist, and no error will be returned if it doesn't. This behavior is useful for generating pre-signed URLs to upload new objects to by setting the `method` to "PUT".
  * clusterId **required** `string`: The ID of the cluster this bucket exists in.
  * bucket **required** `string`: The bucket name.

#### Output
* output `object`
  * url `string`: The signed URL to perform the request at.

### getObjectStorageClusters
Returns a paginated list of Object Storage Clusters that are available for
use.  Users can connect to the clusters with third party clients to create buckets
and upload objects.


**Beta**: This endpoint is in beta. Please make sure to prepend all requests with
`/v4beta` instead of `/v4`, and be aware that this endpoint may receiving breaking
updates in the future.  This notice will be removed when this endpoint is out of
beta.



```js
linode.getObjectStorageClusters(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items [ObjectStorageCluster](#objectstoragecluster)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### getObjectStorageCluster
Returns a single Object Storage Cluster.


**Beta**: This endpoint is in beta. Please make sure to prepend all requests with
`/v4beta` instead of `/v4`, and be aware that this endpoint may receiving breaking
updates in the future.  This notice will be removed when this endpoint is out of
beta.



```js
linode.getObjectStorageCluster({
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * clusterId **required** `string`: The ID of the Cluster.

#### Output
* output [ObjectStorageCluster](#objectstoragecluster)

### getObjectStorageKeys
Returns a paginated list of Object Storage Keys for authenticating to
the Object Storage S3 API.


**Beta**: This endpoint is in beta. Please make sure to prepend all requests with
`/v4beta` instead of `/v4`, and be aware that this endpoint may receiving breaking
updates in the future.  This notice will be removed when this endpoint is out of
beta.



```js
linode.getObjectStorageKeys(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items [ObjectStorageKey](#objectstoragekey)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### createObjectStorageKeys
Provisions a new Object Storage Key on your account.


**Beta**: This endpoint is in beta. Please make sure to prepend all requests with
`/v4beta` instead of `/v4`, and be aware that this endpoint may receiving breaking
updates in the future.  This notice will be removed when this endpoint is out of
beta.



```js
linode.createObjectStorageKeys({}, context)
```

#### Input
* input `object`
  * body `object`
    * label `string`: The label for this keypair, for display purposes only.

#### Output
* output
  * access_key `string`: This keypair's access key. This is not secret.
  * id `integer`: This keypair's unique ID
  * label `string`: The label given to this key. For display purposes only.
  * secret_key `string`: This keypair's secret key. **Only returned on key creation**.

### deleteObjectStorageKey
Revokes an Object Storage Key.  This keypair will no longer be usable by third-party clients.


**Beta**: This endpoint is in beta. Please make sure to prepend all requests with
`/v4beta` instead of `/v4`, and be aware that this endpoint may receiving breaking
updates in the future. This notice will be removed when this endpoint is out of
beta.



```js
linode.deleteObjectStorageKey({
  "keyId": 0
}, context)
```

#### Input
* input `object`
  * keyId **required** `integer`: The key to look up.

#### Output
* output `object`

### getObjectStorageKey
Returns a single Object Storage Key provisioned for your account.


**Beta**: This endpoint is in beta. Please make sure to prepend all requests with
`/v4beta` instead of `/v4`, and be aware that this endpoint may receiving breaking
updates in the future. This notice will be removed when this endpoint is out of
beta.



```js
linode.getObjectStorageKey({
  "keyId": 0
}, context)
```

#### Input
* input `object`
  * keyId **required** `integer`: The key to look up.

#### Output
* output [ObjectStorageKey](#objectstoragekey)

### updateObjectStorageKey
Updates an Object Storage Key on your account.


**Beta**: This endpoint is in beta. Please make sure to prepend all requests with
`/v4beta` instead of `/v4`, and be aware that this endpoint may receiving breaking
updates in the future. This notice will be removed when this endpoint is out of
beta.



```js
linode.updateObjectStorageKey({
  "keyId": 0
}, context)
```

#### Input
* input `object`
  * body [ObjectStorageKey](#objectstoragekey)
  * keyId **required** `integer`: The key to look up.

#### Output
* output [ObjectStorageKey](#objectstoragekey)

### getProfile
Returns information about the current User. This can be used to see who is acting in applications where more than one token is managed. For example, in third-party OAuth applications.

This endpoint is always accessible, no matter what OAuth scopes the acting token has.



```js
linode.getProfile(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Profile](#profile)

### updateProfile
Update information in your Profile.  This endpoint requires the "account:read_write" OAuth Scope.



```js
linode.updateProfile({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Profile](#profile)

#### Output
* output [Profile](#profile)

### getProfileApps
This is a collection of OAuth apps that you've given access to your Account, and includes the level of access granted.



```js
linode.getProfileApps({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [AuthorizedApp](#authorizedapp)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### deleteProfileApp
Expires this app token. This token may no longer be used to access your Account.



```js
linode.deleteProfileApp({
  "appId": 0
}, context)
```

#### Input
* input `object`
  * appId **required** `integer`: The authorized app ID to manage.

#### Output
* output `object`

### getProfileApp
Returns information about a single app you've authorized to access your Account.



```js
linode.getProfileApp({
  "appId": 0
}, context)
```

#### Input
* input `object`
  * appId **required** `integer`: The authorized app ID to manage.

#### Output
* output [AuthorizedApp](#authorizedapp)

### getDevices
Returns a paginated list of active TrustedDevices for your User. Browsers with an active Remember Me Session are logged into your account until the session expires or is revoked.



```js
linode.getDevices(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items [TrustedDevice](#trusteddevice)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### revokeTrustedDevice
Revoke an active TrustedDevice for your User.  Once a TrustedDevice is revoked, this device will have to log in again before accessing your Linode account.



```js
linode.revokeTrustedDevice({
  "deviceId": 0
}, context)
```

#### Input
* input `object`
  * deviceId **required** `integer`: The ID of the TrustedDevice

#### Output
* output `object`

### getTrustedDevice
Returns a single active TrustedDevice for your User.



```js
linode.getTrustedDevice({
  "deviceId": 0
}, context)
```

#### Input
* input `object`
  * deviceId **required** `integer`: The ID of the TrustedDevice

#### Output
* output [TrustedDevice](#trusteddevice)

### getProfileGrants
This returns a GrantsResponse describing what the acting User has been granted access to.  For unrestricted users, this will return a  204 and no body because unrestricted users have access to everything without grants.  This will not return information about entities you do not have access to.  This endpoint is useful when writing third-party OAuth applications to see what options you should present to the acting User.

For example, if they do not have `global.add_linodes`, you might not display a button to deploy a new Linode.

Any client may access this endpoint; no OAuth scopes are required.



```js
linode.getProfileGrants(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [GrantsResponse](#grantsresponse)

### getUserPreferences
View a list of user preferences tied to the OAuth client that generated
the token making the request. The user preferences endpoints allow
consumers of the API to store arbitrary JSON data, such as a user's font
size preference or preferred display name. User preferences are available
for each OAuth client registered to your account, and as such an account can
have multiple user preferences.



```js
linode.getUserPreferences(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`: A dictionary of user preferences.

### updateUserPreferences
Updates a user's preferences. These preferences are tied to the OAuth client that generated the token making the request. The user preferences endpoints allow consumers of the API to store arbitrary JSON data, such as a user's font size preference or preferred display name. An account may have multiple preferences. Preferences, and the pertaining request body, may contain any arbitrary JSON data that the user would like to store.



```js
linode.updateUserPreferences({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`: Arbitrary JSON of your choosing.

#### Output
* output `object`: An object of user preferences.

### getSSHKeys
Returns a collection of SSH Keys you've added to your Profile.



```js
linode.getSSHKeys({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [SSHKey](#sshkey)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### addSSHKey
Adds an SSH Key to your Account profile.



```js
linode.addSSHKey({}, context)
```

#### Input
* input `object`
  * body [SSHKeyRequest](#sshkeyrequest)

#### Output
* output [SSHKey](#sshkey)

### deleteSSHKey
Deletes an SSH Key you have access to.

**Note:** deleting an SSH Key will *not* remove it from any Linode or Disk that was deployed with `authorized_keys`. In those cases, the keys must be manually deleted on the Linode or Disk. This endpoint will only delete the key's association from your Profile.



```js
linode.deleteSSHKey({
  "sshKeyId": 0
}, context)
```

#### Input
* input `object`
  * sshKeyId **required** `integer`: The ID of the SSHKey

#### Output
* output `object`

### getSSHKey
Returns a single SSH Key object identified by `id` that you have access to view.



```js
linode.getSSHKey({
  "sshKeyId": 0
}, context)
```

#### Input
* input `object`
  * sshKeyId **required** `integer`: The ID of the SSHKey

#### Output
* output [SSHKey](#sshkey)

### updateSSHKey
Updates an SSH Key that you have permission to `read_write`.



```js
linode.updateSSHKey({
  "body": {},
  "sshKeyId": 0
}, context)
```

#### Input
* input `object`
  * body **required** [SSHKey](#sshkey)
  * sshKeyId **required** `integer`: The ID of the SSHKey

#### Output
* output [SSHKey](#sshkey)

### tfaDisable
Disables Two Factor Authentication for your User. Once successful, login attempts from untrusted computers will only require a password before being successful. This is less secure, and is discouraged.



```js
linode.tfaDisable(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### tfaEnable
Generates a Two Factor secret for your User. TFA will not be enabled until you have successfully confirmed the code you were given with [tfa-enable-confirm](/api/v4/profile-tfa-enable-confirm/#post) (see below). Once enabled, logins from untrusted computers will be required to provide a TFA code before they are successful.



```js
linode.tfaEnable(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * expiry `string`: When this Two Factor secret expires.
  * secret `string`: Your Two Factor secret. This is used to generate time-based two factor codes required for logging in. Doing this will be required to confirm TFA an actually enable it.

### tfaConfirm
Confirms that you can successfully generate Two Factor codes and enables TFA on your Account. Once this is complete, login attempts from untrusted computers will be required to provide a Two Factor code before they are successful.



```js
linode.tfaConfirm({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * tfa_code `string`: The Two Factor code you generated with your Two Factor secret. These codes are time-based, so be sure it is current.

#### Output
* output `object`
  * scratch `string`: A one-use code that can be used in place of your Two Factor code, in case you are unable to generate one.  Keep this in a safe place to avoid being locked out of your Account.

### getPersonalAccessTokens
Returns a paginated list of Personal Access Tokens currently active for your User.



```js
linode.getPersonalAccessTokens(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items [PersonalAccessToken](#personalaccesstoken)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### createPersonalAccessToken
Creates a Personal Access Token for your User. The raw token will be returned in the response, but will never be returned again afterward so be sure to take note of it. You may create a token with _at most_ the scopes of your current token. The created token will be able to access your Account until the given expiry, or until it is revoked.



```js
linode.createPersonalAccessToken({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * expiry `string`: When this token should be valid until.  If omitted, the new token will be valid until it is manually revoked.
    * label [PersonalAccessToken/properties/label](#personalaccesstoken/properties/label)
    * scopes `string`: The scopes to create the token with.  These cannot be changed after creation, and may not exceed the scopes of the acting token. If omitted, the new token will have the same scopes as the acting token.

#### Output
* output [PersonalAccessToken](#personalaccesstoken)

### deletePersonalAccessToken
Revokes a Personal Access Token. The token will be invalidated immediately, and requests using that token will fail with a 401. It is possible to revoke access to the token making the request to revoke a token, but keep in mind that doing so could lose you access to the api and require you to create a new token through some other means.



```js
linode.deletePersonalAccessToken({
  "tokenId": 0
}, context)
```

#### Input
* input `object`
  * tokenId **required** `integer`: The ID of the token to access.

#### Output
* output `object`

### getPersonalAccessToken
Returns a single Personal Access Token.



```js
linode.getPersonalAccessToken({
  "tokenId": 0
}, context)
```

#### Input
* input `object`
  * tokenId **required** `integer`: The ID of the token to access.

#### Output
* output [PersonalAccessToken](#personalaccesstoken)

### updatePersonalAccessToken
Updates a Personal Access Token.



```js
linode.updatePersonalAccessToken({
  "body": {},
  "tokenId": 0
}, context)
```

#### Input
* input `object`
  * body **required** [PersonalAccessToken](#personalaccesstoken)
  * tokenId **required** `integer`: The ID of the token to access.

#### Output
* output [PersonalAccessToken](#personalaccesstoken)

### getRegions
Lists the Regions available for Linode services. Not all services are guaranteed to be
available in all Regions.



```js
linode.getRegions(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items [Region](#region)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### getRegion
Returns a single Region.



```js
linode.getRegion({
  "regionId": ""
}, context)
```

#### Input
* input `object`
  * regionId **required** `string`: ID of the Region to look up.

#### Output
* output [Region](#region)

### getTickets
Returns a collection of Support Tickets on your Account. Support Tickets can be both tickets you open with Linode for support, as well as tickets generated by Linode regarding your Account.
This collection includes all Support Tickets generated on your Account, with open tickets returned first.



```js
linode.getTickets({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [SupportTicket](#supportticket)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### createTicket
Open a Support Ticket.
Only one of the ID attributes (`linode_id`, `domain_id`, etc.) can be set on a single Support Ticket.



```js
linode.createTicket({}, context)
```

#### Input
* input `object`
  * body [SupportTicketRequest](#supportticketrequest)

#### Output
* output [SupportTicket](#supportticket)

### getTicket
Returns a Support Ticket under your Account.



```js
linode.getTicket({
  "ticketId": 0
}, context)
```

#### Input
* input `object`
  * ticketId **required** `integer`: The ID of the Support Ticket.

#### Output
* output [SupportTicket](#supportticket)

### createTicketAttachment
Adds a file attachment to an existing Support Ticket on your Account. File attachments are used to assist our Support team in resolving your Ticket. Examples of attachments are screen shots and text files that provide additional information.
Note: Accepted file extensions include: .gif, .jpg, .jpeg, .pjpg, .pjpeg, .tif, .tiff, .png, .pdf, or .txt.



```js
linode.createTicketAttachment({
  "body": null,
  "ticketId": 0
}, context)
```

#### Input
* input `object`
  * ticketId **required** `integer`: The ID of the Support Ticket.

#### Output
* output `object`

### closeTicket
Closes a Support Ticket you have access to modify.



```js
linode.closeTicket({
  "ticketId": 0
}, context)
```

#### Input
* input `object`
  * ticketId **required** `integer`: The ID of the Support Ticket.

#### Output
* output `object`

### getTicketReplies
Returns a collection of replies to a Support Ticket on your Account.



```js
linode.getTicketReplies({
  "ticketId": 0
}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.
  * ticketId **required** `integer`: The ID of the Support Ticket.

#### Output
* output `object`
  * data `array`
    * items [SupportTicketReply](#supportticketreply)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### createTicketReply
Adds a reply to an existing Support Ticket.



```js
linode.createTicketReply({
  "body": null,
  "ticketId": 0
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * description **required** `string`: The content of your reply.
  * ticketId **required** `integer`: The ID of the Support Ticket.

#### Output
* output [SupportTicketReply](#supportticketreply)

### getTags
Tags are User-defined labels attached to objects in your Account, such as Linodes. They are used for specifying and grouping attributes of objects that are relevant to the User.

This endpoint returns a paginated list of Tags on your account.



```js
linode.getTags({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [Tag](#tag)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### createTag
Creates a new Tag and optionally tags requested objects with it immediately.

**Important**: You must be an unrestricted User in order to add or modify Tags.



```js
linode.createTag({}, context)
```

#### Input
* input `object`
  * body `object`
    * domains `array`: A list of Domain IDs to apply the new Tag to.  You must be allowed to `read_write` all of the requested Domains, or the Tag will not be created and an error will be returned.
      * items `integer`
    * label **required** `string`: The new Tag.
    * linodes `array`: A list of Linode IDs to apply the new Tag to.  You must be allowed to `read_write` all of the requested Linodes, or the Tag will not be created and an error will be returned.
      * items `integer`
    * nodebalancers `array`: A list of NodeBalancer IDs to apply the new Tag to. You must be allowed to `read_write` all of the requested NodeBalancers, or the Tag will not be created and an error will be returned.
      * items `integer`
    * volumes `array`: A list of Volume IDs to apply the new Tag to.  You must be allowed to `read_write` all of the requested Volumes, or the Tag will not be created and an error will be returned.
      * items `integer`

#### Output
* output [Tag](#tag)

### deleteTag
Remove a Tag from all objects and delete it.

**Important**: You must be an unrestricted User in order to add or modify Tags.



```js
linode.deleteTag({
  "label": ""
}, context)
```

#### Input
* input `object`
  * label **required** `string`

#### Output
* output `object`

### getTaggedObjects
Returns a paginated list of all objects you've tagged with the requested Tag. This is a mixed collection of all object types.



```js
linode.getTaggedObjects({
  "label": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.
  * label **required** `string`

#### Output
* output `object`
  * data `array`
    * items `object`
      * type `string`
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### getVolumes
Returns a paginated list of Volumes you have permission to view.



```js
linode.getVolumes({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.

#### Output
* output `object`
  * data `array`
    * items [Volume](#volume)
  * page [PaginationEnvelope/properties/page](#paginationenvelope/properties/page)
  * pages [PaginationEnvelope/properties/pages](#paginationenvelope/properties/pages)
  * results [PaginationEnvelope/properties/results](#paginationenvelope/properties/results)

### createVolume
Creates a Volume on your Account. In order for this to complete successfully, your User must have the `add_volumes` grant. Creating a new Volume will start accruing additional charges on your account.



```js
linode.createVolume({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * tags `array`: An array of Tags applied to this object.  Tags are for organizational purposes only.
      * items `string`
    * config_id `integer`: When creating a Volume attached to a Linode, the ID of the Linode Config to include the new Volume in. This Config must belong to the Linode referenced by `linode_id`. Must _not_ be provided if `linode_id` is not sent. If a `linode_id` is sent without a `config_id`, the volume will be attached:
    * label `string`: The Volume's label, which is also used in the `filesystem_path` of the resulting volume.
    * linode_id `integer`: The Linode this volume should be attached to upon creation. If not given, the volume will be created without an attachment.
    * region `string`: The Region to deploy this Volume in. This is only required if a linode_id is not given.
    * size `integer`: The initial size of this volume, in GB.  Be aware that volumes may only be resized up after creation.

#### Output
* output [Volume](#volume)

### deleteVolume
Deletes a Volume you have permission to `read_write`.

**Deleting a Volume is a destructive action and cannot be undone.**

Deleting stops billing for the Volume. You will be billed for time used within
the billing period the Volume was active.



```js
linode.deleteVolume({
  "volumeId": 0
}, context)
```

#### Input
* input `object`
  * volumeId **required** `integer`: ID of the Volume to look up.

#### Output
* output `object`

### getVolume
Get information about a single Volume.



```js
linode.getVolume({
  "volumeId": 0
}, context)
```

#### Input
* input `object`
  * page `integer`: The page of a collection to return.
  * page_size `integer`: The number of items to return per page.
  * volumeId **required** `integer`: ID of the Volume to look up.

#### Output
* output [Volume](#volume)

### updateVolume
Updates a Volume that you have permission to `read_write`.



```js
linode.updateVolume({
  "body": null,
  "volumeId": 0
}, context)
```

#### Input
* input `object`
  * body **required**
    * tags `array`: An array of Tags applied to this object.  Tags are for organizational purposes only.
      * items `string`
    * created `string`: When this Volume was created.
    * filesystem_path `string`: The full filesystem path for the Volume based on the Volume's label. Path is /dev/disk/by-id/scsi-0Linode_Volume_ + Volume label.
    * id `integer`: The unique ID of this Volume.
    * label **required** `string`: The Volume's label is for display purposes only.
    * linode_id `integer`: If a Volume is attached to a specific Linode, the ID of that Linode will be displayed here.
    * region [Region/properties/id](#region/properties/id)
    * size `integer`: The Volume's size, in GiB.
    * status `string` (values: creating, active, resizing, contact_support): The current status of the volume.  Can be one of:
    * updated `string`: When this Volume was last updated.
    * linode_id
    * region
    * size
  * volumeId **required** `integer`: ID of the Volume to look up.

#### Output
* output [Volume](#volume)

### attachVolume
Attaches a Volume on your Account to an existing Linode on your Account. In order for this request to complete successfully, your User must have `read_only` or `read_write` permission to the Volume and `read_write` permission to the Linode. Additionally, the Volume and Linode must be located in the same Region.



```js
linode.attachVolume({
  "body": {},
  "volumeId": 0
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * config_id `integer`: The ID of the Linode Config to include this Volume in. Must belong to the Linode referenced by `linode_id`. If not given, the last booted Config will be chosen.
    * linode_id
    * persist_across_boots `boolean`: Defaults to true, if false is provided, the Volume will not be attached to the Linode Config. In this case more than 8 Volumes may be attached to a Linode if a Linode has 16GB of RAM or more. The number of volumes that can be attached is equal to the number of GB of RAM that the Linode has, up to a maximum of 64. `config_id` should not be passed if this is set to false and linode_id must be passed. The Linode must be running.
  * volumeId **required** `integer`: ID of the Volume to attach.

#### Output
* output [Volume](#volume)

### cloneVolume
Creates a Volume on your Account. In order for this request to complete successfully, your User must have the `add_volumes` grant. The new Volume will have the same size and data as the source Volume. Creating a new Volume will incur a charge on your Account.



```js
linode.cloneVolume({
  "body": {
    "label": ""
  },
  "volumeId": 0
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * label **required** [Volume/properties/label](#volume/properties/label)
  * volumeId **required** `integer`: ID of the Volume to clone.

#### Output
* output `object`

### detachVolume
Detaches a Volume on your Account from a Linode on your Account. In order for this request to complete successfully, your User must have `read_write` access to the Volume and `read_write` access to the Linode.



```js
linode.detachVolume({
  "volumeId": 0
}, context)
```

#### Input
* input `object`
  * volumeId **required** `integer`: ID of the Volume to detach.

#### Output
* output `object`

### resizeVolume
Resize an existing Volume on your Account. In order for this request to complete successfully, your User must have the `read_write` permissions to the Volume.
* Volumes can only be resized up.



```js
linode.resizeVolume({
  "body": {
    "size": 0
  },
  "volumeId": 0
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * size **required** [Volume/properties/size](#volume/properties/size)
  * volumeId **required** `integer`: ID of the Volume to resize.

#### Output
* output `object`



## Definitions

### Account
* Account `object`: Account object
  * active_promotions `array`
    * items `object`: A list of active promotions on your account. Promotions generally
      * credit_monthly_cap `string`: The amount available to spend per month.
      * credit_remaining `string`: The total amount of credit left for this promotion.
      * description `string`: A detailed description of this promotion.
      * expire_dt `string`: When this promotion's credits expire.
      * image_url `string`: The location of an image for this promotion.
      * summary `string`: Short details of this promotion.
      * this_month_credit_remaining `string`: The amount of credit left for this month for this promotion.
  * active_since `string`: The datetime of when the account was activated.
  * address_1 `string`: First line of this Account's billing address.
  * address_2 `string`: Second line of this Account's billing address.
  * balance `number`: This Account's balance, in US dollars.
  * balance_uninvoiced `number`: This Account's current estimated invoice in US dollars. This is not your final invoice balance. Bandwidth charges are not included in the estimate.
  * capabilities `array`: A list of capabilities your account supports.
    * items `string`
  * city `string`: The city for this Account's billing address.
  * company `string`: The company name associated with this Account.
  * country `string`: The two-letter country code of this Account's billing address.
  * credit_card `object`: Credit Card information associated with this Account.
    * expiry `string`: The expiration month and year of the credit card.
    * last_four `string`: The last four digits of the credit card associated with this Account.
  * email `string`: The email address of the person associated with this Account.
  * first_name `string`: The first name of the person associated with this Account.
  * last_name `string`: The last name of the person associated with this Account.
  * phone `string`: The phone number associated with this Account.
  * state `string`: If billing address is in the United States, this is the State portion of the Account's billing address. If the address is outside the US, this is the Province associated with the Account's billing address.
  * tax_id `string`: The tax identification number associated with this Account, for tax calculations in some countries. If you do not live in a country that collects tax, this should be `null`.
  * zip `string`: The zip code of this Account's billing address.

### AccountSettings
* AccountSettings `object`: Account Settings object
  * backups_enabled `boolean`: Account-wide backups default.  If `true`, all Linodes created will automatically be enrolled in the Backups service.  If `false`, Linodes will not be enrolled by default, but may still be enrolled on creation or later.
  * longview_subscription `string`: The Longview Pro tier you are currently subscribed to. The value must a [Longview Subscription](/api/v4/longview-subscriptions) ID or `null`.
  * managed `boolean`: Our 24/7 incident response service. This robust, multi-homed monitoring system distributes monitoring checks to ensure that your servers remain online and available at all times. Linode Managed can monitor any service or software stack reachable over TCP or HTTP. Once you add a service to Linode Managed, we'll monitor it for connectivity, response, and total request time.
  * network_helper `boolean`: Enables network helper across all users by default for new Linodes and Linode Configs.

### AuthorizedApp
* AuthorizedApp `object`: An application you have authorized access to your Account through OAuth.
  * created `string`: When this app was authorized.
  * expiry `string`: When this app's access token expires.  Please note that apps may still have active refresh tokens after this time passes.
  * id `integer`: This authorization's ID, used for revoking access.
  * label `string`: The name of the application you've authorized.
  * scopes `string`: The OAuth scopes this app was authorized with.  This defines what parts of your Account the app is allowed to access.
  * thumbnail_url `string`: The URL at which this app's thumbnail may be accessed.
  * website `string`: The website where you can get more information about this app.

### Backup
* Backup `object`: An object representing a Backup or snapshot for a Linode with Backup service enabled.
  * configs `array`: A list of the labels of the Configuration profiles that are part of the Backup.
    * items `string`
  * created `string`: The date the Backup was taken.
  * disks `array`: A list of the disks that are part of the Backup.
    * items `object`
      * filesystem [Disk/properties/filesystem](#disk/properties/filesystem)
      * label `string`
      * size `integer`
  * finished `string`: The date the Backup completed.
  * id `integer`: The unique ID of this Backup.
  * label `string`: A label for Backups that are of type `snapshot`.
  * status `string` (values: paused, pending, running, needsPostProcessing, successful, failed, userAborted): The current state of a specific Backup.
  * type `string` (values: auto, snapshot): This indicates whether the Backup is an automatic Backup or manual snapshot taken by the User at a specific point in time.
  * updated `string`: The date the Backup was most recently updated.

### CreditCard
* CreditCard `object`: An object representing the credit card information you have on file with Linode to make Payments against your Account.
  * card_number **required** `string`: Your credit card number. No spaces or dashes allowed.
  * expiry_month **required** `integer`: A value from 1-12 representing the expiration month of your credit card.
  * expiry_year **required** `integer`: A four-digit integer representing the expiration year of your credit card.

### Device
* Device `object`: Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
  * disk_id `integer`: The Disk ID, or `null` if a Volume is assigned to this slot.
  * volume_id `integer`: The Volume ID, or `null` if a Disk is assigned to this slot.

### Devices
* Devices `object`: A dictionary of device disks to use as a device map in a Linode's configuration profile.
  * sda [Device](#device)
  * sdb [Device](#device)
  * sdc [Device](#device)
  * sdd [Device](#device)
  * sde [Device](#device)
  * sdf [Device](#device)
  * sdg [Device](#device)
  * sdh [Device](#device)

### Disk
* Disk `object`
  * created `string`: When this Linode was created.
  * filesystem `string` (values: raw, swap, ext3, ext4, initrd): The Disk filesystem can be one of:
  * id `integer`: This Disk's ID which must be provided for all operations impacting this Disk.
  * label `string`: The Disk's label is for display purposes only.
  * size `integer`: The size of the Disk in MB.
  * status `string` (values: ready, not ready, deleting): A brief description of this Disk's current state. This field may change without direct action from you, as a result of operations performed to the Disk or the Linode containing the Disk.
  * updated `string`: When this Linode was last updated.

### DiskRequest
* DiskRequest `object`: Disk object request.
  * authorized_keys `array`: A list of public SSH keys that will be automatically appended to the root user's `~/.ssh/authorized_keys` file.
    * items `string`
  * authorized_users `array`: A list of usernames that will have their SSH keys, if any, automatically appended to the root user's `~/.ssh/authorized_keys` file.
    * items `string`
  * filesystem [Disk/properties/filesystem](#disk/properties/filesystem)
  * image `string`: An Image ID to deploy the Disk from. Official Linode Images start with `linode/ `, while your Images start with `private/`.
  * label **required** [Disk/properties/label](#disk/properties/label)
  * read_only `boolean`: If true, this Disk is read-only.
  * root_pass `string`: This will set the root user's password on the newly-created Linode.
  * size **required** `integer`
  * stackscript_data `object`: This field is required only if the StackScript being deployed requires input
  * stackscript_id `integer`: A StackScript ID that will cause the referenced StackScript to be run during

### Domain
* Domain `object`: A domain zonefile in our DNS system.  You must own the domain name and tell your registrar to use Linode's nameservers in order for a domain in our system to be treated as authoritative.
  * tags `array`: An array of tags applied to this object.  Tags are for organizational purposes only.
    * items `string`
  * axfr_ips `array`: The list of IPs that may perform a zone transfer for this Domain. This is potentially dangerous, and should be set to an empty list unless you intend to use it.
    * items `string`
  * description `string`: A description for this Domain. This is for display purposes only.
  * domain **required** `string`: The domain this Domain represents. Domain labels cannot be longer than 63 characters and must conform to [RFC1035](https://tools.ietf.org/html/rfc1035). Domains must be unique on Linode's platform, including across different Linode accounts; there cannot be two Domains representing the same domain.
  * expire_sec `integer`: The amount of time in seconds that may pass before this Domain is no longer authoritative. Valid values are 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200 - any other value will be rounded to the nearest valid value.
  * group `string`: The group this Domain belongs to.  This is for display purposes only.
  * id **required** `integer`: This Domain's unique ID
  * master_ips `array`: The IP addresses representing the master DNS for this Domain.
    * items `string`
  * refresh_sec `integer`: The amount of time in seconds before this Domain should be refreshed. Valid values are 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200 - any other value will be rounded to the nearest valid value.
  * retry_sec `integer`: The interval, in seconds, at which a failed refresh should be retried. Valid values are 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200 - any other value will be rounded to the nearest valid value.
  * soa_email `string`: Start of Authority email address. This is required for master Domains.
  * status `string` (values: disabled, active, edit_mode, has_errors): Used to control whether this Domain is currently being rendered.
  * ttl_sec `integer`: "Time to Live" - the amount of time in seconds that this Domain's records may be cached by resolvers or other domain servers.
  * type **required** `string` (values: master, slave): If this Domain represents the authoritative source of information for the domain it describes, or if it is a read-only copy of a master (also called a slave).

### DomainRecord
* DomainRecord `object`: A single record on a Domain.
  * id `integer`: This Record's unique ID.
  * name `string`: The name of this Record. This field's actual usage depends on the type of record this represents. For A and AAAA records, this is the subdomain being associated with an IP address.
  * port `integer`: The port this Record points to.
  * priority `integer`: The priority of the target host. Lower values are preferred.
  * protocol `string`: The protocol this Record's service communicates with. Only valid for SRV records.
  * service `string`: The service this Record identified. Only valid for SRV records.
  * tag `string`: The tag portion of a CAA record. It is invalid to set this on other record types.
  * target `string`: The target for this Record. This field's actual usage depends on the type of record this represents. For A and AAAA records, this is the address the named Domain should resolve to.
  * ttl_sec `integer`: "Time to Live" - the amount of time in seconds that this Domain's records may be cached by resolvers or other domain servers. Valid values are 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200 - any other value will be rounded to the nearest valid value.
  * type `string` (values: A, AAAA, NS, MX, CNAME, TXT, SRV, PTR, CAA): The type of Record this is in the DNS system. For example, A records associate a domain name with an IPv4 address, and AAAA records associate a domain name with an IPv6 address.
  * weight `integer`: The relative weight of this Record. Higher values are preferred.

### ErrorObject
* ErrorObject `object`: An object for describing a single error that occurred during the processing of a request.
  * field `string`: The field in the request that caused this error. This may be a path, separated by periods in the case of nested fields. In some cases this may come back as "null" if the error is not specific to any single element of the request.
  * reason `string`: What happened to cause this error. In most cases, this can be fixed immediately by changing the data you sent in the request, but in some cases you will be instructed to [open a Support Ticket](/api/v4/support-tickets/#post) or perform some other action before you can complete the request successfully.

### Event
* Event `object`: A collection of Event objects. An Event is an action taken against an entity related to your Account. For example, booting a Linode would create an Event.
  * action `string` (values: account_update, account_settings_update, backups_enable, backups_cancel, backups_restore, community_question_reply, community_like, credit_card_updated, disk_create, disk_delete, disk_update, disk_duplicate, disk_imagize, disk_resize, dns_record_create, dns_record_delete, dns_record_update, dns_zone_create, dns_zone_delete, dnz_zone_import, dns_zone_update, host_reboot, image_delete, image_update, ipaddress_update, lassie_reboot, lish_boot, linode_addip, linode_boot, linode_clone, linode_create, linode_delete, linode_update, linode_deleteip, linode_migrate, linode_migrate_datacenter, linode_migrate_datacenter_create, linode_mutate, linode_mutate_create, linode_reboot, linode_rebuild, linode_resize, linode_resize_create, linode_shutdown, linode_snapshot, linode_config_create, linode_config_delete, linode_config_update, longviewclient_create, longviewclient_delete, longviewclient_update, managed_disabled, managed_enabled, managed_service_create, managed_service_delete, nodebalancer_create, nodebalancer_delete, nodebalancer_update, nodebalancer_config_create, nodebalancer_config_delete, nodebalancer_config_update, nodebalancer_node_create, nodebalancer_node_delete, nodebalancer_node_update, oauth_client_create, oauth_client_delete, oauth_client_secret_reset, oauth_client_update, password_reset, payment_submitted, profile_update, stackscript_create, stackscript_delete, stackscript_update, stackscript_publicize, stackscript_revise, tag_create, tag_delete, tfa_disabled, tfa_enabled, ticket_attachment_upload, ticket_create, ticket_update, token_create, token_delete, token_update, user_create, user_update, user_delete, user_ssh_key_add, user_ssh_key_delete, user_ssh_key_update, vlan_attach, vlan_detach, volume_attach, volume_clone, volume_create, volume_delete, volume_update, volume_detach, volume_resize): The action that caused this Event. New actions may be added in the future.
  * created `string`: When this Event was created.
  * entity `object`: Detailed information about the Event's entity, including ID, type, label, and URL used to access it.
    * id `integer`: The unique ID for an Event's entity.
    * label `string`: The current label of this object. The label may reflect changes that occur with this Event.
    * type `string` (values: account, backups, community, disks, domain, image, ipaddress, linode, longview, managed_service, nodebalancer, oauth_client, profile, stackscript, tag, ticket, token, user, user_ssh_key, volume): The type of entity that is being referenced by the Event.
    * url `string`: The URL where you can access the object this Event is for. If a relative URL, it is relative to the domain you retrieved the Event from.
  * id `integer`: The unique ID of this Event.
  * percent_complete `integer`: A percentage estimating the amount of time remaining for an Event.
  * rate `string`: The rate of completion of the Event. Only some Events will return rate; for example, migration and resize Events.
  * read `boolean`: If this Event has been read.
  * secondary_entity `object`: Detailed information about the Event's secondary entity, which provides additional information
    * id `string`: The ID of the object that is the secondary entity.
    * label `string`: The label of this object.
    * type `string`: The type of entity that is being referenced by the Event.
    * url `string`: The URL where you can access the object this Event is for. If a relative URL, it is relative to the domain you retrieved the Event from.
  * seen `boolean`: If this Event has been seen.
  * status `string` (values: failed, finished, notification, scheduled, started): The current status of this Event.
  * time_remaining `string`: The estimated time remaining until the completion of this Event. This value is only returned for some in-progress migration events. For all other in-progress events, the `percent_complete` attribute will indicate about how much more work is to be done.
  * username `string`: The username of the User who caused the Event.

### Grant
* Grant `object`: Represents the level of access a restricted User has to a specific resource on the Account.
  * id `integer`: The ID of the entity this grant applies to.
  * label `string`: The current label of the entity this grant applies to, for display purposes.
  * permissions `string` (values: , read_only, read_write): The level of access this User has to this entity.  If null, this User has no access.

### GrantsResponse
* GrantsResponse `object`: A structure representing all grants a restricted User has on the Account. Not available for unrestricted users, as they have access to everything without grants. If retrieved from the `/profile/grants` endpoint, entities to which a User has no access will be omitted.
  * domain `array`: The grants this User has pertaining to Domains on this Account. There will be one entry per Domain on the Account.
    * items [Grant](#grant)
  * global `object`: A structure containing the Account-level grants a User has.
    * account_access `string` (values: , read_only, read_write): The level of access this User has to Account-level actions, like billing information. A restricted User will never be able to manage users.
    * add_domains `boolean`: If true, this User may add Domains.
    * add_images `boolean`: If true, this User may add Images.
    * add_linodes `boolean`: If true, this User may create Linodes.
    * add_longview `boolean`: If true, this User may create Longview clients.
    * add_nodebalancers `boolean`: If true, this User may add NodeBalancers.
    * add_stackscripts `boolean`: If true, this User may add StackScripts.
    * add_volumes `boolean`: If true, this User may add Volumes.
    * cancel_account `boolean`: If true, this User may cancel the entire Account.
    * longview_subscription `boolean`: If true, this User may manage the Account's Longview subscription.
  * image `array`: The grants this User has pertaining to Images on this Account. There will be one entry per Image on the Account.
    * items [Grant](#grant)
  * linode `array`: The grants this User has pertaining to Linodes on this Account. There will be one entry per Linode on the Account.
    * items [Grant](#grant)
  * longview `array`: The grants this User has pertaining to Longview Clients on this Account. There will be one entry per Longview Client on the Account.
    * items [Grant](#grant)
  * nodebalancer `array`: The grants this User has pertaining to NodeBalancers on this Account. There will be one entry per NodeBalancer on the Account.
    * items [Grant](#grant)
  * stackscript `array`: The grants this User has pertaining to StackScripts on this Account.  There will be one entry per StackScript on the Account.
    * items [Grant](#grant)
  * volume `array`: The grants this User has pertaining to Volumes on this Account. There will be one entry per Volume on the Account.
    * items [Grant](#grant)

### IPAddress
* IPAddress `object`: An IP address that exists in Linode's system, either IPv4 or IPv6.
  * address `string`: The IP address.
  * gateway `string`: The default gateway for this address.
  * linode_id `integer`: The ID of the Linode this address currently belongs to. For IPv4 addresses, this is by default the Linode that this address was assigned to on creation, and these addresses my be moved using the [/networking/ipv4/assign](/api/v4/networking-ipv-4-assign/#post) endpoint. For SLAAC and link-local addresses, this value may not be changed.
  * prefix `integer`: The number of bits set in the subnet mask.
  * public `boolean`: Whether this is a public or private IP address.
  * rdns `string`: The reverse DNS assigned to this address. For public IPv4 addresses, this will be set to a default value provided by Linode if not explicitly set.
  * region `string`: The Region this IP address resides in.
  * subnet_mask `string`: The mask that separates host bits from network bits for this address.
  * type `string` (values: ipv4, ipv6, ipv6/pool, ipv6/range): The type of address this is.

### IPAddressPrivate
* IPAddressPrivate `object`: A private IPv4 address that exists in Linode's system.
  * address `string`: The private IPv4 address.
  * gateway `string`: The default gateway for this address.
  * linode_id `integer`: The ID of the Linode this address currently belongs to.
  * prefix `integer`: The number of bits set in the subnet mask.
  * public `boolean`: Whether this is a public or private IP address.
  * rdns `string`: The reverse DNS assigned to this address.
  * region `string`: The Region this address resides in.
  * subnet_mask `string`: The mask that separates host bits from network bits for this address.
  * type `string`: The type of address this is.

### IPAddressV6LinkLocal
* IPAddressV6LinkLocal `object`: A link-local IPv6 address that exists in Linode's system,.
  * address `string`: The IPv6 link-local address.
  * gateway `string`: The default gateway for this address.
  * linode_id `integer`: The ID of the Linode this address currently belongs to.
  * prefix `integer`: The network prefix.
  * public `boolean`: Whether this is a public or private IP address.
  * rdns `string`: The reverse DNS assigned to this address.
  * region `string`: The Region this address resides in.
  * subnet_mask `string`: The subnet mask.
  * type `string`: The type of address this is.

### IPAddressV6Slaac
* IPAddressV6Slaac `object`: A SLAAC IPv6 address that exists in Linode's system.
  * address `string`: The address.
  * gateway `string`: The default gateway for this address.
  * linode_id `integer`: The ID of the Linode this address currently belongs to.
  * prefix `integer`: The network prefix.
  * public `boolean`: Whether this is a public or private IP address.
  * rdns `string`: The reverse DNS assigned to this address.
  * region `string`: The Region this address resides in.
  * subnet_mask `string`: The subnet mask.
  * type `string`: The type of address this is.

### IPv6Pool
* IPv6Pool `object`: An object representing an IPv6 pool.
  * prefix `integer`: The prefix length of the address, denoting which addresses can be assigned from this pool.
  * range `string`: The IPv6 pool
  * region `string`: A pool of IPv6 addresses that are routed to all of your Linodes in a single Region. Any Linode you own may bring up any address in this pool at any time, with no external configuration required.

### IPv6Range
* IPv6Range `object`: An object representing an IPv6 range.
  * range `string`: The IPv6 range.
  * region `string`: A range of IPv6 addresses routed to a single Linode in the given Region. Your Linode is responsible for routing individual addresses in the range, or handling traffic for all of the addresses in the range.

### ImagePrivate
* ImagePrivate `object`: Private Image object
  * created `string`: When this Image was created.
  * created_by `string`: The name of the User who created this Image.
  * deprecated `boolean`: Whether or not this Image is deprecated. Will only be True for deprecated public Images.
  * description `string`: A detailed description of this Image.
  * expiry `string`: Only Images created automatically (from a deleted Linode; type=automatic) will expire.
  * id `string`: The unique ID of this Image.
  * is_public `boolean`: True if the Image is public.
  * label `string`: A short description of the Image. Labels cannot contain special characters.
  * size `integer`: The minimum size this Image needs to deploy. Size is in MB.
  * type `string` (values: manual, automatic): How the Image was created. "Manual" Images can be created at any time. "Automatic" images are created automatically from a deleted Linode.
  * vendor `string`: The upstream distribution vendor. `None` for private Images.

### ImagePublic
* ImagePublic `object`: Public Image object
  * created `string`: When this Image was created.
  * created_by `string`: The name of the User who created this Image, or "linode" for official Images.
  * deprecated `boolean`: Whether or not this Image is deprecated. Will only be true for deprecated public Images.
  * description `string`: A detailed description of this Image.
  * expiry `string`: Only Images created automatically (from a deleted Linode; type=automatic) will expire.
  * id `string`: The unique ID of this Image.
  * is_public `boolean`: True if the Image is public.
  * label `string`: A short description of the Image.
  * size `integer`: The minimum size this Image needs to deploy. Size is in MB.
  * type `string` (values: manual, automatic): How the Image was created. Manual Images can be created at any time. "Automatic" Images are created automatically from a deleted Linode.
  * vendor `string`: The upstream distribution vendor. `None` for private Images.

### Invoice
* Invoice `object`: Account Invoice object
  * date `string`: When this Invoice was generated.
  * id `integer`: The Invoice's unique ID.
  * label `string`: The Invoice's display label.
  * subtotal `integer`: The amount of the Invoice before taxes in US Dollars.
  * tax `integer`: The amount of tax levied on the Invoice in US Dollars.
  * total `integer`: The amount of the Invoice after taxes in US Dollars.

### InvoiceItem
* InvoiceItem `object`: An InvoiceItem object.
  * amount `integer`: The price, in US dollars, of the Invoice Item. Equal to the unit price multiplied by quantity.
  * from `string`: The date the Invoice Item started, based on month.
  * label `string`: The Invoice Item's display label.
  * quantity `integer`: The quantity of this Item for the specified Invoice.
  * tax `integer`: The amount of tax levied on this Item in US Dollars.
  * to `string`: The date the Invoice Item ended, based on month.
  * total `integer`: The price of this Item after taxes in US Dollars.
  * type `string` (values: hourly, prepay, misc): The type of service, ether `prepay` or `misc`.
  * unitprice `integer`: The monthly service fee in US Dollars for this Item.

### Kernel
* Kernel `object`: Linux kernel object
  * architecture `string` (values: x86_64, i386): The architecture of this Kernel.
  * id `string`: The unique ID of this Kernel.
  * kvm `boolean`: If this Kernel is suitable for KVM Linodes.
  * label `string`: The friendly name of this Kernel.
  * pvops `boolean`: If this Kernel is suitable for paravirtualized operations.
  * version `string`: Linux Kernel version.
  * xen `boolean`: If this Kernel is suitable for Xen Linodes.

### Linode
* Linode `object`
  * tags `array`: An array of tags applied to this object.  Tags are for organizational purposes only.
    * items `string`
  * alerts `object`
    * cpu `integer`: The percentage of CPU usage required to trigger an alert.
    * io `integer`: The amount of disk IO operation per second required to trigger an alert. If the average disk IO over two hours exceeds this value, we'll send you an alert. If set to `0` (zero), this alert is disabled.
    * network_in `integer`: The amount of incoming traffic, in Mbit/s, required to trigger an alert. If the average incoming traffic over two hours exceeds this value, we'll send you an alert. If this is set to `0` (zero), the alert is disabled.
    * network_out `integer`: The amount of outbound traffic, in Mbit/s, required to trigger an alert. If the average outbound traffic over two hours exceeds this value, we'll send you an alert. If this is set to `0` (zero), the alert is disabled.
    * transfer_quota `integer`: The percentage of network transfer that may be used before an alert is triggered. When this value is exceeded, we'll alert you. If this is set to `0` (zero), the alert is disabled.
  * backups `object`: Information about this Linode's backups status. For information about available backups, see [/linode/instances/{linodeId}/backups](/api/v4/linode-instances-linode-id-backups).
    * enabled `boolean`: If this Linode has the Backup service enabled. To enable backups, see [POST /linode/instances/{linodeId}/backups/enable](/api/v4/linode-instances-linode-id-backups-enable/#post).
    * schedule `object`
      * day `string` (values: Scheduling, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday): The day of the week that your Linode's weekly Backup is taken.
      * window `string` (values: Scheduling, W0, W2, W4, W6, W8, W10, W12, W14, W16, W18, W20, W22): The window in which your backups will be taken, in UTC. A
  * created `string`: When this Linode was created.
  * group `string`: A deprecated property denoting a group label for this Linode.
  * hypervisor `string` (values: kvm): The virtualization software powering this Linode.
  * id `integer`: This Linode's ID which must be provided for all operations impacting this Linode.
  * image
  * ipv4 `array`: This Linode's IPv4 Addresses. Each Linode is assigned a single public IPv4 address
    * items `string`
  * ipv6 `string`: This Linode's IPv6 SLAAC addresses. This address is specific to a Linode, and may not be shared. If the Linode has not been assigned an IPv6 address, the return value will be `null`.
  * specs `object`: Information about the resources available to this Linode.
    * disk `integer`: The amount of storage space, in MB, this Linode has access to. A typical Linode will divide this space between a primary disk with an `image` deployed to it, and a swap disk, usually 512 MB. This is the default configuration created when deploying a Linode with an `image` through [POST /linode/instances](/api/v4/linode-instances/#post). While this configuration is suitable for 99% of use cases, if you need finer control over your Linode's disks, see the [/linode/instances/{linodeId}/disks](/api/v4/linode-instances-linode-id-disks) endpoints.
    * memory `integer`: The amount of RAM, in MB, this Linode has access to. Typically a Linode will choose to boot with all of its available RAM, but this can be configured in a Config profile, see the [/linode/instances/{linodeId}/configs](/api/v4/linode-instances-linode-id-configs) endpoints and the LinodeConfig object for more information.
    * transfer `integer`: The amount of network transfer this Linode is allotted each month.
    * vcpus `integer`: The number of vcpus this Linode has access to. Typically a Linode will choose to boot with all of its available vcpus, but this can be configured in a Config Profile, see the [/linode/instances/{linodeId}/configs](/api/v4/linode-instances-linode-id-configs) endpoints and the LinodeConfig object for more information.
  * status `string` (values: running, offline, booting, rebooting, shutting_down, provisioning, deleting, migrating, rebuilding, cloning, restoring): A brief description of this Linode's current state. This field may change without direct action from you. For instance, the status will change to "running"
  * updated `string`: When this Linode was last updated.
  * watchdog_enabled `boolean`: The watchdog, named Lassie, is a Shutdown Watchdog that monitors your Linode and will reboot it if it powers off unexpectedly. It works by issuing a boot job when your Linode powers off without a shutdown job being responsible.
  * group `string`: A deprecated property denoting a group label for this Linode.
  * label `string`: The Linode's label is for display purposes only. If no label is provided for a Linode, a default will be assigned.
  * region [Region/properties/id](#region/properties/id)
  * type [LinodeType/properties/id](#linodetype/properties/id)

### LinodeBase
* LinodeBase `object`: Common properties for Linode Request and Response objects.
  * group `string`: A deprecated property denoting a group label for this Linode.
  * label `string`: The Linode's label is for display purposes only. If no label is provided for a Linode, a default will be assigned.
  * region [Region/properties/id](#region/properties/id)
  * type [LinodeType/properties/id](#linodetype/properties/id)

### LinodeConfig
* LinodeConfig `object`
  * comments `string`: Optional field for arbitrary User comments on this Config.
  * devices **required** [Devices](#devices)
  * helpers `object`: Helpers enabled when booting to this Linode Config.
    * devtmpfs_automount `boolean`: Populates the /dev directory early during boot without udev.  Defaults to false.
    * distro `boolean`: Helps maintain correct inittab/upstart console device.
    * modules_dep `boolean`: Creates a modules dependency file for the Kernel you run.
    * network `boolean`: Automatically configures static networking.
    * updatedb_disabled `boolean`: Disables updatedb cron job to avoid disk thrashing.
  * id `integer`: The ID of this Config.
  * kernel `string`: A Kernel ID to boot a Linode with. Defaults to "linode/latest-64bit".
  * label **required** `string`: The Config's label is for display purposes only.
  * memory_limit `integer`: Defaults to the total RAM of the Linode.
  * root_device `string`: The root device to boot.
  * run_level `string` (values: default, single, binbash): Defines the state of your Linode after booting. Defaults to `default`.
  * virt_mode `string` (values: paravirt, fullvirt): Controls the virtualization mode. Defaults to `paravirt`.

### LinodeRequest
* LinodeRequest `object`: Common properties for creating and rebuilding Linodes.
  * authorized_keys [DiskRequest/properties/authorized_keys](#diskrequest/properties/authorized_keys)
  * authorized_users [DiskRequest/properties/authorized_users](#diskrequest/properties/authorized_users)
  * booted `boolean`: This field defaults to `true` if the Linode is created with an Image or from a Backup.
  * image [DiskRequest/properties/image](#diskrequest/properties/image)
  * root_pass [DiskRequest/properties/root_pass](#diskrequest/properties/root_pass)
  * stackscript_data [DiskRequest/properties/stackscript_data](#diskrequest/properties/stackscript_data)
  * stackscript_id [DiskRequest/properties/stackscript_id](#diskrequest/properties/stackscript_id)

### LinodeStats
* LinodeStats `object`: CPU, IO, IPv4, and IPv6 statistics. Graph data, if available, is in "[timestamp, reading]" array format. Timestamp is a UNIX timestamp in EST.
  * cpu `array`: Percentage of CPU used.
    * items `array`
      * items `number`
  * io `object`: Input/Output statistics.
    * io `array`: Block/s written.
      * items `array`
        * items `number`
    * swap `array`: Block/s written.
      * items `array`
        * items `number`
  * netv4 `object`: IPv4 statistics.
    * in `array`: Input stats for IPv4, measured in bits/s (bits/second).
      * items `array`
        * items `number`
    * out `array`: Output stats for IPv4, measured in bits/s (bits/second).
      * items `array`
        * items `number`
    * private_in `array`: Private IPv4 input statistics, measured in bits/s (bits/second).
      * items `array`
        * items `number`
    * private_out `array`: Private IPv4 output statistics, measured in bits/s (bits/second).
      * items `array`
        * items `number`
  * netv6 `object`: IPv6 statistics.
    * in `array`: Input stats for IPv6, measured in bits/s (bits/second).
      * items `array`
        * items `number`
    * out `array`: Output stats for IPv6, measured in bits/s (bits/second).
      * items `array`
        * items `number`
    * private_in `array`: Private IPv6 input statistics, measured in bits/s (bits/second).
      * items `array`
        * items `number`
    * private_out `array`: Private IPv6 output statistics, measured in bits/s (bits/second).
      * items `array`
        * items `number`
  * title `string`: The title for this data set.

### LinodeType
* LinodeType `object`: Returns collection of Linode types, including pricing and specifications for each type. These are used when [creating](/api/v4/linode-instances/#post) or [resizing](/api/v4/linode-instances-linode-id-resize/#post) Linodes.
  * addons `object`: A list of optional add-on services for Linodes and their associated costs.
    * backups `object`: Information about the optional Backup service offered for Linodes.
      * price `object`: Cost of enabling Backups for this Linode Type.
        * hourly `integer`: The cost (in US dollars) per hour to add Backups service.
        * monthly `integer`: The cost (in US dollars) per month to add Backups service.
  * class `string` (values: nanode, standard, dedicated, gpu, highmem): The class of the Linode Type. We currently offer five classes of Linodes:
  * disk `integer`: The Disk size, in MB, of the Linode Type.
  * gpus `integer`: The number of GPUs this Linode Type offers.
  * id `string`: The ID representing the Linode Type.
  * label `string`: The Linode Type's label is for display purposes only.
  * memory `integer`: Amount of RAM included in this Linode Type.
  * network_out `integer`: The Mbits outbound bandwidth allocation.
  * price `object`: Cost in US dollars, broken down into hourly and monthly charges.
    * hourly `integer`: Cost (in US dollars) per hour.
    * monthly `integer`: Cost (in US dollars) per month.
  * successor `string`: The Linode Type that a [mutate](/api/v4/linode-instances-linode-id-mutate/#post) will upgrade to for a Linode of this type.  If "null", a Linode of this type may not mutate.
  * transfer `integer`: The monthly outbound transfer amount, in MB.
  * vcpus `integer`: The number of VCPU cores this Linode Type offers.

### LongviewClient
* LongviewClient `object`: A LongviewClient is a single monitor set up to track statistics about one of your servers.
  * api_key `string`: The API key for this Client, used when configuring the Longview Client application on your Linode.
  * apps `object`: The apps this Client is monitoring on your Linode. This is configured when you install the Longview Client application, and is present here for information purposes only.
    * apache `boolean`: If True, the Apache Longview Client module is monitoring Apache on your server.
    * mysql `boolean`: If True, the MySQL Longview Client modules is monitoring MySQL on your server.
    * nginx `boolean`: If True, the Nginx Longview Client module is monitoring Nginx on your server.
  * created `string`: When this Longview Client was created.
  * id `integer`: This Client's unique ID.
  * install_code `string`: The install code for this Client, used when configuring the Longview Client application on your Linode.
  * label `string`: This Client's unique label. This is for display purposes only.
  * updated `string`: When this Longview Client was last updated.

### LongviewSubscription
* LongviewSubscription `object`: A Longview Subscriptions represents a tier of Longview service you can subscribe to.
  * clients_included `integer`: The number of Longview Clients that may be created with this Subscription tier.
  * id `string`: The unique ID of this Subscription tier.
  * label `string`: A display name for this Subscription tier.
  * price `object`: Pricing information about this Subscription tier.
    * hourly `number`: The hourly price, in US dollars, for this Subscription tier.
    * monthly `number`: The maximum monthly price in US Dollars for this Subscription tier. You will never be charged more than this amount per month for this subscription.

### ManagedContact
* ManagedContact `object`: Information about someone Linode's special forces may contact in case an issue is detected with a manager service.
  * email `string`: The address to email this Contact to alert them of issues.
  * group `string`: A grouping for this Contact. This is for display purposes only.
  * id `integer`: This Contact's unique ID.
  * name `string`: The name of this Contact.
  * phone `object`: Information about how to reach this Contact by phone.
    * primary `string`: This Contact's primary phone number.
    * secondary `string`: This Contact's secondary phone number.
  * updated `string`: When this Contact was last updated.

### ManagedCredential
* ManagedCredential `object`: A securely-stored Credential that allows Linode's special forces to access a Managed server to respond to Issues.
  * id `integer`: This Credential's unique ID.
  * label `string`: The unique label for this Credential. This is for display purposes only.
  * last_decrypted `string`: The date this Credential was last decrypted by a member of Linode special forces.

### ManagedIssue
* ManagedIssue `object`: An Issue that was detected with a service Linode is managing.
  * created `string`: When this Issue was created. Issues are created in response to issues detected with Managed Services, so this is also when the Issue was detected.
  * entity `object`: The ticket this Managed Issue opened.
    * id `integer`: This ticket's ID
    * label `string`: The summary for this Ticket.
    * type `string` (values: ticket): The type of entity this is. In this case, it is always a Ticket.
    * url `string`: The relative URL where you can access this Ticket.
  * id `integer`: This Issue's unique ID.
  * services `array`: An array of Managed Service IDs that were affected by this Issue.
    * items `integer`

### ManagedLinodeSettings
* ManagedLinodeSettings `object`: Settings for a specific Linode related to Managed Services. There is one ManagedLinodeSettings object for each Linode on your Account.
  * group `string`: The group of the Linode these Settings are for. This is for display purposes only.
  * id `integer`: The ID of the Linode these Settings are for.
  * label `string`: The label of the Linode these Settings are for.
  * ssh `object`: The SSH settings for this Linode.
    * access `boolean`: If true, Linode special forces may access this Linode over ssh to respond to Issues.
    * ip `string`: The IP Linode special forces should use to access this Linode when responding to an Issue.
    * port `integer`: The port Linode special forces should use to access this Linode over ssh to respond to an Issue.
    * user `string`: The user Linode's special forces should use when accessing this Linode to respond to an issue.

### ManagedService
* ManagedService `object`: A service that Linode is monitoring as part of your Managed services. If issues are detected with this service, a ManagedIssue will be opened and, optionally, Linode special forces will attempt to resolve the Issue.
  * address `string`: The URL at which this Service is monitored.
  * body `string`: What to expect to find in the response body for the Service to be considered up.
  * consultation_group `string`: The group of ManagedContacts who should be notified or consulted with when an Issue is detected.
  * created `string`: When this Managed Service was created.
  * credentials `array`: An array of ManagedCredential IDs that should be used when attempting to resolve issues with this Service.
    * items `integer`
  * id `integer`: This Service's unique ID.
  * label `string`: The label for this Service. This is for display purposes only.
  * notes `string`: Any information relevant to the Service that Linode special forces should know when attempting to resolve Issues.
  * region `string`: The Region in which this Service is located. This is required if address is a private IP, and may not be set otherwise.
  * service_type `string` (values: url, tcp): How this Service is monitored.
  * status `string` (values: disabled, pending, ok, problem): The current status of this Service.
  * timeout `integer`: How long to wait, in seconds, for a response before considering the Service to be down.
  * updated `string`: When this Managed Service was last updated.

### NodeBalancer
* NodeBalancer `object`: Linode's load balancing solution.  Can handle multiple ports, SSL termination, and any number of backends.  NodeBalancer ports are configured with NodeBalancer Configs, and each config is given one or more NodeBalancer Node that accepts traffic.  The traffic should be routed to the  NodeBalancer's ip address, the NodeBalancer will handle routing individual requests to backends.
  * tags `array`: An array of Tags applied to this object.  Tags are for organizational purposes only.
    * items `string`
  * client_conn_throttle `integer`: Throttle connections per second.  Set to 0 (zero) to disable throttling.
  * created `string`: When this NodeBalancer was created.
  * hostname `string`: This NodeBalancer's hostname, ending with _.nodebalancer.linode.com_
  * id `integer`: This NodeBalancer's unique ID.
  * ipv4 `string`: This NodeBalancer's public IPv4 address.
  * ipv6 `string`: This NodeBalancer's public IPv6 address.
  * label `string`: This NodeBalancer's label. These must be unique on your Account.
  * region `string`: The Region where this NodeBalancer is located. NodeBalancers only support backends in the same Region.
  * transfer `object`: Information about the amount of transfer this NodeBalancer has had so far this month.
    * in `number`: The total outbound transfer, in MB, used for this NodeBalancer this month.
    * out `number`: The total inbound transfer, in MB, used for this NodeBalancer this month.
    * total `number`: The total transfer, in MB, used by this NodeBalancer this month.
  * updated `string`: When this NodeBalancer was last updated.

### NodeBalancerConfig
* NodeBalancerConfig `object`: A NodeBalancer config represents the configuration of this NodeBalancer on a single port.  For example, a NodeBalancer Config on port 80 would typically represent how this NodeBalancer response to HTTP requests.
  * algorithm `string` (values: roundrobin, leastconn, source): What algorithm this NodeBalancer should use for routing traffic to backends.
  * check `string` (values: none, connection, http, http_body): The type of check to perform against backends to ensure they are serving requests. This is used to determine if backends are up or down.
  * check_attempts `integer`: How many times to attempt a check before considering a backend to be down.
  * check_body `string`: This value must be present in the response body of the check in order for it to pass. If this value is not present in the response body of a check request, the backend is considered to be down.
  * check_interval `integer`: How often, in seconds, to check that backends are up and serving requests.
  * check_passive `boolean`: If true, any response from this backend with a `5xx` status code will be enough for it to be considered unhealthy and taken out of rotation.
  * check_path `string`: The URL path to check on each backend. If the backend does not respond to this request it is considered to be down.
  * check_timeout `integer`: How long, in seconds, to wait for a check attempt before considering it failed.
  * cipher_suite `string` (values: recommended, legacy): What ciphers to use for SSL connections served by this NodeBalancer.
  * id `integer`: This config's unique ID
  * nodebalancer_id `integer`: The ID for the NodeBalancer this config belongs to.
  * nodes_status `object`: A structure containing information about the health of the backends for this port.  This information is updated periodically as checks are performed against backends.
    * down `integer`: The number of backends considered to be "DOWN" and unhealthy.  These are not in rotation, and not serving requests.
    * up `integer`: The number of backends considered to be "UP" and healthy, and that are serving requests.
  * port `integer`: The port this Config is for. These values must be unique across configs on a single NodeBalancer (you can't have two configs for port 80, for example).  While some ports imply some protocols, no enforcement is done and you may configure your NodeBalancer however is useful to you. For example, while port 443 is generally used for HTTPS, you do not need SSL configured to have a NodeBalancer listening on port 443.
  * protocol `string` (values: http, https, tcp): The protocol this port is configured to serve.
  * ssl_cert `string`: The PEM-formatted public SSL certificate (or the combined PEM-formatted SSL
  * ssl_commonname `string`: The read-only common name automatically derived from the SSL certificate assigned to this NodeBalancerConfig. Please refer to this field to verify that the appropriate certificate is assigned to your NodeBalancerConfig.
  * ssl_fingerprint `string`: The read-only fingerprint automatically derived from the SSL certificate assigned to this NodeBalancerConfig. Please refer to this field to verify that the appropriate certificate is assigned to your NodeBalancerConfig.
  * ssl_key `string`: The PEM-formatted private key for the SSL certificate set in the `ssl_cert` field.
  * stickiness `string` (values: none, table, http_cookie): Controls how session stickiness is handled on this port.

### NodeBalancerNode
* NodeBalancerNode `object`: A NodeBalancerNode represents a single backend serving requests for a single port of a NodeBalancer.  Nodes are specific to NodeBalancer Configs, and serve traffic over their private IP.  If the same Linode is serving traffic for more than one port on the same NodeBalancer, one NodeBalancer Node is required for each config (port) it should serve requests on.  For example, if you have four backends, and each should response to both HTTP and HTTPS requests, you will need two NodeBalancerConfigs (port 80 and port 443) and four backends each - one for each of the Linodes serving requests for that port.
  * address `string`: The private IP Address where this backend can be reached. This _must_ be a private IP address.
  * config_id `integer`: The NodeBalancer Config ID that this Node belongs to.
  * id `integer`: This node's unique ID.
  * label `string`: The label for this node.  This is for display purposes only.
  * mode `string` (values: accept, reject, drain, backup): The mode this NodeBalancer should use when sending traffic to this backend.
  * nodebalancer_id `integer`: The NodeBalancer ID that this Node belongs to.
  * status `string` (values: unknown, UP, DOWN): The current status of this node, based on the configured checks of its NodeBalancer Config.
  * weight `integer`: Used when picking a backend to serve a request and is not pinned to a single backend yet.  Nodes with a higher weight will receive more traffic.

### NodeBalancerStats
* NodeBalancerStats `object`: Stats for this NodeBalancer.
  * data `object`: The data returned about this NodeBalancers.
    * connections `array`: An array of key/value pairs representing unix timestamp and reading for connections to this NodeBalancer.
      * items `number`
    * traffic `object`: Traffic statistics for this NodeBalancer.
      * in `array`: An array of key/value pairs representing unix timestamp and reading for inbound traffic.
        * items `number`
      * out `array`: An array of key/value pairs representing unix timestamp and reading for outbound traffic.
        * items `number`
  * title `string`: The title for the statistics generated in this response.

### Notification
* Notification `object`: An important, often time-sensitive item related to your Account.
  * body `string`: A full description of this Notification, in markdown format.  Not all Notifications include bodies.
  * entity `object`: Detailed information about the Notification.
    * id `integer`: The unique ID of the Notification's entity, based on the entity type.
    * label `string`: The current label for this Notification's entity.
    * type `string`: The type of entity this is related to.
    * url `string`: The URL where you can access the object this Notification is for. If a relative URL, it is relative to the domain you retrieved the Notification from.
  * label `string`: A short description of this Notification.
  * message `string`: A human-readable description of the Notification.
  * severity `string` (values: minor, major, critical): The severity of this Notification.  This field can be used to decide how prominently to display the Notification, what color to make the display text, etc.
  * type `string` (values: migration_scheduled, migration_imminent, migration_pending, reboot_scheduled, outage, payment_due, ticket_important, ticket_abuse, notice, maintenance, promotion): The type of Notification this is.
  * until `string`: If this Notification has a duration, this will be the ending time for the Event/action. For example, if there is scheduled maintenance for one of our systems, `until` would be set to the end of the maintenance window.
  * when `string`: If this Notification is of an Event that will happen at a fixed, future time, this is when the named action will be taken. For example, if a Linode is to be migrated in response to a Security Advisory, this field will contain the approximate time the Linode will be taken offline for migration.

### OAuthClient
* OAuthClient `object`: A third-party application registered to Linode that users may log into with their Linode account through our authentication server at <a target="_top" href="https://login.linode.com">https://login.linode.com</a>.  Using an OAuth Client, a third-party developer may be given access to some, or all, of a User's account for the purposes of their application.
  * id `string`: The OAuth Client ID.  This is used to identify the client, and is a publicly-known value (it is not a secret).
  * label `string`: The name of this application.  This will be presented to users when they are asked to grant it access to their Account.
  * public `boolean`: If this is a public or private OAuth Client.  Public clients have a slightly different authentication workflow than private clients.  See the <a target="_top" href="https://oauth.net/2/">OAuth spec</a> for more details.
  * redirect_uri `string`: The location a successful log in from <a target="_top" href="https://login.linode.com">https://login.linode.com</a> should be redirected to for this client.  The receiver of this redirect should be ready to accept an OAuth exchange code and finish the OAuth exchange.
  * secret `string`: The OAuth Client secret, used in the OAuth exchange.  This is returned as `<REDACTED>` except when an OAuth Client is created or its secret is reset.  This is a secret, and should not be shared or disclosed publicly.
  * status `string` (values: active, disabled, suspended): The status of this application.  `active` by default.
  * thumbnail_url `string`: The URL where this client's thumbnail may be viewed, or `null` if this client does not have a thumbnail set.

### ObjectStorageBucket
* ObjectStorageBucket `object`: An Object Storage Bucket. This should be accessed primarily through the S3 API; [click here for more information](https://docs.ceph.com/docs/mimic/radosgw/s3/#api).
  * cluster `string`: The ID of the Object Storage Cluster this bucket is in.
  * created `string`: When this bucket was created.
  * hostname `string`: The hostname where this bucket can be accessed. This hostname can be accessed through a browser if the bucket is made public.
  * label `string`: The name of this bucket.
  * objects `integer`: The number of objects in this bucket.
  * region `string`: The ID of the Region this bucket exists in.
  * size `integer`: The size of this bucket, in bytes.

### ObjectStorageCluster
* ObjectStorageCluster `object`: An Object Storage Cluster
  * domain `string`: The base URL for this cluster, used for connecting with third-party clients.
  * id `string`: The unique ID for this cluster.
  * region `string`: The region where this cluster is located.
  * static_site_domain `string`: The base URL for this cluster used when hosting static sites.
  * status `string` (values: available, unavailable): This cluster's status.

### ObjectStorageKey
* ObjectStorageKey `object`: A keypair used to communicate with the Object Storage S3 API.
  * access_key `string`: This keypair's access key. This is not secret.
  * id `integer`: This keypair's unique ID
  * label `string`: The label given to this key. For display purposes only.
  * secret_key `string`: This keypair's secret key. **Only returned on key creation**.

### ObjectStorageObject
* ObjectStorageObject `object`: An Object in Object Storage, or a "prefix" that contains one or more objects when a `delimiter` is used.
  * etag `string`: An MD-5 hash of the object. `null` if this object represents a prefix.
  * is_truncated `boolean`: Designates if there is another page of bucket objects.
  * last_modified `string`: The date and time this object was last modified. `null` if this object represents a prefix.
  * name `string`: The name of this object or prefix.
  * next_marker `string`: Returns the value you should pass to the `marker` query parameter to get the next page of objects. If there is no next page, `null` will be returned.
  * owner `string`: The owner of this object, as a UUID. `null` if this object represents a prefix.
  * size `integer`: The size of this object, in bytes. `null` if this object represents a prefix.

### PaginationEnvelope
* PaginationEnvelope `object`: An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results.
  * data **required** `array`
    * items `object`
  * page **required** `integer`
  * pages **required** `integer`
  * results **required** `integer`

### PayPal
* PayPal `object`: An object representing the staging of a Payment via PayPal.
  * cancel_url **required** `string`: The URL to have PayPal redirect to when Payment is cancelled.
  * redirect_url **required** `string`: The URL to have PayPal redirect to when Payment is approved.
  * usd **required** `string`: The payment amount in USD. Minimum accepted value of $5 USD. Maximum accepted value of $500 USD or credit card payment limit; whichever value is highest. PayPal's maximum transaction limit is $10,000 USD.

### PayPalExecute
* PayPalExecute `object`: An object representing an execution of Payment to PayPal to capture the funds and credit your Linode Account.
  * payer_id **required** `string`: The PayerID returned by PayPal during the transaction authorization process.
  * payment_id **required** `string`: The PaymentID returned from [POST /account/payments/paypal](/account-payments-paypal/#post) that has been approved with PayPal.

### Payment
* Payment `object`: Payment object response.
  * date `string`: When the Payment was made.
  * id `integer`: The unique ID of the Payment.
  * usd `integer`: The amount, in US dollars, of the Payment.

### PaymentRequest
* PaymentRequest `object`: Payment object request.
  * cvv `string`: CVV (Card Verification Value) of the credit card to be used for the Payment.
  * usd **required** `string`: The amount in US Dollars of the Payment. The maximum credit card payment that can be made is $50,000 dollars.

### PersonalAccessToken
* PersonalAccessToken `object`: A Personal Access Token is a token generated manually to access the API without going through an OAuth login.  Personal Access Tokens can have scopes just like OAuth tokens do, and are commonly used to give access to command-line tools like the Linode CLI, or when writing your own integrations.
  * created `string`: The date and time this token was created.
  * expiry `string`: When this token will expire.  Personal Access Tokens cannot be renewed, so after this time the token will be completely unusable and a new token will need to be generated.  Tokens may be created with "null" as their expiry and will never expire unless revoked.
  * id `integer`: This token's unique ID, which can be used to revoke it.
  * label `string`: This token's label.  This is for display purposes only, but can be used to more easily track what you're using each token for.
  * scopes `string`: The scopes this token was created with. These define what parts of the Account the token can be used to access. Many command-line tools, such as the <a target="_top" href="https://github.com/linode/linode-cli">Linode CLI</a>, require tokens with access to `*`. Tokens with more restrictive scopes are generally more secure.
  * token `string`: The token used to access the API.  When the token is created, the full token is returned here.  Otherwise, only the first 16 characters are returned.

### Profile
* Profile `object`: A Profile represents your User in our system. This is where you can change information about your User. This information is available to any OAuth Client regardless of requested scopes, and can be used to populate User information in third-party applications.
  * authorized_keys `array`: The list of SSH Keys authorized to use Lish for your User. This value is ignored if `lish_auth_method` is "disabled."
    * items `string`
  * email `string`: Your email address.  This address will be used for communication with Linode as necessary.
  * email_notifications `boolean`: If true, you will receive email notifications about account activity.  If false, you may still receive business-critical communications through email.
  * ip_whitelist_enabled `boolean`: If true, logins for your User will only be allowed from whitelisted IPs. This setting is currently deprecated, and cannot be enabled.
  * lish_auth_method `string` (values: password_keys, keys_only, disabled): What methods of authentication are allowed when connecting via Lish.  "keys_only" is the most secure if you intend to use Lish, and "disabled" is recommended if you do not intend to use Lish at all.
  * referrals `object`: Information about your status in our referral program.
    * code `string`: Your referral code.  If others use this when signing up for Linode, you will receive account credit.
    * completed `integer`: The number of completed signups with your referral code.
    * credit `integer`: The amount of account credit in US Dollars issued to you through the referral program.
    * pending `integer`: The number of pending signups with your referral code.  You will not receive credit for these signups until they are completed.
    * total `integer`: The number of users who have signed up with your referral code.
    * url `string`: Your referral url, used to direct others to sign up for Linode with your referral code.
  * restricted `boolean`: If true, your User has restrictions on what can be accessed on your Account. To get details on what entities/actions you can access/perform, see [/profile/grants](/api/v4/profile-grants).
  * timezone `string`: The timezone you prefer to see times in.  This is not used by the API, and is for the benefit of clients only.  All times the API returns are in UTC.
  * two_factor_auth `boolean`: If true, logins from untrusted computers will require Two Factor Authentication.  See [/profile/tfa-enable](/api/v4/profile-tfa-enable/#post) to enable Two Factor Authentication.
  * uid `integer`: Your unique ID in our system. This value will never change, and can safely be used to identify your User.
  * username `string`: Your username, used for logging in to our system.

### Region
* Region `object`: An area where Linode services are available.
  * capabilities `array`: A list of capabilities of this region.
    * items `string`
  * country `string`: The country where this Region resides.
  * id `string`: The unique ID of this Region.

### RescueDevices
* RescueDevices `object`
  * sda [Device](#device)
  * sdb [Device](#device)
  * sdc [Device](#device)
  * sdd [Device](#device)
  * sde [Device](#device)
  * sdf [Device](#device)
  * sdg [Device](#device)

### SSHKey
* SSHKey `object`: A credential object for authenticating a User's secure shell connection to a Linode.
  * created `string`: The date this key was added.
  * id `integer`: The unique identifier of an SSH Key object.
  * label `string`: A label for the SSH Key.
  * ssh_key `string`: The public SSH Key, which is used to authenticate to the root user of the Linodes you deploy.

### SSHKeyRequest
* SSHKeyRequest `object`: An object consisting of a user identified name as the `label` and the generated key as the `ssh-key`.
  * label `string`: A label for the key.
  * ssh_key `string`: The public SSH Key, which is used to authenticate to the root user of the Linodes you deploy.

### StackScript
* StackScript `object`: A StackScript enables you to quickly deploy a fully-configured application in an automated manner.
  * created `string`: The date this StackScript was created.
  * deployments_active `integer`: Count of currently active, deployed Linodes created from this StackScript.
  * deployments_total `integer`: The total number of times this StackScript has been deployed.
  * description `string`: A description for the StackScript.
  * id `integer`: The unique ID of this StackScript.
  * images `array`: An array of Image IDs. These are the images that can be deployed with this Stackscript.
    * items `string`
  * is_public `boolean`: This determines whether other users can use your StackScript. **Once a StackScript is made public, it cannot be made private.**
  * label `string`: The StackScript's label is for display purposes only.
  * rev_note `string`: This field allows you to add notes for the set of revisions made to this StackScript.
  * script `string`: The script to execute when provisioning a new Linode with this StackScript.
  * updated `string`: The date this StackScript was last updated.
  * user_defined_fields `array`: This is a list of fields defined with a special syntax inside this StackScript that allow for supplying customized parameters during deployment. See <a target="_top" href="https://www.linode.com/docs/platform/stackscripts/#variables-and-udfs">Variables and UDFs</a> for more information.
    * items [UserDefinedField](#userdefinedfield)
  * user_gravatar_id `string`: The Gravatar ID for the User who created the StackScript.
  * username `string`: The User who created the StackScript.

### SupportTicket
* SupportTicket `object`: A Support Ticket opened on your Account.
  * attachments `array`: A list of filenames representing attached files associated with this Ticket.
    * items `string`
  * closable `boolean`: Whether the Support Ticket may be closed.
  * closed `string`: The date and time this Ticket was closed.
  * description `string`: The full details of the issue or question.
  * entity `object`: The entity this Ticket was opened for.
    * id `integer`: The unique ID for this Ticket's entity.
    * label `string`: The current label of this entity.
    * type `string`: The type of entity this is related to.
    * url `string`: The URL where you can access the object this event is for. If a relative URL, it is relative to the domain you retrieved the entity from.
  * gravatar_id `string`: The Gravatar ID of the User who opened this Ticket.
  * id `integer`: The ID of the Support Ticket.
  * opened `string`: The date and time this Ticket was created.
  * opened_by `string`: The User who opened this Ticket.
  * status `string` (values: closed, new, open): The current status of this Ticket.
  * summary `string`: The summary or title for this Ticket.
  * updated `string`: The date and time this Ticket was last updated.
  * updated_by `string`: The User who last updated this Ticket.

### SupportTicketReply
* SupportTicketReply `object`: An object representing a reply to a Support Ticket.
  * created `string`: The date and time this Ticket reply was created.
  * created_by `string`: The User who submitted this reply.
  * description `string`: The body of this Support Ticket reply.
  * from_linode `boolean`: If set to true, this reply came from a Linode employee.
  * gravatar_id `string`: The Gravatar ID of the User who created this reply.
  * id `integer`: The unique ID of this Support Ticket reply.

### SupportTicketRequest
* SupportTicketRequest `object`: An object representing a created Support Ticket - a question or issue and request for help from the Linode support team.
  * description **required** `string`: The full details of the issue or question.
  * domain_id `integer`: The ID of the Domain this ticket is regarding, if relevant.
  * linode_id `integer`: The ID of the Linode this ticket is regarding, if relevant.
  * longviewclient_id `integer`: The ID of the Longview client this ticket is regarding, if relevant.
  * nodebalancer_id `integer`: The ID of the NodeBalancer this ticket is regarding, if relevant.
  * summary **required** `string`: The summary or title for this SupportTicket.
  * volume_id `integer`: The ID of the Volume this ticket is regarding, if relevant.

### Tag
* Tag `object`: A tag that has been applied to an object on your Account. Tags are currently for organizational purposes only.
  * label `string`: A Label used for organization of objects on your Account.

### Transfer
* Transfer `object`: An object representing your network utilization for the current month, in Gigabytes.
  * billable `integer`: The amount of your transfer pool that is billable this billing cycle.
  * quota `integer`: The amount of network usage allowed this billing cycle.
  * used `integer`: The amount of network usage you have used this billing cycle.

### TrustedDevice
* TrustedDevice `object`: A trusted device object represents an active Remember Me session with <a target="_top" href="https://login.linode.com">login.linode.com</a>.
  * created `string`: When this Remember Me session was started.  This corresponds to the time of login with the "Remember Me" box checked.
  * expiry `string`: When this TrustedDevice session expires.  Sessions typically last 30 days.
  * id `integer`: The unique ID for this TrustedDevice
  * last_authenticated `string`: The last time this TrustedDevice was successfully used to authenticate to <a target="_top" href="https://login.linode.com">login.linode.com</a>.
  * last_remote_addr `string`: The last IP Address to successfully authenticate with this TrustedDevice.
  * user_agent `string`: The User Agent of the browser that created this TrustedDevice session.

### User
* User `object`: A User on your Account. Unrestricted users can log in and access information about your Account, while restricted users may only access entities or perform actions they've been granted access to.
  * email `string`: The email address for this User, for account management communications, and may be used for other communications as configured.
  * restricted `boolean`: If true, this User must be granted access to perform actions or access entities on this Account. See [/account/users/{username}/grants](/api/v4/account-users-username-grants) for details on how to configure grants for a restricted User.
  * ssh_keys `array`: A list of SSH Key labels added by this User. These are the keys that will be deployed if this User is included in the `authorized_users` field of a [create Linode](/api/v4/linode-instances/#post), [rebuild Linode](/api/v4/linode-instances-linode-id-rebuild/#post), or [create Disk](/api/v4/linode-instances-linode-id-disks/#post) request.
    * items `string`
  * username `string`: This User's username. This is used for logging in, and may also be displayed alongside actions the User performs (for example, in Events or public StackScripts).

### UserDefinedField
* UserDefinedField `object`: A custom field defined by the User with a special syntax within a StackScript. Derived from the contents of the script.
  * default `string`: The default value.  If not specified, this value will be used.
  * example **required** `string`: An example value for the field.
  * label **required** `string`: A human-readable label for the field that will serve as the input prompt for entering the value during deployment.
  * manyOf `string`: A list of acceptable values for the field in any quantity, combination or order.
  * name **required** `string`: The name of the field.
  * oneOf `string`: A list of acceptable single values for the field.

### Volume
* Volume `object`: A Block Storage Volume associated with your Account.
  * tags `array`: An array of Tags applied to this object.  Tags are for organizational purposes only.
    * items `string`
  * created `string`: When this Volume was created.
  * filesystem_path `string`: The full filesystem path for the Volume based on the Volume's label. Path is /dev/disk/by-id/scsi-0Linode_Volume_ + Volume label.
  * id `integer`: The unique ID of this Volume.
  * label **required** `string`: The Volume's label is for display purposes only.
  * linode_id `integer`: If a Volume is attached to a specific Linode, the ID of that Linode will be displayed here.
  * region [Region/properties/id](#region/properties/id)
  * size `integer`: The Volume's size, in GiB.
  * status `string` (values: creating, active, resizing, contact_support): The current status of the volume.  Can be one of:
  * updated `string`: When this Volume was last updated.


