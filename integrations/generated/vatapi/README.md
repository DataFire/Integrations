# @datafire/vatapi

Client library for VAT API

## Installation and Usage
```bash
npm install --save datafire @datafire/vatapi
```

```js
let datafire = require('datafire');
let vatapi = require('@datafire/vatapi').actions;

let account = {
  apikey: "",
}
let context = new datafire.Context({
  accounts: {
    vatapi: account,
  }
})

vatapi.vat_rates({}, context).then(data => {
  console.log(data);
})
```

## Description
A developer friendly API to help your business achieve VAT compliance

## Actions
### country_code_check
Retrieve a countries VAT rates by its 2 digit country code


```js
vatapi.country_code_check({
  "code": ""
}, context)
```

#### Parameters
* Response-Type (string) - The default response type is application/json if you would like to receive an XML response then set this to XML
* code (string) **required** - The 2 digit country code

### currency_conversion
Convert a currency


```js
vatapi.currency_conversion({
  "currency_from": "",
  "currency_to": ""
}, context)
```

#### Parameters
* Response-Type (string) - The default response type is application/json if you would like to receive an XML response then set this to XML
* currency_from (string) **required** - The currency code you are converting from
* currency_to (string) **required** - The currency code you are converting to
* amount (integer) - Optional, an amount you are wanting to convert. Leave blank to just get the current rate

### create_invoice
Create a VAT invoice


```js
vatapi.create_invoice({
  "body": null
}, context)
```

#### Parameters
* Response-Type (string) - The default response type is application/json if you would like to receive an XML response then set this to XML
* body (undefined) **required**

### invoice_delete
Delete an invoice


```js
vatapi.invoice_delete({
  "id": 0
}, context)
```

#### Parameters
* Response-Type (string) - The default response type is application/json if you would like to receive an XML response then set this to XML
* id (integer) **required** - Enter an invoice id

### get_invoice
Retrieve an invoice


```js
vatapi.get_invoice({
  "id": 0
}, context)
```

#### Parameters
* Response-Type (string) - The default response type is application/json if you would like to receive an XML response then set this to XML
* id (integer) **required** - Enter the invoice id

### invoice_update
Update an existing invoice


```js
vatapi.invoice_update({
  "id": 0,
  "body": null
}, context)
```

#### Parameters
* Response-Type (string) - The default response type is application/json if you would like to receive an XML response then set this to XML
* id (integer) **required** - Enter an invoice id
* body (undefined) **required**

### ip_check
Retrieve a countries VAT rates from an IP address


```js
vatapi.ip_check({
  "address": ""
}, context)
```

#### Parameters
* Response-Type (string) - The default response type is application/json if you would like to receive an XML response then set this to XML
* address (string) **required** - The IP address to search against

### vat_number_validate
<p>We highly recommend if you are able, to check a VAT number on your end first to save wasted API lookups. It maybe that your customer has simply entered the wrong format. <a href='http://www.braemoor.co.uk/software/vat.shtml' target='_blank'>Heres a client side way to check the format using Javascript</a></p>


```js
vatapi.vat_number_validate({
  "vatid": ""
}, context)
```

#### Parameters
* Response-Type (string) - The default response type is application/json if you would like to receive an XML response then set this to XML
* vatid (string) **required** - The VAT number to validate

### convert_price
Convert a price to or from VAT price.


```js
vatapi.convert_price({
  "code": "",
  "price": 0
}, context)
```

#### Parameters
* Response-Type (string) - The default response type is application/json if you would like to receive an XML response then set this to XML
* code (string) **required** - The 2 digit country code
* country_rate (string) - The VAT rate to get the price for. Default: standard
* price (integer) **required** - The price you want converting
* type (string) - Optional, if the price is including VAT set the type to 'incl'. Otherwise the default is assumed as excluding VAT already, 'excl'

### vat_rates
Retrieve all current EU VAT rates


```js
vatapi.vat_rates({}, context)
```

#### Parameters
* Response-Type (string) - The default response type is application/json if you would like to receive an XML response then set this to XML

