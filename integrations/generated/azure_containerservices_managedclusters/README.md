# @datafire/azure_containerservices_managedclusters

Client library for ContainerServiceClient

## Installation and Usage
```bash
npm install --save @datafire/azure_containerservices_managedclusters
```
```js
let azure_containerservices_managedclusters = require('@datafire/azure_containerservices_managedclusters').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_containerservices_managedclusters.ManagedClusters_List({
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Container Service Client.

## Actions

### ManagedClusters_List
Gets a list of managed clusters in the specified subscription. The operation returns properties of each managed cluster.


```js
azure_containerservices_managedclusters.ManagedClusters_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ManagedClusterListResult](#managedclusterlistresult)

### ManagedClusters_ListByResourceGroup
Lists managed clusters in the specified subscription and resource group. The operation returns properties of each managed cluster.


```js
azure_containerservices_managedclusters.ManagedClusters_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.

#### Output
* output [ManagedClusterListResult](#managedclusterlistresult)

### ManagedClusters_Delete
Deletes the managed cluster with a specified resource group and name.


```js
azure_containerservices_managedclusters.ManagedClusters_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * resourceName **required** `string`: The name of the managed cluster resource.

#### Output
*Output schema unknown*

### ManagedClusters_Get
Gets the details of the managed cluster with a specified resource group and name.


```js
azure_containerservices_managedclusters.ManagedClusters_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * resourceName **required** `string`: The name of the managed cluster resource.

#### Output
* output [ManagedCluster](#managedcluster)

### ManagedClusters_CreateOrUpdate
Creates or updates a managed cluster with the specified configuration for agents and Kubernetes version.


```js
azure_containerservices_managedclusters.ManagedClusters_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * resourceName **required** `string`: The name of the managed cluster resource.
  * parameters **required** [ManagedCluster](#managedcluster)

#### Output
* output [ManagedCluster](#managedcluster)

### ManagedClusters_GetAccessProfiles
Use ManagedClusters_GetAccessProfile instead.


```js
azure_containerservices_managedclusters.ManagedClusters_GetAccessProfiles({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "roleName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * resourceName **required** `string`: The name of the managed cluster resource.
  * roleName **required** `string`: The name of the role for managed cluster accessProfile resource.

#### Output
* output [ManagedClusterAccessProfile](#managedclusteraccessprofile)

### ManagedClusters_GetAccessProfile
Gets the accessProfile for the specified role name of the managed cluster with a specified resource group and name.


```js
azure_containerservices_managedclusters.ManagedClusters_GetAccessProfile({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "roleName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * resourceName **required** `string`: The name of the managed cluster resource.
  * roleName **required** `string`: The name of the role for managed cluster accessProfile resource.

#### Output
* output [ManagedClusterAccessProfile](#managedclusteraccessprofile)

### ManagedClusters_GetUpgradeProfile
Gets the details of the upgrade profile for a managed cluster with a specified resource group and name.


```js
azure_containerservices_managedclusters.ManagedClusters_GetUpgradeProfile({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * resourceName **required** `string`: The name of the managed cluster resource.

#### Output
* output [ManagedClusterUpgradeProfile](#managedclusterupgradeprofile)



## Definitions

### AccessProfile
* AccessProfile `object`: Profile for enabling a user to access a managed cluster.
  * kubeConfig `string`: Base64-encoded Kubernetes configuration file.

### ContainerServiceAgentPoolProfile
* ContainerServiceAgentPoolProfile `object`: Profile for the container service agent pool.
  * count `integer`: Number of agents (VMs) to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. 
  * dnsPrefix `string`: DNS prefix to be used to create the FQDN for the agent pool.
  * fqdn `string`: FDQN for the agent pool.
  * name **required** `string`: Unique name of the agent pool profile in the context of the subscription and resource group.
  * osDiskSizeGB [ContainerServiceOSDisk](#containerserviceosdisk)
  * osType [OSType](#ostype)
  * ports `array`: Ports number array used to expose on this agent pool. The default opened ports are different based on your choice of orchestrator.
    * items `integer`
  * storageProfile [ContainerServiceStorageProfile](#containerservicestorageprofile)
  * vmSize **required** [ContainerServiceVMSize](#containerservicevmsize)
  * vnetSubnetID [ContainerServiceVnetSubnetID](#containerservicevnetsubnetid)

### ContainerServiceDiagnosticsProfile
* ContainerServiceDiagnosticsProfile `object`: Profile for diagnostics on the container service cluster.
  * vmDiagnostics **required** [ContainerServiceVMDiagnostics](#containerservicevmdiagnostics)

### ContainerServiceLinuxProfile
* ContainerServiceLinuxProfile `object`: Profile for Linux VMs in the container service cluster.
  * adminUsername **required** `string`: The administrator username to use for Linux VMs.
  * ssh **required** [ContainerServiceSshConfiguration](#containerservicesshconfiguration)

### ContainerServiceMasterProfile
* ContainerServiceMasterProfile `object`: Profile for the container service master.
  * count `integer` (values: 1, 3, 5): Number of masters (VMs) in the container service cluster. Allowed values are 1, 3, and 5. The default value is 1.
  * dnsPrefix **required** `string`: DNS prefix to be used to create the FQDN for the master pool.
  * firstConsecutiveStaticIP `string`: FirstConsecutiveStaticIP used to specify the first static ip of masters.
  * fqdn `string`: FDQN for the master pool.
  * osDiskSizeGB [ContainerServiceOSDisk](#containerserviceosdisk)
  * storageProfile [ContainerServiceStorageProfile](#containerservicestorageprofile)
  * vmSize **required** [ContainerServiceVMSize](#containerservicevmsize)
  * vnetSubnetID [ContainerServiceVnetSubnetID](#containerservicevnetsubnetid)

### ContainerServiceOSDisk
* ContainerServiceOSDisk `integer`: OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.

### ContainerServiceServicePrincipalProfile
* ContainerServiceServicePrincipalProfile `object`: Information about a service principal identity for the cluster to use for manipulating Azure APIs. Either secret or keyVaultSecretRef must be specified.
  * clientId **required** `string`: The ID for the service principal.
  * keyVaultSecretRef [KeyVaultSecretRef](#keyvaultsecretref)
  * secret `string`: The secret password associated with the service principal in plain text.

### ContainerServiceSshConfiguration
* ContainerServiceSshConfiguration `object`: SSH configuration for Linux-based VMs running on Azure.
  * publicKeys **required** `array`: The list of SSH public keys used to authenticate with Linux-based VMs. Only expect one key specified.
    * items [ContainerServiceSshPublicKey](#containerservicesshpublickey)

### ContainerServiceSshPublicKey
* ContainerServiceSshPublicKey `object`: Contains information about SSH certificate public key data.
  * keyData **required** `string`: Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.

### ContainerServiceStorageProfile
* ContainerServiceStorageProfile `string` (values: StorageAccount, ManagedDisks): Storage profile specifies what kind of storage used. Choose from StorageAccount and ManagedDisks. Leave it empty, we will choose for you based on the orchestrator choice.

### ContainerServiceVMDiagnostics
* ContainerServiceVMDiagnostics `object`: Profile for diagnostics on the container service VMs.
  * enabled **required** `boolean`: Whether the VM diagnostic agent is provisioned on the VM.
  * storageUri `string`: The URI of the storage account where diagnostics are stored.

### ContainerServiceVMSize
* ContainerServiceVMSize `string` (values: Standard_A1, Standard_A10, Standard_A11, Standard_A1_v2, Standard_A2, Standard_A2_v2, Standard_A2m_v2, Standard_A3, Standard_A4, Standard_A4_v2, Standard_A4m_v2, Standard_A5, Standard_A6, Standard_A7, Standard_A8, Standard_A8_v2, Standard_A8m_v2, Standard_A9, Standard_B2ms, Standard_B2s, Standard_B4ms, Standard_B8ms, Standard_D1, Standard_D11, Standard_D11_v2, Standard_D11_v2_Promo, Standard_D12, Standard_D12_v2, Standard_D12_v2_Promo, Standard_D13, Standard_D13_v2, Standard_D13_v2_Promo, Standard_D14, Standard_D14_v2, Standard_D14_v2_Promo, Standard_D15_v2, Standard_D16_v3, Standard_D16s_v3, Standard_D1_v2, Standard_D2, Standard_D2_v2, Standard_D2_v2_Promo, Standard_D2_v3, Standard_D2s_v3, Standard_D3, Standard_D32_v3, Standard_D32s_v3, Standard_D3_v2, Standard_D3_v2_Promo, Standard_D4, Standard_D4_v2, Standard_D4_v2_Promo, Standard_D4_v3, Standard_D4s_v3, Standard_D5_v2, Standard_D5_v2_Promo, Standard_D64_v3, Standard_D64s_v3, Standard_D8_v3, Standard_D8s_v3, Standard_DS1, Standard_DS11, Standard_DS11_v2, Standard_DS11_v2_Promo, Standard_DS12, Standard_DS12_v2, Standard_DS12_v2_Promo, Standard_DS13, Standard_DS13-2_v2, Standard_DS13-4_v2, Standard_DS13_v2, Standard_DS13_v2_Promo, Standard_DS14, Standard_DS14-4_v2, Standard_DS14-8_v2, Standard_DS14_v2, Standard_DS14_v2_Promo, Standard_DS15_v2, Standard_DS1_v2, Standard_DS2, Standard_DS2_v2, Standard_DS2_v2_Promo, Standard_DS3, Standard_DS3_v2, Standard_DS3_v2_Promo, Standard_DS4, Standard_DS4_v2, Standard_DS4_v2_Promo, Standard_DS5_v2, Standard_DS5_v2_Promo, Standard_E16_v3, Standard_E16s_v3, Standard_E2_v3, Standard_E2s_v3, Standard_E32-16s_v3, Standard_E32-8s_v3, Standard_E32_v3, Standard_E32s_v3, Standard_E4_v3, Standard_E4s_v3, Standard_E64-16s_v3, Standard_E64-32s_v3, Standard_E64_v3, Standard_E64s_v3, Standard_E8_v3, Standard_E8s_v3, Standard_F1, Standard_F16, Standard_F16s, Standard_F16s_v2, Standard_F1s, Standard_F2, Standard_F2s, Standard_F2s_v2, Standard_F32s_v2, Standard_F4, Standard_F4s, Standard_F4s_v2, Standard_F64s_v2, Standard_F72s_v2, Standard_F8, Standard_F8s, Standard_F8s_v2, Standard_G1, Standard_G2, Standard_G3, Standard_G4, Standard_G5, Standard_GS1, Standard_GS2, Standard_GS3, Standard_GS4, Standard_GS4-4, Standard_GS4-8, Standard_GS5, Standard_GS5-16, Standard_GS5-8, Standard_H16, Standard_H16m, Standard_H16mr, Standard_H16r, Standard_H8, Standard_H8m, Standard_L16s, Standard_L32s, Standard_L4s, Standard_L8s, Standard_M128-32ms, Standard_M128-64ms, Standard_M128ms, Standard_M128s, Standard_M64-16ms, Standard_M64-32ms, Standard_M64ms, Standard_M64s, Standard_NC12, Standard_NC12s_v2, Standard_NC12s_v3, Standard_NC24, Standard_NC24r, Standard_NC24rs_v2, Standard_NC24rs_v3, Standard_NC24s_v2, Standard_NC24s_v3, Standard_NC6, Standard_NC6s_v2, Standard_NC6s_v3, Standard_ND12s, Standard_ND24rs, Standard_ND24s, Standard_ND6s, Standard_NV12, Standard_NV24, Standard_NV6): Size of agent VMs.

### ContainerServiceVnetSubnetID
* ContainerServiceVnetSubnetID `string`: VNet SubnetID specifies the vnet's subnet identifier. If you specify either master VNet Subnet, or agent VNet Subnet, you need to specify both. And they have to be in the same VNet.

### ContainerServiceWindowsProfile
* ContainerServiceWindowsProfile `object`: Profile for Windows VMs in the container service cluster.
  * adminPassword **required** `string`: The administrator password to use for Windows VMs.
  * adminUsername **required** `string`: The administrator username to use for Windows VMs.

### KeyVaultSecretRef
* KeyVaultSecretRef `object`: Reference to a secret stored in Azure Key Vault.
  * secretName **required** `string`: The secret name.
  * vaultID **required** `string`: Key vault identifier.
  * version `string`: The secret version.

### ManagedCluster
* ManagedCluster: Managed cluster.
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type
  * properties [ManagedClusterProperties](#managedclusterproperties)

### ManagedClusterAccessProfile
* ManagedClusterAccessProfile: Managed cluster Access Profile.
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type
  * properties [AccessProfile](#accessprofile)

### ManagedClusterListResult
* ManagedClusterListResult `object`: The response from the List Managed Clusters operation.
  * nextLink `string`: The URL to get the next set of managed cluster results.
  * value `array`: The list of managed clusters.
    * items [ManagedCluster](#managedcluster)

### ManagedClusterPoolUpgradeProfile
* ManagedClusterPoolUpgradeProfile `object`: The list of available upgrade versions.
  * kubernetesVersion **required** `string`: Kubernetes version (major, minor, patch).
  * name `string`: Pool name.
  * osType **required** [OSType](#ostype)
  * upgrades `array`: List of orchestrator types and versions available for upgrade.
    * items `string`

### ManagedClusterProperties
* ManagedClusterProperties `object`: Properties of the managed cluster.
  * agentPoolProfiles `array`: Properties of the agent pool.
    * items [ContainerServiceAgentPoolProfile](#containerserviceagentpoolprofile)
  * dnsPrefix `string`: DNS prefix specified when creating the managed cluster.
  * fqdn `string`: FDQN for the master pool.
  * kubernetesVersion `string`: Version of Kubernetes specified when creating the managed cluster.
  * linuxProfile [ContainerServiceLinuxProfile](#containerservicelinuxprofile)
  * provisioningState `string`: The current deployment or provisioning state, which only appears in the response.
  * servicePrincipalProfile [ContainerServiceServicePrincipalProfile](#containerserviceserviceprincipalprofile)

### ManagedClusterUpgradeProfile
* ManagedClusterUpgradeProfile `object`: The list of available upgrades for compute pools.
  * id `string`: Id of upgrade profile.
  * name `string`: Name of upgrade profile.
  * properties **required** [ManagedClusterUpgradeProfileProperties](#managedclusterupgradeprofileproperties)
  * type `string`: Type of upgrade profile.

### ManagedClusterUpgradeProfileProperties
* ManagedClusterUpgradeProfileProperties `object`: Control plane and agent pool upgrade profiles.
  * agentPoolProfiles **required** `array`: The list of available upgrade versions for agent pools.
    * items [ManagedClusterPoolUpgradeProfile](#managedclusterpoolupgradeprofile)
  * controlPlaneProfile **required** [ManagedClusterPoolUpgradeProfile](#managedclusterpoolupgradeprofile)

### OSType
* OSType `string` (values: Linux, Windows): OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.

### OrchestratorProfile
* OrchestratorProfile `object`: Contains information about orchestrator.
  * orchestratorType **required** `string`: Orchestrator type.
  * orchestratorVersion **required** `string`: Orchestrator version (major, minor, patch).

### Resource
* Resource `object`: The Resource model definition.
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type


