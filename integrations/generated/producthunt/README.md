# @datafire/producthunt

Client library for Product Hunt

## Installation and Usage
```bash
npm install --save datafire @datafire/producthunt
```

```js
let datafire = require('datafire');
let producthunt = require('@datafire/producthunt').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    producthunt: account,
  }
})


producthunt.categories.category.posts.get({}, context).then(data => {
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


### users.username.get



```js
producthunt.users.username.get({}, context)
```


### categories.category.posts.get



```js
producthunt.categories.category.posts.get({}, context)
```


