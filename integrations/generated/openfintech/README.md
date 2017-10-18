# @datafire/openfintech

Client library for OpenFinTech.io

## Installation and Usage
```bash
npm install --save datafire @datafire/openfintech
```

```js
let datafire = require('datafire');
let openfintech = require('@datafire/openfintech').create();

openfintech.payment_providers.get({}).then(data => {
  console.log(data);
})
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

#### Parameters
* page[number] (integer) - Current page number.
* page[size] (integer) - Page size.<br>*Default value: 100*
* filter[sort_code] (string) - Filtering by banks code.
* filter[code] (string) - Filtering by code.
* filter[status] (array) - Filtration by status.
* sort (array) - Sort params:<br>

### banks.id.get
Returns bank with specific ID.



```js
openfintech.banks.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Unique ID.

### countries.get
Returns all available countries.



```js
openfintech.countries.get({}, context)
```

#### Parameters
* page[number] (integer) - Current page number.
* page[size] (integer) - Page size.<br>*Default value: 100*
* filter[region] (array) - Filtration by region.
* filter[sub_region] (array) - Filtration by sub region.
* sort (array) - Sort params:<br>

### countries.id.get
Returns country with specific ID.



```js
openfintech.countries.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Unique ID.

### currencies.get
Returns all available currencies.



```js
openfintech.currencies.get({}, context)
```

#### Parameters
* page[number] (integer) - Current page number.
* page[size] (integer) - Page size.<br>*Default value: 100*
* filter[search] (string) - Full text search with name, code, type, code_iso_alpha3, code_jsons_alpha, code_estandards_alpha, category.
* filter[code_iso_alpha3] (string) - Filtering by ISO code.
* filter[code_iso_numeric3] (integer) - Filtering by ISO number.
* filter[code_estandards_alpha] (string) - Filtering by estandards code.
* filter[currency_type] (array) - Filtration by currency type.
* filter[category] (array) - Filtration by category.
* sort (array) - Sort params:<br>

### currencies.id.get
Returns currency with specific ID.



```js
openfintech.currencies.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Unique ID.

### exchangers.get
Returns list of exchange markets. Each object contains general information about exchanger such as name and status, also information about rates export and related link to main organization.<br>
Rates export standards is represented by:
* [estandards](http://estandards.info)
* [jsons](http://jsons.info)
* ratex - our internal standard



```js
openfintech.exchangers.get({}, context)
```

#### Parameters
* page[number] (integer) - Current page number.
* page[size] (integer) - Page size.<br>*Default value: 100*
* filter[name] (string) - Filtering by name.
* filter[status] (array) - Filtration by status.
* sort (array) - Sort params:<br>

### exchangers.id.get
Returns exchanger with specific ID.



```js
openfintech.exchangers.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Unique ID.

### merchant_industries.get
Returns all available merchant fields of activity.



```js
openfintech.merchant_industries.get({}, context)
```

#### Parameters
* page[number] (integer) - Current page number.
* page[size] (integer) - Page size.<br>*Default value: 100*
* filter[name] (string) - Filtering by name.

### merchant_industries.id.get
Returns merchant industry with specific ID.



```js
openfintech.merchant_industries.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Unique ID.

### organizations.get
This endpoint retrievs the list of organizations present in the system. The data displays general, public information, without reference to the type of activity (for example - name, address, contacts, etc.).



```js
openfintech.organizations.get({}, context)
```

#### Parameters
* page[number] (integer) - Current page number.
* page[size] (integer) - Page size.<br>*Default value: 100*
* filter[search] (string) - Full text search with id, name, code.
* filter[name] (string) - Filtering by name.
* filter[code] (string) - Filtering by code.
* filter[status] (array) - Filtration by status.
* filter[industries] (string) - Filtering by industries.
* sort (array) - Sort params:<br>

### organizations.id.get
Returns organization with specific ID.



```js
openfintech.organizations.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Unique ID.

### payment_methods.get
Returns list of payment methods. Each object contains information about payment method such as name and category, also related link to payment method issuer (which processing it).



```js
openfintech.payment_methods.get({}, context)
```

#### Parameters
* page[number] (integer) - Current page number.
* page[size] (integer) - Page size.<br>*Default value: 100*
* filter[search] (string) - Full text search with id, name, code, category.
* filter[name] (string) - Filtering by name.
* filter[code] (string) - Filtering by code.
* filter[processor_name] (string) - Filtering by processor_name.
* filter[category] (array) - Filtering by category.
* sort (array) - Sort params:<br>

### payment_methods.id.get
Returns payment method with specific ID.



```js
openfintech.payment_methods.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Unique ID.

### payment_providers.get
A payment service provider (PSP) offers shops online services for accepting electronic payments by a variety of payment methods.<br> Endpoint returns list of PSPs. Each object contains: name, type, supported features and sales channels, also related link to available payment methods and main organization.



```js
openfintech.payment_providers.get({}, context)
```

#### Parameters
* page[number] (integer) - Current page number.
* page[size] (integer) - Page size.<br>*Default value: 100*
* filter[search] (string) - Full text search with id, code, name.
* filter[name] (string) - Filtering by name.
* filter[code] (string) - Filtering by code.
* filter[types] (array) - Filtering by types.
* filter[sales_channels] (array) - Filtering by sales channels.
* filter[features] (array) - Filtering by features.
* sort (array) - Sort params:<br>

### payment_providers.id.get
Returns payment provider with specific ID.



```js
openfintech.payment_providers.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Unique ID.

