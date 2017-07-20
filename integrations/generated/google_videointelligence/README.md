# @datafire/google_videointelligence

Client library for Google Cloud Video Intelligence

## Installation and Usage
```bash
npm install --save datafire @datafire/google_videointelligence
```

```js
let datafire = require('datafire');
let google_videointelligence = require('@datafire/google_videointelligence').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_videointelligence: account,
  }
})


google_videointelligence.videos.annotate({}, context).then(data => {
  console.log(data);
})
```

## Description
Google Cloud Video Intelligence API.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_videointelligence.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_videointelligence.oauthRefresh(null, context)
```


### videos.annotate
Performs asynchronous video annotation. Progress and results can be
retrieved through the `google.longrunning.Operations` interface.
`Operation.metadata` contains `AnnotateVideoProgress` (progress).
`Operation.response` contains `AnnotateVideoResponse` (results).


```js
google_videointelligence.videos.annotate({}, context)
```


