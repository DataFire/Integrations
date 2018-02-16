# @datafire/azure_machinelearningcompute_machinelearningcompute

Client library for Machine Learning Compute Management Client

## Installation and Usage
```bash
npm install --save @datafire/azure_machinelearningcompute_machinelearningcompute
```
```js
let azure_machinelearningcompute_machinelearningcompute = require('@datafire/azure_machinelearningcompute_machinelearningcompute').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_machinelearningcompute_machinelearningcompute.MachineLearningCompute_ListAvailableOperations({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

These APIs allow end users to operate on Azure Machine Learning Compute resources. They support the following operations:<ul><li>Create or update a cluster</li><li>Get a cluster</li><li>Patch a cluster</li><li>Delete a cluster</li><li>Get keys for a cluster</li><li>Check if updates are available for system services in a cluster</li><li>Update system services in a cluster</li><li>Get all clusters in a resource group</li><li>Get all clusters in a subscription</li></ul>

## Actions

### MachineLearningCompute_ListAvailableOperations
Gets all available operations.


```js
azure_machinelearningcompute_machinelearningcompute.MachineLearningCompute_ListAvailableOperations({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the Microsoft.MachineLearningCompute resource provider API to use.

#### Output
* output [AvailableOperations](#availableoperations)

### OperationalizationClusters_ListBySubscriptionId
Gets the operationalization clusters in the specified subscription.


```js
azure_machinelearningcompute_machinelearningcompute.OperationalizationClusters_ListBySubscriptionId({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the Microsoft.MachineLearningCompute resource provider API to use.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * $skiptoken `string`: Continuation token for pagination.

#### Output
* output [PaginatedOperationalizationClustersList](#paginatedoperationalizationclusterslist)

### OperationalizationClusters_ListByResourceGroup
Gets the clusters in the specified resource group.


```js
azure_machinelearningcompute_machinelearningcompute.OperationalizationClusters_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the Microsoft.MachineLearningCompute resource provider API to use.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceGroupName **required** `string`: Name of the resource group in which the cluster is located.
  * $skiptoken `string`: Continuation token for pagination.

#### Output
* output [PaginatedOperationalizationClustersList](#paginatedoperationalizationclusterslist)

### OperationalizationClusters_Delete
Deletes the specified cluster.


```js
azure_machinelearningcompute_machinelearningcompute.OperationalizationClusters_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the Microsoft.MachineLearningCompute resource provider API to use.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceGroupName **required** `string`: Name of the resource group in which the cluster is located.
  * clusterName **required** `string`: The name of the cluster.
  * deleteAll `boolean`: If true, deletes all resources associated with this cluster.

#### Output
*Output schema unknown*

### OperationalizationClusters_Get
Gets the operationalization cluster resource view. Note that the credentials are not returned by this call. Call ListKeys to get them.


```js
azure_machinelearningcompute_machinelearningcompute.OperationalizationClusters_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the Microsoft.MachineLearningCompute resource provider API to use.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceGroupName **required** `string`: Name of the resource group in which the cluster is located.
  * clusterName **required** `string`: The name of the cluster.

#### Output
* output [OperationalizationCluster](#operationalizationcluster)

### OperationalizationClusters_Update
The PATCH operation can be used to update only the tags for a cluster. Use PUT operation to update other properties.


```js
azure_machinelearningcompute_machinelearningcompute.OperationalizationClusters_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the Microsoft.MachineLearningCompute resource provider API to use.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceGroupName **required** `string`: Name of the resource group in which the cluster is located.
  * clusterName **required** `string`: The name of the cluster.
  * parameters **required** [OperationalizationClusterUpdateParameters](#operationalizationclusterupdateparameters)

#### Output
* output [OperationalizationCluster](#operationalizationcluster)

### OperationalizationClusters_CreateOrUpdate
Create or update an operationalization cluster.


```js
azure_machinelearningcompute_machinelearningcompute.OperationalizationClusters_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the Microsoft.MachineLearningCompute resource provider API to use.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceGroupName **required** `string`: Name of the resource group in which the cluster is located.
  * clusterName **required** `string`: The name of the cluster.
  * parameters **required** [OperationalizationCluster](#operationalizationcluster)

#### Output
* output [OperationalizationCluster](#operationalizationcluster)

### OperationalizationClusters_CheckSystemServicesUpdatesAvailable
Checks if updates are available for system services in the cluster.


```js
azure_machinelearningcompute_machinelearningcompute.OperationalizationClusters_CheckSystemServicesUpdatesAvailable({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the Microsoft.MachineLearningCompute resource provider API to use.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceGroupName **required** `string`: Name of the resource group in which the cluster is located.
  * clusterName **required** `string`: The name of the cluster.

#### Output
* output [CheckSystemServicesUpdatesAvailableResponse](#checksystemservicesupdatesavailableresponse)

### OperationalizationClusters_ListKeys
Gets the credentials for the specified cluster such as Storage, ACR and ACS credentials. This is a long running operation because it fetches keys from dependencies.


```js
azure_machinelearningcompute_machinelearningcompute.OperationalizationClusters_ListKeys({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the Microsoft.MachineLearningCompute resource provider API to use.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceGroupName **required** `string`: Name of the resource group in which the cluster is located.
  * clusterName **required** `string`: The name of the cluster.

#### Output
* output [OperationalizationClusterCredentials](#operationalizationclustercredentials)

### OperationalizationClusters_UpdateSystemServices
Updates system services in a cluster.


```js
azure_machinelearningcompute_machinelearningcompute.OperationalizationClusters_UpdateSystemServices({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the Microsoft.MachineLearningCompute resource provider API to use.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceGroupName **required** `string`: Name of the resource group in which the cluster is located.
  * clusterName **required** `string`: The name of the cluster.

#### Output
* output [UpdateSystemServicesResponse](#updatesystemservicesresponse)



## Definitions

### AcsClusterProperties
* AcsClusterProperties `object`: Information about the container service backing the cluster
  * agentCount `integer`: The number of agent nodes in the Container Service. This can be changed to scale the cluster.
  * agentVmSize `string` (values: Standard_A0, Standard_A1, Standard_A2, Standard_A3, Standard_A4, Standard_A5, Standard_A6, Standard_A7, Standard_A8, Standard_A9, Standard_A10, Standard_A11, Standard_D1, Standard_D2, Standard_D3, Standard_D4, Standard_D11, Standard_D12, Standard_D13, Standard_D14, Standard_D1_v2, Standard_D2_v2, Standard_D3_v2, Standard_D4_v2, Standard_D5_v2, Standard_D11_v2, Standard_D12_v2, Standard_D13_v2, Standard_D14_v2, Standard_G1, Standard_G2, Standard_G3, Standard_G4, Standard_G5, Standard_DS1, Standard_DS2, Standard_DS3, Standard_DS4, Standard_DS11, Standard_DS12, Standard_DS13, Standard_DS14, Standard_GS1, Standard_GS2, Standard_GS3, Standard_GS4, Standard_GS5): The Azure VM size of the agent VM nodes. This cannot be changed once the cluster is created. This list is non exhaustive; refer to https://docs.microsoft.com/en-us/azure/virtual-machines/windows/sizes for the possible VM sizes.
  * clusterFqdn `string`: The FQDN of the cluster. 
  * masterCount `integer`: The number of master nodes in the container service.
  * orchestratorProperties [KubernetesClusterProperties](#kubernetesclusterproperties)
  * orchestratorType **required** `string` (values: Kubernetes, None): Type of orchestrator. It cannot be changed once the cluster is created.
  * systemServices `array`: The system services deployed to the cluster
    * items [SystemService](#systemservice)

### AppInsightsCredentials
* AppInsightsCredentials `object`: AppInsights credentials.
  * appId `string`: The AppInsights application ID.
  * instrumentationKey `string`: The AppInsights instrumentation key. This is not returned in response of GET/PUT on the resource. To see this please call listKeys API.

### AppInsightsProperties
* AppInsightsProperties `object`: Properties of App Insights.
  * resourceId `string`: ARM resource ID of the App Insights.

### AutoScaleConfiguration
* AutoScaleConfiguration `object`: AutoScale configuration properties.
  * maxReplicas `integer`: The maximum number of replicas for each service.
  * minReplicas `integer`: The minimum number of replicas for each service.
  * refreshPeriodInSeconds `integer`: Refresh period in seconds.
  * status `string` (values: Enabled, Disabled): If auto-scale is enabled for all services. Each service can turn it off individually.
  * targetUtilization `number`: The target utilization.

### AvailableOperations
* AvailableOperations `object`: Available operation list.
  * value `array`: An array of available operations.
    * items [ResourceOperation](#resourceoperation)

### CheckSystemServicesUpdatesAvailableResponse
* CheckSystemServicesUpdatesAvailableResponse `object`: Information about updates available for system services in a cluster.
  * updatesAvailable `string` (values: Yes, No): Yes if updates are available for the system services, No if not.

### ContainerRegistryCredentials
* ContainerRegistryCredentials `object`: Information about the Azure Container Registry which contains the images deployed to the cluster.
  * loginServer `string`: The ACR login server name. User name is the first part of the FQDN.
  * password `string`: The ACR primary password.
  * password2 `string`: The ACR secondary password.
  * username `string`: The ACR login username.

### ContainerRegistryProperties
* ContainerRegistryProperties `object`: Properties of Azure Container Registry.
  * resourceId `string`: ARM resource ID of the Azure Container Registry used to store Docker images for web services in the cluster. If not provided one will be created. This cannot be changed once the cluster is created.

### ContainerServiceCredentials
* ContainerServiceCredentials `object`: Information about the Azure Container Registry which contains the images deployed to the cluster.
  * acsKubeConfig `string`: The ACS kube config file.
  * imagePullSecretName `string`: The ACR image pull secret name which was created in Kubernetes.
  * servicePrincipalConfiguration [ServicePrincipalProperties](#serviceprincipalproperties)

### ErrorDetail
* ErrorDetail `object`: Error detail information.
  * code **required** `string`: Error code.
  * message **required** `string`: Error message.

### ErrorResponse
* ErrorResponse `object`: Error response information.
  * code **required** `string`: Error code.
  * details `array`: An array of error detail objects.
    * items [ErrorDetail](#errordetail)
  * message **required** `string`: Error message.

### ErrorResponseWrapper
* ErrorResponseWrapper `object`: Wrapper for error response to follow ARM guidelines.
  * error [ErrorResponse](#errorresponse)

### GlobalServiceConfiguration
* GlobalServiceConfiguration `object`: Global configuration for services in the cluster.
  * autoScale [AutoScaleConfiguration](#autoscaleconfiguration)
  * etag `string`: The configuartion ETag for updates.
  * serviceAuth [ServiceAuthConfiguration](#serviceauthconfiguration)
  * ssl [SslConfiguration](#sslconfiguration)

### KubernetesClusterProperties
* KubernetesClusterProperties `object`: Kubernetes cluster specific properties
  * servicePrincipal [ServicePrincipalProperties](#serviceprincipalproperties)

### OperationalizationCluster
* OperationalizationCluster `object`: Instance of an Azure ML Operationalization Cluster resource.
  * properties [OperationalizationClusterProperties](#operationalizationclusterproperties)
  * id `string`: Specifies the resource ID.
  * location **required** `string`: Specifies the location of the resource.
  * name `string`: Specifies the name of the resource.
  * tags `object`: Contains resource tags defined as key/value pairs.
  * type `string`: Specifies the type of the resource.

### OperationalizationClusterCredentials
* OperationalizationClusterCredentials `object`: Credentials to resources in the cluster.
  * appInsights [AppInsightsCredentials](#appinsightscredentials)
  * containerRegistry [ContainerRegistryCredentials](#containerregistrycredentials)
  * containerService [ContainerServiceCredentials](#containerservicecredentials)
  * serviceAuthConfiguration [ServiceAuthConfiguration](#serviceauthconfiguration)
  * sslConfiguration [SslConfiguration](#sslconfiguration)
  * storageAccount [StorageAccountCredentials](#storageaccountcredentials)

### OperationalizationClusterProperties
* OperationalizationClusterProperties `object`: Properties of an operationalization cluster
  * appInsights [AppInsightsProperties](#appinsightsproperties)
  * clusterType **required** `string` (values: ACS, Local): The cluster type.
  * containerRegistry [ContainerRegistryProperties](#containerregistryproperties)
  * containerService [AcsClusterProperties](#acsclusterproperties)
  * createdOn `string`: The date and time when the cluster was created.
  * description `string`: The description of the cluster.
  * globalServiceConfiguration [GlobalServiceConfiguration](#globalserviceconfiguration)
  * modifiedOn `string`: The date and time when the cluster was last modified.
  * provisioningErrors `array`: List of provisioning errors reported by the resource provider.
    * items [ErrorResponseWrapper](#errorresponsewrapper)
  * provisioningState `string` (values: Unknown, Updating, Creating, Deleting, Succeeded, Failed, Canceled): The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
  * storageAccount [StorageAccountProperties](#storageaccountproperties)

### OperationalizationClusterUpdateParameters
* OperationalizationClusterUpdateParameters `object`: Parameters for PATCH operation on an operationalization cluster
  * tags `object`: Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater in length than 128 characters and a value no greater in length than 256 characters.

### PaginatedOperationalizationClustersList
* PaginatedOperationalizationClustersList `object`: Paginated list of operationalization clusters.
  * nextLink `string`: A continuation link (absolute URI) to the next page of results in the list.
  * value `array`: An array of cluster objects.
    * items [OperationalizationCluster](#operationalizationcluster)

### Resource
* Resource `object`: Azure resource
  * id `string`: Specifies the resource ID.
  * location **required** `string`: Specifies the location of the resource.
  * name `string`: Specifies the name of the resource.
  * tags `object`: Contains resource tags defined as key/value pairs.
  * type `string`: Specifies the type of the resource.

### ResourceOperation
* ResourceOperation `object`: Resource operation.
  * display `object`: Display of the operation.
    * description `string`: The description of the operation.
    * operation `string`: The operation.
    * provider `string`: The resource provider name.
    * resource `string`: The resource name.
  * name `string`: Name of this operation.
  * origin `string`: The operation origin.

### ServiceAuthConfiguration
* ServiceAuthConfiguration `object`: Global service auth configuration properties. These are the data-plane authorization keys and are used if a service doesn't define it's own.
  * primaryAuthKeyHash **required** `string`: The primary auth key hash. This is not returned in response of GET/PUT on the resource.. To see this please call listKeys API.
  * secondaryAuthKeyHash **required** `string`: The secondary auth key hash. This is not returned in response of GET/PUT on the resource.. To see this please call listKeys API.

### ServicePrincipalProperties
* ServicePrincipalProperties `object`: The Azure service principal used by Kubernetes for configuring load balancers
  * clientId **required** `string`: The service principal client ID
  * secret **required** `string`: The service principal secret. This is not returned in response of GET/PUT on the resource. To see this please call listKeys.

### SslConfiguration
* SslConfiguration `object`: SSL configuration. If configured data-plane calls to user services will be exposed over SSL only.
  * cert `string`: The SSL cert data in PEM format.
  * cname `string`: The CName of the certificate.
  * key `string`: The SSL key data in PEM format. This is not returned in response of GET/PUT on the resource. To see this please call listKeys API.
  * status `string` (values: Enabled, Disabled): SSL status. Allowed values are Enabled and Disabled.

### StorageAccountCredentials
* StorageAccountCredentials `object`: Access information for the storage account.
  * primaryKey `string`: The primary key of the storage account.
  * resourceId `string`: The ARM resource ID of the storage account.
  * secondaryKey `string`: The secondary key of the storage account.

### StorageAccountProperties
* StorageAccountProperties `object`: Properties of Storage Account.
  * resourceId `string`: ARM resource ID of the Azure Storage Account to store CLI specific files. If not provided one will be created. This cannot be changed once the cluster is created.

### SystemService
* SystemService `object`: Information about a system service deployed in the cluster
  * publicIpAddress `string`: The public IP address of the system service
  * systemServiceType **required** `string` (values: None, ScoringFrontEnd, BatchFrontEnd): The system service type
  * version `string`: The state of the system service

### UpdateSystemServicesResponse
* UpdateSystemServicesResponse `object`: Response of the update system services API
  * updateCompletedOn `string`: The date and time when the last system services update completed.
  * updateStartedOn `string`: The date and time when the last system services update was started.
  * updateStatus `string` (values: Unknown, Updating, Creating, Deleting, Succeeded, Failed, Canceled): Update status


