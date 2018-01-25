# @datafire/nativeads

Client library for Native Ads Publisher

## Installation and Usage
```bash
npm install --save @datafire/nativeads
```
```js
let nativeads = require('@datafire/nativeads').create();

nativeads.auth.default.login.post({
  "username": "",
  "password": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * username **required** `string`: Native Ads Publisher username
  * password **required** `string`: Native Ads Publisher password

#### Output
* output [authResponse](#authresponse)

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

#### Input
* input `object`
  * token **required** `string`: Native Ads Publisher API authentication token
  * startDate **required** `string`: start date in format YYYY-MM-DD
  * endDate **required** `string`: end date in format YYYY-MM-DD
  * limit **required** `integer`: maximum number of results per page
  * page **required** `integer`: page number

#### Output
* output [reportsDailyResponse](#reportsdailyresponse)

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

#### Input
* input `object`
  * token **required** `string`: Native Ads Publisher API authentication token
  * startDate **required** `string`: start date in format YYYY-MM-DD
  * endDate **required** `string`: end date in format YYYY-MM-DD
  * limit **required** `integer`: maximum number of results per page
  * page **required** `integer`: page number

#### Output
* output [reportsWebsiteResponse](#reportswebsiteresponse)

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

#### Input
* input `object`
  * token **required** `string`: Native Ads Publisher API authentication token
  * startDate **required** `string`: start date in format YYYY-MM-DD
  * endDate **required** `string`: end date in format YYYY-MM-DD
  * limit **required** `integer`: maximum number of results per page
  * page **required** `integer`: page number

#### Output
* output [reportsWidgetResponse](#reportswidgetresponse)



## Definitions

### authResponse
* authResponse `object`
  * success `boolean`
  * token `string`

### modelError
* modelError `object`
  * errors `array`
    * items `string`
  * success `boolean`

### reportsDailyItem
* reportsDailyItem `object`
  * clicks `string`
  * cpc `string`
  * ctr `string`
  * date `string`
  * earnings `string`
  * impressions `string`
  * net_ecpm `string`
  * rpm `string`

### reportsDailyResponse
* reportsDailyResponse `object`
  * items `array`
    * items [reportsDailyItem](#reportsdailyitem)
  * success `boolean`
  * total_count `integer`
  * totals [totals](#totals)

### reportsWebsiteItem
* reportsWebsiteItem `object`
  * clicks `string`
  * cpc `string`
  * ctr `string`
  * date `string`
  * earnings `string`
  * impressions `string`
  * net_ecpm `string`
  * rpm `string`

### reportsWebsiteResponse
* reportsWebsiteResponse `object`
  * items `array`
    * items [reportsWebsiteItem](#reportswebsiteitem)
  * success `boolean`
  * total_count `integer`
  * totals [totals](#totals)

### reportsWidgetItem
* reportsWidgetItem `object`
  * campaign `string`: widget name
  * campaign_id `string`: widget id
  * clicks `string`
  * cpc `string`
  * ctr `string`
  * earnings `string`
  * impressions `string`
  * net_ecpm `string`
  * rpm `string`

### reportsWidgetResponse
* reportsWidgetResponse `object`
  * items `array`
    * items [reportsWidgetItem](#reportswidgetitem)
  * success `boolean`
  * total_count `integer`
  * totals [totals](#totals)

### totals
* totals `object`
  * total_clicks `string`
  * total_cpc `string`
  * total_ctr `string`
  * total_earnings `string`
  * total_impressions `string`
  * total_net_ecpm `string`
  * total_rpm `string`


