# @datafire/azure_provisioningservices_iotdps

Client library for iotDpsClient

## Installation and Usage
```bash
npm install --save @datafire/azure_provisioningservices_iotdps
```
```js
let azure_provisioningservices_iotdps = require('@datafire/azure_provisioningservices_iotdps').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_provisioningservices_iotdps.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

API for using the Azure IoT Hub Device Provisioning Service features.

## Actions

### Operations_List
Lists all of the available Microsoft.Devices REST API operations.


```js
azure_provisioningservices_iotdps.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.

#### Output
* output [OperationListResult](#operationlistresult)

### IotDpsResource_CheckProvisioningServiceNameAvailability
Check if a provisioning service name is available. This will validate if the name is syntactically valid and if the name is usable


```js
azure_provisioningservices_iotdps.IotDpsResource_CheckProvisioningServiceNameAvailability({
  "subscriptionId": "",
  "arguments": {
    "name": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * arguments **required** [OperationInputs](#operationinputs)
  * api-version **required** `string`: The version of the API.

#### Output
* output [NameAvailabilityInfo](#nameavailabilityinfo)

### IotDpsResource_ListBySubscription
List all the provisioning services for a given subscription id.


```js
azure_provisioningservices_iotdps.IotDpsResource_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * api-version **required** `string`: The version of the API.

#### Output
* output [ProvisioningServiceDescriptionListResult](#provisioningservicedescriptionlistresult)

### IotDpsResource_ListByResourceGroup
Get a list of all provisioning services in the given resource group.


```js
azure_provisioningservices_iotdps.IotDpsResource_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: Resource group identifier.
  * api-version **required** `string`: The version of the API.

#### Output
* output [ProvisioningServiceDescriptionListResult](#provisioningservicedescriptionlistresult)

### IotDpsResource_Delete
Deletes the Provisioning Service.


```js
azure_provisioningservices_iotdps.IotDpsResource_Delete({
  "provisioningServiceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * provisioningServiceName **required** `string`: Name of provisioning service to delete.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: Resource group identifier.
  * api-version **required** `string`: The version of the API.

#### Output
*Output schema unknown*

### IotDpsResource_Get
Get the metadata of the provisioning service without SAS keys.


```js
azure_provisioningservices_iotdps.IotDpsResource_Get({
  "provisioningServiceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * provisioningServiceName **required** `string`: Name of the provisioning service to retrieve.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: Resource group name.
  * api-version **required** `string`: The version of the API.

#### Output
* output [ProvisioningServiceDescription](#provisioningservicedescription)

### IotDpsResource_Update
Update an existing provisioning service's tags. to update other fields use the CreateOrUpdate method


```js
azure_provisioningservices_iotdps.IotDpsResource_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "provisioningServiceName": "",
  "ProvisioningServiceTags": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: Resource group identifier.
  * provisioningServiceName **required** `string`: Name of provisioning service to create or update.
  * ProvisioningServiceTags **required** [TagsResource](#tagsresource)
  * api-version **required** `string`: The version of the API.

#### Output
* output [ProvisioningServiceDescription](#provisioningservicedescription)

### IotDpsResource_CreateOrUpdate
Create or update the metadata of the provisioning service. The usual pattern to modify a property is to retrieve the provisioning service metadata and security metadata, and then combine them with the modified values in a new body to update the provisioning service.


```js
azure_provisioningservices_iotdps.IotDpsResource_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "provisioningServiceName": "",
  "iotDpsDescription": {
    "sku": {},
    "properties": {}
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: Resource group identifier.
  * provisioningServiceName **required** `string`: Name of provisioning service to create or update.
  * iotDpsDescription **required** [ProvisioningServiceDescription](#provisioningservicedescription)
  * api-version **required** `string`: The version of the API.

#### Output
* output [ProvisioningServiceDescription](#provisioningservicedescription)

### DpsCertificates_List
Get all the certificates tied to the provisioning service.


```js
azure_provisioningservices_iotdps.DpsCertificates_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "provisioningServiceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: Name of resource group.
  * provisioningServiceName **required** `string`: Name of provisioning service to retrieve certificates for.
  * api-version **required** `string`: The version of the API.

#### Output
* output [CertificateListDescription](#certificatelistdescription)

### DpsCertificate_Delete
Deletes the specified certificate assosciated with the Provisioning Service


```js
azure_provisioningservices_iotdps.DpsCertificate_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "If-Match": "",
  "provisioningServiceName": "",
  "certificateName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: Resource group identifier.
  * If-Match **required** `string`: ETag of the certificate
  * provisioningServiceName **required** `string`: The name of the provisioning service.
  * certificateName **required** `string`: This is a mandatory field, and is the logical name of the certificate that the provisioning service will access by.
  * certificate.name `string`: This is optional, and it is the Common Name of the certificate.
  * certificate.rawBytes `string`: Raw data within the certificate.
  * certificate.isVerified `boolean`: Indicates if certificate has been verified by owner of the private key.
  * certificate.purpose `string` (values: clientAuthentication, serverAuthentication): A description that mentions the purpose of the certificate.
  * certificate.created `string`: Time the certificate is created.
  * certificate.lastUpdated `string`: Time the certificate is last updated.
  * certificate.hasPrivateKey `boolean`: Indicates if the certificate contains a private key.
  * certificate.nonce `string`: Random number generated to indicate Proof of Possession.
  * api-version **required** `string`: The version of the API.

#### Output
*Output schema unknown*

### DpsCertificate_Get
Get the certificate from the provisioning service.


```js
azure_provisioningservices_iotdps.DpsCertificate_Get({
  "certificateName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "provisioningServiceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * certificateName **required** `string`: Name of the certificate to retrieve.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: Resource group identifier.
  * provisioningServiceName **required** `string`: Name of the provisioning service the certificate is associated with.
  * If-Match `string`: ETag of the certificate.
  * api-version **required** `string`: The version of the API.

#### Output
* output [CertificateResponse](#certificateresponse)

### DpsCertificate_CreateOrUpdate
Add new certificate or update an existing certificate.


```js
azure_provisioningservices_iotdps.DpsCertificate_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "provisioningServiceName": "",
  "certificateName": "",
  "certificateDescription": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: Resource group identifier.
  * provisioningServiceName **required** `string`: The name of the provisioning service.
  * certificateName **required** `string`: The name of the certificate create or update.
  * certificateDescription **required** [CertificateBodyDescription](#certificatebodydescription)
  * If-Match `string`: ETag of the certificate. This is required to update an existing certificate, and ignored while creating a brand new certificate.

#### Output
* output [CertificateResponse](#certificateresponse)

### DpsCertificate_GenerateVerificationCode
Generate verification code for Proof of Possession.


```js
azure_provisioningservices_iotdps.DpsCertificate_GenerateVerificationCode({
  "certificateName": "",
  "If-Match": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "provisioningServiceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * certificateName **required** `string`: The mandatory logical name of the certificate, that the provisioning service uses to access.
  * If-Match **required** `string`: ETag of the certificate. This is required to update an existing certificate, and ignored while creating a brand new certificate.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: name of resource group.
  * provisioningServiceName **required** `string`: Name of provisioning service.
  * certificate.name `string`: Common Name for the certificate.
  * certificate.rawBytes `string`: Raw data of certificate.
  * certificate.isVerified `boolean`: Indicates if the certificate has been verified by owner of the private key.
  * certificate.purpose `string` (values: clientAuthentication, serverAuthentication): Description mentioning the purpose of the certificate.
  * certificate.created `string`: Certificate creation time.
  * certificate.lastUpdated `string`: Certificate last updated time.
  * certificate.hasPrivateKey `boolean`: Indicates if the certificate contains private key.
  * certificate.nonce `string`: Random number generated to indicate Proof of Possession.
  * api-version **required** `string`: The version of the API.

#### Output
* output [VerificationCodeResponse](#verificationcoderesponse)

### DpsCertificate_VerifyCertificate
Verifies the certificate's private key possession by providing the leaf cert issued by the verifying pre uploaded certificate.


```js
azure_provisioningservices_iotdps.DpsCertificate_VerifyCertificate({
  "certificateName": "",
  "If-Match": "",
  "request": {},
  "subscriptionId": "",
  "resourceGroupName": "",
  "provisioningServiceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * certificateName **required** `string`: The mandatory logical name of the certificate, that the provisioning service uses to access.
  * If-Match **required** `string`: ETag of the certificate.
  * request **required** [VerificationCodeRequest](#verificationcoderequest)
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: Resource group name.
  * provisioningServiceName **required** `string`: Provisioning service name.
  * certificate.name `string`: Common Name for the certificate.
  * certificate.rawBytes `string`: Raw data of certificate.
  * certificate.isVerified `boolean`: Indicates if the certificate has been verified by owner of the private key.
  * certificate.purpose `string` (values: clientAuthentication, serverAuthentication): Describe the purpose of the certificate.
  * certificate.created `string`: Certificate creation time.
  * certificate.lastUpdated `string`: Certificate last updated time.
  * certificate.hasPrivateKey `boolean`: Indicates if the certificate contains private key.
  * certificate.nonce `string`: Random number generated to indicate Proof of Possession.
  * api-version **required** `string`: The version of the API.

#### Output
* output [CertificateResponse](#certificateresponse)

### IotDpsResource_ListKeysForKeyName
List primary and secondary keys for a specific key name


```js
azure_provisioningservices_iotdps.IotDpsResource_ListKeysForKeyName({
  "provisioningServiceName": "",
  "keyName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * provisioningServiceName **required** `string`: Name of the provisioning service.
  * keyName **required** `string`: Logical key name to get key-values for.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the provisioning service.
  * api-version **required** `string`: The version of the API.

#### Output
* output [SharedAccessSignatureAuthorizationRule[AccessRightsDescription]](#sharedaccesssignatureauthorizationrule[accessrightsdescription])

### IotDpsResource_ListKeys
List the primary and secondary keys for a provisioning service.


```js
azure_provisioningservices_iotdps.IotDpsResource_ListKeys({
  "provisioningServiceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * provisioningServiceName **required** `string`: The provisioning service name to get the shared access keys for.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: resource group name
  * api-version **required** `string`: The version of the API.

#### Output
* output [SharedAccessSignatureAuthorizationRuleListResult](#sharedaccesssignatureauthorizationrulelistresult)

### IotDpsResource_GetOperationResult
Gets the status of a long running operation, such as create, update or delete a provisioning service.


```js
azure_provisioningservices_iotdps.IotDpsResource_GetOperationResult({
  "operationId": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "provisioningServiceName": "",
  "asyncinfo": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * operationId **required** `string`: Operation id corresponding to long running operation. Use this to poll for the status.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: Resource group identifier.
  * provisioningServiceName **required** `string`: Name of provisioning service that the operation is running on.
  * asyncinfo **required** `string`: Async header used to poll on the status of the operation, obtained while creating the long running operation.
  * api-version **required** `string`: The version of the API.

#### Output
* output [AsyncOperationResult](#asyncoperationresult)

### IotDpsResource_listValidSkus
Gets the list of valid SKUs and tiers for a provisioning service.


```js
azure_provisioningservices_iotdps.IotDpsResource_listValidSkus({
  "provisioningServiceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * provisioningServiceName **required** `string`: Name of provisioning service.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: Name of resource group.
  * api-version **required** `string`: The version of the API.

#### Output
* output [IotDpsSkuDefinitionListResult](#iotdpsskudefinitionlistresult)



## Definitions

### AsyncOperationResult
* AsyncOperationResult `object`: Result of a long running operation.
  * error [ErrorMesssage](#errormesssage)
  * status `string`: current status of a long running operation.

### CertificateBodyDescription
* CertificateBodyDescription `object`: The JSON-serialized X509 Certificate.
  * certificate `string`: Base-64 representation of the X509 leaf certificate .cer file or just .pem file content.

### CertificateListDescription
* CertificateListDescription `object`: The JSON-serialized array of Certificate objects.
  * value `array`: The array of Certificate objects.
    * items [CertificateResponse](#certificateresponse)

### CertificateProperties
* CertificateProperties `object`: The description of an X509 CA Certificate.
  * created `string`: The certificate's creation date and time.
  * expiry `string`: The certificate's expiration date and time.
  * isVerified `boolean`: Determines whether certificate has been verified.
  * subject `string`: The certificate's subject name.
  * thumbprint `string`: The certificate's thumbprint.
  * updated `string`: The certificate's last update date and time.

### CertificateResponse
* CertificateResponse `object`: The X509 Certificate.
  * etag `string`: The entity tag.
  * id `string`: The resource identifier.
  * name `string`: The name of the certificate.
  * properties [CertificateProperties](#certificateproperties)
  * type `string`: The resource type.

### ErrorDetails
* ErrorDetails `object`: Error details.
  * Code `string`: The error code.
  * Details `string`: The error details.
  * HttpStatusCode `string`: The HTTP status code.
  * Message `string`: The error message.

### ErrorMesssage
* ErrorMesssage `object`: Error response containing message and code.
  * code `string`: standard error code
  * details `string`: detailed summary of error
  * message `string`: standard error description

### IotDpsPropertiesDescription
* IotDpsPropertiesDescription `object`: the service specific properties of a provisoning service, including keys, linked iot hubs, current state, and system generated properties such as hostname and idScope
  * allocationPolicy `string` (values: Hashed, GeoLatency, Static): Allocation policy to be used by this provisioning service.
  * authorizationPolicies `array`: List of authorization keys for a provisioning service.
    * items [SharedAccessSignatureAuthorizationRule[AccessRightsDescription]](#sharedaccesssignatureauthorizationrule[accessrightsdescription])
  * deviceProvisioningHostName `string`: Device endpoint for this provisioning service.
  * idScope `string`: Unique identifier of this provisioning service.
  * iotHubs `array`: List of IoT hubs assosciated with this provisioning service.
    * items [IotHubDefinitionDescription](#iothubdefinitiondescription)
  * provisioningState `string`: The ARM provisioning state of the provisioning service.
  * serviceOperationsHostName `string`: Service endpoint for provisioning service.
  * state `string` (values: Activating, Active, Deleting, Deleted, ActivationFailed, DeletionFailed, Transitioning, Suspending, Suspended, Resuming, FailingOver, FailoverFailed): Current state of the provisioning service.

### IotDpsSkuDefinition
* IotDpsSkuDefinition `object`: Available Sku's of tier and units.
  * name `string` (values: S1): Sku name.

### IotDpsSkuDefinitionListResult
* IotDpsSkuDefinitionListResult `object`: List of available SKUs.
  * nextLink `string`: The next link.
  * value `array`: The list of SKU's
    * items [IotDpsSkuDefinition](#iotdpsskudefinition)

### IotDpsSkuInfo
* IotDpsSkuInfo `object`: List of possible provisoning service SKUs.
  * capacity `integer`: The number of units to provision
  * name `string` (values: S1): Sku name.
  * tier `string`: Pricing tier name of the provisioning service.

### IotHubDefinitionDescription
* IotHubDefinitionDescription `object`: Description of the IoT hub.
  * allocationWeight `integer`: weight to apply for a given iot h.
  * applyAllocationPolicy `boolean`: flag for applying allocationPolicy or not for a given iot hub.
  * connectionString **required** `string`: Connection string og the IoT hub.
  * location **required** `string`: ARM region of the IoT hub.
  * name `string`: Host name of the IoT hub.

### NameAvailabilityInfo
* NameAvailabilityInfo `object`: Description of name availability.
  * message `string`: message containing a etailed reason name is unavailable
  * nameAvailable `boolean`: specifies if a name is available or not
  * reason `string` (values: Invalid, AlreadyExists): specifies the reason a name is unavailable

### Operation
* Operation `object`: IoT Hub REST API operation.
  * display `object`: The object that represents the operation.
    * operation `string`: Name of the operation.
    * provider `string`: Service provider: Microsoft Devices.
    * resource `string`: Resource Type: ProvisioningServices.
  * name `string`: Operation name: {provider}/{resource}/{read | write | action | delete}

### OperationInputs
* OperationInputs `object`: Input values for operation results call.
  * name **required** `string`: The name of the Provisioning Service to check.

### OperationListResult
* OperationListResult `object`: Result of the request to list IoT Hub operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of IoT Hub operations supported by the Microsoft.Devices resource provider.
    * items [Operation](#operation)

### ProvisioningServiceDescription
* ProvisioningServiceDescription `object`: The description of the provisioning service.
  * etag `string`: The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
  * properties **required** [IotDpsPropertiesDescription](#iotdpspropertiesdescription)
  * sku **required** [IotDpsSkuInfo](#iotdpsskuinfo)
  * id `string`: The resource identifier.
  * location **required** `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### ProvisioningServiceDescriptionListResult
* ProvisioningServiceDescriptionListResult `object`: List of provisioning service descriptions.
  * nextLink `string`: the next link
  * value `array`: List of provisioning service descriptions.
    * items [ProvisioningServiceDescription](#provisioningservicedescription)

### Resource
* Resource `object`: The common properties of an Azure resource.
  * id `string`: The resource identifier.
  * location **required** `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### SharedAccessSignatureAuthorizationRuleListResult
* SharedAccessSignatureAuthorizationRuleListResult `object`: List of shared access keys.
  * nextLink `string`: The next link.
  * value `array`: The list of shared access policies.
    * items [SharedAccessSignatureAuthorizationRule[AccessRightsDescription]](#sharedaccesssignatureauthorizationrule[accessrightsdescription])

### SharedAccessSignatureAuthorizationRule[AccessRightsDescription]
* SharedAccessSignatureAuthorizationRule[AccessRightsDescription] `object`: Description of the shared access key.
  * keyName **required** `string`: Name of the key.
  * primaryKey `string`: Primary SAS key value.
  * rights **required** `string` (values: ServiceConfig, EnrollmentRead, EnrollmentWrite, DeviceConnect, RegistrationStatusRead, RegistrationStatusWrite): Rights that this key has.
  * secondaryKey `string`: Secondary SAS key value.

### TagsResource
* TagsResource `object`: A container holding only the Tags for a resource, allowing the user to update the tags on a Provisioning Service instance.

### VerificationCodeRequest
* VerificationCodeRequest `object`: The JSON-serialized leaf certificate
  * certificate `string`: base-64 representation of X509 certificate .cer file or just .pem file content.

### VerificationCodeResponse
* VerificationCodeResponse `object`: Description of the response of the verification code.
  * etag `string`: Request etag.
  * id `string`: The resource identifier.
  * name `string`: Name of certificate.
  * properties `object`
    * created `string`: Certificate created time.
    * expiry `string`: Code expiry.
    * isVerified `boolean`: Indicate if the certificate is verified by owner of private key.
    * subject `string`: Certificate subject.
    * thumbprint `string`: Certificate thumbprint.
    * updated `string`: Certificate updated time.
    * verificationCode `string`: Verification code.
  * type `string`: The resource type.


