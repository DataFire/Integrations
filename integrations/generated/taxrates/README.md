# @datafire/taxrates

Client library for Taxrates.io

## Installation and Usage
```bash
npm install --save @datafire/taxrates
```
```js
let taxrates = require('@datafire/taxrates').create({
  Bearer: ""
});

taxrates.tax.byaddress.post({
  "domain": "",
  "address": {}
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * domain **required** `string`: Domain name: api.taxrates.io
  * token **required** `string`: The token you got from <<token>> endpoint
  * clientscope **required** `string`: You have to use api_member as a scope.

#### Output
* output `object`
  * Authorization `string`: Bearer: __Your authorization key will appear here__

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

#### Input
* input `object`
  * domain **required** `string`: Domain name: api.taxrates.io
  * clientid **required** `string`: Your Client ID goes here. Check the dashboard if you do not know your Client ID.
  * clientsecret **required** `string`: Your Client Secret key goes here. Check the dashboard if you do not know your Client Secret key.
  * clientscope **required** `string`: You have to use api_member as a scope.

#### Output
* output `object`
  * clientid `string`: Your Client ID key
  * domain `string`: The domain you are operating
  * token `string`: Your token
  * valid_to `string`: The date until your token is valid

### tax.byaddress.post
This endpoint returns tax rates for the country based on the address provided


```js
taxrates.tax.byaddress.post({
  "domain": "",
  "address": {}
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: Domain name: api.taxrates.io
  * address **required** [Address](#address)
  * filter `string`: You can filter your taxes by one of following types: 'standard', 'reduced', 'second reduced', 'third reduced' and 'super reduced'.

#### Output
* output [Rates](#rates)

### tax.countrycode.get
This endpoint returns all available tax rates for selected country


```js
taxrates.tax.countrycode.get({
  "domain": "",
  "country_code": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: Domain name: api.taxrates.io
  * country_code **required** `string`: Country code alpha 2
  * filter `string`: You can filter your taxes by one of following types: 'standard', 'reduced', 'second reduced', 'third reduced' and 'super reduced'.

#### Output
* output [Rates](#rates)

### tax.ip.get
This endpoint will return tax rates for country discovered based on Customer's IP address


```js
taxrates.tax.ip.get({
  "domain": "",
  "ip": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: Domain name: api.taxrates.io
  * ip **required** `string`: Customer's IP address
  * filter `string`: You can filter your taxes by one of following types: 'standard', 'reduced', 'second reduced', 'third reduced' and 'super reduced'.

#### Output
* output `array`
  * items [Rates](#rates)

### tax.rates.get
This method returns all tax rates configured on Member's account


```js
taxrates.tax.rates.get({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: Domain name: api.taxrates.io
  * filter `string`: You can filter your taxes by one of following types: 'standard', 'reduced', 'second reduced', 'third reduced' and 'super reduced'.

#### Output
* output `array`
  * items [Rates](#rates)



## Definitions

### Address
* Address `object`
  * apartment_number `string`: Apartment number if any
  * city `string`: City name
  * country `string`: Country name
  * postal_code `string`: City zip code
  * state `string`: Province or state
  * street `string`: Street
  * street_number `string`: Street number

### Error
* Error `object`
  * code `integer`
  * fields `string`
  * message `string`

### Rates
* Rates `object`
  * country_name `string`: The country name
  * taxes `array`
    * items [Tax](#tax)

### Tax
* Tax `object`
  * Country `string`: The country name
  * Type `string`: The tax type
  * data_name `string`: The tax name and description (VAT, GST, PIT, CIT etc)
  * data_value `string`: The tax value in percents


