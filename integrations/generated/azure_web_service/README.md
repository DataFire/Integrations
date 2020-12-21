# @datafire/azure_web_service

Client library for WebSite Management Client

## Installation and Usage
```bash
npm install --save @datafire/azure_web_service
```
```js
let azure_web_service = require('@datafire/azure_web_service').create({
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

Use these APIs to manage Azure Websites resources through the Azure Resource Manager. All task operations conform to the HTTP/1.1 protocol specification and each operation returns an x-ms-request-id header that can be used to obtain information about the request. You must make sure that requests made to these resources are secure. For more information, see https://msdn.microsoft.com/en-us/library/azure/dn790557.aspx.

## Actions

### Provider_GetPublishingUser
Gets publishing user


```js
azure_web_service.Provider_GetPublishingUser({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API Version

#### Output
* output [User](#user)

### Provider_UpdatePublishingUser
Updates publishing user


```js
azure_web_service.Provider_UpdatePublishingUser({
  "requestMessage": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * requestMessage **required** [User](#user)
  * api-version **required** `string`: API Version

#### Output
* output [User](#user)

### Provider_GetSourceControls
Gets the source controls available for Azure websites


```js
azure_web_service.Provider_GetSourceControls({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API Version

#### Output
* output [SourceControlCollection](#sourcecontrolcollection)

### Provider_GetSourceControl
Gets source control token


```js
azure_web_service.Provider_GetSourceControl({
  "sourceControlType": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * sourceControlType **required** `string`: Type of source control
  * api-version **required** `string`: API Version

#### Output
* output [SourceControl](#sourcecontrol)

### Provider_UpdateSourceControl
Updates source control token


```js
azure_web_service.Provider_UpdateSourceControl({
  "sourceControlType": "",
  "requestMessage": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * sourceControlType **required** `string`: Type of source control
  * requestMessage **required** [SourceControl](#sourcecontrol)
  * api-version **required** `string`: API Version

#### Output
* output [SourceControl](#sourcecontrol)

### GlobalCertificateOrder_GetAllCertificateOrders
Lists all domains in a subscription


```js
azure_web_service.GlobalCertificateOrder_GetAllCertificateOrders({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [CertificateOrderCollection](#certificateordercollection)

### GlobalCertificateOrder_ValidateCertificatePurchaseInformation
Validate certificate purchase information


```js
azure_web_service.GlobalCertificateOrder_ValidateCertificatePurchaseInformation({
  "certificateOrder": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * certificateOrder **required** [CertificateOrder](#certificateorder)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### GlobalDomainRegistration_CheckDomainAvailability
Checks if a domain is available for registration


```js
azure_web_service.GlobalDomainRegistration_CheckDomainAvailability({
  "identifier": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * identifier **required** [NameIdentifier](#nameidentifier)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [DomainAvailablilityCheckResult](#domainavailablilitycheckresult)

### GlobalDomainRegistration_GetAllDomains
Lists all domains in a subscription


```js
azure_web_service.GlobalDomainRegistration_GetAllDomains({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [DomainCollection](#domaincollection)

### GlobalDomainRegistration_GetDomainControlCenterSsoRequest
Generates a single sign on request for domain management portal


```js
azure_web_service.GlobalDomainRegistration_GetDomainControlCenterSsoRequest({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [DomainControlCenterSsoRequest](#domaincontrolcenterssorequest)

### GlobalDomainRegistration_ListDomainRecommendations
Lists domain recommendations based on keywords


```js
azure_web_service.GlobalDomainRegistration_ListDomainRecommendations({
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [DomainRecommendationSearchParameters](#domainrecommendationsearchparameters)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [NameIdentifierCollection](#nameidentifiercollection)

### TopLevelDomains_GetGetTopLevelDomains
Lists all top level domains supported for registration


```js
azure_web_service.TopLevelDomains_GetGetTopLevelDomains({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [TopLevelDomainCollection](#topleveldomaincollection)

### TopLevelDomains_GetTopLevelDomain
Gets details of a top level domain


```js
azure_web_service.TopLevelDomains_GetTopLevelDomain({
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the top level domain
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [TopLevelDomain](#topleveldomain)

### TopLevelDomains_ListTopLevelDomainAgreements
Lists legal agreements that user needs to accept before purchasing domain


```js
azure_web_service.TopLevelDomains_ListTopLevelDomainAgreements({
  "name": "",
  "agreementOption": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the top level domain
  * agreementOption **required** [TopLevelDomainAgreementOption](#topleveldomainagreementoption)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [TldLegalAgreementCollection](#tldlegalagreementcollection)

### GlobalDomainRegistration_ValidateDomainPurchaseInformation
Validates domain registration information


```js
azure_web_service.GlobalDomainRegistration_ValidateDomainPurchaseInformation({
  "domainRegistrationInput": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * domainRegistrationInput **required** [DomainRegistrationInput](#domainregistrationinput)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Global_GetAllCertificates
Get all certificates for a subscription


```js
azure_web_service.Global_GetAllCertificates({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [CertificateCollection](#certificatecollection)

### Global_CheckNameAvailability
Check if resource name is available


```js
azure_web_service.Global_CheckNameAvailability({
  "request": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * request **required** [ResourceNameAvailabilityRequest](#resourcenameavailabilityrequest)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ResourceNameAvailability](#resourcenameavailability)

### Global_GetAllClassicMobileServices
Gets all mobile services for a subscription


```js
azure_web_service.Global_GetAllClassicMobileServices({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ClassicMobileServiceCollection](#classicmobileservicecollection)

### Global_GetSubscriptionGeoRegions
Gets list of available geo regions


```js
azure_web_service.Global_GetSubscriptionGeoRegions({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * sku `string`: Filter only to regions that support this sku
  * linuxWorkersEnabled `boolean`: Filter only to regions that support linux workers
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [GeoRegionCollection](#georegioncollection)

### Global_GetAllHostingEnvironments
Gets all hostingEnvironments (App Service Environment) for a subscription


```js
azure_web_service.Global_GetAllHostingEnvironments({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [HostingEnvironmentCollection](#hostingenvironmentcollection)

### Global_IsHostingEnvironmentNameAvailable
Whether hosting environment name is available


```js
azure_web_service.Global_IsHostingEnvironmentNameAvailable({
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Hosting environment name
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Global_IsHostingEnvironmentWithLegacyNameAvailable
Whether hosting environment name is available


```js
azure_web_service.Global_IsHostingEnvironmentWithLegacyNameAvailable({
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Hosting environment name
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Global_GetAllManagedHostingEnvironments
Gets all managed hosting environments for a subscription


```js
azure_web_service.Global_GetAllManagedHostingEnvironments({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ManagedHostingEnvironmentCollection](#managedhostingenvironmentcollection)

### Global_ListPremierAddOnOffers
List premier add on offers


```js
azure_web_service.Global_ListPremierAddOnOffers({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Global_GetSubscriptionPublishingCredentials
Gets publishing credentials for the subscription owner


```js
azure_web_service.Global_GetSubscriptionPublishingCredentials({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [User](#user)

### Global_UpdateSubscriptionPublishingCredentials
Updates publishing credentials for the subscription owner


```js
azure_web_service.Global_UpdateSubscriptionPublishingCredentials({
  "requestMessage": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * requestMessage **required** [User](#user)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [User](#user)

### Recommendations_GetRecommendationBySubscription
Gets a list of recommendations associated with the specified subscription.


```js
azure_web_service.Recommendations_GetRecommendationBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * featured `boolean`: If set, this API returns only the most critical recommendation among the others. Otherwise this API returns all recommendations available
  * $filter `string`: Return only channels specified in the filter. Filter is specified by using OData syntax. Example: $filter=channels eq 'Api' or channel eq 'Notification'
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [Recommendation](#recommendation)

### Global_GetAllServerFarms
Gets all App Service Plans for a subscription


```js
azure_web_service.Global_GetAllServerFarms({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * detailed `boolean`: False to return a subset of App Service Plan properties, true to return all of the properties.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ServerFarmCollection](#serverfarmcollection)

### Global_GetAllSites
Gets all Web Apps for a subscription


```js
azure_web_service.Global_GetAllSites({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteCollection](#sitecollection)

### GlobalResourceGroups_MoveResources



```js
azure_web_service.GlobalResourceGroups_MoveResources({
  "resourceGroupName": "",
  "moveResourceEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`
  * moveResourceEnvelope **required** [CsmMoveResourceEnvelope](#csmmoveresourceenvelope)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### CertificateOrders_GetCertificateOrders
Get certificate orders in a resource group


```js
azure_web_service.CertificateOrders_GetCertificateOrders({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Azure resource group name
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [CertificateOrderCollection](#certificateordercollection)

### CertificateOrders_GetCertificates
List all certificates associated with a certificate order (only one certificate can be associated with an order at a time)


```js
azure_web_service.CertificateOrders_GetCertificates({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Azure resource group name
  * certificateOrderName **required** `string`: Certificate name
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [CertificateOrderCertificateCollection](#certificateordercertificatecollection)

### CertificateOrders_DeleteCertificate
Deletes the certificate associated with the certificate order


```js
azure_web_service.CertificateOrders_DeleteCertificate({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Azure resource group name
  * certificateOrderName **required** `string`: Certificate name
  * name **required** `string`: Certificate name
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### CertificateOrders_GetCertificate
Get certificate associated with the certificate order


```js
azure_web_service.CertificateOrders_GetCertificate({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Azure resource group name
  * certificateOrderName **required** `string`: Certificate name
  * name **required** `string`: Certificate name
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [CertificateOrderCertificate](#certificateordercertificate)

### CertificateOrders_UpdateCertificate
Associates a Key Vault secret to a certificate store that will be used for storing the certificate once it's ready


```js
azure_web_service.CertificateOrders_UpdateCertificate({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "name": "",
  "keyVaultCertificate": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Azure resource group name
  * certificateOrderName **required** `string`: Certificate name
  * name **required** `string`: Certificate name
  * keyVaultCertificate **required** [CertificateOrderCertificate](#certificateordercertificate)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [CertificateOrderCertificate](#certificateordercertificate)

### CertificateOrders_CreateOrUpdateCertificate
Associates a Key Vault secret to a certificate store that will be used for storing the certificate once it's ready


```js
azure_web_service.CertificateOrders_CreateOrUpdateCertificate({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "name": "",
  "keyVaultCertificate": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Azure resource group name
  * certificateOrderName **required** `string`: Certificate name
  * name **required** `string`: Certificate name
  * keyVaultCertificate **required** [CertificateOrderCertificate](#certificateordercertificate)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [CertificateOrderCertificate](#certificateordercertificate)

### CertificateOrders_DeleteCertificateOrder
Delete an existing certificate order


```js
azure_web_service.CertificateOrders_DeleteCertificateOrder({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Azure resource group name
  * name **required** `string`: Certificate name
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### CertificateOrders_GetCertificateOrder
Get a certificate order


```js
azure_web_service.CertificateOrders_GetCertificateOrder({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Azure resource group name
  * name **required** `string`: Certificate name
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [CertificateOrder](#certificateorder)

### CertificateOrders_UpdateCertificateOrder
Create or update a certificate purchase order


```js
azure_web_service.CertificateOrders_UpdateCertificateOrder({
  "resourceGroupName": "",
  "name": "",
  "certificateDistinguishedName": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Azure resource group name
  * name **required** `string`: Certificate name
  * certificateDistinguishedName **required** [CertificateOrder](#certificateorder)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [CertificateOrder](#certificateorder)

### CertificateOrders_CreateOrUpdateCertificateOrder
Create or update a certificate purchase order


```js
azure_web_service.CertificateOrders_CreateOrUpdateCertificateOrder({
  "resourceGroupName": "",
  "name": "",
  "certificateDistinguishedName": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Azure resource group name
  * name **required** `string`: Certificate name
  * certificateDistinguishedName **required** [CertificateOrder](#certificateorder)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [CertificateOrder](#certificateorder)

### CertificateOrders_ReissueCertificateOrder
Reissue an existing certificate order


```js
azure_web_service.CertificateOrders_ReissueCertificateOrder({
  "resourceGroupName": "",
  "name": "",
  "reissueCertificateOrderRequest": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Azure resource group name
  * name **required** `string`: Certificate name
  * reissueCertificateOrderRequest **required** [ReissueCertificateOrderRequest](#reissuecertificateorderrequest)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### CertificateOrders_RenewCertificateOrder
Renew an existing certificate order


```js
azure_web_service.CertificateOrders_RenewCertificateOrder({
  "resourceGroupName": "",
  "name": "",
  "renewCertificateOrderRequest": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Azure resource group name
  * name **required** `string`: Certificate name
  * renewCertificateOrderRequest **required** [RenewCertificateOrderRequest](#renewcertificateorderrequest)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### CertificateOrders_ResendCertificateEmail
Resend certificate email


```js
azure_web_service.CertificateOrders_ResendCertificateEmail({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Azure resource group name
  * name **required** `string`: Certificate order name
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### CertificateOrders_RetrieveCertificateActions
Retrieve the list of certificate actions


```js
azure_web_service.CertificateOrders_RetrieveCertificateActions({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Azure resource group name
  * name **required** `string`: Certificate order name
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [CertificateOrderAction](#certificateorderaction)

### CertificateOrders_RetrieveCertificateEmailHistory
Retrieve email history


```js
azure_web_service.CertificateOrders_RetrieveCertificateEmailHistory({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Azure resource group name
  * name **required** `string`: Certificate order name
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [CertificateEmail](#certificateemail)

### CertificateOrders_VerifyDomainOwnership
Verify domain ownership for this certificate order


```js
azure_web_service.CertificateOrders_VerifyDomainOwnership({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Azure resource group name
  * name **required** `string`: Certificate order name
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Domains_GetDomains
Lists domains under a resource group


```js
azure_web_service.Domains_GetDomains({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [DomainCollection](#domaincollection)

### Domains_DeleteDomain
Deletes a domain


```js
azure_web_service.Domains_DeleteDomain({
  "resourceGroupName": "",
  "domainName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group
  * domainName **required** `string`: Name of the domain
  * forceHardDeleteDomain `boolean`: If true then the domain will be deleted immediately instead of after 24 hours
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Domains_GetDomain
Gets details of a domain


```js
azure_web_service.Domains_GetDomain({
  "resourceGroupName": "",
  "domainName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group
  * domainName **required** `string`: Name of the domain
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Domain](#domain)

### Domains_UpdateDomain
Creates a domain


```js
azure_web_service.Domains_UpdateDomain({
  "resourceGroupName": "",
  "domainName": "",
  "domain": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: &gt;Name of the resource group
  * domainName **required** `string`: Name of the domain
  * domain **required** [Domain](#domain)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Domain](#domain)

### Domains_CreateOrUpdateDomain
Creates a domain


```js
azure_web_service.Domains_CreateOrUpdateDomain({
  "resourceGroupName": "",
  "domainName": "",
  "domain": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: &gt;Name of the resource group
  * domainName **required** `string`: Name of the domain
  * domain **required** [Domain](#domain)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Domain](#domain)

### Domains_GetDomainOperation
Retrieves the latest status of a domain purchase operation


```js
azure_web_service.Domains_GetDomainOperation({
  "resourceGroupName": "",
  "domainName": "",
  "operationId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group
  * domainName **required** `string`: Name of the domain
  * operationId **required** `string`: Domain purchase operation Id
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Domain](#domain)

### Usage_GetUsage
Returns usage records for specified subscription and resource groups


```js
azure_web_service.Usage_GetUsage({
  "resourceGroupName": "",
  "environmentName": "",
  "lastId": "",
  "batchSize": 0,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * environmentName **required** `string`: Environment name
  * lastId **required** `string`: Last marker that was returned from the batch
  * batchSize **required** `integer`: size of the batch to be returned.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Certificates_GetCertificates
Get certificates for a subscription in the specified resource group.


```js
azure_web_service.Certificates_GetCertificates({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [CertificateCollection](#certificatecollection)

### Certificates_DeleteCertificate
Delete a certificate by name in a specified subscription and resourcegroup.


```js
azure_web_service.Certificates_DeleteCertificate({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group
  * name **required** `string`: Name of the certificate to be deleted.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Certificates_GetCertificate
Get a certificate by certificate name for a subscription in the specified resource group.


```js
azure_web_service.Certificates_GetCertificate({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group
  * name **required** `string`: Name of the certificate.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Certificate](#certificate)

### Certificates_UpdateCertificate
Creates or modifies an existing certificate.


```js
azure_web_service.Certificates_UpdateCertificate({
  "resourceGroupName": "",
  "name": "",
  "certificateEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group
  * name **required** `string`: Name of the certificate.
  * certificateEnvelope **required** [Certificate](#certificate)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Certificate](#certificate)

### Certificates_CreateOrUpdateCertificate
Creates or modifies an existing certificate.


```js
azure_web_service.Certificates_CreateOrUpdateCertificate({
  "resourceGroupName": "",
  "name": "",
  "certificateEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group
  * name **required** `string`: Name of the certificate.
  * certificateEnvelope **required** [Certificate](#certificate)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Certificate](#certificate)

### ClassicMobileServices_GetClassicMobileServices
Get all mobile services in a resource group.


```js
azure_web_service.ClassicMobileServices_GetClassicMobileServices({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ClassicMobileServiceCollection](#classicmobileservicecollection)

### ClassicMobileServices_DeleteClassicMobileService
Delete a mobile service.


```js
azure_web_service.ClassicMobileServices_DeleteClassicMobileService({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of mobile service
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### ClassicMobileServices_GetClassicMobileService
Get a mobile service.


```js
azure_web_service.ClassicMobileServices_GetClassicMobileService({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of mobile service
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ClassicMobileService](#classicmobileservice)

### Certificates_GetCsrs
Gets the certificate signing requests for a subscription in the specified resource group


```js
azure_web_service.Certificates_GetCsrs({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [Csr](#csr)

### Certificates_DeleteCsr
Delete the certificate signing request.


```js
azure_web_service.Certificates_DeleteCsr({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group
  * name **required** `string`: Name of the certificate signing request.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Certificates_GetCsr
Gets a certificate signing request by certificate name for a subscription in the specified resource group


```js
azure_web_service.Certificates_GetCsr({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group
  * name **required** `string`: Name of the certificate.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Csr](#csr)

### Certificates_UpdateCsr
Creates or modifies an existing certificate signing request.


```js
azure_web_service.Certificates_UpdateCsr({
  "resourceGroupName": "",
  "name": "",
  "csrEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group
  * name **required** `string`: Name of the certificate.
  * csrEnvelope **required** [Csr](#csr)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Csr](#csr)

### Certificates_CreateOrUpdateCsr
Creates or modifies an existing certificate signing request.


```js
azure_web_service.Certificates_CreateOrUpdateCsr({
  "resourceGroupName": "",
  "name": "",
  "csrEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group
  * name **required** `string`: Name of the certificate.
  * csrEnvelope **required** [Csr](#csr)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Csr](#csr)

### Sites_GetDeletedSites
Gets deleted web apps in subscription


```js
azure_web_service.Sites_GetDeletedSites({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * propertiesToInclude `string`: Additional web app properties included in the response
  * includeSiteTypes `string`: Types of apps included in the response
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [DeletedSiteCollection](#deletedsitecollection)

### HostingEnvironments_GetHostingEnvironments
Get all hostingEnvironments (App Service Environments) in a resource group.


```js
azure_web_service.HostingEnvironments_GetHostingEnvironments({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [HostingEnvironmentCollection](#hostingenvironmentcollection)

### HostingEnvironments_DeleteHostingEnvironment
Delete a hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_DeleteHostingEnvironment({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * forceDelete `boolean`: Delete even if the hostingEnvironment (App Service Environment) contains resources
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### HostingEnvironments_GetHostingEnvironment
Get properties of hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetHostingEnvironment({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [HostingEnvironment](#hostingenvironment)

### HostingEnvironments_CreateOrUpdateHostingEnvironment
Create or update a hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_CreateOrUpdateHostingEnvironment({
  "resourceGroupName": "",
  "name": "",
  "hostingEnvironmentEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * hostingEnvironmentEnvelope **required** [HostingEnvironment](#hostingenvironment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [HostingEnvironment](#hostingenvironment)

### HostingEnvironments_GetHostingEnvironmentCapacities
Get used, available, and total worker capacity for hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetHostingEnvironmentCapacities({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [StampCapacityCollection](#stampcapacitycollection)

### HostingEnvironments_GetHostingEnvironmentVips
Get IP addresses assigned to the hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetHostingEnvironmentVips({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [AddressResponse](#addressresponse)

### HostingEnvironments_GetHostingEnvironmentDiagnostics
Get diagnostic information for hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetHostingEnvironmentDiagnostics({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [HostingEnvironmentDiagnostics](#hostingenvironmentdiagnostics)

### HostingEnvironments_GetHostingEnvironmentDiagnosticsItem
Get diagnostic information for hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetHostingEnvironmentDiagnosticsItem({
  "resourceGroupName": "",
  "name": "",
  "diagnosticsName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * diagnosticsName **required** `string`: Name of the diagnostics
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [HostingEnvironmentDiagnostics](#hostingenvironmentdiagnostics)

### HostingEnvironments_GetHostingEnvironmentMetricDefinitions
Get global metric definitions of hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetHostingEnvironmentMetricDefinitions({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [MetricDefinition](#metricdefinition)

### HostingEnvironments_GetHostingEnvironmentMetrics
Get global metrics of hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetHostingEnvironmentMetrics({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * details `boolean`: Include instance details
  * $filter `string`: Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ResourceMetricCollection](#resourcemetriccollection)

### HostingEnvironments_GetMultiRolePools
Get all multi role pools


```js
azure_web_service.HostingEnvironments_GetMultiRolePools({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [WorkerPoolCollection](#workerpoolcollection)

### HostingEnvironments_GetMultiRolePool
Get properties of a multiRole pool.


```js
azure_web_service.HostingEnvironments_GetMultiRolePool({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [WorkerPool](#workerpool)

### HostingEnvironments_CreateOrUpdateMultiRolePool
Create or update a multiRole pool.


```js
azure_web_service.HostingEnvironments_CreateOrUpdateMultiRolePool({
  "resourceGroupName": "",
  "name": "",
  "multiRolePoolEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * multiRolePoolEnvelope **required** [WorkerPool](#workerpool)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [WorkerPool](#workerpool)

### HostingEnvironments_GetMultiRolePoolInstanceMetricDefinitions
Get metric definitions for a specific instance of a multiRole pool of a hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetMultiRolePoolInstanceMetricDefinitions({
  "resourceGroupName": "",
  "name": "",
  "instance": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * instance **required** `string`: Name of instance in the multiRole pool&gt;
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### HostingEnvironments_GetMultiRolePoolInstanceMetrics
Get metrics for a specific instance of a multiRole pool of a hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetMultiRolePoolInstanceMetrics({
  "resourceGroupName": "",
  "name": "",
  "instance": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * instance **required** `string`: Name of instance in the multiRole pool
  * details `boolean`: Include instance details
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### HostingEnvironments_GetHostingEnvironmentMultiRoleMetricDefinitions
Get metric definitions for a multiRole pool of a hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetHostingEnvironmentMultiRoleMetricDefinitions({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [MetricDefinitionCollection](#metricdefinitioncollection)

### HostingEnvironments_GetHostingEnvironmentMultiRoleMetrics
Get metrics for a multiRole pool of a hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetHostingEnvironmentMultiRoleMetrics({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * startTime `string`: Beginning time of metrics query
  * endTime `string`: End time of metrics query
  * timeGrain `string`: Time granularity of metrics query
  * details `boolean`: Include instance details
  * $filter `string`: Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ResourceMetricCollection](#resourcemetriccollection)

### HostingEnvironments_GetMultiRolePoolSkus
Get available skus for scaling a multiRole pool.


```js
azure_web_service.HostingEnvironments_GetMultiRolePoolSkus({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SkuInfoCollection](#skuinfocollection)

### HostingEnvironments_GetHostingEnvironmentMultiRoleUsages
Get usages for a multiRole pool of a hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetHostingEnvironmentMultiRoleUsages({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [UsageCollection](#usagecollection)

### HostingEnvironments_GetHostingEnvironmentOperations
List all currently running operations on the hostingEnvironment (App Service Environment)


```js
azure_web_service.HostingEnvironments_GetHostingEnvironmentOperations({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### HostingEnvironments_GetHostingEnvironmentOperation
Get status of an operation on a hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetHostingEnvironmentOperation({
  "resourceGroupName": "",
  "name": "",
  "operationId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * operationId **required** `string`: operation identifier GUID
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### HostingEnvironments_RebootHostingEnvironment
Reboots all machines in a hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_RebootHostingEnvironment({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### HostingEnvironments_ResumeHostingEnvironment
Resumes the hostingEnvironment.


```js
azure_web_service.HostingEnvironments_ResumeHostingEnvironment({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteCollection](#sitecollection)

### HostingEnvironments_GetHostingEnvironmentServerFarms
Get all serverfarms (App Service Plans) on the hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetHostingEnvironmentServerFarms({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ServerFarmCollection](#serverfarmcollection)

### HostingEnvironments_GetHostingEnvironmentSites
Get all sites on the hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetHostingEnvironmentSites({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * propertiesToInclude `string`: Comma separated list of site properties to include
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteCollection](#sitecollection)

### HostingEnvironments_SuspendHostingEnvironment
Suspends the hostingEnvironment.


```js
azure_web_service.HostingEnvironments_SuspendHostingEnvironment({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteCollection](#sitecollection)

### HostingEnvironments_GetHostingEnvironmentUsages
Get global usages of hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetHostingEnvironmentUsages({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * $filter `string`: Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [CsmUsageQuotaCollection](#csmusagequotacollection)

### HostingEnvironments_GetHostingEnvironmentWebHostingPlans
Get all serverfarms (App Service Plans) on the hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetHostingEnvironmentWebHostingPlans({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ServerFarmCollection](#serverfarmcollection)

### HostingEnvironments_GetWorkerPools
Get all worker pools


```js
azure_web_service.HostingEnvironments_GetWorkerPools({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [WorkerPoolCollection](#workerpoolcollection)

### HostingEnvironments_GetWorkerPool
Get properties of a worker pool.


```js
azure_web_service.HostingEnvironments_GetWorkerPool({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * workerPoolName **required** `string`: Name of worker pool
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [WorkerPool](#workerpool)

### HostingEnvironments_CreateOrUpdateWorkerPool
Create or update a worker pool.


```js
azure_web_service.HostingEnvironments_CreateOrUpdateWorkerPool({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "workerPoolEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * workerPoolName **required** `string`: Name of worker pool
  * workerPoolEnvelope **required** [WorkerPool](#workerpool)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [WorkerPool](#workerpool)

### HostingEnvironments_GetWorkerPoolInstanceMetricDefinitions
Get metric definitions for a specific instance of a worker pool of a hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetWorkerPoolInstanceMetricDefinitions({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "instance": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * workerPoolName **required** `string`: Name of worker pool
  * instance **required** `string`: Name of instance in the worker pool
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### HostingEnvironments_GetWorkerPoolInstanceMetrics
Get metrics for a specific instance of a worker pool of a hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetWorkerPoolInstanceMetrics({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "instance": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * workerPoolName **required** `string`: Name of worker pool
  * instance **required** `string`: Name of instance in the worker pool
  * details `boolean`: Include instance details
  * $filter `string`: Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### HostingEnvironments_GetHostingEnvironmentWebWorkerMetricDefinitions
Get metric definitions for a worker pool of a hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetHostingEnvironmentWebWorkerMetricDefinitions({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * workerPoolName **required** `string`: Name of worker pool
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [MetricDefinitionCollection](#metricdefinitioncollection)

### HostingEnvironments_GetHostingEnvironmentWebWorkerMetrics
Get metrics for a worker pool of a hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetHostingEnvironmentWebWorkerMetrics({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * workerPoolName **required** `string`: Name of worker pool
  * details `boolean`: Include instance details
  * $filter `string`: Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ResourceMetricCollection](#resourcemetriccollection)

### HostingEnvironments_GetWorkerPoolSkus
Get available skus for scaling a worker pool.


```js
azure_web_service.HostingEnvironments_GetWorkerPoolSkus({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * workerPoolName **required** `string`: Name of worker pool
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SkuInfoCollection](#skuinfocollection)

### HostingEnvironments_GetHostingEnvironmentWebWorkerUsages
Get usages for a worker pool of a hostingEnvironment (App Service Environment).


```js
azure_web_service.HostingEnvironments_GetHostingEnvironmentWebWorkerUsages({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of hostingEnvironment (App Service Environment)
  * workerPoolName **required** `string`: Name of worker pool
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [UsageCollection](#usagecollection)

### ManagedHostingEnvironments_GetManagedHostingEnvironments
Get all managed hosting environments in a resource group.


```js
azure_web_service.ManagedHostingEnvironments_GetManagedHostingEnvironments({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [HostingEnvironmentCollection](#hostingenvironmentcollection)

### ManagedHostingEnvironments_DeleteManagedHostingEnvironment
Delete a managed hosting environment.


```js
azure_web_service.ManagedHostingEnvironments_DeleteManagedHostingEnvironment({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of managed hosting environment
  * forceDelete `boolean`: Delete even if the managed hosting environment contains resources
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### ManagedHostingEnvironments_GetManagedHostingEnvironment
Get properties of a managed hosting environment.


```js
azure_web_service.ManagedHostingEnvironments_GetManagedHostingEnvironment({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of managed hosting environment
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ManagedHostingEnvironment](#managedhostingenvironment)

### ManagedHostingEnvironments_CreateOrUpdateManagedHostingEnvironment
Create or update a managed hosting environment.


```js
azure_web_service.ManagedHostingEnvironments_CreateOrUpdateManagedHostingEnvironment({
  "resourceGroupName": "",
  "name": "",
  "ManagedHostingEnvironmentEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of managed hosting environment
  * ManagedHostingEnvironmentEnvelope **required** [HostingEnvironment](#hostingenvironment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [HostingEnvironment](#hostingenvironment)

### ManagedHostingEnvironments_GetManagedHostingEnvironmentVips
Get list of ip addresses assigned to a managed hosting environment


```js
azure_web_service.ManagedHostingEnvironments_GetManagedHostingEnvironmentVips({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of managed hosting environment
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [AddressResponse](#addressresponse)

### ManagedHostingEnvironments_GetManagedHostingEnvironmentOperation
Get status of an operation on a managed hosting environment.


```js
azure_web_service.ManagedHostingEnvironments_GetManagedHostingEnvironmentOperation({
  "resourceGroupName": "",
  "name": "",
  "operationId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of managed hosting environment
  * operationId **required** `string`: operation identifier GUID
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### ManagedHostingEnvironments_GetManagedHostingEnvironmentServerFarms
Get all serverfarms (App Service Plans) on the managed hosting environment.


```js
azure_web_service.ManagedHostingEnvironments_GetManagedHostingEnvironmentServerFarms({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of managed hosting environment
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ServerFarmCollection](#serverfarmcollection)

### ManagedHostingEnvironments_GetManagedHostingEnvironmentSites
Get all sites on the managed hosting environment.


```js
azure_web_service.ManagedHostingEnvironments_GetManagedHostingEnvironmentSites({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of managed hosting environment
  * propertiesToInclude `string`: Comma separated list of site properties to include
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteCollection](#sitecollection)

### ManagedHostingEnvironments_GetManagedHostingEnvironmentWebHostingPlans
Get all serverfarms (App Service Plans) on the managed hosting environment.


```js
azure_web_service.ManagedHostingEnvironments_GetManagedHostingEnvironmentWebHostingPlans({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of managed hosting environment
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ServerFarmCollection](#serverfarmcollection)

### ServerFarms_GetServerFarms
Gets collection of App Service Plans in a resource group for a given subscription.


```js
azure_web_service.ServerFarms_GetServerFarms({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ServerFarmCollection](#serverfarmcollection)

### ServerFarms_DeleteServerFarm
Deletes a App Service Plan


```js
azure_web_service.ServerFarms_DeleteServerFarm({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of App Service Plan
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### ServerFarms_GetServerFarm
Gets specified App Service Plan in a resource group


```js
azure_web_service.ServerFarms_GetServerFarm({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of App Service Plan
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ServerFarmWithRichSku](#serverfarmwithrichsku)

### ServerFarms_CreateOrUpdateServerFarm
Creates or updates an App Service Plan


```js
azure_web_service.ServerFarms_CreateOrUpdateServerFarm({
  "resourceGroupName": "",
  "name": "",
  "serverFarmEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of App Service Plan
  * serverFarmEnvelope **required** [ServerFarmWithRichSku](#serverfarmwithrichsku)
  * allowPendingState `boolean`: OBSOLETE: If true, allow pending state for App Service Plan
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ServerFarmWithRichSku](#serverfarmwithrichsku)

### ServerFarms_GetServerFarmMetricDefintions
List of metrics that can be queried for an App Service Plan


```js
azure_web_service.ServerFarms_GetServerFarmMetricDefintions({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of App Service Plan
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [MetricDefinitionCollection](#metricdefinitioncollection)

### ServerFarms_GetServerFarmMetrics
Queries for App Service Plan metrics


```js
azure_web_service.ServerFarms_GetServerFarmMetrics({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of App Service Plan
  * details `boolean`: If true, metrics are broken down per App Service Plan instance
  * $filter `string`: Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ResourceMetricCollection](#resourcemetriccollection)

### ServerFarms_GetServerFarmOperation
Gets a server farm operation


```js
azure_web_service.ServerFarms_GetServerFarmOperation({
  "resourceGroupName": "",
  "name": "",
  "operationId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of server farm
  * operationId **required** `string`: Id of Server farm operation"&gt;
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ServerFarmWithRichSku](#serverfarmwithrichsku)

### ServerFarms_RestartSitesForServerFarm
Restarts web apps in a specified App Service Plan


```js
azure_web_service.ServerFarms_RestartSitesForServerFarm({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of App Service Plan
  * softRestart `boolean`: Soft restart applies the configuration settings and restarts the apps if necessary. Hard restart always restarts and reprovisions the apps
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### ServerFarms_GetServerFarmSites
Gets list of Apps associated with an App Service Plan


```js
azure_web_service.ServerFarms_GetServerFarmSites({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of App Service Plan
  * $skipToken `string`: Skip to of web apps in a list. If specified, the resulting list will contain web apps starting from (including) the skipToken. Else, the resulting list contains web apps from the start of the list
  * $filter `string`: Supported filter: $filter=state eq running. Returns only web apps that are currently running
  * $top `string`: List page size. If specified, results are paged.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteCollection](#sitecollection)

### ServerFarms_GetVnetsForServerFarm
Gets list of VNets associated with App Service Plan


```js
azure_web_service.ServerFarms_GetVnetsForServerFarm({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of App Service Plan
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [VnetInfo](#vnetinfo)

### ServerFarms_GetVnetFromServerFarm
Gets a vnet associated with an App Service Plan


```js
azure_web_service.ServerFarms_GetVnetFromServerFarm({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of App Service Plan
  * vnetName **required** `string`: Name of virtual network
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [VnetInfo](#vnetinfo)

### ServerFarms_GetServerFarmVnetGateway
Gets the vnet gateway.


```js
azure_web_service.ServerFarms_GetServerFarmVnetGateway({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of the App Service Plan
  * vnetName **required** `string`: Name of the virtual network
  * gatewayName **required** `string`: Name of the gateway. Only the 'primary' gateway is supported.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [VnetGateway](#vnetgateway)

### ServerFarms_UpdateServerFarmVnetGateway
Updates the vnet gateway


```js
azure_web_service.ServerFarms_UpdateServerFarmVnetGateway({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group
  * name **required** `string`: The name of the App Service Plan
  * vnetName **required** `string`: The name of the virtual network
  * gatewayName **required** `string`: The name of the gateway. Only 'primary' is supported.
  * connectionEnvelope **required** [VnetGateway](#vnetgateway)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [VnetGateway](#vnetgateway)

### ServerFarms_GetRoutesForVnet
Gets a list of all routes associated with a vnet, in an app service plan


```js
azure_web_service.ServerFarms_GetRoutesForVnet({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of App Service Plan
  * vnetName **required** `string`: Name of virtual network
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [VnetRoute](#vnetroute)

### ServerFarms_DeleteVnetRoute
Deletes an existing route for a vnet in an app service plan.


```js
azure_web_service.ServerFarms_DeleteVnetRoute({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "routeName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of App Service Plan
  * vnetName **required** `string`: Name of virtual network
  * routeName **required** `string`: Name of the virtual network route
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### ServerFarms_GetRouteForVnet
Gets a specific route associated with a vnet, in an app service plan


```js
azure_web_service.ServerFarms_GetRouteForVnet({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "routeName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of App Service Plan
  * vnetName **required** `string`: Name of virtual network
  * routeName **required** `string`: Name of the virtual network route
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [VnetRoute](#vnetroute)

### ServerFarms_UpdateVnetRoute
Creates a new route or updates an existing route for a vnet in an app service plan.


```js
azure_web_service.ServerFarms_UpdateVnetRoute({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "routeName": "",
  "route": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of App Service Plan
  * vnetName **required** `string`: Name of virtual network
  * routeName **required** `string`: Name of the virtual network route
  * route **required** [VnetRoute](#vnetroute)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [VnetRoute](#vnetroute)

### ServerFarms_CreateOrUpdateVnetRoute
Creates a new route or updates an existing route for a vnet in an app service plan.


```js
azure_web_service.ServerFarms_CreateOrUpdateVnetRoute({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "routeName": "",
  "route": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of App Service Plan
  * vnetName **required** `string`: Name of virtual network
  * routeName **required** `string`: Name of the virtual network route
  * route **required** [VnetRoute](#vnetroute)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [VnetRoute](#vnetroute)

### ServerFarms_RebootWorkerForServerFarm
Submit a reboot request for a worker machine in the specified server farm


```js
azure_web_service.ServerFarms_RebootWorkerForServerFarm({
  "resourceGroupName": "",
  "name": "",
  "workerName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of server farm
  * workerName **required** `string`: Name of worker machine, typically starts with RD
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetSites
Gets the web apps for a subscription in the specified resource group


```js
azure_web_service.Sites_GetSites({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * propertiesToInclude `string`: Additional web app properties included in the response
  * includeSiteTypes `string`: Types of apps included in the response
  * includeSlots `boolean`: Whether or not to include deployments slots in results
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteCollection](#sitecollection)

### Sites_DeleteSite
Deletes a web app


```js
azure_web_service.Sites_DeleteSite({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * deleteMetrics `string`: If true, web app metrics are also deleted
  * deleteEmptyServerFarm `string`: If true and App Service Plan is empty after web app deletion, App Service Plan is also deleted
  * skipDnsRegistration `string`: If true, DNS registration is skipped
  * deleteAllSlots `string`: If true, all slots associated with web app are also deleted
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetSite
Get details of a web app


```js
azure_web_service.Sites_GetSite({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * propertiesToInclude `string`: Additional web app properties included in the response
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Site](#site)

### Sites_CreateOrUpdateSite
Creates a new web app or modifies an existing web app.


```js
azure_web_service.Sites_CreateOrUpdateSite({
  "resourceGroupName": "",
  "name": "",
  "siteEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group
  * name **required** `string`: Name of the web app
  * siteEnvelope **required** [Site](#site)
  * skipDnsRegistration `string`: If true web app hostname is not registered with DNS on creation. This parameter is
  * skipCustomDomainVerification `string`: If true, custom (non *.azurewebsites.net) domains associated with web app are not verified.
  * forceDnsRegistration `string`: If true, web app hostname is force registered with DNS
  * ttlInSeconds `string`: Time to live in seconds for web app's default domain name
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Site](#site)

### Sites_ApplySlotConfigToProduction
Applies the configuration settings from the target slot onto the current slot


```js
azure_web_service.Sites_ApplySlotConfigToProduction({
  "resourceGroupName": "",
  "name": "",
  "slotSwapEntity": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slotSwapEntity **required** [CsmSlotEntity](#csmslotentity)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_BackupSite
Creates web app backup


```js
azure_web_service.Sites_BackupSite({
  "resourceGroupName": "",
  "name": "",
  "request": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * request **required** [BackupRequest](#backuprequest)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [BackupItem](#backupitem)

### Sites_ListSiteBackups
Lists all available backups for web app


```js
azure_web_service.Sites_ListSiteBackups({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [BackupItemCollection](#backupitemcollection)

### Sites_DiscoverSiteRestore
Discovers existing web app backups that can be restored


```js
azure_web_service.Sites_DiscoverSiteRestore({
  "resourceGroupName": "",
  "name": "",
  "request": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * request **required** [RestoreRequest](#restorerequest)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [RestoreRequest](#restorerequest)

### Sites_DeleteBackup
Deletes a backup from Azure Storage


```js
azure_web_service.Sites_DeleteBackup({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * backupId **required** `string`: Id of backup
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [BackupItem](#backupitem)

### Sites_GetSiteBackupStatus
Gets status of a web app backup that may be in progress.


```js
azure_web_service.Sites_GetSiteBackupStatus({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * backupId **required** `string`: Id of backup
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [BackupItem](#backupitem)

### Sites_GetSiteBackupStatusSecrets
Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.


```js
azure_web_service.Sites_GetSiteBackupStatusSecrets({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "request": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * backupId **required** `string`: Id of backup
  * request **required** [BackupRequest](#backuprequest)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [BackupItem](#backupitem)

### Sites_RestoreSite
Restores a web app


```js
azure_web_service.Sites_RestoreSite({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "request": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * backupId **required** `string`: Id of backup to restore
  * request **required** [RestoreRequest](#restorerequest)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [RestoreResponse](#restoreresponse)

### Sites_UpdateSiteAppSettings
Updates the application settings of web app


```js
azure_web_service.Sites_UpdateSiteAppSettings({
  "resourceGroupName": "",
  "name": "",
  "appSettings": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * appSettings **required** [StringDictionary](#stringdictionary)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [StringDictionary](#stringdictionary)

### Sites_ListSiteAppSettings
Gets the application settings of web app


```js
azure_web_service.Sites_ListSiteAppSettings({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [StringDictionary](#stringdictionary)

### Sites_UpdateSiteAuthSettings
Updates the Authentication / Authorization settings associated with web app


```js
azure_web_service.Sites_UpdateSiteAuthSettings({
  "resourceGroupName": "",
  "name": "",
  "siteAuthSettings": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * siteAuthSettings **required** [SiteAuthSettings](#siteauthsettings)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteAuthSettings](#siteauthsettings)

### Sites_ListSiteAuthSettings
Gets the Authentication / Authorization settings associated with web app


```js
azure_web_service.Sites_ListSiteAuthSettings({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteAuthSettings](#siteauthsettings)

### Sites_UpdateSiteBackupConfiguration
Updates backup configuration of web app


```js
azure_web_service.Sites_UpdateSiteBackupConfiguration({
  "resourceGroupName": "",
  "name": "",
  "request": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * request **required** [BackupRequest](#backuprequest)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [BackupRequest](#backuprequest)

### Sites_GetSiteBackupConfiguration
Gets the backup configuration for a web app


```js
azure_web_service.Sites_GetSiteBackupConfiguration({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [BackupRequest](#backuprequest)

### Sites_UpdateSiteConnectionStrings
Updates the connection strings associated with web app


```js
azure_web_service.Sites_UpdateSiteConnectionStrings({
  "resourceGroupName": "",
  "name": "",
  "connectionStrings": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * connectionStrings **required** [ConnectionStringDictionary](#connectionstringdictionary)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ConnectionStringDictionary](#connectionstringdictionary)

### Sites_ListSiteConnectionStrings
Gets the connection strings associated with web app


```js
azure_web_service.Sites_ListSiteConnectionStrings({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ConnectionStringDictionary](#connectionstringdictionary)

### Sites_GetSiteLogsConfig
Gets the web app logs configuration


```js
azure_web_service.Sites_GetSiteLogsConfig({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteLogsConfig](#sitelogsconfig)

### Sites_UpdateSiteLogsConfig
Updates the meta data for web app


```js
azure_web_service.Sites_UpdateSiteLogsConfig({
  "resourceGroupName": "",
  "name": "",
  "siteLogsConfig": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * siteLogsConfig **required** [SiteLogsConfig](#sitelogsconfig)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteLogsConfig](#sitelogsconfig)

### Sites_UpdateSiteMetadata
Updates the meta data for web app


```js
azure_web_service.Sites_UpdateSiteMetadata({
  "resourceGroupName": "",
  "name": "",
  "metadata": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * metadata **required** [StringDictionary](#stringdictionary)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [StringDictionary](#stringdictionary)

### Sites_ListSiteMetadata
Gets the web app meta data.


```js
azure_web_service.Sites_ListSiteMetadata({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [StringDictionary](#stringdictionary)

### Sites_ListSitePublishingCredentials
Gets the web app publishing credentials


```js
azure_web_service.Sites_ListSitePublishingCredentials({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [User](#user)

### Sites_GetSlotConfigNames
Gets the names of application settings and connection string that remain with the slot during swap operation


```js
azure_web_service.Sites_GetSlotConfigNames({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SlotConfigNamesResource](#slotconfignamesresource)

### Sites_UpdateSlotConfigNames
Updates the names of application settings and connection string that remain with the slot during swap operation


```js
azure_web_service.Sites_UpdateSlotConfigNames({
  "resourceGroupName": "",
  "name": "",
  "slotConfigNames": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slotConfigNames **required** [SlotConfigNamesResource](#slotconfignamesresource)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SlotConfigNamesResource](#slotconfignamesresource)

### Sites_GetSiteConfig
Gets the configuration of the web app


```js
azure_web_service.Sites_GetSiteConfig({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteConfig](#siteconfig)

### Sites_UpdateSiteConfig
Update the configuration of web app


```js
azure_web_service.Sites_UpdateSiteConfig({
  "resourceGroupName": "",
  "name": "",
  "siteConfig": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * siteConfig **required** [SiteConfig](#siteconfig)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteConfig](#siteconfig)

### Sites_CreateOrUpdateSiteConfig
Update the configuration of web app


```js
azure_web_service.Sites_CreateOrUpdateSiteConfig({
  "resourceGroupName": "",
  "name": "",
  "siteConfig": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * siteConfig **required** [SiteConfig](#siteconfig)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteConfig](#siteconfig)

### Sites_GetDeployments
List deployments


```js
azure_web_service.Sites_GetDeployments({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [DeploymentCollection](#deploymentcollection)

### Sites_DeleteDeployment
Delete the deployment


```js
azure_web_service.Sites_DeleteDeployment({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * id **required** `string`: Id of the deployment
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetDeployment
Get the deployment


```js
azure_web_service.Sites_GetDeployment({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * id **required** `string`: Id of the deployment
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Deployment](#deployment)

### Sites_CreateDeployment
Create a deployment


```js
azure_web_service.Sites_CreateDeployment({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "deployment": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * id **required** `string`: Id of the deployment
  * deployment **required** [Deployment](#deployment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Deployment](#deployment)

### Sites_GetSiteHostNameBindings
Get web app hostname bindings


```js
azure_web_service.Sites_GetSiteHostNameBindings({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [HostNameBindingCollection](#hostnamebindingcollection)

### Sites_DeleteSiteHostNameBinding
Deletes a host name binding


```js
azure_web_service.Sites_DeleteSiteHostNameBinding({
  "resourceGroupName": "",
  "name": "",
  "hostName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * hostName **required** `string`: Name of host
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetSiteHostNameBinding
Get web app binding for a hostname


```js
azure_web_service.Sites_GetSiteHostNameBinding({
  "resourceGroupName": "",
  "name": "",
  "hostName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * hostName **required** `string`: Name of host
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [HostNameBinding](#hostnamebinding)

### Sites_CreateOrUpdateSiteHostNameBinding
Creates a web app hostname binding


```js
azure_web_service.Sites_CreateOrUpdateSiteHostNameBinding({
  "resourceGroupName": "",
  "name": "",
  "hostName": "",
  "hostNameBinding": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * hostName **required** `string`: Name of host
  * hostNameBinding **required** [HostNameBinding](#hostnamebinding)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [HostNameBinding](#hostnamebinding)

### Sites_ListSiteRelayServiceConnections
Retrieves all BizTalk Hybrid Connections associated with this web app.


```js
azure_web_service.Sites_ListSiteRelayServiceConnections({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [RelayServiceConnectionEntity](#relayserviceconnectionentity)

### Sites_DeleteSiteRelayServiceConnection
Removes the association to a BizTalk Hybrid Connection, identified by its entity name.


```js
azure_web_service.Sites_DeleteSiteRelayServiceConnection({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * entityName **required** `string`: The name by which the Hybrid Connection is identified
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetSiteRelayServiceConnection
Retrieves a BizTalk Hybrid Connection identified by its entity name.


```js
azure_web_service.Sites_GetSiteRelayServiceConnection({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * entityName **required** `string`: The name by which the Hybrid Connection is identified
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [RelayServiceConnectionEntity](#relayserviceconnectionentity)

### Sites_UpdateSiteRelayServiceConnection
Creates a new association to a BizTalk Hybrid Connection, or updates an existing one.


```js
azure_web_service.Sites_UpdateSiteRelayServiceConnection({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * entityName **required** `string`: The name by which the Hybrid Connection is identified
  * connectionEnvelope **required** [RelayServiceConnectionEntity](#relayserviceconnectionentity)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [RelayServiceConnectionEntity](#relayserviceconnectionentity)

### Sites_CreateOrUpdateSiteRelayServiceConnection
Creates a new association to a BizTalk Hybrid Connection, or updates an existing one.


```js
azure_web_service.Sites_CreateOrUpdateSiteRelayServiceConnection({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * entityName **required** `string`: The name by which the Hybrid Connection is identified
  * connectionEnvelope **required** [RelayServiceConnectionEntity](#relayserviceconnectionentity)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [RelayServiceConnectionEntity](#relayserviceconnectionentity)

### Sites_GetSiteInstanceIdentifiers
Gets all instance of a web app


```js
azure_web_service.Sites_GetSiteInstanceIdentifiers({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteInstanceCollection](#siteinstancecollection)

### Sites_GetInstanceDeployments
List deployments


```js
azure_web_service.Sites_GetInstanceDeployments({
  "resourceGroupName": "",
  "name": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * instanceId **required** `string`: Id of web app instance
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [DeploymentCollection](#deploymentcollection)

### Sites_DeleteInstanceDeployment
Delete the deployment


```js
azure_web_service.Sites_DeleteInstanceDeployment({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * id **required** `string`: Id of the deployment
  * instanceId **required** `string`: Id of web app instance
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetInstanceDeployment
Get the deployment


```js
azure_web_service.Sites_GetInstanceDeployment({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * id **required** `string`: Id of the deployment
  * instanceId **required** `string`: Id of web app instance
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Deployment](#deployment)

### Sites_CreateInstanceDeployment
Create a deployment


```js
azure_web_service.Sites_CreateInstanceDeployment({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "instanceId": "",
  "deployment": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * id **required** `string`: Id of the deployment
  * instanceId **required** `string`: Id of web app instance
  * deployment **required** [Deployment](#deployment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Deployment](#deployment)

### Sites_IsSiteCloneable
Creates a new web app or modifies an existing web app.


```js
azure_web_service.Sites_IsSiteCloneable({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group
  * name **required** `string`: Name of the web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteCloneability](#sitecloneability)

### Sites_GetSiteMetricDefinitions
Gets metric definitions for web app


```js
azure_web_service.Sites_GetSiteMetricDefinitions({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [MetricDefinitionCollection](#metricdefinitioncollection)

### Sites_GetSiteMetrics
Gets metrics for web app


```js
azure_web_service.Sites_GetSiteMetrics({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * details `boolean`: If true, metric details are included in response
  * $filter `string`: Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ResourceMetricCollection](#resourcemetriccollection)

### Sites_GetSiteNetworkFeatures
Retrieves a view of all network features in use on this web app.


```js
azure_web_service.Sites_GetSiteNetworkFeatures({
  "resourceGroupName": "",
  "name": "",
  "view": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * view **required** `string`: The type of view. This can either be "summary" or "detailed".
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [NetworkFeatures](#networkfeatures)

### Sites_GenerateNewSitePublishingPassword
Generates new random app publishing password


```js
azure_web_service.Sites_GenerateNewSitePublishingPassword({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetSiteOperation
Gets the operation for a web app


```js
azure_web_service.Sites_GetSiteOperation({
  "resourceGroupName": "",
  "name": "",
  "operationId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * operationId **required** `string`: Id of an operation
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_ListSitePremierAddOns



```js
azure_web_service.Sites_ListSitePremierAddOns({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`
  * name **required** `string`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_DeleteSitePremierAddOn



```js
azure_web_service.Sites_DeleteSitePremierAddOn({
  "resourceGroupName": "",
  "name": "",
  "premierAddOnName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`
  * name **required** `string`
  * premierAddOnName **required** `string`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetSitePremierAddOn



```js
azure_web_service.Sites_GetSitePremierAddOn({
  "resourceGroupName": "",
  "name": "",
  "premierAddOnName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`
  * name **required** `string`
  * premierAddOnName **required** `string`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_AddSitePremierAddOn



```js
azure_web_service.Sites_AddSitePremierAddOn({
  "resourceGroupName": "",
  "name": "",
  "premierAddOnName": "",
  "premierAddOn": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`
  * name **required** `string`
  * premierAddOnName **required** `string`
  * premierAddOn **required** [PremierAddOnRequest](#premieraddonrequest)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_ListSitePublishingProfileXml
Gets the publishing profile for web app


```js
azure_web_service.Sites_ListSitePublishingProfileXml({
  "resourceGroupName": "",
  "name": "",
  "options": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * options **required** [CsmPublishingProfileOptions](#csmpublishingprofileoptions)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output `file`

### Sites_RecoverSite
Recovers a deleted web app


```js
azure_web_service.Sites_RecoverSite({
  "resourceGroupName": "",
  "name": "",
  "recoveryEntity": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * recoveryEntity **required** [CsmSiteRecoveryEntity](#csmsiterecoveryentity)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Site](#site)

### Sites_ResetProductionSlotConfig
Resets the configuration settings of the current slot if they were previously modified by calling ApplySlotConfig API


```js
azure_web_service.Sites_ResetProductionSlotConfig({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_RestartSite
Restarts web app


```js
azure_web_service.Sites_RestartSite({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * softRestart `boolean`: Soft restart applies the configuration settings and restarts the app if necessary. Hard restart always restarts and reprovisions the app
  * synchronous `boolean`: If true then the API will block until the app has been restarted
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetSiteSlots
Gets all the slots for a web apps


```js
azure_web_service.Sites_GetSiteSlots({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * propertiesToInclude `string`: List of app properties to include in the response
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteCollection](#sitecollection)

### Sites_DeleteSiteSlot
Deletes a web app


```js
azure_web_service.Sites_DeleteSiteSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * deleteMetrics `string`: If true, web app metrics are also deleted
  * deleteEmptyServerFarm `string`: If true and App Service Plan is empty after web app deletion, App Service Plan is also deleted
  * skipDnsRegistration `string`: If true, DNS registration is skipped
  * deleteAllSlots `string`: If true, all slots associated with web app are also deleted
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetSiteSlot
Get details of a web app


```js
azure_web_service.Sites_GetSiteSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * propertiesToInclude `string`: Additional web app properties included in the response
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Site](#site)

### Sites_CreateOrUpdateSiteSlot
Creates a new web app or modifies an existing web app.


```js
azure_web_service.Sites_CreateOrUpdateSiteSlot({
  "resourceGroupName": "",
  "name": "",
  "siteEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group
  * name **required** `string`: Name of the web app
  * siteEnvelope **required** [Site](#site)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * skipDnsRegistration `string`: If true web app hostname is not registered with DNS on creation. This parameter is
  * skipCustomDomainVerification `string`: If true, custom (non *.azurewebsites.net) domains associated with web app are not verified.
  * forceDnsRegistration `string`: If true, web app hostname is force registered with DNS
  * ttlInSeconds `string`: Time to live in seconds for web app's default domain name
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Site](#site)

### Sites_ApplySlotConfigSlot
Applies the configuration settings from the target slot onto the current slot


```js
azure_web_service.Sites_ApplySlotConfigSlot({
  "resourceGroupName": "",
  "name": "",
  "slotSwapEntity": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slotSwapEntity **required** [CsmSlotEntity](#csmslotentity)
  * slot **required** `string`: Name of the source slot. Settings from the target slot will be applied onto this slot
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_BackupSiteSlot
Creates web app backup


```js
azure_web_service.Sites_BackupSiteSlot({
  "resourceGroupName": "",
  "name": "",
  "request": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * request **required** [BackupRequest](#backuprequest)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [BackupItem](#backupitem)

### Sites_ListSiteBackupsSlot
Lists all available backups for web app


```js
azure_web_service.Sites_ListSiteBackupsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [BackupItemCollection](#backupitemcollection)

### Sites_DiscoverSiteRestoreSlot
Discovers existing web app backups that can be restored


```js
azure_web_service.Sites_DiscoverSiteRestoreSlot({
  "resourceGroupName": "",
  "name": "",
  "request": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * request **required** [RestoreRequest](#restorerequest)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [RestoreRequest](#restorerequest)

### Sites_DeleteBackupSlot
Deletes a backup from Azure Storage


```js
azure_web_service.Sites_DeleteBackupSlot({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * backupId **required** `string`: Id of backup
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [BackupItem](#backupitem)

### Sites_GetSiteBackupStatusSlot
Gets status of a web app backup that may be in progress.


```js
azure_web_service.Sites_GetSiteBackupStatusSlot({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * backupId **required** `string`: Id of backup
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [BackupItem](#backupitem)

### Sites_GetSiteBackupStatusSecretsSlot
Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.


```js
azure_web_service.Sites_GetSiteBackupStatusSecretsSlot({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "request": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * backupId **required** `string`: Id of backup
  * request **required** [BackupRequest](#backuprequest)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [BackupItem](#backupitem)

### Sites_RestoreSiteSlot
Restores a web app


```js
azure_web_service.Sites_RestoreSiteSlot({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "request": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * backupId **required** `string`: Id of backup to restore
  * request **required** [RestoreRequest](#restorerequest)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [RestoreResponse](#restoreresponse)

### Sites_UpdateSiteAppSettingsSlot
Updates the application settings of web app


```js
azure_web_service.Sites_UpdateSiteAppSettingsSlot({
  "resourceGroupName": "",
  "name": "",
  "appSettings": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * appSettings **required** [StringDictionary](#stringdictionary)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [StringDictionary](#stringdictionary)

### Sites_ListSiteAppSettingsSlot
Gets the application settings of web app


```js
azure_web_service.Sites_ListSiteAppSettingsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [StringDictionary](#stringdictionary)

### Sites_UpdateSiteAuthSettingsSlot
Updates the Authentication / Authorization settings associated with web app


```js
azure_web_service.Sites_UpdateSiteAuthSettingsSlot({
  "resourceGroupName": "",
  "name": "",
  "siteAuthSettings": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * siteAuthSettings **required** [SiteAuthSettings](#siteauthsettings)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteAuthSettings](#siteauthsettings)

### Sites_ListSiteAuthSettingsSlot
Gets the Authentication / Authorization settings associated with web app


```js
azure_web_service.Sites_ListSiteAuthSettingsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteAuthSettings](#siteauthsettings)

### Sites_UpdateSiteBackupConfigurationSlot
Updates backup configuration of web app


```js
azure_web_service.Sites_UpdateSiteBackupConfigurationSlot({
  "resourceGroupName": "",
  "name": "",
  "request": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * request **required** [BackupRequest](#backuprequest)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [BackupRequest](#backuprequest)

### Sites_GetSiteBackupConfigurationSlot
Gets the backup configuration for a web app


```js
azure_web_service.Sites_GetSiteBackupConfigurationSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [BackupRequest](#backuprequest)

### Sites_UpdateSiteConnectionStringsSlot
Updates the connection strings associated with web app


```js
azure_web_service.Sites_UpdateSiteConnectionStringsSlot({
  "resourceGroupName": "",
  "name": "",
  "connectionStrings": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * connectionStrings **required** [ConnectionStringDictionary](#connectionstringdictionary)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ConnectionStringDictionary](#connectionstringdictionary)

### Sites_ListSiteConnectionStringsSlot
Gets the connection strings associated with web app


```js
azure_web_service.Sites_ListSiteConnectionStringsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ConnectionStringDictionary](#connectionstringdictionary)

### Sites_GetSiteLogsConfigSlot
Gets the web app logs configuration


```js
azure_web_service.Sites_GetSiteLogsConfigSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteLogsConfig](#sitelogsconfig)

### Sites_UpdateSiteLogsConfigSlot
Updates the meta data for web app


```js
azure_web_service.Sites_UpdateSiteLogsConfigSlot({
  "resourceGroupName": "",
  "name": "",
  "siteLogsConfig": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * siteLogsConfig **required** [SiteLogsConfig](#sitelogsconfig)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteLogsConfig](#sitelogsconfig)

### Sites_UpdateSiteMetadataSlot
Updates the meta data for web app


```js
azure_web_service.Sites_UpdateSiteMetadataSlot({
  "resourceGroupName": "",
  "name": "",
  "metadata": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * metadata **required** [StringDictionary](#stringdictionary)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [StringDictionary](#stringdictionary)

### Sites_ListSiteMetadataSlot
Gets the web app meta data.


```js
azure_web_service.Sites_ListSiteMetadataSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [StringDictionary](#stringdictionary)

### Sites_ListSitePublishingCredentialsSlot
Gets the web app publishing credentials


```js
azure_web_service.Sites_ListSitePublishingCredentialsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [User](#user)

### Sites_GetSiteConfigSlot
Gets the configuration of the web app


```js
azure_web_service.Sites_GetSiteConfigSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteConfig](#siteconfig)

### Sites_UpdateSiteConfigSlot
Update the configuration of web app


```js
azure_web_service.Sites_UpdateSiteConfigSlot({
  "resourceGroupName": "",
  "name": "",
  "siteConfig": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * siteConfig **required** [SiteConfig](#siteconfig)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteConfig](#siteconfig)

### Sites_CreateOrUpdateSiteConfigSlot
Update the configuration of web app


```js
azure_web_service.Sites_CreateOrUpdateSiteConfigSlot({
  "resourceGroupName": "",
  "name": "",
  "siteConfig": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * siteConfig **required** [SiteConfig](#siteconfig)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteConfig](#siteconfig)

### Sites_GetDeploymentsSlot
List deployments


```js
azure_web_service.Sites_GetDeploymentsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [DeploymentCollection](#deploymentcollection)

### Sites_DeleteDeploymentSlot
Delete the deployment


```js
azure_web_service.Sites_DeleteDeploymentSlot({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * id **required** `string`: Id of the deployment
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetDeploymentSlot
Get the deployment


```js
azure_web_service.Sites_GetDeploymentSlot({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * id **required** `string`: Id of the deployment
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Deployment](#deployment)

### Sites_CreateDeploymentSlot
Create a deployment


```js
azure_web_service.Sites_CreateDeploymentSlot({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "slot": "",
  "deployment": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * id **required** `string`: Id of the deployment
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * deployment **required** [Deployment](#deployment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Deployment](#deployment)

### Sites_GetSiteHostNameBindingsSlot
Get web app hostname bindings


```js
azure_web_service.Sites_GetSiteHostNameBindingsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [HostNameBindingCollection](#hostnamebindingcollection)

### Sites_DeleteSiteHostNameBindingSlot
Deletes a host name binding


```js
azure_web_service.Sites_DeleteSiteHostNameBindingSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "hostName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * hostName **required** `string`: Name of host
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetSiteHostNameBindingSlot
Get web app binding for a hostname


```js
azure_web_service.Sites_GetSiteHostNameBindingSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "hostName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * hostName **required** `string`: Name of host
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [HostNameBinding](#hostnamebinding)

### Sites_CreateOrUpdateSiteHostNameBindingSlot
Creates a web app hostname binding


```js
azure_web_service.Sites_CreateOrUpdateSiteHostNameBindingSlot({
  "resourceGroupName": "",
  "name": "",
  "hostName": "",
  "hostNameBinding": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * hostName **required** `string`: Name of host
  * hostNameBinding **required** [HostNameBinding](#hostnamebinding)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [HostNameBinding](#hostnamebinding)

### Sites_ListSiteRelayServiceConnectionsSlot
Retrieves all BizTalk Hybrid Connections associated with this web app.


```js
azure_web_service.Sites_ListSiteRelayServiceConnectionsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * slot **required** `string`: The name of the slot for the web app.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [RelayServiceConnectionEntity](#relayserviceconnectionentity)

### Sites_DeleteSiteRelayServiceConnectionSlot
Removes the association to a BizTalk Hybrid Connection, identified by its entity name.


```js
azure_web_service.Sites_DeleteSiteRelayServiceConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * entityName **required** `string`: The name by which the Hybrid Connection is identified
  * slot **required** `string`: The name of the slot for the web app.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetSiteRelayServiceConnectionSlot
Retrieves a BizTalk Hybrid Connection identified by its entity name.


```js
azure_web_service.Sites_GetSiteRelayServiceConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * entityName **required** `string`: The name by which the Hybrid Connection is identified
  * slot **required** `string`: The name of the slot for the web app.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [RelayServiceConnectionEntity](#relayserviceconnectionentity)

### Sites_UpdateSiteRelayServiceConnectionSlot
Creates a new association to a BizTalk Hybrid Connection, or updates an existing one.


```js
azure_web_service.Sites_UpdateSiteRelayServiceConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "connectionEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * entityName **required** `string`: The name by which the Hybrid Connection is identified
  * connectionEnvelope **required** [RelayServiceConnectionEntity](#relayserviceconnectionentity)
  * slot **required** `string`: The name of the slot for the web app.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [RelayServiceConnectionEntity](#relayserviceconnectionentity)

### Sites_CreateOrUpdateSiteRelayServiceConnectionSlot
Creates a new association to a BizTalk Hybrid Connection, or updates an existing one.


```js
azure_web_service.Sites_CreateOrUpdateSiteRelayServiceConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "connectionEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * entityName **required** `string`: The name by which the Hybrid Connection is identified
  * connectionEnvelope **required** [RelayServiceConnectionEntity](#relayserviceconnectionentity)
  * slot **required** `string`: The name of the slot for the web app.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [RelayServiceConnectionEntity](#relayserviceconnectionentity)

### Sites_GetSiteInstanceIdentifiersSlot
Gets all instance of a web app


```js
azure_web_service.Sites_GetSiteInstanceIdentifiersSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteInstanceCollection](#siteinstancecollection)

### Sites_GetInstanceDeploymentsSlot
List deployments


```js
azure_web_service.Sites_GetInstanceDeploymentsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * instanceId **required** `string`: Id of web app instance
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [DeploymentCollection](#deploymentcollection)

### Sites_DeleteInstanceDeploymentSlot
Delete the deployment


```js
azure_web_service.Sites_DeleteInstanceDeploymentSlot({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "slot": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * id **required** `string`: Id of the deployment
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * instanceId **required** `string`: Id of web app instance
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetInstanceDeploymentSlot
Get the deployment


```js
azure_web_service.Sites_GetInstanceDeploymentSlot({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "slot": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * id **required** `string`: Id of the deployment
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * instanceId **required** `string`: Id of web app instance
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Deployment](#deployment)

### Sites_CreateInstanceDeploymentSlot
Create a deployment


```js
azure_web_service.Sites_CreateInstanceDeploymentSlot({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "slot": "",
  "instanceId": "",
  "deployment": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * id **required** `string`: Id of the deployment
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * instanceId **required** `string`: Id of web app instance
  * deployment **required** [Deployment](#deployment)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Deployment](#deployment)

### Sites_IsSiteCloneableSlot
Creates a new web app or modifies an existing web app.


```js
azure_web_service.Sites_IsSiteCloneableSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group
  * name **required** `string`: Name of the web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteCloneability](#sitecloneability)

### Sites_GetSiteMetricDefinitionsSlot
Gets metric definitions for web app


```js
azure_web_service.Sites_GetSiteMetricDefinitionsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [MetricDefinitionCollection](#metricdefinitioncollection)

### Sites_GetSiteMetricsSlot
Gets metrics for web app


```js
azure_web_service.Sites_GetSiteMetricsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * details `boolean`: If true, metric details are included in response
  * $filter `string`: Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ResourceMetricCollection](#resourcemetriccollection)

### Sites_GetSiteNetworkFeaturesSlot
Retrieves a view of all network features in use on this web app.


```js
azure_web_service.Sites_GetSiteNetworkFeaturesSlot({
  "resourceGroupName": "",
  "name": "",
  "view": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * view **required** `string`: The type of view. This can either be "summary" or "detailed".
  * slot **required** `string`: The name of the slot for this web app.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [NetworkFeatures](#networkfeatures)

### Sites_GenerateNewSitePublishingPasswordSlot
Generates new random app publishing password


```js
azure_web_service.Sites_GenerateNewSitePublishingPasswordSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetSiteOperationSlot
Gets the operation for a web app


```js
azure_web_service.Sites_GetSiteOperationSlot({
  "resourceGroupName": "",
  "name": "",
  "operationId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * operationId **required** `string`: Id of an operation
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_ListSitePremierAddOnsSlot



```js
azure_web_service.Sites_ListSitePremierAddOnsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`
  * name **required** `string`
  * slot **required** `string`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_DeleteSitePremierAddOnSlot



```js
azure_web_service.Sites_DeleteSitePremierAddOnSlot({
  "resourceGroupName": "",
  "name": "",
  "premierAddOnName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`
  * name **required** `string`
  * premierAddOnName **required** `string`
  * slot **required** `string`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetSitePremierAddOnSlot



```js
azure_web_service.Sites_GetSitePremierAddOnSlot({
  "resourceGroupName": "",
  "name": "",
  "premierAddOnName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`
  * name **required** `string`
  * premierAddOnName **required** `string`
  * slot **required** `string`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_AddSitePremierAddOnSlot



```js
azure_web_service.Sites_AddSitePremierAddOnSlot({
  "resourceGroupName": "",
  "name": "",
  "premierAddOnName": "",
  "premierAddOn": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`
  * name **required** `string`
  * premierAddOnName **required** `string`
  * premierAddOn **required** [PremierAddOnRequest](#premieraddonrequest)
  * slot **required** `string`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_ListSitePublishingProfileXmlSlot
Gets the publishing profile for web app


```js
azure_web_service.Sites_ListSitePublishingProfileXmlSlot({
  "resourceGroupName": "",
  "name": "",
  "options": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * options **required** [CsmPublishingProfileOptions](#csmpublishingprofileoptions)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output `file`

### Sites_RecoverSiteSlot
Recovers a deleted web app


```js
azure_web_service.Sites_RecoverSiteSlot({
  "resourceGroupName": "",
  "name": "",
  "recoveryEntity": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * recoveryEntity **required** [CsmSiteRecoveryEntity](#csmsiterecoveryentity)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Site](#site)

### Sites_ResetSlotConfigSlot
Resets the configuration settings of the current slot if they were previously modified by calling ApplySlotConfig API


```js
azure_web_service.Sites_ResetSlotConfigSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_RestartSiteSlot
Restarts web app


```js
azure_web_service.Sites_RestartSiteSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * softRestart `boolean`: Soft restart applies the configuration settings and restarts the app if necessary. Hard restart always restarts and reprovisions the app
  * synchronous `boolean`: If true then the API will block until the app has been restarted
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetSlotsDifferencesSlot
Get the difference in configuration settings between two web app slots


```js
azure_web_service.Sites_GetSlotsDifferencesSlot({
  "resourceGroupName": "",
  "name": "",
  "slotSwapEntity": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slotSwapEntity **required** [CsmSlotEntity](#csmslotentity)
  * slot **required** `string`: Name of the source slot
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SlotDifferenceCollection](#slotdifferencecollection)

### Sites_SwapSlotsSlot
Swaps web app slots


```js
azure_web_service.Sites_SwapSlotsSlot({
  "resourceGroupName": "",
  "name": "",
  "slotSwapEntity": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slotSwapEntity **required** [CsmSlotEntity](#csmslotentity)
  * slot **required** `string`: Name of source slot for the swap
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetSiteSnapshotsSlot
Returns all Snapshots to the user.


```js
azure_web_service.Sites_GetSiteSnapshotsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Webspace
  * name **required** `string`: Website Name
  * slot **required** `string`: Website Slot
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_DeleteSiteSourceControlSlot
Delete source control configuration of web app


```js
azure_web_service.Sites_DeleteSiteSourceControlSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetSiteSourceControlSlot
Get the source control configuration of web app


```js
azure_web_service.Sites_GetSiteSourceControlSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteSourceControl](#sitesourcecontrol)

### Sites_UpdateSiteSourceControlSlot
Update the source control configuration of web app


```js
azure_web_service.Sites_UpdateSiteSourceControlSlot({
  "resourceGroupName": "",
  "name": "",
  "siteSourceControl": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * siteSourceControl **required** [SiteSourceControl](#sitesourcecontrol)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteSourceControl](#sitesourcecontrol)

### Sites_CreateOrUpdateSiteSourceControlSlot
Update the source control configuration of web app


```js
azure_web_service.Sites_CreateOrUpdateSiteSourceControlSlot({
  "resourceGroupName": "",
  "name": "",
  "siteSourceControl": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * siteSourceControl **required** [SiteSourceControl](#sitesourcecontrol)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteSourceControl](#sitesourcecontrol)

### Sites_StartSiteSlot
Starts web app


```js
azure_web_service.Sites_StartSiteSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_StopSiteSlot
Stops web app


```js
azure_web_service.Sites_StopSiteSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_SyncSiteRepositorySlot



```js
azure_web_service.Sites_SyncSiteRepositorySlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`
  * name **required** `string`
  * slot **required** `string`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetSiteUsagesSlot
Gets the quota usage numbers for web app


```js
azure_web_service.Sites_GetSiteUsagesSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * $filter `string`: Return only usages specified in the filter. Filter is specified by using OData syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [CsmUsageQuotaCollection](#csmusagequotacollection)

### Sites_GetSiteVNETConnectionsSlot
Retrieves a list of all Virtual Network Connections associated with this web app.


```js
azure_web_service.Sites_GetSiteVNETConnectionsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * slot **required** `string`: The name of the slot for this web app.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [VnetInfo](#vnetinfo)

### Sites_DeleteSiteVNETConnectionSlot
Removes the specified Virtual Network Connection association from this web app.


```js
azure_web_service.Sites_DeleteSiteVNETConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * vnetName **required** `string`: The name of the Virtual Network
  * slot **required** `string`: The name of the slot for this web app.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetSiteVNETConnectionSlot
Retrieves a specific Virtual Network Connection associated with this web app.


```js
azure_web_service.Sites_GetSiteVNETConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * vnetName **required** `string`: The name of the Virtual Network
  * slot **required** `string`: The name of the slot for this web app.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [VnetInfo](#vnetinfo)

### Sites_UpdateSiteVNETConnectionSlot
Adds a Virtual Network Connection or updates it's properties.


```js
azure_web_service.Sites_UpdateSiteVNETConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "connectionEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * vnetName **required** `string`: The name of the Virtual Network
  * connectionEnvelope **required** [VnetInfo](#vnetinfo)
  * slot **required** `string`: The name of the slot for this web app.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [VnetInfo](#vnetinfo)

### Sites_CreateOrUpdateSiteVNETConnectionSlot
Adds a Virtual Network Connection or updates it's properties.


```js
azure_web_service.Sites_CreateOrUpdateSiteVNETConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "connectionEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * vnetName **required** `string`: The name of the Virtual Network
  * connectionEnvelope **required** [VnetInfo](#vnetinfo)
  * slot **required** `string`: The name of the slot for this web app.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [VnetInfo](#vnetinfo)

### Sites_GetSiteVnetGatewaySlot
Retrieves a Virtual Network connection gateway associated with this web app and virtual network.


```js
azure_web_service.Sites_GetSiteVnetGatewaySlot({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * vnetName **required** `string`: The name of the Virtual Network
  * gatewayName **required** `string`: The name of the gateway. The only gateway that exists presently is "primary"
  * slot **required** `string`: The name of the slot for this web app.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_UpdateSiteVNETConnectionGatewaySlot
Updates the Virtual Network Gateway.


```js
azure_web_service.Sites_UpdateSiteVNETConnectionGatewaySlot({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "connectionEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * vnetName **required** `string`: The name of the Virtual Network
  * gatewayName **required** `string`: The name of the gateway. The only gateway that exists presently is "primary"
  * connectionEnvelope **required** [VnetGateway](#vnetgateway)
  * slot **required** `string`: The name of the slot for this web app.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [VnetGateway](#vnetgateway)

### Sites_CreateOrUpdateSiteVNETConnectionGatewaySlot
Updates the Virtual Network Gateway.


```js
azure_web_service.Sites_CreateOrUpdateSiteVNETConnectionGatewaySlot({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "connectionEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * vnetName **required** `string`: The name of the Virtual Network
  * gatewayName **required** `string`: The name of the gateway. The only gateway that exists presently is "primary"
  * connectionEnvelope **required** [VnetGateway](#vnetgateway)
  * slot **required** `string`: The name of the slot for this web app.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [VnetGateway](#vnetgateway)

### Sites_GetSlotsDifferencesFromProduction
Get the difference in configuration settings between two web app slots


```js
azure_web_service.Sites_GetSlotsDifferencesFromProduction({
  "resourceGroupName": "",
  "name": "",
  "slotSwapEntity": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slotSwapEntity **required** [CsmSlotEntity](#csmslotentity)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SlotDifferenceCollection](#slotdifferencecollection)

### Sites_SwapSlotWithProduction
Swaps web app slots


```js
azure_web_service.Sites_SwapSlotWithProduction({
  "resourceGroupName": "",
  "name": "",
  "slotSwapEntity": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * slotSwapEntity **required** [CsmSlotEntity](#csmslotentity)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetSiteSnapshots
Returns all Snapshots to the user.


```js
azure_web_service.Sites_GetSiteSnapshots({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Webspace
  * name **required** `string`: Website Name
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_DeleteSiteSourceControl
Delete source control configuration of web app


```js
azure_web_service.Sites_DeleteSiteSourceControl({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetSiteSourceControl
Get the source control configuration of web app


```js
azure_web_service.Sites_GetSiteSourceControl({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteSourceControl](#sitesourcecontrol)

### Sites_UpdateSiteSourceControl
Update the source control configuration of web app


```js
azure_web_service.Sites_UpdateSiteSourceControl({
  "resourceGroupName": "",
  "name": "",
  "siteSourceControl": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * siteSourceControl **required** [SiteSourceControl](#sitesourcecontrol)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteSourceControl](#sitesourcecontrol)

### Sites_CreateOrUpdateSiteSourceControl
Update the source control configuration of web app


```js
azure_web_service.Sites_CreateOrUpdateSiteSourceControl({
  "resourceGroupName": "",
  "name": "",
  "siteSourceControl": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * siteSourceControl **required** [SiteSourceControl](#sitesourcecontrol)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [SiteSourceControl](#sitesourcecontrol)

### Sites_StartSite
Starts web app


```js
azure_web_service.Sites_StartSite({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_StopSite
Stops web app


```js
azure_web_service.Sites_StopSite({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_SyncSiteRepository



```js
azure_web_service.Sites_SyncSiteRepository({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`
  * name **required** `string`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetSiteUsages
Gets the quota usage numbers for web app


```js
azure_web_service.Sites_GetSiteUsages({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of resource group
  * name **required** `string`: Name of web app
  * $filter `string`: Return only usages specified in the filter. Filter is specified by using OData syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [CsmUsageQuotaCollection](#csmusagequotacollection)

### Sites_GetSiteVNETConnections
Retrieves a list of all Virtual Network Connections associated with this web app.


```js
azure_web_service.Sites_GetSiteVNETConnections({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [VnetInfo](#vnetinfo)

### Sites_DeleteSiteVNETConnection
Removes the specified Virtual Network Connection association from this web app.


```js
azure_web_service.Sites_DeleteSiteVNETConnection({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * vnetName **required** `string`: The name of the Virtual Network
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_GetSiteVNETConnection
Retrieves a specific Virtual Network Connection associated with this web app.


```js
azure_web_service.Sites_GetSiteVNETConnection({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * vnetName **required** `string`: The name of the Virtual Network
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [VnetInfo](#vnetinfo)

### Sites_UpdateSiteVNETConnection
Adds a Virtual Network Connection or updates it's properties.


```js
azure_web_service.Sites_UpdateSiteVNETConnection({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * vnetName **required** `string`: The name of the Virtual Network
  * connectionEnvelope **required** [VnetInfo](#vnetinfo)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [VnetInfo](#vnetinfo)

### Sites_CreateOrUpdateSiteVNETConnection
Adds a Virtual Network Connection or updates it's properties.


```js
azure_web_service.Sites_CreateOrUpdateSiteVNETConnection({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * vnetName **required** `string`: The name of the Virtual Network
  * connectionEnvelope **required** [VnetInfo](#vnetinfo)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [VnetInfo](#vnetinfo)

### Sites_GetSiteVnetGateway
Retrieves a Virtual Network connection gateway associated with this web app and virtual network.


```js
azure_web_service.Sites_GetSiteVnetGateway({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * vnetName **required** `string`: The name of the Virtual Network
  * gatewayName **required** `string`: The name of the gateway. The only gateway that exists presently is "primary"
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [Object](#object)

### Sites_UpdateSiteVNETConnectionGateway
Updates the Virtual Network Gateway.


```js
azure_web_service.Sites_UpdateSiteVNETConnectionGateway({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * vnetName **required** `string`: The name of the Virtual Network
  * gatewayName **required** `string`: The name of the gateway. The only gateway that exists presently is "primary"
  * connectionEnvelope **required** [VnetGateway](#vnetgateway)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [VnetGateway](#vnetgateway)

### Sites_CreateOrUpdateSiteVNETConnectionGateway
Updates the Virtual Network Gateway.


```js
azure_web_service.Sites_CreateOrUpdateSiteVNETConnectionGateway({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name
  * name **required** `string`: The name of the web app
  * vnetName **required** `string`: The name of the Virtual Network
  * gatewayName **required** `string`: The name of the gateway. The only gateway that exists presently is "primary"
  * connectionEnvelope **required** [VnetGateway](#vnetgateway)
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [VnetGateway](#vnetgateway)

### Recommendations_GetRecommendationHistoryForSite
Gets the list of past recommendations optionally specified by the time range.


```js
azure_web_service.Recommendations_GetRecommendationHistoryForSite({
  "resourceGroupName": "",
  "siteName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Resource group name
  * siteName **required** `string`: Site name
  * startTime `string`: The start time of a time range to query, e.g. $filter=startTime eq '2015-01-01T00:00:00Z' and endTime eq '2015-01-02T00:00:00Z'
  * endTime `string`: The end time of a time range to query, e.g. $filter=startTime eq '2015-01-01T00:00:00Z' and endTime eq '2015-01-02T00:00:00Z'
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [Recommendation](#recommendation)

### Recommendations_GetRecommendedRulesForSite
Gets a list of recommendations associated with the specified web site.


```js
azure_web_service.Recommendations_GetRecommendedRulesForSite({
  "resourceGroupName": "",
  "siteName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Resource group name
  * siteName **required** `string`: Site name
  * featured `boolean`: If set, this API returns only the most critical recommendation among the others. Otherwise this API returns all recommendations available
  * siteSku `string`: The name of site SKU.
  * numSlots `integer`: The number of site slots associated to the site
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [Recommendation](#recommendation)

### Recommendations_GetRuleDetailsBySiteName
Gets the detailed properties of the recommendation object for the specified web site.


```js
azure_web_service.Recommendations_GetRuleDetailsBySiteName({
  "resourceGroupName": "",
  "siteName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Resource group name
  * siteName **required** `string`: Site name
  * name **required** `string`: Recommendation rule name
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [RecommendationRule](#recommendationrule)



## Definitions

### Address
* Address `object`: Address information for domain registration
  * address1 `string`: Address 1
  * address2 `string`: Address 2
  * city `string`: City
  * country `string`: Country
  * postalCode `string`: Postal code
  * state `string`: State

### AddressResponse
* AddressResponse `object`: Describes main public ip address and any extra vips
  * internalIpAddress `string`: VNET internal ip address of the hostingEnvironment (App Service Environment) if it is in internal load-balancing mode
  * outboundIpAddresses `array`: IP addresses appearing on outbound connections
    * items `string`
  * serviceIpAddress `string`: Main public vip
  * vipMappings `array`: Additional vips
    * items [VirtualIPMapping](#virtualipmapping)

### ApiDefinitionInfo
* ApiDefinitionInfo `object`: Information about the formal API definition for the web app.
  * url `string`: The URL of the API definition.

### ApplicationLogsConfig
* ApplicationLogsConfig `object`: Application logs configuration
  * azureBlobStorage [AzureBlobStorageApplicationLogsConfig](#azureblobstorageapplicationlogsconfig)
  * azureTableStorage [AzureTableStorageApplicationLogsConfig](#azuretablestorageapplicationlogsconfig)
  * fileSystem [FileSystemApplicationLogsConfig](#filesystemapplicationlogsconfig)

### ArmPlan
* ArmPlan `object`: The plan object in an ARM, represents a marketplace plan
  * name `string`: The name
  * product `string`: The product
  * promotionCode `string`: The promotion code
  * publisher `string`: The publisher
  * version `string`: Version of product

### AutoHealActions
* AutoHealActions `object`: AutoHealActions - Describes the actions which can be
  * actionType **required** `string` (values: Recycle, LogEvent, CustomAction): ActionType - predefined action to be taken
  * customAction [AutoHealCustomAction](#autohealcustomaction)
  * minProcessExecutionTime `string`: MinProcessExecutionTime - minimum time the process must execute

### AutoHealCustomAction
* AutoHealCustomAction `object`: AutoHealCustomAction - Describes the custom action to be executed
  * exe `string`: Executable to be run
  * parameters `string`: Parameters for the executable

### AutoHealRules
* AutoHealRules `object`: AutoHealRules - describes the rules which can be defined for auto-heal
  * actions [AutoHealActions](#autohealactions)
  * triggers [AutoHealTriggers](#autohealtriggers)

### AutoHealTriggers
* AutoHealTriggers `object`: AutoHealTriggers - describes the triggers for auto-heal.
  * privateBytesInKB `integer`: PrivateBytesInKB - Defines a rule based on private bytes
  * requests [RequestsBasedTrigger](#requestsbasedtrigger)
  * slowRequests [SlowRequestsBasedTrigger](#slowrequestsbasedtrigger)
  * statusCodes `array`: StatusCodes - Defines a rule based on status codes
    * items [StatusCodesBasedTrigger](#statuscodesbasedtrigger)

### AzureBlobStorageApplicationLogsConfig
* AzureBlobStorageApplicationLogsConfig `object`: Application logs azure blob storage configuration
  * level `string` (values: Off, Verbose, Information, Warning, Error): Log level
  * retentionInDays `integer`: Retention in days.
  * sasUrl `string`: SAS url to a azure blob container with read/write/list/delete permissions

### AzureBlobStorageHttpLogsConfig
* AzureBlobStorageHttpLogsConfig `object`: Http logs to azure blob storage configuration
  * enabled `boolean`: Enabled
  * retentionInDays `integer`: Retention in days.
  * sasUrl `string`: SAS url to a azure blob container with read/write/list/delete permissions

### AzureTableStorageApplicationLogsConfig
* AzureTableStorageApplicationLogsConfig `object`: Application logs to azure table storage configuration
  * level `string` (values: Off, Verbose, Information, Warning, Error): Log level
  * sasUrl `string`: SAS url to an azure table with add/query/delete permissions

### BackupItem
* BackupItem `object`: Backup description
  * properties `object`
    * blobName `string`: Name of the blob which contains data for this backup
    * correlationId `string`: Unique correlation identifier. Please use this along with the timestamp while communicating with Azure support.
    * created `string`: Timestamp of the backup creation
    * databases `array`: List of databases included in the backup
      * items [DatabaseBackupSetting](#databasebackupsetting)
    * finishedTimeStamp `string`: Timestamp when this backup finished.
    * id `integer`: Id of the backup.
    * lastRestoreTimeStamp `string`: Timestamp of a last restore operation which used this backup.
    * log `string`: Details regarding this backup. Might contain an error message.
    * name `string`: Name of this backup
    * scheduled `boolean`: True if this backup has been created due to a schedule being triggered.
    * sizeInBytes `integer`: Size of the backup in bytes
    * status **required** `string` (values: InProgress, Failed, Succeeded, TimedOut, Created, Skipped, PartiallySucceeded, DeleteInProgress, DeleteFailed, Deleted): Backup status
    * storageAccountUrl `string`: SAS URL for the storage account container which contains this backup
    * websiteSizeInBytes `integer`: Size of the original web app which has been backed up
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### BackupItemCollection
* BackupItemCollection `object`: Collection of Backup Items
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [BackupItem](#backupitem)

### BackupRequest
* BackupRequest `object`: Description of a backup which will be performed
  * properties `object`
    * backupSchedule [BackupSchedule](#backupschedule)
    * databases `array`: Databases included in the backup
      * items [DatabaseBackupSetting](#databasebackupsetting)
    * enabled `boolean`: True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled
    * name `string`: Name of the backup
    * storageAccountUrl `string`: SAS URL to the container
    * type **required** `string` (values: Default, Clone, Relocation): Type of the backup
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### BackupSchedule
* BackupSchedule `object`: Description of a backup schedule. Describes how often should be the backup performed and what should be the retention policy.
  * frequencyInterval `integer`: How often should be the backup executed (e.g. for weekly backup, this should be set to 7 and FrequencyUnit should be set to Day)
  * frequencyUnit **required** `string` (values: Day, Hour): How often should be the backup executed (e.g. for weekly backup, this should be set to Day and FrequencyInterval should be set to 7)
  * keepAtLeastOneBackup `boolean`: True if the retention policy should always keep at least one backup in the storage account, regardless how old it is; false otherwise.
  * lastExecutionTime `string`: The last time when this schedule was triggered
  * retentionPeriodInDays `integer`: After how many days backups should be deleted
  * startTime `string`: When the schedule should start working

### Certificate
* Certificate `object`: App certificate
  * properties `object`
    * cerBlob `string`: Raw bytes of .cer file
    * expirationDate `string`: Certificate expiration date
    * friendlyName `string`: Friendly name of the certificate
    * hostNames `array`: Host names the certificate applies to
      * items `string`
    * hostingEnvironmentProfile [HostingEnvironmentProfile](#hostingenvironmentprofile)
    * issueDate `string`: Certificate issue Date
    * issuer `string`: Certificate issuer
    * password `string`: Certificate password
    * pfxBlob `string`: Pfx blob
    * publicKeyHash `string`: Public key hash
    * selfLink `string`: Self link
    * siteName `string`: App name
    * subjectName `string`: Subject name of the certificate
    * thumbprint `string`: Certificate thumbprint
    * valid `boolean`: Is the certificate valid?
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### CertificateCollection
* CertificateCollection `object`: Collection of certificates
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [Certificate](#certificate)

### CertificateDetails
* CertificateDetails `object`: Certificate Details
  * properties `object`
    * issuer `string`: Issuer
    * notAfter `string`: Valid to
    * notBefore `string`: Valid from
    * rawData `string`: Raw certificate data
    * serialNumber `string`: Serial Number
    * signatureAlgorithm `string`: Signature Algorithm
    * subject `string`: Subject
    * thumbprint `string`: Thumbprint
    * version `integer`: Version
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### CertificateEmail
* CertificateEmail `object`: Certificate Email
  * properties `object`
    * emailId `string`: Email id
    * timeStamp `string`: Time stamp
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### CertificateOrder
* CertificateOrder `object`: Certificate purchase order
  * properties `object`
    * autoRenew `boolean`: Auto renew
    * certificates `object`: State of the Key Vault secret
    * csr `string`: Last CSR that was created for this order
    * distinguishedName `string`: Certificate distinguished name
    * domainVerificationToken `string`: Domain Verification Token
    * expirationTime `string`: Certificate expiration time
    * intermediate [CertificateDetails](#certificatedetails)
    * keySize `integer`: Certificate Key Size
    * lastCertificateIssuanceTime `string`: Certificate last issuance time
    * productType `string` (values: StandardDomainValidatedSsl, StandardDomainValidatedWildCardSsl): Certificate product type
    * provisioningState `string` (values: Succeeded, Failed, Canceled, InProgress, Deleting): Status of certificate order
    * root [CertificateDetails](#certificatedetails)
    * serialNumber `string`: Current serial number of the certificate
    * signedCertificate [CertificateDetails](#certificatedetails)
    * status `string` (values: Pendingissuance, Issued, Revoked, Canceled, Denied, Pendingrevocation, PendingRekey, Unused, Expired, NotSubmitted): Current order status
    * validityInYears `integer`: Duration in years (must be between 1 and 3)
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### CertificateOrderAction
* CertificateOrderAction `object`: Represents a certificate action
  * properties `object`
    * createdAt `string`: Time at which the certificate action was performed
    * type **required** `string` (values: CertificateIssued, CertificateOrderCanceled, CertificateOrderCreated, CertificateRevoked, DomainValidationComplete, FraudDetected, OrgNameChange, OrgValidationComplete, SanDrop): Type
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### CertificateOrderCertificate
* CertificateOrderCertificate `object`: Class representing the Key Vault container for certificate purchased through Azure
  * properties `object`
    * keyVaultId `string`: Key Vault Csm resource Id
    * keyVaultSecretName `string`: Key Vault secret name
    * provisioningState `string` (values: Initialized, WaitingOnCertificateOrder, Succeeded, CertificateOrderFailed, OperationNotPermittedOnKeyVault, AzureServiceUnauthorizedToAccessKeyVault, KeyVaultDoesNotExist, KeyVaultSecretDoesNotExist, UnknownError, Unknown): Status of the Key Vault secret
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### CertificateOrderCertificateCollection
* CertificateOrderCertificateCollection `object`: Collection of certificate order certificates
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [CertificateOrderCertificate](#certificateordercertificate)

### CertificateOrderCollection
* CertificateOrderCollection `object`: Collection of certificate orders
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [CertificateOrder](#certificateorder)

### ClassicMobileService
* ClassicMobileService `object`: A mobile service
  * properties `object`
    * name `string`: Name of the mobile service
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ClassicMobileServiceCollection
* ClassicMobileServiceCollection `object`: Collection of Classic Mobile Services
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [ClassicMobileService](#classicmobileservice)

### CloningInfo
* CloningInfo `object`: Represents information needed for cloning operation
  * appSettingsOverrides `object`: Application settings overrides for cloned web app. If specified these settings will override the settings cloned 
  * cloneCustomHostNames `boolean`: If true, clone custom hostnames from source web app
  * cloneSourceControl `boolean`: Clone source control from source web app
  * configureLoadBalancing `boolean`: If specified configure load balancing for source and clone site
  * correlationId `string`: Correlation Id of cloning operation. This id ties multiple cloning operations
  * hostingEnvironment `string`: Hosting environment
  * overwrite `boolean`: Overwrite destination web app
  * sourceWebAppId `string`: ARM resource id of the source web app. Web app resource id is of the form 
  * trafficManagerProfileId `string`: ARM resource id of the traffic manager profile to use if it exists. Traffic manager resource id is of the form 
  * trafficManagerProfileName `string`: Name of traffic manager profile to create. This is only needed if traffic manager profile does not already exist

### ConnStringInfo
* ConnStringInfo `object`: Represents database connection string information
  * connectionString `string`: Connection string value
  * name `string`: Name of connection string
  * type **required** `string` (values: MySql, SQLServer, SQLAzure, Custom): Type of database

### ConnStringValueTypePair
* ConnStringValueTypePair `object`: Database connection string value to type pair
  * type **required** `string` (values: MySql, SQLServer, SQLAzure, Custom): Type of database
  * value `string`: Value of pair

### ConnectionStringDictionary
* ConnectionStringDictionary `object`: String dictionary resource
  * properties `object`: Connection strings
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### Contact
* Contact `object`: Contact information for domain registration. If 'Domain Privacy' option is not selected then the contact information will be made publicly available through the Whois directories as per ICANN requirements.
  * addressMailing [Address](#address)
  * email `string`: Email address
  * fax `string`: Fax number
  * jobTitle `string`: Job title
  * nameFirst `string`: First name
  * nameLast `string`: Last name
  * nameMiddle `string`: Middle name
  * organization `string`: Organization
  * phone `string`: Phone number

### CorsSettings
* CorsSettings `object`: Cross-Origin Resource Sharing (CORS) settings for the web app.
  * allowedOrigins `array`: Gets or sets the list of origins that should be allowed to make cross-origin
    * items `string`

### CsmMoveResourceEnvelope
* CsmMoveResourceEnvelope `object`: Class containing a list of the resources that need to be moved and the resource group they should be moved to
  * resources `array`
    * items `string`
  * targetResourceGroup `string`

### CsmPublishingProfileOptions
* CsmPublishingProfileOptions `object`: Publishing options for requested profile
  * format `string`: Name of the format. Valid values are: 

### CsmSiteRecoveryEntity
* CsmSiteRecoveryEntity `object`: Class containing details about site recovery operation.
  * recoverConfig `boolean`: If true, then the website's configuration will be reverted to its state at SnapshotTime
  * siteName `string`: [Optional] Destination web app name into which web app should be recovered. This is case when new web app should be created instead.
  * slotName `string`: [Optional] Destination web app slot name into which web app should be recovered
  * snapshotTime `string`: Point in time in which the site recover should be attempted.

### CsmSlotEntity
* CsmSlotEntity `object`: Class containing deployment slot parameters
  * preserveVnet `boolean`: Get or set the flag indicating it should preserve VNet to the slot during swap
  * targetSlot `string`: Set the destination deployment slot during swap operation

### CsmUsageQuota
* CsmUsageQuota `object`: Usage of the quota resource
  * currentValue `integer`: The current value of the resource counter
  * limit `integer`: The resource limit
  * name [LocalizableString](#localizablestring)
  * nextResetTime `string`: Next reset time for the resource counter
  * unit `string`: Units of measurement for the quota resource

### CsmUsageQuotaCollection
* CsmUsageQuotaCollection `object`: Collection of csm usage quotas
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [CsmUsageQuota](#csmusagequota)

### Csr
* Csr `object`: Certificate signing request object
  * properties `object`
    * csrString `string`: Actual CSR string created
    * distinguishedName `string`: Distinguished name of certificate to be created
    * hostingEnvironment `string`: Hosting environment
    * name `string`: Name used to locate CSR object
    * password `string`: PFX password
    * pfxBlob `string`: PFX certificate of created certificate
    * publicKeyHash `string`: Hash of the certificates public key
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### DatabaseBackupSetting
* DatabaseBackupSetting `object`: Note: properties are serialized in JSON format and stored in DB. 
  * connectionString `string`: Contains a connection string to a database which is being backed up/restored. If the restore should happen to a new database, the database name inside is the new one.
  * connectionStringName `string`: Contains a connection string name that is linked to the SiteConfig.ConnectionStrings.
  * databaseType `string`: SqlAzure / MySql
  * name `string`

### DeletedSite
* DeletedSite `object`: Reports deleted site including the timestamp of operation
  * properties `object`
    * availabilityState **required** `string` (values: Normal, Limited, DisasterRecoveryMode): Management information availability state for the web app. Possible values are Normal or Limited. 
    * clientAffinityEnabled `boolean`: Specifies if the client affinity is enabled when load balancing http request for multiple instances of the web app
    * clientCertEnabled `boolean`: Specifies if the client certificate is enabled for the web app
    * cloningInfo [CloningInfo](#cloninginfo)
    * containerSize `integer`: Size of a function container
    * defaultHostName `string`: Default hostname of the web app
    * deletedTimestamp `string`: Time when the site was deleted
    * enabled `boolean`: True if the site is enabled; otherwise, false. Setting this  value to false disables the site (takes the site off line).
    * enabledHostNames `array`: Hostnames for the web app that are enabled. Hostnames need to be assigned and enabled. If some hostnames are assigned but not enabled
      * items `string`
    * gatewaySiteName `string`: Name of gateway app associated with web app
    * hostNameSslStates `array`: Hostname SSL states are  used to manage the SSL bindings for site's hostnames.
      * items [HostNameSslState](#hostnamesslstate)
    * hostNames `array`: Hostnames associated with web app
      * items `string`
    * hostNamesDisabled `boolean`: Specifies if the public hostnames are disabled the web app.
    * hostingEnvironmentProfile [HostingEnvironmentProfile](#hostingenvironmentprofile)
    * isDefaultContainer `boolean`: Site is a default container
    * lastModifiedTimeUtc `string`: Last time web app was modified in UTC
    * maxNumberOfWorkers `integer`: Maximum number of workers
    * microService `string`
    * name `string`: Name of web app
    * outboundIpAddresses `string`: List of comma separated IP addresses that this web app uses for outbound connections. Those can be used when configuring firewall rules for databases accessed by this web app.
    * premiumAppDeployed `boolean`: If set indicates whether web app is deployed as a premium app
    * repositorySiteName `string`: Name of repository site
    * resourceGroup `string`: Resource group web app belongs to
    * scmSiteAlsoStopped `boolean`: If set indicates whether to stop SCM (KUDU) site when the web app is stopped. Default is false.
    * serverFarmId `string`
    * siteConfig [SiteConfig](#siteconfig)
    * state `string`: State of the web app
    * targetSwapSlot `string`: Read-only property that specifies which slot this app will swap into
    * trafficManagerHostNames `array`: Read-only list of Azure Traffic manager hostnames associated with web app
      * items `string`
    * usageState **required** `string` (values: Normal, Exceeded): State indicating whether web app has exceeded its quota usage
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### DeletedSiteCollection
* DeletedSiteCollection `object`: Collection of deleted sites
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [DeletedSite](#deletedsite)

### Deployment
* Deployment `object`: Represents user credentials used for publishing activity
  * properties `object`
    * active `boolean`: Active
    * author `string`: Author
    * author_email `string`: AuthorEmail
    * deployer `string`: Deployer
    * details `string`: Detail
    * end_time `string`: EndTime
    * id `string`: Id
    * message `string`: Message
    * start_time `string`: StartTime
    * status `integer`: Status
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### DeploymentCollection
* DeploymentCollection `object`: Collection of app deployments
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [Deployment](#deployment)

### Domain
* Domain `object`: Represents a domain
  * properties `object`
    * autoRenew `boolean`: If true then domain will renewed automatically
    * consent [DomainPurchaseConsent](#domainpurchaseconsent)
    * contactAdmin [Contact](#contact)
    * contactBilling [Contact](#contact)
    * contactRegistrant [Contact](#contact)
    * contactTech [Contact](#contact)
    * createdTime `string`: Domain creation timestamp
    * domainNotRenewableReasons `array`: Reasons why domain is not renewable
      * items `string` (values: RegistrationStatusNotSupportedForRenewal, ExpirationNotInRenewalTimeRange, SubscriptionNotActive)
    * expirationTime `string`: Domain expiration timestamp
    * lastRenewedTime `string`: Timestamp when the domain was renewed last time
    * managedHostNames `array`: All hostnames derived from the domain and assigned to Azure resources
      * items [HostName](#hostname)
    * nameServers `array`: Name servers
      * items `string`
    * privacy `boolean`: If true then domain privacy is enabled for this domain
    * provisioningState `string` (values: Succeeded, Failed, Canceled, InProgress, Deleting): Domain provisioning state
    * readyForDnsRecordManagement `boolean`: If true then Azure can assign this domain to Web Apps. This value will be true if domain registration status is active and it is hosted on name servers Azure has programmatic access to
    * registrationStatus `string` (values: Active, Awaiting, Cancelled, Confiscated, Disabled, Excluded, Expired, Failed, Held, Locked, Parked, Pending, Reserved, Reverted, Suspended, Transferred, Unknown, Unlocked, Unparked, Updated, JsonConverterFailed): Domain registration status
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### DomainAvailablilityCheckResult
* DomainAvailablilityCheckResult `object`: Domain availablility check result
  * available `boolean`: If true then domain can be purchased using CreateDomain Api
  * domainType `string` (values: Regular, SoftDeleted): Domain type
  * name `string`: Name of the domain

### DomainCollection
* DomainCollection `object`: Collection of domains
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [Domain](#domain)

### DomainControlCenterSsoRequest
* DomainControlCenterSsoRequest `object`: Single sign on request information for domain management
  * postParameterKey `string`: Post parameter key
  * postParameterValue `string`: Post parameter value. Client should use 'application/x-www-form-urlencoded' encoding for this value.
  * url `string`: Url where the single sign on request is to be made

### DomainPurchaseConsent
* DomainPurchaseConsent `object`: Domain purchase consent object representing acceptance of applicable legal agreements
  * agreedAt `string`: Timestamp when the agreements were accepted
  * agreedBy `string`: Client IP address
  * agreementKeys `array`: List of applicable legal agreement keys. This list can be retrieved using ListLegalAgreements Api under TopLevelDomain resource
    * items `string`

### DomainRecommendationSearchParameters
* DomainRecommendationSearchParameters `object`: Domain recommendation search parameters
  * keywords `string`: Keywords to be used for generating domain recommendations
  * maxDomainRecommendations `integer`: Maximum number of recommendations

### DomainRegistrationInput
* DomainRegistrationInput `object`: Domain registration input for validation Api
  * properties `object`
    * autoRenew `boolean`: If true then domain will renewed automatically
    * consent [DomainPurchaseConsent](#domainpurchaseconsent)
    * contactAdmin [Contact](#contact)
    * contactBilling [Contact](#contact)
    * contactRegistrant [Contact](#contact)
    * contactTech [Contact](#contact)
    * createdTime `string`: Domain creation timestamp
    * domainNotRenewableReasons `array`: Reasons why domain is not renewable
      * items `string` (values: RegistrationStatusNotSupportedForRenewal, ExpirationNotInRenewalTimeRange, SubscriptionNotActive)
    * expirationTime `string`: Domain expiration timestamp
    * lastRenewedTime `string`: Timestamp when the domain was renewed last time
    * managedHostNames `array`: All hostnames derived from the domain and assigned to Azure resources
      * items [HostName](#hostname)
    * name `string`: Name of the domain
    * nameServers `array`: Name servers
      * items `string`
    * privacy `boolean`: If true then domain privacy is enabled for this domain
    * provisioningState `string` (values: Succeeded, Failed, Canceled, InProgress, Deleting): Domain provisioning state
    * readyForDnsRecordManagement `boolean`: If true then Azure can assign this domain to Web Apps. This value will be true if domain registration status is active and it is hosted on name servers Azure has programmatic access to
    * registrationStatus `string` (values: Active, Awaiting, Cancelled, Confiscated, Disabled, Excluded, Expired, Failed, Held, Locked, Parked, Pending, Reserved, Reverted, Suspended, Transferred, Unknown, Unlocked, Unparked, Updated, JsonConverterFailed): Domain registration status
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### EnabledConfig
* EnabledConfig `object`: Enabled configuration
  * enabled `boolean`: Enabled

### Experiments
* Experiments `object`: Class containing Routing in production experiments
  * rampUpRules `array`: List of {Microsoft.Web.Hosting.Administration.RampUpRule} objects.
    * items [RampUpRule](#rampuprule)

### FileSystemApplicationLogsConfig
* FileSystemApplicationLogsConfig `object`: Application logs to file system configuration
  * level `string` (values: Off, Verbose, Information, Warning, Error): Log level

### FileSystemHttpLogsConfig
* FileSystemHttpLogsConfig `object`: Http logs to file system configuration
  * enabled `boolean`: Enabled
  * retentionInDays `integer`: Retention in days.
  * retentionInMb `integer`: Maximum size in megabytes that http log files can use.

### GeoRegion
* GeoRegion `object`: Geographical region
  * properties `object`
    * description `string`: Region description
    * displayName `string`: Display name for region
    * name `string`: Region name
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### GeoRegionCollection
* GeoRegionCollection `object`: Collection of geo regions
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [GeoRegion](#georegion)

### HandlerMapping
* HandlerMapping `object`: The IIS handler mappings used to define which handler processes HTTP requests with certain extension. 
  * arguments `string`: Command-line arguments to be passed to the script processor.
  * extension `string`: Requests with this extension will be handled using the specified FastCGI application.
  * scriptProcessor `string`: The absolute path to the FastCGI application.

### HostName
* HostName `object`: Details of a hostname derived from a domain
  * azureResourceName `string`: Name of the Azure resource the hostname is assigned to. If it is assigned to a traffic manager then it will be the traffic manager name otherwise it will be the website name
  * azureResourceType `string` (values: Website, TrafficManager): Type of the Azure resource the hostname is assigned to
  * customHostNameDnsRecordType `string` (values: CName, A): Type of the Dns record
  * hostNameType `string` (values: Verified, Managed): Type of the hostname
  * name `string`: Name of the hostname
  * siteNames `array`: List of sites the hostname is assigned to. This list will have more than one site only if the hostname is pointing to a Traffic Manager
    * items `string`

### HostNameBinding
* HostNameBinding `object`: A host name binding object
  * properties `object`
    * azureResourceName `string`: Azure resource name
    * azureResourceType `string` (values: Website, TrafficManager): Azure resource type
    * customHostNameDnsRecordType `string` (values: CName, A): Custom DNS record type
    * domainId `string`: Fully qualified ARM domain resource URI
    * hostNameType `string` (values: Verified, Managed): Host name type
    * name `string`: Hostname
    * siteName `string`: Web app name
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### HostNameBindingCollection
* HostNameBindingCollection `object`: Collection of host name bindings
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [HostNameBinding](#hostnamebinding)

### HostNameSslState
* HostNameSslState `object`: Object that represents a SSL-enabled host name.
  * name `string`: Host name
  * sslState **required** `string` (values: Disabled, SniEnabled, IpBasedEnabled): SSL type
  * thumbprint `string`: SSL cert thumbprint
  * toUpdate `boolean`: Set this flag to update existing host name
  * virtualIP `string`: Virtual IP address assigned to the host name if IP based SSL is enabled

### HostingEnvironment
* HostingEnvironment `object`: Description of an hostingEnvironment (App Service Environment)
  * properties `object`
    * allowedMultiSizes `string`: List of comma separated strings describing which VM sizes are allowed for front-ends
    * allowedWorkerSizes `string`: List of comma separated strings describing which VM sizes are allowed for workers
    * apiManagementAccountId `string`: Api Management Account associated with this Hosting Environment
    * clusterSettings `array`: Custom settings for changing the behavior of the hosting environment
      * items [NameValuePair](#namevaluepair)
    * databaseEdition `string`: Edition of the metadata database for the hostingEnvironment (App Service Environment) e.g. "Standard"
    * databaseServiceObjective `string`: Service objective of the metadata database for the hostingEnvironment (App Service Environment) e.g. "S0"
    * dnsSuffix `string`: DNS suffix of the hostingEnvironment (App Service Environment)
    * environmentCapacities `array`: Current total, used, and available worker capacities
      * items [StampCapacity](#stampcapacity)
    * environmentIsHealthy `boolean`: True/false indicating whether the hostingEnvironment (App Service Environment) is healthy
    * environmentStatus `string`: Detailed message about with results of the last check of the hostingEnvironment (App Service Environment)
    * internalLoadBalancingMode `string` (values: None, Web, Publishing): Specifies which endpoints to serve internally in the hostingEnvironment's (App Service Environment) VNET
    * ipsslAddressCount `integer`: Number of IP SSL addresses reserved for this hostingEnvironment (App Service Environment)
    * lastAction `string`: Last deployment action on this hostingEnvironment (App Service Environment)
    * lastActionResult `string`: Result of the last deployment action on this hostingEnvironment (App Service Environment)
    * location `string`: Location of the hostingEnvironment (App Service Environment), e.g. "West US"
    * maximumNumberOfMachines `integer`: Maximum number of VMs in this hostingEnvironment (App Service Environment)
    * multiRoleCount `integer`: Number of front-end instances
    * multiSize `string`: Front-end VM size, e.g. "Medium", "Large"
    * name `string`: Name of the hostingEnvironment (App Service Environment)
    * networkAccessControlList `array`: Access control list for controlling traffic to the hostingEnvironment (App Service Environment)
      * items [NetworkAccessControlEntry](#networkaccesscontrolentry)
    * provisioningState `string` (values: Succeeded, Failed, Canceled, InProgress, Deleting): Provisioning state of the hostingEnvironment (App Service Environment)
    * resourceGroup `string`: Resource group of the hostingEnvironment (App Service Environment)
    * status **required** `string` (values: Preparing, Ready, Scaling, Deleting): Current status of the hostingEnvironment (App Service Environment)
    * subscriptionId `string`: Subscription of the hostingEnvironment (App Service Environment)
    * suspended `boolean`: True/false indicating whether the hostingEnvironment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
    * upgradeDomains `integer`: Number of upgrade domains of this hostingEnvironment (App Service Environment)
    * vipMappings `array`: Description of IP SSL mapping for this hostingEnvironment (App Service Environment)
      * items [VirtualIPMapping](#virtualipmapping)
    * virtualNetwork [VirtualNetworkProfile](#virtualnetworkprofile)
    * vnetName `string`: Name of the hostingEnvironment's (App Service Environment) virtual network
    * vnetResourceGroupName `string`: Resource group of the hostingEnvironment's (App Service Environment) virtual network
    * vnetSubnetName `string`: Subnet of the hostingEnvironment's (App Service Environment) virtual network
    * workerPools `array`: Description of worker pools with worker size ids, VM sizes, and number of workers in each pool
      * items [WorkerPool](#workerpool)
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### HostingEnvironmentCollection
* HostingEnvironmentCollection `object`: Collection of hosting environments (App Service Environments)
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [HostingEnvironment](#hostingenvironment)

### HostingEnvironmentDiagnostics
* HostingEnvironmentDiagnostics `object`: Diagnostics for a hosting environment (App Service Environment)
  * diagnosicsOutput `string`: Diagnostics output
  * name `string`: Name/identifier of the diagnostics

### HostingEnvironmentProfile
* HostingEnvironmentProfile `object`: Specification for a hostingEnvironment (App Service Environment) to use for this resource
  * id `string`: Resource id of the hostingEnvironment (App Service Environment)
  * name `string`: Name of the hostingEnvironment (App Service Environment) (read only)
  * type `string`: Resource type of the hostingEnvironment (App Service Environment) (read only)

### HttpLogsConfig
* HttpLogsConfig `object`: Http logs configuration
  * azureBlobStorage [AzureBlobStorageHttpLogsConfig](#azureblobstoragehttplogsconfig)
  * fileSystem [FileSystemHttpLogsConfig](#filesystemhttplogsconfig)

### IpSecurityRestriction
* IpSecurityRestriction `object`: Represents an ip security restriction on a web app.
  * ipAddress `string`: IP address the security restriction is valid for
  * subnetMask `string`: Subnet mask for the range of IP addresses the restriction is valid for

### KeyValuePair[String,String]
* KeyValuePair[String,String] `object`
  * key `string`
  * value `string`

### LocalizableString
* LocalizableString `object`: LocalizableString object containing the name and a localized value.
  * localizedValue `string`: Localized name
  * value `string`: Non localized name

### ManagedHostingEnvironment
* ManagedHostingEnvironment `object`: Description of a managed hosting environment
  * properties `object`
    * apiManagementAccount `string`: Resource id of the api management account associated with this managed hosting environment (read only)
    * dnsSuffix `string`: DNS suffix of the managed hosting environment
    * environmentIsHealthy `boolean`: True/false indicating whether the managed hosting environment is healthy
    * environmentStatus `string`: Detailed message about with results of the last check of the managed hosting environment
    * ipsslAddressCount `integer`: Number of ip ssl addresses reserved for the managed hosting environment
    * location `string`: Location of the managed hosting environment e.g. "West US"
    * name `string`: Name of the managed hosting environment
    * resourceGroup `string`: Resource group of the managed hosting environment (read only)
    * status **required** `string` (values: Preparing, Ready, Deleting): Current status of the managed hosting environment
    * subscriptionId `string`: Subscription of the managed hosting environment (read only)
    * suspended `boolean`: True/false indicating whether the managed hosting environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
    * virtualNetwork [VirtualNetworkProfile](#virtualnetworkprofile)
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ManagedHostingEnvironmentCollection
* ManagedHostingEnvironmentCollection `object`: Collection of managed hosting environments
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [ManagedHostingEnvironment](#managedhostingenvironment)

### MetricAvailabilily
* MetricAvailabilily `object`: Class representing metrics availability and retention
  * retention `string`: Retention period for the current {Microsoft.Web.Hosting.Administration.MetricAvailabilily.TimeGrain}
  * timeGrain `string`: Time grain

### MetricDefinition
* MetricDefinition `object`: Class representing metadata for the metrics
  * properties `object`
    * displayName `string`: Friendly name shown in the UI
    * metricAvailabilities `array`: List of time grains supported for the metric together with retention period
      * items [MetricAvailabilily](#metricavailabilily)
    * name `string`: Name of the metric
    * primaryAggregationType `string`: Primary aggregation type
    * unit `string`: Unit of the metric
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### MetricDefinitionCollection
* MetricDefinitionCollection `object`: Collection of metric definitions
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [MetricDefinition](#metricdefinition)

### NameIdentifier
* NameIdentifier `object`: Identifies an object
  * name `string`: Name of the object

### NameIdentifierCollection
* NameIdentifierCollection `object`: Collection of domain name identifiers
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [NameIdentifier](#nameidentifier)

### NameValuePair
* NameValuePair `object`: Name value pair
  * name `string`: Pair name
  * value `string`: Pair value

### NetworkAccessControlEntry
* NetworkAccessControlEntry `object`
  * action `string` (values: Permit, Deny)
  * description `string`
  * order `integer`
  * remoteSubnet `string`

### NetworkFeatures
* NetworkFeatures `object`: This is an object used to store a full view of network features (presently VNET integration and Hybrid Connections)
  * properties `object`
    * hybridConnections `array`: The Hybrid Connections Summary view
      * items [RelayServiceConnectionEntity](#relayserviceconnectionentity)
    * virtualNetworkConnection [VnetInfo](#vnetinfo)
    * virtualNetworkName `string`: The Vnet Name
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### Object
* Object `object`

### PremierAddOnRequest
* PremierAddOnRequest `object`
  * location `string`: Geo region resource belongs to e.g. SouthCentralUS, SouthEastAsia
  * plan [ArmPlan](#armplan)
  * properties [Object](#object)
  * sku [SkuDescription](#skudescription)
  * tags `object`: Tags associated with resource

### RampUpRule
* RampUpRule `object`: Routing rules for ramp up testing. This rule allows to redirect static traffic % to a slot or to gradually change routing % based on performance
  * actionHostName `string`: Hostname of a slot to which the traffic will be redirected if decided to. E.g. mysite-stage.azurewebsites.net
  * changeDecisionCallbackUrl `string`: Custom decision algorithm can be provided in TiPCallback site extension which Url can be specified. See TiPCallback site extension for the scaffold and contracts.
  * changeIntervalInMinutes `integer`: [Optional] Specifies interval in minutes to reevaluate ReroutePercentage
  * changeStep `number`: [Optional] In auto ramp up scenario this is the step to add/remove from {Microsoft.Web.Hosting.Administration.RampUpRule.ReroutePercentage} until it reaches 
  * maxReroutePercentage `number`: [Optional] Specifies upper boundary below which ReroutePercentage will stay.
  * minReroutePercentage `number`: [Optional] Specifies lower boundary above which ReroutePercentage will stay.
  * name `string`: Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment.
  * reroutePercentage `number`: Percentage of the traffic which will be redirected to {Microsoft.Web.Hosting.Administration.RampUpRule.ActionHostName}

### Recommendation
* Recommendation `object`: Represents a recommendation result generated by the recommendation engine
  * actionName `string`: Name of action recommended by this object.
  * channels **required** `string` (values: Notification, Api, Email, All): List of channels that this recommendation can apply.
  * creationTime `string`: Timestamp when this instance was created.
  * displayName `string`: UI friendly name of the rule (may not be unique)
  * enabled `integer`: On/off flag indicating the rule is currently enabled or disabled.
  * endTime `string`: The end time of a range that the recommendation refers to.
  * level **required** `string` (values: Critical, Warning, Information, NonUrgentSuggestion): Level indicating how critical this recommendation can impact.
  * message `string`: Localized text of recommendation, good for UI.
  * nextNotificationTime `string`: When to notify this recommendation next. Null means that this will never be notified anymore.
  * notificationExpirationTime `string`: Date and time when this notification expires.
  * notifiedTime `string`: Last timestamp this instance was actually notified. Null means that this recommendation hasn't been notified yet.
  * recommendationId `string`: A GUID value that each recommendation object is associated with.
  * resourceId `string`: Full ARM resource ID string that this recommendation object is associated with.
  * resourceScope `string`: Name of a resource type this recommendation applies, e.g. Subscription, ServerFarm, Site.
  * ruleName `string`: Unique name of the rule
  * score `number`: A metric value measured by the rule.
  * startTime `string`: The beginning time of a range that the recommendation refers to.
  * tags `array`: The list of category tags that this recommendation belongs to.
    * items `string`

### RecommendationRule
* RecommendationRule `object`: Represents a recommendation rule that the recommendation engine can perform
  * actionName `string`: Name of action that is recommended by this rule in string
  * channels **required** `string` (values: Notification, Api, Email, All): List of available channels that this rule applies.
  * description `string`: Localized detailed description of the rule
  * displayName `string`: UI friendly name of the rule
  * enabled `integer`: On/off flag indicating the rule is currently enabled or disabled.
  * level **required** `string` (values: Critical, Warning, Information, NonUrgentSuggestion): Level of impact indicating how critical this rule is.
  * message `string`: Localized name of the rule (Good for UI)
  * name `string`: Unique name of the rule
  * recommendationId `string`: Recommendation ID of an associated recommendation object tied to the rule, if exists.
  * tags `array`: An array of category tags that the rule contains.
    * items `string`

### ReissueCertificateOrderRequest
* ReissueCertificateOrderRequest `object`: Class representing certificate reissue request
  * properties `object`
    * delayExistingRevokeInHours `integer`: Delay in hours to revoke existing certificate after the new certificate is issued
    * keySize `integer`: Certificate Key Size
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### RelayServiceConnectionEntity
* RelayServiceConnectionEntity `object`: Class that represents a BizTalk Hybrid Connection
  * properties `object`
    * biztalkUri `string`
    * entityConnectionString `string`
    * entityName `string`
    * hostname `string`
    * port `integer`
    * resourceConnectionString `string`
    * resourceType `string`
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### RenewCertificateOrderRequest
* RenewCertificateOrderRequest `object`: Class representing certificate renew request
  * properties `object`
    * keySize `integer`: Certificate Key Size
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### RequestsBasedTrigger
* RequestsBasedTrigger `object`: RequestsBasedTrigger
  * count `integer`: Count
  * timeInterval `string`: TimeInterval

### Resource
* Resource `object`
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ResourceMetric
* ResourceMetric `object`: Object representing a metric for any resource
  * endTime `string`: Metric end time
  * metricValues `array`: Metric values
    * items [ResourceMetricValue](#resourcemetricvalue)
  * name [ResourceMetricName](#resourcemetricname)
  * properties `array`: Properties
    * items [KeyValuePair[String,String]](#keyvaluepair[string,string])
  * resourceId `string`: Metric resource Id
  * startTime `string`: Metric start time
  * timeGrain `string`: Metric granularity. E.g PT1H, PT5M, P1D
  * unit `string`: Metric unit

### ResourceMetricCollection
* ResourceMetricCollection `object`: Collection of metric responses
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [ResourceMetric](#resourcemetric)

### ResourceMetricName
* ResourceMetricName `object`: Name of a metric for any resource
  * localizedValue `string`: Localized metric name value
  * value `string`: metric name value

### ResourceMetricValue
* ResourceMetricValue `object`: Value of resource metric
  * average `number`: Value average
  * count `number`: Value count
  * maximum `number`: Value maximum
  * minimum `number`: Value minimum
  * timeStamp `string`: Value timestamp
  * total `number`: Value total

### ResourceNameAvailability
* ResourceNameAvailability `object`: Describes if a resource name is available
  * message `string`
  * nameAvailable `boolean`: True indicates name is valid and available.  False indicates the name is invalid, unavailable, or both.
  * reason `string`: Required if nameAvailable is false. 'Invalid' indicates the name provided does not match Azure WebApp service’s naming requirements. 'AlreadyExists' indicates that the name is already in use and is therefore unavailable.

### ResourceNameAvailabilityRequest
* ResourceNameAvailabilityRequest `object`: Resource name availability request content
  * isFqdn `boolean`: Is fully qualified domain name
  * name `string`: Resource name to verify
  * type `string`: Resource type used for verification

### RestoreRequest
* RestoreRequest `object`: Description of a restore request
  * properties `object`
    * adjustConnectionStrings `boolean`: Gets or sets a flag showing if SiteConfig.ConnectionStrings should be set in new site
    * blobName `string`: Name of a blob which contains the backup
    * databases `array`: Collection of databases which should be restored. This list has to match the list of databases included in the backup.
      * items [DatabaseBackupSetting](#databasebackupsetting)
    * hostingEnvironment `string`: App Service Environment name, if needed (only when restoring a site to an App Service Environment)
    * ignoreConflictingHostNames `boolean`: Changes a logic when restoring a site with custom domains. If "true", custom domains are removed automatically. If "false", custom domains are added to 
    * operationType **required** `string` (values: Default, Clone, Relocation): Operation type
    * overwrite `boolean`: True if the restore operation can overwrite target site. "True" needed if trying to restore over an existing site.
    * siteName `string`: Name of a site (Web App)
    * storageAccountUrl `string`: SAS URL to the container
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### RestoreResponse
* RestoreResponse `object`: Response for a restore site request
  * properties `object`
    * operationId `string`: When server starts the restore process, it will return an OperationId identifying that particular restore operation
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### RoutingRule
* RoutingRule `object`: Routing rules for TiP
  * name `string`: Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment.

### ServerFarmCollection
* ServerFarmCollection `object`: Collection of serverfarms
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [ServerFarmWithRichSku](#serverfarmwithrichsku)

### ServerFarmWithRichSku
* ServerFarmWithRichSku `object`: App Service Plan Model
  * properties `object`
    * adminSiteName `string`: App Service Plan administration site
    * geoRegion `string`: Geographical location for the App Service Plan
    * hostingEnvironmentProfile [HostingEnvironmentProfile](#hostingenvironmentprofile)
    * maximumNumberOfWorkers `integer`: Maximum number of instances that can be assigned to this App Service Plan
    * name `string`: Name for the App Service Plan
    * numberOfSites `integer`: Number of web apps assigned to this App Service Plan
    * perSiteScaling `boolean`: If True apps assigned to this App Service Plan can be scaled independently
    * reserved `boolean`: Enables creation of a Linux App Service Plan
    * resourceGroup `string`: Resource group of the server farm
    * status **required** `string` (values: Ready, Pending): App Service Plan Status
    * subscription `string`: App Service Plan Subscription
    * workerTierName `string`: Target worker tier assigned to the App Service Plan
  * sku [SkuDescription](#skudescription)
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### Site
* Site `object`: Represents a web app
  * properties `object`
    * availabilityState **required** `string` (values: Normal, Limited, DisasterRecoveryMode): Management information availability state for the web app. Possible values are Normal or Limited. 
    * clientAffinityEnabled `boolean`: Specifies if the client affinity is enabled when load balancing http request for multiple instances of the web app
    * clientCertEnabled `boolean`: Specifies if the client certificate is enabled for the web app
    * cloningInfo [CloningInfo](#cloninginfo)
    * containerSize `integer`: Size of a function container
    * defaultHostName `string`: Default hostname of the web app
    * enabled `boolean`: True if the site is enabled; otherwise, false. Setting this  value to false disables the site (takes the site off line).
    * enabledHostNames `array`: Hostnames for the web app that are enabled. Hostnames need to be assigned and enabled. If some hostnames are assigned but not enabled
      * items `string`
    * gatewaySiteName `string`: Name of gateway app associated with web app
    * hostNameSslStates `array`: Hostname SSL states are  used to manage the SSL bindings for site's hostnames.
      * items [HostNameSslState](#hostnamesslstate)
    * hostNames `array`: Hostnames associated with web app
      * items `string`
    * hostNamesDisabled `boolean`: Specifies if the public hostnames are disabled the web app.
    * hostingEnvironmentProfile [HostingEnvironmentProfile](#hostingenvironmentprofile)
    * isDefaultContainer `boolean`: Site is a default container
    * lastModifiedTimeUtc `string`: Last time web app was modified in UTC
    * maxNumberOfWorkers `integer`: Maximum number of workers
    * microService `string`
    * name `string`: Name of web app
    * outboundIpAddresses `string`: List of comma separated IP addresses that this web app uses for outbound connections. Those can be used when configuring firewall rules for databases accessed by this web app.
    * premiumAppDeployed `boolean`: If set indicates whether web app is deployed as a premium app
    * repositorySiteName `string`: Name of repository site
    * resourceGroup `string`: Resource group web app belongs to
    * scmSiteAlsoStopped `boolean`: If set indicates whether to stop SCM (KUDU) site when the web app is stopped. Default is false.
    * serverFarmId `string`
    * siteConfig [SiteConfig](#siteconfig)
    * state `string`: State of the web app
    * targetSwapSlot `string`: Read-only property that specifies which slot this app will swap into
    * trafficManagerHostNames `array`: Read-only list of Azure Traffic manager hostnames associated with web app
      * items `string`
    * usageState **required** `string` (values: Normal, Exceeded): State indicating whether web app has exceeded its quota usage
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### SiteAuthSettings
* SiteAuthSettings `object`: Configuration settings for the Azure App Service Authentication / Authorization feature.
  * aadClientId `string`
  * additionalLoginParams `array`: Gets or sets a list of login parameters to send to the OpenID Connect authorization endpoint when
    * items `string`
  * allowedAudiences `array`: Gets or sets a list of allowed audience values to consider when validating JWTs issued by 
    * items `string`
  * allowedExternalRedirectUrls `array`: Gets or sets a collection of external URLs that can be redirected to as part of logging in
    * items `string`
  * clientId `string`: Gets or sets the Client ID of this relying party application, known as the client_id.
  * clientSecret `string`: Gets or sets the Client Secret of this relying party application (in Azure Active Directory, this is also referred to as the Key).
  * defaultProvider `string` (values: AzureActiveDirectory, Facebook, Google, MicrosoftAccount, Twitter): Gets or sets the default authentication provider to use when multiple providers are configured.
  * enabled `boolean`: Gets or sets a value indicating whether the Authentication / Authorization feature is enabled for the current app.
  * facebookAppId `string`: Gets or sets the App ID of the Facebook app used for login.
  * facebookAppSecret `string`: Gets or sets the App Secret of the Facebook app used for Facebook Login.
  * facebookOAuthScopes `array`: Gets or sets the OAuth 2.0 scopes that will be requested as part of Facebook Login authentication.
    * items `string`
  * googleClientId `string`: Gets or sets the OpenID Connect Client ID for the Google web application.
  * googleClientSecret `string`: Gets or sets the client secret associated with the Google web application.
  * googleOAuthScopes `array`: Gets or sets the OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication.
    * items `string`
  * httpApiPrefixPath `string`: Gets or sets the relative path prefix used by platform HTTP APIs.
  * issuer `string`: Gets or sets the OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.
  * microsoftAccountClientId `string`: Gets or sets the OAuth 2.0 client ID that was created for the app used for authentication.
  * microsoftAccountClientSecret `string`: Gets or sets the OAuth 2.0 client secret that was created for the app used for authentication.
  * microsoftAccountOAuthScopes `array`: Gets or sets the OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication.
    * items `string`
  * openIdIssuer `string`
  * tokenRefreshExtensionHours `number`: Gets or sets the number of hours after session token expiration that a session token can be used to
  * tokenStoreEnabled `boolean`: Gets or sets a value indicating whether to durably store platform-specific security tokens
  * twitterConsumerKey `string`: Gets or sets the OAuth 1.0a consumer key of the Twitter application used for sign-in.
  * twitterConsumerSecret `string`: Gets or sets the OAuth 1.0a consumer secret of the Twitter application used for sign-in.
  * unauthenticatedClientAction `string` (values: RedirectToLoginPage, AllowAnonymous): Gets or sets the action to take when an unauthenticated client attempts to access the app.

### SiteCloneability
* SiteCloneability `object`: Represents whether or not a web app is cloneable
  * blockingCharacteristics `array`: List of blocking application characteristics
    * items [SiteCloneabilityCriterion](#sitecloneabilitycriterion)
  * blockingFeatures `array`: List of features enabled on web app that prevent cloning
    * items [SiteCloneabilityCriterion](#sitecloneabilitycriterion)
  * result **required** `string` (values: Cloneable, PartiallyCloneable, NotCloneable): Name of web app
  * unsupportedFeatures `array`: List of features enabled on web app that are non-blocking but cannot be cloned. The web app can still be cloned
    * items [SiteCloneabilityCriterion](#sitecloneabilitycriterion)

### SiteCloneabilityCriterion
* SiteCloneabilityCriterion `object`: Represents a site cloneability criterion
  * description `string`: Description of criterion
  * name `string`: Name of criterion

### SiteCollection
* SiteCollection `object`: Collection of sites
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [Site](#site)

### SiteConfig
* SiteConfig `object`: Configuration of Azure web site
  * properties `object`
    * alwaysOn `boolean`: Always On
    * apiDefinition [ApiDefinitionInfo](#apidefinitioninfo)
    * appCommandLine `string`: App Command Line to launch
    * appSettings `array`: Application Settings
      * items [NameValuePair](#namevaluepair)
    * autoHealEnabled `boolean`: Auto heal enabled
    * autoHealRules [AutoHealRules](#autohealrules)
    * autoSwapSlotName `string`: Auto swap slot name
    * connectionStrings `array`: Connection strings
      * items [ConnStringInfo](#connstringinfo)
    * cors [CorsSettings](#corssettings)
    * defaultDocuments `array`: Default documents
      * items `string`
    * detailedErrorLoggingEnabled `boolean`: Detailed error logging enabled
    * documentRoot `string`: Document root
    * experiments [Experiments](#experiments)
    * handlerMappings `array`: Handler mappings
      * items [HandlerMapping](#handlermapping)
    * httpLoggingEnabled `boolean`: HTTP logging Enabled
    * ipSecurityRestrictions `array`: Ip Security restrictions
      * items [IpSecurityRestriction](#ipsecurityrestriction)
    * javaContainer `string`: Java container
    * javaContainerVersion `string`: Java container version
    * javaVersion `string`: Java version
    * limits [SiteLimits](#sitelimits)
    * loadBalancing `string` (values: WeightedRoundRobin, LeastRequests, LeastResponseTime, WeightedTotalTraffic, RequestHash): Site load balancing
    * localMySqlEnabled `boolean`: Local mysql enabled
    * logsDirectorySizeLimit `integer`: HTTP Logs Directory size limit
    * managedPipelineMode `string` (values: Integrated, Classic): Managed pipeline mode
    * metadata `array`: Site Metadata
      * items [NameValuePair](#namevaluepair)
    * netFrameworkVersion `string`: Net Framework Version
    * nodeVersion `string`: Version of Node
    * numberOfWorkers `integer`: Number of workers
    * phpVersion `string`: Version of PHP
    * publishingPassword `string`: Publishing password
    * publishingUsername `string`: Publishing user name
    * pythonVersion `string`: Version of Python
    * remoteDebuggingEnabled `boolean`: Remote Debugging Enabled
    * remoteDebuggingVersion `string`: Remote Debugging Version
    * requestTracingEnabled `boolean`: Enable request tracing
    * requestTracingExpirationTime `string`: Request tracing expiration time
    * scmType `string`: SCM type
    * tracingOptions `string`: Tracing options
    * use32BitWorkerProcess `boolean`: Use 32 bit worker process
    * virtualApplications `array`: Virtual applications
      * items [VirtualApplication](#virtualapplication)
    * vnetName `string`: Vnet name
    * webSocketsEnabled `boolean`: Web socket enabled.
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### SiteInstance
* SiteInstance `object`: Instance of a web app
  * properties `object`
    * name `string`: Name of instance
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### SiteInstanceCollection
* SiteInstanceCollection `object`: Collection of site instances
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [SiteInstance](#siteinstance)

### SiteLimits
* SiteLimits `object`: Represents metric limits set on a web app.
  * maxDiskSizeInMb `integer`: Maximum allowed disk size usage in MB
  * maxMemoryInMb `integer`: Maximum allowed memory usage in MB
  * maxPercentageCpu `number`: Maximum allowed CPU usage percentage

### SiteLogsConfig
* SiteLogsConfig `object`: Configuration of Azure web site
  * properties `object`
    * applicationLogs [ApplicationLogsConfig](#applicationlogsconfig)
    * detailedErrorMessages [EnabledConfig](#enabledconfig)
    * failedRequestsTracing [EnabledConfig](#enabledconfig)
    * httpLogs [HttpLogsConfig](#httplogsconfig)
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### SiteProperties
* SiteProperties `object`
  * appSettings `array`
    * items [NameValuePair](#namevaluepair)
  * metadata `array`
    * items [NameValuePair](#namevaluepair)
  * properties `array`
    * items [NameValuePair](#namevaluepair)

### SiteSourceControl
* SiteSourceControl `object`: Describes the source control configuration for web app
  * properties `object`
    * branch `string`: Name of branch to use for deployment
    * deploymentRollbackEnabled `boolean`: Whether to manual or continuous integration
    * isManualIntegration `boolean`: Whether to manual or continuous integration
    * isMercurial `boolean`: Mercurial or Git repository type
    * repoUrl `string`: Repository or source control url
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### SkuCapacity
* SkuCapacity `object`: Description of the App Service Plan scale options
  * default `integer`: Default number of Workers for this App Service Plan SKU
  * maximum `integer`: Maximum number of Workers for this App Service Plan SKU
  * minimum `integer`: Minimum number of Workers for this App Service Plan SKU
  * scaleType `string`: Available scale configurations for an App Service Plan

### SkuDescription
* SkuDescription `object`: Describes a sku for a scalable resource
  * capacity `integer`: Current number of instances assigned to the resource
  * family `string`: Family code of the resource sku
  * name `string`: Name of the resource sku
  * size `string`: Size specifier of the resource sku
  * tier `string`: Service Tier of the resource sku

### SkuInfo
* SkuInfo `object`: Sku discovery information
  * capacity [SkuCapacity](#skucapacity)
  * resourceType `string`: Resource type that this sku applies to
  * sku [SkuDescription](#skudescription)

### SkuInfoCollection
* SkuInfoCollection `object`: Collection of SkuInfos
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [SkuInfo](#skuinfo)

### SlotConfigNames
* SlotConfigNames `object`: Class containing names for connection strings and application settings to be marked as sticky to the slot 
  * appSettingNames `array`: List of application settings names
    * items `string`
  * connectionStringNames `array`: List of connection string names
    * items `string`

### SlotConfigNamesResource
* SlotConfigNamesResource `object`: Slot Config names azure resource
  * properties `object`
    * appSettingNames `array`: List of application settings names
      * items `string`
    * connectionStringNames `array`: List of connection string names
      * items `string`
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### SlotDifference
* SlotDifference `object`: An object describing the difference in setting values between two web app slots
  * properties `object`
    * description `string`: Description of the difference
    * diffRule `string`: Rule that describes how to process the difference in settings during web app slot swap.
    * settingName `string`: Name of the setting
    * settingType `string`: The type of the settings: General, AppSetting or ConnectionString
    * type `string`: Indicates the type of the difference: Information, Warning or Error.
    * valueInCurrentSlot `string`: Value of the setting in the current web app slot
    * valueInTargetSlot `string`: Value of the setting in the target web app slot
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### SlotDifferenceCollection
* SlotDifferenceCollection `object`: Collection of Slot Differences
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [SlotDifference](#slotdifference)

### SlowRequestsBasedTrigger
* SlowRequestsBasedTrigger `object`: SlowRequestsBasedTrigger
  * count `integer`: Count
  * timeInterval `string`: TimeInterval
  * timeTaken `string`: TimeTaken

### SourceControl
* SourceControl `object`: Describes the Source Control OAuth Token
  * properties `object`
    * expirationTime `string`: OAuth Token Expiration
    * name `string`: Name or Source Control Type
    * refreshToken `string`: OAuth Refresh Token
    * token `string`: OAuth Access Token
    * tokenSecret `string`: OAuth Access Token Secret
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### SourceControlCollection
* SourceControlCollection `object`: Collection of source controls
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [SourceControl](#sourcecontrol)

### StampCapacity
* StampCapacity `object`: Class containing stamp capacity information
  * availableCapacity `integer`: Available capacity (# of machines, bytes of storage etc...)
  * computeMode `string` (values: Shared, Dedicated, Dynamic): Shared/Dedicated workers
  * excludeFromCapacityAllocation `boolean`: If true it includes basic sites
  * isApplicableForAllComputeModes `boolean`: Is capacity applicable for all sites?
  * name `string`: Name of the stamp
  * siteMode `string`: Shared or Dedicated
  * totalCapacity `integer`: Total capacity (# of machines, bytes of storage etc...)
  * unit `string`: Name of the unit
  * workerSize `string` (values: Default, Small, Medium, Large): Size of the machines
  * workerSizeId `integer`: Size Id of machines: 

### StampCapacityCollection
* StampCapacityCollection `object`: Collection of stamp capacities
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [StampCapacity](#stampcapacity)

### StatusCodesBasedTrigger
* StatusCodesBasedTrigger `object`: StatusCodeBasedTrigger
  * count `integer`: Count
  * status `integer`: HTTP status code
  * subStatus `integer`: SubStatus
  * timeInterval `string`: TimeInterval
  * win32Status `integer`: Win32 error code

### StringDictionary
* StringDictionary `object`: String dictionary resource
  * properties `object`: Settings
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### TldLegalAgreement
* TldLegalAgreement `object`: Represents a legal agreement for top level domain
  * agreementKey `string`: Unique identifier for the agreement
  * content `string`: Agreement details
  * title `string`: Agreement title
  * url `string`: Url where a copy of the agreement details is hosted

### TldLegalAgreementCollection
* TldLegalAgreementCollection `object`: Collection of Tld Legal Agreements
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [TldLegalAgreement](#tldlegalagreement)

### TopLevelDomain
* TopLevelDomain `object`: A top level domain object
  * properties `object`
    * name `string`: Name of the top level domain
    * privacy `boolean`: If true then the top level domain supports domain privacy
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### TopLevelDomainAgreementOption
* TopLevelDomainAgreementOption `object`: Options for retrieving the list of top level domain legal agreements
  * includePrivacy `boolean`: If true then the list of agreements will include agreements for domain privacy as well.

### TopLevelDomainCollection
* TopLevelDomainCollection `object`: Collection of Top Level Domains
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [TopLevelDomain](#topleveldomain)

### Usage
* Usage `object`: Class that represents usage of the quota resource.
  * properties `object`
    * computeMode `string` (values: Shared, Dedicated, Dynamic): ComputeMode used for this usage
    * currentValue `integer`: The current value of the resource counter
    * displayName `string`: Friendly name shown in the UI
    * limit `integer`: The resource limit
    * name `string`: Name of the quota
    * nextResetTime `string`: Next reset time for the resource counter
    * resourceName `string`: Name of the quota resource
    * siteMode `string`: SiteMode used for this usage
    * unit `string`: Units of measurement for the quota resource
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### UsageCollection
* UsageCollection `object`: Collection of usages
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [Usage](#usage)

### User
* User `object`: Represents user credentials used for publishing activity
  * properties `object`
    * name `string`: Username (internal)
    * publishingPassword `string`: Password used for publishing
    * publishingUserName `string`: Username used for publishing
    * scmUri `string`: Service Control Manager URI, including username and password
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### VirtualApplication
* VirtualApplication `object`
  * physicalPath `string`
  * preloadEnabled `boolean`
  * virtualDirectories `array`
    * items [VirtualDirectory](#virtualdirectory)
  * virtualPath `string`

### VirtualDirectory
* VirtualDirectory `object`
  * physicalPath `string`
  * virtualPath `string`

### VirtualIPMapping
* VirtualIPMapping `object`: Class that represents a VIP mapping
  * inUse `boolean`: Is VIP mapping in use
  * internalHttpPort `integer`: Internal HTTP port
  * internalHttpsPort `integer`: Internal HTTPS port
  * virtualIP `string`: Virtual IP address

### VirtualNetworkProfile
* VirtualNetworkProfile `object`: Specification for using a virtual network
  * id `string`: Resource id of the virtual network
  * name `string`: Name of the virtual network (read-only)
  * subnet `string`: Subnet within the virtual network
  * type `string`: Resource type of the virtual network (read-only)

### VnetGateway
* VnetGateway `object`: The VnetGateway contract. This is used to give the vnet gateway access to the VPN package.
  * properties `object`
    * vnetName `string`: The VNET name.
    * vpnPackageUri `string`: The URI where the Vpn package can be downloaded
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### VnetInfo
* VnetInfo `object`: VNETInfo contract. This contract is public and is a stripped down version of VNETInfoInternal
  * properties `object`
    * certBlob `string`: A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
    * certThumbprint `string`: The client certificate thumbprint
    * dnsServers `string`: Dns servers to be used by this VNET. This should be a comma-separated list of IP addresses.
    * resyncRequired `boolean`: Flag to determine if a resync is required
    * routes `array`: The routes that this virtual network connection uses.
      * items [VnetRoute](#vnetroute)
    * vnetResourceId `string`: The vnet resource id
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### VnetRoute
* VnetRoute `object`: VnetRoute contract used to pass routing information for a vnet.
  * properties `object`
    * endAddress `string`: The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
    * name `string`: The name of this route. This is only returned by the server and does not need to be set by the client.
    * routeType `string`: The type of route this is:
    * startAddress `string`: The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### WorkerPool
* WorkerPool `object`: Worker pool of a hostingEnvironment (App Service Environment)
  * properties `object`
    * computeMode `string` (values: Shared, Dedicated, Dynamic): Shared or dedicated web app hosting
    * instanceNames `array`: Names of all instances in the worker pool (read only)
      * items `string`
    * workerCount `integer`: Number of instances in the worker pool
    * workerSize `string`: VM size of the worker pool instances
    * workerSizeId `integer`: Worker size id for referencing this worker pool
  * sku [SkuDescription](#skudescription)
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### WorkerPoolCollection
* WorkerPoolCollection `object`: Collection of worker pools
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [WorkerPool](#workerpool)


