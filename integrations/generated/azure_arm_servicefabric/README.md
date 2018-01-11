# @datafire/azure_arm_servicefabric

Client library for ServiceFabricManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_servicefabric
```
```js
let azure_arm_servicefabric = require('@datafire/azure_arm_servicefabric').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_servicefabric.Operations_List({}).then(data => {
  console.log(data);
})
```

## Description



## Actions

### Operations_List
Lists all of the available ServiceFabric REST API operations.


```js
azure_arm_servicefabric.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the ServiceFabric resouce provider api

#### Output
* output [OperationListResult](#operationlistresult)

### Clusters_List
List cluster resource


```js
azure_arm_servicefabric.Clusters_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the ServiceFabric resouce provider api
  * subscriptionId **required** `string`: The customer subscription identifier

#### Output
* output [ClusterListResult](#clusterlistresult)

### ClusterVersions_List
List cluster code versions by location


```js
azure_arm_servicefabric.ClusterVersions_List({
  "location": "",
  "environment": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location for the cluster code versions, this is different from cluster location
  * environment **required** `string` (values: Default, Windows, Linux): Cluster operating system, the default means all
  * api-version **required** `string`: The version of the ServiceFabric resouce provider api
  * subscriptionId **required** `string`: The customer subscription identifier

#### Output
* output [ClusterCodeVersionsListResult](#clustercodeversionslistresult)

### Clusters_Delete
Delete cluster resource


```js
azure_arm_servicefabric.Clusters_Delete({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to which the resource belongs or get created
  * clusterName **required** `string`: The name of the cluster resource
  * api-version **required** `string`: The version of the ServiceFabric resouce provider api
  * subscriptionId **required** `string`: The customer subscription identifier

#### Output
*Output schema unknown*

### Clusters_Get
Get cluster resource


```js
azure_arm_servicefabric.Clusters_Get({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to which the resource belongs or get created
  * clusterName **required** `string`: The name of the cluster resource
  * api-version **required** `string`: The version of the ServiceFabric resouce provider api
  * subscriptionId **required** `string`: The customer subscription identifier

#### Output
* output [Cluster](#cluster)

### Clusters_Update
Update cluster configuration


```js
azure_arm_servicefabric.Clusters_Update({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "parameters": null,
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to which the resource belongs or get created
  * clusterName **required** `string`: The name of the cluster resource
  * api-version **required** `string`: The version of the ServiceFabric resouce provider api
  * parameters **required** [ClusterUpdateParameters](#clusterupdateparameters)
  * subscriptionId **required** `string`: The customer subscription identifier

#### Output
* output [Cluster](#cluster)

### Clusters_Create
Create cluster resource


```js
azure_arm_servicefabric.Clusters_Create({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "parameters": null,
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to which the resource belongs or get created
  * clusterName **required** `string`: The name of the cluster resource
  * api-version **required** `string`: The version of the ServiceFabric resouce provider api
  * parameters **required** [Cluster](#cluster)
  * subscriptionId **required** `string`: The customer subscription identifier

#### Output
* output [Cluster](#cluster)

### Clusters_ListByResourceGroup
List cluster resource by resource group


```js
azure_arm_servicefabric.Clusters_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to which the resource belongs or get created
  * api-version **required** `string`: The version of the ServiceFabric resouce provider api
  * subscriptionId **required** `string`: The customer subscription identifier

#### Output
* output [ClusterListResult](#clusterlistresult)



## Definitions

### AvailableOperationDisplay
* AvailableOperationDisplay `object`: Operation supported by ServiceFabric resource provider
  * description `string`: Operation description
  * operation `string`: Operation name
  * provider `string`: Provider name
  * resource `string`: Resource name

### AzureActiveDirectory
* AzureActiveDirectory `object`: The settings to enable AAD authentication on the cluster
  * clientApplication `string`: Azure active directory client application id
  * clusterApplication `string`: Azure active directory cluster application id
  * tenantId `string`: Azure active directory tenant id

### CertificateDescription
* CertificateDescription `object`: Certificate details
  * thumbprint **required** `string`: Thumbprint of the primary certificate
  * thumbprintSecondary `string`: Thumbprint of the secondary certificate
  * x509StoreName `string` (values: AddressBook, AuthRoot, CertificateAuthority, Disallowed, My, Root, TrustedPeople, TrustedPublisher): The local certificate store location

### ClientCertificateCommonName
* ClientCertificateCommonName `object`: Client certificate details using common name
  * certificateCommonName **required** `string`: Certificate common name to be granted access; be carefull using wild card common names
  * certificateIssuerThumbprint **required** `string`: Certificate issuer thumbprint
  * isAdmin **required** `boolean`: Is this certificate used for admin access from the client, if false , it is used or query only access

### ClientCertificateThumbprint
* ClientCertificateThumbprint `object`: Client certificate details using thumbprint
  * certificateThumbprint **required** `string`: Certificate thumbprint
  * isAdmin **required** `boolean`: Is this certificate used for admin access from the client, if false, it is used or query only access

### Cluster
* Cluster `object`: The cluster resource
  * properties [ClusterProperties](#clusterproperties)
  * id `string`: Resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ClusterCodeVersionsListResult
* ClusterCodeVersionsListResult `object`: The list results of the ServiceFabric runtime versions
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`
    * items [ClusterCodeVersionsResult](#clustercodeversionsresult)

### ClusterCodeVersionsResult
* ClusterCodeVersionsResult `object`: The result of the ServiceFabric runtime versions
  * id `string`: The identification of the result
  * name `string`: The name of the result
  * properties [ClusterVersionDetails](#clusterversiondetails)
  * type `string`: The result resource type

### ClusterEnvironment
* ClusterEnvironment `string` (values: Windows, Linux): Cluster operating system, the default will be Windows

### ClusterHealthPolicy
* ClusterHealthPolicy `object`: Defines a health policy used to evaluate the health of the cluster or of a cluster node.
  * maxPercentUnhealthyApplications `integer`: The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10. 
  * maxPercentUnhealthyNodes `integer`: The maximum allowed percentage of unhealthy nodes before reporting an error. For example, to allow 10% of nodes to be unhealthy, this value would be 10. 

### ClusterListResult
* ClusterListResult `object`: Cluster list results
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`
    * items [Cluster](#cluster)

### ClusterProperties
* ClusterProperties `object`: The cluster resource properties
  * availableClusterVersions `array`: The available cluster code version which the cluster can upgrade to, note that you must choose upgradeMode to manual to upgrade to
    * items [ClusterVersionDetails](#clusterversiondetails)
  * azureActiveDirectory [AzureActiveDirectory](#azureactivedirectory)
  * certificate [CertificateDescription](#certificatedescription)
  * clientCertificateCommonNames `array`:  List of client certificates to whitelist based on common names
    * items [ClientCertificateCommonName](#clientcertificatecommonname)
  * clientCertificateThumbprints `array`: The client thumbprint details ,it is used for client access for cluster operation
    * items [ClientCertificateThumbprint](#clientcertificatethumbprint)
  * clusterCodeVersion `string`: The ServiceFabric code version running in your cluster
  * clusterEndpoint `string`: The endpoint for the cluster connecting to servicefabric resource provider
  * clusterId `string`: The unique identifier for the cluster resource
  * clusterState `string` (values: WaitingForNodes, Deploying, BaselineUpgrade, UpdatingUserConfiguration, UpdatingUserCertificate, UpdatingInfrastructure, EnforcingClusterVersion, UpgradeServiceUnreachable, AutoScale, Ready): The state for the cluster
  * diagnosticsStorageAccountConfig [DiagnosticsStorageAccountConfig](#diagnosticsstorageaccountconfig)
  * fabricSettings `array`: List of custom fabric settings to configure the cluster.
    * items [SettingsSectionDescription](#settingssectiondescription)
  * managementEndpoint **required** `string`: The http management endpoint of the cluster
  * nodeTypes **required** `array`: The list of nodetypes that make up the cluster
    * items [NodeTypeDescription](#nodetypedescription)
  * provisioningState `string` (values: Updating, Succeeded, Failed, Canceled): The provisioning state of the cluster resource
  * reliabilityLevel `string` (values: Bronze, Silver, Gold, Platinum): Cluster reliability level indicates replica set size of system service
  * reverseProxyCertificate [CertificateDescription](#certificatedescription)
  * upgradeDescription [ClusterUpgradePolicy](#clusterupgradepolicy)
  * upgradeMode `string` (values: Automatic, Manual): Cluster upgrade mode indicates if fabric upgrade is initiated automatically by the system or not
  * vmImage `string`: The name of VM image VMSS has been configured with. Generic names such as Windows or Linux can be used.

### ClusterPropertiesUpdateParameters
* ClusterPropertiesUpdateParameters `object`: The cluster resource properties can be updated
  * certificate [CertificateDescription](#certificatedescription)
  * clientCertificateCommonNames `array`: List of client certificates to whitelist based on common names.
    * items [ClientCertificateCommonName](#clientcertificatecommonname)
  * clientCertificateThumbprints `array`: The client thumbprint details, it is used for client access for cluster operation, it will override existing collection
    * items [ClientCertificateThumbprint](#clientcertificatethumbprint)
  * clusterCodeVersion `string`: The ServiceFabric code version, if set it, please make sure you have set upgradeMode to Manual, otherwise ,it will fail, if you are using PUT new cluster, you can get the version by using ClusterVersions_List, if you are updating existing cluster, you can get the availableClusterVersions from Clusters_Get
  * fabricSettings `array`: List of custom fabric settings to configure the cluster, Note, it will overwrite existing collection
    * items [SettingsSectionDescription](#settingssectiondescription)
  * nodeTypes `array`: The list of nodetypes that make up the cluster, it will override
    * items [NodeTypeDescription](#nodetypedescription)
  * reliabilityLevel `string` (values: Bronze, Silver, Gold): This level is used to set the number of replicas of the system services
  * reverseProxyCertificate [CertificateDescription](#certificatedescription)
  * upgradeDescription [ClusterUpgradePolicy](#clusterupgradepolicy)
  * upgradeMode `string` (values: Automatic, Manual): Cluster upgrade mode indicates if fabric upgrade is initiated automatically by the system or not

### ClusterUpdateParameters
* ClusterUpdateParameters `object`: Cluster update request
  * properties [ClusterPropertiesUpdateParameters](#clusterpropertiesupdateparameters)
  * tags `object`: Cluster update parameters

### ClusterUpgradeDeltaHealthPolicy
* ClusterUpgradeDeltaHealthPolicy `object`: Delta health policy for the cluster
  * maxPercentDeltaUnhealthyApplications **required** `integer`: Additional unhealthy applications percentage
  * maxPercentDeltaUnhealthyNodes **required** `integer`: Additional unhealthy nodes percentage
  * maxPercentUpgradeDomainDeltaUnhealthyNodes **required** `integer`: Additional unhealthy nodes percentage per upgrade domain 

### ClusterUpgradePolicy
* ClusterUpgradePolicy `object`: Cluster upgrade policy
  * deltaHealthPolicy [ClusterUpgradeDeltaHealthPolicy](#clusterupgradedeltahealthpolicy)
  * forceRestart `boolean`: Force node to restart or not
  * healthCheckRetryTimeout **required** `string`: The length of time that health checks can fail continuously,it represents .Net TimeSpan
  * healthCheckStableDuration **required** `string`: The length of time that health checks must pass continuously,it represents .Net TimeSpan
  * healthCheckWaitDuration **required** `string`: The length of time to wait after completing an upgrade domain before performing health checks, it represents .Net TimeSpan
  * healthPolicy **required** [ClusterHealthPolicy](#clusterhealthpolicy)
  * overrideUserUpgradePolicy `boolean`: Use the user defined upgrade policy or not
  * upgradeDomainTimeout **required** `string`: The timeout for any upgrade domain,it represents .Net TimeSpan
  * upgradeReplicaSetCheckTimeout **required** `string`: Timeout for replica set upgrade to complete,it represents .Net TimeSpan
  * upgradeTimeout **required** `string`: The upgrade timeout,it represents .Net TimeSpan

### ClusterVersionDetails
* ClusterVersionDetails `object`: The detail of the ServiceFabric runtime version result
  * codeVersion `string`: The ServiceFabric runtime version of the cluster
  * environment [ClusterEnvironment](#clusterenvironment)
  * supportExpiryUtc `string`: The date of expiry of support of the version

### DiagnosticsStorageAccountConfig
* DiagnosticsStorageAccountConfig `object`: Diagnostics storage account config
  * blobEndpoint **required** `string`: Diagnostics storage account blob endpoint
  * protectedAccountKeyName **required** `string`: Protected Diagnostics storage key name
  * queueEndpoint **required** `string`: Diagnostics storage account queue endpoint
  * storageAccountName **required** `string`: Diagnostics storage account name
  * tableEndpoint **required** `string`: Diagnostics storage account table endpoint

### EndpointRangeDescription
* EndpointRangeDescription `object`: Port range details
  * endPort **required** `integer`: End port of a range of ports
  * startPort **required** `integer`: Starting port of a range of ports

### ErrorModel
* ErrorModel `object`: The structure of the error
  * error `object`: The error detail 
    * code `string`: The error code
    * message `string`: The error message

### NodeTypeDescription
* NodeTypeDescription `object`: Describes a node type in the cluster, each node type represents sub set of nodes in the cluster
  * applicationPorts [EndpointRangeDescription](#endpointrangedescription)
  * capacities `object`: The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much of a resource a node has
  * clientConnectionEndpointPort **required** `integer`: The TCP cluster management endpoint port
  * durabilityLevel `string` (values: Bronze, Silver, Gold): Nodetype durability Level
  * ephemeralPorts [EndpointRangeDescription](#endpointrangedescription)
  * httpGatewayEndpointPort **required** `integer`: The HTTP cluster management endpoint port
  * isPrimary **required** `boolean`: Mark this as the primary node type
  * name **required** `string`: Name of the node type
  * placementProperties `object`: The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run
  * reverseProxyEndpointPort `integer`: Endpoint used by reverse proxy
  * vmInstanceCount **required** `integer`: The number of node instances in the node type

### OperationListResult
* OperationListResult `object`: Result of the request to list ServiceFabric operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of ServiceFabric operations supported by the Microsoft.ServiceFabric resource provider.
    * items [OperationResult](#operationresult)

### OperationResult
* OperationResult `object`: Available operation list result
  * display [AvailableOperationDisplay](#availableoperationdisplay)
  * name `string`: Result name
  * nextLink `string`: The URL to use for getting the next set of results.
  * origin `string`: Origin result

### Resource
* Resource `object`: The resource model definition.
  * id `string`: Resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### SettingsParameterDescription
* SettingsParameterDescription `object`: ServiceFabric settings under sections
  * name **required** `string`: The name of settings property
  * value **required** `string`: The value of the property

### SettingsSectionDescription
* SettingsSectionDescription `object`: ServiceFabric section settings
  * name **required** `string`: The name of settings section
  * parameters **required** `array`: Collection of settings in the section, each setting is a tuple consisting of setting name and value
    * items [SettingsParameterDescription](#settingsparameterdescription)


