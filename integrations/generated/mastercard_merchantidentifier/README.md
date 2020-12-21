# @datafire/mastercard_merchantidentifier

Client library for Merchant Identifier API V2

## Installation and Usage
```bash
npm install --save @datafire/mastercard_merchantidentifier
```
```js
let mastercard_merchantidentifier = require('@datafire/mastercard_merchantidentifier').create();

.then(data => {
  console.log(data);
});
```

## Description

API for Merchant Identifier

## Actions

### GetMerchantIdentifiers
Returns merchant descriptor and locator information based on the criteria you provide.
Information returned includes merchant DBA name, merchant category code (MCC), street address, city, state, postal code, country, and sales channels.


```js
mastercard_merchantidentifier.GetMerchantIdentifiers({}, context)
```

#### Input
* input `object`
  * merchant_id `string`: Merchant's name as provided by the issuer found on a cardholder statement. __Important: Please remove all spaces before submitting a API request.__ 
  * type `string`: Determines how the search is performed.

#### Output
* output [MerchantIds](#merchantids)



## Definitions

### Address
* Address `object`
  * city `string`: Name of the city or town where the merchant is located.
  * country [Country](#country)
  * countrySubdivision [CountrySubdivision](#countrysubdivision)
  * line1 `string`: Line 1 of the street address of the merchant. Usually includes the street number and name.
  * line2 `string`: Line 2 of the street address, usually an apartment number or suite number.
  * postalCode `string`: The zip code or postal code for an ATM location

### Country
* Country `object`
  * code `string`: Three digit alpha country code as defined in ISO 3166-1
  * name `string`: Name of the country

### CountrySubdivision
* CountrySubdivision `object`
  * code `string`: Abbreviated code for the state or province
  * name `string`: Name of the state or province.

### Error
* Error `object`: Error
  * description `string`: Description
  * reasonCode `string`: Reason for the error
  * recoverable `boolean`: Is the error recoverable
  * source `string`: Error Source

### ErrorResponse
* ErrorResponse `object`: ErrorResponse array of Error return for Open API
  * errors `array`: array of Error
    * items [Error](#error)

### Merchant
* Merchant `object`
  * address [Address](#address)
  * brandName `string`: The brand name of the merchant.
  * comment `string`: Notes or comments returned about the merchant.
  * descriptorText `string`: Descriptor for the merchant provided by the Merchant Service Provider(MSP).
  * legalCorporateName `string`: Corporate legal name of the merchant.
  * locationId `integer`: Merchant specific location identifier.
  * matchConfidenceScore `integer`: Confidence score (%) to help clients understand the quality of the search results.
  * merchantCategory `string`: Merchant category code and description associated with the merchant category code for the merchant. 
  * merchantDbaName `string`: Name under which the merchant is 'doing business as'.
  * phoneNumber `string`: The phone number of the merchant.
  * soleProprietorName `string`

### MerchantIds
* MerchantIds `object`
  * message `string`: Identifies the number of merchants found based on a request.
  * returnedMerchants `array`: List of matching returned merchants
    * items [Merchant](#merchant)


