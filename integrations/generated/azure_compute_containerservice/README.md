# @datafire/azure_compute_containerservice

Client library for ContainerServiceClient

## Installation and Usage
```bash
npm install --save @datafire/azure_compute_containerservice
```
```js
let azure_compute_containerservice = require('@datafire/azure_compute_containerservice').create({
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

### ContainerServices_List
Gets a list of container services in the specified subscription. The operation returns properties of each container service including state, orchestrator, number of masters and agents, and FQDNs of masters and agents.


```js
azure_compute_containerservice.ContainerServices_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ContainerServiceListResult](#containerservicelistresult)

### ContainerServices_ListByResourceGroup
Gets a list of container services in the specified subscription and resource group. The operation returns properties of each container service including state, orchestrator, number of masters and agents, and FQDNs of masters and agents.


```js
azure_compute_containerservice.ContainerServices_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ContainerServiceListResult](#containerservicelistresult)

### ContainerServices_Delete
Deletes the specified container service in the specified subscription and resource group. The operation does not delete other resources created as part of creating a container service, including storage accounts, VMs, and availability sets. All the other resources created with the container service are part of the same resource group and can be deleted individually.


```js
azure_compute_containerservice.ContainerServices_Delete({
  "resourceGroupName": "",
  "containerServiceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * containerServiceName **required** `string`: The name of the container service in the specified subscription and resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ContainerServices_Get
Gets the properties of the specified container service in the specified subscription and resource group. The operation returns the properties including state, orchestrator, number of masters and agents, and FQDNs of masters and agents. 


```js
azure_compute_containerservice.ContainerServices_Get({
  "resourceGroupName": "",
  "containerServiceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * containerServiceName **required** `string`: The name of the container service in the specified subscription and resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ContainerService](#containerservice)

### ContainerServices_CreateOrUpdate
Creates or updates a container service with the specified configuration of orchestrator, masters, and agents.


```js
azure_compute_containerservice.ContainerServices_CreateOrUpdate({
  "resourceGroupName": "",
  "containerServiceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * containerServiceName **required** `string`: The name of the container service in the specified subscription and resource group.
  * parameters **required** [ContainerService](#containerservice)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ContainerService](#containerservice)



## Definitions

### ContainerService
* ContainerService `object`: Container service.
  * properties [ContainerServiceProperties](#containerserviceproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ContainerServiceAgentPoolProfile
* ContainerServiceAgentPoolProfile `object`: Profile for the container service agent pool.
  * count **required** `integer`: Number of agents (VMs) to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. 
  * dnsPrefix **required** `string`: DNS prefix to be used to create the FQDN for the agent pool.
  * fqdn `string`: FQDN for the agent pool.
  * name **required** `string`: Unique name of the agent pool profile in the context of the subscription and resource group.
  * vmSize **required** `string` (values: Standard_A0, Standard_A1, Standard_A2, Standard_A3, Standard_A4, Standard_A5, Standard_A6, Standard_A7, Standard_A8, Standard_A9, Standard_A10, Standard_A11, Standard_D1, Standard_D2, Standard_D3, Standard_D4, Standard_D11, Standard_D12, Standard_D13, Standard_D14, Standard_D1_v2, Standard_D2_v2, Standard_D3_v2, Standard_D4_v2, Standard_D5_v2, Standard_D11_v2, Standard_D12_v2, Standard_D13_v2, Standard_D14_v2, Standard_G1, Standard_G2, Standard_G3, Standard_G4, Standard_G5, Standard_DS1, Standard_DS2, Standard_DS3, Standard_DS4, Standard_DS11, Standard_DS12, Standard_DS13, Standard_DS14, Standard_GS1, Standard_GS2, Standard_GS3, Standard_GS4, Standard_GS5): Size of agent VMs.

### ContainerServiceCustomProfile
* ContainerServiceCustomProfile `object`: Properties to configure a custom container service cluster.
  * orchestrator **required** `string`: The name of the custom orchestrator to use.

### ContainerServiceDiagnosticsProfile
* ContainerServiceDiagnosticsProfile `object`
  * vmDiagnostics **required** [ContainerServiceVMDiagnostics](#containerservicevmdiagnostics)

### ContainerServiceLinuxProfile
* ContainerServiceLinuxProfile `object`: Profile for Linux VMs in the container service cluster.
  * adminUsername **required** `string`: The administrator username to use for Linux VMs.
  * ssh **required** [ContainerServiceSshConfiguration](#containerservicesshconfiguration)

### ContainerServiceListResult
* ContainerServiceListResult `object`: The response from the List Container Services operation.
  * nextLink `string`: The URL to get the next set of container service results.
  * value `array`: the list of container services.
    * items [ContainerService](#containerservice)

### ContainerServiceMasterProfile
* ContainerServiceMasterProfile `object`: Profile for the container service master.
  * count `integer` (values: 1, 3, 5): Number of masters (VMs) in the container service cluster. Allowed values are 1, 3, and 5. The default value is 1.
  * dnsPrefix **required** `string`: DNS prefix to be used to create the FQDN for master.
  * fqdn `string`: FQDN for the master.

### ContainerServiceOrchestratorProfile
* ContainerServiceOrchestratorProfile `object`: Profile for the container service orchestrator.
  * orchestratorType **required** `string` (values: Swarm, DCOS, Custom, Kubernetes): The orchestrator to use to manage container service cluster resources. Valid values are Swarm, DCOS, and Custom.

### ContainerServiceProperties
* ContainerServiceProperties `object`: Properties of the container service.
  * agentPoolProfiles **required** `array`: Properties of the agent pool.
    * items [ContainerServiceAgentPoolProfile](#containerserviceagentpoolprofile)
  * customProfile [ContainerServiceCustomProfile](#containerservicecustomprofile)
  * diagnosticsProfile [ContainerServiceDiagnosticsProfile](#containerservicediagnosticsprofile)
  * linuxProfile **required** [ContainerServiceLinuxProfile](#containerservicelinuxprofile)
  * masterProfile **required** [ContainerServiceMasterProfile](#containerservicemasterprofile)
  * orchestratorProfile [ContainerServiceOrchestratorProfile](#containerserviceorchestratorprofile)
  * provisioningState `string`: the current deployment or provisioning state, which only appears in the response.
  * servicePrincipalProfile [ContainerServiceServicePrincipalProfile](#containerserviceserviceprincipalprofile)
  * windowsProfile [ContainerServiceWindowsProfile](#containerservicewindowsprofile)

### ContainerServiceServicePrincipalProfile
* ContainerServiceServicePrincipalProfile `object`: Information about a service principal identity for the cluster to use for manipulating Azure APIs.
  * clientId **required** `string`: The ID for the service principal.
  * secret **required** `string`: The secret password associated with the service principal.

### ContainerServiceSshConfiguration
* ContainerServiceSshConfiguration `object`: SSH configuration for Linux-based VMs running on Azure.
  * publicKeys **required** `array`: the list of SSH public keys used to authenticate with Linux-based VMs.
    * items [ContainerServiceSshPublicKey](#containerservicesshpublickey)

### ContainerServiceSshPublicKey
* ContainerServiceSshPublicKey `object`: Contains information about SSH certificate public key data.
  * keyData **required** `string`: Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.

### ContainerServiceVMDiagnostics
* ContainerServiceVMDiagnostics `object`: Profile for diagnostics on the container service VMs.
  * enabled **required** `boolean`: Whether the VM diagnostic agent is provisioned on the VM.
  * storageUri `string`: The URI of the storage account where diagnostics are stored.

### ContainerServiceWindowsProfile
* ContainerServiceWindowsProfile `object`: Profile for Windows VMs in the container service cluster.
  * adminPassword **required** `string`: The administrator password to use for Windows VMs.
  * adminUsername **required** `string`: The administrator username to use for Windows VMs.

### Resource
* Resource `object`: The Resource model definition.
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type


