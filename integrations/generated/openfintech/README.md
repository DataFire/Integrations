# @datafire/openfintech

Client library for OpenFinTech.io

## Installation and Usage
```bash
npm install --save @datafire/openfintech
```
```js
let openfintech = require('@datafire/openfintech').create();

.then(data => {
  console.log(data);
});
```

## Description

# Introduction
[OpenFinTech.io](https://openfintech.io) is an open database that comprises of standardized primary data for FinTech industry.<br>
It contains such information as geolocation data (countries, cities, regions), organizations, currencies (national, digital, virtual, crypto), banks, digital exchangers, payment providers (PSP), payment methods, etc.<br>
It is created for communication of cross-integrated micro-services on "one language". This is achieved through standardization of entity identifiers that are used to exchange information among different services.<br>

### UML
UML Domain Model diagram you can find [here](https://api.openfintech.io/public_domain_model.png).<br>

### Persistence
Entities are updated not more than 1 time per day.<br>

### Terms and Conditions
This *OpenFinTech.io* is made available under the [Open Database License](http://opendatacommons.org/licenses/odbl/1.0/).<br>
Any rights in individual contents of the database are licensed under the [Database Contents License](http://opendatacommons.org/licenses/dbcl/1.0/).<br>

### Contacts
For any questions, please email - info@openfintech.io<br>
Or you can contact us at <a href="https://gitter.im/paymaxicom/openfintech.io">Gitter</a><br>

Powered by [Paymaxi](https://www.paymaxi.com)

# Get Started

If you use [POSTMAN](https://www.getpostman.com) or similar program which can operate with swagger`s files - just [download](https://docs.openfintech.io) our spec and [import it](https://www.getpostman.com/docs/importing_swagger). Also you can try live [API demo](https://api.openfintech.io).

## Overview

The OpenFinTech API is organized around [REST](https://en.wikipedia.org/wiki/Representational_state_transfer). Our API has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors.<br>
API is based on [JSON API](http://jsonapi.org) standard. JSON is returned by all API responses, including errors, although our API libraries convert responses to appropriate language-specific objects.<br>
JSON API requires use of the JSON API media type (`application/vnd.api+json`) for exchanging data.<br>
### Additional Request Headers
#### ACCEPT HEADER
Your requests should always include the header:
```curl
Accept: application/vnd.api+json
```

## Authentication

To use OpenFinTech API no needed authorization.

## Versioning

When we make changes to the API, we release new, dated versions. The current version is **2017-08-24**. Read our [API upgrades guide]() to see our API changelog and to learn more about backwards compatibility.

## Pagination

OpenFinTech APIs to retrieve lists of banks, currencies and other resources - paginated to **100** items by default. The pagination information will be included in the list API response under the node name `meta` - contains information about listed objects [`total` - contains information about total count of listed objects, `pages` - count of pages], `links` - contain links to navigate between pages [`first` - link to first page, `prev` - link to previous page, `next` - link to next page, `last` - link to last page].<br>
By default first page will be listed. For navigating through pages, use the page parameter (e.g. `page[number]`, `page[size]`).<br>
The `page[size]` parameter can be used to set the number of records that you want to receive in the response.<br>
The `page[number]` parameter can be used to set needed page number.<br>
Example of response:
```json
{
  "meta": {
    "total": 419,
    "pages": 42
  },
  "links": {
    "first": "/v1/{path}?page[number]=1&page[size]=10",
    "prev": "/v1/{path}?page[number]=39&page[size]=10",
    "next": "/v1/{path}?page[number]=41&page[size]=10",
    "last": "/v1/{path}?page[number]=42&page[size]=10"
  }
```

### Sorting

OpenFinTech\`s API supported query parameter to sort result collection [e.g. `?sort=code`]. Information about available parameters may be found in the endpoint description. Positive parameter [e.g. `?sort=code`] points to ascending sorting, negative  [e.g. `?sort=-code`] - to descending sorting. Also, supported multiple sorting parameters [e.g. `?sort=code, -name, id`, etc.]
```curl
https://api.openfintech.io/v1/countries?sort=name,-area
```

### Filtering

Filtering provided by unique query key `filter[*filtering_condition*]`. Information about available parameters may be found in the endpoint description.
```curl
https://api.openfintech.io/v1/countries?filter[region]=europe
```

## Images

OpenFinTech provides two types of images: icons and logos. To get one of those types you should to use next url pattern:
``` curl
https://api.openfintech.io/v1/{path}/{id}/{icon/logo}
```
Also, images can be resized by adding next parameters: `h={height}&w={width}`. For example, you want to get organization icon with width equals to 20 pixels:
``` curl
https://api.openfintech.io/v1/organizations/{id}/icon?w=20&h=20
```
If argument height or width is missing API returns original image with real sizes.

## Errors

API uses conventional HTTP response codes to indicate the success or failure of an API request. In general, codes in the `2xx` range indicate success, codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, etc.), and codes in the `5xx` range indicate an error with OpenFinTech's servers (these are rare).

| Code | Description |
|------|-------------|
| 200 - OK	| Everything worked as expected. |
| 400 - Bad Request |	The request was unacceptable, often due to missing a required parameter. |
| 401 - Unauthorized |	No valid API key provided. |
| 402 - Request Failed	| The parameters were valid but the request failed. |
| 404 - Not Found |	The requested resource doesn't exist. |
| 409 - Conflict	| The request conflicts with another request (perhaps due to using the same idempotent key). |
| 429 - Too Many Requests |	Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |
| 500, 502, 503, 504 - Server Errors |	Something went wrong on OpenFinTech's end. (These are rare.) |


## Actions

### banks.get
Returns list of banks. Each object contains general information about bank such as name and status, also information about bank details and related link to main organization.



```js
openfintech.banks.get({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: Current page number.
  * page[size] `integer`: Page size.<br>*Default value: 100*
  * filter[sort_code] `string`: Filtering by banks code.
  * filter[code] `string`: Filtering by code.
  * filter[status] `array`: Filtration by status.
  * sort `array`: Sort params:<br>

#### Output
* output [BanksResponse](#banksresponse)

### banks.id.get
Returns bank with specific ID.



```js
openfintech.banks.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique ID.

#### Output
* output [BankResponse](#bankresponse)

### countries.get
Returns all available countries.



```js
openfintech.countries.get({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: Current page number.
  * page[size] `integer`: Page size.<br>*Default value: 100*
  * filter[region] `array`: Filtration by region.
  * filter[sub_region] `array`: Filtration by sub region.
  * sort `array`: Sort params:<br>

#### Output
* output [CountriesResponse](#countriesresponse)

### countries.id.get
Returns country with specific ID.



```js
openfintech.countries.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique ID.

#### Output
* output [CountryResponse](#countryresponse)

### currencies.get
Returns all available currencies.



```js
openfintech.currencies.get({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: Current page number.
  * page[size] `integer`: Page size.<br>*Default value: 100*
  * filter[search] `string`: Full text search with name, code, type, code_iso_alpha3, code_jsons_alpha, code_estandards_alpha, category.
  * filter[code_iso_alpha3] `string`: Filtering by ISO code.
  * filter[code_iso_numeric3] `integer`: Filtering by ISO number.
  * filter[code_estandards_alpha] `string`: Filtering by estandards code.
  * filter[currency_type] `array`: Filtration by currency type.
  * filter[category] `array`: Filtration by category.
  * sort `array`: Sort params:<br>

#### Output
* output [CurrenciesResponse](#currenciesresponse)

### currencies.id.get
Returns currency with specific ID.



```js
openfintech.currencies.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique ID.

#### Output
* output [CurrencyResponse](#currencyresponse)

### deposit_methods.get
Returns list of deposit methods. Each object contains information about deposit method such as name and category, also related link to deposit method issuer (which processing it).



```js
openfintech.deposit_methods.get({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: Current page number.
  * page[size] `integer`: Page size.<br>*Default value: 100*
  * filter[search] `string`: Full text search with id, name, code, category.
  * filter[name] `string`: Filtering by name.
  * filter[code] `string`: Filtering by code.
  * filter[processor_name] `string`: Filtering by processor_name.
  * filter[category] `array`: Filtering by category.
  * sort `array`: Sort params:<br>

#### Output
* output [DepositMethodsResponse](#depositmethodsresponse)

### deposit_methods.id.get
Returns deposit method with specific ID.



```js
openfintech.deposit_methods.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique ID.

#### Output
* output [DepositMethodResponse](#depositmethodresponse)

### exchangers.get
Returns list of exchange markets. Each object contains general information about exchanger such as name and status, also information about rates export and related link to main organization.<br>
Rates export standards is represented by:
* [estandards](http://estandards.info)
* [jsons](http://jsons.info)
* ratex - our internal standard



```js
openfintech.exchangers.get({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: Current page number.
  * page[size] `integer`: Page size.<br>*Default value: 100*
  * filter[name] `string`: Filtering by name.
  * filter[status] `array`: Filtration by status.
  * sort `array`: Sort params:<br>

#### Output
* output [ExchangersResponse](#exchangersresponse)

### exchangers.id.get
Returns exchanger with specific ID.



```js
openfintech.exchangers.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique ID.

#### Output
* output [ExchangerResponse](#exchangerresponse)

### merchant_industries.get
Returns all available merchant fields of activity.



```js
openfintech.merchant_industries.get({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: Current page number.
  * page[size] `integer`: Page size.<br>*Default value: 100*
  * filter[name] `string`: Filtering by name.

#### Output
* output [MerchantIndustriesResponse](#merchantindustriesresponse)

### merchant_industries.id.get
Returns merchant industry with specific ID.



```js
openfintech.merchant_industries.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique ID.

#### Output
* output [MerchantIndustryResponse](#merchantindustryresponse)

### organizations.get
This endpoint retrievs the list of organizations present in the system. The data displays general, public information, without reference to the type of activity (for example - name, address, contacts, etc.).



```js
openfintech.organizations.get({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: Current page number.
  * page[size] `integer`: Page size.<br>*Default value: 100*
  * filter[search] `string`: Full text search with id, name, code.
  * filter[name] `string`: Filtering by name.
  * filter[code] `string`: Filtering by code.
  * filter[status] `array`: Filtration by status.
  * filter[industries] `string`: Filtering by industries.
  * sort `array`: Sort params:<br>

#### Output
* output [OrganizationsResponse](#organizationsresponse)

### organizations.id.get
Returns organization with specific ID.



```js
openfintech.organizations.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique ID.

#### Output
* output [OrganizationResponse](#organizationresponse)

### payment_methods.get
Returns list of payment methods. Each object contains information about payment method such as name and category, also related link to payment method issuer (which processing it).



```js
openfintech.payment_methods.get({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: Current page number.
  * page[size] `integer`: Page size.<br>*Default value: 100*
  * filter[search] `string`: Full text search with id, name, code, category.
  * filter[name] `string`: Filtering by name.
  * filter[code] `string`: Filtering by code.
  * filter[processor_name] `string`: Filtering by processor_name.
  * filter[category] `array`: Filtering by category.
  * sort `array`: Sort params:<br>

#### Output
* output [PaymentMethodsResponse](#paymentmethodsresponse)

### payment_methods.id.get
Returns payment method with specific ID.



```js
openfintech.payment_methods.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique ID.

#### Output
* output [PaymentMethodResponse](#paymentmethodresponse)

### payment_providers.get
A payment service provider (PSP) offers shops online services for accepting electronic payments by a variety of payment methods.<br> Endpoint returns list of PSPs. Each object contains: name, type, supported features and sales channels, also related link to available payment methods and main organization.



```js
openfintech.payment_providers.get({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: Current page number.
  * page[size] `integer`: Page size.<br>*Default value: 100*
  * filter[search] `string`: Full text search with id, code, name.
  * filter[name] `string`: Filtering by name.
  * filter[code] `string`: Filtering by code.
  * filter[types] `array`: Filtering by types.
  * filter[sales_channels] `array`: Filtering by sales channels.
  * filter[features] `array`: Filtering by features.
  * sort `array`: Sort params:<br>

#### Output
* output [PaymentProvidersResponse](#paymentprovidersresponse)

### payment_providers.id.get
Returns payment provider with specific ID.



```js
openfintech.payment_providers.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Unique ID.

#### Output
* output [PaymentProviderResponse](#paymentproviderresponse)



## Definitions

### ActiveInCountriesRelationship
* ActiveInCountriesRelationship `object`: Active in countries
  * data `array`
    * items `object`
      * id `string`
      * type `string`
  * links `object`
    * related `string`

### Bank
* Bank `object`
  * attributes [BankAttributes](#bankattributes)
  * id `string`: Bank`s ID
  * links [SelfLinks](#selflinks)
  * relationships [BankRelationships](#bankrelationships)
  * type `string`

### BankAttributes
* BankAttributes `object`: Array of bank attributes
  * account_number `string`
  * bank_code `string`
  * bic `string`
  * code `string`: Bank`s code
  * iban `string`
  * name `string`: Bank`s name
  * sort_code `string`
  * status `string`: Status [active, liquidated, problem, deleted]
  * vatin `string`

### BankOrganization
* BankOrganization `object`
  * data [BankOrganizationData](#bankorganizationdata)
  * links [BankOrganizationLinks](#bankorganizationlinks)

### BankOrganizationData
* BankOrganizationData `object`
  * id `string`: Organization`s ID
  * type `string`

### BankOrganizationLinks
* BankOrganizationLinks `object`
  * related `string`

### BankRelationships
* BankRelationships `object`
  * organization [BankOrganization](#bankorganization)

### BankResponse
* BankResponse `object`
  * data [Bank](#bank)

### BanksResponse
* BanksResponse `object`
  * data `array`
    * items [Bank](#bank)
  * links [ResponseLinks](#responselinks)
  * meta [ResponseMeta](#responsemeta)

### CountriesResponse
* CountriesResponse `object`
  * data `array`
    * items [Country](#country)
  * links [ResponseLinks](#responselinks)
  * meta [ResponseMeta](#responsemeta)

### Country
* Country `object`
  * attributes [CountryAttributes](#countryattributes)
  * id `string`: Country`s ID
  * links [SelfLinks](#selflinks)
  * relationships [CountryRelationships](#countryrelationships)
  * type `string`

### CountryAttributes
* CountryAttributes `object`
  * area `string`: Countryâ€™s area (sq km)
  * calling_codes `array`: Array of country`s phone codes
    * items `integer`
  * capital `string`: Countryâ€™s capital
  * code_alpha3 `string`: Country`s ISO alpha3 code
  * languages `array`: Array of country`s languages
    * items `string`
  * name `string`: Country`s name
  * native_name `string`: Country`s nativ name
  * population `string`: Countryâ€™s population
  * region `string`: Countryâ€™s region:<br>
  * sub_region `string`: Countryâ€™s sub region:<br>
  * timezones `array`: Array of country`s timezones (UTC)
    * items `string`
  * top_level_domains `array`: Array of country`s domains
    * items `string`

### CountryRelationships
* CountryRelationships `object`
  * translations [CountryTranslations](#countrytranslations)

### CountryResponse
* CountryResponse `object`
  * data [Country](#country)

### CountryTranslations
* CountryTranslations `object`
  * links [CountryTranslationsLinks](#countrytranslationslinks)

### CountryTranslationsLinks
* CountryTranslationsLinks `object`
  * related `string`

### CurrenciesResponse
* CurrenciesResponse `object`
  * data `array`
    * items [Currency](#currency)
  * links [ResponseLinks](#responselinks)
  * meta [ResponseMeta](#responsemeta)

### Currency
* Currency `object`
  * attributes [CurrencyAttributes](#currencyattributes)
  * id `string`: Currency ID
  * links [SelfLinks](#selflinks)
  * relationships [CurrencyRelationships](#currencyrelationships)
  * type `string`

### CurrencyAttributes
* CurrencyAttributes `object`: Array of currencies attributes
  * category `string`: Currency category
  * code `string`: Currency system code
  * code_estandards_alpha `string`
  * code_iso_alpha3 `string`: Currency ISO code
  * code_iso_numeric3 `integer`: Currency ISO numeric code
  * code_json_alpha `string`
  * created `string`: Created date in system (in Unixtime)
  * currency_type `string`: Type of currencies [national, digital, virtual, metal, energy]
  * decimal_e `string`: Number of digits after the decimal separator
  * icon [CurrencyAttributesIcon](#currencyattributesicon)
  * issuer `string`: Currency`s issuer
  * name `string`: Currency description
  * native_symbol `string`: Currencyâ€™s symbol. In general, only for nationals currencies
  * symbol `string`: Currencyâ€™s symbol. In general, only for nationals currencies

### CurrencyAttributesIcon
* CurrencyAttributesIcon `object`: Links to currency icons
  * 16 `string`: 16x16 icon
  * 32 `string`: 32x32 icon
  * 64 `string`: 64x64 icon

### CurrencyCountries
* CurrencyCountries `object`
  * links [CurrencyCountryLinks](#currencycountrylinks)

### CurrencyCountryLinks
* CurrencyCountryLinks `object`
  * related `string`

### CurrencyIssuer
* CurrencyIssuer `object`: Currency Issuer. 'Only for virtual currency'
  * data [CurrencyIssuertData](#currencyissuertdata)
  * links [CurrencyIssuerLinks](#currencyissuerlinks)

### CurrencyIssuerLinks
* CurrencyIssuerLinks `object`
  * related `string`

### CurrencyIssuerOrganization
* CurrencyIssuerOrganization `object`: Issuer.
  * data [CurrencyIssuerOrganizationData](#currencyissuerorganizationdata)
  * links [CurrencyIssuerOrganizationLinks](#currencyissuerorganizationlinks)

### CurrencyIssuerOrganizationData
* CurrencyIssuerOrganizationData `object`
  * id `string`: Issuer organization ID
  * type `string`

### CurrencyIssuerOrganizationLinks
* CurrencyIssuerOrganizationLinks `object`
  * related `string`

### CurrencyIssuertData
* CurrencyIssuertData `object`
  * id `string`: Issuer ID
  * type `string`

### CurrencyParent
* CurrencyParent `object`: Parent currency. 'Only for virtual currency'
  * data [CurrencyParentData](#currencyparentdata)
  * links [CurrencyParentLinks](#currencyparentlinks)

### CurrencyParentData
* CurrencyParentData `object`
  * id `string`: Parent currency ID
  * type `string`

### CurrencyParentLinks
* CurrencyParentLinks `object`
  * related `string`

### CurrencyRelationships
* CurrencyRelationships `object`
  * countries [CurrencyCountries](#currencycountries)
  * issuer [CurrencyIssuer](#currencyissuer)
  * issuer_organization [CurrencyIssuerOrganization](#currencyissuerorganization)
  * parent [CurrencyParent](#currencyparent)

### CurrencyResponse
* CurrencyResponse `object`
  * data [Currency](#currency)

### DepositMethod
* DepositMethod `object`
  * attributes [DepositMethodAttributes](#depositmethodattributes)
  * id `string`: Deposit-methods`s ID
  * links [SelfLinks](#selflinks)
  * relationships [DepositMethodRelationships](#depositmethodrelationships)
  * type `string`

### DepositMethodAttributes
* DepositMethodAttributes `object`: Array of Deposit-method attributes
  * category `string`
  * code `string`: Deposit-method`s code
  * name `string`: Deposit-method`s name
  * processor_name `string`: Deposit-method`s processor

### DepositMethodProcessorData
* DepositMethodProcessorData `object`: Processor`s Data.
  * data `array`
    * items `object`
      * id `string`: Processor`s id.
      * type `string`: Processor`s type.
  * links `object`
    * related `string`

### DepositMethodRelationships
* DepositMethodRelationships `object`
  * actiove_in_countries [ActiveInCountriesRelationship](#activeincountriesrelationship)
  * currencies [CurrencyParent](#currencyparent)
  * payment_processor [DepositMethodProcessorData](#depositmethodprocessordata)
  * supported_psps [SupportedPspsRelationship](#supportedpspsrelationship)

### DepositMethodResponse
* DepositMethodResponse `object`
  * data [DepositMethod](#depositmethod)

### DepositMethodsResponse
* DepositMethodsResponse `object`
  * data `array`
    * items [DepositMethod](#depositmethod)
  * links [ResponseLinks](#responselinks)
  * meta [ResponseMeta](#responsemeta)

### Exchanger
* Exchanger `object`
  * attributes [ExchangerAttributes](#exchangerattributes)
  * id `string`: Exchanger`s ID
  * links [SelfLinks](#selflinks)
  * relationships [ExchangerRelationships](#exchangerrelationships)
  * type `string`

### ExchangerAttributes
* ExchangerAttributes `object`
  * name `string`: Exchanger`s name
  * rates_export_standard `string`
  * rates_export_url `string`
  * status `string`: Exchanger`s status [active, blocked, deleted]
  * wmid `integer`: Exchanger`s WebMoney ID

### ExchangerOrganization
* ExchangerOrganization `object`
  * data [ExchangerOrganizationData](#exchangerorganizationdata)
  * links [ExchangerOrganizationLinks](#exchangerorganizationlinks)

### ExchangerOrganizationData
* ExchangerOrganizationData `object`
  * id `string`: Organization ID
  * type `string`

### ExchangerOrganizationLinks
* ExchangerOrganizationLinks `object`
  * related `string`

### ExchangerRelationships
* ExchangerRelationships `object`
  * organization [ExchangerOrganization](#exchangerorganization)

### ExchangerResponse
* ExchangerResponse `object`
  * data [Exchanger](#exchanger)

### ExchangersResponse
* ExchangersResponse `object`
  * data `array`
    * items [Exchanger](#exchanger)
  * links [ResponseLinks](#responselinks)
  * meta [ResponseMeta](#responsemeta)

### MerchantIndustriesResponse
* MerchantIndustriesResponse `object`
  * data `array`
    * items [MerchantIndustry](#merchantindustry)
  * links [ResponseLinks](#responselinks)
  * meta [ResponseMeta](#responsemeta)

### MerchantIndustry
* MerchantIndustry `object`
  * attributes [MerchantIndustryAttributes](#merchantindustryattributes)
  * id `string`: Merchant-industry`s ID
  * type `string`

### MerchantIndustryAttributes
* MerchantIndustryAttributes `object`: Array of Merchant-industry attributes
  * name `string`: Merchant-industry`s name

### MerchantIndustryResponse
* MerchantIndustryResponse `object`
  * data [MerchantIndustry](#merchantindustry)

### Organization
* Organization `object`
  * attributes [OrganizationAttributes](#organizationattributes)
  * id `string`: Organization`s ID
  * links [SelfLinks](#selflinks)
  * relationships [OrganizationRelationships](#organizationrelationships)
  * type `string`

### OrganizationActive
* OrganizationActive `object`
  * data `array`
    * items `string`
  * links [OrganizationActiveLinks](#organizationactivelinks)

### OrganizationActiveLinks
* OrganizationActiveLinks `object`
  * related `string`

### OrganizationAddress
* OrganizationAddress `object`: Organization`s address
  * city `string`
  * country `string`
  * post_code `integer`
  * region `string`: Countryâ€™s region:<br>
  * street `string`

### OrganizationAttributes
* OrganizationAttributes `object`
  * address [OrganizationAddress](#organizationaddress)
  * blog `string`: Organization`s blog
  * code `string`: Organization`s code
  * contacts [OrganizationContacts](#organizationcontacts)
  * description `string`: Description
  * icon [OrganizationAttributesIcon](#organizationattributesicon)
  * industries `array`: Industries
    * items `string`
  * logo [OrganizationAttributesLogo](#organizationattributeslogo)
  * name `string`: Organization`s name
  * site `string`: Organization`s site
  * social_profiles [OrganizationSocial](#organizationsocial)
  * status `string`: Organization`s status [active, liquidated, deleted]
  * wiki `string`: Organization`s wiki

### OrganizationAttributesIcon
* OrganizationAttributesIcon `object`: Links to organization icons
  * 16 `string`: 16x16 icon
  * 32 `string`: 32x32 icon
  * 64 `string`: 64x64 icon

### OrganizationAttributesLogo
* OrganizationAttributesLogo `object`: Links to organization logos
  * 50 `string`: 50x50 logo
  * 100 `string`: 100x100 logo
  * 150 `string`: 150x150 logo

### OrganizationContacts
* OrganizationContacts `object`: Organization`s contacts
  * email `string`
  * fax `string`
  * phone `string`
  * skype `string`

### OrganizationHq
* OrganizationHq `object`
  * data [OrganizationHqData](#organizationhqdata)
  * links [OrganizationHqLinks](#organizationhqlinks)

### OrganizationHqData
* OrganizationHqData `object`
  * id `string`: HQ location
  * type `string`

### OrganizationHqLinks
* OrganizationHqLinks `object`
  * related `string`

### OrganizationRelationships
* OrganizationRelationships `object`
  * active_in_countries [OrganizationActive](#organizationactive)
  * hq_in_country [OrganizationHq](#organizationhq)
  * source_register_org [OrganizationSource](#organizationsource)

### OrganizationResponse
* OrganizationResponse `object`
  * data [Organization](#organization)

### OrganizationSocial
* OrganizationSocial `object`: Social profiles
  * facebook `string`
  * google_plus `string`
  * linked_in `string`
  * twitter `string`
  * vkontakte `string`

### OrganizationSource
* OrganizationSource `object`
  * data [OrganizationSourceData](#organizationsourcedata)
  * links [OrganizationSourceLinks](#organizationsourcelinks)

### OrganizationSourceData
* OrganizationSourceData `object`
  * id `string`
  * type `string`

### OrganizationSourceLinks
* OrganizationSourceLinks `object`
  * related `string`

### OrganizationsResponse
* OrganizationsResponse `object`
  * data `array`
    * items [Organization](#organization)
  * links [ResponseLinks](#responselinks)
  * meta [ResponseMeta](#responsemeta)

### PaymentMethod
* PaymentMethod `object`
  * attributes [PaymentMethodAttributes](#paymentmethodattributes)
  * id `string`: Payment-methods`s ID
  * links [SelfLinks](#selflinks)
  * relationships [PaymentMethodRelationships](#paymentmethodrelationships)
  * type `string`

### PaymentMethodAttributes
* PaymentMethodAttributes `object`: Array of Payment-method attributes
  * category `string`
  * code `string`: Payment-method`s code
  * name `string`: Payment-method`s name
  * processor_name `string`: Payment-method`s processor

### PaymentMethodCurrencies
* PaymentMethodCurrencies `object`
  * data `array`
    * items `string`
  * links [PaymentMethodCurrenciesLinks](#paymentmethodcurrencieslinks)

### PaymentMethodCurrenciesLinks
* PaymentMethodCurrenciesLinks `object`
  * related `string`

### PaymentMethodProcessor
* PaymentMethodProcessor `object`: Payment-method issuer.
  * data [PaymentMethodProcessorData](#paymentmethodprocessordata)
  * links [PaymentMethodProcessorLinks](#paymentmethodprocessorlinks)

### PaymentMethodProcessorData
* PaymentMethodProcessorData `object`: Processor`s Data.
  * id `string`: Processor`s id.
  * type `string`: Processor`s type.

### PaymentMethodProcessorLinks
* PaymentMethodProcessorLinks `object`
  * related `string`

### PaymentMethodRelationships
* PaymentMethodRelationships `object`
  * currencies [PaymentMethodCurrencies](#paymentmethodcurrencies)
  * payment-processor [PaymentMethodProcessor](#paymentmethodprocessor)

### PaymentMethodResponse
* PaymentMethodResponse `object`
  * data [PaymentMethod](#paymentmethod)

### PaymentMethodsResponse
* PaymentMethodsResponse `object`
  * data `array`
    * items [PaymentMethod](#paymentmethod)
  * links [ResponseLinks](#responselinks)
  * meta [ResponseMeta](#responsemeta)

### PaymentProvider
* PaymentProvider `object`
  * attributes [PaymentProviderAttributes](#paymentproviderattributes)
  * id `string`: Payment-provider`s ID
  * links [SelfLinks](#selflinks)
  * relationships [PaymentProviderRelationships](#paymentproviderrelationships)
  * type `string`

### PaymentProviderAttributes
* PaymentProviderAttributes `object`: Array of Payment-provider attributes
  * code `string`: Payment-provider`s code
  * features `array`
    * items `string`
  * name `string`: Payment-provider`s name
  * sales_channels `array`
    * items `string`
  * types `array`
    * items `string`

### PaymentProviderOrganization
* PaymentProviderOrganization `object`
  * data [PaymentProviderOrganizationData](#paymentproviderorganizationdata)
  * links [PaymentProviderOrganizationLinks](#paymentproviderorganizationlinks)

### PaymentProviderOrganizationData
* PaymentProviderOrganizationData `object`
  * id `string`: Organization`s ID
  * type `string`

### PaymentProviderOrganizationLinks
* PaymentProviderOrganizationLinks `object`
  * related `string`

### PaymentProviderPaymentMethods
* PaymentProviderPaymentMethods `object`
  * data `array`
    * items `string`
  * links [PaymentProviderPaymentMethodsLinks](#paymentproviderpaymentmethodslinks)

### PaymentProviderPaymentMethodsLinks
* PaymentProviderPaymentMethodsLinks `object`
  * related `string`

### PaymentProviderRelationships
* PaymentProviderRelationships `object`
  * organization [PaymentProviderOrganization](#paymentproviderorganization)
  * payment-methods [PaymentProviderPaymentMethods](#paymentproviderpaymentmethods)

### PaymentProviderResponse
* PaymentProviderResponse `object`
  * data [PaymentProvider](#paymentprovider)

### PaymentProvidersResponse
* PaymentProvidersResponse `object`
  * data `array`
    * items [PaymentProvider](#paymentprovider)
  * links [ResponseLinks](#responselinks)
  * meta [ResponseMeta](#responsemeta)

### ResponseLinks
* ResponseLinks `object`
  * first **required** `string`: first page of query
  * last **required** `string`: last page of query
  * next `string`: next page in query
  * prev `string`: previous page in query

### ResponseMeta
* ResponseMeta `object`
  * pages `integer`: total pages
  * total `integer`: total objects in query

### SelfLinks
* SelfLinks `object`
  * self `string`

### SupportedPspsRelationship
* SupportedPspsRelationship `object`: Supported psps
  * data `array`
    * items `object`
      * id `string`
      * type `string`
  * links `object`
    * related `string`


