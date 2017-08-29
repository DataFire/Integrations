# @datafire/groupon

Client library for Groupon API2

## Installation and Usage
```bash
npm install --save datafire @datafire/groupon
```

```js
let datafire = require('datafire');
let groupon = require('@datafire/groupon').create();

groupon.status.format.get({}).then(data => {
  console.log(data);
})
```

## Description
Put all those great ideas for Groupon improvements, extensions, and multiple-platform interfaces to work.

## Actions
### status.format.get
Returns the status of Groupon's API and all the currently available versions of the API.


```js
groupon.status.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required**
* client_id (string)
* device_id (string)
* user_agent (string)

### divisions.format.get
Returns the list of all launched divisions.


```js
groupon.divisions.format.get({
  "format": "",
  "client_id": "",
  "show": ""
}, context)
```

#### Parameters
* format (string) **required**
* client_id (string) **required**
* show (string) **required**

### groupon_says.format.get
Returns the list of recent (or random) Groupon Says commentaries.


```js
groupon.groupon_says.format.get({
  "format": "",
  "client_id": "",
  "limit": ""
}, context)
```

#### Parameters
* format (string) **required**
* client_id (string) **required**
* limit (string) **required**
* random (string)

### deals.id.format.get
Returns the detailed information about a specified deal.


```js
groupon.deals.id.format.get({
  "id": "",
  "format": "",
  "client_id": "",
  "show": ""
}, context)
```

#### Parameters
* id (string) **required**
* format (string) **required**
* client_id (string) **required**
* show (string) **required**
* email_address (string)
* area (string)
* referral_id (string)

### deals.format.get
Returns an ordered list of deals that are currently launched for a specific division.


```js
groupon.deals.format.get({
  "format": "",
  "client_id": "",
  "show": ""
}, context)
```

#### Parameters
* format (string) **required**
* client_id (string) **required**
* show (string) **required**
* email_address (string)
* area (string)
* lat (string)
* lng (string)
* radius (string)
* division_id (string)
* device_token (string)
* subscriber_id  (string)
* affiliate (string)

### deals.deal_id.posts.format.get
Returns the lists of all the discussion posts for the specified deal.


```js
groupon.deals.deal_id.posts.format.get({
  "format": "",
  "client_id": "",
  "deal_id": ""
}, context)
```

#### Parameters
* format (string) **required**
* client_id (string) **required**
* deal_id (string) **required**

