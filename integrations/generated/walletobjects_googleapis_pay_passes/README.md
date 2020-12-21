# @datafire/walletobjects_googleapis_pay_passes

Client library for Google Pay Passes API

## Installation and Usage
```bash
npm install --save @datafire/walletobjects_googleapis_pay_passes
```
```js
let walletobjects_googleapis_pay_passes = require('@datafire/walletobjects_googleapis_pay_passes').create({
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

API for issuers to save and manage Google Wallet Objects.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
walletobjects_googleapis_pay_passes.oauthCallback({
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
walletobjects_googleapis_pay_passes.oauthRefresh(null, context)
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

### walletobjects.eventticketclass.list
Returns a list of all event ticket classes for a given issuer ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.eventticketclass.list({}, context)
```

#### Input
* input `object`
  * issuerId `string`: The ID of the issuer authorized to list classes.
  * maxResults `integer`: Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
  * token `string`: Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
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
* output [EventTicketClassListResponse](#eventticketclasslistresponse)

### walletobjects.eventticketclass.insert
Inserts an event ticket class with the given ID and properties.


```js
walletobjects_googleapis_pay_passes.walletobjects.eventticketclass.insert({}, context)
```

#### Input
* input `object`
  * body [EventTicketClass](#eventticketclass)
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
* output [EventTicketClass](#eventticketclass)

### walletobjects.eventticketclass.get
Returns the event ticket class with the given class ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.eventticketclass.get({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
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
* output [EventTicketClass](#eventticketclass)

### walletobjects.eventticketclass.patch
Updates the event ticket class referenced by the given class ID. This method supports patch semantics.


```js
walletobjects_googleapis_pay_passes.walletobjects.eventticketclass.patch({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [EventTicketClass](#eventticketclass)
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
* output [EventTicketClass](#eventticketclass)

### walletobjects.eventticketclass.update
Updates the event ticket class referenced by the given class ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.eventticketclass.update({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [EventTicketClass](#eventticketclass)
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
* output [EventTicketClass](#eventticketclass)

### walletobjects.eventticketclass.addmessage
Adds a message to the event ticket class referenced by the given class ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.eventticketclass.addmessage({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [AddMessageRequest](#addmessagerequest)
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
* output [EventTicketClassAddMessageResponse](#eventticketclassaddmessageresponse)

### walletobjects.eventticketobject.list
Returns a list of all event ticket objects for a given issuer ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.eventticketobject.list({}, context)
```

#### Input
* input `object`
  * classId `string`: The ID of the class whose objects will be listed.
  * maxResults `integer`: Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
  * token `string`: Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
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
* output [EventTicketObjectListResponse](#eventticketobjectlistresponse)

### walletobjects.eventticketobject.insert
Inserts an event ticket object with the given ID and properties.


```js
walletobjects_googleapis_pay_passes.walletobjects.eventticketobject.insert({}, context)
```

#### Input
* input `object`
  * body [EventTicketObject](#eventticketobject)
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
* output [EventTicketObject](#eventticketobject)

### walletobjects.eventticketobject.get
Returns the event ticket object with the given object ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.eventticketobject.get({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
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
* output [EventTicketObject](#eventticketobject)

### walletobjects.eventticketobject.patch
Updates the event ticket object referenced by the given object ID. This method supports patch semantics.


```js
walletobjects_googleapis_pay_passes.walletobjects.eventticketobject.patch({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [EventTicketObject](#eventticketobject)
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
* output [EventTicketObject](#eventticketobject)

### walletobjects.eventticketobject.update
Updates the event ticket object referenced by the given object ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.eventticketobject.update({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [EventTicketObject](#eventticketobject)
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
* output [EventTicketObject](#eventticketobject)

### walletobjects.eventticketobject.addmessage
Adds a message to the event ticket object referenced by the given object ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.eventticketobject.addmessage({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [AddMessageRequest](#addmessagerequest)
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
* output [EventTicketObjectAddMessageResponse](#eventticketobjectaddmessageresponse)

### walletobjects.eventticketobject.modifylinkedofferobjects
Modifies linked offer objects for the event ticket object with the given ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.eventticketobject.modifylinkedofferobjects({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [ModifyLinkedOfferObjectsRequest](#modifylinkedofferobjectsrequest)
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
* output [EventTicketObject](#eventticketobject)

### walletobjects.flightclass.list
Returns a list of all flight classes for a given issuer ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.flightclass.list({}, context)
```

#### Input
* input `object`
  * issuerId `string`: The ID of the issuer authorized to list classes.
  * maxResults `integer`: Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
  * token `string`: Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
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
* output [FlightClassListResponse](#flightclasslistresponse)

### walletobjects.flightclass.insert
Inserts an flight class with the given ID and properties.


```js
walletobjects_googleapis_pay_passes.walletobjects.flightclass.insert({}, context)
```

#### Input
* input `object`
  * body [FlightClass](#flightclass)
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
* output [FlightClass](#flightclass)

### walletobjects.flightclass.get
Returns the flight class with the given class ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.flightclass.get({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
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
* output [FlightClass](#flightclass)

### walletobjects.flightclass.patch
Updates the flight class referenced by the given class ID. This method supports patch semantics.


```js
walletobjects_googleapis_pay_passes.walletobjects.flightclass.patch({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [FlightClass](#flightclass)
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
* output [FlightClass](#flightclass)

### walletobjects.flightclass.update
Updates the flight class referenced by the given class ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.flightclass.update({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [FlightClass](#flightclass)
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
* output [FlightClass](#flightclass)

### walletobjects.flightclass.addmessage
Adds a message to the flight class referenced by the given class ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.flightclass.addmessage({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [AddMessageRequest](#addmessagerequest)
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
* output [FlightClassAddMessageResponse](#flightclassaddmessageresponse)

### walletobjects.flightobject.list
Returns a list of all flight objects for a given issuer ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.flightobject.list({}, context)
```

#### Input
* input `object`
  * classId `string`: The ID of the class whose objects will be listed.
  * maxResults `integer`: Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
  * token `string`: Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
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
* output [FlightObjectListResponse](#flightobjectlistresponse)

### walletobjects.flightobject.insert
Inserts an flight object with the given ID and properties.


```js
walletobjects_googleapis_pay_passes.walletobjects.flightobject.insert({}, context)
```

#### Input
* input `object`
  * body [FlightObject](#flightobject)
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
* output [FlightObject](#flightobject)

### walletobjects.flightobject.get
Returns the flight object with the given object ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.flightobject.get({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
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
* output [FlightObject](#flightobject)

### walletobjects.flightobject.patch
Updates the flight object referenced by the given object ID. This method supports patch semantics.


```js
walletobjects_googleapis_pay_passes.walletobjects.flightobject.patch({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [FlightObject](#flightobject)
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
* output [FlightObject](#flightobject)

### walletobjects.flightobject.update
Updates the flight object referenced by the given object ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.flightobject.update({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [FlightObject](#flightobject)
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
* output [FlightObject](#flightobject)

### walletobjects.flightobject.addmessage
Adds a message to the flight object referenced by the given object ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.flightobject.addmessage({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [AddMessageRequest](#addmessagerequest)
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
* output [FlightObjectAddMessageResponse](#flightobjectaddmessageresponse)

### walletobjects.giftcardclass.list
Returns a list of all gift card classes for a given issuer ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.giftcardclass.list({}, context)
```

#### Input
* input `object`
  * issuerId `string`: The ID of the issuer authorized to list classes.
  * maxResults `integer`: Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
  * token `string`: Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
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
* output [GiftCardClassListResponse](#giftcardclasslistresponse)

### walletobjects.giftcardclass.insert
Inserts an gift card class with the given ID and properties.


```js
walletobjects_googleapis_pay_passes.walletobjects.giftcardclass.insert({}, context)
```

#### Input
* input `object`
  * body [GiftCardClass](#giftcardclass)
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
* output [GiftCardClass](#giftcardclass)

### walletobjects.giftcardclass.get
Returns the gift card class with the given class ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.giftcardclass.get({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
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
* output [GiftCardClass](#giftcardclass)

### walletobjects.giftcardclass.patch
Updates the gift card class referenced by the given class ID. This method supports patch semantics.


```js
walletobjects_googleapis_pay_passes.walletobjects.giftcardclass.patch({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [GiftCardClass](#giftcardclass)
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
* output [GiftCardClass](#giftcardclass)

### walletobjects.giftcardclass.update
Updates the gift card class referenced by the given class ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.giftcardclass.update({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [GiftCardClass](#giftcardclass)
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
* output [GiftCardClass](#giftcardclass)

### walletobjects.giftcardclass.addmessage
Adds a message to the gift card class referenced by the given class ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.giftcardclass.addmessage({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [AddMessageRequest](#addmessagerequest)
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
* output [GiftCardClassAddMessageResponse](#giftcardclassaddmessageresponse)

### walletobjects.giftcardobject.list
Returns a list of all gift card objects for a given issuer ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.giftcardobject.list({}, context)
```

#### Input
* input `object`
  * classId `string`: The ID of the class whose objects will be listed.
  * maxResults `integer`: Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
  * token `string`: Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
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
* output [GiftCardObjectListResponse](#giftcardobjectlistresponse)

### walletobjects.giftcardobject.insert
Inserts an gift card object with the given ID and properties.


```js
walletobjects_googleapis_pay_passes.walletobjects.giftcardobject.insert({}, context)
```

#### Input
* input `object`
  * body [GiftCardObject](#giftcardobject)
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
* output [GiftCardObject](#giftcardobject)

### walletobjects.giftcardobject.get
Returns the gift card object with the given object ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.giftcardobject.get({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
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
* output [GiftCardObject](#giftcardobject)

### walletobjects.giftcardobject.patch
Updates the gift card object referenced by the given object ID. This method supports patch semantics.


```js
walletobjects_googleapis_pay_passes.walletobjects.giftcardobject.patch({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [GiftCardObject](#giftcardobject)
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
* output [GiftCardObject](#giftcardobject)

### walletobjects.giftcardobject.update
Updates the gift card object referenced by the given object ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.giftcardobject.update({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [GiftCardObject](#giftcardobject)
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
* output [GiftCardObject](#giftcardobject)

### walletobjects.giftcardobject.addmessage
Adds a message to the gift card object referenced by the given object ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.giftcardobject.addmessage({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [AddMessageRequest](#addmessagerequest)
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
* output [GiftCardObjectAddMessageResponse](#giftcardobjectaddmessageresponse)

### walletobjects.issuer.list
Returns a list of all issuers shared to the caller.


```js
walletobjects_googleapis_pay_passes.walletobjects.issuer.list({}, context)
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
* output [IssuerListResponse](#issuerlistresponse)

### walletobjects.issuer.insert
Inserts an issuer with the given ID and properties.


```js
walletobjects_googleapis_pay_passes.walletobjects.issuer.insert({}, context)
```

#### Input
* input `object`
  * body [Issuer](#issuer)
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
* output [Issuer](#issuer)

### walletobjects.issuer.get
Returns the issuer with the given issuer ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.issuer.get({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an issuer. This ID must be unique across all issuers. It should only be provided if merchant_id is absent.
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
* output [Issuer](#issuer)

### walletobjects.issuer.patch
Updates the issuer referenced by the given issuer ID. This method supports patch semantics.


```js
walletobjects_googleapis_pay_passes.walletobjects.issuer.patch({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an issuer. This ID must be unique across all issuers. It should only be provided if merchant_id is absent.
  * body [Issuer](#issuer)
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
* output [Issuer](#issuer)

### walletobjects.issuer.update
Updates the issuer referenced by the given issuer ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.issuer.update({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an issuer. This ID must be unique across all issuers. It should only be provided if merchant_id is absent.
  * body [Issuer](#issuer)
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
* output [Issuer](#issuer)

### walletobjects.jwt.insert
Inserts the resources in the JWT.


```js
walletobjects_googleapis_pay_passes.walletobjects.jwt.insert({}, context)
```

#### Input
* input `object`
  * body [JwtResource](#jwtresource)
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
* output [JwtInsertResponse](#jwtinsertresponse)

### walletobjects.loyaltyclass.list
Returns a list of all loyalty classes for a given issuer ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.loyaltyclass.list({}, context)
```

#### Input
* input `object`
  * issuerId `string`: The ID of the issuer authorized to list classes.
  * maxResults `integer`: Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
  * token `string`: Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
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
* output [LoyaltyClassListResponse](#loyaltyclasslistresponse)

### walletobjects.loyaltyclass.insert
Inserts an loyalty class with the given ID and properties.


```js
walletobjects_googleapis_pay_passes.walletobjects.loyaltyclass.insert({}, context)
```

#### Input
* input `object`
  * body [LoyaltyClass](#loyaltyclass)
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
* output [LoyaltyClass](#loyaltyclass)

### walletobjects.loyaltyclass.get
Returns the loyalty class with the given class ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.loyaltyclass.get({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
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
* output [LoyaltyClass](#loyaltyclass)

### walletobjects.loyaltyclass.patch
Updates the loyalty class referenced by the given class ID. This method supports patch semantics.


```js
walletobjects_googleapis_pay_passes.walletobjects.loyaltyclass.patch({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [LoyaltyClass](#loyaltyclass)
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
* output [LoyaltyClass](#loyaltyclass)

### walletobjects.loyaltyclass.update
Updates the loyalty class referenced by the given class ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.loyaltyclass.update({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [LoyaltyClass](#loyaltyclass)
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
* output [LoyaltyClass](#loyaltyclass)

### walletobjects.loyaltyclass.addmessage
Adds a message to the loyalty class referenced by the given class ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.loyaltyclass.addmessage({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [AddMessageRequest](#addmessagerequest)
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
* output [LoyaltyClassAddMessageResponse](#loyaltyclassaddmessageresponse)

### walletobjects.loyaltyobject.list
Returns a list of all loyalty objects for a given issuer ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.loyaltyobject.list({}, context)
```

#### Input
* input `object`
  * classId `string`: The ID of the class whose objects will be listed.
  * maxResults `integer`: Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
  * token `string`: Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
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
* output [LoyaltyObjectListResponse](#loyaltyobjectlistresponse)

### walletobjects.loyaltyobject.insert
Inserts an loyalty object with the given ID and properties.


```js
walletobjects_googleapis_pay_passes.walletobjects.loyaltyobject.insert({}, context)
```

#### Input
* input `object`
  * body [LoyaltyObject](#loyaltyobject)
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
* output [LoyaltyObject](#loyaltyobject)

### walletobjects.loyaltyobject.get
Returns the loyalty object with the given object ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.loyaltyobject.get({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
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
* output [LoyaltyObject](#loyaltyobject)

### walletobjects.loyaltyobject.patch
Updates the loyalty object referenced by the given object ID. This method supports patch semantics.


```js
walletobjects_googleapis_pay_passes.walletobjects.loyaltyobject.patch({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [LoyaltyObject](#loyaltyobject)
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
* output [LoyaltyObject](#loyaltyobject)

### walletobjects.loyaltyobject.update
Updates the loyalty object referenced by the given object ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.loyaltyobject.update({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [LoyaltyObject](#loyaltyobject)
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
* output [LoyaltyObject](#loyaltyobject)

### walletobjects.loyaltyobject.addmessage
Adds a message to the loyalty object referenced by the given object ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.loyaltyobject.addmessage({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [AddMessageRequest](#addmessagerequest)
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
* output [LoyaltyObjectAddMessageResponse](#loyaltyobjectaddmessageresponse)

### walletobjects.loyaltyobject.modifylinkedofferobjects
Modifies linked offer objects for the loyalty object with the given ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.loyaltyobject.modifylinkedofferobjects({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [ModifyLinkedOfferObjectsRequest](#modifylinkedofferobjectsrequest)
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
* output [LoyaltyObject](#loyaltyobject)

### walletobjects.offerclass.list
Returns a list of all offer classes for a given issuer ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.offerclass.list({}, context)
```

#### Input
* input `object`
  * issuerId `string`: The ID of the issuer authorized to list classes.
  * maxResults `integer`: Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
  * token `string`: Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
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
* output [OfferClassListResponse](#offerclasslistresponse)

### walletobjects.offerclass.insert
Inserts an offer class with the given ID and properties.


```js
walletobjects_googleapis_pay_passes.walletobjects.offerclass.insert({}, context)
```

#### Input
* input `object`
  * body [OfferClass](#offerclass)
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
* output [OfferClass](#offerclass)

### walletobjects.offerclass.get
Returns the offer class with the given class ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.offerclass.get({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
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
* output [OfferClass](#offerclass)

### walletobjects.offerclass.patch
Updates the offer class referenced by the given class ID. This method supports patch semantics.


```js
walletobjects_googleapis_pay_passes.walletobjects.offerclass.patch({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [OfferClass](#offerclass)
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
* output [OfferClass](#offerclass)

### walletobjects.offerclass.update
Updates the offer class referenced by the given class ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.offerclass.update({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [OfferClass](#offerclass)
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
* output [OfferClass](#offerclass)

### walletobjects.offerclass.addmessage
Adds a message to the offer class referenced by the given class ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.offerclass.addmessage({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [AddMessageRequest](#addmessagerequest)
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
* output [OfferClassAddMessageResponse](#offerclassaddmessageresponse)

### walletobjects.offerobject.list
Returns a list of all offer objects for a given issuer ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.offerobject.list({}, context)
```

#### Input
* input `object`
  * classId `string`: The ID of the class whose objects will be listed.
  * maxResults `integer`: Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
  * token `string`: Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
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
* output [OfferObjectListResponse](#offerobjectlistresponse)

### walletobjects.offerobject.insert
Inserts an offer object with the given ID and properties.


```js
walletobjects_googleapis_pay_passes.walletobjects.offerobject.insert({}, context)
```

#### Input
* input `object`
  * body [OfferObject](#offerobject)
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
* output [OfferObject](#offerobject)

### walletobjects.offerobject.get
Returns the offer object with the given object ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.offerobject.get({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
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
* output [OfferObject](#offerobject)

### walletobjects.offerobject.patch
Updates the offer object referenced by the given object ID. This method supports patch semantics.


```js
walletobjects_googleapis_pay_passes.walletobjects.offerobject.patch({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [OfferObject](#offerobject)
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
* output [OfferObject](#offerobject)

### walletobjects.offerobject.update
Updates the offer object referenced by the given object ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.offerobject.update({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [OfferObject](#offerobject)
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
* output [OfferObject](#offerobject)

### walletobjects.offerobject.addmessage
Adds a message to the offer object referenced by the given object ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.offerobject.addmessage({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [AddMessageRequest](#addmessagerequest)
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
* output [OfferObjectAddMessageResponse](#offerobjectaddmessageresponse)

### walletobjects.permissions.get
Returns the permissions for the given issuer id.


```js
walletobjects_googleapis_pay_passes.walletobjects.permissions.get({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an issuer. This ID must be unique across all issuers.
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
* output [Permissions](#permissions)

### walletobjects.permissions.update
Updates the permissions for the given issuer.


```js
walletobjects_googleapis_pay_passes.walletobjects.permissions.update({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an issuer. This ID must be unique across all issuers.
  * body [Permissions](#permissions)
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
* output [Permissions](#permissions)

### walletobjects.smarttap.insert
Inserts the smart tap.


```js
walletobjects_googleapis_pay_passes.walletobjects.smarttap.insert({}, context)
```

#### Input
* input `object`
  * body [SmartTap](#smarttap)
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
* output [SmartTap](#smarttap)

### walletobjects.transitclass.list
Returns a list of all transit classes for a given issuer ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.transitclass.list({}, context)
```

#### Input
* input `object`
  * issuerId `string`: The ID of the issuer authorized to list classes.
  * maxResults `integer`: Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
  * token `string`: Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
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
* output [TransitClassListResponse](#transitclasslistresponse)

### walletobjects.transitclass.insert
Inserts a transit class with the given ID and properties.


```js
walletobjects_googleapis_pay_passes.walletobjects.transitclass.insert({}, context)
```

#### Input
* input `object`
  * body [TransitClass](#transitclass)
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
* output [TransitClass](#transitclass)

### walletobjects.transitclass.get
Returns the transit class with the given class ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.transitclass.get({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
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
* output [TransitClass](#transitclass)

### walletobjects.transitclass.patch
Updates the transit class referenced by the given class ID. This method supports patch semantics.


```js
walletobjects_googleapis_pay_passes.walletobjects.transitclass.patch({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [TransitClass](#transitclass)
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
* output [TransitClass](#transitclass)

### walletobjects.transitclass.update
Updates the transit class referenced by the given class ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.transitclass.update({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [TransitClass](#transitclass)
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
* output [TransitClass](#transitclass)

### walletobjects.transitclass.addmessage
Adds a message to the transit class referenced by the given class ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.transitclass.addmessage({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [AddMessageRequest](#addmessagerequest)
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
* output [TransitClassAddMessageResponse](#transitclassaddmessageresponse)

### walletobjects.transitobject.list
Returns a list of all transit objects for a given issuer ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.transitobject.list({}, context)
```

#### Input
* input `object`
  * classId `string`: The ID of the class whose objects will be listed.
  * maxResults `integer`: Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
  * token `string`: Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
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
* output [TransitObjectListResponse](#transitobjectlistresponse)

### walletobjects.transitobject.insert
Inserts an transit object with the given ID and properties.


```js
walletobjects_googleapis_pay_passes.walletobjects.transitobject.insert({}, context)
```

#### Input
* input `object`
  * body [TransitObject](#transitobject)
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
* output [TransitObject](#transitobject)

### walletobjects.transitobject.get
Returns the transit object with the given object ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.transitobject.get({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
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
* output [TransitObject](#transitobject)

### walletobjects.transitobject.patch
Updates the transit object referenced by the given object ID. This method supports patch semantics.


```js
walletobjects_googleapis_pay_passes.walletobjects.transitobject.patch({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [TransitObject](#transitobject)
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
* output [TransitObject](#transitobject)

### walletobjects.transitobject.update
Updates the transit object referenced by the given object ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.transitobject.update({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [TransitObject](#transitobject)
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
* output [TransitObject](#transitobject)

### walletobjects.transitobject.addmessage
Adds a message to the transit object referenced by the given object ID.


```js
walletobjects_googleapis_pay_passes.walletobjects.transitobject.addmessage({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * body [AddMessageRequest](#addmessagerequest)
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
* output [TransitObjectAddMessageResponse](#transitobjectaddmessageresponse)



## Definitions

### AddMessageRequest
* AddMessageRequest `object`: Resource used when the AddMessage endpoints are called.
  * message [Message](#message)

### AirportInfo
* AirportInfo `object`
  * airportIataCode `string`: Three character IATA airport code. This is a required field for `origin` and `destination`. Eg: "SFO"
  * airportNameOverride [LocalizedString](#localizedstring)
  * gate `string`: A name of the gate. Eg: "B59" or "59"
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#airportInfo"`.
  * terminal `string`: Terminal name. Eg: "INTL" or "I"

### AppLinkData
* AppLinkData `object`
  * androidAppLinkInfo [AppLinkDataAppLinkInfo](#applinkdataapplinkinfo)
  * iosAppLinkInfo [AppLinkDataAppLinkInfo](#applinkdataapplinkinfo)
  * webAppLinkInfo [AppLinkDataAppLinkInfo](#applinkdataapplinkinfo)

### AppLinkDataAppLinkInfo
* AppLinkDataAppLinkInfo `object`
  * appLogoImage [Image](#image)
  * appTarget [AppLinkDataAppLinkInfoAppTarget](#applinkdataapplinkinfoapptarget)
  * description [LocalizedString](#localizedstring)
  * title [LocalizedString](#localizedstring)

### AppLinkDataAppLinkInfoAppTarget
* AppLinkDataAppLinkInfoAppTarget `object`
  * targetUri [Uri](#uri)

### AuthenticationKey
* AuthenticationKey `object`
  * id `integer`: Available only to Smart Tap enabled partners. Contact support for additional guidance.
  * publicKeyPem `string`: Available only to Smart Tap enabled partners. Contact support for additional guidance.

### Barcode
* Barcode `object`
  * alternateText `string`: An optional text that will override the default text that shows under the barcode. This field is intended for a human readable equivalent of the barcode value, used when the barcode cannot be scanned.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#barcode"`.
  * renderEncoding `string` (values: RENDER_ENCODING_UNSPECIFIED, UTF_8): The render encoding for the barcode. When specified, barcode is rendered in the given encoding. Otherwise best known encoding is chosen by Google.
  * showCodeText [LocalizedString](#localizedstring)
  * type `string` (values: BARCODE_TYPE_UNSPECIFIED, AZTEC, aztec, CODE_39, code39, CODE_128, code128, CODABAR, codabar, DATA_MATRIX, dataMatrix, EAN_8, ean8, EAN_13, ean13, EAN13, ITF_14, itf14, PDF_417, pdf417, PDF417, QR_CODE, qrCode, qrcode, UPC_A, upcA, TEXT_ONLY, textOnly): The type of barcode.
  * value `string`: The value encoded in the barcode.

### BarcodeSectionDetail
* BarcodeSectionDetail `object`
  * fieldSelector [FieldSelector](#fieldselector)

### BoardingAndSeatingInfo
* BoardingAndSeatingInfo `object`
  * boardingDoor `string` (values: BOARDING_DOOR_UNSPECIFIED, FRONT, front, BACK, back): Set this field only if this flight boards through more than one door or bridge and you want to explicitly print the door location on the boarding pass. Most airlines route their passengers to the right door or bridge by refering to doors/bridges by the `seatClass`. In those cases `boardingDoor` should not be set.
  * boardingGroup `string`: The value of boarding group (or zone) this passenger shall board with. eg: "B" The label for this value will be determined by the `boardingPolicy` field in the `flightClass` referenced by this object.
  * boardingPosition `string`: The value of boarding position. eg: "76"
  * boardingPrivilegeImage [Image](#image)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#boardingAndSeatingInfo"`.
  * seatAssignment [LocalizedString](#localizedstring)
  * seatClass `string`: The value of the seat class. eg: "Economy" or "Economy Plus"
  * seatNumber `string`: The value of passenger seat. If there is no specific identifier, use `seatAssignment` instead. eg: "25A"
  * sequenceNumber `string`: The sequence number on the boarding pass. This usually matches the sequence in which the passengers checked in. Airline might use the number for manual boarding and bag tags. eg: "49"

### BoardingAndSeatingPolicy
* BoardingAndSeatingPolicy `object`
  * boardingPolicy `string` (values: BOARDING_POLICY_UNSPECIFIED, ZONE_BASED, zoneBased, GROUP_BASED, groupBased, BOARDING_POLICY_OTHER, boardingPolicyOther): Indicates the policy the airline uses for boarding. If unset, Google will default to `zoneBased`.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#boardingAndSeatingPolicy"`.
  * seatClassPolicy `string` (values: SEAT_CLASS_POLICY_UNSPECIFIED, CABIN_BASED, cabinBased, CLASS_BASED, classBased, TIER_BASED, tierBased, SEAT_CLASS_POLICY_OTHER, seatClassPolicyOther): Seating policy which dictates how we display the seat class. If unset, Google will default to `cabinBased`.

### CallbackOptions
* CallbackOptions `object`
  * updateRequestUrl `string`: URL for the merchant endpoint that would be called to request updates. The URL should be hosted on HTTPS and robots.txt should allow the URL path to be accessible by UserAgent:Google-Valuables. Please contact Google support before using this field.
  * url `string`: The HTTPS url configured by the merchant. The URL should be hosted on HTTPS and robots.txt should allow the URL path to be accessible by UserAgent:Google-Valuables.

### CardBarcodeSectionDetails
* CardBarcodeSectionDetails `object`
  * firstBottomDetail [BarcodeSectionDetail](#barcodesectiondetail)
  * firstTopDetail [BarcodeSectionDetail](#barcodesectiondetail)
  * secondTopDetail [BarcodeSectionDetail](#barcodesectiondetail)

### CardRowOneItem
* CardRowOneItem `object`
  * item [TemplateItem](#templateitem)

### CardRowTemplateInfo
* CardRowTemplateInfo `object`
  * oneItem [CardRowOneItem](#cardrowoneitem)
  * threeItems [CardRowThreeItems](#cardrowthreeitems)
  * twoItems [CardRowTwoItems](#cardrowtwoitems)

### CardRowThreeItems
* CardRowThreeItems `object`
  * endItem [TemplateItem](#templateitem)
  * middleItem [TemplateItem](#templateitem)
  * startItem [TemplateItem](#templateitem)

### CardRowTwoItems
* CardRowTwoItems `object`
  * endItem [TemplateItem](#templateitem)
  * startItem [TemplateItem](#templateitem)

### CardTemplateOverride
* CardTemplateOverride `object`
  * cardRowTemplateInfos `array`: Template information for rows in the card view. At most two rows are allowed to be specified.
    * items [CardRowTemplateInfo](#cardrowtemplateinfo)

### ClassTemplateInfo
* ClassTemplateInfo `object`
  * cardBarcodeSectionDetails [CardBarcodeSectionDetails](#cardbarcodesectiondetails)
  * cardTemplateOverride [CardTemplateOverride](#cardtemplateoverride)
  * detailsTemplateOverride [DetailsTemplateOverride](#detailstemplateoverride)
  * listTemplateOverride [ListTemplateOverride](#listtemplateoverride)

### DateTime
* DateTime `object`
  * date `string`: An ISO 8601 extended format date/time. Offset may or may not be required (refer to the parent field's documentation). Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the date/time is intended for a physical location in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. Providing an offset makes this an absolute instant in time around the world. The date/time will be adjusted based on the user's time zone. For example, a time of `2018-06-19T18:30:00-04:00` will be 18:30:00 for a user in New York and 15:30:00 for a user in Los Angeles. Omitting the offset makes this a local date/time, representing several instants in time around the world. The date/time will always be in the user's current time zone. For example, a time of `2018-06-19T18:30:00` will be 18:30:00 for a user in New York and also 18:30:00 for a user in Los Angeles. This is useful when the same local date/time should apply to many physical locations across several time zones.

### DetailsItemInfo
* DetailsItemInfo `object`
  * item [TemplateItem](#templateitem)

### DetailsTemplateOverride
* DetailsTemplateOverride `object`
  * detailsItemInfos `array`: Information for the "nth" item displayed in the details list.
    * items [DetailsItemInfo](#detailsiteminfo)

### DiscoverableProgram
* DiscoverableProgram `object`: Information about how a class may be discovered and instantiated from within the Android Pay app. This is done by searching for a loyalty or gift card program and scanning or manually entering.
  * merchantSigninInfo [DiscoverableProgramMerchantSigninInfo](#discoverableprogrammerchantsignininfo)
  * merchantSignupInfo [DiscoverableProgramMerchantSignupInfo](#discoverableprogrammerchantsignupinfo)
  * state `string` (values: STATE_UNSPECIFIED, TRUSTED_TESTERS, trustedTesters, LIVE, live, DISABLED, disabled): Visibility state of the discoverable program.

### DiscoverableProgramMerchantSigninInfo
* DiscoverableProgramMerchantSigninInfo `object`: Information about the merchant hosted signin flow for a program.
  * signinWebsite [Uri](#uri)

### DiscoverableProgramMerchantSignupInfo
* DiscoverableProgramMerchantSignupInfo `object`: Information about the merchant hosted signup flow for a program.
  * signupSharedDatas `array`:  User data that is sent in a POST request to the signup website URL. This information is encoded and then shared so that the merchant's website can prefill fields used to enroll the user for the discoverable program.
    * items `string` (values: SHARED_DATA_TYPE_UNSPECIFIED, FIRST_NAME, LAST_NAME, STREET_ADDRESS, ADDRESS_LINE_1, ADDRESS_LINE_2, ADDRESS_LINE_3, CITY, STATE, ZIPCODE, COUNTRY, EMAIL, PHONE)
  * signupWebsite [Uri](#uri)

### EventDateTime
* EventDateTime `object`
  * customDoorsOpenLabel [LocalizedString](#localizedstring)
  * doorsOpen `string`: The date/time when the doors open at the venue. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the venue is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available.
  * doorsOpenLabel `string` (values: DOORS_OPEN_LABEL_UNSPECIFIED, DOORS_OPEN, doorsOpen, GATES_OPEN, gatesOpen): The label to use for the doors open value (`doorsOpen`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `doorsOpenLabel` and `customDoorsOpenLabel` may not be set. If neither is set, the label will default to "Doors Open", localized. If the doors open field is unset, this label will not be used.
  * end `string`: The date/time when the event ends. If the event spans multiple days, it should be the end date/time on the last day. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the venue is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventDateTime"`.
  * start `string`: The date/time when the event starts. If the event spans multiple days, it should be the start date/time on the first day. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the venue is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available.

### EventReservationInfo
* EventReservationInfo `object`
  * confirmationCode `string`: The confirmation code of the event reservation. This may also take the form of an "order number", "confirmation number", "reservation number", or other equivalent.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventReservationInfo"`.

### EventSeat
* EventSeat `object`
  * gate [LocalizedString](#localizedstring)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventSeat"`.
  * row [LocalizedString](#localizedstring)
  * seat [LocalizedString](#localizedstring)
  * section [LocalizedString](#localizedstring)

### EventTicketClass
* EventTicketClass `object`
  * allowMultipleUsersPerObject `boolean`: Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead.
  * callbackOptions [CallbackOptions](#callbackoptions)
  * classTemplateInfo [ClassTemplateInfo](#classtemplateinfo)
  * confirmationCodeLabel `string` (values: CONFIRMATION_CODE_LABEL_UNSPECIFIED, CONFIRMATION_CODE, confirmationCode, CONFIRMATION_NUMBER, confirmationNumber, ORDER_NUMBER, orderNumber, RESERVATION_NUMBER, reservationNumber): The label to use for the confirmation code value (`eventTicketObject.reservationInfo.confirmationCode`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `confirmationCodeLabel` and `customConfirmationCodeLabel` may not be set. If neither is set, the label will default to "Confirmation Code", localized. If the confirmation code field is unset, this label will not be used.
  * countryCode `string`: Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.
  * customConfirmationCodeLabel [LocalizedString](#localizedstring)
  * customGateLabel [LocalizedString](#localizedstring)
  * customRowLabel [LocalizedString](#localizedstring)
  * customSeatLabel [LocalizedString](#localizedstring)
  * customSectionLabel [LocalizedString](#localizedstring)
  * dateTime [EventDateTime](#eventdatetime)
  * enableSmartTap `boolean`: Available only to Smart Tap enabled partners. Contact support for additional guidance.
  * eventId `string`: The ID of the event. This ID should be unique for every event in an account. It is used to group tickets together if the user has saved multiple tickets for the same event. It can be at most 64 characters. If provided, the grouping will be stable. Be wary of unintentional collision to avoid grouping tickets that should not be grouped. If you use only one class per event, you can simply set this to the `classId` (with or without the issuer ID portion). If not provided, the platform will attempt to use other data to group tickets (potentially unstable).
  * eventName [LocalizedString](#localizedstring)
  * finePrint [LocalizedString](#localizedstring)
  * gateLabel `string` (values: GATE_LABEL_UNSPECIFIED, GATE, gate, DOOR, door, ENTRANCE, entrance): The label to use for the gate value (`eventTicketObject.seatInfo.gate`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `gateLabel` and `customGateLabel` may not be set. If neither is set, the label will default to "Gate", localized. If the gate field is unset, this label will not be used.
  * heroImage [Image](#image)
  * hexBackgroundColor `string`: The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.
  * homepageUri [Uri](#uri)
  * id `string`: Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * imageModulesData `array`: Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
    * items [ImageModuleData](#imagemoduledata)
  * infoModuleData [InfoModuleData](#infomoduledata)
  * issuerName `string`: Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventTicketClass"`.
  * linksModuleData [LinksModuleData](#linksmoduledata)
  * localizedIssuerName [LocalizedString](#localizedstring)
  * locations `array`
    * items [LatLongPoint](#latlongpoint)
  * logo [Image](#image)
  * messages `array`: An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
    * items [Message](#message)
  * multipleDevicesAndHoldersAllowedStatus `string` (values: STATUS_UNSPECIFIED, MULTIPLE_HOLDERS, multipleHolders, ONE_USER_ALL_DEVICES, oneUserAllDevices, ONE_USER_ONE_DEVICE, oneUserOneDevice): Identifies whether multiple users and devices will save the same object referencing this class.
  * redemptionIssuers `array`: Available only to Smart Tap enabled partners. Contact support for additional guidance.
    * items `string`
  * review [Review](#review)
  * reviewStatus `string` (values: REVIEW_STATUS_UNSPECIFIED, UNDER_REVIEW, underReview, APPROVED, approved, REJECTED, rejected, DRAFT, draft): Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`.
  * rowLabel `string` (values: ROW_LABEL_UNSPECIFIED, ROW, row): The label to use for the row value (`eventTicketObject.seatInfo.row`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `rowLabel` and `customRowLabel` may not be set. If neither is set, the label will default to "Row", localized. If the row field is unset, this label will not be used.
  * seatLabel `string` (values: SEAT_LABEL_UNSPECIFIED, SEAT, seat): The label to use for the seat value (`eventTicketObject.seatInfo.seat`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `seatLabel` and `customSeatLabel` may not be set. If neither is set, the label will default to "Seat", localized. If the seat field is unset, this label will not be used.
  * sectionLabel `string` (values: SECTION_LABEL_UNSPECIFIED, SECTION, section, THEATER, theater): The label to use for the section value (`eventTicketObject.seatInfo.section`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `sectionLabel` and `customSectionLabel` may not be set. If neither is set, the label will default to "Section", localized. If the section field is unset, this label will not be used.
  * securityAnimation [SecurityAnimation](#securityanimation)
  * textModulesData `array`: Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
    * items [TextModuleData](#textmoduledata)
  * venue [EventVenue](#eventvenue)
  * version `string`: Deprecated
  * wordMark [Image](#image)

### EventTicketClassAddMessageResponse
* EventTicketClassAddMessageResponse `object`
  * resource [EventTicketClass](#eventticketclass)

### EventTicketClassListResponse
* EventTicketClassListResponse `object`
  * pagination [Pagination](#pagination)
  * resources `array`: Resources corresponding to the list request.
    * items [EventTicketClass](#eventticketclass)

### EventTicketObject
* EventTicketObject `object`
  * appLinkData [AppLinkData](#applinkdata)
  * barcode [Barcode](#barcode)
  * classId `string`: Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you.
  * classReference [EventTicketClass](#eventticketclass)
  * disableExpirationNotification `boolean`: Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers.
  * faceValue [Money](#money)
  * groupingInfo [GroupingInfo](#groupinginfo)
  * hasLinkedDevice `boolean`: Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information.
  * hasUsers `boolean`: Indicates if the object has users. This field is set by the platform.
  * heroImage [Image](#image)
  * hexBackgroundColor `string`: The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.
  * id `string`: Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * imageModulesData `array`: Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
    * items [ImageModuleData](#imagemoduledata)
  * infoModuleData [InfoModuleData](#infomoduledata)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventTicketObject"`.
  * linkedOfferIds `array`: A list of offer objects linked to this event ticket. The offer objects must already exist. Offer object IDs should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you.
    * items `string`
  * linksModuleData [LinksModuleData](#linksmoduledata)
  * locations `array`: The list of locations where the object can be used. The platform uses this information to trigger geolocated notifications to users. Note that locations in the object override locations in the class which override locations in the Google Places ID.
    * items [LatLongPoint](#latlongpoint)
  * messages `array`: An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
    * items [Message](#message)
  * reservationInfo [EventReservationInfo](#eventreservationinfo)
  * seatInfo [EventSeat](#eventseat)
  * smartTapRedemptionValue `string`: Available only to Smart Tap enabled partners. Contact support for additional guidance.
  * state `string` (values: STATE_UNSPECIFIED, ACTIVE, active, COMPLETED, completed, EXPIRED, expired, INACTIVE, inactive): Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section.
  * textModulesData `array`: Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
    * items [TextModuleData](#textmoduledata)
  * ticketHolderName `string`: Name of the ticket holder, if the ticket is assigned to a person. E.g. "John Doe" or "Jane Doe".
  * ticketNumber `string`: The number of the ticket. This can be a unique identifier across all tickets in an issuer's system, all tickets for the event (e.g. XYZ1234512345), or all tickets in the order (1, 2, 3, etc.).
  * ticketType [LocalizedString](#localizedstring)
  * validTimeInterval [TimeInterval](#timeinterval)
  * version `string`: Deprecated

### EventTicketObjectAddMessageResponse
* EventTicketObjectAddMessageResponse `object`
  * resource [EventTicketObject](#eventticketobject)

### EventTicketObjectListResponse
* EventTicketObjectListResponse `object`
  * pagination [Pagination](#pagination)
  * resources `array`: Resources corresponding to the list request.
    * items [EventTicketObject](#eventticketobject)

### EventVenue
* EventVenue `object`
  * address [LocalizedString](#localizedstring)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventVenue"`.
  * name [LocalizedString](#localizedstring)

### FieldReference
* FieldReference `object`
  * dateFormat `string` (values: DATE_FORMAT_UNSPECIFIED, DATE_TIME, dateTime, DATE_ONLY, dateOnly, TIME_ONLY, timeOnly, DATE_TIME_YEAR, dateTimeYear, DATE_YEAR, dateYear): Only valid if the `fieldPath` references a date field. Chooses how the date field will be formatted and displayed in the UI.
  * fieldPath `string`: Path to the field being referenced, prefixed with "object" or "class" and separated with dots. For example, it may be the string "object.purchaseDetails.purchasePrice".

### FieldSelector
* FieldSelector `object`
  * fields `array`: If more than one reference is supplied, then the first one that references a non-empty field will be displayed.
    * items [FieldReference](#fieldreference)

### FirstRowOption
* FirstRowOption `object`
  * fieldOption [FieldSelector](#fieldselector)
  * transitOption `string` (values: TRANSIT_OPTION_UNSPECIFIED, ORIGIN_AND_DESTINATION_NAMES, originAndDestinationNames, ORIGIN_AND_DESTINATION_CODES, originAndDestinationCodes, ORIGIN_NAME, originName)

### FlightCarrier
* FlightCarrier `object`
  * airlineAllianceLogo [Image](#image)
  * airlineLogo [Image](#image)
  * airlineName [LocalizedString](#localizedstring)
  * carrierIataCode `string`: Two character IATA airline code of the marketing carrier (as opposed to operating carrier). Exactly one of this or `carrierIcaoCode` needs to be provided for `carrier` and `operatingCarrier`. eg: "LX" for Swiss Air
  * carrierIcaoCode `string`: Three character ICAO airline code of the marketing carrier (as opposed to operating carrier). Exactly one of this or `carrierIataCode` needs to be provided for `carrier` and `operatingCarrier`. eg: "EZY" for Easy Jet
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightCarrier"`.

### FlightClass
* FlightClass `object`
  * allowMultipleUsersPerObject `boolean`: Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead.
  * boardingAndSeatingPolicy [BoardingAndSeatingPolicy](#boardingandseatingpolicy)
  * callbackOptions [CallbackOptions](#callbackoptions)
  * classTemplateInfo [ClassTemplateInfo](#classtemplateinfo)
  * countryCode `string`: Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.
  * destination [AirportInfo](#airportinfo)
  * enableSmartTap `boolean`: Available only to Smart Tap enabled partners. Contact support for additional guidance.
  * flightHeader [FlightHeader](#flightheader)
  * flightStatus `string` (values: FLIGHT_STATUS_UNSPECIFIED, SCHEDULED, scheduled, ACTIVE, active, LANDED, landed, CANCELLED, cancelled, REDIRECTED, redirected, DIVERTED, diverted): Status of this flight. If unset, Google will compute status based on data from other sources, such as FlightStats, etc. Note: Google-computed status will not be returned in API responses.
  * heroImage [Image](#image)
  * hexBackgroundColor `string`: The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.
  * homepageUri [Uri](#uri)
  * id `string`: Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * imageModulesData `array`: Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
    * items [ImageModuleData](#imagemoduledata)
  * infoModuleData [InfoModuleData](#infomoduledata)
  * issuerName `string`: Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightClass"`.
  * languageOverride `string`: If this field is present, boarding passes served to a user's device will always be in this language. Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT".
  * linksModuleData [LinksModuleData](#linksmoduledata)
  * localBoardingDateTime `string`: The boarding time as it would be printed on the boarding pass. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. If this is not set, Google will set it based on data from other sources.
  * localEstimatedOrActualArrivalDateTime `string`: The estimated time the aircraft plans to reach the destination gate (not the runway) or the actual time it reached the gate. This field should be set if at least one of the below is true: - It differs from the scheduled time. Google will use it to calculate the delay. - The aircraft already arrived at the gate. Google will use it to inform the user that the flight has arrived at the gate. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on arrival airport. If this is not set, Google will set it based on data from other sources.
  * localEstimatedOrActualDepartureDateTime `string`: The estimated time the aircraft plans to pull from the gate or the actual time the aircraft already pulled from the gate. Note: This is not the runway time. This field should be set if at least one of the below is true: - It differs from the scheduled time. Google will use it to calculate the delay. - The aircraft already pulled from the gate. Google will use it to inform the user when the flight actually departed. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. If this is not set, Google will set it based on data from other sources.
  * localGateClosingDateTime `string`: The gate closing time as it would be printed on the boarding pass. Do not set this field if you do not want to print it in the boarding pass. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport.
  * localScheduledArrivalDateTime `string`: The scheduled time the aircraft plans to reach the destination gate (not the runway). Note: This field should not change too close to the flight time. For updates to departure times (delays, etc), please set `localEstimatedOrActualArrivalDateTime`. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on arrival airport. If this is not set, Google will set it based on data from other sources.
  * localScheduledDepartureDateTime `string`: Required. The scheduled date and time when the aircraft is expected to depart the gate (not the runway) Note: This field should not change too close to the departure time. For updates to departure times (delays, etc), please set `localEstimatedOrActualDepartureDateTime`. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport.
  * localizedIssuerName [LocalizedString](#localizedstring)
  * locations `array`
    * items [LatLongPoint](#latlongpoint)
  * messages `array`: An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
    * items [Message](#message)
  * multipleDevicesAndHoldersAllowedStatus `string` (values: STATUS_UNSPECIFIED, MULTIPLE_HOLDERS, multipleHolders, ONE_USER_ALL_DEVICES, oneUserAllDevices, ONE_USER_ONE_DEVICE, oneUserOneDevice): Identifies whether multiple users and devices will save the same object referencing this class.
  * origin [AirportInfo](#airportinfo)
  * redemptionIssuers `array`: Available only to Smart Tap enabled partners. Contact support for additional guidance.
    * items `string`
  * review [Review](#review)
  * reviewStatus `string` (values: REVIEW_STATUS_UNSPECIFIED, UNDER_REVIEW, underReview, APPROVED, approved, REJECTED, rejected, DRAFT, draft): Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`.
  * textModulesData `array`: Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
    * items [TextModuleData](#textmoduledata)
  * version `string`: Deprecated
  * wordMark [Image](#image)

### FlightClassAddMessageResponse
* FlightClassAddMessageResponse `object`
  * resource [FlightClass](#flightclass)

### FlightClassListResponse
* FlightClassListResponse `object`
  * pagination [Pagination](#pagination)
  * resources `array`: Resources corresponding to the list request.
    * items [FlightClass](#flightclass)

### FlightHeader
* FlightHeader `object`
  * carrier [FlightCarrier](#flightcarrier)
  * flightNumber `string`: The flight number without IATA carrier code. This field should contain only digits. This is a required property of `flightHeader`. eg: "123"
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightHeader"`.
  * operatingCarrier [FlightCarrier](#flightcarrier)
  * operatingFlightNumber `string`: The flight number used by the operating carrier without IATA carrier code. This field should contain only digits. eg: "234"

### FlightObject
* FlightObject `object`
  * appLinkData [AppLinkData](#applinkdata)
  * barcode [Barcode](#barcode)
  * boardingAndSeatingInfo [BoardingAndSeatingInfo](#boardingandseatinginfo)
  * classId `string`: Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you.
  * classReference [FlightClass](#flightclass)
  * disableExpirationNotification `boolean`: Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for Flights.
  * hasLinkedDevice `boolean`: Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information.
  * hasUsers `boolean`: Indicates if the object has users. This field is set by the platform.
  * heroImage [Image](#image)
  * hexBackgroundColor `string`: The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.
  * id `string`: Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * imageModulesData `array`: Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
    * items [ImageModuleData](#imagemoduledata)
  * infoModuleData [InfoModuleData](#infomoduledata)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightObject"`.
  * linksModuleData [LinksModuleData](#linksmoduledata)
  * locations `array`: The list of locations where the object can be used. The platform uses this information to trigger geolocated notifications to users. Note that locations in the object override locations in the class which override locations in the Google Places ID.
    * items [LatLongPoint](#latlongpoint)
  * messages `array`: An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
    * items [Message](#message)
  * passengerName `string`: Required. Passenger name as it would appear on the boarding pass. eg: "Dave M Gahan" or "Gahan/Dave" or "GAHAN/DAVEM"
  * reservationInfo [ReservationInfo](#reservationinfo)
  * securityProgramLogo [Image](#image)
  * smartTapRedemptionValue `string`: Available only to Smart Tap enabled partners. Contact support for additional guidance.
  * state `string` (values: STATE_UNSPECIFIED, ACTIVE, active, COMPLETED, completed, EXPIRED, expired, INACTIVE, inactive): Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section.
  * textModulesData `array`: Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
    * items [TextModuleData](#textmoduledata)
  * validTimeInterval [TimeInterval](#timeinterval)
  * version `string`: Deprecated

### FlightObjectAddMessageResponse
* FlightObjectAddMessageResponse `object`
  * resource [FlightObject](#flightobject)

### FlightObjectListResponse
* FlightObjectListResponse `object`
  * pagination [Pagination](#pagination)
  * resources `array`: Resources corresponding to the list request.
    * items [FlightObject](#flightobject)

### FrequentFlyerInfo
* FrequentFlyerInfo `object`
  * frequentFlyerNumber `string`: Frequent flyer number. Required for each nested object of kind `walletobjects#frequentFlyerInfo`.
  * frequentFlyerProgramName [LocalizedString](#localizedstring)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#frequentFlyerInfo"`.

### GiftCardClass
* GiftCardClass `object`
  * allowBarcodeRedemption `boolean`: Determines whether the merchant supports gift card redemption using barcode. If true, app displays a barcode for the gift card on the Gift card details screen. If false, a barcode is not displayed.
  * allowMultipleUsersPerObject `boolean`: Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead.
  * callbackOptions [CallbackOptions](#callbackoptions)
  * cardNumberLabel `string`: The label to display for the card number, such as "Card Number".
  * classTemplateInfo [ClassTemplateInfo](#classtemplateinfo)
  * countryCode `string`: Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.
  * enableSmartTap `boolean`: Available only to Smart Tap enabled partners. Contact support for additional guidance.
  * eventNumberLabel `string`: The label to display for event number, such as "Target Event #".
  * heroImage [Image](#image)
  * hexBackgroundColor `string`: The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.
  * homepageUri [Uri](#uri)
  * id `string`: Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * imageModulesData `array`: Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
    * items [ImageModuleData](#imagemoduledata)
  * infoModuleData [InfoModuleData](#infomoduledata)
  * issuerName `string`: Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#giftCardClass"`.
  * linksModuleData [LinksModuleData](#linksmoduledata)
  * localizedCardNumberLabel [LocalizedString](#localizedstring)
  * localizedEventNumberLabel [LocalizedString](#localizedstring)
  * localizedIssuerName [LocalizedString](#localizedstring)
  * localizedMerchantName [LocalizedString](#localizedstring)
  * localizedPinLabel [LocalizedString](#localizedstring)
  * locations `array`: The list of locations where the object can be used. The platform uses this information to trigger geolocated notifications to users. Note that locations in the object override locations in the class which override locations in the Google Places ID.
    * items [LatLongPoint](#latlongpoint)
  * merchantName `string`: Merchant name, such as "Adam's Apparel". The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens.
  * messages `array`: An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
    * items [Message](#message)
  * multipleDevicesAndHoldersAllowedStatus `string` (values: STATUS_UNSPECIFIED, MULTIPLE_HOLDERS, multipleHolders, ONE_USER_ALL_DEVICES, oneUserAllDevices, ONE_USER_ONE_DEVICE, oneUserOneDevice): Identifies whether multiple users and devices will save the same object referencing this class.
  * pinLabel `string`: The label to display for the PIN, such as "4-digit PIN".
  * programLogo [Image](#image)
  * redemptionIssuers `array`: Available only to Smart Tap enabled partners. Contact support for additional guidance.
    * items `string`
  * review [Review](#review)
  * reviewStatus `string` (values: REVIEW_STATUS_UNSPECIFIED, UNDER_REVIEW, underReview, APPROVED, approved, REJECTED, rejected, DRAFT, draft): Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`.
  * textModulesData `array`: Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
    * items [TextModuleData](#textmoduledata)
  * version `string`: Deprecated
  * wordMark [Image](#image)

### GiftCardClassAddMessageResponse
* GiftCardClassAddMessageResponse `object`
  * resource [GiftCardClass](#giftcardclass)

### GiftCardClassListResponse
* GiftCardClassListResponse `object`
  * pagination [Pagination](#pagination)
  * resources `array`: Resources corresponding to the list request.
    * items [GiftCardClass](#giftcardclass)

### GiftCardObject
* GiftCardObject `object`
  * appLinkData [AppLinkData](#applinkdata)
  * balance [Money](#money)
  * balanceUpdateTime [DateTime](#datetime)
  * barcode [Barcode](#barcode)
  * cardNumber `string`: Required. The card's number.
  * classId `string`: Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you.
  * classReference [GiftCardClass](#giftcardclass)
  * disableExpirationNotification `boolean`: Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers.
  * eventNumber `string`: The card's event number, an optional field used by some gift cards.
  * hasLinkedDevice `boolean`: Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information.
  * hasUsers `boolean`: Indicates if the object has users. This field is set by the platform.
  * heroImage [Image](#image)
  * id `string`: Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * imageModulesData `array`: Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
    * items [ImageModuleData](#imagemoduledata)
  * infoModuleData [InfoModuleData](#infomoduledata)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#giftCardObject"`.
  * linksModuleData [LinksModuleData](#linksmoduledata)
  * locations `array`: The list of locations where the object can be used. The platform uses this information to trigger geolocated notifications to users. Note that locations in the object override locations in the class which override locations in the Google Places ID.
    * items [LatLongPoint](#latlongpoint)
  * messages `array`: An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
    * items [Message](#message)
  * pin `string`: The card's PIN.
  * smartTapRedemptionValue `string`: Available only to Smart Tap enabled partners. Contact support for additional guidance.
  * state `string` (values: STATE_UNSPECIFIED, ACTIVE, active, COMPLETED, completed, EXPIRED, expired, INACTIVE, inactive): Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section.
  * textModulesData `array`: Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
    * items [TextModuleData](#textmoduledata)
  * validTimeInterval [TimeInterval](#timeinterval)
  * version `string`: Deprecated

### GiftCardObjectAddMessageResponse
* GiftCardObjectAddMessageResponse `object`
  * resource [GiftCardObject](#giftcardobject)

### GiftCardObjectListResponse
* GiftCardObjectListResponse `object`
  * pagination [Pagination](#pagination)
  * resources `array`: Resources corresponding to the list request.
    * items [GiftCardObject](#giftcardobject)

### GroupingInfo
* GroupingInfo `object`: NEXT_ID: 2
  * sortIndex `integer`: Optional index for sorting the passes when they are grouped with other passes. Passes with lower sort index are shown before passes with higher sort index. If unspecified, the value is assumed to be INT_MAX. For two passes with same sort index, the sorting behavior is undefined.

### Image
* Image `object`: Wrapping type for Google hosted images.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#image"`.
  * sourceUri [ImageUri](#imageuri)

### ImageModuleData
* ImageModuleData `object`
  * id `string`: The ID associated with an image module. This field is here to enable ease of management of image modules.
  * mainImage [Image](#image)

### ImageUri
* ImageUri `object`
  * description `string`: Additional information about the image, which is unused and retained only for backward compatibility.
  * localizedDescription [LocalizedString](#localizedstring)
  * uri `string`: The location of the image. URIs must have a scheme.

### InfoModuleData
* InfoModuleData `object`
  * labelValueRows `array`: A list of collections of labels and values. These will be displayed one after the other in a singular column.
    * items [LabelValueRow](#labelvaluerow)
  * showLastUpdateTime `boolean`

### Issuer
* Issuer `object`
  * contactInfo [IssuerContactInfo](#issuercontactinfo)
  * homepageUrl `string`: URL for the issuer's home page.
  * issuerId `string`: The unique identifier for an issuer account. This is automatically generated when the issuer is inserted.
  * name `string`: The account name of the issuer.
  * smartTapMerchantData [SmartTapMerchantData](#smarttapmerchantdata)

### IssuerContactInfo
* IssuerContactInfo `object`
  * alertsEmails `array`: Email addresses which will receive alerts.
    * items `string`
  * email `string`: The primary contact email address.
  * name `string`: The primary contact name.
  * phone `string`: The primary contact phone number.

### IssuerListResponse
* IssuerListResponse `object`
  * resources `array`: Resources corresponding to the list request.
    * items [Issuer](#issuer)

### IssuerToUserInfo
* IssuerToUserInfo `object`
  * action `string` (values: ACTION_UNSPECIFIED, S2AP, s2ap, SIGN_UP, signUp)
  * signUpInfo [SignUpInfo](#signupinfo)
  * url `string`: Currently not used, consider deprecating.
  * value `string`: JSON web token for action S2AP.

### JwtInsertResponse
* JwtInsertResponse `object`
  * resources [Resources](#resources)
  * saveUri `string`: A URI that, when opened, will allow the end user to save the object(s) identified in the JWT to their Google account.

### JwtResource
* JwtResource `object`
  * jwt `string`: A string representing a JWT of the format described at https://developers.google.com/pay/passes/reference/s2w-reference#google-pay-api-for-passes-jwt

### LabelValue
* LabelValue `object`: A pair of text strings to be displayed in the details view. Note we no longer display LabelValue/LabelValueRow as a table, instead a list of items.
  * label `string`: The label for a specific row and column. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout.
  * localizedLabel [LocalizedString](#localizedstring)
  * localizedValue [LocalizedString](#localizedstring)
  * value `string`: The value for a specific row and column. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout.

### LabelValueRow
* LabelValueRow `object`
  * columns `array`: A list of labels and values. These will be displayed in a singular column, one after the other, not in multiple columns, despite the field name.
    * items [LabelValue](#labelvalue)

### LatLongPoint
* LatLongPoint `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#latLongPoint"`.
  * latitude `number`: The latitude specified as any value in the range of -90.0 through +90.0, both inclusive. Values outside these bounds will be rejected.
  * longitude `number`: The longitude specified in the range -180.0 through +180.0, both inclusive. Values outside these bounds will be rejected.

### LinksModuleData
* LinksModuleData `object`
  * uris `array`: The list of URIs.
    * items [Uri](#uri)

### ListTemplateOverride
* ListTemplateOverride `object`
  * firstRowOption [FirstRowOption](#firstrowoption)
  * secondRowOption [FieldSelector](#fieldselector)
  * thirdRowOption [FieldSelector](#fieldselector)

### LocalizedString
* LocalizedString `object`
  * defaultValue [TranslatedString](#translatedstring)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#localizedString"`.
  * translatedValues `array`: Contains the translations for the string.
    * items [TranslatedString](#translatedstring)

### LoyaltyClass
* LoyaltyClass `object`
  * accountIdLabel `string`: The account ID label, such as "Member ID." Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.
  * accountNameLabel `string`: The account name label, such as "Member Name." Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.
  * allowMultipleUsersPerObject `boolean`: Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead.
  * callbackOptions [CallbackOptions](#callbackoptions)
  * classTemplateInfo [ClassTemplateInfo](#classtemplateinfo)
  * countryCode `string`: Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.
  * discoverableProgram [DiscoverableProgram](#discoverableprogram)
  * enableSmartTap `boolean`: Available only to Smart Tap enabled partners. Contact support for additional guidance.
  * heroImage [Image](#image)
  * hexBackgroundColor `string`: The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.
  * homepageUri [Uri](#uri)
  * id `string`: Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * imageModulesData `array`: Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
    * items [ImageModuleData](#imagemoduledata)
  * infoModuleData [InfoModuleData](#infomoduledata)
  * issuerName `string`: Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#loyaltyClass"`.
  * linksModuleData [LinksModuleData](#linksmoduledata)
  * localizedAccountIdLabel [LocalizedString](#localizedstring)
  * localizedAccountNameLabel [LocalizedString](#localizedstring)
  * localizedIssuerName [LocalizedString](#localizedstring)
  * localizedProgramName [LocalizedString](#localizedstring)
  * localizedRewardsTier [LocalizedString](#localizedstring)
  * localizedRewardsTierLabel [LocalizedString](#localizedstring)
  * localizedSecondaryRewardsTier [LocalizedString](#localizedstring)
  * localizedSecondaryRewardsTierLabel [LocalizedString](#localizedstring)
  * locations `array`: The list of locations where the object can be used. The platform uses this information to trigger geolocated notifications to users. Note that locations in the object override locations in the class which override locations in the Google Places ID.
    * items [LatLongPoint](#latlongpoint)
  * messages `array`: An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
    * items [Message](#message)
  * multipleDevicesAndHoldersAllowedStatus `string` (values: STATUS_UNSPECIFIED, MULTIPLE_HOLDERS, multipleHolders, ONE_USER_ALL_DEVICES, oneUserAllDevices, ONE_USER_ONE_DEVICE, oneUserOneDevice): Identifies whether multiple users and devices will save the same object referencing this class.
  * programLogo [Image](#image)
  * programName `string`: Required. The program name, such as "Adam's Apparel". The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens.
  * redemptionIssuers `array`: Available only to Smart Tap enabled partners. Contact support for additional guidance.
    * items `string`
  * review [Review](#review)
  * reviewStatus `string` (values: REVIEW_STATUS_UNSPECIFIED, UNDER_REVIEW, underReview, APPROVED, approved, REJECTED, rejected, DRAFT, draft): Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`.
  * rewardsTier `string`: The rewards tier, such as "Gold" or "Platinum." Recommended maximum length is 7 characters to ensure full string is displayed on smaller screens.
  * rewardsTierLabel `string`: The rewards tier label, such as "Rewards Tier." Recommended maximum length is 9 characters to ensure full string is displayed on smaller screens.
  * secondaryRewardsTier `string`: The secondary rewards tier, such as "Gold" or "Platinum."
  * secondaryRewardsTierLabel `string`: The secondary rewards tier label, such as "Rewards Tier."
  * textModulesData `array`: Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
    * items [TextModuleData](#textmoduledata)
  * version `string`: Deprecated
  * wordMark [Image](#image)

### LoyaltyClassAddMessageResponse
* LoyaltyClassAddMessageResponse `object`
  * resource [LoyaltyClass](#loyaltyclass)

### LoyaltyClassListResponse
* LoyaltyClassListResponse `object`
  * pagination [Pagination](#pagination)
  * resources `array`: Resources corresponding to the list request.
    * items [LoyaltyClass](#loyaltyclass)

### LoyaltyObject
* LoyaltyObject `object`
  * accountId `string`: The loyalty account identifier. Recommended maximum length is 20 characters.
  * accountName `string`: The loyalty account holder name, such as "John Smith." Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
  * appLinkData [AppLinkData](#applinkdata)
  * barcode [Barcode](#barcode)
  * classId `string`: Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you.
  * classReference [LoyaltyClass](#loyaltyclass)
  * disableExpirationNotification `boolean`: Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers.
  * hasLinkedDevice `boolean`: Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information.
  * hasUsers `boolean`: Indicates if the object has users. This field is set by the platform.
  * heroImage [Image](#image)
  * id `string`: Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * imageModulesData `array`: Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
    * items [ImageModuleData](#imagemoduledata)
  * infoModuleData [InfoModuleData](#infomoduledata)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#loyaltyObject"`.
  * linkedOfferIds `array`: A list of offer objects linked to this loyalty card. The offer objects must already exist. Offer object IDs should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you.
    * items `string`
  * linksModuleData [LinksModuleData](#linksmoduledata)
  * locations `array`: The list of locations where the object can be used. The platform uses this information to trigger geolocated notifications to users. Note that locations in the object override locations in the class which override locations in the Google Places ID.
    * items [LatLongPoint](#latlongpoint)
  * loyaltyPoints [LoyaltyPoints](#loyaltypoints)
  * messages `array`: An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
    * items [Message](#message)
  * secondaryLoyaltyPoints [LoyaltyPoints](#loyaltypoints)
  * smartTapRedemptionValue `string`: Available only to Smart Tap enabled partners. Contact support for additional guidance.
  * state `string` (values: STATE_UNSPECIFIED, ACTIVE, active, COMPLETED, completed, EXPIRED, expired, INACTIVE, inactive): Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section.
  * textModulesData `array`: Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
    * items [TextModuleData](#textmoduledata)
  * validTimeInterval [TimeInterval](#timeinterval)
  * version `string`: Deprecated

### LoyaltyObjectAddMessageResponse
* LoyaltyObjectAddMessageResponse `object`
  * resource [LoyaltyObject](#loyaltyobject)

### LoyaltyObjectListResponse
* LoyaltyObjectListResponse `object`
  * pagination [Pagination](#pagination)
  * resources `array`: Resources corresponding to the list request.
    * items [LoyaltyObject](#loyaltyobject)

### LoyaltyPoints
* LoyaltyPoints `object`
  * balance [LoyaltyPointsBalance](#loyaltypointsbalance)
  * label `string`: The loyalty points label, such as "Points". Recommended maximum length is 9 characters.
  * localizedLabel [LocalizedString](#localizedstring)

### LoyaltyPointsBalance
* LoyaltyPointsBalance `object`
  * double `number`: The double form of a balance. Only one of these subtypes (string, int, double, money) should be populated.
  * int `integer`: The integer form of a balance. Only one of these subtypes (string, int, double, money) should be populated.
  * money [Money](#money)
  * string `string`: The string form of a balance. Only one of these subtypes (string, int, double, money) should be populated.

### Message
* Message `object`: A message that will be displayed with a Valuable
  * body `string`: The message body.
  * displayInterval [TimeInterval](#timeinterval)
  * header `string`: The message header.
  * id `string`: The ID associated with a message. This field is here to enable ease of management of messages. Notice ID values could possibly duplicate across multiple messages in the same class/instance, and care must be taken to select a reasonable ID for each message.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#walletObjectMessage"`.
  * localizedBody [LocalizedString](#localizedstring)
  * localizedHeader [LocalizedString](#localizedstring)
  * messageType `string` (values: MESSAGE_TYPE_UNSPECIFIED, TEXT, text, EXPIRATION_NOTIFICATION, expirationNotification): The type of the message. Currently, this can only be set for offers.

### ModifyLinkedOfferObjects
* ModifyLinkedOfferObjects `object`
  * addLinkedOfferObjectIds `array`: The linked offer object ids to add to the object.
    * items `string`
  * removeLinkedOfferObjectIds `array`: The linked offer object ids to remove from the object.
    * items `string`

### ModifyLinkedOfferObjectsRequest
* ModifyLinkedOfferObjectsRequest `object`
  * linkedOfferObjectIds [ModifyLinkedOfferObjects](#modifylinkedofferobjects)

### Money
* Money `object`
  * currencyCode `string`: The currency code, such as "USD" or "EUR."
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#money"`.
  * micros `string`: The unit of money amount in micros. For example, $1 USD would be represented as 1000000 micros.

### OfferClass
* OfferClass `object`
  * allowMultipleUsersPerObject `boolean`: Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead.
  * callbackOptions [CallbackOptions](#callbackoptions)
  * classTemplateInfo [ClassTemplateInfo](#classtemplateinfo)
  * countryCode `string`: Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.
  * details `string`: The details of the offer.
  * enableSmartTap `boolean`: Available only to Smart Tap enabled partners. Contact support for additional guidance.
  * finePrint `string`: The fine print or terms of the offer, such as "20% off any t-shirt at Adam's Apparel."
  * helpUri [Uri](#uri)
  * heroImage [Image](#image)
  * hexBackgroundColor `string`: The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.
  * homepageUri [Uri](#uri)
  * id `string`: Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * imageModulesData `array`: Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
    * items [ImageModuleData](#imagemoduledata)
  * infoModuleData [InfoModuleData](#infomoduledata)
  * issuerName `string`: Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#offerClass"`.
  * linksModuleData [LinksModuleData](#linksmoduledata)
  * localizedDetails [LocalizedString](#localizedstring)
  * localizedFinePrint [LocalizedString](#localizedstring)
  * localizedIssuerName [LocalizedString](#localizedstring)
  * localizedProvider [LocalizedString](#localizedstring)
  * localizedShortTitle [LocalizedString](#localizedstring)
  * localizedTitle [LocalizedString](#localizedstring)
  * locations `array`: The list of locations where the object can be used. The platform uses this information to trigger geolocated notifications to users. Note that locations in the object override locations in the class which override locations in the Google Places ID.
    * items [LatLongPoint](#latlongpoint)
  * messages `array`: An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
    * items [Message](#message)
  * multipleDevicesAndHoldersAllowedStatus `string` (values: STATUS_UNSPECIFIED, MULTIPLE_HOLDERS, multipleHolders, ONE_USER_ALL_DEVICES, oneUserAllDevices, ONE_USER_ONE_DEVICE, oneUserOneDevice): Identifies whether multiple users and devices will save the same object referencing this class.
  * provider `string`: Required. The offer provider (either the aggregator name or merchant name). Recommended maximum length is 12 characters to ensure full string is displayed on smaller screens.
  * redemptionChannel `string` (values: REDEMPTION_CHANNEL_UNSPECIFIED, INSTORE, instore, ONLINE, online, BOTH, both, TEMPORARY_PRICE_REDUCTION, temporaryPriceReduction): Required. The redemption channels applicable to this offer.
  * redemptionIssuers `array`: Available only to Smart Tap enabled partners. Contact support for additional guidance.
    * items `string`
  * review [Review](#review)
  * reviewStatus `string` (values: REVIEW_STATUS_UNSPECIFIED, UNDER_REVIEW, underReview, APPROVED, approved, REJECTED, rejected, DRAFT, draft): Required. The status of the class. This field can be set to `draft` or The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`.
  * shortTitle `string`: A shortened version of the title of the offer, such as "20% off," shown to users as a quick reference to the offer contents. Recommended maximum length is 20 characters.
  * textModulesData `array`: Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
    * items [TextModuleData](#textmoduledata)
  * title `string`: Required. The title of the offer, such as "20% off any t-shirt." Recommended maximum length is 60 characters to ensure full string is displayed on smaller screens.
  * titleImage [Image](#image)
  * version `string`: Deprecated
  * wordMark [Image](#image)

### OfferClassAddMessageResponse
* OfferClassAddMessageResponse `object`
  * resource [OfferClass](#offerclass)

### OfferClassListResponse
* OfferClassListResponse `object`
  * pagination [Pagination](#pagination)
  * resources `array`: Resources corresponding to the list request.
    * items [OfferClass](#offerclass)

### OfferObject
* OfferObject `object`
  * appLinkData [AppLinkData](#applinkdata)
  * barcode [Barcode](#barcode)
  * classId `string`: Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you.
  * classReference [OfferClass](#offerclass)
  * disableExpirationNotification `boolean`: Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers.
  * hasLinkedDevice `boolean`: Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information.
  * hasUsers `boolean`: Indicates if the object has users. This field is set by the platform.
  * heroImage [Image](#image)
  * id `string`: Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * imageModulesData `array`: Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
    * items [ImageModuleData](#imagemoduledata)
  * infoModuleData [InfoModuleData](#infomoduledata)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#offerObject"`.
  * linksModuleData [LinksModuleData](#linksmoduledata)
  * locations `array`: The list of locations where the object can be used. The platform uses this information to trigger geolocated notifications to users. Note that locations in the object override locations in the class which override locations in the Google Places ID.
    * items [LatLongPoint](#latlongpoint)
  * messages `array`: An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
    * items [Message](#message)
  * smartTapRedemptionValue `string`: Available only to Smart Tap enabled partners. Contact support for additional guidance.
  * state `string` (values: STATE_UNSPECIFIED, ACTIVE, active, COMPLETED, completed, EXPIRED, expired, INACTIVE, inactive): Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section.
  * textModulesData `array`: Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
    * items [TextModuleData](#textmoduledata)
  * validTimeInterval [TimeInterval](#timeinterval)
  * version `string`: Deprecated

### OfferObjectAddMessageResponse
* OfferObjectAddMessageResponse `object`
  * resource [OfferObject](#offerobject)

### OfferObjectListResponse
* OfferObjectListResponse `object`
  * pagination [Pagination](#pagination)
  * resources `array`: Resources corresponding to the list request.
    * items [OfferObject](#offerobject)

### Pagination
* Pagination `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#pagination"`.
  * nextPageToken `string`: Page token to send to fetch the next page.
  * resultsPerPage `integer`: Number of results returned in this page.

### Permission
* Permission `object`
  * emailAddress `string`: The email address of the user, group, or service account to which this permission refers to.
  * role `string` (values: ROLE_UNSPECIFIED, OWNER, owner, READER, reader, WRITER, writer): The role granted by this permission.

### Permissions
* Permissions `object`
  * issuerId `string`: ID of the issuer the list of permissions refer to.
  * permissions `array`: The complete list of permissions for the issuer account.
    * items [Permission](#permission)

### PurchaseDetails
* PurchaseDetails `object`
  * accountId `string`: ID of the account used to purchase the ticket.
  * confirmationCode `string`: The confirmation code for the purchase. This may be the same for multiple different tickets and is used to group tickets together.
  * purchaseDateTime `string`: The purchase date/time of the ticket. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. Without offset information, some rich features may not be available.
  * purchaseReceiptNumber `string`: Receipt number/identifier for tracking the ticket purchase via the body that sold the ticket.
  * ticketCost [TicketCost](#ticketcost)

### ReservationInfo
* ReservationInfo `object`
  * confirmationCode `string`: Confirmation code needed to check into this flight. This is the number that the passenger would enter into a kiosk at the airport to look up the flight and print a boarding pass.
  * eticketNumber `string`: E-ticket number.
  * frequentFlyerInfo [FrequentFlyerInfo](#frequentflyerinfo)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#reservationInfo"`.

### Resources
* Resources `object`
  * eventTicketClasses `array`
    * items [EventTicketClass](#eventticketclass)
  * eventTicketObjects `array`
    * items [EventTicketObject](#eventticketobject)
  * flightClasses `array`
    * items [FlightClass](#flightclass)
  * flightObjects `array`
    * items [FlightObject](#flightobject)
  * giftCardClasses `array`
    * items [GiftCardClass](#giftcardclass)
  * giftCardObjects `array`
    * items [GiftCardObject](#giftcardobject)
  * loyaltyClasses `array`
    * items [LoyaltyClass](#loyaltyclass)
  * loyaltyObjects `array`
    * items [LoyaltyObject](#loyaltyobject)
  * offerClasses `array`
    * items [OfferClass](#offerclass)
  * offerObjects `array`
    * items [OfferObject](#offerobject)
  * transitClasses `array`
    * items [TransitClass](#transitclass)
  * transitObjects `array`
    * items [TransitObject](#transitobject)

### Review
* Review `object`
  * comments `string`

### SecurityAnimation
* SecurityAnimation `object`
  * animationType `string` (values: ANIMATION_UNSPECIFIED, FOIL_SHIMMER, foilShimmer): Type for animation, FOIL_SHIMMER will be used if not provided.

### SignUpInfo
* SignUpInfo `object`
  * classId `string`: ID of the class the user can sign up for.

### SmartTap
* SmartTap `object`
  * id `string`: The unique identifier for a smart tap. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is the Smart Tap id. The Smart Tap id is a Base64 encoded string which represents the id which was generated by the Google Pay app.
  * infos `array`: Communication from merchant to user.
    * items [IssuerToUserInfo](#issuertouserinfo)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#smartTap"`.
  * merchantId `string`: Smart Tap merchant ID of who engaged in the Smart Tap interaction.

### SmartTapMerchantData
* SmartTapMerchantData `object`
  * authenticationKeys `array`: Available only to Smart Tap enabled partners. Contact support for additional guidance.
    * items [AuthenticationKey](#authenticationkey)
  * smartTapMerchantId `string`: Available only to Smart Tap enabled partners. Contact support for additional guidance.

### TemplateItem
* TemplateItem `object`
  * firstValue [FieldSelector](#fieldselector)
  * predefinedItem `string` (values: PREDEFINED_ITEM_UNSPECIFIED, FREQUENT_FLYER_PROGRAM_NAME_AND_NUMBER, frequentFlyerProgramNameAndNumber, FLIGHT_NUMBER_AND_OPERATING_FLIGHT_NUMBER, flightNumberAndOperatingFlightNumber): A predefined item to display. Only one of `firstValue` or `predefinedItem` may be set.
  * secondValue [FieldSelector](#fieldselector)

### TextModuleData
* TextModuleData `object`: Data for Text module. All fields are optional. Header will be displayed if available, different types of bodies will be concatenated if they are defined.
  * body `string`: The body of the Text Module, which is defined as an uninterrupted string. Recommended maximum length is 500 characters to ensure full string is displayed on smaller screens.
  * header `string`: The header of the Text Module. Recommended maximum length is 35 characters to ensure full string is displayed on smaller screens.
  * id `string`: The ID associated with a text module. This field is here to enable ease of management of text modules.
  * localizedBody [LocalizedString](#localizedstring)
  * localizedHeader [LocalizedString](#localizedstring)

### TicketCost
* TicketCost `object`
  * discountMessage [LocalizedString](#localizedstring)
  * faceValue [Money](#money)
  * purchasePrice [Money](#money)

### TicketLeg
* TicketLeg `object`
  * arrivalDateTime `string`: The date/time of arrival. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the destination station. For example, if the event occurs at the 20th hour of June 5th, 2018 at the destination station, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the destination station is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available.
  * carriage `string`: The train or ship name/number that the passsenger needs to board.
  * departureDateTime `string`: The date/time of departure. This is required if there is no validity time interval set on the transit object. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the origin station. For example, if the departure occurs at the 20th hour of June 5th, 2018 at the origin station, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the origin station is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available.
  * destinationName [LocalizedString](#localizedstring)
  * destinationStationCode `string`: The destination station code.
  * fareName [LocalizedString](#localizedstring)
  * originName [LocalizedString](#localizedstring)
  * originStationCode `string`: The origin station code. This is required if `destinationStationCode` is present or if `originName` is not present.
  * platform `string`: The platform or gate where the passenger can board the carriage.
  * ticketSeat [TicketSeat](#ticketseat)
  * ticketSeats `array`: The reserved seat for the passenger(s). If only one seat is to be specified then use the `ticketSeat` field instead. Both `ticketSeat` and `ticketSeats` may not be set.
    * items [TicketSeat](#ticketseat)
  * transitOperatorName [LocalizedString](#localizedstring)
  * transitTerminusName [LocalizedString](#localizedstring)
  * zone `string`: The zone of boarding within the platform.

### TicketRestrictions
* TicketRestrictions `object`
  * otherRestrictions [LocalizedString](#localizedstring)
  * routeRestrictions [LocalizedString](#localizedstring)
  * routeRestrictionsDetails [LocalizedString](#localizedstring)
  * timeRestrictions [LocalizedString](#localizedstring)

### TicketSeat
* TicketSeat `object`
  * coach `string`: The identifier of the train car or coach in which the ticketed seat is located. Eg. "10"
  * customFareClass [LocalizedString](#localizedstring)
  * fareClass `string` (values: FARE_CLASS_UNSPECIFIED, ECONOMY, economy, FIRST, first, BUSINESS, business): The fare class of the ticketed seat.
  * seat `string`: The identifier of where the ticketed seat is located. Eg. "42". If there is no specific identifier, use `seatAssigment` instead.
  * seatAssignment [LocalizedString](#localizedstring)

### TimeInterval
* TimeInterval `object`
  * end [DateTime](#datetime)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#timeInterval"`.
  * start [DateTime](#datetime)

### TransitClass
* TransitClass `object`
  * allowMultipleUsersPerObject `boolean`: Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead.
  * callbackOptions [CallbackOptions](#callbackoptions)
  * classTemplateInfo [ClassTemplateInfo](#classtemplateinfo)
  * countryCode `string`: Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.
  * customCarriageLabel [LocalizedString](#localizedstring)
  * customCoachLabel [LocalizedString](#localizedstring)
  * customConcessionCategoryLabel [LocalizedString](#localizedstring)
  * customConfirmationCodeLabel [LocalizedString](#localizedstring)
  * customDiscountMessageLabel [LocalizedString](#localizedstring)
  * customFareClassLabel [LocalizedString](#localizedstring)
  * customFareNameLabel [LocalizedString](#localizedstring)
  * customOtherRestrictionsLabel [LocalizedString](#localizedstring)
  * customPlatformLabel [LocalizedString](#localizedstring)
  * customPurchaseFaceValueLabel [LocalizedString](#localizedstring)
  * customPurchasePriceLabel [LocalizedString](#localizedstring)
  * customPurchaseReceiptNumberLabel [LocalizedString](#localizedstring)
  * customRouteRestrictionsDetailsLabel [LocalizedString](#localizedstring)
  * customRouteRestrictionsLabel [LocalizedString](#localizedstring)
  * customSeatLabel [LocalizedString](#localizedstring)
  * customTicketNumberLabel [LocalizedString](#localizedstring)
  * customTimeRestrictionsLabel [LocalizedString](#localizedstring)
  * customTransitTerminusNameLabel [LocalizedString](#localizedstring)
  * customZoneLabel [LocalizedString](#localizedstring)
  * enableSingleLegItinerary `boolean`: Controls the display of the single-leg itinerary for this class. By default, an itinerary will only display for multi-leg trips.
  * enableSmartTap `boolean`: Available only to Smart Tap enabled partners. Contact support for additional guidance.
  * heroImage [Image](#image)
  * hexBackgroundColor `string`: The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.
  * homepageUri [Uri](#uri)
  * id `string`: Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * imageModulesData `array`: Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
    * items [ImageModuleData](#imagemoduledata)
  * infoModuleData [InfoModuleData](#infomoduledata)
  * issuerName `string`: Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
  * languageOverride `string`: If this field is present, transit tickets served to a user's device will always be in this language. Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT".
  * linksModuleData [LinksModuleData](#linksmoduledata)
  * localizedIssuerName [LocalizedString](#localizedstring)
  * locations `array`
    * items [LatLongPoint](#latlongpoint)
  * logo [Image](#image)
  * messages `array`: An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
    * items [Message](#message)
  * multipleDevicesAndHoldersAllowedStatus `string` (values: STATUS_UNSPECIFIED, MULTIPLE_HOLDERS, multipleHolders, ONE_USER_ALL_DEVICES, oneUserAllDevices, ONE_USER_ONE_DEVICE, oneUserOneDevice): Identifies whether multiple users and devices will save the same object referencing this class.
  * redemptionIssuers `array`: Available only to Smart Tap enabled partners. Contact support for additional guidance.
    * items `string`
  * review [Review](#review)
  * reviewStatus `string` (values: REVIEW_STATUS_UNSPECIFIED, UNDER_REVIEW, underReview, APPROVED, approved, REJECTED, rejected, DRAFT, draft): Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`.
  * textModulesData `array`: Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
    * items [TextModuleData](#textmoduledata)
  * transitOperatorName [LocalizedString](#localizedstring)
  * transitType `string` (values: TRANSIT_TYPE_UNSPECIFIED, BUS, bus, RAIL, rail, TRAM, tram, FERRY, ferry, OTHER, other): Required. The type of transit this class represents, such as "bus".
  * version `string`: Deprecated
  * watermark [Image](#image)
  * wordMark [Image](#image)

### TransitClassAddMessageResponse
* TransitClassAddMessageResponse `object`
  * resource [TransitClass](#transitclass)

### TransitClassListResponse
* TransitClassListResponse `object`
  * pagination [Pagination](#pagination)
  * resources `array`: Resources corresponding to the list request.
    * items [TransitClass](#transitclass)

### TransitObject
* TransitObject `object`
  * appLinkData [AppLinkData](#applinkdata)
  * barcode [Barcode](#barcode)
  * classId `string`: Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you.
  * classReference [TransitClass](#transitclass)
  * concessionCategory `string` (values: CONCESSION_CATEGORY_UNSPECIFIED, ADULT, adult, CHILD, child, SENIOR, senior): The concession category for the ticket.
  * customConcessionCategory [LocalizedString](#localizedstring)
  * customTicketStatus [LocalizedString](#localizedstring)
  * disableExpirationNotification `boolean`: Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers.
  * hasLinkedDevice `boolean`: Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information.
  * hasUsers `boolean`: Indicates if the object has users. This field is set by the platform.
  * heroImage [Image](#image)
  * hexBackgroundColor `string`: The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.
  * id `string`: Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'.
  * imageModulesData `array`: Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
    * items [ImageModuleData](#imagemoduledata)
  * infoModuleData [InfoModuleData](#infomoduledata)
  * linksModuleData [LinksModuleData](#linksmoduledata)
  * locations `array`: The list of locations where the object can be used. The platform uses this information to trigger geolocated notifications to users. Note that locations in the object override locations in the class which override locations in the Google Places ID.
    * items [LatLongPoint](#latlongpoint)
  * messages `array`: An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
    * items [Message](#message)
  * passengerNames `string`: The name(s) of the passengers the ticket is assigned to. The above `passengerType` field is meant to give Google context on this field.
  * passengerType `string` (values: PASSENGER_TYPE_UNSPECIFIED, SINGLE_PASSENGER, singlePassenger, MULTIPLE_PASSENGERS, multiplePassengers): The number of passengers.
  * purchaseDetails [PurchaseDetails](#purchasedetails)
  * smartTapRedemptionValue `string`: Available only to Smart Tap enabled partners. Contact support for additional guidance.
  * state `string` (values: STATE_UNSPECIFIED, ACTIVE, active, COMPLETED, completed, EXPIRED, expired, INACTIVE, inactive): Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section.
  * textModulesData `array`: Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
    * items [TextModuleData](#textmoduledata)
  * ticketLeg [TicketLeg](#ticketleg)
  * ticketLegs `array`: Each ticket may contain one or more legs. Each leg contains departure and arrival information along with boarding and seating information. If only one leg is to be specified then use the `ticketLeg` field instead. Both `ticketLeg` and `ticketLegs` may not be set.
    * items [TicketLeg](#ticketleg)
  * ticketNumber `string`: The number of the ticket. This is a unique identifier for the ticket in the transit operator's system.
  * ticketRestrictions [TicketRestrictions](#ticketrestrictions)
  * ticketStatus `string` (values: TICKET_STATUS_UNSPECIFIED, USED, used, REFUNDED, refunded, EXCHANGED, exchanged): The status of the ticket. For states which affect display, use the `state` field instead.
  * tripId `string`: This id is used to group tickets together if the user has saved multiple tickets for the same trip.
  * tripType `string` (values: TRIP_TYPE_UNSPECIFIED, ROUND_TRIP, roundTrip, ONE_WAY, oneWay): Required. The type of trip this transit object represents. Used to determine which symbol to use between the origin and destination.
  * validTimeInterval [TimeInterval](#timeinterval)
  * version `string`: Deprecated

### TransitObjectAddMessageResponse
* TransitObjectAddMessageResponse `object`
  * resource [TransitObject](#transitobject)

### TransitObjectListResponse
* TransitObjectListResponse `object`
  * pagination [Pagination](#pagination)
  * resources `array`: Resources corresponding to the list request.
    * items [TransitObject](#transitobject)

### TranslatedString
* TranslatedString `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#translatedString"`.
  * language `string`: Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT".
  * value `string`: The UTF-8 encoded translated string.

### Uri
* Uri `object`
  * description `string`: The URI's title appearing in the app as text. Recommended maximum is 20 characters to ensure full string is displayed on smaller screens. Note that in some contexts this text is not used, such as when `description` is part of an image.
  * id `string`: The ID associated with a uri. This field is here to enable ease of management of uris.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"walletobjects#uri"`.
  * localizedDescription [LocalizedString](#localizedstring)
  * uri `string`: The location of a web page, image, or other resource. URIs in the `LinksModuleData` module can have different prefixes indicating the type of URI (a link to a web page, a link to a map, a telephone number, or an email address). URIs must have a scheme.


