# @datafire/posty

Client library for posty_API

## Installation and Usage
```bash
npm install --save @datafire/posty
```
```js
let posty = require('@datafire/posty').create();

posty.api.v1.domains.json.get(null).then(data => {
  console.log(data);
});
```

## Description

The posty_API is the core element of the posty softwarestack. It is developed to administrate a mailserver based on Postfix and Dovecot. It offers an easy REST interface which can be used in own applications or with the posty client applications, posty_CLI and posty_webUI.

## Actions

### api.v1.domains.json.get
Returns all available domains


```js
posty.api.v1.domains.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### api.v1.domains.json.post
Create new domain


```js
posty.api.v1.domains.json.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### api.v1.domains.domain_name.json.delete
Delete the specified domain


```js
posty.api.v1.domains.domain_name.json.delete({
  "domain_name": ""
}, context)
```

#### Input
* input `object`
  * domain_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.domains.domain_name.json.get
Returns the information to the specified domain


```js
posty.api.v1.domains.domain_name.json.get({
  "domain_name": ""
}, context)
```

#### Input
* input `object`
  * domain_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.domains.domain_name.json.put
Update the specified domain


```js
posty.api.v1.domains.domain_name.json.put({
  "domain_name": ""
}, context)
```

#### Input
* input `object`
  * domain_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.domains.domain_name.aliases.json.get
Returns all aliases for the specified domain


```js
posty.api.v1.domains.domain_name.aliases.json.get({
  "domain_name": ""
}, context)
```

#### Input
* input `object`
  * domain_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.domains.domain_name.aliases.json.post
Create new domain alias


```js
posty.api.v1.domains.domain_name.aliases.json.post({
  "domain_name": ""
}, context)
```

#### Input
* input `object`
  * domain_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.domains.domain_name.aliases.alias_name.json.delete
Delete the specified domain alias


```js
posty.api.v1.domains.domain_name.aliases.alias_name.json.delete({
  "domain_name": "",
  "alias_name": ""
}, context)
```

#### Input
* input `object`
  * domain_name **required** `string`
  * alias_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.domains.domain_name.aliases.alias_name.json.get
Returns the information to the specified domain alias


```js
posty.api.v1.domains.domain_name.aliases.alias_name.json.get({
  "domain_name": "",
  "alias_name": ""
}, context)
```

#### Input
* input `object`
  * domain_name **required** `string`
  * alias_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.domains.domain_name.aliases.alias_name.json.put
Update the specified domain alias


```js
posty.api.v1.domains.domain_name.aliases.alias_name.json.put({
  "domain_name": "",
  "alias_name": ""
}, context)
```

#### Input
* input `object`
  * domain_name **required** `string`
  * alias_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.domains.domain_name.users.json.get
Returns all users for the specified domain


```js
posty.api.v1.domains.domain_name.users.json.get({
  "domain_name": ""
}, context)
```

#### Input
* input `object`
  * domain_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.domains.domain_name.users.json.post
Create new user


```js
posty.api.v1.domains.domain_name.users.json.post({
  "domain_name": ""
}, context)
```

#### Input
* input `object`
  * domain_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.domains.domain_name.users.user_name.json.delete
Delete the specified user


```js
posty.api.v1.domains.domain_name.users.user_name.json.delete({
  "domain_name": "",
  "user_name": ""
}, context)
```

#### Input
* input `object`
  * domain_name **required** `string`
  * user_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.domains.domain_name.users.user_name.json.get
Returns the information to the specified user


```js
posty.api.v1.domains.domain_name.users.user_name.json.get({
  "domain_name": "",
  "user_name": ""
}, context)
```

#### Input
* input `object`
  * domain_name **required** `string`
  * user_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.domains.domain_name.users.user_name.json.put
Update the specified user


```js
posty.api.v1.domains.domain_name.users.user_name.json.put({
  "domain_name": "",
  "user_name": ""
}, context)
```

#### Input
* input `object`
  * domain_name **required** `string`
  * user_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.domains.domain_name.users.user_name.aliases.json.get
Returns all aliases for the specified user


```js
posty.api.v1.domains.domain_name.users.user_name.aliases.json.get({
  "domain_name": "",
  "user_name": ""
}, context)
```

#### Input
* input `object`
  * domain_name **required** `string`
  * user_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.domains.domain_name.users.user_name.aliases.json.post
Create new user alias


```js
posty.api.v1.domains.domain_name.users.user_name.aliases.json.post({
  "domain_name": "",
  "user_name": ""
}, context)
```

#### Input
* input `object`
  * domain_name **required** `string`
  * user_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.domains.domain_name.users.user_name.aliases.alias_name.json.delete
Delete the specified user alias


```js
posty.api.v1.domains.domain_name.users.user_name.aliases.alias_name.json.delete({
  "domain_name": "",
  "user_name": "",
  "alias_name": ""
}, context)
```

#### Input
* input `object`
  * domain_name **required** `string`
  * user_name **required** `string`
  * alias_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.domains.domain_name.users.user_name.aliases.alias_name.json.get
Returns the information to the specified user alias


```js
posty.api.v1.domains.domain_name.users.user_name.aliases.alias_name.json.get({
  "domain_name": "",
  "user_name": "",
  "alias_name": ""
}, context)
```

#### Input
* input `object`
  * domain_name **required** `string`
  * user_name **required** `string`
  * alias_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.domains.domain_name.users.user_name.aliases.alias_name.json.put
Update the specified user alias


```js
posty.api.v1.domains.domain_name.users.user_name.aliases.alias_name.json.put({
  "domain_name": "",
  "user_name": "",
  "alias_name": ""
}, context)
```

#### Input
* input `object`
  * domain_name **required** `string`
  * user_name **required** `string`
  * alias_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.summary.json.get
Returns a summary of all Resources


```js
posty.api.v1.summary.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### api.v1.swagger_doc.json.get
Swagger compatible API description


```js
posty.api.v1.swagger_doc.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### api.v1.swagger_doc.name.json.get
Swagger compatible API description for specific API


```js
posty.api.v1.swagger_doc.name.json.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name of mounted API

#### Output
*Output schema unknown*

### api.v1.transports.json.get
Returns all available transports


```js
posty.api.v1.transports.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### api.v1.transports.json.post
Create new transport


```js
posty.api.v1.transports.json.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### api.v1.transports.transport_name.json.delete
Delete the specified transport


```js
posty.api.v1.transports.transport_name.json.delete({
  "transport_name": ""
}, context)
```

#### Input
* input `object`
  * transport_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.transports.transport_name.json.get
Returns the information to the specified transport


```js
posty.api.v1.transports.transport_name.json.get({
  "transport_name": ""
}, context)
```

#### Input
* input `object`
  * transport_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.transports.transport_name.json.put
Update the specified transport


```js
posty.api.v1.transports.transport_name.json.put({
  "transport_name": ""
}, context)
```

#### Input
* input `object`
  * transport_name **required** `string`

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
