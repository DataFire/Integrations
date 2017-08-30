# @datafire/producthunt

Client library for Product Hunt

## Installation and Usage
```bash
npm install --save datafire @datafire/producthunt
```

```js
let datafire = require('datafire');
let producthunt = require('@datafire/producthunt').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
producthunt.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### users.username.get



```js
producthunt.users.username.get({}, context)
```

#### Parameters
* username (string)

### categories.category.posts.get



```js
producthunt.categories.category.posts.get({}, context)
```

#### Parameters
* category (string)
* days_ago (string)

