# @datafire/box_authorization

Client library for Box 2.0 Authorization

## Installation and Usage
```bash
npm install --save datafire @datafire/box_authorization
```

```js
let datafire = require('datafire');
let box_authorization = require('@datafire/box_authorization').actions;
let context = new datafire.Context();

box_authorization.authorize({}, context).then(data => {
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

#### Parameters
* response_type (string) **required**
* client_id (string) **required**
* redirect_uri (string) **required**
* state (string) **required**
* scope (string)

