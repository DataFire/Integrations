# @datafire/ato_gov_au

Client library for Business Registries

## Installation and Usage
```bash
npm install --save @datafire/ato_gov_au
```
```js
let ato_gov_au = require('@datafire/ato_gov_au').create();

ato_gov_au.business_names.get({
  "apiKey": ""
}).then(data => {
  console.log(data);
});
```

## Description

# Introduction
The Business Registries API is built on HTTP. The API is RESTful. It has predictable resource URIs.

  The API is documented in <a target="_blank" href="https://github.com/OAI/OpenAPI-Specification">OpenAPI</a> format.
  In addition to the standard OpenAPI syntax we use a few
  <a target="_blank" href="https://github.com/Rebilly/ReDoc/blob/master/docs/redoc-vendor-extensions.md">vendor extensions</a>.

# Overview
The following sections describe the resources that make up the Business Registries REST API.
## Current Version
By default, all requests to https://api.abr.ato.gov.au receive the `v1` version of the REST API. We encourage you to explicitly request this version via the `Accept` header.

    Accept: application/vnd.abr-ato.v1+json

## Schema
All API access is over HTTPS, and accessed from https://api.abr.ato.gov.au. All data is sent and received as JSON. Blank fields are included.

  All dates use the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format:

    YYYY-MM-DD

  For example: `2017-07-01` (the 1st of July 2017)

  All timestamps use the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format:

    YYYY-MM-DDTHH:MM:SSZ

  For example: `2017-07-01T11:05:06+10:00`

## Timezones
Some requests allow for specifying timestamps or generate timestamps with time zone information. We apply the following rules, in order of priority, to determine timezone information for API calls.
### Explicitly provide an ISO 8601 timestamp with timezone information
For API calls that allow for a timestamp to be specified, we use that exact timestamp.

  For example: `2017-07-01T11:05:06+10:00`

## Pagination
Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.

  For example:

    Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",
          <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"

`rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.
## Parameters
Many API methods take optional parameters:

    GET /individuals/1234/addresses/?addressType='Mailing'

In this example, the '1234' value is provided for the `:partyId` parameter in the path while `:addressType` is passed in the query string.
For POST, PATCH, PUT, and DELETE requests, parameters not included in the URL should be encoded as JSON with a Content-Type of 'application/json'.
## Metadata
The API provides **metadata services** that you can use to discover information about the classifcation schemes and values used by the Registry.

  For example:

    GET /classifications/roles

  Sample response:

    [
      {
        "id": "123e4567-e89b-12d3-a456-426655440001",
        "role": "Director",
        "roleDescription": "An individual responsible for managing a company's ...",
        "relationship": "Directorship",
        "reciprocalRole": "Company",
        "reciprocalRoleDescription": "An incorporated legal entity."
      },
      {
        ...
      }
    ]

## Root Endpoint
You can issue a GET request to the root endpoint (also known as the service root) to get all the endpoint categories that the REST API supports:

    curl https://api.abr.ato.gov.au

## Authentication
The Business Registries API supports API Key authentication.

  When you sign up for an account, you are given your first API key. You can generate additional API keys, and delete
  API keys (as you may need to rotate your keys in the future). You authenticate to the Business Registries API by
  providing your secret key in the request header.

  **Note:** Some requests will return `404 Not Found`, instead of `403 Permission Denied`. This is to prevent the
  accidental leakage of information to unauthorised users.


## Actions

### business_names.get
Retrieve a list of business names



```js
ato_gov_au.business_names.get({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.

#### Output
* output `array`
  * items [business-name](#business-name)

### classifications.address_types.get
Retrieve a list of address types


```js
ato_gov_au.classifications.address_types.get({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.

#### Output
* output `array`
  * items [address-type](#address-type)

### classifications.business_name_lifecycle_states.get
Retrieve a list of business name lifecycle states


```js
ato_gov_au.classifications.business_name_lifecycle_states.get({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.

#### Output
* output `array`
  * items [business-name-lifecycle-state](#business-name-lifecycle-state)

### classifications.electronic_address_types.get
Retrieve a list of electronic address types


```js
ato_gov_au.classifications.electronic_address_types.get({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.

#### Output
* output `array`
  * items [electronic-address-type](#electronic-address-type)

### classifications.genders.get
Retrieve a list of genders


```js
ato_gov_au.classifications.genders.get({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.

#### Output
* output `array`
  * items [gender](#gender)

### classifications.legal_entity_types.get
Retrieve a list of legal entity types


```js
ato_gov_au.classifications.legal_entity_types.get({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.

#### Output
* output `array`
  * items [legal-entity-type](#legal-entity-type)

### classifications.license_lifecycle_states.get
Retrieve a list of license lifecycle states


```js
ato_gov_au.classifications.license_lifecycle_states.get({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.

#### Output
* output `array`
  * items [license-lifecycle-state](#license-lifecycle-state)

### classifications.license_types.get
Retrieve a list of license types


```js
ato_gov_au.classifications.license_types.get({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.

#### Output
* output `array`
  * items [license-type](#license-type)

### classifications.name_directions.get
Retrieve a list of name directions


```js
ato_gov_au.classifications.name_directions.get({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.

#### Output
* output `array`
  * items [name-direction](#name-direction)

### classifications.name_prefixes.get
Retrieve a list of name prefixes


```js
ato_gov_au.classifications.name_prefixes.get({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.

#### Output
* output `array`
  * items [name-prefix](#name-prefix)

### classifications.name_types.get
Retrieve a list of name types


```js
ato_gov_au.classifications.name_types.get({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.

#### Output
* output `array`
  * items [name-type](#name-type)

### classifications.registered_identifier_types.get
Retrieve a list of registered identifier types


```js
ato_gov_au.classifications.registered_identifier_types.get({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.

#### Output
* output `array`
  * items [registered-identifier-type](#registered-identifier-type)

### classifications.roles.get
Retrieve a list of roles


```js
ato_gov_au.classifications.roles.get({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.

#### Output
* output `array`
  * items [role](#role)

### individuals.get
Retrieve a list of individuals



```js
ato_gov_au.individuals.get({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * dateOfBirth `string`: The individual's date of birth, for example, `1979-01-13` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).
  * placeOfBirth `string`: The individual's place of birth, for example, `Tamworth`.

#### Output
* output `array`
  * items [individual](#individual)

### individuals.post
Create an individual



```js
ato_gov_au.individuals.post({
  "apiKey": "",
  "body": {
    "dateOfBirth": "",
    "placeOfBirth": ""
  }
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * body **required** [individual](#individual)

#### Output
* output [individual](#individual)

### individuals.partyId.delete
Delete an individual with the specified identifier



```js
ato_gov_au.individuals.partyId.delete({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
*Output schema unknown*

### individuals.partyId.get
Retrieve an individual with the specified identifier



```js
ato_gov_au.individuals.partyId.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output [individual](#individual)

### individuals.partyId.put
Update an individual



```js
ato_gov_au.individuals.partyId.put({
  "body": {
    "dateOfBirth": "",
    "placeOfBirth": ""
  },
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [individual](#individual)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output [individual](#individual)

### individuals.partyId.addresses.get
Retrieve a list of addresses


```js
ato_gov_au.individuals.partyId.addresses.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output `array`
  * items [address](#address)

### individuals.partyId.addresses.post
Create an address



```js
ato_gov_au.individuals.partyId.addresses.post({
  "body": {},
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [address](#address)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output [address](#address)

### individuals.partyId.addresses.addressId.delete
Delete an address



```js
ato_gov_au.individuals.partyId.addresses.addressId.delete({
  "apiKey": "",
  "partyId": "",
  "addressId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * addressId **required** `string`: The address identifier.

#### Output
*Output schema unknown*

### individuals.partyId.addresses.addressId.get
Retrieve an address



```js
ato_gov_au.individuals.partyId.addresses.addressId.get({
  "apiKey": "",
  "partyId": "",
  "addressId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * addressId **required** `string`: The address identifier.

#### Output
* output [address](#address)

### individuals.partyId.addresses.addressId.put
Update an address



```js
ato_gov_au.individuals.partyId.addresses.addressId.put({
  "body": {},
  "apiKey": "",
  "partyId": "",
  "addressId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [address](#address)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * addressId **required** `string`: The address identifier.

#### Output
* output [address](#address)

### individuals.partyId.business_names.get
Retrieve a list of business names


```js
ato_gov_au.individuals.partyId.business_names.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output `array`
  * items [business-name](#business-name)

### individuals.partyId.business_names.post
Create a business name



```js
ato_gov_au.individuals.partyId.business_names.post({
  "body": {},
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [business-name](#business-name)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output [business-name](#business-name)

### individuals.partyId.business_names.productId.delete
Delete a business name



```js
ato_gov_au.individuals.partyId.business_names.productId.delete({
  "apiKey": "",
  "partyId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * productId **required** `string`: The product identifier.

#### Output
*Output schema unknown*

### individuals.partyId.business_names.productId.get
Retrieve a business name



```js
ato_gov_au.individuals.partyId.business_names.productId.get({
  "apiKey": "",
  "partyId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * productId **required** `string`: The product identifier.

#### Output
* output [business-name](#business-name)

### individuals.partyId.business_names.productId.put
Update a business name



```js
ato_gov_au.individuals.partyId.business_names.productId.put({
  "body": {},
  "apiKey": "",
  "partyId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [business-name](#business-name)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * productId **required** `string`: The product identifier.

#### Output
* output [business-name](#business-name)

### individuals.partyId.electronic_addresses.get
Retrieve a list of electronic addresses


```js
ato_gov_au.individuals.partyId.electronic_addresses.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output `array`
  * items [electronic-address](#electronic-address)

### individuals.partyId.electronic_addresses.post
Create an electronic address



```js
ato_gov_au.individuals.partyId.electronic_addresses.post({
  "body": {},
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [electronic-address](#electronic-address)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output [electronic-address](#electronic-address)

### individuals.partyId.electronic_addresses.addressId.delete
Delete an electronic address



```js
ato_gov_au.individuals.partyId.electronic_addresses.addressId.delete({
  "apiKey": "",
  "partyId": "",
  "addressId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * addressId **required** `string`: The address identifier.

#### Output
*Output schema unknown*

### individuals.partyId.electronic_addresses.addressId.get
Retrieve an electronic address



```js
ato_gov_au.individuals.partyId.electronic_addresses.addressId.get({
  "apiKey": "",
  "partyId": "",
  "addressId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * addressId **required** `string`: The address identifier.

#### Output
* output [electronic-address](#electronic-address)

### individuals.partyId.electronic_addresses.addressId.put
Update an electronic address



```js
ato_gov_au.individuals.partyId.electronic_addresses.addressId.put({
  "body": {},
  "apiKey": "",
  "partyId": "",
  "addressId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [electronic-address](#electronic-address)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * addressId **required** `string`: The address identifier.

#### Output
* output [electronic-address](#electronic-address)

### individuals.partyId.licenses.get
Retrieve a list of licenses


```js
ato_gov_au.individuals.partyId.licenses.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output `array`
  * items [license](#license)

### individuals.partyId.licenses.post
Create a license



```js
ato_gov_au.individuals.partyId.licenses.post({
  "body": {},
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [license](#license)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output [license](#license)

### individuals.partyId.licenses.productId.delete
Delete a license



```js
ato_gov_au.individuals.partyId.licenses.productId.delete({
  "apiKey": "",
  "partyId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * productId **required** `string`: The product identifier.

#### Output
*Output schema unknown*

### individuals.partyId.licenses.productId.get
Retrieve a license



```js
ato_gov_au.individuals.partyId.licenses.productId.get({
  "apiKey": "",
  "partyId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * productId **required** `string`: The product identifier.

#### Output
* output [license](#license)

### individuals.partyId.licenses.productId.put
Update a license



```js
ato_gov_au.individuals.partyId.licenses.productId.put({
  "body": {},
  "apiKey": "",
  "partyId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [license](#license)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * productId **required** `string`: The product identifier.

#### Output
* output [license](#license)

### individuals.partyId.roles.get
Retrieve a list of roles


```js
ato_gov_au.individuals.partyId.roles.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output `array`
  * items [party-role](#party-role)

### individuals.partyId.roles.post
Create a role



```js
ato_gov_au.individuals.partyId.roles.post({
  "body": {
    "relatedPartyId": null,
    "relationshipType": ""
  },
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [party-role](#party-role)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output [party-role](#party-role)

### individuals.partyId.roles.roleId.delete
Delete a role



```js
ato_gov_au.individuals.partyId.roles.roleId.delete({
  "apiKey": "",
  "partyId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * roleId **required** `string`: The role identifier.

#### Output
*Output schema unknown*

### individuals.partyId.roles.roleId.get
Retrieve a role



```js
ato_gov_au.individuals.partyId.roles.roleId.get({
  "apiKey": "",
  "partyId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * roleId **required** `string`: The role identifier.

#### Output
* output [party-role](#party-role)

### individuals.partyId.roles.roleId.put
Update a role



```js
ato_gov_au.individuals.partyId.roles.roleId.put({
  "body": {
    "relatedPartyId": null,
    "relationshipType": ""
  },
  "apiKey": "",
  "partyId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [party-role](#party-role)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * roleId **required** `string`: The role identifier.

#### Output
* output [party-role](#party-role)

### licenses.get
Retrieve a list of licenses



```js
ato_gov_au.licenses.get({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.

#### Output
* output `array`
  * items [license](#license)

### organisations.get
Retrieve a list of organisations



```js
ato_gov_au.organisations.get({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * registeredIdentifier `string`: The registered identifier, for example, `ACN` or `ABN`.
  * identifier `string`: The identifier, for example, `123456789`.

#### Output
* output `array`
  * items [organisation](#organisation)

### organisations.post
Create an organisation



```js
ato_gov_au.organisations.post({
  "apiKey": "",
  "body": {
    "legalEntityType": "",
    "establishmentDate": ""
  }
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * body **required** [organisation](#organisation)

#### Output
* output [organisation](#organisation)

### organisations.partyId.delete
Delete an organisation with the specified identifier



```js
ato_gov_au.organisations.partyId.delete({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
*Output schema unknown*

### organisations.partyId.get
Retrieve an organisation with the specified identifier



```js
ato_gov_au.organisations.partyId.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output [organisation](#organisation)

### organisations.partyId.put
Update an organisation



```js
ato_gov_au.organisations.partyId.put({
  "body": {
    "legalEntityType": "",
    "establishmentDate": ""
  },
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [organisation](#organisation)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output [organisation](#organisation)

### organisations.partyId.addresses.get
Retrieve a list of addresses


```js
ato_gov_au.organisations.partyId.addresses.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output `array`
  * items [address](#address)

### organisations.partyId.addresses.post
Create an address



```js
ato_gov_au.organisations.partyId.addresses.post({
  "body": {},
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [address](#address)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output [address](#address)

### organisations.partyId.addresses.addressId.delete
Delete an address



```js
ato_gov_au.organisations.partyId.addresses.addressId.delete({
  "apiKey": "",
  "partyId": "",
  "addressId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * addressId **required** `string`: The address identifier.

#### Output
*Output schema unknown*

### organisations.partyId.addresses.addressId.get
Retrieve an address



```js
ato_gov_au.organisations.partyId.addresses.addressId.get({
  "apiKey": "",
  "partyId": "",
  "addressId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * addressId **required** `string`: The address identifier.

#### Output
* output [address](#address)

### organisations.partyId.addresses.addressId.put
Update an address



```js
ato_gov_au.organisations.partyId.addresses.addressId.put({
  "body": {},
  "apiKey": "",
  "partyId": "",
  "addressId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [address](#address)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * addressId **required** `string`: The address identifier.

#### Output
* output [address](#address)

### organisations.partyId.business_names.get
Retrieve a list of business names


```js
ato_gov_au.organisations.partyId.business_names.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output `array`
  * items [business-name](#business-name)

### organisations.partyId.business_names.post
Create a business name



```js
ato_gov_au.organisations.partyId.business_names.post({
  "body": {},
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [business-name](#business-name)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output [business-name](#business-name)

### organisations.partyId.business_names.productId.delete
Delete a business name



```js
ato_gov_au.organisations.partyId.business_names.productId.delete({
  "apiKey": "",
  "partyId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * productId **required** `string`: The product identifier.

#### Output
*Output schema unknown*

### organisations.partyId.business_names.productId.get
Retrieve a business name



```js
ato_gov_au.organisations.partyId.business_names.productId.get({
  "apiKey": "",
  "partyId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * productId **required** `string`: The product identifier.

#### Output
* output [business-name](#business-name)

### organisations.partyId.business_names.productId.put
Update a business name



```js
ato_gov_au.organisations.partyId.business_names.productId.put({
  "body": {},
  "apiKey": "",
  "partyId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [business-name](#business-name)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * productId **required** `string`: The product identifier.

#### Output
* output [business-name](#business-name)

### organisations.partyId.electronic_addresses.get
Retrieve a list of electronic addresses


```js
ato_gov_au.organisations.partyId.electronic_addresses.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output `array`
  * items [electronic-address](#electronic-address)

### organisations.partyId.electronic_addresses.post
Create an electronic address



```js
ato_gov_au.organisations.partyId.electronic_addresses.post({
  "body": {},
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [electronic-address](#electronic-address)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output [electronic-address](#electronic-address)

### organisations.partyId.electronic_addresses.addressId.delete
Delete an electronic address



```js
ato_gov_au.organisations.partyId.electronic_addresses.addressId.delete({
  "apiKey": "",
  "partyId": "",
  "addressId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * addressId **required** `string`: The address identifier.

#### Output
*Output schema unknown*

### organisations.partyId.electronic_addresses.addressId.get
Retrieve an electronic address



```js
ato_gov_au.organisations.partyId.electronic_addresses.addressId.get({
  "apiKey": "",
  "partyId": "",
  "addressId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * addressId **required** `string`: The address identifier.

#### Output
* output [electronic-address](#electronic-address)

### organisations.partyId.electronic_addresses.addressId.put
Update an electronic address



```js
ato_gov_au.organisations.partyId.electronic_addresses.addressId.put({
  "body": {},
  "apiKey": "",
  "partyId": "",
  "addressId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [electronic-address](#electronic-address)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * addressId **required** `string`: The address identifier.

#### Output
* output [electronic-address](#electronic-address)

### organisations.partyId.licenses.get
Retrieve a list of licenses


```js
ato_gov_au.organisations.partyId.licenses.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output `array`
  * items [license](#license)

### organisations.partyId.licenses.post
Create a license



```js
ato_gov_au.organisations.partyId.licenses.post({
  "body": {},
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [license](#license)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output [license](#license)

### organisations.partyId.licenses.productId.delete
Delete a license



```js
ato_gov_au.organisations.partyId.licenses.productId.delete({
  "apiKey": "",
  "partyId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * productId **required** `string`: The product identifier.

#### Output
*Output schema unknown*

### organisations.partyId.licenses.productId.get
Retrieve a license



```js
ato_gov_au.organisations.partyId.licenses.productId.get({
  "apiKey": "",
  "partyId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * productId **required** `string`: The product identifier.

#### Output
* output [license](#license)

### organisations.partyId.licenses.productId.put
Update a license



```js
ato_gov_au.organisations.partyId.licenses.productId.put({
  "body": {},
  "apiKey": "",
  "partyId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [license](#license)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * productId **required** `string`: The product identifier.

#### Output
* output [license](#license)

### organisations.partyId.roles.get
Retrieve a list of roles


```js
ato_gov_au.organisations.partyId.roles.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output `array`
  * items [party-role](#party-role)

### organisations.partyId.roles.post
Create a role



```js
ato_gov_au.organisations.partyId.roles.post({
  "body": {
    "relatedPartyId": null,
    "relationshipType": ""
  },
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [party-role](#party-role)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.

#### Output
* output [party-role](#party-role)

### organisations.partyId.roles.roleId.delete
Delete a role



```js
ato_gov_au.organisations.partyId.roles.roleId.delete({
  "apiKey": "",
  "partyId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * roleId **required** `string`: The role identifier.

#### Output
*Output schema unknown*

### organisations.partyId.roles.roleId.get
Retrieve a role



```js
ato_gov_au.organisations.partyId.roles.roleId.get({
  "apiKey": "",
  "partyId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * roleId **required** `string`: The role identifier.

#### Output
* output [party-role](#party-role)

### organisations.partyId.roles.roleId.put
Update a role



```js
ato_gov_au.organisations.partyId.roles.roleId.put({
  "body": {
    "relatedPartyId": null,
    "relationshipType": ""
  },
  "apiKey": "",
  "partyId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [party-role](#party-role)
  * apiKey **required** `string`: The API key.
  * partyId **required** `string`: The party identifier.
  * roleId **required** `string`: The role identifier.

#### Output
* output [party-role](#party-role)



## Definitions

### address
* address `object`: The Address resource.
  * city `string`: The city.
  * country `string`: The country.
  * fromDate `string`: The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
  * id: The resource's unique identifier.
  * line1 `string`: The address line 1.
  * line2 `string`: The address line 2.
  * line3 `string`: The address line 3.
  * name `string`: The address name.
  * postalCode `string`: The postal code.
  * suburb `string`: The suburb.
  * toDate `string`: The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

### address-type
* address-type
  * description `string`: The scheme value description.
  * id: The resource's unique identifier.
  * name `string`: The scheme value.

### addressId
* addressId

### business-name
* business-name `object`: The Business Name resource.
  * fromDate `string`: The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
  * id: The resource's unique identifier.
  * lifecycleState `string` (values: Approved, Expired, Issued, Pending Approval, Suspended): The business name's lifecycle state.
  * name `string`: The business name.
  * toDate `string`: The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

### business-name-lifecycle-state
* business-name-lifecycle-state
  * description `string`: The scheme value description.
  * id: The resource's unique identifier.
  * name `string`: The scheme value.

### electronic-address
* electronic-address `object`: The Electronic Address resource.
  * areaCode `string`: The area code, for example, "02".
  * countryPrefix `string`: The country prefix, for example, "61".
  * electronicAddressType `string` (values: Email, Fax, Landline, Mobile, Website): The electronic address type.
  * email `string`: The email address, for example, "robert.ferguson@ato.gov.au".
  * extension `string`: The extension number, for example, "4453".
  * fromDate `string`: The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
  * id: The resource's unique identifier.
  * number `string`: The number, for example, "62164453".
  * toDate `string`: The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
  * url `string`: The website address, for example, "https://ato.gov.au".

### electronic-address-type
* electronic-address-type
  * description `string`: The scheme value description.
  * id: The resource's unique identifier.
  * name `string`: The scheme value.

### error-details
* error-details `object`
  * code `string`: The error code.
  * message `string`: The error message.
  * target `string`: The error target.

### failed-precondition
* failed-precondition `object`
  * code `string`: The error code.
  * details `array`
    * items [error-details](#error-details)
  * message `string`: The error message.
  * status `string`: The error status.

### gender
* gender `object`: The Gender resource.
  * gender `string`: The gender.
  * id: The resource's unique identifier.

### individual
* individual `object`: The Individual resource.
  * addresses `array`
    * items [individual-address](#individual-address)
  * dateOfBirth **required** `string`: The individual's date of birth, for example, `1979-01-13` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).
  * electronicAddresses `array`
    * items [electronic-address](#electronic-address)
  * fromDate `string`: The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
  * gender `string` (values: Female, Male, Not Applicable, Not Known): The individual's gender.
  * id: The party's unique identifier.
  * names `array`
    * items [individual-name](#individual-name)
  * placeOfBirth **required** `string`: The individual's place of birth, for example, `Tamworth`.
  * toDate `string`: The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

### individual-address
* individual-address
  * city `string`: The city.
  * country `string`: The country.
  * fromDate `string`: The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
  * id: The resource's unique identifier.
  * line1 `string`: The address line 1.
  * line2 `string`: The address line 2.
  * line3 `string`: The address line 3.
  * name `string`: The address name.
  * postalCode `string`: The postal code.
  * suburb `string`: The suburb.
  * toDate `string`: The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
  * addressType `string` (values: Mailing, Principal Place of Business, Principal Place of Residence): The address type.
  * fromDate `string`: The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
  * toDate `string`: The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

### individual-name
* individual-name `object`: The Individual Name resource.
  * direction `string` (values: left-to-right, right-to-left): The direction used to render the individual's name.
  * familyName `string`: The individual's family name.
  * formalSalutation `string`: The individual's formal salutation, for example, "Mr William Smith".
  * fromDate `string`: The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
  * givenName `string`: The individual's given name.
  * id: The resource's unique identifier.
  * informalSalutation `string`: The individual's informal salutation, for example, "Bill".
  * middleName `string`: The individual's middle name.
  * namePrefix `string` (values: Mr, Ms): The individual's name prefix.
  * nameSuffix `string`: The individual's name suffix, for example, "Jr" or "Sr".
  * nameType `string` (values: Alias, Principal Name): The name type.
  * toDate `string`: The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

### invalid-argument
* invalid-argument `object`
  * code `string`: The error code.
  * details `array`
    * items [error-details](#error-details)
  * message `string`: The error message.
  * status `string`: The error status.

### legal-entity-type
* legal-entity-type
  * description `string`: The scheme value description.
  * id: The resource's unique identifier.
  * name `string`: The scheme value.

### license
* license `object`: The License resource.
  * fromDate `string`: The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
  * id: The resource's unique identifier.
  * licenseType `string` (values: Australian Financial Services License, License 2B): The license type.
  * lifecycleState `string` (values: Approved, Expired, Issued, Pending Approval, Suspended): The business name's lifecycle state.
  * toDate `string`: The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

### license-lifecycle-state
* license-lifecycle-state
  * description `string`: The scheme value description.
  * id: The resource's unique identifier.
  * name `string`: The scheme value.

### license-type
* license-type
  * description `string`: The scheme value description.
  * id: The resource's unique identifier.
  * name `string`: The scheme value.

### name-direction
* name-direction
  * description `string`: The scheme value description.
  * id: The resource's unique identifier.
  * name `string`: The scheme value.

### name-prefix
* name-prefix
  * description `string`: The scheme value description.
  * id: The resource's unique identifier.
  * name `string`: The scheme value.

### name-type
* name-type
  * description `string`: The scheme value description.
  * id: The resource's unique identifier.
  * name `string`: The scheme value.

### not-found
* not-found `object`
  * code `string`: The error code.
  * details `array`
    * items [error-details](#error-details)
  * message `string`: The error message.
  * status `string`: The error status.

### organisation
* organisation `object`: The Organisation resource.
  * addresses `array`
    * items [organisation-address](#organisation-address)
  * electronicAddresses `array`
    * items [electronic-address](#electronic-address)
  * establishmentDate **required** `string`: The organisation's establishment date, for example, `1928-03-03` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).
  * fromDate `string`: The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
  * id: The party's unique identifier.
  * legalEntityType **required** `string` (values: Company, Partnership, Trust, Joint Venture): The organisation's legal entity type.
  * names `array`
    * items [organisation-name](#organisation-name)
  * registeredIdentifiers `array`
    * items [registered-identifier](#registered-identifier)
  * toDate `string`: The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

### organisation-address
* organisation-address
  * city `string`: The city.
  * country `string`: The country.
  * fromDate `string`: The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
  * id: The resource's unique identifier.
  * line1 `string`: The address line 1.
  * line2 `string`: The address line 2.
  * line3 `string`: The address line 3.
  * name `string`: The address name.
  * postalCode `string`: The postal code.
  * suburb `string`: The suburb.
  * toDate `string`: The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
  * addressType `string` (values: Mailing, Principal Place of Business): The address type.
  * fromDate `string`: The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
  * toDate `string`: The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

### organisation-name
* organisation-name `object`: The Organisation Name resource.
  * fromDate `string`: The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
  * id: The resource's unique identifier.
  * name `string`: The organisation's name.
  * toDate `string`: The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

### party-role
* party-role `object`: The Party Role resource.
  * fromDate `string`: The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
  * id: The resource's unique identifier.
  * partyRoleType `string` (values: Director, Employee, Member, Partner, Trustee): The party's role type.
  * relatedPartyId **required**: The related party's unique identifier.
  * relatedPartyRoleType `string` (values: Association, Company, Employer, Organisation, Partnership, Trust): The related party's role type.
  * relationshipType **required** `string` (values: Directorship, Employment, Membership, Partnership, Trusteeship): The relationship type.
  * toDate `string`: The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

### partyId
* partyId

### permission-denied
* permission-denied `object`
  * code `string`: The error code.
  * details `array`
    * items [error-details](#error-details)
  * message `string`: The error message.
  * status `string`: The error status.

### registered-identifier
* registered-identifier `object`: The Registered Identifier resource.
  * fromDate `string`: The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
  * id: The resource's unique identifier.
  * identifier `string`: The registered identifier.
  * identifierType `string` (values: ACN, ABN): The registered identifier type.
  * toDate `string`: The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

### registered-identifier-type
* registered-identifier-type
  * description `string`: The scheme value description.
  * id: The resource's unique identifier.
  * name `string`: The scheme value.

### resourceId
* resourceId `string`: The resource ID. Defaults to UUID v4

### role
* role `object`: The Role Type resource.
  * id: The resource's unique identifier.
  * reciprocalRole `string`: The reciprocal role name.
  * reciprocalRoleDescription `string`: The reciprocal role description.
  * relationship `string`: The relationship name.
  * role `string`: The role name.
  * roleDescription `string`: The role description.

### roleId
* roleId

### type
* type `object`: The Type resource.
  * description `string`: The scheme value description.
  * id: The resource's unique identifier.
  * name `string`: The scheme value.

### unauthenticated
* unauthenticated `object`
  * code `string`: The error code.
  * details [error-details](#error-details)
  * message `string`: The error message.
  * status `string`: The error status.


