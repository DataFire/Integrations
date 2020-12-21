# @datafire/nexmo_pricing

Client library for Pricing API

## Installation and Usage
```bash
npm install --save @datafire/nexmo_pricing
```
```js
let nexmo_pricing = require('@datafire/nexmo_pricing').create();

.then(data => {
  console.log(data);
});
```

## Description

The API to retrieve pricing information.
Please note the Pricing API is rate limited to one request per second.

## Actions

### retrievePricingAllCountries
Retrieves the pricing information for all countries.



```js
nexmo_pricing.retrievePricingAllCountries({
  "type": "",
  "api_key": "",
  "api_secret": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string`: The type of service you wish to retrieve data about: either `sms`, `sms-transit` or `voice`.
  * api_key **required** `string`: Your Nexmo API key.
  * api_secret **required** `string`: Your Nexmo API secret.

#### Output
* output [PricingCountriesResponse](#pricingcountriesresponse)

### retrievePrefixPricing
Retrieves the pricing information based on the dialing prefix.



```js
nexmo_pricing.retrievePrefixPricing({
  "type": "",
  "api_key": "",
  "api_secret": "",
  "prefix": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string`: The type of service you wish to retrieve data about: either `sms`, `sms-transit` or `voice`.
  * api_key **required** `string`: Your Nexmo API key.
  * api_secret **required** `string`: Your Nexmo API secret.
  * prefix **required** `string`: The numerical dialing prefix to look up pricing for. Examples include 44, 1 and so on.

#### Output
* output [PricingCountriesResponse](#pricingcountriesresponse)

### retrievePricingCountry
Retrieves the pricing information based on the specified country.



```js
nexmo_pricing.retrievePricingCountry({
  "type": "",
  "api_key": "",
  "api_secret": "",
  "country": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string`: The type of service you wish to retrieve data about: either `sms`, `sms-transit` or `voice`.
  * api_key **required** `string`: Your Nexmo API key.
  * api_secret **required** `string`: Your Nexmo API secret.
  * country **required** `string`: A two letter [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). For example, `CA`.

#### Output
* output [PricingCountryResponse](#pricingcountryresponse)



## Definitions

### CountryObject
* CountryObject `object`
  * countryDisplayName `string`: Readable country name.
  * countryName `string`: Readable country name.
  * currency `string`: The currency that your account is being billed in (by default `Euros—EUR`). Can change in the Dashboard to US Dollars—USD.
  * defaultPrice `string`: The default price.
  * dialingPrefix `string`: The dialling prefix.
  * networks `array`: An array of network objects
    * items [NetworkObject](#networkobject)

### NetworkObject
* NetworkObject `object`
  * currency `string`: The currency used for prices for this network.
  * mcc `string`: The [Mobile Country Code](https://en.wikipedia.org/wiki/Mobile_country_code) of the operator.
  * mnc `string`: The Mobile Network Code of the operator.
  * networkCode `string`: The Mobile Country Code and Mobile Network Code combined to give a unique reference for the operator.
  * networkName `string`: The company/organisational name of the operator.
  * price `string`: The cost to send a message or make a call to this network
  * type `string`: The type of network: mobile or landline.

### PricingCountriesResponse
* PricingCountriesResponse `object`
  * count `string`: The number of countries retrieved.
  * countries `array`: A list of countries.
    * items [CountryObject](#countryobject)

### PricingCountryResponse
* PricingCountryResponse `object`
  * countryCode `string`: Two letter country code.
  * countryDisplayName `string`: Readable country name.
  * countryName `string`: Readable country name.
  * currency `string`: The currency that your account is being billed in (by default `Euros—EUR`). Can change in the Dashboard to US Dollars—USD.
  * defaultPrice `string`: The default price.
  * dialingPrefix `string`: The dialling prefix.
  * networks `array`: An array of network objects
    * items [NetworkObject](#networkobject)


