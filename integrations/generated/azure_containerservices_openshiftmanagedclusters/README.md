# @datafire/azure_containerservices_openshiftmanagedclusters

Client library for ContainerServiceClient

## Installation and Usage
```bash
npm install --save @datafire/azure_containerservices_openshiftmanagedclusters
```
```js
let azure_containerservices_openshiftmanagedclusters = require('@datafire/azure_containerservices_openshiftmanagedclusters').create({
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

The Container Service Client.

## Actions

### OpenShiftManagedClusters_List
Gets a list of OpenShift managed clusters in the specified subscription. The operation returns properties of each OpenShift managed cluster.


```js
azure_containerservices_openshiftmanagedclusters.OpenShiftManagedClusters_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OpenShiftManagedClusterListResult](#openshiftmanagedclusterlistresult)

### OpenShiftManagedClusters_ListByResourceGroup
Lists OpenShift managed clusters in the specified subscription and resource group. The operation returns properties of each OpenShift managed cluster.


```js
azure_containerservices_openshiftmanagedclusters.OpenShiftManagedClusters_ListByResourceGroup({
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
* output [OpenShiftManagedClusterListResult](#openshiftmanagedclusterlistresult)

### OpenShiftManagedClusters_Delete
Deletes the OpenShift managed cluster with a specified resource group and name.


```js
azure_containerservices_openshiftmanagedclusters.OpenShiftManagedClusters_Delete({
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
  * resourceName **required** `string`: The name of the OpenShift managed cluster resource.

#### Output
*Output schema unknown*

### OpenShiftManagedClusters_Get
Gets the details of the managed OpenShift cluster with a specified resource group and name.


```js
azure_containerservices_openshiftmanagedclusters.OpenShiftManagedClusters_Get({
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
  * resourceName **required** `string`: The name of the OpenShift managed cluster resource.

#### Output
* output [OpenShiftManagedCluster](#openshiftmanagedcluster)

### OpenShiftManagedClusters_UpdateTags
Updates an OpenShift managed cluster with the specified tags.


```js
azure_containerservices_openshiftmanagedclusters.OpenShiftManagedClusters_UpdateTags({
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
  * resourceName **required** `string`: The name of the OpenShift managed cluster resource.
  * parameters **required** [TagsObject](#tagsobject)

#### Output
* output [OpenShiftManagedCluster](#openshiftmanagedcluster)

### OpenShiftManagedClusters_CreateOrUpdate
Creates or updates a OpenShift managed cluster with the specified configuration for agents and OpenShift version.


```js
azure_containerservices_openshiftmanagedclusters.OpenShiftManagedClusters_CreateOrUpdate({
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
  * resourceName **required** `string`: The name of the OpenShift managed cluster resource.
  * parameters **required** [OpenShiftManagedCluster](#openshiftmanagedcluster)

#### Output
* output [OpenShiftManagedCluster](#openshiftmanagedcluster)



## Definitions

### CloudError
* CloudError `object`: An error response from the Container service.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: An error response from the Container service.
  * code `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * details `array`: A list of additional details about the error.
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: A message describing the error, intended to be suitable for display in a user interface.
  * target `string`: The target of the particular error. For example, the name of the property in error.

### NetworkProfile
* NetworkProfile `object`: Represents the OpenShift networking configuration
  * peerVnetId `string`: CIDR of the Vnet to peer.
  * vnetCidr `string`: CIDR for the OpenShift Vnet.

### OSType
* OSType `string` (values: Linux, Windows): OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.

### OpenShiftAgentPoolProfileRole
* OpenShiftAgentPoolProfileRole `string` (values: compute, infra): OpenShiftAgentPoolProfileRole represents the role of the AgentPoolProfile.

### OpenShiftContainerServiceVMSize
* OpenShiftContainerServiceVMSize `string` (values: Standard_D2s_v3, Standard_D4s_v3, Standard_D8s_v3, Standard_D16s_v3, Standard_D32s_v3, Standard_D64s_v3, Standard_DS4_v2, Standard_DS5_v2, Standard_F8s_v2, Standard_F16s_v2, Standard_F32s_v2, Standard_F64s_v2, Standard_F72s_v2, Standard_F8s, Standard_F16s, Standard_E4s_v3, Standard_E8s_v3, Standard_E16s_v3, Standard_E20s_v3, Standard_E32s_v3, Standard_E64s_v3, Standard_GS2, Standard_GS3, Standard_GS4, Standard_GS5, Standard_DS12_v2, Standard_DS13_v2, Standard_DS14_v2, Standard_DS15_v2, Standard_L4s, Standard_L8s, Standard_L16s, Standard_L32s): Size of OpenShift VMs.

### OpenShiftManagedCluster
* OpenShiftManagedCluster: OpenShift Managed cluster.
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type
  * plan [PurchasePlan](#purchaseplan)
  * properties [OpenShiftManagedClusterProperties](#openshiftmanagedclusterproperties)

### OpenShiftManagedClusterAADIdentityProvider
* OpenShiftManagedClusterAADIdentityProvider: Defines the Identity provider for MS AAD.
  * kind **required** `string`: The kind of the provider.
  * clientId `string`: The clientId password associated with the provider.
  * secret `string`: The secret password associated with the provider.
  * tenantId `string`: The tenantId associated with the provider.

### OpenShiftManagedClusterAgentPoolProfile
* OpenShiftManagedClusterAgentPoolProfile `object`: Defines the configuration of the OpenShift cluster VMs.
  * count **required** `integer`: Number of agents (VMs) to host docker containers.
  * name **required** `string`: Unique name of the pool profile in the context of the subscription and resource group.
  * osType [OSType](#ostype)
  * role [OpenShiftAgentPoolProfileRole](#openshiftagentpoolprofilerole)
  * subnetCidr `string`: Subnet CIDR for the peering.
  * vmSize **required** [OpenShiftContainerServiceVMSize](#openshiftcontainerservicevmsize)

### OpenShiftManagedClusterAuthProfile
* OpenShiftManagedClusterAuthProfile `object`: Defines all possible authentication profiles for the OpenShift cluster.
  * identityProviders `array`: Type of authentication profile to use.
    * items [OpenShiftManagedClusterIdentityProvider](#openshiftmanagedclusteridentityprovider)

### OpenShiftManagedClusterBaseIdentityProvider
* OpenShiftManagedClusterBaseIdentityProvider `object`: Structure for any Identity provider.
  * kind **required** `string`: The kind of the provider.

### OpenShiftManagedClusterIdentityProvider
* OpenShiftManagedClusterIdentityProvider `object`: Defines the configuration of the identity providers to be used in the OpenShift cluster.
  * name `string`: Name of the provider.
  * provider [OpenShiftManagedClusterBaseIdentityProvider](#openshiftmanagedclusterbaseidentityprovider)

### OpenShiftManagedClusterListResult
* OpenShiftManagedClusterListResult `object`: The response from the List OpenShift Managed Clusters operation.
  * nextLink `string`: The URL to get the next set of OpenShift managed cluster results.
  * value `array`: The list of OpenShift managed clusters.
    * items [OpenShiftManagedCluster](#openshiftmanagedcluster)

### OpenShiftManagedClusterMasterPoolProfile
* OpenShiftManagedClusterMasterPoolProfile `object`: OpenShiftManagedClusterMaterPoolProfile contains configuration for OpenShift master VMs.
  * count **required** `integer`: Number of masters (VMs) to host docker containers. The default value is 3.
  * name `string`: Unique name of the master pool profile in the context of the subscription and resource group.
  * osType [OSType](#ostype)
  * subnetCidr `string`: Subnet CIDR for the peering.
  * vmSize **required** [OpenShiftContainerServiceVMSize](#openshiftcontainerservicevmsize)

### OpenShiftManagedClusterProperties
* OpenShiftManagedClusterProperties `object`: Properties of the OpenShift managed cluster.
  * agentPoolProfiles `array`: Configuration of OpenShift cluster VMs.
    * items [OpenShiftManagedClusterAgentPoolProfile](#openshiftmanagedclusteragentpoolprofile)
  * authProfile [OpenShiftManagedClusterAuthProfile](#openshiftmanagedclusterauthprofile)
  * fqdn `string`: User-specified FQDN for OpenShift API server loadbalancer internal hostname.
  * masterPoolProfile [OpenShiftManagedClusterMasterPoolProfile](#openshiftmanagedclustermasterpoolprofile)
  * networkProfile [NetworkProfile](#networkprofile)
  * openShiftVersion **required** `string`: Version of OpenShift specified when creating the cluster.
  * provisioningState `string`: The current deployment or provisioning state, which only appears in the response.
  * publicHostname `string`: Optional user-specified FQDN for OpenShift API server.
  * routerProfiles `array`: Configuration for OpenShift router(s).
    * items [OpenShiftRouterProfile](#openshiftrouterprofile)

### OpenShiftRouterProfile
* OpenShiftRouterProfile `object`: Represents an OpenShift router
  * fqdn `string`: Auto-allocated FQDN for the OpenShift router.
  * name `string`: Name of the router profile.
  * publicSubdomain `string`: DNS subdomain for OpenShift router.

### PurchasePlan
* PurchasePlan `object`: Used for establishing the purchase context of any 3rd Party artifact through MarketPlace.
  * name `string`: The plan ID.
  * product `string`: Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
  * promotionCode `string`: The promotion code.
  * publisher `string`: The plan ID.

### Resource
* Resource `object`: The Resource model definition.
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### TagsObject
* TagsObject `object`: Tags object for patch operations.
  * tags `object`: Resource tags.


