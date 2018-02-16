# @datafire/azure_marketplaceordering_agreements

Client library for MarketplaceOrdering.Agreements

## Installation and Usage
```bash
npm install --save @datafire/azure_marketplaceordering_agreements
```
```js
let azure_marketplaceordering_agreements = require('@datafire/azure_marketplaceordering_agreements').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_marketplaceordering_agreements.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

REST API for MarketplaceOrdering Agreements.

## Actions

### Operations_List
Lists all of the available Microsoft.MarketplaceOrdering REST API operations.


```js
azure_marketplaceordering_agreements.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [OperationListResult](#operationlistresult)

### MarketplaceAgreements_Get
Get marketplace terms.


```js
azure_marketplaceordering_agreements.MarketplaceAgreements_Get({
  "api-version": "",
  "subscriptionId": "",
  "offerType": "",
  "publisherId": "",
  "offerId": "",
  "planId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * offerType **required** `string` (values: virtualmachine): Offer Type, currently only virtualmachine type is supported.
  * publisherId **required** `string`: Publisher identifier string of image being deployed.
  * offerId **required** `string`: Offer identifier string of image being deployed.
  * planId **required** `string`: Plan identifier string of image being deployed.

#### Output
* output [AgreementTerms](#agreementterms)

### MarketplaceAgreements_Create
Save marketplace terms.


```js
azure_marketplaceordering_agreements.MarketplaceAgreements_Create({
  "api-version": "",
  "offerType": "",
  "subscriptionId": "",
  "publisherId": "",
  "offerId": "",
  "planId": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * offerType **required** `string` (values: virtualmachine): Offer Type, currently only virtualmachine type is supported.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * publisherId **required** `string`: Publisher identifier string of image being deployed.
  * offerId **required** `string`: Offer identifier string of image being deployed.
  * planId **required** `string`: Plan identifier string of image being deployed.
  * parameters **required** [AgreementTerms](#agreementterms)

#### Output
* output [AgreementTerms](#agreementterms)



## Definitions

### AgreementProperties
* AgreementProperties `object`: Agreement Terms definition
  * accepted `boolean`: If any version of the terms have been accepted, otherwise false.
  * licenseTextLink `string`: Link to HTML with Microsoft and Publisher terms.
  * plan `string`: Plan identifier string of image being deployed.
  * privacyPolicyLink `string`: Link to the privacy policy of the publisher.
  * product `string`: Offer identifier string of image being deployed.
  * publisher `string`: Publisher identifier string of image being deployed.
  * retrieveDatetime `string`: Date and time in UTC of when the terms were accepted. This is empty if Accepted is false.
  * signature `string`: Terms signature.

### AgreementTerms
* AgreementTerms `object`: Terms properties for provided Publisher/Offer/Plan tuple
  * properties [AgreementProperties](#agreementproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ErrorResponse
* ErrorResponse `object`: Error reponse indicates Microsoft.MarketplaceOrdering service is not able to process the incoming request. The reason is provided in the error message.
  * error `object`: The details of the error.
    * code `string`: Error code.
    * message `string`: Error message indicating why the operation failed.

### Operation
* Operation `object`: Microsoft.MarketplaceOrdering REST API operation
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Get Agreement, Sign Agreement, Cancel Agreement etc.
    * provider `string`: Service provider: Microsoft.MarketplaceOrdering
    * resource `string`: Resource on which the operation is performed: Agreement, virtualmachine, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list MarketplaceOrdering operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of Microsoft.MarketplaceOrdering operations supported by the Microsoft.MarketplaceOrdering resource provider.
    * items [Operation](#operation)

### Resource
* Resource `object`: ARM resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


