# @datafire/taxamo

Client library for Taxamo

## Installation and Usage
```bash
npm install --save @datafire/taxamo
```
```js
let taxamo = require('@datafire/taxamo').create({
  apiKey: ""
});

taxamo.listTransactions({}).then(data => {
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

#### Input
* input `object`
  * tax_supported `boolean`: Should only countries with tax supported be listed?

#### Output
* output [getCountriesDictOut](#getcountriesdictout)

### getCurrenciesDict
Currencies


```js
taxamo.getCurrenciesDict(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [getCurrenciesDictOut](#getcurrenciesdictout)

### getProductTypesDict
Product types


```js
taxamo.getProductTypesDict(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [getProductTypesDictOut](#getproducttypesdictout)

### locateMyIP
Locate IP


```js
taxamo.locateMyIP(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [locateMyIPOut](#locatemyipout)

### locateGivenIP
Locate provided IP


```js
taxamo.locateGivenIP({
  "ip": ""
}, context)
```

#### Input
* input `object`
  * ip **required** `string`: IP address.

#### Output
* output [locateGivenIPOut](#locategivenipout)

### getDomesticSummaryReport
Calculate domestic summary


```js
taxamo.getDomesticSummaryReport({
  "country_code": "",
  "start_month": "",
  "end_month": ""
}, context)
```

#### Input
* input `object`
  * format `string`: Output format. 'xml' and 'csv' values are accepted. Default format - json
  * country_code **required** `string`: ISO 2-letter country code which will be used for determining which country is domestic.
  * currency_code `string`: ISO 3-letter currency code, e.g. EUR or USD. Defaults to the one assigned to MOSS calculations for a given country code.
  * start_month **required** `string`: Period start month in yyyy-MM format.
  * end_month **required** `string`: Period end month in yyyy-MM format.
  * fx_date_type `string`: Which date should be used for FX.

#### Output
* output [getDomesticSummaryReportOut](#getdomesticsummaryreportout)

### getEuViesReport
Calculate EU VIES report


```js
taxamo.getEuViesReport({
  "end_month": "",
  "start_month": "",
  "eu_country_code": ""
}, context)
```

#### Input
* input `object`
  * period_length `string`: Length of report period. 'month', 'quarter' and 'year' values are accepted. Required only if Large Filer Format is requested.
  * lff_sequence_number `string`: Sequence number used to generate report in Large Filer Format. If not specified then '0000000001' will be used.
  * transformation `string`: Which transformation should be applied. Please note that transformation will be applied only for xml and csv formats.
  * currency_code `string`: ISO 3-letter currency code, e.g. EUR or USD. Defaults to the one assigned to MOSS calculations for a given country code.
  * end_month **required** `string`: Period end month in yyyy-MM format.
  * tax_id `string`: MOSS-assigned tax ID - if not provided, merchant's national tax number will be used.
  * start_month **required** `string`: Period start month in yyyy-MM format.
  * eu_country_code **required** `string`: ISO 2-letter country code which will be used for determining which country is domestic.
  * fx_date_type `string`: Which date should be used for FX.
  * format `string`: Output format. 'xml', 'csv' and 'lff' (only for Ireland) values are accepted as well

#### Output
* output [getEuViesReportOut](#geteuviesreportout)

### getDetailedRefunds
Detailed refunds


```js
taxamo.getDetailedRefunds({}, context)
```

#### Input
* input `object`
  * format `string`: Output format. 'json' or 'csv'. Default value is 'json'
  * country_codes `string`: Comma separated list of 2-letter country codes
  * date_from `string`: Take only refunds issued at or after the date. Format: yyyy-MM-dd
  * date_to `string`: Take only refunds issued at or before the date. Format: yyyy-MM-dd
  * limit `number`: Limit (no more than 1000, defaults to 100).
  * offset `number`: Offset. Defaults to 0

#### Output
* output [getDetailedRefundsOut](#getdetailedrefundsout)

### getRefunds
Fetch refunds


```js
taxamo.getRefunds({
  "date_from": ""
}, context)
```

#### Input
* input `object`
  * format `string`: Output format. 'csv' value is accepted as well
  * moss_country_code `string`: MOSS country code, used to determine currency. If ommited, merchant default setting is used.
  * tax_region `string`: Tax region key, defaults to EU for backwards compatibility.
  * date_from **required** `string`: Take only refunds issued at or after the date. Format: yyyy-MM-dd

#### Output
* output [getRefundsOut](#getrefundsout)

### getSettlementSummary
Fetch summary


```js
taxamo.getSettlementSummary({
  "quarter": ""
}, context)
```

#### Input
* input `object`
  * moss_country_code `string`: MOSS country code, used to determine currency. If ommited, merchant default setting is used.
  * tax_region `string`: Tax region key
  * start_month `string`: Period start month in yyyy-MM format. Either quarter or start-month and end-month have to be provided.
  * end_month `string`: Period end month in yyyy-MM format. Either quarter or start-month and end-month have to be provided.
  * quarter **required** `string`: Quarter in yyyy-MM format. If start-date and end-date are provided, quarter is ignored and should be set to 'range'.

#### Output
* output [getSettlementSummaryOut](#getsettlementsummaryout)

### getSettlement
Fetch settlement


```js
taxamo.getSettlement({
  "quarter": ""
}, context)
```

#### Input
* input `object`
  * moss_tax_id `string`: MOSS-assigned tax ID - if not provided, merchant's national tax number will be used. Deprecated, please use tax-id.
  * currency_code `string`: ISO 3-letter currency code, e.g. EUR or USD. If provided, all amounts will be coerced for this currency. Defaults to region's currency code.
  * end_month `string`: Period end month in yyyy-MM format. Either quarter or start-month and end-month have to be provided.
  * tax_id `string`: MOSS-assigned tax ID - if not provided, merchant's national tax number will be used. Deprecated, please use tax-id.
  * refund_date_kind_override `string`: Set to 'order_date' to show only refunds for the transactions in the selected reporting period. Set to 'refund_timestamp' to show refunds that were created in the selected reporting period. Do not set to use the default region's setting.
  * start_month `string`: Period start month in yyyy-MM format. Either quarter or start-month and end-month have to be provided.
  * moss_country_code `string`: MOSS country code, used to determine currency/region. If ommited, merchant default setting is used. Deprecated: please use tax-country-code.
  * format `string`: Output format. 'csv' value is accepted as well
  * tax_country_code `string`: Tax entity country code, used to determine currency/region. 
  * quarter **required** `string`: Quarter in yyyy-MM format. If start-date and end-date are provided, quarter is ignored and should be set to 'range'.

#### Output
* output [getSettlementOut](#getsettlementout)

### getSettlementStatsByCountry
Settlement by country


```js
taxamo.getSettlementStatsByCountry({
  "date_from": "",
  "date_to": ""
}, context)
```

#### Input
* input `object`
  * date_from **required** `string`: Date from in yyyy-MM format.
  * date_to **required** `string`: Date to in yyyy-MM format.

#### Output
* output [getSettlementStatsByCountryOut](#getsettlementstatsbycountryout)

### getSettlementStatsByTaxationType
Settlement by tax type


```js
taxamo.getSettlementStatsByTaxationType({
  "date_from": "",
  "date_to": ""
}, context)
```

#### Input
* input `object`
  * date_from **required** `string`: Date from in yyyy-MM format.
  * date_to **required** `string`: Date to in yyyy-MM format.

#### Output
* output [getSettlementStatsByTaxationTypeOut](#getsettlementstatsbytaxationtypeout)

### getDailySettlementStats
Settlement stats over time


```js
taxamo.getDailySettlementStats({
  "interval": "",
  "date_from": "",
  "date_to": ""
}, context)
```

#### Input
* input `object`
  * interval **required** `string`: Interval type - day, week, month.
  * date_from **required** `string`: Date from in yyyy-MM format.
  * date_to **required** `string`: Date to in yyyy-MM format.

#### Output
* output [getDailySettlementStatsOut](#getdailysettlementstatsout)

### getTransactionsStats
Transaction stats


```js
taxamo.getTransactionsStats({
  "date_from": "",
  "date_to": ""
}, context)
```

#### Input
* input `object`
  * date_from **required** `string`: Date from in yyyy-MM format.
  * date_to **required** `string`: Date to in yyyy-MM format.
  * interval `string`: Interval. Accepted values are 'day', 'week' and 'month'.

#### Output
* output [getTransactionsStatsOut](#gettransactionsstatsout)

### getTransactionsStatsByCountry
Settlement by country


```js
taxamo.getTransactionsStatsByCountry({
  "date_from": "",
  "date_to": ""
}, context)
```

#### Input
* input `object`
  * global_currency_code `string`: Global currency code to use for conversion - in addition to country's currency if rate is available. Conversion is indicative and based on most-recent rate from ECB.
  * date_from **required** `string`: Date from in yyyy-MM format.
  * date_to **required** `string`: Date to in yyyy-MM format.

#### Output
* output [getTransactionsStatsByCountryOut](#gettransactionsstatsbycountryout)

### calculateSimpleTax
Simple tax


```js
taxamo.calculateSimpleTax({
  "currency_code": ""
}, context)
```

#### Input
* input `object`
  * product_type `string`: Product type, according to dictionary /dictionaries/product_types. 
  * invoice_address_city `string`: Invoice address/postal_code
  * buyer_credit_card_prefix `string`: First 6 digits of buyer's credit card prefix.
  * currency_code **required** `string`: Currency code for transaction - e.g. EUR.
  * invoice_address_region `string`: Invoice address/region
  * unit_price `number`: Unit price.
  * quantity `number`: Quantity Defaults to 1.
  * buyer_tax_number `string`:  Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly.
  * force_country_code `string`: Two-letter ISO country code, e.g. FR. Use it to force country code for tax calculation.
  * order_date `string`: Order date in yyyy-MM-dd format, in merchant's timezone. If provided by the API caller, no timezone conversion is performed. Default value is current date and time. When using public token, the default value is used.
  * amount `number`: Amount. Required if total amount or both unit price and quantity are not provided.
  * billing_country_code `string`: Billing two letter ISO country code.
  * invoice_address_postal_code `string`: Invoice address/postal_code
  * total_amount `number`: Total amount. Required if amount or both unit price and quantity are not provided.
  * tax_deducted `boolean`: If the transaction is in a country supported by Taxamo, but the tax is not calculated due to merchant settings or EU B2B transaction for example.

#### Output
* output [calculateSimpleTaxOut](#calculatesimpletaxout)

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

#### Input
* input `object`
  * input **required** [calculateTaxIn](#calculatetaxin)

#### Output
* output [calculateTaxOut](#calculatetaxout)

### calculateTaxLocation
Calculate location


```js
taxamo.calculateTaxLocation({}, context)
```

#### Input
* input `object`
  * billing_country_code `string`: Billing two letter ISO country code.
  * buyer_credit_card_prefix `string`: First 6 digits of buyer's credit card prefix.

#### Output
* output [calculateTaxLocationOut](#calculatetaxlocationout)

### validateTaxNumber
Validate VAT number


```js
taxamo.validateTaxNumber({
  "tax_number": ""
}, context)
```

#### Input
* input `object`
  * country_code `string`: Two-letter ISO country code.
  * tax_number **required** `string`: Tax number

#### Output
* output [validateTaxNumberOut](#validatetaxnumberout)

### listTransactions
Browse transactions


```js
taxamo.listTransactions({}, context)
```

#### Input
* input `object`
  * filter_text `string`: Filtering expression
  * offset `integer`: Offset
  * has_note `boolean`: Return only transactions with a note field set.
  * key_or_custom_id `string`: Taxamo provided transaction key or custom id
  * currency_code `string`: Three letter ISO currency code.
  * order_date_to `string`: Order date to in yyyy-MM-dd format.
  * sort_reverse `boolean`: If true, results are sorted in descending order.
  * limit `integer`: Limit (no more than 1000, defaults to 100).
  * invoice_number `string`: Transaction invoice number.
  * tax_country_codes `string`: Comma separated list of two letter ISO tax country codes.
  * statuses `string`: Comma separated list of of transaction statuses. 'N' - unconfirmed transaction, 'C' - confirmed transaction.
  * original_transaction_key `string`: Taxamo provided original transaction key
  * order_date_from `string`: Order date from in yyyy-MM-dd format.
  * total_amount_greater_than `string`: Return only transactions with total amount greater than given number. Transactions with total amount equal to a given number (e.g. 0) are not returned.
  * format `string`: Output format - supports 'csv' value for this operation.
  * total_amount_less_than `string`: Return only transactions with total amount less than a given number. Transactions with total amount equal to a given number (e.g. 1) are not returned.
  * tax_country_code `string`: Two letter ISO tax country code.

#### Output
* output [listTransactionsOut](#listtransactionsout)

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

#### Input
* input `object`
  * input **required** [createTransactionIn](#createtransactionin)

#### Output
* output [createTransactionOut](#createtransactionout)

### cancelTransaction
Delete transaction


```js
taxamo.cancelTransaction({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: Transaction key

#### Output
* output [cancelTransactionOut](#canceltransactionout)

### getTransaction
Retrieve transaction data.


```js
taxamo.getTransaction({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: Transaction key

#### Output
* output [getTransactionOut](#gettransactionout)

### updateTransaction
Update transaction


```js
taxamo.updateTransaction({
  "key": "",
  "input": {}
}, context)
```

#### Input
* input `object`
  * key **required** `string`: Transaction key.
  * input **required** [updateTransactionIn](#updatetransactionin)

#### Output
* output [updateTransactionOut](#updatetransactionout)

### confirmTransaction
Confirm transaction


```js
taxamo.confirmTransaction({
  "key": "",
  "input": {}
}, context)
```

#### Input
* input `object`
  * key **required** `string`: Transaction key.
  * input **required** [confirmTransactionIn](#confirmtransactionin)

#### Output
* output [confirmTransactionOut](#confirmtransactionout)

### emailRefund
Email credit note


```js
taxamo.emailRefund({
  "key": "",
  "refund_note_number": "",
  "input": {}
}, context)
```

#### Input
* input `object`
  * key **required** `string`: Transaction key.
  * refund_note_number **required** `string`: Refund note id.
  * input **required** [emailRefundIn](#emailrefundin)

#### Output
* output [emailRefundOut](#emailrefundout)

### emailInvoice
Email invoice


```js
taxamo.emailInvoice({
  "key": "",
  "input": {}
}, context)
```

#### Input
* input `object`
  * key **required** `string`: Transaction key.
  * input **required** [emailInvoiceIn](#emailinvoicein)

#### Output
* output [emailInvoiceOut](#emailinvoiceout)

### listPayments
List payments


```js
taxamo.listPayments({
  "key": ""
}, context)
```

#### Input
* input `object`
  * limit `string`: Max record count (no more than 100, defaults to 10).
  * offset `string`: How many records need to be skipped, defaults to 0.
  * key **required** `string`: Transaction key.

#### Output
* output [listPaymentsOut](#listpaymentsout)

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

#### Input
* input `object`
  * key **required** `string`: Transaction key.
  * input **required** [createPaymentIn](#createpaymentin)

#### Output
* output [createPaymentOut](#createpaymentout)

### capturePayment
Capture payment


```js
taxamo.capturePayment({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: Transaction key.

#### Output
* output [capturePaymentOut](#capturepaymentout)

### listRefunds
Get transaction refunds


```js
taxamo.listRefunds({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: Transaction key.

#### Output
* output [listRefundsOut](#listrefundsout)

### createRefund
Create a refund


```js
taxamo.createRefund({
  "key": "",
  "input": {}
}, context)
```

#### Input
* input `object`
  * key **required** `string`: Transaction key.
  * input **required** [createRefundIn](#createrefundin)

#### Output
* output [createRefundOut](#createrefundout)

### unconfirmTransaction
Un-confirm the transaction


```js
taxamo.unconfirmTransaction({
  "key": "",
  "input": {}
}, context)
```

#### Input
* input `object`
  * key **required** `string`: Transaction key.
  * input **required** [unconfirmTransactionIn](#unconfirmtransactionin)

#### Output
* output [unconfirmTransactionOut](#unconfirmtransactionout)

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

#### Input
* input `object`
  * input **required** [createSMSTokenIn](#createsmstokenin)

#### Output
* output [createSMSTokenOut](#createsmstokenout)

### verifySMSToken
Verify SMS token


```js
taxamo.verifySMSToken({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Provided token.

#### Output
* output [verifySMSTokenOut](#verifysmstokenout)



## Definitions

### C
* C `object`
  * day `string`: Date for stats in yyyy-MM-dd format.
  * day_raw `string`: Date for stats in yyyy-MM-dd'T'hh:mm:ss'Z' format.
  * status `string`: Transaction status (C or N).
  * value `number`: Transaction count.

### N
* N `object`
  * day `string`: Date for stats in yyyy-MM-dd format.
  * day_raw `string`: Date for stats in yyyy-MM-dd'T'hh:mm:ss'Z' format.
  * status `string`: Transaction status (C or N).
  * value `number`: Transaction count.

### additional_currencies
* additional_currencies `object`
  * invoice [additional_currency](#additional_currency)

### additional_currency
* additional_currency `object`
  * amount `number`: Amount (w/o TAX) in designated currency.
  * currency_code `string`: 3-letter ISO currency code.
  * fx_rate `number`: Foreign exchange rate used in calculation
  * tax_amount `number`: Tax amount in designated currency.
  * total_amount `number`: Total amount in designated currency.

### by_country
* by_country `object`
  * currency_code `string`: Three-letter ISO currency code.
  * tax_country_code `string`: Two letter ISO country code.
  * tax_country_name `string`: Country name
  * value `number`: Tax amount

### by_status
* by_status `object`
  * C `array`: Confirmed transactions
    * items [C](#c)
  * N `array`: New transactions
    * items [N](#n)

### by_taxation_type
* by_taxation_type `object`
  * deducted_count `number`: Number of tax deducted transactions.
  * eu_b2b `integer`: Total EU B2B transaction count.
  * eu_taxed `integer`: Total EU Taxed transaction count.
  * taxed_count `number`: Number of taxed transactions.
  * transactions_count `number`: Total number of transactions

### calculateSimpleTaxIn
* calculateSimpleTaxIn `object`
  * amount `number`: Amount. Required if total amount or both unit price and quantity are not provided.
  * billing_country_code `string`: Billing two letter ISO country code.
  * buyer_credit_card_prefix `string`: First 6 digits of buyer's credit card prefix.
  * buyer_tax_number `string`:  Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly.
  * currency_code **required** `string`: Currency code for transaction - e.g. EUR.
  * force_country_code `string`: Two-letter ISO country code, e.g. FR. Use it to force country code for tax calculation.
  * invoice_address_city `string`: Invoice address/postal_code
  * invoice_address_postal_code `string`: Invoice address/postal_code
  * invoice_address_region `string`: Invoice address/region
  * order_date `string`: Order date in yyyy-MM-dd format, in merchant's timezone. If provided by the API caller, no timezone conversion is performed. Default value is current date and time. When using public token, the default value is used.
  * product_type `string`: Product type, according to dictionary /dictionaries/product_types. 
  * quantity `number`: Quantity Defaults to 1.
  * tax_deducted `boolean`: If the transaction is in a country supported by Taxamo, but the tax is not calculated due to merchant settings or EU B2B transaction for example.
  * total_amount `number`: Total amount. Required if amount or both unit price and quantity are not provided.
  * unit_price `number`: Unit price.

### calculateSimpleTaxOut
* calculateSimpleTaxOut `object`
  * storage_required_fields `array`: Fields required for transaction storage (can be added later - it's up to merchant software). Depends on the region/transaction type.
    * items [storage_required_fields](#storage_required_fields)
  * tax_required_fields `array`: Fields required for tax calculation. Depends on the region/transaction type.
    * items [tax_required_fields](#tax_required_fields)
  * transaction [transaction](#transaction)

### calculateTaxIn
* calculateTaxIn `object`
  * transaction **required** [input_transaction](#input_transaction)

### calculateTaxLocationIn
* calculateTaxLocationIn `object`
  * billing_country_code `string`: Billing two letter ISO country code.
  * buyer_credit_card_prefix `string`: First 6 digits of buyer's credit card prefix.

### calculateTaxLocationOut
* calculateTaxLocationOut `object`
  * billing_country_code `string`: Billing two letter ISO country code.
  * buyer_credit_card_prefix `string`: First 6 digits of buyer's credit card prefix.
  * buyer_ip `string`: IP address of the buyer in dotted decimal (IPv4) or text format (IPv6).
  * countries [countries](#countries)
  * evidence [evidence](#evidence)
  * tax_country_code `string`: Two-letter ISO country code, e.g. FR. This code applies to detected/set country for transaction, but can be set using manual mode.
  * tax_deducted `boolean`: If the transaction is in a country supported by Taxamo, but the tax is not calculated due to merchant settings or EU B2B transaction for example.
  * tax_supported `boolean`: Is tax calculation supported for a detected tax location?

### calculateTaxOut
* calculateTaxOut `object`
  * storage_required_fields `array`: Fields required for transaction storage (can be added later - it's up to merchant software). Depends on the region/transaction type.
    * items [storage_required_fields](#storage_required_fields)
  * tax_required_fields `array`: Fields required for tax calculation. Depends on the region/transaction type.
    * items [tax_required_fields](#tax_required_fields)
  * transaction [transaction](#transaction)

### cancelTransactionOut
* cancelTransactionOut `object`
  * success `boolean`: Was operation successful?

### capturePaymentOut
* capturePaymentOut `object`
  * success `boolean`: Was the operation successful?

### confirmTransactionIn
* confirmTransactionIn `object`
  * transaction [input_transaction_update](#input_transaction_update)

### confirmTransactionOut
* confirmTransactionOut `object`
  * storage_required_fields `array`: Fields required for transaction storage (can be added later - it's up to merchant software). Depends on the region/transaction type.
    * items [storage_required_fields](#storage_required_fields)
  * tax_required_fields `array`: Fields required for tax calculation. Depends on the region/transaction type.
    * items [tax_required_fields](#tax_required_fields)
  * transaction [transaction](#transaction)

### countries
* countries `object`
  * by_2003_rules [country_schema](#country_schema)
  * by_billing [country_schema](#country_schema)
  * by_cc [country_schema](#country_schema)
  * by_ip [country_schema](#country_schema)
  * by_tax_number [country_schema](#country_schema)
  * by_token [country_schema](#country_schema)
  * detected [country_schema](#country_schema)
  * forced [country_schema](#country_schema)
  * guessed_from_ip [country_schema](#country_schema)
  * other_commercially_relevant_info [country_schema](#country_schema)
  * self_declaration [country_schema](#country_schema)

### country
* country `object`
  * callingCode `array`: List of phone number calling codes.
    * items `string`
  * cca2 `string`: Two letter ISO country code.
  * cca3 `string`: Three letter ISO country code.
  * ccn3 `string`: Country ISO 3-digit code.
  * code `string`: Two letter ISO country code.
  * code_long `string`: Three letter ISO country code.
  * codenum `string`: Country ISO 3-digit code.
  * currency `array`: List of currencies.
    * items `string`
  * name `string`: Country name.
  * tax_number_country_code `string`: VAT number country code. Important for Greece.
  * tax_region `string`: Tax region code - e.g. EU, US, NO, JP...
  * tax_supported `boolean`: True if tax calculation supported for this country.

### country_schema
* country_schema `object`
  * callingCode `array`: List of phone number calling codes.
    * items `string`
  * cca2 `string`: Two letter ISO country code.
  * cca3 `string`: Three letter ISO country code.
  * ccn3 `string`: Country ISO 3-digit code.
  * code `string`: Two letter ISO country code.
  * code_long `string`: Three letter ISO country code.
  * codenum `string`: Country ISO 3-digit code.
  * currency `array`: List of currencies.
    * items `string`
  * name `string`: Country name.
  * tax_number_country_code `string`: VAT number country code. Important for Greece.
  * tax_region `string`: Tax region code - e.g. EU, US, NO, JP...
  * tax_supported `boolean`: True if tax calculation supported for this country.

### createPaymentIn
* createPaymentIn `object`
  * amount **required** `number`: Amount that has been paid. Use negative value to register refunds.
  * payment_information `string`: Additional payment information.
  * payment_timestamp `string`: When the payment was received in yyyy-MM-dd'T'HH:mm:ss(.SSS)'Z' format (24 hour, UTC timezone). Defaults to current date and time.

### createPaymentOut
* createPaymentOut `object`
  * success `boolean`: Was the operation successful?

### createRefundIn
* createRefundIn `object`
  * amount `number`: Amount (without tax) to be refunded. Either amount or total amount is required. In case of line key and custom id missing, only total_amount can be used.
  * custom_id `string`: Line custom identifier. If neither line key or custom id is provided, the refund amount will be assigned to lines in order.
  * line_key `string`: Line identifier. If neither line key or custom id is provided, the refund amount will be assigned to lines in order.
  * refund_reason `string`: Refund reason, displayed on the credit note.
  * total_amount `number`: Total amount, including tax, to be refunded. Either amount or total amount is required. In case of line key and custom id missing, only total_amount can be used.

### createRefundOut
* createRefundOut `object`
  * refunded_tax_amount `number`: Total tax amount, that was refunded for this line.
  * refunded_total_amount `number`: Total amount, including tax, that was refunded for this line.
  * tax_amount `number`: Calculated tax amount, that was refunded in this call.
  * total_amount `number`: Total amount, including tax, that was refunded in this call.

### createSMSTokenIn
* createSMSTokenIn `object`
  * country_code **required** `string`: Two letter ISO country code.
  * recipient **required** `string`: Recipient phone number.

### createSMSTokenOut
* createSMSTokenOut `object`
  * success `boolean`: Always set to true. Success means that the message has been queued for delivery. In some cases message may be undelivered at the end, e.g. mobile number is blacklisted. API errors are signalled with appropriate error codes.

### createTransactionIn
* createTransactionIn `object`
  * manual_mode `boolean`: Use manual mode, bypassing country detection. Only allowed with private token. This flag allows to use original_transaction_key field
  * transaction **required** [input_transaction](#input_transaction)

### createTransactionOut
* createTransactionOut `object`
  * storage_required_fields `array`: Fields required for transaction storage (can be added later - it's up to merchant software). Depends on the region/transaction type.
    * items [storage_required_fields](#storage_required_fields)
  * tax_required_fields `array`: Fields required for tax calculation. Depends on the region/transaction type.
    * items [tax_required_fields](#tax_required_fields)
  * transaction [transaction](#transaction)

### currency_schema
* currency_schema `object`
  * code `string`: Currency 3-letter ISO code.
  * description `string`: Currency description.
  * isocode `string`: Currency 3-letter ISO code.
  * isonum `integer`: Currency iso numeric code.
  * minorunits `integer`: Number of minor units for currency.

### custom_fields
* custom_fields `object`
  * key `string`: Field's key.
  * value `string`: Field's value.

### emailInvoiceIn
* emailInvoiceIn `object`
  * buyer_email `string`: Email to send the invoice. If not provided, transaction.buyer_email will be used.

### emailInvoiceOut
* emailInvoiceOut `object`
  * success `boolean`: Was operation successful?

### emailRefundIn
* emailRefundIn `object`
  * buyer_email `string`: Email to send the credit note/refund note. If not provided, transaction.buyer_email will be used.

### emailRefundOut
* emailRefundOut `object`
  * success `boolean`: Was operation successful?

### evidence
* evidence `object`
  * by_2003_rules [evidence_schema](#evidence_schema)
  * by_billing [evidence_schema](#evidence_schema)
  * by_cc [evidence_schema](#evidence_schema)
  * by_ip [evidence_schema](#evidence_schema)
  * by_payment_method [evidence_schema](#evidence_schema)
  * by_tax_number [evidence_schema](#evidence_schema)
  * by_token [evidence_schema](#evidence_schema)
  * forced [evidence_schema](#evidence_schema)
  * guessed_from_ip [evidence_schema](#evidence_schema)
  * other_commercially_relevant_info [evidence_schema](#evidence_schema)
  * self_declaration [evidence_schema](#evidence_schema)

### evidence_schema
* evidence_schema `object`
  * evidence_type `string`: Type of evidence.
  * evidence_value `string`: Value provided as evidence - for example IP address.
  * resolved_country_code `string`: Country code that was resolved using this evidence.
  * used `boolean`: If the evidence was used to match the actual country.

### getCountriesDictIn
* getCountriesDictIn `object`
  * tax_supported `boolean`: Should only countries with tax supported be listed?

### getCountriesDictOut
* getCountriesDictOut `object`
  * dictionary `array`: Countries dictionary.
    * items [country_schema](#country_schema)

### getCurrenciesDictOut
* getCurrenciesDictOut `object`
  * dictionary `array`: Currency dictionary.
    * items [currency_schema](#currency_schema)

### getDailySettlementStatsIn
* getDailySettlementStatsIn `object`
  * date_from **required** `string`: Date from in yyyy-MM format.
  * date_to **required** `string`: Date to in yyyy-MM format.
  * interval **required** `string`: Interval type - day, week, month.

### getDailySettlementStatsOut
* getDailySettlementStatsOut `object`
  * settlement_daily `array`: Daily settlement stats
    * items [settlement_daily_stats_schema](#settlement_daily_stats_schema)

### getDetailedRefundsIn
* getDetailedRefundsIn `object`
  * country_codes `string`: Comma separated list of 2-letter country codes
  * date_from `string`: Take only refunds issued at or after the date. Format: yyyy-MM-dd
  * date_to `string`: Take only refunds issued at or before the date. Format: yyyy-MM-dd
  * format `string`: Output format. 'json' or 'csv'. Default value is 'json'
  * limit `number`: Limit (no more than 1000, defaults to 100).
  * offset `number`: Offset. Defaults to 0

### getDetailedRefundsOut
* getDetailedRefundsOut `object`
  * report `array`: Detailed refunds report
    * items [report](#report)

### getDomesticSummaryReportIn
* getDomesticSummaryReportIn `object`
  * country_code **required** `string`: ISO 2-letter country code which will be used for determining which country is domestic.
  * currency_code `string`: ISO 3-letter currency code, e.g. EUR or USD. Defaults to the one assigned to MOSS calculations for a given country code.
  * end_month **required** `string`: Period end month in yyyy-MM format.
  * format `string`: Output format. 'xml' and 'csv' values are accepted. Default format - json
  * fx_date_type `string`: Which date should be used for FX.
  * start_month **required** `string`: Period start month in yyyy-MM format.

### getDomesticSummaryReportOut
* getDomesticSummaryReportOut `object`
  * currency_code `string`: Three-letter ISO currency code.
  * domestic_refunds_amount `number`: Domestic sales refunds amount.
  * domestic_refunds_tax_amount `number`: Domestic sales refunds tax amout.
  * domestic_sales_amount `number`: Domestic sales amount.
  * domestic_tax_amount `number`: Domestic sales tax amout.
  * end_date `string`: Period end date in yyyy-MM-dd'T'hh:mm:ss'Z' format.
  * eu_tax_deducted_refunds `number`: EU deducted tax sales.
  * eu_tax_deducted_sales `number`: EU deducted tax sales.
  * global_refunds_amount `number`: Global sales refunds amount. This includes refunds from domestic country too.
  * global_refunds_tax_amount `number`: Global sales refunds amount. This includes refunds from domestic country too.
  * global_sales_amount `number`: Global sales amount. This includes sales from domestic country too.
  * global_sales_tax_amount `number`: Global sales amount. This includes sales from domestic country too.
  * start_date `string`: Period start date in yyyy-MM-dd'T'hh:mm:ss'Z' format.

### getEuViesReportIn
* getEuViesReportIn `object`
  * currency_code `string`: ISO 3-letter currency code, e.g. EUR or USD. Defaults to the one assigned to MOSS calculations for a given country code.
  * end_month **required** `string`: Period end month in yyyy-MM format.
  * eu_country_code **required** `string`: ISO 2-letter country code which will be used for determining which country is domestic.
  * format `string`: Output format. 'xml', 'csv' and 'lff' (only for Ireland) values are accepted as well
  * fx_date_type `string`: Which date should be used for FX.
  * lff_sequence_number `string`: Sequence number used to generate report in Large Filer Format. If not specified then '0000000001' will be used.
  * period_length `string`: Length of report period. 'month', 'quarter' and 'year' values are accepted. Required only if Large Filer Format is requested.
  * start_month **required** `string`: Period start month in yyyy-MM format.
  * tax_id `string`: MOSS-assigned tax ID - if not provided, merchant's national tax number will be used.
  * transformation `string`: Which transformation should be applied. Please note that transformation will be applied only for xml and csv formats.

### getEuViesReportOut
* getEuViesReportOut `object`
  * currency_code `string`: Three-letter ISO currency code.
  * end_date `string`: Period end date in yyyy-MM-dd'T'hh:mm:ss'Z' format.
  * report `array`: Settlement report.
    * items [report](#report)
  * start_date `string`: Period start date in yyyy-MM-dd'T'hh:mm:ss'Z' format.

### getProductTypesDictOut
* getProductTypesDictOut `object`
  * dictionary `array`: Product type dictionary.
    * items [product_type_schema](#product_type_schema)

### getRefundsIn
* getRefundsIn `object`
  * date_from **required** `string`: Take only refunds issued at or after the date. Format: yyyy-MM-dd
  * format `string`: Output format. 'csv' value is accepted as well
  * moss_country_code `string`: MOSS country code, used to determine currency. If ommited, merchant default setting is used.
  * tax_region `string`: Tax region key, defaults to EU for backwards compatibility.

### getRefundsOut
* getRefundsOut `object`
  * report `array`: Refunds report.
    * items [report](#report)

### getSettlementIn
* getSettlementIn `object`
  * currency_code `string`: ISO 3-letter currency code, e.g. EUR or USD. If provided, all amounts will be coerced for this currency. Defaults to region's currency code.
  * end_month `string`: Period end month in yyyy-MM format. Either quarter or start-month and end-month have to be provided.
  * format `string`: Output format. 'csv' value is accepted as well
  * moss_country_code `string`: MOSS country code, used to determine currency/region. If ommited, merchant default setting is used. Deprecated: please use tax-country-code.
  * moss_tax_id `string`: MOSS-assigned tax ID - if not provided, merchant's national tax number will be used. Deprecated, please use tax-id.
  * refund_date_kind_override `string`: Set to 'order_date' to show only refunds for the transactions in the selected reporting period. Set to 'refund_timestamp' to show refunds that were created in the selected reporting period. Do not set to use the default region's setting.
  * start_month `string`: Period start month in yyyy-MM format. Either quarter or start-month and end-month have to be provided.
  * tax_country_code `string`: Tax entity country code, used to determine currency/region. 
  * tax_id `string`: MOSS-assigned tax ID - if not provided, merchant's national tax number will be used. Deprecated, please use tax-id.

### getSettlementOut
* getSettlementOut `object`
  * end_date `string`: Period end date in yyyy-MM-dd'T'hh:mm:ss'Z' format.
  * fx_rate_date `string`: Date of ECB FX rate used for conversions in yyyy-MM-dd'T'hh:mm:ss'Z' format. Applies to tax regions where 
  * indicative `boolean`: If the quarter isn't closed yet, tax amount is indicative, as we cannot determine FX rate or all transactions yet.
  * report `array`: Settlement report.
    * items [report](#report)
  * start_date `string`: Period start date in yyyy-MM-dd'T'hh:mm:ss'Z' format.

### getSettlementStatsByCountryIn
* getSettlementStatsByCountryIn `object`
  * date_from **required** `string`: Date from in yyyy-MM format.
  * date_to **required** `string`: Date to in yyyy-MM format.

### getSettlementStatsByCountryOut
* getSettlementStatsByCountryOut `object`
  * by_country `array`: Settlement stats.
    * items [by_country](#by_country)

### getSettlementStatsByTaxationTypeIn
* getSettlementStatsByTaxationTypeIn `object`
  * date_from **required** `string`: Date from in yyyy-MM format.
  * date_to **required** `string`: Date to in yyyy-MM format.

### getSettlementStatsByTaxationTypeOut
* getSettlementStatsByTaxationTypeOut `object`
  * by_taxation_type [by_taxation_type](#by_taxation_type)

### getSettlementSummaryIn
* getSettlementSummaryIn `object`
  * end_month `string`: Period end month in yyyy-MM format. Either quarter or start-month and end-month have to be provided.
  * moss_country_code `string`: MOSS country code, used to determine currency. If ommited, merchant default setting is used.
  * start_month `string`: Period start month in yyyy-MM format. Either quarter or start-month and end-month have to be provided.
  * tax_region `string`: Tax region key

### getSettlementSummaryOut
* getSettlementSummaryOut `object`
  * summary [summary](#summary)

### getTransactionOut
* getTransactionOut `object`
  * storage_required_fields `array`: Fields required for transaction storage (can be added later - it's up to merchant software). Depends on the region/transaction type.
    * items [storage_required_fields](#storage_required_fields)
  * tax_required_fields `array`: Fields required for tax calculation. Depends on the region/transaction type.
    * items [tax_required_fields](#tax_required_fields)
  * transaction [transaction](#transaction)

### getTransactionsStatsByCountryIn
* getTransactionsStatsByCountryIn `object`
  * date_from **required** `string`: Date from in yyyy-MM format.
  * date_to **required** `string`: Date to in yyyy-MM format.
  * global_currency_code `string`: Global currency code to use for conversion - in addition to country's currency if rate is available. Conversion is indicative and based on most-recent rate from ECB.

### getTransactionsStatsByCountryOut
* getTransactionsStatsByCountryOut `object`
  * by_country `array`: Settlement stats.
    * items [by_country](#by_country)

### getTransactionsStatsIn
* getTransactionsStatsIn `object`
  * date_from **required** `string`: Date from in yyyy-MM format.
  * date_to **required** `string`: Date to in yyyy-MM format.
  * interval `string`: Interval. Accepted values are 'day', 'week' and 'month'.

### getTransactionsStatsOut
* getTransactionsStatsOut `object`
  * by_status [by_status](#by_status)

### input_transaction
* input_transaction `object`
  * additional_currencies [additional_currencies](#additional_currencies)
  * billing_country_code `string`: Billing two letter ISO country code.
  * buyer_credit_card_prefix `string`: First 6 digits of buyer's credit card prefix.
  * buyer_email `string`: Buyer's declared email address.
  * buyer_ip `string`: IP address of the buyer in dotted decimal (IPv4) or text format (IPv6).
  * buyer_name `string`: Buyer's name - first name and last name or company name.
  * buyer_tax_number `string`:  Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly.
  * comments `string`: Additional information about the transaction - for example if the evidence has been amended.
  * currency_code **required** `string`: Currency code for transaction - e.g. EUR.
  * custom_data `string`: Custom data related to transaction.
  * custom_fields `array`: Custom fields, stored as key-value pairs. This property is not processed and used mostly with Taxamo-built helpers.
    * items [custom_fields](#custom_fields)
  * custom_id `string`: Custom identifier provided upon transaction creation.
  * customer_id `string`: Free-form field for storing customer id.
  * description `string`: Transaction description.
  * evidence [evidence](#evidence)
  * force_country_code `string`: Two-letter ISO country code, e.g. FR. Use it to force country code for tax calculation.
  * invoice_address [invoice_address](#invoice_address)
  * invoice_date `string`: Invoice date of issue.
  * invoice_number `string`: Invoice number.
  * invoice_place `string`: Invoice place of issue.
  * note `string`: Additional note related to transaction state - for example if the transaction was created in a 'catch-all' mode or the VAT number re-check for subscriptions has failed.
  * order_date `string`: Order date in yyyy-MM-dd format, in merchant's timezone. If provided by the API caller, no timezone conversion is performed. Default value is current date and time. When using public token, the default value is used.
  * original_transaction_key `string`: Use data and evidence from original transaction. Tax will be re-calculated, but evidence won't be re-checked. This parameter is taken into account only when 'manual' flag is raised.
  * status `string`: Transaction status: 'N' - new, 'C' - confirmed. Can use 'C' in store-transaction! with private-token to create confirmed transaction, otherwise 'N' is default status. Not applicable for update-transaction!.
  * sub_account_id `string`: Sub account identifier.
  * supply_date `string`: Supply date in yyyy-MM-dd format.
  * tax_country_code `string`: Two-letter ISO country code, e.g. FR. This code applies to detected/set country for transaction, but can be set using manual mode.
  * tax_data [tax_data_schema](#tax_data_schema)
  * tax_deducted `boolean`: True if the transaction is deducted from tax and no tax is applied (it is untaxed). Either set automatically when VAT number validates with VIES correctly, but can also be provided in manual mode.
  * transaction_lines **required** `array`: Transaction lines.
    * items [input_transaction_line](#input_transaction_line)
  * verification_token `string`: Verification token

### input_transaction_line
* input_transaction_line `object`
  * amount `number`: Amount. Required if total amount or both unit price and quantity are not provided.
  * custom_fields `array`: Custom fields, stored as key-value pairs. This property is not processed and used mostly with Taxamo-built helpers.
    * items [custom_fields](#custom_fields)
  * custom_id **required** `string`: Custom id, provided by ecommerce software.
  * deducted_tax_rate `number`: Deducted tax rate, calculated by taxamo.
  * description `string`: Line contents description.
  * informative `boolean`: If the line is provided for informative purposes. Such line must have :tax-rate and optionally :tax-name - if not, API validation will fail for this line.
  * line_key `string`: Generated line key.
  * product_code `string`: Internal product code, used for invoicing for example.
  * product_tax_code `string`: External product tax code for a line, for example TIC in US Sales tax.
  * product_type `string`: Product type, according to dictionary /dictionaries/product_types. 
  * quantity `number`: Quantity Defaults to 1.
  * supply_date `string`: Date of supply in yyyy-MM-dd format.
  * tax_name `string`: Tax name, calculated by taxamo.  Can be overwritten when informative field is true.
  * tax_rate `number`: Tax rate, calculated by taxamo. Must be provided when informative field is true.
  * total_amount `number`: Total amount. Required if amount or both unit price and quantity are not provided.
  * unit_of_measure `string`: Unit of measure.
  * unit_price `number`: Unit price.

### input_transaction_update
* input_transaction_update `object`
  * additional_currencies [additional_currencies](#additional_currencies)
  * billing_country_code `string`: Billing two letter ISO country code.
  * buyer_credit_card_prefix `string`: First 6 digits of buyer's credit card prefix.
  * buyer_email `string`: Buyer's declared email address.
  * buyer_ip `string`: IP address of the buyer in dotted decimal (IPv4) or text format (IPv6).
  * buyer_name `string`: Buyer's name - first name and last name or company name.
  * buyer_tax_number `string`:  Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly.
  * comments `string`: Additional information about the transaction - for example if the evidence has been amended.
  * currency_code `string`: Currency code for transaction - e.g. EUR.
  * custom_data `string`: Custom data related to transaction.
  * custom_fields `array`: Custom fields, stored as key-value pairs. This property is not processed and used mostly with Taxamo-built helpers.
    * items [custom_fields](#custom_fields)
  * custom_id `string`: Custom identifier provided upon transaction creation.
  * customer_id `string`: Free-form field for storing customer id.
  * description `string`: Transaction description.
  * evidence [evidence](#evidence)
  * force_country_code `string`: Two-letter ISO country code, e.g. FR. Use it to force country code for tax calculation.
  * invoice_address [invoice_address](#invoice_address)
  * invoice_date `string`: Invoice date of issue.
  * invoice_number `string`: Invoice number.
  * invoice_place `string`: Invoice place of issue.
  * note `string`: Additional note related to transaction state - for example if the transaction was created in a 'catch-all' mode or the VAT number re-check for subscriptions has failed.
  * order_date `string`: Order date in yyyy-MM-dd format, in merchant's timezone. If provided by the API caller, no timezone conversion is performed. Default value is current date and time. When using public token, the default value is used.
  * original_transaction_key `string`: Use data and evidence from original transaction. Tax will be re-calculated, but evidence won't be re-checked. This parameter is taken into account only when 'manual' flag is raised.
  * status `string`: Transaction status: 'N' - new, 'C' - confirmed. Can use 'C' in store-transaction! with private-token to create confirmed transaction, otherwise 'N' is default status. Not applicable for update-transaction!.
  * sub_account_id `string`: Sub account identifier.
  * supply_date `string`: Supply date in yyyy-MM-dd format.
  * tax_country_code `string`: Two-letter ISO country code, e.g. FR. This code applies to detected/set country for transaction, but can be set using manual mode.
  * tax_data [tax_data_schema](#tax_data_schema)
  * tax_deducted `boolean`: True if the transaction is deducted from tax and no tax is applied (it is untaxed). Either set automatically when VAT number validates with VIES correctly, but can also be provided in manual mode.
  * transaction_lines `array`: Transaction lines.
    * items [input_transaction_line](#input_transaction_line)
  * verification_token `string`: Verification token

### invoice_address
* invoice_address `object`
  * address_detail `string`: Address details - for example apartament number.
  * building_number `string`: Building number.
  * city `string`: City name.
  * country `string`: 2-letter ISO country code.
  * freeform_address `string`: Freeform address. Use when structured data is not available. Will be used in SAF-MOSS file if other fields are not provided.
  * postal_code `string`: Postal code.
  * region `string`: Region, for United States - state code - e.g. NJ.
  * street_name `string`:  Street name.

### listPaymentsIn
* listPaymentsIn `object`
  * limit `string`: Max record count (no more than 100, defaults to 10).
  * offset `string`: How many records need to be skipped, defaults to 0.

### listPaymentsOut
* listPaymentsOut `object`
  * payments `array`: Payments.
    * items [payments](#payments)

### listRefundsOut
* listRefundsOut `object`
  * refunds `array`: Refunds
    * items [refunds](#refunds)

### listTransactionsIn
* listTransactionsIn `object`
  * currency_code `string`: Three letter ISO currency code.
  * filter_text `string`: Filtering expression
  * format `string`: Output format - supports 'csv' value for this operation.
  * has_note `boolean`: Return only transactions with a note field set.
  * invoice_number `string`: Transaction invoice number.
  * key_or_custom_id `string`: Taxamo provided transaction key or custom id
  * limit `integer`: Limit (no more than 1000, defaults to 100).
  * offset `integer`: Offset
  * order_date_from `string`: Order date from in yyyy-MM-dd format.
  * order_date_to `string`: Order date to in yyyy-MM-dd format.
  * original_transaction_key `string`: Taxamo provided original transaction key
  * sort_reverse `boolean`: If true, results are sorted in descending order.
  * statuses `string`: Comma separated list of of transaction statuses. 'N' - unconfirmed transaction, 'C' - confirmed transaction.
  * tax_country_code `string`: Two letter ISO tax country code.
  * tax_country_codes `string`: Comma separated list of two letter ISO tax country codes.
  * total_amount_greater_than `string`: Return only transactions with total amount greater than given number. Transactions with total amount equal to a given number (e.g. 0) are not returned.
  * total_amount_less_than `string`: Return only transactions with total amount less than a given number. Transactions with total amount equal to a given number (e.g. 1) are not returned.

### listTransactionsOut
* listTransactionsOut `object`
  * transactions `array`: Transactions matching the criteria.
    * items [transactions](#transactions)

### locateGivenIPOut
* locateGivenIPOut `object`
  * country [country](#country)
  * country_code `string`: Detected country code.
  * remote_addr `string`: Remote IP address.

### locateMyIPOut
* locateMyIPOut `object`
  * country [country](#country)
  * country_code `string`: Detected country code.
  * remote_addr `string`: Remote IP address.

### payments
* payments `object`
  * amount `number`: Amount that has been paid. Use negative value to register refunds.
  * payment_information `string`: Additional payment information.
  * payment_timestamp `string`: When the payment was received in yyyy-MM-dd HH:mm:ss (24 hour format, UTC+0 timezone).

### product_type_schema
* product_type_schema `object`
  * code `string`: Product type code.

### refunds
* refunds `object`
  * amount `number`: Amount, excluding tax, that was refunded.
  * informative `boolean`: Was this refund applied to an informative line?
  * line_key `string`: Line identifier. If neither line key or custom id is provided, the refund amount will be assigned to lines in order.
  * refund_note_number `string`: Sequential refund note number.
  * refund_note_url `string`: Refund note image url.
  * refund_reason `string`: Refund reason, displayed on the credit note.
  * refund_timestamp `string`: Refund timestamp in UTC timezone.
  * tax_amount `number`: Calculated tax amount, that was refunded.
  * tax_rate `number`: Tax rate for the line that was used for the refund calculation.
  * total_amount `number`: Total amount, including tax, that was refunded.

### report
* report `object`
  * amount `number`: Amount w/o tax
  * country_code `string`: Two letter ISO country code.
  * country_name `string`: Country name
  * country_subdivision `string`: Country subdivision (e.g. state or provice or county)
  * currency_code `string`: Three-letter ISO currency code.
  * skip_moss `boolean`: If true, this line should not be entered into MOSS and is provided for informative purposes only. For example because the country is the same as MOSS registration country and merchant country.
  * tax_amount `number`: Tax amount
  * tax_rate `number`: Tax rate
  * tax_region `string`: Tax region key

### settlement_daily_stats_schema
* settlement_daily_stats_schema `object`
  * b2b `integer`: B2B transaction count.
  * b2c `integer`: B2C transaction count.
  * count `integer`: Total transaction count.
  * day `string`: Date for stats in yyyy-MM-dd format.
  * day_raw `string`: Date for stats in yyyy-MM-dd'T'hh:mm:ss'Z' format.
  * eu_b2b `integer`: Total EU B2B transaction count.
  * eu_taxed `integer`: Total EU Taxed transaction count.
  * eu_total `integer`: Total EU transaction count.
  * untaxed `integer`: Untaxed transaction count.

### storage_required_fields
* storage_required_fields `object`
  * field_name `string`: Required field name.

### summary
* summary `object`
  * currency_code `string`: In which currency code the settlement was calculated.
  * end_date `string`: Period end date in yyyy-MM-dd'T'hh:mm:ss'Z' format.
  * fx_rate_date `string`: Date of ECB FX rate used for conversions in yyyy-MM-dd'T'hh:mm:ss'Z' format.
  * indicative `boolean`: If the quarter isn't closed yet, tax amount is indicative, as we cannot determine FX rate or all transactions yet.
  * quarter `string`: Quarter that this summary applies to.
  * start_date `string`: Period start date in yyyy-MM-dd'T'hh:mm:ss'Z' format.
  * tax_amount `number`: Tax amount due in this quarter.
  * tax_entity_name `string`: Tax entity that the tax is due.

### tax_data_schema
* tax_data_schema `object`
  * us_tax_exemption_certificate [us_tax_exemption_certificate_schema](#us_tax_exemption_certificate_schema)

### tax_required_fields
* tax_required_fields `object`
  * field_name `string`: Required field name.

### transaction
* transaction `object`
  * additional_currencies [additional_currencies](#additional_currencies)
  * amount `number`: Amount of transaction without tax.
  * billing_country_code `string`: Billing two letter ISO country code.
  * buyer_credit_card_prefix `string`: First 6 digits of buyer's credit card prefix.
  * buyer_email `string`: Buyer's declared email address.
  * buyer_ip `string`: IP address of the buyer in dotted decimal (IPv4) or text format (IPv6).
  * buyer_name `string`: Buyer's name - first name and last name or company name.
  * buyer_tax_number `string`:  Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly.
  * buyer_tax_number_valid `boolean`: If the buyer tax number has been provided and was validated successfully. Always true for domestic transactions (billing country same as merchant's country), tax number doesn't get validated in that case.
  * comments `string`: Additional information about the transaction - for example if the evidence has been amended.
  * confirm_timestamp `string`: Date and time of transaction confirmation.
  * countries [countries](#countries)
  * create_timestamp `string`: Date and time of transaction creation.
  * currency_code **required** `string`: Currency code for transaction - e.g. EUR.
  * custom_data `string`: Custom data related to transaction.
  * custom_fields `array`: Custom fields, stored as key-value pairs. This property is not processed and used mostly with Taxamo-built helpers.
    * items [custom_fields](#custom_fields)
  * custom_id `string`: Custom identifier provided upon transaction creation.
  * customer_id `string`: Free-form field for storing customer id.
  * deducted_tax_amount `number`: How much tax has been deducted.
  * description `string`: Transaction description.
  * evidence [evidence](#evidence)
  * external_key `string`: Transaction external key
  * force_country_code `string`: Two-letter ISO country code, e.g. FR. Use it to force country code for tax calculation.
  * fully_informative `boolean`: Set to true if transaction has only informative lines.
  * invoice_address [invoice_address](#invoice_address)
  * invoice_date `string`: Invoice date of issue.
  * invoice_image_url `string`: Invoice image URL - provided by Taxamo.
  * invoice_number `string`: Invoice number.
  * invoice_place `string`: Invoice place of issue.
  * key `string`: Id generated by taxamo.
  * kind `string`: Transaction kind: eu-b2c, eu-b2b, domestic, untaxed
  * manual `boolean`: Is the transaction created manually - using private token. In manual mode, it is the merchant who calculates tax country and validates evidence. If you need API to do that when accessing the API with private token, just skip the 'manual' flag or use false value there and provide customer's ip address through buyer_ip field. Manual mode is also used when using original_transaction_key field.
  * note `string`: Additional note related to transaction state - for example if the transaction was created in a 'catch-all' mode or the VAT number re-check for subscriptions has failed.
  * order_date `string`: Order date in yyyy-MM-dd format, in merchant's timezone. If provided by the API caller, no timezone conversion is performed. Default value is current date and time. When using public token, the default value is used.
  * original_transaction_key `string`: Use data and evidence from original transaction. Tax will be re-calculated, but evidence won't be re-checked. This parameter is taken into account only when 'manual' flag is raised.
  * refunded_tax_amount `number`: Refunded tax amount.
  * refunded_total_amount `number`: Total amount refunde (including tax).
  * source `string`: Transaction source software - e.g. plugin
  * status `string`: Transaction status: 'N' - new, 'C' - confirmed. Can use 'C' in store-transaction! with private-token to create confirmed transaction, otherwise 'N' is default status. Not applicable for update-transaction!.
  * sub_account_id `string`: Sub account identifier.
  * supply_date `string`: Supply date in yyyy-MM-dd format.
  * tax_amount `number`: Tax amount of transaction.
  * tax_country_code `string`: Two-letter ISO country code, e.g. FR. This code applies to detected/set country for transaction, but can be set using manual mode.
  * tax_data [tax_data_schema](#tax_data_schema)
  * tax_deducted `boolean`: If the transaction is in a country supported by Taxamo, but the tax is not calculated due to merchant settings or EU B2B transaction for example.
  * tax_entity_name `string`: To which entity is the tax due.
  * tax_number_service `string`: Tax number service identifier - if available for a given region and the region is enabled.
  * tax_supported `boolean`: Is tax calculation supported for a detected tax location?
  * tax_timezone `string`: Timezone name for tax transaction.
  * test `boolean`: Was this transaction created in test mode?
  * total_amount `number`: Total amount of transaction.
  * transaction_lines **required** `array`: Transaction lines.
    * items [transaction_lines](#transaction_lines)
  * verification_token `string`: Verification token

### transaction_lines
* transaction_lines `object`
  * additional_currencies [additional_currencies](#additional_currencies)
  * amount `number`: Amount. Required if total amount or both unit price and quantity are not provided.
  * custom_fields `array`: Custom fields, stored as key-value pairs. This property is not processed and used mostly with Taxamo-built helpers.
    * items [custom_fields](#custom_fields)
  * custom_id **required** `string`: Custom id, provided by ecommerce software.
  * deducted_tax_amount `number`: Deducted tax amount, calculated by taxmo.
  * deducted_tax_rate `number`: Deducted tax rate, calculated by taxamo.
  * description `string`: Line contents description.
  * id `number`: Generated id.
  * informative `boolean`: If the line is provided for informative purposes. Such line must have :tax-rate and optionally :tax-name - if not, API validation will fail for this line.
  * line_key `string`: Generated line key.
  * product_code `string`: Internal product code, used for invoicing for example.
  * product_tax_code `string`: External product tax code for a line, for example TIC in US Sales tax.
  * product_type `string`: Product type, according to dictionary /dictionaries/product_types. 
  * quantity `number`: Quantity Defaults to 1.
  * refunded_tax_amount `number`: Refunded tax amount, calculated by taxmo.
  * refunded_total_amount `number`: Refunded total amount, calculated by taxmo.
  * supply_date `string`: Date of supply in yyyy-MM-dd format.
  * tax_amount `number`: Tax amount, calculated by taxamo.
  * tax_name `string`: Tax name, calculated by taxamo.  Can be overwritten when informative field is true.
  * tax_rate `number`: Tax rate, calculated by taxamo. Must be provided when informative field is true.
  * total_amount `number`: Total amount. Required if amount or both unit price and quantity are not provided.
  * unit_of_measure `string`: Unit of measure.
  * unit_price `number`: Unit price.

### transactions
* transactions `object`
  * additional_currencies [additional_currencies](#additional_currencies)
  * amount `number`: Amount of transaction without tax.
  * billing_country_code `string`: Billing two letter ISO country code.
  * buyer_credit_card_prefix `string`: First 6 digits of buyer's credit card prefix.
  * buyer_email `string`: Buyer's declared email address.
  * buyer_ip `string`: IP address of the buyer in dotted decimal (IPv4) or text format (IPv6).
  * buyer_name `string`: Buyer's name - first name and last name or company name.
  * buyer_tax_number `string`:  Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly.
  * buyer_tax_number_valid `boolean`: If the buyer tax number has been provided and was validated successfully. Always true for domestic transactions (billing country same as merchant's country), tax number doesn't get validated in that case.
  * comments `string`: Additional information about the transaction - for example if the evidence has been amended.
  * confirm_timestamp `string`: Date and time of transaction confirmation.
  * countries [countries](#countries)
  * create_timestamp `string`: Date and time of transaction creation.
  * currency_code **required** `string`: Currency code for transaction - e.g. EUR.
  * custom_data `string`: Custom data related to transaction.
  * custom_fields `array`: Custom fields, stored as key-value pairs. This property is not processed and used mostly with Taxamo-built helpers.
    * items [custom_fields](#custom_fields)
  * custom_id `string`: Custom identifier provided upon transaction creation.
  * customer_id `string`: Free-form field for storing customer id.
  * deducted_tax_amount `number`: How much tax has been deducted.
  * description `string`: Transaction description.
  * evidence [evidence](#evidence)
  * external_key `string`: Transaction external key
  * force_country_code `string`: Two-letter ISO country code, e.g. FR. Use it to force country code for tax calculation.
  * fully_informative `boolean`: Set to true if transaction has only informative lines.
  * invoice_address [invoice_address](#invoice_address)
  * invoice_date `string`: Invoice date of issue.
  * invoice_image_url `string`: Invoice image URL - provided by Taxamo.
  * invoice_number `string`: Invoice number.
  * invoice_place `string`: Invoice place of issue.
  * key `string`: Id generated by taxamo.
  * kind `string`: Transaction kind: eu-b2c, eu-b2b, domestic, untaxed
  * manual `boolean`: Is the transaction created manually - using private token. In manual mode, it is the merchant who calculates tax country and validates evidence. If you need API to do that when accessing the API with private token, just skip the 'manual' flag or use false value there and provide customer's ip address through buyer_ip field. Manual mode is also used when using original_transaction_key field.
  * note `string`: Additional note related to transaction state - for example if the transaction was created in a 'catch-all' mode or the VAT number re-check for subscriptions has failed.
  * order_date `string`: Order date in yyyy-MM-dd format, in merchant's timezone. If provided by the API caller, no timezone conversion is performed. Default value is current date and time. When using public token, the default value is used.
  * original_transaction_key `string`: Use data and evidence from original transaction. Tax will be re-calculated, but evidence won't be re-checked. This parameter is taken into account only when 'manual' flag is raised.
  * refunded_tax_amount `number`: Refunded tax amount.
  * refunded_total_amount `number`: Total amount refunde (including tax).
  * source `string`: Transaction source software - e.g. plugin
  * status `string`: Transaction status: 'N' - new, 'C' - confirmed. Can use 'C' in store-transaction! with private-token to create confirmed transaction, otherwise 'N' is default status. Not applicable for update-transaction!.
  * sub_account_id `string`: Sub account identifier.
  * supply_date `string`: Supply date in yyyy-MM-dd format.
  * tax_amount `number`: Tax amount of transaction.
  * tax_country_code `string`: Two-letter ISO country code, e.g. FR. This code applies to detected/set country for transaction, but can be set using manual mode.
  * tax_data [tax_data_schema](#tax_data_schema)
  * tax_deducted `boolean`: If the transaction is in a country supported by Taxamo, but the tax is not calculated due to merchant settings or EU B2B transaction for example.
  * tax_entity_name `string`: To which entity is the tax due.
  * tax_number_service `string`: Tax number service identifier - if available for a given region and the region is enabled.
  * tax_supported `boolean`: Is tax calculation supported for a detected tax location?
  * tax_timezone `string`: Timezone name for tax transaction.
  * test `boolean`: Was this transaction created in test mode?
  * total_amount `number`: Total amount of transaction.
  * transaction_lines **required** `array`: Transaction lines.
    * items [transaction_lines](#transaction_lines)
  * verification_token `string`: Verification token

### unconfirmTransactionIn
* unconfirmTransactionIn `object`
  * transaction [input_transaction_update](#input_transaction_update)

### unconfirmTransactionOut
* unconfirmTransactionOut `object`
  * storage_required_fields `array`: Fields required for transaction storage (can be added later - it's up to merchant software). Depends on the region/transaction type.
    * items [storage_required_fields](#storage_required_fields)
  * tax_required_fields `array`: Fields required for tax calculation. Depends on the region/transaction type.
    * items [tax_required_fields](#tax_required_fields)
  * transaction [transaction](#transaction)

### updateTransactionIn
* updateTransactionIn `object`
  * transaction [transaction](#transaction)

### updateTransactionOut
* updateTransactionOut `object`
  * storage_required_fields `array`: Fields required for transaction storage (can be added later - it's up to merchant software). Depends on the region/transaction type.
    * items [storage_required_fields](#storage_required_fields)
  * tax_required_fields `array`: Fields required for tax calculation. Depends on the region/transaction type.
    * items [tax_required_fields](#tax_required_fields)
  * transaction [transaction](#transaction)

### us_tax_exempt_state
* us_tax_exempt_state `object`
  * identifier_for_exemption_reason `string`: Identifier for exemption reason.
  * reason_for_exemption `string`: Exemption reason
  * state_abbr **required** `string`: Two character state abbreviation.

### us_tax_exemption_certificate_details_schema
* us_tax_exemption_certificate_details_schema `object`
  * exempt_states **required** `array`: List of states where the certificate is valid.
    * items [us_tax_exempt_state](#us_tax_exempt_state)
  * purchaser_address1 **required** `string`: Purchaser's first address line.
  * purchaser_address2 `string`: Purchaser's second address line.
  * purchaser_business_type **required** `string`: Purchaser business type.
  * purchaser_business_type_other_value `string`: If business type is other, a short description must be provided.
  * purchaser_city **required** `string`: Purchaser's city.
  * purchaser_exemption_reason **required** `string`: The reason for exemption reason.
  * purchaser_exemption_reason_value **required** `string`: The value of exemption reason.
  * purchaser_first_name **required** `string`: Purchaser's first name.
  * purchaser_last_name **required** `string`: Purchaser's last name.
  * purchaser_state **required** `string`: Purchaser's state.
  * purchaser_tax_id **required** [us_tax_id](#us_tax_id)
  * purchaser_title `string`: Purchaser's title.
  * purchaser_zip **required** `string`: Purchaser's zip code.
  * single_purchase `boolean`: Set to true if this certificate is valid for single purchase only.
  * single_purchase_order_identifier `string`: Purchase/order identifier for single purchase.

### us_tax_exemption_certificate_schema
* us_tax_exemption_certificate_schema `object`
  * certificate_id `string`: The exemption certificate number.
  * detail [us_tax_exemption_certificate_details_schema](#us_tax_exemption_certificate_details_schema)

### us_tax_id
* us_tax_id `object`
  * state_of_issue `string`: State of issue
  * tax_id `string`: Tax ID
  * tax_id_type **required** `string`: Tax id type.

### validateTaxNumberIn
* validateTaxNumberIn `object`
  * country_code `string`: Two-letter ISO country code.

### validateTaxNumberOut
* validateTaxNumberOut `object`
  * billing_country_code `string`: Billing two letter ISO country code.
  * buyer_tax_number `string`:  Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly.
  * buyer_tax_number_valid `boolean`: If the buyer tax number has been provided and was validated successfully. Always true for domestic transactions (billing country same as merchant's country), tax number doesn't get validated in that case.
  * tax_deducted `boolean`: If the transaction is in a country supported by Taxamo, but the tax is not calculated due to merchant settings or EU B2B transaction for example.

### verifySMSTokenOut
* verifySMSTokenOut `object`
  * country_code `string`: Verified country code, returned if operation was successful.


