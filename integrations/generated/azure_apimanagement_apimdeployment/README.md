# @datafire/azure_apimanagement_apimdeployment

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimdeployment
```
```js
let azure_apimanagement_apimdeployment = require('@datafire/azure_apimanagement_apimdeployment').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_apimanagement_apimdeployment.ApiManagementOperations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Use these REST APIs to manage Azure API Management deployment.

## Actions

### ApiManagementOperations_List
Lists all of the available REST API operations of the Microsoft.ApiManagement provider.


```js
azure_apimanagement_apimdeployment.ApiManagementOperations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [OperationListResult](#operationlistresult)

### ApiManagementService_CheckNameAvailability
Checks availability and correctness of a name for an API Management service.


```js
azure_apimanagement_apimdeployment.ApiManagementService_CheckNameAvailability({
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [ApiManagementServiceCheckNameAvailabilityParameters](#apimanagementservicechecknameavailabilityparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApiManagementServiceNameAvailabilityResult](#apimanagementservicenameavailabilityresult)

### ApiManagementService_List
Lists all API Management services within an Azure subscription.


```js
azure_apimanagement_apimdeployment.ApiManagementService_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApiManagementServiceListResult](#apimanagementservicelistresult)

### ApiManagementService_ListByResourceGroup
List all API Management services within a resource group.


```js
azure_apimanagement_apimdeployment.ApiManagementService_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApiManagementServiceListResult](#apimanagementservicelistresult)

### ApiManagementService_Delete
Deletes an existing API Management service.


```js
azure_apimanagement_apimdeployment.ApiManagementService_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiManagementService_Get
Gets an API Management service resource description.


```js
azure_apimanagement_apimdeployment.ApiManagementService_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApiManagementServiceResource](#apimanagementserviceresource)

### ApiManagementService_Update
Updates an existing API Management service.


```js
azure_apimanagement_apimdeployment.ApiManagementService_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * parameters **required** [ApiManagementServiceUpdateParameters](#apimanagementserviceupdateparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApiManagementServiceResource](#apimanagementserviceresource)

### ApiManagementService_CreateOrUpdate
Creates or updates an API Management service. This is long running operation and could take several minutes to complete.


```js
azure_apimanagement_apimdeployment.ApiManagementService_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * parameters **required** [ApiManagementServiceResource](#apimanagementserviceresource)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApiManagementServiceResource](#apimanagementserviceresource)

### ApiManagementService_ApplyNetworkConfigurationUpdates
Updates the Microsoft.ApiManagement resource running in the Virtual network to pick the updated network settings.


```js
azure_apimanagement_apimdeployment.ApiManagementService_ApplyNetworkConfigurationUpdates({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * parameters [ApiManagementServiceApplyNetworkConfigurationParameters](#apimanagementserviceapplynetworkconfigurationparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApiManagementServiceResource](#apimanagementserviceresource)

### ApiManagementService_Backup
Creates a backup of the API Management service to the given Azure Storage Account. This is long running operation and could take several minutes to complete.


```js
azure_apimanagement_apimdeployment.ApiManagementService_Backup({
  "resourceGroupName": "",
  "serviceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * parameters **required** [ApiManagementServiceBackupRestoreParameters](#apimanagementservicebackuprestoreparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApiManagementServiceResource](#apimanagementserviceresource)

### ApiManagementService_GetSsoToken
Gets the Single-Sign-On token for the API Management Service which is valid for 5 Minutes.


```js
azure_apimanagement_apimdeployment.ApiManagementService_GetSsoToken({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApiManagementServiceGetSsoTokenResult](#apimanagementservicegetssotokenresult)

### ApiManagementService_Restore
Restores a backup of an API Management service created using the ApiManagementService_Backup operation on the current service. This is a long running operation and could take several minutes to complete.


```js
azure_apimanagement_apimdeployment.ApiManagementService_Restore({
  "resourceGroupName": "",
  "serviceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * parameters **required** [ApiManagementServiceBackupRestoreParameters](#apimanagementservicebackuprestoreparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApiManagementServiceResource](#apimanagementserviceresource)

### ApiManagementService_UpdateHostname
Creates, updates, or deletes the custom hostnames for an API Management service. The custom hostname can be applied to the Proxy and Portal endpoint. This is a long running operation and could take several minutes to complete. This operation will be deprecated in the next version update.


```js
azure_apimanagement_apimdeployment.ApiManagementService_UpdateHostname({
  "resourceGroupName": "",
  "serviceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * parameters **required** [ApiManagementServiceUpdateHostnameParameters](#apimanagementserviceupdatehostnameparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApiManagementServiceResource](#apimanagementserviceresource)

### ApiManagementService_UploadCertificate
Upload Custom Domain SSL certificate for an API Management service. This operation will be deprecated in future releases.


```js
azure_apimanagement_apimdeployment.ApiManagementService_UploadCertificate({
  "resourceGroupName": "",
  "serviceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * parameters **required** [ApiManagementServiceUploadCertificateParameters](#apimanagementserviceuploadcertificateparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [CertificateInformation](#certificateinformation)



## Definitions

### AdditionalLocation
* AdditionalLocation `object`: Description of an additional API Management resource location.
  * gatewayRegionalUrl `string`: Gateway URL of the API Management service in the Region.
  * location **required** `string`: The location name of the additional region among Azure Data center regions.
  * sku **required** [ApiManagementServiceSkuProperties](#apimanagementserviceskuproperties)
  * staticIps `array`: Static IP addresses of the location's virtual machines.
    * items `string`
  * virtualNetworkConfiguration [VirtualNetworkConfiguration](#virtualnetworkconfiguration)

### ApiManagementServiceApplyNetworkConfigurationParameters
* ApiManagementServiceApplyNetworkConfigurationParameters `object`: Parameter supplied to the Apply Network configuration operation.
  * location `string`: Location of the Api Management service to update for a multi-region service. For a service deployed in a single region, this parameter is not required.

### ApiManagementServiceBackupRestoreParameters
* ApiManagementServiceBackupRestoreParameters `object`: Parameters supplied to the Backup/Restore of an API Management service operation.
  * accessKey **required** `string`: Azure Cloud Storage account (used to place/retrieve the backup) access key.
  * backupName **required** `string`: The name of the backup file to create.
  * containerName **required** `string`: Azure Cloud Storage blob container name used to place/retrieve the backup.
  * storageAccount **required** `string`: Azure Cloud Storage account (used to place/retrieve the backup) name.

### ApiManagementServiceBaseProperties
* ApiManagementServiceBaseProperties `object`: Base Properties of an API Management service resource description.
  * additionalLocations `array`: Additional datacenter locations of the API Management service.
    * items [AdditionalLocation](#additionallocation)
  * certificates `array`: List of Certificates that need to be installed in the API Management service. Max supported certificates that can be installed is 10.
    * items [CertificateConfiguration](#certificateconfiguration)
  * createdAtUtc `string`: Creation UTC date of the API Management service.The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * customProperties `object`: Custom properties of the API Management service. Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TripleDes168` will disable the cipher TLS_RSA_WITH_3DES_EDE_CBC_SHA for all TLS(1.0, 1.1 and 1.2). Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls11` can be used to disable just TLS 1.1 and setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls10` can be used to disable TLS 1.0 on an API Management service.
  * gatewayRegionalUrl `string`: Gateway URL of the API Management service in the Default Region.
  * gatewayUrl `string`: Gateway URL of the API Management service.
  * hostnameConfigurations `array`: Custom hostname configuration of the API Management service.
    * items [HostnameConfiguration](#hostnameconfiguration)
  * managementApiUrl `string`: Management API endpoint URL of the API Management service.
  * notificationSenderEmail `string`: Email address from which the notification will be sent.
  * portalUrl `string`: Publisher portal endpoint Url of the API Management service.
  * provisioningState `string`: The current provisioning state of the API Management service which can be one of the following: Created/Activating/Succeeded/Updating/Failed/Stopped/Terminating/TerminationFailed/Deleted.
  * scmUrl `string`: SCM endpoint URL of the API Management service.
  * staticIps `array`: Static IP addresses of the API Management service virtual machines. Available only for Standard and Premium SKU.
    * items `string`
  * targetProvisioningState `string`: The provisioning state of the API Management service, which is targeted by the long running operation started on the service.
  * virtualNetworkConfiguration [VirtualNetworkConfiguration](#virtualnetworkconfiguration)
  * virtualNetworkType `string` (values: None, External, Internal): The type of VPN in which API Managemet service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.

### ApiManagementServiceCheckNameAvailabilityParameters
* ApiManagementServiceCheckNameAvailabilityParameters `object`: Parameters supplied to the CheckNameAvailability operation.
  * name **required** `string`: The name to check for availability.

### ApiManagementServiceGetSsoTokenResult
* ApiManagementServiceGetSsoTokenResult `object`: The response of the GetSsoToken operation.
  * redirectUri `string`: Redirect URL to the Publisher Portal containing the SSO token.

### ApiManagementServiceIdentity
* ApiManagementServiceIdentity `object`: Identity properties of the Api Management service resource.
  * principalId `string`: The principal id of the identity.
  * tenantId `string`: The client tenant id of the identity.
  * type **required** `string` (values: SystemAssigned): The identity type. Currently the only supported type is 'SystemAssigned'.

### ApiManagementServiceListResult
* ApiManagementServiceListResult `object`: The response of the List API Management services operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of API Management services.
  * value **required** `array`: Result of the List API Management services operation.
    * items [ApiManagementServiceResource](#apimanagementserviceresource)

### ApiManagementServiceNameAvailabilityResult
* ApiManagementServiceNameAvailabilityResult `object`: Response of the CheckNameAvailability operation.
  * message `string`: If reason == invalid, provide the user with the reason why the given name is invalid, and provide the resource naming requirements so that the user can select a valid name. If reason == AlreadyExists, explain that <resourceName> is already in use, and direct them to select a different name.
  * nameAvailable `boolean`: True if the name is available and can be used to create a new API Management service; otherwise false.
  * reason `string` (values: Valid, Invalid, AlreadyExists): Invalid indicates the name provided does not match the resource provider’s naming requirements (incorrect length, unsupported characters, etc.)  AlreadyExists indicates that the name is already in use and is therefore unavailable.

### ApiManagementServiceProperties
* ApiManagementServiceProperties `object`: Properties of an API Management service resource description.
  * publisherEmail **required** `string`: Publisher email.
  * publisherName **required** `string`: Publisher name.
  * additionalLocations `array`: Additional datacenter locations of the API Management service.
    * items [AdditionalLocation](#additionallocation)
  * certificates `array`: List of Certificates that need to be installed in the API Management service. Max supported certificates that can be installed is 10.
    * items [CertificateConfiguration](#certificateconfiguration)
  * createdAtUtc `string`: Creation UTC date of the API Management service.The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * customProperties `object`: Custom properties of the API Management service. Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TripleDes168` will disable the cipher TLS_RSA_WITH_3DES_EDE_CBC_SHA for all TLS(1.0, 1.1 and 1.2). Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls11` can be used to disable just TLS 1.1 and setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls10` can be used to disable TLS 1.0 on an API Management service.
  * gatewayRegionalUrl `string`: Gateway URL of the API Management service in the Default Region.
  * gatewayUrl `string`: Gateway URL of the API Management service.
  * hostnameConfigurations `array`: Custom hostname configuration of the API Management service.
    * items [HostnameConfiguration](#hostnameconfiguration)
  * managementApiUrl `string`: Management API endpoint URL of the API Management service.
  * notificationSenderEmail `string`: Email address from which the notification will be sent.
  * portalUrl `string`: Publisher portal endpoint Url of the API Management service.
  * provisioningState `string`: The current provisioning state of the API Management service which can be one of the following: Created/Activating/Succeeded/Updating/Failed/Stopped/Terminating/TerminationFailed/Deleted.
  * scmUrl `string`: SCM endpoint URL of the API Management service.
  * staticIps `array`: Static IP addresses of the API Management service virtual machines. Available only for Standard and Premium SKU.
    * items `string`
  * targetProvisioningState `string`: The provisioning state of the API Management service, which is targeted by the long running operation started on the service.
  * virtualNetworkConfiguration [VirtualNetworkConfiguration](#virtualnetworkconfiguration)
  * virtualNetworkType `string` (values: None, External, Internal): The type of VPN in which API Managemet service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.

### ApiManagementServiceResource
* ApiManagementServiceResource `object`: A single API Management service resource in List or Get response.
  * etag `string`: ETag of the resource.
  * identity [ApiManagementServiceIdentity](#apimanagementserviceidentity)
  * location **required** `string`: Resource location.
  * properties **required** [ApiManagementServiceProperties](#apimanagementserviceproperties)
  * sku **required** [ApiManagementServiceSkuProperties](#apimanagementserviceskuproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type for API Management resource is set to Microsoft.ApiManagement.

### ApiManagementServiceSkuProperties
* ApiManagementServiceSkuProperties `object`: API Management service resource SKU properties.
  * capacity `integer`: Capacity of the SKU (number of deployed units of the SKU). The default value is 1.
  * name **required** `string` (values: Developer, Standard, Premium, Basic): Name of the Sku.

### ApiManagementServiceUpdateHostnameParameters
* ApiManagementServiceUpdateHostnameParameters `object`: Parameters supplied to the UpdateHostname operation.
  * delete `array`: Hostnames types to delete.
    * items `string` (values: Proxy, Portal, Management, Scm)
  * update `array`: Hostnames to create or update.
    * items [HostnameConfigurationOld](#hostnameconfigurationold)

### ApiManagementServiceUpdateParameters
* ApiManagementServiceUpdateParameters `object`: Parameter supplied to Update Api Management Service.
  * etag `string`: ETag of the resource.
  * identity [ApiManagementServiceIdentity](#apimanagementserviceidentity)
  * properties [ApiManagementServiceUpdateProperties](#apimanagementserviceupdateproperties)
  * sku [ApiManagementServiceSkuProperties](#apimanagementserviceskuproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type for API Management resource is set to Microsoft.ApiManagement.

### ApiManagementServiceUpdateProperties
* ApiManagementServiceUpdateProperties `object`: Properties of an API Management service resource description.
  * publisherEmail `string`: Publisher email.
  * publisherName `string`: Publisher name.
  * additionalLocations `array`: Additional datacenter locations of the API Management service.
    * items [AdditionalLocation](#additionallocation)
  * certificates `array`: List of Certificates that need to be installed in the API Management service. Max supported certificates that can be installed is 10.
    * items [CertificateConfiguration](#certificateconfiguration)
  * createdAtUtc `string`: Creation UTC date of the API Management service.The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * customProperties `object`: Custom properties of the API Management service. Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TripleDes168` will disable the cipher TLS_RSA_WITH_3DES_EDE_CBC_SHA for all TLS(1.0, 1.1 and 1.2). Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls11` can be used to disable just TLS 1.1 and setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls10` can be used to disable TLS 1.0 on an API Management service.
  * gatewayRegionalUrl `string`: Gateway URL of the API Management service in the Default Region.
  * gatewayUrl `string`: Gateway URL of the API Management service.
  * hostnameConfigurations `array`: Custom hostname configuration of the API Management service.
    * items [HostnameConfiguration](#hostnameconfiguration)
  * managementApiUrl `string`: Management API endpoint URL of the API Management service.
  * notificationSenderEmail `string`: Email address from which the notification will be sent.
  * portalUrl `string`: Publisher portal endpoint Url of the API Management service.
  * provisioningState `string`: The current provisioning state of the API Management service which can be one of the following: Created/Activating/Succeeded/Updating/Failed/Stopped/Terminating/TerminationFailed/Deleted.
  * scmUrl `string`: SCM endpoint URL of the API Management service.
  * staticIps `array`: Static IP addresses of the API Management service virtual machines. Available only for Standard and Premium SKU.
    * items `string`
  * targetProvisioningState `string`: The provisioning state of the API Management service, which is targeted by the long running operation started on the service.
  * virtualNetworkConfiguration [VirtualNetworkConfiguration](#virtualnetworkconfiguration)
  * virtualNetworkType `string` (values: None, External, Internal): The type of VPN in which API Managemet service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.

### ApiManagementServiceUploadCertificateParameters
* ApiManagementServiceUploadCertificateParameters `object`: Parameters supplied to the Upload SSL certificate for an API Management service operation.
  * certificate **required** `string`: Base64 Encoded certificate.
  * certificate_password **required** `string`: Certificate password.
  * type **required** `string` (values: Proxy, Portal, Management, Scm): Hostname type.

### ApimResource
* ApimResource `object`: The Resource definition.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type for API Management resource is set to Microsoft.ApiManagement.

### CertificateConfiguration
* CertificateConfiguration `object`: Certificate configuration which consist of non-trusted intermediates and root certificates.
  * certificate [CertificateInformation](#certificateinformation)
  * certificatePassword `string`: Certificate Password.
  * encodedCertificate `string`: Base64 Encoded certificate.
  * storeName **required** `string` (values: CertificateAuthority, Root): The local certificate store location. Only Root and CertificateAuthority are valid locations.

### CertificateInformation
* CertificateInformation `object`: SSL certificate information.
  * expiry **required** `string`: Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * subject **required** `string`: Subject of the certificate.
  * thumbprint **required** `string`: Thumbprint of the certificate.

### HostnameConfiguration
* HostnameConfiguration `object`: Custom hostname configuration.
  * certificate [CertificateInformation](#certificateinformation)
  * certificatePassword `string`: Certificate Password.
  * defaultSslBinding `boolean`: Specify true to setup the certificate associated with this Hostname as the Default SSL Certificate. If a client does not send the SNI header, then this will be the certificate that will be challenged. The property is useful if a service has multiple custom hostname enabled and it needs to decide on the default ssl certificate. The setting only applied to Proxy Hostname Type.
  * encodedCertificate `string`: Base64 Encoded certificate.
  * hostName **required** `string`: Hostname to configure on the Api Management service.
  * keyVaultId `string`: Url to the KeyVault Secret containing the Ssl Certificate. If absolute Url containing version is provided, auto-update of ssl certificate will not work. This requires Api Management service to be configured with MSI. The secret should be of type *application/x-pkcs12*
  * negotiateClientCertificate `boolean`: Specify true to always negotiate client certificate on the hostname. Default Value is false.
  * type **required** `string` (values: Proxy, Portal, Management, Scm): Hostname type.

### HostnameConfigurationOld
* HostnameConfigurationOld `object`: Custom hostname configuration.
  * certificate **required** [CertificateInformation](#certificateinformation)
  * hostname **required** `string`: Hostname to configure.
  * type **required** `string` (values: Proxy, Portal, Management, Scm): Hostname type.

### Operation
* Operation `object`: REST API operation
  * display `object`: The object that describes the operation.
    * description `string`: Friendly name of the operation
    * operation `string`: Operation type: read, write, delete, listKeys/action, etc.
    * provider `string`: Friendly name of the resource provider
    * resource `string`: Resource type on which the operation is performed.
  * name `string`: Operation name: {provider}/{resource}/{operation}
  * origin `string`: The operation origin.
  * properties `object`: The operation properties.

### OperationListResult
* OperationListResult `object`: Result of the request to list REST API operations. It contains a list of operations and a URL nextLink to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of operations supported by the resource provider.
    * items [Operation](#operation)

### VirtualNetworkConfiguration
* VirtualNetworkConfiguration `object`: Configuration of a virtual network to which API Management service is deployed.
  * subnetResourceId `string`: The full resource ID of a subnet in a virtual network to deploy the API Management service in.
  * subnetname `string`: The name of the subnet.
  * vnetid `string`: The virtual network ID. This is typically a GUID. Expect a null GUID by default.


