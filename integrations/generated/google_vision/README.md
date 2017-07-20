# @datafire/google_vision

Client library for Google Cloud Vision

## Installation and Usage
```bash
npm install --save datafire @datafire/google_vision
```

```js
let datafire = require('datafire');
let google_vision = require('@datafire/google_vision').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_vision: account,
  }
})


google_vision.images.annotate({}, context).then(data => {
  console.log(data);
})
```

## Description
Integrates Google Vision features, including image labeling, face, logo, and landmark detection, optical character recognition (OCR), and detection of explicit content, into applications.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_vision.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_vision.oauthRefresh(null, context)
```


### images.annotate
Run image detection and annotation for a batch of images.


```js
google_vision.images.annotate({}, context)
```


