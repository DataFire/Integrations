# @datafire/azure_containerinstance_containerinstance

Client library for ContainerInstanceManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_containerinstance_containerinstance
```
```js
let azure_containerinstance_containerinstance = require('@datafire/azure_containerinstance_containerinstance').create({
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
List the operations for Azure Container Instance service.


```js
azure_containerinstance_containerinstance.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version

#### Output
* output [OperationListResult](#operationlistresult)

### ContainerGroups_List
Get a list of container groups in the specified subscription. This operation returns properties of each container group including containers, image registry credentials, restart policy, IP address type, OS type, state, and volumes.


```js
azure_containerinstance_containerinstance.ContainerGroups_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version

#### Output
* output [ContainerGroupListResult](#containergrouplistresult)

### ListCachedImages
Get the list of cached images on specific OS type for a subscription in a region.


```js
azure_containerinstance_containerinstance.ListCachedImages({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: The identifier for the physical azure location.
  * api-version **required** `string`: Client API version

#### Output
* output [CachedImagesListResult](#cachedimageslistresult)

### ListCapabilities
Get the list of CPU/memory/GPU capabilities of a region.


```js
azure_containerinstance_containerinstance.ListCapabilities({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: The identifier for the physical azure location.
  * api-version **required** `string`: Client API version

#### Output
* output [CapabilitiesListResult](#capabilitieslistresult)

### ContainerGroupUsage_List
Get the usage for a subscription


```js
azure_containerinstance_containerinstance.ContainerGroupUsage_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: The identifier for the physical azure location.
  * api-version **required** `string`: Client API version

#### Output
* output [UsageListResult](#usagelistresult)

### ContainerGroups_ListByResourceGroup
Get a list of container groups in a specified subscription and resource group. This operation returns properties of each container group including containers, image registry credentials, restart policy, IP address type, OS type, state, and volumes.


```js
azure_containerinstance_containerinstance.ContainerGroups_ListByResourceGroup({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version
  * resourceGroupName **required** `string`: The name of the resource group.

#### Output
* output [ContainerGroupListResult](#containergrouplistresult)

### ContainerGroups_Delete
Delete the specified container group in the specified subscription and resource group. The operation does not delete other resources provided by the user, such as volumes.


```js
azure_containerinstance_containerinstance.ContainerGroups_Delete({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "containerGroupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version
  * resourceGroupName **required** `string`: The name of the resource group.
  * containerGroupName **required** `string`: The name of the container group.

#### Output
* output [ContainerGroup](#containergroup)

### ContainerGroups_Get
Gets the properties of the specified container group in the specified subscription and resource group. The operation returns the properties of each container group including containers, image registry credentials, restart policy, IP address type, OS type, state, and volumes.


```js
azure_containerinstance_containerinstance.ContainerGroups_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "containerGroupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version
  * resourceGroupName **required** `string`: The name of the resource group.
  * containerGroupName **required** `string`: The name of the container group.

#### Output
* output [ContainerGroup](#containergroup)

### ContainerGroups_Update
Updates container group tags with specified values.


```js
azure_containerinstance_containerinstance.ContainerGroups_Update({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "containerGroupName": "",
  "Resource": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version
  * resourceGroupName **required** `string`: The name of the resource group.
  * containerGroupName **required** `string`: The name of the container group.
  * Resource **required** [Resource](#resource)

#### Output
* output [ContainerGroup](#containergroup)

### ContainerGroups_CreateOrUpdate
Create or update container groups with specified configurations.


```js
azure_containerinstance_containerinstance.ContainerGroups_CreateOrUpdate({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "containerGroupName": "",
  "containerGroup": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version
  * resourceGroupName **required** `string`: The name of the resource group.
  * containerGroupName **required** `string`: The name of the container group.
  * containerGroup **required** [ContainerGroup](#containergroup)

#### Output
* output [ContainerGroup](#containergroup)

### Container_ExecuteCommand
Executes a command for a specific container instance in a specified resource group and container group.


```js
azure_containerinstance_containerinstance.Container_ExecuteCommand({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "containerGroupName": "",
  "containerName": "",
  "containerExecRequest": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version
  * resourceGroupName **required** `string`: The name of the resource group.
  * containerGroupName **required** `string`: The name of the container group.
  * containerName **required** `string`: The name of the container instance.
  * containerExecRequest **required** [ContainerExecRequest](#containerexecrequest)

#### Output
* output [ContainerExecResponse](#containerexecresponse)

### Container_ListLogs
Get the logs for a specified container instance in a specified resource group and container group.


```js
azure_containerinstance_containerinstance.Container_ListLogs({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "containerGroupName": "",
  "containerName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version
  * resourceGroupName **required** `string`: The name of the resource group.
  * containerGroupName **required** `string`: The name of the container group.
  * containerName **required** `string`: The name of the container instance.
  * tail `integer`: The number of lines to show from the tail of the container instance log. If not provided, all available logs are shown up to 4mb.

#### Output
* output [Logs](#logs)

### ContainerGroups_Restart
Restarts all containers in a container group in place. If container image has updates, new image will be downloaded.


```js
azure_containerinstance_containerinstance.ContainerGroups_Restart({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "containerGroupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version
  * resourceGroupName **required** `string`: The name of the resource group.
  * containerGroupName **required** `string`: The name of the container group.

#### Output
*Output schema unknown*

### ContainerGroups_Start
Starts all containers in a container group.


```js
azure_containerinstance_containerinstance.ContainerGroups_Start({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "containerGroupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version
  * resourceGroupName **required** `string`: The name of the resource group.
  * containerGroupName **required** `string`: The name of the container group.

#### Output
*Output schema unknown*

### ContainerGroups_Stop
Stops all containers in a container group. Compute resources will be deallocated and billing will stop.


```js
azure_containerinstance_containerinstance.ContainerGroups_Stop({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "containerGroupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version
  * resourceGroupName **required** `string`: The name of the resource group.
  * containerGroupName **required** `string`: The name of the container group.

#### Output
*Output schema unknown*

### ServiceAssociationLink_Delete
Delete the container instance service association link for the subnet. This operation unblocks user from deleting subnet.


```js
azure_containerinstance_containerinstance.ServiceAssociationLink_Delete({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "subnetName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * subnetName **required** `string`: The name of the subnet.

#### Output
*Output schema unknown*



## Definitions

### AzureFileVolume
* AzureFileVolume `object`: The properties of the Azure File volume. Azure File shares are mounted as volumes.
  * readOnly `boolean`: The flag indicating whether the Azure File shared mounted as a volume is read-only.
  * shareName **required** `string`: The name of the Azure File share to be mounted as a volume.
  * storageAccountKey `string`: The storage account access key used to access the Azure File share.
  * storageAccountName **required** `string`: The name of the storage account that contains the Azure File share.

### CachedImagesListResult
* CachedImagesListResult `object`: The response containing cached images.
  * nextLink `string`: The URI to fetch the next page of cached images.
  * value `array`: The list of cached images.
    * items [cachedImages](#cachedimages)

### Capabilities
* Capabilities `object`: The regional capabilities.
  * capabilities `object`: The supported capabilities.
    * maxCpu `number`: The maximum allowed CPU request in cores.
    * maxGpuCount `number`: The maximum allowed GPU count.
    * maxMemoryInGB `number`: The maximum allowed memory request in GB.
  * gpu `string`: The GPU sku that this capability describes.
  * ipAddressType `string`: The ip address type that this capability describes.
  * location `string`: The resource location.
  * osType `string`: The OS type that this capability describes.
  * resourceType `string`: The resource type that this capability describes.

### CapabilitiesListResult
* CapabilitiesListResult `object`: The response containing list of capabilities.
  * nextLink `string`: The URI to fetch the next page of capabilities.
  * value `array`: The list of capabilities.
    * items [Capabilities](#capabilities)

### CloudError
* CloudError `object`: An error response from the Batch service.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: An error response from the Batch service.
  * code `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * details `array`: A list of additional details about the error.
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: A message describing the error, intended to be suitable for display in a user interface.
  * target `string`: The target of the particular error. For example, the name of the property in error.

### Container
* Container `object`: A container instance.
  * name **required** `string`: The user-provided name of the container instance.
  * properties **required** [ContainerProperties](#containerproperties)

### ContainerExec
* ContainerExec `object`: The container execution command, for liveness or readiness probe
  * command `array`: The commands to execute within the container.
    * items `string`

### ContainerExecRequest
* ContainerExecRequest `object`: The container exec request.
  * command `string`: The command to be executed.
  * terminalSize `object`: The size of the terminal.
    * cols `integer`: The column size of the terminal
    * rows `integer`: The row size of the terminal

### ContainerExecResponse
* ContainerExecResponse `object`: The information for the container exec command.
  * password `string`: The password to start the exec command.
  * webSocketUri `string`: The uri for the exec websocket.

### ContainerGroup
* ContainerGroup: A container group.
  * id `string`: The resource id.
  * location `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.
  * identity [ContainerGroupIdentity](#containergroupidentity)
  * properties **required** `object`
    * containers **required** `array`: The containers within the container group.
      * items [Container](#container)
    * diagnostics [ContainerGroupDiagnostics](#containergroupdiagnostics)
    * dnsConfig [DnsConfiguration](#dnsconfiguration)
    * imageRegistryCredentials `array`: The image registry credentials by which the container group is created from.
      * items [ImageRegistryCredential](#imageregistrycredential)
    * instanceView `object`: The instance view of the container group. Only valid in response.
      * events `array`: The events of this container group.
        * items [Event](#event)
      * state `string`: The state of the container group. Only valid in response.
    * ipAddress [IpAddress](#ipaddress)
    * networkProfile [ContainerGroupNetworkProfile](#containergroupnetworkprofile)
    * osType **required** `string` (values: Windows, Linux): The operating system type required by the containers in the container group.
    * provisioningState `string`: The provisioning state of the container group. This only appears in the response.
    * restartPolicy `string` (values: Always, OnFailure, Never): Restart policy for all containers within the container group. 
    * volumes `array`: The list of volumes that can be mounted by containers in this container group.
      * items [Volume](#volume)

### ContainerGroupDiagnostics
* ContainerGroupDiagnostics `object`: Container group diagnostic information.
  * logAnalytics [LogAnalytics](#loganalytics)

### ContainerGroupIdentity
* ContainerGroupIdentity `object`: Identity for the container group.
  * principalId `string`: The principal id of the container group identity. This property will only be provided for a system assigned identity.
  * tenantId `string`: The tenant id associated with the container group. This property will only be provided for a system assigned identity.
  * type `string` (values: SystemAssigned, UserAssigned, SystemAssigned, UserAssigned, None): The type of identity used for the container group. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the container group.
  * userAssignedIdentities `object`: The list of user identities associated with the container group. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

### ContainerGroupListResult
* ContainerGroupListResult `object`: The container group list response that contains the container group properties.
  * nextLink `string`: The URI to fetch the next page of container groups.
  * value `array`: The list of container groups.
    * items [ContainerGroup](#containergroup)

### ContainerGroupNetworkProfile
* ContainerGroupNetworkProfile `object`: Container group network profile information.
  * id **required** `string`: The identifier for a network profile.

### ContainerHttpGet
* ContainerHttpGet `object`: The container Http Get settings, for liveness or readiness probe
  * path `string`: The path to probe.
  * port **required** `integer`: The port number to probe.
  * scheme `string` (values: http, https): The scheme.

### ContainerPort
* ContainerPort `object`: The port exposed on the container instance.
  * port **required** `integer`: The port number exposed within the container group.
  * protocol `string` (values: TCP, UDP): The protocol associated with the port.

### ContainerProbe
* ContainerProbe `object`: The container probe, for liveness or readiness
  * exec [ContainerExec](#containerexec)
  * failureThreshold `integer`: The failure threshold.
  * httpGet [ContainerHttpGet](#containerhttpget)
  * initialDelaySeconds `integer`: The initial delay seconds.
  * periodSeconds `integer`: The period seconds.
  * successThreshold `integer`: The success threshold.
  * timeoutSeconds `integer`: The timeout seconds.

### ContainerProperties
* ContainerProperties `object`: The container instance properties.
  * command `array`: The commands to execute within the container instance in exec form.
    * items `string`
  * environmentVariables `array`: The environment variables to set in the container instance.
    * items [EnvironmentVariable](#environmentvariable)
  * image **required** `string`: The name of the image used to create the container instance.
  * instanceView `object`: The instance view of the container instance. Only valid in response.
    * currentState [ContainerState](#containerstate)
    * events `array`: The events of the container instance.
      * items [Event](#event)
    * previousState [ContainerState](#containerstate)
    * restartCount `integer`: The number of times that the container instance has been restarted.
  * livenessProbe [ContainerProbe](#containerprobe)
  * ports `array`: The exposed ports on the container instance.
    * items [ContainerPort](#containerport)
  * readinessProbe [ContainerProbe](#containerprobe)
  * resources **required** [ResourceRequirements](#resourcerequirements)
  * volumeMounts `array`: The volume mounts available to the container instance.
    * items [VolumeMount](#volumemount)

### ContainerState
* ContainerState `object`: The container instance state.
  * detailStatus `string`: The human-readable status of the container instance state.
  * exitCode `integer`: The container instance exit codes correspond to those from the `docker run` command.
  * finishTime `string`: The date-time when the container instance state finished.
  * startTime `string`: The date-time when the container instance state started.
  * state `string`: The state of the container instance.

### DnsConfiguration
* DnsConfiguration `object`: DNS configuration for the container group.
  * nameServers **required** `array`: The DNS servers for the container group.
    * items `string`
  * options `string`: The DNS options for the container group.
  * searchDomains `string`: The DNS search domains for hostname lookup in the container group.

### EmptyDirVolume
* EmptyDirVolume `object`: The empty directory volume.

### EnvironmentVariable
* EnvironmentVariable `object`: The environment variable to set within the container instance.
  * name **required** `string`: The name of the environment variable.
  * secureValue `string`: The value of the secure environment variable.
  * value `string`: The value of the environment variable.

### Event
* Event `object`: A container group or container instance event.
  * count `integer`: The count of the event.
  * firstTimestamp `string`: The date-time of the earliest logged event.
  * lastTimestamp `string`: The date-time of the latest logged event.
  * message `string`: The event message.
  * name `string`: The event name.
  * type `string`: The event type.

### GitRepoVolume
* GitRepoVolume `object`: Represents a volume that is populated with the contents of a git repository
  * directory `string`: Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
  * repository **required** `string`: Repository URL
  * revision `string`: Commit hash for the specified revision.

### GpuResource
* GpuResource `object`: The GPU resource.
  * count **required** `integer`: The count of the GPU resource.
  * sku **required** `string` (values: K80, P100, V100): The SKU of the GPU resource.

### ImageRegistryCredential
* ImageRegistryCredential `object`: Image registry credential.
  * password `string`: The password for the private registry.
  * server **required** `string`: The Docker image registry server without a protocol such as "http" and "https".
  * username **required** `string`: The username for the private registry.

### IpAddress
* IpAddress `object`: IP address for the container group.
  * dnsNameLabel `string`: The Dns name label for the IP.
  * fqdn `string`: The FQDN for the IP.
  * ip `string`: The IP exposed to the public internet.
  * ports **required** `array`: The list of ports exposed on the container group.
    * items [Port](#port)
  * type **required** `string` (values: Public, Private): Specifies if the IP is exposed to the public internet or private VNET.

### LogAnalytics
* LogAnalytics `object`: Container group log analytics information.
  * logType `string` (values: ContainerInsights, ContainerInstanceLogs): The log type to be used.
  * metadata `object`: Metadata for log analytics.
  * workspaceId **required** `string`: The workspace id for log analytics
  * workspaceKey **required** `string`: The workspace key for log analytics

### Logs
* Logs `object`: The logs.
  * content `string`: The content of the log.

### Operation
* Operation `object`: An operation for Azure Container Instance service.
  * display **required** `object`: The display information of the operation.
    * description `string`: The description of the operation.
    * operation `string`: The friendly name of the operation.
    * provider `string`: The name of the provider of the operation.
    * resource `string`: The name of the resource type of the operation.
  * name **required** `string`: The name of the operation.
  * origin `string` (values: User, System): The intended executor of the operation.
  * properties `object`: The additional properties.

### OperationListResult
* OperationListResult `object`: The operation list response that contains all operations for Azure Container Instance service.
  * nextLink `string`: The URI to fetch the next page of operations.
  * value `array`: The list of operations.
    * items [Operation](#operation)

### Port
* Port `object`: The port exposed on the container group.
  * port **required** `integer`: The port number.
  * protocol `string` (values: TCP, UDP): The protocol associated with the port.

### Resource
* Resource `object`: The Resource model definition.
  * id `string`: The resource id.
  * location `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### ResourceLimits
* ResourceLimits `object`: The resource limits.
  * cpu `number`: The CPU limit of this container instance.
  * gpu [GpuResource](#gpuresource)
  * memoryInGB `number`: The memory limit in GB of this container instance.

### ResourceRequests
* ResourceRequests `object`: The resource requests.
  * cpu **required** `number`: The CPU request of this container instance.
  * gpu [GpuResource](#gpuresource)
  * memoryInGB **required** `number`: The memory request in GB of this container instance.

### ResourceRequirements
* ResourceRequirements `object`: The resource requirements.
  * limits [ResourceLimits](#resourcelimits)
  * requests **required** [ResourceRequests](#resourcerequests)

### SecretVolume
* SecretVolume `object`: The secret volume.

### Usage
* Usage `object`: A single usage result
  * currentValue `integer`: The current usage of the resource
  * limit `integer`: The maximum permitted usage of the resource.
  * name `object`: The name object of the resource
    * localizedValue `string`: The localized name of the resource
    * value `string`: The name of the resource
  * unit `string`: Unit of the usage result

### UsageListResult
* UsageListResult `object`: The response containing the usage data
  * value `array`
    * items [Usage](#usage)

### Volume
* Volume `object`: The properties of the volume.
  * azureFile [AzureFileVolume](#azurefilevolume)
  * emptyDir [EmptyDirVolume](#emptydirvolume)
  * gitRepo [GitRepoVolume](#gitrepovolume)
  * name **required** `string`: The name of the volume.
  * secret [SecretVolume](#secretvolume)

### VolumeMount
* VolumeMount `object`: The properties of the volume mount.
  * mountPath **required** `string`: The path within the container where the volume should be mounted. Must not contain colon (:).
  * name **required** `string`: The name of the volume mount.
  * readOnly `boolean`: The flag indicating whether the volume mount is read-only.

### cachedImages
* cachedImages `object`: The cached image and OS type.
  * id `string`: The resource Id of the cached image.
  * image **required** `string`: The cached image name.
  * osType **required** `string`: The OS type of the cached image.


