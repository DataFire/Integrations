# @datafire/box_authorization

Client library for Box 2.0 Authorization

## Installation and Usage
```bash
npm install --save @datafire/box_authorization
```
```js
let box_authorization = require('@datafire/box_authorization').create();

box_authorization.authorize({}).then(data => {
  console.log(data);
})
```

## Description

The Box Authorization API gives you access to authenticate and authorize an application to work with the Box APIs

## Actions

### authorize
The host for this api is account.box.com. This is the URL of the Box login endpoint. To begin the process of authenticating and authorizing an application to work with the Box APIs.


```js
box_authorization.authorize({
  "response_type": "",
  "client_id": "",
  "redirect_uri": "",
  "state": ""
}, context)
```

#### Input
* input `object`
  * response_type **required** `string` (values: code)
  * client_id **required** `string`
  * redirect_uri **required** `string`
  * state **required** `string`
  * scope `string`

#### Output
*Output schema unknown*



## Definitions

### OAuthError
* OAuthError `object`
  * error `string`
  * error_description `string`
  * error_uri `string`
  * state `string`


