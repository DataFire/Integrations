# @datafire/whapi_locations

Client library for Locations

## Installation and Usage
```bash
npm install --save @datafire/whapi_locations
```
```js
let whapi_locations = require('@datafire/whapi_locations').create({
  apiKey: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Locations API is a collection of methods that support geographical information. The first method is an address lookup service for UK addresses. This service can be used to provide a new customer with a list of possible addresses from which they can populate a registration form.

## Actions

### addressLookup
Retrieves a list of addresses when supplied with a house number or name and a postcode. It is generally used during customer registration to provide a list of possible addresses from where the customer can select their own address details.



```js
whapi_locations.addressLookup({
  "houseNum": "",
  "postCode": ""
}, context)
```

#### Input
* input `object`
  * houseNum **required** `string`: House number or name of the address.
  * postCode **required** `string`: Postcode of the address, no spaces required.

#### Output
* output [addresses](#addresses)

### getCountries
Retrieves a list of countries and its currencies.


```js
whapi_locations.getCountries(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [countries](#countries)

### getCountry
Retrieves the specified country and its currency.


```js
whapi_locations.getCountry({
  "countryCode": ""
}, context)
```

#### Input
* input `object`
  * countryCode **required** `string`: Code of the country

#### Output
* output [country](#country)

### getCurrencies
Retreives the list of currencies.


```js
whapi_locations.getCurrencies(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [currencies](#currencies)

### getCurrency
Retreives the specified currency.


```js
whapi_locations.getCurrency({
  "currencyCode": ""
}, context)
```

#### Input
* input `object`
  * currencyCode **required** `string`: Code of the currency

#### Output
* output [currency](#currency)



## Definitions

### address
* address `object`
  * city `string`: The name of the postal city/town
  * county `string`: The name of the county
  * fullAddress `string`: The customer’s complete address including postcode
  * postCode `string`: The postcode of the address
  * street `string`: The name of the street including the house number/house name

### addresses
* addresses `object`
  * addresses `array`
    * items [address](#address)

### countries
* countries `object`
  * countries `array`
    * items [country](#country)

### country
* country `object`
  * code `string`: The code of the country
  * currencyCode `string`: The currency code
  * dialCode `string`: The dial code of the country
  * name `string`: The name of the country

### currencies
* currencies `object`
  * currencies `array`
    * items [currency](#currency)

### currency
* currency `object`
  * code `string`: The code of the currency
  * exchangeRate `number`: The exchange rate for the currency
  * maxDeposit `number`: The maximum deposit for the currency
  * maxWithdrawal `number`: The maximum withdrawl for the currency
  * minDeposit `number`: The minimum deposit for the currency
  * minWithdrawal `number`: The minimum withdrawal for the currency
  * name `string`: The name of the currency

### error
* error `object`
  * code `string`: A unique William Hill identifier for the error
  * field `string`: To help pinpoint the exact parameter where a request has failed
  * message `string`: A unique William Hill text string to enable you to identify the error (in English only)

### locationsErrors
* locationsErrors `object`
  * errors `array`
    * items [error](#error)


