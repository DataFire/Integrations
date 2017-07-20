# @datafire/google_oauth2

Client library for Google OAuth2

## Installation and Usage
```bash
npm install --save datafire @datafire/google_oauth2
```

```js
let datafire = require('datafire');
let google_oauth2 = require('@datafire/google_oauth2').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_oauth2: account,
  }
})


google_oauth2.userinfo.v2.me.get({}, context).then(data => {
  console.log(data);
})
```

## Description
Obtains end-user authorization grants for use with other Google APIs.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_oauth2.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_oauth2.oauthRefresh(null, context)
```


### getCertForOpenIdConnect



```js
google_oauth2.getCertForOpenIdConnect({}, context)
```


### tokeninfo



```js
google_oauth2.tokeninfo({}, context)
```


### userinfo.get



```js
google_oauth2.userinfo.get({}, context)
```


### userinfo.v2.me.get



```js
google_oauth2.userinfo.v2.me.get({}, context)
```


