# @datafire/brex

Client library for Brex

## Installation and Usage
```bash
npm install --save @datafire/brex
```
```js
let brex = require('@datafire/brex').create({
  user_key: ""
});

brex.api.v1.company.announcement.id.get({
  "id": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### api.v1.company.announcement.id.get
Search announcements by id


```js
brex.api.v1.company.announcement.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: announcement hex ID

#### Output
* output `array`
  * items `object`
    * countryCode `string`
    * id `string`
    * registrationNumber `string`
    * structured `string`
    * text `string`
    * time `string`
    * type `string`

### api.v1.company.deepsearch.name.country.name.get
Deep Search (Search on register) by country and name


```js
brex.api.v1.company.deepsearch.name.country.name.get({
  "country": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: ISO_3166-1_alpha-2 representation of a country name - 2 chars
  * name **required** `string`: company name

#### Output
* output `array`
  * items `object`
    * address `array`
      * items `string`
    * country `string`
    * dateOfIncorporation `string`
    * extraData `object`
    * formattedAddress `array`
      * items `string`
    * id `string`
    * legalForm `string`
    * managingDirectors `array`
      * items `string`
    * name `string`
    * registrationNumber `string`
    * requestTime `integer`
    * secretaries `array`
      * items `string`
    * sicNaceCodes `array`
      * items `string`
    * status `string`

### api.v1.company.deepsearch.number.country.number.get
Deep Search (Search on register) by country and register number.


```js
brex.api.v1.company.deepsearch.number.country.number.get({
  "country": "",
  "number": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: ISO_3166-1_alpha-2 representation of a country name - 2 chars
  * number **required** `string`: company registration number

#### Output
* output `array`
  * items `object`
    * address `array`
      * items `string`
    * country `string`
    * dateOfIncorporation `string`
    * extraData `object`
    * formattedAddress `array`
      * items `string`
    * id `string`
    * legalForm `string`
    * managingDirectors `array`
      * items `string`
    * name `string`
    * registrationNumber `string`
    * requestTime `integer`
    * secretaries `array`
      * items `string`
    * sicNaceCodes `array`
      * items `string`
    * status `string`

### api.v1.company.search.name.country.name.get
Search by country and name


```js
brex.api.v1.company.search.name.country.name.get({
  "country": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: ISO_3166-1_alpha-2 representation of a country name - 2 chars
  * name **required** `string`: company name
  * limit `integer`: number of search results

#### Output
* output `object`
  * code **required** `integer`
  * message **required** `string`

### api.v1.company.search.number.country.number.get
Search by country and registration number


```js
brex.api.v1.company.search.number.country.number.get({
  "country": "",
  "number": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: ISO_3166-1_alpha-2 representation of a country name - 2 chars
  * number **required** `string`: company registration number
  * limit `integer`: number of search results

#### Output
* output `array`
  * items `object`
    * address `array`
      * items `string`
    * country `string`
    * dateOfIncorporation `string`
    * extraData `object`
    * formattedAddress `array`
      * items `string`
    * id `string`
    * legalForm `string`
    * managingDirectors `array`
      * items `string`
    * name `string`
    * registrationNumber `string`
    * requestTime `integer`
    * secretaries `array`
      * items `string`
    * sicNaceCodes `array`
      * items `string`
    * status `string`

### api.v1.company.search.country.post
Search by country and mixed parameters. This function requires a country code then a mixture of name, number, url, phone, and vat. 0 or 1 of each parameter can be supplied. These are applied in a progressive filter mechanism in the order they are supplied (when properly implemented). This means it is possible to return empty sets when a later match returns an empty set.


```js
brex.api.v1.company.search.country.post({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: ISO_3166-1_alpha-2 representation of a country name - 2 chars
  * address `string`: Company address (or address partial)
  * name `string`: Company name
  * number `string`: Company registration number
  * phone `string`: Company contact phone number
  * url `string`: Company url
  * vat `string`: Company VAT number

#### Output
* output `array`
  * items `object`
    * address `array`
      * items `string`
    * country `string`
    * dateOfIncorporation `string`
    * extraData `object`
    * formattedAddress `array`
      * items `string`
    * id `string`
    * legalForm `string`
    * managingDirectors `array`
      * items `string`
    * name `string`
    * registrationNumber `string`
    * requestTime `integer`
    * secretaries `array`
      * items `string`
    * sicNaceCodes `array`
      * items `string`
    * status `string`

### api.v1.company.id.announcements.get
Search announcements by company id


```js
brex.api.v1.company.id.announcements.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: company hex ID

#### Output
* output `array`
  * items `object`
    * countryCode `string`
    * id `string`
    * registrationNumber `string`
    * structured `string`
    * text `string`
    * time `string`
    * type `string`

### api.v1.company.id.announcements.post
Search announcements by company id


```js
brex.api.v1.company.id.announcements.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: company hex ID
  * data `boolean`: include announcement text and structured data
  * data-max-announcements `integer`: maximum amount of announcements that should include text

#### Output
* output `object`
  * countryCode **required** `string`
  * id **required** `string`
  * registrationNumber **required** `string`
  * structured `string`
  * text `string`
  * time **required** `string`
  * type **required** `string`

### api.v1.company.id.super.country.get
Search for company superdata by id from previous call


```js
brex.api.v1.company.id.super.country.get({
  "id": "",
  "country": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: company superdata by id
  * country **required** `string`: ISO_3166-1_alpha-2 representation of a country name - 2 chars

#### Output
* output `array`
  * items `object`
    * address `array`
      * items `string`
    * country `string`
    * dateOfIncorporation `string`
    * extraData `object`
    * formattedAddress `array`
      * items `string`
    * id `string`
    * legalForm `string`
    * managingDirectors `array`
      * items `string`
    * name `string`
    * registrationNumber `string`
    * requestTime `integer`
    * secretaries `array`
      * items `string`
    * sicNaceCodes `array`
      * items `string`
    * status `string`

### api.v1.company.id.dataset.get
Search for company by id from previous call


```js
brex.api.v1.company.id.dataset.get({
  "id": "",
  "dataset": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: company master data by id
  * dataset **required** `string` (values: , mini, master, full, refresh): company master data by id

#### Output
* output `array`
  * items `object`
    * address `array`
      * items `string`
    * country `string`
    * dateOfIncorporation `string`
    * extraData `object`
    * formattedAddress `array`
      * items `string`
    * id `string`
    * legalForm `string`
    * managingDirectors `array`
      * items `string`
    * name `string`
    * registrationNumber `string`
    * requestTime `integer`
    * secretaries `array`
      * items `string`
    * sicNaceCodes `array`
      * items `string`
    * status `string`

### api.v1.nif_verification.basic_check.country.post
Basic verification of given portuguese NIF number against NIF.com. Optional parameters may help to build a better confidence score.


```js
brex.api.v1.nif_verification.basic_check.country.post({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: ISO_3166-1_alpha-2 representation of a country name - 2 chars
  * companyAddress `string`: company address lines
  * companyName `string`: Company name
  * nifNumber `string`: NIF number to validate

#### Output
* output `object`
  * companyName `string`
  * confidenceScore **required** `number`
  * nifNumber **required** `number`
  * validationStatus **required** `boolean`

### api.v1.nif_verification.comprehensive_check.country.post
Comprehensive verification of given portuguese NIF number against NIF.com. Optional parameters may help to build a better confidence score.


```js
brex.api.v1.nif_verification.comprehensive_check.country.post({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: ISO_3166-1_alpha-2 representation of a country name - 2 chars
  * companyAddress `string`: company address lines
  * companyName `string`: Company name
  * nifNumber `string`: NIF number to validate

#### Output
* output `object`
  * activity `object`
  * address `string`
  * capital `number`
  * companyName `string`
  * confidenceScore **required** `number`
  * currency `string`
  * email `string`
  * fax `string`
  * geo `string`
  * legalType `string`
  * nifNumber **required** `number`
  * phone `string`
  * status `object`
  * validationStatus **required** `boolean`
  * website `string`

### api.v1.pepsanction.order.type.search.post
Order a new Pep Sanction Check


```js
brex.api.v1.pepsanction.order.type.search.post({
  "type": "",
  "search": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string` (values: , B, P): Type (Business or Person) of the requested Pep Sanction Check
  * search **required** `string`: Search string for the Pep Sanction Check
  * Aliases `string`: Optional parameter for declaring alias names when doing a person search (seperated by commas)
  * DOB `string`: Optional parameter for date of birth name when doing a person search
  * FamilyName `string`: Optional parameter for last name when doing a person search
  * Filters `string`: Optional parameter for restricting search when doing a person search (seperated by commas)
  * GivenName `string`: Optional parameter for first name when doing a person search
  * MiddleName `string`: Optional parameter for middle name when doing a person search

#### Output
* output `object`
  * availability **required** `string`
  * category **required** `string`
  * countryCode **required** `string`
  * description **required** `string`
  * hasOptions **required** `boolean`
  * options **required** `array`
    * items `string`
  * price **required** `number`
  * provider **required** `string`
  * sku **required** `string`
  * type **required** `string`

### api.v1.pepsanction.retrieve.id.get
Retrieve a delivered Pep Sanction check structured or in pdf


```js
brex.api.v1.pepsanction.retrieve.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * accept `string` (values: application/json, application/pdf): The type (pdf or json) in which the check should be returned
  * id **required** `string`: The id of the ordered Pep Sanction Check (id as returned by orderPepSanction call)

#### Output
* output `object`
  * listsChecked **required** `string`
  * results `object`
    * Excerpts `string`
    * ResultsURL `string`
    * SearchType `string`
    * SourceAgency `string`
    * SourceEntity `string`
    * SourceID `integer`
    * SourceName `string`
    * SourceType `string`
  * search **required** `string`
  * status **required** `string`
  * timestamp **required** `string`
  * type **required** `string`

### api.v1.product.availability.sku.subjectId.get
Check availabilty and valid options for a particular product for a particular subject


```js
brex.api.v1.product.availability.sku.subjectId.get({
  "sku": "",
  "subjectId": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`: SKU - 9 character value from a Product object
  * subjectId **required** `string`: Subject (e.g. Company) ID - 32 character hex value

#### Output
* output `object`
  * availability **required** `string`
  * category **required** `string`
  * countryCode **required** `string`
  * description **required** `string`
  * hasOptions **required** `boolean`
  * options **required** `array`
    * items `string`
  * price **required** `number`
  * provider **required** `string`
  * sku **required** `string`
  * type **required** `string`

### api.v1.product.notifier.notifierId.get
Return the current status of an existing notifier


```js
brex.api.v1.product.notifier.notifierId.get({
  "notifierId": ""
}, context)
```

#### Input
* input `object`
  * notifierId **required** `string`: ID of the ProductOrderNotifier as returned from a /notifier POST call - 32 character hex value

#### Output
* output `object`
  * callback **required** `string`
  * identity `string`
  * lastCallTime **required** `string`
  * lastResponseCode **required** `integer`
  * notifierType **required** `string`
  * productOrderIdentity **required** `string`

### api.v1.product.order.sku.option.subjectId.post
Place an order for a particular product for a particular subject


```js
brex.api.v1.product.order.sku.option.subjectId.post({
  "sku": "",
  "option": "",
  "subjectId": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`: SKU - 9 character value from a Product object
  * option **required** `string`: Product option (e.g. Accounts year) from a previous Availability call
  * subjectId **required** `string`: Subject (e.g. Company) ID - 32 character hex value

#### Output
* output `object`
  * identity **required** `string`
  * option **required** `string`
  * ordered **required** `string`
  * owner **required** `string`
  * price **required** `number`
  * sku **required** `string`
  * status **required** `string`
  * subjectId **required** `string`
  * subjectValue **required** `string`

### api.v1.product.order.sku.subjectId.post
Place an order for a particular product for a particular subject


```js
brex.api.v1.product.order.sku.subjectId.post({
  "sku": "",
  "subjectId": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`: SKU - 9 character value from a Product object
  * subjectId **required** `string`: Subject (e.g. Company) ID - 32 character hex value

#### Output
* output `object`
  * identity **required** `string`
  * option **required** `string`
  * ordered **required** `string`
  * owner **required** `string`
  * price **required** `number`
  * sku **required** `string`
  * status **required** `string`
  * subjectId **required** `string`
  * subjectValue **required** `string`

### api.v1.product.search.subjectId.get
Search for possible products for a particular subject


```js
brex.api.v1.product.search.subjectId.get({
  "subjectId": ""
}, context)
```

#### Input
* input `object`
  * subjectId **required** `string`: Subject (e.g. Company) ID - 32 character hex value

#### Output
* output `array`
  * items `object`
    * availability `string`
    * category `string`
    * countryCode `string`
    * description `string`
    * hasOptions `boolean`
    * options `array`
      * items `string`
    * price `number`
    * provider `string`
    * sku `string`
    * type `string`

### api.v1.product.status.orderId.get
Get the status of an ongoing order


```js
brex.api.v1.product.status.orderId.get({
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`: ID of the ProductOrder as returned from a /product/buy call - 32 character hex value

#### Output
* output `object`
  * identity **required** `string`
  * option **required** `string`
  * ordered **required** `string`
  * owner **required** `string`
  * price **required** `number`
  * sku **required** `string`
  * status **required** `string`
  * subjectId **required** `string`
  * subjectValue **required** `string`

### api.v1.product.orderId.get
Retrieves the document associated with a completed order


```js
brex.api.v1.product.orderId.get({
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`: ID of the ProductOrder as returned from a /product/buy call - 32 character hex value

#### Output
* output `object`
  * mimeType **required** `string`
  * productOrderId **required** `string`
  * uri **required** `string`

### api.v1.system.countries.get
Search for possible products for a particular subject


```js
brex.api.v1.system.countries.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * country_code `string`
    * country_name `string`

### api.v1.system.pricelist.get
Retrieve pricing rules for your subscription plan


```js
brex.api.v1.system.pricelist.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * cost_per_unit `string`
    * max `string`
    * metric_id `string`
    * min `string`
    * sku `string`

### api.v1.vat_verification.basic_check.country.post
Basic verification of given VAT number against VIES. Optional parameters may help to build a better confidence score.


```js
brex.api.v1.vat_verification.basic_check.country.post({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: ISO_3166-1_alpha-2 representation of a country name - 2 chars
  * companyAddress `string`: company address lines
  * companyName `string`: Company name
  * companyNumber `string`: official company number
  * vatNumber `string`: VAT number to validate

#### Output
* output `object`
  * company `object`
    * address `array`
      * items `string`
    * country **required** `string`
    * dateOfIncorporation `string`
    * extraData `object`
    * formattedAddress `array`
      * items `string`
    * id **required** `string`
    * legalForm `string`
    * managingDirectors `array`
      * items `string`
    * name **required** `string`
    * registrationNumber **required** `string`
    * requestTime `integer`
    * secretaries `array`
      * items `string`
    * sicNaceCodes `array`
      * items `string`
    * status `string`
  * confidenceScore **required** `number`
  * validationStatus **required** `boolean`

### api.v1.vat_verification.comprehensive_check.country.post
Extended verification of given VAT number against VIES and register. Optional parameters may help to build a better confidence score.


```js
brex.api.v1.vat_verification.comprehensive_check.country.post({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: ISO_3166-1_alpha-2 representation of a country name - 2 chars
  * companyAddress `string`: company address lines
  * companyName `string`: Company name
  * companyNumber `string`: official company number
  * vatNumber `string`: VAT number to validate

#### Output
* output `object`
  * company `object`
    * address `array`
      * items `string`
    * country **required** `string`
    * dateOfIncorporation `string`
    * extraData `object`
    * formattedAddress `array`
      * items `string`
    * id **required** `string`
    * legalForm `string`
    * managingDirectors `array`
      * items `string`
    * name **required** `string`
    * registrationNumber **required** `string`
    * requestTime `integer`
    * secretaries `array`
      * items `string`
    * sicNaceCodes `array`
      * items `string`
    * status `string`
  * confidenceScore **required** `number`
  * validationStatus **required** `boolean`



## Definitions

*This integration has no definitions*
