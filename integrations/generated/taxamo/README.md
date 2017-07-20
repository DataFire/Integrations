# @datafire/taxamo

Client library for Taxamo

## Installation and Usage
```bash
npm install --save datafire @datafire/taxamo
```

```js
let datafire = require('datafire');
let taxamo = require('@datafire/taxamo').actions;

let account = {
  apiKey: "",
}
let context = new datafire.Context({
  accounts: {
    taxamo: account,
  }
})


taxamo.listTransactions({}, context).then(data => {
  console.log(data);
})
```

## Description
Taxamo’s elegant suite of APIs and comprehensive reporting dashboard enables digital merchants to easily comply with EU regulatory requirements on tax calculation, evidence collection, tax return creation and data storage.

## Actions
### getCountriesDict
Countries


```js
taxamo.getCountriesDict({}, context)
```


### getCurrenciesDict
Currencies


```js
taxamo.getCurrenciesDict(null, context)
```


### getProductTypesDict
Product types


```js
taxamo.getProductTypesDict(null, context)
```


### locateMyIP
Locate IP


```js
taxamo.locateMyIP(null, context)
```


### locateGivenIP
Locate provided IP


```js
taxamo.locateGivenIP({
  "ip": ""
}, context)
```

#### Parameters
* ip (string) **required** - IP address.

### getDomesticSummaryReport
Calculate domestic summary


```js
taxamo.getDomesticSummaryReport({
  "country_code": "",
  "start_month": "",
  "end_month": ""
}, context)
```

#### Parameters
* format (string) - Output format. 'xml' and 'csv' values are accepted. Default format - json
* country_code (string) **required** - ISO 2-letter country code which will be used for determining which country is domestic.
* currency_code (string) - ISO 3-letter currency code, e.g. EUR or USD. Defaults to the one assigned to MOSS calculations for a given country code.
* start_month (string) **required** - Period start month in yyyy-MM format.
* end_month (string) **required** - Period end month in yyyy-MM format.
* fx_date_type (string) - Which date should be used for FX.

### getEuViesReport
Calculate EU VIES report


```js
taxamo.getEuViesReport({
  "end_month": "",
  "start_month": "",
  "eu_country_code": ""
}, context)
```

#### Parameters
* period_length (string) - Length of report period. 'month', 'quarter' and 'year' values are accepted. Required only if Large Filer Format is requested.
* lff_sequence_number (string) - Sequence number used to generate report in Large Filer Format. If not specified then '0000000001' will be used.
* transformation (string) - Which transformation should be applied. Please note that transformation will be applied only for xml and csv formats.
* currency_code (string) - ISO 3-letter currency code, e.g. EUR or USD. Defaults to the one assigned to MOSS calculations for a given country code.
* end_month (string) **required** - Period end month in yyyy-MM format.
* tax_id (string) - MOSS-assigned tax ID - if not provided, merchant's national tax number will be used.
* start_month (string) **required** - Period start month in yyyy-MM format.
* eu_country_code (string) **required** - ISO 2-letter country code which will be used for determining which country is domestic.
* fx_date_type (string) - Which date should be used for FX.
* format (string) - Output format. 'xml', 'csv' and 'lff' (only for Ireland) values are accepted as well

### getDetailedRefunds
Detailed refunds


```js
taxamo.getDetailedRefunds({}, context)
```


### getRefunds
Fetch refunds


```js
taxamo.getRefunds({
  "date_from": ""
}, context)
```

#### Parameters
* format (string) - Output format. 'csv' value is accepted as well
* moss_country_code (string) - MOSS country code, used to determine currency. If ommited, merchant default setting is used.
* tax_region (string) - Tax region key, defaults to EU for backwards compatibility.
* date_from (string) **required** - Take only refunds issued at or after the date. Format: yyyy-MM-dd

### getSettlementSummary
Fetch summary


```js
taxamo.getSettlementSummary({
  "quarter": ""
}, context)
```

#### Parameters
* moss_country_code (string) - MOSS country code, used to determine currency. If ommited, merchant default setting is used.
* tax_region (string) - Tax region key
* start_month (string) - Period start month in yyyy-MM format. Either quarter or start-month and end-month have to be provided.
* end_month (string) - Period end month in yyyy-MM format. Either quarter or start-month and end-month have to be provided.
* quarter (string) **required** - Quarter in yyyy-MM format. If start-date and end-date are provided, quarter is ignored and should be set to 'range'.

