# @datafire/taxrates

Client library for Taxrates.io

## Installation and Usage
```bash
npm install --save datafire @datafire/taxrates
```

```js
let datafire = require('datafire');
let taxrates = require('@datafire/taxrates').create({
  Bearer: "",
});

taxrates.tax.byaddress.post({}).then(data => {
  console.log(data);
})
```

## Description
Taxrates.io API - the successfully streamlined tax rates monitoring process. Use 'Expand operation' link on the right to see details. Start with authentication: get your token and generate authorization string. We recommend using <a href='https://www.getpostman.com/' target=_new>Postman</a> when discovering our API. Happy using!

## Actions
### oauth.dialog.get
This is the second endpoint you have to hit. When you got your token here you can generate your Bearer authorization header. The header will be used to authorize every API call.


```js
taxrates.oauth.dialog.get({
  "domain": "",
  "token": "",
  "clientscope": ""
}, context)
```

#### Parameters
* domain (string) **required** - Domain name: api.taxrates.io
* token (string) **required** - The token you got from <<token>> endpoint
* clientscope (string) **required** - You have to use api_member as a scope.

### oauth.token.get
This the very first URL you must hit when you want to use taxrates.io API. When you got your Client ID key and Client Secret key you are able to use our API resources.


```js
taxrates.oauth.token.get({
  "domain": "",
  "clientid": "",
  "clientsecret": "",
  "clientscope": ""
}, context)
```

#### Parameters
* domain (string) **required** - Domain name: api.taxrates.io
* clientid (string) **required** - Your Client ID goes here. Check the dashboard if you do not know your Client ID.
* clientsecret (string) **required** - Your Client Secret key goes here. Check the dashboard if you do not know your Client Secret key.
* clientscope (string) **required** - You have to use api_member as a scope.

### tax.byaddress.post
This endpoint returns tax rates for the country based on the address provided


```js
taxrates.tax.byaddress.post({
  "domain": "",
  "address": {}
}, context)
```

#### Parameters
* domain (string) **required** - Domain name: api.taxrates.io
* address (object) **required**
* filter (string) - You can filter your taxes by one of following types: 'standard', 'reduced', 'second reduced', 'third reduced' and 'super reduced'.

### tax.countrycode.get
This endpoint returns all available tax rates for selected country


```js
taxrates.tax.countrycode.get({
  "domain": "",
  "country_code": ""
}, context)
```

#### Parameters
* domain (string) **required** - Domain name: api.taxrates.io
* country_code (string) **required** - Country code alpha 2
* filter (string) - You can filter your taxes by one of following types: 'standard', 'reduced', 'second reduced', 'third reduced' and 'super reduced'.

### tax.ip.get
This endpoint will return tax rates for country discovered based on Customer's IP address


```js
taxrates.tax.ip.get({
  "domain": "",
  "ip": ""
}, context)
```

#### Parameters
* domain (string) **required** - Domain name: api.taxrates.io
* ip (string) **required** - Customer's IP address
* filter (string) - You can filter your taxes by one of following types: 'standard', 'reduced', 'second reduced', 'third reduced' and 'super reduced'.

### tax.rates.get
This method returns all tax rates configured on Member's account


```js
taxrates.tax.rates.get({
  "domain": ""
}, context)
```

#### Parameters
* domain (string) **required** - Domain name: api.taxrates.io
* filter (string) - You can filter your taxes by one of following types: 'standard', 'reduced', 'second reduced', 'third reduced' and 'super reduced'.

