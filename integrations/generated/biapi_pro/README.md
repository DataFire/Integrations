# @datafire/biapi_pro

Client library for Budgea API Documentation

## Installation and Usage
```bash
npm install --save @datafire/biapi_pro
```
```js
let biapi_pro = require('@datafire/biapi_pro').create();

.then(data => {
  console.log(data);
});
```

## Description

# Budgea Development Guides

Welcome to **Budgea**'s documentation.

This documentation is intended to get you up-and-running with our APIs and advise on the implementation of some regulatory aspects of your application, following the DSP2's guidelines.

## Getting Started
**IMPORTANT**
Depending on your status with regard of the DSP2 regulation, **agent** or **partner**, you may call our APIs or simply use our Webview and callbacks to get the financial data of your users.
As an **agent**, you are allowed to call directly our APIs and implement your own form to get the user's credentials.
As a **partner**, you cannot manipulate the credentials, and have to delegate this step to us through our webview.

The sections below will document how to use our APIs, make sure you have the **agent** status to do so.
For the **partner**, please refer to the section *Webview* and *Callbacks* of this documentation.

### Overview
Your API is a REST API which requires a communication through https to send and receive JSON documents.
During your tests, we recommend to make calls to the API with curl or any other HTTP client of your choice.
You can watch a video demonstration on this [URL](https://asciinema.org/a/FsaFyt3WAPyDm7sfaZPkwal3V).
For the examples we'll use the demo API with address `https://demo.biapi.pro`, you should change that name to your API's name.

### Hello World
Let's start by calling the service `/banks` which lists all available banks.
```
curl https://demo.biapi.pro/2.0/banks/
```
To log in to a bank webpage, you'll need to know for a given bank, the fields your user should fill in the form.
Let's call a  specific bank and ask for an additional resource *fields*.
```
curl https://demo.biapi.pro/2.0/banks/59?expand=fields
```
The response here concerns only 1 bank (since we specified an id) and the resource _Fields_ is added to the response thanks to the query parameter `expand`.

To get more interesting things done, you'll need to send authenticated requests.

### Authentication
The way to authenticate is by passing the `Authorization: Bearer <token>` header in your request.
At the setup a _manage token_ have been generated, you can use this token for now, when creating your user we'll see how to generate a user's token.
```
curl https://demo.biapi.pro/2.0/config \
  -H 'Authorization: Bearer <token>'
```
This endpoint will list all the parameters you can change to adapt Budgea to your needs.

We've covered the very first calls. Before diving deeper, let's see some general information about the APIs.

## Abstract

### API URL
`https://demo.biapi.pro/2.0`

### Requests format
Data format: **application/x-www-form-urlencoded** or **application/json** (suggested)

Additional headers: Authorization: User's token (private)

### Responses format
Data format: **application/json** ([http://www.json.org](http://www.json.org/))
Charset: **UTF-8**

### Resources
Each call on an endpoint will return resources. The main resources are:
| Resource            | Description                                                                                                           |
| ---------------------|:------------------------------------------------------------------------------------------------------------------   |
|Users                 |Represent a user                                                                                                      |
|Connection            |A set of data used to authenticate on a website (usually a login and password). There is 1 connection for each website|
|Account               |A bank account contained in a connection                                                                              |
|Transaction           |An entry in a bank account                                                                                            |
|Investment            |An asset in a bank account                                                                                            |

The chain of resources is as follow: **Users ∈ Connections ∈ Accounts ∈ Transactions or Investments**

### RESTful API

This API is RESTful, which means it is stateless and each resource is accessed with an unique URI.

Several HTTP methods are available:

| Method                  | Description                    |
| ------------------------|:-------------------------------|
| GET /resources          | List resources                 |
| GET /resources/{ID}     | Get a resource from its ID     |
| POST /resources         | Create a new resource          |
| POST /resources/{ID}    | Update a resource              |
| PUT /resources  /{ID}   | Update a resource              |
| DELETE /resources       | Remove every resources         |
| DELETE /resources/{ID}  | Delete a resource              |


Each resource can contain sub-resources, for example:
`/users/me/connections/2/accounts/23/transactions/48`

### HTTP response codes

| Code        | Message               | Description                                                                                   |
| ----------- |:---------------------:|-----------------------------------------------------------------------------------------------|
| 200         | OK                    |Default response when a GET or POST request has succeed                                        |
| 202         | Accepted              |For a new connection this code means it is necessary to provide complementary information (2FA)|
| 204         | No content            |Default response when a POST request succeed without content                                   |
| 400         | Bad request           |Supplied parameters are incorrect                                                              |
| 403         | Forbidden             |Invalid token                                                                                  |
| 500         | Internal Servor Error |Server error                                                                                   |
| 503         | Service Unavailable   |Service is temporarily unavailable                                                             |

### Errors management
In case an error occurs (code 4xx or 5xx), the response can contain a JSON object describing this error:
```json
{
   "code": "authFailure",
   "message": "Wrong password"  // Optional
}
```
If an error is displayed on the website, Its content is returned in error_message field.
The list of all possible errors is listed further down this page.

### Authentication
A user is authenticated by an access_token which is sent by the API during a call on one of the authentication services, and can be supplied with this header:
`Authorization: Bearer YYYYYYYYYYYYYYYYYYYYYYYYYYY`

 There are two user levels:

    - Normal user, which can only access to his own accounts
    - Administrator, with extended rights

### Default filters
During a call to an URI which lists resources, some filters can be passed as query parameters:

| Parameter   | Type      | Description                                               |
| ----------- |:---------:|-----------------------------------------------------------|
| offset      | Integer   |Offset of the first returned resource                      |
| limit       | Integer   |Limit number of results                                    |
| min_date    | Date      |Minimal date (if supported by service), format: YYYY-MM-DD |
| max_date    | Date      |Maximal date (if supported by service), format: YYYY-MM-DD |

### Extend requests
During a GET on a set of resources or on a unique resource, it is possible to add a parameter expand to the request to extend relations with other resources:

`GET /2.0/users/me/accounts/123?expand=transactions[category],connection`

```json
{
   "id" : 123
   "name" : "Compte chèque"
   "balance" : 1561.15
   "transactions" : [
      {
         "id" : 9849,
         "simplified_wording" : "HALL'S BEER",
         "value" : -513.20,
         ...
         "category" : {
            "id" : 561,
            "name" : "Sorties / Bar",
            ...
         }
       },
       ...
   ],
   "id_user" : 1,
   "connection" : {
      "id" : 1518,
      "id_bank" : 41,
      "id_user" : 1,
      "error" : null,
      ...
   }
}
```

### Request example
```http
GET /2.0/banks?offset=0&limit=10&expand=fields
Host: demo.biapi.pro
Accept: application/json
Authorization: Bearer <token>
```
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 3026
Server: Apache
Date: Fri, 14 Mar 2014 08:24:02 GMT

{
   "banks" : [
      {
         "id_weboob" : "bnporc",
         "name" : "BNP Paribas",
         "id" : 3,
         "hidden" : false,
         "fields" : [
            {
               "id" : 1,
               "id_bank" : 3,
               "regex" : "^[0-9]{5,10}$",
               "name" : "login",
               "type" : "text",
               "label" : "Numéro client"
            },
            {
               "id" : 2,
               "id_bank" : 3,
               "regex" : "^[0-9]{6}$",
               "name" : "password",
               "type" : "password",
               "label" : "Code secret"
            }
         ]
      },
      ...
   ]
   "total" : 41
}
```

### Constants
#### List of bank account types
| Type          |Description                        |
| -----------   |-----------------------------------|
| checking      |Checking account                   |
| savings       |Savings account                    |
| deposit       |Deposit accounts                   |
| loan          |Loan                               |
| market        | Market accounts                   |
| joint         |Joint account                      |
| card          |Card                               |
| lifeinsurance |Life insurance accounts            |
| pee           |Plan Épargne Entreprise            |
| perco         |Plan Épargne Retraite              |
| article83     |Article 83                         |
| rsp           |Réserve spéciale de participation  |
| pea           |Plan d'épargne en actions          |
| capitalisation|Contrat de capitalisation          |
| perp          |Plan d'épargne retraite populaire  |
| madelin       |Contrat retraite Madelin           |
| unknown       |Inconnu                            |

#### List of transaction types

| Type         |Description                        |
| -----------  |-----------------------------------|
|transfer      |Transfers                          |
|order         |Orders                             |
|check         |Checks                             |
|deposit       |Cash deposit                       |
|payback       |Payback                            |
|withdrawal    |Withdrawal                         |
|loan_payment  |Loan payment                       |
|bank          |Bank fees                          |
|card          |Card operation                     |
|deferred_card |Deferred card operation            |
|card_summary  |Mensual debit of a deferred card   |

#### List of synchronization errors
##### Error on Connection object
The error field may take one of the below values in case of error when accessing the user space.

| Error                      |Description                                                                                       |
| -----------------------    |--------------------------------------------------------------------------------------------------|
|wrongpass                   |The authentication on website has failed                                                          |
|additionalInformationNeeded |Additional information is needed such as an OTP                                                  |
|websiteUnavailable          |The website is unavailable, for instance we get a HTTP 503 response when requesting the website   |
|actionNeeded                |An action is needed on the website by the user, scraping is blocked                               |
|SCARequired                |An SCA process must be done by updating the connection                               |
|decoupled                  |Requires a user validation (ex: digital key)|
|passwordExpired                   |The password has expired and needs to be changed on the website.                                                         |
|webauthRequired                |A complete authentication process is required by update the connection via redirect                            |
|bug                         |A bug has occurred during the synchronization. An alert has been sent to Budget Insight           |

#### Error on Account object
Errors can be filled at the account level in case we access the user's dashboard but some account related data cannot be retrieved.
For instance, we may not access the transactions or investments for a specific account.
Getting an error during an account synchronization does not impact the scraping of other acccounts.

| Error                      |Description                                                                                       |
| -----------------------    |--------------------------------------------------------------------------------------------------|
|websiteUnavailable          |The website or a page is unavailable                                                              |
|actionNeeded                |An action is needed on the website by the user, scraping is blocked                               |
|bug                         |A bug has occurred during the synchronization. An alert has been sent to Budget Insight           |

Now you know the basics of Budgea API
- Basic call to retrieve resources
- Add query parameters to aplly filters
- Expand resources
- Authenticated calls

We're good for the basics! Now let's see how to integrate Budgea in your app and create your first user.

## Integrate Budgea *(protocol or Webview)*
### The workflow
Users of your application exist in the Budgea API.
Every User is identified by an access_token which is the shared secret between your application and our API.

The workflow is as below:
1. The user is on your application and wants to share his bank accounts or invoices.
2. A call is made **client side** (browser's javascript or desktop application) to create a temporarily token which will be used to make API calls.
3. A form is built, allowing the user to select the connector to use (bank or provider, depending on context). Every connector requires different kind of credentials.
4. A call on the API is made with the temporarily token to add a **Connection** with the credentials supplied by user.
5. In case of success, the user chooses what bank accounts (**Account**) or subscriptions (**Subscription**) he wants to share with your application.
6. When he validates the share, the temporarily token is transmitted to your server. This one will call the Budgea API with this token to get a permanent token.

**Note**
In case your application works without a server (for example a desktop application), the permanent token can be obtained on the 1st step, by supplying a client_secret to /auth/init and the step 6 is omitted. To get more information, read the protocol.

There are 3 steps to integrate Budgea in your application:
1. Provide a way for your users to share their credentials with you
2. Get the data scraped from Budgea
3. Be sure to follow the good practices before going into production

### Get credentials from users
You have 2 options here:
- Integrate the Budget Insight's Webview, a turnkey solution to get user's credentials
- Create your own form following the protocol (must have the *agent* status)

### Budgea webview

The Budgea webview complements REST API endpoints with web-based services to handle sensitive or complex operations:
- add a connection (to a bank or a provider), or edit/repare access to a connection;
- manage connections (add/remove/edit);
- edit and validate bank transfers (alpha preview).

Usage of the webview is mandatory if you don't hold an Agent status, since you are not allowed to use API endpoints carrying user credentials, and optional otherwise.

#### Implementation guidelines

##### Base URL

The base URL of all services must be customized:  
`https://{{domain}}.biapi.pro/2.0/auth/webview/`  
`https://{{domain}}.biapi.pro/2.0/auth/webview/{{lang}}/`  
- `{{domain}}`: substitute with you API domain;
- `{{lang}}`: optionally specify the language of the webview, `en` or `fr` (if not specified, an automatic redirection will be performed following the language of the browser).

##### Browser integration

Services available as part of the webview are designed as parameterized URLs intended to be opened in a web browser. A callback URI must be specified by callers to be notified at the end of the operation flow, similar to OAuth 2 specification.

You are encouraged to integrate web-based steps in your product following UX best practices:
- in a web environment, perform a full-page redirect to the URL (using either [HTTP redirect](https://developer.mozilla.org/fr/docs/Web/HTTP/Status/302) or [scripting](https://developer.mozilla.org/fr/docs/Web/API/Location)), and avoid new tabs or popups;
- in a native Android app, prefer opening the default browser or relying on [Chrome Custom Tabs](https://developer.chrome.com/multidevice/android/customtabs) to integrating a WebView;
- in a native iOS app, prefer using a [SFSafariViewController](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller) to integrating a WKWebView.

##### Callback handling

Most flows redirect to a callback URI at the end of the process. Query parameters are added to the URI to identify successful or failed operations.

Successful parameters are specific to each flow. In case of an error, the following parameters are added:

| Parameter | Description |
| - | - |
| `error` | An lowercase string error code identifying the kind of error that occurred. When the parameter is not present, the response is successful. |
| `error_description` | A longer string description of the error (not intended for user display). |

Common error codes include:

| Code | Description |
| - | - |
| `access_denied` | The user explicitly cancelled the flow. |
| `server_error` | Oops, a technical failure occurred during the process. |

**Forward compatibility requirement**: Additional error codes may be added in the future to describe specific cases. When implementing error codes handling, always fallback to a generic case for unknown codes.

##### Browser compatibility

The webview is designed and tested to work with browsers supported by the Angular framework:  
https://angular.io/guide/browser-support

##### Privacy / GDPR status

The webview itself does not use any kind of long-term data persistence mechanism such as cookies or local storage, but some authentication or authorization steps may delegate to third-party web services that may implement them.

#### Configuration

You can configure the appearance and behaviour of the webview by configuring the associated *Client Application* in the console:

| Key | Format | Description |
| - | - | - |
| `primary_color` | String | Optional. An accent color (hexadecimal string without '#' prefix) to personalize the UI elements of the webview. If absent, the default color is grey. |
| `redirect_uri` | String | Optional. A recommended security whitelist configuration. The `redirect_uri` parameter sent to any endpoint of the webview is checked against the configuration, if any. |
| `config.disable_connector_hints` | Boolean | Optional. This flags hides the list of most-used entries in the connector selection step. The default is `false`, i.e. the list is shown. |
| `config.use_app_layout` | Boolean | Optional. Use this flag to enable presenting your log as an app icon. The default value is ` false`, i.e. the logo is shown in the top bar of the UI. |
| `config.disable_accounts_pre_check` | Boolean | Optional. An optional boolean flag to prevent bank accounts to be automatically pre-checked when the user enters the activation step. The default value is ` false`, i.e. the bank accounts are pre-checked. |

#### Endpoints reference

##### Add connection flow
```
https://{{domain}}.biapi.pro/2.0/auth/webview/{{lang}}/connect
```

This flow allows an end-user to add a new connection to the API. The flow handles the following steps:
- selecting a connector;
- authenticating & authorizing with the connector, by collecting credentials or delegating;
- managing consent to aggregate accounts/subscriptions;
- collecting required information for professional accounts.

###### Endpoint parameters

| Parameter | Description |
| - | - |
| `client_id` | Required. The ID of the requesting client application. You can manage client applications of your domain in the admin console. |
| `redirect_uri` | Required. An absolute callback URI. The webview will redirect to it at the end of the flow. |
| `code` | Optional. A user-scoped temporary code to use with the Budgea API.<br>If you don't provide a code, a new anonymous user will be created before the connection is added, and you will be returned an access token code scoped to it with the success callback. |
| `state` | Optional. An opaque string parameter that you can use to carry state across the flow. The parameter will be set "as is" on the callback URI. Make sure that the `state` you provide is properly URL-encoded. |
| `connector_ids` | Optional. A comma-separated list of connector IDs available to pick from.<br>If the parameter is omitted, all active connectors are available.<br>If you pass a single value, the user is not prompted to choose the connector.<br>This parameter is mutually exclusive with `connector_uuids`. |
| `connector_uuids` | Optional. A comma-separated list of connector UUIDs available to pick from.<br>If the parameter is omitted, all active connectors are available.<br>If you pass a single value, the user is not prompted to choose the connector.<br>This parameter is mutually exclusive with `connector_ids`. |
| `connector_capabilities` | Optional. A comma-separated list of capabilities to filter available connectors.<br>If the parameter is omitted, `bank` is inferred.<br>If multiple values are provided, only connectors that expose all the requested capabilities are available.<br>To request a bank connection, use `bank`.<br>To request a provider connection, use `document`. |
| `account_ibans` | Optional. A comma-separated list of IBANs to filter accounts available for activation in a bank connection context. Other accounts will not be selectable. |
| `account_types` | Optional. A comma-separated list of account types to filter accounts available for activation in a bank connection context. Other accounts will not be selectable. |
| `account_usages` | Optional. A comma-separated list of account usages to filter accounts available for activation in a bank connection context. Other accounts will not be selectable. |

###### Successful callback parameters

| Parameter | Description |
| - | - |
| `connection_id` | The id of the newly created connection. Please note that when redirecting to the callback URI, the accounts and/or subscriptions are available in the API, but bank transactions or documents may still be syncing in background. |
| `code` | Optional. If a `code` was *not* initially specified, an API code that you must exchange to obtain a permanent access token associated with the newly-created anonymous user holding the connection. The parameter is URL-encoded, make sure to handle it accordingly. |
| `state` | Optional. Identical to the `state` parameter that was initially specified. |

###### Additional error codes

| Code | Description |
| - | - |
| `tos_declined` | The end-user refused to validate the terms of service. |

##### Re-auth / edit connection credentials flow

```
https://{{domain}}.biapi.pro/2.0/auth/webview/{{lang}}/reconnect
```

This flow allows an end-user to re-authenticate against a bank or a provider in order to recover an existing connection, or to completely reset credentials associated with a connection.

###### Endpoint parameters

| Parameter | Description |
| - | - |
| `client_id` | Required. The ID of the requesting client application. You can manage client applications of your domain in the admin console. |
| `redirect_uri` | Required. An absolute callback URI. The webview will redirect to it at the end of the flow. |
| `code` | Required. A user-scoped temporary code to use with the Budgea API. |
| `connection_id` | Required. The id of the existing connection. |
| `state` | Optional. An opaque string parameter that you can use to carry state across the flow. The parameter will be set "as is" on the callback URI. Make sure that the `state` you provide is properly URL-encoded. |
| `reset_credentials` | Optional. In the default mode (`false`), the service will try to recover the connection and prompt the user only with outdated or transient information (new password, OTP...).<br>Set the parameter to `true` to force resetting all the credentials associated with the connection. This parameter may not apply to all connectors. |

###### Successful callback parameters

This flow adds no parameter to the callback URI in case of success, except from `state`.

##### Manage connections

```
https://{{domain}}.biapi.pro/2.0/auth/webview/{{lang}}/manage
```
This flow allows an end-user to manage the connections associated with his account in the API. The user can add new connections, remove existing ones, fix connection errors, reset credentials or activate/deactivate bank accounts.

Support of `redirect_uri` in this flow is optional, as it can be integrated or presented as a terminal step, without relying on a final redirection.

###### Endpoint parameters

| Parameter | Description |
| - | - |
| `client_id` | Required. The ID of the requesting client application. You can manage client applications of your domain in the admin console. |
| `code` | Required. A user-scoped temporary code to use with the Budgea API. |
| `redirect_uri` | Optional. An absolute callback URI. When provided, the webview will display a close button that redirects to it. |
| `state` | Optional. An opaque string parameter that you can use to carry state across the flow when providing a `redirect_uri`. The parameter will be set "as is" on the callback URI. Make sure that the `state` you provide is properly URL-encoded. |
| `connector_capabilities` | Optional. A comma-separated list of capabilities to filter available connectors when adding a new connection.<br>If the parameter is omitted, `bank` is inferred.<br>If multiple values are provided, only connectors that expose all the requested capabilities are available.<br>To request a bank connection, use `bank`.<br>To request a provider connection, use `document`. |
| `account_types` | Optional. A comma-separated list of account types to filter accounts available for activation on adding a new bank connection or updating existing connections. Other accounts will not be selectable. |
| `account_usages` | Optional. A comma-separated list of account usages to filter accounts available for activation in a bank connection context. Other accounts will not be selectable. |

###### Callback parameters

This flow adds no parameter to the callback URI, except from `state`.

##### Execute a bank transfer (preview)

**Disclaimer**: Transfer or payment services are available as a preview, protocols and parameters are subject to change in upcoming beta/final releases.

```
https://{{domain}}.biapi.pro/2.0/auth/webview/{{lang}}/transfer
```
This flow allows an end-user to execute a bank transfer. The flow handles the following steps:
- if the transfer is not already created, all steps to authenticate with a bank, select the recipient, the emitter account, the amount and label;
- executing the transfer, including managing SCAs for recipient registration and/or transfer validation.

###### Endpoint parameters

| Parameter | Description |
| - | - |
| `client_id` | Required. The ID of the requesting client application. You can manage client applications of your domain in the admin console. |
| `redirect_uri` | Required. An absolute callback URI. The webview will redirect to it at the end of the flow. |
| `code` | Required. A user-scoped temporary code to use with the Budgea API.<br>If you don't provide a code, a new anonymous user will be created before a connection is added and the transfer is executed, and you will be returned an access token code scoped to it with the success callback. |
| `state` | Optional. An opaque string parameter that you can use to carry state across the flow. The parameter will be set "as is" on the callback URI. Make sure that the `state` you provide is properly URL-encoded. |
| `transfer_id`| Optional. The ID of an prepared transfer to be validated in the webview. The user cannot edit anything on the transfer before validation. |

###### Successfull callback parameters

| Parameter | Description |
| - | - |
| `transfer_id` | The ID of the transfer that was created and executed. |
| `code` | Optional. If a `code` was *not* initially specified, an API code that you can exchange to obtain a permanent access token associated with the newly-created anonymous user holding the transfer. The parameter is URL-encoded, make sure to handle it accordingly. |
| `state` | Optional. Identical to the `state` parameter that was initially specified. |

###### Additional error codes

| Code | Description |
| - | - |
| `tos_declined` | The end-user refused to validate the terms of service. |

#### Migrating from v3

We provide a full backward compatibility layer with current implementations of the webview v3 to ease the transition. All endpoints remains accessible, with the same parameters and callback behaviour. Migration instructions are provided below.

*The v3 compatibility mode is expected to be removed on 31 December 2019.* You should migrate your implementation a soon as possible to new endpoints and parameters.

##### Add connection flow / Edit connection credentials  
```
/connect/select
```

This endpoint has been superseded by `/connect` (no suffix) for adding a new connection, and `/reconnect` for resetting or updating an existing connection.

| Endpoint parameter | Migration instructions |
| - | - |
| `client_id` | No change. |
| `redirect_uri`, `state` | No change. |
| `response_type` | This parameter is not used anymore. |
| `id_connector`, `connectors` | Superseded by `connector_ids` sent to the `/connect` endpoint. |
| `types` | Superseded by `connector_capabilities` sent to the `/connect` endpoint.<br>Use`connector_capabilities=bank` (bank connection) or `connector_capabilities=document` (provider connection). |
| `id_connection` | Superseded by `connection_id` sent to the `/reconnect` endpoint. |

Passing the code or access token as an URL fragment is no longer supported, use the `code` query parameter.

| Callback parameter | Migration instructions |
| - | - |
| `id_connection` | Superseded by `connection_id`.<br>In the `/reconnect` flow, this parameter is not returned anymore. |
| `code` | Still named `code`, but in the `/connect` flow the parameter is now **only** added if an anonymous user was created, i.e. the `code` parameter was **not** provided as a query parameter or fragment.<br>In the `/reconnect` flow, this parameter is not returned anymore. |
| `state` | No change. |

##### Manage connections

```
/accounts
```

This endpoint has been superseded by `/manage`, that now fully allows users to add/remove connections, reset their credentials or recover from error states.

| Endpoint parameter | Migration instructions |
| - | - |
| `client_id` | No change. |
| `redirect_uri`, `state` | No change, these parameters are now optional. |
| `response_type` | This parameter is not used anymore. |
| `types` | Superseded by `connector_capabilities`.<br>Use`connector_capabilities=bank` (bank connection) or `connector_capabilities=document` (provider connection). |

Passing the code or access token as an URL fragment is no longer supported, use the `code` query parameter.

| Callback parameter | Migration instructions |
| - | - |
| `code` | This parameter is not returned anymore. |
| `state` | No change. |

##### Behaviour change

In v3, the `/accounts` flow used to redirect to the `redirect_uri` after a connection addition. This is no longer the case in v4, where redirection is only performed when the user explicitly closes the flow. If you need to perform actions when a connection is added or removed, you should rely on webhooks.

#### Protocol
This section describes the protocol used to set bank and provider accounts of a user, in case you don't want to use the webview.

The idea is to call the following services client-side (with AJAX in case of a web application), to ensure the bank and providers credentials will not be sent to your servers.

1. /auth/init
```http
POST /auth/init
```
```json
{
   "auth_token" : "fBqjMZbYddebUGlkR445JKPA6pCoRaGb",
   "type" : "temporary",
   "expires_in" : 1800,
   "id_user": 1
}
```
This service creates a temporarily token, to use in the "Authorization" header in next calls to the API

The returned token has a life-time of 30 minutes, and should be transfered to the API then (cf Permanent Token), so that your server can get a permanent access_token.

It is possible to generate a permanent token immediately, by calling the service with the manage_token, or by supply parameters client_id and client_secret.

2. /banks or /providers
```http
GET /banks?expand=fields
Authorization: Bearer <token>
```
```json
{
   "hidden" : false,
         "charged" : true,
         "name" : "American Express",
         "id" : 30,
         "fields" : [
            {
               "values" : [
                  {
                     "label" : "Particuliers/Professionnels",
                     "value" : "pp"
                  },
                  {
                     "value" : "ent",
                     "label" : "Entreprises"
                  }
               ],
               "label" : "Type de compte",
               "regex" : null,
               "name" : "website",
               "type" : "list"
            },
            {
               "type" : "password",
               "label" : "Code secret",
               "name" : "password",
               "regex" : "^[0-9]{6}$"
            }
         ],
      },
      ...
   ],
   "total" : 44,
}
```
You get a list of connectors, and all associated fields needed to build the form at step 3.
You can also use that list to show to your user, all available banks.

3. /users/me/connections
Make a POST request and supply the id_bank (ID of the chosen bank) or id_provider (ID of provider), and all requested fields as key/value parameters.
For example:
```http
POST /users/me/connections
Authorization: Bearer <token>
-F login=12345678
-F password=123456
-F id_bank=59
```
You can get the following return codes:

|Code           |Description                                                  |
|---------------|------------------------------------------------------------ |
|200            |The connection has succeed and has been created              |
|202            |It is necessary to provide complementary information. This occurs on the first connection on some kind of Boursorama accounts for example, where a SMS is sent to the customer. It is necessary to ask the user to fill fields requested in the fields, and do a POST again on /users/me/connections/ID, with the connection ID in id_connection. |
|400            |Unable to connect to the website, the field error in the JSON can be **websiteUnavailable** or **wrongpass**  |
|403            |Invalid token                                                |

4. Activate accounts
The accounts the user wants to aggregate must be activated before any transaction or investment is retrieved.
Several accounts can be activated in 1 request by separating the account ids with commas.
```http
PUT /users/me/connections/<id_connection>/accounts/<id_account>?all
```

5. Permanent token
If the user validates the share of his accounts, it is necessary to transform the temporary code to a permanent access_token (so that the user won't expire).

To do that, make a POST request on /auth/token/access with the following parameters:
|Parameter            |Description                                                     |
|---------------------|----------------------------------------------------------------|
|code                 |The temporarily token which will let you get the access_token   |
|client_id            |The ID of your client application                               |
|client_secret        |The secret of your client application                           |

```json
POST /auth/token/access

{
   "client_id" : 17473055,
   "client_secret" : "54tHJHjvodbANVzaRtcLzlHGXQiOgw80",
   "code" : "fBqjMZbYddebUGlkR445JKPA6pCoRaGb"
}
```
```http
HTTP/1.1 200 OK

{
   "access_token" : "7wBPuFfb1Hod82f1+KNa0AmrkIuQ3h1G",
   "token_type":"Bearer"
}
```

### Update accounts
Another important call is when a user wants to add/remove connections to banks or providers, or to change the password on one of them, it is advised to give him a temporarily code from the permanent access_token, with the following call (using the access_token as bearer):
```http
POST /auth/token/code
Authorization: Bearer <token>
```
```json
{
   "code" : "/JiDppWgbmc+5ztHIUJtHl0ynYfw682Z",
   "type" : "temporary",
   "expires_in" : 1800,
}
```
Its life-time is 30 minutes, and let the browser to list connections and accounts, via `GET /users/me/connections?expand=accounts` for example.

 To update the password of a connection, you can do a POST on the *connection* resource, with the field *password* in the data. The new credentials are checked to make sure they are valid, and the return codes are the same as when adding a connection.

## Getting the data (Webhooks)
You have created your users and their connections, now it's time to get the data.
There are 2 ways to retrieve it, the 2 can be complementary:
- make regular calls to the API
- use the webhooks (recommended)

### Manual Synchronization
It is possible to do a manual synchronization of a user. We recommend to use this method in case the user wants fresh data after logging in.

To trigger the synchronization, call the API as below:
`PUT /users/ID/connections`
The following call is blocking until the synchronization is terminated.

Even if it is not recommended, it's possible to fetch synchronously new data. To do that, you can use the *expand* parameter:
` /users/ID/connections?expand=accounts[transactions,investments[type]],subscriptions`
```json
{
   "connections" : [
      {
         "accounts" : [
            {
               "balance" : 7481.01,
               "currency" : {
                  "symbol" : "€",
                  "id" : "EUR",
                  "prefix" : false
               },
               "deleted" : null,
               "display" : true,
               "formatted_balance" : "7 481,01 €",
               "iban" : "FR76131048379405300290000016",
               "id" : 17,
               "id_connection" : 7,
               "investments" : [
                  {
                     "code" : "FR0010330902",
                     "description" : "",
                     "diff" : -67.86,
                     "id" : 55,
                     "id_account" : 19,
                     "id_type" : 1,
                     "label" : "Agressor PEA",
                     "portfolio_share" : 0.48,
                     "prev_diff" : 2019.57,
                     "quantity" : 7.338,
                     "type" : {
                        "color" : "AABBCC",
                        "id" : 1,
                        "name" : "Fonds action"
                     },
                     "unitprice" : 488.98,
                     "unitvalue" : 479.73,
                     "valuation" : 3520.28
                  }
               ],
               "last_update" : "2015-07-04 15:17:30",
               "name" : "Compte chèque",
               "number" : "3002900000",
               "transactions" : [
                  {
                     "active" : true,
                     "application_date" : "2015-06-17",
                     "coming" : false,
                     "comment" : null,
                     "commission" : null,
                     "country" : null,
                     "date" : "2015-06-18",
                     "date_scraped" : "2015-07-04 15:17:30",
                     "deleted" : null,
                     "documents_count" : 0,
                     "formatted_value" : "-16,22 €",
                     "id" : 309,
                     "id_account" : 17,
                     "id_category" : 9998,
                     "id_cluster" : null,
                     "last_update" : "2015-07-04 15:17:30",
                     "new" : true,
                     "original_currency" : null,
                     "original_value" : null,
                     "original_wording" : "FACTURE CB HALL'S BEER",
                     "rdate" : "2015-06-17",
                     "simplified_wording" : "HALL'S BEER",
                     "state" : "parsed",
                     "stemmed_wording" : "HALL'S BEER",
                     "type" : "card",
                     "value" : -16.22,
                     "wording" : "HALL'S BEER"
                  }
               ],
               "type" : "checking"
            }
         ],
         "error" : null,
         "expire" : null,
         "id" : 7,
         "id_user" : 7,
         "id_bank" : 41,
         "last_update" : "2015-07-04 15:17:31"
      }
   ],
   "total" : 1,
}
```

### Background synchronizations & Webhooks
Webhooks are callbacks sent to your server, when an event is triggered during a synchronization.
Synchronizations are automatic, the frequency can be set using the configuration key `autosync.frequency`.
Using webhooks allows you to get the most up-to-date data of your users, after each synchronization.

The automatic synchronization makes it possible to recover new bank entries, or new invoices, at a given frequency.
You have the possibility to add webhooks on several events, and choose to receive each one on a distinct URL.
To see the list of available webhooks you can call the endpoint hereunder:
```
curl https://demo.biapi.pro/2.0/webhooks_events \
  -H 'Authorization: Bearer <token>'
```

The background synchronizations for each user are independent, and their plannings are spread over the day so that they do not overload any website.

Once the synchronization of a user is over, a POST request is sent on the callback URL you have defined, including all webhook data.
A typical json sent to your server is as below:
```http
POST /callback HTTP/1.1
Host: example.org
Content-Length: 959
Accept-Encoding: gzip, deflate, compress
Accept: */*
User-Agent: Budgea API/2.0
Content-Type: application/json; charset=utf-8
Authorization: Bearer sl/wuqgD2eOo+4Zf9FjvAz3YJgU+JKsJ

{
   "connections" : [
      {
         "accounts" : [
            {
               "balance" : 7481.01,
               "currency" : {
                  "symbol" : "€",
                  "id" : "EUR",
                  "prefix" : false
               },
               "deleted" : null,
               "display" : true,
               "formatted_balance" : "7 481,01 €",
               "iban" : "FR76131048379405300290000016",
               "id" : 17,
               "id_connection" : 7,
               "investments" : [
                  {
                     "code" : "FR0010330902",
                     "description" : "",
                     "diff" : -67.86,
                     "id" : 55,
                     "id_account" : 19,
                     "id_type" : 1,
                     "label" : "Agressor PEA",
                     "portfolio_share" : 0.48,
                     "prev_diff" : 2019.57,
                     "quantity" : 7.338,
                     "type" : {
                        "color" : "AABBCC",
                        "id" : 1,
                        "name" : "Fonds action"
                     },
                     "unitprice" : 488.98,
                     "unitvalue" : 479.73,
                     "valuation" : 3520.28
                  }
               ],
               "last_update" : "2015-07-04 15:17:30",
               "name" : "Compte chèque",
               "number" : "3002900000",
               "transactions" : [
                  {
                     "active" : true,
                     "application_date" : "2015-06-17",
                     "coming" : false,
                     "comment" : null,
                     "commission" : null,
                     "country" : null,
                     "date" : "2015-06-18",
                     "date_scraped" : "2015-07-04 15:17:30",
                     "deleted" : null,
                     "documents_count" : 0,
                     "formatted_value" : "-16,22 €",
                     "id" : 309,
                     "id_account" : 17,
                     "id_category" : 9998,
                     "id_cluster" : null,
                     "last_update" : "2015-07-04 15:17:30",
                     "new" : true,
                     "original_currency" : null,
                     "original_value" : null,
                     "original_wording" : "FACTURE CB HALL'S BEER",
                     "rdate" : "2015-06-17",
                     "simplified_wording" : "HALL'S BEER",
                     "state" : "parsed",
                     "stemmed_wording" : "HALL'S BEER",
                     "type" : "card",
                     "value" : -16.22,
                     "wording" : "HALL'S BEER"
                  }
               ],
               "type" : "checking"
            }
         ],
         "bank" : {
            "id_weboob" : "ing",
            "charged" : true,
            "name" : "ING Direct",
            "id" : 7,
            "hidden" : false
         },
         "error" : null,
         "expire" : null,
         "id" : 7,
         "id_user" : 7,
         "id_bank" : 41,
         "last_update" : "2015-07-04 15:17:31"
      }
   ],
   "total" : 1,
   "user" : {
      "signin" : "2015-07-04 15:17:29",
      "id" : 7,
      "platform" : "sharedAccess"
   }
}
```
The authentication on the callback is made with the access_token of the user (which is a shared secret between your server and the Budgea API).

When you are in production, it is needed to define a HTTPS URL using a valid certificate, delivered by a recognized authority. If this is not the case, you can contact us to add your CA (Certificate Authority) to our PKI (Public Key Infrastructure).

Important: it is necessary to send back a HTTP 200 code, without what we consider that data is not correctly taken into account on your system, and it will be sent again at the next user synchronization.

## Guidelines for production
Now you should have integrated the API inside your application. Make sure your Webhooks URLs are in HTTPS, if so you can enable the production state of the API.

To make things great, here are some good practices, please check you have respected them:
- You have provided to your users a way to configure their accounts
- You have provided to your users a way to change their account passwords
- You consider the **error** field of Connections, to alert the user in case the state is **wrongpass**
- You map IDs of Accounts, Subscriptions, Transactions and Documents in your application, to be sure to correctly match them
- When the deleted field is set on a bank transaction, you delete it in your database
- You don't loop on all users to launch synchronizations, this might saturate the service

If you have questions about above points, please contact us. Otherwise, you can put into production!

### Going further
If you want to raise the bar for your app and add features such as the ability to do transfers, get invoices, aggregate patrimony and more, please refer to the sections below.
We'll discuss complementary APIs building upon the aggregation, allowing for the best of financial apps.

## Budgea API Pay
This API allows for the emition of transfers between the aggregated accounts.
Just like the simple aggregation, BI provides a webview or a protocol to follow, to implement this feature.

### API pay protocol
This section describes how the transfer and recipient protocol work, in case you don't want to integrate the webview.
The idea is to do following calls client side (with AJAX in case of a web application), so that the interaction with the Budgea API is transparent.

#### Executing a transfer
1. /auth/token/code
If you do calls client side, get a new temporary code for the user, from the access_token. This will prevent security issues.
```
curl -d '' \
  https://demo.biapi.pro/2.0/auth/token/code \
  -H 'Authorization: Bearer <token>'
```
```json
{
   "code": "/JiDppWgbmc+5ztHIUJtHl0ynYfw682Z",
   "type": "temporary",
   "expires_in": 1800
}
```
The returned token has a life-time of 30 minutes.

2. /users/me/accounts?able_to_transfer=1
List all the accounts that can do transfers. Authenticate the call with the code you got at step 1.
```
curl https://demo.biapi.pro/2.0/users/me/accounts?able_to_transfer=1 \
  -H 'Authorization: Bearer /JiDppWgbmc+5ztHIUJtHl0ynYfw682Z'
```
```json
{
  "accounts" : [
      {
         "display" : true,
         "balance" : 2893.36,
         "id_type" : 2,
         "number" : "****1572",
         "type" : "checking",
         "deleted" : null,
         "bic" : "BNPAFRPPXXX",
         "bookmarked" : false,
         "coming" : -2702.74,
         "id_user" : 1,
         "original_name" : "Compte de chèques",
         "currency" : {
            "symbol" : "€",
            "id" : "EUR",
            "prefix" : false
         },
         "name" : "lol",
         "iban" : "FR7630004012550000041157244",
         "last_update" : "2016-12-28 12:31:04",
         "id" : 723,
         "formatted_balance" : "2893,36 €",
         "able_to_transfer" : true,
         "id_connection" : 202
      }
   ],
   "total" : 1
}
```

3. /users/me/accounts/ID/recipients
List all available recipients for a given account.
```
curl https://demo.biapi.pro/2.0/users/me/accounts/723/recipients?limit=1 \
  -H 'Authorization: Bearer /JiDppWgbmc+5ztHIUJtHl0ynYfw682Z'
```
```json
{
  "total" : 27,
   "recipients" : [
      {
         "bank_name" : "BNP PARIBAS",
         "bic" : "BNPAFRPPXXX",
         "category" : "Interne",
         "deleted" : null,
         "enabled_at" : "2016-10-31 18:52:53",
         "expire" : null,
         "iban" : "FR7630004012550003027641744",
         "id" : 1,
         "id_account" : 1,
         "id_target_account" : 2,
         "label" : "Livret A",
         "last_update" : "2016-12-05 12:07:24",
         "time_scraped" : "2016-10-31 18:52:54",
         "webid" : "2741588268268091098819849694548441184167285851255682796371"
      }
   ]
}
```

4. /users/me/accounts/ID/recipients/ID/transfers
Create the transfer
```
curl \
  https://demo.biapi.pro/2.0/users/me/accounts/1/recipients/1/transfers \
  -H 'Authorization: Bearer /JiDppWgbmc+5ztHIUJtHl0ynYfw682Z' \
  -F amount=10, \
  -F label="Test virement", \
  -F exec_date="2018-09-12" // optional
```
```json
{
   "account_iban" : "FR7630004012550000041157244",
   "amount" : 10,
   "currency" : {
      "id" : "EUR",
      "prefix" : false,
      "symbol" : "€"
   },
   "exec_date" : "2018-09-12",
   "fees" : null
   "formatted_amount" : "10,00 €",
   "id" : 22,
   "id_account" : 1,,
   "id_recipient" : 1,
   "label" : "Test virement",
   "recipient_iban" : "FR7630004012550003027641744",
   "register_date" : "2018-09-12 10:34:59",
   "state" : "created",
   "webid" : null
}
```

5. /users/me/transfers/ID
Execute the transfer
```
curl \
  https://demo.biapi.pro/2.0/users/me/transfers/22 \
  -H 'Authorization: Bearer /JiDppWgbmc+5ztHIUJtHl0ynYfw682Z' \
  -F validated=true
```
```json
{
   "account_iban" : "FR7630004012550000041157244",
   "amount" : 10,
   "currency" : {
      "id" : "EUR",
      "prefix" : false,
      "symbol" : "€"
   },
   "exec_date" : "2016-12-19",
   "fees" : null,
   "fields" : [
      {
         "label" : "Code secret BNP Paribas",
         "type" : "password",
         "regex" : "^[0-9]{6}$",
         "name" : "password"
      }
   ],
   "formatted_amount" : "10,00 €",
   "id" : 22,
   "id_account" : 1,
   "id_recipient" : 1,
   "label" : "Test virement",
   "recipient_iban" : "FR7630004012550003027641744",
   "register_date" : "2016-12-19 10:34:59",
   "state" : "created",
   "webid" : null
}
```
Here, an authentication step asks user to enter his bank password. The transfer can be validated with:

```
curl \
  https://demo.biapi.pro/2.0/users/me/transfers/22 \
  -H 'Authorization: Bearer /JiDppWgbmc+5ztHIUJtHl0ynYfw682Z' \
  -F validated=true \
  -F password="123456"
```
```json
{
   "account_iban" : "FR7630004012550000041157244",
   "currency" : {
      "id" : "EUR",
      "prefix" : false,
      "symbol" : "€"
   },
   "amount" : 10,
   "exec_date" : "2016-12-19",
   "fees" : 0,
   "formatted_amount" : "10,00 €",
   "id" : 22,
   "id_account" : 1,
   "id_recipient" : 1,
   "label" : "Test virement",
   "recipient_iban" : "FR7630004012550003027641744",
   "register_date" : "2016-12-19 10:34:59",
   "state" : "pending",
   "webid" : "ZZ10C4FKSNP05TK95"
}
```
The field state is changed to *pending*, telling that the transfer has been correctly executed on the bank. A connection synchronization is then launched, to find the bank transaction in the movements history. In this case, the transfer state will be changed to *done*.

#### Adding a recipient
1. /auth/token/code
Get a temporary token for the user. Same procedure than step 1 for a transfer.

2. /users/me/accounts?able_to_transfer=1
List accounts allowing transfers. Same procedure than step 2 for a transfer.

3. /users/me/accounts/ID/recipients/
Add a new recipient.
```
curl \
  https://demo.biapi.pro/2.0/users/me/accounts/1/recipients \
  -H 'Authorization: Bearer /JiDppWgbmc+5ztHIUJtHl0ynYfw682Z' \
  -F iban=FR7613048379405300290000355 \
  -F label="Papa", \
  -F category="Famille" // optional
```
```json
{
   "bank_name" : "BNP PARIBAS",
   "bic" : "BNPAFRPPXXX",
   "category" : "Famille",
   "deleted" : null,
   "enabled_at" : null,
   "expire" : "2017-04-29 16:56:20",
   "fields" : [
      {
         "label" : "Veuillez entrer le code reçu par SMS",
         "type" : "password",
         "regex" : "^[0-9]{6}$",
         "name" : "sms"
      }
   ],
   "iban" : "FR7613048379405300290000355",
   "id" : 2,
   "id_account" : 1,
   "id_target_account" : null,
   "label" : "Papa",
   "last_update" : "2017-04-29 16:26:20",
   "time_scraped" : null,
   "webid" : null
}
```
It is necessary to post on the object Recipient with the requested fields (here sms), until the add is validated:
```
curl \
  https://demo.biapi.pro/2.0/users/me/accounts/1/recipients/2 \
  -H 'Authorization: Bearer /JiDppWgbmc+5ztHIUJtHl0ynYfw682Z' \
  -F sms="123456"
```
```json
{
   "bank_name" : "BNP PARIBAS",
   "bic" : "BNPAFRPPXXX",
   "category" : "Famille",
   "deleted" : null,
   "enabled_at" : "2017-05-01 00:00:00",
   "expire" : null,
   "iban" : "FR7613048379405300290000355",
   "id" : 2,
   "id_account" : 1,
   "id_target_account" : null,
   "label" : "Papa",
   "last_update" : "2017-04-29 16:26:20",
   "time_scraped" : null,
   "webid" : "2741588268268091098819849694548441184167285851255682796371"
}
```
If the field enabled_at is in the future, it means that it isn't possible yet to execute a transfer, as the bank requires to wait a validation period.

### API Pay Webview
This section describes how to integrate the webview of the Budgea Pay API inside your application, to let your users do transfers to their recipients.

#### User redirection
To redirect the user to the webview, it is necessary to build a URI authenticated with a temporary token.
This can be done from our library, or by calling the endpoint `/auth/token/code` (see the protocol section for an example).
If the parameter **redirect_uri** is supplied, the user will be redirected to that page once the transfer is done.

#### List of pages
Here are a list a pages you may call to redirect your user directly on a page of the process:
|Path                                 |Description of the page                                                           |
|-------------------------------------|----------------------------------------------------------------------------------|
|/transfers                           |List Transfers                                                                    |
|/transfers/accounts                  |List emitter accounts                                                             |
|/transfers/accounts/id/recipients    |List recipients                                                                   |
|/transfers/accounts/id/recipients/id |Initialization of a transfer between the account and the recipient                |
|/transfers/id                        |Detail of a given transfer                                                        |

## Deprecated

This section lists all the deprecated features in Budgea API. The associated date is the date of its removal.
**Do not use them**.

### Key Investments (**2019-06-24**)

Adding a temporary new key "all_investments" that will include deleted investments in the **webhooks**.

### No automatic expand on User objects (**2019-07-30**)
In the API responses, by default, User objects won't display the keys "config", "alert_settings" and "invites" anymore.
You will still be able to access this data by expanding the request.
Example: GET /users/me/?expand=alert_settings,config

### Renaming of "type" field for jwt tokens (**2019-07-30**)
For user's tokens in the jwt format, the "type" field will be renamed from "shared_access" to "sharedAccess".


## Actions

### account_types.get
Get account types


```js
biapi_pro.account_types.get({}, context)
```

#### Input
* input `object`
  * expand `string`

#### Output
* output `object`
  * accounttypes **required** `array`
    * items [AccountType](#accounttype)
  * total `number`: total number of results

### account_types.id_account_type.get
Get an account type


```js
biapi_pro.account_types.id_account_type.get({
  "id_account_type": 0
}, context)
```

#### Input
* input `object`
  * id_account_type **required** `integer`
  * expand `string`

#### Output
* output [AccountType](#accounttype)

### admin.jwt.post
This endpoint generates a new jwt manage token. It requires an admin manage token to be used<br><br>


```js
biapi_pro.admin.jwt.post({}, context)
```

#### Input
* input `object`
  * duration `integer`: number of minute before the token expiration (0 for token that won't expire unless the client application is deleted) (default: 1)
  * scope `string`: scope requested for the token (default: config)

#### Output
* output `object`

### auth.init.post
This endpoint creates a new temporary token related to a new anonymous user.<br><br>It will expire 30 minutes after.<br><br>Note: if you supply client_id and client_secret, or if you call this endpoint with the manage_token, the token will be permanent.<br><br>


```js
biapi_pro.auth.init.post({}, context)
```

#### Input
* input `object`
  * client_id `string`: ID of the client
  * client_secret `string`: secret of the client

#### Output
* output `object`
  * auth_token **required** `string`: new token created for the new anonymous user
  * expires_in `integer`: duration in seconds of the token validity
  * type **required** `string`: type of the token

### auth.jwt.post
This endpoint generates a new jwt token for the user. This token will last the time in minutes given by the config key auth.default_token_expire (permanent if this the parameter expire=False is given)<br><br>


```js
biapi_pro.auth.jwt.post({}, context)
```

#### Input
* input `object`
  * client_id `string`: id of the client
  * client_secret `string`: secret for the client
  * expire `boolean`: if set to True, the token will expire n minutes after its creation, n being the value of configuration key auth.default_token_expire (default: True)
  * id_user `integer`: user for whom the token has to be generated. If not supplied, a user will be created
  * scope `string`: scope requested for the token

#### Output
* output `object`
  * jwt_token **required** `string`: the jwt token
  * payload **required** `object`: the payload contained in the jwt token

### auth.renew.post
Get a new access token given an user id and client credentials


```js
biapi_pro.auth.renew.post({
  "client_id": "",
  "client_secret": "",
  "id_user": 0
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`: ID of the client
  * client_secret **required** `string`: secret of the client
  * grant_type `string`: default is "client_credentials"
  * id_user **required** `integer`: id of the user to generate a token for
  * revoke_previous `boolean`: if true, all other permanent tokens for the user will be deleted

#### Output
* output `object`
  * access_token **required** `string`: the access token transformed from the temporary one
  * token_type **required** `string`: the access token type

### auth.token.delete
This endpoint removes the token in use.<br><br>


```js
biapi_pro.auth.token.delete(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### auth.token.post
Request a new user token by giving an username and a password. Or a manage payment token by giving a client<br><br><br><br>


```js
biapi_pro.auth.token.post({
  "application": "",
  "password": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: application name
  * grant_type `string`: password when requesting a user token and client_credentials for a payment manage token (default: password)
  * password **required** `string`: password
  * scope `string`: scope requested for the token
  * username **required** `string`: username

#### Output
* output `object`
  * expires_in `integer`: duration in seconds of the token validity
  * scope **required** `string`: the token scope
  * token **required** `string`: the requested token

### auth.token.access.post
In order to register a new user with the OAuth 2 process, the client has to call this endpoint to request a granted access_token with the received temporary code.<br><br>


```js
biapi_pro.auth.token.access.post({
  "client_id": "",
  "client_secret": "",
  "code": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`: ID of the client
  * client_secret **required** `string`: secret of the client
  * code **required** `string`: user's temporary code
  * grant_type `string`: default is "authorization_code"
  * redirect_uri `string`: redirect uri used by user

#### Output
* output `object`
  * access_token **required** `string`: the access token transformed from the temporary one
  * token_type **required** `string`: the access token type

### auth.token.code.get
This endpoint generates a new temporary token for the user.<br><br>In case the access_token is used by a trusted device, and you want to let another one (for example a web browser) access to user resources, use this service to create a token which will expire in 30 minutes.<br><br>Additionally, you can also generate a temporary single-use token by specifying 'type=singleAccess' as query parameter. A single-use token can only be used once no matter the endpoint being accessed.<br><br>


```js
biapi_pro.auth.token.code.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access **required** `string`: the reusability of a token (standard or single use)
  * code **required** `string`: the temporary token
  * expires_in **required** `integer`: duration in seconds of the token validity
  * type **required** `object`: the token type

### banks.get
Get list of connectors


```js
biapi_pro.banks.get({}, context)
```

#### Input
* input `object`
  * expand `string`

#### Output
* output `object`
  * banks **required** `array`
    * items [Connector](#connector)
  * total `number`: total number of results

### banks.categories.post
It requires the name of the category to be created<br><br>


```js
biapi_pro.banks.categories.post({
  "name": ""
}, context)
```

#### Input
* input `object`
  * expand `string`
  * name **required** `string`: name of the category to be created

#### Output
* output [ConnectorCategory](#connectorcategory)

### banks.categories.id_category.delete
Delete the supplied category


```js
biapi_pro.banks.categories.id_category.delete({
  "id_category": 0
}, context)
```

#### Input
* input `object`
  * id_category **required** `integer`
  * expand `string`

#### Output
* output [ConnectorCategory](#connectorcategory)

### banks.categories.id_category.post
Edit the name for the supplied category.<br><br>


```js
biapi_pro.banks.categories.id_category.post({
  "id_category": 0,
  "name": ""
}, context)
```

#### Input
* input `object`
  * id_category **required** `integer`
  * expand `string`
  * name **required** `string`: new name for the supplied category

#### Output
* output [ConnectorCategory](#connectorcategory)

### banks.id_bank.get
Get a connector


```js
biapi_pro.banks.id_bank.get({
  "id_bank": 0
}, context)
```

#### Input
* input `object`
  * id_bank **required** `integer`
  * expand `string`

#### Output
* output [Connector](#connector)

### banks.id_connector.connections.get
By default, it selects a set of 3 connections.<br><br>


```js
biapi_pro.banks.id_connector.connections.get({
  "id_connector": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * range `integer`: the length of the connection subset
  * type `integer`: to target a specific account type which will be
  * occurrences `integer`: require at least N accounts of the targeted
  * expand `string`

#### Output
* output `object`
  * connections **required** `array`
    * items [Connection](#connection)
  * total `number`: total number of results

### banks.id_connector.logos.get
This endpoint returns all links to files associated with this connector.<br><br>


```js
biapi_pro.banks.id_connector.logos.get({
  "id_connector": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * expand `string`

#### Output
* output `object`
  * connectorlogos **required** `array`
    * items [ConnectorLogo](#connectorlogo)
  * total `number`: total number of results

### banks.id_connector.logos.main.get
This endpoint returns all links to files associated with this connector.<br><br>


```js
biapi_pro.banks.id_connector.logos.main.get({
  "id_connector": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * expand `string`

#### Output
* output `object`
  * connectorlogos **required** `array`
    * items [ConnectorLogo](#connectorlogo)
  * total `number`: total number of results

### banks.id_connector.logos.thumbnail.get
This endpoint returns all links to files associated with this connector.<br><br>


```js
biapi_pro.banks.id_connector.logos.thumbnail.get({
  "id_connector": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * expand `string`

#### Output
* output `object`
  * connectorlogos **required** `array`
    * items [ConnectorLogo](#connectorlogo)
  * total `number`: total number of results

### banks.id_connector.sources.get
Get list of connector sources


```js
biapi_pro.banks.id_connector.sources.get({
  "id_connector": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * expand `string`

#### Output
* output `object`
  * sources **required** `array`
    * items [ConnectorSource](#connectorsource)
  * total `number`: total number of results

### banks.id_connector.sources.id_connector_source.fields.get
Get fields specific to a domain and a source


```js
biapi_pro.banks.id_connector.sources.id_connector_source.fields.get({
  "id_connector": 0,
  "id_connector_source": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * id_connector_source **required** `integer`
  * expand `string`

#### Output
* output `object`
  * source_fields **required** `array`
    * items [ConnectorSourceField](#connectorsourcefield)
  * total `number`: total number of results

### banks.id_connector.sources.id_source.get
Get the connector source


```js
biapi_pro.banks.id_connector.sources.id_source.get({
  "id_connector": 0,
  "id_source": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * id_source **required** `integer`
  * expand `string`

#### Output
* output [ConnectorSource](#connectorsource)

### categories.get
Ressource to get all existing categories<br><br>


```js
biapi_pro.categories.get({}, context)
```

#### Input
* input `object`
  * expand `string`

#### Output
* output `object`
  * categories **required** `array`
    * items [Category](#category)
  * total `number`: total number of results

### categories.keywords.post
If the keyword already exists the keyword is not added. Used for the categorization of transactions.<br><br>Form params: - id_category (integer): a reference towards the category associated with the keyword - keyword (string): the searched keyword - income (bool): 1 if the associated category represents an income else 0 - priority (integer): sets the priority for the keyword, used when categorizing<br><br>


```js
biapi_pro.categories.keywords.post({}, context)
```

#### Input
* input `object`
  * expand `string`

#### Output
* output [Keyword](#keyword)

### categories.keywords.id_keyword.delete
Delete a particular key-value pair on a transaction.


```js
biapi_pro.categories.keywords.id_keyword.delete({
  "id_keyword": 0
}, context)
```

#### Input
* input `object`
  * id_keyword **required** `integer`
  * expand `string`

#### Output
* output [Keyword](#keyword)

### categorize.post
It requires an array of transaction dictionaries. Any fields of transactions that are not required will be kept in the response. The response contains the list of transactions with two more fields: id_category and state (it indicates how the transaction has been categorized)<br><br>


```js
biapi_pro.categorize.post({
  "type": "",
  "value": 0,
  "wording": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string`: type of the transaction (default: unknown)
  * value **required** `integer`: value of the transaction
  * wording **required** `string`: label of the transaction

#### Output
* output `object`

### certificate.type.get
Get the latest certificate of a type


```js
biapi_pro.certificate.type.get({
  "type": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string`
  * expand `string`

#### Output
* output [Certificate](#certificate)

### clients.get
List clients


```js
biapi_pro.clients.get({}, context)
```

#### Input
* input `object`
  * expand `string`

#### Output
* output `object`
  * clients **required** `array`
    * items [Client](#client)
  * total `number`: total number of results

### clients.post
Create a client


```js
biapi_pro.clients.post({}, context)
```

#### Input
* input `object`
  * expand `string`
  * config `string`: custom config about the client
  * generate_keys `boolean`: if True, generate a rsa pair of keys so the client can be used to generate jwt user tokens (default: False)
  * name `string`: name of client
  * redirect_uris `string`: list of allowed redirect uris

#### Output
* output [Client](#client)

### clients.id_client.delete
Delete a client


```js
biapi_pro.clients.id_client.delete({
  "id_client": 0
}, context)
```

#### Input
* input `object`
  * id_client **required** `integer`
  * expand `string`

#### Output
* output [Client](#client)

### clients.id_client.get
If you use the manage_token or a configuration token, you will get also the client secret.<br><br>


```js
biapi_pro.clients.id_client.get({
  "id_client": 0
}, context)
```

#### Input
* input `object`
  * id_client **required** `integer`
  * expand `string`

#### Output
* output [Client](#client)

### clients.id_client.put
Update a client


```js
biapi_pro.clients.id_client.put({
  "id_client": 0
}, context)
```

#### Input
* input `object`
  * id_client **required** `integer`
  * expand `string`
  * config `string`: custom config about the client
  * description `string`: text to display as a default description
  * description_banks `string`: text to display as a description for banks
  * description_providers `string`: text to display as a description for providers
  * generate_keys `boolean`: set a rsa key pair for the client, which make it possible to generate a jwt user token using this client. No effect if the client already has a set of keys(default: False)
  * name `string`: name of client
  * primary_color `string`: hexadecimal code of the client primary color (e.g F45B9A)
  * pro `boolean`: Wether the client should display the company manager page
  * redirect_uris `string`: list of allowed redirect uris
  * secondary_color `string`: hexadecimal code of the client secondary color (e.g F45B9A)
  * secret `boolean`: reset the secret
  * update_config `boolean`: update the custom information about the client instead of replacing the existing one (default: True)

#### Output
* output [Client](#client)

### clients.id_client.logo.delete
Delete the client logo


```js
biapi_pro.clients.id_client.logo.delete({
  "id_client": 0
}, context)
```

#### Input
* input `object`
  * id_client **required** `integer`
  * expand `string`

#### Output
* output [File](#file)

### clients.id_client.logo.post
Update the client logo


```js
biapi_pro.clients.id_client.logo.post({
  "id_client": 0
}, context)
```

#### Input
* input `object`
  * id_client **required** `integer`
  * expand `string`

#### Output
* output [File](#file)

### config.get
<br><br>


```js
biapi_pro.config.get({}, context)
```

#### Input
* input `object`
  * search `string`: limit the results to keys matching the given value

#### Output
*Output schema unknown*

### config.post
Request: { "connection.disable_new": "0", "search": "connection.disable_new" }<br><br>


```js
biapi_pro.config.post({}, context)
```

#### Input
* input `object`
  * search `string`: limit the results to keys matching the given value

#### Output
* output `object`

### config.logs.get
<br><br>


```js
biapi_pro.config.logs.get({}, context)
```

#### Input
* input `object`
  * search `string`: limit the results to keys matching the given value
  * type `string`: type of change done on the configuration
  * min_date `string`: minimal date of the change
  * max_date `string`: maximum date of the change
  * expand `string`

#### Output
* output `object`
  * configlogs **required** `array`
    * items [ConfigLog](#configlog)
  * total `number`: total number of results

### connections.get
Get connections without a user


```js
biapi_pro.connections.get({}, context)
```

#### Input
* input `object`
  * expand `string`

#### Output
* output `object`
  * connections **required** `array`
    * items [Connection](#connection)
  * total `number`: total number of results

### connections.id_connection.logs.get
Get logs about connections.<br><br>


```js
biapi_pro.connections.id_connection.logs.get({
  "id_connection": 0
}, context)
```

#### Input
* input `object`
  * id_connection **required** `integer`
  * limit `integer`: limit number of results
  * offset `integer`: offset of first result
  * min_date `string`: minimal date
  * max_date `string`: maximum date
  * state `integer`: state of user
  * period `string`: period to group logs
  * id_user `integer`: ID of a user
  * id_connection_query `integer`: ID of a connection
  * id_connector `integer`: ID of a connector
  * charged `boolean`: consider only logs for charged connectors
  * id_source `integer`: ID of a source
  * expand `string`

#### Output
* output `object`
  * connectionlogs **required** `array`
    * items [ConnectionLog](#connectionlog)
  * total `number`: total number of results

### connections.id_connection.sources.get
Get connection sources


```js
biapi_pro.connections.id_connection.sources.get({
  "id_connection": 0
}, context)
```

#### Input
* input `object`
  * id_connection **required** `integer`
  * expand `string`

#### Output
* output `object`
  * sources **required** `array`
    * items [ConnectionSource](#connectionsource)
  * total `number`: total number of results

### connections.id_connection.sources.id_source.delete
This will make it so the specified source will not be synchronized anymore.<br><br>


```js
biapi_pro.connections.id_connection.sources.id_source.delete({
  "id_connection": 0,
  "id_source": 0
}, context)
```

#### Input
* input `object`
  * id_connection **required** `integer`
  * id_source **required** `integer`
  * expand `string`

#### Output
* output [ConnectionSource](#connectionsource)

### connections.id_connection.sources.id_source.post
This will make it so the specified source will be able to be synchronized.<br><br>


```js
biapi_pro.connections.id_connection.sources.id_source.post({
  "id_connection": 0,
  "id_source": 0
}, context)
```

#### Input
* input `object`
  * id_connection **required** `integer`
  * id_source **required** `integer`
  * expand `string`

#### Output
* output [ConnectionSource](#connectionsource)

### connections.id_connection.sources.id_source.put
This will make it so the specified source will be able to be synchronized.<br><br>


```js
biapi_pro.connections.id_connection.sources.id_source.put({
  "id_connection": 0,
  "id_source": 0
}, context)
```

#### Input
* input `object`
  * id_connection **required** `integer`
  * id_source **required** `integer`
  * expand `string`

#### Output
* output [ConnectionSource](#connectionsource)

### connectors.get
Get list of connectors


```js
biapi_pro.connectors.get({}, context)
```

#### Input
* input `object`
  * expand `string`

#### Output
* output `object`
  * connectors **required** `array`
    * items [Connector](#connector)
  * total `number`: total number of results

### connectors.post
Send a request to add a new connector<br><br>


```js
biapi_pro.connectors.post({
  "login": "",
  "name": "",
  "password": ""
}, context)
```

#### Input
* input `object`
  * expand `string`
  * comment `string`: Optionnal comment
  * email `string`: Email of the user
  * login **required** `string`: Users login
  * name **required** `string`: Name of the bank or provider
  * password **required** `string`: Users password
  * sendmail `boolean`: if set, send an email to user
  * types `string`: Type of connector, eg. banks or providers
  * url `string`: Url of the bank

#### Output
* output [Connector](#connector)

### connectors.put
Enable/disable several connectors


```js
biapi_pro.connectors.put({}, context)
```

#### Input
* input `object`
  * expand `string`
  * hidden `boolean`: to enable  or disable connector (bank or provider)

#### Output
* output [Connector](#connector)

### connectors.status.get
By default, provide all available connectors status.<br><br>The result is a json where the keys are the uuid of the connectors<br><br>


```js
biapi_pro.connectors.status.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### connectors.id_connector.get
Get a connector


```js
biapi_pro.connectors.id_connector.get({
  "id_connector": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * expand `string`

#### Output
* output [Connector](#connector)

### connectors.id_connector.put
<br><br>


```js
biapi_pro.connectors.id_connector.put({
  "id_connector": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * expand `string`
  * auth_mechanism `string`: the authentication mechanism to use for this connector
  * hidden `boolean`: to enable  or disable connector (bank or provider)
  * id_categories `string`: one or several comma separated categories to map to the given connector (or null to map no category)
  * sync_frequency `integer`: Allows you to overload global sync_frequency param

#### Output
* output [Connector](#connector)

### connectors.id_connector.logos.get
This endpoint returns all links to files associated with this connector.<br><br>


```js
biapi_pro.connectors.id_connector.logos.get({
  "id_connector": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * expand `string`

#### Output
* output `object`
  * connectorlogos **required** `array`
    * items [ConnectorLogo](#connectorlogo)
  * total `number`: total number of results

### connectors.id_connector.logos.post
This endpoint creates a connector logo. You can either pass a file to as a parameter to insert and link it with the connector or pass an id_file to link a connector with an existing file. Will fail if the file is already linked with that connector.<br><br>Form params: - id_file (integer): The id of the file to link with that connector. - img (string): Path to the image to link with that connector.<br><br>


```js
biapi_pro.connectors.id_connector.logos.post({
  "id_connector": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * expand `string`

#### Output
* output [ConnectorLogo](#connectorlogo)

### connectors.id_connector.logos.put
This endpoint creates or update a connector logo. This logo is a mapping between a file (/file route) and a connector (/connectors route) or a provider (/providers route).<br><br>Form params: - id_file (integer): The id of the file to link with that connector.<br><br>


```js
biapi_pro.connectors.id_connector.logos.put({
  "id_connector": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * expand `string`

#### Output
* output [ConnectorLogo](#connectorlogo)

### connectors.id_connector.logos.main.get
This endpoint returns all links to files associated with this connector.<br><br>


```js
biapi_pro.connectors.id_connector.logos.main.get({
  "id_connector": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * expand `string`

#### Output
* output `object`
  * connectorlogos **required** `array`
    * items [ConnectorLogo](#connectorlogo)
  * total `number`: total number of results

### connectors.id_connector.logos.thumbnail.get
This endpoint returns all links to files associated with this connector.<br><br>


```js
biapi_pro.connectors.id_connector.logos.thumbnail.get({
  "id_connector": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * expand `string`

#### Output
* output `object`
  * connectorlogos **required** `array`
    * items [ConnectorLogo](#connectorlogo)
  * total `number`: total number of results

### connectors.id_connector.logos.id_logo.delete
Delete a single Logo object.


```js
biapi_pro.connectors.id_connector.logos.id_logo.delete({
  "id_connector": 0,
  "id_logo": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * id_logo **required** `integer`
  * expand `string`

#### Output
* output [ConnectorLogo](#connectorlogo)

### connectors.id_connector.logos.id_logo.put
This endpoint creates or update a connector logo. This logo is a mapping between a file (/file route) and a connector (/connectors route) or a provider (/providers route).<br><br>Form params: - id_file (integer): The id of the file to link with that connector.<br><br>


```js
biapi_pro.connectors.id_connector.logos.id_logo.put({
  "id_connector": 0,
  "id_logo": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * id_logo **required** `integer`
  * expand `string`

#### Output
* output [ConnectorLogo](#connectorlogo)

### connectors.id_connector.sources.get
Get list of connector sources


```js
biapi_pro.connectors.id_connector.sources.get({
  "id_connector": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * expand `string`

#### Output
* output `object`
  * sources **required** `array`
    * items [ConnectorSource](#connectorsource)
  * total `number`: total number of results

### connectors.id_connector.sources.id_connector_source.fields.get
Get fields specific to a domain and a source


```js
biapi_pro.connectors.id_connector.sources.id_connector_source.fields.get({
  "id_connector": 0,
  "id_connector_source": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * id_connector_source **required** `integer`
  * expand `string`

#### Output
* output `object`
  * source_fields **required** `array`
    * items [ConnectorSourceField](#connectorsourcefield)
  * total `number`: total number of results

### connectors.id_connector.sources.id_source.get
Get the connector source


```js
biapi_pro.connectors.id_connector.sources.id_source.get({
  "id_connector": 0,
  "id_source": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * id_source **required** `integer`
  * expand `string`

#### Output
* output [ConnectorSource](#connectorsource)

### connectors.id_connector.sources.id_source.put
Edit the provided connector source


```js
biapi_pro.connectors.id_connector.sources.id_source.put({
  "id_connector": 0,
  "id_source": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * id_source **required** `integer`
  * expand `string`
  * auth_mechanism `string`: the authentication mechanism to use for this connector source
  * disabled `string`: to enable or disable connector source
  * unavailable `string`: to enable or disable the source (can only be edited by BI employees)

#### Output
* output [ConnectorSource](#connectorsource)

### incidents.get
By default, provide all incidents. Results are paginated. Some filters can be set via query parameters.<br><br>


```js
biapi_pro.incidents.get({}, context)
```

#### Input
* input `object`
  * state `string`: comma separated list, filter incidents in the given states.
  * id `integer`: give only the current state of the particular incidents.
  * weboob_id `string`: comma_separated list, filter the incidents of the given weboob_id
  * start_date `string`: filter last_update date >= start_date. YYYY-MM-DD format.
  * end_date `string`: filter last_update date <= start_date. YYYY-MM-DD format.
  * page `integer`: pagination option. Default to 1.
  * size `integer`: pagination option. Default to 30.

#### Output
*Output schema unknown*

### invoicing.get
You can get all the invoicing data or just specific ones by using the available parameters.<br><br>If no parameters are specified, no invoicing data is returned.<br><br>


```js
biapi_pro.invoicing.get({}, context)
```

#### Input
* input `object`
  * min_date `string`: minimal date
  * max_date `string`: maximum date
  * users_synced `string`: the number of user synchronized during the period
  * users_bank `string`: the number of user of the Bank API synchronized during the period
  * users_bill `string`:  the number of user of the Bill API synchronized during the period
  * accounts_synced `string`: the number of accounts synchronized during the period
  * subscriptions_synced `string`: the number of subscriptions synchronized during the period
  * connections_synced `string`: the number of connections synchronized during the period
  * connections_account `string`: the number of Bank API connections synchronized during the period
  * transfers_synced `string`: the number of transfers done during the period
  * all `string`: get all the invoicing data at once
  * detail `string`: get full ids list instead of numbers

#### Output
*Output schema unknown*

### logs.get
Get logs about connections.<br><br>


```js
biapi_pro.logs.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: limit number of results
  * offset `integer`: offset of first result
  * min_date `string`: minimal date
  * max_date `string`: maximum date
  * state `integer`: state of user
  * period `string`: period to group logs
  * id_user `integer`: ID of a user
  * id_connection `integer`: ID of a connection
  * id_connector `integer`: ID of a connector
  * charged `boolean`: consider only logs for charged connectors
  * id_source `integer`: ID of a source
  * expand `string`

#### Output
* output `object`
  * connectionlogs **required** `array`
    * items [ConnectionLog](#connectionlog)
  * total `number`: total number of results

### monitoring.get
get performances stats on this instance


```js
biapi_pro.monitoring.get({}, context)
```

#### Input
* input `object`
  * period `integer`: number on days on which stats on synchronization have to be done per worker (Default: 1)

#### Output
*Output schema unknown*

### providers.get
Get list of connectors


```js
biapi_pro.providers.get({}, context)
```

#### Input
* input `object`
  * expand `string`

#### Output
* output `object`
  * providers **required** `array`
    * items [Connector](#connector)
  * total `number`: total number of results

### providers.id_connector.connections.get
By default, it selects a set of 3 connections.<br><br>


```js
biapi_pro.providers.id_connector.connections.get({
  "id_connector": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * range `integer`: the length of the connection subset
  * expand `string`

#### Output
* output `object`
  * connections **required** `array`
    * items [Connection](#connection)
  * total `number`: total number of results

### providers.id_connector.logos.get
This endpoint returns all links to files associated with this connector.<br><br>


```js
biapi_pro.providers.id_connector.logos.get({
  "id_connector": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * expand `string`

#### Output
* output `object`
  * connectorlogos **required** `array`
    * items [ConnectorLogo](#connectorlogo)
  * total `number`: total number of results

### providers.id_connector.logos.main.get
This endpoint returns all links to files associated with this connector.<br><br>


```js
biapi_pro.providers.id_connector.logos.main.get({
  "id_connector": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * expand `string`

#### Output
* output `object`
  * connectorlogos **required** `array`
    * items [ConnectorLogo](#connectorlogo)
  * total `number`: total number of results

### providers.id_connector.logos.thumbnail.get
This endpoint returns all links to files associated with this connector.<br><br>


```js
biapi_pro.providers.id_connector.logos.thumbnail.get({
  "id_connector": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * expand `string`

#### Output
* output `object`
  * connectorlogos **required** `array`
    * items [ConnectorLogo](#connectorlogo)
  * total `number`: total number of results

### providers.id_connector.sources.get
Get list of connector sources


```js
biapi_pro.providers.id_connector.sources.get({
  "id_connector": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * expand `string`

#### Output
* output `object`
  * sources **required** `array`
    * items [ConnectorSource](#connectorsource)
  * total `number`: total number of results

### providers.id_connector.sources.id_connector_source.fields.get
Get fields specific to a domain and a source


```js
biapi_pro.providers.id_connector.sources.id_connector_source.fields.get({
  "id_connector": 0,
  "id_connector_source": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * id_connector_source **required** `integer`
  * expand `string`

#### Output
* output `object`
  * source_fields **required** `array`
    * items [ConnectorSourceField](#connectorsourcefield)
  * total `number`: total number of results

### providers.id_connector.sources.id_source.get
Get the connector source


```js
biapi_pro.providers.id_connector.sources.id_source.get({
  "id_connector": 0,
  "id_source": 0
}, context)
```

#### Input
* input `object`
  * id_connector **required** `integer`
  * id_source **required** `integer`
  * expand `string`

#### Output
* output [ConnectorSource](#connectorsource)

### providers.id_provider.get
Get a connector


```js
biapi_pro.providers.id_provider.get({
  "id_provider": 0
}, context)
```

#### Input
* input `object`
  * id_provider **required** `integer`
  * expand `string`

#### Output
* output [Connector](#connector)

### test.sync.post
It can be used to test receiving data on your webhooks.<br><br>


```js
biapi_pro.test.sync.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### test.webhooks.post
It can be used to test receiving data on your webhooks.<br><br>


```js
biapi_pro.test.webhooks.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### users.get
Get users


```js
biapi_pro.users.get({}, context)
```

#### Input
* input `object`
  * search `string`: searches a user by mail (if it contains no '@', '@biapi.pro' will be added at the end)
  * expand `string`

#### Output
* output `object`
  * total `number`: total number of results
  * users **required** `array`
    * items [User](#user)

### users.id_user.delete
This endpoint deletes the user.<br><br>


```js
biapi_pro.users.id_user.delete({
  "id_user": ""
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * expand `string`

#### Output
* output [User](#user)

### users.id_user.get
Get a user


```js
biapi_pro.users.id_user.get({
  "id_user": ""
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * expand `string`

#### Output
* output [User](#user)

### users.id_user.account_types.get
Get account types


```js
biapi_pro.users.id_user.account_types.get({
  "id_user": ""
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * expand `string`

#### Output
* output `object`
  * accounttypes **required** `array`
    * items [AccountType](#accounttype)
  * total `number`: total number of results

### users.id_user.account_types.id_account_type.get
Get an account type


```js
biapi_pro.users.id_user.account_types.id_account_type.get({
  "id_user": "",
  "id_account_type": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_account_type **required** `integer`
  * expand `string`

#### Output
* output [AccountType](#accounttype)

### users.id_user.accounts.id_account.categories.get
Ressource to get categories for the user's transactions<br><br>


```js
biapi_pro.users.id_user.accounts.id_account.categories.get({
  "id_user": "",
  "id_account": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_account **required** `integer`

#### Output
*Output schema unknown*

### users.id_user.accounts.id_account.transactionsclusters.get
Get clustered transactions


```js
biapi_pro.users.id_user.accounts.id_account.transactionsclusters.get({
  "id_user": "",
  "id_account": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_account **required** `integer`
  * expand `string`

#### Output
* output `object`
  * total `number`: total number of results
  * transactionsclusters **required** `array`
    * items [TransactionsCluster](#transactionscluster)

### users.id_user.accounts.id_account.transactionsclusters.post
Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>


```js
biapi_pro.users.id_user.accounts.id_account.transactionsclusters.post({
  "id_user": "",
  "id_account": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_account **required** `integer`
  * expand `string`

#### Output
* output [TransactionsCluster](#transactionscluster)

### users.id_user.accounts.id_account.transactionsclusters.id_transactionscluster.delete
Delete a clustered transaction


```js
biapi_pro.users.id_user.accounts.id_account.transactionsclusters.id_transactionscluster.delete({
  "id_user": "",
  "id_account": 0,
  "id_transactionscluster": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_account **required** `integer`
  * id_transactionscluster **required** `integer`
  * expand `string`

#### Output
* output [TransactionsCluster](#transactionscluster)

### users.id_user.accounts.id_account.transactionsclusters.id_transactionscluster.put
Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>


```js
biapi_pro.users.id_user.accounts.id_account.transactionsclusters.id_transactionscluster.put({
  "id_user": "",
  "id_account": 0,
  "id_transactionscluster": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_account **required** `integer`
  * id_transactionscluster **required** `integer`
  * expand `string`

#### Output
* output [TransactionsCluster](#transactionscluster)

### users.id_user.alerts.get
Get alerts


```js
biapi_pro.users.id_user.alerts.get({
  "id_user": ""
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * expand `string`

#### Output
* output `object`
  * alerts **required** `array`
    * items [Alert](#alert)
  * total `number`: total number of results

### users.id_user.categories.get
Ressource to get categories for the user's transactions<br><br>


```js
biapi_pro.users.id_user.categories.get({
  "id_user": ""
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'

#### Output
*Output schema unknown*

### users.id_user.categories.full.get
Ressource to get categories<br><br>


```js
biapi_pro.users.id_user.categories.full.get({
  "id_user": ""
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * expand `string`

#### Output
* output `object`
  * categorys **required** `array`
    * items [Category](#category)
  * total `number`: total number of results

### users.id_user.categories.full.post
Create a new transaction category


```js
biapi_pro.users.id_user.categories.full.post({
  "id_user": ""
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * expand `string`
  * accountant_account `string`: Accountant account number.
  * color `string`: Color of the category.
  * id_parent_category `integer`: ID of the parent category.
  * id_parent_category_in_menu `integer`: ID of the parent category to be displayed.
  * income `boolean`: Is an income category. If null, this is both an income and an expense category.
  * name `string`: Name of the category.
  * refundable `boolean`: This category accepts opposite sign of transactions.

#### Output
* output [Category](#category)

### users.id_user.categories.full.id_full.delete
Delete a user-created transaction category


```js
biapi_pro.users.id_user.categories.full.id_full.delete({
  "id_user": "",
  "id_full": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_full **required** `integer`
  * expand `string`

#### Output
* output [Category](#category)

### users.id_user.categories.full.id_full.put
Modify a user-created category


```js
biapi_pro.users.id_user.categories.full.id_full.put({
  "id_user": "",
  "id_full": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_full **required** `integer`
  * expand `string`
  * accountant_account `string`: Accountant account number.
  * hide `string`: Hide (but not delete) a category. Must be 0, 1 or toggle.

#### Output
* output [Category](#category)

### users.id_user.config.delete
- keys (string): list of coma separated keys to be deleted.<br><br>


```js
biapi_pro.users.id_user.config.delete({
  "id_user": ""
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'

#### Output
*Output schema unknown*

### users.id_user.config.get
<br><br>


```js
biapi_pro.users.id_user.config.get({
  "id_user": ""
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'

#### Output
* output `object`

### users.id_user.config.post
Change configuration of a user. modifications on keys prefixed by 'biapi.' (except callback_url) are ignored


```js
biapi_pro.users.id_user.config.post({
  "id_user": ""
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'

#### Output
*Output schema unknown*

### users.id_user.connections.delete
Delete all connections


```js
biapi_pro.users.id_user.connections.delete({
  "id_user": ""
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * expand `string`

#### Output
* output [Connection](#connection)

### users.id_user.connections.get
Get connections


```js
biapi_pro.users.id_user.connections.get({
  "id_user": ""
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * expand `string`

#### Output
* output `object`
  * connections **required** `array`
    * items [Connection](#connection)
  * total `number`: total number of results

### users.id_user.connections.post
Create a new connection to a given bank or provider. You have to give all needed parameters (use /banks/ID/fields or /providers/ID/fields to get them).<br><br>


```js
biapi_pro.users.id_user.connections.post({
  "id_user": ""
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * source `string`: optional comma-separated list of sources to use for the connection synchronization
  * expand `string`
  * connector_uuid `string`: optional uuid of the connector (replaces id_connector)
  * id_connector `integer`: ID of the connector

#### Output
* output [Connection](#connection)

### users.id_user.connections.id_connection.delete
This endpoint deletes a connection and all related accounts and transactions.<br><br>


```js
biapi_pro.users.id_user.connections.id_connection.delete({
  "id_user": "",
  "id_connection": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * expand `string`

#### Output
* output [Connection](#connection)

### users.id_user.connections.id_connection.post
Give new parameters to change on the configuration of this connection (for example "password").<br><br>It tests connection to website, and if it fails, a 400 response is given with the error code "wrongpass" or "websiteUnavailable".<br><br>You can also supply meta-parameters on connection, like 'active' or 'expire'.<br><br>It's possible to execute the update/synchronization in the background with a query parameter. If done in background this endpoint will respond with data that is not yet updated. To obtain updated data, polling is required as the the data will be filled in the background.<br><br>


```js
biapi_pro.users.id_user.connections.id_connection.post({
  "id_user": "",
  "id_connection": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * background `boolean`: Do the connection update/synchronization in background
  * psu_requested `boolean`: Whether the connection synchronization is asked by the PSU or not (default is true)
  * expand `string`
  * active `boolean`: Set if the connection synchronization is active
  * decoupled `boolean`: Try to update a connection with the decoupled error
  * expire `string`: Set expiration of the connection to this date
  * login `string`: Set login to this new login
  * password `string`: Set password to this new password

#### Output
* output [Connection](#connection)

### users.id_user.connections.id_connection.put
We suggest to pass parameter expand=accounts[transactions] to get all *new* and *updated* transactions.<br><br>


```js
biapi_pro.users.id_user.connections.id_connection.put({
  "id_user": "",
  "id_connection": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * last_update `string`: if supplied, get transactions inserted since this date
  * background `boolean`: do the connection synchronization in background
  * psu_requested `boolean`: Whether the connection synchronization is asked by the PSU or not (default is true)
  * expand `string`

#### Output
* output [Connection](#connection)

### users.id_user.connections.id_connection.accounts.delete
Delete all accounts


```js
biapi_pro.users.id_user.connections.id_connection.accounts.delete({
  "id_user": "",
  "id_connection": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * expand `string`

#### Output
* output [Account](#account)

### users.id_user.connections.id_connection.accounts.get
Get accounts list.


```js
biapi_pro.users.id_user.connections.id_connection.accounts.get({
  "id_user": "",
  "id_connection": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * expand `string`

#### Output
* output `object`
  * accounts **required** `array`
    * items [Account](#account)
  * total `number`: total number of results

### users.id_user.connections.id_connection.accounts.post
This endpoint creates an account related to a connection or not.<br><br>


```js
biapi_pro.users.id_user.connections.id_connection.accounts.post({
  "id_user": "",
  "id_connection": 0,
  "name": ""
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * expand `string`
  * balance `number`: balance of account
  * iban `string`: IBAN of account
  * id_connection_formData `integer`: the connection to attach to the account
  * id_currency `string`: the currency of the account (default: 'EUR')
  * name **required** `string`: name of account
  * number `string`: number of account

#### Output
* output [Account](#account)

### users.id_user.connections.id_connection.accounts.put
Update many accounts at once


```js
biapi_pro.users.id_user.connections.id_connection.accounts.put({
  "id_user": "",
  "id_connection": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * expand `string`

#### Output
* output [Account](#account)

### users.id_user.connections.id_connection.accounts.id_account.delete
It deletes a specific account.<br><br>


```js
biapi_pro.users.id_user.connections.id_connection.accounts.id_account.delete({
  "id_user": "",
  "id_connection": 0,
  "id_account": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_account **required** `integer`
  * expand `string`

#### Output
* output [Account](#account)

### users.id_user.connections.id_connection.accounts.id_account.put
It updates a specific account<br><br>


```js
biapi_pro.users.id_user.connections.id_connection.accounts.id_account.put({
  "id_user": "",
  "id_connection": 0,
  "id_account": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_account **required** `integer`
  * expand `string`
  * balance `number`: Balance of the account
  * bookmarked `boolean`: If the account is bookmarked
  * disabled `boolean`: If the account is disabled (not synchronized)
  * display `boolean`: If the account is displayed
  * iban `string`: IBAN of the account
  * name `string`: Label of the account
  * usage `string`: Usage of the account : PRIV, ORGA or ASSO

#### Output
* output [Account](#account)

### users.id_user.connections.id_connection.accounts.id_account.categories.get
Ressource to get categories for the user's transactions<br><br>


```js
biapi_pro.users.id_user.connections.id_connection.accounts.id_account.categories.get({
  "id_user": "",
  "id_connection": 0,
  "id_account": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_account **required** `integer`

#### Output
*Output schema unknown*

### users.id_user.connections.id_connection.accounts.id_account.delta.get
Get account delta between sums of transactions and difference of account balance for the given period.<br><br>


```js
biapi_pro.users.id_user.connections.id_connection.accounts.id_account.delta.get({
  "id_user": "",
  "id_connection": 0,
  "id_account": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_account **required** `integer`
  * min_date `string`: minimal date
  * max_date `string`: maximum date
  * period `string`: period to group logs

#### Output
*Output schema unknown*

### users.id_user.connections.id_connection.accounts.id_account.logs.get
Get logs of account. By default, it selects logs for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>


```js
biapi_pro.users.id_user.connections.id_connection.accounts.id_account.logs.get({
  "id_user": "",
  "id_connection": 0,
  "id_account": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_account **required** `integer`
  * limit `integer`: limit number of results
  * offset `integer`: offset of first result
  * min_date `string`: minimal (inclusive) date
  * max_date `string`: maximum (inclusive) date
  * expand `string`

#### Output
* output `object`
  * accountlogs **required** `array`
    * items [AccountLog](#accountlog)
  * total `number`: total number of results

### users.id_user.connections.id_connection.accounts.id_account.sources.get
Get account sources


```js
biapi_pro.users.id_user.connections.id_connection.accounts.id_account.sources.get({
  "id_user": "",
  "id_connection": 0,
  "id_account": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_account **required** `integer`
  * expand `string`

#### Output
* output `object`
  * sources **required** `array`
    * items [ConnectionSource](#connectionsource)
  * total `number`: total number of results

### users.id_user.connections.id_connection.accounts.id_account.transactions.delete
Delete transactions


```js
biapi_pro.users.id_user.connections.id_connection.accounts.id_account.transactions.delete({
  "id_user": "",
  "id_connection": 0,
  "id_account": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_account **required** `integer`
  * expand `string`

#### Output
* output [Transaction](#transaction)

### users.id_user.connections.id_connection.accounts.id_account.transactions.get
Get list of transactions.<br><br>By default, it selects transactions for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>


```js
biapi_pro.users.id_user.connections.id_connection.accounts.id_account.transactions.get({
  "id_user": "",
  "id_connection": 0,
  "id_account": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_account **required** `integer`
  * limit `integer`: limit number of results
  * offset `integer`: offset of first result
  * min_date `string`: minimal (inclusive) date
  * max_date `string`: maximum (inclusive) date
  * income `boolean`: filter on income or expenditures
  * deleted `boolean`: display only deleted transactions
  * all `boolean`: display all transactions, including deleted ones
  * last_update `string`: get only transactions updated after the specified datetime
  * wording `string`: filter transactions containing the given string
  * min_value `number`: minimal (inclusive) value
  * max_value `number`: maximum (inclusive) value
  * search `string`: search in labels, dates, values and categories
  * value `string`: "XX|-XX" or "±XX"
  * expand `string`

#### Output
* output `object`
  * total `number`: total number of results
  * transactions **required** `array`
    * items [Transaction](#transaction)

### users.id_user.connections.id_connection.accounts.id_account.transactions.post
Create transactions for the supplied account or the account whose id is given with form parameters. It requires an array of transaction dictionaries.<br><br><br><br>


```js
biapi_pro.users.id_user.connections.id_connection.accounts.id_account.transactions.post({
  "id_user": "",
  "id_connection": 0,
  "id_account": 0,
  "date": "",
  "original_wording": "",
  "value": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_account **required** `integer`
  * expand `string`
  * active `boolean`: 1 if the transaction should be taken into account by pfm services (default: 1)
  * coming `boolean`: 1 if the transaction has already been debited (default: 0)
  * date **required** `string`: date of the transaction
  * date_scraped `string`: date on which the transaction has been found for the first time. YYYY-MM-DD HH:MM:SS(default: now)
  * id_account_formData `integer`: account of the transaction. If not supplied, it has to be given in the route
  * original_wording **required** `string`: label of the transaction
  * rdate `string`: realisation date of the transaction (default: value of date)
  * state `string`: nature of the transaction (default: new)
  * type `string`: type of the transaction (default: unknown)
  * value **required** `integer`: vallue of the transaction

#### Output
* output [Transaction](#transaction)

### users.id_user.connections.id_connection.accounts.id_account.transactions.id_transaction.put
Edit a transaction meta-data


```js
biapi_pro.users.id_user.connections.id_connection.accounts.id_account.transactions.id_transaction.put({
  "id_user": "",
  "id_connection": 0,
  "id_account": 0,
  "id_transaction": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_account **required** `integer`
  * id_transaction **required** `integer`
  * expand `string`
  * active `boolean`: if false, transaction isn't considered in analyzisis endpoints (like /balances)
  * application_date `string`: change application date of the transaction
  * comment `string`: change comment
  * id_category `integer`: ID of the associated category
  * wording `string`: user rewording of the transaction

#### Output
* output [Transaction](#transaction)

### users.id_user.connections.id_connection.accounts.id_account.transactions.id_transaction.informations.delete
Delete all arbitrary key-value pairs of a transaction


```js
biapi_pro.users.id_user.connections.id_connection.accounts.id_account.transactions.id_transaction.informations.delete({
  "id_user": "",
  "id_connection": 0,
  "id_account": 0,
  "id_transaction": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_account **required** `integer`
  * id_transaction **required** `integer`
  * expand `string`

#### Output
* output [TransactionInformation](#transactioninformation)

### users.id_user.connections.id_connection.accounts.id_account.transactions.id_transaction.informations.get
List all arbitrary key-value pairs on a transaction


```js
biapi_pro.users.id_user.connections.id_connection.accounts.id_account.transactions.id_transaction.informations.get({
  "id_user": "",
  "id_connection": 0,
  "id_account": 0,
  "id_transaction": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_account **required** `integer`
  * id_transaction **required** `integer`
  * expand `string`

#### Output
* output `object`
  * total `number`: total number of results
  * transactioninformations **required** `array`
    * items [TransactionInformation](#transactioninformation)

### users.id_user.connections.id_connection.accounts.id_account.transactions.id_transaction.informations.put
Add or edit transaction arbitrary key-value pairs


```js
biapi_pro.users.id_user.connections.id_connection.accounts.id_account.transactions.id_transaction.informations.put({
  "id_user": "",
  "id_connection": 0,
  "id_account": 0,
  "id_transaction": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_account **required** `integer`
  * id_transaction **required** `integer`
  * expand `string`

#### Output
* output [TransactionInformation](#transactioninformation)

### users.id_user.connections.id_connection.accounts.id_account.transactions.id_transaction.informations.id_information.delete
Delete a particular key-value pair on a transaction.


```js
biapi_pro.users.id_user.connections.id_connection.accounts.id_account.transactions.id_transaction.informations.id_information.delete({
  "id_user": "",
  "id_connection": 0,
  "id_account": 0,
  "id_transaction": 0,
  "id_information": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_account **required** `integer`
  * id_transaction **required** `integer`
  * id_information **required** `integer`
  * expand `string`

#### Output
* output [TransactionInformation](#transactioninformation)

### users.id_user.connections.id_connection.accounts.id_account.transactions.id_transaction.informations.id_information.get
Get a particular arbitrary key-value pair on a transaction


```js
biapi_pro.users.id_user.connections.id_connection.accounts.id_account.transactions.id_transaction.informations.id_information.get({
  "id_user": "",
  "id_connection": 0,
  "id_account": 0,
  "id_transaction": 0,
  "id_information": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_account **required** `integer`
  * id_transaction **required** `integer`
  * id_information **required** `integer`
  * expand `string`

#### Output
* output [TransactionInformation](#transactioninformation)

### users.id_user.connections.id_connection.accounts.id_account.transactionsclusters.get
Get clustered transactions


```js
biapi_pro.users.id_user.connections.id_connection.accounts.id_account.transactionsclusters.get({
  "id_user": "",
  "id_connection": 0,
  "id_account": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_account **required** `integer`
  * expand `string`

#### Output
* output `object`
  * total `number`: total number of results
  * transactionsclusters **required** `array`
    * items [TransactionsCluster](#transactionscluster)

### users.id_user.connections.id_connection.accounts.id_account.transactionsclusters.post
Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>


```js
biapi_pro.users.id_user.connections.id_connection.accounts.id_account.transactionsclusters.post({
  "id_user": "",
  "id_connection": 0,
  "id_account": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_account **required** `integer`
  * expand `string`

#### Output
* output [TransactionsCluster](#transactionscluster)

### users.id_user.connections.id_connection.accounts.id_account.transactionsclusters.id_transactionscluster.delete
Delete a clustered transaction


```js
biapi_pro.users.id_user.connections.id_connection.accounts.id_account.transactionsclusters.id_transactionscluster.delete({
  "id_user": "",
  "id_connection": 0,
  "id_account": 0,
  "id_transactionscluster": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_account **required** `integer`
  * id_transactionscluster **required** `integer`
  * expand `string`

#### Output
* output [TransactionsCluster](#transactionscluster)

### users.id_user.connections.id_connection.accounts.id_account.transactionsclusters.id_transactionscluster.put
Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>


```js
biapi_pro.users.id_user.connections.id_connection.accounts.id_account.transactionsclusters.id_transactionscluster.put({
  "id_user": "",
  "id_connection": 0,
  "id_account": 0,
  "id_transactionscluster": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_account **required** `integer`
  * id_transactionscluster **required** `integer`
  * expand `string`

#### Output
* output [TransactionsCluster](#transactionscluster)

### users.id_user.connections.id_connection.informations.get
<br><br>


```js
biapi_pro.users.id_user.connections.id_connection.informations.get({
  "id_user": "",
  "id_connection": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * expand `string`

#### Output
* output `object`
  * connections **required** `array`
    * items [Connection](#connection)
  * total `number`: total number of results

### users.id_user.connections.id_connection.logs.get
Get logs about connections.<br><br>


```js
biapi_pro.users.id_user.connections.id_connection.logs.get({
  "id_user": "",
  "id_connection": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * limit `integer`: limit number of results
  * offset `integer`: offset of first result
  * min_date `string`: minimal date
  * max_date `string`: maximum date
  * state `integer`: state of user
  * period `string`: period to group logs
  * id_user_query `integer`: ID of a user
  * id_connection_query `integer`: ID of a connection
  * id_connector `integer`: ID of a connector
  * charged `boolean`: consider only logs for charged connectors
  * id_source `integer`: ID of a source
  * expand `string`

#### Output
* output `object`
  * connectionlogs **required** `array`
    * items [ConnectionLog](#connectionlog)
  * total `number`: total number of results

### users.id_user.connections.id_connection.sources.get
Get connection sources


```js
biapi_pro.users.id_user.connections.id_connection.sources.get({
  "id_user": "",
  "id_connection": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * expand `string`

#### Output
* output `object`
  * sources **required** `array`
    * items [ConnectionSource](#connectionsource)
  * total `number`: total number of results

### users.id_user.connections.id_connection.sources.id_source.delete
This will make it so the specified source will not be synchronized anymore.<br><br>


```js
biapi_pro.users.id_user.connections.id_connection.sources.id_source.delete({
  "id_user": "",
  "id_connection": 0,
  "id_source": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_source **required** `integer`
  * expand `string`

#### Output
* output [ConnectionSource](#connectionsource)

### users.id_user.connections.id_connection.sources.id_source.post
This will make it so the specified source will be able to be synchronized.<br><br>


```js
biapi_pro.users.id_user.connections.id_connection.sources.id_source.post({
  "id_user": "",
  "id_connection": 0,
  "id_source": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_source **required** `integer`
  * expand `string`

#### Output
* output [ConnectionSource](#connectionsource)

### users.id_user.connections.id_connection.sources.id_source.put
This will make it so the specified source will be able to be synchronized.<br><br>


```js
biapi_pro.users.id_user.connections.id_connection.sources.id_source.put({
  "id_user": "",
  "id_connection": 0,
  "id_source": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_source **required** `integer`
  * expand `string`

#### Output
* output [ConnectionSource](#connectionsource)

### users.id_user.connections.id_connection.transactionsclusters.get
Get clustered transactions


```js
biapi_pro.users.id_user.connections.id_connection.transactionsclusters.get({
  "id_user": "",
  "id_connection": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * expand `string`

#### Output
* output `object`
  * total `number`: total number of results
  * transactionsclusters **required** `array`
    * items [TransactionsCluster](#transactionscluster)

### users.id_user.connections.id_connection.transactionsclusters.post
Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>


```js
biapi_pro.users.id_user.connections.id_connection.transactionsclusters.post({
  "id_user": "",
  "id_connection": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * expand `string`

#### Output
* output [TransactionsCluster](#transactionscluster)

### users.id_user.connections.id_connection.transactionsclusters.id_transactionscluster.delete
Delete a clustered transaction


```js
biapi_pro.users.id_user.connections.id_connection.transactionsclusters.id_transactionscluster.delete({
  "id_user": "",
  "id_connection": 0,
  "id_transactionscluster": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_transactionscluster **required** `integer`
  * expand `string`

#### Output
* output [TransactionsCluster](#transactionscluster)

### users.id_user.connections.id_connection.transactionsclusters.id_transactionscluster.put
Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>


```js
biapi_pro.users.id_user.connections.id_connection.transactionsclusters.id_transactionscluster.put({
  "id_user": "",
  "id_connection": 0,
  "id_transactionscluster": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_connection **required** `integer`
  * id_transactionscluster **required** `integer`
  * expand `string`

#### Output
* output [TransactionsCluster](#transactionscluster)

### users.id_user.forecast.get
Get forecast


```js
biapi_pro.users.id_user.forecast.get({
  "id_user": ""
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'

#### Output
*Output schema unknown*

### users.id_user.logs.get
Get logs about connections.<br><br>


```js
biapi_pro.users.id_user.logs.get({
  "id_user": ""
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * limit `integer`: limit number of results
  * offset `integer`: offset of first result
  * min_date `string`: minimal date
  * max_date `string`: maximum date
  * state `integer`: state of user
  * period `string`: period to group logs
  * id_user_query `integer`: ID of a user
  * id_connection `integer`: ID of a connection
  * id_connector `integer`: ID of a connector
  * charged `boolean`: consider only logs for charged connectors
  * id_source `integer`: ID of a source
  * expand `string`

#### Output
* output `object`
  * connectionlogs **required** `array`
    * items [ConnectionLog](#connectionlog)
  * total `number`: total number of results

### users.id_user.profiles.get
Get profiles


```js
biapi_pro.users.id_user.profiles.get({
  "id_user": ""
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * expand `string`

#### Output
* output `object`
  * profiles **required** `array`
    * items [Profile](#profile)
  * total `number`: total number of results

### users.id_user.profiles.main.get
Get the main profile


```js
biapi_pro.users.id_user.profiles.main.get({
  "id_user": ""
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * expand `string`

#### Output
* output [Profile](#profile)

### users.id_user.profiles.id_profile.get
Get a profile


```js
biapi_pro.users.id_user.profiles.id_profile.get({
  "id_user": "",
  "id_profile": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_profile **required** `integer`
  * expand `string`

#### Output
* output [Profile](#profile)

### users.id_user.token.post
Create an access_token for this user and get it.<br><br>


```js
biapi_pro.users.id_user.token.post({
  "id_user": "",
  "application": ""
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * application **required** `string`: application name

#### Output
* output `object`

### users.id_user.transactionsclusters.get
Get clustered transactions


```js
biapi_pro.users.id_user.transactionsclusters.get({
  "id_user": ""
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * expand `string`

#### Output
* output `object`
  * total `number`: total number of results
  * transactionsclusters **required** `array`
    * items [TransactionsCluster](#transactionscluster)

### users.id_user.transactionsclusters.post
Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>


```js
biapi_pro.users.id_user.transactionsclusters.post({
  "id_user": ""
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * expand `string`

#### Output
* output [TransactionsCluster](#transactionscluster)

### users.id_user.transactionsclusters.id_transactionscluster.delete
Delete a clustered transaction


```js
biapi_pro.users.id_user.transactionsclusters.id_transactionscluster.delete({
  "id_user": "",
  "id_transactionscluster": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_transactionscluster **required** `integer`
  * expand `string`

#### Output
* output [TransactionsCluster](#transactionscluster)

### users.id_user.transactionsclusters.id_transactionscluster.put
Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>


```js
biapi_pro.users.id_user.transactionsclusters.id_transactionscluster.put({
  "id_user": "",
  "id_transactionscluster": 0
}, context)
```

#### Input
* input `object`
  * id_user **required** `string`: Hint: you can use 'me' or 'all'
  * id_transactionscluster **required** `integer`
  * expand `string`

#### Output
* output [TransactionsCluster](#transactionscluster)

### webauth.get
The route encapsulate 2 functionalities: 1. Create or update a connection through oAuth2 session.<br><br>2. Execute a transfer through OAuth2 session.


```js
biapi_pro.webauth.get({}, context)
```

#### Input
* input `object`
  * client_id `integer`: Client Application ID
  * id_transfer `integer`: ID of the transfer
  * redirect_uri `string`: Redirect URI
  * state `string`: Optional state

#### Output
*Output schema unknown*

### webhooks.delete
Updates the deleted field with the date of the deletion<br><br>


```js
biapi_pro.webhooks.delete({}, context)
```

#### Input
* input `object`
  * expand `string`

#### Output
* output [Webhook](#webhook)

### webhooks.get
Get webhooks


```js
biapi_pro.webhooks.get({}, context)
```

#### Input
* input `object`
  * expand `string`

#### Output
* output `object`
  * total `number`: total number of results
  * webhooks **required** `array`
    * items [Webhook](#webhook)

### webhooks.post
Adds a new webhook


```js
biapi_pro.webhooks.post({}, context)
```

#### Input
* input `object`
  * expand `string`
  * event `string`: The webhook event
  * id_auth `string`: The webhook authentication process to use (its ID or its name)
  * id_service `integer`: The service ID to associate with the webhook
  * id_user `integer`: The user ID to associate with the webhook
  * params `string`: The webhook parameters as an object with three keys: type, key and value
  * url `string`: The webhook callback url

#### Output
* output [Webhook](#webhook)

### webhooks.auth.delete
Deletes all webhook authentication types


```js
biapi_pro.webhooks.auth.delete({}, context)
```

#### Input
* input `object`
  * expand `string`

#### Output
* output [AuthProvider](#authprovider)

### webhooks.auth.get
Get webhooks authentication types


```js
biapi_pro.webhooks.auth.get({}, context)
```

#### Input
* input `object`
  * expand `string`

#### Output
* output `object`
  * authproviders **required** `array`
    * items [AuthProvider](#authprovider)
  * total `number`: total number of results

### webhooks.auth.post
Adds a new webhook authentication type


```js
biapi_pro.webhooks.auth.post({
  "name": "",
  "type": 0
}, context)
```

#### Input
* input `object`
  * expand `string`
  * config `string`: The authentication process configuration. A dict contains either the certificate
  * name **required** `string`: The name of the authentication process to differentiate
  * type **required** `integer`: The type of the authentication process (oauth, certificate, token, etc...)

#### Output
* output [AuthProvider](#authprovider)

### webhooks.auth.id_auth.delete
Updates the deleted field with the date of the deletion<br><br>


```js
biapi_pro.webhooks.auth.id_auth.delete({
  "id_auth": 0
}, context)
```

#### Input
* input `object`
  * id_auth **required** `integer`
  * expand `string`

#### Output
* output [AuthProvider](#authprovider)

### webhooks.auth.id_auth.post
Updates the webhook authentication type


```js
biapi_pro.webhooks.auth.id_auth.post({
  "id_auth": 0,
  "name": "",
  "type": 0
}, context)
```

#### Input
* input `object`
  * id_auth **required** `integer`
  * expand `string`
  * config `string`: The authentication process configuration. A dict containing either the certificate
  * name **required** `string`: The name of the authentication process to differentiate
  * type **required** `integer`: The type of the authentication process (oauth, certificate, token, etc...)

#### Output
* output [AuthProvider](#authprovider)

### webhooks.auth.id_auth.put
Updates the webhook authentication type


```js
biapi_pro.webhooks.auth.id_auth.put({
  "id_auth": 0,
  "name": "",
  "type": 0
}, context)
```

#### Input
* input `object`
  * id_auth **required** `integer`
  * expand `string`
  * config `string`: The authentication process configuration. A dict containt either the certificate
  * name **required** `string`: The name of the authentication process to differentiate
  * type **required** `integer`: The type of the authentication process (oauth, certificate, token, etc...)

#### Output
* output [AuthProvider](#authprovider)

### webhooks.id_webhook.delete
Updates the deleted field with the date of the deletion<br><br>


```js
biapi_pro.webhooks.id_webhook.delete({
  "id_webhook": 0
}, context)
```

#### Input
* input `object`
  * id_webhook **required** `integer`
  * expand `string`

#### Output
* output [Webhook](#webhook)

### webhooks.id_webhook.post
Updates a webhook


```js
biapi_pro.webhooks.id_webhook.post({
  "id_webhook": 0
}, context)
```

#### Input
* input `object`
  * id_webhook **required** `integer`
  * expand `string`
  * deleted `string`: a date to delete the webhook or 'null' to enable it
  * event `string`: The webhook event
  * id_auth `integer`: The webhook authentication process to use
  * id_service `integer`: The service ID to associate with the webhook
  * id_user `integer`: The user ID to associate with the webhook
  * url `string`: The webhook callback url

#### Output
* output [Webhook](#webhook)

### webhooks.id_webhook.put
Updates a webhook


```js
biapi_pro.webhooks.id_webhook.put({
  "id_webhook": 0
}, context)
```

#### Input
* input `object`
  * id_webhook **required** `integer`
  * expand `string`
  * deleted `string`: a date to delete the webhook or 'null' to enable it
  * event `string`: The webhook event
  * id_auth `integer`: The webhook authentication process to use
  * id_service `integer`: The service ID to associate with the webhook
  * id_user `integer`: The user ID to associate with the webhook
  * url `string`: The webhook callback url

#### Output
* output [Webhook](#webhook)

### webhooks.id_webhook.add_to_data.delete
delete all entries


```js
biapi_pro.webhooks.id_webhook.add_to_data.delete({
  "id_webhook": 0
}, context)
```

#### Input
* input `object`
  * id_webhook **required** `integer`
  * expand `string`

#### Output
* output [Webhook](#webhook)

### webhooks.id_webhook.add_to_data.get
retrieve the list of the value to add in webhooks when sending the requested webhook


```js
biapi_pro.webhooks.id_webhook.add_to_data.get({
  "id_webhook": 0
}, context)
```

#### Input
* input `object`
  * id_webhook **required** `integer`
  * expand `string`

#### Output
* output `object`
  * total `number`: total number of results
  * webhooks **required** `array`
    * items [Webhook](#webhook)

### webhooks.id_webhook.add_to_data.post
For each parameter, a value will be added in the webhook data. Use the key to set the name of the field. The values that can be added are to be found in the user configuration.<br><br>


```js
biapi_pro.webhooks.id_webhook.add_to_data.post({
  "id_webhook": 0
}, context)
```

#### Input
* input `object`
  * id_webhook **required** `integer`
  * expand `string`

#### Output
* output [Webhook](#webhook)

### webhooks.id_webhook.add_to_data.key.delete
delete the requested entry


```js
biapi_pro.webhooks.id_webhook.add_to_data.key.delete({
  "id_webhook": 0,
  "key": ""
}, context)
```

#### Input
* input `object`
  * id_webhook **required** `integer`
  * key **required** `string`
  * expand `string`

#### Output
* output [Webhook](#webhook)

### webhooks.id_webhook.add_to_data.key.get
retrieve the value to add in the requested webhook for the requested name


```js
biapi_pro.webhooks.id_webhook.add_to_data.key.get({
  "id_webhook": 0,
  "key": ""
}, context)
```

#### Input
* input `object`
  * id_webhook **required** `integer`
  * key **required** `string`
  * expand `string`

#### Output
* output [Webhook](#webhook)

### webhooks.id_webhook.add_to_data.key.post
For each parameter, a value will be added in the webhook data. Use the key to set the name of the field. The values that can be added are to be found in the user configuration.<br><br>


```js
biapi_pro.webhooks.id_webhook.add_to_data.key.post({
  "id_webhook": 0,
  "key": ""
}, context)
```

#### Input
* input `object`
  * id_webhook **required** `integer`
  * key **required** `string`
  * expand `string`

#### Output
* output [Webhook](#webhook)

### webhooks.id_webhook.logs.get
Get logs of the webhooks.<br><br>By default, it selects logs for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>


```js
biapi_pro.webhooks.id_webhook.logs.get({
  "id_webhook": 0
}, context)
```

#### Input
* input `object`
  * id_webhook **required** `integer`
  * id_user `integer`: limit number of results to this user
  * limit `integer`: limit number of results
  * offset `integer`: offset of first result
  * min_date `string`: minimal (inclusive) date
  * max_date `string`: maximum (inclusive) date
  * expand `string`

#### Output
* output `object`
  * total `number`: total number of results
  * webhooklogs **required** `array`
    * items [WebhookLog](#webhooklog)



## Definitions

### Access
* Access `object`
  * email `string`
  * id **required** `integer`
  * id_profile **required** `integer`
  * id_role `integer`
  * id_user `integer`

### Account
* Account `object`
  * balance **required** `number`: Balance of the account
  * bookmarked **required** `integer`: This account has been bookmarked by user
  * coming `number`: Amount of coming operations not yet debited
  * company_name `string`: Name of the company holding the employee savings of the account
  * currency `object`: Account currency
  * deleted `string`: This account is not found on the website anymore
  * disabled `string`: This account has been deleted by user and will not be synchronized anymore
  * display **required** `boolean`: Display this account in accounts list
  * error `string`: If the last update has failed, the error code
  * iban `string`: Account IBAN
  * id **required** `integer`: ID of the account
  * id_connection `integer`: ID of the related connection
  * id_parent `integer`: Id of the parent account
  * id_source `integer`: ID of the related connection source
  * id_type `integer`: ID of the account type
  * id_user `integer`: ID of the related user
  * last_update `string`: Last successful update of the account
  * name `string`: Name of the account
  * number `string`: Account number
  * opening_date `string`: Opening date of the account
  * original_name **required** `string`: Original name of the account on the bank
  * ownership `string`: Relationship between the credentials owner and the account
  * usage `string`: Account usage (if not set by the user, displays the value of original_usage)
  * webid `string`: Account webid

### AccountLog
* AccountLog `object`
  * balance **required** `number`: Balanced recorded
  * coming `number`: Coming debit recorded
  * error `string`: If fail, contains the error code
  * error_message `string`: If fail, error message received from bank or provider
  * id **required** `integer`: ID of the log
  * id_account **required** `integer`: ID of the related account
  * id_connection_log `integer`: ID of the related connection log
  * id_connector `integer`: provider id
  * timestamp **required** `string`: Timestamp of log

### AccountType
* AccountType `object`
  * color `string`: Color of the account type (hexdecimal)
  * display_name **required** `string`: Name to display in singular
  * display_name_p **required** `string`: Name to display in plurial
  * id **required** `integer`: ID of the account type
  * id_parent `integer`: Id of the parent type
  * is_invest **required** `boolean`: Is it an investment account
  * name **required** `string`: Name of the account type
  * product `string`: Product associated with the account
  * weboob_type_id **required** `integer`: Map to the weboob_type_id

### Alert
* Alert `object`
  * id **required** `integer`
  * id_account `integer`: ID of the related account
  * id_investment `integer`: ID of the related investment
  * id_transaction `integer`: ID of the related transaction
  * id_user **required** `integer`: ID of the related user
  * timestamp **required** `string`: Date of the alerts emission
  * type **required** `string`: Type of the alert
  * value **required** `number`: Amount related to the alert

### AuthProvider
* AuthProvider `object`
  * id **required** `integer`
  * name **required** `string`: Name to differentiate the authentication type
  * type **required** `string`: Authentication type to use when pushing the webhook

### Category
* Category `object`
  * color **required** `string`: Color of the category
  * id **required** `integer`: ID of the category
  * id_logo `integer`: ID of the logo
  * id_parent_category **required** `integer`: ID of the parent category. If this is a parent category, it will be equal to its own ID
  * id_parent_category_in_menu **required** `integer`: ID of the parent category to be displayed
  * id_user `integer`: If not null, this category is specific to a user
  * income `boolean`: Is an income category. If null, this is both an income and an expense category
  * name **required** `string`: Name of the category
  * name_displayed `string`: Displayed name, with HTML tags
  * refundable **required** `boolean`: This category accepts opposite sign of transactions

### Certificate
* Certificate `object`
  * created **required** `string`
  * id **required** `integer`
  * id_private_key_file **required** `integer`
  * id_public_key_file **required** `integer`
  * type **required** `string`

### Client
* Client `object`
  * config `string`: customizable config
  * id **required** `integer`
  * id_logo `integer`
  * name **required** `string`
  * private_key `string`
  * pro **required** `boolean`: Should the client display the company manager page.
  * public_key `string`
  * redirect_uris **required** `string`
  * secret **required** `string`

### ConfigLog
* ConfigLog `object`
  * id **required** `integer`
  * key **required** `string`
  * new_value `string`
  * previous_value `string`
  * timestamp **required** `string`: Timestamp of when the configuration key was changed
  * type **required** `string`: Action done on the config: add, update or delete

### Connection
* Connection `object`
  * active **required** `boolean`: This connection is active and will be automatically synced
  * created `string`: Creation date
  * id **required** `integer`: ID of connection
  * id_connector **required** `integer`: ID of the related connector
  * id_user `integer`: ID of the related user
  * last_push `string`: Last successful push
  * last_update `string`: Last successful update
  * next_try `string`: Date of next synchronization

### ConnectionLog
* ConnectionLog `object`
  * error `string`: If fail, contains the error code
  * error_message `string`: If fail, error message received from connector
  * error_uid `string`: MD5 hash of the exception backtrace
  * fields `string`: Fields for connection in additionalInformationNeeded state with background option
  * id **required** `integer`: ID of the log
  * id_connection **required** `integer`: ID of the connection
  * id_connector `integer`: ID of the connector
  * id_source `integer`: ID of the related connection source
  * id_user `integer`: ID of the user
  * login `string`: bcrypt hash of the login
  * nb_accounts `integer`: In case of bank connection, number of accounts
  * next_try `string`: If fail, the date represents the next try to connect
  * session_folder_id `string`: Session folder uid
  * start `string`: Timestamp when the synchronization has started
  * statut `integer`: Status of user (1 = charged user)
  * timestamp **required** `string`: Timestamp of log, when the synchronization has finished
  * worker `string`: Worker used to do synchronization

### ConnectionSource
* ConnectionSource `object`
  * access_expire `string`: Expiration date of the access
  * created **required** `string`: Creation date of the connection source
  * disabled `string`: This source is not used to synchronize the connection
  * expire `string`: Expiration of the connection source. Used to purge the connection in case completion was not finished
  * id **required** `integer`: ID of connection
  * id_connection **required** `integer`: ID of the related connection
  * id_connector_source **required** `integer`: ID of the related connector source
  * last_update `string`: Last successful update
  * name **required** `string`: Name of the connection source
  * next_try `string`: Date of next synchronization
  * state `string`: If the last update has failed, the state code

### Connector
* Connector `object`
  * auth_mechanism `string`: Authentication mechanism to use
  * beta **required** `boolean`: If true, this connector is perhaps unstable :)
  * charged **required** `boolean`: Usage of this connector is charged
  * code `string`: Bank code
  * color `string`: Main color of the bank or provider
  * hidden `boolean`: This connector is hidden from your users
  * id **required** `integer`: ID of the connector
  * months_to_fetch `integer`: How many months of history to fetch
  * name **required** `string`: Name of the bank or provider
  * restricted **required** `boolean`: If true, new connections cannot be added with this connector
  * siret `string`: SIRET code for Bill modules
  * slug `string`
  * sync_frequency `number`: How many days to wait between syncs
  * uuid **required** `string`: Unique connector identifier

### ConnectorCategory
* ConnectorCategory `object`
  * id **required** `integer`: ID of the bank category
  * name **required** `string`: Name of the category

### ConnectorLogo
* ConnectorLogo `object`
  * id **required** `integer`
  * id_connector **required** `integer`: ID of the connector
  * id_file **required** `integer`: Id of the Bank/Provider Logo
  * type `string`: Logo's type

### ConnectorSource
* ConnectorSource `object`
  * auth_mechanism `string`: Authentication mechanism to use
  * disabled `string`: This source is not used to synchronize the connection
  * fallback `string`: Name of the source this fallback is for
  * id **required** `integer`: ID of the connector source
  * id_connector **required** `integer`: ID of the connector
  * id_weboob **required** `string`
  * name **required** `string`: Name of the source
  * priority `integer`: The source priority order for the synchronization

### ConnectorSourceField
* ConnectorSourceField `object`
  * id_connector_source **required** `integer`: ID of the related connector source
  * label **required** `string`: Label to display to user
  * name **required** `string`: Name of the config
  * regex `string`: If set, the value must match this regexp
  * required `boolean`: If true, config has to be set to use this source
  * secret `boolean`: If true, value must be hidden on fronts
  * type `string`: Type of config

### Currency
* Currency `object`
  * crypto `boolean`: It is a crypto currency or not
  * datetime `string`: Time and date of Market Cap (for cryptos)
  * id **required** `string`: ISO 4217 code used as ID
  * marketcap `number`: Market Capitalization in EUR
  * precision `integer`: Numbers of significant digits
  * prefix **required** `boolean`: Amount is prefixed or not by the currency
  * symbol **required** `string`: Symbol representing the currency

### Device
* Device `object`
  * debug **required** `boolean`
  * id **required** `integer`
  * id_token **required** `integer`
  * last_update **required** `string`
  * notification_token **required** `string`
  * type **required** `string`
  * version **required** `string`

### Document
* Document `object`
  * currency `object`: Document currency
  * date `string`
  * duedate `string`
  * has_file_on_website **required** `boolean`: Boolean to set if file is available on website
  * id **required** `integer`
  * id_category `integer`
  * id_file `integer`
  * id_subscription `integer`
  * id_thumbnail `integer`
  * id_type `integer`
  * id_user **required** `integer`
  * income `boolean`
  * issuer `string`
  * last_update `string`: Last successful update of the document
  * name `string`
  * number `string`
  * readonly **required** `boolean`
  * timestamp **required** `string`
  * total_amount `number`
  * untaxed_amount `number`
  * vat `number`
  * webid `string`

### DocumentType
* DocumentType `object`
  * attacheable **required** `boolean`
  * id **required** `integer`
  * name **required** `string`

### Field
* Field `object`
  * auth_mechanisms `string`: Authentication mechanisms this field is used for
  * connector_sources `string`: Sources this field is used for
  * ephemeral `boolean`: This field will not be saved in database
  * id **required** `integer`: ID of the field
  * id_connector **required** `integer`: ID of the related connector
  * label **required** `string`: Label to display to user
  * name **required** `string`: Name of the field
  * regex `string`: If set, the value must match this regexp
  * required **required** `boolean`: If true, field has to be set to synchronize the connection
  * type `string`: Type of field (text, password, list, hidden)
  * value `string`: Default value of the field

### File
* File `object`
  * content_type **required** `string`
  * file_size **required** `integer`
  * filename **required** `string`
  * id **required** `integer`

### Group
* Group `object`
  * color `string`
  * conf `string`
  * email `string`
  * id **required** `integer`
  * id_logo `integer`
  * id_parent_group `integer`
  * name `string`
  * url `string`

### HashTable
* HashTable `object`
  * display **required** `boolean`
  * income **required** `boolean`
  * nature **required** `string`
  * wording **required** `string`

### Investment
* Investment `object`
  * code **required** `string`: Investment code
  * code_type `string`: Code type (ISIN of AMF)
  * deleted `string`: If set, this investment has been removed from the website
  * description `string`: Description of the investment
  * diff `number`: Capital gain
  * diff_percent `number`: Capital gain in percent (between 0 and 1)
  * id **required** `integer`: ID of the investment
  * id_account **required** `integer`: ID of the related account
  * id_security `integer`: ID of the related security
  * label **required** `string`: Label of the investment
  * last_update `string`: Last update of the investment
  * original_currency `object`: Original currency
  * original_diff `number`: Capital gain in the original currency
  * original_unitprice `number`: Current unit value in the original currency
  * original_unitvalue `number`: Average buy price in the original currency
  * original_valuation `number`: Valuation in original currency
  * portfolio_share `number`: Percent of the portfolio
  * prev_diff `number`: Capital gain from previous value
  * prev_vdate `string`: Value date of the previous value (prev_diff)
  * quantity `number`: Quantity
  * source `string`: Source of the ISIN code (website, notFound)
  * unitprice `number`: Average buy price
  * unitvalue `number`: Current unit value
  * valuation `number`: Current valuation
  * vdate `string`: Value date

### InvestmentValue
* InvestmentValue `object`
  * id **required** `integer`: ID of the value
  * id_investment **required** `integer`: ID of the related investment
  * original_currency `object`: Original currency
  * original_unitvalue `number`: Value on this date, in the original currency
  * unitvalue **required** `number`: Value on this date
  * vdate **required** `string`: Date of this value

### Keyword
* Keyword `object`
  * id **required** `integer`
  * id_category **required** `integer`
  * income **required** `boolean`
  * keyword **required** `string`
  * priority **required** `integer`

### LockedUser
* LockedUser `object`
  * id_user **required** `integer`
  * timestamp **required** `string`
  * worker `string`

### MarketOrder
* MarketOrder `object`
  * amount `number`: Total amount of the market order
  * code `string`: ISIN code of the investment associated with the market order
  * created **required** `string`: Insertion date of the market order in bi_market_order
  * date `string`: Creation date of the market order
  * deleted `string`: If set, this market order has been removed from the website
  * execution_date `string`: Execution date of the market order
  * id **required** `integer`: ID of the market order
  * id_account **required** `integer`: ID of the related account
  * label **required** `string`: Label of the investment associated with the market order
  * last_update `string`: Last update of the market order
  * ordervalue `number`: Limit value or trigger value, only relevant if the order type is LIMIT or TRIGGER
  * payment_method `string`: Payment method for the market order (usually 'SRD' or 'Comptant')
  * quantity `number`: Quantity of stock shares in the market order
  * state `string`: Current state of the market order
  * stock_market `string`: Stock market on which the order was executed
  * unitprice `number`: Value of the stock at the moment of the market order
  * unitvalue `number`: Current value of the stock associated with the market order
  * validity_date `string`: Validity date of the market order
  * webid `string`: Weboob ID of the market order

### OidcWhitelist
* OidcWhitelist `object`
  * id **required** `integer`
  * redirect_uri **required** `string`: authorized redirect uri

### Payment
* Payment `object`
  * client_redirect_uri `string`: URL to redirecting to client
  * error_code `string`: In case of error, the error code
  * error_description `string`: Error message
  * id **required** `integer`
  * register_date `string`: Date of payment registration
  * state `string`: State of the payment
  * validate_uri `string`: URL to validate payment

### PaymentLog
* PaymentLog `object`
  * error_code `string`: In case of error, the error code
  * error_description `string`: Error message
  * id **required** `integer`
  * id_file `integer`: ID of the related payment file
  * id_payment `integer`: ID of the related payment
  * state `string`: State of the payment
  * timestamp **required** `string`: Timestamp of the log

### Pocket
* Pocket `object`
  * availability_date `string`: Availability date of the pocket
  * condition **required** `string`: Withdrawal condition of the pocket
  * deleted `string`: If set, this pocket has been removed from the website
  * id **required** `integer`: ID of the pocket
  * id_account **required** `integer`: ID of the related account
  * id_investment **required** `integer`: ID of the related investment
  * label `string`: Label of the pocket
  * last_update `string`: Last update of the pocket
  * quantity `number`: Quantity of stocks
  * value **required** `number`: Value of the pocket

### Profile
* Profile `object`
  * admin **required** `boolean`
  * conf `string`
  * email **required** `string`
  * id **required** `integer`
  * id_user **required** `integer`
  * lang `string`
  * role **required** `string` (values: admin, ser)
  * statut **required** `integer`

### Project
* Project `object`
  * active **required** `boolean`
  * comment **required** `string`
  * id **required** `integer`
  * id_type **required** `integer`
  * id_user **required** `integer`
  * monthly_savings **required** `number`
  * name **required** `string`
  * saved **required** `number`
  * target **required** `number`

### ProjectType
* ProjectType `object`
  * icon_url `string`
  * id **required** `integer`
  * name **required** `string`

### Recipient
* Recipient `object`
  * add_verified `boolean`: Was the recipient adding authorized
  * bank_name `string`: Bank of the recipient
  * category **required** `string`: Category in which the recipient is
  * currency `object`: Currency of the object
  * deleted `string`: The recipient isn't found anymore on the bank
  * enabled_at `string`: It will be possible to do transfers to this recipient at this date
  * error `string`: Error message
  * expire `string`
  * fields `string`: Fields for recipient with additionalInformationNeeded state
  * iban `string`: IBAN of the recipient
  * id **required** `integer`: ID of the recipient
  * id_account **required** `integer`: ID of the related account
  * id_target_account `integer`: ID of the target account, in case of internal recipient
  * label **required** `string`: Label of the recipient
  * last_update **required** `string`: Last time we have fetched this recipient
  * state `string`: State of recipient
  * time_scraped `string`: First time we've seen this recipient
  * webid `string`: Webid of the recipient

### RecipientLog
* RecipientLog `object`
  * error `string`: Error message during recipient addition, if any
  * fields `string`: Fields for recipient in additionalInformationNeeded state with background option
  * id **required** `integer`: ID of the transfer log entry
  * id_file `integer`: ID of the related file
  * id_recipient `integer`: ID of the related recipient
  * request_data `string`: Data stored related to user who has requested the recipient addition
  * step `string`: Step of recipient addition, (add_recipient, asking_field, recipient addition validated, creation, storing_files)
  * timestamp **required** `string`: Timestamp of the log

### Security
* Security `object`
  * code `string`: ISIN code of the security
  * id **required** `integer`: ID of the security
  * id_type `integer`: ID of the security type
  * last_update `string`: Last update of the security
  * name **required** `string`: Name of the security

### Subscription
* Subscription `object`
  * deleted `string`: This subscription is not found on the website anymore
  * disabled `string`: This subscription has been deleted by user and will not be synchronized anymore
  * error `string`: If the last update has failed, the error code
  * id **required** `integer`: ID of subscription
  * id_connection `integer`: ID of related connection
  * id_source `integer`: ID of the related connection source
  * id_user `integer`: ID of related user
  * label **required** `string`: Label of the subscription
  * last_update `string`: Last successful update of the subscription
  * number **required** `string`: Subscription's number
  * renewdate `string`: Next renew date, if any
  * subscriber `string`: Name of the subscriber
  * validity `string`: The subscription is valid until this date, if any

### SubscriptionLog
* SubscriptionLog `object`
  * error `string`: If fail, contains the error code
  * error_message `string`: If fail, error message received from provider
  * id **required** `integer`: ID of the log
  * id_connection_log `integer`: ID of the related connection log
  * id_source `integer`: ID of the related connection source
  * id_subscription **required** `integer`: ID of the related subscription
  * nb_docs `integer`: Number of docs on the subscription
  * timestamp **required** `string`: Timestamp of log

### TermsOfService
* TermsOfService `object`
  * created **required** `string`
  * deleted `string`
  * id **required** `integer`
  * version **required** `string`

### Transaction
* Transaction `object`
  * active **required** `boolean`: If false, PFM services will ignore this transaction
  * application_date `string`: Date considered by PFM services. It is used to change the month of a transaction, for example.
  * bdate `string`: Date used by the bank for the transaction
  * card `string`: Card number associated to the transaction
  * coming **required** `boolean`: If true, this transaction hasn't been yet debited
  * comment `string`: User comment
  * commission `number`: Commission taken on the transaction
  * commission_currency `object`: Commission currency
  * counterparty `string`: Counterparty
  * country `string`: Original country
  * date **required** `string`: Debit date
  * date_scraped **required** `string`: Date when the transaction has been seen
  * deleted `string`: If set, this transaction has been removed from the bank
  * gross_value `number`: Gross value of the transaction
  * id **required** `integer`: ID of the transaction
  * id_account **required** `integer`: ID of the related account
  * id_category `integer`: ID of the related category
  * id_cluster `integer`: If the transaction is part of a cluster
  * last_update `string`: Last update of the transaction
  * nature **required** `string`: Type of transaction
  * original_currency `object`: Original currency
  * original_gross_value `number`: Gross value in the original currency
  * original_value `number`: Value in the original currency
  * original_wording **required** `string`: Full label of the transaction
  * rdate **required** `string`: Realization of the transaction
  * simplified_wording **required** `string`: Simplified label of the transaction
  * state **required** `string`: Internal state of the transaction
  * stemmed_wording **required** `string`: Do not use it
  * value `number`: Value of the transaction
  * vdate `string`: Value date of the transaction
  * webid `string`: Webid of the transaction
  * wording `string`: Label set by the user

### TransactionInformation
* TransactionInformation `object`
  * id **required** `integer`: ID of this transaction information
  * id_transaction **required** `integer`: ID of the related transaction
  * key **required** `string`: Key of the transaction information
  * value `string`: Value of the transaction information

### TransactionsCluster
* TransactionsCluster `object`
  * created_by `string`
  * enabled **required** `boolean`
  * id **required** `integer`
  * id_account **required** `integer`
  * id_category `integer`
  * mean_amount **required** `number`
  * median_increment `integer`
  * next_date `string`
  * wording **required** `string`

### Transfer
* Transfer `object`: This is a representation of a transfer.
  * account_balance `number`: Balance of the account just before the transfer
  * account_iban `string`: IBAN of the debited account
  * amount **required** `number`: Amount of the transfer
  * beneficiary_label `string`: Label of the beneficiary (needed for transfer to other beneficiary type than 'recipient')
  * beneficiary_number `string`: Beneficiary bank identifier value like recipient webid, iban: EX6713281847025300290000062 or phone_number: 06XXXXXX
  * beneficiary_type **required** `string`: Type of beneficiary number, for example: 'recipient' (in bank recipient list), 'iban' or 'phone_number'
  * currency `object`: Currency of the object
  * error `string`: Error message during transfer, if any
  * exec_date **required** `string`: Date when the transfer will be operated by the bank
  * fees `number`: Fees taken by the bank
  * id **required** `integer`: ID of transfer
  * id_account `integer`: ID of the debited account
  * id_recipient `integer`: ID of the recipient
  * id_transaction `integer`: If found, ID of the related transaction
  * id_user `integer`: ID of the related user
  * label `string`: Label of the transfer
  * recipient_iban `string`: IBAN of the recipient in bank recipient list
  * register_date **required** `string`: Date when the transfer has been registered
  * state **required** `string`: State of the transfer (created, scheduled, validating, pending, coming, done, canceled, transactionNotFound, deleted, error, bug)
  * validate_mechanism `string`: Authentication method used to validate transfer (credentials or webauth)
  * webid `string`: WebID of the transfer

### TransferLog
* TransferLog `object`
  * error `string`: Error message during transfer, if any
  * fields `string`: Fields for transfer in additionalInformationNeeded state with background option
  * id **required** `integer`: ID of the transfer log entry
  * id_file `integer`: ID of the related file
  * id_transfer `integer`: ID of the related transfer
  * request_data `string`: Data stored related to user who has requested the transfer
  * state `string`: State of the transfer (created, scheduled, validating, pending, done, canceled, error, bug)
  * timestamp **required** `string`: Timestamp of the log

### User
* User `object`
  * id **required** `integer`
  * platform **required** `string` (values: web, iPad, iPhone, Android, CAstore, requestAccess, sharedAccess, singleAccess, transfer, refresh_token)
  * signin **required** `string`

### UserAlert
* UserAlert `object`: /!\ Careful we use default value from database if present
  * apply `string`
  * balance_max `number`
  * balance_min1 `number`
  * balance_min2 `number`
  * date_range `integer`
  * enabled `boolean`
  * expense_max `number`
  * id **required** `integer`
  * income_max `number`
  * resume_enabled `boolean`
  * resume_frequency **required** `integer`
  * transaction_types `string`
  * type **required** `string`
  * value_type **required** `string`

### Webhook
* Webhook `object`
  * add_to_data `string`: json object to describe data to add
  * created **required** `string`: Date of the webhook creation
  * deleted `string`: Date of the webhook deletion
  * id **required** `integer`: ID of the webhook
  * id_auth `integer`: ID of the authentication process
  * id_event `integer`: ID of the webhook event
  * id_service `integer`: ID of the service
  * id_user `integer`: ID of the emitter user
  * updated **required** `string`: Date of the webhook last update
  * url `string`: URL of the webhook

### WebhookData
* WebhookData `object`
  * created **required** `string`: Timestamp when the hook data was generated
  * data `string`: Data emitted
  * id **required** `integer`: ID of the webhook data
  * id_resource `integer`: a changing ID used to filter webhookdata depending on the event triggered
  * id_service `integer`: ID of the recipient service
  * id_user `integer`: ID of the emitter user
  * id_webhook `integer`: ID of the webhook
  * mimetype `string`: Mimetype of the data
  * success `string`: Timestamp when the hook has been successfully called

### WebhookLog
* WebhookLog `object`
  * id **required** `integer`: ID of the log
  * id_service `integer`: ID of the service
  * id_user `integer`: ID of the user
  * id_webhook_data `integer`: ID of the webhook data
  * next_try `string`: If the log is an error, do not retry to push before this timestamp
  * response_code `integer`: Return code of the reply to the hook
  * response_date `string`: Timestamp of the reply to the hook
  * timestamp **required** `string`: Timestamp when the hook was sent


