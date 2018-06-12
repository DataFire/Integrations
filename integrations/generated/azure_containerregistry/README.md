# @datafire/azure_containerregistry

Client library for ContainerRegistryManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_containerregistry
```
```js
let azure_containerregistry = require('@datafire/azure_containerregistry').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_containerregistry.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### Operations_List
Lists all of the available Azure Container Registry REST API operations.


```js
azure_containerregistry.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.

#### Output
* output [OperationListResult](#operationlistresult)

### Registries_CheckNameAvailability
Checks whether the container registry name is available for use. The name must contain only alphanumeric characters, be globally unique, and between 5 and 50 characters in length.


```js
azure_containerregistry.Registries_CheckNameAvailability({
  "api-version": "",
  "subscriptionId": "",
  "registryNameCheckRequest": {
    "name": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * registryNameCheckRequest **required** [RegistryNameCheckRequest](#registrynamecheckrequest)

#### Output
* output [RegistryNameStatus](#registrynamestatus)

### Registries_List
Lists all the container registries under the specified subscription.


```js
azure_containerregistry.Registries_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.

#### Output
* output [RegistryListResult](#registrylistresult)

### Registries_ListByResourceGroup
Lists all the container registries under the specified resource group.


```js
azure_containerregistry.Registries_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.

#### Output
* output [RegistryListResult](#registrylistresult)

### Registries_Delete
Deletes a container registry.


```js
azure_containerregistry.Registries_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.

#### Output
*Output schema unknown*

### Registries_Get
Gets the properties of the specified container registry.


```js
azure_containerregistry.Registries_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.

#### Output
* output [Registry](#registry)

### Registries_Update
Updates a container registry with the specified parameters.


```js
azure_containerregistry.Registries_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "registryUpdateParameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * registryUpdateParameters **required** [RegistryUpdateParameters](#registryupdateparameters)

#### Output
* output [Registry](#registry)

### Registries_Create
Creates a container registry with the specified parameters.


```js
azure_containerregistry.Registries_Create({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "registry": {
    "sku": {
      "name": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * registry **required** [Registry](#registry)

#### Output
* output [Registry](#registry)

### Registries_ImportImage
Copies an image to this container registry from the specified container registry.


```js
azure_containerregistry.Registries_ImportImage({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "parameters": {
    "source": {
      "resourceId": "",
      "sourceImage": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * parameters **required** [ImportImageParameters](#importimageparameters)

#### Output
*Output schema unknown*

### Registries_ListCredentials
Lists the login credentials for the specified container registry.


```js
azure_containerregistry.Registries_ListCredentials({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.

#### Output
* output [RegistryListCredentialsResult](#registrylistcredentialsresult)

### Registries_ListUsages
Gets the quota usages for the specified container registry.


```js
azure_containerregistry.Registries_ListUsages({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.

#### Output
* output [RegistryUsageListResult](#registryusagelistresult)

### Registries_RegenerateCredential
Regenerates one of the login credentials for the specified container registry.


```js
azure_containerregistry.Registries_RegenerateCredential({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "regenerateCredentialParameters": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * regenerateCredentialParameters **required** [RegenerateCredentialParameters](#regeneratecredentialparameters)

#### Output
* output [RegistryListCredentialsResult](#registrylistcredentialsresult)

### Replications_List
Lists all the replications for the specified container registry.


```js
azure_containerregistry.Replications_List({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.

#### Output
* output [ReplicationListResult](#replicationlistresult)

### Replications_Delete
Deletes a replication from a container registry.


```js
azure_containerregistry.Replications_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "replicationName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * replicationName **required** `string`: The name of the replication.

#### Output
*Output schema unknown*

### Replications_Get
Gets the properties of the specified replication.


```js
azure_containerregistry.Replications_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "replicationName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * replicationName **required** `string`: The name of the replication.

#### Output
* output [Replication](#replication)

### Replications_Update
Updates a replication for a container registry with the specified parameters.


```js
azure_containerregistry.Replications_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "replicationName": "",
  "replicationUpdateParameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * replicationName **required** `string`: The name of the replication.
  * replicationUpdateParameters **required** [ReplicationUpdateParameters](#replicationupdateparameters)

#### Output
* output [Replication](#replication)

### Replications_Create
Creates a replication for a container registry with the specified parameters.


```js
azure_containerregistry.Replications_Create({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "replicationName": "",
  "replication": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * replicationName **required** `string`: The name of the replication.
  * replication **required** [Replication](#replication)

#### Output
* output [Replication](#replication)

### Webhooks_List
Lists all the webhooks for the specified container registry.


```js
azure_containerregistry.Webhooks_List({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.

#### Output
* output [WebhookListResult](#webhooklistresult)

### Webhooks_Delete
Deletes a webhook from a container registry.


```js
azure_containerregistry.Webhooks_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "webhookName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * webhookName **required** `string`: The name of the webhook.

#### Output
*Output schema unknown*

### Webhooks_Get
Gets the properties of the specified webhook.


```js
azure_containerregistry.Webhooks_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "webhookName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * webhookName **required** `string`: The name of the webhook.

#### Output
* output [Webhook](#webhook)

### Webhooks_Update
Updates a webhook with the specified parameters.


```js
azure_containerregistry.Webhooks_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "webhookName": "",
  "webhookUpdateParameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * webhookName **required** `string`: The name of the webhook.
  * webhookUpdateParameters **required** [WebhookUpdateParameters](#webhookupdateparameters)

#### Output
* output [Webhook](#webhook)

### Webhooks_Create
Creates a webhook for a container registry with the specified parameters.


```js
azure_containerregistry.Webhooks_Create({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "webhookName": "",
  "webhookCreateParameters": {
    "location": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * webhookName **required** `string`: The name of the webhook.
  * webhookCreateParameters **required** [WebhookCreateParameters](#webhookcreateparameters)

#### Output
* output [Webhook](#webhook)

### Webhooks_GetCallbackConfig
Gets the configuration of service URI and custom headers for the webhook.


```js
azure_containerregistry.Webhooks_GetCallbackConfig({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "webhookName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * webhookName **required** `string`: The name of the webhook.

#### Output
* output [CallbackConfig](#callbackconfig)

### Webhooks_ListEvents
Lists recent events for the specified webhook.


```js
azure_containerregistry.Webhooks_ListEvents({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "webhookName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * webhookName **required** `string`: The name of the webhook.

#### Output
* output [EventListResult](#eventlistresult)

### Webhooks_Ping
Triggers a ping event to be sent to the webhook.


```js
azure_containerregistry.Webhooks_Ping({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "webhookName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * webhookName **required** `string`: The name of the webhook.

#### Output
* output [EventInfo](#eventinfo)



## Definitions

### Actor
* Actor `object`: The agent that initiated the event. For most situations, this could be from the authorization context of the request.
  * name `string`: The subject or username associated with the request context that generated the event.

### CallbackConfig
* CallbackConfig `object`: The configuration of service URI and custom headers for the webhook.
  * customHeaders `object`: Custom headers that will be added to the webhook notifications.
  * serviceUri **required** `string`: The service URI for the webhook to post notifications.

### Event
* Event `object`: The event for a webhook.
  * eventRequestMessage [EventRequestMessage](#eventrequestmessage)
  * eventResponseMessage [EventResponseMessage](#eventresponsemessage)
  * id `string`: The event ID.

### EventContent
* EventContent `object`: The content of the event request message.
  * action `string`: The action that encompasses the provided event.
  * actor [Actor](#actor)
  * id `string`: The event ID.
  * request [Request](#request)
  * source [Source](#source)
  * target [Target](#target)
  * timestamp `string`: The time at which the event occurred.

### EventInfo
* EventInfo `object`: The basic information of an event.
  * id `string`: The event ID.

### EventListResult
* EventListResult `object`: The result of a request to list events for a webhook.
  * nextLink `string`: The URI that can be used to request the next list of events.
  * value `array`: The list of events. Since this list may be incomplete, the nextLink field should be used to request the next list of events.
    * items [Event](#event)

### EventRequestMessage
* EventRequestMessage `object`: The event request message sent to the service URI.
  * content [EventContent](#eventcontent)
  * headers `object`: The headers of the event request message.
  * method `string`: The HTTP method used to send the event request message.
  * requestUri `string`: The URI used to send the event request message.
  * version `string`: The HTTP message version.

### EventResponseMessage
* EventResponseMessage `object`: The event response message received from the service URI.
  * content `string`: The content of the event response message.
  * headers `object`: The headers of the event response message.
  * reasonPhrase `string`: The reason phrase of the event response message.
  * statusCode `string`: The status code of the event response message.
  * version `string`: The HTTP message version.

### ImportImageParameters
* ImportImageParameters `object`
  * mode `string` (values: NoForce, Force): When Force, any existing target tags will be overwritten. When NoForce, any existing target tags will fail the operation before any copying begins.
  * source **required** [ImportSource](#importsource)
  * targetTags `array`: List of strings of the form repo[:tag]. When tag is omitted the source will be used (or 'latest' if source tag is also omitted).
    * items `string`
  * untaggedTargetRepositories `array`: List of strings of repository names to do a manifest only copy. No tag will be created.
    * items `string`

### ImportSource
* ImportSource `object`
  * resourceId **required** `string`: The resource identifier of the target Azure Container Registry.
  * sourceImage **required** `string`: Repository name of the source image.

### OperationDefinition
* OperationDefinition `object`: The definition of a container registry operation.
  * display [OperationDisplayDefinition](#operationdisplaydefinition)
  * name `string`: Operation name: {provider}/{resource}/{operation}.

### OperationDisplayDefinition
* OperationDisplayDefinition `object`: The display information for a container registry operation.
  * description `string`: The description for the operation.
  * operation `string`: The operation that users can perform.
  * provider `string`: The resource provider name: Microsoft.ContainerRegistry.
  * resource `string`: The resource on which the operation is performed.

### OperationListResult
* OperationListResult `object`: The result of a request to list container registry operations.
  * nextLink `string`: The URI that can be used to request the next list of container registry operations.
  * value `array`: The list of container registry operations. Since this list may be incomplete, the nextLink field should be used to request the next list of operations.
    * items [OperationDefinition](#operationdefinition)

### RegenerateCredentialParameters
* RegenerateCredentialParameters `object`: The parameters used to regenerate the login credential.
  * name **required** `string` (values: password, password2): Specifies name of the password which should be regenerated -- password or password2.

### Registry
* Registry `object`: An object that represents a container registry.
  * properties [RegistryProperties](#registryproperties)
  * sku **required** [Sku](#sku)
  * id `string`: The resource ID.
  * location **required** `string`: The location of the resource. This cannot be changed after the resource is created.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### RegistryListCredentialsResult
* RegistryListCredentialsResult `object`: The response from the ListCredentials operation.
  * passwords `array`: The list of passwords for a container registry.
    * items [RegistryPassword](#registrypassword)
  * username `string`: The username for a container registry.

### RegistryListResult
* RegistryListResult `object`: The result of a request to list container registries.
  * nextLink `string`: The URI that can be used to request the next list of container registries.
  * value `array`: The list of container registries. Since this list may be incomplete, the nextLink field should be used to request the next list of container registries.
    * items [Registry](#registry)

### RegistryNameCheckRequest
* RegistryNameCheckRequest `object`: A request to check whether a container registry name is available.
  * name **required** `string`: The name of the container registry.
  * type **required** `string` (values: Microsoft.ContainerRegistry/registries): The resource type of the container registry. This field must be set to 'Microsoft.ContainerRegistry/registries'.

### RegistryNameStatus
* RegistryNameStatus `object`: The result of a request to check the availability of a container registry name.
  * message `string`: If any, the error message that provides more detail for the reason that the name is not available.
  * nameAvailable `boolean`: The value that indicates whether the name is available.
  * reason `string`: If any, the reason that the name is not available.

### RegistryPassword
* RegistryPassword `object`: The login password for the container registry.
  * name `string` (values: password, password2): The password name.
  * value `string`: The password value.

### RegistryProperties
* RegistryProperties `object`: The properties of a container registry.
  * adminUserEnabled `boolean`: The value that indicates whether the admin user is enabled.
  * creationDate `string`: The creation date of the container registry in ISO8601 format.
  * loginServer `string`: The URL that can be used to log into the container registry.
  * provisioningState `string` (values: Creating, Updating, Deleting, Succeeded, Failed, Canceled): The provisioning state of the container registry at the time the operation was called.
  * status [Status](#status)
  * storageAccount [StorageAccountProperties](#storageaccountproperties)

### RegistryPropertiesUpdateParameters
* RegistryPropertiesUpdateParameters `object`: The parameters for updating the properties of a container registry.
  * adminUserEnabled `boolean`: The value that indicates whether the admin user is enabled.
  * storageAccount [StorageAccountProperties](#storageaccountproperties)

### RegistryUpdateParameters
* RegistryUpdateParameters `object`: The parameters for updating a container registry.
  * properties [RegistryPropertiesUpdateParameters](#registrypropertiesupdateparameters)
  * sku [Sku](#sku)
  * tags `object`: The tags for the container registry.

### RegistryUsage
* RegistryUsage `object`: The quota usage for a container registry.
  * currentValue `integer`: The current value of the usage.
  * limit `integer`: The limit of the usage.
  * name `string`: The name of the usage.
  * unit `string` (values: Count, Bytes): The unit of measurement.

### RegistryUsageListResult
* RegistryUsageListResult `object`: The result of a request to get container registry quota usages.
  * value `array`: The list of container registry quota usages.
    * items [RegistryUsage](#registryusage)

### Replication
* Replication `object`: An object that represents a replication for a container registry.
  * properties [ReplicationProperties](#replicationproperties)
  * id `string`: The resource ID.
  * location **required** `string`: The location of the resource. This cannot be changed after the resource is created.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### ReplicationListResult
* ReplicationListResult `object`: The result of a request to list replications for a container registry.
  * nextLink `string`: The URI that can be used to request the next list of replications.
  * value `array`: The list of replications. Since this list may be incomplete, the nextLink field should be used to request the next list of replications.
    * items [Replication](#replication)

### ReplicationProperties
* ReplicationProperties `object`: The properties of a replication.
  * provisioningState `string` (values: Creating, Updating, Deleting, Succeeded, Failed, Canceled): The provisioning state of the replication at the time the operation was called.
  * status [Status](#status)

### ReplicationUpdateParameters
* ReplicationUpdateParameters `object`: The parameters for updating a replication.
  * tags `object`: The tags for the replication.

### Request
* Request `object`: The request that generated the event.
  * addr `string`: The IP or hostname and possibly port of the client connection that initiated the event. This is the RemoteAddr from the standard http request.
  * host `string`: The externally accessible hostname of the registry instance, as specified by the http host header on incoming requests.
  * id `string`: The ID of the request that initiated the event.
  * method `string`: The request method that generated the event.
  * useragent `string`: The user agent header of the request.

### Resource
* Resource `object`: An Azure resource.
  * id `string`: The resource ID.
  * location **required** `string`: The location of the resource. This cannot be changed after the resource is created.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### Sku
* Sku `object`: The SKU of a container registry.
  * name **required** `string` (values: Classic, Basic, Standard, Premium): The SKU name of the container registry. Required for registry creation.
  * tier `string` (values: Classic, Basic, Standard, Premium): The SKU tier based on the SKU name.

### Source
* Source `object`: The registry node that generated the event. Put differently, while the actor initiates the event, the source generates it.
  * addr `string`: The IP or hostname and the port of the registry node that generated the event. Generally, this will be resolved by os.Hostname() along with the running port.
  * instanceID `string`: The running instance of an application. Changes after each restart.

### Status
* Status `object`: The status of an Azure resource at the time the operation was called.
  * displayStatus `string`: The short label for the status.
  * message `string`: The detailed message for the status, including alerts and error messages.
  * timestamp `string`: The timestamp when the status was changed to the current value.

### StorageAccountProperties
* StorageAccountProperties `object`: The properties of a storage account for a container registry. Only applicable to Classic SKU.
  * id **required** `string`: The resource ID of the storage account.

### Target
* Target `object`: The target of the event.
  * digest `string`: The digest of the content, as defined by the Registry V2 HTTP API Specification.
  * length `integer`: The number of bytes of the content. Same as Size field.
  * mediaType `string`: The MIME type of the referenced object.
  * repository `string`: The repository name.
  * size `integer`: The number of bytes of the content. Same as Length field.
  * tag `string`: The tag name.
  * url `string`: The direct URL to the content.

### Webhook
* Webhook `object`: An object that represents a webhook for a container registry.
  * properties [WebhookProperties](#webhookproperties)
  * id `string`: The resource ID.
  * location **required** `string`: The location of the resource. This cannot be changed after the resource is created.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### WebhookCreateParameters
* WebhookCreateParameters `object`: The parameters for creating a webhook.
  * location **required** `string`: The location of the webhook. This cannot be changed after the resource is created.
  * properties [WebhookPropertiesCreateParameters](#webhookpropertiescreateparameters)
  * tags `object`: The tags for the webhook.

### WebhookListResult
* WebhookListResult `object`: The result of a request to list webhooks for a container registry.
  * nextLink `string`: The URI that can be used to request the next list of webhooks.
  * value `array`: The list of webhooks. Since this list may be incomplete, the nextLink field should be used to request the next list of webhooks.
    * items [Webhook](#webhook)

### WebhookProperties
* WebhookProperties `object`: The properties of a webhook.
  * actions **required** `array`: The list of actions that trigger the webhook to post notifications.
    * items `string` (values: push, delete)
  * provisioningState `string` (values: Creating, Updating, Deleting, Succeeded, Failed, Canceled): The provisioning state of the webhook at the time the operation was called.
  * scope `string`: The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events.
  * status `string` (values: enabled, disabled): The status of the webhook at the time the operation was called.

### WebhookPropertiesCreateParameters
* WebhookPropertiesCreateParameters `object`: The parameters for creating the properties of a webhook.
  * actions **required** `array`: The list of actions that trigger the webhook to post notifications.
    * items `string` (values: push, delete)
  * customHeaders `object`: Custom headers that will be added to the webhook notifications.
  * scope `string`: The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events.
  * serviceUri **required** `string`: The service URI for the webhook to post notifications.
  * status `string` (values: enabled, disabled): The status of the webhook at the time the operation was called.

### WebhookPropertiesUpdateParameters
* WebhookPropertiesUpdateParameters `object`: The parameters for updating the properties of a webhook.
  * actions `array`: The list of actions that trigger the webhook to post notifications.
    * items `string` (values: push, delete)
  * customHeaders `object`: Custom headers that will be added to the webhook notifications.
  * scope `string`: The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events.
  * serviceUri `string`: The service URI for the webhook to post notifications.
  * status `string` (values: enabled, disabled): The status of the webhook at the time the operation was called.

### WebhookUpdateParameters
* WebhookUpdateParameters `object`: The parameters for updating a webhook.
  * properties [WebhookPropertiesUpdateParameters](#webhookpropertiesupdateparameters)
  * tags `object`: The tags for the webhook.


