# @datafire/vatapi

Client library for VAT API

## Installation and Usage
```bash
npm install --save @datafire/vatapi
```
```js
let vatapi = require('@datafire/vatapi').create({
  apikey: ""
});

.then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * Response-Type `string`: The default response type is application/json if you would like to receive an XML response then set this to XML
  * code **required** `string`: The 2 digit country code

#### Output
* output [Country_Code_Check](#country_code_check)

### currency_conversion
Convert a currency


```js
vatapi.currency_conversion({
  "currency_from": "",
  "currency_to": ""
}, context)
```

#### Input
* input `object`
  * Response-Type `string`: The default response type is application/json if you would like to receive an XML response then set this to XML
  * currency_from **required** `string`: The currency code you are converting from
  * currency_to **required** `string`: The currency code you are converting to
  * amount `integer`: Optional, an amount you are wanting to convert. Leave blank to just get the current rate

#### Output
* output [Currency_Conversion](#currency_conversion)

### create_invoice
Create a VAT invoice


```js
vatapi.create_invoice({
  "body": null
}, context)
```

#### Input
* input `object`
  * Response-Type `string`: The default response type is application/json if you would like to receive an XML response then set this to XML
  * body **required** [Invoice_Data](#invoice_data)

#### Output
* output [Create_Invoice](#create_invoice)

### invoice_delete
Delete an invoice


```js
vatapi.invoice_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * Response-Type `string`: The default response type is application/json if you would like to receive an XML response then set this to XML
  * id **required** `integer`: Enter an invoice id

#### Output
*Output schema unknown*

### get_invoice
Retrieve an invoice


```js
vatapi.get_invoice({
  "id": 0
}, context)
```

#### Input
* input `object`
  * Response-Type `string`: The default response type is application/json if you would like to receive an XML response then set this to XML
  * id **required** `integer`: Enter the invoice id

