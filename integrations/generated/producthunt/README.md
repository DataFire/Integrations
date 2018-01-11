# @datafire/producthunt

Client library for Product Hunt

## Installation and Usage
```bash
npm install --save @datafire/producthunt
```
```js
let producthunt = require('@datafire/producthunt').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

producthunt.categories.category.posts.get({}).then(data => {
  console.log(data);
})
```

## Description



## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
producthunt.oauthCallback({
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
producthunt.oauthRefresh(null, context)
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

### users.username.get



```js
producthunt.users.username.get({}, context)
```

#### Input
* input `object`
  * username `string`

#### Output
*Output schema unknown*

### categories.category.posts.get



```js
producthunt.categories.category.posts.get({}, context)
```

#### Input
* input `object`
  * category `string`
  * days_ago `string`

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
