# @datafire/azure_web_appservicecertificateorders

Client library for AppServiceCertificateOrders API Client

## Installation and Usage
```bash
npm install --save @datafire/azure_web_appservicecertificateorders
```
```js
let azure_web_appservicecertificateorders = require('@datafire/azure_web_appservicecertificateorders').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_web_appservicecertificateorders.AppServiceCertificateOrders_List({
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### AppServiceCertificateOrders_List
List all certificate orders in a subscription.


```js
azure_web_appservicecertificateorders.AppServiceCertificateOrders_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [AppServiceCertificateOrderCollection](#appservicecertificateordercollection)

### AppServiceCertificateOrders_ValidatePurchaseInformation
Validate information for a certificate order.


```js
azure_web_appservicecertificateorders.AppServiceCertificateOrders_ValidatePurchaseInformation({
  "appServiceCertificateOrder": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * appServiceCertificateOrder **required** [AppServiceCertificateOrder](#appservicecertificateorder)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### AppServiceCertificateOrders_ListByResourceGroup
Get certificate orders in a resource group.


```js
azure_web_appservicecertificateorders.AppServiceCertificateOrders_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [AppServiceCertificateOrderCollection](#appservicecertificateordercollection)

### AppServiceCertificateOrders_Delete
Delete an existing certificate order.


```js
azure_web_appservicecertificateorders.AppServiceCertificateOrders_Delete({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * certificateOrderName **required** `string`: Name of the certificate order.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### AppServiceCertificateOrders_Get
Get a certificate order.


```js
azure_web_appservicecertificateorders.AppServiceCertificateOrders_Get({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * certificateOrderName **required** `string`: Name of the certificate order..
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [AppServiceCertificateOrder](#appservicecertificateorder)

### AppServiceCertificateOrders_Update
Create or update a certificate purchase order.


```js
azure_web_appservicecertificateorders.AppServiceCertificateOrders_Update({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "certificateDistinguishedName": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * certificateOrderName **required** `string`: Name of the certificate order.
  * certificateDistinguishedName **required** [AppServiceCertificateOrderPatchResource](#appservicecertificateorderpatchresource)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [AppServiceCertificateOrder](#appservicecertificateorder)

### AppServiceCertificateOrders_CreateOrUpdate
Create or update a certificate purchase order.


```js
azure_web_appservicecertificateorders.AppServiceCertificateOrders_CreateOrUpdate({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "certificateDistinguishedName": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * certificateOrderName **required** `string`: Name of the certificate order.
  * certificateDistinguishedName **required** [AppServiceCertificateOrder](#appservicecertificateorder)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [AppServiceCertificateOrder](#appservicecertificateorder)

### AppServiceCertificateOrders_ListCertificates
List all certificates associated with a certificate order.


```js
azure_web_appservicecertificateorders.AppServiceCertificateOrders_ListCertificates({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * certificateOrderName **required** `string`: Name of the certificate order.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [AppServiceCertificateCollection](#appservicecertificatecollection)

### AppServiceCertificateOrders_DeleteCertificate
Delete the certificate associated with a certificate order.


```js
azure_web_appservicecertificateorders.AppServiceCertificateOrders_DeleteCertificate({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * certificateOrderName **required** `string`: Name of the certificate order.
  * name **required** `string`: Name of the certificate.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### AppServiceCertificateOrders_GetCertificate
Get the certificate associated with a certificate order.


```js
azure_web_appservicecertificateorders.AppServiceCertificateOrders_GetCertificate({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * certificateOrderName **required** `string`: Name of the certificate order.
  * name **required** `string`: Name of the certificate.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [AppServiceCertificateResource](#appservicecertificateresource)

### AppServiceCertificateOrders_UpdateCertificate
Creates or updates a certificate and associates with key vault secret.


```js
azure_web_appservicecertificateorders.AppServiceCertificateOrders_UpdateCertificate({
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
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * certificateOrderName **required** `string`: Name of the certificate order.
  * name **required** `string`: Name of the certificate.
  * keyVaultCertificate **required** [AppServiceCertificatePatchResource](#appservicecertificatepatchresource)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [AppServiceCertificateResource](#appservicecertificateresource)

### AppServiceCertificateOrders_CreateOrUpdateCertificate
Creates or updates a certificate and associates with key vault secret.


```js
azure_web_appservicecertificateorders.AppServiceCertificateOrders_CreateOrUpdateCertificate({
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
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * certificateOrderName **required** `string`: Name of the certificate order.
  * name **required** `string`: Name of the certificate.
  * keyVaultCertificate **required** [AppServiceCertificateResource](#appservicecertificateresource)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [AppServiceCertificateResource](#appservicecertificateresource)

### AppServiceCertificateOrders_Reissue
Reissue an existing certificate order.


```js
azure_web_appservicecertificateorders.AppServiceCertificateOrders_Reissue({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "reissueCertificateOrderRequest": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * certificateOrderName **required** `string`: Name of the certificate order.
  * reissueCertificateOrderRequest **required** [ReissueCertificateOrderRequest](#reissuecertificateorderrequest)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### AppServiceCertificateOrders_Renew
Renew an existing certificate order.


```js
azure_web_appservicecertificateorders.AppServiceCertificateOrders_Renew({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "renewCertificateOrderRequest": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * certificateOrderName **required** `string`: Name of the certificate order.
  * renewCertificateOrderRequest **required** [RenewCertificateOrderRequest](#renewcertificateorderrequest)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### AppServiceCertificateOrders_ResendEmail
Resend certificate email.


```js
azure_web_appservicecertificateorders.AppServiceCertificateOrders_ResendEmail({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * certificateOrderName **required** `string`: Name of the certificate order.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### AppServiceCertificateOrders_ResendRequestEmails
Verify domain ownership for this certificate order.


```js
azure_web_appservicecertificateorders.AppServiceCertificateOrders_ResendRequestEmails({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "nameIdentifier": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * certificateOrderName **required** `string`: Name of the certificate order.
  * nameIdentifier **required** `object`: Identifies an object.
    * name `string`: Name of the object.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### AppServiceCertificateOrders_RetrieveSiteSeal
Verify domain ownership for this certificate order.


```js
azure_web_appservicecertificateorders.AppServiceCertificateOrders_RetrieveSiteSeal({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "siteSealRequest": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * certificateOrderName **required** `string`: Name of the certificate order.
  * siteSealRequest **required** [SiteSealRequest](#sitesealrequest)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteSeal](#siteseal)

### AppServiceCertificateOrders_VerifyDomainOwnership
Verify domain ownership for this certificate order.


```js
azure_web_appservicecertificateorders.AppServiceCertificateOrders_VerifyDomainOwnership({
  "resourceGroupName": "",
  "certificateOrderName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * certificateOrderName **required** `string`: Name of the certificate order.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### AppServiceCertificateOrders_RetrieveCertificateActions
Retrieve the list of certificate actions.


```js
azure_web_appservicecertificateorders.AppServiceCertificateOrders_RetrieveCertificateActions({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the certificate order.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [CertificateOrderAction](#certificateorderaction)

### AppServiceCertificateOrders_RetrieveCertificateEmailHistory
Retrieve email history.


```js
azure_web_appservicecertificateorders.AppServiceCertificateOrders_RetrieveCertificateEmailHistory({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the certificate order.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [CertificateEmail](#certificateemail)



## Definitions

### AppServiceCertificate
* AppServiceCertificate `object`: Key Vault container for a certificate that is purchased through Azure.
  * keyVaultId `string`: Key Vault resource Id.
  * keyVaultSecretName `string`: Key Vault secret name.
  * provisioningState `string` (values: Initialized, WaitingOnCertificateOrder, Succeeded, CertificateOrderFailed, OperationNotPermittedOnKeyVault, AzureServiceUnauthorizedToAccessKeyVault, KeyVaultDoesNotExist, KeyVaultSecretDoesNotExist, UnknownError, ExternalPrivateKey, Unknown): Status of the Key Vault secret.

### AppServiceCertificateCollection
* AppServiceCertificateCollection `object`: Collection of certitificateorder certificates.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [AppServiceCertificateResource](#appservicecertificateresource)

### AppServiceCertificateOrder
* AppServiceCertificateOrder `object`: SSL certificate purchase order.
  * properties `object`: AppServiceCertificateOrder resource specific properties
    * appServiceCertificateNotRenewableReasons `array`: Reasons why App Service Certificate is not renewable at the current moment.
      * items `string` (values: RegistrationStatusNotSupportedForRenewal, ExpirationNotInRenewalTimeRange, SubscriptionNotActive)
    * autoRenew `boolean`: <code>true</code> if the certificate should be automatically renewed when it expires; otherwise, <code>false</code>.
    * certificates `object`: State of the Key Vault secret.
    * csr `string`: Last CSR that was created for this order.
    * distinguishedName `string`: Certificate distinguished name.
    * domainVerificationToken `string`: Domain verification token.
    * expirationTime `string`: Certificate expiration time.
    * intermediate [CertificateDetails](#certificatedetails)
    * isPrivateKeyExternal `boolean`: <code>true</code> if private key is external; otherwise, <code>false</code>.
    * keySize `integer`: Certificate key size.
    * lastCertificateIssuanceTime `string`: Certificate last issuance time.
    * nextAutoRenewalTimeStamp `string`: Time stamp when the certificate would be auto renewed next
    * productType **required** `string` (values: StandardDomainValidatedSsl, StandardDomainValidatedWildCardSsl): Certificate product type.
    * provisioningState `string` (values: Succeeded, Failed, Canceled, InProgress, Deleting): Status of certificate order.
    * root [CertificateDetails](#certificatedetails)
    * serialNumber `string`: Current serial number of the certificate.
    * signedCertificate [CertificateDetails](#certificatedetails)
    * status `string` (values: Pendingissuance, Issued, Revoked, Canceled, Denied, Pendingrevocation, PendingRekey, Unused, Expired, NotSubmitted): Current order status.
    * validityInYears `integer`: Duration in years (must be between 1 and 3).
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * location **required** `string`: Resource Location.
  * name `string`: Resource Name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### AppServiceCertificateOrderCollection
* AppServiceCertificateOrderCollection `object`: Collection of certitificate orders.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [AppServiceCertificateOrder](#appservicecertificateorder)

### AppServiceCertificateOrderPatchResource
* AppServiceCertificateOrderPatchResource `object`: ARM resource for a certificate order that is purchased through Azure.
  * properties `object`: AppServiceCertificateOrderPatchResource resource specific properties
    * appServiceCertificateNotRenewableReasons `array`: Reasons why App Service Certificate is not renewable at the current moment.
      * items `string` (values: RegistrationStatusNotSupportedForRenewal, ExpirationNotInRenewalTimeRange, SubscriptionNotActive)
    * autoRenew `boolean`: <code>true</code> if the certificate should be automatically renewed when it expires; otherwise, <code>false</code>.
    * certificates `object`: State of the Key Vault secret.
    * csr `string`: Last CSR that was created for this order.
    * distinguishedName `string`: Certificate distinguished name.
    * domainVerificationToken `string`: Domain verification token.
    * expirationTime `string`: Certificate expiration time.
    * intermediate [CertificateDetails](#certificatedetails)
    * isPrivateKeyExternal `boolean`: <code>true</code> if private key is external; otherwise, <code>false</code>.
    * keySize `integer`: Certificate key size.
    * lastCertificateIssuanceTime `string`: Certificate last issuance time.
    * nextAutoRenewalTimeStamp `string`: Time stamp when the certificate would be auto renewed next
    * productType **required** `string` (values: StandardDomainValidatedSsl, StandardDomainValidatedWildCardSsl): Certificate product type.
    * provisioningState `string` (values: Succeeded, Failed, Canceled, InProgress, Deleting): Status of certificate order.
    * root [CertificateDetails](#certificatedetails)
    * serialNumber `string`: Current serial number of the certificate.
    * signedCertificate [CertificateDetails](#certificatedetails)
    * status `string` (values: Pendingissuance, Issued, Revoked, Canceled, Denied, Pendingrevocation, PendingRekey, Unused, Expired, NotSubmitted): Current order status.
    * validityInYears `integer`: Duration in years (must be between 1 and 3).
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### AppServiceCertificatePatchResource
* AppServiceCertificatePatchResource `object`: Key Vault container ARM resource for a certificate that is purchased through Azure.
  * properties [AppServiceCertificate](#appservicecertificate)
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### AppServiceCertificateResource
* AppServiceCertificateResource `object`: Key Vault container ARM resource for a certificate that is purchased through Azure.
  * properties [AppServiceCertificate](#appservicecertificate)
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * location **required** `string`: Resource Location.
  * name `string`: Resource Name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### CertificateDetails
* CertificateDetails `object`: SSL certificate details.
  * issuer `string`: Certificate Issuer.
  * notAfter `string`: Date Certificate is valid to.
  * notBefore `string`: Date Certificate is valid from.
  * rawData `string`: Raw certificate data.
  * serialNumber `string`: Certificate Serial Number.
  * signatureAlgorithm `string`: Certificate Signature algorithm.
  * subject `string`: Certificate Subject.
  * thumbprint `string`: Certificate Thumbprint.
  * version `integer`: Certificate Version.

### CertificateEmail
* CertificateEmail `object`: SSL certificate email.
  * properties `object`: CertificateEmail resource specific properties
    * emailId `string`: Email id.
    * timeStamp `string`: Time stamp.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### CertificateOrderAction
* CertificateOrderAction `object`: Certificate order action.
  * properties `object`: CertificateOrderAction resource specific properties
    * createdAt `string`: Time at which the certificate action was performed.
    * type `string` (values: CertificateIssued, CertificateOrderCanceled, CertificateOrderCreated, CertificateRevoked, DomainValidationComplete, FraudDetected, OrgNameChange, OrgValidationComplete, SanDrop, FraudCleared, CertificateExpired, CertificateExpirationWarning, FraudDocumentationRequired, Unknown): Action type.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### ReissueCertificateOrderRequest
* ReissueCertificateOrderRequest `object`: Class representing certificate reissue request.
  * properties `object`: ReissueCertificateOrderRequest resource specific properties
    * csr `string`: Csr to be used for re-key operation.
    * delayExistingRevokeInHours `integer`: Delay in hours to revoke existing certificate after the new certificate is issued.
    * isPrivateKeyExternal `boolean`: Should we change the ASC type (from managed private key to external private key and vice versa).
    * keySize `integer`: Certificate Key Size.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### RenewCertificateOrderRequest
* RenewCertificateOrderRequest `object`: Class representing certificate renew request.
  * properties `object`: RenewCertificateOrderRequest resource specific properties
    * csr `string`: Csr to be used for re-key operation.
    * isPrivateKeyExternal `boolean`: Should we change the ASC type (from managed private key to external private key and vice versa).
    * keySize `integer`: Certificate Key Size.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### SiteSeal
* SiteSeal `object`: Site seal
  * html **required** `string`: HTML snippet

### SiteSealRequest
* SiteSealRequest `object`: Site seal request.
  * lightTheme `boolean`: If <code>true</code> use the light color theme for site seal; otherwise, use the default color theme.
  * locale `string`: Locale of site seal.


