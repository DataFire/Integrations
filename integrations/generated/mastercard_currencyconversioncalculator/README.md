# @datafire/mastercard_currencyconversioncalculator

Client library for API for the Settlement Currency Rate converter

## Installation and Usage
```bash
npm install --save @datafire/mastercard_currencyconversioncalculator
```
```js
let mastercard_currencyconversioncalculator = require('@datafire/mastercard_currencyconversioncalculator').create();

.then(data => {
  console.log(data);
});
```

## Description

This API provides a range of functions to get back currency conversion rates and amounts based on current Mastercard currency conversion values.

## Actions

### getConversionDetailUsingGET
Get the currency conversion rate details.


```js
mastercard_currencyconversioncalculator.getConversionDetailUsingGET({
  "fxDate": "",
  "transCurr": "",
  "crdhldBillCurr": "",
  "transAmt": 0
}, context)
```

#### Input
* input `object`
  * fxDate **required** `string`: Date of the requested FX rates.
  * transCurr **required** `string`: Currency of the transaction.
  * crdhldBillCurr **required** `string`: Cardholder billing currency.
  * bankFee `number`: Additional fees imposed by the bank.
  * transAmt **required** `number`: Amount in the transaction currency.

#### Output
* output [ConversionRateRequest](#conversionraterequest)

### isRateIssuedUsingGET
Determine if the settlement rate has been issued.


```js
mastercard_currencyconversioncalculator.isRateIssuedUsingGET({}, context)
```

#### Input
* input `object`
  * date `string`: The date by which the rate would have been issued.

#### Output
* output [SettlementRateIssuedRequest](#settlementrateissuedrequest)

### getCurrencyRateDataUsingGET
List of supported currencies.


```js
mastercard_currencyconversioncalculator.getCurrencyRateDataUsingGET(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SettlementCurrencyRequest](#settlementcurrencyrequest)



## Definitions

### Conversion
* Conversion `object`
  * bankFee `number`: Additional fees imposed by the bank.
  * conversionRate `number`: Rate applied to the transaction to convert from Transaction Currency to Cardholder Billing Currency.
  * crdhldBillAmt `number`: Amount in the cardholder billing currency.
  * crdhldBillCurr `string`: Cardholder billing currency.
  * errorCode `string`: The error code associated with the error being returned.
  * errorMessage `string`: The reason for the error.
  * fxDate `string`: Date of the requested FX rates.
  * transAmt `number`: Amount in the transaction currency.
  * transCurr `string`: Currency of the transaction.

### ConversionRateRequest
* ConversionRateRequest `object`
  * data [Conversion](#conversion)
  * date `string`: The date and time the API is being called in GMT.
  * description `string`: The description of the API being called.
  * name `string`: The name of the service being requested.
  * type `string`: The type of response being returned by the API.

### Currency
* Currency `object`
  * alphaCd `string`: The Alpha code for the currency.
  * currNam `string`: The full name of the currency.

### SettlementCurrency
* SettlementCurrency `object`
  * currencies `array`
    * items [Currency](#currency)

### SettlementCurrencyRequest
* SettlementCurrencyRequest `object`
  * data [SettlementCurrency](#settlementcurrency)
  * date `string`: The date and time the API is being called in GMT.
  * description `string`: The description of the API being called.
  * name `string`: The name of the service being requested.

### SettlementRateIssued
* SettlementRateIssued `object`
  * rateIssued `string`: The requested foreign exchange rate.

### SettlementRateIssuedRequest
* SettlementRateIssuedRequest `object`
  * data [SettlementRateIssued](#settlementrateissued)
  * date `string`: The date and time the API is being called in GMT.
  * description `string`: The description of the API being called.
  * name `string`: The name of the service being requested.