#### Output
* output [Retrieve_Invoice](#retrieve_invoice)

### invoice_update
Update an existing invoice


```js
vatapi.invoice_update({
  "id": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * Response-Type `string`: The default response type is application/json if you would like to receive an XML response then set this to XML
  * id **required** `integer`: Enter an invoice id
  * body **required** [Update_Invoice_Array](#update_invoice_array)

#### Output
* output [Update_Invoice](#update_invoice)

### ip_check
Retrieve a countries VAT rates from an IP address


```js
vatapi.ip_check({
  "address": ""
}, context)
```

#### Input
* input `object`
  * Response-Type `string`: The default response type is application/json if you would like to receive an XML response then set this to XML
  * address **required** `string`: The IP address to search against

#### Output
* output [IP_Check](#ip_check)

### api_usage
Check api requests remaining on current subscription plan


```js
vatapi.api_usage({}, context)
```

#### Input
* input `object`
  * Response-Type `string`: The default response type is application/json if you would like to receive an XML response then set this to XML

#### Output
* output [Api_Usage](#api_usage)

### vat_number_validate
<p>We highly recommend if you are able, to check a VAT number on your end first to save wasted API lookups. It maybe that your customer has simply entered the wrong format. <a href='http://www.braemoor.co.uk/software/vat.shtml' target='_blank'>Heres a client side way to check the format using Javascript</a></p>


```js
vatapi.vat_number_validate({
  "vatid": ""
}, context)
```

#### Input
* input `object`
  * Response-Type `string`: The default response type is application/json if you would like to receive an XML response then set this to XML
  * vatid **required** `string`: The VAT number to validate

#### Output
*Output schema unknown*

### convert_price
Convert a price to or from VAT price.


```js
vatapi.convert_price({
  "code": "",
  "price": 0
}, context)
```

#### Input
* input `object`
  * Response-Type `string`: The default response type is application/json if you would like to receive an XML response then set this to XML
  * code **required** `string`: The 2 digit country code
  * country_rate `string`: The VAT rate to get the price for. Default: standard
  * price **required** `integer`: The price you want converting
  * type `string`: Optional, if the price is including VAT set the type to 'incl'. Otherwise the default is assumed as excluding VAT already, 'excl'

#### Output
* output [Convert_Price](#convert_price)

### vat_rates
Retrieve all current EU VAT rates


```js
vatapi.vat_rates({}, context)
```

#### Input
* input `object`
  * Response-Type `string`: The default response type is application/json if you would like to receive an XML response then set this to XML

#### Output
* output [Vat_Rates](#vat_rates)



## Definitions

### Api_Usage
* Api_Usage `object`
  * requests_remaining **required** `integer`: The number of api requests remaining in the current billing period
  * requests_used **required** `integer`: The number of api requests consumed within the last 30 days
  * status **required** `integer`: Response code

### Convert_Price
* Convert_Price `object`
  * country_code **required** `string`: The 2 digit country code
  * country_rate **required** `string`: The country_rate
  * price_excl_vat **required** `integer`: The price excluding VAT
  * price_incl_vat **required** `integer`: The price including VAT
  * rate **required** `integer`: The rate % for the country_rate
  * status **required** `integer`: Response code
  * vat **required** `integer`: The total amount of VAT applied

### Country_Code_Check
* Country_Code_Check `object`
  * country **required** `string`: The country name
  * country_code **required** `string`: The 2 digit country code
  * rates **required** [Country_Rates](#country_rates)
  * status **required** `integer`: Response code
  * vat_applies **required** `string`: TRUE or FALSE, depending if country is within the EU.

### Country_Data
* Country_Data `object`
  * country **required** `string`: The country name
  * rates **required** [Country_Rates](#country_rates)

### Country_Rates
* Country_Rates `object`
  * parking **required** [parking](#parking)
  * reduced **required** [reduced](#reduced)
  * reduced_alt **required** [reduced_alt](#reduced_alt)
  * standard **required** [standard](#standard)
  * super_reduced **required** [super_reduced](#super_reduced)

### Create_Invoice
* Create_Invoice `object`
  * invoice **required** [Invoice_Array](#invoice_array)
  * status **required** `integer`: Response code

### Currency_Conversion
* Currency_Conversion `object`
  * amount_from `string`: The amount you are converting from
  * amount_to `string`: The result amount you have converted to
  * currency_from **required** `string`: The currency code you are converting from
  * currency_to **required** `integer`: The currency code you are converting to
  * rate **required** `string`: The rate according to HMRC at time of sale
  * status **required** `integer`: Response code

### IP_Check
* IP_Check `object`
  * country **required** `string`: The country name
  * country_code **required** `string`: The 2 digit country code
  * rates **required** [Country_Rates](#country_rates)
  * status **required** `integer`: Response code
  * vat_applies **required** `string`: TRUE or FALSE, depending if country is within the EU.

### Invoice_Array
* Invoice_Array `object`
  * business_address **required** `string`: Your business address
  * business_name **required** `string`: Your business name
  * conversion_rate `integer`: The rate of conversion at time of supply
  * currency_code **required** `string`: 3 character currency code for invoice
  * currency_code_conversion `string`: 3 character currency code to be converted from original transaction currency
  * customer_address `string`: Your customers address
  * customer_name `string`: Your customers name or trading name
  * customer_vat_number `string`: Customers VAT number
  * date **required** `string`: The date the invoice was issued
  * discount_rate `integer`: The discount rate per item
  * discount_total **required** `integer`: Total amount of discount
  * invoice_number **required** `integer`: A sequential invoice number
  * invoice_url **required** `string`: A perminant URL to your VAT invoice
  * items **required** `array`: An array of your invoice items
    * items [Invoice_Items](#invoice_items)
  * logo_url `string`: A URL to your logo image. Must be SSL hosted. https://sslimagehost.com is recommended
  * notes `string`: Any notes attached to the invoice
  * subtotal **required** `integer`: Total amount excluding VAT
  * tax_point **required** `string`: (or 'time of supply') if this is different from the invoice date
  * total **required** `integer`: Total amount of including VAT
  * type **required** `string`: The type of invoice. Either 'sale' or 'refund'
  * vat_number **required** `string`: Your VAT number
  * vat_total **required** `integer`: Total amount of VAT

### Invoice_Data
* Invoice_Data `object`
  * business_address **required** `string`: Your business address
  * business_name **required** `string`: Your business name
  * conversion_rate `integer`: The rate of conversion at time of supply
  * currency_code **required** `string`: 3 character currency code for invoice
  * currency_code_conversion `string`: 3 character currency code to be converted from original transaction currency
  * customer_address `string`: Your customers address
  * customer_name `string`: Your customers name or trading name
  * customer_vat_number `string`: Optional customers VAT number
  * date `string`: The date the invoice was issued
  * discount_rate `string`: The discount rate per item
  * items **required** `array`: An array of your invoice items
    * items [Invoice_Items](#invoice_items)
  * notes `string`: Add a note to the invoice.
  * price_type `string`: Optional, if the price is including VAT set the type to 'incl'. Otherwise the default is assumed as excluding VAT already, 'excl'
  * tax_point `string`: (or 'time of supply') if this is different from the invoice date
  * type **required** `string`: The type of invoice. Either 'sale' or 'refund'
  * vat_number **required** `string`: Your VAT number
  * zero_rated `string`: To Zero-Rate the VAT, set to true.

### Invoice_Items
* Invoice_Items `object`
  * description **required** `string`: The item line description
  * price_each **required** `integer`: The price of the individual item (Ex VAT)
  * quantity **required** `integer`: The quantity of the item
  * vat_rate **required** `integer`: The VAT rate at which the item is charged

### Retrieve_Invoice
* Retrieve_Invoice `object`
  * invoice **required** [Retrieve_Invoice_Array](#retrieve_invoice_array)
  * status **required** `string`: Response code

### Retrieve_Invoice_Array
* Retrieve_Invoice_Array `object`
  * business_address **required** `string`: Your business address
  * business_name **required** `string`: Your business name
  * conversion_rate `integer`: The rate of conversion at time of supply
  * currency_code **required** `string`: 3 character currency code for invoice
  * currency_code_conversion `string`: 3 character currency code to be converted from original transaction currency
  * customer_address `string`: Your customers address
  * customer_name `string`: Your customers name or trading name
  * customer_vat_number `string`: Optional, customers VAT number
  * date **required** `string`: The date the invoice was issued
  * discount_rate `integer`: The discount rate per item
  * discount_total **required** `integer`: Total amount of discount
  * id **required** `integer`: The invoice ID
  * invoice_url **required** `string`: A perminant URL to your VAT invoice
  * items **required** `array`: An array of your invoice items
    * items [Invoice_Items](#invoice_items)
  * logo_url `string`: A URL to your logo image. Must be SSL hosted. https://sslimagehost.com is recommended
  * notes `string`: Any notes attached to the invoice
  * price_type `string`: Optional, if the price is including VAT set the type to 'incl'. Otherwise the default is assumed as excluding VAT already, 'excl'
  * subtotal **required** `integer`: Total amount excluding VAT
  * tax_point **required** `string`: (or 'time of supply') if this is different from the invoice date
  * total **required** `integer`: Total amount of including VAT
  * type **required** `string`: The type of invoice. Either 'sale' or 'refund'
  * vat_number **required** `string`: Your VAT number
  * vat_total **required** `integer`: Total amount of VAT
  * zero_rated `string`: To Zero-Rate the VAT, set to true.

### Update_Invoice
* Update_Invoice `object`
  * invoice **required** [Retrieve_Invoice_Array](#retrieve_invoice_array)
  * status **required** `string`: Response code

### Update_Invoice_Array
* Update_Invoice_Array `object`
  * business_address **required** `string`: Your business address
  * business_name **required** `string`: Your business name
  * conversion_rate `integer`: The rate of conversion at time of supply
  * currency_code **required** `string`: 3 character currency code for invoice
  * currency_code_conversion `string`: 3 character currency code to be converted from original transaction currency
  * customer_address `string`: Your customers address
  * customer_name `string`: Your customers name or trading name
  * customervat_number **required** `string`: Customers VAT number
  * date `string`: The date the invoice was issued
  * discount_rate `string`: The discount rate per item
  * items **required** `array`: An array of your invoice items
    * items [Invoice_Items](#invoice_items)
  * logo_url `string`: A URL to your logo image. Must be SSL hosted. https://sslimagehost.com is recommended
  * notes `string`: Add a note to the invoice.
  * tax_point `string`: (or 'time of supply') if this is different from the invoice date
  * type **required** `string`: The type of invoice. Either 'sale' or 'refund'
  * vat_number `string`: Your VAT number

### Vat_Rates
* Vat_Rates `object`
  * countries **required** `array`: An array of the EU VAT countries and their respective rates
    * items [Vat_Rates_Countries](#vat_rates_countries)
  * status **required** `integer`: Response code

### Vat_Rates_Countries
* Vat_Rates_Countries `object`
  * country_code **required** [Country_Data](#country_data)

### parking
* parking `object`
  * applies_to **required** `string`: The type of goods the rate applies to
  * value **required** `integer`: The % VAT rate

### reduced
* reduced `object`
  * applies_to **required** `string`: The type of goods the rate applies to
  * value **required** `integer`: The % VAT rate

### reduced_alt
* reduced_alt `object`
  * applies_to **required** `string`: The type of goods the rate applies to
  * value **required** `integer`: The % VAT rate

### standard
* standard `object`
  * value **required** `integer`: The % VAT rate

### super_reduced
* super_reduced `object`
  * applies_to **required** `string`: The type of goods the rate applies to
  * value **required** `integer`: The % VAT rate


