# @datafire/linkedin

Client library for LinkedIn

## Installation and Usage
```bash
npm install --save datafire @datafire/linkedin
```

```js
let datafire = require('datafire');
let linkedin = require('@datafire/linkedin').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    linkedin: account,
  }
})


linkedin.companies.get({}, context).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
linkedin.oauthRefresh(null, context)
```


### companies.id.updates.key_update_key.update_comments_as_company.post



```js
linkedin.companies.id.updates.key_update_key.update_comments_as_company.post({
  "id": "",
  "update-key": "",
  "Content-Type": "",
  "x-li-format": ""
}, context)
```

#### Parameters
* id (string) **required** - The unique internal numeric company identifier.
* update-key (string) **required** - The unique company update identifier.
* Content-Type (string) **required** - The content type.
* x-li-format (string) **required** - The content type.

### people._.get



```js
linkedin.people._.get({}, context)
```


### people._id_num_connections_picture_url_.get



```js
linkedin.people._id_num_connections_picture_url_.get({}, context)
```


### people._.shares.post



```js
linkedin.people._.shares.post({
  "Content-Type": "",
  "x-li-format": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - The content type.
* x-li-format (string) **required** - The content type.
* format (string)

### companies.id.is_company_share_enabled.get



```js
linkedin.companies.id.is_company_share_enabled.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The unique internal numeric company identifier.
* format (string)

### companies.id.relation_to_viewer.is_company_share_enabled.get



```js
linkedin.companies.id.relation_to_viewer.is_company_share_enabled.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The unique internal numeric company identifier.
* format (string)

### companies.get



```js
linkedin.companies.get({}, context)
```


### companies.id.get



```js
linkedin.companies.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The unique internal numeric company identifier.
* format (string)

### companies.id_id_name_ticker_description_.get



```js
linkedin.companies.id_id_name_ticker_description_.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The unique internal numeric company identifier.
* format (string)

### companies.id.updates.get



```js
linkedin.companies.id.updates.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The unique internal numeric company identifier.
* event-type (integer) - The offset value for paginating update results by.
* start (integer) - The offset value for paginating update results by.
* count (integer) - Maximum number of updates to return.
* format (string)

### companies.id.updates.key_update_key.get



```js
linkedin.companies.id.updates.key_update_key.get({
  "id": "",
  "update-key": ""
}, context)
```

#### Parameters
* id (string) **required** - The unique internal numeric company identifier.
* update-key (string) **required** - The unique company update identifier.
* format (string)

### companies.id.updates.key_update_key.update_comments.get



```js
linkedin.companies.id.updates.key_update_key.update_comments.get({
  "id": "",
  "update-key": ""
}, context)
```

#### Parameters
* id (string) **required** - The unique internal numeric company identifier.
* update-key (string) **required** - The unique company update identifier.
* format (string)

### companies.id.updates.key_update_key.likes.get



```js
linkedin.companies.id.updates.key_update_key.likes.get({
  "id": "",
  "update-key": ""
}, context)
```

#### Parameters
* id (string) **required** - The unique internal numeric company identifier.
* update-key (string) **required** - The unique company update identifier.
* format (string)

### companies.id.shares.post



```js
linkedin.companies.id.shares.post({
  "id": "",
  "Content-Type": "",
  "x-li-format": ""
}, context)
```

#### Parameters
* id (string) **required** - The unique internal numeric company identifier.
* Content-Type (string) **required** - The content type.
* x-li-format (string) **required** - The content type.
* format (string)

### companies.id.num_followers.get



```js
linkedin.companies.id.num_followers.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The unique internal numeric company identifier.
* geos (string) - Segment by a particular geographic area.
* companySizes (string) - Segment by a particular company size targeting code.
* jobFunc (string) - Segment by member job function targeting code.
* industries (string) - Segment by member industry.
* seniorities (string) - Segment by member seniority level targeting code.
* format (string)

### companies.id.historical_follow_statistics.get



```js
linkedin.companies.id.historical_follow_statistics.get({
  "id": "",
  "time-granularity": "",
  "start-timestamp": ""
}, context)
```

#### Parameters
* id (string) **required** - The unique internal numeric company identifier.
* time-granularity (string) **required** - Granularity of statistics. Supported values are:
* start-timestamp (string) **required** - Starting timestamp of when the stats search should begin (milliseconds since epoch)
* end-timestamp (string) - Ending timestamp of when the stats search should end (milliseconds since epoch). The current time will be used if parameter not set.
* format (string)

### companies.id.historical_status_update_statistics.get



```js
linkedin.companies.id.historical_status_update_statistics.get({
  "id": "",
  "time-granularity": "",
  "start-timestamp": ""
}, context)
```

#### Parameters
* id (string) **required** - The unique internal numeric company identifier.
* time-granularity (string) **required** - Granularity of statistics. Supported values are:
* start-timestamp (string) **required** - Starting timestamp of when the stats search should begin (milliseconds since epoch)
* end-timestamp (string) - Ending timestamp of when the stats search should end (milliseconds since epoch). The current time will be used if parameter not set.
* update-key (string) - Optionally provide an update key value to return statistics for a specific company update.
* format (string)

### companies.id.company_statistics.get



```js
linkedin.companies.id.company_statistics.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The unique internal numeric company identifier.
* format (string)

