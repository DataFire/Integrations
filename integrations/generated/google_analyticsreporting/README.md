# @datafire/google_analyticsreporting

Client library for Google Analytics Reporting

## Installation and Usage
```bash
npm install --save datafire @datafire/google_analyticsreporting
```

```js
let datafire = require('datafire');
let google_analyticsreporting = require('@datafire/google_analyticsreporting').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_analyticsreporting: account,
  }
})


google_analyticsreporting.reports.batchGet({}, context).then(data => {
  console.log(data);
})
```

## Description
Accesses Analytics report data.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_analyticsreporting.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_analyticsreporting.oauthRefresh(null, context)
```


### reports.batchGet
Returns the Analytics data.


```js
google_analyticsreporting.reports.batchGet({}, context)
```


