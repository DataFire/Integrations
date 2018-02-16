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

azure_web_logicappsmanagementclient.ManagedApis_List({
  "location": "",
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### ManagedApis_List
Gets a list of managed APIs.


```js
azure_web_logicappsmanagementclient.ManagedApis_List({
  "location": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ApisCollection](#apiscollection)

### ManagedApis_Get
Gets a managed API.


```js
azure_web_logicappsmanagementclient.ManagedApis_Get({
  "location": "",
  "apiName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location.
  * apiName **required** `string`: The managed API name.
  * export `boolean`: flag showing whether to export API definition in format specified by Accept header.
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version

#### Output
* output [ApiEntity](#apientity)

### Connections_List
Gets a list of connections.


```js
azure_web_logicappsmanagementclient.Connections_List({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Resource Group Name
  * subscriptionId **required** `string`: Subscription Id
  * api-version **required** `string`: API Version
  * $top `integer`: The number of items to be included in the result.
  * $filter `string`: The filter to apply on the operation.

#### Output
* output [ConnectionCollection](#connectioncollection)

### Connections_Delete
Deletes a connection.


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
  * resourceGroupName **required** `string`: The resource group name.
  * connectionName **required** `string`: The connection name.
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### Connections_Get
Gets a connection.


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
  * resourceGroupName **required** `string`: The resource group name.
  * connectionName **required** `string`: The connection name.
  * api-version **required** `string`: API Version

#### Output
* output [Connection](#connection)

### Connections_CreateOrUpdate
Creates or updates a connection.


```js
azure_web_logicappsmanagementclient.Connections_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "connectionName": "",
  "api-version": "",
  "connection": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group name.
  * connectionName **required** `string`: The connection name.
  * api-version **required** `string`: API Version
  * connection **required** [Connection](#connection)

#### Output
* output [Connection](#connection)

### Connections_ConfirmConsentCode
Confirms consent code of a connection.


```js
azure_web_logicappsmanagementclient.Connections_ConfirmConsentCode({
  "subscriptionId": "",
  "resourceGroupName": "",
  "connectionName": "",
  "api-version": "",
  "content": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group name.
  * connectionName **required** `string`: The connection name.
  * api-version **required** `string`: API Version
  * content **required** [ConfirmConsentCodeInput](#confirmconsentcodeinput)

#### Output
* output [Connection](#connection)

### Connections_ListConnectionKeys
Lists connection keys.


```js
azure_web_logicappsmanagementclient.Connections_ListConnectionKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "connectionName": "",
  "api-version": "",
  "content": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group name.
  * connectionName **required** `string`: The connection name.
  * api-version **required** `string`: API Version
  * content **required** [ListConnectionKeysInput](#listconnectionkeysinput)

#### Output
* output [ConnectionSecrets](#connectionsecrets)

### Connections_ListConsentLinks
Lists consent links of a connection.


```js
azure_web_logicappsmanagementclient.Connections_ListConsentLinks({
  "subscriptionId": "",
  "resourceGroupName": "",
  "connectionName": "",
  "api-version": "",
  "content": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id
  * resourceGroupName **required** `string`: The resource group name.
  * connectionName **required** `string`: The connection name.
  * api-version **required** `string`: API Version
  * content **required** [ConsentLinkInput](#consentlinkinput)

#### Output
* output [ConsentLinkPayload](#consentlinkpayload)



## Definitions

### ApiEntity
* ApiEntity `object`: API Management
  * properties `object`
    * apiDefinitionUrl `string`: Api definition Url - url where the swagger can be downloaded from
    * backendService [BackendServiceDefinition](#backendservicedefinition)
    * capabilities `array`: Capabilities
      * items `string`
    * changedTime `string`: Timestamp of last connection change.
    * connectionParameters `object`: Connection parameters
    * createdTime `string`: Timestamp of the connection creation
    * generalInformation [GeneralApiInformation](#generalapiinformation)
    * metadata [Object](#object)
    * name `string`: Name of the API
    * path `string`: the URL path of this API when exposed via APIM
    * policies [ApiPolicies](#apipolicies)
    * protocols `array`: Protocols supported by the front end - http/https
      * items `string`
    * runtimeUrls `array`: Read only property returning the runtime endpoints where the API can be called
      * items `string`
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ApiOAuthSettings
* ApiOAuthSettings `object`: OAuth settings for the conenction provider
  * clientId `string`: Resource provider client id
  * clientSecret `string`: Client Secret needed for OAuth
  * customParameters `object`: OAuth parameters key is the name of parameter
  * identityProvider `string`: Identity provider
  * properties [Object](#object)
  * redirectUrl `string`: Url
  * scopes `array`: OAuth scopes
    * items `string`

### ApiOAuthSettingsParameter
* ApiOAuthSettingsParameter `object`: OAuth Settings Parameter
  * options [Object](#object)
  * uiDefinition [Object](#object)
  * value `string`: Value

### ApiPolicies
* ApiPolicies `object`: Api policies
  * properties `object`
    * content `string`: Content of xml policy
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ApisCollection
* ApisCollection `object`: Collection of Apis
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [ApiEntity](#apientity)

### ArmPlan
* ArmPlan `object`: The plan object in an ARM, represents a marketplace plan
  * name `string`: The name
  * product `string`: The product
  * promotionCode `string`: The promotion code
  * publisher `string`: The publisher
  * version `string`: Version of product

### BackendServiceDefinition
* BackendServiceDefinition `object`: API definitions with backend urls
  * properties `object`
    * hostingEnvironmentServiceUrls `array`: Service Urls per Hosting environment
      * items [HostingEnvironmentServiceDescriptions](#hostingenvironmentservicedescriptions)
    * serviceUrl `string`: Url from which the swagger payload will be fetched
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ConfirmConsentCodeInput
* ConfirmConsentCodeInput `object`: Confirm Consent Code Input payload
  * properties `object`
    * code `string`: Code that was returned during consent flow
    * objectId `string`: AAD object ID. This is userId
    * principalType `string` (values: ActiveDirectory, Connection, MicrosoftAccount): Principal type
    * tenantId `string`: Tenant Id
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### Connection
* Connection `object`: Api Connection
  * properties `object`
    * api [ExpandedParent[ApiEntity]](#expandedparent[apientity])
    * changedTime `string`: Timestamp of last connection change.
    * createdTime `string`: Timestamp of the connection creation
    * customParameterValues `object`: Custom login setting values.
    * displayName `string`: display name
    * firstExpirationTime `string`: Time in UTC when the first expiration of OAuth tokens
    * keywords `array`: List of Keywords that tag the acl
      * items `string`
    * metadata [Object](#object)
    * name `string`: connection name
    * nonSecretParameterValues `object`: Tokens/Claim
    * parameterValues `object`: Tokens/Claim
    * statuses `array`: Status of the connection
      * items [ConnectionStatus](#connectionstatus)
    * tenantId `string`
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ConnectionCollection
* ConnectionCollection `object`: Collection of conenctions
  * nextLink `string`: Link to next page of resources
  * value `array`: Collection of resources
    * items [Connection](#connection)

### ConnectionError
* ConnectionError `object`: Connection error
  * properties `object`
    * code `string`: code of the status
    * message `string`: Description of the status
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ConnectionParameter
* ConnectionParameter `object`: connection provider parameters
  * defaultValue [Object](#object)
  * oAuthSettings [ApiOAuthSettings](#apioauthsettings)
  * type `string` (values: string, securestring, secureobject, int, bool, object, array, oauthSetting, connection): Type of the parameter
  * uiDefinition [Object](#object)

### ConnectionSecrets
* ConnectionSecrets `object`
  * connectionKey `string`: Connection Key
  * parameterValues `object`: Tokens/Claim

### ConnectionStatus
* ConnectionStatus `object`: Connection status
  * properties `object`
    * error [ConnectionError](#connectionerror)
    * status `string`: Status
    * target `string`: Target of the error
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ConsentLink
* ConsentLink `object`
  * displayName `string`: Display Name of the parameter in the connection provider's oauthSettings
  * firstPartyLoginUri `string`: Uri for first party login
  * link `string`: Uri for the consent link
  * status `string` (values: Unauthenticated, Authenticated, Error): Status of the link

### ConsentLinkInput
* ConsentLinkInput `object`: Connection Constent Link payload
  * properties `object`
    * parameters `array`: Array of links
      * items [ConsentLinkInputParameter](#consentlinkinputparameter)
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ConsentLinkInputParameter
* ConsentLinkInputParameter `object`
  * objectId `string`: AAD OID (user or group) if the principal type is ActiveDirectory.
  * parameterName `string`: Name of the parameter in the connection provider's oauthSettings
  * principalType `string` (values: ActiveDirectory, Connection, MicrosoftAccount): Principal type
  * redirectUrl `string`: Name of the parameter in the connection provider's oauthSettings
  * tenantId `string`: Tenant Id

### ConsentLinkPayload
* ConsentLinkPayload `object`: Collection of consent links
  * value `array`: Collection of resources
    * items [ConsentLink](#consentlink)

### CustomLoginSettingValue
* CustomLoginSettingValue `object`: Custom logging setting value
  * properties `object`
    * option `string`: Option selected for this custom login setting value
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ExpandedParent[ApiEntity]
* ExpandedParent[ApiEntity] `object`: expanded parent object for expansion
  * properties `object`
    * entity [ResponseMessageEnvelope[ApiEntity]](#responsemessageenvelope[apientity])
    * id `string`: Id of connection provider
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### GeneralApiInformation
* GeneralApiInformation `object`: General API information
  * properties `object`
    * connectionDisplayName `string`: DefaultConnectionNameTemplate
    * connectionPortalUrl [Object](#object)
    * description `string`: Description
    * displayName `string`: Display Name
    * iconUrl `string`: Icon Url
    * termsOfUseUrl `string`: a public accessible url of the Terms Of Use Url of this API
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### HostingEnvironmentServiceDescriptions
* HostingEnvironmentServiceDescriptions `object`: Back end service per ASE
  * hostId `string`: Host Id
  * hostingEnvironmentId `string`: Hosting environment Id
  * serviceUrl `string`: service url to use
  * useInternalRouting `boolean`: When the backend url is in same ASE, for performance reason this flag can be set to true

### ListConnectionKeysInput
* ListConnectionKeysInput `object`: List Connection Keys Input payload
  * properties `object`
    * validityTimeSpan `string`: time span for how long the keys will be valid
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### Object
* Object `object`

### ParameterCustomLoginSettingValues
* ParameterCustomLoginSettingValues `object`: Custom logging setting values
  * properties `object`
    * customParameters `object`: Custom parameters.
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### Resource
* Resource `object`
  * id `string`: Resource Id
  * kind `string`: Kind of resource
  * location **required** `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ResponseMessageEnvelope[ApiEntity]
* ResponseMessageEnvelope[ApiEntity] `object`: Message envelope that contains the common Azure resource manager properties and the resource provider specific content
  * id `string`: Resource Id. Typically id is populated only for responses to GET requests. Caller is responsible for passing in this
  * location `string`: Geo region resource belongs to e.g. SouthCentralUS, SouthEastAsia
  * name `string`: Name of resource
  * plan [ArmPlan](#armplan)
  * properties [ApiEntity](#apientity)
  * sku [SkuDescription](#skudescription)
  * tags `object`: Tags associated with resource
  * type `string`: Type of resource e.g Microsoft.Web/sites

### SkuDescription
* SkuDescription `object`: Describes a sku for a scalable resource
  * capacity `integer`: Current number of instances assigned to the resource
  * family `string`: Family code of the resource sku
  * name `string`: Name of the resource sku
  * size `string`: Size specifier of the resource sku
  * tier `string`: Service Tier of the resource sku


