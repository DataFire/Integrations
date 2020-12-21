# @datafire/linkedin

Client library for LinkedIn

## Installation and Usage
```bash
npm install --save @datafire/linkedin
```
```js
let linkedin = require('@datafire/linkedin').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Bring user profiles and professional networks to your apps.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
linkedin.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
linkedin.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### companies.id.updates.key_update_key.update_comments_as_company.post



```js
linkedin.companies.id.updates.key_update_key.update_comments_as_company.post({
  "id": "",
  "update-key": "",
  "Content-Type": "",
  "x-li-format": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique internal numeric company identifier.
  * update-key **required** `string`: The unique company update identifier.
  * Content-Type **required** `string`: The content type.
  * x-li-format **required** `string`: The content type.

#### Output
*Output schema unknown*

### people._.get



```js
linkedin.people._.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Some members have profiles in multiple languages. To specify the language you prefer, set the values to a comma separated list of locales ordered from highest to lowest preference. For example, if your preferred order is Spanish, then English (American), and finally Italian, your header should be: Accept-Language: es-ES, en-US, it-IT. At present, we will always return data if possible. So, if you specify just one locale, but the member hasn't localized her profile for that locale, we will return data in her primary language. We support any language the member has specified. For example, for Simplified Chinese, use zh-CN. However, the six most popular languages are: en-US, fr-FR, de-DE, it-IT, pt-BR and es-ES.
  * format `string`

#### Output
*Output schema unknown*

### people._id_num_connections_picture_url_.get



```js
linkedin.people._id_num_connections_picture_url_.get({}, context)
```

#### Input
* input `object`
  * format `string`

#### Output
*Output schema unknown*

### people._.shares.post



```js
linkedin.people._.shares.post({
  "Content-Type": "",
  "x-li-format": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`: The content type.
  * x-li-format **required** `string`: The content type.
  * format `string`

#### Output
*Output schema unknown*

### companies.id.is_company_share_enabled.get



```js
linkedin.companies.id.is_company_share_enabled.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique internal numeric company identifier.
  * format `string`

#### Output
*Output schema unknown*

### companies.id.relation_to_viewer.is_company_share_enabled.get



```js
linkedin.companies.id.relation_to_viewer.is_company_share_enabled.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique internal numeric company identifier.
  * format `string`

#### Output
*Output schema unknown*

### companies.get



```js
linkedin.companies.get({}, context)
```

#### Input
* input `object`
  * start `integer`: The offset value for paginating company results by.
  * count `integer`: Maximum number of companies to return.
  * format `string`

#### Output
*Output schema unknown*

### companies.id.get



```js
linkedin.companies.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique internal numeric company identifier.
  * format `string`

#### Output
*Output schema unknown*

### companies.id_id_name_ticker_description_.get



```js
linkedin.companies.id_id_name_ticker_description_.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique internal numeric company identifier.
  * format `string`

#### Output
*Output schema unknown*

### companies.id.updates.get



```js
linkedin.companies.id.updates.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique internal numeric company identifier.
  * event-type `integer`: The offset value for paginating update results by.
  * start `integer`: The offset value for paginating update results by.
  * count `integer`: Maximum number of updates to return.
  * format `string`

#### Output
*Output schema unknown*

### companies.id.updates.key_update_key.get



```js
linkedin.companies.id.updates.key_update_key.get({
  "id": "",
  "update-key": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique internal numeric company identifier.
  * update-key **required** `string`: The unique company update identifier.
  * format `string`

#### Output
*Output schema unknown*

### companies.id.updates.key_update_key.update_comments.get



```js
linkedin.companies.id.updates.key_update_key.update_comments.get({
  "id": "",
  "update-key": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique internal numeric company identifier.
  * update-key **required** `string`: The unique company update identifier.
  * format `string`

#### Output
*Output schema unknown*

### companies.id.updates.key_update_key.likes.get



```js
linkedin.companies.id.updates.key_update_key.likes.get({
  "id": "",
  "update-key": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique internal numeric company identifier.
  * update-key **required** `string`: The unique company update identifier.
  * format `string`

#### Output
*Output schema unknown*

### companies.id.shares.post



```js
linkedin.companies.id.shares.post({
  "id": "",
  "Content-Type": "",
  "x-li-format": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique internal numeric company identifier.
  * Content-Type **required** `string`: The content type.
  * x-li-format **required** `string`: The content type.
  * format `string`

#### Output
*Output schema unknown*

### companies.id.num_followers.get



```js
linkedin.companies.id.num_followers.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique internal numeric company identifier.
  * geos `string`: Segment by a particular geographic area.
  * companySizes `string`: Segment by a particular company size targeting code.
  * jobFunc `string`: Segment by member job function targeting code.
  * industries `string`: Segment by member industry.
  * seniorities `string`: Segment by member seniority level targeting code.
  * format `string`

#### Output
*Output schema unknown*

### companies.id.historical_follow_statistics.get



```js
linkedin.companies.id.historical_follow_statistics.get({
  "id": "",
  "time-granularity": "",
  "start-timestamp": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique internal numeric company identifier.
  * time-granularity **required** `string`: Granularity of statistics. Supported values are:
  * start-timestamp **required** `string`: Starting timestamp of when the stats search should begin (milliseconds since epoch)
  * end-timestamp `string`: Ending timestamp of when the stats search should end (milliseconds since epoch). The current time will be used if parameter not set.
  * format `string`

#### Output
*Output schema unknown*

### companies.id.historical_status_update_statistics.get



```js
linkedin.companies.id.historical_status_update_statistics.get({
  "id": "",
  "time-granularity": "",
  "start-timestamp": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique internal numeric company identifier.
  * time-granularity **required** `string`: Granularity of statistics. Supported values are:
  * start-timestamp **required** `string`: Starting timestamp of when the stats search should begin (milliseconds since epoch)
  * end-timestamp `string`: Ending timestamp of when the stats search should end (milliseconds since epoch). The current time will be used if parameter not set.
  * update-key `string`: Optionally provide an update key value to return statistics for a specific company update.
  * format `string`

#### Output
*Output schema unknown*

### companies.id.company_statistics.get



```js
linkedin.companies.id.company_statistics.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique internal numeric company identifier.
  * format `string`

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
