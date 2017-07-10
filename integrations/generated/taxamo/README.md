# @datafire/taxamo
Taxamo’s elegant suite of APIs and comprehensive reporting dashboard enables digital merchants to easily comply with EU regulatory requirements on tax calculation, evidence collection, tax return creation and data storage.

## Operation: getCountriesDict
Countries

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "tax_supported": {
      "type": "boolean",
      "description": "Should only countries with tax supported be listed?"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/getCountriesDictOut"
}
```
## Operation: getCurrenciesDict
Currencies

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/getCurrenciesDictOut"
}
```
## Operation: getProductTypesDict
Product types

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/getProductTypesDictOut"
}
```
## Operation: locateMyIP
Locate IP

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/locateMyIPOut"
}
```
## Operation: locateGivenIP
Locate provided IP

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ip": {
      "type": "string",
      "description": "IP address."
    }
  },
  "additionalProperties": false,
  "required": [
    "ip"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/locateGivenIPOut"
}
```
## Operation: getDomesticSummaryReport
Calculate domestic summary

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Output format. 'xml' and 'csv' values are accepted. Default format - json"
    },
    "country_code": {
      "type": "string",
      "description": "ISO 2-letter country code which will be used for determining which country is domestic."
    },
    "currency_code": {
      "type": "string",
      "description": "ISO 3-letter currency code, e.g. EUR or USD. Defaults to the one assigned to MOSS calculations for a given country code."
    },
    "start_month": {
      "type": "string",
      "description": "Period start month in yyyy-MM format."
    },
    "end_month": {
      "type": "string",
      "description": "Period end month in yyyy-MM format."
    },
    "fx_date_type": {
      "type": "string",
      "description": "Which date should be used for FX."
    }
  },
  "additionalProperties": false,
  "required": [
    "country_code",
    "start_month",
    "end_month"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/getDomesticSummaryReportOut"
}
```
## Operation: getEuViesReport
Calculate EU VIES report

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "period_length": {
      "type": "string",
      "description": "Length of report period. 'month', 'quarter' and 'year' values are accepted. Required only if Large Filer Format is requested."
    },
    "lff_sequence_number": {
      "type": "string",
      "description": "Sequence number used to generate report in Large Filer Format. If not specified then '0000000001' will be used."
    },
    "transformation": {
      "type": "string",
      "description": "Which transformation should be applied. Please note that transformation will be applied only for xml and csv formats."
    },
    "currency_code": {
      "type": "string",
      "description": "ISO 3-letter currency code, e.g. EUR or USD. Defaults to the one assigned to MOSS calculations for a given country code."
    },
    "end_month": {
      "type": "string",
      "description": "Period end month in yyyy-MM format."
    },
    "tax_id": {
      "type": "string",
      "description": "MOSS-assigned tax ID - if not provided, merchant's national tax number will be used."
    },
    "start_month": {
      "type": "string",
      "description": "Period start month in yyyy-MM format."
    },
    "eu_country_code": {
      "type": "string",
      "description": "ISO 2-letter country code which will be used for determining which country is domestic."
    },
    "fx_date_type": {
      "type": "string",
      "description": "Which date should be used for FX."
    },
    "format": {
      "type": "string",
      "description": "Output format. 'xml', 'csv' and 'lff' (only for Ireland) values are accepted as well"
    }
  },
  "additionalProperties": false,
  "required": [
    "end_month",
    "start_month",
    "eu_country_code"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/getEuViesReportOut"
}
```
## Operation: getDetailedRefunds
Detailed refunds

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "format": {
      "type": "string",
      "description": "Output format. 'json' or 'csv'. Default value is 'json'"
    },
    "country_codes": {
      "type": "string",
      "description": "Comma separated list of 2-letter country codes"
    },
    "date_from": {
      "type": "string",
      "description": "Take only refunds issued at or after the date. Format: yyyy-MM-dd"
    },
    "date_to": {
      "type": "string",
      "description": "Take only refunds issued at or before the date. Format: yyyy-MM-dd"
    },
    "limit": {
      "type": "number",
      "description": "Limit (no more than 1000, defaults to 100)."
    },
    "offset": {
      "type": "number",
      "description": "Offset. Defaults to 0"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/getDetailedRefundsOut"
}
```
## Operation: getRefunds
Fetch refunds

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Output format. 'csv' value is accepted as well"
    },
    "moss_country_code": {
      "type": "string",
      "description": "MOSS country code, used to determine currency. If ommited, merchant default setting is used."
    },
    "tax_region": {
      "type": "string",
      "description": "Tax region key, defaults to EU for backwards compatibility."
    },
    "date_from": {
      "type": "string",
      "description": "Take only refunds issued at or after the date. Format: yyyy-MM-dd"
    }
  },
  "additionalProperties": false,
  "required": [
    "date_from"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/getRefundsOut"
}
```
## Operation: getSettlementSummary
Fetch summary

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "moss_country_code": {
      "type": "string",
      "description": "MOSS country code, used to determine currency. If ommited, merchant default setting is used."
    },
    "tax_region": {
      "type": "string",
      "description": "Tax region key"
    },
    "start_month": {
      "type": "string",
      "description": "Period start month in yyyy-MM format. Either quarter or start-month and end-month have to be provided."
    },
    "end_month": {
      "type": "string",
      "description": "Period end month in yyyy-MM format. Either quarter or start-month and end-month have to be provided."
    },
    "quarter": {
      "type": "string",
      "description": "Quarter in yyyy-MM format. If start-date and end-date are provided, quarter is ignored and should be set to 'range'."
    }
  },
  "additionalProperties": false,
  "required": [
    "quarter"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/getSettlementSummaryOut"
}
```
## Operation: getSettlement
Fetch settlement

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "moss_tax_id": {
      "type": "string",
      "description": "MOSS-assigned tax ID - if not provided, merchant's national tax number will be used. Deprecated, please use tax-id."
    },
    "currency_code": {
      "type": "string",
      "description": "ISO 3-letter currency code, e.g. EUR or USD. If provided, all amounts will be coerced for this currency. Defaults to region's currency code."
    },
    "end_month": {
      "type": "string",
      "description": "Period end month in yyyy-MM format. Either quarter or start-month and end-month have to be provided."
    },
    "tax_id": {
      "type": "string",
      "description": "MOSS-assigned tax ID - if not provided, merchant's national tax number will be used. Deprecated, please use tax-id."
    },
    "refund_date_kind_override": {
      "type": "string",
      "description": "Set to 'order_date' to show only refunds for the transactions in the selected reporting period. Set to 'refund_timestamp' to show refunds that were created in the selected reporting period. Do not set to use the default region's setting."
    },
    "start_month": {
      "type": "string",
      "description": "Period start month in yyyy-MM format. Either quarter or start-month and end-month have to be provided."
    },
    "moss_country_code": {
      "type": "string",
      "description": "MOSS country code, used to determine currency/region. If ommited, merchant default setting is used. Deprecated: please use tax-country-code."
    },
    "format": {
      "type": "string",
      "description": "Output format. 'csv' value is accepted as well"
    },
    "tax_country_code": {
      "type": "string",
      "description": "Tax entity country code, used to determine currency/region. "
    },
    "quarter": {
      "type": "string",
      "description": "Quarter in yyyy-MM format. If start-date and end-date are provided, quarter is ignored and should be set to 'range'."
    }
  },
  "additionalProperties": false,
  "required": [
    "quarter"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/getSettlementOut"
}
```
## Operation: getSettlementStatsByCountry
Settlement by country

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "date_from": {
      "type": "string",
      "description": "Date from in yyyy-MM format."
    },
    "date_to": {
      "type": "string",
      "description": "Date to in yyyy-MM format."
    }
  },
  "additionalProperties": false,
  "required": [
    "date_from",
    "date_to"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/getSettlementStatsByCountryOut"
}
```
## Operation: getSettlementStatsByTaxationType
Settlement by tax type

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "date_from": {
      "type": "string",
      "description": "Date from in yyyy-MM format."
    },
    "date_to": {
      "type": "string",
      "description": "Date to in yyyy-MM format."
    }
  },
  "additionalProperties": false,
  "required": [
    "date_from",
    "date_to"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/getSettlementStatsByTaxationTypeOut"
}
```
## Operation: getDailySettlementStats
Settlement stats over time

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "interval": {
      "type": "string",
      "description": "Interval type - day, week, month."
    },
    "date_from": {
      "type": "string",
      "description": "Date from in yyyy-MM format."
    },
    "date_to": {
      "type": "string",
      "description": "Date to in yyyy-MM format."
    }
  },
  "additionalProperties": false,
  "required": [
    "interval",
    "date_from",
    "date_to"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/getDailySettlementStatsOut"
}
```
## Operation: getTransactionsStats
Transaction stats

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "date_from": {
      "type": "string",
      "description": "Date from in yyyy-MM format."
    },
    "date_to": {
      "type": "string",
      "description": "Date to in yyyy-MM format."
    },
    "interval": {
      "type": "string",
      "description": "Interval. Accepted values are 'day', 'week' and 'month'."
    }
  },
  "additionalProperties": false,
  "required": [
    "date_from",
    "date_to"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/getTransactionsStatsOut"
}
```
## Operation: getTransactionsStatsByCountry
Settlement by country

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "global_currency_code": {
      "type": "string",
      "description": "Global currency code to use for conversion - in addition to country's currency if rate is available. Conversion is indicative and based on most-recent rate from ECB."
    },
    "date_from": {
      "type": "string",
      "description": "Date from in yyyy-MM format."
    },
    "date_to": {
      "type": "string",
      "description": "Date to in yyyy-MM format."
    }
  },
  "additionalProperties": false,
  "required": [
    "date_from",
    "date_to"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/getTransactionsStatsByCountryOut"
}
```
## Operation: calculateSimpleTax
Simple tax

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "product_type": {
      "type": "string",
      "description": "Product type, according to dictionary /dictionaries/product_types. "
    },
    "invoice_address_city": {
      "type": "string",
      "description": "Invoice address/postal_code"
    },
    "buyer_credit_card_prefix": {
      "type": "string",
      "description": "First 6 digits of buyer's credit card prefix."
    },
    "currency_code": {
      "type": "string",
      "description": "Currency code for transaction - e.g. EUR."
    },
    "invoice_address_region": {
      "type": "string",
      "description": "Invoice address/region"
    },
    "unit_price": {
      "type": "number",
      "description": "Unit price."
    },
    "quantity": {
      "type": "number",
      "description": "Quantity Defaults to 1."
    },
    "buyer_tax_number": {
      "type": "string",
      "description": " Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly."
    },
    "force_country_code": {
      "type": "string",
      "description": "Two-letter ISO country code, e.g. FR. Use it to force country code for tax calculation."
    },
    "order_date": {
      "type": "string",
      "description": "Order date in yyyy-MM-dd format, in merchant's timezone. If provided by the API caller, no timezone conversion is performed. Default value is current date and time. When using public token, the default value is used."
    },
    "amount": {
      "type": "number",
      "description": "Amount. Required if total amount or both unit price and quantity are not provided."
    },
    "billing_country_code": {
      "type": "string",
      "description": "Billing two letter ISO country code."
    },
    "invoice_address_postal_code": {
      "type": "string",
      "description": "Invoice address/postal_code"
    },
    "total_amount": {
      "type": "number",
      "description": "Total amount. Required if amount or both unit price and quantity are not provided."
    },
    "tax_deducted": {
      "type": "boolean",
      "description": "If the transaction is in a country supported by Taxamo, but the tax is not calculated due to merchant settings or EU B2B transaction for example."
    }
  },
  "additionalProperties": false,
  "required": [
    "currency_code"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/calculateSimpleTaxOut"
}
```
## Operation: calculateTax
Calculate tax

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "input": {
      "$ref": "#/definitions/calculateTaxIn"
    }
  },
  "additionalProperties": false,
  "required": [
    "input"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/calculateTaxOut"
}
```
## Operation: calculateTaxLocation
Calculate location

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "billing_country_code": {
      "type": "string",
      "description": "Billing two letter ISO country code."
    },
    "buyer_credit_card_prefix": {
      "type": "string",
      "description": "First 6 digits of buyer's credit card prefix."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/calculateTaxLocationOut"
}
```
## Operation: validateTaxNumber
Validate VAT number

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "country_code": {
      "type": "string",
      "description": "Two-letter ISO country code."
    },
    "tax_number": {
      "type": "string",
      "description": "Tax number"
    }
  },
  "additionalProperties": false,
  "required": [
    "tax_number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/validateTaxNumberOut"
}
```
## Operation: listTransactions
Browse transactions

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "filter_text": {
      "type": "string",
      "description": "Filtering expression"
    },
    "offset": {
      "type": "integer",
      "description": "Offset"
    },
    "has_note": {
      "type": "boolean",
      "description": "Return only transactions with a note field set."
    },
    "key_or_custom_id": {
      "type": "string",
      "description": "Taxamo provided transaction key or custom id"
    },
    "currency_code": {
      "type": "string",
      "description": "Three letter ISO currency code."
    },
    "order_date_to": {
      "type": "string",
      "description": "Order date to in yyyy-MM-dd format."
    },
    "sort_reverse": {
      "type": "boolean",
      "description": "If true, results are sorted in descending order."
    },
    "limit": {
      "type": "integer",
      "description": "Limit (no more than 1000, defaults to 100)."
    },
    "invoice_number": {
      "type": "string",
      "description": "Transaction invoice number."
    },
    "tax_country_codes": {
      "type": "string",
      "description": "Comma separated list of two letter ISO tax country codes."
    },
    "statuses": {
      "type": "string",
      "description": "Comma separated list of of transaction statuses. 'N' - unconfirmed transaction, 'C' - confirmed transaction."
    },
    "original_transaction_key": {
      "type": "string",
      "description": "Taxamo provided original transaction key"
    },
    "order_date_from": {
      "type": "string",
      "description": "Order date from in yyyy-MM-dd format."
    },
    "total_amount_greater_than": {
      "type": "string",
      "description": "Return only transactions with total amount greater than given number. Transactions with total amount equal to a given number (e.g. 0) are not returned."
    },
    "format": {
      "type": "string",
      "description": "Output format - supports 'csv' value for this operation."
    },
    "total_amount_less_than": {
      "type": "string",
      "description": "Return only transactions with total amount less than a given number. Transactions with total amount equal to a given number (e.g. 1) are not returned."
    },
    "tax_country_code": {
      "type": "string",
      "description": "Two letter ISO tax country code."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/listTransactionsOut"
}
```
## Operation: createTransaction
Store transaction

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "input": {
      "$ref": "#/definitions/createTransactionIn"
    }
  },
  "additionalProperties": false,
  "required": [
    "input"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/createTransactionOut"
}
```
## Operation: cancelTransaction
Delete transaction

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string",
      "description": "Transaction key"
    }
  },
  "additionalProperties": false,
  "required": [
    "key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/cancelTransactionOut"
}
```
## Operation: getTransaction
Retrieve transaction data.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string",
      "description": "Transaction key"
    }
  },
  "additionalProperties": false,
  "required": [
    "key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/getTransactionOut"
}
```
## Operation: updateTransaction
Update transaction

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string",
      "description": "Transaction key."
    },
    "input": {
      "$ref": "#/definitions/updateTransactionIn"
    }
  },
  "additionalProperties": false,
  "required": [
    "key",
    "input"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/updateTransactionOut"
}
```
## Operation: confirmTransaction
Confirm transaction

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string",
      "description": "Transaction key."
    },
    "input": {
      "$ref": "#/definitions/confirmTransactionIn"
    }
  },
  "additionalProperties": false,
  "required": [
    "key",
    "input"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/confirmTransactionOut"
}
```
## Operation: emailRefund
Email credit note

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string",
      "description": "Transaction key."
    },
    "refund_note_number": {
      "type": "string",
      "description": "Refund note id."
    },
    "input": {
      "$ref": "#/definitions/emailRefundIn"
    }
  },
  "additionalProperties": false,
  "required": [
    "key",
    "refund_note_number",
    "input"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/emailRefundOut"
}
```
## Operation: emailInvoice
Email invoice

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string",
      "description": "Transaction key."
    },
    "input": {
      "$ref": "#/definitions/emailInvoiceIn"
    }
  },
  "additionalProperties": false,
  "required": [
    "key",
    "input"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/emailInvoiceOut"
}
```
## Operation: listPayments
List payments

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "string",
      "description": "Max record count (no more than 100, defaults to 10)."
    },
    "offset": {
      "type": "string",
      "description": "How many records need to be skipped, defaults to 0."
    },
    "key": {
      "type": "string",
      "description": "Transaction key."
    }
  },
  "additionalProperties": false,
  "required": [
    "key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/listPaymentsOut"
}
```
## Operation: createPayment
Register a payment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string",
      "description": "Transaction key."
    },
    "input": {
      "$ref": "#/definitions/createPaymentIn"
    }
  },
  "additionalProperties": false,
  "required": [
    "key",
    "input"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/createPaymentOut"
}
```
## Operation: capturePayment
Capture payment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string",
      "description": "Transaction key."
    }
  },
  "additionalProperties": false,
  "required": [
    "key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/capturePaymentOut"
}
```
## Operation: listRefunds
Get transaction refunds

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string",
      "description": "Transaction key."
    }
  },
  "additionalProperties": false,
  "required": [
    "key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/listRefundsOut"
}
```
## Operation: createRefund
Create a refund

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string",
      "description": "Transaction key."
    },
    "input": {
      "$ref": "#/definitions/createRefundIn"
    }
  },
  "additionalProperties": false,
  "required": [
    "key",
    "input"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/createRefundOut"
}
```
## Operation: unconfirmTransaction
Un-confirm the transaction

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string",
      "description": "Transaction key."
    },
    "input": {
      "$ref": "#/definitions/unconfirmTransactionIn"
    }
  },
  "additionalProperties": false,
  "required": [
    "key",
    "input"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/unconfirmTransactionOut"
}
```
## Operation: createSMSToken
Create SMS token

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "input": {
      "$ref": "#/definitions/createSMSTokenIn"
    }
  },
  "additionalProperties": false,
  "required": [
    "input"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/createSMSTokenOut"
}
```
## Operation: verifySMSToken
Verify SMS token

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "Provided token."
    }
  },
  "additionalProperties": false,
  "required": [
    "token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/verifySMSTokenOut"
}
```
