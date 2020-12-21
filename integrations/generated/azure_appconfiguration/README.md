# @datafire/azure_appconfiguration

Client library for AppConfigurationManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_appconfiguration
```
```js
let azure_appconfiguration = require('@datafire/azure_appconfiguration').create({
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

### Operations_List
Lists the operations available from this provider.


```js
azure_appconfiguration.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * $skipToken `string`: A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.

#### Output
* output [OperationDefinitionListResult](#operationdefinitionlistresult)

### Operations_CheckNameAvailability
Checks whether the configuration store name is available for use.


```js
azure_appconfiguration.Operations_CheckNameAvailability({
  "subscriptionId": "",
  "api-version": "",
  "checkNameAvailabilityParameters": {
    "name": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * api-version **required** `string`: The client API version.
  * checkNameAvailabilityParameters **required** [CheckNameAvailabilityParameters](#checknameavailabilityparameters)

#### Output
* output [NameAvailabilityStatus](#nameavailabilitystatus)

### ConfigurationStores_List
Lists the configuration stores for a given subscription.


```js
azure_appconfiguration.ConfigurationStores_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * api-version **required** `string`: The client API version.
  * $skipToken `string`: A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.

#### Output
* output [ConfigurationStoreListResult](#configurationstorelistresult)

### ConfigurationStores_ListByResourceGroup
Lists the configuration stores for a given resource group.


```js
azure_appconfiguration.ConfigurationStores_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * api-version **required** `string`: The client API version.
  * $skipToken `string`: A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.

#### Output
* output [ConfigurationStoreListResult](#configurationstorelistresult)

### ConfigurationStores_Delete
Deletes a configuration store.


```js
azure_appconfiguration.ConfigurationStores_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "configStoreName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * configStoreName **required** `string`: The name of the configuration store.
  * api-version **required** `string`: The client API version.

#### Output
*Output schema unknown*

### ConfigurationStores_Get
Gets the properties of the specified configuration store.


```js
azure_appconfiguration.ConfigurationStores_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "configStoreName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * configStoreName **required** `string`: The name of the configuration store.
  * api-version **required** `string`: The client API version.

#### Output
* output [ConfigurationStore](#configurationstore)

### ConfigurationStores_Update
Updates a configuration store with the specified parameters.


```js
azure_appconfiguration.ConfigurationStores_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "configStoreName": "",
  "api-version": "",
  "configStoreUpdateParameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * configStoreName **required** `string`: The name of the configuration store.
  * api-version **required** `string`: The client API version.
  * configStoreUpdateParameters **required** [ConfigurationStoreUpdateParameters](#configurationstoreupdateparameters)

#### Output
* output [ConfigurationStore](#configurationstore)

### ConfigurationStores_Create
Creates a configuration store with the specified parameters.


```js
azure_appconfiguration.ConfigurationStores_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "configStoreName": "",
  "api-version": "",
  "configStoreCreationParameters": {
    "sku": {
      "name": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * configStoreName **required** `string`: The name of the configuration store.
  * api-version **required** `string`: The client API version.
  * configStoreCreationParameters **required** [ConfigurationStore](#configurationstore)

#### Output
* output [ConfigurationStore](#configurationstore)

### ConfigurationStores_ListKeys
Lists the access key for the specified configuration store.


```js
azure_appconfiguration.ConfigurationStores_ListKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "configStoreName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * configStoreName **required** `string`: The name of the configuration store.
  * api-version **required** `string`: The client API version.
  * $skipToken `string`: A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.

#### Output
* output [ApiKeyListResult](#apikeylistresult)

### ConfigurationStores_RegenerateKey
Regenerates an access key for the specified configuration store.


```js
azure_appconfiguration.ConfigurationStores_RegenerateKey({
  "subscriptionId": "",
  "resourceGroupName": "",
  "configStoreName": "",
  "api-version": "",
  "regenerateKeyParameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * configStoreName **required** `string`: The name of the configuration store.
  * api-version **required** `string`: The client API version.
  * regenerateKeyParameters **required** [RegenerateKeyParameters](#regeneratekeyparameters)

#### Output
* output [ApiKey](#apikey)

### ConfigurationStores_ListKeyValue
Lists a configuration store key-value.


```js
azure_appconfiguration.ConfigurationStores_ListKeyValue({
  "subscriptionId": "",
  "resourceGroupName": "",
  "configStoreName": "",
  "api-version": "",
  "listKeyValueParameters": {
    "key": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * configStoreName **required** `string`: The name of the configuration store.
  * api-version **required** `string`: The client API version.
  * listKeyValueParameters **required** [ListKeyValueParameters](#listkeyvalueparameters)

#### Output
* output [KeyValue](#keyvalue)

### PrivateEndpointConnections_ListByConfigurationStore
Lists all private endpoint connections for a configuration store.


```js
azure_appconfiguration.PrivateEndpointConnections_ListByConfigurationStore({
  "subscriptionId": "",
  "resourceGroupName": "",
  "configStoreName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * configStoreName **required** `string`: The name of the configuration store.
  * api-version **required** `string`: The client API version.

#### Output
* output [PrivateEndpointConnectionListResult](#privateendpointconnectionlistresult)

### PrivateEndpointConnections_Delete
Deletes a private endpoint connection.


```js
azure_appconfiguration.PrivateEndpointConnections_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "configStoreName": "",
  "api-version": "",
  "privateEndpointConnectionName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * configStoreName **required** `string`: The name of the configuration store.
  * api-version **required** `string`: The client API version.
  * privateEndpointConnectionName **required** `string`: Private endpoint connection name

#### Output
*Output schema unknown*

### PrivateEndpointConnections_Get
Gets the specified private endpoint connection associated with the configuration store.


```js
azure_appconfiguration.PrivateEndpointConnections_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "configStoreName": "",
  "api-version": "",
  "privateEndpointConnectionName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * configStoreName **required** `string`: The name of the configuration store.
  * api-version **required** `string`: The client API version.
  * privateEndpointConnectionName **required** `string`: Private endpoint connection name

#### Output
* output [PrivateEndpointConnection](#privateendpointconnection)

### PrivateEndpointConnections_CreateOrUpdate
Update the state of the specified private endpoint connection associated with the configuration store.


```js
azure_appconfiguration.PrivateEndpointConnections_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "configStoreName": "",
  "api-version": "",
  "privateEndpointConnectionName": "",
  "privateEndpointConnection": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * configStoreName **required** `string`: The name of the configuration store.
  * api-version **required** `string`: The client API version.
  * privateEndpointConnectionName **required** `string`: Private endpoint connection name
  * privateEndpointConnection **required** [PrivateEndpointConnection](#privateendpointconnection)

#### Output
* output [PrivateEndpointConnection](#privateendpointconnection)

### PrivateLinkResources_ListByConfigurationStore
Gets the private link resources that need to be created for a configuration store.


```js
azure_appconfiguration.PrivateLinkResources_ListByConfigurationStore({
  "subscriptionId": "",
  "resourceGroupName": "",
  "configStoreName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * configStoreName **required** `string`: The name of the configuration store.
  * api-version **required** `string`: The client API version.

#### Output
* output [PrivateLinkResourceListResult](#privatelinkresourcelistresult)

### PrivateLinkResources_Get
Gets a private link resource that need to be created for a configuration store.


```js
azure_appconfiguration.PrivateLinkResources_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "configStoreName": "",
  "api-version": "",
  "groupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * configStoreName **required** `string`: The name of the configuration store.
  * api-version **required** `string`: The client API version.
  * groupName **required** `string`: The name of the private link resource group.

#### Output
* output [PrivateLinkResource](#privatelinkresource)



## Definitions

### ApiKey
* ApiKey `object`: An API key used for authenticating with a configuration store endpoint.
  * connectionString `string`: A connection string that can be used by supporting clients for authentication.
  * id `string`: The key ID.
  * lastModified `string`: The last time any of the key's properties were modified.
  * name `string`: A name for the key describing its usage.
  * readOnly `boolean`: Whether this key can only be used for read operations.
  * value `string`: The value of the key that is used for authentication purposes.

### ApiKeyListResult
* ApiKeyListResult `object`: The result of a request to list API keys.
  * nextLink `string`: The URI that can be used to request the next set of paged results.
  * value `array`: The collection value.
    * items [ApiKey](#apikey)

### CheckNameAvailabilityParameters
* CheckNameAvailabilityParameters `object`: Parameters used for checking whether a resource name is available.
  * name **required** `string`: The name to check for availability.
  * type **required** `string` (values: Microsoft.AppConfiguration/configurationStores): The resource type to check for name availability.

### ConfigurationStore
* ConfigurationStore `object`: The configuration store along with all resource properties. The Configuration Store will have all information to begin utilizing it.
  * identity [ResourceIdentity](#resourceidentity)
  * properties [ConfigurationStoreProperties](#configurationstoreproperties)
  * sku **required** [Sku](#sku)
  * id `string`: The resource ID.
  * location **required** `string`: The location of the resource. This cannot be changed after the resource is created.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### ConfigurationStoreListResult
* ConfigurationStoreListResult `object`: The result of a request to list configuration stores.
  * nextLink `string`: The URI that can be used to request the next set of paged results.
  * value `array`: The collection value.
    * items [ConfigurationStore](#configurationstore)

### ConfigurationStoreProperties
* ConfigurationStoreProperties `object`: The properties of a configuration store.
  * creationDate `string`: The creation date of configuration store.
  * encryption [EncryptionProperties](#encryptionproperties)
  * endpoint `string`: The DNS endpoint where the configuration store API will be available.
  * provisioningState `string` (values: Creating, Updating, Deleting, Succeeded, Failed, Canceled): The provisioning state of the configuration store.

### ConfigurationStorePropertiesUpdateParameters
* ConfigurationStorePropertiesUpdateParameters `object`: The properties for updating a configuration store.
  * encryption [EncryptionProperties](#encryptionproperties)

### ConfigurationStoreUpdateParameters
* ConfigurationStoreUpdateParameters `object`: The parameters for updating a configuration store.
  * identity [ResourceIdentity](#resourceidentity)
  * properties [ConfigurationStorePropertiesUpdateParameters](#configurationstorepropertiesupdateparameters)
  * sku [Sku](#sku)
  * tags `object`: The ARM resource tags.

### EncryptionProperties
* EncryptionProperties `object`: The encryption settings for a configuration store.
  * keyVaultProperties [KeyVaultProperties](#keyvaultproperties)

### Error
* Error `object`: AppConfiguration error object.
  * code `string`: Error code.
  * message `string`: Error message.

### KeyValue
* KeyValue `object`: The result of a request to retrieve a key-value from the specified configuration store.
  * contentType `string`: The content type of the key-value's value.
  * eTag `string`: An ETag indicating the state of a key-value within a configuration store.
  * key `string`: The primary identifier of a key-value.
  * label `string`: A value used to group key-values.
  * lastModified `string`: The last time a modifying operation was performed on the given key-value.
  * locked `boolean`: A value indicating whether the key-value is locked.
  * tags `object`: A dictionary of tags that can help identify what a key-value may be applicable for.
  * value `string`: The value of the key-value.

### KeyVaultProperties
* KeyVaultProperties `object`: Settings concerning key vault encryption for a configuration store.
  * identityClientId `string`: The client id of the identity which will be used to access key vault.
  * keyIdentifier `string`: The URI of the key vault key used to encrypt data.

### ListKeyValueParameters
* ListKeyValueParameters `object`: The parameters used to list a configuration store key-value
  * key **required** `string`: The key to retrieve.
  * label `string`: The label of the key.

### NameAvailabilityStatus
* NameAvailabilityStatus `object`: The result of a request to check the availability of a resource name.
  * message `string`: If any, the error message that provides more detail for the reason that the name is not available.
  * nameAvailable `boolean`: The value indicating whether the resource name is available.
  * reason `string`: If any, the reason that the name is not available.

### OperationDefinition
* OperationDefinition `object`: The definition of a configuration store operation.
  * display [OperationDefinitionDisplay](#operationdefinitiondisplay)
  * name `string`: Operation name: {provider}/{resource}/{operation}.

### OperationDefinitionDisplay
* OperationDefinitionDisplay `object`: The display information for a configuration store operation.
  * description `string`: The description for the operation.
  * operation `string`: The operation that users can perform.
  * provider `string`: The resource provider name: Microsoft App Configuration."
  * resource `string`: The resource on which the operation is performed.

### OperationDefinitionListResult
* OperationDefinitionListResult `object`: The result of a request to list configuration store operations.
  * nextLink `string`: The URI that can be used to request the next set of paged results.
  * value `array`: The collection value.
    * items [OperationDefinition](#operationdefinition)

### PrivateEndpoint
* PrivateEndpoint `object`: Private endpoint which a connection belongs to.
  * id `string`: The resource Id for private endpoint

### PrivateEndpointConnection
* PrivateEndpointConnection `object`: A private endpoint connection
  * id `string`: The resource ID.
  * name `string`: The name of the resource.
  * properties [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
  * type `string`: The type of the resource.

### PrivateEndpointConnectionListResult
* PrivateEndpointConnectionListResult `object`: A list of private endpoint connections
  * nextLink `string`: The URI that can be used to request the next set of paged results.
  * value `array`: The collection value.
    * items [PrivateEndpointConnection](#privateendpointconnection)

### PrivateEndpointConnectionProperties
* PrivateEndpointConnectionProperties `object`: Properties of a private endpoint connection.
  * privateEndpoint [PrivateEndpoint](#privateendpoint)
  * privateLinkServiceConnectionState **required** [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate)
  * provisioningState `string` (values: Creating, Updating, Deleting, Succeeded, Failed, Canceled): The provisioning status of the private endpoint connection.

### PrivateLinkResource
* PrivateLinkResource `object`: A resource that supports private link capabilities.
  * id `string`: The resource ID.
  * name `string`: The name of the resource.
  * properties [PrivateLinkResourceProperties](#privatelinkresourceproperties)
  * type `string`: The type of the resource.

### PrivateLinkResourceListResult
* PrivateLinkResourceListResult `object`: A list of private link resources.
  * nextLink `string`: The URI that can be used to request the next set of paged results.
  * value `array`: The collection value.
    * items [PrivateLinkResource](#privatelinkresource)

### PrivateLinkResourceProperties
* PrivateLinkResourceProperties `object`: Properties of a private link resource.
  * groupId `string`: The private link resource group id.
  * requiredMembers `array`: The private link resource required member names.
    * items `string`

### PrivateLinkServiceConnectionState
* PrivateLinkServiceConnectionState `object`: The state of a private link service connection.
  * actionsRequired `string` (values: None, Recreate): Any action that is required beyond basic workflow (approve/ reject/ disconnect)
  * description `string`: The private link service connection description.
  * status `string` (values: Pending, Approved, Rejected, Disconnected): The private link service connection status.

### RegenerateKeyParameters
* RegenerateKeyParameters `object`: The parameters used to regenerate an API key.
  * id `string`: The id of the key to regenerate.

### Resource
* Resource `object`: An Azure resource.
  * id `string`: The resource ID.
  * location **required** `string`: The location of the resource. This cannot be changed after the resource is created.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### ResourceIdentity
* ResourceIdentity `object`: An identity that can be associated with a resource.
  * principalId `string`: The principal id of the identity. This property will only be provided for a system-assigned identity.
  * tenantId `string`: The tenant id associated with the resource's identity. This property will only be provided for a system-assigned identity.
  * type `string` (values: None, SystemAssigned, UserAssigned, SystemAssigned, UserAssigned): The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
  * userAssignedIdentities `object`: The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

### Sku
* Sku `object`: Describes a configuration store SKU.
  * name **required** `string`: The SKU name of the configuration store.

### UserIdentity
* UserIdentity `object`: A resource identity that is managed by the user of the service.
  * clientId `string`: The client ID of the user-assigned identity.
  * principalId `string`: The principal ID of the user-assigned identity.


