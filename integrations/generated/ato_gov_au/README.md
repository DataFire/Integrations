# @datafire/ato_gov_au

Client library for Business Registries

## Installation and Usage
```bash
npm install --save datafire @datafire/ato_gov_au
```

```js
let datafire = require('datafire');
let ato_gov_au = require('@datafire/ato_gov_au').create();

ato_gov_au.business_names.get({}).then(data => {
  console.log(data);
})
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

#### Parameters
* apiKey (string) **required** - The API key.

### classifications.address_types.get
Retrieve a list of address types


```js
ato_gov_au.classifications.address_types.get({
  "apiKey": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.

### classifications.business_name_lifecycle_states.get
Retrieve a list of business name lifecycle states


```js
ato_gov_au.classifications.business_name_lifecycle_states.get({
  "apiKey": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.

### classifications.electronic_address_types.get
Retrieve a list of electronic address types


```js
ato_gov_au.classifications.electronic_address_types.get({
  "apiKey": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.

### classifications.genders.get
Retrieve a list of genders


```js
ato_gov_au.classifications.genders.get({
  "apiKey": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.

### classifications.legal_entity_types.get
Retrieve a list of legal entity types


```js
ato_gov_au.classifications.legal_entity_types.get({
  "apiKey": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.

### classifications.license_lifecycle_states.get
Retrieve a list of license lifecycle states


```js
ato_gov_au.classifications.license_lifecycle_states.get({
  "apiKey": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.

### classifications.license_types.get
Retrieve a list of license types


```js
ato_gov_au.classifications.license_types.get({
  "apiKey": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.

### classifications.name_directions.get
Retrieve a list of name directions


```js
ato_gov_au.classifications.name_directions.get({
  "apiKey": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.

### classifications.name_prefixes.get
Retrieve a list of name prefixes


```js
ato_gov_au.classifications.name_prefixes.get({
  "apiKey": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.

### classifications.name_types.get
Retrieve a list of name types


```js
ato_gov_au.classifications.name_types.get({
  "apiKey": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.

### classifications.registered_identifier_types.get
Retrieve a list of registered identifier types


```js
ato_gov_au.classifications.registered_identifier_types.get({
  "apiKey": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.

### classifications.roles.get
Retrieve a list of roles


```js
ato_gov_au.classifications.roles.get({
  "apiKey": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.

### individuals.get
Retrieve a list of individuals



```js
ato_gov_au.individuals.get({
  "apiKey": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* dateOfBirth (string) - The individual's date of birth, for example, `1979-01-13` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).
* placeOfBirth (string) - The individual's place of birth, for example, `Tamworth`.

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

#### Parameters
* apiKey (string) **required** - The API key.
* body (object) **required** - The Individual resource.

### individuals.partyId.delete
Delete an individual with the specified identifier



```js
ato_gov_au.individuals.partyId.delete({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### individuals.partyId.get
Retrieve an individual with the specified identifier



```js
ato_gov_au.individuals.partyId.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

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

#### Parameters
* body (object) **required** - The Individual resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### individuals.partyId.addresses.get
Retrieve a list of addresses


```js
ato_gov_au.individuals.partyId.addresses.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### individuals.partyId.addresses.post
Create an address



```js
ato_gov_au.individuals.partyId.addresses.post({
  "body": {},
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* body (object) **required** - The Address resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### individuals.partyId.addresses.addressId.delete
Delete an address



```js
ato_gov_au.individuals.partyId.addresses.addressId.delete({
  "apiKey": "",
  "partyId": "",
  "addressId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* addressId (string) **required** - The address identifier.

### individuals.partyId.addresses.addressId.get
Retrieve an address



```js
ato_gov_au.individuals.partyId.addresses.addressId.get({
  "apiKey": "",
  "partyId": "",
  "addressId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* addressId (string) **required** - The address identifier.

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

#### Parameters
* body (object) **required** - The Address resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* addressId (string) **required** - The address identifier.

### individuals.partyId.business_names.get
Retrieve a list of business names


```js
ato_gov_au.individuals.partyId.business_names.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### individuals.partyId.business_names.post
Create a business name



```js
ato_gov_au.individuals.partyId.business_names.post({
  "body": {},
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* body (object) **required** - The Business Name resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### individuals.partyId.business_names.productId.delete
Delete a business name



```js
ato_gov_au.individuals.partyId.business_names.productId.delete({
  "apiKey": "",
  "partyId": "",
  "productId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* productId (string) **required** - The product identifier.

### individuals.partyId.business_names.productId.get
Retrieve a business name



```js
ato_gov_au.individuals.partyId.business_names.productId.get({
  "apiKey": "",
  "partyId": "",
  "productId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* productId (string) **required** - The product identifier.

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

#### Parameters
* body (object) **required** - The Business Name resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* productId (string) **required** - The product identifier.

### individuals.partyId.electronic_addresses.get
Retrieve a list of electronic addresses


```js
ato_gov_au.individuals.partyId.electronic_addresses.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### individuals.partyId.electronic_addresses.post
Create an electronic address



```js
ato_gov_au.individuals.partyId.electronic_addresses.post({
  "body": {},
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* body (object) **required** - The Electronic Address resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### individuals.partyId.electronic_addresses.addressId.delete
Delete an electronic address



```js
ato_gov_au.individuals.partyId.electronic_addresses.addressId.delete({
  "apiKey": "",
  "partyId": "",
  "addressId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* addressId (string) **required** - The address identifier.

### individuals.partyId.electronic_addresses.addressId.get
Retrieve an electronic address



```js
ato_gov_au.individuals.partyId.electronic_addresses.addressId.get({
  "apiKey": "",
  "partyId": "",
  "addressId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* addressId (string) **required** - The address identifier.

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

#### Parameters
* body (object) **required** - The Electronic Address resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* addressId (string) **required** - The address identifier.

### individuals.partyId.licenses.get
Retrieve a list of licenses


```js
ato_gov_au.individuals.partyId.licenses.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### individuals.partyId.licenses.post
Create a license



```js
ato_gov_au.individuals.partyId.licenses.post({
  "body": {},
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* body (object) **required** - The License resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### individuals.partyId.licenses.productId.delete
Delete a license



```js
ato_gov_au.individuals.partyId.licenses.productId.delete({
  "apiKey": "",
  "partyId": "",
  "productId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* productId (string) **required** - The product identifier.

### individuals.partyId.licenses.productId.get
Retrieve a license



```js
ato_gov_au.individuals.partyId.licenses.productId.get({
  "apiKey": "",
  "partyId": "",
  "productId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* productId (string) **required** - The product identifier.

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

#### Parameters
* body (object) **required** - The License resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* productId (string) **required** - The product identifier.

### individuals.partyId.roles.get
Retrieve a list of roles


```js
ato_gov_au.individuals.partyId.roles.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

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

#### Parameters
* body (object) **required** - The Party Role resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### individuals.partyId.roles.roleId.delete
Delete a role



```js
ato_gov_au.individuals.partyId.roles.roleId.delete({
  "apiKey": "",
  "partyId": "",
  "roleId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* roleId (string) **required** - The role identifier.

### individuals.partyId.roles.roleId.get
Retrieve a role



```js
ato_gov_au.individuals.partyId.roles.roleId.get({
  "apiKey": "",
  "partyId": "",
  "roleId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* roleId (string) **required** - The role identifier.

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

#### Parameters
* body (object) **required** - The Party Role resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* roleId (string) **required** - The role identifier.

### licenses.get
Retrieve a list of licenses



```js
ato_gov_au.licenses.get({
  "apiKey": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.

### organisations.get
Retrieve a list of organisations



```js
ato_gov_au.organisations.get({
  "apiKey": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* registeredIdentifier (string) - The registered identifier, for example, `ACN` or `ABN`.
* identifier (string) - The identifier, for example, `123456789`.

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

#### Parameters
* apiKey (string) **required** - The API key.
* body (object) **required** - The Organisation resource.

### organisations.partyId.delete
Delete an organisation with the specified identifier



```js
ato_gov_au.organisations.partyId.delete({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### organisations.partyId.get
Retrieve an organisation with the specified identifier



```js
ato_gov_au.organisations.partyId.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

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

#### Parameters
* body (object) **required** - The Organisation resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### organisations.partyId.addresses.get
Retrieve a list of addresses


```js
ato_gov_au.organisations.partyId.addresses.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### organisations.partyId.addresses.post
Create an address



```js
ato_gov_au.organisations.partyId.addresses.post({
  "body": {},
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* body (object) **required** - The Address resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### organisations.partyId.addresses.addressId.delete
Delete an address



```js
ato_gov_au.organisations.partyId.addresses.addressId.delete({
  "apiKey": "",
  "partyId": "",
  "addressId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* addressId (string) **required** - The address identifier.

### organisations.partyId.addresses.addressId.get
Retrieve an address



```js
ato_gov_au.organisations.partyId.addresses.addressId.get({
  "apiKey": "",
  "partyId": "",
  "addressId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* addressId (string) **required** - The address identifier.

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

#### Parameters
* body (object) **required** - The Address resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* addressId (string) **required** - The address identifier.

### organisations.partyId.business_names.get
Retrieve a list of business names


```js
ato_gov_au.organisations.partyId.business_names.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### organisations.partyId.business_names.post
Create a business name



```js
ato_gov_au.organisations.partyId.business_names.post({
  "body": {},
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* body (object) **required** - The Business Name resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### organisations.partyId.business_names.productId.delete
Delete a business name



```js
ato_gov_au.organisations.partyId.business_names.productId.delete({
  "apiKey": "",
  "partyId": "",
  "productId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* productId (string) **required** - The product identifier.

### organisations.partyId.business_names.productId.get
Retrieve a business name



```js
ato_gov_au.organisations.partyId.business_names.productId.get({
  "apiKey": "",
  "partyId": "",
  "productId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* productId (string) **required** - The product identifier.

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

#### Parameters
* body (object) **required** - The Business Name resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* productId (string) **required** - The product identifier.

### organisations.partyId.electronic_addresses.get
Retrieve a list of electronic addresses


```js
ato_gov_au.organisations.partyId.electronic_addresses.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### organisations.partyId.electronic_addresses.post
Create an electronic address



```js
ato_gov_au.organisations.partyId.electronic_addresses.post({
  "body": {},
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* body (object) **required** - The Electronic Address resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### organisations.partyId.electronic_addresses.addressId.delete
Delete an electronic address



```js
ato_gov_au.organisations.partyId.electronic_addresses.addressId.delete({
  "apiKey": "",
  "partyId": "",
  "addressId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* addressId (string) **required** - The address identifier.

### organisations.partyId.electronic_addresses.addressId.get
Retrieve an electronic address



```js
ato_gov_au.organisations.partyId.electronic_addresses.addressId.get({
  "apiKey": "",
  "partyId": "",
  "addressId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* addressId (string) **required** - The address identifier.

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

#### Parameters
* body (object) **required** - The Electronic Address resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* addressId (string) **required** - The address identifier.

### organisations.partyId.licenses.get
Retrieve a list of licenses


```js
ato_gov_au.organisations.partyId.licenses.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### organisations.partyId.licenses.post
Create a license



```js
ato_gov_au.organisations.partyId.licenses.post({
  "body": {},
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* body (object) **required** - The License resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### organisations.partyId.licenses.productId.delete
Delete a license



```js
ato_gov_au.organisations.partyId.licenses.productId.delete({
  "apiKey": "",
  "partyId": "",
  "productId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* productId (string) **required** - The product identifier.

### organisations.partyId.licenses.productId.get
Retrieve a license



```js
ato_gov_au.organisations.partyId.licenses.productId.get({
  "apiKey": "",
  "partyId": "",
  "productId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* productId (string) **required** - The product identifier.

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

#### Parameters
* body (object) **required** - The License resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* productId (string) **required** - The product identifier.

### organisations.partyId.roles.get
Retrieve a list of roles


```js
ato_gov_au.organisations.partyId.roles.get({
  "apiKey": "",
  "partyId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

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

#### Parameters
* body (object) **required** - The Party Role resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.

### organisations.partyId.roles.roleId.delete
Delete a role



```js
ato_gov_au.organisations.partyId.roles.roleId.delete({
  "apiKey": "",
  "partyId": "",
  "roleId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* roleId (string) **required** - The role identifier.

### organisations.partyId.roles.roleId.get
Retrieve a role



```js
ato_gov_au.organisations.partyId.roles.roleId.get({
  "apiKey": "",
  "partyId": "",
  "roleId": ""
}, context)
```

#### Parameters
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* roleId (string) **required** - The role identifier.

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

#### Parameters
* body (object) **required** - The Party Role resource.
* apiKey (string) **required** - The API key.
* partyId (string) **required** - The party identifier.
* roleId (string) **required** - The role identifier.

