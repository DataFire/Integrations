# @datafire/azure_web_topleveldomains

Client library for TopLevelDomains API Client

## Installation and Usage
```bash
npm install --save @datafire/azure_web_topleveldomains
```
```js
let azure_web_topleveldomains = require('@datafire/azure_web_topleveldomains').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_web_topleveldomains.TopLevelDomains_List({
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### TopLevelDomains_List
Get all top-level domains supported for registration.


```js
azure_web_topleveldomains.TopLevelDomains_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [TopLevelDomainCollection](#topleveldomaincollection)

### TopLevelDomains_Get
Get details of a top-level domain.


```js
azure_web_topleveldomains.TopLevelDomains_Get({
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the top-level domain.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [TopLevelDomain](#topleveldomain)

### TopLevelDomains_ListAgreements
Gets all legal agreements that user needs to accept before purchasing a domain.


```js
azure_web_topleveldomains.TopLevelDomains_ListAgreements({
  "name": "",
  "agreementOption": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the top-level domain.
  * agreementOption **required** [TopLevelDomainAgreementOption](#topleveldomainagreementoption)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [TldLegalAgreementCollection](#tldlegalagreementcollection)



## Definitions

### TldLegalAgreement
* TldLegalAgreement `object`: Legal agreement for a top level domain.
  * agreementKey **required** `string`: Unique identifier for the agreement.
  * content **required** `string`: Agreement details.
  * title **required** `string`: Agreement title.
  * url `string`: URL where a copy of the agreement details is hosted.

### TldLegalAgreementCollection
* TldLegalAgreementCollection `object`: Collection of top-level domain legal agreements.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [TldLegalAgreement](#tldlegalagreement)

### TopLevelDomain
* TopLevelDomain `object`: A top level domain object.
  * properties `object`: TopLevelDomain resource specific properties
    * name `string`: Name of the top level domain.
    * privacy `boolean`: If <code>true</code>, then the top level domain supports domain privacy; otherwise, <code>false</code>.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### TopLevelDomainAgreementOption
* TopLevelDomainAgreementOption `object`: Options for retrieving the list of top level domain legal agreements.
  * forTransfer `boolean`: If <code>true</code>, then the list of agreements will include agreements for domain transfer as well; otherwise, <code>false</code>.
  * includePrivacy `boolean`: If <code>true</code>, then the list of agreements will include agreements for domain privacy as well; otherwise, <code>false</code>.

### TopLevelDomainCollection
* TopLevelDomainCollection `object`: Collection of Top-level domains.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [TopLevelDomain](#topleveldomain)


