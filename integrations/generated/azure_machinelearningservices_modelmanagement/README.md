# @datafire/azure_machinelearningservices_modelmanagement

Client library for Azure Machine Learning Model Management Service

## Installation and Usage
```bash
npm install --save @datafire/azure_machinelearningservices_modelmanagement
```
```js
let azure_machinelearningservices_modelmanagement = require('@datafire/azure_machinelearningservices_modelmanagement').create({
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

These APIs allow end users to manage Azure Machine Learning Models, Images, Profiles, and Services.

## Actions

### Assets_ListQuery
If no filter is passed, the query lists all the Assets in the given workspace. The returned list is paginated and the count of items in each page is an optional parameter.


```js
azure_machinelearningservices_modelmanagement.Assets_ListQuery({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * runId `string`: The run Id associated with the Assets.
  * name `string`: The object name.
  * count `integer`: The number of items to retrieve in a page.
  * $skipToken `string`: The continuation token to retrieve the next page.
  * tags `string`: A set of tags with which to filter the returned models.
  * properties `string`: A set of properties with which to filter the returned models.
  * orderby `string` (values: CreatedAtDesc, CreatedAtAsc, UpdatedAtDesc, UpdatedAtAsc): An option for specifying how to order the list.

#### Output
* output [PaginatedAssetList](#paginatedassetlist)

### Assets_Create
Create an Asset from the provided payload.


```js
azure_machinelearningservices_modelmanagement.Assets_Create({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * asset [Asset](#asset)

#### Output
* output [Asset](#asset)

### Assets_Delete
Delete the specified Asset.


```js
azure_machinelearningservices_modelmanagement.Assets_Delete({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * id **required** `string`: The Id of the Asset to delete.

#### Output
*Output schema unknown*

### Assets_QueryById
Get an Asset by Id.


```js
azure_machinelearningservices_modelmanagement.Assets_QueryById({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * id **required** `string`: The Asset Id.

#### Output
* output [Asset](#asset)

### Assets_Patch
Patch a specific Asset.


```js
azure_machinelearningservices_modelmanagement.Assets_Patch({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": "",
  "id": "",
  "patch": []
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * id **required** `string`: The Id of the Asset to patch.
  * patch **required** `array`
    * items [JsonPatchOperation](#jsonpatchoperation)

#### Output
* output [Asset](#asset)

### Profiles_ListQuery
If no filter is passed, the query lists all Profiles for the Image. The returned list is paginated and the count of items in each page is an optional parameter.


```js
azure_machinelearningservices_modelmanagement.Profiles_ListQuery({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": "",
  "imageId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * imageId **required** `string`: The Image Id.
  * name `string`: The Profile name.
  * description `string`: The Profile description.
  * tags `string`: A set of tags with which to filter the returned models.
  * properties `string`: A set of properties with which to filter the returned models.
  * count `integer`: The number of items to retrieve in a page.
  * $skipToken `string`: The continuation token to retrieve the next page.
  * orderBy `string` (values: CreatedAtDesc, CreatedAtAsc, UpdatedAtDesc, UpdatedAtAsc): The option to order the response.

#### Output
* output [PaginatedProfileResponseList](#paginatedprofileresponselist)

### Profiles_Create
Create a Profile for an Image.


```js
azure_machinelearningservices_modelmanagement.Profiles_Create({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": "",
  "imageId": "",
  "inputRequest": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * imageId **required** `string`: The Image Id.
  * inputRequest **required** [ProfileRequestBase](#profilerequestbase)

#### Output
*Output schema unknown*

### Profiles_QueryById
Get the Profile for an Image.


```js
azure_machinelearningservices_modelmanagement.Profiles_QueryById({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": "",
  "imageId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * imageId **required** `string`: The Image Id.
  * id **required** `string`: The Profile Id.

#### Output
* output [ProfileResponse](#profileresponse)

### MLModels_ListQuery
The result list can be filtered using tag and name. If no filter is passed, the query lists all the Models in the given workspace. The returned list is paginated and the count of items in each page is an optional parameter.


```js
azure_machinelearningservices_modelmanagement.MLModels_ListQuery({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * name `string`: The object name.
  * framework `string`: The framework.
  * description `string`: The object description.
  * count `integer`: The number of items to retrieve in a page.
  * $skipToken `string`: The continuation token to retrieve the next page.
  * tags `string`: A set of tags with which to filter the returned models.
  * properties `string`: A set of properties with which to filter the returned models.
  * runId `string`: The runId which created the model.
  * orderBy `string` (values: CreatedAtDesc, CreatedAtAsc, UpdatedAtDesc, UpdatedAtAsc): An option to specify how the models are ordered in the response.

#### Output
* output [PaginatedModelList](#paginatedmodellist)

### MLModels_Register
Register the model provided.


```js
azure_machinelearningservices_modelmanagement.MLModels_Register({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": "",
  "model": {
    "name": "",
    "url": "",
    "mimeType": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * model **required** [Model](#model)

#### Output
* output [Model](#model)

### MLModels_Delete
Deletes a model if it exists.


```js
azure_machinelearningservices_modelmanagement.MLModels_Delete({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * id **required** `string`: The model id.

#### Output
*Output schema unknown*

### MLModels_QueryById
Gets a model by model id.


```js
azure_machinelearningservices_modelmanagement.MLModels_QueryById({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * id **required** `string`: The model id.

#### Output
* output [Model](#model)

### MLModels_Patch
Updates an existing model with the specified patch.


```js
azure_machinelearningservices_modelmanagement.MLModels_Patch({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": "",
  "id": "",
  "patch": []
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * id **required** `string`: The model id.
  * patch **required** `array`
    * items [JsonPatchOperation](#jsonpatchoperation)

#### Output
* output [Model](#model)

### MLModels_GetMetrics
The operational events collected for the Model are returned.


```js
azure_machinelearningservices_modelmanagement.MLModels_GetMetrics({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * id **required** `string`: The Model Id.
  * startDate `string`: The start date from which to retrieve metrics, ISO 8601 literal format.
  * endDate `string`: The end date from which to retrieve metrics, ISO 8601 literal format.

#### Output
* output [ModelOperationalState](#modeloperationalstate)

### Operations_Get
Get the status of an async operation by operation id.


```js
azure_machinelearningservices_modelmanagement.Operations_Get({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * id **required** `string`: The operation id.

#### Output
* output [AsyncOperationStatus](#asyncoperationstatus)

### Services_ListQuery
If no filter is passed, the query lists all Services in the Workspace. The returned list is paginated and the count of item in each page is an optional parameter.


```js
azure_machinelearningservices_modelmanagement.Services_ListQuery({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * imageId `string`: The Image Id.
  * imageName `string`: The Image name.
  * modelId `string`: The Model Id.
  * modelName `string`: The Model name.
  * name `string`: The object name.
  * count `integer`: The number of items to retrieve in a page.
  * computeType `string`: The compute environment type.
  * $skipToken `string`: The continuation token to retrieve the next page.
  * tags `string`: A set of tags with which to filter the returned models.
  * properties `string`: A set of properties with which to filter the returned models.
  * expand `boolean`: Set to True to include Model details.
  * orderby `string` (values: CreatedAtDesc, CreatedAtAsc, UpdatedAtDesc, UpdatedAtAsc): The option to order the response.

#### Output
* output [PaginatedServiceList](#paginatedservicelist)

### Services_Create
Create a Service with the specified payload.


```js
azure_machinelearningservices_modelmanagement.Services_Create({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": "",
  "request": {
    "name": "",
    "computeType": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * request **required** [CreateServiceRequest](#createservicerequest)

#### Output
*Output schema unknown*

### Services_Delete
Delete a specific Service.


```js
azure_machinelearningservices_modelmanagement.Services_Delete({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * id **required** `string`: The Service Id.

#### Output
*Output schema unknown*

### Services_QueryById
Get a Service by Id.


```js
azure_machinelearningservices_modelmanagement.Services_QueryById({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * id **required** `string`: The Service Id.
  * expand `boolean`: Set to True to include Model details.

#### Output
* output [ServiceResponseBase](#serviceresponsebase)

### Services_Patch
Patch a specific Service.


```js
azure_machinelearningservices_modelmanagement.Services_Patch({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": "",
  "id": "",
  "patch": []
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * id **required** `string`: The Service Id.
  * patch **required** `array`
    * items [JsonPatchOperation](#jsonpatchoperation)

#### Output
*Output schema unknown*

### Services_ListServiceKeys
Gets a list of Service keys.


```js
azure_machinelearningservices_modelmanagement.Services_ListServiceKeys({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * id **required** `string`: The Service Id.

#### Output
* output [AuthKeys](#authkeys)

### Services_RegenerateServiceKeys
Regenerate and return the Service keys.


```js
azure_machinelearningservices_modelmanagement.Services_RegenerateServiceKeys({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": "",
  "id": "",
  "request": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * id **required** `string`: The Service Id.
  * request **required** [RegenerateServiceKeysRequest](#regenerateservicekeysrequest)

#### Output
* output [AuthKeys](#authkeys)

### Services_GetServiceToken
Gets access token that can be used for calling service.


```js
azure_machinelearningservices_modelmanagement.Services_GetServiceToken({
  "subscriptionId": "",
  "resourceGroup": "",
  "workspace": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroup **required** `string`: The Name of the resource group in which the workspace is located.
  * workspace **required** `string`: The name of the workspace.
  * id **required** `string`: The Service Id.

#### Output
* output [AuthToken](#authtoken)



## Definitions

### ACIServiceCreateRequest
* ACIServiceCreateRequest `object`
  * computeType **required** `string` (values: ACI, AKS, AMLCOMPUTE, IOT, AKSENDPOINT, UNKNOWN): The compute environment type for the service.
  * deploymentType `string` (values: GRPCRealtimeEndpoint, HttpRealtimeEndpoint, Batch): The deployment type for the service.
  * description `string`: The description of the service.
  * environmentImageRequest [EnvironmentImageRequest](#environmentimagerequest)
  * imageId `string`: The Image Id.
  * keys [AuthKeys](#authkeys)
  * kvTags `object`: The service tag dictionary. Tags are mutable.
  * location `string`: The location of the service.
  * name **required** `string`: The service name.
  * properties `object`: The service properties dictionary. Properties are immutable.
  * appInsightsEnabled `boolean`: Whether or not Application Insights is enabled.
  * authEnabled `boolean`: Whether or not authentication is enabled on the service.
  * cname `string`: The CName for the service.
  * containerResourceRequirements [ContainerResourceRequirements](#containerresourcerequirements)
  * dataCollection [ModelDataCollection](#modeldatacollection)
  * dnsNameLabel `string`: The Dns label for the service.
  * sslCertificate `string`: The SSL certificate to use if SSL is enabled.
  * sslEnabled `boolean`: Whether or not SSL is enabled.
  * sslKey `string`: The SSL key for the certificate.

### ACIServiceResponse
* ACIServiceResponse `object`: The response for an ACI service.
  * computeType **required** `string` (values: ACI, AKS, AMLCOMPUTE, IOT, AKSENDPOINT, UNKNOWN): The compute environment type for the service.
  * createdTime `string`: The time the service was created.
  * deploymentType `string` (values: GRPCRealtimeEndpoint, HttpRealtimeEndpoint, Batch): The deployment type for the service.
  * description `string`: The service description.
  * error [ModelErrorResponse](#modelerrorresponse)
  * id `string`: The service Id.
  * kvTags `object`: The service tag dictionary. Tags are mutable.
  * name `string`: The service name.
  * operationId `string`: The ID of the latest asynchronous operation for this service.
  * properties `object`: The service property dictionary. Properties are immutable.
  * state `string` (values: Transitioning, Healthy, Unhealthy, Failed): The current state of the service.
  * updatedTime `string`: The time the service was updated.
  * appInsightsEnabled `boolean`: Whether or not Application Insights is enabled.
  * authEnabled `boolean`: Whether or not authentication is enabled on the service.
  * cname `string`: The CName for the service.
  * containerResourceRequirements [ContainerResourceRequirements](#containerresourcerequirements)
  * dataCollection [ModelDataCollection](#modeldatacollection)
  * environment [ModelEnvironmentDefinition](#modelenvironmentdefinition)
  * imageDetails [DockerImageResponse](#dockerimageresponse)
  * imageId `string`: The Id of the Image.
  * location `string`: The location of the service.
  * modelConfigMap `object`: Details on the models and configurations.
  * models `array`: The list of models.
    * items [Model](#model)
  * publicFqdn `string`: The public Fqdn for the service.
  * publicIp `string`: The public IP address for the service.
  * scoringUri `string`: The Uri for sending scoring requests.
  * sslCertificate `string`: The SSL certificate to use if SSL is enabled.
  * sslEnabled `boolean`: Whether or not SSL is enabled.
  * sslKey `string`: The SSL key for the certificate.
  * swaggerUri `string`: The Uri for sending swagger requests.

### AKSEndpointResponse
* AKSEndpointResponse `object`: The response for an AKS Endpoint.
  * computeType **required** `string` (values: ACI, AKS, AMLCOMPUTE, IOT, AKSENDPOINT, UNKNOWN): The compute environment type for the service.
  * createdTime `string`: The time the service was created.
  * deploymentType `string` (values: GRPCRealtimeEndpoint, HttpRealtimeEndpoint, Batch): The deployment type for the service.
  * description `string`: The service description.
  * error [ModelErrorResponse](#modelerrorresponse)
  * id `string`: The service Id.
  * kvTags `object`: The service tag dictionary. Tags are mutable.
  * name `string`: The service name.
  * operationId `string`: The ID of the latest asynchronous operation for this service.
  * properties `object`: The service property dictionary. Properties are immutable.
  * state `string` (values: Transitioning, Healthy, Unhealthy, Failed): The current state of the service.
  * updatedTime `string`: The time the service was updated.
  * aadAuthEnabled `boolean`: Whether or not AAD authentication is enabled.
  * appInsightsEnabled `boolean`: Whether or not Application Insights is enabled.
  * authEnabled `boolean`: Whether or not authentication is enabled.
  * computeName `string`: The name of the compute resource.
  * namespace `string`: The Kubernetes namespace of the deployment.
  * scoringUri `string`: The Uri for sending scoring requests.
  * swaggerUri `string`: The Uri for sending swagger requests.
  * variants `array`: All the variants that belongs to this endpoint.
    * items [AKSServiceResponse](#aksserviceresponse)

### AKSReplicaStatus
* AKSReplicaStatus `object`
  * availableReplicas `integer`: The number of available replicas.
  * desiredReplicas `integer`: The desired number of replicas.
  * error [ModelErrorResponse](#modelerrorresponse)
  * updatedReplicas `integer`: The number of updated replicas.

### AKSServiceCreateRequest
* AKSServiceCreateRequest `object`: The request to create an AKS service.
  * computeType **required** `string` (values: ACI, AKS, AMLCOMPUTE, IOT, AKSENDPOINT, UNKNOWN): The compute environment type for the service.
  * deploymentType `string` (values: GRPCRealtimeEndpoint, HttpRealtimeEndpoint, Batch): The deployment type for the service.
  * description `string`: The description of the service.
  * environmentImageRequest [EnvironmentImageRequest](#environmentimagerequest)
  * imageId `string`: The Image Id.
  * keys [AuthKeys](#authkeys)
  * kvTags `object`: The service tag dictionary. Tags are mutable.
  * location `string`: The location of the service.
  * name **required** `string`: The service name.
  * properties `object`: The service properties dictionary. Properties are immutable.
  * isDefault `boolean`: Is this the default variant.
  * trafficPercentile `number`: The amount of traffic variant receives.
  * type `string` (values: Control, Treatment): The type of the variant.
  * aadAuthEnabled `boolean`: Whether or not AAD authentication is enabled.
  * appInsightsEnabled `boolean`: Whether or not Application Insights is enabled.
  * authEnabled `boolean`: Whether or not authentication is enabled.
  * autoScaler [AutoScaler](#autoscaler)
  * computeName `string`: The name of the compute resource.
  * containerResourceRequirements [ContainerResourceRequirements](#containerresourcerequirements)
  * dataCollection [ModelDataCollection](#modeldatacollection)
  * livenessProbeRequirements [LivenessProbeRequirements](#livenessproberequirements)
  * maxConcurrentRequestsPerContainer `integer`: The maximum number of concurrent requests per container.
  * maxQueueWaitMs `integer`: Maximum time a request will wait in the queue (in milliseconds). After this time, the service will return 503 (Service Unavailable)
  * namespace `string`: Kubernetes namespace for the service.
  * numReplicas `integer`: The number of replicas on the cluster.
  * scoringTimeoutMs `integer`: The scoring timeout in milliseconds.

### AKSServiceResponse
* AKSServiceResponse `object`: The response for an AKS service.
  * computeType **required** `string` (values: ACI, AKS, AMLCOMPUTE, IOT, AKSENDPOINT, UNKNOWN): The compute environment type for the service.
  * createdTime `string`: The time the service was created.
  * deploymentType `string` (values: GRPCRealtimeEndpoint, HttpRealtimeEndpoint, Batch): The deployment type for the service.
  * description `string`: The service description.
  * error [ModelErrorResponse](#modelerrorresponse)
  * id `string`: The service Id.
  * kvTags `object`: The service tag dictionary. Tags are mutable.
  * name `string`: The service name.
  * operationId `string`: The ID of the latest asynchronous operation for this service.
  * properties `object`: The service property dictionary. Properties are immutable.
  * state `string` (values: Transitioning, Healthy, Unhealthy, Failed): The current state of the service.
  * updatedTime `string`: The time the service was updated.
  * isDefault `boolean`: Is this the default variant.
  * trafficPercentile `number`: The amount of traffic variant receives.
  * type `string` (values: Control, Treatment): The type of the variant.
  * aadAuthEnabled `boolean`: Whether or not AAD authentication is enabled.
  * appInsightsEnabled `boolean`: Whether or not Application Insights is enabled.
  * authEnabled `boolean`: Whether or not authentication is enabled.
  * autoScaler [AutoScaler](#autoscaler)
  * computeName `string`: The name of the compute resource.
  * containerResourceRequirements [ContainerResourceRequirements](#containerresourcerequirements)
  * dataCollection [ModelDataCollection](#modeldatacollection)
  * deploymentStatus [AKSReplicaStatus](#aksreplicastatus)
  * environment [ModelEnvironmentDefinition](#modelenvironmentdefinition)
  * imageDetails [ImageResponseBase](#imageresponsebase)
  * imageId `string`: The Id of the Image.
  * livenessProbeRequirements [LivenessProbeRequirements](#livenessproberequirements)
  * maxConcurrentRequestsPerContainer `integer`: The maximum number of concurrent requests per container.
  * maxQueueWaitMs `integer`: Maximum time a request will wait in the queue (in milliseconds). After this time, the service will return 503 (Service Unavailable)
  * modelConfigMap `object`: Details on the models and configurations.
  * models `array`: The list of models.
    * items [Model](#model)
  * namespace `string`: The Kubernetes namespace of the deployment.
  * numReplicas `integer`: The number of replicas on the cluster.
  * scoringTimeoutMs `integer`: The scoring timeout in milliseconds.
  * scoringUri `string`: The Uri for sending scoring requests.
  * swaggerUri `string`: The Uri for sending swagger requests.

### AKSVariantResponse
* AKSVariantResponse `object`: The response for an AKS variant.
  * computeType **required** `string` (values: ACI, AKS, AMLCOMPUTE, IOT, AKSENDPOINT, UNKNOWN): The compute environment type for the service.
  * createdTime `string`: The time the service was created.
  * deploymentType `string` (values: GRPCRealtimeEndpoint, HttpRealtimeEndpoint, Batch): The deployment type for the service.
  * description `string`: The service description.
  * error [ModelErrorResponse](#modelerrorresponse)
  * id `string`: The service Id.
  * kvTags `object`: The service tag dictionary. Tags are mutable.
  * name `string`: The service name.
  * operationId `string`: The ID of the latest asynchronous operation for this service.
  * properties `object`: The service property dictionary. Properties are immutable.
  * state `string` (values: Transitioning, Healthy, Unhealthy, Failed): The current state of the service.
  * updatedTime `string`: The time the service was updated.
  * isDefault `boolean`: Is this the default variant.
  * trafficPercentile `number`: The amount of traffic variant receives.
  * type `string` (values: Control, Treatment): The type of the variant.

### ArtifactDetails
* ArtifactDetails `object`
  * id `string`
  * prefix `string`

### Asset
* Asset `object`: The Asset definition.
  * artifacts `array`: A list of child artifacts.
    * items [ArtifactDetails](#artifactdetails)
  * createdTime `string`: The time the Asset was created in UTC.
  * description `string`: The Asset description.
  * id `string`: The Asset Id.
  * kvTags `object`: The Asset tag dictionary. Tags are mutable.
  * meta `object`: A dictionary containing metadata about the Asset.
  * name **required** `string`: The name of the Asset.
  * properties `object`: The Asset property dictionary. Properties are immutable.
  * runid `string`: The RunId associated with this Asset.

### AsyncOperationDetails
* AsyncOperationDetails `object`: The async operation details.
  * subOperationState `string`: The suboperation state.
  * subOperationType `string`: The suboperation type.

### AsyncOperationStatus
* AsyncOperationStatus `object`: The async operation status.
  * createdTime `string`: The async operation creation time (UTC).
  * endTime `string`: The async operation end time (UTC)l
  * error [ModelErrorResponse](#modelerrorresponse)
  * id `string`: The async operation id.
  * operationDetails [AsyncOperationDetails](#asyncoperationdetails)
  * operationLog `string`: The async operation log.
  * operationType `string`: The async operation type.
  * parentRequestId `string`: The request id that created this operation
  * resourceLocation `string`: The resource created/updated by the async operation.
  * state `string` (values: NotStarted, Running, Cancelled, Succeeded, Failed, TimedOut): The async operation state.

### AuthKeys
* AuthKeys `object`
  * primaryKey `string`: The primary key.
  * secondaryKey `string`: The secondary key.

### AuthToken
* AuthToken `object`: Service Token
  * accessToken `string`: Access token.
  * expiryOn `integer`: Access token expiry time (UTC).
  * refreshAfter `integer`: Refresh access token after time (UTC).
  * tokenType `string`: Access token type.

### AutoScaler
* AutoScaler `object`: The Auto Scaler properties.
  * autoscaleEnabled `boolean`: Option to enable/disable auto scaling.
  * maxReplicas `integer`: The maximum number of replicas in the cluster.
  * minReplicas `integer`: The minimum number of replicas to scale down to.
  * refreshPeriodInSeconds `integer`: The amount of seconds to wait between auto scale updates.
  * targetUtilization `integer`: The target utilization percentage to use for determining whether to scale the cluster.

### BatchServiceResponse
* BatchServiceResponse `object`
  * computeType **required** `string` (values: ACI, AKS, AMLCOMPUTE, IOT, AKSENDPOINT, UNKNOWN): The compute environment type for the service.
  * createdTime `string`: The time the service was created.
  * deploymentType `string` (values: GRPCRealtimeEndpoint, HttpRealtimeEndpoint, Batch): The deployment type for the service.
  * description `string`: The service description.
  * error [ModelErrorResponse](#modelerrorresponse)
  * id `string`: The service Id.
  * kvTags `object`: The service tag dictionary. Tags are mutable.
  * name `string`: The service name.
  * operationId `string`: The ID of the latest asynchronous operation for this service.
  * properties `object`: The service property dictionary. Properties are immutable.
  * state `string` (values: Transitioning, Healthy, Unhealthy, Failed): The current state of the service.
  * updatedTime `string`: The time the service was updated.
  * appInsightsEnabled `boolean`
  * computeName `string`
  * entryScript `string`
  * environmentName `string`
  * environmentVersion `string`
  * errorThreshold `number`
  * inputFormat `string`
  * miniBatchSize `integer`
  * modelDataCollection [ModelDataCollection](#modeldatacollection)
  * modelIds `array`
    * items `string`
  * nodeCount `integer`
  * outputAction `string`
  * processCountPerNode `integer`
  * scoringUri `string`

### ContainerRegistry
* ContainerRegistry `object`
  * address `string`
  * password `string`
  * username `string`

### ContainerResourceRequirements
* ContainerResourceRequirements `object`: The resource requirements for the container (cpu and memory).
  * cpu `number`: The number of CPU cores on the container.
  * fpga `integer`: The number of FPGA PCIE devices exposed to the container. Must be multiple of 2.
  * gpu `integer`: The number of GPU cores in the container.
  * memoryInGB `number`: The amount of memory on the container in GB.

### CreateEndpointRequest
* CreateEndpointRequest `object`: The request to create an Endpoint in the AKS.
  * computeType **required** `string` (values: ACI, AKS, AMLCOMPUTE, IOT, AKSENDPOINT, UNKNOWN): The compute environment type for the service.
  * deploymentType `string` (values: GRPCRealtimeEndpoint, HttpRealtimeEndpoint, Batch): The deployment type for the service.
  * description `string`: The description of the service.
  * environmentImageRequest [EnvironmentImageRequest](#environmentimagerequest)
  * imageId `string`: The Image Id.
  * keys [AuthKeys](#authkeys)
  * kvTags `object`: The service tag dictionary. Tags are mutable.
  * location `string`: The location of the service.
  * name **required** `string`: The service name.
  * properties `object`: The service properties dictionary. Properties are immutable.
  * aadAuthEnabled `boolean`: Whether or not AAD authentication is enabled.
  * appInsightsEnabled `boolean`: Whether or not Application Insights is enabled.
  * authEnabled `boolean`: Whether or not authentication is enabled.
  * computeName `string`: The name of the compute resource.
  * namespace `string`: Kubernetes namespace for the service.
  * variants `array`: The service tag list.
    * items [AKSServiceCreateRequest](#aksservicecreaterequest)

### CreateEndpointVariantRequest
* CreateEndpointVariantRequest `object`: The Variant properties.
  * computeType **required** `string` (values: ACI, AKS, AMLCOMPUTE, IOT, AKSENDPOINT, UNKNOWN): The compute environment type for the service.
  * deploymentType `string` (values: GRPCRealtimeEndpoint, HttpRealtimeEndpoint, Batch): The deployment type for the service.
  * description `string`: The description of the service.
  * environmentImageRequest [EnvironmentImageRequest](#environmentimagerequest)
  * imageId `string`: The Image Id.
  * keys [AuthKeys](#authkeys)
  * kvTags `object`: The service tag dictionary. Tags are mutable.
  * location `string`: The location of the service.
  * name **required** `string`: The service name.
  * properties `object`: The service properties dictionary. Properties are immutable.
  * isDefault `boolean`: Is this the default variant.
  * trafficPercentile `number`: The amount of traffic variant receives.
  * type `string` (values: Control, Treatment): The type of the variant.

### CreateIotServiceRequest
* CreateIotServiceRequest `object`
  * computeType **required** `string` (values: ACI, AKS, AMLCOMPUTE, IOT, AKSENDPOINT, UNKNOWN): The compute environment type for the service.
  * deploymentType `string` (values: GRPCRealtimeEndpoint, HttpRealtimeEndpoint, Batch): The deployment type for the service.
  * description `string`: The description of the service.
  * environmentImageRequest [EnvironmentImageRequest](#environmentimagerequest)
  * imageId `string`: The Image Id.
  * keys [AuthKeys](#authkeys)
  * kvTags `object`: The service tag dictionary. Tags are mutable.
  * location `string`: The location of the service.
  * name **required** `string`: The service name.
  * properties `object`: The service properties dictionary. Properties are immutable.
  * acrCredentials `array`
    * items [RegistryInfo](#registryinfo)
  * authEnabled `boolean`
  * computeName `string`
  * iotDeviceId `string`
  * iotEdgeModule [IotBaseModuleSettings](#iotbasemodulesettings)
  * iotEdgeUserModule `array`
    * items [IotModuleSettings](#iotmodulesettings)
  * routes `object`

### CreateServiceRequest
* CreateServiceRequest `object`: The base class for creating a service.
  * computeType **required** `string` (values: ACI, AKS, AMLCOMPUTE, IOT, AKSENDPOINT, UNKNOWN): The compute environment type for the service.
  * deploymentType `string` (values: GRPCRealtimeEndpoint, HttpRealtimeEndpoint, Batch): The deployment type for the service.
  * description `string`: The description of the service.
  * environmentImageRequest [EnvironmentImageRequest](#environmentimagerequest)
  * imageId `string`: The Image Id.
  * keys [AuthKeys](#authkeys)
  * kvTags `object`: The service tag dictionary. Tags are mutable.
  * location `string`: The location of the service.
  * name **required** `string`: The service name.
  * properties `object`: The service properties dictionary. Properties are immutable.

### DatasetReference
* DatasetReference `object`: The dataset reference object.
  * id `string`: The id of the dataset reference.
  * name `string`: The name of the dataset reference.

### DeploymentSummary
* DeploymentSummary `object`: The deployment summary.
  * successfulDeployments `integer`: The number of successful deployments.
  * unsuccessfulDeployments `integer`: The number of unsuccessful deployments.

### DockerImageResponse
* DockerImageResponse `object`
  * autoDelete `boolean`: Whether the image will be automatically deleted with the last service using it.
  * createdTime `string`: The time the image was created.
  * creationState `string` (values: NotStarted, Running, Cancelled, Succeeded, Failed, TimedOut): The state of the operation.
  * description `string`: The image description.
  * error [ModelErrorResponse](#modelerrorresponse)
  * id `string`: The image Id.
  * imageBuildLogUri `string`: The Uri to the image build logs.
  * imageFlavor **required** `string` (values: WebApiContainer, BatchContainer, IoTContainer, AccelContainer, UserProvidedContainer): The flavor of the image.
  * imageLocation `string`: The Image location string.
  * imageType `string` (values: Docker): The type of the image.
  * kvTags `object`: The image tag dictionary. Tags are mutable.
  * modelDetails `array`: The list of models.
    * items [Model](#model)
  * modelIds `array`: The list of model Ids.
    * items `string`
  * modifiedTime `string`: The time the image was last modified.
  * name `string`: The image name.
  * operationId `string`: The ID of the asynchronous operation for this image.
  * properties `object`: The image properties dictionary. Properties are immutable.
  * version `integer`: The image version.
  * assets `array`: The list of assets.
    * items [EnvironmentImageAsset](#environmentimageasset)
  * dockerFileUri `string`: The Uri to the docker file.
  * driverProgram `string`: The name of the driver file.
  * generatedDockerFileUri `string`: The Uri to the generated docker file.
  * targetRuntime [TargetRuntime](#targetruntime)

### EnvironmentImageAsset
* EnvironmentImageAsset `object`: An Image asset.
  * id `string`: The Asset Id.
  * mimeType `string`: The mime type.
  * unpack `boolean`: Whether the Asset is unpacked.
  * url `string`: The Url of the Asset.

### EnvironmentImageRequest
* EnvironmentImageRequest `object`: Request to create a Docker image based on Environment.
  * assets `array`: The list of assets.
    * items [EnvironmentImageAsset](#environmentimageasset)
  * driverProgram `string`: The name of the driver file.
  * environment [ModelEnvironmentDefinition](#modelenvironmentdefinition)
  * modelIds `array`: The list of model Ids.
    * items `string`

### ErrorDetails
* ErrorDetails `object`: The error details.
  * code `string`: The error code.
  * message `string`: The error message.
  * target `string`: The target of the error (e.g., the name of the property in error).

### FPGADockerImageResponse
* FPGADockerImageResponse `object`: The FPGA Docker Image response.
  * autoDelete `boolean`: Whether the image will be automatically deleted with the last service using it.
  * createdTime `string`: The time the image was created.
  * creationState `string` (values: NotStarted, Running, Cancelled, Succeeded, Failed, TimedOut): The state of the operation.
  * description `string`: The image description.
  * error [ModelErrorResponse](#modelerrorresponse)
  * id `string`: The image Id.
  * imageBuildLogUri `string`: The Uri to the image build logs.
  * imageFlavor **required** `string` (values: WebApiContainer, BatchContainer, IoTContainer, AccelContainer, UserProvidedContainer): The flavor of the image.
  * imageLocation `string`: The Image location string.
  * imageType `string` (values: Docker): The type of the image.
  * kvTags `object`: The image tag dictionary. Tags are mutable.
  * modelDetails `array`: The list of models.
    * items [Model](#model)
  * modelIds `array`: The list of model Ids.
    * items `string`
  * modifiedTime `string`: The time the image was last modified.
  * name `string`: The image name.
  * operationId `string`: The ID of the asynchronous operation for this image.
  * properties `object`: The image properties dictionary. Properties are immutable.
  * version `integer`: The image version.

### ImageResponseBase
* ImageResponseBase `object`
  * autoDelete `boolean`: Whether the image will be automatically deleted with the last service using it.
  * createdTime `string`: The time the image was created.
  * creationState `string` (values: NotStarted, Running, Cancelled, Succeeded, Failed, TimedOut): The state of the operation.
  * description `string`: The image description.
  * error [ModelErrorResponse](#modelerrorresponse)
  * id `string`: The image Id.
  * imageBuildLogUri `string`: The Uri to the image build logs.
  * imageFlavor **required** `string` (values: WebApiContainer, BatchContainer, IoTContainer, AccelContainer, UserProvidedContainer): The flavor of the image.
  * imageLocation `string`: The Image location string.
  * imageType `string` (values: Docker): The type of the image.
  * kvTags `object`: The image tag dictionary. Tags are mutable.
  * modelDetails `array`: The list of models.
    * items [Model](#model)
  * modelIds `array`: The list of model Ids.
    * items `string`
  * modifiedTime `string`: The time the image was last modified.
  * name `string`: The image name.
  * operationId `string`: The ID of the asynchronous operation for this image.
  * properties `object`: The image properties dictionary. Properties are immutable.
  * version `integer`: The image version.

### IotBaseModuleSettings
* IotBaseModuleSettings `object`
  * createOptions `string`
  * environmentVariables `object`
  * moduleName `string`
  * propertiesDesired `object`

### IotModuleSettings
* IotModuleSettings `object`
  * createOptions `string`
  * environmentVariables `object`
  * imageLocation `string`
  * moduleName `string`
  * propertiesDesired `object`

### IotServiceResponse
* IotServiceResponse `object`
  * computeType **required** `string` (values: ACI, AKS, AMLCOMPUTE, IOT, AKSENDPOINT, UNKNOWN): The compute environment type for the service.
  * createdTime `string`: The time the service was created.
  * deploymentType `string` (values: GRPCRealtimeEndpoint, HttpRealtimeEndpoint, Batch): The deployment type for the service.
  * description `string`: The service description.
  * error [ModelErrorResponse](#modelerrorresponse)
  * id `string`: The service Id.
  * kvTags `object`: The service tag dictionary. Tags are mutable.
  * name `string`: The service name.
  * operationId `string`: The ID of the latest asynchronous operation for this service.
  * properties `object`: The service property dictionary. Properties are immutable.
  * state `string` (values: Transitioning, Healthy, Unhealthy, Failed): The current state of the service.
  * updatedTime `string`: The time the service was updated.
  * authEnabled `boolean`
  * computeName `string`
  * imageDetails [ImageResponseBase](#imageresponsebase)
  * imageId `string`
  * iotDeviceId `string`
  * iotEdgeModules `array`
    * items [IotModuleSettings](#iotmodulesettings)
  * routes `object`

### JsonPatchOperation
* JsonPatchOperation `object`: The Json Patch definition.
  * from `string`: The source location.
  * op `string`: The operation.
  * path `string`: The target location.
  * value `object`: The value.

### LivenessProbeRequirements
* LivenessProbeRequirements `object`: The liveness probe requirements.
  * failureThreshold `integer`: The number of failures to allow before returning an unhealthy status.
  * initialDelaySeconds `integer`: The delay before the first probe in seconds.
  * periodSeconds `integer`: The length of time between probes in seconds.
  * successThreshold `integer`: The number of successful probes before returning a healthy status.
  * timeoutSeconds `integer`: The probe timeout in seconds.

### Model
* Model `object`: An Azure Machine Learning Model.
  * createdTime `string`: The Model creation time (UTC).
  * datasets `array`: The list of datasets associated with the model.
    * items [DatasetReference](#datasetreference)
  * description `string`: The Model description text.
  * experimentName `string`: The name of the experiment where this model was created.
  * framework `string`: The Model framework.
  * frameworkVersion `string`: The Model framework version.
  * id `string`: The Model Id.
  * kvTags `object`: The Model tag dictionary. Items are mutable.
  * mimeType **required** `string`: The MIME type of Model content. For more details about MIME type, please open https://www.iana.org/assignments/media-types/media-types.xhtml
  * modifiedTime `string`: The Model last modified time (UTC).
  * name **required** `string`: The Model name.
  * parentModelId `string`: The Parent Model Id.
  * properties `object`: The Model property dictionary. Properties are immutable.
  * runId `string`: The RunId that created this model.
  * unpack `boolean`: Indicates whether we need to unpack the Model during docker Image creation.
  * url **required** `string`: The URL of the Model. Usually a SAS URL.
  * version `integer`: The Model version assigned by Model Management Service.

### ModelDataCollection
* ModelDataCollection `object`: The Model data collection properties.
  * eventHubEnabled `boolean`: Option for enabling/disabling Event Hub.
  * storageEnabled `boolean`: Option for enabling/disabling storage.

### ModelDockerSection
* ModelDockerSection `object`
  * arguments `array`: Extra arguments to the Docker run command.
    * items `string`
  * baseDockerfile `string`: Base Dockerfile used for Docker-based runs. Mutually exclusive with BaseImage.
  * baseImage `string`: Base image used for Docker-based runs. Mutually exclusive with BaseDockerfile.
  * baseImageRegistry [ContainerRegistry](#containerregistry)
  * enabled `boolean`: Set True to perform this run inside a Docker container.
  * gpuSupport `boolean`: Run with NVidia Docker extension to support GPUs.
  * sharedVolumes `boolean`: Set False if necessary to work around shared volume bugs on Windows.
  * shmSize `string`: The shared memory size setting for NVidia GPUs.

### ModelEnvironmentDefinition
* ModelEnvironmentDefinition `object`
  * docker [ModelDockerSection](#modeldockersection)
  * environmentVariables `object`: Definition of environment variables to be defined in the environment.
  * inferencingStackVersion `string`: The Inferencing stack version.
  * name `string`: The name of the environment.
  * python [ModelPythonSection](#modelpythonsection)
  * spark [ModelSparkSection](#modelsparksection)
  * version `string`: The environment version.

### ModelErrorResponse
* ModelErrorResponse `object`: The Model Management Service Error object.
  * code `string`: The error code.
  * details `array`: An array of error detail objects.
    * items [ErrorDetails](#errordetails)
  * message `string`: The error message.
  * statusCode `integer`: The HTTP status code.

### ModelOperationalState
* ModelOperationalState `object`: The operational state of the Model.
  * deploymentSummary [DeploymentSummary](#deploymentsummary)
  * endTime `string`: The deployment end time.
  * startTime `string`: The deployment start time.

### ModelPythonSection
* ModelPythonSection `object`
  * baseCondaEnvironment `string`
  * condaDependencies `object`
  * interpreterPath `string`: The python interpreter path. This is only used when user_managed_dependencies=True.
  * userManagedDependencies `boolean`: True means that AzureML reuses an existing python environment; False means that AzureML will create a python environment based on the Conda dependencies specification.

### ModelSparkSection
* ModelSparkSection `object`
  * packages `array`: The Spark packages to use.
    * items [SparkMavenPackage](#sparkmavenpackage)
  * precachePackages `boolean`: Whether to precache the packages.
  * repositories `array`: The list of spark repositories.
    * items `string`

### PaginatedAssetList
* PaginatedAssetList `object`: A paginated list of Assets.
  * nextLink `string`: A continuation link (absolute URI) to the next page of results in the list.
  * value `array`: An array of objects of type Asset.
    * items [Asset](#asset)

### PaginatedModelList
* PaginatedModelList `object`: A paginated list of Models.
  * nextLink `string`: A continuation link (absolute URI) to the next page of results in the list.
  * value `array`: An array of objects of type Model.
    * items [Model](#model)

### PaginatedProfileResponseList
* PaginatedProfileResponseList `object`: A paginated list of ProfileResponses.
  * nextLink `string`: A continuation link (absolute URI) to the next page of results in the list.
  * value `array`: An array of objects of type ProfileResponse.
    * items [ProfileResponse](#profileresponse)

### PaginatedServiceList
* PaginatedServiceList `object`: A paginated list of Services.
  * nextLink `string`: A continuation link (absolute URI) to the next page of results in the list.
  * value `array`: An array of objects of type Service.
    * items [ServiceResponseBase](#serviceresponsebase)

### ProfileRequestBase
* ProfileRequestBase `object`: The request for creating a profile.
  * description `string`: The profile description.
  * inputData `string`: The profile input data.
  * kvTags `object`: The tags dictionary.
  * name **required** `string`: The profile name.
  * properties `object`: The properties dictionary.

### ProfileResponse
* ProfileResponse `object`: The profile response.
  * createdTime `string`: The profile creation time (UTC).
  * description `string`: The profile description.
  * error [ModelErrorResponse](#modelerrorresponse)
  * imageId `string`: The Image Id.
  * inputData `string`: The input data.
  * kvTags `object`: The profile tags dictionary. Tags are mutable.
  * name `string`: The profile name.
  * profileRunResult `string`: The profile run result.
  * profilingErrorLogs `string`: The profiling error logs.
  * properties `object`: The profile properties dictionary. Properties are immutable.
  * recommendationLatencyInMs `number`: Latency associated with the recommended memory/cpu config
  * recommendedCpu `number`: The recommended CPU allocation.
  * recommendedMemoryInGB `number`: The recommended amount of memory to allocate in GB.
  * state `string`: The state of the profile.

### RegenerateServiceKeysRequest
* RegenerateServiceKeysRequest `object`
  * keyType `integer` (values: Primary, Secondary): Specification for which type of key to generate.
  * keyValue `string`: The value the key is set to.

### RegistryInfo
* RegistryInfo `object`: Contains registry information.
  * location **required** `string`: The location.
  * password **required** `string`: The password.
  * user **required** `string`: The user.

### ServiceResponseBase
* ServiceResponseBase `object`: The base service response. The correct inherited response based on computeType will be returned (ex. ACIServiceResponse)
  * computeType **required** `string` (values: ACI, AKS, AMLCOMPUTE, IOT, AKSENDPOINT, UNKNOWN): The compute environment type for the service.
  * createdTime `string`: The time the service was created.
  * deploymentType `string` (values: GRPCRealtimeEndpoint, HttpRealtimeEndpoint, Batch): The deployment type for the service.
  * description `string`: The service description.
  * error [ModelErrorResponse](#modelerrorresponse)
  * id `string`: The service Id.
  * kvTags `object`: The service tag dictionary. Tags are mutable.
  * name `string`: The service name.
  * operationId `string`: The ID of the latest asynchronous operation for this service.
  * properties `object`: The service property dictionary. Properties are immutable.
  * state `string` (values: Transitioning, Healthy, Unhealthy, Failed): The current state of the service.
  * updatedTime `string`: The time the service was updated.

### SparkMavenPackage
* SparkMavenPackage `object`
  * artifact `string`
  * group `string`
  * version `string`

### TargetRuntime
* TargetRuntime `object`: The target runtime.
  * osType `string` (values: Linux, Windows): The target operating system.
  * properties `object`: The properties dictionary.
  * runtimeType `string` (values: SparkPython, Tlc37, Tlc38, Tlc310, Python, PythonSlim, PythonCustom): The target runtime type.
  * targetArchitecture `string` (values: Amd64, Arm32v7): The target architecture.

### UnknownServiceResponse
* UnknownServiceResponse `object`: The response for an unsupported Service
  * computeType **required** `string` (values: ACI, AKS, AMLCOMPUTE, IOT, AKSENDPOINT, UNKNOWN): The compute environment type for the service.
  * createdTime `string`: The time the service was created.
  * deploymentType `string` (values: GRPCRealtimeEndpoint, HttpRealtimeEndpoint, Batch): The deployment type for the service.
  * description `string`: The service description.
  * error [ModelErrorResponse](#modelerrorresponse)
  * id `string`: The service Id.
  * kvTags `object`: The service tag dictionary. Tags are mutable.
  * name `string`: The service name.
  * operationId `string`: The ID of the latest asynchronous operation for this service.
  * properties `object`: The service property dictionary. Properties are immutable.
  * state `string` (values: Transitioning, Healthy, Unhealthy, Failed): The current state of the service.
  * updatedTime `string`: The time the service was updated.


