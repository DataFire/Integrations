# @datafire/nativeads

Client library for Native Ads Publisher

## Installation and Usage
```bash
npm install --save datafire @datafire/nativeads
```

```js
let datafire = require('datafire');
let nativeads = require('@datafire/nativeads').actions;
let context = new datafire.Context();

nativeads.auth.default.login.post({}, context).then(data => {
  console.log(data);
})
```

## Description
This is a Native Ads Publisher API it provides same functionality as Native Ads Publisher Account GUI.


## Actions
### auth.default.login.post
Returns Native Ads Publisher API token


```js
nativeads.auth.default.login.post({
  "username": "",
  "password": ""
}, context)
```

#### Parameters
* username (string) **required** - Native Ads Publisher username
* password (string) **required** - Native Ads Publisher password

### publisher.reports.daily.get
Returns publisher statistics split by date


```js
nativeads.publisher.reports.daily.get({
  "token": "",
  "startDate": "",
  "endDate": "",
  "limit": 0,
  "page": 0
}, context)
```

#### Parameters
* token (string) **required** - Native Ads Publisher API authentication token
* startDate (string) **required** - start date in format YYYY-MM-DD
* endDate (string) **required** - end date in format YYYY-MM-DD
* limit (integer) **required** - maximum number of results per page
* page (integer) **required** - page number

### publisher.reports.website.get
Returns publisher statistics split by website


```js
nativeads.publisher.reports.website.get({
  "token": "",
  "startDate": "",
  "endDate": "",
  "limit": 0,
  "page": 0
}, context)
```

#### Parameters
* token (string) **required** - Native Ads Publisher API authentication token
* startDate (string) **required** - start date in format YYYY-MM-DD
* endDate (string) **required** - end date in format YYYY-MM-DD
* limit (integer) **required** - maximum number of results per page
* page (integer) **required** - page number

### publisher.reports.widget.get
Returns publisher statistics split by widget


```js
nativeads.publisher.reports.widget.get({
  "token": "",
  "startDate": "",
  "endDate": "",
  "limit": 0,
  "page": 0
}, context)
```

#### Parameters
* token (string) **required** - Native Ads Publisher API authentication token
* startDate (string) **required** - start date in format YYYY-MM-DD
* endDate (string) **required** - end date in format YYYY-MM-DD
* limit (integer) **required** - maximum number of results per page
* page (integer) **required** - page number

