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

azure_containerinstance_containerinstance.Operations_List({
  "api-version": ""
}).then(data => {
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

### ContainerLogs_List
Get the logs for a specified container instance in a specified resource group and container group.


```js
azure_containerinstance_containerinstance.ContainerLogs_List({
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



## Definitions

### AzureFileVolume
* AzureFileVolume `object`: The properties of the Azure File volume. Azure File shares are mounted as volumes.
  * readOnly `boolean`: The flag indicating whether the Azure File shared mounted as a volume is read-only.
  * shareName **required** `string`: The name of the Azure File share to be mounted as a volume.
  * storageAccountKey `string`: The storage account access key used to access the Azure File share.
  * storageAccountName **required** `string`: The name of the storage account that contains the Azure File share.

### Container
* Container `object`: A container instance.
  * name **required** `string`: The user-provided name of the container instance.
  * properties **required** [ContainerProperties](#containerproperties)

### ContainerGroup
* ContainerGroup: A container group.
  * id `string`: The resource id.
  * location **required** `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.
  * properties **required** `object`
    * containers **required** `array`: The containers within the container group.
      * items [Container](#container)
    * imageRegistryCredentials `array`: The image registry credentials by which the container group is created from.
      * items [ImageRegistryCredential](#imageregistrycredential)
    * instanceView `object`: The instance view of the container group. Only valid in response.
      * events `array`: The events of this container group.
        * items [Event](#event)
      * state `string`: The state of the container group. Only valid in response.
    * ipAddress [IpAddress](#ipaddress)
    * osType **required** `string` (values: Windows, Linux): The operating system type required by the containers in the container group.
    * provisioningState `string`: The provisioning state of the container group. This only appears in the response.
    * restartPolicy `string` (values: Always, OnFailure, Never): Restart policy for all containers within the container group. 
    * volumes `array`: The list of volumes that can be mounted by containers in this container group.
      * items [Volume](#volume)

### ContainerGroupListResult
* ContainerGroupListResult `object`: The container group list response that contains the container group properties.
  * nextLink `string`: The URI to fetch the next page of container groups.
  * value `array`: The list of container groups.
    * items [ContainerGroup](#containergroup)

### ContainerPort
* ContainerPort `object`: The port exposed on the container instance.
  * port **required** `integer`: The port number exposed within the container group.
  * protocol `string` (values: TCP, UDP): The protocol associated with the port.

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
  * ports `array`: The exposed ports on the container instance.
    * items [ContainerPort](#containerport)
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

### EmptyDirVolume
* EmptyDirVolume `object`: The empty directory volume.

### EnvironmentVariable
* EnvironmentVariable `object`: The environment variable to set within the container instance.
  * name **required** `string`: The name of the environment variable.
  * value **required** `string`: The value of the environment variable.

### Event
* Event `object`: A container group or container instance event.
  * count `integer`: The count of the event.
  * firstTimestamp `string`: The date-time of the earliest logged event.
  * lastTimestamp `string`: The date-time of the latest logged event.
  * message `string`: The event message.
  * name `string`: The event name.
  * type `string`: The event type.

### ImageRegistryCredential
* ImageRegistryCredential `object`: Image registry credential.
  * password `string`: The password for the private registry.
  * server **required** `string`: The Docker image registry server without a protocol such as "http" and "https".
  * username **required** `string`: The username for the private registry.

### IpAddress
* IpAddress `object`: IP address for the container group.
  * ip `string`: The IP exposed to the public internet.
  * ports **required** `array`: The list of ports exposed on the container group.
    * items [Port](#port)
  * type **required** `string` (values: Public): Specifies if the IP is exposed to the public internet.

### Logs
* Logs `object`: The logs.
  * content `string`: The content of the log.

### Operation
* Operation `object`: An operation for Azure Container Instance service.
  * display `object`: The display information of the operation.
    * description `string`: The description of the operation.
    * operation `string`: The friendly name of the operation.
    * provider `string`: The name of the provider of the operation.
    * resource `string`: The name of the resource type of the operation.
  * name `string`: The name of the operation.
  * origin `string` (values: User, System): The intended executor of the operation.

### OperationListResult
* OperationListResult `object`: The operation list response that contains all operations for Azure Container Instance service.
  * value `array`: The list of operations.
    * items [Operation](#operation)

### Port
* Port `object`: The port exposed on the container group.
  * port **required** `integer`: The port number.
  * protocol `string` (values: TCP, UDP): The protocol associated with the port.

### Resource
* Resource `object`: The Resource model definition.
  * id `string`: The resource id.
  * location **required** `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### ResourceLimits
* ResourceLimits `object`: The resource limits.
  * cpu `number`: The CPU limit of this container instance.
  * memoryInGB `number`: The memory limit in GB of this container instance.

### ResourceRequests
* ResourceRequests `object`: The resource requests.
  * cpu **required** `number`: The CPU request of this container instance.
  * memoryInGB **required** `number`: The memory request in GB of this container instance.

### ResourceRequirements
* ResourceRequirements `object`: The resource requirements.
  * limits [ResourceLimits](#resourcelimits)
  * requests **required** [ResourceRequests](#resourcerequests)

### Volume
* Volume `object`: The properties of the volume.
  * azureFile [AzureFileVolume](#azurefilevolume)
  * emptyDir [EmptyDirVolume](#emptydirvolume)
  * name **required** `string`: The name of the volume.

### VolumeMount
* VolumeMount `object`: The properties of the volume mount.
  * mountPath **required** `string`: The path within the container where the volume should be mounted. Must not contain colon (:).
  * name **required** `string`: The name of the volume mount.
  * readOnly `boolean`: The flag indicating whether the volume mount is read-only.


