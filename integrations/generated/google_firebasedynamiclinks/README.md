# @datafire/google_firebasedynamiclinks

Client library for Firebase Dynamic Links

## Installation and Usage
```bash
npm install --save datafire @datafire/google_firebasedynamiclinks
```

```js
let datafire = require('datafire');
let google_firebasedynamiclinks = require('@datafire/google_firebasedynamiclinks').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_firebasedynamiclinks: account,
  }
})


google_firebasedynamiclinks.shortLinks.create({}, context).then(data => {
  console.log(data);
})
```

## Description
Programmatically creates and manages Firebase Dynamic Links.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_firebasedynamiclinks.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_firebasedynamiclinks.oauthRefresh(null, context)
```


### shortLinks.create
Creates a short Dynamic Link given either a valid long Dynamic Link or
details such as Dynamic Link domain, Android and iOS app information.
The created short Dynamic Link will not expire.

Repeated calls with the same long Dynamic Link or Dynamic Link information
will produce the same short Dynamic Link.

The Dynamic Link domain in the request must be owned by requester's
Firebase project.


```js
google_firebasedynamiclinks.shortLinks.create({}, context)
```


