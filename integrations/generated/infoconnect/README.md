# @datafire/infoconnect

Client library for Infoconnect

## Installation and Usage
```bash
npm install --save @datafire/infoconnect
```
```js
let infoconnect = require('@datafire/infoconnect').create();

.then(data => {
  console.log(data);
});
```

## Description

Search our rich and robust data on companies and people. Utilize our fuzzy matching to power your new app or website with Infoconnect from Infogroup Targeting Solutions.

## Actions

### v1.companies.id.get
Retrieves details of the Company identified by the resource.


```js
infoconnect.v1.companies.id.get({
  "id": "",
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: A nine to ten digit Infogroup identification number. A number referencing the company assigned by Infogroup. This number will always refer to a single company and the reference will never change, unless the resource is permanently removed. Requesting a record by {id} will always return zero or one response.
  * resourcetype `string` (values: basic, enhanced, core): Identifies the resource type for the response. The default value basic returns a base resource type that is valid across all methods; the resource type parameter is not needed to produce this response. To get a more detailed response set the resource type parameter to enhanced. To retrieve resources with Id's only, set the resource type parameter to core.
  * Content-Type **required** `string` (values: application/json, application/xml): The content type.

#### Output
*Output schema unknown*

### v1.companies.get
Retrieves lists of companies.


```js
infoconnect.v1.companies.get({
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * resourcetype `string` (values: basic, enhanced, core): Identifies the resource type for the response. The default value basic returns a base resource type that is valid across all methods; the resource type parameter is not needed to produce this response. To get a more detailed response set the resource type parameter to enhanced. To retrieve resources with Id's only, set the resource type parameter to core.
  * city `string`: Filters through the Companies collection by city name.
  * companyname `string`: Filters through the Companies collection and returns resources by company name.
  * ein `string`: Filters through the Companies collection and returns resources with an Employer Identification Number (EIN).
  * email `string`: Filters through the Companies collection and returns resources with a case-insensitive email address match at the level.
  * firstname `string`: Filters through the Companies collection by the primary contact's first name.
  * lastname `string`: Filters through the Companies collection by the primary contact's last name.
  * phone `string`: Filters through the Companies collection and returns resources with an ten-digit phone number match.
  * postalcode `string`: Filters through the Companies collection by ZIP code or Postal code.
  * stateprovince `string`: Filters through the Companies collection by State or Province abbreviation.
  * limit `integer`: Number of responses to return. If used, must be a number between 1 and 10. Default is 10.
  * offset `integer`: Number of responses to be skipped for generating the output. If used, must be a number between 0-100 minus limit. Default is 0.
  * Content-Type **required** `string` (values: application/json, application/xml): The content type.

#### Output
*Output schema unknown*

### v1.companies.search.post
Retrieves details of resources matching a given set of search fields that are submitted along with the request.


```js
infoconnect.v1.companies.search.post({
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string` (values: application/json, application/xml): The content type.

#### Output
*Output schema unknown*

### v1.companies.counts.post
Retrieves counts on resources matching a given set of search fields that are submitted along with the request.


```js
infoconnect.v1.companies.counts.post({
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string` (values: application/json, application/xml): The content type.

#### Output
*Output schema unknown*

### v1.people.id.get
Retrieves details of the individual identified by the resource.


```js
infoconnect.v1.people.id.get({
  "id": "",
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: A twelve digit Infogroup identification number. A number referencing the individual assigned by Infogroup. This number will always refer to a single individual and the reference will never change, unless the resource is permanently removed. Requesting a record by {id} will always return zero or one response.
  * resourcetype `string` (values: basic, enhanced, core, LifeStyle, TargetReady): Identifies the resource type for the response. The default value basic returns a base resource type that is valid across all methods; the resource type parameter is not needed to produce this response. To get a more detailed response set the resource type parameter to enhanced. To retrieve resources with Id's only, set the resource type parameter to core. Additional ResourceTypes are Core, LifeStyle and TargetReady.
  * Content-Type **required** `string` (values: application/json, application/xml): The content type.

#### Output
*Output schema unknown*

### v1.people.get
Retrieves lists of people.


```js
infoconnect.v1.people.get({
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * resourcetype `string` (values: basic, enhanced, core, LifeStyle, TargetReady): Identifies the resource type for the response. The default value basic returns a base resource type that is valid across all methods; the resource type parameter is not needed to produce this response. To get a more detailed response set the resource type parameter to enhanced. To retrieve resources with Id's only, set the resource type parameter to core. Additional ResourceTypes are Core, LifeStyle and TargetReady.
  * city `string`: Filters through the People collection by city name.
  * email `string`: Filters through the People collection and returns resources with a case-insensitive email address match at the level.
  * emailsha1upper `string`: Filters through the People collection and returns resources with a case-insensitive email address match at the level. If used, must be a SHA1 hashed upper case email address.
  * includehistoricalemail `boolean`: IncludeHistoricalEmail can only be used in combination with Email or EmailSha1Upper. IncludeHistoricalEmail is used to retrieve historical records. Including this limits the ResourceType to Basic only. These records do not have an Id therefore cannot be used to return an Enhanced ResourceType. If used, must be True or False. Default is False.
  * firstname `string`: Filters through the People collection by the primary contact's first name.
  * lastname `string`: Filters through the People collection by the primary contact's last name.
  * phone `string`: Filters through the People collection and returns resources with an ten-digit phone number match.
  * postalcode `string`: Filters through the People collection by ZIP code or Postal code.
  * stateprovince `string`: Filters through the People collection by State or Province abbreviation.
  * limit `integer`: Number of responses to return. If used, must be a number between 1 and 10. Default is 10.
  * offset `integer`: Number of responses to be skipped for generating the output. If used, must be a number between 0-100 minus limit. Default is 0.
  * Content-Type **required** `string` (values: application/json, application/xml): The content type.

#### Output
*Output schema unknown*

### v1.people.search.post
Retrieves details of resources matching a given set of search fields that are submitted along with the request.


```js
infoconnect.v1.people.search.post({
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string` (values: application/json, application/xml): The content type.

#### Output
*Output schema unknown*

### v1.people.counts.post
Retrieves counts on resources matching a given set of search fields that are submitted along with the request.


```js
infoconnect.v1.people.counts.post({
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string` (values: application/json, application/xml): The content type.

#### Output
*Output schema unknown*

### v3.match.post
Matching and data append for partial name and address.


```js
infoconnect.v3.match.post({
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string` (values: application/json, application/xml): The content type.

#### Output
*Output schema unknown*

### v3.multiplematch.post
Multiple matching and data append for partial name and address.


```js
infoconnect.v3.multiplematch.post({
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string` (values: application/json, application/xml): The content type.

#### Output
*Output schema unknown*

### v1.sics.id.get
Retrieves details of Standard Identification Classification (SIC) code.


```js
infoconnect.v1.sics.id.get({
  "id": "",
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: A two, four, or six numeric Standard Identification Classification (SIC) code.
  * Content-Type **required** `string` (values: application/json, application/xml): The content type.

#### Output
*Output schema unknown*

### v1.sics.get
Retrieves details of Standard Identification Classification (SIC) code.


```js
infoconnect.v1.sics.get({
  "keyword": "",
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * keyword **required** `string`: By SIC description. Example "barber".
  * Content-Type **required** `string` (values: application/json, application/xml): The content type.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
