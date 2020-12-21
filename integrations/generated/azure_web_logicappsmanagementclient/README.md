# @datafire/azure_web_logicappsmanagementclient

Client library for LogicAppsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_web_logicappsmanagementclient
```
```js
let azure_web_logicappsmanagementclient = require('@datafire/azure_web_logicappsmanagementclient').create({
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



## Actions

### ConnectionGateways_List
Gets a list of gateways under a subscription


```js
azure_web_logicappsmanagementclient.ConnectionGateways_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ConnectionGatewayDefinitionCollection](#connectiongatewaydefinitioncollection)

### CustomApis_List
Gets a list of all custom APIs for a subscription id


```js
azure_web_logicappsmanagementclient.CustomApis_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version
  * $top `integer`: The number of items to be included in the result
  * skiptoken `string`: Skip Token

#### Output
* output [CustomApiDefinitionCollection](#customapidefinitioncollection)

### ConnectionGatewayInstallations_List
Gets a list of installed gateways that the user is an admin of, in a specific subscription and at a certain location


```js
azure_web_logicappsmanagementclient.ConnectionGatewayInstallations_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * location **required** `string`: The location
  * api-version **required** `string`: API Version

#### Output
* output [ConnectionGatewayInstallationDefinitionCollection](#connectiongatewayinstallationdefinitioncollection)

### ConnectionGatewayInstallations_Get
Get a specific installed gateway that the user is an admin of, in a specific subscription and at a certain location


```js
azure_web_logicappsmanagementclient.ConnectionGatewayInstallations_Get({
  "subscriptionId": "",
  "location": "",
  "gatewayId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * location **required** `string`: The location
  * gatewayId **required** `string`: Gateway ID
  * api-version **required** `string`: API Version

#### Output
* output [ConnectionGatewayInstallationDefinition](#connectiongatewayinstallationdefinition)

### CustomApis_ExtractApiDefinitionFromWsdl
Parses the specified WSDL and extracts the API definition


```js
azure_web_logicappsmanagementclient.CustomApis_ExtractApiDefinitionFromWsdl({
  "subscriptionId": "",
  "location": "",
  "wsdlDefinition": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * location **required** `string`: The location
  * wsdlDefinition **required** [WsdlDefinition](#wsdldefinition)
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### CustomApis_ListWsdlInterfaces
This returns the list of interfaces in the WSDL


```js
azure_web_logicappsmanagementclient.CustomApis_ListWsdlInterfaces({
  "subscriptionId": "",
  "location": "",
  "wsdlDefinition": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * location **required** `string`: The location
  * wsdlDefinition **required** [WsdlDefinition](#wsdldefinition)
  * api-version **required** `string`: API Version

#### Output
* output [WsdlServiceCollection](#wsdlservicecollection)

### ManagedApis_List
Gets a list of managed APIs


```js
azure_web_logicappsmanagementclient.ManagedApis_List({
  "location": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ManagedApiDefinitionCollection](#managedapidefinitioncollection)

### ManagedApis_Get
Gets a managed API


```js
azure_web_logicappsmanagementclient.ManagedApis_Get({
  "subscriptionId": "",
  "location": "",
  "apiName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * location **required** `string`: The location
  * apiName **required** `string`: API name
  * api-version **required** `string`: API Version

#### Output
* output [ManagedApiDefinition](#managedapidefinition)

### ConnectionGateways_ListByResourceGroup
Gets a list of gateways under a subscription and in a specific resource group


```js
azure_web_logicappsmanagementclient.ConnectionGateways_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group
  * api-version **required** `string`: API Version

#### Output
* output [ConnectionGatewayDefinitionCollection](#connectiongatewaydefinitioncollection)

### ConnectionGateways_Delete
Deletes a specific gateway for under a subscription and in a specific resource group


```js
azure_web_logicappsmanagementclient.ConnectionGateways_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "connectionGatewayName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group
  * connectionGatewayName **required** `string`: The connection gateway name
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### ConnectionGateways_Get
Gets a specific gateway under a subscription and in a specific resource group


```js
azure_web_logicappsmanagementclient.ConnectionGateways_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "connectionGatewayName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group
  * connectionGatewayName **required** `string`: The connection gateway name
  * api-version **required** `string`: API Version

#### Output
* output [ConnectionGatewayDefinition](#connectiongatewaydefinition)

### ConnectionGateways_Update
Updates a connection gateway's tags


```js
azure_web_logicappsmanagementclient.ConnectionGateways_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "connectionGatewayName": "",
  "connectionGateway": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group
  * connectionGatewayName **required** `string`: The connection gateway name
  * connectionGateway **required** [ConnectionGatewayDefinition](#connectiongatewaydefinition)
  * api-version **required** `string`: API Version

#### Output
* output [ConnectionGatewayDefinition](#connectiongatewaydefinition)

### ConnectionGateways_CreateOrUpdate
Creates or updates a specific gateway for under a subscription and in a specific resource group


```js
azure_web_logicappsmanagementclient.ConnectionGateways_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "connectionGatewayName": "",
  "connectionGateway": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group
  * connectionGatewayName **required** `string`: The connection gateway name
  * connectionGateway **required** [ConnectionGatewayDefinition](#connectiongatewaydefinition)
  * api-version **required** `string`: API Version

#### Output
* output [ConnectionGatewayDefinition](#connectiongatewaydefinition)

### Connections_List
Gets a list of connections


```js
azure_web_logicappsmanagementclient.Connections_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group
  * $top `integer`: The number of items to be included in the result
  * $filter `string`: The filter to apply on the operation
  * api-version **required** `string`: API Version

#### Output
* output [ApiConnectionDefinitionCollection](#apiconnectiondefinitioncollection)

### Connections_Delete
Deletes a connection


```js
azure_web_logicappsmanagementclient.Connections_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "connectionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group
  * connectionName **required** `string`: Connection name
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### Connections_Get
Get a specific connection


```js
azure_web_logicappsmanagementclient.Connections_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "connectionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group
  * connectionName **required** `string`: Connection name
  * api-version **required** `string`: API Version

#### Output
* output [ApiConnectionDefinition](#apiconnectiondefinition)

### Connections_Update
Updates a connection's tags


```js
azure_web_logicappsmanagementclient.Connections_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "connectionName": "",
  "connection": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group
  * connectionName **required** `string`: Connection name
  * connection **required** [ApiConnectionDefinition](#apiconnectiondefinition)
  * api-version **required** `string`: API Version

#### Output
* output [ApiConnectionDefinition](#apiconnectiondefinition)

### Connections_CreateOrUpdate
Creates or updates a connection


```js
azure_web_logicappsmanagementclient.Connections_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "connectionName": "",
  "connection": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group
  * connectionName **required** `string`: Connection name
  * connection **required** [ApiConnectionDefinition](#apiconnectiondefinition)
  * api-version **required** `string`: API Version

#### Output
* output [ApiConnectionDefinition](#apiconnectiondefinition)

### Connections_ConfirmConsentCode
Confirms consent code of a connection


```js
azure_web_logicappsmanagementclient.Connections_ConfirmConsentCode({
  "subscriptionId": "",
  "resourceGroupName": "",
  "connectionName": "",
  "confirmConsentCode": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group
  * connectionName **required** `string`: Connection name
  * confirmConsentCode **required** [ConfirmConsentCodeDefinition](#confirmconsentcodedefinition)
  * api-version **required** `string`: API Version

#### Output
* output [ConfirmConsentCodeDefinition](#confirmconsentcodedefinition)

### Connections_ListConsentLinks
Lists the consent links of a connection


```js
azure_web_logicappsmanagementclient.Connections_ListConsentLinks({
  "subscriptionId": "",
  "resourceGroupName": "",
  "connectionName": "",
  "listConsentLink": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group
  * connectionName **required** `string`: Connection name
  * listConsentLink **required** [ListConsentLinksDefinition](#listconsentlinksdefinition)
  * api-version **required** `string`: API Version

#### Output
* output [ConsentLinkCollection](#consentlinkcollection)

### CustomApis_ListByResourceGroup
Gets a list of all custom APIs in a subscription for a specific resource group


```js
azure_web_logicappsmanagementclient.CustomApis_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group
  * api-version **required** `string`: API Version
  * $top `integer`: The number of items to be included in the result
  * skiptoken `string`: Skip Token

#### Output
* output [CustomApiDefinitionCollection](#customapidefinitioncollection)

### CustomApis_Delete
Deletes a custom API from the resource group


```js
azure_web_logicappsmanagementclient.CustomApis_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "apiName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group
  * apiName **required** `string`: API name
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### CustomApis_Get
Gets a custom API by name for a specific subscription and resource group


```js
azure_web_logicappsmanagementclient.CustomApis_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "apiName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group
  * apiName **required** `string`: API name
  * api-version **required** `string`: API Version

#### Output
* output [CustomApiDefinition](#customapidefinition)

### CustomApis_Update
Updates an existing custom API's tags


```js
azure_web_logicappsmanagementclient.CustomApis_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "apiName": "",
  "customApi": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group
  * apiName **required** `string`: API name
  * customApi **required** [CustomApiDefinition](#customapidefinition)
  * api-version **required** `string`: API Version

#### Output
* output [CustomApiDefinition](#customapidefinition)

### CustomApis_CreateOrUpdate
Creates or updates an existing custom API


```js
azure_web_logicappsmanagementclient.CustomApis_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "apiName": "",
  "customApi": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group
  * apiName **required** `string`: API name
  * customApi **required** [CustomApiDefinition](#customapidefinition)
  * api-version **required** `string`: API Version

#### Output
* output [CustomApiDefinition](#customapidefinition)

### CustomApis_Move
Moves a specific custom API


```js
azure_web_logicappsmanagementclient.CustomApis_Move({
  "subscriptionId": "",
  "resourceGroupName": "",
  "apiName": "",
  "customApiReference": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group
  * apiName **required** `string`: API name
  * customApiReference **required** [CustomApiReference](#customapireference)
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*



## Definitions

### ApiConnectionDefinition
* ApiConnectionDefinition `object`: API connection
  * properties `object`
    * api [ApiReference](#apireference)
    * changedTime `string`: Timestamp of last connection change
    * createdTime `string`: Timestamp of the connection creation
    * customParameterValues `object`: Dictionary of custom parameter values
    * displayName `string`: Display name
    * nonSecretParameterValues `object`: Dictionary of nonsecret parameter values
    * parameterValues `object`: Dictionary of parameter values
    * statuses `array`: Status of the connection
      * items [ConnectionStatusDefinition](#connectionstatusdefinition)
    * testLinks `array`: Links to test the API connection
      * items [ApiConnectionTestLink](#apiconnectiontestlink)
  * etag `string`: Resource ETag
  * id `string`: Resource id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags [TagsDictionary](#tagsdictionary)
  * type `string`: Resource type

### ApiConnectionDefinitionCollection
* ApiConnectionDefinitionCollection `object`: A list of API connection definitions
  * value `array`: Collection of API connections
    * items [ApiConnectionDefinition](#apiconnectiondefinition)

### ApiConnectionTestLink
* ApiConnectionTestLink `object`: API connection properties
  * method `string`: HTTP Method
  * requestUri `string`: Test link request URI

### ApiOAuthSettings
* ApiOAuthSettings `object`: OAuth settings for the connection provider
  * clientId `string`: Resource provider client id
  * clientSecret `string`: Client Secret needed for OAuth
  * customParameters `object`: OAuth parameters key is the name of parameter
  * identityProvider `string`: Identity provider
  * properties `object`: Read only properties for this oauth setting.
  * redirectUrl `string`: Url
  * scopes `array`: OAuth scopes
    * items `string`

### ApiOAuthSettingsParameter
* ApiOAuthSettingsParameter `object`: OAuth settings for the API
  * options `object`: Options available to this parameter
  * uiDefinition `object`: UI definitions per culture as caller can specify the culture
  * value `string`: Value of the setting

### ApiReference
* ApiReference `object`
  * brandColor `string`: Brand color
  * description `string`: The custom API description
  * displayName `string`: The display name
  * iconUri `string`: The icon URI
  * name `string`: The name of the API
  * swagger `object`: The JSON representation of the swagger
  * id `string`: Resource reference id
  * type `string`: Resource reference type

### ApiResourceBackendService
* ApiResourceBackendService `object`: The API backend service
  * serviceUrl `string`: The service URL

### ApiResourceDefinitions
* ApiResourceDefinitions `object`: API Definitions
  * modifiedSwaggerUrl `string`: The modified swagger URL
  * originalSwaggerUrl `string`: The original swagger URL

### ApiResourceGeneralInformation
* ApiResourceGeneralInformation `object`: General information about the API
  * description `string`: The API description
  * displayName `string`: Display name
  * iconUrl `string`: The icon URL
  * releaseTag `string`: Release tag
  * termsOfUseUrl `string`: URL to the Terms of Use

### ApiResourceMetadata
* ApiResourceMetadata `object`
  * apiType [ApiType](#apitype)
  * brandColor `string`: Brand color
  * connectionType `string`: The connection type
  * hideKey `string`: Hide key
  * source `string`: The source
  * tags [TagsDictionary](#tagsdictionary)
  * wsdlImportMethod [WsdlImportMethod](#wsdlimportmethod)
  * wsdlService [WsdlService](#wsdlservice)

### ApiResourcePolicies
* ApiResourcePolicies `object`: Describes the API policies either as embedded content or as a link to uploaded content
  * content `string`: API level policies as XML
  * contentLink `string`: Link to the JSON of the policies

### ApiResourceProperties
* ApiResourceProperties `object`: API resource properties
  * apiDefinitionUrl `string`: URL where the swagger can be downloaded from
  * apiDefinitions [ApiResourceDefinitions](#apiresourcedefinitions)
  * backendService [ApiResourceBackendService](#apiresourcebackendservice)
  * capabilities `array`: The managed API capabilities
    * items `string`
  * connectionParameters `object`: Connection parameters
  * generalInformation [ApiResourceGeneralInformation](#apiresourcegeneralinformation)
  * metadata [ApiResourceMetadata](#apiresourcemetadata)
  * name `string`
  * policies [ApiResourcePolicies](#apiresourcepolicies)
  * runtimeUrls `array`: Runtime URLs
    * items `string`
  * swagger `object`: The JSON representation of the swagger

### ApiType
* ApiType `string` (values: NotSpecified, Rest, Soap): The API type

### ConfirmConsentCodeDefinition
* ConfirmConsentCodeDefinition `object`: Confirm consent code request
  * code `string`: Code that was returned during consent flow
  * objectId `string`: AAD object ID. This is userId
  * tenantId `string`: Tenant Id

### ConnectionError
* ConnectionError `object`: Connection error
  * properties `object`
    * code `string`: Code of the status
    * message `string`: Description of the status
  * etag `string`: Resource ETag
  * id `string`: Resource id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags [TagsDictionary](#tagsdictionary)
  * type `string`: Resource type

### ConnectionGatewayDefinition
* ConnectionGatewayDefinition `object`: The gateway definition
  * properties `object`
    * backendUri `string`: The URI of the backend
    * connectionGatewayInstallation [ConnectionGatewayReference](#connectiongatewayreference)
    * contactInformation `array`: The gateway admin
      * items `string`
    * description `string`: The gateway description
    * displayName `string`: The gateway display name
    * machineName `string`: The machine name of the gateway
    * status `object`: The gateway status
  * etag `string`: Resource ETag
  * id `string`: Resource id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags [TagsDictionary](#tagsdictionary)
  * type `string`: Resource type

### ConnectionGatewayDefinitionCollection
* ConnectionGatewayDefinitionCollection `object`: A list of connection gateway definitions
  * value `array`: Collection of connection gateways
    * items [ConnectionGatewayDefinition](#connectiongatewaydefinition)

### ConnectionGatewayInstallationDefinition
* ConnectionGatewayInstallationDefinition `object`: The gateway installation
  * properties `object`
    * backendUri `string`: The URI of the backend
    * connectionGateway [ConnectionGatewayReference](#connectiongatewayreference)
    * contactInformation `array`: The gateway admin
      * items `string`
    * description `string`: The gateway description
    * displayName `string`: The gateway display name
    * machineName `string`: The machine name of the gateway
    * status `object`: The gateway status
  * etag `string`: Resource ETag
  * id `string`: Resource id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags [TagsDictionary](#tagsdictionary)
  * type `string`: Resource type

### ConnectionGatewayInstallationDefinitionCollection
* ConnectionGatewayInstallationDefinitionCollection `object`: A list of connection gateway installation definitions
  * value `array`: Collection of connection gateway installations
    * items [ConnectionGatewayInstallationDefinition](#connectiongatewayinstallationdefinition)

### ConnectionGatewayReference
* ConnectionGatewayReference `object`: The gateway installation reference
  * location `string`: Resource reference location
  * name `string`: Resource reference name
  * id `string`: Resource reference id
  * type `string`: Resource reference type

### ConnectionParameter
* ConnectionParameter `object`: Connection provider parameters
  * oAuthSettings [ApiOAuthSettings](#apioauthsettings)
  * type `string` (values: string, securestring, secureobject, int, bool, object, array, oauthSetting, connection): Type of the parameter

### ConnectionStatusDefinition
* ConnectionStatusDefinition `object`: Connection status
  * error [ConnectionError](#connectionerror)
  * status `string`: The gateway status
  * target `string`: Target of the error

### ConsentLinkCollection
* ConsentLinkCollection `object`: Collection of consent links
  * value `array`: Collection of resources
    * items [ConsentLinkDefinition](#consentlinkdefinition)

### ConsentLinkDefinition
* ConsentLinkDefinition `object`: A consent link
  * displayName `string`: Display name of the parameter in the connection provider's OAuth settings
  * firstPartyLoginUri `string`: URI for first party login
  * link `string`: URI for the consent link
  * status `string` (values: Unauthenticated, Authenticated, Error): Status of the link

### ConsentLinkParameterDefinition
* ConsentLinkParameterDefinition `object`: Consent link definition
  * objectId `string`: AAD OID (user or group) if the principal type is ActiveDirectory. MSA PUID if the principal type is MicrosoftAccount
  * parameterName `string`: Name of the parameter in the connection provider's OAuth settings
  * redirectUrl `string`: Name of the parameter in the connection provider's OAuth settings
  * tenantId `string`: The tenant id

### CustomApiDefinition
* CustomApiDefinition `object`: A custom API
  * properties [CustomApiPropertiesDefinition](#customapipropertiesdefinition)
  * etag `string`: Resource ETag
  * id `string`: Resource id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags [TagsDictionary](#tagsdictionary)
  * type `string`: Resource type

### CustomApiDefinitionCollection
* CustomApiDefinitionCollection `object`: A list of custom API definitions
  * value `array`: Collection of custom APIs
    * items [CustomApiDefinition](#customapidefinition)

### CustomApiPropertiesDefinition
* CustomApiPropertiesDefinition `object`: Custom API properties
  * apiDefinitions [ApiResourceDefinitions](#apiresourcedefinitions)
  * apiType [ApiType](#apitype)
  * backendService [ApiResourceBackendService](#apiresourcebackendservice)
  * brandColor `string`: Brand color
  * capabilities `array`: The custom API capabilities
    * items `string`
  * connectionParameters `object`: Connection parameters
  * description `string`: The custom API description
  * displayName `string`: The display name
  * iconUri `string`: The icon URI
  * runtimeUrls `array`: Runtime URLs
    * items `string`
  * swagger `object`: The JSON representation of the swagger
  * wsdlDefinition [WsdlDefinition](#wsdldefinition)

### CustomApiReference
* CustomApiReference `object`: The custom API reference
  * name `string`
  * brandColor `string`: Brand color
  * description `string`: The custom API description
  * displayName `string`: The display name
  * iconUri `string`: The icon URI
  * name `string`: The name of the API
  * swagger `object`: The JSON representation of the swagger
  * id `string`: Resource reference id
  * type `string`: Resource reference type

### ListConnectionKeysDefinition
* ListConnectionKeysDefinition `object`: List connection keys
  * properties `object`
    * validityTimeSpan `string`: Time span for how long the keys will be valid
  * etag `string`: Resource ETag
  * id `string`: Resource id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags [TagsDictionary](#tagsdictionary)
  * type `string`: Resource type

### ListConsentLinksDefinition
* ListConsentLinksDefinition `object`: Request for a list of consent links
  * parameters `array`: Collection of resources
    * items [ConsentLinkParameterDefinition](#consentlinkparameterdefinition)

### ManagedApiDefinition
* ManagedApiDefinition `object`: A managed API definition
  * properties [ApiResourceProperties](#apiresourceproperties)
  * etag `string`: Resource ETag
  * id `string`: Resource id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags [TagsDictionary](#tagsdictionary)
  * type `string`: Resource type

### ManagedApiDefinitionCollection
* ManagedApiDefinitionCollection `object`: A list of managed API definitions
  * value `array`: Collection of managed APIs
    * items [ManagedApiDefinition](#managedapidefinition)

### ResourceDefinition
* ResourceDefinition `object`: A resource
  * etag `string`: Resource ETag
  * id `string`: Resource id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags [TagsDictionary](#tagsdictionary)
  * type `string`: Resource type

### ResourceReference
* ResourceReference `object`
  * id `string`: Resource reference id
  * type `string`: Resource reference type

### TagsDictionary
* TagsDictionary `object`: Resource tags

### WsdlDefinition
* WsdlDefinition `object`: The WSDL definition
  * content `string`: The WSDL content
  * importMethod [WsdlImportMethod](#wsdlimportmethod)
  * service [WsdlService](#wsdlservice)
  * url `string`: The WSDL URL

### WsdlImportMethod
* WsdlImportMethod `string` (values: NotSpecified, SoapToRest, SoapPassThrough): The WSDL import method

### WsdlService
* WsdlService `object`: The service with name and endpoint names
  * endpointQualifiedNames `array`: List of the endpoints' qualified names
    * items `string`
  * qualifiedName **required** `string`: The service's qualified name

### WsdlServiceCollection
* WsdlServiceCollection `object`: A list of custom API WSDL interfaces
  * value `array`: Collection of WSDL interfaces
    * items [WsdlService](#wsdlservice)