### getSettlement
Fetch settlement


```js
taxamo.getSettlement({
  "quarter": ""
}, context)
```

#### Parameters
* moss_tax_id (string) - MOSS-assigned tax ID - if not provided, merchant's national tax number will be used. Deprecated, please use tax-id.
* currency_code (string) - ISO 3-letter currency code, e.g. EUR or USD. If provided, all amounts will be coerced for this currency. Defaults to region's currency code.
* end_month (string) - Period end month in yyyy-MM format. Either quarter or start-month and end-month have to be provided.
* tax_id (string) - MOSS-assigned tax ID - if not provided, merchant's national tax number will be used. Deprecated, please use tax-id.
* refund_date_kind_override (string) - Set to 'order_date' to show only refunds for the transactions in the selected reporting period. Set to 'refund_timestamp' to show refunds that were created in the selected reporting period. Do not set to use the default region's setting.
* start_month (string) - Period start month in yyyy-MM format. Either quarter or start-month and end-month have to be provided.
* moss_country_code (string) - MOSS country code, used to determine currency/region. If ommited, merchant default setting is used. Deprecated: please use tax-country-code.
* format (string) - Output format. 'csv' value is accepted as well
* tax_country_code (string) - Tax entity country code, used to determine currency/region. 
* quarter (string) **required** - Quarter in yyyy-MM format. If start-date and end-date are provided, quarter is ignored and should be set to 'range'.

### getSettlementStatsByCountry
Settlement by country


```js
taxamo.getSettlementStatsByCountry({
  "date_from": "",
  "date_to": ""
}, context)
```

#### Parameters
* date_from (string) **required** - Date from in yyyy-MM format.
* date_to (string) **required** - Date to in yyyy-MM format.

### getSettlementStatsByTaxationType
Settlement by tax type


```js
taxamo.getSettlementStatsByTaxationType({
  "date_from": "",
  "date_to": ""
}, context)
```

#### Parameters
* date_from (string) **required** - Date from in yyyy-MM format.
* date_to (string) **required** - Date to in yyyy-MM format.

### getDailySettlementStats
Settlement stats over time


```js
taxamo.getDailySettlementStats({
  "interval": "",
  "date_from": "",
  "date_to": ""
}, context)
```

#### Parameters
* interval (string) **required** - Interval type - day, week, month.
* date_from (string) **required** - Date from in yyyy-MM format.
* date_to (string) **required** - Date to in yyyy-MM format.

### getTransactionsStats
Transaction stats


```js
taxamo.getTransactionsStats({
  "date_from": "",
  "date_to": ""
}, context)
```

#### Parameters
* date_from (string) **required** - Date from in yyyy-MM format.
* date_to (string) **required** - Date to in yyyy-MM format.
* interval (string) - Interval. Accepted values are 'day', 'week' and 'month'.

### getTransactionsStatsByCountry
Settlement by country


```js
taxamo.getTransactionsStatsByCountry({
  "date_from": "",
  "date_to": ""
}, context)
```

#### Parameters
* global_currency_code (string) - Global currency code to use for conversion - in addition to country's currency if rate is available. Conversion is indicative and based on most-recent rate from ECB.
* date_from (string) **required** - Date from in yyyy-MM format.
* date_to (string) **required** - Date to in yyyy-MM format.

### calculateSimpleTax
Simple tax


```js
taxamo.calculateSimpleTax({
  "currency_code": ""
}, context)
```

#### Parameters
* product_type (string) - Product type, according to dictionary /dictionaries/product_types. 
* invoice_address_city (string) - Invoice address/postal_code
* buyer_credit_card_prefix (string) - First 6 digits of buyer's credit card prefix.
* currency_code (string) **required** - Currency code for transaction - e.g. EUR.
* invoice_address_region (string) - Invoice address/region
* unit_price (number) - Unit price.
* quantity (number) - Quantity Defaults to 1.
* buyer_tax_number (string) -  Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly.
* force_country_code (string) - Two-letter ISO country code, e.g. FR. Use it to force country code for tax calculation.
* order_date (string) - Order date in yyyy-MM-dd format, in merchant's timezone. If provided by the API caller, no timezone conversion is performed. Default value is current date and time. When using public token, the default value is used.
* amount (number) - Amount. Required if total amount or both unit price and quantity are not provided.
* billing_country_code (string) - Billing two letter ISO country code.
* invoice_address_postal_code (string) - Invoice address/postal_code
* total_amount (number) - Total amount. Required if amount or both unit price and quantity are not provided.
* tax_deducted (boolean) - If the transaction is in a country supported by Taxamo, but the tax is not calculated due to merchant settings or EU B2B transaction for example.

