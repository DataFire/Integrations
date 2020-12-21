# @datafire/hsbc_atm

Client library for ATM Locator API

## Installation and Usage
```bash
npm install --save @datafire/hsbc_atm
```
```js
let hsbc_atm = require('@datafire/hsbc_atm').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### open_banking.v2.2.atms.get
This API will return data about all our ATMs and is prepared to the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. It is regulated by the UK Competition and Markets Authority (CMA). Data is only available for the United Kingdom.


```js
hsbc_atm.open_banking.v2.2.atms.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ATMDefinitionMeta](#atmdefinitionmeta)

### x_open_banking.v2.2.atms.country.country.get
This extended API will return data about all ATMs in the specified country. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc_atm.x_open_banking.v2.2.atms.country.country.get({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: The ISO country code e.g. &quot;GB&quot;

#### Output
* output [ATMDefinitionMeta](#atmdefinitionmeta)

### x_open_banking.v2.2.atms.country.country.town.town.get
This extended API will return data about all ATMs in the specified town. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc_atm.x_open_banking.v2.2.atms.country.country.town.town.get({
  "country": "",
  "town": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: The ISO country code e.g. &quot;GB&quot;
  * town **required** `string`: Town name, not case sensitive

#### Output
* output [ATMDefinitionMeta](#atmdefinitionmeta)

### x_open_banking.v2.2.atms.geo_location.lat.latitude.long.longitude.get
This extended API will data about all ATMs within a specified radius (1 to 10 miles) of the specified latitude and longitude. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc_atm.x_open_banking.v2.2.atms.geo_location.lat.latitude.long.longitude.get({
  "latitude": "",
  "longitude": "",
  "radius": 0
}, context)
```

#### Input
* input `object`
  * latitude **required** `string`: Positive or negative decimal value in degrees. eg &quot;51.50551621597067&quot;
  * longitude **required** `string`: Positive or negative decimal value in degrees. eg &quot;-0.0180120225995&quot;
  * radius **required** `number`: Number of miles (1 to 10) as an integer. Default = 1

#### Output
* output [ATMDefinitionMeta](#atmdefinitionmeta)

### x_open_banking.v2.2.atms.postcode.postcode.get
This extended API will return data about all ATMs within a 5 mile radius of the specified postcode. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc_atm.x_open_banking.v2.2.atms.postcode.postcode.get({
  "postcode": ""
}, context)
```

#### Input
* input `object`
  * postcode **required** `string`: Letters and numerals only. No spaces or special characters. eg  &quot;SW1A1AA&quot;

#### Output
* output [ATMDefinitionMeta](#atmdefinitionmeta)



## Definitions

### ATMDefinition
* ATMDefinition `object`: Environment of the ATM.
  * Brand **required** `array`: Brand of the Acquirer of transactions captured by the ATM
    * items `object`: Brand of the Acquirer of transactions captured by the ATM
      * ATM **required** `array`: ATM information.
        * items `object`: ATM information.
          * ATMServices `array`: Describes the type of transaction available for a customer on an ATM.
          * Access24HoursIndicator `boolean`: Indicates that the ATM is available for use by customers 24 hours per day
          * Accessibility `array`: Indicates Types of Accessibility
          * Branch `object`: Information that locates and identifies a specific branch of a financial institution.
          * Identification **required** `string`: ATM terminal device identification for the acquirer and the issuer.
          * Location **required** `object`: Location of the ATM.
          * MinimumPossibleAmount `string`: Minimum amount allowed for a transaction in the service.
          * Note `array`: Summary description of the ATM.
          * OtherATMServices `array`: Enter a new code , name and description for any other ATM Service
          * OtherAccessibility `array`: Enter a new code , name and description for any other ATM accessibility options
          * SupportedCurrencies **required** `array`: All ISO 4217 defined currency  supported by the ATM.
          * SupportedLanguages `array`: Identification of the language name according to the ISO 639-1 codes. The type is validated by the list of values coded with two alphabetic characters, defined in the standard.
      * BrandName **required** `string`: Brand Name that an organisation uses to market its products or services to a consumer

### ATMDefinitionMeta
* ATMDefinitionMeta `object`
  * data **required** `array`
    * items [ATMDefinition](#atmdefinition)
  * meta **required** [MetaDefinition](#metadefinition)

### ErrorDefinition400
* 400 Error object `object`
  * description **required** `string` (values: You have sent a request which could not be understood.)
  * status **required** `string` (values: 400)
  * title **required** `string` (values: Bad request)

### ErrorDefinition408
* 408 Error object `object`
  * description **required** `string` (values: Your client has failed to submit a request, and a timeout has occurred.)
  * status **required** `string` (values: 408)
  * title **required** `string` (values: Client timeout)

### ErrorDefinition429
* 429 Error object `object`
  * description **required** `string` (values: You have requested this resource too often. Slow down.)
  * status **required** `string` (values: 429)
  * title **required** `string` (values: Too many requests)

### ErrorDefinition500
* 500 Error object `object`
  * description **required** `string` (values: An error occurred on the server. No further information is available.)
  * status **required** `string` (values: 500)
  * title **required** `string` (values: Internal server error)

### ErrorDefinition503
* 503 Error object `object`
  * description **required** `string` (values: The service is temporarily unavailable.)
  * status **required** `string` (values: 503)
  * title **required** `string` (values: Service temporarily unavailable)

### MetaDefinition
* Meta data `object`
  * Agreement **required** `string` (values: Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions)
  * LastUpdated **required** `string`
  * License **required** `string` (values: https://www.openbanking.org.uk/open-licence): Open Banking License
  * TermsOfUse **required** `string` (values: https://www.openbanking.org.uk/terms): Open Banking Terms of Use
  * TotalResults **required** `integer`


