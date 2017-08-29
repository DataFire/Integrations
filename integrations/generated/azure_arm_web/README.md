# @datafire/azure_arm_web

Client library for WebSite Management Client

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_web
```

```js
let datafire = require('datafire');
let azure_arm_web = require('@datafire/azure_arm_web').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

azure_arm_web.Provider_GetPublishingUser({}).then(data => {
  console.log(data);
})
```

## Description
Use these APIs to manage Azure Websites resources through the Azure Resource Manager. All task operations conform to the HTTP/1.1 protocol specification and each operation returns an x-ms-request-id header that can be used to obtain information about the request. You must make sure that requests made to these resources are secure. For more information, see https://msdn.microsoft.com/en-us/library/azure/dn790557.aspx.

## Actions
### Provider_GetPublishingUser
Gets publishing user


```js
azure_arm_web.Provider_GetPublishingUser({
  "api-version": ""
}, context)
```

#### Parameters
* api-version (string) **required** - API Version

### Provider_UpdatePublishingUser
Updates publishing user


```js
azure_arm_web.Provider_UpdatePublishingUser({
  "requestMessage": {},
  "api-version": ""
}, context)
```

#### Parameters
* requestMessage (object) **required** - Represents user crendentials used for publishing activity
* api-version (string) **required** - API Version

### Provider_GetSourceControls
Gets the source controls available for Azure websites


```js
azure_arm_web.Provider_GetSourceControls({
  "api-version": ""
}, context)
```

#### Parameters
* api-version (string) **required** - API Version

### Provider_GetSourceControl
Gets source control token


```js
azure_arm_web.Provider_GetSourceControl({
  "sourceControlType": "",
  "api-version": ""
}, context)
```

#### Parameters
* sourceControlType (string) **required** - Type of source control
* api-version (string) **required** - API Version

### Provider_UpdateSourceControl
Updates source control token


```js
azure_arm_web.Provider_UpdateSourceControl({
  "sourceControlType": "",
  "requestMessage": {},
  "api-version": ""
}, context)
```

#### Parameters
* sourceControlType (string) **required** - Type of source control
* requestMessage (object) **required** - Describes the Source Control OAuth Token
* api-version (string) **required** - API Version

### GlobalCertificateOrder_GetAllCertificateOrders
Lists all domains in a subscription


```js
azure_arm_web.GlobalCertificateOrder_GetAllCertificateOrders({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### GlobalCertificateOrder_ValidateCertificatePurchaseInformation
Validate certificate purchase information


```js
azure_arm_web.GlobalCertificateOrder_ValidateCertificatePurchaseInformation({
  "certificateOrder": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* certificateOrder (object) **required** - Certificate purchase order
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### GlobalDomainRegistration_CheckDomainAvailability
Checks if a domain is available for registration


```js
azure_arm_web.GlobalDomainRegistration_CheckDomainAvailability({
  "identifier": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* identifier (object) **required** - Identifies an object
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### GlobalDomainRegistration_GetAllDomains
Lists all domains in a subscription


```js
azure_arm_web.GlobalDomainRegistration_GetAllDomains({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### GlobalDomainRegistration_GetDomainControlCenterSsoRequest
Generates a single sign on request for domain management portal


```js
azure_arm_web.GlobalDomainRegistration_GetDomainControlCenterSsoRequest({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### GlobalDomainRegistration_ListDomainRecommendations
Lists domain recommendations based on keywords


```js
azure_arm_web.GlobalDomainRegistration_ListDomainRecommendations({
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* parameters (object) **required** - Domain recommendation search parameters
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### TopLevelDomains_GetGetTopLevelDomains
Lists all top level domains supported for registration


```js
azure_arm_web.TopLevelDomains_GetGetTopLevelDomains({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### TopLevelDomains_GetTopLevelDomain
Gets details of a top level domain


```js
azure_arm_web.TopLevelDomains_GetTopLevelDomain({
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* name (string) **required** - Name of the top level domain
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### TopLevelDomains_ListTopLevelDomainAgreements
Lists legal agreements that user needs to accept before purchasing domain


```js
azure_arm_web.TopLevelDomains_ListTopLevelDomainAgreements({
  "name": "",
  "agreementOption": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* name (string) **required** - Name of the top level domain
* agreementOption (object) **required** - Options for retrieving the list of top level domain legal agreements
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### GlobalDomainRegistration_ValidateDomainPurchaseInformation
Validates domain registration information


```js
azure_arm_web.GlobalDomainRegistration_ValidateDomainPurchaseInformation({
  "domainRegistrationInput": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* domainRegistrationInput (object) **required** - Domain registration input for validation Api
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Global_GetAllCertificates
Get all certificates for a subscription


```js
azure_arm_web.Global_GetAllCertificates({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Global_CheckNameAvailability
Check if resource name is available


```js
azure_arm_web.Global_CheckNameAvailability({
  "request": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* request (object) **required** - Resource name availability request content
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Global_GetAllClassicMobileServices
Gets all mobile services for a subscription


```js
azure_arm_web.Global_GetAllClassicMobileServices({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Global_GetSubscriptionGeoRegions
Gets list of available geo regions


```js
azure_arm_web.Global_GetSubscriptionGeoRegions({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* sku (string) - Filter only to regions that support this sku
* linuxWorkersEnabled (boolean) - Filter only to regions that support linux workers
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Global_GetAllHostingEnvironments
Gets all hostingEnvironments (App Service Environment) for a subscription


```js
azure_arm_web.Global_GetAllHostingEnvironments({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Global_IsHostingEnvironmentNameAvailable
Whether hosting environment name is available


```js
azure_arm_web.Global_IsHostingEnvironmentNameAvailable({
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* name (string) **required** - Hosting environment name
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Global_IsHostingEnvironmentWithLegacyNameAvailable
Whether hosting environment name is available


```js
azure_arm_web.Global_IsHostingEnvironmentWithLegacyNameAvailable({
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* name (string) **required** - Hosting environment name
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Global_GetAllManagedHostingEnvironments
Gets all managed hosting environments for a subscription


```js
azure_arm_web.Global_GetAllManagedHostingEnvironments({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Global_ListPremierAddOnOffers
List premier add on offers


```js
azure_arm_web.Global_ListPremierAddOnOffers({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Global_GetSubscriptionPublishingCredentials
Gets publishing credentials for the subscription owner


```js
azure_arm_web.Global_GetSubscriptionPublishingCredentials({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Global_UpdateSubscriptionPublishingCredentials
Updates publishing credentials for the subscription owner


```js
azure_arm_web.Global_UpdateSubscriptionPublishingCredentials({
  "requestMessage": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* requestMessage (object) **required** - Represents user crendentials used for publishing activity
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Recommendations_GetRecommendationBySubscription
Gets a list of recommendations associated with the specified subscription.


```js
azure_arm_web.Recommendations_GetRecommendationBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* featured (boolean) - If set, this API returns only the most critical recommendation among the others. Otherwise this API returns all recommendations available
* $filter (string) - Return only channels specified in the filter. Filter is specified by using OData syntax. Example: $filter=channels eq 'Api' or channel eq 'Notification'
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Global_GetAllServerFarms
Gets all App Service Plans for a subcription


```js
azure_arm_web.Global_GetAllServerFarms({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* detailed (boolean) - False to return a subset of App Service Plan properties, true to return all of the properties.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Global_GetAllSites
Gets all Web Apps for a subscription


```js
azure_arm_web.Global_GetAllSites({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### GlobalResourceGroups_MoveResources



```js
azure_arm_web.GlobalResourceGroups_MoveResources({
  "resourceGroupName": "",
  "moveResourceEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required**
* moveResourceEnvelope (object) **required** - Class containing a list of the resources that need to be moved and the resource group they should be moved to
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### CertificateOrders_GetCertificateOrders
Get certificate orders in a resource group


```js
azure_arm_web.CertificateOrders_GetCertificateOrders({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Azure resource group name
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### CertificateOrders_GetCertificates
List all certificates associated with a certificate order (only one certificate can be associated with an order at a time)


```js
azure_arm_web.CertificateOrders_GetCertificates({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Azure resource group name
* certificateOrderName (string) **required** - Certificate name
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### CertificateOrders_DeleteCertificate
Deletes the certificate associated with the certificate order


```js
azure_arm_web.CertificateOrders_DeleteCertificate({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Azure resource group name
* certificateOrderName (string) **required** - Certificate name
* name (string) **required** - Certificate name
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### CertificateOrders_GetCertificate
Get certificate associated with the certificate order


```js
azure_arm_web.CertificateOrders_GetCertificate({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Azure resource group name
* certificateOrderName (string) **required** - Certificate name
* name (string) **required** - Certificate name
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### CertificateOrders_UpdateCertificate
Associates a Key Vault secret to a certificate store that will be used for storing the certificate once it's ready


```js
azure_arm_web.CertificateOrders_UpdateCertificate({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "name": "",
  "keyVaultCertificate": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Azure resource group name
* certificateOrderName (string) **required** - Certificate name
* name (string) **required** - Certificate name
* keyVaultCertificate (object) **required** - Class representing the Key Vault container for certificate purchased through Azure
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### CertificateOrders_CreateOrUpdateCertificate
Associates a Key Vault secret to a certificate store that will be used for storing the certificate once it's ready


```js
azure_arm_web.CertificateOrders_CreateOrUpdateCertificate({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "name": "",
  "keyVaultCertificate": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Azure resource group name
* certificateOrderName (string) **required** - Certificate name
* name (string) **required** - Certificate name
* keyVaultCertificate (object) **required** - Class representing the Key Vault container for certificate purchased through Azure
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### CertificateOrders_DeleteCertificateOrder
Delete an existing certificate order


```js
azure_arm_web.CertificateOrders_DeleteCertificateOrder({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Azure resource group name
* name (string) **required** - Certificate name
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### CertificateOrders_GetCertificateOrder
Get a certificate order


```js
azure_arm_web.CertificateOrders_GetCertificateOrder({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Azure resource group name
* name (string) **required** - Certificate name
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### CertificateOrders_UpdateCertificateOrder
Create or update a certificate purchase order


```js
azure_arm_web.CertificateOrders_UpdateCertificateOrder({
  "resourceGroupName": "",
  "name": "",
  "certificateDistinguishedName": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Azure resource group name
* name (string) **required** - Certificate name
* certificateDistinguishedName (object) **required** - Certificate purchase order
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### CertificateOrders_CreateOrUpdateCertificateOrder
Create or update a certificate purchase order


```js
azure_arm_web.CertificateOrders_CreateOrUpdateCertificateOrder({
  "resourceGroupName": "",
  "name": "",
  "certificateDistinguishedName": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Azure resource group name
* name (string) **required** - Certificate name
* certificateDistinguishedName (object) **required** - Certificate purchase order
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### CertificateOrders_ReissueCertificateOrder
Reissue an existing certificate order


```js
azure_arm_web.CertificateOrders_ReissueCertificateOrder({
  "resourceGroupName": "",
  "name": "",
  "reissueCertificateOrderRequest": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Azure resource group name
* name (string) **required** - Certificate name
* reissueCertificateOrderRequest (object) **required** - Class representing certificate reissue request
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### CertificateOrders_RenewCertificateOrder
Renew an existing certificate order


```js
azure_arm_web.CertificateOrders_RenewCertificateOrder({
  "resourceGroupName": "",
  "name": "",
  "renewCertificateOrderRequest": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Azure resource group name
* name (string) **required** - Certificate name
* renewCertificateOrderRequest (object) **required** - Class representing certificate renew request
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### CertificateOrders_ResendCertificateEmail
Resend certificate email


```js
azure_arm_web.CertificateOrders_ResendCertificateEmail({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Azure resource group name
* name (string) **required** - Certificate order name
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### CertificateOrders_RetrieveCertificateActions
Retrieve the list of certificate actions


```js
azure_arm_web.CertificateOrders_RetrieveCertificateActions({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Azure resource group name
* name (string) **required** - Certificate order name
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### CertificateOrders_RetrieveCertificateEmailHistory
Retrive email history


```js
azure_arm_web.CertificateOrders_RetrieveCertificateEmailHistory({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Azure resource group name
* name (string) **required** - Certificate order name
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### CertificateOrders_VerifyDomainOwnership
Verify domain ownership for this certificate order


```js
azure_arm_web.CertificateOrders_VerifyDomainOwnership({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Azure resource group name
* name (string) **required** - Certificate order name
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Domains_GetDomains
Lists domains under a resource group


```js
azure_arm_web.Domains_GetDomains({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Domains_DeleteDomain
Deletes a domain


```js
azure_arm_web.Domains_DeleteDomain({
  "resourceGroupName": "",
  "domainName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group
* domainName (string) **required** - Name of the domain
* forceHardDeleteDomain (boolean) - If true then the domain will be deleted immediately instead of after 24 hours
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Domains_GetDomain
Gets details of a domain


```js
azure_arm_web.Domains_GetDomain({
  "resourceGroupName": "",
  "domainName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group
* domainName (string) **required** - Name of the domain
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Domains_UpdateDomain
Creates a domain


```js
azure_arm_web.Domains_UpdateDomain({
  "resourceGroupName": "",
  "domainName": "",
  "domain": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - &gt;Name of the resource group
* domainName (string) **required** - Name of the domain
* domain (object) **required** - Represents a domain
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Domains_CreateOrUpdateDomain
Creates a domain


```js
azure_arm_web.Domains_CreateOrUpdateDomain({
  "resourceGroupName": "",
  "domainName": "",
  "domain": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - &gt;Name of the resource group
* domainName (string) **required** - Name of the domain
* domain (object) **required** - Represents a domain
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Domains_GetDomainOperation
Retrieves the latest status of a domain purchase operation


```js
azure_arm_web.Domains_GetDomainOperation({
  "resourceGroupName": "",
  "domainName": "",
  "operationId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group
* domainName (string) **required** - Name of the domain
* operationId (string) **required** - Domain purchase operation Id
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Usage_GetUsage
Returns usage records for specified subscription and resource groups


```js
azure_arm_web.Usage_GetUsage({
  "resourceGroupName": "",
  "environmentName": "",
  "lastId": "",
  "batchSize": 0,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* environmentName (string) **required** - Environment name
* lastId (string) **required** - Last marker that was returned from the batch
* batchSize (integer) **required** - size of the batch to be returned.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Certificates_GetCertificates
Get certificates for a subscription in the specified resource group.


```js
azure_arm_web.Certificates_GetCertificates({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Certificates_DeleteCertificate
Delete a certificate by name in a specificed subscription and resourcegroup.


```js
azure_arm_web.Certificates_DeleteCertificate({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group
* name (string) **required** - Name of the certificate to be deleted.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Certificates_GetCertificate
Get a certificate by certificate name for a subscription in the specified resource group.


```js
azure_arm_web.Certificates_GetCertificate({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group
* name (string) **required** - Name of the certificate.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Certificates_UpdateCertificate
Creates or modifies an existing certificate.


```js
azure_arm_web.Certificates_UpdateCertificate({
  "resourceGroupName": "",
  "name": "",
  "certificateEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group
* name (string) **required** - Name of the certificate.
* certificateEnvelope (object) **required** - App certificate
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Certificates_CreateOrUpdateCertificate
Creates or modifies an existing certificate.


```js
azure_arm_web.Certificates_CreateOrUpdateCertificate({
  "resourceGroupName": "",
  "name": "",
  "certificateEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group
* name (string) **required** - Name of the certificate.
* certificateEnvelope (object) **required** - App certificate
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ClassicMobileServices_GetClassicMobileServices
Get all mobile services in a resource group.


```js
azure_arm_web.ClassicMobileServices_GetClassicMobileServices({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ClassicMobileServices_DeleteClassicMobileService
Delete a mobile service.


```js
azure_arm_web.ClassicMobileServices_DeleteClassicMobileService({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of mobile service
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ClassicMobileServices_GetClassicMobileService
Get a mobile service.


```js
azure_arm_web.ClassicMobileServices_GetClassicMobileService({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of mobile service
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Certificates_GetCsrs
Gets the certificate signing requests for a subscription in the specified resource group


```js
azure_arm_web.Certificates_GetCsrs({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Certificates_DeleteCsr
Delete the certificate signing request.


```js
azure_arm_web.Certificates_DeleteCsr({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group
* name (string) **required** - Name of the certificate signing request.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Certificates_GetCsr
Gets a certificate signing request by certificate name for a subscription in the specified resource group


```js
azure_arm_web.Certificates_GetCsr({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group
* name (string) **required** - Name of the certificate.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Certificates_UpdateCsr
Creates or modifies an existing certificate signing request.


```js
azure_arm_web.Certificates_UpdateCsr({
  "resourceGroupName": "",
  "name": "",
  "csrEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group
* name (string) **required** - Name of the certificate.
* csrEnvelope (object) **required** - Certificate signing request object
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Certificates_CreateOrUpdateCsr
Creates or modifies an existing certificate signing request.


```js
azure_arm_web.Certificates_CreateOrUpdateCsr({
  "resourceGroupName": "",
  "name": "",
  "csrEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group
* name (string) **required** - Name of the certificate.
* csrEnvelope (object) **required** - Certificate signing request object
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetDeletedSites
Gets deleted web apps in subscription


```js
azure_arm_web.Sites_GetDeletedSites({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* propertiesToInclude (string) - Additional web app properties included in the response
* includeSiteTypes (string) - Types of apps included in the response
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetHostingEnvironments
Get all hostingEnvironments (App Service Environments) in a resource group.


```js
azure_arm_web.HostingEnvironments_GetHostingEnvironments({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_DeleteHostingEnvironment
Delete a hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_DeleteHostingEnvironment({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* forceDelete (boolean) - Delete even if the hostingEnvironment (App Service Environment) contains resources
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetHostingEnvironment
Get properties of hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetHostingEnvironment({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_CreateOrUpdateHostingEnvironment
Create or update a hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_CreateOrUpdateHostingEnvironment({
  "resourceGroupName": "",
  "name": "",
  "hostingEnvironmentEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* hostingEnvironmentEnvelope (object) **required** - Description of an hostingEnvironment (App Service Environment)
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetHostingEnvironmentCapacities
Get used, available, and total worker capacity for hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetHostingEnvironmentCapacities({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetHostingEnvironmentVips
Get IP addresses assigned to the hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetHostingEnvironmentVips({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetHostingEnvironmentDiagnostics
Get diagnostic information for hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetHostingEnvironmentDiagnostics({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetHostingEnvironmentDiagnosticsItem
Get diagnostic information for hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetHostingEnvironmentDiagnosticsItem({
  "resourceGroupName": "",
  "name": "",
  "diagnosticsName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* diagnosticsName (string) **required** - Name of the diagnostics
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetHostingEnvironmentMetricDefinitions
Get global metric definitions of hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetHostingEnvironmentMetricDefinitions({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetHostingEnvironmentMetrics
Get global metrics of hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetHostingEnvironmentMetrics({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* details (boolean) - Include instance details
* $filter (string) - Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetMultiRolePools
Get all multi role pools


```js
azure_arm_web.HostingEnvironments_GetMultiRolePools({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetMultiRolePool
Get properties of a multiRool pool.


```js
azure_arm_web.HostingEnvironments_GetMultiRolePool({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_CreateOrUpdateMultiRolePool
Create or update a multiRole pool.


```js
azure_arm_web.HostingEnvironments_CreateOrUpdateMultiRolePool({
  "resourceGroupName": "",
  "name": "",
  "multiRolePoolEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* multiRolePoolEnvelope (object) **required** - Worker pool of a hostingEnvironment (App Service Environment)
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetMultiRolePoolInstanceMetricDefinitions
Get metric definitions for a specific instance of a multiRole pool of a hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetMultiRolePoolInstanceMetricDefinitions({
  "resourceGroupName": "",
  "name": "",
  "instance": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* instance (string) **required** - Name of instance in the multiRole pool&gt;
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetMultiRolePoolInstanceMetrics
Get metrics for a specific instance of a multiRole pool of a hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetMultiRolePoolInstanceMetrics({
  "resourceGroupName": "",
  "name": "",
  "instance": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* instance (string) **required** - Name of instance in the multiRole pool
* details (boolean) - Include instance details
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetHostingEnvironmentMultiRoleMetricDefinitions
Get metric definitions for a multiRole pool of a hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetHostingEnvironmentMultiRoleMetricDefinitions({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetHostingEnvironmentMultiRoleMetrics
Get metrics for a multiRole pool of a hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetHostingEnvironmentMultiRoleMetrics({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* startTime (string) - Beginning time of metrics query
* endTime (string) - End time of metrics query
* timeGrain (string) - Time granularity of metrics query
* details (boolean) - Include instance details
* $filter (string) - Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetMultiRolePoolSkus
Get available skus for scaling a multiRole pool.


```js
azure_arm_web.HostingEnvironments_GetMultiRolePoolSkus({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetHostingEnvironmentMultiRoleUsages
Get usages for a multiRole pool of a hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetHostingEnvironmentMultiRoleUsages({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetHostingEnvironmentOperations
List all currently running operations on the hostingEnvironment (App Service Environment)


```js
azure_arm_web.HostingEnvironments_GetHostingEnvironmentOperations({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetHostingEnvironmentOperation
Get status of an operation on a hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetHostingEnvironmentOperation({
  "resourceGroupName": "",
  "name": "",
  "operationId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* operationId (string) **required** - operation identifier GUID
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_RebootHostingEnvironment
Reboots all machines in a hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_RebootHostingEnvironment({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_ResumeHostingEnvironment
Resumes the hostingEnvironment.


```js
azure_arm_web.HostingEnvironments_ResumeHostingEnvironment({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetHostingEnvironmentServerFarms
Get all serverfarms (App Service Plans) on the hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetHostingEnvironmentServerFarms({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetHostingEnvironmentSites
Get all sites on the hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetHostingEnvironmentSites({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* propertiesToInclude (string) - Comma separated list of site properties to include
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_SuspendHostingEnvironment
Suspends the hostingEnvironment.


```js
azure_arm_web.HostingEnvironments_SuspendHostingEnvironment({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetHostingEnvironmentUsages
Get global usages of hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetHostingEnvironmentUsages({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* $filter (string) - Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetHostingEnvironmentWebHostingPlans
Get all serverfarms (App Service Plans) on the hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetHostingEnvironmentWebHostingPlans({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetWorkerPools
Get all worker pools


```js
azure_arm_web.HostingEnvironments_GetWorkerPools({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetWorkerPool
Get properties of a worker pool.


```js
azure_arm_web.HostingEnvironments_GetWorkerPool({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* workerPoolName (string) **required** - Name of worker pool
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_CreateOrUpdateWorkerPool
Create or update a worker pool.


```js
azure_arm_web.HostingEnvironments_CreateOrUpdateWorkerPool({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "workerPoolEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* workerPoolName (string) **required** - Name of worker pool
* workerPoolEnvelope (object) **required** - Worker pool of a hostingEnvironment (App Service Environment)
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetWorkerPoolInstanceMetricDefinitions
Get metric definitions for a specific instance of a worker pool of a hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetWorkerPoolInstanceMetricDefinitions({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "instance": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* workerPoolName (string) **required** - Name of worker pool
* instance (string) **required** - Name of instance in the worker pool
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetWorkerPoolInstanceMetrics
Get metrics for a specific instance of a worker pool of a hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetWorkerPoolInstanceMetrics({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "instance": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* workerPoolName (string) **required** - Name of worker pool
* instance (string) **required** - Name of instance in the worker pool
* details (boolean) - Include instance details
* $filter (string) - Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetHostingEnvironmentWebWorkerMetricDefinitions
Get metric definitions for a worker pool of a hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetHostingEnvironmentWebWorkerMetricDefinitions({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* workerPoolName (string) **required** - Name of worker pool
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetHostingEnvironmentWebWorkerMetrics
Get metrics for a worker pool of a hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetHostingEnvironmentWebWorkerMetrics({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* workerPoolName (string) **required** - Name of worker pool
* details (boolean) - Include instance details
* $filter (string) - Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetWorkerPoolSkus
Get available skus for scaling a worker pool.


```js
azure_arm_web.HostingEnvironments_GetWorkerPoolSkus({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* workerPoolName (string) **required** - Name of worker pool
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### HostingEnvironments_GetHostingEnvironmentWebWorkerUsages
Get usages for a worker pool of a hostingEnvironment (App Service Environment).


```js
azure_arm_web.HostingEnvironments_GetHostingEnvironmentWebWorkerUsages({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of hostingEnvironment (App Service Environment)
* workerPoolName (string) **required** - Name of worker pool
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ManagedHostingEnvironments_GetManagedHostingEnvironments
Get all managed hosting environments in a resource group.


```js
azure_arm_web.ManagedHostingEnvironments_GetManagedHostingEnvironments({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ManagedHostingEnvironments_DeleteManagedHostingEnvironment
Delete a managed hosting environment.


```js
azure_arm_web.ManagedHostingEnvironments_DeleteManagedHostingEnvironment({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of managed hosting environment
* forceDelete (boolean) - Delete even if the managed hosting environment contains resources
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ManagedHostingEnvironments_GetManagedHostingEnvironment
Get properties of a managed hosting environment.


```js
azure_arm_web.ManagedHostingEnvironments_GetManagedHostingEnvironment({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of managed hosting environment
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ManagedHostingEnvironments_CreateOrUpdateManagedHostingEnvironment
Create or update a managed hosting environment.


```js
azure_arm_web.ManagedHostingEnvironments_CreateOrUpdateManagedHostingEnvironment({
  "resourceGroupName": "",
  "name": "",
  "ManagedHostingEnvironmentEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of managed hosting environment
* ManagedHostingEnvironmentEnvelope (object) **required** - Description of an hostingEnvironment (App Service Environment)
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ManagedHostingEnvironments_GetManagedHostingEnvironmentVips
Get list of ip addresses assigned to a managed hosting environment


```js
azure_arm_web.ManagedHostingEnvironments_GetManagedHostingEnvironmentVips({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of managed hosting environment
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ManagedHostingEnvironments_GetManagedHostingEnvironmentOperation
Get status of an operation on a managed hosting environment.


```js
azure_arm_web.ManagedHostingEnvironments_GetManagedHostingEnvironmentOperation({
  "resourceGroupName": "",
  "name": "",
  "operationId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of managed hosting environment
* operationId (string) **required** - operation identifier GUID
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ManagedHostingEnvironments_GetManagedHostingEnvironmentServerFarms
Get all serverfarms (App Service Plans) on the managed hosting environment.


```js
azure_arm_web.ManagedHostingEnvironments_GetManagedHostingEnvironmentServerFarms({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of managed hosting environment
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ManagedHostingEnvironments_GetManagedHostingEnvironmentSites
Get all sites on the managed hosting environment.


```js
azure_arm_web.ManagedHostingEnvironments_GetManagedHostingEnvironmentSites({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of managed hosting environment
* propertiesToInclude (string) - Comma separated list of site properties to include
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ManagedHostingEnvironments_GetManagedHostingEnvironmentWebHostingPlans
Get all serverfarms (App Service Plans) on the managed hosting environment.


```js
azure_arm_web.ManagedHostingEnvironments_GetManagedHostingEnvironmentWebHostingPlans({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of managed hosting environment
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ServerFarms_GetServerFarms
Gets collection of App Service Plans in a resource group for a given subscription.


```js
azure_arm_web.ServerFarms_GetServerFarms({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ServerFarms_DeleteServerFarm
Deletes a App Service Plan


```js
azure_arm_web.ServerFarms_DeleteServerFarm({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of App Service Plan
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ServerFarms_GetServerFarm
Gets specified App Service Plan in a resource group


```js
azure_arm_web.ServerFarms_GetServerFarm({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of App Service Plan
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ServerFarms_CreateOrUpdateServerFarm
Creates or updates an App Service Plan


```js
azure_arm_web.ServerFarms_CreateOrUpdateServerFarm({
  "resourceGroupName": "",
  "name": "",
  "serverFarmEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of App Service Plan
* serverFarmEnvelope (object) **required** - App Service Plan Model
* allowPendingState (boolean) - OBSOLETE: If true, allow pending state for App Service Plan
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ServerFarms_GetServerFarmMetricDefintions
List of metrics that can be queried for an App Service Plan


```js
azure_arm_web.ServerFarms_GetServerFarmMetricDefintions({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of App Service Plan
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ServerFarms_GetServerFarmMetrics
Queries for App Serice Plan metrics


```js
azure_arm_web.ServerFarms_GetServerFarmMetrics({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of App Service Plan
* details (boolean) - If true, metrics are broken down per App Service Plan instance
* $filter (string) - Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ServerFarms_GetServerFarmOperation
Gets a server farm operation


```js
azure_arm_web.ServerFarms_GetServerFarmOperation({
  "resourceGroupName": "",
  "name": "",
  "operationId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of server farm
* operationId (string) **required** - Id of Server farm operation"&gt;
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ServerFarms_RestartSitesForServerFarm
Restarts web apps in a specified App Service Plan


```js
azure_arm_web.ServerFarms_RestartSitesForServerFarm({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of App Service Plan
* softRestart (boolean) - Soft restart applies the configuration settings and restarts the apps if necessary. Hard restart always restarts and reprovisions the apps
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ServerFarms_GetServerFarmSites
Gets list of Apps associated with an App Service Plan


```js
azure_arm_web.ServerFarms_GetServerFarmSites({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of App Service Plan
* $skipToken (string) - Skip to of web apps in a list. If specified, the resulting list will contain web apps starting from (including) the skipToken. Else, the resulting list contains web apps from the start of the list
* $filter (string) - Supported filter: $filter=state eq running. Returns only web apps that are currently running
* $top (string) - List page size. If specified, results are paged.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ServerFarms_GetVnetsForServerFarm
Gets list of vnets associated with App Service Plan


```js
azure_arm_web.ServerFarms_GetVnetsForServerFarm({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of App Service Plan
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ServerFarms_GetVnetFromServerFarm
Gets a vnet associated with an App Service Plan


```js
azure_arm_web.ServerFarms_GetVnetFromServerFarm({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of App Service Plan
* vnetName (string) **required** - Name of virtual network
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ServerFarms_GetServerFarmVnetGateway
Gets the vnet gateway.


```js
azure_arm_web.ServerFarms_GetServerFarmVnetGateway({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of the App Service Plan
* vnetName (string) **required** - Name of the virtual network
* gatewayName (string) **required** - Name of the gateway. Only the 'primary' gateway is supported.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ServerFarms_UpdateServerFarmVnetGateway
Updates the vnet gateway


```js
azure_arm_web.ServerFarms_UpdateServerFarmVnetGateway({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group
* name (string) **required** - The name of the App Service Plan
* vnetName (string) **required** - The name of the virtual network
* gatewayName (string) **required** - The name of the gateway. Only 'primary' is supported.
* connectionEnvelope (object) **required** - The VnetGateway contract. This is used to give the vnet gateway access to the VPN package.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ServerFarms_GetRoutesForVnet
Gets a list of all routes associated with a vnet, in an app service plan


```js
azure_arm_web.ServerFarms_GetRoutesForVnet({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of App Service Plan
* vnetName (string) **required** - Name of virtual network
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ServerFarms_DeleteVnetRoute
Deletes an existing route for a vnet in an app service plan.


```js
azure_arm_web.ServerFarms_DeleteVnetRoute({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "routeName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of App Service Plan
* vnetName (string) **required** - Name of virtual network
* routeName (string) **required** - Name of the virtual network route
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ServerFarms_GetRouteForVnet
Gets a specific route associated with a vnet, in an app service plan


```js
azure_arm_web.ServerFarms_GetRouteForVnet({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "routeName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of App Service Plan
* vnetName (string) **required** - Name of virtual network
* routeName (string) **required** - Name of the virtual network route
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ServerFarms_UpdateVnetRoute
Creates a new route or updates an existing route for a vnet in an app service plan.


```js
azure_arm_web.ServerFarms_UpdateVnetRoute({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "routeName": "",
  "route": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of App Service Plan
* vnetName (string) **required** - Name of virtual network
* routeName (string) **required** - Name of the virtual network route
* route (object) **required** - VnetRoute contract used to pass routing information for a vnet.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ServerFarms_CreateOrUpdateVnetRoute
Creates a new route or updates an existing route for a vnet in an app service plan.


```js
azure_arm_web.ServerFarms_CreateOrUpdateVnetRoute({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "routeName": "",
  "route": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of App Service Plan
* vnetName (string) **required** - Name of virtual network
* routeName (string) **required** - Name of the virtual network route
* route (object) **required** - VnetRoute contract used to pass routing information for a vnet.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### ServerFarms_RebootWorkerForServerFarm
Submit a reboot request for a worker machine in the specified server farm


```js
azure_arm_web.ServerFarms_RebootWorkerForServerFarm({
  "resourceGroupName": "",
  "name": "",
  "workerName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of server farm
* workerName (string) **required** - Name of worker machine, typically starts with RD
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSites
Gets the web apps for a subscription in the specified resource group


```js
azure_arm_web.Sites_GetSites({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* propertiesToInclude (string) - Additional web app properties included in the response
* includeSiteTypes (string) - Types of apps included in the response
* includeSlots (boolean) - Whether or not to include deployments slots in results
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_DeleteSite
Deletes a web app


```js
azure_arm_web.Sites_DeleteSite({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* deleteMetrics (string) - If true, web app metrics are also deleted
* deleteEmptyServerFarm (string) - If true and App Service Plan is empty after web app deletion, App Service Plan is also deleted
* skipDnsRegistration (string) - If true, DNS registration is skipped
* deleteAllSlots (string) - If true, all slots associated with web app are also deleted
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSite
Get details of a web app


```js
azure_arm_web.Sites_GetSite({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* propertiesToInclude (string) - Additional web app properties included in the response
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_CreateOrUpdateSite
Creates a new web app or modifies an existing web app.


```js
azure_arm_web.Sites_CreateOrUpdateSite({
  "resourceGroupName": "",
  "name": "",
  "siteEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group
* name (string) **required** - Name of the web app
* siteEnvelope (object) **required** - Represents a web app
* skipDnsRegistration (string) - If true web app hostname is not registered with DNS on creation. This parameter is
* skipCustomDomainVerification (string) - If true, custom (non *.azurewebsites.net) domains associated with web app are not verified.
* forceDnsRegistration (string) - If true, web app hostname is force registered with DNS
* ttlInSeconds (string) - Time to live in seconds for web app's default domain name
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ApplySlotConfigToProduction
Applies the configuration settings from the target slot onto the current slot


```js
azure_arm_web.Sites_ApplySlotConfigToProduction({
  "resourceGroupName": "",
  "name": "",
  "slotSwapEntity": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slotSwapEntity (object) **required** - Class containing deployment slot parameters
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_BackupSite
Creates web app backup


```js
azure_arm_web.Sites_BackupSite({
  "resourceGroupName": "",
  "name": "",
  "request": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* request (object) **required** - Description of a backup which will be performed
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ListSiteBackups
Lists all available backups for web app


```js
azure_arm_web.Sites_ListSiteBackups({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_DiscoverSiteRestore
Discovers existing web app backups that can be restored


```js
azure_arm_web.Sites_DiscoverSiteRestore({
  "resourceGroupName": "",
  "name": "",
  "request": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* request (object) **required** - Description of a restore request
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_DeleteBackup
Deletes a backup from Azure Storage


```js
azure_arm_web.Sites_DeleteBackup({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* backupId (string) **required** - Id of backup
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteBackupStatus
Gets status of a web app backup that may be in progress.


```js
azure_arm_web.Sites_GetSiteBackupStatus({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* backupId (string) **required** - Id of backup
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteBackupStatusSecrets
Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.


```js
azure_arm_web.Sites_GetSiteBackupStatusSecrets({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "request": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* backupId (string) **required** - Id of backup
* request (object) **required** - Description of a backup which will be performed
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_RestoreSite
Restores a web app


```js
azure_arm_web.Sites_RestoreSite({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "request": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* backupId (string) **required** - Id of backup to restore
* request (object) **required** - Description of a restore request
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteAppSettings
Updates the application settings of web app


```js
azure_arm_web.Sites_UpdateSiteAppSettings({
  "resourceGroupName": "",
  "name": "",
  "appSettings": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* appSettings (object) **required** - String dictionary resource
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ListSiteAppSettings
Gets the application settings of web app


```js
azure_arm_web.Sites_ListSiteAppSettings({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteAuthSettings
Updates the Authentication / Authorization settings associated with web app


```js
azure_arm_web.Sites_UpdateSiteAuthSettings({
  "resourceGroupName": "",
  "name": "",
  "siteAuthSettings": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* siteAuthSettings (object) **required** - Configuration settings for the Azure App Service Authentication / Authorization feature.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ListSiteAuthSettings
Gets the Authentication / Authorization settings associated with web app


```js
azure_arm_web.Sites_ListSiteAuthSettings({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteBackupConfiguration
Updates backup configuration of web app


```js
azure_arm_web.Sites_UpdateSiteBackupConfiguration({
  "resourceGroupName": "",
  "name": "",
  "request": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* request (object) **required** - Description of a backup which will be performed
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteBackupConfiguration
Gets the backup configuration for a web app


```js
azure_arm_web.Sites_GetSiteBackupConfiguration({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteConnectionStrings
Updates the connection strings associated with web app


```js
azure_arm_web.Sites_UpdateSiteConnectionStrings({
  "resourceGroupName": "",
  "name": "",
  "connectionStrings": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* connectionStrings (object) **required** - String dictionary resource
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ListSiteConnectionStrings
Gets the connection strings associated with web app


```js
azure_arm_web.Sites_ListSiteConnectionStrings({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteLogsConfig
Gets the web app logs configuration


```js
azure_arm_web.Sites_GetSiteLogsConfig({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteLogsConfig
Updates the meta data for web app


```js
azure_arm_web.Sites_UpdateSiteLogsConfig({
  "resourceGroupName": "",
  "name": "",
  "siteLogsConfig": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* siteLogsConfig (object) **required** - Configuration of Azure web site
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteMetadata
Updates the meta data for web app


```js
azure_arm_web.Sites_UpdateSiteMetadata({
  "resourceGroupName": "",
  "name": "",
  "metadata": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* metadata (object) **required** - String dictionary resource
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ListSiteMetadata
Gets the web app meta data.


```js
azure_arm_web.Sites_ListSiteMetadata({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ListSitePublishingCredentials
Gets the web app publishing credentials


```js
azure_arm_web.Sites_ListSitePublishingCredentials({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSlotConfigNames
Gets the names of application settings and connection string that remain with the slot during swap operation


```js
azure_arm_web.Sites_GetSlotConfigNames({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSlotConfigNames
Updates the names of application settings and connection string that remain with the slot during swap operation


```js
azure_arm_web.Sites_UpdateSlotConfigNames({
  "resourceGroupName": "",
  "name": "",
  "slotConfigNames": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slotConfigNames (object) **required** - Slot Config names azure resource
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteConfig
Gets the configuration of the web app


```js
azure_arm_web.Sites_GetSiteConfig({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteConfig
Update the configuration of web app


```js
azure_arm_web.Sites_UpdateSiteConfig({
  "resourceGroupName": "",
  "name": "",
  "siteConfig": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* siteConfig (object) **required** - Configuration of Azure web site
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_CreateOrUpdateSiteConfig
Update the configuration of web app


```js
azure_arm_web.Sites_CreateOrUpdateSiteConfig({
  "resourceGroupName": "",
  "name": "",
  "siteConfig": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* siteConfig (object) **required** - Configuration of Azure web site
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetDeployments
List deployments


```js
azure_arm_web.Sites_GetDeployments({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_DeleteDeployment
Delete the deployment


```js
azure_arm_web.Sites_DeleteDeployment({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* id (string) **required** - Id of the deployment
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetDeployment
Get the deployment


```js
azure_arm_web.Sites_GetDeployment({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* id (string) **required** - Id of the deployment
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_CreateDeployment
Create a deployment


```js
azure_arm_web.Sites_CreateDeployment({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "deployment": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* id (string) **required** - Id of the deployment
* deployment (object) **required** - Represents user crendentials used for publishing activity
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteHostNameBindings
Get web app hostname bindings


```js
azure_arm_web.Sites_GetSiteHostNameBindings({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_DeleteSiteHostNameBinding
Deletes a host name binding


```js
azure_arm_web.Sites_DeleteSiteHostNameBinding({
  "resourceGroupName": "",
  "name": "",
  "hostName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* hostName (string) **required** - Name of host
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteHostNameBinding
Get web app binding for a hostname


```js
azure_arm_web.Sites_GetSiteHostNameBinding({
  "resourceGroupName": "",
  "name": "",
  "hostName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* hostName (string) **required** - Name of host
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_CreateOrUpdateSiteHostNameBinding
Creates a web app hostname binding


```js
azure_arm_web.Sites_CreateOrUpdateSiteHostNameBinding({
  "resourceGroupName": "",
  "name": "",
  "hostName": "",
  "hostNameBinding": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* hostName (string) **required** - Name of host
* hostNameBinding (object) **required** - A host name binding object
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ListSiteRelayServiceConnections
Retrieves all Biztalk Hybrid Connections associated with this web app.


```js
azure_arm_web.Sites_ListSiteRelayServiceConnections({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_DeleteSiteRelayServiceConnection
Removes the association to a Biztalk Hybrid Connection, identified by its entity name.


```js
azure_arm_web.Sites_DeleteSiteRelayServiceConnection({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* entityName (string) **required** - The name by which the Hybrid Connection is identified
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteRelayServiceConnection
Retrieves a Biztalk Hybrid Connection identified by its entity name.


```js
azure_arm_web.Sites_GetSiteRelayServiceConnection({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* entityName (string) **required** - The name by which the Hybrid Connection is identified
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteRelayServiceConnection
Creates a new association to a Biztalk Hybrid Connection, or updates an existing one.


```js
azure_arm_web.Sites_UpdateSiteRelayServiceConnection({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* entityName (string) **required** - The name by which the Hybrid Connection is identified
* connectionEnvelope (object) **required** - Class that represents a Biztalk Hybrid Connection
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_CreateOrUpdateSiteRelayServiceConnection
Creates a new association to a Biztalk Hybrid Connection, or updates an existing one.


```js
azure_arm_web.Sites_CreateOrUpdateSiteRelayServiceConnection({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* entityName (string) **required** - The name by which the Hybrid Connection is identified
* connectionEnvelope (object) **required** - Class that represents a Biztalk Hybrid Connection
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteInstanceIdentifiers
Gets all instance of a web app


```js
azure_arm_web.Sites_GetSiteInstanceIdentifiers({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetInstanceDeployments
List deployments


```js
azure_arm_web.Sites_GetInstanceDeployments({
  "resourceGroupName": "",
  "name": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* instanceId (string) **required** - Id of web app instance
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_DeleteInstanceDeployment
Delete the deployment


```js
azure_arm_web.Sites_DeleteInstanceDeployment({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* id (string) **required** - Id of the deployment
* instanceId (string) **required** - Id of web app instance
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetInstanceDeployment
Get the deployment


```js
azure_arm_web.Sites_GetInstanceDeployment({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* id (string) **required** - Id of the deployment
* instanceId (string) **required** - Id of web app instance
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_CreateInstanceDeployment
Create a deployment


```js
azure_arm_web.Sites_CreateInstanceDeployment({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "instanceId": "",
  "deployment": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* id (string) **required** - Id of the deployment
* instanceId (string) **required** - Id of web app instance
* deployment (object) **required** - Represents user crendentials used for publishing activity
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_IsSiteCloneable
Creates a new web app or modifies an existing web app.


```js
azure_arm_web.Sites_IsSiteCloneable({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group
* name (string) **required** - Name of the web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteMetricDefinitions
Gets metric definitions for web app


```js
azure_arm_web.Sites_GetSiteMetricDefinitions({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteMetrics
Gets metrics for web app


```js
azure_arm_web.Sites_GetSiteMetrics({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* details (boolean) - If true, metric details are included in response
* $filter (string) - Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteNetworkFeatures
Retrieves a view of all network features in use on this web app.


```js
azure_arm_web.Sites_GetSiteNetworkFeatures({
  "resourceGroupName": "",
  "name": "",
  "view": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* view (string) **required** - The type of view. This can either be "summary" or "detailed".
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GenerateNewSitePublishingPassword
Generates new random app publishing password


```js
azure_arm_web.Sites_GenerateNewSitePublishingPassword({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteOperation
Gets the operation for a web app


```js
azure_arm_web.Sites_GetSiteOperation({
  "resourceGroupName": "",
  "name": "",
  "operationId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* operationId (string) **required** - Id of an operation
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ListSitePremierAddOns



```js
azure_arm_web.Sites_ListSitePremierAddOns({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required**
* name (string) **required**
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_DeleteSitePremierAddOn



```js
azure_arm_web.Sites_DeleteSitePremierAddOn({
  "resourceGroupName": "",
  "name": "",
  "premierAddOnName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required**
* name (string) **required**
* premierAddOnName (string) **required**
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSitePremierAddOn



```js
azure_arm_web.Sites_GetSitePremierAddOn({
  "resourceGroupName": "",
  "name": "",
  "premierAddOnName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required**
* name (string) **required**
* premierAddOnName (string) **required**
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_AddSitePremierAddOn



```js
azure_arm_web.Sites_AddSitePremierAddOn({
  "resourceGroupName": "",
  "name": "",
  "premierAddOnName": "",
  "premierAddOn": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required**
* name (string) **required**
* premierAddOnName (string) **required**
* premierAddOn (object) **required**
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ListSitePublishingProfileXml
Gets the publishing profile for web app


```js
azure_arm_web.Sites_ListSitePublishingProfileXml({
  "resourceGroupName": "",
  "name": "",
  "options": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* options (object) **required** - Publishing options for requested profile
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_RecoverSite
Recovers a deleted web app


```js
azure_arm_web.Sites_RecoverSite({
  "resourceGroupName": "",
  "name": "",
  "recoveryEntity": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* recoveryEntity (object) **required** - Class containting details about site recovery operation.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ResetProductionSlotConfig
Resets the configuration settings of the current slot if they were previously modified by calling ApplySlotConfig API


```js
azure_arm_web.Sites_ResetProductionSlotConfig({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_RestartSite
Restarts web app


```js
azure_arm_web.Sites_RestartSite({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* softRestart (boolean) - Soft restart applies the configuration settings and restarts the app if necessary. Hard restart always restarts and reprovisions the app
* synchronous (boolean) - If true then the API will block until the app has been restarted
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteSlots
Gets all the slots for a web apps


```js
azure_arm_web.Sites_GetSiteSlots({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* propertiesToInclude (string) - List of app properties to include in the response
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_DeleteSiteSlot
Deletes a web app


```js
azure_arm_web.Sites_DeleteSiteSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* deleteMetrics (string) - If true, web app metrics are also deleted
* deleteEmptyServerFarm (string) - If true and App Service Plan is empty after web app deletion, App Service Plan is also deleted
* skipDnsRegistration (string) - If true, DNS registration is skipped
* deleteAllSlots (string) - If true, all slots associated with web app are also deleted
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteSlot
Get details of a web app


```js
azure_arm_web.Sites_GetSiteSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* propertiesToInclude (string) - Additional web app properties included in the response
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_CreateOrUpdateSiteSlot
Creates a new web app or modifies an existing web app.


```js
azure_arm_web.Sites_CreateOrUpdateSiteSlot({
  "resourceGroupName": "",
  "name": "",
  "siteEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group
* name (string) **required** - Name of the web app
* siteEnvelope (object) **required** - Represents a web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* skipDnsRegistration (string) - If true web app hostname is not registered with DNS on creation. This parameter is
* skipCustomDomainVerification (string) - If true, custom (non *.azurewebsites.net) domains associated with web app are not verified.
* forceDnsRegistration (string) - If true, web app hostname is force registered with DNS
* ttlInSeconds (string) - Time to live in seconds for web app's default domain name
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ApplySlotConfigSlot
Applies the configuration settings from the target slot onto the current slot


```js
azure_arm_web.Sites_ApplySlotConfigSlot({
  "resourceGroupName": "",
  "name": "",
  "slotSwapEntity": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slotSwapEntity (object) **required** - Class containing deployment slot parameters
* slot (string) **required** - Name of the source slot. Settings from the target slot will be applied onto this slot
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_BackupSiteSlot
Creates web app backup


```js
azure_arm_web.Sites_BackupSiteSlot({
  "resourceGroupName": "",
  "name": "",
  "request": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* request (object) **required** - Description of a backup which will be performed
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ListSiteBackupsSlot
Lists all available backups for web app


```js
azure_arm_web.Sites_ListSiteBackupsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_DiscoverSiteRestoreSlot
Discovers existing web app backups that can be restored


```js
azure_arm_web.Sites_DiscoverSiteRestoreSlot({
  "resourceGroupName": "",
  "name": "",
  "request": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* request (object) **required** - Description of a restore request
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_DeleteBackupSlot
Deletes a backup from Azure Storage


```js
azure_arm_web.Sites_DeleteBackupSlot({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* backupId (string) **required** - Id of backup
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteBackupStatusSlot
Gets status of a web app backup that may be in progress.


```js
azure_arm_web.Sites_GetSiteBackupStatusSlot({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* backupId (string) **required** - Id of backup
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteBackupStatusSecretsSlot
Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.


```js
azure_arm_web.Sites_GetSiteBackupStatusSecretsSlot({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "request": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* backupId (string) **required** - Id of backup
* request (object) **required** - Description of a backup which will be performed
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_RestoreSiteSlot
Restores a web app


```js
azure_arm_web.Sites_RestoreSiteSlot({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "request": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* backupId (string) **required** - Id of backup to restore
* request (object) **required** - Description of a restore request
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteAppSettingsSlot
Updates the application settings of web app


```js
azure_arm_web.Sites_UpdateSiteAppSettingsSlot({
  "resourceGroupName": "",
  "name": "",
  "appSettings": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* appSettings (object) **required** - String dictionary resource
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ListSiteAppSettingsSlot
Gets the application settings of web app


```js
azure_arm_web.Sites_ListSiteAppSettingsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteAuthSettingsSlot
Updates the Authentication / Authorization settings associated with web app


```js
azure_arm_web.Sites_UpdateSiteAuthSettingsSlot({
  "resourceGroupName": "",
  "name": "",
  "siteAuthSettings": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* siteAuthSettings (object) **required** - Configuration settings for the Azure App Service Authentication / Authorization feature.
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ListSiteAuthSettingsSlot
Gets the Authentication / Authorization settings associated with web app


```js
azure_arm_web.Sites_ListSiteAuthSettingsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteBackupConfigurationSlot
Updates backup configuration of web app


```js
azure_arm_web.Sites_UpdateSiteBackupConfigurationSlot({
  "resourceGroupName": "",
  "name": "",
  "request": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* request (object) **required** - Description of a backup which will be performed
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteBackupConfigurationSlot
Gets the backup configuration for a web app


```js
azure_arm_web.Sites_GetSiteBackupConfigurationSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteConnectionStringsSlot
Updates the connection strings associated with web app


```js
azure_arm_web.Sites_UpdateSiteConnectionStringsSlot({
  "resourceGroupName": "",
  "name": "",
  "connectionStrings": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* connectionStrings (object) **required** - String dictionary resource
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ListSiteConnectionStringsSlot
Gets the connection strings associated with web app


```js
azure_arm_web.Sites_ListSiteConnectionStringsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteLogsConfigSlot
Gets the web app logs configuration


```js
azure_arm_web.Sites_GetSiteLogsConfigSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteLogsConfigSlot
Updates the meta data for web app


```js
azure_arm_web.Sites_UpdateSiteLogsConfigSlot({
  "resourceGroupName": "",
  "name": "",
  "siteLogsConfig": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* siteLogsConfig (object) **required** - Configuration of Azure web site
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteMetadataSlot
Updates the meta data for web app


```js
azure_arm_web.Sites_UpdateSiteMetadataSlot({
  "resourceGroupName": "",
  "name": "",
  "metadata": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* metadata (object) **required** - String dictionary resource
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ListSiteMetadataSlot
Gets the web app meta data.


```js
azure_arm_web.Sites_ListSiteMetadataSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ListSitePublishingCredentialsSlot
Gets the web app publishing credentials


```js
azure_arm_web.Sites_ListSitePublishingCredentialsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteConfigSlot
Gets the configuration of the web app


```js
azure_arm_web.Sites_GetSiteConfigSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteConfigSlot
Update the configuration of web app


```js
azure_arm_web.Sites_UpdateSiteConfigSlot({
  "resourceGroupName": "",
  "name": "",
  "siteConfig": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* siteConfig (object) **required** - Configuration of Azure web site
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_CreateOrUpdateSiteConfigSlot
Update the configuration of web app


```js
azure_arm_web.Sites_CreateOrUpdateSiteConfigSlot({
  "resourceGroupName": "",
  "name": "",
  "siteConfig": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* siteConfig (object) **required** - Configuration of Azure web site
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetDeploymentsSlot
List deployments


```js
azure_arm_web.Sites_GetDeploymentsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_DeleteDeploymentSlot
Delete the deployment


```js
azure_arm_web.Sites_DeleteDeploymentSlot({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* id (string) **required** - Id of the deployment
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetDeploymentSlot
Get the deployment


```js
azure_arm_web.Sites_GetDeploymentSlot({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* id (string) **required** - Id of the deployment
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_CreateDeploymentSlot
Create a deployment


```js
azure_arm_web.Sites_CreateDeploymentSlot({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "slot": "",
  "deployment": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* id (string) **required** - Id of the deployment
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* deployment (object) **required** - Represents user crendentials used for publishing activity
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteHostNameBindingsSlot
Get web app hostname bindings


```js
azure_arm_web.Sites_GetSiteHostNameBindingsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_DeleteSiteHostNameBindingSlot
Deletes a host name binding


```js
azure_arm_web.Sites_DeleteSiteHostNameBindingSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "hostName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* hostName (string) **required** - Name of host
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteHostNameBindingSlot
Get web app binding for a hostname


```js
azure_arm_web.Sites_GetSiteHostNameBindingSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "hostName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* hostName (string) **required** - Name of host
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_CreateOrUpdateSiteHostNameBindingSlot
Creates a web app hostname binding


```js
azure_arm_web.Sites_CreateOrUpdateSiteHostNameBindingSlot({
  "resourceGroupName": "",
  "name": "",
  "hostName": "",
  "hostNameBinding": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* hostName (string) **required** - Name of host
* hostNameBinding (object) **required** - A host name binding object
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ListSiteRelayServiceConnectionsSlot
Retrieves all Biztalk Hybrid Connections associated with this web app.


```js
azure_arm_web.Sites_ListSiteRelayServiceConnectionsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* slot (string) **required** - The name of the slot for the web app.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_DeleteSiteRelayServiceConnectionSlot
Removes the association to a Biztalk Hybrid Connection, identified by its entity name.


```js
azure_arm_web.Sites_DeleteSiteRelayServiceConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* entityName (string) **required** - The name by which the Hybrid Connection is identified
* slot (string) **required** - The name of the slot for the web app.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteRelayServiceConnectionSlot
Retrieves a Biztalk Hybrid Connection identified by its entity name.


```js
azure_arm_web.Sites_GetSiteRelayServiceConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* entityName (string) **required** - The name by which the Hybrid Connection is identified
* slot (string) **required** - The name of the slot for the web app.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteRelayServiceConnectionSlot
Creates a new association to a Biztalk Hybrid Connection, or updates an existing one.


```js
azure_arm_web.Sites_UpdateSiteRelayServiceConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "connectionEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* entityName (string) **required** - The name by which the Hybrid Connection is identified
* connectionEnvelope (object) **required** - Class that represents a Biztalk Hybrid Connection
* slot (string) **required** - The name of the slot for the web app.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_CreateOrUpdateSiteRelayServiceConnectionSlot
Creates a new association to a Biztalk Hybrid Connection, or updates an existing one.


```js
azure_arm_web.Sites_CreateOrUpdateSiteRelayServiceConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "connectionEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* entityName (string) **required** - The name by which the Hybrid Connection is identified
* connectionEnvelope (object) **required** - Class that represents a Biztalk Hybrid Connection
* slot (string) **required** - The name of the slot for the web app.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteInstanceIdentifiersSlot
Gets all instance of a web app


```js
azure_arm_web.Sites_GetSiteInstanceIdentifiersSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetInstanceDeploymentsSlot
List deployments


```js
azure_arm_web.Sites_GetInstanceDeploymentsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* instanceId (string) **required** - Id of web app instance
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_DeleteInstanceDeploymentSlot
Delete the deployment


```js
azure_arm_web.Sites_DeleteInstanceDeploymentSlot({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "slot": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* id (string) **required** - Id of the deployment
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* instanceId (string) **required** - Id of web app instance
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetInstanceDeploymentSlot
Get the deployment


```js
azure_arm_web.Sites_GetInstanceDeploymentSlot({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "slot": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* id (string) **required** - Id of the deployment
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* instanceId (string) **required** - Id of web app instance
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_CreateInstanceDeploymentSlot
Create a deployment


```js
azure_arm_web.Sites_CreateInstanceDeploymentSlot({
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

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* id (string) **required** - Id of the deployment
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* instanceId (string) **required** - Id of web app instance
* deployment (object) **required** - Represents user crendentials used for publishing activity
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_IsSiteCloneableSlot
Creates a new web app or modifies an existing web app.


```js
azure_arm_web.Sites_IsSiteCloneableSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group
* name (string) **required** - Name of the web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteMetricDefinitionsSlot
Gets metric definitions for web app


```js
azure_arm_web.Sites_GetSiteMetricDefinitionsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteMetricsSlot
Gets metrics for web app


```js
azure_arm_web.Sites_GetSiteMetricsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* details (boolean) - If true, metric details are included in response
* $filter (string) - Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteNetworkFeaturesSlot
Retrieves a view of all network features in use on this web app.


```js
azure_arm_web.Sites_GetSiteNetworkFeaturesSlot({
  "resourceGroupName": "",
  "name": "",
  "view": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* view (string) **required** - The type of view. This can either be "summary" or "detailed".
* slot (string) **required** - The name of the slot for this web app.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GenerateNewSitePublishingPasswordSlot
Generates new random app publishing password


```js
azure_arm_web.Sites_GenerateNewSitePublishingPasswordSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteOperationSlot
Gets the operation for a web app


```js
azure_arm_web.Sites_GetSiteOperationSlot({
  "resourceGroupName": "",
  "name": "",
  "operationId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* operationId (string) **required** - Id of an operation
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ListSitePremierAddOnsSlot



```js
azure_arm_web.Sites_ListSitePremierAddOnsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required**
* name (string) **required**
* slot (string) **required**
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_DeleteSitePremierAddOnSlot



```js
azure_arm_web.Sites_DeleteSitePremierAddOnSlot({
  "resourceGroupName": "",
  "name": "",
  "premierAddOnName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required**
* name (string) **required**
* premierAddOnName (string) **required**
* slot (string) **required**
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSitePremierAddOnSlot



```js
azure_arm_web.Sites_GetSitePremierAddOnSlot({
  "resourceGroupName": "",
  "name": "",
  "premierAddOnName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required**
* name (string) **required**
* premierAddOnName (string) **required**
* slot (string) **required**
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_AddSitePremierAddOnSlot



```js
azure_arm_web.Sites_AddSitePremierAddOnSlot({
  "resourceGroupName": "",
  "name": "",
  "premierAddOnName": "",
  "premierAddOn": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required**
* name (string) **required**
* premierAddOnName (string) **required**
* premierAddOn (object) **required**
* slot (string) **required**
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ListSitePublishingProfileXmlSlot
Gets the publishing profile for web app


```js
azure_arm_web.Sites_ListSitePublishingProfileXmlSlot({
  "resourceGroupName": "",
  "name": "",
  "options": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* options (object) **required** - Publishing options for requested profile
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_RecoverSiteSlot
Recovers a deleted web app


```js
azure_arm_web.Sites_RecoverSiteSlot({
  "resourceGroupName": "",
  "name": "",
  "recoveryEntity": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* recoveryEntity (object) **required** - Class containting details about site recovery operation.
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_ResetSlotConfigSlot
Resets the configuration settings of the current slot if they were previously modified by calling ApplySlotConfig API


```js
azure_arm_web.Sites_ResetSlotConfigSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_RestartSiteSlot
Restarts web app


```js
azure_arm_web.Sites_RestartSiteSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* softRestart (boolean) - Soft restart applies the configuration settings and restarts the app if necessary. Hard restart always restarts and reprovisions the app
* synchronous (boolean) - If true then the API will block until the app has been restarted
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSlotsDifferencesSlot
Get the difference in configuration settings between two web app slots


```js
azure_arm_web.Sites_GetSlotsDifferencesSlot({
  "resourceGroupName": "",
  "name": "",
  "slotSwapEntity": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slotSwapEntity (object) **required** - Class containing deployment slot parameters
* slot (string) **required** - Name of the source slot
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_SwapSlotsSlot
Swaps web app slots


```js
azure_arm_web.Sites_SwapSlotsSlot({
  "resourceGroupName": "",
  "name": "",
  "slotSwapEntity": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slotSwapEntity (object) **required** - Class containing deployment slot parameters
* slot (string) **required** - Name of source slot for the swap
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteSnapshotsSlot
Returns all Snapshots to the user.


```js
azure_arm_web.Sites_GetSiteSnapshotsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Webspace
* name (string) **required** - Website Name
* slot (string) **required** - Website Slot
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_DeleteSiteSourceControlSlot
Delete source control configuration of web app


```js
azure_arm_web.Sites_DeleteSiteSourceControlSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteSourceControlSlot
Get the source control configuration of web app


```js
azure_arm_web.Sites_GetSiteSourceControlSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteSourceControlSlot
Update the source control configuration of web app


```js
azure_arm_web.Sites_UpdateSiteSourceControlSlot({
  "resourceGroupName": "",
  "name": "",
  "siteSourceControl": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* siteSourceControl (object) **required** - Describes the source control configuration for web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_CreateOrUpdateSiteSourceControlSlot
Update the source control configuration of web app


```js
azure_arm_web.Sites_CreateOrUpdateSiteSourceControlSlot({
  "resourceGroupName": "",
  "name": "",
  "siteSourceControl": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* siteSourceControl (object) **required** - Describes the source control configuration for web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_StartSiteSlot
Starts web app


```js
azure_arm_web.Sites_StartSiteSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_StopSiteSlot
Stops web app


```js
azure_arm_web.Sites_StopSiteSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_SyncSiteRepositorySlot



```js
azure_arm_web.Sites_SyncSiteRepositorySlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required**
* name (string) **required**
* slot (string) **required**
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteUsagesSlot
Gets the quota usage numbers for web app


```js
azure_arm_web.Sites_GetSiteUsagesSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slot (string) **required** - Name of web app slot. If not specified then will default to production slot.
* $filter (string) - Return only usages specified in the filter. Filter is specified by using OData syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteVNETConnectionsSlot
Retrieves a list of all Virtual Network Connections associated with this web app.


```js
azure_arm_web.Sites_GetSiteVNETConnectionsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* slot (string) **required** - The name of the slot for this web app.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_DeleteSiteVNETConnectionSlot
Removes the specified Virtual Network Connection association from this web app.


```js
azure_arm_web.Sites_DeleteSiteVNETConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* vnetName (string) **required** - The name of the Virtual Network
* slot (string) **required** - The name of the slot for this web app.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteVNETConnectionSlot
Retrieves a specific Virtual Network Connection associated with this web app.


```js
azure_arm_web.Sites_GetSiteVNETConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* vnetName (string) **required** - The name of the Virtual Network
* slot (string) **required** - The name of the slot for this web app.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteVNETConnectionSlot
Adds a Virtual Network Connection or updates it's properties.


```js
azure_arm_web.Sites_UpdateSiteVNETConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "connectionEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* vnetName (string) **required** - The name of the Virtual Network
* connectionEnvelope (object) **required** - VNETInfo contract. This contract is public and is a stripped down version of VNETInfoInternal
* slot (string) **required** - The name of the slot for this web app.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_CreateOrUpdateSiteVNETConnectionSlot
Adds a Virtual Network Connection or updates it's properties.


```js
azure_arm_web.Sites_CreateOrUpdateSiteVNETConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "connectionEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* vnetName (string) **required** - The name of the Virtual Network
* connectionEnvelope (object) **required** - VNETInfo contract. This contract is public and is a stripped down version of VNETInfoInternal
* slot (string) **required** - The name of the slot for this web app.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteVnetGatewaySlot
Retrieves a Virtual Network connection gateway associated with this web app and virtual network.


```js
azure_arm_web.Sites_GetSiteVnetGatewaySlot({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* vnetName (string) **required** - The name of the Virtual Network
* gatewayName (string) **required** - The name of the gateway. The only gateway that exists presently is "primary"
* slot (string) **required** - The name of the slot for this web app.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteVNETConnectionGatewaySlot
Updates the Virtual Network Gateway.


```js
azure_arm_web.Sites_UpdateSiteVNETConnectionGatewaySlot({
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

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* vnetName (string) **required** - The name of the Virtual Network
* gatewayName (string) **required** - The name of the gateway. The only gateway that exists presently is "primary"
* connectionEnvelope (object) **required** - The VnetGateway contract. This is used to give the vnet gateway access to the VPN package.
* slot (string) **required** - The name of the slot for this web app.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_CreateOrUpdateSiteVNETConnectionGatewaySlot
Updates the Virtual Network Gateway.


```js
azure_arm_web.Sites_CreateOrUpdateSiteVNETConnectionGatewaySlot({
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

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* vnetName (string) **required** - The name of the Virtual Network
* gatewayName (string) **required** - The name of the gateway. The only gateway that exists presently is "primary"
* connectionEnvelope (object) **required** - The VnetGateway contract. This is used to give the vnet gateway access to the VPN package.
* slot (string) **required** - The name of the slot for this web app.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSlotsDifferencesFromProduction
Get the difference in configuration settings between two web app slots


```js
azure_arm_web.Sites_GetSlotsDifferencesFromProduction({
  "resourceGroupName": "",
  "name": "",
  "slotSwapEntity": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slotSwapEntity (object) **required** - Class containing deployment slot parameters
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_SwapSlotWithProduction
Swaps web app slots


```js
azure_arm_web.Sites_SwapSlotWithProduction({
  "resourceGroupName": "",
  "name": "",
  "slotSwapEntity": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* slotSwapEntity (object) **required** - Class containing deployment slot parameters
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteSnapshots
Returns all Snapshots to the user.


```js
azure_arm_web.Sites_GetSiteSnapshots({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Webspace
* name (string) **required** - Website Name
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_DeleteSiteSourceControl
Delete source control configuration of web app


```js
azure_arm_web.Sites_DeleteSiteSourceControl({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteSourceControl
Get the source control configuration of web app


```js
azure_arm_web.Sites_GetSiteSourceControl({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteSourceControl
Update the source control configuration of web app


```js
azure_arm_web.Sites_UpdateSiteSourceControl({
  "resourceGroupName": "",
  "name": "",
  "siteSourceControl": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* siteSourceControl (object) **required** - Describes the source control configuration for web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_CreateOrUpdateSiteSourceControl
Update the source control configuration of web app


```js
azure_arm_web.Sites_CreateOrUpdateSiteSourceControl({
  "resourceGroupName": "",
  "name": "",
  "siteSourceControl": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* siteSourceControl (object) **required** - Describes the source control configuration for web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_StartSite
Starts web app


```js
azure_arm_web.Sites_StartSite({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_StopSite
Stops web app


```js
azure_arm_web.Sites_StopSite({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_SyncSiteRepository



```js
azure_arm_web.Sites_SyncSiteRepository({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required**
* name (string) **required**
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteUsages
Gets the quota usage numbers for web app


```js
azure_arm_web.Sites_GetSiteUsages({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of resource group
* name (string) **required** - Name of web app
* $filter (string) - Return only usages specified in the filter. Filter is specified by using OData syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteVNETConnections
Retrieves a list of all Virtual Network Connections associated with this web app.


```js
azure_arm_web.Sites_GetSiteVNETConnections({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_DeleteSiteVNETConnection
Removes the specified Virtual Network Connection association from this web app.


```js
azure_arm_web.Sites_DeleteSiteVNETConnection({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* vnetName (string) **required** - The name of the Virtual Network
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteVNETConnection
Retrieves a specific Virtual Network Connection associated with this web app.


```js
azure_arm_web.Sites_GetSiteVNETConnection({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* vnetName (string) **required** - The name of the Virtual Network
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteVNETConnection
Adds a Virtual Network Connection or updates it's properties.


```js
azure_arm_web.Sites_UpdateSiteVNETConnection({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* vnetName (string) **required** - The name of the Virtual Network
* connectionEnvelope (object) **required** - VNETInfo contract. This contract is public and is a stripped down version of VNETInfoInternal
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_CreateOrUpdateSiteVNETConnection
Adds a Virtual Network Connection or updates it's properties.


```js
azure_arm_web.Sites_CreateOrUpdateSiteVNETConnection({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* vnetName (string) **required** - The name of the Virtual Network
* connectionEnvelope (object) **required** - VNETInfo contract. This contract is public and is a stripped down version of VNETInfoInternal
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_GetSiteVnetGateway
Retrieves a Virtual Network connection gateway associated with this web app and virtual network.


```js
azure_arm_web.Sites_GetSiteVnetGateway({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* vnetName (string) **required** - The name of the Virtual Network
* gatewayName (string) **required** - The name of the gateway. The only gateway that exists presently is "primary"
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_UpdateSiteVNETConnectionGateway
Updates the Virtual Network Gateway.


```js
azure_arm_web.Sites_UpdateSiteVNETConnectionGateway({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* vnetName (string) **required** - The name of the Virtual Network
* gatewayName (string) **required** - The name of the gateway. The only gateway that exists presently is "primary"
* connectionEnvelope (object) **required** - The VnetGateway contract. This is used to give the vnet gateway access to the VPN package.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Sites_CreateOrUpdateSiteVNETConnectionGateway
Updates the Virtual Network Gateway.


```js
azure_arm_web.Sites_CreateOrUpdateSiteVNETConnectionGateway({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The resource group name
* name (string) **required** - The name of the web app
* vnetName (string) **required** - The name of the Virtual Network
* gatewayName (string) **required** - The name of the gateway. The only gateway that exists presently is "primary"
* connectionEnvelope (object) **required** - The VnetGateway contract. This is used to give the vnet gateway access to the VPN package.
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Recommendations_GetRecommendationHistoryForSite
Gets the list of past recommendations optionally specified by the time range.


```js
azure_arm_web.Recommendations_GetRecommendationHistoryForSite({
  "resourceGroupName": "",
  "siteName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Resource group name
* siteName (string) **required** - Site name
* startTime (string) - The start time of a time range to query, e.g. $filter=startTime eq '2015-01-01T00:00:00Z' and endTime eq '2015-01-02T00:00:00Z'
* endTime (string) - The end time of a time range to query, e.g. $filter=startTime eq '2015-01-01T00:00:00Z' and endTime eq '2015-01-02T00:00:00Z'
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Recommendations_GetRecommendedRulesForSite
Gets a list of recommendations associated with the specified web site.


```js
azure_arm_web.Recommendations_GetRecommendedRulesForSite({
  "resourceGroupName": "",
  "siteName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Resource group name
* siteName (string) **required** - Site name
* featured (boolean) - If set, this API returns only the most critical recommendation among the others. Otherwise this API returns all recommendations available
* siteSku (string) - The name of site SKU.
* numSlots (integer) - The number of site slots associated to the site
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

### Recommendations_GetRuleDetailsBySiteName
Gets the detailed properties of the recommendation object for the specified web site.


```js
azure_arm_web.Recommendations_GetRuleDetailsBySiteName({
  "resourceGroupName": "",
  "siteName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Resource group name
* siteName (string) **required** - Site name
* name (string) **required** - Recommendation rule name
* subscriptionId (string) **required** - Subscription Id
* api-version (string) **required** - API Version

