# @datafire/azure_sqlvirtualmachine_sqlvm

Client library for SqlVirtualMachineManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sqlvirtualmachine_sqlvm
```
```js
let azure_sqlvirtualmachine_sqlvm = require('@datafire/azure_sqlvirtualmachine_sqlvm').create({
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

The SQL virtual machine management API provides a RESTful set of web APIs that interact with Azure Compute, Network & Storage services to manage your SQL Server virtual machine. The API enables users to create, delete and retrieve a SQL virtual machine, SQL virtual machine group or availability group listener.

## Actions

### Operations_List
Lists all of the available SQL Rest API operations.


```js
azure_sqlvirtualmachine_sqlvm.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [OperationListResult](#operationlistresult)

### SqlVirtualMachineGroups_List
Gets all SQL virtual machine groups in a subscription.


```js
azure_sqlvirtualmachine_sqlvm.SqlVirtualMachineGroups_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [SqlVirtualMachineGroupListResult](#sqlvirtualmachinegrouplistresult)

### SqlVirtualMachines_List
Gets all SQL virtual machines in a subscription.


```js
azure_sqlvirtualmachine_sqlvm.SqlVirtualMachines_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [SqlVirtualMachineListResult](#sqlvirtualmachinelistresult)

### SqlVirtualMachineGroups_ListByResourceGroup
Gets all SQL virtual machine groups in a resource group.


```js
azure_sqlvirtualmachine_sqlvm.SqlVirtualMachineGroups_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [SqlVirtualMachineGroupListResult](#sqlvirtualmachinegrouplistresult)

### SqlVirtualMachineGroups_Delete
Deletes a SQL virtual machine group.


```js
azure_sqlvirtualmachine_sqlvm.SqlVirtualMachineGroups_Delete({
  "resourceGroupName": "",
  "sqlVirtualMachineGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * sqlVirtualMachineGroupName **required** `string`: Name of the SQL virtual machine group.
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
*Output schema unknown*

### SqlVirtualMachineGroups_Get
Gets a SQL virtual machine group.


```js
azure_sqlvirtualmachine_sqlvm.SqlVirtualMachineGroups_Get({
  "resourceGroupName": "",
  "sqlVirtualMachineGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * sqlVirtualMachineGroupName **required** `string`: Name of the SQL virtual machine group.
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [SqlVirtualMachineGroup](#sqlvirtualmachinegroup)

### SqlVirtualMachineGroups_Update
Updates SQL virtual machine group tags.


```js
azure_sqlvirtualmachine_sqlvm.SqlVirtualMachineGroups_Update({
  "resourceGroupName": "",
  "sqlVirtualMachineGroupName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * sqlVirtualMachineGroupName **required** `string`: Name of the SQL virtual machine group.
  * parameters **required** [SqlVirtualMachineGroupUpdate](#sqlvirtualmachinegroupupdate)
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [SqlVirtualMachineGroup](#sqlvirtualmachinegroup)

### SqlVirtualMachineGroups_CreateOrUpdate
Creates or updates a SQL virtual machine group.


```js
azure_sqlvirtualmachine_sqlvm.SqlVirtualMachineGroups_CreateOrUpdate({
  "resourceGroupName": "",
  "sqlVirtualMachineGroupName": "",
  "parameters": {
    "location": ""
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * sqlVirtualMachineGroupName **required** `string`: Name of the SQL virtual machine group.
  * parameters **required** [SqlVirtualMachineGroup](#sqlvirtualmachinegroup)
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [SqlVirtualMachineGroup](#sqlvirtualmachinegroup)

### AvailabilityGroupListeners_ListByGroup
Lists all availability group listeners in a SQL virtual machine group.


```js
azure_sqlvirtualmachine_sqlvm.AvailabilityGroupListeners_ListByGroup({
  "resourceGroupName": "",
  "sqlVirtualMachineGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * sqlVirtualMachineGroupName **required** `string`: Name of the SQL virtual machine group.
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [AvailabilityGroupListenerListResult](#availabilitygrouplistenerlistresult)

### AvailabilityGroupListeners_Delete
Deletes an availability group listener.


```js
azure_sqlvirtualmachine_sqlvm.AvailabilityGroupListeners_Delete({
  "resourceGroupName": "",
  "sqlVirtualMachineGroupName": "",
  "availabilityGroupListenerName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * sqlVirtualMachineGroupName **required** `string`: Name of the SQL virtual machine group.
  * availabilityGroupListenerName **required** `string`: Name of the availability group listener.
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
*Output schema unknown*

### AvailabilityGroupListeners_Get
Gets an availability group listener.


```js
azure_sqlvirtualmachine_sqlvm.AvailabilityGroupListeners_Get({
  "resourceGroupName": "",
  "sqlVirtualMachineGroupName": "",
  "availabilityGroupListenerName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * sqlVirtualMachineGroupName **required** `string`: Name of the SQL virtual machine group.
  * availabilityGroupListenerName **required** `string`: Name of the availability group listener.
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [AvailabilityGroupListener](#availabilitygrouplistener)

### AvailabilityGroupListeners_CreateOrUpdate
Creates or updates an availability group listener.


```js
azure_sqlvirtualmachine_sqlvm.AvailabilityGroupListeners_CreateOrUpdate({
  "resourceGroupName": "",
  "sqlVirtualMachineGroupName": "",
  "availabilityGroupListenerName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * sqlVirtualMachineGroupName **required** `string`: Name of the SQL virtual machine group.
  * availabilityGroupListenerName **required** `string`: Name of the availability group listener.
  * parameters **required** [AvailabilityGroupListener](#availabilitygrouplistener)
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [AvailabilityGroupListener](#availabilitygrouplistener)

### SqlVirtualMachines_ListBySqlVmGroup
Gets the list of sql virtual machines in a SQL virtual machine group.


```js
azure_sqlvirtualmachine_sqlvm.SqlVirtualMachines_ListBySqlVmGroup({
  "resourceGroupName": "",
  "sqlVirtualMachineGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * sqlVirtualMachineGroupName **required** `string`: Name of the SQL virtual machine group.
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [SqlVirtualMachineListResult](#sqlvirtualmachinelistresult)

### SqlVirtualMachines_ListByResourceGroup
Gets all SQL virtual machines in a resource group.


```js
azure_sqlvirtualmachine_sqlvm.SqlVirtualMachines_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [SqlVirtualMachineListResult](#sqlvirtualmachinelistresult)

### SqlVirtualMachines_Delete
Deletes a SQL virtual machine.


```js
azure_sqlvirtualmachine_sqlvm.SqlVirtualMachines_Delete({
  "resourceGroupName": "",
  "sqlVirtualMachineName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * sqlVirtualMachineName **required** `string`: Name of the SQL virtual machine.
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
*Output schema unknown*

### SqlVirtualMachines_Get
Gets a SQL virtual machine.


```js
azure_sqlvirtualmachine_sqlvm.SqlVirtualMachines_Get({
  "resourceGroupName": "",
  "sqlVirtualMachineName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * sqlVirtualMachineName **required** `string`: Name of the SQL virtual machine.
  * $expand `string`: The child resources to include in the response.
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [SqlVirtualMachine](#sqlvirtualmachine)

### SqlVirtualMachines_Update
Updates a SQL virtual machine.


```js
azure_sqlvirtualmachine_sqlvm.SqlVirtualMachines_Update({
  "resourceGroupName": "",
  "sqlVirtualMachineName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * sqlVirtualMachineName **required** `string`: Name of the SQL virtual machine.
  * parameters **required** [SqlVirtualMachineUpdate](#sqlvirtualmachineupdate)
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [SqlVirtualMachine](#sqlvirtualmachine)

### SqlVirtualMachines_CreateOrUpdate
Creates or updates a SQL virtual machine.


```js
azure_sqlvirtualmachine_sqlvm.SqlVirtualMachines_CreateOrUpdate({
  "resourceGroupName": "",
  "sqlVirtualMachineName": "",
  "parameters": {
    "location": ""
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * sqlVirtualMachineName **required** `string`: Name of the SQL virtual machine.
  * parameters **required** [SqlVirtualMachine](#sqlvirtualmachine)
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [SqlVirtualMachine](#sqlvirtualmachine)



## Definitions

### AdditionalFeaturesServerConfigurations
* AdditionalFeaturesServerConfigurations `object`: Additional SQL Server feature settings.
  * isRServicesEnabled `boolean`: Enable or disable R services (SQL 2016 onwards).

### AutoBackupSettings
* AutoBackupSettings `object`: Configure backups for databases in your SQL virtual machine.
  * backupScheduleType `string` (values: Manual, Automated): Backup schedule type.
  * backupSystemDbs `boolean`: Include or exclude system databases from auto backup.
  * enable `boolean`: Enable or disable autobackup on SQL virtual machine.
  * enableEncryption `boolean`: Enable or disable encryption for backup on SQL virtual machine.
  * fullBackupFrequency `string` (values: Daily, Weekly): Frequency of full backups. In both cases, full backups begin during the next scheduled time window.
  * fullBackupStartTime `integer`: Start time of a given day during which full backups can take place. 0-23 hours.
  * fullBackupWindowHours `integer`: Duration of the time window of a given day during which full backups can take place. 1-23 hours.
  * logBackupFrequency `integer`: Frequency of log backups. 5-60 minutes.
  * password `string`: Password for encryption on backup.
  * retentionPeriod `integer`: Retention period of backup: 1-30 days.
  * storageAccessKey `string`: Storage account key where backup will be taken to.
  * storageAccountUrl `string`: Storage account url where backup will be taken to.

### AutoPatchingSettings
* AutoPatchingSettings `object`: Set a patching window during which Windows and SQL patches will be applied.
  * dayOfWeek `string` (values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday): Day of week to apply the patch on.
  * enable `boolean`: Enable or disable autopatching on SQL virtual machine.
  * maintenanceWindowDuration `integer`: Duration of patching.
  * maintenanceWindowStartingHour `integer`: Hour of the day when patching is initiated. Local VM time.

### AvailabilityGroupListener
* AvailabilityGroupListener `object`: A SQL Server availability group listener.
  * properties [AvailabilityGroupListenerProperties](#availabilitygrouplistenerproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### AvailabilityGroupListenerListResult
* AvailabilityGroupListenerListResult `object`: A list of availability group listeners.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [AvailabilityGroupListener](#availabilitygrouplistener)

### AvailabilityGroupListenerProperties
* AvailabilityGroupListenerProperties `object`: The properties of an availability group listener.
  * availabilityGroupName `string`: Name of the availability group.
  * createDefaultAvailabilityGroupIfNotExist `boolean`: Create a default availability group if it does not exist.
  * loadBalancerConfigurations `array`: List of load balancer configurations for an availability group listener.
    * items [LoadBalancerConfiguration](#loadbalancerconfiguration)
  * port `integer`: Listener port.
  * provisioningState `string`: Provisioning state to track the async operation status.

### KeyVaultCredentialSettings
* KeyVaultCredentialSettings `object`: Configure your SQL virtual machine to be able to connect to the Azure Key Vault service.
  * azureKeyVaultUrl `string`: Azure Key Vault url.
  * credentialName `string`: Credential name.
  * enable `boolean`: Enable or disable key vault credential setting.
  * servicePrincipalName `string`: Service principal name to access key vault.
  * servicePrincipalSecret `string`: Service principal name secret to access key vault.

### LoadBalancerConfiguration
* LoadBalancerConfiguration `object`: A load balancer configuration for an availability group listener.
  * loadBalancerResourceId `string`: Resource id of the load balancer.
  * privateIpAddress [PrivateIPAddress](#privateipaddress)
  * probePort `integer`: Probe port.
  * publicIpAddressResourceId `string`: Resource id of the public IP.
  * sqlVirtualMachineInstances `array`: List of the SQL virtual machine instance resource id's that are enrolled into the availability group listener.
    * items `string`

### Operation
* Operation `object`: SQL REST API operation definition.
  * display [OperationDisplay](#operationdisplay)
  * name `string`: The name of the operation being performed on this particular object.
  * origin `string` (values: user, system): The intended executor of the operation.
  * properties `object`: Additional descriptions for the operation.

### OperationDisplay
* OperationDisplay `object`: Display metadata associated with the operation.
  * description `string`: The localized friendly description for the operation.
  * operation `string`: The localized friendly name for the operation.
  * provider `string`: The localized friendly form of the resource provider name.
  * resource `string`: The localized friendly form of the resource type related to this action/operation.

### OperationListResult
* OperationListResult `object`: Result of the request to list SQL operations.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [Operation](#operation)

### PrivateIPAddress
* PrivateIPAddress `object`: A private IP address bound to the availability group listener.
  * ipAddress `string`: Private IP address bound to the availability group listener.
  * subnetResourceId `string`: Subnet used to include private IP.

### ProxyResource
* ProxyResource `object`: ARM proxy resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Resource
* Resource `object`: ARM resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ResourceIdentity
* ResourceIdentity `object`: Azure Active Directory identity configuration for a resource.
  * principalId `string`: The Azure Active Directory principal id.
  * tenantId `string`: The Azure Active Directory tenant id.
  * type `string` (values: SystemAssigned): The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.

### SQLStorageSettings
* SQLStorageSettings `object`: Set disk storage settings for SQL Server.
  * defaultFilePath `string`: SQL Server default file path
  * luns `array`: Logical Unit Numbers for the disks.
    * items `integer`

### ServerConfigurationsManagementSettings
* ServerConfigurationsManagementSettings `object`: Set the connectivity, storage and workload settings.
  * additionalFeaturesServerConfigurations [AdditionalFeaturesServerConfigurations](#additionalfeaturesserverconfigurations)
  * sqlConnectivityUpdateSettings [SqlConnectivityUpdateSettings](#sqlconnectivityupdatesettings)
  * sqlStorageUpdateSettings [SqlStorageUpdateSettings](#sqlstorageupdatesettings)
  * sqlWorkloadTypeUpdateSettings [SqlWorkloadTypeUpdateSettings](#sqlworkloadtypeupdatesettings)

### SqlConnectivityUpdateSettings
* SqlConnectivityUpdateSettings `object`: Set the access level and network port settings for SQL Server.
  * connectivityType `string` (values: LOCAL, PRIVATE, PUBLIC): SQL Server connectivity option.
  * port `integer`: SQL Server port.
  * sqlAuthUpdatePassword `string`: SQL Server sysadmin login password.
  * sqlAuthUpdateUserName `string`: SQL Server sysadmin login to create.

### SqlStorageUpdateSettings
* SqlStorageUpdateSettings `object`: Set disk storage settings for SQL Server.
  * diskConfigurationType `string` (values: NEW, EXTEND, ADD): Disk configuration to apply to SQL Server.
  * diskCount `integer`: Virtual machine disk count.
  * startingDeviceId `integer`: Device id of the first disk to be updated.

### SqlVirtualMachine
* SqlVirtualMachine `object`: A SQL virtual machine.
  * identity [ResourceIdentity](#resourceidentity)
  * properties [SqlVirtualMachineProperties](#sqlvirtualmachineproperties)
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### SqlVirtualMachineGroup
* SqlVirtualMachineGroup `object`: A SQL virtual machine group.
  * properties [SqlVirtualMachineGroupProperties](#sqlvirtualmachinegroupproperties)
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### SqlVirtualMachineGroupListResult
* SqlVirtualMachineGroupListResult `object`: A list of SQL virtual machine groups.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [SqlVirtualMachineGroup](#sqlvirtualmachinegroup)

### SqlVirtualMachineGroupProperties
* SqlVirtualMachineGroupProperties `object`: The properties of a SQL virtual machine group.
  * clusterConfiguration `string` (values: Domainful): Cluster type.
  * clusterManagerType `string` (values: WSFC): Type of cluster manager: Windows Server Failover Cluster (WSFC), implied by the scale type of the group and the OS type.
  * provisioningState `string`: Provisioning state to track the async operation status.
  * scaleType `string` (values: HA): Scale type.
  * sqlImageOffer `string`: SQL image offer. Examples may include SQL2016-WS2016, SQL2017-WS2016.
  * sqlImageSku `string` (values: Developer, Enterprise): SQL image sku.
  * wsfcDomainProfile [WsfcDomainProfile](#wsfcdomainprofile)

### SqlVirtualMachineGroupUpdate
* SqlVirtualMachineGroupUpdate `object`: An update to a SQL virtual machine group.
  * tags `object`: Resource tags.

### SqlVirtualMachineListResult
* SqlVirtualMachineListResult `object`: A list of SQL virtual machines.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [SqlVirtualMachine](#sqlvirtualmachine)

### SqlVirtualMachineProperties
* SqlVirtualMachineProperties `object`: The SQL virtual machine properties.
  * autoBackupSettings [AutoBackupSettings](#autobackupsettings)
  * autoPatchingSettings [AutoPatchingSettings](#autopatchingsettings)
  * keyVaultCredentialSettings [KeyVaultCredentialSettings](#keyvaultcredentialsettings)
  * provisioningState `string`: Provisioning state to track the async operation status.
  * serverConfigurationsManagementSettings [ServerConfigurationsManagementSettings](#serverconfigurationsmanagementsettings)
  * sqlImageOffer `string`: SQL image offer. Examples include SQL2016-WS2016, SQL2017-WS2016.
  * sqlImageSku `string` (values: Developer, Express, Standard, Enterprise, Web): SQL Server edition type.
  * sqlManagement `string` (values: Full, LightWeight, NoAgent): SQL Server Management type.
  * sqlServerLicenseType `string` (values: PAYG, AHUB, DR): SQL Server license type.
  * sqlVirtualMachineGroupResourceId `string`: ARM resource id of the SQL virtual machine group this SQL virtual machine is or will be part of.
  * storageConfigurationSettings [StorageConfigurationSettings](#storageconfigurationsettings)
  * virtualMachineResourceId `string`: ARM Resource id of underlying virtual machine created from SQL marketplace image.
  * wsfcDomainCredentials [WsfcDomainCredentials](#wsfcdomaincredentials)

### SqlVirtualMachineUpdate
* SqlVirtualMachineUpdate `object`: An update to a SQL virtual machine.
  * tags `object`: Resource tags.

### SqlWorkloadTypeUpdateSettings
* SqlWorkloadTypeUpdateSettings `object`: Set workload type to optimize storage for SQL Server.
  * sqlWorkloadType `string` (values: GENERAL, OLTP, DW): SQL Server workload type.

### StorageConfigurationSettings
* StorageConfigurationSettings `object`: Storage Configurations for SQL Data, Log and TempDb.
  * diskConfigurationType `string` (values: NEW, EXTEND, ADD): Disk configuration to apply to SQL Server.
  * sqlDataSettings [SQLStorageSettings](#sqlstoragesettings)
  * sqlLogSettings [SQLStorageSettings](#sqlstoragesettings)
  * sqlTempDbSettings [SQLStorageSettings](#sqlstoragesettings)
  * storageWorkloadType `string` (values: GENERAL, OLTP, DW): Storage workload type.

### TrackedResource
* TrackedResource `object`: ARM tracked top level resource.
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### WsfcDomainCredentials
* WsfcDomainCredentials `object`: Domain credentials for setting up Windows Server Failover Cluster for SQL availability group.
  * clusterBootstrapAccountPassword `string`: Cluster bootstrap account password.
  * clusterOperatorAccountPassword `string`: Cluster operator account password.
  * sqlServiceAccountPassword `string`: SQL service account password.

### WsfcDomainProfile
* WsfcDomainProfile `object`: Active Directory account details to operate Windows Server Failover Cluster.
  * clusterBootstrapAccount `string`: Account name used for creating cluster (at minimum needs permissions to 'Create Computer Objects' in domain).
  * clusterOperatorAccount `string`: Account name used for operating cluster i.e. will be part of administrators group on all the participating virtual machines in the cluster.
  * domainFqdn `string`: Fully qualified name of the domain.
  * fileShareWitnessPath `string`: Optional path for fileshare witness.
  * ouPath `string`: Organizational Unit path in which the nodes and cluster will be present.
  * sqlServiceAccount `string`: Account name under which SQL service will run on all participating SQL virtual machines in the cluster.
  * storageAccountPrimaryKey `string`: Primary key of the witness storage account.
  * storageAccountUrl `string`: Fully qualified ARM resource id of the witness storage account.


