# @datafire/azure_servicefabric_cluster

Client library for ServiceFabricManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_servicefabric_cluster
```
```js
let azure_servicefabric_cluster = require('@datafire/azure_servicefabric_cluster').create({
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

Azure Service Fabric Resource Provider API Client

## Actions

### Operations_List
Get the list of available Service Fabric resource provider API operations.


```js
azure_servicefabric_cluster.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the Service Fabric resource provider API

#### Output
* output [OperationListResult](#operationlistresult)

### Clusters_List
Gets all Service Fabric cluster resources created or in the process of being created in the subscription.


```js
azure_servicefabric_cluster.Clusters_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.
  * subscriptionId **required** `string`: The customer subscription identifier.

#### Output
* output [ClusterListResult](#clusterlistresult)

### ClusterVersions_List
Gets all available code versions for Service Fabric cluster resources by location.


```js
azure_servicefabric_cluster.ClusterVersions_List({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location for the cluster code versions. This is different from cluster location.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.
  * subscriptionId **required** `string`: The customer subscription identifier.

#### Output
* output [ClusterCodeVersionsListResult](#clustercodeversionslistresult)

### ClusterVersions_Get
Gets information about an available Service Fabric cluster code version.


```js
azure_servicefabric_cluster.ClusterVersions_Get({
  "location": "",
  "api-version": "",
  "subscriptionId": "",
  "clusterVersion": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location for the cluster code versions. This is different from cluster location.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.
  * subscriptionId **required** `string`: The customer subscription identifier.
  * clusterVersion **required** `string`: The cluster code version.

#### Output
* output [ClusterCodeVersionsListResult](#clustercodeversionslistresult)

### ClusterVersions_ListByEnvironment
Gets all available code versions for Service Fabric cluster resources by environment.


```js
azure_servicefabric_cluster.ClusterVersions_ListByEnvironment({
  "location": "",
  "environment": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location for the cluster code versions. This is different from cluster location.
  * environment **required** `string` (values: Windows, Linux): The operating system of the cluster. The default means all.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.
  * subscriptionId **required** `string`: The customer subscription identifier.

#### Output
* output [ClusterCodeVersionsListResult](#clustercodeversionslistresult)

### ClusterVersions_GetByEnvironment
Gets information about an available Service Fabric cluster code version by environment.


```js
azure_servicefabric_cluster.ClusterVersions_GetByEnvironment({
  "location": "",
  "environment": "",
  "api-version": "",
  "subscriptionId": "",
  "clusterVersion": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location for the cluster code versions. This is different from cluster location.
  * environment **required** `string` (values: Windows, Linux): The operating system of the cluster. The default means all.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.
  * subscriptionId **required** `string`: The customer subscription identifier.
  * clusterVersion **required** `string`: The cluster code version.

#### Output
* output [ClusterCodeVersionsListResult](#clustercodeversionslistresult)

### Clusters_Delete
Delete a Service Fabric cluster resource with the specified name.


```js
azure_servicefabric_cluster.Clusters_Delete({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.
  * subscriptionId **required** `string`: The customer subscription identifier.

#### Output
*Output schema unknown*

### Clusters_Get
Get a Service Fabric cluster resource created or in the process of being created in the specified resource group.


```js
azure_servicefabric_cluster.Clusters_Get({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.
  * subscriptionId **required** `string`: The customer subscription identifier.

#### Output
* output [Cluster](#cluster)

### Clusters_Update
Update the configuration of a Service Fabric cluster resource with the specified name.


```js
azure_servicefabric_cluster.Clusters_Update({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.
  * subscriptionId **required** `string`: The customer subscription identifier.
  * parameters **required** [ClusterUpdateParameters](#clusterupdateparameters)

#### Output
* output [Cluster](#cluster)

### Clusters_Create
Create or update a Service Fabric cluster resource with the specified name.


```js
azure_servicefabric_cluster.Clusters_Create({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster resource.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.
  * subscriptionId **required** `string`: The customer subscription identifier.
  * parameters **required** [Cluster](#cluster)

#### Output
* output [Cluster](#cluster)

### Clusters_ListByResourceGroup
Gets all Service Fabric cluster resources created or in the process of being created in the resource group.


```js
azure_servicefabric_cluster.Clusters_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string` (values: 2019-03-01-preview): The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01-preview" for this specification.
  * subscriptionId **required** `string`: The customer subscription identifier.

#### Output
* output [ClusterListResult](#clusterlistresult)



## Definitions

### AddOnFeatures
* AddOnFeatures `string` (values: RepairManager, DnsService, BackupRestoreService, ResourceMonitorService): Available cluster add-on features

### ApplicationDeltaHealthPolicy
* ApplicationDeltaHealthPolicy `object`: Defines a delta health policy used to evaluate the health of an application or one of its child entities when upgrading the cluster.
  * defaultServiceTypeDeltaHealthPolicy [ServiceTypeDeltaHealthPolicy](#servicetypedeltahealthpolicy)
  * serviceTypeDeltaHealthPolicies [ServiceTypeDeltaHealthPolicyMap](#servicetypedeltahealthpolicymap)

### ApplicationDeltaHealthPolicyMap
* ApplicationDeltaHealthPolicyMap `object`: Defines a map that contains specific application delta health policies for different applications.

### ApplicationHealthPolicy
* ApplicationHealthPolicy `object`: Defines a health policy used to evaluate the health of an application or one of its children entities.
  * defaultServiceTypeHealthPolicy [ServiceTypeHealthPolicy](#servicetypehealthpolicy)
  * serviceTypeHealthPolicies [ServiceTypeHealthPolicyMap](#servicetypehealthpolicymap)

### ApplicationHealthPolicyMap
* ApplicationHealthPolicyMap `object`: Defines a map that contains specific application health policies for different applications.

### AvailableOperationDisplay
* AvailableOperationDisplay `object`: Operation supported by the Service Fabric resource provider
  * description `string`: Operation description
  * operation `string`: The operation that can be performed.
  * provider `string`: The name of the provider.
  * resource `string`: The resource on which the operation is performed

### AzureActiveDirectory
* AzureActiveDirectory `object`: The settings to enable AAD authentication on the cluster.
  * clientApplication `string`: Azure active directory client application id.
  * clusterApplication `string`: Azure active directory cluster application id.
  * tenantId `string`: Azure active directory tenant id.

### CertificateDescription
* CertificateDescription `object`: Describes the certificate details.
  * thumbprint **required** `string`: Thumbprint of the primary certificate.
  * thumbprintSecondary `string`: Thumbprint of the secondary certificate.
  * x509StoreName [StoreName](#storename)

### ClientCertificateCommonName
* ClientCertificateCommonName `object`: Describes the client certificate details using common name.
  * certificateCommonName **required** `string`: The common name of the client certificate.
  * certificateIssuerThumbprint **required** `string`: The issuer thumbprint of the client certificate.
  * isAdmin **required** `boolean`: Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.

### ClientCertificateThumbprint
* ClientCertificateThumbprint `object`: Describes the client certificate details using thumbprint.
  * certificateThumbprint **required** `string`: The thumbprint of the client certificate.
  * isAdmin **required** `boolean`: Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.

### Cluster
* Cluster `object`: The cluster resource
  * etag `string`: Azure resource etag.
  * id `string`: Azure resource identifier.
  * location **required** `string`: Azure resource location.
  * name `string`: Azure resource name.
  * tags `object`: Azure resource tags.
  * type `string`: Azure resource type.
  * properties [ClusterProperties](#clusterproperties)

### ClusterCodeVersionsListResult
* ClusterCodeVersionsListResult `object`: The list results of the Service Fabric runtime versions.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`
    * items [ClusterCodeVersionsResult](#clustercodeversionsresult)

### ClusterCodeVersionsResult
* ClusterCodeVersionsResult `object`: The result of the Service Fabric runtime versions
  * id `string`: The identification of the result
  * name `string`: The name of the result
  * properties [ClusterVersionDetails](#clusterversiondetails)
  * type `string`: The result resource type

### ClusterEnvironment
* ClusterEnvironment `string` (values: Windows, Linux): Cluster operating system, the default will be Windows

### ClusterHealthPolicy
* ClusterHealthPolicy `object`: Defines a health policy used to evaluate the health of the cluster or of a cluster node.
  * applicationHealthPolicies [ApplicationHealthPolicyMap](#applicationhealthpolicymap)
  * maxPercentUnhealthyApplications `integer`: The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10.
  * maxPercentUnhealthyNodes `integer`: The maximum allowed percentage of unhealthy nodes before reporting an error. For example, to allow 10% of nodes to be unhealthy, this value would be 10.

### ClusterListResult
* ClusterListResult `object`: Cluster list results
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`
    * items [Cluster](#cluster)

### ClusterProperties
* ClusterProperties `object`: Describes the cluster resource properties.
  * addOnFeatures `array`: The list of add-on features to enable in the cluster.
    * items [AddOnFeatures](#addonfeatures)
  * availableClusterVersions `array`: The Service Fabric runtime versions available for this cluster.
    * items [ClusterVersionDetails](#clusterversiondetails)
  * azureActiveDirectory [AzureActiveDirectory](#azureactivedirectory)
  * certificate [CertificateDescription](#certificatedescription)
  * certificateCommonNames [ServerCertificateCommonNames](#servercertificatecommonnames)
  * clientCertificateCommonNames `array`: The list of client certificates referenced by common name that are allowed to manage the cluster.
    * items [ClientCertificateCommonName](#clientcertificatecommonname)
  * clientCertificateThumbprints `array`: The list of client certificates referenced by thumbprint that are allowed to manage the cluster.
    * items [ClientCertificateThumbprint](#clientcertificatethumbprint)
  * clusterCodeVersion `string`: The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
  * clusterEndpoint `string`: The Azure Resource Provider endpoint. A system service in the cluster connects to this  endpoint.
  * clusterId `string`: A service generated unique identifier for the cluster resource.
  * clusterState [ClusterState](#clusterstate)
  * diagnosticsStorageAccountConfig [DiagnosticsStorageAccountConfig](#diagnosticsstorageaccountconfig)
  * eventStoreServiceEnabled `boolean`: Indicates if the event store service is enabled.
  * fabricSettings `array`: The list of custom fabric settings to configure the cluster.
    * items [SettingsSectionDescription](#settingssectiondescription)
  * managementEndpoint **required** `string`: The http management endpoint of the cluster.
  * nodeTypes **required** `array`: The list of node types in the cluster.
    * items [NodeTypeDescription](#nodetypedescription)
  * provisioningState `string` (values: Updating, Succeeded, Failed, Canceled): The provisioning state of the cluster resource.
  * reliabilityLevel [ReliabilityLevel](#reliabilitylevel)
  * reverseProxyCertificate [CertificateDescription](#certificatedescription)
  * reverseProxyCertificateCommonNames [ServerCertificateCommonNames](#servercertificatecommonnames)
  * upgradeDescription [ClusterUpgradePolicy](#clusterupgradepolicy)
  * upgradeMode [UpgradeMode](#upgrademode)
  * vmImage `string`: The VM image VMSS has been configured with. Generic names such as Windows or Linux can be used.

### ClusterPropertiesUpdateParameters
* ClusterPropertiesUpdateParameters `object`: Describes the cluster resource properties that can be updated during PATCH operation.
  * addOnFeatures `array`: The list of add-on features to enable in the cluster.
    * items [AddOnFeatures](#addonfeatures)
  * certificate [CertificateDescription](#certificatedescription)
  * certificateCommonNames [ServerCertificateCommonNames](#servercertificatecommonnames)
  * clientCertificateCommonNames `array`: The list of client certificates referenced by common name that are allowed to manage the cluster. This will overwrite the existing list.
    * items [ClientCertificateCommonName](#clientcertificatecommonname)
  * clientCertificateThumbprints `array`: The list of client certificates referenced by thumbprint that are allowed to manage the cluster. This will overwrite the existing list.
    * items [ClientCertificateThumbprint](#clientcertificatethumbprint)
  * clusterCodeVersion `string`: The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
  * eventStoreServiceEnabled `boolean`: Indicates if the event store service is enabled.
  * fabricSettings `array`: The list of custom fabric settings to configure the cluster. This will overwrite the existing list.
    * items [SettingsSectionDescription](#settingssectiondescription)
  * nodeTypes `array`: The list of node types in the cluster. This will overwrite the existing list.
    * items [NodeTypeDescription](#nodetypedescription)
  * reliabilityLevel [ReliabilityLevel](#reliabilitylevel)
  * reverseProxyCertificate [CertificateDescription](#certificatedescription)
  * upgradeDescription [ClusterUpgradePolicy](#clusterupgradepolicy)
  * upgradeMode [UpgradeMode](#upgrademode)

### ClusterState
* ClusterState `string` (values: WaitingForNodes, Deploying, BaselineUpgrade, UpdatingUserConfiguration, UpdatingUserCertificate, UpdatingInfrastructure, EnforcingClusterVersion, UpgradeServiceUnreachable, AutoScale, Ready): The current state of the cluster.

### ClusterUpdateParameters
* ClusterUpdateParameters `object`: Cluster update request
  * properties [ClusterPropertiesUpdateParameters](#clusterpropertiesupdateparameters)
  * tags `object`: Cluster update parameters

### ClusterUpgradeDeltaHealthPolicy
* ClusterUpgradeDeltaHealthPolicy `object`: Describes the delta health policies for the cluster upgrade.
  * applicationDeltaHealthPolicies [ApplicationDeltaHealthPolicyMap](#applicationdeltahealthpolicymap)
  * maxPercentDeltaUnhealthyApplications **required** `integer`: The maximum allowed percentage of applications health degradation allowed during cluster upgrades.
  * maxPercentDeltaUnhealthyNodes **required** `integer`: The maximum allowed percentage of nodes health degradation allowed during cluster upgrades.
  * maxPercentUpgradeDomainDeltaUnhealthyNodes **required** `integer`: The maximum allowed percentage of upgrade domain nodes health degradation allowed during cluster upgrades.

### ClusterUpgradePolicy
* ClusterUpgradePolicy `object`: Describes the policy used when upgrading the cluster.
  * deltaHealthPolicy [ClusterUpgradeDeltaHealthPolicy](#clusterupgradedeltahealthpolicy)
  * forceRestart `boolean`: If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
  * healthCheckRetryTimeout **required** `string`: The amount of time to retry health evaluation when the application or cluster is unhealthy before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
  * healthCheckStableDuration **required** `string`: The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
  * healthCheckWaitDuration **required** `string`: The length of time to wait after completing an upgrade domain before performing health checks. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
  * healthPolicy **required** [ClusterHealthPolicy](#clusterhealthpolicy)
  * upgradeDomainTimeout **required** `string`: The amount of time each upgrade domain has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
  * upgradeReplicaSetCheckTimeout **required** `string`: The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
  * upgradeTimeout **required** `string`: The amount of time the overall upgrade has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.

### ClusterVersionDetails
* ClusterVersionDetails `object`: The detail of the Service Fabric runtime version result
  * codeVersion `string`: The Service Fabric runtime version of the cluster.
  * environment [ClusterEnvironment](#clusterenvironment)
  * supportExpiryUtc `string`: The date of expiry of support of the version.

### DiagnosticsStorageAccountConfig
* DiagnosticsStorageAccountConfig `object`: The storage account information for storing Service Fabric diagnostic logs.
  * blobEndpoint **required** `string`: The blob endpoint of the azure storage account.
  * protectedAccountKeyName **required** `string`: The protected diagnostics storage key name.
  * queueEndpoint **required** `string`: The queue endpoint of the azure storage account.
  * storageAccountName **required** `string`: The Azure storage account name.
  * tableEndpoint **required** `string`: The table endpoint of the azure storage account.

### DurabilityLevel
* DurabilityLevel `string` (values: Bronze, Silver, Gold): The durability level of the node type. Learn about [DurabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).

### EndpointRangeDescription
* EndpointRangeDescription `object`: Port range details
  * endPort **required** `integer`: End port of a range of ports
  * startPort **required** `integer`: Starting port of a range of ports

### ErrorModel
* ErrorModel `object`: The structure of the error.
  * error [ErrorModelError](#errormodelerror)

### ErrorModelError
* ErrorModelError `object`: The error details.
  * code `string`: The error code.
  * message `string`: The error message.

### NodeTypeDescription
* NodeTypeDescription `object`: Describes a node type in the cluster, each node type represents sub set of nodes in the cluster.
  * applicationPorts [EndpointRangeDescription](#endpointrangedescription)
  * capacities `object`: The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much resource a node has.
  * clientConnectionEndpointPort **required** `integer`: The TCP cluster management endpoint port.
  * durabilityLevel [DurabilityLevel](#durabilitylevel)
  * ephemeralPorts [EndpointRangeDescription](#endpointrangedescription)
  * httpGatewayEndpointPort **required** `integer`: The HTTP cluster management endpoint port.
  * isPrimary **required** `boolean`: The node type on which system services will run. Only one node type should be marked as primary. Primary node type cannot be deleted or changed for existing clusters.
  * name **required** `string`: The name of the node type.
  * placementProperties `object`: The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run.
  * reverseProxyEndpointPort `integer`: The endpoint used by reverse proxy.
  * vmInstanceCount **required** `integer`: The number of nodes in the node type. This count should match the capacity property in the corresponding VirtualMachineScaleSet resource.

### OperationListResult
* OperationListResult `object`: Describes the result of the request to list Service Fabric resource provider operations.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of operations supported by the Service Fabric resource provider.
    * items [OperationResult](#operationresult)

### OperationResult
* OperationResult `object`: Available operation list result
  * display [AvailableOperationDisplay](#availableoperationdisplay)
  * name `string`: The name of the operation.
  * nextLink `string`: The URL to use for getting the next set of results.
  * origin `string`: Origin result

### ReliabilityLevel
* ReliabilityLevel `string` (values: None, Bronze, Silver, Gold, Platinum): The reliability level sets the replica set size of system services. Learn about [ReliabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).

### Resource
* Resource `object`: The resource model definition.
  * etag `string`: Azure resource etag.
  * id `string`: Azure resource identifier.
  * location **required** `string`: Azure resource location.
  * name `string`: Azure resource name.
  * tags `object`: Azure resource tags.
  * type `string`: Azure resource type.

### ServerCertificateCommonName
* ServerCertificateCommonName `object`: Describes the server certificate details using common name.
  * certificateCommonName **required** `string`: The common name of the server certificate.
  * certificateIssuerThumbprint **required** `string`: The issuer thumbprint of the server certificate.

### ServerCertificateCommonNames
* ServerCertificateCommonNames `object`: Describes a list of server certificates referenced by common name that are used to secure the cluster.
  * commonNames `array`: The list of server certificates referenced by common name that are used to secure the cluster.
    * items [ServerCertificateCommonName](#servercertificatecommonname)
  * x509StoreName [StoreName](#storename)

### ServiceTypeDeltaHealthPolicy
* ServiceTypeDeltaHealthPolicy `object`: Represents the delta health policy used to evaluate the health of services belonging to a service type when upgrading the cluster.
  * maxPercentDeltaUnhealthyServices `integer`: The maximum allowed percentage of services health degradation allowed during cluster upgrades.

### ServiceTypeDeltaHealthPolicyMap
* ServiceTypeDeltaHealthPolicyMap `object`: Defines a map that contains specific delta health policies for different service types.

### ServiceTypeHealthPolicy
* ServiceTypeHealthPolicy `object`: Represents the health policy used to evaluate the health of services belonging to a service type.
  * maxPercentUnhealthyServices `integer`: The maximum percentage of services allowed to be unhealthy before your application is considered in error.

### ServiceTypeHealthPolicyMap
* ServiceTypeHealthPolicyMap `object`: Defines a ServiceTypeHealthPolicy per service type name.

### SettingsParameterDescription
* SettingsParameterDescription `object`: Describes a parameter in fabric settings of the cluster.
  * name **required** `string`: The parameter name of fabric setting.
  * value **required** `string`: The parameter value of fabric setting.

### SettingsSectionDescription
* SettingsSectionDescription `object`: Describes a section in the fabric settings of the cluster.
  * name **required** `string`: The section name of the fabric settings.
  * parameters **required** `array`: The collection of parameters in the section.
    * items [SettingsParameterDescription](#settingsparameterdescription)

### StoreName
* StoreName `string` (values: AddressBook, AuthRoot, CertificateAuthority, Disallowed, My, Root, TrustedPeople, TrustedPublisher): The local certificate store location.

### UpgradeMode
* UpgradeMode `string` (values: Automatic, Manual): The upgrade mode of the cluster when new Service Fabric runtime version is available.


