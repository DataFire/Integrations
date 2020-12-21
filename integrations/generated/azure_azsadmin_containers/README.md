# @datafire/azure_azsadmin_containers

Client library for StorageManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_containers
```
```js
let azure_azsadmin_containers = require('@datafire/azure_azsadmin_containers').create({
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

The Admin Storage Management Client.

## Actions

### Containers_MigrationStatus
Returns the status of a container migration job.


```js
azure_azsadmin_containers.Containers_MigrationStatus({
  "subscriptionId": "",
  "resourceGroupName": "",
  "farmId": "",
  "operationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * resourceGroupName **required** `string`: Resource group name.
  * farmId **required** `string`: Farm Id.
  * operationId **required** `string`: Operation Id.
  * api-version **required** `string`: REST Api Version.

#### Output
* output [MigrationResult](#migrationresult)

### Containers_CancelMigration
Cancel a container migration job.


```js
azure_azsadmin_containers.Containers_CancelMigration({
  "subscriptionId": "",
  "resourceGroupName": "",
  "farmId": "",
  "operationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * resourceGroupName **required** `string`: Resource group name.
  * farmId **required** `string`: Farm Id.
  * operationId **required** `string`: Operation Id.
  * api-version **required** `string`: REST Api Version.

#### Output
* output [MigrationResult](#migrationresult)

### Containers_List
Returns the list of containers which can be migrated in the specified share.


```js
azure_azsadmin_containers.Containers_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "farmId": "",
  "shareName": "",
  "api-version": "",
  "Intent": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * resourceGroupName **required** `string`: Resource group name.
  * farmId **required** `string`: Farm Id.
  * shareName **required** `string`: Share name.
  * api-version **required** `string`: REST Api Version.
  * Intent **required** `string`: The container migration intent.
  * MaxCount `integer`: The maximum number of containers.
  * StartIndex `integer`: The starting index the resource provider uses.

#### Output
* output [ContainerList](#containerlist)

### Containers_ListDestinationShares
Returns a list of destination shares that the system considers as best candidates for migration.


```js
azure_azsadmin_containers.Containers_ListDestinationShares({
  "subscriptionId": "",
  "resourceGroupName": "",
  "farmId": "",
  "shareName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * resourceGroupName **required** `string`: Resource group name.
  * farmId **required** `string`: Farm Id.
  * shareName **required** `string`: Share name.
  * api-version **required** `string`: REST Api Version.

#### Output
* output `array`: List of storage shares.
  * items `object`: Storage share.
    * properties `object`: Storage share properties.
      * freeCapacity `integer`: The free space of the storage share in bytes.
      * healthStatus `string` (values: Unknown, Healthy, Warning, Critical): Current health status.
      * shareName `string`: The name of the storage share.
      * totalCapacity `integer`: The total capacity of the storage share in bytes.
      * uncPath `string`: The UNC path to the storage share.
      * usedCapacity `integer`: The used capacity of the storage share in bytes.
    * id `string`: Resource ID.
    * location `string`: Resource location.
    * name `string`: Resource Name.
    * tags `object`: Resource tags.
    * type `string`: Resource type.

### Containers_Migrate
Starts a container migration job to migrate containers to the specified destination share.


```js
azure_azsadmin_containers.Containers_Migrate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "farmId": "",
  "shareName": "",
  "api-version": "",
  "migrationParameters": {
    "storageAccountName": "",
    "containerName": "",
    "destinationShareUncPath": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * resourceGroupName **required** `string`: Resource group name.
  * farmId **required** `string`: Farm Id.
  * shareName **required** `string`: Share name.
  * api-version **required** `string`: REST Api Version.
  * migrationParameters **required** [MigrationParameters](#migrationparameters)

#### Output
* output [MigrationResult](#migrationresult)



## Definitions

### Container
* Container `object`: Container properties.
  * accountid `string`: The ID of the storage account.
  * accountname `string`: The name of storage account where the container locates.
  * containerState `string`: The current state of the container.
  * containerid `integer`: The container ID.
  * containername `string`: Container name.
  * sharename `string`: The name of the share where the container locates.
  * usedBytesInPrimaryVolume `integer`: The used space, in bytes, of the container in the primary volume.

### ContainerList
* ContainerList `array`: List of containers.
  * items [Container](#container)

### MigrationParameters
* MigrationParameters `object`: Parameters of container migration job.
  * containerName **required** `string`: The name of the container to be migrated.
  * destinationShareUncPath **required** `string`: The UNC path of the destination share for migration.
  * storageAccountName **required** `string`: The name of the storage account where the container locates.

### MigrationResult
* MigrationResult `object`: The result of the container migration.
  * containerName `string`: The name of the container to be migrated.
  * destinationShareName `string`: The name of the destination storage share.
  * failureReason `string`: The migration failure reason.
  * jobId `string`: The migration job ID.
  * migrationStatus [MigrationState](#migrationstate)
  * sourceShareName `string`: The name of the source storage share.
  * storageAccountName `string`: The storage account name.
  * subEntitiesCompleted `integer`: The number of entities which have been migrated.
  * subEntitiesFailed `integer`: The number of entities which failed in migration.

### MigrationState
* MigrationState `string` (values: Active, Paused, Deleted, Rollback, Complete, Canceled, Failed, All)


