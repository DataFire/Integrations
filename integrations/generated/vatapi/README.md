# @datafire/vatapi
A developer friendly API to help your business achieve VAT compliance

## Operation: country_code_check
Retrieve a countries VAT rates by its 2 digit country code

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Response-Type": {
      "type": "string",
      "description": "The default response type is application/json if you would like to receive an XML response then set this to XML"
    },
    "code": {
      "type": "string",
      "description": "The 2 digit country code"
    }
  },
  "additionalProperties": false,
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Country_Code_Check"
}
```
## Operation: currency_conversion
Convert a currency

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Response-Type": {
      "type": "string",
      "description": "The default response type is application/json if you would like to receive an XML response then set this to XML"
    },
    "currency_from": {
      "type": "string",
      "description": "The currency code you are converting from"
    },
    "currency_to": {
      "type": "string",
      "description": "The currency code you are converting to"
    },
    "amount": {
      "type": "integer",
      "description": "Optional, an amount you are wanting to convert. Leave blank to just get the current rate"
    }
  },
  "additionalProperties": false,
  "required": [
    "currency_from",
    "currency_to"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Currency_Conversion"
}
```
## Operation: create_invoice
Create a VAT invoice

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Response-Type": {
      "type": "string",
      "description": "The default response type is application/json if you would like to receive an XML response then set this to XML"
    },
    "body": {
      "$ref": "#/definitions/Invoice_Data"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Create_Invoice"
}
```
## Operation: invoice_delete
Delete an invoice

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Response-Type": {
      "type": "string",
      "description": "The default response type is application/json if you would like to receive an XML response then set this to XML"
    },
    "id": {
      "type": "integer",
      "description": "Enter an invoice id"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: get_invoice
Retrieve an invoice

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Response-Type": {
      "type": "string",
      "description": "The default response type is application/json if you would like to receive an XML response then set this to XML"
    },
    "id": {
      "type": "integer",
      "description": "Enter the invoice id"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Retrieve_Invoice"
}
```
## Operation: invoice_update
Update an existing invoice

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Response-Type": {
      "type": "string",
      "description": "The default response type is application/json if you would like to receive an XML response then set this to XML"
    },
    "id": {
      "type": "integer",
      "description": "Enter an invoice id"
    },
    "body": {
      "$ref": "#/definitions/Update_Invoice_Array"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Update_Invoice"
}
```
## Operation: ip_check
Retrieve a countries VAT rates from an IP address

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Response-Type": {
      "type": "string",
      "description": "The default response type is application/json if you would like to receive an XML response then set this to XML"
    },
    "address": {
      "type": "string",
      "description": "The IP address to search against"
    }
  },
  "additionalProperties": false,
  "required": [
    "address"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IP_Check"
}
```
## Operation: vat_number_validate
<p>We highly recommend if you are able, to check a VAT number on your end first to save wasted API lookups. It maybe that your customer has simply entered the wrong format. <a href='http://www.braemoor.co.uk/software/vat.shtml' target='_blank'>Heres a client side way to check the format using Javascript</a></p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Response-Type": {
      "type": "string",
      "description": "The default response type is application/json if you would like to receive an XML response then set this to XML"
    },
    "vatid": {
      "type": "string",
      "description": "The VAT number to validate"
    }
  },
  "additionalProperties": false,
  "required": [
    "vatid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: convert_price
Convert a price to or from VAT price.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Response-Type": {
      "type": "string",
      "description": "The default response type is application/json if you would like to receive an XML response then set this to XML"
    },
    "code": {
      "type": "string",
      "description": "The 2 digit country code"
    },
    "country_rate": {
      "type": "string",
      "description": "The VAT rate to get the price for. Default: standard"
    },
    "price": {
      "type": "integer",
      "description": "The price you want converting"
    },
    "type": {
      "type": "string",
      "description": "Optional, if the price is including VAT set the type to 'incl'. Otherwise the default is assumed as excluding VAT already, 'excl'"
    }
  },
  "additionalProperties": false,
  "required": [
    "code",
    "price"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Convert_Price"
}
```
## Operation: vat_rates
Retrieve all current EU VAT rates

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "Response-Type": {
      "type": "string",
      "description": "The default response type is application/json if you would like to receive an XML response then set this to XML"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Vat_Rates"
}
```
