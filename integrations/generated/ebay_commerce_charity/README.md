# @datafire/ebay_commerce_charity

Client library for Charity API

## Installation and Usage
```bash
npm install --save @datafire/ebay_commerce_charity
```
```js
let ebay_commerce_charity = require('@datafire/ebay_commerce_charity').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Charity API allows third-party developers to search for and access details on supported charitable organizations.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
ebay_commerce_charity.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
ebay_commerce_charity.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### getCharityOrgs
This call is used to search for supported charitable organizations. It allows users to search for a specific charitable organization, or for multiple charitable organizations, from a particular charitable domain and/or geographical region, or by using search criteria. The call returns paginated search results containing the charitable organizations that match the specified criteria.


```js
ebay_commerce_charity.getCharityOrgs({
  "X-EBAY-C-MARKETPLACE-ID": ""
}, context)
```

#### Input
* input `object`
  * limit `string`: The number of items, from the result set, returned in a single page. Valid Values: 1-100 Default: 20
  * offset `string`: The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Valid Values: 0-10,000 Default: 0
  * q `string`: A query string that matches the keywords in name, mission statement, or description.
  * registration_ids `string`: A comma-separated list of charitable organization registration IDs. Note: Do not specify this parameter for query-based searches. Specify either the q or registration_ids parameter, but not both. Maximum Limit: 20
  * X-EBAY-C-MARKETPLACE-ID **required** `string`: A header used to specify the eBay marketplace ID. Valid Values: EBAY_GB and EBAY_US

#### Output
* output [CharitySearchResponse](#charitysearchresponse)

### getCharityOrgByLegacyId
This call allows users to retrieve the details for a specific charitable organization using its legacy charity ID, which has also been referred to as the charity number, external ID, and PayPal Giving Fund ID. The legacy charity ID&nbsp;is separate from eBay&rsquo;s generic charity ID.


```js
ebay_commerce_charity.getCharityOrgByLegacyId({
  "X-EBAY-C-MARKETPLACE-ID": "",
  "legacy_charity_org_id": ""
}, context)
```

#### Input
* input `object`
  * X-EBAY-C-MARKETPLACE-ID **required** `string`: A header used to specify the eBay marketplace ID. Valid Values: EBAY_GB and EBAY_US
  * legacy_charity_org_id **required** `string`: The legacy ID of the charitable organization. Note: The legacy charity ID is the identifier assigned to an organization upon registration with the PayPal Giving Fund (PPGF). It has also been referred to as the external ID/charity number.

#### Output
* output [CharityOrg](#charityorg)

### getCharityOrg
This call is used to retrieve detailed information about supported charitable organizations. It allows users to retrieve the details for a specific charitable organization using its charity organization ID. The call returns the full details for the charitable organization that matches the specified ID.


```js
ebay_commerce_charity.getCharityOrg({
  "charity_org_id": "",
  "X-EBAY-C-MARKETPLACE-ID": ""
}, context)
```

#### Input
* input `object`
  * charity_org_id **required** `string`: The unique ID of the charitable organization.
  * X-EBAY-C-MARKETPLACE-ID **required** `string`: A header used to specify the eBay marketplace ID. Valid Values: EBAY_GB and EBAY_US

#### Output
* output [CharityOrg](#charityorg)



## Definitions

### Address
* Address `object`: The physical location of the item.
  * city `string`: The city of the charitable organization.
  * country `string`: The two-letter ISO 3166 standard of the country of the address. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/charity/types/bas:CountryCodeEnum'>eBay API documentation</a>
  * postalCode `string`: The postal code of the charitable organization.
  * stateOrProvince `string`: The state or province of the charitable organization.

### CharityOrg
* CharityOrg `object`: The full location, ID, logo and other details of the charity organization.
  * charityOrgId `string`: The ID of the charitable organization.
  * description `string`: The description of the charitable organization.
  * location [Location](#location)
  * logoImage [Image](#image)
  * missionStatement `string`: The mission statement of the charitable organization.
  * name `string`: The name of the charitable organization.
  * registrationId `string`: The registration ID for the charitable organization. For the US marketplace, this is the EIN.
  * website `string`: The link to the website for the charitable organization.

### CharitySearchResponse
* CharitySearchResponse `object`: A single set of search results, with information for accessing other sets.
  * charityOrgs `array`: The list of charitable organizations that match the search criteria.
    * items [CharityOrg](#charityorg)
  * href `string`: The relative path to the current set of results.
  * limit `integer`: The number of items, from the result set, returned in a single page. Valid Values: 1-100 Default: 20
  * next `string`: The relative path to the next set of results.
  * offset `integer`: The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Valid Values: 0-10,000 Default: 0
  * prev `string`: The relative path to the previous set of results.
  * total `integer`: The total number of matches for the search criteria.

### Error
* Error `object`: This type defines the fields that can be returned in an error.
  * parameters `array`: An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned.
    * items [ErrorParameter](#errorparameter)
  * category `string`: Identifies the type of erro.
  * domain `string`: Name for the primary system where the error occurred. This is relevant for application errors.
  * errorId `integer`: A unique number to identify the error.
  * inputRefIds `array`: An array of request elements most closely associated to the error.
    * items `string`
  * longMessage `string`: A more detailed explanation of the error.
  * message `string`: Information on how to correct the problem, in the end user's terms and language where applicable.
  * outputRefIds `array`: An array of request elements most closely associated to the error.
    * items `string`
  * subdomain `string`: Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc.

### ErrorParameter
* ErrorParameter `object`
  * name `string`: The object of the error.
  * value `string`: The value of the object.

### GeoCoordinates
* GeoCoordinates `object`: Defines the format of a geographic coordinate.
  * latitude `number`: The latitude component of the geographic coordinate.
  * longitude `number`: The longitude component of the geographic coordinate.

### Image
* Image `object`: The logo of the charitable organization.
  * height `string`: The height of the logo image.
  * imageUrl `string`: The URL to the logo image location.
  * width `string`: The width of the logo image.

### Location
* Location `object`
  * address [Address](#address)
  * geoCoordinates [GeoCoordinates](#geocoordinates)


