# @datafire/google_appsactivity

Client library for G Suite Activity

## Installation and Usage
```bash
npm install --save datafire @datafire/google_appsactivity
```

```js
let datafire = require('datafire');
let google_appsactivity = require('@datafire/google_appsactivity').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_appsactivity: account,
  }
})


google_appsactivity.activities.list({}, context).then(data => {
  console.log(data);
})
```

## Description
Provides a historical view of activity.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_appsactivity.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_appsactivity.oauthRefresh(null, context)
```


### activities.list
Returns a list of activities visible to the current logged in user. Visible activities are determined by the visiblity settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.


```js
google_appsactivity.activities.list({}, context)
```