### calculateTax
Calculate tax


```js
taxamo.calculateTax({
  "input": {
    "transaction": {
      "currency_code": "",
      "transaction_lines": []
    }
  }
}, context)
```

#### Parameters
* input (object) **required**

### calculateTaxLocation
Calculate location


```js
taxamo.calculateTaxLocation({}, context)
```


### validateTaxNumber
Validate VAT number


```js
taxamo.validateTaxNumber({
  "tax_number": ""
}, context)
```

#### Parameters
* country_code (string) - Two-letter ISO country code.
* tax_number (string) **required** - Tax number

### listTransactions
Browse transactions


```js
taxamo.listTransactions({}, context)
```


### createTransaction
Store transaction


```js
taxamo.createTransaction({
  "input": {
    "transaction": {
      "currency_code": "",
      "transaction_lines": []
    }
  }
}, context)
```

#### Parameters
* input (object) **required**

### cancelTransaction
Delete transaction


```js
taxamo.cancelTransaction({
  "key": ""
}, context)
```

#### Parameters
* key (string) **required** - Transaction key

### getTransaction
Retrieve transaction data.


```js
taxamo.getTransaction({
  "key": ""
}, context)
```

#### Parameters
* key (string) **required** - Transaction key

### updateTransaction
Update transaction


```js
taxamo.updateTransaction({
  "key": "",
  "input": {}
}, context)
```

#### Parameters
* key (string) **required** - Transaction key.
* input (object) **required**

### confirmTransaction
Confirm transaction


```js
taxamo.confirmTransaction({
  "key": "",
  "input": {}
}, context)
```

#### Parameters
* key (string) **required** - Transaction key.
* input (object) **required**

### emailRefund
Email credit note


```js
taxamo.emailRefund({
  "key": "",
  "refund_note_number": "",
  "input": {}
}, context)
```

#### Parameters
* key (string) **required** - Transaction key.
* refund_note_number (string) **required** - Refund note id.
* input (object) **required**

### emailInvoice
Email invoice


```js
taxamo.emailInvoice({
  "key": "",
  "input": {}
}, context)
```

#### Parameters
* key (string) **required** - Transaction key.
* input (object) **required**

### listPayments
List payments


```js
taxamo.listPayments({
  "key": ""
}, context)
```

#### Parameters
* limit (string) - Max record count (no more than 100, defaults to 10).
* offset (string) - How many records need to be skipped, defaults to 0.
* key (string) **required** - Transaction key.

### createPayment
Register a payment


```js
taxamo.createPayment({
  "key": "",
  "input": {
    "amount": 0
  }
}, context)
```

#### Parameters
* key (string) **required** - Transaction key.
* input (object) **required**

### capturePayment
Capture payment


```js
taxamo.capturePayment({
  "key": ""
}, context)
```

#### Parameters
* key (string) **required** - Transaction key.

### listRefunds
Get transaction refunds


```js
taxamo.listRefunds({
  "key": ""
}, context)
```

#### Parameters
* key (string) **required** - Transaction key.

### createRefund
Create a refund


```js
taxamo.createRefund({
  "key": "",
  "input": {}
}, context)
```

#### Parameters
* key (string) **required** - Transaction key.
* input (object) **required**

### unconfirmTransaction
Un-confirm the transaction


```js
taxamo.unconfirmTransaction({
  "key": "",
  "input": {}
}, context)
```

#### Parameters
* key (string) **required** - Transaction key.
* input (object) **required**

### createSMSToken
Create SMS token


```js
taxamo.createSMSToken({
  "input": {
    "country_code": "",
    "recipient": ""
  }
}, context)
```

#### Parameters
* input (object) **required**

### verifySMSToken
Verify SMS token


```js
taxamo.verifySMSToken({
  "token": ""
}, context)
```

#### Parameters
* token (string) **required** - Provided token.

